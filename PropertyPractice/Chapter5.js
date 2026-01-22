(() => {
  const questions = [
    {
      topic: "Pre-completion: objective",
      q: "After exchange, what is the main purpose of the buyer’s pre-completion work?",
      choices: [
        "To renegotiate the purchase price",
        "To ensure all conditions are satisfied so completion can occur safely (funding, searches, documents, undertakings, and practical arrangements)",
        "To rewrite the contract terms",
        "To apply for registration immediately before completion",
        "To cancel all enquiries as they are no longer relevant",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Pre-completion work focuses on making completion happen safely: arrange funds, final searches, prepare transfer/mortgage, agree completion statement, and ensure discharge/keys logistics.",
        whyWrong: [
          "Price renegotiation can happen but is not the main post-exchange focus.",
          "",
          "Contract terms are already fixed at exchange.",
          "Registration is a post-completion step (though priority searches are pre-completion).",
          "Some matters remain relevant (e.g., completion documents, undertakings).",
        ],
      },
    },
    {
      topic: "Pre-completion: OS1 priority search",
      q: "You are acting for a buyer of registered land. Why do you carry out an OS1 search shortly before completion?",
      choices: [
        "To obtain planning history details",
        "To secure a priority period so the buyer and lender can register their interests with priority over later applications",
        "To prove the property is connected to mains drainage",
        "To replace the need for a transfer deed",
        "To confirm the seller has paid SDLT",
      ],
      correct: 1,
      explain: {
        whyRight:
          "OS1 gives the buyer/lender a time-limited priority period, reducing the risk that intervening applications defeat the buyer’s registration priority.",
        whyWrong: [
          "Planning history is covered by local authority searches.",
          "",
          "Drainage is addressed by a drainage and water search.",
          "A transfer deed (TR1) is still required.",
          "SDLT is the buyer’s tax; seller does not pay SDLT on this purchase.",
        ],
      },
    },
    {
      topic: "Pre-completion: K16 bankruptcy search",
      q: "You act for a buyer and their lender. Why do you carry out a K16 bankruptcy search against the buyer before completion?",
      choices: [
        "To check whether the seller is bankrupt",
        "To ensure the buyer is not subject to bankruptcy restrictions that could affect the lender’s ability to register/enforce its charge, per lender instructions",
        "To check whether the property is in a conservation area",
        "To confirm boundaries",
        "To obtain a copy of the title plan",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A K16 search is typically required by lenders to ensure the borrower is not bankrupt, which could prevent proper registration or undermine the lender’s security.",
        whyWrong: [
          "K16 is typically against the borrower/buyer, not the seller.",
          "",
          "Conservation areas are revealed by local authority searches.",
          "Boundaries are assessed from title plan and evidence, not bankruptcy searches.",
          "Title plan copies are obtained from Land Registry official copies.",
        ],
      },
    },
    {
      topic: "Pre-completion: requisitions on title",
      q: "In conveyancing, what are 'requisitions on title' most commonly referring to at the pre-completion stage?",
      choices: [
        "Questions about the seller’s personal finances",
        "Final completion arrangements/questions raised with the seller’s solicitor (e.g., execution, discharge, completion logistics) before completion",
        "Post-completion Land Registry objections",
        "Planning questions raised with the local authority",
        "A request for the buyer’s mortgage offer",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Pre-completion requisitions are the buyer’s solicitor’s final questions/requirements to ensure completion can proceed (e.g., signed TR1, discharge, undertakings, keys).",
        whyWrong: [
          "Seller finances are generally not the focus (except redemption logistics).",
          "",
          "Land Registry objections happen during registration, not as 'requisitions on title' in the conveyancing sense here.",
          "Planning questions are usually pre-exchange due diligence matters.",
          "Mortgage offers are buyer/lender-side documents; requisitions target completion deliverables.",
        ],
      },
    },
    {
      topic: "Completion documents: TR1 dating",
      q: "You receive a TR1 signed by both parties in advance. When is it typically dated in a standard freehold purchase?",
      choices: [
        "On exchange of contracts",
        "On completion when the purchase money is paid and the transfer takes effect",
        "On the day the buyer’s mortgage offer is issued",
        "After registration is complete",
        "It is never dated; Land Registry dates it automatically",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The transfer is usually dated on completion (when consideration is paid) so it takes effect from that date for registration purposes.",
        whyWrong: [
          "Exchange forms the contract; title transfer happens at completion.",
          "",
          "Mortgage offer date does not determine transfer effective date.",
          "Registration follows completion; the deed should already be dated by then.",
          "Land Registry does not date deeds for the parties.",
        ],
      },
    },
    {
      topic: "Completion mechanics: what is exchanged",
      q: "On completion of a registered freehold purchase, what is the buyer’s solicitor primarily sending and receiving?",
      choices: [
        "Sending OS1 result; receiving a survey report",
        "Sending completion monies; receiving the dated transfer (TR1) and confirmation/undertakings about mortgage discharge and other completion documents",
        "Sending the SDLT return; receiving the mortgage offer",
        "Sending a TA10; receiving a local authority search",
        "Sending the AP1; receiving the contract",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Completion involves paying the completion monies and receiving the signed/dated transfer and other agreed completion items (including discharge undertakings/evidence).",
        whyWrong: [
          "OS1 and surveys are not the completion exchange items.",
          "",
          "SDLT return is post-completion; mortgage offer is pre-completion.",
          "TA10/searches are pre-exchange due diligence documents.",
          "AP1 is post-completion; the contract is already exchanged.",
        ],
      },
    },
    {
      topic: "Funds flow: CHAPS / same-day transfer",
      q: "How are completion monies typically transferred between firms in a modern conveyancing completion?",
      choices: [
        "By cheque posted to the seller’s solicitor",
        "By same-day electronic transfer (e.g., CHAPS) to the seller’s solicitor’s client account",
        "By cash handed to the estate agent",
        "By bank draft given to the seller directly",
        "By PayPal",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Completion monies are commonly sent by same-day electronic transfer (e.g., CHAPS) between solicitors’ client accounts.",
        whyWrong: [
          "Cheques are slow and unreliable for completion timing.",
          "",
          "Cash via agent is inappropriate and unsafe.",
          "Bank drafts are less common and still carry timing/clearance issues.",
          "Informal payment platforms are not used for completion of land transactions.",
        ],
      },
    },
    {
      topic: "Keys release",
      q: "On completion day, when is the estate agent typically authorised to release the keys to the buyer?",
      choices: [
        "As soon as exchange happens",
        "Once the seller’s solicitor confirms receipt of completion monies (completion has taken place)",
        "As soon as the buyer arrives outside the property",
        "Once the buyer’s mortgage offer is issued",
        "After the Land Registry completes registration",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Key release is normally authorised after completion—i.e., when the seller’s solicitor has received the completion monies and confirms completion.",
        whyWrong: [
          "Exchange does not transfer title or complete the sale.",
          "",
          "Physical arrival has no legal effect.",
          "Mortgage offer issuance does not mean completion monies are paid.",
          "Registration happens after completion; waiting would be impractical.",
        ],
      },
    },
    {
      topic: "Seller’s mortgage redemption: undertaking",
      q: "The seller’s property is subject to a registered charge. The seller’s solicitor gives an undertaking to redeem it on completion. What does the buyer rely on this for?",
      choices: [
        "To avoid paying SDLT",
        "To ensure the charge will be discharged so the buyer and lender can register free of the seller’s mortgage",
        "To transfer legal title without a TR1",
        "To avoid doing OS1",
        "To guarantee the property’s physical condition",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A redemption undertaking is relied upon to ensure the seller’s mortgage will be redeemed and discharged, allowing clean registration for buyer and lender.",
        whyWrong: [
          "SDLT is unaffected by redemption undertakings.",
          "",
          "A TR1 (or equivalent) is still needed to transfer title.",
          "OS1 priority protection is still important.",
          "Undertakings relate to title/charges, not physical condition.",
        ],
      },
    },
    {
      topic: "Completion statement",
      q: "What is the primary purpose of the buyer’s completion statement?",
      choices: [
        "To replace the contract terms after exchange",
        "To show the financial calculation of the balance required to complete (price less deposit, plus fees/disbursements, SDLT estimate, LR fee, etc.)",
        "To prove title at HM Land Registry",
        "To confirm the seller has moved out",
        "To notify the local authority of completion",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A completion statement is an accounting document showing how the completion monies are calculated and what the buyer must provide.",
        whyWrong: [
          "It does not replace the contract; it’s a financial breakdown.",
          "",
          "Title proof comes from the register/deeds and registration, not the completion statement.",
          "Vacant possession is governed by contract/enquiries, not this statement.",
          "Local authority notification is not the function of the completion statement.",
        ],
      },
    },
    {
      topic: "Apportionments (freehold)",
      q: "On completion of a freehold purchase, which item is most commonly apportioned between buyer and seller (where applicable)?",
      choices: [
        "Stamp Duty Land Tax",
        "Council tax/estate rentcharge or managed estate service charge (if applicable), and utilities by agreement",
        "Seller’s capital gains tax",
        "Buyer’s mortgage arrangement fee",
        "Land Registry registration fee",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Apportionments often relate to ongoing outgoings to the completion date (council tax/utilities) and on managed estates possibly estate rentcharges/service charges.",
        whyWrong: [
          "SDLT is typically a buyer liability and not apportioned.",
          "",
          "CGT is seller-side.",
          "Mortgage fees are buyer-lender costs.",
          "Land Registry fee is buyer’s registration cost.",
        ],
      },
    },
    {
      topic: "Completion delay: contractual consequences",
      q: "Completion is due today but the buyer’s funds are delayed. Under many standard contracts, what is a likely immediate consequence of late completion (even before termination)?",
      choices: [
        "The contract automatically becomes void",
        "The buyer may have to pay contractual interest on the balance and may be served a notice to complete",
        "The buyer automatically gets 30 extra days",
        "Land Registry refuses future applications",
        "The deposit is refunded to the buyer",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Late completion can trigger contractual interest and the seller may serve a notice to complete, making time of the essence for a short period and escalating remedies.",
        whyWrong: [
          "The contract does not automatically become void; remedies and notices apply.",
          "",
          "No automatic extension exists without agreement or contract mechanism.",
          "Land Registry does not police late completion as such.",
          "Deposit refund is not automatic if the buyer is in default.",
        ],
      },
    },
    {
      topic: "Pre-completion: lender drawdown",
      q: "Your buyer is mortgaging and completion is in 5 working days. What is a key practical step you must take to ensure funds arrive on time?",
      choices: [
        "Request mortgage advance from the lender in accordance with their notice period and satisfy any conditions (e.g., report on title, COT) in time",
        "Wait until completion day and then request funds by phone",
        "Ask the estate agent to collect funds from the lender",
        "Ask the seller to accept instalments over 12 months",
        "Submit AP1 before completion to unlock lender funds",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Lenders have notice periods and conditions (including certificate/report on title). You must request drawdown in time and ensure conditions are met to avoid completion failure.",
        whyWrong: [
          "",
          "Same-day requests may be too late and risk breach.",
          "Agents do not liaise with lenders for solicitor drawdowns.",
          "Instalment completion is not standard and would require renegotiation.",
          "AP1 is post-completion and does not trigger lender drawdown.",
        ],
      },
    },
    {
      topic: "Post-completion: SDLT (overview)",
      q: "After completion of a residential purchase in England, which is the usual solicitor task regarding SDLT (if payable)?",
      choices: [
        "Pay the seller’s CGT",
        "Submit the SDLT return and arrange payment using client funds within the required time limit, then retain the SDLT reference for registration",
        "Register the transfer without any SDLT compliance",
        "Ask the estate agent to pay SDLT from commission",
        "Send SDLT money directly to HM Land Registry",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The buyer’s solicitor typically files the SDLT return and pays any SDLT due within the deadline, then uses the SDLT reference/certificate for registration.",
        whyWrong: [
          "CGT is generally the seller’s responsibility, not paid by buyer’s solicitor.",
          "",
          "Land Registry often requires SDLT evidence; you can’t ignore compliance where applicable.",
          "Agents do not pay SDLT; it is buyer’s liability.",
          "SDLT is paid to HMRC, not to HM Land Registry.",
        ],
      },
    },
    {
      topic: "Post-completion: registration package",
      q: "For a registered freehold purchase with a mortgage, which items are typically included in the Land Registry application?",
      choices: [
        "AP1, TR1, mortgage deed/charge, SDLT evidence/reference, and any consents/certificates required by restrictions",
        "TA6 and TA10 only",
        "OS1 and K16 only",
        "The buyer’s survey report",
        "The seller’s mortgage offer",
      ],
      correct: 0,
      explain: {
        whyRight:
          "A typical application includes AP1 plus the transfer, mortgage deed, SDLT evidence and any additional documents needed for compliance with restrictions/entries.",
        whyWrong: [
          "",
          "TA forms are not registration documents.",
          "OS1/K16 are pre-completion searches and not filed as registration instruments.",
          "Survey reports are not registration documents.",
          "Seller’s mortgage offer is irrelevant.",
        ],
      },
    },
    {
      topic: "Priority period: consequence of missing it",
      q: "You completed and carried out OS1 before completion. You then fail to lodge the registration application within the priority period. What is the key risk?",
      choices: [
        "No risk; OS1 lasts indefinitely.",
        "A third party could register an intervening interest (e.g., charge/notice) that takes priority over your buyer/lender’s application, potentially prejudicing title/security.",
        "The contract is automatically rescinded.",
        "HMRC cancels the SDLT return.",
        "The buyer becomes personally liable for the seller’s mortgage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If the application is not lodged within the priority period, intervening applications may gain priority, jeopardising the buyer’s and lender’s position.",
        whyWrong: [
          "OS1 priority is time-limited, not indefinite.",
          "",
          "Contractual completion has happened; missing priority affects registration priority, not rescission of the contract automatically.",
          "SDLT compliance is separate; it isn’t cancelled for this reason.",
          "Buyer liability for seller mortgage is not the direct consequence; the risk is priority and title security.",
        ],
      },
    },
    {
      topic: "Land Registry requisitions",
      q: "HM Land Registry raises a requisition because a consent certificate required by a restriction was not lodged. What is the most likely immediate problem?",
      choices: [
        "Registration will be delayed or rejected unless the missing document is provided, leaving the buyer not yet registered and the lender’s security unperfected.",
        "The buyer must pay SDLT again.",
        "The contract is undone.",
        "The seller becomes owner again automatically.",
        "The buyer’s mortgage offer becomes void automatically.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "A requisition must be satisfied; otherwise registration may be delayed/cancelled. Until registration, the buyer is not on the register and lender’s charge is not perfected.",
        whyWrong: [
          "",
          "SDLT does not usually need repaying merely due to Land Registry requisitions.",
          "Completion contract remains; the issue is registration perfection.",
          "Ownership does not revert automatically; but legal title registration is incomplete.",
          "Mortgage offers don’t automatically void because of requisitions, though lender concerns may arise.",
        ],
      },
    },
    {
      topic: "Unregistered land: first registration application",
      q: "You complete a purchase of unregistered freehold land. What is a key post-completion step?",
      choices: [
        "Do nothing; the buyer is protected by possession alone.",
        "Apply for first registration with HM Land Registry (FR1) with the title deeds and supporting evidence, and protect priority appropriately.",
        "Submit OS1 against the title number.",
        "Register a DS1 to remove the buyer’s mortgage.",
        "Send the TA6 to HMRC.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A disposition of unregistered land typically triggers compulsory first registration. The buyer’s solicitor must submit the first registration application with deeds/evidence.",
        whyWrong: [
          "Failure to register can create serious title and marketability issues and may breach compulsory registration rules.",
          "",
          "OS1 is for registered titles; unregistered land has no title number pre-registration.",
          "DS1 relates to discharge of an existing registered charge; not relevant here.",
          "TA6 is not sent to HMRC.",
        ],
      },
    },
    {
      topic: "Post-completion: notification to lender",
      q: "After completion and registration, what is a common requirement when acting for a lender as well?",
      choices: [
        "Return the original contract to the estate agent",
        "Confirm registration details to the lender (e.g., title information document showing the lender’s charge) in accordance with instructions",
        "Ask the seller to pay the lender directly",
        "Cancel the buyer’s buildings insurance",
        "Destroy the SDLT documents",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Lenders typically require confirmation that their charge has been registered and may require a copy of the updated title or registration details.",
        whyWrong: [
          "Agents are not the recipient of such legal confirmations.",
          "",
          "Payments flow through solicitors on completion; not direct seller-to-lender.",
          "Insurance should typically continue; cancelling would increase risk.",
          "SDLT documents should be retained per file retention and compliance.",
        ],
      },
    },
    {
      topic: "Completion: undertakings and professional risk",
      q: "Your firm gives an undertaking to send the lender’s charge certificate after registration. What is the key professional point?",
      choices: [
        "Undertakings are informal and can be ignored if busy.",
        "Undertakings are professionally binding promises; breach can have serious regulatory consequences, so only give them if you can comply.",
        "Undertakings are only used in criminal law.",
        "An undertaking is the same as a contract with the estate agent.",
        "Undertakings can be breached if the client agrees.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Solicitors’ undertakings are enforceable professional promises. They must be given carefully and complied with to avoid serious regulatory and liability consequences.",
        whyWrong: [
          "They are not informal; they are serious professional commitments.",
          "",
          "They are common in conveyancing and many practice areas.",
          "They are not contracts with agents; they are solicitor-to-solicitor or solicitor-to-party professional promises.",
          "Client agreement does not excuse breach of an undertaking.",
        ],
      },
    },
    {
      topic: "Completion: vacant possession breach",
      q: "Completion takes place and the buyer collects keys but finds a tenant still in occupation. The contract required vacant possession. What is the immediate legal characterisation?",
      choices: [
        "No issue; title has transferred so the buyer must deal with it.",
        "Potential breach of contract by the seller (failure to give vacant possession), giving the buyer potential remedies depending on facts and loss.",
        "A Land Registry mistake",
        "An automatic criminal offence by the tenant",
        "A matter only for the estate agent",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If vacant possession was contractually promised, failure to provide it is a contractual breach and can give rise to remedies (damages, potentially rescission in some cases, etc.).",
        whyWrong: [
          "Title transfer does not erase contractual breaches; remedies may still exist.",
          "",
          "This is not primarily a Land Registry error.",
          "Tenant occupation is not automatically a criminal offence; legal status depends on tenancy/rights.",
          "Agents may assist practically but legal responsibility is governed by the contract.",
        ],
      },
    },
    {
      topic: "Post-completion: keeping deeds",
      q: "After registration of a registered title, why might your firm still need to store or manage original documents (even though title is registered)?",
      choices: [
        "Because registration is meaningless without paper deeds",
        "Some original documents may still be relevant (e.g., guarantees, indemnity policies, signed deeds) and lender/client may require them, plus audit/compliance retention",
        "Because Land Registry will refuse any future application unless you send paper deeds each time",
        "Because official copies cannot be obtained again",
        "Because paper deeds determine boundaries precisely",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Even with registered land, firms may retain signed deeds, indemnity policies, warranties, and other important documents for client/lender needs and regulatory file retention.",
        whyWrong: [
          "Registered title is meaningful; paper deeds are not the primary evidence in registered system.",
          "",
          "Land Registry usually relies on applications and required documents, not all historic paper deeds.",
          "Official copies can be re-ordered from the Land Registry.",
          "Boundaries are generally shown as general boundaries on title plans; paper deeds don’t always fix precision.",
        ],
      },
    },
    {
      topic: "Seller-side completion: redemption statement",
      q: "You act for a seller with a mortgage. Prior to completion, what document do you typically obtain from the lender to calculate the redemption amount?",
      choices: [
        "A valuation report",
        "A redemption statement showing the amount required to repay the mortgage on the completion date",
        "An OS1 search result",
        "A TA6 form",
        "An AP1 form",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A redemption statement from the lender sets out the amount required to redeem the mortgage at completion, including any interest to the intended date.",
        whyWrong: [
          "Valuation is not the redemption calculation.",
          "",
          "OS1 is buyer-side priority search.",
          "TA6 is a seller property information form, not lender redemption.",
          "AP1 is buyer-side registration form.",
        ],
      },
    },
    {
      topic: "Seller-side completion: discharge evidence",
      q: "After redeeming the seller’s registered mortgage, what is the most typical evidence used to remove the charge from the register?",
      choices: [
        "A K16 search result",
        "An electronic discharge (e-DS1) or DS1 provided by the lender",
        "A new title plan",
        "A building regulations completion certificate",
        "A TA10 form",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Lenders typically discharge registered charges via electronic discharge (e-DS1) or a DS1, enabling the charge to be removed on registration.",
        whyWrong: [
          "K16 is a bankruptcy search, unrelated to discharge.",
          "",
          "Title plans do not remove charges.",
          "Building regs certificates are unrelated to mortgage discharge.",
          "TA10 is contents-related.",
        ],
      },
    },
    {
      topic: "Simultaneous exchange and completion",
      q: "A cash buyer proposes to exchange and complete on the same day. What is the key risk you should flag?",
      choices: [
        "There is no risk; it is always better.",
        "The buyer has little protection if issues emerge late; there is reduced time to investigate title/search results and coordinate completion mechanics, increasing the chance of incomplete due diligence.",
        "Land Registry will refuse registration automatically.",
        "SDLT is not payable if exchange and completion are same day.",
        "The seller can keep the deposit and the price.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Same-day exchange/completion can compress due diligence and logistics, increasing risk of proceeding without resolving title, search, or document issues.",
        whyWrong: [
          "It can work, but it increases risk and must be managed carefully.",
          "",
          "Registration is still possible if documents are correct.",
          "SDLT rules do not turn on whether exchange and completion are same day.",
          "Seller cannot simply keep both deposit and price; completion involves payment of the price.",
        ],
      },
    },
    {
      topic: "Post-completion: why registration matters",
      q: "Your buyer asks: 'We completed—why do we still need registration?' What is the best explanation for registered land?",
      choices: [
        "Registration is optional; completion is enough.",
        "Registration is necessary to perfect legal title and the lender’s charge on the register; until then, the buyer may not be shown as proprietor and the lender’s security is not fully protected.",
        "Registration is only needed for leasehold.",
        "Registration is done only to calculate council tax.",
        "Registration is done by the estate agent.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In registered land transactions, registration is the step that updates the register to show the buyer and any mortgage. It perfects legal title/charge and is crucial for protection and future dealings.",
        whyWrong: [
          "For registrable dispositions, registration is required to perfect title/charge.",
          "",
          "Freehold transactions also require registration.",
          "Council tax is separate from title registration.",
          "Registration is handled by solicitors/conveyancers, not agents.",
        ],
      },
    },
    {
      topic: "Post-completion: dealing with Land Registry delays",
      q: "Registration is taking months due to Land Registry backlog. The buyer wants to remortgage urgently. What is a practical step you might take?",
      choices: [
        "Tell them nothing can be done; remortgages are impossible until registration finishes.",
        "Consider requesting expedition where criteria are met (e.g., pending transaction), and provide evidence; also provide the lender with proof of application and priority where relevant.",
        "Cancel the AP1 application and reapply later.",
        "Ask the estate agent to phone the Land Registry to speed it up.",
        "Pay extra SDLT to speed up registration.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where there is an urgent related transaction, you can request expedition with evidence, and provide proof of pending registration to lenders as needed.",
        whyWrong: [
          "Expedition may be possible; you should explore options.",
          "",
          "Cancelling/reapplying usually worsens delay and risks priority.",
          "Agents are not appropriate channels for Land Registry expedition requests.",
          "SDLT does not speed up Land Registry processing.",
        ],
      },
    },
    {
      topic: "Completion: undertakings about documents",
      q: "Seller’s solicitor says they will send the original signed TR1 'next week' after completion. You are acting for the buyer and lender. What is the best response?",
      choices: [
        "Accept; you can register without the TR1.",
        "Insist on receiving the duly executed TR1 at completion (or a binding undertaking in acceptable form) because registration depends on it.",
        "Proceed but date the TR1 yourself without signature.",
        "Tell the buyer to collect it from the seller personally.",
        "Ignore; Land Registry will accept an emailed photo only.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registration requires the executed transfer. You must ensure you will have it immediately or have a reliable undertaking structure; otherwise registration priority and lender security are at risk.",
        whyWrong: [
          "You generally cannot register without the proper executed transfer document.",
          "",
          "You cannot create a valid deed by dating/signing on someone else’s behalf.",
          "Personal collection is unreliable and not an appropriate professional control.",
          "Land Registry requirements generally demand appropriate original/acceptable form documents; photos alone may not suffice.",
        ],
      },
    },
  ];

  window.quizData = {
    title:
      "Property Practice — Chapter 5: Pre-completion, completion, and post-completion matters",
    subtitle:
      "30 SQE-style scenario MCQs (pre-completion searches, requisitions, undertakings, completion mechanics, funds flow, SDLT, registration, priority periods, and post-completion risk).",
    questions: questions,
  };
})();
