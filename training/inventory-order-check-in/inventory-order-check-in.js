const steps = [
    {
        label: "Introduction",
        title: "Inventory & Order Check-In",
        objective: "Follow the complete Ban-Koe receiving workflow from arrival through delivery.",
        body: `<p>This training covers the Ban-Koe process for receiving equipment, verifying shipments, checking material into Pulse, staging equipment, completing receiving documentation, and preparing equipment for delivery.</p><div class="checkin-callout good"><strong>Workflow</strong><br>Receive → Identify → Verify → Check In → Stage → Complete → Document → Deliver</div>`,
        visual: null,
        check: { question: "What is the purpose of this training?", options: ["To follow the Ban-Koe equipment receiving and delivery process", "To replace the project Purchase Order", "To create a new product catalog"], correct: 0 }
    },
    {
        label: "Receive",
        title: "Receive the Package",
        objective: "Begin the receiving/check-in process when the package arrives.",
        body: `<p>Receive the package through UPS, FedEx, or the carrier delivering the equipment. Begin the receiving/check-in process when the package arrives.</p>`,
        visual: null
    },
    {
        label: "Identify",
        title: "Locate the Ticket Number",
        objective: "Use the shipping label to find the ticket number for Pulse lookup.",
        body: `<p>Locate the <strong>Ticket Number</strong> on the shipping label. Use the ticket number to look up the project in Pulse.</p><div class="checkin-callout"><strong>Example from the supplied shipping label</strong><br>TICKET: 192815</div>`,
        visual: "Step 2 shipping-label photo",
        imagePath: "images/step-02-ticket-number.png",
        check: { question: "Looking at the shipping label example, what ticket number should be used to look up the project in Pulse?", options: ["192815", "192851", "1928150"], correct: 0 }
    },
    {
        label: "Print",
        title: "Find and Print Project Documents",
        objective: "Print the project documents and create the physical project folder.",
        body: `<ol><li>Open the project in Pulse.</li><li>Go to the <strong>Attachments</strong> tab.</li><li>Locate the related <strong>Purchase Order(s)</strong>, <strong>Bill of Materials</strong>, and <strong>Equipment Delivery Slip</strong>.</li><li>Print the documents.</li><li>Create a physical folder and label it with the <strong>Project Name</strong> and <strong>Ticket Number</strong>.</li><li>Place the printed documents into the physical folder.</li></ol>`,
        visual: "Step 3 Pulse Attachments screenshot",
        imagePath: "images/step-03-pulse-attachments.png"
    },
    {
        label: "Verify",
        title: "Verify the Packing Slip",
        objective: "Compare the packing slip with the material physically received.",
        body: `<ol><li>Open the received package.</li><li>Locate the packing slip.</li><li>Compare the packing slip against the material physically received.</li></ol><div class="checkin-callout good"><strong>Verify in this order</strong><br>Quantity → Item Number → Item Description → Actual Material</div><div class="checkin-callout"><strong>Discrepancy?</strong><br>Contact OFD about the discrepancy.</div>`,
        visual: "Step 4 packing-slip photo",
        imagePath: "images/step-04-packing-slip.jpeg",
        check: { question: "The packing slip says 5 units were shipped, but only 4 are physically in the box. What should you do?", options: ["Contact OFD about the discrepancy", "Ignore the difference", "Simply change the packing slip"], correct: 0 }
    },
    {
        label: "Label",
        title: "Label the Box",
        objective: "Identify verified equipment on the outside of the box.",
        body: `<p>After verifying the contents, write the <strong>Part Number + Quantity</strong> on the outside of the box.</p><div class="checkin-callout good"><strong>Supplied example</strong><br>① N9-BATFIREVZ</div><p>This identifies the quantity and part number of the equipment inside.</p>`,
        visual: "Step 5 box-label photo",
        imagePath: "images/step-05-box-label.jpeg",
        check: { question: "What information should be written on the outside of the box after the contents have been verified?", options: ["Part number and quantity", "Project name only", "Carrier name and delivery time"], correct: 0 }
    },
    {
        label: "Check BOM",
        title: "Check the Bill of Materials",
        objective: "Compare received equipment against the project's material requirements.",
        body: `<p>Compare the received equipment against the <strong>Bill of Materials</strong>.</p><div class="checkin-callout good"><strong>Check</strong><br>Part Number → Required Quantity → Quantity Received</div><p>Mark the received material appropriately on the BOM. This step checks the project's material requirements.</p>`,
        visual: "Step 6A Bill of Materials screenshot",
        imagePath: "images/step-06a-bom.png",
        check: { question: "When the received equipment is checked against the Bill of Materials, what is being confirmed?", options: ["Project material requirements on the Bill of Materials", "The final delivery signature", "The carrier tracking number"], correct: 0 }
    },
    {
        label: "Check PO",
        title: "Check the Purchase Order",
        objective: "Compare received equipment against the Purchase Order as a separate check.",
        body: `<p>Compare the received equipment against the <strong>Purchase Order</strong>.</p><div class="checkin-callout good"><strong>Check</strong><br>Part Number → Ordered Quantity → Received Quantity</div><p><strong>Step 6A = Bill of Materials</strong><br><strong>Step 6B = Purchase Order</strong></p><p>Both need to be checked. After checking the PO, place the Packing Slip in the physical project folder behind the respective Purchase Order.</p>`,
        visual: "Step 6B Purchase Order screenshot",
        imagePath: "images/step-06b-purchase-order.png",
        check: { question: "Where should the Packing Slip go after the PO is checked?", options: ["In the physical project folder behind the respective Purchase Order", "Back in the shipping box", "In a new unrelated folder"], correct: 0 }
    },
    {
        label: "Update Pulse",
        title: "Update Pulse",
        objective: "Remove received parts from the unchecked BOM view and update the ticket-part status.",
        body: `<p><strong>First:</strong> Remove the received parts from <strong>Bill of Materials Not Checked In</strong>.</p><p><strong>Second:</strong> Update <strong>Received Status for Ticket Parts</strong>.</p><div class="checkin-callout good"><strong>Status definitions</strong><br>None — 0% received<br>Partial — 1–74% received<br>Substantial — 74–99% received<br>Complete — 100% received</div><p class="small-note">The supplied Ban-Koe procedure uses these definitions exactly, including the stated 74% overlap.</p>`,
        visual: "Step 7 Pulse receiving-fields screenshot",
        imagePath: "images/step-07-pulse-receiving-status.png",
        check: { question: "Which Pulse field is updated after received parts are removed from Bill of Materials Not Checked In?", options: ["Received Status for Ticket Parts", "Delivered Status for Ticket Parts", "Attachment Category"], correct: 0 }
    },
    {
        label: "Save & File",
        title: "Save & File",
        objective: "Save the Pulse update, then return the physical documents to the file cabinet.",
        body: `<p>After removing received parts and updating <strong>Received Status for Ticket Parts</strong>, click <strong>Save</strong>.</p><p>Then return the physical documents to the file cabinet.</p>`,
        visual: "Step 8 Pulse Save screenshot",
        imagePath: "images/step-08-pulse-save.png",
        check: { question: "What should you do after updating the receiving information in Pulse?", options: ["Click Save, then return the physical documents to the file cabinet", "Close Pulse without saving", "Deliver the equipment immediately"], correct: 0 }
    },
    {
        label: "Stage",
        title: "Stage the Equipment",
        objective: "Keep the equipment associated with a clearly labeled staging area.",
        body: `<p>Find an appropriate area to stage the equipment. The staging label must include:</p><ul><li>Project Name</li><li>Sales Rep</li><li>Ticket Number</li><li>Type of System</li></ul><div class="checkin-callout good"><strong>Supplied example</strong><br>Great River Montessori School<br>-SD-<br>192815<br>Fire Alarm</div><p>Keep the equipment associated with this clearly labeled staging area.</p>`,
        visual: "Step 9 staging-label photo",
        imagePath: "images/step-09-staging-label.png",
        check: { question: "Which information belongs on the staging label?", options: ["Project Name, Sales Rep, Ticket Number, and Type of System", "Only the carrier name", "Only the item number"], correct: 0 }
    },
    {
        label: "Complete",
        title: "Complete Receiving",
        objective: "Finish receiving in Pulse only after all project material has arrived.",
        body: `<p>Continue checking packages in until the project is <strong>received in full</strong>.</p><ol><li>Once all material has been received, open the <strong>Service</strong> tab in Pulse.</li><li>Add a note stating that all parts have been received, where the parts are located, and what the parts/staging area is labeled.</li><li>Save the note.</li><li>Email the project's Sales Rep that all material has been received.</li></ol><div class="checkin-callout"><strong>Important</strong><br>Received Complete does <strong>NOT</strong> mean Delivered Complete. The equipment is still staged at Ban-Koe at this point.</div>`,
        visual: "Step 10 Pulse Service screenshot",
        imagePath: "images/step-10-pulse-service.png",
        check: { question: "What is true after the project is marked Received Complete?", options: ["The equipment is still staged at Ban-Koe; it is not Delivered Complete", "The customer has already signed the delivery file copy", "Delivered Status for Ticket Parts is automatically Complete"], correct: 0 }
    },
    {
        label: "Document",
        title: "Final Receiving Documentation",
        objective: "Create one complete PDF and store it in both required locations.",
        body: `<p>Once the project is received in full, scan the completed Bill of Materials, Purchase Orders, and all packing slips. Create one PDF.</p><div class="checkin-callout good"><strong>File name example</strong><br>Great River Montessori School - Fire Alarm - Complete - 6-26-25.pdf</div><p>In Pulse, go to <strong>Attachments</strong>, set <strong>Attachment Category → Sales</strong>, attach the completed PDF, and save.</p><p>Also create or find the project folder on the network and upload the completed documentation there.</p><div class="checkin-callout"><strong>Both locations are required</strong><br>Pulse → Attachments → Sales<br>AND<br>Network Project Folder</div>`,
        visual: "Step 11 Pulse Attachments screenshot",
        imagePath: "images/step-11-pulse-attachments.png",
        check: { question: "Where must the completed receiving PDF exist?", options: ["Pulse Attachments under Sales and the Network Project Folder", "Only on the local desktop", "Only inside the physical project folder"], correct: 0 }
    },
    {
        label: "Complete",
        title: "Inventory & Order Check-In Complete",
        objective: "Review the complete Ban-Koe receiving and documentation workflow.",
        body: `<p>You have worked through the Ban-Koe receiving and documentation process:</p><div class="checkin-callout good"><strong>Receive</strong> → <strong>Find Ticket</strong> → <strong>Print Documents</strong> → <strong>Verify Packing Slip</strong> → <strong>Label Equipment</strong> → <strong>Check BOM</strong> → <strong>Check PO</strong> → <strong>Update Pulse</strong> → <strong>Save</strong> → <strong>Stage Equipment</strong> → <strong>Complete Receiving</strong> → <strong>Finalize Documentation</strong></div><p>Final knowledge check: Where must the completed receiving PDF exist?</p><a class="btn btn-secondary" href="../../quiz/index.html">Open Quiz Center</a>`,
        visual: null,
        check: { question: "Where must the completed receiving PDF exist?", options: ["Pulse Attachments under Sales and the Network Project Folder", "Only on the local desktop", "Only inside the physical project folder"], correct: 0 }
    }
];

let currentStep = 0;
const displayLabels = ["", "1", "2", "3", "4", "5", "6A", "6B", "7", "8", "9", "10", "11", "Complete"];
const lessonPanel = document.getElementById("lessonPanel");
const stepList = document.getElementById("stepList");
const stepLabel = document.getElementById("stepLabel");
const stepIndicator = document.getElementById("stepIndicator");
const progressFill = document.getElementById("progressFill");
const progressValue = document.getElementById("progressValue");
const navigationStatus = document.getElementById("navigationStatus");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

function renderStepList() {
    stepList.innerHTML = steps.slice(1, 13).map((step, index) => {
        const stepNumber = index + 1;
        const state = currentStep === stepNumber ? "active" : currentStep > stepNumber ? "complete" : "";
        return `<li class="${state}" data-step="${displayLabels[stepNumber]}">${displayLabels[stepNumber]}. ${step.title}</li>`;
    }).join("");
}

function renderVisual(step) {
    if (!step.visual) return "";
    if (step.imagePath) {
        return `<figure class="checkin-figure"><a class="checkin-image-link" href="${step.imagePath}" target="_blank" rel="noopener noreferrer"><img src="${step.imagePath}" alt="${step.visual}"></a><figcaption>${step.visual} — click or tap to enlarge</figcaption></figure>`;
    }
    return `<div class="visual-placeholder" role="img" aria-label="${step.visual} placeholder"><div><strong>${step.visual}</strong><span>The supplied image is not present in this workspace yet.</span><code>${step.imageName}</code></div></div>`;
}

// Keeps the displayed order linked to the source index so the correct answer follows the shuffle.
function shuffleOptions(options) {
    const shuffled = options.map((option, originalIndex) => ({ option, originalIndex }));
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function renderCheck(check) {
    if (!check) return "";
    const shuffled = shuffleOptions(check.options);
    return `<section class="checkin-check"><h3>Knowledge check</h3><p>${check.question}</p><div class="checkin-options">${shuffled.map(({ option, originalIndex }) => `<button type="button" class="checkin-option" data-answer-index="${originalIndex}">${option}</button>`).join("")}</div><div class="checkin-feedback" aria-live="polite"></div></section>`;
}

function renderStep() {
    const step = steps[currentStep];
    const isIntro = currentStep === 0;
    const isComplete = currentStep === steps.length - 1;
    const displayedStep = displayLabels[currentStep];
    const progressIndex = currentStep <= 6 ? currentStep : currentStep - 1;
    const progress = isIntro ? 0 : Math.round((Math.min(progressIndex, 11) / 11) * 100);
    stepLabel.textContent = step.label;
    stepIndicator.textContent = isIntro ? "Start" : isComplete ? "Complete" : `Step ${displayedStep} of 11`;
    progressFill.style.width = `${progress}%`;
    progressValue.textContent = `${progress}%`;
    navigationStatus.textContent = step.title;
    previousButton.disabled = currentStep === 0;
    nextButton.textContent = currentStep === 0 ? "Begin Step 1 →" : isComplete ? "Back to Training" : "Next Step →";
    renderStepList();
    lessonPanel.innerHTML = `<div class="lesson-heading"><div><p class="eyebrow">${isIntro ? "Introduction" : isComplete ? "Complete" : `Step ${displayedStep}`}</p><h2>${step.title}</h2></div><span class="badge">${step.objective}</span></div><div class="lesson-grid"><div class="lesson-copy">${step.body}</div>${renderVisual(step)}</div>${renderCheck(step.check)}`;
    lessonPanel.querySelectorAll(".checkin-option").forEach((button) => button.addEventListener("click", () => handleCheck(button, step.check)));
}

function handleCheck(button, check) {
    const selected = Number(button.dataset.answerIndex);
    const buttons = lessonPanel.querySelectorAll(".checkin-option");
    buttons.forEach((option) => option.classList.remove("correct", "incorrect"));
    button.classList.add(selected === check.correct ? "correct" : "incorrect");
    lessonPanel.querySelector(".checkin-feedback").textContent = selected === check.correct ? "Correct." : "Review the step and try again.";
}

previousButton.addEventListener("click", () => { if (currentStep > 0) { currentStep--; renderStep(); } });
nextButton.addEventListener("click", () => { if (currentStep < steps.length - 1) { currentStep++; renderStep(); } else { window.location.href = "../index.html"; } });
renderStep();
