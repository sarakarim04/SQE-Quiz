(() => {
  const questions = [
    {
      topic: "Transaction stages: big picture",
      q: "You act for a buyer purchasing a registered freehold house with a mortgage. Which sequence best reflects the usual structure of a freehold purchase transaction?",
      choices: [
        "Exchange → searches/enquiries → completion → title investigation → registration",
        "Instruction/ID checks → investigate title → searches/enquiries → exchange → completion → post-completion (tax/registration)",
        "Investigate title → completion → exchange → post-completion → searches",
        "Instruction → exchange → registration → completion → investigate title",
        "Instruction → completion → exchange → searches/enquiries → post-completion",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The typical flow is: take instructions/ID/AML, investigate title and raise enquiries, obtain searches, agree contract and exchange, complete, then deal with post-completion steps including any tax return/payment and registration.",
        whyWrong: [
          "Searches/enquiries and title investigation normally happen before exchange, not after.",
          "",
          "Exchange generally precedes completion; post-completion steps come after completion, not mid-way.",
          "Registration is post-completion; completion happens before registration.",
          "Completion follows exchange; searches/enquiries are usually pre-exchange.",
        ],
      },
    },
    {
      topic: "Client due diligence (AML) and source of funds",
      q: "A new buyer-client wants to exchange tomorrow and says they will bring £80,000 cash savings from overseas into your client account today. What is your best next step?",
      choices: [
        "Proceed to exchange immediately; AML checks can be completed after exchange.",
        "Ask the estate agent to confirm the client is genuine and then proceed.",
        "Complete CDD and verify source of funds/wealth appropriately before proceeding; if not satisfied, do not proceed and consider a SAR.",
        "Accept the funds but cap them at £10,000; proceed with the rest.",
        "Tell the client to pay the seller directly to avoid delays.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "You must complete appropriate client due diligence and take reasonable steps to verify source of funds/wealth. If concerns remain, you should not proceed and may need to make a suspicious activity report.",
        whyWrong: [
          "AML obligations apply at the outset and are risk-based; you should not exchange before satisfactory checks.",
          "Third-party reassurance is not a substitute for CDD/source of funds checks.",
          "",
          "A monetary cap does not satisfy AML duties; the risk remains.",
          "Direct payment to the seller risks bypassing controls and creates practical and compliance issues.",
        ],
      },
    },
    {
      topic: "Role of the seller’s solicitor",
      q: "In a standard residential sale, what is the seller’s solicitor primarily responsible for producing at the outset of the transaction?",
      choices: [
        "The mortgage offer and a valuation report for the buyer.",
        "The contract package including draft contract, official copies of title, plan, and relevant protocol forms.",
        "The buyer’s search results and survey.",
        "The buyer’s completion statement.",
        "The Land Registry AP1 application for registration.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The seller’s solicitor typically issues a contract pack including the draft contract, official copies/epitome (as appropriate), title plan, and standard protocol forms (e.g., TA forms) and supporting documents.",
        whyWrong: [
          "Mortgage offer/valuation are for the buyer’s lender/buyer side.",
          "",
          "Searches and surveys are usually obtained/commissioned by or for the buyer.",
          "The completion statement is prepared by the buyer’s solicitor for the buyer; the seller’s solicitor prepares a sale account.",
          "AP1 is usually submitted by the buyer’s solicitor post-completion.",
        ],
      },
    },
    {
      topic: "Role of the buyer’s solicitor",
      q: "Which task is most clearly the buyer’s solicitor’s responsibility in a freehold purchase?",
      choices: [
        "Giving an undertaking to redeem the buyer’s mortgage on completion.",
        "Investigating title and raising enquiries, then advising the client and lender on title issues.",
        "Supplying the TA6 and TA10 forms to the buyer.",
        "Providing the estate agent’s memorandum of sale.",
        "Arranging the seller’s EPC.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The buyer’s solicitor investigates title, raises enquiries, checks searches and replies, and advises the buyer (and the lender where acting for both) on risks and title matters.",
        whyWrong: [
          "Redemption undertakings relate to the seller’s existing mortgage and are given by the seller’s solicitor.",
          "",
          "TA forms are typically completed by the seller and supplied by the seller’s solicitor.",
          "The memorandum of sale is usually produced by the estate agent.",
          "The seller is responsible for providing an EPC (through an assessor), not the buyer’s solicitor.",
        ],
      },
    },
    {
      topic: "Registered vs unregistered land (overview)",
      q: "You are told the property is unregistered. Which is the key practical consequence for the buyer’s conveyancing process?",
      choices: [
        "No searches are needed because there is no Land Registry title.",
        "A contract is not required; transfer occurs by deed only.",
        "The seller must deduce title by providing an epitome/abstract of title and documents showing a good root of title.",
        "Completion cannot take place until first registration is completed.",
        "The buyer cannot obtain a legal mortgage over unregistered land.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "With unregistered land, the seller typically deduces title through an epitome/abstract and original title deeds establishing a good root of title and continuity.",
        whyWrong: [
          "Searches and enquiries are still crucial (e.g., local authority, drainage, etc.).",
          "A contract is still used; the transfer is by deed (TR1/transfer deed) on completion.",
          "",
          "Completion can occur; first registration is usually a post-completion step (subject to priority protection).",
          "A legal mortgage can be created, but it will generally trigger first registration.",
        ],
      },
    },
    {
      topic: "Contract vs transfer",
      q: "What is the correct statement about the relationship between exchange of contracts and completion in a typical freehold transaction?",
      choices: [
        "Title transfers to the buyer at exchange.",
        "Exchange creates a binding contract; title transfers on completion when the transfer deed is dated and consideration paid.",
        "Exchange is optional; only completion matters legally.",
        "Completion occurs before exchange in a normal chain.",
        "A transfer deed is signed and dated at exchange and cannot be amended thereafter.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Exchange creates a binding contract; legal title transfers on completion when the transfer is dated and the purchase money is paid.",
        whyWrong: [
          "Exchange does not transfer legal title; it creates contractual obligations.",
          "",
          "Exchange is crucial for certainty in most transactions; without it parties can walk away.",
          "In the normal process, exchange precedes completion.",
          "The transfer may be signed in advance but is usually dated on completion; final checks/arrangements can still occur pre-completion.",
        ],
      },
    },
    {
      topic: "Risk and insurance (overview)",
      q: "Your buyer-client asks: 'When do I become responsible if the property burns down?' In a standard residential contract for sale, what is the usual position?",
      choices: [
        "Risk always passes at completion.",
        "Risk always passes at exchange, so the buyer should arrange buildings insurance from exchange.",
        "Risk passes when the buyer’s mortgage offer is issued.",
        "Risk passes when the transfer is signed (even if not exchanged).",
        "Risk passes when the buyer receives the keys (even if completion money not paid).",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In many standard residential contracts, risk passes to the buyer at exchange, so buyers are typically advised to insure from exchange (subject to contract terms and any special conditions).",
        whyWrong: [
          "Completion is not always the risk point under standard terms; check the contract.",
          "",
          "A mortgage offer does not determine contractual risk.",
          "Signing a transfer is not the usual trigger for risk if exchange has not occurred.",
          "Key handover typically follows completion; it is not the legal test for risk.",
        ],
      },
    },
    {
      topic: "Deposit on exchange",
      q: "On exchange, the seller’s solicitor asks for a 10% deposit. Your buyer can only provide 5%. What is the best advice?",
      choices: [
        "A deposit is illegal unless it is exactly 10%.",
        "The seller must accept whatever the buyer can pay.",
        "The parties can agree a reduced deposit, but you should warn the buyer about potential consequences (e.g., breach remedies) and ensure the contract reflects it.",
        "Pay 5% now and promise to pay the remaining 5% at registration.",
        "Avoid exchange and complete immediately without any contract.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "A reduced deposit can be agreed, but it must be contractually documented and the buyer should be advised on risks (e.g., if the buyer defaults, the seller’s remedies/standard expectations and chain issues).",
        whyWrong: [
          "There is no rule that a deposit must be exactly 10%.",
          "The seller is not obliged to accept a reduced deposit.",
          "",
          "The balance would typically be dealt with as part of completion monies, not 'at registration'.",
          "Skipping exchange is generally risky and often not feasible in chains.",
        ],
      },
    },
    {
      topic: "Completion mechanics (funds and keys)",
      q: "Which statement best describes 'completion' in a freehold sale/purchase?",
      choices: [
        "Completion is when the contract is signed by both parties.",
        "Completion is when the estate agent releases the keys after the buyer views the property.",
        "Completion is when the purchase money is paid (usually by same-day transfer) in return for the dated transfer deed and release of keys.",
        "Completion is when Land Registry updates the register.",
        "Completion is when searches are ordered.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Completion is the moment the completion monies are paid and the seller provides the dated transfer deed (and other completion documents), after which keys are released.",
        whyWrong: [
          "Signing occurs earlier; exchange is when contracts become binding.",
          "Key release follows completion; it is not the legal definition.",
          "",
          "Land Registry update is post-completion registration.",
          "Searches are a pre-exchange step.",
        ],
      },
    },
    {
      topic: "Post-completion: registration",
      q: "After completion of a registered freehold purchase with a mortgage, what is the buyer solicitor’s key post-completion objective?",
      choices: [
        "Ensure the seller pays the estate agent’s commission.",
        "Register the buyer as proprietor and the lender’s charge at HM Land Registry within the priority period.",
        "Send the signed contract to the lender for approval.",
        "Obtain the seller’s survey and file it.",
        "Re-negotiate the purchase price if issues arise.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Post-completion, the buyer’s solicitor must protect and perfect the buyer’s and lender’s interests by registering the transfer and charge within the protected priority period.",
        whyWrong: [
          "Estate agent commission is usually handled between seller and agent and via the seller’s solicitor’s sale account.",
          "",
          "The lender’s approval is typically dealt with pre-completion; the contract is not sent post-completion as a key objective.",
          "Survey is not a registration requirement and is usually obtained pre-exchange.",
          "Price renegotiation after completion is not the usual post-completion task.",
        ],
      },
    },
    {
      topic: "Priority and OS1 (overview)",
      q: "You are acting for a buyer of registered land. What is the primary purpose of an OS1 priority search?",
      choices: [
        "To check the local authority planning history for the past 20 years.",
        "To freeze the register forever so no entries can ever be added.",
        "To protect the buyer/lender’s priority for registration for a limited period after completion.",
        "To confirm the seller’s identity.",
        "To obtain copies of the transfer deed.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "An OS1 search gives a priority period during which the buyer and lender can register their interests with priority over later applications.",
        whyWrong: [
          "Planning history is dealt with by local authority searches, not OS1.",
          "OS1 does not freeze the register indefinitely; it provides time-limited priority.",
          "",
          "Identity checks are separate from Land Registry priority searches.",
          "Official copies are obtained separately; OS1 is not for documents.",
        ],
      },
    },
    {
      topic: "Searches (overview)",
      q: "Which search is most directly aimed at revealing matters like compulsory purchase, enforcement notices, and highway adoption proposals?",
      choices: [
        "Environmental search",
        "Local authority search",
        "Chancel repair liability search",
        "Land Registry OS1 search",
        "Bankruptcy search",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The local authority search is designed to reveal a range of local land charges and related matters such as enforcement, road schemes, compulsory purchase, and planning/building control issues.",
        whyWrong: [
          "Environmental searches focus on contamination, landfill, flood risk etc.",
          "",
          "Chancel searches relate to potential church repair liability, not local authority enforcement.",
          "OS1 is about registration priority, not local authority matters.",
          "Bankruptcy searches relate to an individual’s insolvency status (relevant to lender).",
        ],
      },
    },
    {
      topic: "Mortgage lender and dual representation",
      q: "You are on the lender’s panel and acting for both the buyer and lender. A title issue is discovered that increases risk (e.g., missing easement for access). What should you do?",
      choices: [
        "Ignore it because your only duty is to the buyer.",
        "Proceed if the buyer is happy; the lender does not need to know.",
        "Report the issue to the lender in accordance with instructions (e.g., the UK Finance Mortgage Lenders’ Handbook) and advise the buyer.",
        "Tell the seller to speak to the lender directly.",
        "Exchange immediately to avoid losing the property.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Where acting for both buyer and lender, you must follow lender instructions and report material title issues to the lender while advising the buyer on risks and options.",
        whyWrong: [
          "You owe duties to both client and lender (if acting for both), and must follow lender instructions.",
          "Lenders require disclosure of material risks affecting security/marketability.",
          "",
          "Communication with the lender is your responsibility as panel solicitor unless instructed otherwise.",
          "Exchanging without resolving/reporting a material defect risks breach of lender instructions and client interests.",
        ],
      },
    },
    {
      topic: "Forms and key documents (overview)",
      q: "On a standard registered freehold purchase, which document is most closely associated with transferring legal title at completion?",
      choices: [
        "TA6 Property Information Form",
        "TR1 Transfer",
        "OS1 search result",
        "Mortgage offer",
        "Completion statement",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The TR1 transfer deed is executed by the parties and dated on completion to transfer legal title (subject to registration).",
        whyWrong: [
          "TA6 is pre-contract information provided by the seller; it does not transfer title.",
          "",
          "OS1 is a priority search, not the transfer instrument.",
          "The mortgage offer is the lender’s funding document, not the transfer.",
          "A completion statement is financial reconciliation, not a deed.",
        ],
      },
    },
    {
      topic: "Co-ownership: joint tenants vs tenants in common (overview)",
      q: "Two buyers will contribute unequal amounts and want their shares reflected so that each can leave their share by will. What is the most appropriate co-ownership arrangement?",
      choices: [
        "Joint tenants in equity",
        "Tenants in common in equity (with a declaration of trust where appropriate)",
        "Joint tenants only (shares cannot be unequal)",
        "Sole proprietorship with an informal side agreement",
        "Company ownership in the seller’s name",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Tenants in common can hold distinct shares and there is no survivorship; shares can pass by will. A declaration of trust can record the unequal shares.",
        whyWrong: [
          "Joint tenancy carries survivorship and does not support separate testamentary shares.",
          "",
          "Joint tenancy can exist, but it does not achieve the stated objective of distinct will-disposable shares.",
          "An informal side agreement is risky and may be unenforceable or create disputes; formal documentation is needed.",
          "Seller’s ownership is irrelevant and would not reflect the buyers’ interests.",
        ],
      },
    },
    {
      topic: "Chain transactions (overview)",
      q: "Your buyer is in a chain and asks why exchange and completion dates must be coordinated. What is the best explanation?",
      choices: [
        "Because the Land Registry requires all linked transfers to be registered on the same day.",
        "Because funds often move up the chain on completion day, and parties need binding commitments (exchange) and aligned completion to avoid default.",
        "Because estate agents legally set the dates for everyone.",
        "Because a buyer cannot exchange unless they have already completed their sale.",
        "Because searches expire if completion is not the next day.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In a chain, completion funds typically depend on money arriving from linked transactions. Exchange creates binding commitments; coordinating dates reduces risk of one link defaulting and collapsing the chain.",
        whyWrong: [
          "Land Registry does not require same-day registration across chains.",
          "",
          "Agents may coordinate but do not legally dictate dates; contracts do.",
          "A buyer can exchange before completing their sale (subject to funds/risk), though it carries risk.",
          "Search expiry depends on the search and lender requirements; it is not generally 'next day'.",
        ],
      },
    },
    {
      topic: "Pre-contract enquiries (overview)",
      q: "In broad terms, what is the main purpose of raising enquiries before exchange?",
      choices: [
        "To renegotiate the price regardless of issues.",
        "To obtain warranties that replace the need for searches.",
        "To clarify title and property information, identify and manage risk, and ensure the buyer and lender can proceed informed.",
        "To force the seller to accept a reduced deposit.",
        "To delay exchange until the seller gives vacant possession in writing.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Enquiries help clarify title and property information, flush out issues, and allow proper advice to the buyer (and lender if applicable) before committing at exchange.",
        whyWrong: [
          "Price renegotiation may happen, but it is not the core purpose of enquiries.",
          "Enquiries do not replace searches; they complement them.",
          "",
          "Deposit level is a negotiation point, not the objective of enquiries.",
          "Vacant possession is addressed in the contract and practical arrangements; enquiries are broader than that.",
        ],
      },
    },
    {
      topic: "Completion funds and completion statement (overview)",
      q: "Your buyer’s completion statement shows 'purchase price, less deposit already paid, plus SDLT, Land Registry fee, and legal costs'. What does this statement primarily do?",
      choices: [
        "It replaces the contract and sets the legal terms.",
        "It provides a financial breakdown of the balance required from the buyer to complete.",
        "It is filed at the Land Registry instead of AP1.",
        "It proves the seller has good title.",
        "It is sent to the estate agent so they can set the completion date.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A completion statement is a financial reconciliation showing how the completion monies are calculated and what funds the buyer must provide.",
        whyWrong: [
          "It does not replace the contract; it is an accounting document.",
          "",
          "AP1 is required for registration; completion statements are not a substitute.",
          "Title quality is evidenced by the register/deeds and investigations, not a completion statement.",
          "Agents may be informed, but the statement is not for setting dates.",
        ],
      },
    },
    {
      topic: "Vacant possession (overview)",
      q: "A buyer is purchasing a residential property and wants assurance that the seller will move out. Which mechanism most directly addresses this in the transaction documents?",
      choices: [
        "A local authority search",
        "A standard contract term/special condition requiring vacant possession on completion",
        "An OS1 priority search",
        "The EPC",
        "The mortgage offer",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Vacant possession is typically a contractual requirement—either within standard conditions or expressly via special condition—ensuring the property is empty of occupiers and chattels as agreed on completion.",
        whyWrong: [
          "Searches don’t guarantee physical vacant possession on the day.",
          "",
          "OS1 relates to Land Registry priority, not occupation.",
          "An EPC relates to energy efficiency, not possession.",
          "A mortgage offer is about lending, not seller moving out.",
        ],
      },
    },
    {
      topic: "Fixtures, fittings and contents (overview)",
      q: "A dispute arises because the seller removed the built-in oven. Which document most commonly clarifies what is included in the sale price?",
      choices: [
        "TA10 Fittings and Contents Form",
        "TR1 Transfer",
        "OS1 search",
        "DS1 discharge",
        "LLC1",
      ],
      correct: 0,
      explain: {
        whyRight:
          "The TA10 form (or equivalent) typically lists items included/excluded, helping avoid disputes about fixtures, fittings, and contents.",
        whyWrong: [
          "",
          "TR1 transfers legal title but usually does not itemise contents.",
          "OS1 is a priority search and does not deal with fixtures.",
          "DS1 relates to discharge of a registered charge, not contents.",
          "LLC1 is part of local authority searches, not fixtures.",
        ],
      },
    },
    {
      topic: "Seller’s mortgage redemption (overview)",
      q: "The property is subject to the seller’s existing registered mortgage. What is the usual conveyancing solution to ensure the buyer takes free of that charge?",
      choices: [
        "Buyer signs an indemnity promising to pay the seller’s mortgage.",
        "Seller’s solicitor undertakes to redeem the mortgage on completion from sale proceeds and procure discharge.",
        "The buyer’s solicitor sends AP1 to remove the charge before completion.",
        "The estate agent confirms the mortgage will be paid so no further steps are needed.",
        "The seller simply signs TR1; that automatically removes the charge.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The standard approach is a redemption undertaking from the seller’s solicitor to redeem the mortgage using completion monies and arrange discharge (e-DS1/DS1).",
        whyWrong: [
          "The buyer should not assume the seller’s debt; proper discharge is required.",
          "",
          "AP1 is post-completion; the buyer can’t remove a seller’s charge pre-completion without discharge arrangements.",
          "Agent assurances are not sufficient; solicitors’ undertakings and lender discharge are key.",
          "TR1 does not automatically remove an existing registered charge.",
        ],
      },
    },
    {
      topic: "Undertakings (overview)",
      q: "Why are solicitors’ undertakings particularly important in conveyancing practice?",
      choices: [
        "They allow solicitors to ignore contract conditions.",
        "They provide a binding professional promise relied upon to complete transactions safely (e.g., redeem mortgages, forward title documents).",
        "They are optional and have no professional consequences.",
        "They are only used where land is unregistered.",
        "They replace the need for completion monies.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Undertakings are professionally enforceable promises that other parties rely on (e.g., redemption, release of deeds, sending discharge), enabling completion with reduced risk.",
        whyWrong: [
          "Undertakings do not override contract terms; they supplement completion mechanics.",
          "",
          "Breaching an undertaking can have serious professional consequences.",
          "Undertakings are common in both registered and unregistered transactions.",
          "Completion monies are still required; undertakings don’t replace payment.",
        ],
      },
    },
    {
      topic: "Lender requirements (overview)",
      q: "A buyer wants to exchange before a formal mortgage offer is issued. What is the key risk you should highlight?",
      choices: [
        "There is no risk because lenders must lend once the buyer applies.",
        "The buyer could be contractually bound to complete but lack funding, risking breach and loss of deposit/damages.",
        "The seller can force the lender to issue an offer.",
        "The Land Registry will refuse registration.",
        "Searches become invalid as soon as a mortgage offer is issued.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If the buyer exchanges without a mortgage offer, they may be bound to complete but unable to fund the purchase, exposing them to default consequences (deposit forfeiture and damages).",
        whyWrong: [
          "Lenders are not obliged to lend; applications can be declined or delayed.",
          "",
          "Sellers cannot compel a lender to lend.",
          "Registration issues are secondary; the primary risk is inability to complete.",
          "Search validity is not tied to when a mortgage offer is issued in that way.",
        ],
      },
    },
    {
      topic: "Survey vs searches (overview)",
      q: "Your buyer asks whether the local authority search will reveal structural defects. What is the best response?",
      choices: [
        "Yes—local searches always reveal subsidence and damp.",
        "No—structural condition is usually assessed by a survey; searches mainly reveal legal/administrative matters.",
        "Yes—but only if the seller is in a chain.",
        "No—because searches are only needed for cash buyers.",
        "Yes—because the Land Registry guarantees the property’s condition.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Searches (especially local authority) focus on legal and administrative matters (planning, enforcement, highways). Structural condition is typically addressed by a survey/inspection.",
        whyWrong: [
          "Local authority searches do not typically reveal physical defects like damp/subsidence.",
          "",
          "Chain status is irrelevant to what searches reveal.",
          "Searches are commonly required for buyers and lenders; cash buyers often still obtain them for risk management.",
          "Land Registry guarantees title, not physical condition.",
        ],
      },
    },
    {
      topic: "Title plan and boundaries (overview)",
      q: "A buyer says: 'The fence line must be exactly the legal boundary.' What should you explain?",
      choices: [
        "The Land Registry title plan shows exact boundaries to the centimetre.",
        "Boundaries are usually 'general boundaries'; exact lines may be uncertain unless determined by agreement or court/tribunal.",
        "A TA10 form fixes the boundary.",
        "An OS1 search confirms the boundary position.",
        "Only the estate agent can confirm boundaries.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Most registered titles are shown on a general boundaries basis; exact boundary lines can be uncertain and may require further evidence, agreement, or determination.",
        whyWrong: [
          "Title plans generally do not define boundaries with exact precision.",
          "",
          "TA10 concerns contents, not boundaries.",
          "OS1 is a priority search, not a boundary confirmation tool.",
          "Agents are not authoritative for legal boundaries.",
        ],
      },
    },
    {
      topic: "Easements and access (overview)",
      q: "A buyer is purchasing a house that can only be reached via a shared private driveway. Which title issue is most critical to confirm before exchange?",
      choices: [
        "That the seller has a valid TV licence.",
        "That there is a legal right of way benefiting the property over the driveway.",
        "That the driveway is recently resurfaced.",
        "That the neighbours are friendly.",
        "That the seller has paid council tax.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The buyer needs a legally enforceable right of way (easement) for access; without it, marketability and lender security may be compromised.",
        whyWrong: [
          "A TV licence is irrelevant to title.",
          "",
          "Surface condition is a practical issue, not the key legal title right.",
          "Neighbour relations are not a substitute for legal rights.",
          "Council tax status is not the key title issue for access.",
        ],
      },
    },
    {
      topic: "Restrictive covenants (overview)",
      q: "A buyer intends to run a small business from home. The title contains a restrictive covenant 'not to use the property for any trade or business.' What is the most appropriate first step?",
      choices: [
        "Ignore it because restrictive covenants are unenforceable.",
        "Advise the buyer of the covenant and investigate enforceability/benefit; consider options such as consent, indemnity insurance, or variation/discharge.",
        "Tell the buyer to exchange and deal with it after completion.",
        "Ask the estate agent for permission.",
        "Apply to Land Registry to delete the covenant immediately without evidence.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "You should advise on the covenant, assess who has the benefit and enforceability, and consider practical options (consent, insurance, variation/discharge) before committing at exchange.",
        whyWrong: [
          "Restrictive covenants can be enforceable and may affect use/value.",
          "",
          "Exchanging first exposes the buyer to binding obligations without managing the risk.",
          "An agent’s permission does not remove or vary a legal covenant.",
          "Land Registry does not simply delete covenants without a proper legal basis.",
        ],
      },
    },
    {
      topic: "Planning vs title (overview)",
      q: "A buyer wants to convert the loft. The seller says 'it’s fine; everyone does it.' Which is the best legal risk-management approach?",
      choices: [
        "Rely on the seller’s statement; no further steps are needed.",
        "Check planning/building control position via enquiries and local authority search results; advise on consents and enforcement risk.",
        "Only check the EPC rating.",
        "Ask the mortgage lender to inspect the loft before exchange.",
        "Exchange now and obtain planning permission after completion without any risk.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Loft conversion plans raise planning and building control issues. You should check relevant records/enquiries and advise the buyer on consent requirements and enforcement risk.",
        whyWrong: [
          "Seller assurances are not a substitute for objective checks.",
          "",
          "EPC does not address planning/building control compliance.",
          "Lenders are not the primary source of planning/building control compliance.",
          "Post-completion permission may be possible, but exchange without understanding compliance can be risky.",
        ],
      },
    },
    {
      topic: "Contractual remedies (overview)",
      q: "After exchange, the buyer tries to withdraw because they changed their mind. What is the typical legal consequence?",
      choices: [
        "They can withdraw freely until completion with no consequences.",
        "They are in breach of contract and may forfeit the deposit and face damages.",
        "The contract automatically ends if the buyer’s feelings change.",
        "Only the estate agent can decide if the buyer is in breach.",
        "The buyer can withdraw if they pay the seller’s legal costs only.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Exchange creates a binding contract. If the buyer fails to complete without a contractual basis, they risk forfeiting the deposit and being liable for damages and other contractual remedies.",
        whyWrong: [
          "After exchange, parties are bound; they cannot walk away without consequences.",
          "",
          "There is no automatic 'cooling off' for standard residential conveyancing contracts in this context.",
          "Agents do not determine contractual breach; courts/contract terms do.",
          "Liability can exceed legal costs (e.g., loss on resale, interest, etc.).",
        ],
      },
    },
    {
      topic: "Client care and scope (overview)",
      q: "At the outset you send a client care letter for a buyer purchase. Which item is most important to include from a risk-management perspective?",
      choices: [
        "A guarantee that the purchase will complete by a specific date.",
        "Clear scope of work, fees/disbursements, and key risks/timescales, including what you will and won’t do (e.g., survey advice).",
        "A promise to negotiate the best price.",
        "A statement that you act only for the estate agent.",
        "A declaration that searches are unnecessary.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A clear client care letter sets scope, costs, timescales, responsibilities, and exclusions (e.g., survey/valuation), reducing complaints and negligence risk.",
        whyWrong: [
          "Completion dates depend on third parties and chains; guaranteeing dates is risky and usually inappropriate.",
          "",
          "Price negotiation is not typically the solicitor’s role.",
          "You act for the client, not the agent.",
          "Searches are often essential for informed advice and lender requirements.",
        ],
      },
    },
    {
      topic: "Identity fraud and seller impersonation (overview)",
      q: "You are acting for a buyer and become concerned the 'seller' may be impersonating the true owner. What should you do in principle?",
      choices: [
        "Proceed; it is the seller’s solicitor’s problem only.",
        "Increase vigilance and take proportionate steps (e.g., verify seller identity evidence, consider Land Registry anti-fraud measures, raise targeted enquiries, and follow firm protocols).",
        "Tell the buyer to pay the price in cash to avoid traceability issues.",
        "Skip exchange and complete immediately.",
        "Assume the estate agent has already verified identity so no action is required.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Conveyancing fraud risk requires heightened checks and firm protocols. You should take proportionate steps to mitigate risk and protect the buyer and any lender.",
        whyWrong: [
          "Buyer-side solicitors also manage transaction risk; ignoring red flags can be negligent.",
          "",
          "Encouraging untraceable payments is inappropriate and increases risk.",
          "Rushing increases risk; proper checks are needed before commitment.",
          "Agents’ checks do not replace solicitor risk controls.",
        ],
      },
    },
    {
      topic: "Property information forms (overview)",
      q: "Which statement best describes the function of standard seller property information forms in residential conveyancing?",
      choices: [
        "They are warranties that remove any need for buyer investigations.",
        "They provide structured disclosures to assist the buyer’s enquiries and risk assessment; they do not replace searches or surveys.",
        "They are only relevant after completion.",
        "They are prepared by the buyer’s solicitor.",
        "They are filed at the Land Registry as evidence of ownership.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Seller forms provide information to support enquiries and decision-making but do not eliminate the need for searches/survey and proper title investigation.",
        whyWrong: [
          "They may contain misstatements; investigations remain necessary.",
          "",
          "They are pre-contract tools used before exchange.",
          "They are generally completed by the seller (often via the seller’s solicitor).",
          "Land Registry registration relies on deeds/applications, not TA forms.",
        ],
      },
    },
    {
      topic: "Completion date and 'time of the essence' (overview)",
      q: "After exchange, the completion date arrives and the buyer’s funds are delayed. Why is this potentially serious?",
      choices: [
        "Because completion dates are informal and can be ignored.",
        "Because the buyer may be in contractual default, triggering interest, notice to complete, and potential termination/forfeiture consequences.",
        "Because delays automatically cancel the mortgage.",
        "Because Land Registry will fine the buyer immediately.",
        "Because searches become invalid instantly at 2pm.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Failure to complete on the contractual completion date can put the buyer in default, leading to interest, a notice to complete, and in serious cases termination and deposit consequences.",
        whyWrong: [
          "Completion dates are contractually binding.",
          "",
          "Mortgage cancellation is not automatic, though delays can cause lender issues.",
          "Land Registry does not typically fine simply because completion was late.",
          "Search validity and '2pm' are not universal rules; contractual default is the key issue.",
        ],
      },
    },
    {
      topic: "Professional roles: conveyancer vs surveyor",
      q: "A buyer asks you: 'Is the roof sound?' What is the most appropriate response as the conveyancing solicitor?",
      choices: [
        "Confirm it is sound because it looks fine in the photos.",
        "Advise that physical condition is for a surveyor/inspection; you can advise on legal title and search results.",
        "Tell them to ask the seller at completion.",
        "State that the Land Registry guarantees the roof’s condition.",
        "Refuse to answer any questions at all.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Physical condition is outside conveyancing expertise; buyers should obtain a survey/inspection. You advise on legal title and documentary risks.",
        whyWrong: [
          "Assuring condition based on photos risks negligent misstatement.",
          "",
          "The seller’s informal comments are not a substitute for professional inspection.",
          "Land Registry guarantees title, not the state of repair.",
          "You should signpost appropriately rather than refusing all help.",
        ],
      },
    },
    {
      topic: "Title guarantee (overview)",
      q: "A buyer asks what 'full title guarantee' generally means in a transfer. What is the best high-level explanation?",
      choices: [
        "The seller guarantees the property will never have defects of any kind.",
        "The seller gives implied covenants about their right to dispose and that the property is free from undisclosed encumbrances they created/allowed, subject to stated matters.",
        "It means the buyer can sue the Land Registry for any problem.",
        "It guarantees the property’s market value for 10 years.",
        "It only applies if the property is leasehold.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Full title guarantee carries implied covenants (including right to dispose and limited covenants against encumbrances), subject to exceptions/entries and disclosures.",
        whyWrong: [
          "It does not guarantee an absence of all defects; it relates to certain implied covenants.",
          "",
          "Land Registry liability is separate and limited; title guarantee is a seller covenant concept.",
          "It does not guarantee market value.",
          "Title guarantees can apply in freehold transfers too.",
        ],
      },
    },
    {
      topic: "Land Registry: register components (overview)",
      q: "Your trainee asks what the 'Charges Register' typically contains. Which is the best answer?",
      choices: [
        "Only the buyer’s personal financial details",
        "Registered charges (mortgages) and other encumbrances such as restrictive covenants and notices, as applicable",
        "A structural survey and EPC",
        "Planning permissions granted in the last year only",
        "A list of the seller’s furniture",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The Charges Register commonly records registered charges and other adverse matters such as restrictive covenants, notices, and other encumbrances affecting the title.",
        whyWrong: [
          "The register does not include personal financial details in that way.",
          "",
          "Surveys/EPCs are not part of the Land Registry title.",
          "Planning permissions are not listed comprehensively on the title register.",
          "Furniture is not recorded on the title.",
        ],
      },
    },
    {
      topic: "Completion documents (overview)",
      q: "On completion of a freehold purchase, which item would you expect to receive from the seller’s solicitor (in addition to keys via agents)?",
      choices: [
        "The buyer’s bankruptcy search result",
        "The executed transfer deed and any other completion documents (e.g., discharges/undertakings), subject to registration process",
        "The buyer’s mortgage deed already registered",
        "The local authority search results ordered by the buyer",
        "The buyer’s survey report",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Completion involves exchanging money for the executed (and dated) transfer deed and other agreed completion items (e.g., discharge arrangements for seller’s mortgage).",
        whyWrong: [
          "Bankruptcy searches are buyer-side/lender-related checks.",
          "",
          "The mortgage deed/charge is registered post-completion, not already registered at completion.",
          "Buyer-ordered search results are usually already held by the buyer’s solicitor.",
          "Survey reports are buyer documents and not a completion deliverable.",
        ],
      },
    },
    {
      topic: "Post-completion: tax (overview)",
      q: "After completion of a freehold purchase in England, what is the buyer’s solicitor typically responsible for in relation to stamp duty land tax (if payable)?",
      choices: [
        "Nothing—tax is purely the buyer’s job with no solicitor involvement.",
        "Submitting the SDLT return and arranging payment (using client funds) within the required time limit, then using evidence for registration.",
        "Paying the seller’s capital gains tax.",
        "Registering SDLT directly on the title without any return.",
        "Asking the estate agent to pay SDLT from commission.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In practice the buyer’s solicitor usually files the SDLT return and arranges payment (if due) within the time limit, and then uses the SDLT reference/certificate for registration.",
        whyWrong: [
          "While the tax is the buyer’s liability, solicitors commonly handle filing/payment as part of the service.",
          "",
          "CGT is a seller-side tax issue, not the buyer’s SDLT.",
          "Land Registry requires evidence of SDLT compliance; it is not done 'without a return' where required.",
          "Agents do not pay SDLT; it is funded by the buyer.",
        ],
      },
    },
  ];

  window.quizData = {
    title:
      "Property Practice — Chapter 1: Key elements and structure of freehold property transactions (Overview)",
    subtitle:
      "30 SQE-style scenario MCQs (freehold purchase/sale workflow, roles, documents, risk points).",
    questions: questions,
  };
})();
