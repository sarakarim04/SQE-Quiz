(() => {
  const questions = [
    {
      topic: "Deduction of title: seller’s pack",
      q: "You act for a buyer of registered freehold land. The seller’s solicitor sends the contract pack. Which document is the primary evidence of title you will investigate?",
      choices: [
        "The estate agent’s memorandum of sale",
        "Official copies of the register (title register) and title plan",
        "The seller’s completion statement from their last purchase",
        "The EPC and gas safety certificate",
        "The TA10 fittings and contents form",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For registered land, the title register and title plan (official copies) are the primary evidence of legal title and recorded interests.",
        whyWrong: [
          "The memorandum is helpful for parties/price but is not evidence of title.",
          "",
          "A prior completion statement is not proof of title at HM Land Registry.",
          "EPC/gas safety relate to condition/compliance, not legal title.",
          "TA10 relates to contents, not ownership/encumbrances.",
        ],
      },
    },
    {
      topic: "Proprietorship Register",
      q: "Official copies show the seller as registered proprietor but also note a restriction requiring two trustees to sign for a disposition. What is your key concern?",
      choices: [
        "The seller cannot sell under any circumstances.",
        "You must ensure the disposition complies with the restriction (e.g., two trustees sign), otherwise registration may be rejected and buyer’s title risked.",
        "Restrictions only apply to mortgages, not transfers.",
        "You can ignore restrictions if the buyer is a cash purchaser.",
        "The restriction automatically disappears on exchange.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Restrictions control how dispositions can be registered. You must ensure the transfer complies (e.g., correct signatories/consents) or the Land Registry may not register the buyer.",
        whyWrong: [
          "Sales can still proceed if requirements are met.",
          "",
          "Restrictions can affect transfers as well as charges.",
          "Registration rules apply regardless of funding source.",
          "Restrictions do not vanish on exchange.",
        ],
      },
    },
    {
      topic: "Charges Register: registered mortgage",
      q: "The Charges Register shows a registered charge to ABC Bank. What is the standard buyer-side requirement before completion?",
      choices: [
        "Obtain the seller’s promise verbally that it will be repaid.",
        "Ensure there are arrangements for redemption and discharge (usually via the seller solicitor’s undertaking) so buyer takes free of the charge.",
        "Insist the buyer becomes jointly liable on the seller’s mortgage.",
        "Apply to remove the charge by AP1 before completion.",
        "Refuse to proceed unless the seller pays the charge at exchange.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "You must ensure the seller’s charge will be redeemed and discharged on or after completion (typically via an undertaking and evidence of redemption/discharge).",
        whyWrong: [
          "Verbal promises are not sufficient for safe conveyancing.",
          "",
          "The buyer should not assume liability for seller’s debt.",
          "AP1 is a post-completion application and requires discharge arrangements/evidence.",
          "Redemption is usually done at completion from proceeds; not necessarily at exchange.",
        ],
      },
    },
    {
      topic: "Investigation: title plan and extent",
      q: "The buyer believes the purchase includes a strip of garden shown in the sales particulars. The title plan boundary line appears to exclude it. What should you do first?",
      choices: [
        "Assume the particulars are correct; proceed to exchange.",
        "Raise a title enquiry and request clarification/evidence of the extent (e.g., plan, statutory declaration, transfer) and reconcile with the register.",
        "Advise the buyer the Land Registry plan is always wrong.",
        "Tell the buyer to negotiate with the neighbour after completion.",
        "Ignore it because boundaries are always general.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where extent is unclear, you must reconcile contract/particulars with the registered plan and raise enquiries to confirm what is being sold and how it is evidenced.",
        whyWrong: [
          "Particulars are not definitive evidence of title.",
          "",
          "The register is authoritative evidence of title; you can’t assume it is wrong.",
          "Post-completion disputes are risky and can be expensive; clarify before exchange.",
          "General boundaries does not mean you ignore obvious extent discrepancies.",
        ],
      },
    },
    {
      topic: "Registered title: class of title",
      q: "The official copies show the title class as 'possessory'. What is the correct risk point to advise the buyer and lender on?",
      choices: [
        "Possessory title guarantees the best possible title.",
        "There is a risk of third-party claims to ownership due to defects/missing documents; lender may require indemnity insurance or upgrades over time.",
        "It means the property is leasehold.",
        "It means the seller cannot grant full title guarantee.",
        "It automatically converts to absolute title on completion.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Possessory title indicates title based on possession rather than full documentary proof; there is potential risk of competing claims and lenders may require insurance or evidence for upgrade.",
        whyWrong: [
          "Absolute title is the best class; possessory is not guaranteed equivalent.",
          "",
          "Class of title is separate from tenure (freehold/leasehold).",
          "The seller may still give full title guarantee depending on circumstances; the key issue is the class and risk of adverse claims.",
          "Upgrade is not automatic; it generally requires time/evidence and application.",
        ],
      },
    },
    {
      topic: "Unregistered land: good root of title",
      q: "You act for a buyer of unregistered freehold land. What is the traditional requirement for a 'good root of title' in the epitome?",
      choices: [
        "Any document signed by the seller last year",
        "A conveyance/mortgage at least 15 years old dealing with the whole legal and equitable interest, properly executed and not subject to undisclosed defects",
        "A council tax bill covering the last 3 years",
        "A planning permission decision notice",
        "An estate agent’s brochure showing boundaries",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For unregistered title, a good root is typically a document at least 15 years old that deals with the whole interest, is properly executed, and is free from obvious defects, with continuity of ownership evidenced thereafter.",
        whyWrong: [
          "A recent informal document is unlikely to establish a sound root.",
          "",
          "Council tax is not evidence of legal title.",
          "Planning permission relates to development control, not ownership.",
          "Brochures are not legal title evidence.",
        ],
      },
    },
    {
      topic: "Unregistered land: deducing title",
      q: "In an unregistered purchase, which best describes the seller’s obligation to 'deduce title'?",
      choices: [
        "Provide a single-page statement that they own the property",
        "Provide an epitome/abstract and supporting title deeds showing a chain of ownership and matters affecting title",
        "Provide only a Land Registry title register",
        "Provide only search results",
        "Provide the buyer’s mortgage deed",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Deduction involves supplying an epitome/abstract and documents establishing the seller’s title and any interests affecting it.",
        whyWrong: [
          "A statement alone is insufficient.",
          "",
          "Registered evidence (official copies) is not available if unregistered (unless it has been registered).",
          "Searches do not prove title; they reveal external matters.",
          "The buyer’s mortgage deed is unrelated to the seller’s duty to deduce title.",
        ],
      },
    },
    {
      topic: "First registration trigger",
      q: "A buyer purchases unregistered freehold land. What is the usual post-completion consequence?",
      choices: [
        "No registration is possible for freehold land.",
        "The buyer must apply for first registration, typically within the required period after completion, and protect priority appropriately.",
        "The seller applies for registration before exchange as a legal requirement.",
        "The buyer only registers if they later decide to sell.",
        "The estate agent registers the title.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A transfer of unregistered freehold typically triggers compulsory first registration; the buyer must apply after completion within the required timeframe, with priority protection measures.",
        whyWrong: [
          "Freehold land can and should be registered.",
          "",
          "Seller can register voluntarily, but compulsory registration is usually triggered by disposition; not always required pre-exchange.",
          "Compulsory registration is not optional if triggered.",
          "Registration is a legal conveyancing step handled by solicitors, not agents.",
        ],
      },
    },
    {
      topic: "Overriding interests: actual occupation (overview)",
      q: "A buyer is purchasing registered land. During the viewing, the buyer notices an adult relative of the seller living in an annexe. Why is this relevant to title investigation?",
      choices: [
        "It is irrelevant because occupation never affects land rights.",
        "An occupier may have rights (e.g., a beneficial interest) that could override if they are in actual occupation; you should make enquiries and ensure vacant possession/consents/waivers as needed.",
        "It only matters if the occupier is under 18.",
        "It only matters for unregistered land.",
        "It can be ignored if the buyer is a cash purchaser.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Actual occupation can support overriding interests in registered land. Occupiers may have equitable rights that bind the buyer unless properly overreached/consented to or otherwise dealt with.",
        whyWrong: [
          "Occupation can be legally significant.",
          "",
          "Adult occupation is especially relevant; minors are not the only concern.",
          "Overriding interests are particularly relevant to registered land too.",
          "Funding source does not change the risk of being bound by third-party rights.",
        ],
      },
    },
    {
      topic: "Overreaching (overview)",
      q: "A registered title is in the name of two trustees. A third party claims they contributed to the purchase price and have a beneficial interest. What is the buyer’s safest mechanism to avoid being bound by that beneficial interest (assuming conditions are met)?",
      choices: [
        "Pay the purchase money to the seller in cash",
        "Ensure the purchase money is paid to at least two trustees so the beneficial interest is overreached into the proceeds",
        "Ask the third party to leave on completion day",
        "Rely on the seller saying 'no one else has rights'",
        "Register the transfer before completion",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Paying the purchase money to two trustees (or a trust corporation) can overreach equitable interests so they attach to the proceeds rather than the land, protecting the buyer.",
        whyWrong: [
          "Cash payment does not achieve overreaching safeguards and increases risk.",
          "",
          "Physical departure does not remove equitable interests.",
          "Seller assurances are not sufficient risk control.",
          "Registration is post-completion; it does not prevent being bound by prior equitable interests.",
        ],
      },
    },
    {
      topic: "Easements: express rights",
      q: "Your buyer needs a right to use a shared path to access the rear garden. Where is the first place you would look for an express right benefiting the title?",
      choices: [
        "The EPC certificate",
        "The Property Register and the filed deeds referred to in the register",
        "The TA10 form",
        "The estate agent’s brochure",
        "The buyer’s mortgage offer",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Express easements benefiting a registered title are commonly noted in the Property Register or in filed deeds referred to in the register.",
        whyWrong: [
          "EPC is unrelated to easements.",
          "",
          "TA10 concerns contents.",
          "Brochures are not legal title evidence.",
          "Mortgage offers do not define easements.",
        ],
      },
    },
    {
      topic: "Easements: absence of right of way",
      q: "The property is landlocked and the register contains no express right of way. The seller says access has 'always been allowed'. What is your best next step?",
      choices: [
        "Proceed; long use always creates a legal right without evidence.",
        "Investigate whether there is an implied or prescriptive easement, obtain evidence (e.g., statutory declaration), consider title indemnity insurance, and report to lender as required.",
        "Tell the buyer to use a different route after completion.",
        "Assume the neighbour will never object so do nothing.",
        "Exchange immediately and sort it out at registration.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "You must establish a legally enforceable route of access. If not express, consider implied/prescriptive rights with supporting evidence, and manage lender and marketability risk (possibly insurance).",
        whyWrong: [
          "Long use may create prescriptive rights but requires evidence and legal analysis; it is not automatic by assertion.",
          "",
          "Alternative routes may not exist; and lack of legal access is fundamental.",
          "Assumptions about neighbour behaviour are not safe legal advice.",
          "Exchange binds the buyer; you should not proceed without resolving/mitigating access defect.",
        ],
      },
    },
    {
      topic: "Restrictive covenants: identifying enforceability (overview)",
      q: "A restrictive covenant dated 1980 prohibits building any extension. The buyer wants to extend. What is the most appropriate investigation focus?",
      choices: [
        "Whether the covenant is 'annoying' to the buyer",
        "Whether the covenant is still enforceable and who has the benefit (e.g., neighbouring land) and whether consent/variation/insurance is appropriate",
        "Whether the seller personally dislikes extensions",
        "Whether the estate agent thinks it will be fine",
        "Whether the local authority search is delayed",
      ],
      correct: 1,
      explain: {
        whyRight:
          "You must assess enforceability: identify who can enforce (benefit), whether it still bites, and the practical options (consent, indemnity, variation/discharge).",
        whyWrong: [
          "Personal annoyance is irrelevant to enforceability.",
          "",
          "Seller’s preferences do not determine legal effect.",
          "Agent views are not legal analysis or a waiver.",
          "Search timing is separate from covenant enforceability.",
        ],
      },
    },
    {
      topic: "Positive covenants (overview)",
      q: "A deed contains a covenant by the owner 'to contribute to maintenance of the private road'. The buyer is concerned. What is the key legal point to flag in broad terms?",
      choices: [
        "Positive covenants automatically bind successors to freehold land without any structure.",
        "Positive covenants generally do not run with freehold land at common law; enforceability may depend on mechanisms (e.g., rentcharge/chain of indemnity) and practical arrangements.",
        "Positive covenants are void if older than 10 years.",
        "Positive covenants only exist in leases, not freeholds.",
        "Positive covenants cannot be relevant to lenders.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The buyer should understand that positive obligations don’t automatically bind successors in freehold; there may be enforcement structures and practical risks to consider.",
        whyWrong: [
          "This overstates the law; positive covenants generally do not run in freehold without mechanisms.",
          "",
          "There is no general 10-year expiry rule.",
          "Positive covenants can exist in freehold deeds.",
          "Lenders care about service/maintenance liabilities affecting value/marketability.",
        ],
      },
    },
    {
      topic: "Notices and restrictions: effect",
      q: "The register shows a notice protecting a third party’s option to purchase. What is the primary implication for your buyer?",
      choices: [
        "It is irrelevant because notices are informational only.",
        "The buyer may be bound by the protected interest; you must investigate and ensure it is removed/expired or otherwise dealt with before exchange/completion.",
        "It means the buyer gets priority over the option automatically.",
        "It only affects the seller, not successors.",
        "It can be ignored if there is a mortgage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A notice protects an interest on the register. The buyer could be bound, so you must investigate and ensure the interest is appropriately dealt with (e.g., released) before proceeding.",
        whyWrong: [
          "Registered notices can bind purchasers.",
          "",
          "The notice gives the protected interest visibility/priority; it doesn’t advantage the buyer.",
          "Registered interests generally bind successors.",
          "A mortgage does not make registered third-party rights disappear.",
        ],
      },
    },
    {
      topic: "Third party rights: enquiries",
      q: "Which enquiry is most directly aimed at identifying whether anyone other than the seller has rights to occupy the property?",
      choices: [
        "Raising enquiries about vacant possession/occupiers and obtaining appropriate confirmations/consents",
        "Checking the EPC rating",
        "Ordering an environmental search",
        "Reviewing the completion statement",
        "Conducting a bankruptcy search against the buyer",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Targeted enquiries about occupiers, together with the contract term requiring vacant possession and practical checks, help identify third-party occupation risks.",
        whyWrong: [
          "",
          "EPC relates to energy performance, not occupation rights.",
          "Environmental searches concern contamination/flooding etc.",
          "Completion statements are accounting documents.",
          "Buyer bankruptcy checks are lender-related and do not reveal occupiers’ proprietary rights.",
        ],
      },
    },
    {
      topic: "Title indemnity insurance: when considered",
      q: "You discover a missing deed that likely contained a covenant affecting the property. The seller suggests taking indemnity insurance. When is indemnity insurance most appropriate in principle?",
      choices: [
        "Whenever the buyer wants to ignore any issue without investigation",
        "When a specific title defect risk can’t be practically cured and insurance is acceptable to the buyer/lender, provided policy conditions (e.g., no approach to beneficiaries) are met",
        "Only for leasehold properties",
        "Only after completion",
        "Only if the buyer is a first-time buyer",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Indemnity insurance can be appropriate where a defect can’t be readily remedied, the risk is definable, and buyer/lender accept it—while complying with insurer conditions.",
        whyWrong: [
          "Insurance is not a substitute for proper investigation; it’s risk management for specific defects.",
          "",
          "Indemnity insurance is used for freehold and leasehold defects.",
          "It is usually arranged pre-exchange or pre-completion as a condition of proceeding.",
          "Buyer status (first-time) is not the determinant.",
        ],
      },
    },
    {
      topic: "Reporting to lender: title issues",
      q: "Acting for buyer and lender, you find the property lacks a documented right to connect to the public sewer. What is the correct approach?",
      choices: [
        "Do not mention it to the lender; it might cause delay.",
        "Report the issue to the lender per instructions and advise the buyer; consider solutions like deed of grant or insurance if acceptable.",
        "Tell the seller to fix it after completion.",
        "Exchange now; lender issues are irrelevant once funds are requested.",
        "Ask the estate agent to confirm it’s fine.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Material title defects affecting value/marketability or services should be reported to the lender per handbook requirements and addressed before completion where possible.",
        whyWrong: [
          "Non-disclosure can breach lender instructions and professional duties.",
          "",
          "Fixing after completion leaves buyer and lender exposed; pre-exchange resolution is preferable.",
          "Funding and security depend on acceptable title; lender issues remain relevant.",
          "Agent confirmations are not sufficient.",
        ],
      },
    },
    {
      topic: "Official copies: limitations",
      q: "Your buyer asks whether the title register will reveal every third-party right affecting the property. What is the best answer?",
      choices: [
        "Yes, the register always reveals every possible right.",
        "No, some interests may bind without being on the register (e.g., certain overriding interests); investigation includes enquiries and inspection.",
        "Yes, but only for freehold properties.",
        "No, because the register is never reliable.",
        "Yes, because OS1 search guarantees nothing is hidden.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Although the register is central, some rights can bind despite not being entered (overriding interests). Proper investigation includes enquiries, inspection, and other checks.",
        whyWrong: [
          "This overstates register completeness; overriding interests can exist.",
          "",
          "The issue is not tenure-specific; it applies to registered land generally.",
          "The register is reliable evidence of title, but it is not exhaustive of all binding interests.",
          "OS1 protects priority between applications; it does not eliminate overriding interests.",
        ],
      },
    },
    {
      topic: "Inspection and enquiries: physical clues",
      q: "During inspection, the buyer notes a well-worn footpath crossing the garden used by neighbours. Title register shows no right of way. What should you do?",
      choices: [
        "Assume it is trespass and irrelevant to conveyancing.",
        "Raise enquiries about use and consider whether a prescriptive right may exist; advise the buyer on risk and options before exchange.",
        "Tell the buyer to block the path immediately.",
        "Exchange immediately to secure the deal.",
        "Ignore because only written easements count.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Physical signs can indicate unregistered rights (e.g., prescriptive easements). You should investigate and advise on potential binding rights and risk management.",
        whyWrong: [
          "It may indicate a legal right acquired by long use; not automatically irrelevant.",
          "",
          "Blocking could provoke dispute and may breach insurer conditions if later seeking indemnity.",
          "Rushing increases risk; investigate before commitment.",
          "Prescriptive rights can exist without a written deed.",
        ],
      },
    },
    {
      topic: "Boundary issues: adverse possession risk (overview)",
      q: "A neighbour has enclosed and used part of the registered title for many years. The seller says it’s 'no big deal'. Why is this a title investigation issue?",
      choices: [
        "Because neighbours always own whatever they fence.",
        "Because long possession could lead to an adverse possession claim or boundary dispute affecting extent/value; you should investigate and advise.",
        "Because it only matters after registration.",
        "Because it is purely a planning matter.",
        "Because the buyer can always evict without evidence.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Encroachment can cause boundary disputes and potential adverse possession claims, impacting marketability and lender security. It must be investigated and managed.",
        whyWrong: [
          "Fencing does not automatically transfer legal title.",
          "",
          "It matters before exchange—buyers need clarity on what they are buying.",
          "It is not primarily planning; it is title/possession/boundary risk.",
          "Eviction/rectification may be costly and uncertain; evidence and legal rights matter.",
        ],
      },
    },
    {
      topic: "Land Registry entries: easements burdening title",
      q: "The Charges Register notes a right of way 'in favour of the adjoining owner' across the driveway. The buyer intends to build a garage blocking the drive. What is the correct advice focus?",
      choices: [
        "The buyer can build; rights of way are only moral obligations.",
        "Advise that the right of way is a legal burden; building may be prevented or actionable; buyer should reconsider plans or seek release/variation.",
        "Tell the buyer to build first and negotiate later.",
        "Assume it will not be enforced because it is old.",
        "Ignore because only positive covenants can bind successors.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A registered/effective easement is a proprietary right. Interfering (e.g., obstruction) can lead to injunction/damages; buyer should be advised before exchange.",
        whyWrong: [
          "Rights of way are legal rights, not merely moral.",
          "",
          "Building first can worsen liability and reduce options.",
          "Age alone does not prevent enforcement.",
          "Easements (not just covenants) bind successors.",
        ],
      },
    },
    {
      topic: "Lease in title: unexpected tenure issue",
      q: "The register shows the freehold title is subject to a long lease of the whole property granted to a third party. The seller says they will 'sort it'. What is your immediate concern?",
      choices: [
        "No concern because freehold always overrides leases.",
        "The seller may not have the right to give vacant possession; the buyer could take subject to the lease unless surrendered/merged—investigate urgently.",
        "It only affects council tax.",
        "It is irrelevant if the lease rent is £1.",
        "Exchange now; leases automatically terminate on sale.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A subsisting lease is a proprietary interest. Unless properly surrendered/ended, the buyer could take subject to it and not obtain vacant possession.",
        whyWrong: [
          "Freehold does not automatically override a lease; leases bind the freeholder.",
          "",
          "It is a title/possession issue, not mainly council tax.",
          "A peppercorn rent does not remove the lease’s binding effect.",
          "Sale does not terminate leases.",
        ],
      },
    },
    {
      topic: "Contract and title: 'subject to' wording",
      q: "The draft contract states the property is sold 'subject to all easements, covenants and other matters' whether or not disclosed. What is the buyer-side concern?",
      choices: [
        "This is ideal because it gives the buyer more rights.",
        "It can shift risk to the buyer for undisclosed burdens; you may seek to limit it to matters revealed by the register and disclosed documents.",
        "It means the seller guarantees there are no burdens.",
        "It only applies to chattels listed in TA10.",
        "It has no legal effect.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Broad 'subject to' clauses can allocate undisclosed risk to the buyer. You should ensure the buyer is not accepting unknown burdens beyond what investigation reveals and what is properly disclosed.",
        whyWrong: [
          "It does not improve buyer rights; it increases buyer risk.",
          "",
          "It is not a warranty; it tends to protect the seller.",
          "It is about title burdens, not contents.",
          "Such clauses can be legally significant.",
        ],
      },
    },
    {
      topic: "Title guarantee: limited vs full (overview)",
      q: "A seller who is a personal representative proposes to transfer with 'limited title guarantee'. What is the key implication to explain?",
      choices: [
        "Limited title guarantee means no legal title passes.",
        "It limits implied covenants: the seller only warrants against their own acts and not historic defects beyond their knowledge/control.",
        "It gives the buyer more protection than full title guarantee.",
        "It is only used for leasehold property.",
        "It automatically voids the contract.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Limited title guarantee provides narrower implied covenants—typically appropriate where the seller has limited knowledge (e.g., PRs) and only covenants against their own acts.",
        whyWrong: [
          "Legal title can still pass; it’s about covenants/guarantees.",
          "",
          "Full title guarantee is generally wider protection than limited.",
          "It can be used on freehold transfers too.",
          "It does not void the contract; it’s part of the transfer terms.",
        ],
      },
    },
    {
      topic: "Indemnity covenant chain (overview)",
      q: "A freehold title contains a positive covenant to maintain a shared pump. The seller provides an indemnity covenant to the original covenantee. Why might the buyer be asked to give an indemnity covenant too?",
      choices: [
        "Because indemnity covenants are required by law in all sales.",
        "To maintain a chain of indemnity so the covenantee can recover via successive owners if the positive obligation is breached.",
        "To reduce SDLT",
        "To override restrictive covenants",
        "To allow the buyer to ignore the covenant",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Because positive covenants don’t automatically run, a chain of indemnity covenants helps ensure the party with the benefit can enforce indirectly through successive owners.",
        whyWrong: [
          "They are not mandatory in all cases; they are used as a mechanism.",
          "",
          "Indemnity covenants don’t change SDLT.",
          "They don’t override restrictive covenants.",
          "They don’t permit ignoring obligations; they allocate responsibility.",
        ],
      },
    },
    {
      topic: "Unregistered title: missing deeds",
      q: "In an unregistered transaction, a key conveyance in the chain is missing. What is a common conveyancing response if the defect cannot be cured quickly?",
      choices: [
        "Proceed without telling the buyer because unregistered land is informal",
        "Consider statutory declaration/statement of truth to explain absence, plus title indemnity insurance if appropriate and lender accepts",
        "Tell the buyer registration is impossible",
        "Ask the estate agent to recreate the deed",
        "Assume the missing deed is irrelevant because it’s old",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If deeds are missing, evidence may be provided via declarations and insurance to manage risk, subject to lender requirements and overall title quality.",
        whyWrong: [
          "Non-disclosure is negligent; buyers must be advised.",
          "",
          "Registration may still be possible with evidence; the issue is quality of proof.",
          "Agents can’t recreate legal title deeds with effect.",
          "Old deeds can still be crucial to proving title and burdens.",
        ],
      },
    },
    {
      topic: "Bankruptcy searches (K16) and title (overview)",
      q: "You act for a lender and buyer. Why do you carry out a bankruptcy search against the buyer shortly before completion?",
      choices: [
        "To check whether the seller has paid council tax",
        "Because a lender needs to know if the borrower is bankrupt, which could affect the lender’s ability to register/ enforce the charge and may prevent completion",
        "To confirm the title boundaries",
        "To reveal restrictive covenants",
        "To replace the need for a mortgage deed",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A bankruptcy search is a lender protection measure: if the borrower is bankrupt, the lender may not be able to register or enforce its charge as intended, and completion may be prohibited by instructions.",
        whyWrong: [
          "Council tax is unrelated.",
          "",
          "Boundary confirmation is not the purpose.",
          "Restrictive covenants are shown on title, not by bankruptcy searches.",
          "A mortgage deed is still required; the search doesn’t replace it.",
        ],
      },
    },
    {
      topic: "Discrepancy: name/identity on register",
      q: "The seller’s name on the register is 'Sarah Khan' but the contract pack identifies the seller as 'Sarah Ahmed' and provides a marriage certificate. What should you do?",
      choices: [
        "Ignore it; name differences never matter.",
        "Satisfy yourself as to identity and link between names (e.g., evidence of name change) and ensure execution/registration requirements are met.",
        "Insist the seller changes their name back before exchange.",
        "Refuse to act because any mismatch is fraud.",
        "Exchange now and correct the register after completion without evidence.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "You need to ensure the seller is the registered proprietor and that the documentation properly links names so Land Registry requirements and fraud prevention are satisfied.",
        whyWrong: [
          "Identity matters for authority to sell and registration acceptance.",
          "",
          "A name change isn’t necessary; evidence and correct execution suffice.",
          "A mismatch is a red flag but not automatically fraud; investigate proportionately.",
          "Land Registry correction requires evidence; you should resolve identity before exchange.",
        ],
      },
    },
    {
      topic: "Charges register: unilateral notice",
      q: "A unilateral notice is entered protecting 'an agreement' with a third party. The seller says it was lodged 'by mistake'. What is your best course?",
      choices: [
        "Proceed; unilateral notices are meaningless.",
        "Investigate the basis of the notice and require evidence of withdrawal/removal or satisfactory resolution before exchange/completion.",
        "Ask the buyer to sign a waiver accepting all risks.",
        "Tell the third party to remove it immediately; no further steps needed.",
        "Ignore because it will fall off automatically at completion.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A unilateral notice may protect a substantive interest. You must investigate its basis and ensure proper removal or resolution to avoid the buyer taking subject to it.",
        whyWrong: [
          "Notices can bind purchasers and affect marketability.",
          "",
          "A waiver may not satisfy lender requirements and does not remove the legal risk.",
          "Removal requires proper process; simply demanding removal is not enough.",
          "Entries do not automatically disappear on completion.",
        ],
      },
    },
    {
      topic: "Title documents: filed deeds",
      q: "The register refers to a transfer dated 2006 'containing restrictive covenants' and states 'copy filed'. What should you do?",
      choices: [
        "Ignore it because the covenants will be written out in full on the register",
        "Obtain and review the filed deed to understand the covenants and advise the buyer/lender accordingly",
        "Assume covenants are always unenforceable after 10 years",
        "Rely on the seller’s solicitor’s summary without seeing the deed",
        "Exchange before reviewing to keep momentum",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If the register refers to covenants in a filed deed, you should obtain and review the deed because the detailed obligations and beneficiaries may not be fully set out on the register.",
        whyWrong: [
          "Registers often summarise; they may not include full covenant wording.",
          "",
          "There is no general 10-year expiry rule for covenants.",
          "Summaries may be incomplete; you need the primary document for proper advice.",
          "Exchange binds the client; review should be completed beforehand.",
        ],
      },
    },
    {
      topic: "Standard enquiries: title matters",
      q: "Which enquiry is most directly targeted at verifying whether the seller will provide all necessary consents for registration (e.g., consent under a restriction)?",
      choices: [
        "Whether the seller likes the buyer",
        "Whether any consents/certificates are needed to comply with restrictions and whether the seller will provide them at completion",
        "Whether the property has damp",
        "Whether the buyer’s surveyor is qualified",
        "Whether the buyer can move in early",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If restrictions exist, you must ensure any consents/certificates required for registration will be available at completion, so targeted enquiries on compliance are essential.",
        whyWrong: [
          "Personal preferences are irrelevant.",
          "",
          "Damp is a physical condition issue for survey, not registration compliance.",
          "Surveyor qualifications are not a title enquiry.",
          "Early access is a separate contractual/licence issue.",
        ],
      },
    },
    {
      topic: "Title defects and client advice: marketability",
      q: "A buyer is buying to re-sell quickly. Which title issue is most likely to affect 'marketability' and therefore should be highlighted clearly?",
      choices: [
        "A minor typo in the seller’s email address",
        "Lack of documented legal access to the public highway",
        "The seller’s preference for completion at 11am",
        "The colour of the kitchen units",
        "That the estate agent is slow to reply",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Legal access is fundamental. Without it, the property may be difficult to sell or mortgage, making it a key marketability and lender-security issue.",
        whyWrong: [
          "Email typos do not affect title/marketability.",
          "",
          "Time preference is negotiable and not a title defect.",
          "Kitchen colour is not a title issue.",
          "Agent responsiveness is not a property right/encumbrance.",
        ],
      },
    },
    {
      topic: "Unregistered title: land charges search (overview)",
      q: "In an unregistered purchase, why is it important to carry out appropriate land charges searches against the names of relevant estate owners?",
      choices: [
        "Because the Land Registry requires it for registered land",
        "Because certain interests (e.g., puisne mortgages, restrictive covenants in some cases) may be registered as land charges and can bind a purchaser if properly registered",
        "Because it reveals flood risk",
        "Because it is the same as an OS1 search",
        "Because it proves the property has planning permission",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For unregistered land, certain interests are protected by registration as land charges. Searching helps ensure the buyer is not bound by undisclosed registered land charges.",
        whyWrong: [
          "Land charges searches relate to unregistered land regime, not registered land requirements.",
          "",
          "Flood risk is addressed by environmental searches.",
          "OS1 is a registered land priority search; different regime.",
          "Planning permission is not proved by land charges searches.",
        ],
      },
    },
    {
      topic: "Matters revealed by register: 'easements' clause",
      q: "The Property Register states: 'The land has the benefit of rights set out in a conveyance dated…'. Why is this important for the buyer?",
      choices: [
        "It means the buyer must pay extra tax.",
        "It may contain key rights (e.g., rights of way, drainage) necessary for use and value; you should obtain the referenced deed.",
        "It means the seller owns additional land automatically.",
        "It shows the property is unregistered.",
        "It guarantees the property is free from covenants.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Benefiting rights can be essential for access and services. If the register refers to a deed, you should review it to understand the rights’ scope and any conditions.",
        whyWrong: [
          "Rights in the register don’t determine tax directly.",
          "",
          "It does not automatically enlarge the title extent beyond the plan/description.",
          "The presence of a register means the title is registered.",
          "Rights benefiting title do not mean it is free from covenants.",
        ],
      },
    },
    {
      topic: "Priority: when to re-check title (pre-exchange)",
      q: "You obtained official copies two weeks ago. Exchange is tomorrow. What is good practice regarding title investigation timing?",
      choices: [
        "No need to re-check anything; title cannot change.",
        "Consider updated official copies or priority/last-minute checks to ensure no new adverse entries (e.g., notices/charges) have been added before exchange/completion planning.",
        "Only re-check after completion.",
        "Ask the estate agent if anything changed.",
        "Rely on the seller’s solicitor’s promise that nothing changed.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Entries can be added at any time. Good practice includes ensuring the title position is still acceptable when committing and before completion (and later using OS1 for priority).",
        whyWrong: [
          "Registers can change; new charges/notices can appear.",
          "",
          "Waiting until after completion is too late to manage risk.",
          "Agents are not a reliable source for register changes.",
          "Promises do not replace verification; OS1 and updated checks are safer.",
        ],
      },
    },
    {
      topic: "Common error: confusing register sections",
      q: "A trainee says: 'Restrictive covenants are always in the Property Register.' How do you correct them?",
      choices: [
        "They are correct; covenants only appear in the Property Register.",
        "Restrictive covenants are commonly recorded in the Charges Register (often via filed deeds), though entries may vary; always check the whole register and referred documents.",
        "Covenants are never recorded on the register.",
        "Covenants are only in the Proprietorship Register.",
        "Covenants are only in the TA6 form.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Restrictive covenants are typically noted in the Charges Register, often by reference to a deed. You must check all sections and referred documents.",
        whyWrong: [
          "Not always—many covenants appear in Charges Register.",
          "",
          "Covenants can be recorded; you must investigate.",
          "Proprietorship Register concerns ownership and restrictions, not usually covenant text.",
          "TA6 may mention disputes/alterations but is not the legal record of covenants.",
        ],
      },
    },
    {
      topic: "Title investigation: 'good and marketable title' (overview)",
      q: "Your buyer asks what you mean by ensuring 'good and marketable title'. Which is the best explanation?",
      choices: [
        "That the property will definitely increase in value",
        "That the buyer will acquire title that a reasonable purchaser and lender would accept, free from undisclosed material defects and with necessary rights for use",
        "That the seller is friendly",
        "That the property is newly decorated",
        "That the buyer can always sue the estate agent",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Good and marketable title means the title is acceptable for sale and mortgage: ownership is sound, burdens are known/acceptable, and necessary rights exist without serious defects.",
        whyWrong: [
          "Market value growth is not guaranteed by title quality.",
          "",
          "Personalities are irrelevant.",
          "Decoration is not legal title.",
          "Agents are not guarantors of legal title.",
        ],
      },
    },
    {
      topic: "Execution: deed formalities (overview)",
      q: "The seller’s transfer (TR1) arrives signed but not witnessed. What is the key issue?",
      choices: [
        "No issue; signatures never need witnessing on deeds.",
        "A deed usually requires valid execution formalities (including witnessing for an individual) to be effective and registrable; you must ensure proper execution before completion.",
        "It only matters for unregistered land.",
        "It can be fixed after completion without risk.",
        "The buyer should witness it instead.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Deeds must be properly executed to be effective and registrable. If an individual signs, witnessing is usually required; defective execution can derail completion/registration.",
        whyWrong: [
          "Deed execution formalities matter.",
          "",
          "Registered land transfers still require proper execution.",
          "Fixing later can cause delays and risk to title priority.",
          "Buyer-side witnessing can raise independence concerns; proper witnessing should be arranged appropriately.",
        ],
      },
    },
    {
      topic: "Planning to exchange: minimum title checklist (overview)",
      q: "Which combination best reflects a minimum 'title investigation complete' position before exchange (ignoring exceptional cases)?",
      choices: [
        "Signed contract only",
        "Reviewed official copies and filed deeds, raised and satisfactorily resolved key enquiries, and considered search results/occupier issues sufficiently to advise the buyer (and lender where relevant)",
        "Only a survey report",
        "Only a mortgage offer",
        "Only a TA10 form",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Before exchange, you should have investigated title (official copies/ deeds), resolved key enquiries, considered searches and occupier risks, and be able to advise client/lender on acceptability.",
        whyWrong: [
          "Signing alone is insufficient for informed commitment.",
          "",
          "Survey is important but not a substitute for legal title investigation.",
          "Mortgage offer is funding; does not confirm acceptable title.",
          "TA10 is about contents, not title acceptability.",
        ],
      },
    },
  ];

  window.quizData = {
    title:
      "Property Practice — Chapter 2: Pre-contract (1): Deduction and investigation of title",
    subtitle:
      "30 SQE-style scenario MCQs (registered/unregistered title, official copies, class of title, root of title, adverse entries, easements, covenants, priority, lender reporting).",
    questions: questions,
  };
})();
