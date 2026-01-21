(() => {
  const questions = [
  {
    topic: "Property ethics — conflict: acting for buyer and seller",
    q: "A couple are buying a house from the wife’s brother. Both sides ask you to 'just do the conveyancing' to save costs. What is the best analysis?",
    choices: [
      "Act for both because it’s a family transaction",
      "Act for both if they sign a waiver",
      "High risk conflict/significant risk; you should only act if a permitted exception applies and it is reasonable with informed consent and safeguards",
      "Act for both if the property is mortgage-free"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Buyer and seller interests are usually opposed. You must treat this as a conflict/significant risk and only act if a narrow exception applies with informed written consent, safeguards, and reasonableness.",
      whyWrong: [
        "Family relationship does not remove divergence of interests.",
        "A waiver does not automatically make acting permissible.",
        "—",
        "Mortgage-free does not remove conflict between buyer and seller."
      ]
    }
  },
  {
    topic: "Property ethics — acting for borrower and lender",
    q: "You act for a buyer and their mortgage lender. You learn the buyer will receive a £10,000 'cashback' from the seller off-contract. What is most accurate?",
    choices: [
      "Keep it confidential because the buyer is your main client",
      "Ignore it as it’s not in the contract",
      "You must consider reporting to the lender because it affects the lender’s position; you cannot mislead the lender",
      "Tell the seller to call it a 'gift' so it’s fine"
    ],
    correct: 2,
    explain: {
      whyRight:
        "In a dual-representation mortgage scenario, undisclosed incentives/cashbacks can be material to the lender. You must not mislead the lender and must report relevant matters as required.",
      whyWrong: [
        "You cannot prefer the borrower’s confidentiality to the point of misleading the lender.",
        "Off-contract incentives can still be material.",
        "—",
        "Re-labelling does not remove the ethical issue."
      ]
    }
  },
  {
    topic: "Property ethics — gifted deposit disclosure",
    q: "A buyer says their deposit is a 'gift' from a friend, but asks you not to tell the lender. Best analysis?",
    choices: [
      "Do not tell the lender; it’s private",
      "Tell the lender only if asked",
      "Likely must be reported to the lender; you cannot be complicit in misleading the lender about source/terms of deposit",
      "Proceed if the gift letter is signed"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Gifted deposits can be material to lenders (risk/occupier/repayment). You must not mislead and should follow lender reporting requirements.",
      whyWrong: [
        "Secrecy may amount to misleading the lender.",
        "Waiting to be asked can still leave the lender misled.",
        "—",
        "A gift letter does not justify non-disclosure to the lender."
      ]
    }
  },
  {
    topic: "Property ethics — mortgage fraud: inflated price",
    q: "Your client says: 'The true price is £450k, but we want the contract to say £500k so the bank lends more.' What is the best response?",
    choices: [
      "Proceed if both parties agree",
      "Proceed but keep a file note",
      "Refuse: this is dishonest and risks mortgage fraud; you must not assist",
      "Proceed if the lender valuation supports £500k"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Inflating price to obtain a larger mortgage is dishonest and may be mortgage fraud. You must not assist or be complicit.",
      whyWrong: [
        "Agreement between parties does not legalise dishonesty.",
        "A file note does not cure wrongdoing.",
        "—",
        "Valuation does not justify dishonesty about the actual price/arrangements."
      ]
    }
  },
  {
    topic: "Property ethics — replies to enquiries (misleading)",
    q: "Seller client tells you the neighbour dispute 'is over' and asks you to say 'no disputes' on the TA6, though there were recent hostile emails. Best analysis?",
    choices: [
      "Say 'no disputes' because it helps completion",
      "Answer 'no' unless the buyer proves it",
      "You must not mislead; ensure replies are accurate and advise the client on proper disclosure",
      "Leave the question blank to avoid issues"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not mislead and should not facilitate false replies. You must advise the seller client to provide accurate information.",
      whyWrong: [
        "Client objectives do not justify misleading the other side.",
        "You cannot knowingly give an inaccurate response.",
        "—",
        "Omission can still mislead and create risk."
      ]
    }
  },
  {
    topic: "Property ethics — undertakings: redeeming mortgage",
    q: "On completion you give an undertaking to redeem the seller’s mortgage and discharge the charge. Later the seller asks you to delay redemption to use funds elsewhere. Best analysis?",
    choices: [
      "Follow seller instructions",
      "Delay if the lender is unlikely to notice",
      "You must comply with the undertaking; client instructions do not justify breach",
      "You can breach it if you refund your fees"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Undertakings are binding professional commitments; you must comply within the agreed terms/timescales.",
      whyWrong: [
        "Client instructions do not override undertakings.",
        "Likelihood of detection is irrelevant.",
        "—",
        "Refunding fees does not cure breach."
      ]
    }
  },
  {
    topic: "Property ethics — completion without cleared funds",
    q: "A client pressures you to complete before mortgage funds have arrived, saying 'just use your firm’s money temporarily.' Best analysis?",
    choices: [
      "Proceed; it’s a normal convenience",
      "Proceed if the partner approves",
      "High risk: misuse of client account/firm funds and breach of accounts rules; do not complete without proper funds and authority",
      "Proceed if the seller agrees"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Completing without proper funds can breach accounts rules and create serious client money risk. You must follow proper completion mechanics.",
      whyWrong: [
        "Convenience is not a justification for regulatory breach.",
        "Partner approval does not legalise improper handling.",
        "—",
        "Seller agreement doesn’t fix regulatory/accounting issues."
      ]
    }
  },
  {
    topic: "Property ethics — AML: unexplained cash deposit",
    q: "A buyer offers a large cash deposit and refuses to explain the source. Completion is in 48 hours. Best analysis?",
    choices: [
      "Proceed; property deals are time-sensitive",
      "Proceed if you issue receipts",
      "Do not proceed until AML/CDD requirements are satisfied; if suspicion arises, follow SAR/internal reporting and avoid tipping off",
      "Proceed and ask later after completion"
    ],
    correct: 2,
    explain: {
      whyRight:
        "AML compliance is mandatory. If CDD/source of funds is unclear and suspicion is triggered, you must follow procedures and not proceed improperly.",
      whyWrong: [
        "Deadlines do not override AML duties.",
        "Receipts do not remove suspicion.",
        "—",
        "Post-completion checks are too late."
      ]
    }
  },
  {
    topic: "Property ethics — tipping off (conveyancing)",
    q: "After you file an internal/external report about suspicious property funds, the client asks why the matter is delayed. Safest approach?",
    choices: [
      "Tell them you filed a report",
      "Tell them the authorities are investigating",
      "Give a neutral, process-based explanation without confirming/denying reports or investigations",
      "Send them a copy of the report"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must avoid tipping off/prejudicing investigations. Keep communications neutral and compliant.",
      whyWrong: [
        "Confirming may tip off.",
        "That is tipping off.",
        "—",
        "Sharing reports risks tipping off and breaches."
      ]
    }
  },
  {
    topic: "Property ethics — identity fraud",
    q: "Your seller client refuses to provide ID and wants to complete urgently. Their bank account is overseas and details keep changing. Best analysis?",
    choices: [
      "Proceed; seller urgency is normal",
      "Proceed if the estate agent confirms identity",
      "High fraud/AML risk: do not proceed without proper verification; escalate and follow firm procedures",
      "Proceed but ask for ID after completion"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Property is high-risk for ID fraud. You must verify identity and comply with AML/firm procedures before acting.",
      whyWrong: [
        "Urgency can be a red flag, not a justification.",
        "Estate agent confirmation is not a substitute for your checks.",
        "—",
        "Post-completion ID checks are not acceptable."
      ]
    }
  },
  {
    topic: "Property ethics — referral fees: estate agents",
    q: "An estate agent refers you conveyancing work if you pay them £300 per completion. What is most accurate?",
    choices: [
      "Fine if the agent is reputable",
      "Fine if you keep it secret from clients",
      "You must comply with rules on referral arrangements, transparency, and any writing/consent requirements",
      "Fine if you reduce your legal fee by £300"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Referral arrangements can be permitted but must comply with transparency and regulatory requirements; secrecy is a major risk.",
      whyWrong: [
        "Reputation doesn’t remove disclosure duties.",
        "Non-disclosure is improper.",
        "—",
        "Discounting doesn’t remove referral compliance duties."
      ]
    }
  },
  {
    topic: "Property ethics — acting for developer and buyer",
    q: "Your firm acts for a developer on multiple plots. A buyer of one plot asks you to act for them too because it’s 'efficient'. Best analysis?",
    choices: [
      "Always permissible because it reduces duplication",
      "Permissible if you keep files separate",
      "Conflict/significant risk is likely; only act if a permitted exception applies and it is reasonable with informed consent and safeguards",
      "Automatically prohibited in all cases"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Developer and buyer interests often diverge (price, defects, incentives). You must apply conflicts rules; it’s often not reasonable to act for both.",
      whyWrong: [
        "Efficiency does not remove conflict risk.",
        "Separate files aren’t enough if interests conflict.",
        "—",
        "Not always prohibited, but commonly inappropriate."
      ]
    }
  },
  {
    topic: "Property ethics — lease incentives and lender reporting",
    q: "In a new-build lease, the developer offers to pay the buyer’s service charge for 2 years. The buyer asks you not to tell the lender. Best analysis?",
    choices: [
      "Do not tell the lender; it’s a private arrangement",
      "Tell the lender only if asked",
      "Likely must report: incentives can affect value/risk; you must not mislead the lender",
      "Convert it into a 'moving allowance' so it’s fine"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Incentives can be material to lenders and must be reported where required. You cannot be complicit in misleading.",
      whyWrong: [
        "Private label does not remove materiality.",
        "Waiting can still mislead.",
        "—",
        "Re-labelling does not cure the issue."
      ]
    }
  },
  {
    topic: "Property ethics — occupiers and lender requirements",
    q: "You learn an adult child will live at the property but the buyer says 'don’t mention them to the lender'. Best analysis?",
    choices: [
      "Keep it confidential; it’s personal",
      "Ignore it unless the lender asks",
      "Often material: occupiers can affect lender security; you may need to report and ensure appropriate documentation",
      "Tell the occupier to move out temporarily"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Undisclosed occupiers can affect lender security (rights/overriding interests). You must comply with lender reporting and not mislead.",
      whyWrong: [
        "Secrecy can mislead the lender.",
        "Silence may be misleading if you know it is material.",
        "—",
        "Temporary workaround can still be misleading."
      ]
    }
  },
  {
    topic: "Property ethics — SDLT evasion request",
    q: "A buyer asks you to understate the purchase price in the transfer to reduce SDLT. Best analysis?",
    choices: [
      "Do it if both sides agree",
      "Do it if the difference is small",
      "Refuse: it is dishonest/illegal; you must not assist and should advise properly",
      "Do it but keep the real figure in your attendance note"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Understating price to reduce tax is dishonest and may be a criminal offence. You must not assist.",
      whyWrong: [
        "Agreement doesn’t legalise fraud.",
        "Amount doesn’t change the principle.",
        "—",
        "File notes don’t cure participation."
      ]
    }
  },
  {
    topic: "Property ethics — misleading the other side",
    q: "Your buyer client asks you to say they have a mortgage offer when they don’t, to stop the seller pulling out. Best analysis?",
    choices: [
      "Say it; it helps the deal",
      "Say it as 'we expect funding' even if false",
      "Do not mislead; you must be honest in communications",
      "Say it if the estate agent pressures you"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not mislead others. Dishonesty to secure a deal breaches integrity and trust.",
      whyWrong: [
        "Client benefit does not justify dishonesty.",
        "Half-truths can still mislead.",
        "—",
        "Third-party pressure is not a defence."
      ]
    }
  },
  {
    topic: "Property ethics — completion statement accuracy",
    q: "A client asks you to remove a legitimate disbursement from the completion statement so their lender 'doesn’t see it'. Best analysis?",
    choices: [
      "Do it to keep the client happy",
      "Do it if it is small",
      "Refuse: completion statements must be accurate; you must not mislead the lender or anyone else",
      "Do it but keep a separate internal statement"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Completion statements are financial records. Falsifying them is misleading and risks serious regulatory breach.",
      whyWrong: [
        "Client happiness isn’t a lawful basis.",
        "Amount doesn’t make falsification acceptable.",
        "—",
        "Parallel statements don’t cure falsification."
      ]
    }
  },
  {
    topic: "Property ethics — conflict: landlord and tenant",
    q: "You are asked to act for both landlord and tenant on a commercial lease because 'it’s standard form'. Best analysis?",
    choices: [
      "Always fine on standard leases",
      "Fine if they both consent orally",
      "Likely conflict/significant risk; act for both only if a permitted exception applies and it is reasonable with informed consent and safeguards",
      "Fine if you charge a fixed fee"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Even 'standard' leases involve negotiated risk allocation. Treat as conflict risk and only act if the rules permit and it is reasonable.",
      whyWrong: [
        "Standard forms still involve adverse interests.",
        "Oral consent is not enough where written informed consent is required.",
        "—",
        "Fee model doesn’t remove conflict."
      ]
    }
  },
  {
    topic: "Property ethics — acting for joint buyers who disagree",
    q: "You act for two joint buyers. One privately tells you they are using undisclosed borrowed money for their deposit and says 'don’t tell the other'. Best analysis?",
    choices: [
      "Keep it secret; it’s confidential",
      "Tell the other buyer immediately",
      "This may create an unmanageable conflict in a joint retainer; you may have to stop acting if it cannot be resolved",
      "Ignore it because it’s their private finances"
    ],
    correct: 2,
    explain: {
      whyRight:
        "In a joint retainer, material information kept from a joint client can create conflict between confidentiality and duty to keep both properly informed.",
      whyWrong: [
        "Joint retainers often require openness between joint clients.",
        "You can’t just breach confidentiality; you must manage properly.",
        "—",
        "It can be material to the transaction and lender reporting."
      ]
    }
  },
  {
    topic: "Property ethics — undertakings: sending documents",
    q: "You undertake to send the signed transfer and title deeds to the buyer’s solicitor immediately after completion. You delay to pressure settlement of a fee dispute. Best analysis?",
    choices: [
      "Acceptable leverage tactic",
      "Acceptable if you warn them",
      "Breach risk: you must comply with undertakings; fee disputes do not justify non-performance",
      "Acceptable if the client approves"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Undertakings are binding. Using documents as leverage is improper and can be serious misconduct.",
      whyWrong: [
        "Leverage is not a proper basis to breach an undertaking.",
        "Warning doesn’t make it permissible.",
        "—",
        "Client approval does not override your undertaking."
      ]
    }
  },
  {
    topic: "Property ethics — client asks you to backdate documents",
    q: "A seller asks you to backdate a licence to assign so it appears consent existed before completion. Best analysis?",
    choices: [
      "Do it if everyone agrees",
      "Do it if it avoids delays",
      "Refuse: backdating to create a false impression is dishonest and improper",
      "Do it if the landlord is unlikely to notice"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Backdating to mislead is dishonest and breaches integrity.",
      whyWrong: [
        "Agreement doesn’t legalise dishonesty.",
        "Convenience doesn’t justify it.",
        "—",
        "Risk of discovery is irrelevant."
      ]
    }
  },
  {
    topic: "Property ethics — search results reveal problem",
    q: "Local search shows the road is not adopted and maintenance is uncertain. The client says 'don’t tell the lender'. Best analysis?",
    choices: [
      "Keep it confidential; the lender doesn’t need details",
      "Only tell the lender if asked",
      "If acting for lender too, this can be material to security; you must follow lender reporting requirements and not mislead",
      "Ignore it because searches are often wrong"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Material title/maintenance issues can affect lender security. Dual duties require proper reporting and honesty.",
      whyWrong: [
        "Secrecy can mislead the lender.",
        "Silence can still be misleading if you know it’s material.",
        "—",
        "You must investigate/advise, not ignore."
      ]
    }
  },
  {
    topic: "Property ethics — conflict: acting for both parties in a rent review dispute",
    q: "You drafted a lease for both landlord and tenant years ago under a common interest arrangement. Now there is a contentious rent review dispute and both ask you to act. Best analysis?",
    choices: [
      "Act for both because you know the lease",
      "Act for whoever asks first",
      "Likely conflict now: interests are directly opposed; you should not act for both",
      "Act for both if you set up an information barrier"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Once a matter becomes contentious with directly opposed interests, acting for both sides is generally prohibited/unreasonable.",
      whyWrong: [
        "Familiarity does not cure conflict.",
        "First come first served is not the test.",
        "—",
        "Barriers do not make a directly adverse conflict permissible."
      ]
    }
  },
  {
    topic: "Property ethics — misleading about exchange/completion readiness",
    q: "To speed exchange, you tell the other side 'we are ready to exchange today' when you have not yet received signed contract or deposit from your client. Best analysis?",
    choices: [
      "Acceptable: it’s just negotiation",
      "Acceptable if you think it will arrive",
      "Risky: misleading the other side undermines trust; only state what is accurate",
      "Acceptable if the estate agent asked you to say it"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not mislead. Overstating readiness can be deceptive and damages trust.",
      whyWrong: [
        "Negotiation does not permit misleading statements.",
        "Hope is not accuracy.",
        "—",
        "Third-party pressure is not a defence."
      ]
    }
  },
  {
    topic: "Property ethics — conflict: you have a personal interest",
    q: "You are acting on a purchase and learn the client is bidding against you for the same property. What is most accurate?",
    choices: [
      "Continue; your bid is private",
      "Continue if you keep it secret",
      "Stop: this is an own-interest conflict/significant risk and you must not act",
      "Continue if the client is unaware"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Personal competition for the same asset creates an own-interest conflict that compromises independence—do not act.",
      whyWrong: [
        "Privacy does not remove conflict.",
        "Secrecy worsens it.",
        "—",
        "Client ignorance does not make it permissible."
      ]
    }
  },
  {
    topic: "Property ethics — client money and timing",
    q: "A client asks you to hold their money in client account for a month before the transaction starts 'because it’s safer than a bank'. Best analysis?",
    choices: [
      "Agree: client account is a general holding service",
      "Agree if they sign instructions",
      "Likely improper: client account should only hold money for an underlying legal transaction/service; do not use it as a banking facility",
      "Agree if no interest is paid"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client accounts are not general deposit accounts. Holding money must be linked to underlying legal services/transactions and comply with accounts rules.",
      whyWrong: [
        "That misuses the client account as banking.",
        "Instructions do not override regulatory limits.",
        "—",
        "Interest is not the key issue."
      ]
    }
  },
  {
    topic: "Property ethics — acting for lender only",
    q: "You are instructed by a lender only (not the borrower). The borrower asks you for advice on the mortgage terms. Best analysis?",
    choices: [
      "Advise them because it’s helpful",
      "Advise them if they pay you separately without telling the lender",
      "Be clear you act for lender; do not advise borrower unless separately retained and conflicts/confidentiality are addressed",
      "Give informal advice off the record"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must identify who your client is and avoid conflicts. Advising the borrower could conflict with lender duties unless structured properly.",
      whyWrong: [
        "Helpfulness doesn’t change client identity/conflicts.",
        "Secret separate retainer is high risk.",
        "—",
        "‘Off the record’ is not an ethical fix."
      ]
    }
  },
  {
    topic: "Property ethics — pressure from estate agent",
    q: "An estate agent says they will stop referring work unless you 'cut corners' on ID checks. Best analysis?",
    choices: [
      "Cut corners to keep business flowing",
      "Do minimal checks and proceed",
      "Refuse: independence and AML duties cannot be compromised by referrers",
      "Proceed but blame the agent if something goes wrong"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must remain independent and comply with AML/competence obligations regardless of referrer pressure.",
      whyWrong: [
        "Business pressure is not a defence.",
        "Minimal checks can be non-compliant.",
        "—",
        "Blame-shifting doesn’t cure misconduct."
      ]
    }
  },
  {
    topic: "Property ethics — client wants you to hide side agreement",
    q: "After exchange, the parties agree privately that the seller will leave furniture worth £20,000 and reduce the 'real price' accordingly, but keep the contract price unchanged. Buyer says don’t tell the lender. Best analysis?",
    choices: [
      "Do nothing; it’s after exchange",
      "Do nothing; it’s just chattels",
      "Material side deals can affect lender security/true consideration; you must not be complicit in misleading the lender",
      "Tell the buyer to pay cash for furniture so it can’t be traced"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Side agreements that alter true consideration/value can be material to the lender and tax. You must not facilitate concealment.",
      whyWrong: [
        "Timing doesn’t remove the issue.",
        "Chattels can still be used to manipulate consideration/value.",
        "—",
        "That advice would be complicit in wrongdoing."
      ]
    }
  },
  {
    topic: "Property ethics — rectifying a material mistake",
    q: "You mistakenly sent the seller’s solicitor an email stating your client has mortgage funds cleared when they do not. Best analysis?",
    choices: [
      "Say nothing and hope it resolves",
      "Blame your assistant",
      "Correct the error promptly to avoid misleading and manage consequences properly",
      "Delete the email from your sent items"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not leave others misled. Prompt correction and proper management of the mistake is required.",
      whyWrong: [
        "Silence leaves the other side misled.",
        "Blame doesn’t fix the duty breach.",
        "—",
        "Deleting does not undo the misrepresentation."
      ]
    }
  },
  {
    topic: "Property ethics — quick spot: what is most 'serious' in conveyancing ethics?",
    q: "Which issue is most likely to be treated as particularly serious by the regulator in conveyancing practice?",
    choices: [
      "A minor typo in a letter",
      "A late non-urgent search order",
      "Breaching a professional undertaking on completion",
      "Using a different font in the report on title"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Undertakings underpin completion trust. Breaches are treated as serious because they can cause significant harm and undermine confidence in the system.",
      whyWrong: [
        "Typos are usually minor unless misleading.",
        "Delays can matter, but undertakings are especially serious.",
        "—",
        "Formatting is not the key regulatory risk."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Ethics | Chapter 7 | Property Ethics",
    subtitle: "Conflicts, lender reporting, and conveyancing duties.",
    questions: questions
  };
})();
  
