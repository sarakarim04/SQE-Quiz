(() => {
  const questions = [
  {
    topic: "Business law ethics — identifying the client (company vs directors)",
    q: "You are retained to advise ABC Ltd on a share sale. The managing director asks you to also advise them personally on their tax position, without telling the other shareholders. What is the best ethical analysis?",
    choices: [
      "No issue: the director is automatically your client because they instruct you day-to-day",
      "No issue if the director pays your invoice personally",
      "High risk: the company is the client; advising the director personally may create conflicts and requires clear client identification and separate advice/retainer if appropriate",
      "Permitted if you keep the personal advice off the company file"
    ],
    correct: 2,
    explain: {
      whyRight:
        "In corporate matters the client is typically the company, not its directors personally. Advising a director personally can create conflicts (and confidentiality issues) and requires clear client identification and a fresh conflicts analysis, often with separate representation.",
      whyWrong: [
        "Day-to-day instruction does not make the director the client; the company is the client unless agreed otherwise.",
        "Payment does not determine who the client is or remove conflicts.",
        "—",
        "Separate files do not solve conflicts or authority issues."
      ]
    }
  },
  {
    topic: "Business law ethics — authority to instruct",
    q: "A finance manager instructs you to complete a large secured loan for the company, but you know the board has not approved it and the CFO objects. What should you do first?",
    choices: [
      "Proceed because the finance manager is an employee of the company",
      "Proceed but copy the CEO into emails to show transparency",
      "Pause and confirm proper authority to instruct (e.g., board resolution or delegated authority) before acting",
      "Proceed because the lender is pushing for speed"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A core risk in corporate work is ensuring the person instructing you has actual authority. You should confirm authority (and who the client is) before taking substantive steps.",
      whyWrong: [
        "Employment status alone does not prove authority.",
        "Copying people does not cure lack of authority (and can create confidentiality issues).",
        "—",
        "Commercial pressure does not justify acting without authority."
      ]
    }
  },
  {
    topic: "Business law ethics — own-interest conflict (absolute bar)",
    q: "You are asked to advise a client on acquiring a company in which you personally own shares. The client says they consent if you disclose it. Most accurate?",
    choices: [
      "You can act if the client gives informed consent in writing",
      "You can act if your shareholding is small",
      "You must not act if there is an own-interest conflict or a significant risk of one",
      "You can act if you charge a fixed fee instead of hourly billing"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Own-interest conflicts (or significant risk) are treated as non-consentable in the Codes—your personal financial interest threatens independent judgment.",
      whyWrong: [
        "Client consent does not automatically make an own-interest conflict permissible.",
        "Size does not remove the conflict risk.",
        "—",
        "Fee structure does not remove the own-interest conflict."
      ]
    }
  },
  {
    topic: "Business law ethics — client conflict (buyer and seller)",
    q: "You are asked to act for both buyer and seller in a share purchase because 'it’s amicable'. What is the best starting point?",
    choices: [
      "Proceed: amicable means no conflict",
      "Proceed if both sign one engagement letter",
      "Assume a conflict/significant risk and only proceed if a permitted exception applies and all conditions/safeguards are met",
      "Proceed if you charge separate fees to each party"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Even amicable deals often involve divergent interests. You must identify conflicts/significant risks and only act if a narrow permitted exception applies and conditions are satisfied.",
      whyWrong: [
        "Amicable relationships do not remove divergence of interests.",
        "Paperwork alone does not create permission to act despite conflicts.",
        "—",
        "Separate fees do not cure a conflict."
      ]
    }
  },
  {
    topic: "Business law ethics — client conflict (borrower and lender)",
    q: "You act for both lender and borrower in a corporate loan under a permitted exception. The borrower privately tells you about a covenant breach and says 'don’t tell the lender'. Best analysis?",
    choices: [
      "Keep it secret automatically because it’s confidential borrower information",
      "Disclose it to the lender immediately without informing the borrower",
      "This may create an unmanageable conflict between duties to each client; you may not be able to continue acting for both",
      "Ignore it because it might not be discovered"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Where acting for two clients, being asked to keep material information from the other client can create a conflict between confidentiality and disclosure duties that may make it unreasonable/impossible to continue for both.",
      whyWrong: [
        "Joint retainer contexts do not guarantee you can withhold material information from the other joint client.",
        "You cannot simply breach confidentiality to one client.",
        "—",
        "Discovery risk is irrelevant to professional duties."
      ]
    }
  },
  {
    topic: "Business law ethics — confidentiality baseline (deal rumours)",
    q: "A journalist asks you to confirm whether you act for a well-known startup in a funding round. The deal is widely rumored online. Most accurate?",
    choices: [
      "You may confirm you act but not provide details",
      "You may confirm because it’s already on social media",
      "You must keep client affairs confidential unless disclosure is required/permitted by law or the client consents",
      "You may confirm if it helps marketing"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Confidentiality covers client affairs (often including whether you act). Rumours do not create permission; you need lawful basis or client consent.",
      whyWrong: [
        "Even confirming you act can breach confidentiality.",
        "Rumour/online chatter is not consent or legal permission.",
        "—",
        "Marketing does not justify breach."
      ]
    }
  },
  {
    topic: "Business law ethics — confidentiality in a group structure",
    q: "You advise ParentCo. A director asks you to share your advice with SubsidiaryCo, saying 'we’re all one group'. Most accurate?",
    choices: [
      "Always share: group companies are automatically the same client",
      "Share if a director requests it",
      "Only share if SubsidiaryCo is also clearly your client in that matter or ParentCo consents / law permits disclosure",
      "Share if it saves time and cost"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Group companies are separate legal entities. You must be clear who the client is for the matter and only share confidential information with consent or legal permission.",
      whyWrong: [
        "Separate entities are not automatically one client.",
        "A director’s request does not override confidentiality.",
        "—",
        "Efficiency does not override confidentiality."
      ]
    }
  },
  {
    topic: "Business law ethics — referrals/introducers (financial interest)",
    q: "You refer corporate clients to an accountant in return for a referral fee, and you do not tell the client. Most accurate?",
    choices: [
      "Acceptable if the accountant is good",
      "Acceptable if the client benefits overall",
      "Not acceptable: you must disclose relevant financial interests/arrangements to the client",
      "Acceptable if the fee is small"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Referral/introducer arrangements involving financial interests require transparency to the client. Non-disclosure undermines trust and can breach the Code.",
      whyWrong: [
        "Quality does not remove disclosure obligations.",
        "Client benefit does not remove disclosure obligations.",
        "—",
        "Amount does not remove the obligation."
      ]
    }
  },
  {
    topic: "Business law ethics — fee sharing agreements (writing requirement)",
    q: "Your firm has a handshake agreement to share fees with an introducer. Nothing is in writing. Most accurate?",
    choices: [
      "Fine if both sides remember the terms",
      "Fine if the introducer is unregulated",
      "Not compliant: the fee-sharing agreement must be in writing",
      "Fine if the client is never told"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Fee-sharing arrangements must be properly documented; the rules require the agreement to be in writing (and clients must be informed where required).",
      whyWrong: [
        "Memory is not a substitute for compliance.",
        "Regulatory status of introducer does not remove the writing requirement.",
        "—",
        "Non-disclosure increases risk; it does not make it compliant."
      ]
    }
  },
  {
    topic: "Business law ethics — separate business (informed consent)",
    q: "You propose to 'divide a matter' so your SRA-regulated firm drafts contracts while your unregulated consultancy (that you own) provides 'strategy'. What must happen?",
    choices: [
      "Nothing; it’s efficient",
      "Client must give informed consent to the referral/division to the separate business",
      "Only notify the client after completion",
      "It is always prohibited in every circumstance"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where you refer/divide work to a separate business, you must ensure the client gives informed consent and understands the implications (including regulation/complaints protections).",
      whyWrong: [
        "Efficiency does not remove the consent requirement.",
        "—",
        "After-the-event notice is not informed consent.",
        "It may be permitted if conditions are met; not an absolute ban."
      ]
    }
  },
  {
    topic: "Business law ethics — third-party payer influence",
    q: "A parent company pays the fees for its subsidiary and demands that you send all advice to the parent first. Most accurate?",
    choices: [
      "Acceptable because the payer controls the budget",
      "Acceptable if the parent signs the engagement letter",
      "Risk: third-party payer influence threatens independence/confidentiality; duties remain to the actual client (subsidiary)",
      "Acceptable if you copy the parent on every email"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Third-party payment does not change who the client is. You must protect client confidentiality and independence and manage any conflicts arising from payer influence.",
      whyWrong: [
        "Budget control does not override professional duties.",
        "Engagement mechanics do not justify breaching confidentiality to the client.",
        "—",
        "Copying widely increases confidentiality risk and does not address independence."
      ]
    }
  },
  {
    topic: "Business law ethics — conflict: company vs director personally",
    q: "You advise a company. Serious allegations arise that a director defrauded the company. The director asks you to represent them personally too. Best analysis?",
    choices: [
      "Act for both: you already know the facts",
      "High likelihood of conflict: the company’s interests may be adverse to the director; you likely cannot act for both",
      "Act for the director only because they asked you directly",
      "Act for both if the director signs a waiver"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where a director’s interests may be adverse to the company (your client), acting for both is typically conflicted and may be prohibited/unreasonable.",
      whyWrong: [
        "Familiarity does not remove conflicts.",
        "—",
        "You owe duties to the company client; you cannot switch sides casually.",
        "A waiver does not necessarily make a prohibited conflict permissible."
      ]
    }
  },
  {
    topic: "Business law ethics — misrepresentation in negotiations",
    q: "To force a price reduction, you allege fraud by the seller with no evidence, hoping due diligence will 'turn something up'. Most accurate?",
    choices: [
      "Acceptable: it’s hard bargaining",
      "Acceptable if you phrase it as 'we suspect fraud'",
      "Risky/improper: serious allegations should have a proper basis; baseless claims can breach integrity/fairness expectations",
      "Acceptable if the other side has lawyers"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Even outside court, integrity/fair dealing matters. Making serious allegations without a proper basis is sharp practice and can breach professional standards.",
      whyWrong: [
        "Hard bargaining has ethical limits.",
        "Re-labelling does not create a proper basis.",
        "—",
        "Opponent representation does not excuse misconduct."
      ]
    }
  },
  {
    topic: "Business law ethics — misleading by omission",
    q: "You tell an investor 'all consents are in place' while knowing a key third-party consent has not been obtained. Most accurate?",
    choices: [
      "Acceptable if you plan to obtain it later",
      "Acceptable if it is 'routine'",
      "Potential breach: misleading others engages honesty/integrity and undermines trust",
      "Acceptable if the client insisted you say it"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Misleading statements (including half-truths) to counterparties/investors are unethical and can breach honesty/integrity expectations.",
      whyWrong: [
        "Future intention does not justify misleading now.",
        "Routine does not mean obtained.",
        "—",
        "Client pressure does not justify misleading conduct."
      ]
    }
  },
  {
    topic: "Business law ethics — undertakings on completion",
    q: "You give an undertaking to release documents/funds on completion once conditions are met. Your client later asks you to hold them back to pressure renegotiation. Best analysis?",
    choices: [
      "Follow client instruction because they control the deal",
      "You must comply with undertakings; client instructions do not justify breach",
      "Undertakings are only relevant in litigation, not business transactions",
      "You can breach it if you refund your fees"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Undertakings are binding professional commitments. You must perform them within the agreed terms/timescale and cannot breach because a client changes strategy.",
      whyWrong: [
        "Client instructions do not override undertakings.",
        "—",
        "Undertakings apply across practice areas.",
        "Fee refund does not cure a breach."
      ]
    }
  },
  {
    topic: "Business law ethics — confidentiality: former client information",
    q: "A former client’s confidential pricing strategy would help your current client negotiate a better deal. Most accurate?",
    choices: [
      "Use it because the retainer ended",
      "Use it if it will not be discovered",
      "Do not use/disclose: confidentiality applies to former clients unless law permits/requires or consent is obtained",
      "Use it if it benefits competition"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Confidentiality continues after the retainer ends. You must not use or disclose former client confidential information without lawful basis or consent.",
      whyWrong: [
        "Confidentiality does not end with the retainer.",
        "Discovery risk is irrelevant to compliance.",
        "—",
        "Competition arguments do not override confidentiality."
      ]
    }
  },
  {
    topic: "Business law ethics — multiple bidders (competing for same objective)",
    q: "You want to act for two bidders competing to buy the same target. When can you act under conflicts exceptions?",
    choices: [
      "Never: acting for competing bidders is always prohibited",
      "Only if both are sophisticated investors",
      "Only if they are competing for the same objective AND all give informed consent in writing AND safeguards are used where appropriate AND it is reasonable to act",
      "Only if you disclose the conflict to the target company"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Acting for competing clients is only permitted in narrow circumstances with informed written consent, safeguards, and reasonableness.",
      whyWrong: [
        "Not always prohibited, but often impractical; permission is narrow and condition-heavy.",
        "Sophistication does not replace the conditions.",
        "—",
        "Disclosure to a third party does not satisfy the exception."
      ]
    }
  },
  {
    topic: "Business law ethics — 'substantially common interest' scenario",
    q: "Two founders jointly instruct you to incorporate a company and issue shares equally on standard terms, with aligned objectives. Which conflicts exception is most relevant if you act for both?",
    choices: [
      "Own-interest conflict exception",
      "Substantially common interest exception",
      "Competing for the same objective exception",
      "No exception needed because they are friends"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where clients’ interests are substantially aligned in the matter, the 'substantially common interest' exception is the relevant route (if otherwise appropriate).",
      whyWrong: [
        "Own-interest conflicts are not handled by an exception.",
        "—",
        "Competing for the same objective is different (clients are rivals).",
        "Friendship is irrelevant."
      ]
    }
  },
  {
    topic: "Business law ethics — own-interest risk (completion bonus)",
    q: "Your engagement includes a 'completion bonus' only payable if the transaction completes. You advise the client not to disclose a deal risk that might delay completion. Best analysis?",
    choices: [
      "Fine: incentives are normal in deals",
      "Risk: the bonus creates an own-interest conflict/significant risk affecting advice; you must not let your interest distort advice",
      "Fine if disclosed to the other side",
      "Fine if the risk is small"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Outcome-linked incentives can create own-interest conflict risk by encouraging advice that prioritises your bonus over the client’s proper decision-making.",
      whyWrong: [
        "Incentives can create prohibited conflicts.",
        "—",
        "Disclosure to third parties does not cure your conflict with the client.",
        "Materiality does not remove conflict risk."
      ]
    }
  },
  {
    topic: "Business law ethics — document execution integrity",
    q: "A client asks you to 'just sign for them' on a board resolution to save time, saying they approve it. Most accurate?",
    choices: [
      "Acceptable if you believe the client would have signed anyway",
      "Acceptable if the resolution is accurate",
      "High risk/improper: you must not facilitate false execution or mislead others; authority and integrity concerns are engaged",
      "Acceptable if you keep a file note"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Signing on someone else’s behalf without proper authority risks dishonest/misleading conduct and invalid execution. Integrity and proper process are critical in business work.",
      whyWrong: [
        "Belief is not authority.",
        "Accuracy does not authorise improper execution.",
        "—",
        "A file note does not legalise/justify improper signing."
      ]
    }
  },
  {
    topic: "Business law ethics — signature pages and completion mechanics",
    q: "At completion, you are asked to release signature pages before all conditions are satisfied, with a plan to 'fix it later'. Best analysis?",
    choices: [
      "Acceptable if it helps meet the deadline",
      "Acceptable if everyone is doing it",
      "Risk: you must not mislead and must follow agreed completion mechanics/undertakings; releasing early can be improper",
      "Acceptable if the client promises to satisfy conditions tomorrow"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Completion mechanics often rely on undertakings and trust. Releasing signature pages early can mislead counterparties and breach agreed commitments.",
      whyWrong: [
        "Deadlines do not justify misleading conduct.",
        "Common practice is not a defence.",
        "—",
        "Promises do not change the present position or eliminate risk."
      ]
    }
  },
  {
    topic: "Business law ethics — information barriers vs conflicts",
    q: "Your firm proposes to act for Buyer and Seller but says it can 'wall off' teams with an information barrier. Most accurate?",
    choices: [
      "Information barriers automatically make any conflict permissible",
      "Information barriers can never be used in business transactions",
      "Information barriers may be relevant safeguards, but you still need a permitted exception and informed consent in writing where required",
      "Information barriers remove the need to tell clients about the conflict"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Safeguards like information barriers do not create permission by themselves. You still need the Code’s permission (exception), informed consent, and reasonableness.",
      whyWrong: [
        "Barriers do not automatically legalise a conflict.",
        "They can be used as safeguards in appropriate contexts, but not as a shortcut.",
        "—",
        "Disclosure/consent requirements still apply."
      ]
    }
  },
  {
    topic: "Business law ethics — client care: costs updates",
    q: "A deal becomes far more complex and your initial estimate is no longer realistic. What is most accurate?",
    choices: [
      "Say nothing until you send the final bill",
      "You should provide the best possible information about likely overall cost and update it as the matter progresses",
      "You can refuse to discuss costs once the client has engaged you",
      "Keep the estimate the same to avoid upsetting the client"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Client care obligations include giving and updating costs/pricing information so clients can make informed decisions.",
      whyWrong: [
        "Waiting risks misleading the client.",
        "—",
        "Clients are entitled to costs information; refusal undermines informed instructions.",
        "Maintaining an unrealistic estimate is misleading."
      ]
    }
  },
  {
    topic: "Business law ethics — misleading the board",
    q: "A director asks you to present advice to the board in a way that downplays legal risk because 'we need approval'. Best analysis?",
    choices: [
      "Do it: the director is your client",
      "Do it if the director says it’s commercially necessary",
      "Risky/improper: you must act with integrity and provide accurate advice; misleading the board undermines trust and governance",
      "Do it as long as you add 'commercial judgment required'"
    ],
    correct: 2,
    explain: {
      whyRight:
        "In business law, accurate legal advice is essential for governance. Intentionally downplaying risk to secure approval can be misleading and unethical.",
      whyWrong: [
        "The company is typically the client, not the director personally.",
        "Commercial necessity does not justify misleading advice.",
        "—",
        "A label does not cure a misleading presentation."
      ]
    }
  },
  {
    topic: "Business law ethics — in-house: identifying client entity",
    q: "You are in-house at GroupCo. A sister company asks you for advice on a major dispute. What is the key first step?",
    choices: [
      "Assume your client is always the entire group",
      "Identify who the client is for that matter (employer entity vs other entity) and manage confidentiality/conflicts accordingly",
      "Refuse because in-house lawyers cannot advise group companies",
      "Only give verbal advice so it isn’t on record"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In-house lawyers must still identify who the client is in each matter (often a specific legal entity) and then manage confidentiality/conflicts accordingly.",
      whyWrong: [
        "A group is not automatically one client.",
        "—",
        "In-house lawyers can advise, but must manage regulatory issues properly.",
        "Avoiding records is not an ethical solution."
      ]
    }
  },
  {
    topic: "Business law ethics — conflicts: acting against a current client",
    q: "Your firm acts for SupplierCo generally. A new client asks you to sue SupplierCo for breach of contract. You have confidential knowledge about SupplierCo’s negotiating strategy from other work. Best analysis?",
    choices: [
      "Act: the new case is unrelated",
      "Act if SupplierCo is not a 'key client'",
      "High risk: conflict/significant risk and confidentiality issues; you may be unable to act against a current client",
      "Act if you put a junior on it"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Acting against a current client commonly creates a conflict (or significant risk) and confidentiality difficulties. You must assess whether you can act at all under the conflicts rules.",
      whyWrong: [
        "Unrelatedness does not eliminate conflict/confidentiality risks.",
        "Commercial importance does not determine conflicts compliance.",
        "—",
        "Assigning a junior does not cure conflicts."
      ]
    }
  },
  {
    topic: "Business law ethics — conflicts: acting against a former client",
    q: "A former client is now the counterparty in a transaction. You hold confidential information from the earlier retainer that could be relevant. Best analysis?",
    choices: [
      "Act: former clients have no confidentiality protection",
      "Act: you can use old info because it’s in your memory",
      "You must protect former client confidentiality and assess whether a conflict/significant risk prevents acting",
      "Act if the former client cannot prove you used anything"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Confidentiality continues for former clients. You must assess whether you can act without misusing confidential info and whether conflicts rules permit it.",
      whyWrong: [
        "Former clients remain protected by confidentiality duties.",
        "Memory is not a licence to use confidential information.",
        "—",
        "Proof risk is irrelevant to the duty."
      ]
    }
  },
  {
    topic: "Business law ethics — AML: source of funds red flags",
    q: "During a share purchase, the source of funds is unclear and the client’s explanation is inconsistent. You suspect the money may be criminal property. Most accurate?",
    choices: [
      "Ignore it if the client is well known",
      "Proceed to avoid negligence claims",
      "If you know/suspect (or have reason to suspect) money laundering, you may need to submit a SAR and manage 'continue/stop' decisions carefully",
      "Tell the client you will file a SAR to be transparent"
    ],
    correct: 2,
    explain: {
      whyRight:
        "If suspicion is triggered, AML duties may require reporting (SAR) and careful management of the transaction to avoid offences; client best interests does not override AML compliance.",
      whyWrong: [
        "Reputation does not remove AML duties.",
        "Civil risk does not override AML/criminal law obligations.",
        "—",
        "Telling the client risks tipping off/prejudicing an investigation."
      ]
    }
  },
  {
    topic: "Business law ethics — AML: tipping off",
    q: "After making a SAR, the client asks why completion is delayed and presses for an explanation. Which response is safest?",
    choices: [
      "Tell them you filed a SAR and are waiting for NCA consent",
      "Tell them the authorities suspect money laundering",
      "Give a neutral explanation consistent with process, avoiding disclosure that a SAR was made or an investigation is contemplated",
      "Send them a copy of your SAR so they understand"
    ],
    correct: 2,
    explain: {
      whyRight:
        "After a SAR, you must avoid tipping off or prejudicing an investigation. Communications should be neutral and carefully managed.",
      whyWrong: [
        "That risks tipping off.",
        "That is clearly tipping off.",
        "—",
        "Sharing the SAR risks tipping off and other breaches."
      ]
    }
  },
  {
    topic: "Business law ethics — AML: CDD not completed",
    q: "The client refuses to provide identification documents and source-of-funds evidence. Completion is tomorrow. Best analysis?",
    choices: [
      "Proceed: deadlines are critical in deals",
      "Proceed if the client is wealthy",
      "Do not proceed until AML/CDD requirements are satisfied; if suspicion arises consider SAR/DAML route",
      "Proceed but keep a strong file note"
    ],
    correct: 2,
    explain: {
      whyRight:
        "CDD/AML requirements are mandatory. You cannot proceed purely to meet a deadline where compliance requirements are unmet or suspicion exists.",
      whyWrong: [
        "Deadlines do not override AML duties.",
        "Wealth is irrelevant to AML compliance.",
        "—",
        "File notes do not replace compliance."
      ]
    }
  },
  {
    topic: "Business law ethics — reporting serious AML failures",
    q: "You discover your firm has repeatedly failed to do required client risk assessments on in-scope transactions. Most accurate?",
    choices: [
      "Ignore it: AML is for banks",
      "Only report if the police contact you",
      "It may trigger obligations to escalate internally and potentially report serious AML regulatory breaches to the SRA",
      "Only report if a client complains"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Systemic AML failings can be serious. You should escalate appropriately and may need to report serious regulatory breaches to the SRA.",
      whyWrong: [
        "AML obligations apply to law firms conducting in-scope work.",
        "Police contact is not the trigger for internal escalation/reporting duties.",
        "—",
        "Client complaints are not the trigger."
      ]
    }
  },
  {
    topic: "Business law ethics — using client money as leverage",
    q: "A client asks you to retain stakeholder funds in your client account after completion to pressure a renegotiation. Best analysis?",
    choices: [
      "Acceptable: you are acting in best interests",
      "Acceptable if the other side is difficult",
      "Risky/improper: handling client money is tightly controlled; you must follow the agreed purpose and any undertakings and not misuse funds as leverage",
      "Acceptable if you get written instructions"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client money/assets must be safeguarded and used only as permitted by rules/undertakings and agreed purposes. Using funds as leverage can be misuse and a serious breach.",
      whyWrong: [
        "Best interests does not justify misuse of client money or breach of undertakings.",
        "Opponent behaviour does not justify misuse of funds.",
        "—",
        "Written instructions do not authorise regulatory breaches."
      ]
    }
  },
  {
    topic: "Business law ethics — bribery / improper payments",
    q: "A client asks you to include a 'consultancy fee' in documents to conceal a bribe to secure a contract. Best analysis?",
    choices: [
      "Do it if it is common in that market",
      "Do it if the client insists in writing",
      "Refuse: you must not assist illegality; AML/crime and integrity concerns are engaged and you may need to consider reporting obligations",
      "Do it as long as you are not the payer"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Assisting concealment of illegality is prohibited. Integrity, rule of law, and AML/crime reporting risks are engaged.",
      whyWrong: [
        "Custom does not legalise bribery or ethical breaches.",
        "Client instructions do not justify illegality.",
        "—",
        "Your role in drafting/facilitating is still assistance."
      ]
    }
  },
  {
    topic: "Business law ethics — client confidentiality vs third-party requests",
    q: "A bank asks you to confirm confidential details about a client’s transaction 'for onboarding'. The client has not consented. Best analysis?",
    choices: [
      "Provide the details because banks need it",
      "Provide the details if the bank is regulated",
      "Do not disclose unless the client consents or disclosure is required/permitted by law",
      "Provide only partial details so it’s fine"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Confidentiality applies to client affairs; you need consent or a legal basis to disclose, even to regulated banks.",
      whyWrong: [
        "Business need does not override confidentiality.",
        "Regulated status does not itself create permission.",
        "—",
        "Partial disclosure can still be a breach."
      ]
    }
  },
  {
    topic: "Business law ethics — acting for joint clients: 'keep it secret'",
    q: "You act for two JV partners as joint clients. One tells you something material and instructs you not to share it with the other. Best analysis?",
    choices: [
      "You must keep it secret automatically",
      "You should disclose it to the other client without telling the first",
      "This may create an unmanageable conflict; you may need to stop acting for one or both if it cannot be resolved",
      "Ignore it and continue"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Joint retainers can become untenable if material information must be kept from one joint client. That can create conflicts between confidentiality and duty to keep both properly informed.",
      whyWrong: [
        "Joint client arrangements do not guarantee you can keep material information from the other joint client.",
        "You cannot simply breach confidentiality.",
        "—",
        "Ignoring it risks compounding the breach."
      ]
    }
  },
  {
    topic: "Business law ethics — 'who is the client' in shareholder disputes",
    q: "You previously advised the company. A majority shareholder now asks you to advise them on removing a director. They say: 'I control the company.' Best analysis?",
    choices: [
      "Accept: controlling shareholder equals the company",
      "Accept if they pay",
      "High risk: shareholder is not automatically the company; assess client identity, authority, and conflicts/confidentiality from prior company work",
      "Accept if you use a different team"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A shareholder is not automatically the company. Prior company retainer raises confidentiality and conflict risks; you must clearly identify the client and whether you can act.",
      whyWrong: [
        "Control does not equal client identity.",
        "Payment does not resolve conflicts.",
        "—",
        "A different team does not automatically fix conflicts/confidentiality."
      ]
    }
  },
  {
    topic: "Business law ethics — corporate opportunity / inside information",
    q: "While advising ClientCo, you learn confidentially that it plans to acquire a competitor. You buy shares in the competitor before announcement. Best analysis?",
    choices: [
      "Acceptable if you do it outside work hours",
      "Acceptable if you don’t tell anyone you learned it from the client",
      "Highly improper: misuse of confidential information and own-interest conflict; serious integrity/public trust issues",
      "Acceptable if the shares are bought through a family member"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Using client confidential information for personal gain is a serious breach (confidentiality, integrity, conflicts, and public trust), and may also engage market abuse/criminal issues.",
      whyWrong: [
        "Timing does not change the impropriety.",
        "Source concealment does not cure misuse.",
        "—",
        "Using a proxy does not cure impropriety; it worsens it."
      ]
    }
  },
  {
    topic: "Business law ethics — quick spot: which risk is most central in corporate instructions?",
    q: "In business transactions, which issue most often comes first before you act on instructions?",
    choices: [
      "Whether the client’s preferred font is used in the documents",
      "Whether the instructing individual has authority and who the client is",
      "Whether the transaction is publicly announced",
      "Whether the counterparty is represented"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Corporate work frequently turns on client identity (company vs individuals/entities) and authority to instruct; getting this wrong creates conflicts and invalid instructions.",
      whyWrong: [
        "Formatting is not the primary ethics issue.",
        "—",
        "Publicity is secondary to authority and client identification.",
        "Opponent representation is not the first-order issue."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Ethics | Chapter 4 | Conflicts and Authority",
    subtitle: "Client identification, authority to instruct, and conflicts.",
    questions: questions
  };
})();
  
