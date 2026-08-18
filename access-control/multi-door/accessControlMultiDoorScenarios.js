// Fictional training scenarios for Access Control Scenarios V2 — Multi-Door.
// None of this data represents real Ban-Koe customers or projects.
// Separate from V1 (accessControlScenarios.js) — V1 is untouched.
// Product references (HES 1006/1006-F/9600, Von Duprin 98/99) are drawn from the existing
// Access Control question bank (data/accessControlQuestions.js) — no specs are invented here.
//
// Schema:
//   doors[]: { id, label, reader, lockHardware, doorContact, rex, reasoning, productQuestion? }
//     reasoning is shown alongside any incorrect category on that door to explain the requirement.
//   systemEquipment: project-level shared hardware (controller, powerSupply, interfaceModule)
//   systemReasoning: shown alongside any incorrect system-equipment category
//   summaryReasoning: shown alongside any incorrect project-total category
//   explanation: shown once the full scenario (doors + project totals + system + products) is correct
//
// Project totals are NOT authored separately — the engine sums each door's reader/lockHardware/
// doorContact/rex to compute the expected project total, so totals can never mismatch the doors.
const ACCESS_CONTROL_MULTI_DOOR_SCENARIOS = [
    {
        id: "acmd-e1",
        difficulty: "easy",
        projectName: "Coulee Bend Insurance Office",
        scenarioText: "Coulee Bend Insurance is controlling two doors in their office. Sales rep Devon Marsh is handling the account, and office manager Ellen Fairweather coordinated the walkthrough. The PO number is PO-61240. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door A — Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The exterior entrance needs full monitoring and a REX so employees can exit without presenting a credential." },
            { id: "d2", label: "Door B — Interior Office", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the main entrance, so no REX is needed here." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "Both doors need a reader, lock hardware, and door contact, but only the exterior door needs a REX, so the project needs 2 readers, 2 lock hardware, 2 door contacts, and 1 REX.",
        explanation: "Door A is the secured exterior opening and needs the full set including REX, while Door B only skips REX because staff exit through Door A. The project totals are simply the sum of each door's requirements."
    },
    {
        id: "acmd-e2",
        difficulty: "easy",
        projectName: "Driftwood Legal Partners",
        scenarioText: "Driftwood Legal Partners wants two doors controlled. Sales rep Priya Kapoor is assigned to the account, and the general contractor is Halstead Builders. The sales order number is SO-40118. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door 1 — Main Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The main entrance is the secured exterior opening and needs full monitoring plus a REX." },
            { id: "d2", label: "Door 2 — Break Room", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "The break room already has mechanical panic hardware providing free egress, and the customer declined door monitoring for this opening." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "Both doors need a reader and lock hardware, but only the main entrance needs door monitoring and a REX, so the project needs 2 readers, 2 lock hardware, 1 door contact, and 1 REX.",
        explanation: "The break room's mechanical panic hardware already provides free egress, and monitoring wasn't requested there, so it only needs a reader and lock hardware — the main entrance needs the full set."
    },
    {
        id: "acmd-e3",
        difficulty: "easy",
        projectName: "Northshore Family Dental",
        scenarioText: "Northshore Family Dental is adding access control to two doors. Sales rep Marcus Aldridge is on the account, and practice manager Wendy Solis requested the upgrade. The invoice number is INV-50219. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door 1 — Front Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The front entrance is the secured exterior opening and needs full monitoring plus a REX." },
            { id: "d2", label: "Door 2 — Records Room", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lockset on the records room stays in place, so no new lock hardware is needed, but monitoring was requested and staff exit through the front entrance, so no REX is needed here." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "The front entrance needs new lock hardware, but the records room reuses its existing lockset, so the project needs 2 readers, only 1 new lock hardware, 2 door contacts, and 1 REX.",
        explanation: "The records room keeps its existing lockset (no new lock hardware), but still gets a reader and door contact for monitoring — REX isn't needed since staff exit through the front entrance."
    },
    {
        id: "acmd-e4",
        difficulty: "easy",
        projectName: "Pinehurst Retail Plaza — Unit 4",
        scenarioText: "Pinehurst Retail Plaza, Unit 4, needs two doors controlled. Sales rep Theresa Nakamura is handling the project, and the store owner is Colby Vance. The tracking number for the readers is TRK-70215. The system type is Access Control.",
        doors: [
            {
                id: "d1", label: "Door 1 — Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The exterior entrance is a cylindrical lockset needing a fail-secure strike, with full monitoring and REX.",
                productQuestion: {
                    prompt: "Door 1 uses a cylindrical lockset and needs a fail-secure electric strike. Which product should you select?",
                    options: [
                        { id: "hes1006", label: "HES 1006" },
                        { id: "hes1006f", label: "HES 1006-F" },
                        { id: "hes9600", label: "HES 9600" },
                        { id: "vdqel", label: "Von Duprin QEL" }
                    ],
                    correctOptionId: "hes1006"
                }
            },
            { id: "d2", label: "Door 2 — Stockroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "The stockroom already has mechanical panic hardware for egress, and monitoring wasn't requested." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "Both doors need a reader and lock hardware, but only the exterior entrance needs monitoring and a REX, so the project needs 2 readers, 2 lock hardware, 1 door contact, and 1 REX.",
        explanation: "Door 1's cylindrical lockset pairs with the HES 1006, the standard fail-secure strike; the 1006-F is fail-safe, the 9600 is for rim exit devices, and the QEL is an exit-device option, not a strike. Door 2 only needs a reader and lock hardware since its mechanical panic hardware handles egress and monitoring wasn't requested."
    },
    {
        id: "acmd-e5",
        difficulty: "easy",
        projectName: "Cascade Bluff Apartments Leasing Office",
        scenarioText: "Cascade Bluff Apartments wants two doors controlled at the leasing office. Sales rep Ian Mercado is assigned to the account, and leasing director Faye Whitcomb requested the work. The project number is CB-3312. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door 1 — Leasing Office Entrance (Mag-Lock)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "This mag-lock door is on the main egress path from the leasing office, so it needs full monitoring and a REX." },
            { id: "d2", label: "Door 2 — File Room", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "The file room is a separate interior room where monitoring wasn't requested and there is no egress requirement for this specific door." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "Both doors need a reader and lock hardware, but only the leasing office entrance needs monitoring and a REX, so the project needs 2 readers, 2 lock hardware, 1 door contact, and 1 REX.",
        explanation: "Door 1's mag-lock is on the leasing office's egress path, so it needs monitoring and a REX; Door 2 is a separate interior room without those requirements."
    },
    {
        id: "acmd-m1",
        difficulty: "medium",
        projectName: "Fernhollow Software Campus",
        scenarioText: "Fernhollow Software Campus is controlling four doors in one wing. Sales rep Lauren Delgado is on the account, and facilities manager Grant Ibarra is the point of contact. The general contractor is Ashcombe Construction, and the packing slip number is PS-71230. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door 1 — Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The exterior entrance needs full monitoring and a REX as the secured egress point." },
            { id: "d2", label: "Door 2 — Interior Office", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the exterior entrance, so no REX is needed." },
            { id: "d3", label: "Door 3 — Server Room (Existing Lock Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 1, reasoning: "The existing lock hardware stays in place, but this door is monitored and sits on its own egress path, so it still needs a REX." },
            { id: "d4", label: "Door 4 — Supply Closet", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the supply closet, and there is no egress requirement for this door." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "Door 3 reuses its existing lock, so only 3 doors need new lock hardware. Doors 1, 2, and 3 are monitored (3 door contacts), and only Doors 1 and 3 need REX, so the project needs 4 readers, 3 lock hardware, 3 door contacts, and 2 REX.",
        explanation: "Each door has a different combination of requirements: full new hardware on Door 1, no REX on Door 2, reused lock hardware with REX on Door 3, and no monitoring or REX on Door 4. The project totals reflect exactly what each door needs — not a fixed template."
    },
    {
        id: "acmd-m2",
        difficulty: "medium",
        projectName: "Wrenfield Medical Group Suite",
        scenarioText: "Wrenfield Medical Group is controlling three doors in their suite. Sales rep Nathaniel Cross is handling the account, and office administrator Paula Denny coordinated the project. The vendor order number is VO-61240. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door 1 — Main Entrance (Cylindrical Lockset)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The main entrance needs full monitoring and a REX as the secured exterior opening." },
            {
                id: "d2", label: "Door 2 — Medication Room (Rim Exit Device)", reader: 1, lockHardware: 1, doorContact: 1, rex: 0,
                reasoning: "The medication room uses a rim exit device, so the mechanical exit device itself provides free egress and no separate REX is required.",
                productQuestion: {
                    prompt: "The medication room uses a rim exit device and needs a compatible electric strike. Which product should you select?",
                    options: [
                        { id: "hes9600", label: "HES 9600" },
                        { id: "hes1006", label: "HES 1006" },
                        { id: "hes1006f", label: "HES 1006-F" },
                        { id: "vd9899", label: "Von Duprin 98/99" }
                    ],
                    correctOptionId: "hes9600"
                }
            },
            { id: "d3", label: "Door 3 — Records Room", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the records room, and staff exit through the main entrance." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "All three doors need a reader and lock hardware, but only the main entrance and medication room are monitored, and only the main entrance needs a REX, so the project needs 3 readers, 3 lock hardware, 2 door contacts, and 1 REX.",
        explanation: "The medication room's rim exit device provides its own mechanical free egress, so it needs the HES 9600 (a surface-mounted strike for rim exit devices) but no separate REX. The records room skips monitoring since it wasn't requested."
    },
    {
        id: "acmd-m3",
        difficulty: "medium",
        projectName: "Timberline Cooperative Bank — Branch 12",
        scenarioText: "Timberline Cooperative Bank, Branch 12, is controlling three doors: a vestibule entry and a back office. Sales rep Owen Castellano is on the account, and branch manager Denise Farrow is the point of contact. The alarm company on-site is Cobalt Sentinel Systems. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door 1 — Outer Vestibule Door", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The outer vestibule door is the secured exterior opening and needs full monitoring plus a REX." },
            { id: "d2", label: "Door 2 — Inner Vestibule Door", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "The inner vestibule door stays unlocked during business hours, and monitoring wasn't requested for this opening." },
            { id: "d3", label: "Door 3 — Back Office", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The back office is monitored and sits on its own egress path to the rear lot, so it needs its own REX." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "The outer vestibule door and back office both need monitoring and REX, but the inner vestibule door needs neither, so the project needs 3 readers, 3 lock hardware, 2 door contacts, and 2 REX.",
        explanation: "The inner vestibule door's unlocked-during-business-hours status and lack of a monitoring request mean it skips both door contact and REX, while the outer door and back office both sit on egress paths that require REX."
    },
    {
        id: "acmd-m4",
        difficulty: "medium",
        projectName: "Alder Creek Manufacturing — Building C",
        scenarioText: "Alder Creek Manufacturing, Building C, is controlling four doors. Sales rep Renata Ibsen is handling the account, and plant supervisor Colin Marsh coordinated the walkthrough. The shipment tracking number is TRK-90218. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door 1 — Dock Exterior", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This dock door already has mechanical panic hardware for egress, so no separate REX is required." },
            { id: "d2", label: "Door 2 — Dock (Existing Mag-Lock Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 1, reasoning: "The existing mag-lock stays in place, but this door sits on its own egress path, so it still needs a REX." },
            { id: "d3", label: "Door 3 — Office Interior", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the dock doors, so no REX is needed." },
            { id: "d4", label: "Door 4 — Supply Closet (Existing Hardware, Reader Only)", reader: 1, lockHardware: 0, doorContact: 0, rex: 0, reasoning: "The supply closet keeps its existing hardware entirely — only a reader is added for reporting, with no monitoring or REX requested." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "Doors 2 and 4 reuse existing lock hardware, so only 2 doors need new lock hardware. Doors 1, 2, and 3 are monitored (3 door contacts), and only Door 2 needs REX, so the project needs 4 readers, 2 lock hardware, 3 door contacts, and 1 REX.",
        explanation: "Each dock and interior door has different needs: mechanical panic hardware removes the REX requirement on Door 1, Door 2's mag-lock reuse still needs a REX because of its egress path, Door 3 skips REX since staff exit through the dock, and Door 4 only adds a reader with no other new hardware."
    },
    {
        id: "acmd-m5",
        difficulty: "medium",
        projectName: "Blue Heron Professional Center",
        scenarioText: "Blue Heron Professional Center is controlling three doors. Sales rep Camille Ortega is assigned to the account, and building manager Todd Ferris requested the upgrade. The fire marshal reviewed the plans and required a fail-safe strike specifically on the stairwell reentry door. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door 1 — Main Entrance (Cylindrical Lockset)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The main entrance needs full monitoring and a REX as the secured exterior opening." },
            {
                id: "d2", label: "Door 2 — Stairwell Reentry Door", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The fire marshal specifically required fail-safe operation on this stairwell reentry door, and it sits on an egress path, so it needs monitoring and a REX.",
                productQuestion: {
                    prompt: "The fire marshal specifically required a fail-safe electric strike for the stairwell reentry door's cylindrical lockset. Which product should you select?",
                    options: [
                        { id: "hes1006f", label: "HES 1006-F" },
                        { id: "hes1006", label: "HES 1006" },
                        { id: "hes9600", label: "HES 9600" },
                        { id: "vdqel", label: "Von Duprin QEL" }
                    ],
                    correctOptionId: "hes1006f"
                }
            },
            { id: "d3", label: "Door 3 — Interior Office", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for this interior office, and staff exit through the main entrance." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "The main entrance and stairwell reentry door both need monitoring and REX, but the interior office needs neither, so the project needs 3 readers, 3 lock hardware, 2 door contacts, and 2 REX.",
        explanation: "The fire marshal's explicit fail-safe requirement on the stairwell reentry door calls for the HES 1006-F (the fail-safe version); the standard 1006 is fail-secure, the 9600 is for rim exit devices, and the QEL is an exit-device option, not a strike."
    },
    {
        id: "acmd-h1",
        difficulty: "hard",
        projectName: "Meridian Crossing Business Campus",
        scenarioText: "Meridian Crossing Business Campus is controlling four doors in one building: two exterior entrances, an interior suite, and a mailroom. Sales rep Julia Fenwick is on the account, and building owner Crestline Holdings is footing the project. The leasing coordinator is Renee Aldrich, and the material ticket number is MC-81340. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door 1 — Exterior Entrance A", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "Exterior Entrance A is a secured opening and needs full monitoring plus a REX." },
            { id: "d2", label: "Door 2 — Exterior Entrance B", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "Exterior Entrance B is also a secured opening and needs full monitoring plus a REX." },
            { id: "d3", label: "Door 3 — Interior Suite (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, this door is monitored, but tenants exit through the shared exterior entrances, so no REX is needed here." },
            { id: "d4", label: "Door 4 — Mailroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the mailroom, and there is no egress requirement for this door." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "Door 3 reuses its existing lock hardware, so only 3 doors need new lock hardware. Doors 1, 2, and 3 are monitored (3 door contacts), and only Doors 1 and 2 need REX, so the project needs 4 readers, 3 lock hardware, 3 door contacts, and 2 REX.",
        explanation: "Because one controller can support all four access points in this single building, the design calls for just one controller and one power supply. Door 3 reuses its hardware and skips REX since tenants share the exterior entrances for egress, while the mailroom needs neither monitoring nor REX."
    },
    {
        id: "acmd-h2",
        difficulty: "hard",
        projectName: "Sable Ridge Corporate Towers",
        scenarioText: "Sable Ridge Corporate Towers is a larger rollout with six controlled doors across two buildings: two exterior entrances and four suite doors. Sales rep Gabriel Whitfield is coordinating the account, and project manager Denise Calloway is working between Ridgeline Construction and the property owner, Sable Ridge Holdings. The PO number is PO-90441, and the material ticket is SR-77102. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door 1 — Building A Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "Building A's exterior entrance needs full monitoring and a REX." },
            { id: "d2", label: "Door 2 — Building B Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "Building B's exterior entrance also needs full monitoring and a REX." },
            { id: "d3", label: "Door 3 — Suite 100 (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, and tenants share the building's exterior entrance for egress, so no REX is needed here." },
            { id: "d4", label: "Door 4 — Suite 200", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "Suite 200 is monitored, but tenants exit through the shared exterior entrance, so no REX is needed." },
            { id: "d5", label: "Door 5 — Suite 300", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "Suite 300 is monitored, but tenants exit through the shared exterior entrance, so no REX is needed." },
            { id: "d6", label: "Door 6 — Loading Dock Stairwell (Fire-Rated Egress)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "This stairwell has its own fire-rated egress requirement, so it needs its own REX in addition to monitoring." }
        ],
        systemEquipment: { controller: 2, powerSupply: 2, interfaceModule: 1 },
        summaryReasoning: "Door 3 reuses its existing lock hardware, so only 5 doors need new lock hardware. All six doors are monitored (6 door contacts), and only Doors 1, 2, and 6 need REX, so the project needs 6 readers, 5 lock hardware, 6 door contacts, and 3 REX.",
        explanation: "With six doors split across two buildings, the design calls for two controllers and two power supplies (one per building), plus one interface module to network the two controllers together. Only the two exterior entrances and the fire-rated stairwell need REX — the shared-egress suites don't."
    },
    {
        id: "acmd-h3",
        difficulty: "hard",
        projectName: "Coalport Distribution Center",
        scenarioText: "Coalport Distribution Center is controlling five doors: a main office entrance, a warehouse dock, a server room, a breakroom, and a door tied into the fire alarm system. Sales rep Marisol Duarte is on the account, and warehouse manager Craig Whitlow is the point of contact. The vendor invoice number is INV-88210. The system type is Access Control.",
        doors: [
            { id: "d1", label: "Door 1 — Main Office Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The main office entrance needs full monitoring and a REX as the secured exterior opening." },
            { id: "d2", label: "Door 2 — Warehouse Dock (Existing Mag-Lock Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 1, reasoning: "The existing mag-lock stays in place, but this door sits on its own egress path, so it still needs a REX." },
            {
                id: "d3", label: "Door 3 — Server Room", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The project specification explicitly requires fail-safe operation on the server room door, and it's monitored and on an egress path, so it needs a REX as well.",
                productQuestion: {
                    prompt: "The server room requires a fail-safe electric strike for its cylindrical lockset. Which product should you select?",
                    options: [
                        { id: "hes1006f", label: "HES 1006-F" },
                        { id: "hes1006", label: "HES 1006" },
                        { id: "hes9600", label: "HES 9600" },
                        { id: "vdqel", label: "Von Duprin QEL" }
                    ],
                    correctOptionId: "hes1006f"
                }
            },
            { id: "d4", label: "Door 4 — Breakroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the breakroom, and there is no egress requirement for this door." },
            { id: "d5", label: "Door 5 — Fire Alarm Tie-In Door", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "This door is tied into the fire alarm system for a life-safety release function, which requires an additional interface module at the system level, in addition to its own monitoring and REX." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 1 },
        summaryReasoning: "Door 2 reuses its existing mag-lock, so only 4 doors need new lock hardware. Doors 1, 2, 3, and 5 are monitored (4 door contacts), and Doors 1, 2, 3, and 5 all need REX (4 REX), so the project needs 5 readers, 4 lock hardware, 4 door contacts, and 4 REX.",
        explanation: "The server room's explicit fail-safe requirement calls for the HES 1006-F, while Door 5's fire alarm integration requires the one additional interface module at the system level — the other doors don't need it. Door 2 reuses its mag-lock but still needs a REX because it's on its own egress path."
    },
    {
        id: "acmd-h4",
        difficulty: "hard",
        projectName: "Willowmere Senior Living Campus",
        scenarioText: "Willowmere Senior Living Campus is controlling six doors in one building: a main entrance, dining hall, memory care wing, admin office, laundry room, and courtyard door. Sales rep Beatrice Holloway is coordinating the project, and facilities director Owen Kessler is the point of contact. The packing slip number is PS-90214. The system type is Access Control.",
        doors: [
            {
                id: "d1", label: "Door 1 — Main Entrance (Cylindrical Lockset)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The main entrance needs full monitoring and a REX as the secured exterior opening.",
                productQuestion: {
                    prompt: "The main entrance uses a cylindrical lockset and needs a fail-secure electric strike. Which product should you select?",
                    options: [
                        { id: "hes1006", label: "HES 1006" },
                        { id: "hes1006f", label: "HES 1006-F" },
                        { id: "hes9600", label: "HES 9600" },
                        { id: "vdqel", label: "Von Duprin QEL" }
                    ],
                    correctOptionId: "hes1006"
                }
            },
            { id: "d2", label: "Door 2 — Dining Hall (Rim Exit Device)", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "The dining hall uses a rim exit device, so the mechanical exit device itself provides free egress and no separate REX is required." },
            { id: "d3", label: "Door 3 — Memory Care Wing Entrance (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 1, reasoning: "The existing lock hardware stays in place, but this door is monitored and sits on its own egress path, so it still needs a REX." },
            { id: "d4", label: "Door 4 — Admin Office", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the admin office, and there is no egress requirement for this door." },
            { id: "d5", label: "Door 5 — Laundry Room (Existing Hardware, Reader Only)", reader: 1, lockHardware: 0, doorContact: 0, rex: 0, reasoning: "The laundry room keeps its existing hardware entirely — only a reader is added for reporting, with no monitoring or REX requested." },
            { id: "d6", label: "Door 6 — Courtyard Door", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "The courtyard door stays unlocked during the day shift, so no REX is needed, though monitoring was still requested." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "Doors 3 and 5 reuse existing lock hardware, so only 4 doors need new lock hardware. Doors 4 and 5 aren't monitored, so only Doors 1, 2, 3, and 6 are monitored (4 door contacts), and only Doors 1 and 3 need REX, so the project needs 6 readers, 4 lock hardware, 4 door contacts, and 2 REX.",
        explanation: "This building's design calls for one controller supporting all six doors. Door 2's rim exit device needs the HES 9600 (never a separate REX), the memory care wing's reused hardware still needs a REX because it's on its own egress path, and the laundry room only adds a reader with no other new hardware."
    },
    {
        id: "acmd-h5",
        difficulty: "hard",
        projectName: "Grayson Municipal Services Building",
        scenarioText: "Grayson Municipal Services Building is controlling four doors: a main entrance, council chambers, records room, and breakroom. Sales rep Harriet Osei is on the account, and facilities coordinator Dennis Pruitt requested the upgrade. The fire marshal specifically required fail-safe operation on the records room door because of its fire-rated egress path. The council chambers already has a Von Duprin 98/99 exit device installed that will remain in service. The project number is GM-6620.",
        doors: [
            { id: "d1", label: "Door 1 — Main Entrance (Cylindrical Lockset)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The main entrance needs full monitoring and a REX as the secured exterior opening." },
            { id: "d2", label: "Door 2 — Council Chambers (Existing Von Duprin 98/99 Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing Von Duprin 98/99 exit device stays in place and provides its own mechanical free egress, so no new lock hardware or separate REX is needed — only the reader and monitoring are added." },
            {
                id: "d3", label: "Door 3 — Records Room", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The fire marshal specifically required fail-safe operation on this door because of its fire-rated egress path, so it needs monitoring and a REX in addition to the fail-safe strike.",
                productQuestion: {
                    prompt: "The fire marshal specifically required a fail-safe electric strike for the records room's cylindrical lockset. Which product should you select?",
                    options: [
                        { id: "hes1006f", label: "HES 1006-F" },
                        { id: "hes1006", label: "HES 1006" },
                        { id: "hes9600", label: "HES 9600" },
                        { id: "vdqel", label: "Von Duprin QEL" }
                    ],
                    correctOptionId: "hes1006f"
                }
            },
            { id: "d4", label: "Door 4 — Breakroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the breakroom, and there is no egress requirement for this door." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        summaryReasoning: "Door 2 reuses its existing Von Duprin exit device (no new lock hardware), so only 3 doors need new lock hardware. Doors 1, 2, and 3 are monitored (3 door contacts), and only Doors 1 and 3 need REX, so the project needs 4 readers, 3 lock hardware, 3 door contacts, and 2 REX.",
        explanation: "The council chambers' existing Von Duprin 98/99 exit device already provides mechanical free egress, so it needs neither new lock hardware nor a separate REX. The records room's fire marshal-mandated fail-safe requirement calls for the HES 1006-F, distinct from the standard fail-secure HES 1006 used elsewhere."
    }
];
