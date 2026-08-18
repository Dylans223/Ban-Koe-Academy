// Fictional training scenarios for Access Control Scenarios V3 — Full System Design.
// None of this data represents real Ban-Koe customers or projects.
// Fully separate from V1 (accessControlScenarios.js) and V2 (accessControlMultiDoorScenarios.js).
// Product references (HES 1006/1006-F/9600, Von Duprin 98/99) are drawn from the existing
// Access Control question bank (data/accessControlQuestions.js) — no specs are invented here.
//
// Technical safety rule: where a scenario requires more than one controller/power supply,
// the scenarioText explicitly states the assumption driving that count (e.g. an explicit
// per-controller door capacity, or an explicit separate-system-per-building requirement).
// Nothing about real controller capacity is invented or presented as a manufacturer spec.
//
// Schema:
//   doors[]: { id, label, reader, lockHardware, doorContact, rex, reasoning, productQuestion? }
//   systemEquipment: { controller, powerSupply, interfaceModule }
//   systemReasoning / summaryReasoning / explanation: shown alongside incorrect results or on success
// Project and product totals are NOT authored separately — the engine computes them from doors,
// so totals can never mismatch the doors by construction.
const ACCESS_CONTROL_SYSTEM_DESIGN_SCENARIOS = [
    {
        id: "acsd-e1",
        difficulty: "easy",
        projectName: "Fernvale Insurance Group",
        scenarioText: "Fernvale Insurance Group is controlling two doors in a single small office. Sales rep Dana Whitcomb is on the account, and office manager Reginald Alsop coordinated the walkthrough. The PO number is PO-40217. This is a single-building, single-controller project.",
        doors: [
            { id: "d1", label: "Door 1 — Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The exterior entrance is the secured opening and needs full monitoring plus a REX." },
            { id: "d2", label: "Door 2 — Interior Office", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the exterior entrance, so no REX is needed." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        systemReasoning: "Both doors are on one small system, so a single controller and power supply support the whole project.",
        summaryReasoning: "Both doors need a reader, lock hardware, and door contact, but only the exterior door needs a REX.",
        explanation: "This is a small, single-controller system: both doors get full hardware and monitoring, and only the exterior door needs a REX since interior staff exit through it."
    },
    {
        id: "acsd-e2",
        difficulty: "easy",
        projectName: "Brightwater Dental Associates",
        scenarioText: "Brightwater Dental Associates is controlling three doors. Sales rep Miriam Castellanos is handling the account, and practice manager Todd Iverson requested the upgrade. The invoice number is INV-61240. This is a single-building, single-controller project.",
        doors: [
            { id: "d1", label: "Door 1 — Main Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The main entrance is the secured exterior opening and needs full monitoring plus a REX." },
            { id: "d2", label: "Door 2 — Exam Room", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "The exam room is monitored, but staff exit through the main entrance, so no REX is needed." },
            { id: "d3", label: "Door 3 — Breakroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the breakroom, and there is no egress requirement for this door." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        systemReasoning: "All three doors are on one small system, so a single controller and power supply support the whole project.",
        summaryReasoning: "All three doors need a reader and lock hardware, but only the main entrance and exam room are monitored, and only the main entrance needs a REX.",
        explanation: "The main entrance needs the full set, the exam room skips REX since staff exit through the main entrance, and the breakroom skips monitoring entirely since it wasn't requested."
    },
    {
        id: "acsd-e3",
        difficulty: "easy",
        projectName: "Cedar Hollow Software Studio",
        scenarioText: "Cedar Hollow Software Studio is controlling two doors. Sales rep Julian Beckwith is on the account, and studio manager Paula Nakashima coordinated the project. The sales order number is SO-70218. This is a single-building, single-controller project.",
        doors: [
            { id: "d1", label: "Door 1 — Main Entrance (Mag-Lock)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "This mag-lock door is on the studio's main egress path, so it needs full monitoring and a REX." },
            { id: "d2", label: "Door 2 — Server Room", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the server room, and there is no egress requirement for this door." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        systemReasoning: "Both doors are on one small system, so a single controller and power supply support the whole project.",
        summaryReasoning: "Both doors need a reader and lock hardware, but only the main entrance needs monitoring and a REX.",
        explanation: "The main entrance's mag-lock sits on the studio's egress path, so it needs monitoring and a REX; the server room has neither requirement."
    },
    {
        id: "acsd-e4",
        difficulty: "easy",
        projectName: "Lakeside Title Company",
        scenarioText: "Lakeside Title Company is controlling four doors. Sales rep Corinne Whitfield is handling the project, and branch manager Andre Solis is the point of contact. The tracking number for the readers is TRK-80219. This is a single-building, single-controller project.",
        doors: [
            {
                id: "d1", label: "Door 1 — Main Entrance (Cylindrical Lockset)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The main entrance's cylindrical lockset needs a fail-secure strike, plus full monitoring and a REX.",
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
            { id: "d2", label: "Door 2 — Interior Office", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the main entrance, so no REX is needed." },
            { id: "d3", label: "Door 3 — Records Room (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, and this door is monitored but has no egress requirement of its own." },
            { id: "d4", label: "Door 4 — Breakroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the breakroom, and there is no egress requirement for this door." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        systemReasoning: "All four doors are on one small system, so a single controller and power supply support the whole project.",
        summaryReasoning: "Door 3 reuses its existing lock hardware, so only 3 doors need new lock hardware. Doors 1, 2, and 3 are monitored (3 door contacts), and only Door 1 needs a REX.",
        explanation: "The main entrance's cylindrical lockset pairs with the HES 1006, the standard fail-secure strike; the 1006-F is fail-safe, the 9600 is for rim exit devices, and the QEL is an exit-device option, not a strike. Door 3 reuses its existing lockset, so no new lock hardware is needed there."
    },
    {
        id: "acsd-e5",
        difficulty: "easy",
        projectName: "Northgate Family Clinic",
        scenarioText: "Northgate Family Clinic is controlling three doors. Sales rep Felicity Grant is on the account, and clinic administrator Wesley Doyle requested the upgrade. The packing slip number is PS-90210. This is a single-building, single-controller project.",
        doors: [
            { id: "d1", label: "Door 1 — Main Entrance (Cylindrical Lockset)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The main entrance needs full monitoring and a REX as the secured exterior opening." },
            {
                id: "d2", label: "Door 2 — Exam Wing (Rim Exit Device)", reader: 1, lockHardware: 1, doorContact: 1, rex: 0,
                reasoning: "The exam wing uses a rim exit device, so the mechanical exit device itself provides free egress and no separate REX is required.",
                productQuestion: {
                    prompt: "The exam wing uses a rim exit device and needs a compatible electric strike. Which product should you select?",
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
        systemReasoning: "All three doors are on one small system, so a single controller and power supply support the whole project.",
        summaryReasoning: "All three doors need a reader and lock hardware, but only the main entrance and exam wing are monitored, and only the main entrance needs a REX.",
        explanation: "The exam wing's rim exit device provides its own mechanical free egress, so it needs the HES 9600 (a surface-mounted strike for rim exit devices) but no separate REX."
    },
    {
        id: "acsd-m1",
        difficulty: "medium",
        projectName: "Wrentham Business Center",
        scenarioText: "Wrentham Business Center is controlling five doors. Sales rep Holly Duncan is on the account, and facilities lead Marcus Feldman coordinated the project. The general contractor is Ashgrove Builders, and the vendor order number is VO-71230. For this exercise, each controller supports a maximum of four controlled doors, and the design calls for one power supply for each controller.",
        doors: [
            { id: "d1", label: "Door 1 — Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The exterior entrance needs full monitoring and a REX as the secured egress point." },
            { id: "d2", label: "Door 2 — Interior Office A", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the exterior entrance, so no REX is needed." },
            { id: "d3", label: "Door 3 — Interior Office B", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the exterior entrance, so no REX is needed." },
            { id: "d4", label: "Door 4 — Records Room (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, and this door is monitored but has no egress requirement of its own." },
            { id: "d5", label: "Door 5 — Breakroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the breakroom, and there is no egress requirement for this door." }
        ],
        systemEquipment: { controller: 2, powerSupply: 2, interfaceModule: 0 },
        systemReasoning: "Because each controller supports a maximum of four doors and this project has five doors, two controllers are needed. The design calls for one power supply per controller, so two power supplies are needed as well.",
        summaryReasoning: "Door 4 reuses its existing lock hardware, so only 4 doors need new lock hardware. Doors 1, 2, 3, and 4 are monitored (4 door contacts), and only Door 1 needs a REX.",
        explanation: "With five doors and a stated four-door-per-controller limit for this project, the design needs two controllers and two power supplies. Door 4 reuses its existing lockset, and only the exterior entrance needs a REX."
    },
    {
        id: "acsd-m2",
        difficulty: "medium",
        projectName: "Coldstream Professional Suites",
        scenarioText: "Coldstream Professional Suites is controlling four doors. Sales rep Nathaniel Cross is on the account, and building manager Priya Sundaram requested the upgrade. One door is tied into the fire alarm system for a life-safety release function. The vendor invoice number is INV-51240. This is a single-building, single-controller project.",
        doors: [
            { id: "d1", label: "Door 1 — Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The exterior entrance needs full monitoring and a REX as the secured egress point." },
            { id: "d2", label: "Door 2 — Suite Office (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, and this door is monitored but has no egress requirement of its own." },
            { id: "d3", label: "Door 3 — Storage Closet", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the storage closet, and there is no egress requirement for this door." },
            { id: "d4", label: "Door 4 — Fire Alarm Tie-In Door", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "This door is tied into the fire alarm system for a life-safety release function, which requires an additional interface module at the system level, in addition to its own monitoring and REX." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 1 },
        systemReasoning: "One controller and power supply support all four doors in this single-building project, but Door 4's fire alarm integration requires one additional interface module.",
        summaryReasoning: "Door 2 reuses its existing lock hardware, so only 3 doors need new lock hardware. Doors 1, 2, and 4 are monitored (3 door contacts), and Doors 1 and 4 need a REX (2 REX).",
        explanation: "Door 4's fire alarm release integration requires the one additional interface module at the system level that the other doors don't need. Door 2 reuses its existing hardware, and Door 3 skips monitoring since it wasn't requested."
    },
    {
        id: "acsd-m3",
        difficulty: "medium",
        projectName: "Timber Ridge Retail Plaza",
        scenarioText: "Timber Ridge Retail Plaza is controlling six doors. Sales rep Desmond Farrow is on the account, and property manager Wendy Castellano coordinated the project. The material ticket number is TR-81204. For this exercise, each controller supports a maximum of three controlled doors, and the design calls for one power supply for each controller.",
        doors: [
            {
                id: "d1", label: "Door 1 — Main Entrance (Cylindrical Lockset)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The main entrance's cylindrical lockset needs a fail-secure strike, plus full monitoring and a REX.",
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
            {
                id: "d2", label: "Door 2 — Stockroom (Rim Exit Device)", reader: 1, lockHardware: 1, doorContact: 1, rex: 0,
                reasoning: "The stockroom uses a rim exit device, so the mechanical exit device itself provides free egress and no separate REX is required.",
                productQuestion: {
                    prompt: "The stockroom uses a rim exit device and needs a compatible electric strike. Which product should you select?",
                    options: [
                        { id: "hes9600", label: "HES 9600" },
                        { id: "hes1006", label: "HES 1006" },
                        { id: "hes1006f", label: "HES 1006-F" },
                        { id: "vd9899", label: "Von Duprin 98/99" }
                    ],
                    correctOptionId: "hes9600"
                }
            },
            { id: "d3", label: "Door 3 — Interior Office A", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the main entrance, so no REX is needed." },
            { id: "d4", label: "Door 4 — Interior Office B", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the main entrance, so no REX is needed." },
            { id: "d5", label: "Door 5 — Records Room (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, and this door is monitored but has no egress requirement of its own." },
            { id: "d6", label: "Door 6 — Breakroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the breakroom, and there is no egress requirement for this door." }
        ],
        systemEquipment: { controller: 2, powerSupply: 2, interfaceModule: 0 },
        systemReasoning: "Because each controller supports a maximum of three doors and this project has six doors, two controllers are needed. The design calls for one power supply per controller, so two power supplies are needed as well.",
        summaryReasoning: "Door 5 reuses its existing lock hardware, so only 5 doors need new lock hardware. Doors 1, 2, 3, 4, and 5 are monitored (5 door contacts), and only Door 1 needs a REX.",
        explanation: "With six doors and a stated three-door-per-controller limit for this project, the design needs two controllers and two power supplies. Door 1's cylindrical lockset needs the HES 1006, while the stockroom's rim exit device needs the HES 9600 and no separate REX."
    },
    {
        id: "acsd-m4",
        difficulty: "medium",
        projectName: "Alpine Grove Elementary",
        scenarioText: "Alpine Grove Elementary is controlling four doors. Sales rep Beatrice Solano is on the account, and facilities director Owen Marsh requested the upgrade. The fire marshal specifically required fail-safe operation on the stairwell reentry door. The project number is AG-4410. This is a single-building, single-controller project.",
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
            { id: "d3", label: "Door 3 — Classroom Wing Door", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the classroom wing door, and there is no egress requirement for this door." },
            { id: "d4", label: "Door 4 — Gymnasium (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, and this door is monitored, but staff exit through the main entrance, so no REX is needed." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        systemReasoning: "One controller and power supply support all four doors in this single-building project.",
        summaryReasoning: "Door 4 reuses its existing lock hardware, so only 3 doors need new lock hardware. Doors 1, 2, and 4 are monitored (3 door contacts), and Doors 1 and 2 need a REX (2 REX).",
        explanation: "The fire marshal's explicit fail-safe requirement on the stairwell reentry door calls for the HES 1006-F, while the main entrance uses the standard fail-secure HES 1006. Door 4 reuses its existing hardware and skips REX since staff exit through the main entrance."
    },
    {
        id: "acsd-m5",
        difficulty: "medium",
        projectName: "Bridgeport Logistics Hub",
        scenarioText: "Bridgeport Logistics Hub is controlling five doors. Sales rep Renata Ibsen is on the account, and warehouse supervisor Colin Marsh coordinated the walkthrough. The shipment tracking number is TRK-90218. This is a single-building, single-controller project.",
        doors: [
            { id: "d1", label: "Door 1 — Dock Exterior", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This dock door already has mechanical panic hardware for egress, so no separate REX is required." },
            { id: "d2", label: "Door 2 — Dock (Existing Mag-Lock Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 1, reasoning: "The existing mag-lock stays in place, but this door sits on its own egress path, so it still needs a REX." },
            { id: "d3", label: "Door 3 — Office Interior A", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the dock doors, so no REX is needed." },
            { id: "d4", label: "Door 4 — Office Interior B", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the dock doors, so no REX is needed." },
            { id: "d5", label: "Door 5 — Supply Closet (Existing Hardware, Reader Only)", reader: 1, lockHardware: 0, doorContact: 0, rex: 0, reasoning: "The supply closet keeps its existing hardware entirely — only a reader is added for reporting, with no monitoring or REX requested." }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        systemReasoning: "One controller and power supply support all five doors in this single-building project.",
        summaryReasoning: "Doors 2 and 5 reuse existing lock hardware, so only 3 doors need new lock hardware. Doors 1, 2, 3, and 4 are monitored (4 door contacts), and only Door 2 needs a REX.",
        explanation: "Mechanical panic hardware removes the REX requirement on Door 1, Door 2's mag-lock reuse still needs a REX because of its egress path, and Door 5 only adds a reader with no other new hardware."
    },
    {
        id: "acsd-h1",
        difficulty: "hard",
        projectName: "Meridian Health Sciences Campus",
        scenarioText: "Meridian Health Sciences Campus is upgrading access control across two buildings: Building A (main entrance, administration, records, breakroom) and Building B (staff entrance, maintenance, equipment room, storage). Building A and Building B are physically separate and use separate access-control systems, so each building requires its own controller and power supply. Sales rep Julia Fenwick is on the account, and building owner Crestline Holdings is footing the project. The equipment room in Building B is tied into the fire alarm system for a life-safety release function. The material ticket number is MC-81340.",
        doors: [
            { id: "d1", label: "Door 1 — Building A Main Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "Building A's main entrance needs full monitoring and a REX as the secured exterior opening." },
            { id: "d2", label: "Door 2 — Building A Administration", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "Administration is monitored, but staff exit through the main entrance, so no REX is needed." },
            { id: "d3", label: "Door 3 — Building A Records (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, and this door is monitored but has no egress requirement of its own." },
            { id: "d4", label: "Door 4 — Building A Breakroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the breakroom, and there is no egress requirement for this door." },
            { id: "d5", label: "Door 5 — Building B Staff Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "Building B's staff entrance needs full monitoring and a REX as the secured exterior opening." },
            { id: "d6", label: "Door 6 — Building B Maintenance", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "Maintenance is monitored, but staff exit through the staff entrance, so no REX is needed." },
            { id: "d7", label: "Door 7 — Building B Equipment Room (Fire Alarm Tie-In)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "This door is tied into the fire alarm system for a life-safety release function, which requires an additional interface module at the system level, in addition to its own monitoring and REX." },
            { id: "d8", label: "Door 8 — Building B Storage", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for storage, and there is no egress requirement for this door." }
        ],
        systemEquipment: { controller: 2, powerSupply: 2, interfaceModule: 1 },
        systemReasoning: "Because Building A and Building B use separate access-control systems, each building needs its own controller and power supply (2 controllers, 2 power supplies). Door 7's fire alarm integration requires one additional interface module.",
        summaryReasoning: "Door 3 reuses its existing lock hardware, so only 7 doors need new lock hardware. Doors 1, 2, 3, 5, 6, and 7 are monitored (6 door contacts), and Doors 1, 5, and 7 need a REX (3 REX).",
        explanation: "The two buildings' separate access-control systems each need their own controller and power supply, and Door 7's fire alarm release function requires the one additional interface module. Door 3 reuses its existing hardware."
    },
    {
        id: "acsd-h2",
        difficulty: "hard",
        projectName: "Cascade County Public Works Complex",
        scenarioText: "Cascade County Public Works Complex is controlling seven doors in one building. Sales rep Gabriel Whitfield is coordinating the account, and facilities manager Denise Calloway is the point of contact. For this exercise, each controller supports a maximum of four controlled doors, and the design calls for one power supply for each controller. The PO number is PO-90441.",
        doors: [
            {
                id: "d1", label: "Door 1 — Main Entrance (Cylindrical Lockset)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The main entrance needs full monitoring and a REX as the secured exterior opening.",
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
            {
                id: "d2", label: "Door 2 — Second Entrance (Cylindrical Lockset)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The second entrance is also a secured exterior opening and needs full monitoring plus a REX.",
                productQuestion: {
                    prompt: "Door 2 uses a cylindrical lockset and needs a fail-secure electric strike. Which product should you select?",
                    options: [
                        { id: "hes1006", label: "HES 1006" },
                        { id: "hes1006f", label: "HES 1006-F" },
                        { id: "hes9600", label: "HES 9600" },
                        { id: "vdqel", label: "Von Duprin QEL" }
                    ],
                    correctOptionId: "hes1006"
                }
            },
            {
                id: "d3", label: "Door 3 — Records (Rim Exit Device)", reader: 1, lockHardware: 1, doorContact: 1, rex: 0,
                reasoning: "Records uses a rim exit device, so the mechanical exit device itself provides free egress and no separate REX is required.",
                productQuestion: {
                    prompt: "Door 3 uses a rim exit device and needs a compatible electric strike. Which product should you select?",
                    options: [
                        { id: "hes9600", label: "HES 9600" },
                        { id: "hes1006", label: "HES 1006" },
                        { id: "hes1006f", label: "HES 1006-F" },
                        { id: "vd9899", label: "Von Duprin 98/99" }
                    ],
                    correctOptionId: "hes9600"
                }
            },
            { id: "d4", label: "Door 4 — Interior Office A", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the main entrance, so no REX is needed." },
            { id: "d5", label: "Door 5 — Interior Office B", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the main entrance, so no REX is needed." },
            { id: "d6", label: "Door 6 — Archive Room (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, and this door is monitored but has no egress requirement of its own." },
            { id: "d7", label: "Door 7 — Breakroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the breakroom, and there is no egress requirement for this door." }
        ],
        systemEquipment: { controller: 2, powerSupply: 2, interfaceModule: 0 },
        systemReasoning: "Because each controller supports a maximum of four doors and this project has seven doors, two controllers are needed. The design calls for one power supply per controller, so two power supplies are needed as well.",
        summaryReasoning: "Door 6 reuses its existing lock hardware, so only 6 doors need new lock hardware. Doors 1 through 6 are monitored (6 door contacts), and Doors 1 and 2 need a REX (2 REX).",
        explanation: "With seven doors and a stated four-door-per-controller limit for this project, the design needs two controllers and two power supplies. Doors 1 and 2 each need their own HES 1006 (2 total), and Door 3's rim exit device needs the HES 9600."
    },
    {
        id: "acsd-h3",
        difficulty: "hard",
        projectName: "Sterling Oaks Corporate Tower",
        scenarioText: "Sterling Oaks Corporate Tower is controlling six doors across two floors of one building. Sales rep Owen Castellano is on the account, and building engineer Denise Farrow coordinated the project. For this exercise, the design assigns one controller per floor. A stairwell reentry door on the second floor has a fire marshal-mandated fail-safe requirement, and a first-floor door is tied into the fire alarm system for a life-safety release function. The alarm company on-site is Cobalt Sentinel Systems.",
        doors: [
            { id: "d1", label: "Door 1 — Floor 1 Lobby Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The lobby entrance needs full monitoring and a REX as the secured exterior opening." },
            { id: "d2", label: "Door 2 — Floor 1 Office (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, and this door is monitored but has no egress requirement of its own." },
            { id: "d3", label: "Door 3 — Floor 1 Fire Alarm Tie-In Door", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "This door is tied into the fire alarm system for a life-safety release function, which requires an additional interface module at the system level, in addition to its own monitoring and REX." },
            { id: "d4", label: "Door 4 — Floor 2 Office", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the stairwell, so no REX is needed." },
            { id: "d5", label: "Door 5 — Floor 2 Storage (Existing Hardware, Reader Only)", reader: 1, lockHardware: 0, doorContact: 0, rex: 0, reasoning: "This storage room keeps its existing hardware entirely — only a reader is added for reporting, with no monitoring or REX requested." },
            {
                id: "d6", label: "Door 6 — Floor 2 Stairwell Reentry Door", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
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
            }
        ],
        systemEquipment: { controller: 2, powerSupply: 2, interfaceModule: 1 },
        systemReasoning: "Because this project assigns one controller per floor and there are two floors, two controllers and two power supplies are needed. Door 3's fire alarm integration requires one additional interface module.",
        summaryReasoning: "Doors 2 and 5 reuse existing lock hardware, so only 4 doors need new lock hardware. Doors 1, 2, 3, 4, and 6 are monitored (5 door contacts), and Doors 1, 3, and 6 need a REX (3 REX).",
        explanation: "One controller per floor means two controllers and two power supplies for this project, plus one interface module for Door 3's fire alarm integration. The stairwell reentry door's fire marshal-mandated fail-safe requirement calls for the HES 1006-F."
    },
    {
        id: "acsd-h4",
        difficulty: "hard",
        projectName: "Northfield Regional Medical Center",
        scenarioText: "Northfield Regional Medical Center is upgrading access control across two buildings: the Main Hospital (main entrance, administration, stairwell reentry) and the Outpatient Clinic (clinic entrance, records, stairwell reentry). Each building operates as its own access-controlled area with its own controller and power supply. The fire marshal required fail-safe operation on both buildings' stairwell reentry doors. Sales rep Beatrice Holloway is coordinating the project, and facilities director Owen Kessler is the point of contact. The material ticket number is NR-70214.",
        doors: [
            {
                id: "d1", label: "Door 1 — Main Hospital Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The Main Hospital entrance needs full monitoring and a REX as the secured exterior opening.",
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
            { id: "d2", label: "Door 2 — Main Hospital Administration", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "Administration is monitored, but staff exit through the main entrance, so no REX is needed." },
            {
                id: "d3", label: "Door 3 — Main Hospital Stairwell Reentry", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The fire marshal required fail-safe operation on this stairwell reentry door, and it sits on an egress path, so it needs monitoring and a REX.",
                productQuestion: {
                    prompt: "The fire marshal required a fail-safe electric strike for this stairwell reentry door's cylindrical lockset. Which product should you select?",
                    options: [
                        { id: "hes1006f", label: "HES 1006-F" },
                        { id: "hes1006", label: "HES 1006" },
                        { id: "hes9600", label: "HES 9600" },
                        { id: "vdqel", label: "Von Duprin QEL" }
                    ],
                    correctOptionId: "hes1006f"
                }
            },
            { id: "d4", label: "Door 4 — Outpatient Clinic Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "The Outpatient Clinic entrance needs full monitoring and a REX as the secured exterior opening." },
            { id: "d5", label: "Door 5 — Outpatient Clinic Records (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, and this door is monitored but has no egress requirement of its own." },
            {
                id: "d6", label: "Door 6 — Outpatient Clinic Stairwell Reentry", reader: 1, lockHardware: 1, doorContact: 1, rex: 1,
                reasoning: "The fire marshal required fail-safe operation on this stairwell reentry door as well, and it sits on an egress path, so it needs monitoring and a REX.",
                productQuestion: {
                    prompt: "The fire marshal required a fail-safe electric strike for this stairwell reentry door's cylindrical lockset. Which product should you select?",
                    options: [
                        { id: "hes1006f", label: "HES 1006-F" },
                        { id: "hes1006", label: "HES 1006" },
                        { id: "hes9600", label: "HES 9600" },
                        { id: "vdqel", label: "Von Duprin QEL" }
                    ],
                    correctOptionId: "hes1006f"
                }
            }
        ],
        systemEquipment: { controller: 2, powerSupply: 2, interfaceModule: 0 },
        systemReasoning: "Because each building operates as its own access-controlled area, each needs its own controller and power supply (2 controllers, 2 power supplies).",
        summaryReasoning: "Door 5 reuses its existing lock hardware, so only 5 doors need new lock hardware. Doors 1, 2, 3, 4, 5, and 6 are monitored (6 door contacts), and Doors 1, 3, 4, and 6 need a REX (4 REX).",
        explanation: "Each building's separate access-controlled area needs its own controller and power supply. Both stairwell reentry doors need the fire marshal-mandated HES 1006-F, while the two building entrances use the standard fail-secure HES 1006."
    },
    {
        id: "acsd-h5",
        difficulty: "hard",
        projectName: "Vantage Point Business Campus",
        scenarioText: "Vantage Point Business Campus is upgrading access control across two buildings. Building A has six controlled doors and Building B has four controlled doors. For this exercise, each controller supports a maximum of five controlled doors, and each building's controllers require their own dedicated power supplies. Because Building A and Building B's controllers are networked together on a shared segment, the design also requires one interface module to tie them together. Sales rep Sam Whitcombe is coordinating between Highline Construction and the property owner, Meridian Holdings Group. The PO number is PO-90876.",
        doors: [
            { id: "d1", label: "Door 1 — Building A Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "Building A's exterior entrance needs full monitoring and a REX." },
            { id: "d2", label: "Door 2 — Building A Loading Dock", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This dock door already has mechanical panic hardware for egress, so no separate REX is required." },
            { id: "d3", label: "Door 3 — Building A Interior Suite (Existing Hardware Reused)", reader: 1, lockHardware: 0, doorContact: 1, rex: 0, reasoning: "The existing lock hardware stays in place, and this door is monitored but has no egress requirement of its own." },
            { id: "d4", label: "Door 4 — Building A Office A", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the exterior entrance, so no REX is needed." },
            { id: "d5", label: "Door 5 — Building A Office B", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the exterior entrance, so no REX is needed." },
            { id: "d6", label: "Door 6 — Building A Records", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "Records is monitored, but staff exit through the exterior entrance, so no REX is needed." },
            { id: "d7", label: "Door 7 — Building B Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1, reasoning: "Building B's exterior entrance needs full monitoring and a REX." },
            { id: "d8", label: "Door 8 — Building B Office", reader: 1, lockHardware: 1, doorContact: 1, rex: 0, reasoning: "This interior office is monitored, but staff exit through the exterior entrance, so no REX is needed." },
            { id: "d9", label: "Door 9 — Building B Breakroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0, reasoning: "Monitoring was not requested for the breakroom, and there is no egress requirement for this door." },
            { id: "d10", label: "Door 10 — Building B Supply Closet (Existing Hardware, Reader Only)", reader: 1, lockHardware: 0, doorContact: 0, rex: 0, reasoning: "The supply closet keeps its existing hardware entirely — only a reader is added for reporting, with no monitoring or REX requested." }
        ],
        systemEquipment: { controller: 3, powerSupply: 3, interfaceModule: 1 },
        systemReasoning: "Building A has six doors, and with a five-door-per-controller limit, it needs two controllers. Building B's four doors fit within a single controller. That's three controllers total, each with its own dedicated power supply (three power supplies), plus one interface module to network Building A's and Building B's controllers together.",
        summaryReasoning: "Doors 3 and 10 reuse existing lock hardware, so only 8 doors need new lock hardware. Doors 9 and 10 aren't monitored, so the other 8 doors are (8 door contacts), and only Doors 1 and 7 need a REX (2 REX).",
        explanation: "Building A's six doors require two controllers under the stated five-door limit, while Building B's four doors fit in one controller — three controllers total, each with its own power supply, plus one interface module to network the two buildings' controllers together."
    }
];
