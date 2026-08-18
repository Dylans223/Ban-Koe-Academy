// Fictional training scenarios for the Access Control Scenarios application exercise.
// None of this data represents real Ban-Koe customers or projects.
// Product references (HID Aero/Signo/VertX, HES, Von Duprin, PS914) are drawn from the existing
// Access Control question bank (data/accessControlQuestions.js) — no specs are invented here.
//
// Schema:
//   doors[]: door-specific hardware quantities (reader, lockHardware, doorContact, rex)
//   systemEquipment: project-level shared hardware (controller, powerSupply, interfaceModule)
//   productQuestion (optional): a single-select part-number question tied to one door
const ACCESS_CONTROL_SCENARIOS = [
    {
        id: "ac-e1",
        difficulty: "easy",
        title: "Single Exterior Door — Harborview Retail",
        scenarioText: "Harborview Retail wants controlled access on their single exterior entrance. Customers should badge in from the outside, and employees need to be able to leave freely from the inside without presenting a credential. Store manager Colleen Frey requested the upgrade, and the installer on the job is Marty Suarez. The PO number for the project is PO-55210.",
        doors: [
            { id: "d1", label: "Door 1 — Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        explanation: "One exterior door needs a reader for badge-in, lock hardware for control, a door contact to monitor position, and a REX device so employees can leave freely without a credential. A single-door controller and power supply support the door."
    },
    {
        id: "ac-e2",
        difficulty: "easy",
        title: "IT Closet Door — Bellweather Corporate Center",
        scenarioText: "Bellweather Corporate Center wants credential access added to their IT closet. The door currently uses a mechanical mortise lock that will be replaced with an electrified version. Free egress is provided by a push-button REX mounted inside the closet. The facilities lead, Owen Park, does not want door-position monitoring added at this time — only access control. The building engineer is Nadia Ruiz.",
        doors: [
            { id: "d1", label: "Door 1 — IT Closet", reader: 1, lockHardware: 1, doorContact: 0, rex: 1 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        explanation: "The door needs a reader, an electrified lock (the mortise lock is being replaced), and a REX for free egress. Door position monitoring was explicitly not requested, so no door contact is required here."
    },
    {
        id: "ac-e3",
        difficulty: "easy",
        title: "Server Room Mag-Lock — Coldwater Data Center",
        scenarioText: "Coldwater Data Center needs a magnetic lock installed on their server room door for higher holding force. Because this fail-safe lock is on an egress path, the opening requires both door position monitoring and a request-to-exit device. The project manager is Dana Whitfield, and the ticket for the material is CW-40218.",
        doors: [
            { id: "d1", label: "Door 1 — Server Room", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        explanation: "Because this fail-safe lock is on an egress path, the opening requires door monitoring and a request-to-exit device, in addition to the reader, lock hardware, controller, and power supply."
    },
    {
        id: "ac-e4",
        difficulty: "easy",
        title: "Reusing Existing Hardware — Prairie Wind Apartments Leasing Office",
        scenarioText: "Prairie Wind Apartments wants to add access control to their leasing office door. The existing mechanical lockset is in good condition and will remain in place — the customer only wants a reader, door monitoring, REX, and the supporting controller and power added. Leasing agent Carla Nunez placed the request, and the vendor invoice number is INV-71440.",
        doors: [
            { id: "d1", label: "Door 1 — Leasing Office", reader: 1, lockHardware: 0, doorContact: 1, rex: 1 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        explanation: "The customer is keeping the existing mechanical lockset, so no new lock hardware is required — only the reader, door contact, REX, controller, and power supply."
    },
    {
        id: "ac-e5",
        difficulty: "easy",
        title: "Simple Badge Door — Ridgeline Manufacturing Breakroom",
        scenarioText: "Ridgeline Manufacturing wants a badge reader added to their breakroom door for credentialed entry. The door already has mechanical panic hardware providing free egress, so no REX device is needed, and the customer specifically declined door-position monitoring for this opening. The safety coordinator, Marcus Hale, is the point of contact.",
        doors: [
            { id: "d1", label: "Door 1 — Breakroom", reader: 1, lockHardware: 1, doorContact: 0, rex: 0 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        explanation: "Because mechanical panic hardware already provides free egress and the customer declined monitoring, this door only needs a reader, lock hardware, controller, and power supply — no REX or door contact."
    },
    {
        id: "ac-m1",
        difficulty: "medium",
        title: "Three-Door Office Suite — Northbend Legal Group",
        scenarioText: "Northbend Legal Group is controlling three doors in their new suite. Door 1 is the exterior entrance and needs card access, door monitoring, and free egress via REX. Doors 2 and 3 are interior office doors that also need card access and door monitoring, but the office manager confirmed REX is not required on the interior doors since staff exit through the main lobby. Office manager Priya Shah handled the walkthrough, and the general contractor is Vantage Builders.",
        doors: [
            { id: "d1", label: "Door 1 — Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d2", label: "Door 2 — Interior Office", reader: 1, lockHardware: 1, doorContact: 1, rex: 0 },
            { id: "d3", label: "Door 3 — Interior Office", reader: 1, lockHardware: 1, doorContact: 1, rex: 0 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        explanation: "All three doors need a reader, lock hardware, and door monitoring, but only the exterior door needs a REX since interior staff exit through the lobby. A single multi-door controller and power supply can support all three doors."
    },
    {
        id: "ac-m2",
        difficulty: "medium",
        title: "Warehouse Dock Doors — Copper Basin Logistics",
        scenarioText: "Copper Basin Logistics has two dock-level doors that need controlled access. Both doors need readers and door monitoring. Door A uses an electric strike, but Door B already has a mag-lock installed from a prior project, so no new lock hardware is needed there — just the reader and monitoring. Door B is on an egress path, so its fail-safe mag-lock still needs a request-to-exit device even though the lock hardware itself is being reused. Door A does not need a REX since it uses mechanical panic hardware for egress. The warehouse supervisor is Todd Wren, and the shipment tracking number for the readers is TRK-88410.",
        doors: [
            { id: "d1", label: "Door A — Dock Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 0 },
            { id: "d2", label: "Door B — Existing Mag-Lock", reader: 1, lockHardware: 0, doorContact: 1, rex: 1 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        explanation: "Door A needs its own lock hardware but no REX (panic hardware handles egress). Door B reuses the existing mag-lock, so no new lock hardware is needed there. Door B is on an egress path, so its fail-safe mag-lock requires a request-to-exit device even though the existing lock hardware is being reused."
    },
    {
        id: "ac-m3",
        difficulty: "medium",
        title: "Clinic Suite — Fernbrook Family Medicine",
        scenarioText: "Fernbrook Family Medicine is controlling three doors: the main entrance, a medication storage room, and a records room. The main entrance needs a reader, lock hardware, door monitoring, and REX. The medication room needs the same four items because of compliance requirements. The records room only needs a reader and lock hardware — the practice manager, Elaine Cho, said monitoring and REX are not required there. The clinic's building owner is Meridian Health Partners, and the project number is FB-2201.",
        doors: [
            { id: "d1", label: "Door 1 — Main Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d2", label: "Door 2 — Medication Room", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d3", label: "Door 3 — Records Room", reader: 1, lockHardware: 1, doorContact: 0, rex: 0 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        productQuestion: {
            doorId: "d2",
            prompt: "The medication room requires a fail-secure electric strike for a cylindrical lockset. Which product should you select?",
            options: [
                { id: "hes1006", label: "HES 1006" },
                { id: "hes1006f", label: "HES 1006-F" },
                { id: "hes9600", label: "HES 9600" },
                { id: "vdqel", label: "Von Duprin QEL" }
            ],
            correctOptionId: "hes1006"
        },
        explanation: "The main entrance and medication room both need full monitoring and REX, but the records room only needs a reader and lock hardware since monitoring and REX were declined there. The HES 1006 is the correct fail-secure strike for a cylindrical lockset; the 1006-F is fail-safe, the 9600 is for rim exit devices, and the QEL is an exit-device option, not a strike."
    },
    {
        id: "ac-m4",
        difficulty: "medium",
        title: "Two-Door Vestibule — Timberline Credit Union",
        scenarioText: "Timberline Credit Union has a two-door vestibule entry. The outer door needs a reader, lock hardware, door monitoring, and REX. The inner door only needs a reader and lock hardware, since it stays unlocked during business hours and monitoring wasn't requested. Branch manager Wesley Grant is the primary contact, and the alarm company on-site is Guardian Sentry Systems.",
        doors: [
            { id: "d1", label: "Door 1 — Outer Vestibule Door", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d2", label: "Door 2 — Inner Vestibule Door", reader: 1, lockHardware: 1, doorContact: 0, rex: 0 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        explanation: "REX isn't needed because the door stays unlocked during business hours, and no door monitoring was requested for this opening. The reader and lock hardware remain part of the access-control requirement."
    },
    {
        id: "ac-m5",
        difficulty: "medium",
        title: "Community Center Wing — Aspen Grove Rec Center",
        scenarioText: "Aspen Grove Rec Center is adding access control to a three-door wing: a gym entrance, an equipment storage room, and an office. The gym entrance and office both need a reader, lock hardware, door monitoring, and REX. The storage room needs a reader, lock hardware, and door monitoring, but no REX since staff exit through the gym. The office has its own exterior-facing exit and therefore requires its own REX, while staff in the storage room exit through the gym instead of using this door. Facilities director Renee Ostrander requested the upgrade, and the delivery includes six boxes total.",
        doors: [
            { id: "d1", label: "Door 1 — Gym Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d2", label: "Door 2 — Equipment Storage", reader: 1, lockHardware: 1, doorContact: 1, rex: 0 },
            { id: "d3", label: "Door 3 — Office", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        explanation: "The gym entrance and office both need full monitoring and REX, but the storage room doesn't need REX since staff exit through the gym."
    },
    {
        id: "ac-h1",
        difficulty: "hard",
        title: "Mixed Hardware Retrofit — Silver Creek Office Park",
        scenarioText: "Silver Creek Office Park is retrofitting three doors with different requirements. Door 1 is the exterior entrance and needs a reader, a new electric strike, door monitoring, and REX. Door 2 is an interior door with an existing mag-lock that will stay in place, so it only needs a reader and door monitoring — no REX, since the fire marshal noted this door isn't on an egress path. Door 3 has existing hardware the customer wants reused entirely; it only needs a reader added for reporting purposes, with no lock hardware, no monitoring, and no REX. Property manager Alicia Byrne coordinated the walkthrough, and the general contractor invoiced under INV-90210.",
        doors: [
            { id: "d1", label: "Door 1 — Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d2", label: "Door 2 — Existing Mag-Lock", reader: 1, lockHardware: 0, doorContact: 1, rex: 0 },
            { id: "d3", label: "Door 3 — Existing Hardware, Reader Only", reader: 1, lockHardware: 0, doorContact: 0, rex: 0 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        explanation: "Each door has different needs: Door 1 gets the full new installation, Door 2 reuses its mag-lock and skips REX since it isn't an egress path, and Door 3 only adds a reader for reporting with no other new hardware. Applying the same equipment to every door would be incorrect here."
    },
    {
        id: "ac-h2",
        difficulty: "hard",
        title: "Mixed Interface Requirements — Blue Mesa Tech Campus",
        scenarioText: "Blue Mesa Tech Campus has two doors with different interface needs in addition to standard door hardware. Door 1 is a standard controlled door needing a reader, lock hardware, door monitoring, and REX. Door 2 also needs those same four items, but because Door 2 is tied into the fire alarm system for a life-safety release function, the project requires an additional interface/relay module to support that integration. IT director Grant Osei is overseeing the project, and the sales order number is SO-33210.",
        doors: [
            { id: "d1", label: "Door 1 — Standard Door", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d2", label: "Door 2 — Fire Alarm Interface Door", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 1 },
        explanation: "Both doors need the same base hardware, but Door 2's fire alarm release integration requires an additional interface/relay module at the system level that Door 1 does not need."
    },
    {
        id: "ac-h3",
        difficulty: "hard",
        title: "System Design — Cascade Ridge Professional Building",
        scenarioText: "Cascade Ridge Professional Building needs a four-door system: two exterior entrances and two interior tenant doors. Both exterior doors need a reader, lock hardware, door monitoring, and REX. Both interior tenant doors need a reader, lock hardware, and door monitoring, but no REX since tenants exit through the shared exterior doors. Because there are four doors on this project, the system needs a controller capable of supporting all four access points, and the power supply must be sized for the combined load — the design calls for one controller and one power supply. Building owner Highline Realty Group is footing the project, and the leasing coordinator is Brooke Ainsley.",
        doors: [
            { id: "d1", label: "Door 1 — Exterior Entrance A", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d2", label: "Door 2 — Exterior Entrance B", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d3", label: "Door 3 — Tenant Suite A", reader: 1, lockHardware: 1, doorContact: 1, rex: 0 },
            { id: "d4", label: "Door 4 — Tenant Suite B", reader: 1, lockHardware: 1, doorContact: 1, rex: 0 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        explanation: "Both exterior doors need full monitoring and REX, while the interior tenant doors skip REX since tenants exit through the exterior doors. Because one controller can support all four access points here, only one controller and one power supply are needed for the whole system."
    },
    {
        id: "ac-h4",
        difficulty: "hard",
        title: "Mixed Product Selection — Driftwood Marina Office",
        scenarioText: "Driftwood Marina's office has two doors. Door 1 is the exterior entrance with a cylindrical lockset that needs a fail-secure electric strike, a reader, door monitoring, and REX. Door 2 is an interior door using a rim exit device that needs a surface-mounted electric strike compatible with that hardware, plus a reader and door monitoring, but no separate REX since the mechanical exit device itself provides free egress. The marina's general manager, Todd Kessler, is the point of contact, and the packing slip number is PS-61820.",
        doors: [
            { id: "d1", label: "Door 1 — Exterior Entrance (Cylindrical Lockset)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d2", label: "Door 2 — Interior Rim Exit Device", reader: 1, lockHardware: 1, doorContact: 1, rex: 0 }
        ],
        systemEquipment: { controller: 1, powerSupply: 1, interfaceModule: 0 },
        productQuestion: {
            doorId: "d2",
            prompt: "Door 2 uses a rim exit device and needs a surface-mounted electric strike. Which product should you select?",
            options: [
                { id: "hes9600", label: "HES 9600" },
                { id: "hes1006", label: "HES 1006" },
                { id: "hes1006f", label: "HES 1006-F" },
                { id: "vd9899", label: "Von Duprin 98/99" }
            ],
            correctOptionId: "hes9600"
        },
        explanation: "Door 1's cylindrical lockset pairs with a standard fail-secure strike, while Door 2 uses a rim exit device, so no separate REX is required because the mechanical exit device itself provides free egress. The HES 9600 is specifically designed as a surface-mounted strike for rim exit devices."
    },
    {
        id: "ac-h5",
        difficulty: "hard",
        title: "Real-World Project — Meridian Business Park (6 Doors)",
        scenarioText: "Meridian Business Park is a larger rollout with six controlled doors across two buildings: two exterior entrances and four interior suite doors. Both exterior entrances need a reader, lock hardware, door monitoring, and REX. Of the four interior suite doors, three need a reader, lock hardware, and door monitoring with no REX (tenants exit through the exterior doors), but one suite door (Suite D) has a fire-rated egress requirement and needs its own REX in addition to the reader, lock hardware, and monitoring. Because of the number of doors and the building layout, the design calls for two controllers (one per building) and two power supplies, plus one additional interface module to tie the two controllers together on a shared network segment. Project manager Sam Whitcombe is coordinating between Highline Construction and the property owner, Meridian Holdings Group. The material ticket number is MB-77201, and the PO number is PO-90876.",
        doors: [
            { id: "d1", label: "Door 1 — Building A Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d2", label: "Door 2 — Building B Exterior Entrance", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 },
            { id: "d3", label: "Door 3 — Suite A", reader: 1, lockHardware: 1, doorContact: 1, rex: 0 },
            { id: "d4", label: "Door 4 — Suite B", reader: 1, lockHardware: 1, doorContact: 1, rex: 0 },
            { id: "d5", label: "Door 5 — Suite C", reader: 1, lockHardware: 1, doorContact: 1, rex: 0 },
            { id: "d6", label: "Door 6 — Suite D (Fire-Rated Egress)", reader: 1, lockHardware: 1, doorContact: 1, rex: 1 }
        ],
        systemEquipment: { controller: 2, powerSupply: 2, interfaceModule: 1 },
        explanation: "Both exterior doors and Suite D need REX, while Suites A, B, and C don't because tenants exit through the exterior doors. With six doors across two buildings, the system needs two controllers and two power supplies, plus one interface module to network the two controllers together."
    }
];
