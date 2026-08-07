from pathlib import Path

path = Path(r"c:\Users\dschmitt\Documents\Ban-Koe Academy\data\products.js")
text = path.read_text(encoding="utf-8")

start = text.index("products:[")
array_open = text.index("[", start)
array_close = None

# Find matching closing bracket for the products array.
depth = 0
in_string = None
escaped = False
in_line_comment = False
in_block_comment = False

i = array_open
while i < len(text):
    ch = text[i]
    nxt = text[i + 1] if i + 1 < len(text) else ""

    if in_line_comment:
        if ch == "\n":
            in_line_comment = False
        i += 1
        continue

    if in_block_comment:
        if ch == "*" and nxt == "/":
            in_block_comment = False
            i += 2
            continue
        i += 1
        continue

    if in_string is not None:
        if escaped:
            escaped = False
        elif ch == "\\":
            escaped = True
        elif ch == in_string:
            in_string = None
        i += 1
        continue

    if ch == "/" and nxt == "/":
        in_line_comment = True
        i += 2
        continue

    if ch == "/" and nxt == "*":
        in_block_comment = True
        i += 2
        continue

    if ch in ('"', "'"):
        in_string = ch
        i += 1
        continue

    if ch == "[":
        depth += 1
    elif ch == "]":
        depth -= 1
        if depth == 0:
            array_close = i
            break

    i += 1

if array_close is None:
    raise SystemExit("Could not find end of products array")

progress_block = '''\n\nprogress:{\n\nviewed:false,\n\nmastered:false,\n\nfavorite:false,\n\ntimesViewed:0,\n\ntimesStudied:0,\n\ntimesQuizzed:0,\n\ncorrectAnswers:0,\n\nincorrectAnswers:0,\n\nlastViewed:null\n\n}'''

out = []
cursor = array_open + 1

i = cursor
while i < array_close:
    ch = text[i]
    nxt = text[i + 1] if i + 1 < len(text) else ""

    if in_line_comment:
        if ch == "\n":
            in_line_comment = False
        i += 1
        continue

    if in_block_comment:
        if ch == "*" and nxt == "/":
            in_block_comment = False
            i += 2
            continue
        i += 1
        continue

    if in_string is not None:
        if escaped:
            escaped = False
        elif ch == "\\":
            escaped = True
        elif ch == in_string:
            in_string = None
        i += 1
        continue

    if ch == "/" and nxt == "/":
        in_line_comment = True
        i += 2
        continue

    if ch == "/" and nxt == "*":
        in_block_comment = True
        i += 2
        continue

    if ch in ('"', "'"):
        in_string = ch
        i += 1
        continue

    if ch == "{":
        obj_start = i
        brace_depth = 0
        j = i
        while j < array_close:
            c2 = text[j]
            n2 = text[j + 1] if j + 1 < len(text) else ""

            if in_line_comment:
                if c2 == "\n":
                    in_line_comment = False
                j += 1
                continue

            if in_block_comment:
                if c2 == "*" and n2 == "/":
                    in_block_comment = False
                    j += 2
                    continue
                j += 1
                continue

            if in_string is not None:
                if escaped:
                    escaped = False
                elif c2 == "\\":
                    escaped = True
                elif c2 == in_string:
                    in_string = None
                j += 1
                continue

            if c2 == "/" and n2 == "/":
                in_line_comment = True
                j += 2
                continue

            if c2 == "/" and n2 == "*":
                in_block_comment = True
                j += 2
                continue

            if c2 in ('"', "'"):
                in_string = c2
                j += 1
                continue

            if c2 == "{":
                brace_depth += 1
            elif c2 == "}":
                brace_depth -= 1
                if brace_depth == 0:
                    obj_end = j
                    break
            j += 1

        obj_text = text[obj_start:obj_end + 1]
        if "progress:" not in obj_text:
            obj_text = obj_text[:-1].rstrip() + "," + progress_block + "\n}"
        out.append(text[cursor:i])
        out.append(obj_text)
        cursor = obj_end + 1
        i = cursor
        continue

    i += 1

out.append(text[cursor:array_close + 1])
new_text = text[:array_open + 1] + "".join(out) + text[array_close + 1:]
path.write_text(new_text, encoding="utf-8")
