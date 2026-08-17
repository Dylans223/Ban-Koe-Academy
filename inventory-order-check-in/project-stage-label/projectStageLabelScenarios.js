// Fictional training scenarios for the Project Stage Label practice mode.
// None of this data represents real Ban-Koe customers or projects.
// Scenario text embeds the four label answers among realistic distractors (people, PO/SO/tracking/invoice numbers, customer/building names).
// The Sales Rep is always given by full name in scenarioText; salesRepInitials stores the expected initials answer.
const PROJECT_STAGE_LABEL_SCENARIOS = [
    {
        id: "es-1",
        difficulty: "easy",
        projectName: "La Crosse Middle School",
        salesRepInitials: "-JD",
        systemType: "Fire Alarm",
        ticketNumber: "194327",
        scenarioText: "A shipment came in this morning for La Crosse Middle School. The school's facilities coordinator, Barb Nelson, submitted the request. Sales representative Jordan Diaz is handling the project. The packing slip number is PS-3391, and the Pulse ticket for this job is 194327. This order is for the fire alarm system, and everything checked in without issue."
    },
    {
        id: "es-2",
        difficulty: "easy",
        projectName: "River Valley Office Center",
        salesRepInitials: "-TK",
        systemType: "Access Control",
        ticketNumber: "195002",
        scenarioText: "The equipment for River Valley Office Center arrived on schedule. Tenant contact Greg Simmons was on-site to receive it. Tara King is the Ban-Koe sales rep assigned to the project. Vendor tracking number TRK-88213 was noted on the box labels, and Pulse ticket 195002 covers this delivery. It's an access control system."
    },
    {
        id: "es-3",
        difficulty: "easy",
        projectName: "Coulee Ridge Apartments",
        salesRepInitials: "-MB",
        systemType: "Intrusion Alarm",
        ticketNumber: "196110",
        scenarioText: "Coulee Ridge Apartments had a delivery show up around noon. Property manager Diane Osei let the driver in. The account is being handled by Marcus Bell. Ticket 196110 is tied to the order, which is an intrusion alarm system. The invoice number on file is INV-50218."
    },
    {
        id: "es-4",
        difficulty: "easy",
        projectName: "West Salem Community Center",
        salesRepInitials: "-AR",
        systemType: "Fire Alarm",
        ticketNumber: "197224",
        scenarioText: "West Salem Community Center's equipment is ready to check in. Andrea Ruiz closed the project for Ban-Koe. The order was originally placed by center director Paul Vance. This shipment carries purchase order PO-61220 and covers the fire alarm system installation. The Pulse ticket for the job is 197224."
    },
    {
        id: "es-5",
        difficulty: "easy",
        projectName: "Mississippi Technical College",
        salesRepInitials: "-CP",
        systemType: "Nurse Call",
        ticketNumber: "198335",
        scenarioText: "Shipment number SHP-77410 arrived on a pallet for Mississippi Technical College this afternoon. Facilities lead Anthony Ruiz signed off on the paperwork. Ban-Koe sales rep Carlos Pena is responsible for the account. This delivery is for the nurse call system, and the Pulse ticket is 198335."
    },
    {
        id: "ms-1",
        difficulty: "medium",
        projectName: "Prairie View Elementary",
        salesRepInitials: "MK",
        systemType: "Fire Alarm",
        ticketNumber: "195421",
        scenarioText: "Prairie View Elementary's equipment showed up this morning in three boxes. The order was placed by principal Carla Vance, and the delivery was signed for by the school's custodian, Rick Doyle. Sales representative Megan Kessler is handling the project. The purchase order on file is PO-40217, and the supplier's order number is SO-91820. Pulse shows ticket 195421 tied to the shipment, and it's a fire alarm system upgrade for the building."
    },
    {
        id: "ms-2",
        difficulty: "medium",
        projectName: "Riverside Manufacturing",
        salesRepInitials: "-DL",
        systemType: "Access Control",
        ticketNumber: "199042",
        scenarioText: "Ticket 199042 in Pulse is linked to a shipment that arrived at the dock this week for the Riverside Manufacturing project. Plant manager Steve Pruitt requested the order, and warehouse lead Denise Cho signed the delivery paperwork. The vendor's invoice number is INV-63820, and the tracking number on the box is TRK-10457. This job covers an access control system. Diane Lang is the Ban-Koe sales rep assigned to the project."
    },
    {
        id: "ms-3",
        difficulty: "medium",
        projectName: "Valley Ridge Hotel",
        salesRepInitials: "-SN",
        systemType: "Fire Alarm",
        ticketNumber: "200187",
        scenarioText: "The Valley Ridge Hotel renovation shipment is in. General manager Wendy Alsop coordinated the order with corporate, and the shipment was received by maintenance supervisor Tom Reyes. Purchase order PO-58734 and shipment number SHP-29901 are both listed on the paperwork. The account is being handled by Sean Nolan. The system being installed is a fire alarm system, and the Pulse ticket for the job is 200187."
    },
    {
        id: "ms-4",
        difficulty: "medium",
        projectName: "Coulee Falls Public Library",
        salesRepInitials: "-GH",
        systemType: "Intrusion Alarm",
        ticketNumber: "201093",
        scenarioText: "An intrusion alarm system is being installed at Coulee Falls Public Library, where a delivery arrived this week. Head librarian Nancy Foss placed the initial request, and library aide Devon Marsh accepted the shipment at the loading dock. The vendor order number is VO-34210 and the packing slip number is PS-77650. Ticket 201093 is the Pulse reference for this order. Grace Hooper closed the project for Ban-Koe."
    },
    {
        id: "ms-5",
        difficulty: "medium",
        projectName: "Northside Medical Plaza",
        salesRepInitials: "-EW",
        systemType: "Nurse Call",
        ticketNumber: "202215",
        scenarioText: "Equipment for Northside Medical Plaza came in today. Office manager Renee Castillo placed the order, and building engineer Sam Whitfield received the shipment. Invoice number INV-48210 and purchase order PO-71390 were both attached to the paperwork. Ban-Koe sales rep Ethan Wallace is responsible for the account. This delivery is for a nurse call system, and Pulse ticket 202215 covers the job."
    },
    {
        id: "hs-1",
        difficulty: "hard",
        projectName: "Sugar Creek Business Park",
        salesRepInitials: "-PL",
        systemType: "Fire Alarm",
        ticketNumber: "203348",
        scenarioText: "A freight delivery arrived at the dock for the Sugar Creek Business Park project this morning, six boxes in total, dropped off by a regional carrier. The property owner, Meridian Holdings LLC, manages the building known internally as the Sugar Creek Pavilion, but the job in Pulse is tracked under the Sugar Creek Business Park name. Facilities contact Renee Alvarez placed the original order, and dock worker Chris Nolan signed for the freight. The vendor's shipment reference is VS-66214, the purchase order is PO-80125, and the packing slip number is PS-40098. Sales representative Priya Lal is handling the project, the ticket tied to the Pulse job is 203348, and the equipment being staged is for a fire alarm system covering the main building."
    },
    {
        id: "hs-2",
        difficulty: "hard",
        projectName: "Timber Bluff Apartments",
        salesRepInitials: "-RQ",
        systemType: "Access Control",
        ticketNumber: "204459",
        scenarioText: "The card readers and door controllers for Timber Bluff Apartments were delivered this afternoon. The property is owned by Blue Harbor Residential, and the leasing office refers to the building as Bluff Ridge Commons, but the account in Pulse is listed under Timber Bluff Apartments. Leasing coordinator Monica Reyes had placed the order weeks ago, and maintenance tech Gary Holloway accepted the delivery at the service entrance. The supplier's order number is SO-52780, the tracking number on the outer box is TRK-91345, and the invoice attached to the shipment is INV-20984. Renata Quinn is the Ban-Koe sales rep assigned to the project, the Pulse ticket is 204459, and the system being staged is for access control."
    },
    {
        id: "hs-3",
        difficulty: "hard",
        projectName: "Granite Hills Warehouse",
        salesRepInitials: "-VC",
        systemType: "Intrusion Alarm",
        ticketNumber: "205561",
        scenarioText: "Purchase order PO-33871 was attached to two pallets that arrived today for the Granite Hills Warehouse project. The site is leased by Cascade Logistics Group, and workers on-site call the building the Granite Hills Distribution Center, though Pulse still lists the job as Granite Hills Warehouse. Warehouse supervisor Todd Bryant requested the equipment, and receiving clerk Patricia Nguyen checked it in against the packing slip. The vendor order number is VO-77042, and the packing slip number is PS-15690. The account is being handled by Victor Cole. The intrusion alarm system is what's being installed, and the Pulse ticket tied to the job is 205561."
    },
    {
        id: "hs-4",
        difficulty: "hard",
        projectName: "Blackhawk Corporate Center",
        salesRepInitials: "-NF",
        systemType: "Fire Alarm",
        ticketNumber: "206672",
        scenarioText: "A shipment for the Blackhawk Corporate Center project arrived with one box showing minor damage, though the contents were unaffected. The building is owned by Summit Point Properties and is sometimes referred to on-site as the Blackhawk Tower, but the Pulse record for the job is Blackhawk Corporate Center. Building manager Elaine Torres coordinated the order, and security guard Marcus Webb signed for the delivery. The vendor's invoice number is INV-58732, the shipment tracking number is TRK-14209, and the purchase order is PO-90456. Nadia Fox closed the project for Ban-Koe, the ticket associated with the job in Pulse is 206672, and the fire alarm system is what's being staged today."
    },
    {
        id: "hs-5",
        difficulty: "hard",
        projectName: "Copperfield Senior Living",
        salesRepInitials: "-HB",
        systemType: "Nurse Call",
        ticketNumber: "207783",
        scenarioText: "Pulse ticket 207783 is tied to a delivery that arrived late this morning for Copperfield Senior Living, dropped off by a regional freight carrier. The facility is operated by Heritage Care Partners and is known locally as the Copperfield Residence, but Pulse lists the account under Copperfield Senior Living. Administrator Joyce Kellerman placed the original order, and maintenance supervisor Alan Freeman received the shipment at the loading dock. The supplier's order number is SO-64213, the packing slip number is PS-88907, and the invoice number is INV-31650. Ban-Koe sales rep Henry Boyd is responsible for the account, and the nurse call system is being installed."
    }
];

