// Suggested courses for the Suggestions tab ONLY.
// Nothing here counts toward progress unless the owner adds it to the planner on the Suggestions tab.
// "dist" = the course's A&S distribution codes (copied onto the course when it's added).
// "fills" keys: dist:<CODE>, econ:3030, econ:metrics, econ:4000, econ:elective,
//               bus:Marketing, bus:Financial Accounting, bus:Finance,
//               fash:1250, fash:1000, fash:2000, fash:4000
window.SUGGESTIONS = {
  checked: "2026-11-20",
  courses: [
    // --- Distribution ---
    { code: "ASTRO 1198", dist: ["ALC", "PHS"], title: "Archeoastronomy", credits: "3", fills: ["dist:ALC", "dist:PHS"], note: "Covers two missing categories in one course. Check the Class Roster for which semester it runs." },
    { code: "AAS 2100", dist: ["ALC", "GLC"], title: "South Asian Diaspora", credits: "3*", fills: ["dist:ALC", "dist:GLC"], note: "Covers two missing categories in one course." },
    { code: "ASTRO 1101", dist: ["PHS"], title: "From New Worlds to Black Holes", credits: "3", fills: ["dist:PHS"], note: "Fall. Intro astronomy for non-majors." },
    { code: "BIOEE 1610", dist: ["BIO"], title: "Ecology and the Environment", credits: "3–4", fills: ["dist:BIO"], note: "Offered most semesters. The 4-credit option adds a writing component." },
    { code: "PHIL 1440", dist: ["ETM"], title: "Ethics of Eating", credits: "3", fills: ["dist:ETM"], note: "Fall." },
    { code: "PHIL 1100", dist: ["ETM"], title: "Introduction to Philosophy", credits: "3", fills: ["dist:ETM"], note: "Offered most semesters." },
    { code: "AIIS 1110", dist: ["GLC", "SCD"], title: "Indigenous Issues in Global Perspectives", credits: "3", fills: ["dist:GLC"], note: "Also carries Social Difference (SCD), which you already have." },

    // --- Economics major ---
    { code: "ECON 3030", dist: [], title: "Intermediate Microeconomic Theory", credits: "4", fills: ["econ:3030"], note: "Needs ECON 1110 with a B- or better and MATH 1110. Must be taken at Cornell." },
    { code: "ECON 3120", dist: [], title: "Applied Econometrics", credits: "4", fills: ["econ:metrics"], note: "Prerequisite: ECON 3110 or 3130, so it fits right after this spring." },
    { code: "ECON 4560", dist: ["GLC", "SSC"], title: "Development Economics", credits: "3", fills: ["econ:4000", "dist:GLC"], note: "Counts as a 4000-level Econ elective and for Global Citizenship (GLC)." },
    { code: "ECON 4660", dist: [], title: "Behavioral Economics", credits: "4", fills: ["econ:4000"], note: "Prerequisite: ECON 3030." },
    { code: "ECON 4210", dist: [], title: "Money and Credit", credits: "3", fills: ["econ:4000"], note: "Prerequisites: ECON 1110, 1120, 3040. Spring." },
    { code: "ECON 4610", dist: [], title: "Industrial Organization I", credits: "3", fills: ["econ:4000"], note: "Prerequisite: ECON 3030." },
    { code: "ECON 3805", dist: [], title: "Competition Law and Policy", credits: "4", fills: ["econ:elective"], note: "Prerequisite: ECON 1110. Fall." },
    { code: "ECON 3550", dist: [], title: "Economics of Developing Countries", credits: "3", fills: ["econ:elective"], note: "Prerequisite: ECON 1110 or 1120. Spring." },
    { code: "ECON 3910", dist: ["SCD", "SSC"], title: "Health, Poverty, and Inequality: A Global Perspective", credits: "3", fills: ["econ:elective"], note: "Prerequisites: intro micro and statistics. Fall." },
    { code: "ECON 3545", dist: [], title: "Money and Finance in the Digital Age", credits: "3", fills: ["econ:elective"], note: "Prerequisites: ECON 3040 and ECON 3120 or 3140. Fall." },

    // --- Business minor ---
    { code: "AEM 2400", dist: [], title: "Marketing", credits: "3", fills: ["bus:Marketing"], note: "Not A&S credit." },
    { code: "AEM 2210", dist: [], title: "Financial Accounting", credits: "3", fills: ["bus:Financial Accounting"], note: "Not A&S credit." },
    { code: "AEM 2241", dist: [], title: "Finance", credits: "3", fills: ["bus:Finance"], note: "Not A&S credit. Check prerequisites on the Class Roster; accounting usually comes first." },

    // --- Fashion Studies minor ---
    { code: "FSAD 1250", dist: [], title: "Fashion, Art and Design Thinking", credits: "3", fills: ["fash:1250"], note: "Start here. After it, submit the Intention to Minor form to get FSAD enrollment preference." },
    { code: "FSAD 1350", dist: [], title: "Fibers, Fabrics, and Finishes", credits: "3", fills: ["fash:1000"], note: "Overview of textiles and the textile industry." },
    { code: "FSAD 2310", dist: [], title: "Fashion Product Management", credits: "3", fills: ["fash:2000"], note: "Fall. The fashion supply chain, merchandising and costing; a good fit with Business." },
    { code: "FSAD 2190", dist: [], title: "Fashion, Aesthetics and Society", credits: "3", fills: ["fash:2000"], note: "Fashion-art collaborations, media and trends." },
    { code: "FSAD 3200", dist: [], title: "Global Textile and Apparel Sustainability", credits: "3", fills: ["fash:2000"], note: "Fall. Prerequisite: one science course and one economics course." },
    { code: "FSAD 4440", dist: [], title: "Global Fashion Management", credits: "3*", fills: ["fash:4000"], note: "Fashion business at the 4000 level." },
    { code: "FSAD 4444", dist: [], title: "Fiber Science and Apparel Design Futures", credits: "3", fills: ["fash:4000"], note: "" }
  ]
};
