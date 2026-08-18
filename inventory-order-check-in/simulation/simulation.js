const simulationEvents = [
    {
        officialStep: "1",
        title: "Receive the package",
        objective: "Begin the receiving/check-in process when the shipment arrives.",
        situation: "A shipment for Ticket 192815 arrives through UPS or FedEx.",
        prompt: "What do you do next?",
        options: ["Begin the Ban-Koe receiving/check-in process", "Mark the project Delivered Complete", "Email the customer the signed File Copy", "Skip directly to the Service note"],
        correct: 0,
        explanation: "The receiving/check-in process begins when the package arrives."
    },
    {
        officialStep: "2",
        title: "Locate the Ticket Number",
        objective: "Identify the ticket used to look up the project in Pulse.",
        document: `<div class="simulation-document"><h3>Shipping label</h3><div class="document-row"><span>TICKET</span><strong>192815</strong></div><div class="document-row"><span>Carrier</span><strong>UPS</strong></div></div>`,
        prompt: "Which number should you use to look up the project in Pulse?",
        options: ["192815", "The carrier name", "The part quantity", "The delivery date"],
        correct: 0,
        explanation: "The Ticket Number on the shipping label is used for the Pulse project lookup."
    },
    {
        officialStep: "3",
        title: "Locate and print project documents",
        objective: "Use Pulse Attachments to prepare the physical project folder.",
        situation: "The project is open in Pulse. You need the documents for the receiving check.",
        document: `<div class="simulation-document"><h3>Pulse</h3><div class="document-row"><span>Available location</span><strong>Attachments tab</strong></div><p>Purchase Order(s) · Bill of Materials · Equipment Delivery Slip</p></div>`,
        prompt: "What is the correct next action?",
        options: ["Open Attachments, locate and print the documents, then create the labeled physical folder", "Open Service and mark receiving Complete", "Print only the Purchase Order and skip the folder", "Change Delivered Status for Ticket Parts"],
        correct: 0,
        explanation: "The related Purchase Order(s), Bill of Materials, and Equipment Delivery Slip are located in Attachments, printed, and placed in a physical folder labeled with Project Name and Ticket Number."
    },
    {
        officialStep: "4",
        title: "Open and compare the shipment",
        objective: "Locate the packing slip and verify it against the material physically received.",
        document: `<div class="simulation-document"><h3>ADI Packing Slip</h3><div class="document-row"><span>Part Number</span><strong>N9-BATFIREVZ</strong></div><div class="document-row"><span>Quantity shipped</span><strong>5</strong></div><hr><h3>Physical shipment</h3><div class="document-row"><span>Part Number</span><strong>N9-BATFIREVZ</strong></div><div class="document-row"><span>Quantity present</span><strong>4</strong></div></div>`,
        prompt: "What should you do about this shipment?",
        options: ["Contact OFD about the discrepancy", "Mark all 5 received", "Ignore the difference and continue", "Change the packing slip yourself"],
        correct: 0,
        explanation: "The packing slip quantity and physical quantity do not match. Contact OFD about the discrepancy; do not mark material received when it is not physically present.",
        critical: "Ignoring the packing-slip discrepancy or marking all 5 received would create an incorrect receipt."
    },
    {
        officialStep: "5",
        title: "Label the box",
        objective: "Identify the verified part and quantity on the outside of the box.",
        document: `<div class="simulation-document"><h3>Box label</h3><div class="document-row"><span>Example</span><strong>① N9-BATFIREVZ</strong></div></div>`,
        prompt: "What belongs on the outside of the box after verification?",
        options: ["Part Number + Quantity", "Project Name only", "Carrier name only", "Sales Rep only"],
        correct: 0,
        explanation: "After verifying the contents, write the Part Number and Quantity on the outside of the box."
    },
    {
        officialStep: "6A",
        title: "Check the Bill of Materials",
        objective: "Compare received equipment with the project's material requirements.",
        document: `<div class="simulation-document"><h3>Bill of Materials</h3><div class="document-row"><span>Part Number</span><strong>N9-BATFIREVZ</strong></div><div class="document-row"><span>Required Quantity</span><strong>5</strong></div><div class="document-row"><span>Quantity Received</span><strong>4</strong></div></div>`,
        prompt: "Which comparison belongs in Step 6A?",
        options: ["Part Number → Required Quantity → Quantity Received", "Part Number → Ordered Quantity → Received Quantity on the PO", "Project Name → Ticket Number → Sales Rep", "Attachment Category → File Name → Network Folder"],
        correct: 0,
        explanation: "Step 6A checks the received equipment against the Bill of Materials: Part Number, Required Quantity, and Quantity Received."
    },
    {
        officialStep: "6B",
        title: "Check the Purchase Order",
        objective: "Compare the received equipment with the order quantities.",
        document: `<div class="simulation-document"><h3>Purchase Order</h3><div class="document-row"><span>Part Number</span><strong>N9-BATFIREVZ</strong></div><div class="document-row"><span>Ordered Quantity</span><strong>5</strong></div><div class="document-row"><span>Received Quantity</span><strong>4</strong></div></div>`,
        prompt: "Which comparison belongs in Step 6B?",
        options: ["Part Number → Ordered Quantity → Received Quantity", "Part Number → Required Quantity → Quantity Received on the BOM", "Ticket Number → Sales Rep → Type of System", "Service note → Sales category → File cabinet"],
        correct: 0,
        explanation: "Step 6B checks the Purchase Order: Part Number, Ordered Quantity, and Received Quantity. Place the Packing Slip behind the respective Purchase Order in the physical project folder."
    },
    {
        officialStep: "7",
        title: "Update Pulse",
        objective: "Remove received parts from the unchecked BOM view and update the receiving status.",
        document: `<div class="simulation-document"><h3>Pulse receiving fields</h3><div class="document-row"><span>Bill of Materials Not Checked In</span><strong>Received parts listed</strong></div><div class="document-row"><span>Received Status for Ticket Parts</span><strong>Choose status</strong></div></div>`,
        prompt: "What is the correct order in Pulse?",
        options: ["Remove received parts from Bill of Materials Not Checked In, then update Received Status for Ticket Parts", "Update Delivered Status for Ticket Parts, then remove nothing", "Upload the final PDF, then change the BOM", "Open Service and skip the receiving fields"],
        correct: 0,
        explanation: "First remove received parts from Bill of Materials Not Checked In. Second update Received Status for Ticket Parts."
    },
    {
        officialStep: "7",
        title: "Choose the receiving status",
        objective: "Use the supplied Ban-Koe status definitions without resolving the stated overlap.",
        document: `<div class="simulation-document"><h3>Received Status for Ticket Parts</h3><div class="document-row"><span>None</span><strong>0% received</strong></div><div class="document-row"><span>Partial</span><strong>1–74% received</strong></div><div class="document-row"><span>Substantial</span><strong>74–99% received</strong></div><div class="document-row"><span>Complete</span><strong>100% received</strong></div></div>`,
        prompt: "The current shipment is not 100% received. Which status must not be selected?",
        options: ["Complete", "Partial", "Substantial", "None"],
        correct: 0,
        explanation: "Complete means 100% received. The supplied procedure defines Partial and Substantial as shown, including the stated 74% overlap."
    },
    {
        officialStep: "8",
        title: "Save and file",
        objective: "Save the Pulse receiving update and return the physical documents to the file cabinet.",
        prompt: "What do you do after updating the receiving information?",
        options: ["Click Save, then return the physical documents to the file cabinet", "Leave Pulse without saving", "Mark Delivered Status for Ticket Parts Complete", "Discard the physical folder"],
        correct: 0,
        explanation: "After updating Received Status for Ticket Parts, click Save and return the physical documents to the file cabinet.",
        nonCritical: "Forgetting Save leaves the receiving update incomplete."
    },
    {
        officialStep: "9",
        title: "Stage the equipment",
        objective: "Place the equipment in an area identified by the required staging label.",
        document: `<div class="simulation-document"><h3>Equipment staging label</h3><div class="document-row"><span>Project Name</span><strong>Great River Montessori School</strong></div><div class="document-row"><span>Sales Rep</span><strong>-SD-</strong></div><div class="document-row"><span>Ticket Number</span><strong>192815</strong></div><div class="document-row"><span>Type of System</span><strong>Fire Alarm</strong></div></div>`,
        prompt: "Which set contains all required staging-label fields?",
        options: ["Project Name, Sales Rep, Ticket Number, Type of System", "Carrier, tracking number, weight, delivery date", "Part Number, Quantity, PO total, customer signature", "Ticket Number only"],
        correct: 0,
        explanation: "The staging label identifies Project Name, Sales Rep, Ticket Number, and Type of System."
    },
    {
        officialStep: "10",
        title: "Complete receiving",
        objective: "Continue checking packages until all material for the project has arrived.",
        situation: "All outstanding material for Ticket 192815 has now arrived and has been verified.",
        prompt: "What is the correct condition for receiving completion?",
        options: ["All material has been received and verified", "The first package has arrived", "The equipment has been delivered to the customer", "The customer has signed the File Copy"],
        correct: 0,
        explanation: "Continue checking packages in until the project is received in full."
    },
    {
        officialStep: "10",
        title: "Document completion in Service",
        objective: "Record the receiving completion details in Pulse.",
        document: `<div class="simulation-document"><h3>Pulse Service note</h3><p>Record that all parts have been received, where the parts are located, and what the parts/staging area is labeled.</p></div>`,
        prompt: "What belongs in the receiving-completion note?",
        options: ["All parts received, where the parts are located, and how the parts/staging area is labeled", "Only the carrier name", "Only the Purchase Order total", "Only the customer signature"],
        correct: 0,
        explanation: "Open Service, add the completion note with all parts received, location, and labeling details, save it, and notify the Sales Rep."
    },
    {
        officialStep: "10",
        title: "Notify the Sales Rep",
        objective: "Send the receiving-complete notification after saving the Service note.",
        prompt: "Who should be emailed after all material has been received?",
        options: ["The project's Sales Rep", "The carrier driver", "No one", "Only the customer before delivery"],
        correct: 0,
        explanation: "The procedure requires emailing the project's Sales Rep that all material has been received."
    },
    {
        officialStep: "11",
        title: "Scan the completed receiving documents",
        objective: "Create one PDF from the completed receiving paperwork.",
        document: `<div class="simulation-document"><h3>Documents to scan together</h3><p>Completed Bill of Materials</p><p>Purchase Orders</p><p>All packing slips</p><div class="simulation-callout good">Project Name - Type of System - Complete - Date</div></div>`,
        prompt: "Which documents become the completed receiving PDF?",
        options: ["Completed BOM, Purchase Orders, and all packing slips", "Only the staging label", "Only the Equipment Delivery Slip", "Only the Service note"],
        correct: 0,
        explanation: "Scan the completed Bill of Materials, Purchase Orders, and all packing slips into one PDF."
    },
    {
        officialStep: "11",
        title: "Upload the completed documentation",
        objective: "Store the completed receiving PDF in both required locations.",
        document: `<div class="simulation-document"><h3>Documentation destinations</h3><div class="document-row"><span>Pulse</span><strong>Attachments → Sales</strong></div><div class="document-row"><span>Second location</span><strong>Network Project Folder</strong></div></div>`,
        prompt: "Where must the completed receiving PDF be stored?",
        options: ["Pulse → Attachments → Sales AND the Network Project Folder", "Only the local desktop", "Only the physical project folder", "Only the Purchase Order envelope"],
        correct: 0,
        explanation: "The completed documentation must exist in both Pulse Attachments under Sales and the project Network Project Folder."
    },
    {
        officialStep: "11",
        title: "Keep receiving and delivery statuses distinct",
        objective: "Finish the receiving simulation without inventing a delivery action.",
        prompt: "Which statement is correct?",
        options: ["Received Complete is not Delivered Complete; Delivered Status for Ticket Parts is a separate delivery status", "Received Complete means the customer already received the equipment", "Delivered Status for Ticket Parts should be completed when the first package arrives", "There is no distinction between received and delivered"],
        correct: 0,
        explanation: "The simulation ends with completed receiving documentation. Received Complete does not mean Delivered Complete, and the two Pulse statuses are distinct.",
        critical: "Confusing Received Complete with Delivered Complete is a critical procedure error."
    }
];

let currentEvent = 0;
let attempts = 0;
let correctDecisions = 0;
const criticalErrors = [];
const nonCriticalErrors = [];
const simulationPanel = document.getElementById("simulationPanel");
const eventLabel = document.getElementById("eventLabel");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

function addUnique(list, message) {
    if (message && !list.includes(message)) list.push(message);
}

function shuffleOptions(options) {
    const shuffled = options.map((option, originalIndex) => ({ option, originalIndex }));
    for (let index = shuffled.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
}

function renderEvent() {
    const event = simulationEvents[currentEvent];
    const shuffledOptions = shuffleOptions(event.options);
    const percent = Math.round((currentEvent / simulationEvents.length) * 100);
    eventLabel.textContent = `Decision ${currentEvent + 1} of ${simulationEvents.length}`;
    progressPercent.textContent = `${percent}%`;
    progressFill.style.width = `${percent}%`;
    simulationPanel.innerHTML = `<div class="simulation-step-heading"><div><p class="eyebrow">Procedure Step ${event.officialStep}</p><h2>${event.title}</h2><p>${event.objective}</p></div><span class="badge">Ticket 192815</span></div><div class="simulation-layout"><div class="simulation-copy"><p><strong>Current situation</strong></p><p>${event.situation || event.prompt}</p>${event.document || ""}</div><div class="simulation-copy"><p><strong>What do you do?</strong></p><div class="simulation-options">${shuffledOptions.map(({ option, originalIndex }) => `<button type="button" class="simulation-option" data-option="${originalIndex}">${option}</button>`).join("")}</div><div class="simulation-feedback" aria-live="polite"></div></div></div>`;
    simulationPanel.querySelectorAll(".simulation-option").forEach(button => button.addEventListener("click", () => chooseOption(button, event)));
}

function chooseOption(button, event) {
    const selected = Number(button.dataset.option);
    attempts++;
    simulationPanel.querySelectorAll(".simulation-option").forEach(option => option.classList.remove("correct", "incorrect"));
    button.classList.add(selected === event.correct ? "correct" : "incorrect");
    const feedback = simulationPanel.querySelector(".simulation-feedback");
    if (selected !== event.correct) {
        if (event.critical) addUnique(criticalErrors, event.critical);
        else addUnique(nonCriticalErrors, event.nonCritical || `Review the procedure for: ${event.title}.`);
        feedback.innerHTML = `<div class="simulation-callout ${event.critical ? "critical" : ""}">${event.critical || "That action does not follow the Ban-Koe procedure."}</div><p>${event.explanation}</p><button type="button" class="btn btn-secondary simulation-retry">Try this decision again</button>`;
        feedback.querySelector(".simulation-retry").addEventListener("click", () => renderEvent());
        return;
    }
    correctDecisions++;
    feedback.innerHTML = `<div class="simulation-callout good">Correct decision.</div><p>${event.explanation}</p><button type="button" class="btn btn-primary simulation-next">Continue →</button>`;
    feedback.querySelector(".simulation-next").addEventListener("click", () => {
        currentEvent++;
        if (currentEvent >= simulationEvents.length) renderResults();
        else renderEvent();
    });
}

function renderResults() {
    const accuracy = attempts > 0 ? Math.round((correctDecisions / attempts) * 100) : 0;
    eventLabel.textContent = "Complete";
    progressPercent.textContent = "100%";
    progressFill.style.width = "100%";
    simulationPanel.innerHTML = `<div class="simulation-results"><div class="simulation-step-heading"><div><p class="eyebrow">Results</p><h2>Order Check-In Simulation Complete</h2><p>Ticket 192815 receiving decisions are complete.</p></div><span class="badge">Procedure complete</span></div><div class="simulation-result-grid"><article class="simulation-result-card"><span>Decisions completed</span><strong>${simulationEvents.length}</strong></article><article class="simulation-result-card"><span>Correct decisions</span><strong>${correctDecisions}</strong></article><article class="simulation-result-card"><span>Accuracy</span><strong>${accuracy}%</strong></article><article class="simulation-result-card"><span>Critical errors</span><strong>${criticalErrors.length}</strong></article></div><div class="simulation-callout ${criticalErrors.length ? "critical" : "good"}"><strong>${criticalErrors.length ? "Review critical procedure errors" : "Procedure control held"}</strong><br>${criticalErrors.length ? "Critical errors are listed below. Review the correct action before repeating the simulation." : "The receiving workflow was completed with no critical procedure errors."}</div>${renderErrorList("Critical procedure errors", criticalErrors, "No critical errors recorded.")}${renderErrorList("Non-critical errors", nonCriticalErrors, "No non-critical errors recorded.")}<div class="simulation-actions"><a class="btn btn-secondary" href="../index.html">Back to Inventory &amp; Order Check-In</a><button type="button" class="btn btn-primary" id="restartSimulation">Run Again</button></div></div>`;
    document.getElementById("restartSimulation").addEventListener("click", restartSimulation);
}

function renderErrorList(title, errors, emptyMessage) {
    return `<section><h3>${title}</h3>${errors.length ? `<ul class="simulation-error-list">${errors.map(error => `<li>${error}</li>`).join("")}</ul>` : `<p>${emptyMessage}</p>`}</section>`;
}

function restartSimulation() {
    currentEvent = 0;
    attempts = 0;
    correctDecisions = 0;
    criticalErrors.length = 0;
    nonCriticalErrors.length = 0;
    renderEvent();
}

renderEvent();
