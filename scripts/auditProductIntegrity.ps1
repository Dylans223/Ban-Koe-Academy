param(
    [string]$DataRoot = (Join-Path $PSScriptRoot "..\data")
)

$trackedParts = @(
    "SIGA-CT1",
    "SIGA-CT2",
    "SIGA-CC1",
    "SIGA-CC2",
    "SIGA-HPR",
    "SIGA-CRH",
    "SIGA-UM2",
    "SIGA-UM",
    "SIGA-CC1S"
)

$files = Get-ChildItem -Path $DataRoot -Recurse -File | Where-Object { $_.Extension -in @(".js", ".json") }
$occurrences = foreach ($file in $files) {
    $lineNumber = 0
    foreach ($line in Get-Content $file.FullName) {
        $lineNumber++
        foreach ($part in $trackedParts) {
            if ($line -match [regex]::Escape($part)) {
                [pscustomobject]@{
                    Part = $part
                    File = $file.FullName
                    Line = $lineNumber
                    Text = $line.Trim()
                }
            }
        }
    }
}

$occurrences | Sort-Object Part, File, Line | Format-Table -AutoSize

Write-Output "`nDuplicate part-number records in product index files:"
$indexFiles = $files | Where-Object { $_.Name -in @("products.js", "index.js") }
$recordLines = foreach ($file in $indexFiles) {
    $lineNumber = 0
    foreach ($line in Get-Content $file.FullName) {
        $lineNumber++
        foreach ($part in $trackedParts) {
            $modelPattern = 'model:\s*"[^"]*' + [regex]::Escape($part)
            if ($line -match $modelPattern) {
                [pscustomobject]@{ Part = $part; File = $file.FullName; Line = $lineNumber; Text = $line.Trim() }
            }
        }
    }
}
$recordLines | Group-Object Part | Where-Object Count -gt 1 | ForEach-Object {
    $_.Group | Format-Table -AutoSize
}

Write-Output "`nUnverified tracked products:"
$productRecords = foreach ($file in $indexFiles) {
    $text = Get-Content -Raw $file.FullName
    [regex]::Matches($text, '(?ms)\{\s*id:.*?(?=\n\s*\},)') | ForEach-Object {
        [pscustomobject]@{ File = $file.FullName; Text = $_.Value }
    }
}
$unverified = foreach ($file in $indexFiles) {
    foreach ($record in $productRecords | Where-Object File -eq $file.FullName) {
        foreach ($part in $trackedParts) {
            $partPattern = 'model:\s*"[^"]*' + [regex]::Escape($part) + '[^"]*"'
            if ($record.Text -match $partPattern -and $record.Text -match 'verification:\s*"(UNVERIFIED[^"]*)"') {
                [pscustomobject]@{ Part = $part; File = $file.FullName; Verification = $Matches[1] }
            }
        }
    }
}
$unverified | Format-Table -AutoSize

Write-Output "`nSIGA part numbers in question files without a verified master record:"
$verifiedMasterText = ($productRecords | Where-Object { $_.Text -match 'verification:\s*"VERIFIED"' } | ForEach-Object { $_.Text }) -join "`n"
$questionFiles = $files | Where-Object { $_.Name -match "Questions|questions|module[12]\.js|finalBossQuestions\.js" }
$questionPartOccurrences = foreach ($file in $questionFiles) {
    $lineNumber = 0
    foreach ($line in Get-Content $file.FullName) {
        $lineNumber++
        foreach ($match in [regex]::Matches($line, 'SIGA-[A-Z0-9]+')) {
            $part = $match.Value
            $hasVerifiedRecord = $verifiedMasterText -match ('model:\s*"[^"]*' + [regex]::Escape($part) + '[^"]*"(?s:.*?)verification:\s*"VERIFIED"')
            if (-not $hasVerifiedRecord) {
                [pscustomobject]@{ Part = $part; File = $file.FullName; Line = $lineNumber; Text = $line.Trim() }
            }
        }
    }
}
$questionPartOccurrences | Sort-Object Part, File, Line | Format-Table -AutoSize

Write-Output "`nQuestion files containing unverified training parts:"
foreach ($file in $questionFiles) {
    $text = Get-Content -Raw $file.FullName
    foreach ($part in @("SIGA-HPR", "SIGA-UM2", "SIGA-CC1S")) {
        if ($text -match [regex]::Escape($part)) {
            Write-Output ("$part -> $($file.FullName)")
        }
    }
}
