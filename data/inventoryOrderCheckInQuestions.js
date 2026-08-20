const inventoryOrderCheckInQuestions = [
    {
        id: "oci_001",
        category: "InventoryOrderCheckIn",
        difficulty: "Easy",
        product: "",
        question: "A package arrives through UPS or FedEx. What should begin?",
        answers: [
            "The receiving/check-in process",
            "The delivery-complete update",
            "The customer signature process",
            "The final network-folder upload"
        ],
        correct: 0,
        explanation: "The Ban-Koe receiving/check-in process begins when the package arrives."
    },
    {
        id: "oci_002",
        category: "InventoryOrderCheckIn",
        difficulty: "Easy",
        product: "",
        question: "A shipping label shows TICKET: 192815. What number should be used to look up the project in Pulse?",
        answers: ["192815", "192851", "1928150", "The carrier tracking number"],
        correct: 0,
        explanation: "The Ticket Number on the shipping label is used to look up the project in Pulse."
    },
    {
        id: "oci_003",
        category: "InventoryOrderCheckIn",
        difficulty: "Medium",
        product: "",
        question: "After opening the project in Pulse, where should the related project documents be located?",
        answers: ["The Attachments tab", "The Service tab only", "The Delivered Status field", "The carrier website"],
        correct: 0,
        explanation: "The Purchase Order(s), Bill of Materials, and Equipment Delivery Slip are located in the Attachments tab."
    },
    {
        id: "oci_004",
        category: "InventoryOrderCheckIn",
        difficulty: "Medium",
        product: "",
        question: "Which documents should be printed and placed in the physical project folder?",
        answers: [
            "Purchase Order(s), Bill of Materials, and Equipment Delivery Slip",
            "Only the carrier tracking page",
            "Only the final signed File Copy",
            "Only the staging label"
        ],
        correct: 0,
        explanation: "The receiving procedure calls for printing the related Purchase Order(s), Bill of Materials, and Equipment Delivery Slip."
    },
    {
        id: "oci_005",
        category: "InventoryOrderCheckIn",
        difficulty: "Easy",
        product: "",
        question: "How should the physical project folder be labeled?",
        answers: [
            "Project Name and Ticket Number",
            "Carrier name and tracking number",
            "Sales Rep only",
            "Part Number and Quantity only"
        ],
        correct: 0,
        explanation: "The physical folder is labeled with the Project Name and Ticket Number."
    },
    {
        id: "oci_006",
        category: "InventoryOrderCheckIn",
        difficulty: "Medium",
        product: "",
        question: "Which sequence is used when comparing a packing slip with the material received?",
        answers: [
            "Quantity → Item Number → Item Description → Actual Material",
            "Actual Material → Sales Rep → Ticket Number → Quantity",
            "Item Description → Network Folder → Quantity → Service tab",
            "Ticket Number → Delivery Status → Item Number → Sales category"
        ],
        correct: 0,
        explanation: "The packing-slip check verifies Quantity, Item Number, Item Description, and Actual Material in that order."
    },
    {
        id: "oci_007",
        category: "InventoryOrderCheckIn",
        difficulty: "Hard",
        product: "",
        question: "The packing slip says 5 units were shipped, but only 4 are physically in the box. What should you do?",
        answers: [
            "Contact OFD about the discrepancy",
            "Ignore the difference and continue",
            "Change the packing slip yourself",
            "Mark the project Delivered Complete"
        ],
        correct: 0,
        explanation: "A discrepancy between the packing slip and the received material must be reported to OFD."
    },
    {
        id: "oci_008",
        category: "InventoryOrderCheckIn",
        difficulty: "Easy",
        product: "",
        question: "After the box contents are verified, what should be written on the outside of the box?",
        answers: [
            "Part Number + Quantity",
            "Project Name only",
            "Carrier name only",
            "Sales Rep and delivery date only"
        ],
        correct: 0,
        explanation: "The box is labeled with the Part Number and Quantity after the contents are verified."
    },
    {
        id: "oci_009",
        category: "InventoryOrderCheckIn",
        difficulty: "Medium",
        product: "",
        question: "When the received equipment is checked against the Bill of Materials, what should be compared?",
        answers: [
            "Part Number → Required Quantity → Quantity Received on the Bill of Materials",
            "Part Number → Ordered Quantity → Received Quantity on the Purchase Order",
            "Ticket Number → Sales Rep → Type of System on the staging label",
            "Attachment Category → File Name → Network Folder"
        ],
        correct: 0,
        explanation: "The Bill of Materials check compares the received equipment against the project's material requirements: Part Number, Required Quantity, and Quantity Received."
    },
    {
        id: "oci_010",
        category: "InventoryOrderCheckIn",
        difficulty: "Medium",
        product: "",
        question: "When the received equipment is checked against the Purchase Order, what should be compared?",
        answers: [
            "Part Number → Ordered Quantity → Received Quantity on the Purchase Order",
            "Part Number → Required Quantity → Quantity Received on the Bill of Materials",
            "Project Name → Ticket Number → Sales Rep on the physical folder",
            "Service note → Sales category → File cabinet"
        ],
        correct: 0,
        explanation: "The Purchase Order check compares the received equipment against what was ordered: Part Number, Ordered Quantity, and Received Quantity."
    },
    {
        id: "oci_011",
        category: "InventoryOrderCheckIn",
        difficulty: "Hard",
        product: "",
        question: "After the Purchase Order is checked, where should the Packing Slip be placed?",
        answers: [
            "In the physical project folder behind the respective Purchase Order",
            "Back inside the shipping box",
            "Only in the Pulse Service note",
            "In the customer copy of the Equipment Delivery Slip"
        ],
        correct: 0,
        explanation: "The Packing Slip is filed behind the respective Purchase Order in the physical project folder."
    },
    {
        id: "oci_012",
        category: "InventoryOrderCheckIn",
        difficulty: "Hard",
        product: "",
        question: "What happens first in the Pulse receiving update?",
        answers: [
            "Remove received parts from Bill of Materials Not Checked In",
            "Change Delivered Status for Ticket Parts to Complete",
            "Upload the signed delivery slip",
            "Email the customer the File Copy"
        ],
        correct: 0,
        explanation: "Received parts are first removed from Bill of Materials Not Checked In."
    },
    {
        id: "oci_013",
        category: "InventoryOrderCheckIn",
        difficulty: "Medium",
        product: "",
        question: "Which Pulse field is updated after received parts are removed from Bill of Materials Not Checked In?",
        answers: [
            "Received Status for Ticket Parts",
            "Delivered Status for Ticket Parts",
            "Attachment Category",
            "Service tab title"
        ],
        correct: 0,
        explanation: "The receiving update is made in Received Status for Ticket Parts."
    },
    {
        id: "oci_014",
        category: "InventoryOrderCheckIn",
        difficulty: "Hard",
        product: "",
        question: "Which status definition matches the Ban-Koe receiving procedure?",
        answers: [
            "None = 0% received",
            "None = 1–74% received",
            "Complete = 74–99% received",
            "Partial = 100% received"
        ],
        correct: 0,
        explanation: "The supplied definitions state None = 0%, Partial = 1–74%, Substantial = 74–99%, and Complete = 100% received."
    },
    {
        id: "oci_015",
        category: "InventoryOrderCheckIn",
        difficulty: "Medium",
        product: "",
        question: "What should happen after Received Status for Ticket Parts is updated in Pulse?",
        answers: [
            "Click Save, then return the physical documents to the file cabinet",
            "Delete the physical project folder",
            "Mark Delivered Status for Ticket Parts Complete",
            "Send the packing slip to the carrier"
        ],
        correct: 0,
        explanation: "The procedure says to click Save and then return the physical documents to the file cabinet."
    },
    {
        id: "oci_016",
        category: "InventoryOrderCheckIn",
        difficulty: "Medium",
        product: "",
        question: "Which information belongs on the equipment staging label?",
        answers: [
            "Project Name, Sales Rep, Ticket Number, and Type of System",
            "Carrier tracking number and box weight",
            "Part Number and Quantity only",
            "Purchase Order total only"
        ],
        correct: 0,
        explanation: "The staging label identifies the Project Name, Sales Rep, Ticket Number, and Type of System."
    },
    {
        id: "oci_017",
        category: "InventoryOrderCheckIn",
        difficulty: "Hard",
        product: "",
        question: "Once all material has been received, where should the completion note be added in Pulse?",
        answers: [
            "The Service tab",
            "The Attachments tab only",
            "Bill of Materials Not Checked In",
            "Delivered Status for Ticket Parts"
        ],
        correct: 0,
        explanation: "When receiving is complete, the procedure calls for a note in the Service tab."
    },
    {
        id: "oci_018",
        category: "InventoryOrderCheckIn",
        difficulty: "Hard",
        product: "",
        question: "What should the receiving-completion note state?",
        answers: [
            "All parts received, where the parts are located, and what the parts/staging area is labeled",
            "Only the carrier name and tracking number",
            "Only the Purchase Order total",
            "Only that the customer signed the File Copy"
        ],
        correct: 0,
        explanation: "The note records that all parts were received, where they are located, and what the parts/staging area is labeled."
    },
    {
        id: "oci_020",
        category: "InventoryOrderCheckIn",
        difficulty: "Hard",
        product: "",
        question: "Where must the completed receiving documentation be stored after scanning?",
        answers: [
            "Pulse Attachments under Sales and the project Network Project Folder",
            "Only in the physical folder",
            "Only on the local computer",
            "Only in the Purchase Order envelope"
        ],
        correct: 0,
        explanation: "The completed PDF is uploaded to Pulse Attachments with Attachment Category set to Sales and also to the project Network Project Folder."
    },
    {
        id: "oci_021",
        category: "InventoryOrderCheckIn",
        difficulty: "Hard",
        product: "",
        question: "Which documents are scanned together into the completed receiving PDF?",
        answers: [
            "Completed Bill of Materials, Purchase Orders, and all packing slips",
            "Only the staging label",
            "Only the carrier invoice",
            "Only the Equipment Delivery Slip"
        ],
        correct: 0,
        explanation: "The final receiving documentation combines the completed Bill of Materials, Purchase Orders, and all packing slips into one PDF."
    },
    {
        id: "oci_022",
        category: "InventoryOrderCheckIn",
        difficulty: "Hard",
        product: "",
        question: "Which statement correctly distinguishes receiving completion from delivery completion?",
        answers: [
            "Receiving completion concerns received material and staging; delivery completion is a separate later status",
            "Received Complete means the customer already signed the File Copy",
            "Delivered Status for Ticket Parts is completed before the package arrives",
            "There is no distinction between received and delivered"
        ],
        correct: 0,
        explanation: "The procedure treats receiving and delivery as separate stages; receiving completion does not mean the equipment has been delivered."
    },
    {
        id: "oci_023",
        category: "InventoryOrderCheckIn",
        difficulty: "Hard",
        product: "",
        question: "A discrepancy is found between the physical material and the packing slip. Which response follows the procedure?",
        answers: [
            "Contact OFD about the discrepancy before treating the receipt as verified",
            "Change the Bill of Materials to match without contacting anyone",
            "Continue and mark all material Complete",
            "Put the discrepancy only in the staging label"
        ],
        correct: 0,
        explanation: "The procedure directs the employee to contact OFD when the packing slip and physical receipt do not agree."
    },
    {
        id: "oci_024",
        category: "InventoryOrderCheckIn",
        difficulty: "Hard",
        product: "",
        question: "Why are both the Bill of Materials and Purchase Order checked?",
        answers: [
            "The BOM checks project material requirements, while the PO checks ordered quantities against received quantities",
            "They are duplicates and only one should be checked",
            "The PO is used only for the staging label",
            "The BOM is used only after delivery"
        ],
        correct: 0,
        explanation: "The Bill of Materials check confirms the project's material requirements, while the Purchase Order check confirms ordered quantities against received quantities."
    }
];
