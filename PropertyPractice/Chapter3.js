(() => {
  const questions = [
    {
      topic: "Search strategy: purpose",
      q: "You act for a buyer of a registered freehold house. The buyer asks why searches are needed if 'the Land Registry already shows everything.' What is the best explanation?",
      choices: [
        "Searches are only needed to satisfy the estate agent.",
        "Searches reveal matters outside the register (e.g., local authority, highways, planning/building control, drainage) and help assess practical/legal risks.",
        "Searches replace the need to raise any enquiries.",
        "Searches are only required for unregistered land.",
        "Searches are optional and should only be done after exchange.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Land Registry focuses on title/registered interests. Searches investigate external matters like planning, highways, drainage, contamination and other risks not shown on the register.",
        whyWrong: [
          "Agents may coordinate but searches are for legal risk management.",
          "",
          "Enquiries and searches complement each other; one does not replace the other.",
          "Searches are important for registered and unregistered land.",
          "Searches are typically obtained pre-exchange to inform the buyer before commitment.",
        ],
      },
    },
    {
      topic: "Local authority search: scope",
      q: "Your buyer is concerned about nearby road-widening and enforcement action for a rear extension. Which search is most directly relevant?",
      choices: [
        "Local authority search",
        "Environmental search",
        "Chancel repair search",
        "Bankruptcy search",
        "OS1 priority search",
      ],
      correct: 0,
      explain: {
        whyRight:
          "The local authority search is designed to reveal matters such as planning/building control history, enforcement, and highway/road proposals.",
        whyWrong: [
          "",
          "Environmental searches focus on contamination, landfill, flooding, etc.",
          "Chancel searches relate to potential church repair liability.",
          "Bankruptcy searches relate to an individual’s insolvency status.",
          "OS1 relates to Land Registry priority, not local authority matters.",
        ],
      },
    },
    {
      topic: "Drainage & water search",
      q: "The lender asks whether the property is connected to mains drainage and if any public sewers run within the boundaries. Which search addresses this most directly?",
      choices: [
        "Local authority search",
        "Drainage and water search",
        "Environmental search",
        "Chancel repair search",
        "Index map search",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A drainage and water search (from the water company) typically confirms connections to mains water/sewerage and whether public sewers/water mains affect the land.",
        whyWrong: [
          "Local authority searches do not usually confirm sewer connections or location of public sewers in this way.",
          "",
          "Environmental searches may include water/flood risk but are not the primary sewer connection confirmation.",
          "Chancel repair is unrelated.",
          "Index map searches relate to Land Registry registration boundaries/availability, not drainage.",
        ],
      },
    },
    {
      topic: "Environmental search: contamination",
      q: "An environmental search flags a 'potentially contaminated land' risk because the site was historically industrial. What is your best next step?",
      choices: [
        "Ignore it; environmental search results are always overly cautious.",
        "Raise targeted enquiries and consider further specialist reports (e.g., environmental consultant) and lender requirements; advise the client on risk and options.",
        "Exchange immediately to avoid delay.",
        "Ask the estate agent to confirm there is no contamination.",
        "Apply to Land Registry to remove the risk entry.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A flagged contamination risk requires further investigation and advice, potentially including specialist reports and considering lender/client appetite and mitigation options.",
        whyWrong: [
          "You cannot assume it is meaningless; it may affect value, liability and mortgageability.",
          "",
          "Exchanging without understanding the risk can expose the buyer to serious liability/marketability issues.",
          "Agent reassurance is not evidence.",
          "Land Registry does not remove contamination risk; it’s not a title register entry issue.",
        ],
      },
    },
    {
      topic: "Flood risk (environmental search)",
      q: "The buyer intends to insure and mortgage the property. The environmental search shows a high surface-water flood risk. What is the most appropriate advice?",
      choices: [
        "Flood risk is never relevant to conveyancing.",
        "Advise the buyer to explore insurability and mortgage implications, consider specialist flood report, and raise enquiries; do not assume it’s acceptable.",
        "Tell the buyer to rely on the seller’s statement that it never flooded.",
        "Proceed without telling the lender to avoid delays.",
        "Flood risk is only a concern for leasehold flats.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Flood risk can affect insurance availability/premium and lender appetite. You should advise on obtaining further information and ensuring buyer/lender accept the risk.",
        whyWrong: [
          "Flood risk is frequently material to value, usability and insurability.",
          "",
          "Seller statements are not a substitute for objective assessment/insurer checks.",
          "If acting for a lender, material risks may need reporting under instructions.",
          "Flood risk can affect any property type.",
        ],
      },
    },
    {
      topic: "Chancel repair liability (overview)",
      q: "A chancel search indicates potential chancel repair liability in the parish. What is the most common conveyancing response (if the buyer and lender require comfort)?",
      choices: [
        "Do nothing because chancel liability was abolished for all properties years ago.",
        "Arrange chancel indemnity insurance (subject to insurer conditions) if appropriate and acceptable.",
        "Apply for retrospective planning permission.",
        "Ask the vicar to sign a waiver letter.",
        "Register a restriction at Land Registry to remove it.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where risk is indicated, chancel indemnity insurance is a common risk-management tool, provided conditions are satisfied and the buyer/lender accept it.",
        whyWrong: [
          "It is not universally abolished in a way that eliminates all risk for all titles.",
          "",
          "Planning permission is unrelated.",
          "Contacting the parish/church can invalidate insurance and is not a standard cure.",
          "You cannot remove potential liability by registering a restriction.",
        ],
      },
    },
    {
      topic: "Search ordering: timing before exchange",
      q: "Your buyer is pushing to exchange quickly and asks to order searches after exchange to save time. What is the key risk?",
      choices: [
        "No risk; searches are purely administrative.",
        "The buyer could be bound by contract without knowing adverse matters (e.g., enforcement, road schemes) and may still have to complete or suffer breach consequences.",
        "Searches cannot be ordered after exchange.",
        "The seller can sue the local authority for slow searches.",
        "The buyer will automatically get a discount.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Searches are part of due diligence. Exchanging without them risks the buyer being contractually bound despite undiscovered adverse issues.",
        whyWrong: [
          "Searches often reveal material risks; they’re not just admin.",
          "",
          "Searches can be ordered at any time, but doing so after exchange is risky.",
          "Delays are not typically actionable by the seller against the authority in this context.",
          "There is no automatic price reduction.",
        ],
      },
    },
    {
      topic: "Enquiries: purpose and tailoring",
      q: "Which is the best description of pre-contract enquiries in a freehold purchase?",
      choices: [
        "Standard questions that never change, regardless of the property.",
        "Targeted questions based on title, searches, and the buyer’s intended use to clarify issues and manage risk.",
        "Only questions about the seller’s personal finances.",
        "Only questions asked after completion.",
        "A substitute for reading the title register.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Enquiries should be tailored to the transaction, focusing on issues arising from title, searches, forms, and the client’s plans, to enable informed exchange.",
        whyWrong: [
          "While there are standard sets, they must be adapted to issues and risk profile.",
          "",
          "Seller finances are generally irrelevant (except e.g., redemption/insolvency contexts).",
          "Enquiries are pre-contract and should be resolved before exchange where possible.",
          "They complement, not replace, investigation of the register.",
        ],
      },
    },
    {
      topic: "TA6: disputes and complaints",
      q: "The TA6 indicates an ongoing boundary dispute with the neighbour. What is your best next step?",
      choices: [
        "Ignore it because boundary disputes are never disclosed in TA6.",
        "Raise further enquiries to understand the nature/status of the dispute and advise on risks (marketability, lender) and possible solutions before exchange.",
        "Tell the buyer disputes end automatically on completion.",
        "Ask the estate agent to mediate and exchange immediately.",
        "Remove the TA6 from the file because it’s unhelpful.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Boundary disputes are material. You should investigate details, assess impact on value/marketability, and advise buyer/lender before commitment.",
        whyWrong: [
          "It is directly disclosed and can be highly relevant.",
          "",
          "Disputes do not automatically end on completion.",
          "Rushing can expose the buyer to ongoing litigation or difficulty selling/mortgaging.",
          "You must keep and consider the disclosure; deleting it is improper.",
        ],
      },
    },
    {
      topic: "Planning permission vs building regulations",
      q: "The seller built a rear extension. The local authority search shows planning permission was granted, but there is no building regulations completion certificate. What is the key point?",
      choices: [
        "Planning permission automatically proves building regs compliance.",
        "Planning and building regulations are separate; lack of building regs sign-off may indicate compliance/enforcement/insurability issues requiring further investigation.",
        "Building regulations do not apply to extensions.",
        "If planning is fine, lenders never care about building regs.",
        "A TA10 form replaces the certificate.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Planning and building regulations are distinct regimes. Missing building regs evidence can create enforcement, safety, insurance and lender concerns.",
        whyWrong: [
          "Planning consent does not confirm building regs compliance.",
          "",
          "Extensions often require building regs approval/notification.",
          "Many lenders require comfort on building regs for alterations.",
          "TA10 concerns contents, not compliance certificates.",
        ],
      },
    },
    {
      topic: "Regularisation and enforcement risk",
      q: "A loft conversion was completed 3 years ago with no building control approval. The seller suggests applying for regularisation now. What is a key risk of contacting the local authority at this stage?",
      choices: [
        "There is no risk; contacting the local authority always improves the buyer’s position.",
        "It may trigger enforcement attention and can also prejudice the availability of indemnity insurance if that is being considered.",
        "It automatically reduces SDLT.",
        "It converts the freehold to leasehold.",
        "It removes any restrictive covenants.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Approaching the authority can alert them to non-compliance and may invalidate insurance options that rely on no contact being made.",
        whyWrong: [
          "Contact can sometimes be appropriate, but it carries enforcement/insurance implications and must be considered carefully.",
          "",
          "It does not affect SDLT.",
          "Tenure does not change.",
          "Covenants are separate from building regs.",
        ],
      },
    },
    {
      topic: "Highways: adopted vs private",
      q: "The buyer is concerned the road serving the property is unadopted. Why does this matter?",
      choices: [
        "It only affects the colour of the road signs.",
        "Maintenance liability and access rights may be uncertain; there may be costs/obligations affecting value and lender willingness.",
        "Unadopted roads are illegal.",
        "It means the property has no planning permission.",
        "It guarantees the buyer will pay less council tax.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Unadopted roads can create maintenance obligations, disputes over contributions, and access issues, which can affect value and mortgageability.",
        whyWrong: [
          "It’s not about signage aesthetics.",
          "",
          "Unadopted roads are common and lawful.",
          "Planning permission is unrelated.",
          "Council tax is not automatically affected.",
        ],
      },
    },
    {
      topic: "Highways enquiries: evidence",
      q: "Which is the most direct way to check whether roads abutting the property are publicly maintained (adopted) and whether there are road proposals affecting the property?",
      choices: [
        "Ask the seller to confirm by text message",
        "Local authority search results (highways/roads proposals) and any specific highways enquiries as needed",
        "Chancel search",
        "Bankruptcy search",
        "Title register only",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Local authority search enquiries typically cover adoption/road proposals (e.g., CON29). Additional highways-specific checks can be made if required.",
        whyWrong: [
          "Seller statements are not authoritative evidence.",
          "",
          "Chancel search is unrelated.",
          "Bankruptcy search is unrelated.",
          "Title may include rights but usually not full highways adoption/proposal detail.",
        ],
      },
    },
    {
      topic: "Tree Preservation Orders and conservation areas",
      q: "The buyer plans to remove a mature tree and repaint windows. Which search result is most likely to flag restrictions like TPOs or conservation area status?",
      choices: [
        "Drainage and water search",
        "Local authority search",
        "Bankruptcy search",
        "OS1 search",
        "Chancel repair search",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Local authority searches can reveal TPOs, conservation area designation, and related planning controls.",
        whyWrong: [
          "Drainage search focuses on water/sewer connections and public sewers.",
          "",
          "Bankruptcy search concerns the buyer’s insolvency status.",
          "OS1 concerns priority for registration.",
          "Chancel liability is unrelated.",
        ],
      },
    },
    {
      topic: "Planning enforcement notices",
      q: "A local authority search reveals an outstanding enforcement notice for an unauthorised outbuilding. What is the key consequence to warn the buyer about?",
      choices: [
        "Enforcement notices are personal to the seller and do not affect buyers.",
        "Enforcement notices can bind successors; the buyer may inherit liability to comply, and lender/marketability may be affected.",
        "The notice automatically expires on completion.",
        "The buyer can ignore it if they pay cash.",
        "The Land Registry will remove it on registration.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Planning enforcement can bind the land, so a buyer may take subject to it and be required to remedy/comply, affecting value and lender security.",
        whyWrong: [
          "Enforcement is often land-related and can affect successors.",
          "",
          "It does not automatically expire on completion.",
          "Funding source does not remove the legal risk.",
          "Land Registry does not simply remove planning enforcement matters.",
        ],
      },
    },
    {
      topic: "Completion certificates and lender comfort",
      q: "A lender is concerned about a 6-year-old extension. Which item most directly evidences building regulations sign-off at completion?",
      choices: [
        "An EPC",
        "A building control completion certificate",
        "A TA10 form",
        "A council tax demand",
        "An OS1 search result",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A building control completion certificate is the standard evidence of building regulations completion/sign-off for works requiring approval.",
        whyWrong: [
          "EPC relates to energy performance, not building regs compliance evidence.",
          "",
          "TA10 concerns contents.",
          "Council tax demands are not compliance certificates.",
          "OS1 is a Land Registry priority search.",
        ],
      },
    },
    {
      topic: "Permitted development vs planning permission",
      q: "The seller says a small rear extension did not need planning permission because it was 'permitted development'. What should you do?",
      choices: [
        "Accept it without question; permitted development needs no evidence.",
        "Investigate whether it was actually permitted development and consider evidence (e.g., documentation, drawings, lawful development certificate), and check building regs compliance separately.",
        "Tell the buyer planning never applies to extensions.",
        "Assume the local authority search will always confirm permitted development.",
        "Exchange immediately; permitted development can’t be challenged.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "You should assess whether the works fell within permitted development and what evidence exists. Even if PD, building regs may still apply, and enforcement risk/evidence matters.",
        whyWrong: [
          "Evidence is important for buyer confidence and lender requirements.",
          "",
          "Planning can apply to many extensions depending on size/location/designation.",
          "Local searches may not 'confirm' PD status conclusively.",
          "PD can still be challenged if it exceeded limits or conditions were breached.",
        ],
      },
    },
    {
      topic: "Section 106 obligations (overview)",
      q: "A buyer is purchasing a property on a newer estate. Why might you investigate whether there is a section 106 agreement affecting the land?",
      choices: [
        "Because it decides the SDLT rate automatically.",
        "Because s106 obligations can impose ongoing restrictions/requirements (e.g., affordable housing, use limitations, contributions) that may bind successors and affect value/use.",
        "Because it proves the seller is the legal owner.",
        "Because it replaces the need for searches.",
        "Because it guarantees highways adoption.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Section 106 agreements can create planning obligations binding the land, affecting use, development potential and sometimes financial obligations.",
        whyWrong: [
          "It does not automatically determine SDLT rate.",
          "",
          "Ownership is proven by title investigation, not s106.",
          "It is one aspect of planning investigation, not a substitute for all searches.",
          "It may relate to highways but does not guarantee adoption.",
        ],
      },
    },
    {
      topic: "CIL (Community Infrastructure Levy) risk",
      q: "A buyer is purchasing a property that had a large extension completed by the seller. Why might Community Infrastructure Levy (CIL) be relevant in some cases?",
      choices: [
        "CIL is payable on every residential purchase automatically.",
        "Certain developments can trigger CIL liability; if unpaid/incorrectly handled, there may be enforcement or liability issues that could affect the land/owner.",
        "CIL is the same as council tax.",
        "CIL is only relevant to unregistered land.",
        "CIL issues are always shown on the title register.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "CIL can apply to certain developments. Non-compliance can lead to enforcement/charges, so it can be relevant where significant works were carried out.",
        whyWrong: [
          "CIL is not automatically payable on every purchase; it relates to development.",
          "",
          "Council tax is different and ongoing, not a development levy.",
          "Registration status is irrelevant to whether CIL applied to works.",
          "CIL matters may not always appear on the title register; investigation may be needed.",
        ],
      },
    },
    {
      topic: "Search result follow-up: raising additional enquiries",
      q: "A local authority search reveals the property abuts a proposed new cycle lane scheme. What is the best next step?",
      choices: [
        "Ignore it because proposals never happen.",
        "Raise additional enquiries and advise the buyer on potential impact (access, noise, value) and whether they wish to proceed/renegotiate.",
        "Exchange immediately; the scheme is not a title issue.",
        "Demand the seller withdraw the council proposal.",
        "Tell the buyer the lender must accept it automatically.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Adverse proposals can affect enjoyment/value. You should clarify details and advise so the buyer can make an informed decision before exchange.",
        whyWrong: [
          "Proposals can proceed; dismissing them is risky.",
          "",
          "It can be material to decision-making even if not strictly a title defect.",
          "The seller cannot withdraw public authority proposals.",
          "Lender acceptance is not automatic; some lenders care about such impacts.",
        ],
      },
    },
    {
      topic: "Seller enquiries: utilities and services",
      q: "The buyer intends to build an outbuilding and needs to know where service media run. What is the most relevant approach?",
      choices: [
        "Only rely on the title plan—service routes are always shown there.",
        "Use searches (drainage/water; potentially utilities enquiries) and raise enquiries with the seller about service routes, wayleaves, and any known issues.",
        "Ask the estate agent to guess the routes.",
        "Exchange first; services can be located after completion with no risk.",
        "Assume services never cross neighbouring land.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Service routes may not be shown on the title plan. Use appropriate searches and targeted enquiries to locate services and identify easements/wayleaves affecting development.",
        whyWrong: [
          "Title plans typically show general boundaries, not detailed service routes.",
          "",
          "Agent guesses are not evidence.",
          "Exchanging without understanding development constraints can expose the buyer to major problems.",
          "Services often cross other land; legal rights may be required.",
        ],
      },
    },
    {
      topic: "CPSE (commercial enquiries) vs residential TA forms",
      q: "You act on a commercial freehold purchase. Which is the most appropriate standard enquiry set to request detailed information about occupational and property management matters?",
      choices: [
        "TA6 and TA10",
        "CPSEs (Commercial Property Standard Enquiries)",
        "Only a chancel search",
        "Only a drainage and water search",
        "OS1 and no enquiries",
      ],
      correct: 1,
      explain: {
        whyRight:
          "On commercial property, CPSEs are commonly used to obtain structured information about occupation, services, disputes, compliance, notices and other relevant matters.",
        whyWrong: [
          "TA6/TA10 are residential-focused forms; they are not the standard commercial enquiry set.",
          "",
          "Chancel is not an enquiry set and is only one risk area.",
          "Drainage is a search, not a broad enquiry set.",
          "OS1 is a priority search; enquiries are still needed.",
        ],
      },
    },
    {
      topic: "Search validity and lender requirements",
      q: "You ordered searches 4 months ago but exchange is now planned. The lender has a policy that searches must be 'no older than 6 months' at completion. What should you do?",
      choices: [
        "Do nothing; search age is irrelevant.",
        "Check the lender’s specific requirements and ensure searches will be acceptable at completion; if not, refresh searches or obtain suitable search validation/updates as required.",
        "Ask the estate agent to confirm the searches are fine.",
        "Exchange and complete without lender funds if needed.",
        "Only refresh the chancel search; the rest do not expire.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "You must comply with lender instructions. If searches will be out of date by completion, you should refresh/validate as required to avoid funding/registration issues.",
        whyWrong: [
          "Lenders often have strict currency requirements.",
          "",
          "Agents don’t set lender criteria.",
          "Completing without lender funds is usually impossible and breaches instructions if acting for lender.",
          "Search currency requirements vary; you must follow the lender’s policy across relevant searches.",
        ],
      },
    },
    {
      topic: "Planning history: reliance on seller statements",
      q: "The seller says there have been 'no alterations'. The buyer later reveals a new conservatory is visible in photos. What is your best step?",
      choices: [
        "Ignore it because conservatories never need consent.",
        "Raise specific enquiries about the conservatory (planning/building regs), request documents, and cross-check against local authority search results.",
        "Ask the buyer to remove the photos from the listing.",
        "Exchange immediately because the seller already answered 'no'.",
        "Treat it as a fixtures and contents issue only.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A discrepancy should be investigated. You should raise enquiries, request evidence of consents/compliance, and check search results.",
        whyWrong: [
          "Some conservatories need consents depending on size/location and building regs issues can arise.",
          "",
          "Removing photos doesn’t resolve legal compliance risks.",
          "You must investigate inconsistencies before exchange.",
          "It is not primarily a contents issue; it is planning/building compliance.",
        ],
      },
    },
    {
      topic: "Listed buildings",
      q: "The local authority search shows the property is a listed building. The buyer wants to replace all windows. What is the key advice point?",
      choices: [
        "Listed status only affects council tax banding.",
        "Works may require listed building consent (and possibly planning) with higher controls; advise the buyer to seek specialist planning advice before committing.",
        "Listed buildings can be altered freely if using like-for-like materials.",
        "Listed status is irrelevant once the buyer owns the property.",
        "The lender must refuse the mortgage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Listed status can impose strict controls; works like window replacement may require listed building consent and can carry criminal/civil enforcement risk.",
        whyWrong: [
          "It is about heritage controls, not council tax banding.",
          "",
          "Even like-for-like can require consent depending on significance and scope.",
          "Ownership does not remove listed building obligations.",
          "Lenders may lend but may require comfort; refusal is not automatic.",
        ],
      },
    },
    {
      topic: "Conservation area controls",
      q: "A buyer wants to demolish a small outbuilding. The local authority search shows the property is in a conservation area. What is the best approach?",
      choices: [
        "Conservation area status has no effect on demolition.",
        "Advise that additional controls may apply (including demolition restrictions and planning considerations); investigate and advise before exchange.",
        "Tell the buyer to demolish immediately after completion without checks.",
        "Ask the estate agent whether demolition is allowed and rely on that.",
        "Assume permitted development always applies in conservation areas.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Conservation areas can restrict development and demolition. You should investigate applicable controls and advise the buyer before commitment.",
        whyWrong: [
          "Conservation status can affect demolition and alterations.",
          "",
          "Acting without permission can trigger enforcement.",
          "Agent opinion is not legal evidence.",
          "Permitted development rights can be reduced/removed in conservation areas.",
        ],
      },
    },
    {
      topic: "Planning conditions",
      q: "The local authority search reveals a planning permission for an extension, but the decision notice includes conditions requiring materials approval that appears not to have been discharged. What should you do?",
      choices: [
        "Ignore conditions; only permission matters.",
        "Investigate whether conditions were discharged (e.g., request evidence, raise enquiries) and advise on enforcement/regularisation risk and lender requirements.",
        "Assume discharge happens automatically after 1 year.",
        "Tell the buyer to discharge conditions after exchange.",
        "Ask Land Registry to confirm discharge.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Non-discharge of conditions can create enforcement risk and affect legality. You should investigate evidence and advise buyer/lender before exchange.",
        whyWrong: [
          "Conditions can be critical to lawful implementation of permission.",
          "",
          "Discharge is not automatic by time.",
          "Exchanging without clarity can expose buyer to risk.",
          "Land Registry does not confirm planning condition discharge.",
        ],
      },
    },
    {
      topic: "Building regulations: gas/electrical works",
      q: "The seller replaced the boiler last year. The buyer asks what documentation is relevant. Which is the best answer in conveyancing terms?",
      choices: [
        "Only an EPC is needed.",
        "Evidence of compliance such as Gas Safe documentation/commissioning certificate (and any relevant notifications), plus any warranties/guarantees; raise enquiries as needed.",
        "No documents are ever needed for boilers.",
        "A title plan is sufficient.",
        "OS1 search confirms boiler compliance.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Certain works may require competent person certification/notification. Relevant certificates and warranties should be requested to manage safety and lender/buyer concerns.",
        whyWrong: [
          "EPC does not evidence installation compliance or safety certification.",
          "",
          "Buyers often request evidence; lack of evidence may affect comfort and insurance.",
          "Title plan is unrelated.",
          "OS1 has nothing to do with property condition/compliance.",
        ],
      },
    },
    {
      topic: "Search result: radon",
      q: "An environmental search indicates the property is in a higher radon area. What is the best advice?",
      choices: [
        "Radon always makes a property unmortgageable.",
        "Advise the buyer of the result and suggest practical next steps (e.g., testing/mitigation advice), noting it may affect health perception/insurance but is often manageable.",
        "Ignore it because radon is a myth.",
        "Report it to the local authority immediately.",
        "Demand the seller installs mitigation before exchange in every case.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Radon risk is typically managed via testing/mitigation. You should inform the buyer and guide them to practical steps; lender requirements may vary.",
        whyWrong: [
          "It does not automatically make a property unmortgageable.",
          "",
          "Radon is a real risk factor; dismissing it is inappropriate.",
          "Immediate authority contact is not usually required and may be irrelevant.",
          "A blanket demand is not always necessary; it depends on risk and buyer appetite.",
        ],
      },
    },
    {
      topic: "Mining and ground stability searches (overview)",
      q: "The property is in a historic coal mining area. The buyer asks whether additional searches are worthwhile. What is the best answer?",
      choices: [
        "No—mining issues are always visible from the title register.",
        "Yes—consider an appropriate mining/ground stability search to identify subsidence claims/shafts and advise on insurability and lender requirements.",
        "Only do a chancel search instead.",
        "Only ask the seller verbally.",
        "Mining searches can only be done after completion.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In mining areas, a mining/ground stability search can reveal subsidence-related risks relevant to value and insurance and may be lender-required.",
        whyWrong: [
          "Mining risks are typically not recorded on the title register.",
          "",
          "Chancel is unrelated.",
          "Verbal statements are not evidence.",
          "Such searches are usually done pre-exchange.",
        ],
      },
    },
    {
      topic: "Commons/village green risk (overview)",
      q: "A buyer is purchasing rural land and plans to fence part of it. Which search/check is most relevant to identify if the land may be registered as common land or a village green?",
      choices: [
        "Drainage and water search",
        "Commons registration (local authority/commons) check and targeted enquiries",
        "Bankruptcy search",
        "OS1 search",
        "Chancel search only",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Common land/village green status can restrict use and development. Appropriate commons/village green checks and enquiries are used to assess the risk.",
        whyWrong: [
          "Drainage search does not address commons status.",
          "",
          "Bankruptcy search is unrelated.",
          "OS1 is for registration priority.",
          "Chancel is a different, separate risk.",
        ],
      },
    },
    {
      topic: "Enquiries after searches: highways",
      q: "The local authority search indicates the road is not maintained at public expense. What is a sensible follow-up enquiry/step?",
      choices: [
        "None; it can never affect the buyer.",
        "Ask for evidence of rights of way/access and any maintenance arrangements (e.g., road association, contributions) and advise on costs/risks.",
        "Demand the seller adopts the road before exchange.",
        "Ask Land Registry to adopt the road.",
        "Assume the neighbour pays for everything.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "You should clarify legal access rights and who bears maintenance obligations/costs. This affects value, enjoyment and lender appetite.",
        whyWrong: [
          "Private roads can create real liabilities and disputes.",
          "",
          "Adoption is a public authority process and not something the seller can simply do quickly.",
          "Land Registry does not adopt roads.",
          "Assumptions about neighbours’ payments are unreliable.",
        ],
      },
    },
    {
      topic: "Replies to enquiries: quality and evidence",
      q: "The seller replies to an enquiry about a historic planning breach: 'Don’t worry, council won’t care.' There is no documentary evidence. What should you do?",
      choices: [
        "Treat it as satisfactory and exchange.",
        "Request proper evidence/clarification, consider whether indemnity insurance is appropriate, and advise the buyer/lender about risk before exchange.",
        "Delete the enquiry from the file.",
        "Accept the reply only if the estate agent agrees.",
        "Proceed but keep it secret from the buyer to avoid stress.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "You need evidence-based replies where issues could be material. If evidence is unavailable, consider risk management options and advise/notify lender as required.",
        whyWrong: [
          "Casual assurance is not an adequate response to a potential enforcement issue.",
          "",
          "You must not suppress issues; keep proper audit trail.",
          "Agents cannot validate compliance risk.",
          "Concealing material issues breaches duties to the client.",
        ],
      },
    },
    {
      topic: "Indemnity insurance: insurer conditions",
      q: "You are considering planning/building regs indemnity insurance for lack of approvals. Which action is most likely to invalidate the insurance option?",
      choices: [
        "Keeping the issue confidential between solicitors",
        "Approaching the local authority to ask whether they will enforce",
        "Checking the title register and searches",
        "Advising the buyer of the policy terms",
        "Ensuring no admission of breach is made",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Many indemnity policies require no contact with the local authority/beneficiary and no disclosure that increases the risk; contacting the authority often prejudices insurance.",
        whyWrong: [
          "Confidential handling is consistent with insurer conditions.",
          "",
          "Normal due diligence does not invalidate insurance.",
          "Clients should be advised on terms; that doesn’t invalidate it.",
          "Avoiding admissions is often consistent with policy conditions.",
        ],
      },
    },
    {
      topic: "Planning: certificate of lawfulness (CLOPUD)",
      q: "A seller carried out a change of use years ago and claims it is now immune from enforcement. The buyer wants stronger comfort. What document could provide formal confirmation (where appropriate)?",
      choices: [
        "An OS1 priority search",
        "A certificate of lawfulness (existing use/development)",
        "A TA10 form",
        "A DS1 discharge",
        "A chancel search",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A certificate of lawfulness can provide formal confirmation that existing use/development is lawful, offering stronger comfort than mere assertion (subject to eligibility/evidence).",
        whyWrong: [
          "OS1 is about Land Registry priority, not planning lawfulness.",
          "",
          "TA10 concerns contents, not planning status.",
          "DS1 is mortgage discharge.",
          "Chancel is unrelated.",
        ],
      },
    },
    {
      topic: "Planning: immunity vs evidence",
      q: "The seller says an extension built 8 years ago is 'immune' from planning enforcement so evidence isn’t needed. What is your best stance?",
      choices: [
        "Accept the claim; time always cures everything automatically.",
        "Explain that limitation periods and facts can be complex; seek evidence (dates, documents, photos), consider a lawful development certificate or insurance, and advise buyer/lender.",
        "Ignore planning entirely; it’s not a conveyancing issue.",
        "Tell the buyer to apply for permission after exchange as a formality.",
        "Assume the local authority search will confirm immunity conclusively.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Even where enforcement may be time-limited, you need evidence to support the position and to satisfy buyer/lender risk appetite; options include certificates/insurance.",
        whyWrong: [
          "Time limits depend on facts and law; it’s risky to assume without evidence.",
          "",
          "Planning compliance can be material to marketability and lender security.",
          "Post-exchange solutions may be costly and uncertain.",
          "Searches may not conclusively prove immunity; they show recorded matters.",
        ],
      },
    },
    {
      topic: "Enquiries: fixtures and alterations crossover",
      q: "The seller removed an internal wall. The buyer is concerned about structural safety. Which is the most appropriate response from you as conveyancer?",
      choices: [
        "Confirm it is safe; internal walls are never load-bearing.",
        "Advise the buyer to obtain a survey/structural engineer advice, while you investigate building regs approvals/completion evidence through enquiries/searches.",
        "Tell the buyer not to get a survey because it delays exchange.",
        "Ignore; internal alterations never need consents.",
        "Only check the TA10 form.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Physical safety is for survey/engineers, while you handle legal compliance evidence (building regs/approvals) and advise on associated risks.",
        whyWrong: [
          "You should not make technical assurances outside expertise.",
          "",
          "Discouraging surveys increases risk for the buyer.",
          "Some internal works can require building regs approval.",
          "TA10 is about contents, not structural compliance.",
        ],
      },
    },
    {
      topic: "Search results: 'No entries' misconception",
      q: "The local authority search comes back with 'No entries' in the planning history section. The buyer assumes this proves there were never any alterations. What should you explain?",
      choices: [
        "They are correct; 'No entries' proves no works have ever occurred.",
        "Search results can be limited and depend on records; absence of entries doesn’t guarantee no works—use enquiries, inspection and other evidence as needed.",
        "It means the seller lied on TA6 automatically.",
        "It means the property is exempt from planning law.",
        "It guarantees the lender must lend.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Local authority records may be incomplete or older permissions may not be recorded in a way that appears in results. You must triangulate with enquiries and other evidence.",
        whyWrong: [
          "Absence of recorded entries is not definitive proof that no works occurred.",
          "",
          "It does not automatically prove dishonesty; it prompts further investigation.",
          "No property is generally 'exempt' from planning law in that way.",
          "Lender decisions depend on overall risk, not a single 'no entries' line.",
        ],
      },
    },
    {
      topic: "Search packs and personal searches (overview)",
      q: "A buyer asks whether a cheaper 'personal local search' is acceptable. What is the best practical conveyancing answer?",
      choices: [
        "Personal searches are illegal.",
        "It depends on lender requirements and the reliability of the provider; if a lender is involved, ensure the search type/provider is acceptable to the lender.",
        "Personal searches are always better than official searches.",
        "Only cash buyers can use personal searches.",
        "Personal searches remove the need for enquiries.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Some lenders accept personal searches from approved providers; others require official searches. You must check lender instructions and use reputable providers.",
        whyWrong: [
          "They are not illegal as a category.",
          "",
          "Quality varies; they are not automatically better.",
          "Cash buyers may choose, but lender requirements are key when mortgaged.",
          "Enquiries are still needed.",
        ],
      },
    },
    {
      topic: "Planning: restrictive covenant vs permission",
      q: "The seller obtained planning permission for a rear extension. Title includes a restrictive covenant prohibiting building without neighbour consent. What is the correct advice?",
      choices: [
        "Planning permission overrides restrictive covenants automatically.",
        "Planning and private covenants are separate; even with planning permission, the covenant may still be enforceable and must be addressed.",
        "The covenant becomes void once planning is granted.",
        "Only the local authority can enforce covenants.",
        "If the buyer is a cash buyer, the covenant cannot be enforced.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Planning permission does not remove private law restrictions. Covenants may still be enforceable by beneficiaries, so the buyer must manage both regimes.",
        whyWrong: [
          "Public planning consent does not override private covenant rights.",
          "",
          "Covenants do not become void just because permission is granted.",
          "Covenants are enforced privately by beneficiaries, not only by authorities.",
          "Funding source does not affect enforceability.",
        ],
      },
    },
    {
      topic: "Seller’s replies: misrepresentation risk",
      q: "TA6 states 'no disputes' but the buyer later learns the seller received a solicitor’s letter from a neighbour about a right of way. Why does this matter pre-exchange?",
      choices: [
        "It doesn’t; TA6 answers are never relied upon.",
        "It may indicate a misrepresentation and a material risk affecting title/use; you should raise enquiries, obtain documents, and advise the buyer before exchange.",
        "It only affects the seller after completion.",
        "It automatically makes the contract void without action.",
        "It only matters if the buyer is purchasing with a mortgage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Potential disputes/claims about rights are material. You should investigate and advise before exchange to avoid the buyer committing without understanding the risk.",
        whyWrong: [
          "TA6 replies are part of the information relied upon and can be legally significant.",
          "",
          "It can affect the buyer’s decision and future enjoyment; it is not just seller-side after completion.",
          "It does not automatically void the contract; legal consequences depend on facts and remedies.",
          "It matters regardless of funding, though lenders may have additional concerns.",
        ],
      },
    },
    {
      topic: "Enquiries: guarantees/warranties",
      q: "The property has double glazing installed 2 years ago. The buyer asks what to request. Which is the best conveyancing answer?",
      choices: [
        "Nothing—windows are never relevant.",
        "Request relevant guarantees and compliance evidence (e.g., FENSA/competent person certificates where applicable) via enquiries and advise on implications if missing.",
        "Only request the seller’s receipt; certificates never matter.",
        "Ask the estate agent to confirm the installer was reputable.",
        "Rely on the EPC only.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Warranties and compliance certificates can be important to buyers and lenders and may affect resale/insurance. Missing items may require risk management.",
        whyWrong: [
          "Alterations can carry compliance and warranty issues.",
          "",
          "Receipts alone may not evidence compliance/notification.",
          "Agent confirmation is not evidence and may be unreliable.",
          "EPC does not confirm installation compliance.",
        ],
      },
    },
  ];

  window.quizData = {
    title:
      "Property Practice — Chapter 3: Pre-contract (2): Searches & enquiries, and planning matters",
    subtitle:
      "30 SQE-style scenario MCQs (searches, enquiries, planning/building regs/highways, environmental risk, and how to respond).",
    questions: questions,
  };
})();
