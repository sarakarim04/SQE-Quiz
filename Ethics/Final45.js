(() => {
  const questions = [
  
  
  
  {
    topic: "Ch1 SRA Principles — Integrity (backdating)",
    q: "Your client asks you to backdate a letter to make it look like a contract was signed last week (to satisfy an insurer). What is the best response?",
    choices: [
      "Backdate it if the client confirms the facts are true overall",
      "Backdate it but add a note saying it was prepared today",
      "Refuse because backdating to create a false impression breaches integrity and public trust",
      "Backdate it only if a partner signs off",
      "Backdate it because acting in the client’s best interests comes first"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Creating a false impression by backdating is dishonest and undermines integrity and trust in the profession.",
      whyWrong: [
        "Client confirmation doesn’t cure creating a false impression.",
        "Adding a note often still misleads and is not an acceptable workaround.",
        "—",
        "Partner approval cannot authorise dishonesty.",
        "Client best interests are constrained by integrity and rule of law duties."
      ]
    }
  },
  {
    topic: "Ch1 SRA Principles — Independence vs referrer pressure",
    q: "An introducer threatens to stop sending work unless you follow their negotiation instructions. What should you do?",
    choices: [
      "Follow the introducer to protect the firm’s pipeline",
      "Follow the introducer if the client might benefit",
      "Maintain independence; take instructions from the client and act in the client’s best interests",
      "Ask the introducer to sign the retainer so they can instruct you",
      "Tell the opponent you are being pressured to explain delays"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must act independently and only on proper client instructions, not under third-party pressure.",
      whyWrong: [
        "Commercial pressure is not a proper basis to compromise independence.",
        "Even if it might help, the introducer cannot control the retainer.",
        "—",
        "Changing who the client is to suit the introducer is improper.",
        "Disclosing internal pressure can breach confidentiality and professionalism."
      ]
    }
  },
  {
    topic: "Ch1 SRA Principles — Correcting misleading court impression",
    q: "You realise you mistakenly told the court a hearing was unopposed, but the other side had filed opposition evidence. What is the best step?",
    choices: [
      "Do nothing unless the judge raises it",
      "Wait until the next hearing and correct only if asked",
      "Take prompt steps to correct the misleading impression in an appropriate way",
      "Blame the court staff and move on",
      "Withdraw immediately without explanation"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not allow the court to remain misled; prompt correction protects integrity and the administration of justice.",
      whyWrong: [
        "Silence leaves the court misled.",
        "Waiting can compound the misleading position.",
        "—",
        "Blame does not discharge your duties.",
        "Withdrawal is not a substitute for correcting misleading information."
      ]
    }
  },
  {
    topic: "Ch1 SRA Principles — Fair treatment / avoiding unfair discrimination",
    q: "A colleague suggests refusing all clients who need interpreters because it 'takes too long'. Best analysis?",
    choices: [
      "Acceptable: firms can choose clients freely",
      "Acceptable if applied consistently to all languages",
      "Potentially improper: risks unfair discrimination; you should make appropriate arrangements for accessible service",
      "Acceptable unless the client is disabled",
      "Acceptable if clients sign a waiver for reduced service"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Blanket refusal based on interpreter needs risks unfair discrimination and undermines fair access; service should be adapted appropriately.",
      whyWrong: [
        "Choice of clients is constrained by professional duties and equality considerations.",
        "Consistency doesn’t make an unfair policy ethical.",
        "—",
        "Interpreter needs can arise for many protected and non-protected reasons; blanket refusal is risky either way.",
        "Waivers don’t legitimise providing an unfairly reduced service."
      ]
    }
  },
  {
    topic: "Ch1 SRA Principles — Competence and supervision",
    q: "A client demands urgent specialist tax advice you are not competent to give. What should you do?",
    choices: [
      "Give your best guess with a disclaimer",
      "Answer only verbally so it can’t be relied on",
      "Get supervision/specialist input or refer; do not advise beyond competence",
      "Delay until after the deadline to avoid risk",
      "Tell the client tax issues are outside legal advice"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must provide a competent service—seek appropriate supervision/specialist advice or refer where needed.",
      whyWrong: [
        "Disclaimers don’t fix incompetent advice.",
        "Verbal advice can still be relied on and is not a safe workaround.",
        "—",
        "Avoiding action can itself breach service duties; you should act promptly to obtain help or refer.",
        "Tax can be integral to legal transactions; blanket denial is misleading."
      ]
    }
  },
  {
    topic: "Ch1 SRA Principles — Best interests within the law",
    q: "A client asks you to omit a known asset from probate forms to reduce IHT. What is the best response?",
    choices: [
      "Do it if the asset is small",
      "Do it if the client signs a statement taking responsibility",
      "Refuse: you must not assist dishonesty/illegality; advise on lawful compliance",
      "Do it but keep a private file note",
      "Do it because beneficiaries benefit and no one is harmed"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not facilitate fraud or misleading official bodies; integrity and rule of law override client advantage.",
      whyWrong: [
        "Size doesn’t change dishonesty.",
        "Client statements don’t authorise you to act dishonestly.",
        "—",
        "File notes don’t cure wrongdoing.",
        "Tax evasion and dishonesty harm public trust and can be criminal."
      ]
    }
  },

  
  
  
  {
    topic: "Ch2 Code — Identifying the client and authority",
    q: "A director asks you to 'just bill the company' for advice, but you have not confirmed authority or retainer. Best next step?",
    choices: [
      "Treat the director as the client because they contacted you",
      "Treat the company as the client because it instructed the firm before",
      "Clarify who the client is and confirm authority/retainer in writing before advising",
      "Advise immediately and sort paperwork later",
      "Refuse because directors can never instruct solicitors"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must be clear who the client is and ensure you have proper authority and engagement terms before substantive advice.",
      whyWrong: [
        "Contact person isn’t automatically the client.",
        "Past matters don’t automatically extend to new ones without instructions.",
        "—",
        "This risks acting without instructions and poor client care.",
        "Directors can instruct on behalf of a company if authorised."
      ]
    }
  },
  {
    topic: "Ch2 Code — Confidentiality and third-party payer",
    q: "A parent pays your client’s fees and demands copies of your advice. The client refuses consent. What should you do?",
    choices: [
      "Disclose because the parent paid",
      "Disclose a limited summary because it’s family",
      "Refuse disclosure without client consent or legal basis",
      "Disclose if the parent threatens to stop paying",
      "Disclose because payment implies authority"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Confidentiality is owed to the client; third-party payment does not create entitlement to information.",
      whyWrong: [
        "Payment doesn’t change who the client is.",
        "Family relationship doesn’t create implied authority.",
        "—",
        "Threats don’t create a lawful basis.",
        "Implied authority cannot be assumed against the client’s express refusal."
      ]
    }
  },
  {
    topic: "Ch2 Code — Conflicts: acting for both sides",
    q: "Two parties ask you to act for both in drafting a settlement because they 'agree on everything'. Best analysis?",
    choices: [
      "Always fine because it’s settlement",
      "Fine if they sign a waiver",
      "Treat as conflict/significant risk; act only if an exception applies, it’s reasonable, and informed consent/safeguards exist",
      "Act for both if you only do 'admin' drafting",
      "Act for whichever pays more and draft neutrally"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Even settlements can involve divergent interests; conflicts rules apply and require a permitted basis plus informed consent and safeguards.",
      whyWrong: [
        "Settlement doesn’t eliminate conflicts.",
        "Waivers don’t automatically make it permissible.",
        "—",
        "‘Admin only’ still involves legal effect and risk allocation.",
        "Payment preference breaches independence and proper client selection."
      ]
    }
  },
  {
    topic: "Ch2 Code — Undertakings are binding",
    q: "You gave an undertaking to send completion documents same day. Your client asks you to hold them to pressure the other side. What should you do?",
    choices: [
      "Hold them because the client instructed you",
      "Hold them until the other side concedes",
      "Comply with the undertaking; client instructions do not justify breach",
      "Breach it but offer to pay compensation",
      "Withdraw and ignore the undertaking because the retainer ended"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Undertakings are serious professional commitments; you must comply within their terms.",
      whyWrong: [
        "Client instructions don’t override undertakings.",
        "Using undertakings as leverage is improper.",
        "—",
        "Compensation doesn’t cure breach risk.",
        "Ending a retainer doesn’t extinguish an undertaking."
      ]
    }
  },
  {
    topic: "Ch2 Code — Referral arrangements transparency",
    q: "An estate agent pays you for each referral. You don’t tell clients because it might 'confuse them'. Best analysis?",
    choices: [
      "Acceptable if the agent is reputable",
      "Acceptable if you reduce your fee",
      "Risk of breach: referral arrangements require compliance and transparency to clients where required",
      "Acceptable if you disclose only after completion",
      "Acceptable if you label it 'marketing'"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must comply with rules on referral arrangements and be transparent so clients can make informed decisions.",
      whyWrong: [
        "Reputation doesn’t remove disclosure obligations.",
        "Discounts don’t remove the need for compliance/transparency.",
        "—",
        "Late disclosure may still be non-compliant and not meaningful.",
        "Relabelling doesn’t remove the underlying arrangement."
      ]
    }
  },
  {
    topic: "Ch2 Code — Escalation/reporting serious breaches",
    q: "You discover deliberate misuse of client money (transfers to office without bills). What is the best next step?",
    choices: [
      "Ignore it; it’s someone else’s problem",
      "Warn the colleague privately and do nothing else",
      "Escalate internally promptly and consider whether it is a serious breach requiring reporting to the SRA",
      "Tell all clients immediately before investigating",
      "Post anonymously online to alert others"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Serious breaches must be dealt with promptly through proper internal escalation and regulatory reporting where required.",
      whyWrong: [
        "Inaction risks ongoing harm and your own accountability.",
        "Private warnings may be inadequate for serious misconduct.",
        "—",
        "Immediate client contact may breach confidentiality and be premature; follow proper process.",
        "Public posting breaches confidentiality and is inappropriate."
      ]
    }
  },

  
  
  
  {
    topic: "Ch3 DR — Proper basis for allegations",
    q: "Your client wants you to plead 'fraud' against the opponent purely to scare them, with no evidence. What should you do?",
    choices: [
      "Include it because it’s the client’s case",
      "Include it but soften the wording",
      "Refuse to advance ungrounded serious allegations; explain need for proper basis",
      "Include it if it’s marked 'without prejudice'",
      "Include it because it increases settlement leverage"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Serious allegations require a proper factual basis; using them as intimidation risks misleading and misconduct.",
      whyWrong: [
        "Client wishes don’t justify improper pleadings.",
        "Softening doesn’t fix lack of basis.",
        "—",
        "Without prejudice doesn’t legitimise improper allegations in formal statements of case.",
        "Leverage is not a proper purpose for baseless allegations."
      ]
    }
  },
  {
    topic: "Ch3 DR — Settlement authority",
    q: "At mediation you receive an offer within a range previously discussed, but you have no express authority to accept. What should you do?",
    choices: [
      "Accept because it’s within range",
      "Accept because it’s best for the client",
      "Do not accept without clear authority; seek instructions",
      "Accept and inform the client afterwards",
      "Reject automatically to avoid risk"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Settlement is the client’s decision; you need clear authority to accept binding terms.",
      whyWrong: [
        "A range discussion is not necessarily authority to accept.",
        "You advise; you don’t decide settlement.",
        "—",
        "Post-hoc approval may be impossible if acceptance was binding.",
        "Automatic rejection may be poor service."
      ]
    }
  },
  {
    topic: "Ch3 DR — Without prejudice mistake sent to court",
    q: "You accidentally send a without-prejudice settlement email to the court. What is the best next step?",
    choices: [
      "Do nothing; judges ignore it",
      "Ask the court to delete it and pretend it didn’t happen",
      "Act promptly to mitigate: notify appropriately and take steps to avoid unfairness and protect confidentiality",
      "Blame the opponent for confusing addresses",
      "Withdraw immediately"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You should take prompt, proportionate steps to mitigate the error and preserve fairness and confidentiality.",
      whyWrong: [
        "Leaving it risks unfairness and procedural issues.",
        "‘Delete and deny’ is not a proper or reliable solution.",
        "—",
        "Blame doesn’t fix the problem.",
        "Withdrawal doesn’t resolve the immediate issue."
      ]
    }
  },
  {
    topic: "Ch3 DR — Litigant in person and unfair advantage",
    q: "A litigant in person misunderstands a deadline and asks if they have more time. You know they do not. Best response?",
    choices: [
      "Ignore so they miss it",
      "Tell them they have more time",
      "Respond neutrally and do not take unfair advantage of an obvious misunderstanding",
      "Give them legal advice on how to apply for relief",
      "Send them your draft submissions to help"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You should avoid sharp practice and unfair advantage; a neutral response that doesn’t mislead is appropriate.",
      whyWrong: [
        "Ignoring may be sharp practice depending on circumstances.",
        "Actively misleading is misconduct.",
        "—",
        "You must be careful not to advise the opponent as their lawyer.",
        "Sharing internal work product is inappropriate and can prejudice your client."
      ]
    }
  },
  {
    topic: "Ch3 DR — Improper threats",
    q: "Client wants you to threaten to report the opponent to the police for unrelated conduct unless they settle, and you suspect it’s baseless. What should you do?",
    choices: [
      "Make the threat; it will force settlement",
      "Make it only verbally",
      "Refuse: do not make improper/baseless threats; maintain integrity and proper purpose",
      "Make it if you label it 'without prejudice'",
      "Make it if the client confirms instructions in writing"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Using baseless threats to gain advantage is improper and undermines integrity and the justice system.",
      whyWrong: [
        "Settlement goals don’t justify improper tactics.",
        "Verbal threats are still improper.",
        "—",
        "Without prejudice does not legitimise misconduct.",
        "Written instructions don’t authorise improper conduct."
      ]
    }
  },
  {
    topic: "Ch3 DR — Client asks you to hide disclosable documents",
    q: "Client gives you damaging documents and asks you to hide them to avoid disclosure. Best response?",
    choices: [
      "Hide them because duty is to client",
      "Return them and pretend you never saw them",
      "Explain disclosure obligations; refuse to assist concealment; advise lawful options",
      "Destroy them",
      "Immediately send them to the opponent without instructions"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not assist concealment or destruction; you should advise on disclosure duties and lawful strategy.",
      whyWrong: [
        "Client duty is bounded by duties to the court and law.",
        "This can still be improper and may not solve disclosure obligations.",
        "—",
        "Destruction is serious wrongdoing.",
        "You cannot breach confidentiality by disclosing unilaterally."
      ]
    }
  },

  
  
  
  {
    topic: "Ch4 Business — Company vs director personal advice (conflict)",
    q: "You act for a company. The CEO privately asks you to advise them on negotiating a personal exit bonus against the company and to keep it from the board. Best analysis?",
    choices: [
      "Act for the CEO because they are the main contact",
      "Act if the CEO pays privately",
      "Conflict: the company is your client; advising the CEO against the company is likely impermissible",
      "Act for both if you set up a wall",
      "Act because it’s 'part of the transaction'"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Your duties are to the company client; personal advice adverse to the company creates a clear conflict and confidentiality problem.",
      whyWrong: [
        "Being the contact doesn’t make them the client.",
        "Payment doesn’t cure conflict.",
        "—",
        "Information barriers don’t make directly adverse advice permissible.",
        "Being in the same transaction can worsen the conflict."
      ]
    }
  },
  {
    topic: "Ch4 Business — Authority to bind company",
    q: "A senior employee tells you to sign a binding side letter on behalf of the company urgently, but you haven’t seen board/CFO approval. Best step?",
    choices: [
      "Sign because they seem senior",
      "Sign if the counterparty insists",
      "Verify authority to instruct/execute before acting",
      "Sign but keep a note that authority was unclear",
      "Ask the counterparty to draft and sign it for you"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must ensure proper authority and governance before committing the company to binding obligations.",
      whyWrong: [
        "Seniority isn’t proof of authority.",
        "Pressure doesn’t substitute for authority.",
        "—",
        "File notes don’t cure acting without authority.",
        "Counterparty drafting/signing doesn’t fix your client authority problem."
      ]
    }
  },
  {
    topic: "Ch4 Business — Secret commission/referral fee",
    q: "You refer a corporate client to an accountant and receive a commission, not disclosed to the client. Best analysis?",
    choices: [
      "Fine if the accountant is excellent",
      "Fine if commission is small",
      "Improper: you must disclose relevant financial interests/arrangements to the client",
      "Fine if disclosed only internally",
      "Fine if client gets a discount from the accountant"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Undisclosed commissions undermine trust and create conflicts; transparency is required.",
      whyWrong: [
        "Quality doesn’t remove disclosure duties.",
        "Small sums can still be material and improper.",
        "—",
        "Internal notes don’t inform the client.",
        "Discounts don’t remove the need for disclosure."
      ]
    }
  },
  {
    topic: "Ch4 Business — Misleading investors/third parties",
    q: "Client wants you to tell investors that 'all regulatory approvals are secured' though a key approval is still pending. What should you do?",
    choices: [
      "Say it because approval is expected",
      "Say it if you add 'to the best of our knowledge'",
      "Refuse; advise client to state the position accurately and not mislead",
      "Say it only verbally",
      "Say it because investors are sophisticated"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not mislead; accuracy in statements to third parties is required.",
      whyWrong: [
        "Expectation is not truth.",
        "Qualifiers don’t fix a statement you know is false.",
        "—",
        "Verbal misstatements are still misstatements.",
        "Sophistication doesn’t justify misleading conduct."
      ]
    }
  },
  {
    topic: "Ch4 Business — Misuse of confidential information / own-interest conflict",
    q: "During a confidential acquisition you learn the target’s share price may rise. You consider buying shares before announcement. Best analysis?",
    choices: [
      "Buy if outside working hours",
      "Buy via a family member",
      "Do not buy: misuse of confidential information and serious integrity/own-interest issues",
      "Buy and tell the client later",
      "Buy only a small amount"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Using confidential deal information for personal gain is serious misconduct and likely unlawful as well as unethical.",
      whyWrong: [
        "Timing doesn’t cure misuse of information.",
        "Using a proxy worsens misconduct.",
        "—",
        "Disclosure afterwards doesn’t undo wrongdoing.",
        "Amount doesn’t change principle."
      ]
    }
  },
  {
    topic: "Ch4 Business — AML suspicion and tipping off",
    q: "In a share purchase you suspect the funding is criminal property. Client asks why you are delaying completion. Best response?",
    choices: [
      "Tell the client you suspect money laundering",
      "Tell them you filed a report",
      "Give a neutral process-based explanation and follow AML/SAR procedures, avoiding tipping off",
      "Proceed anyway to avoid harming the client",
      "Proceed but ask for documents after completion"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must comply with AML procedures and avoid tipping off; neutral communications are safest.",
      whyWrong: [
        "This risks tipping off.",
        "This risks tipping off and may be unlawful.",
        "—",
        "Client care does not override AML duties.",
        "Post-completion checks are too late and risky."
      ]
    }
  },

  
  
  
  {
    topic: "Ch5 Criminal — False alibi",
    q: "Client admits they were at the scene but instructs you to run a positive alibi defence. What should you do?",
    choices: [
      "Run the alibi because client instructs it",
      "Run it but avoid saying you believe it",
      "Do not advance a positive case you know is false; advise client and adjust strategy accordingly",
      "Tell the court about the confession",
      "Withdraw immediately without discussion"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not mislead the court or advance a positive case you know is false.",
      whyWrong: [
        "Client instructions do not justify misleading the court.",
        "Wording tweaks don’t cure knowingly false case theory.",
        "—",
        "Confession is confidential/privileged.",
        "Withdrawal may be required in some cases, but you must manage properly first."
      ]
    }
  },
  {
    topic: "Ch5 Criminal — Putting prosecution to proof",
    q: "Client admits guilt but wants to plead not guilty to make the prosecution prove it, without running a false case. Most accurate?",
    choices: [
      "You must refuse to act",
      "You must tell the court they confessed",
      "You may act and test the prosecution case, but must not assert facts you know are false",
      "You must pressure the client to plead guilty",
      "You may only act if the client gives evidence"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A client can require proof; you can challenge evidence and legal elements, but cannot run a knowingly false positive case.",
      whyWrong: [
        "A confession does not automatically prevent acting.",
        "Confidentiality/LPP prevents disclosure.",
        "—",
        "Plea decisions are the client’s; pressure is improper.",
        "You can act whether or not client gives evidence, subject to ethical limits."
      ]
    }
  },
  {
    topic: "Ch5 Criminal — Vulnerable suspect at police station",
    q: "Client has learning difficulties and struggles to understand the caution; police want to interview now. Best step?",
    choices: [
      "Proceed quickly to get it over with",
      "Advise 'no comment' without further assessment",
      "Insist on appropriate adult/support and consider fitness for interview; take proper instructions",
      "Let a friend interpret without checks",
      "Leave so the interview cannot proceed"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must protect the client’s interests and ensure proper support and understanding before interview proceeds.",
      whyWrong: [
        "Speed can undermine fairness and client welfare.",
        "A blanket approach may be incompetent and harmful.",
        "—",
        "Unverified interpreting can be inappropriate and risky.",
        "Abandoning the client is not usually appropriate."
      ]
    }
  },
  {
    topic: "Ch5 Criminal — POCA risk: suspicious cash fees",
    q: "Client charged with drug supply offers large cash retainer in small notes, refuses source explanation, demands urgent action. Best analysis?",
    choices: [
      "Accept because cash is common",
      "Accept if you issue a receipt",
      "High AML/POCA risk: follow procedures, consider reporting, and avoid handling criminal property",
      "Accept if client promises it’s legitimate",
      "Refuse only if police confirm investigation"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Unexplained cash in this context is a classic red flag; you must follow AML/POCA procedures and avoid laundering risks.",
      whyWrong: [
        "Criminal work does not exempt AML duties.",
        "Receipts don’t remove suspicion.",
        "—",
        "Promises aren’t verification.",
        "You must act on suspicion; you don’t wait for confirmation."
      ]
    }
  },
  {
    topic: "Ch5 Criminal — Tipping off",
    q: "After an AML report is made, client asks: 'Did you report me?' Safest response?",
    choices: [
      "Confirm to be transparent",
      "Deny even if you did",
      "Avoid confirming/denying; respond neutrally to avoid tipping off",
      "Send them a copy of the report",
      "Tell them the police are investigating"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must avoid tipping off/prejudicing investigations; neutral communication is safest.",
      whyWrong: [
        "Confirmation can tip off.",
        "Lying is itself serious misconduct.",
        "—",
        "Sharing the report risks tipping off and breaches duties.",
        "This is tipping off."
      ]
    }
  },
  {
    topic: "Ch5 Criminal — Witness preparation vs coaching",
    q: "Client asks you to tell a defence witness exactly what to say to match the defence theory. Best approach?",
    choices: [
      "Give the witness a script",
      "Encourage them to change harmful parts",
      "Help with clarity and structure without influencing the substance of evidence",
      "Offer a benefit if acquittal",
      "Tell them to copy the client’s account word-for-word"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You may help presentation and clarity, but must not influence the substance of evidence or induce false testimony.",
      whyWrong: [
        "Scripting is coaching and risks false evidence.",
        "Pressuring changes can be improper.",
        "—",
        "Inducements are prohibited and corrupt evidence.",
        "This is coaching and risks untruthfulness."
      ]
    }
  },

  
  
  
  {
    topic: "Ch6 Wills — Third-party payer wants the draft",
    q: "Adult child pays for parent’s will and asks for a copy of the draft; parent has not consented. What should you do?",
    choices: [
      "Send because child paid",
      "Send because it’s only a draft",
      "Do not send without the testator’s consent; the testator is the client",
      "Send but remove the gifts",
      "Send if the child promises confidentiality"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Confidentiality is owed to the testator; payment does not create disclosure rights.",
      whyWrong: [
        "Payment doesn’t make them the client.",
        "Drafts can still be confidential.",
        "—",
        "Editing doesn’t cure confidentiality breach.",
        "Promises don’t create consent."
      ]
    }
  },
  {
    topic: "Ch6 Wills — Undue influence: beneficiary dominates meeting",
    q: "Main beneficiary stays in the room and answers for the testator; testator looks to them before responding. Best next step?",
    choices: [
      "Proceed to avoid upset",
      "Proceed but just make a note",
      "Insist on seeing the testator alone to confirm independent instructions and assess capacity/undue influence",
      "Ask the beneficiary to sign a no-pressure statement",
      "Proceed only if beneficiary agrees"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must ensure the testator’s free, informed instructions and assess vulnerability/undue influence risks.",
      whyWrong: [
        "Comfort does not override safeguarding.",
        "Notes alone don’t test independence.",
        "—",
        "Beneficiary statements don’t replace independent safeguards.",
        "Beneficiary agreement is irrelevant and risky."
      ]
    }
  },
  {
    topic: "Ch6 Wills — Capacity concerns and safeguards",
    q: "Testator is confused about assets and forgets family members but wants major will changes. Best approach?",
    choices: [
      "Draft quickly before they forget more",
      "Take instructions from family",
      "Pause and apply capacity safeguards (possible medical evidence) and make detailed notes",
      "Proceed if will is simple",
      "Refuse because elderly clients cannot change wills"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Where capacity is in doubt, enhanced safeguards and careful documentation are required.",
      whyWrong: [
        "Rushing increases invalidity and misconduct risk.",
        "Family cannot replace the testator’s instructions.",
        "—",
        "Simplicity doesn’t remove capacity concerns.",
        "Age alone doesn’t remove capacity."
      ]
    }
  },
  {
    topic: "Ch6 Estates — Who is the client and disclosure to beneficiaries",
    q: "You act for executors. A beneficiary demands copies of your advice to executors about whether to defend a claim. Best analysis?",
    choices: [
      "Disclose because beneficiaries fund the estate",
      "Disclose because executors owe duties to beneficiaries",
      "Do not disclose privileged/confidential advice without executor authority or legal basis",
      "Disclose if beneficiary threatens complaint",
      "Disclose if beneficiary is the largest beneficiary"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Your advice is owed to your PR clients and is confidential/privileged; beneficiaries are not automatically entitled to it.",
      whyWrong: [
        "Funding source doesn’t override privilege/confidentiality.",
        "Executor duties don’t automatically waive privilege.",
        "—",
        "Threats don’t create authority.",
        "Size of benefit is irrelevant."
      ]
    }
  },
  {
    topic: "Ch6 Wills — Gift to drafter/firm staff",
    q: "Testator wants to leave a substantial legacy to you or your paralegal and asks you to draft the will. Best approach?",
    choices: [
      "Proceed if the client confirms in writing",
      "Proceed if the gift is small",
      "High risk: do not draft; require independent drafting/advice (often separate solicitor/firm)",
      "Proceed if you keep detailed file notes",
      "Proceed if the main beneficiary agrees"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Gifts to the drafter/firm staff create serious conflict and challenge risks; independent advice/drafting is needed.",
      whyWrong: [
        "Consent alone rarely cures this risk.",
        "Amount doesn’t remove conflict.",
        "—",
        "Notes don’t remove conflict or perception problems.",
        "Beneficiary agreement is not a safeguard."
      ]
    }
  },
  {
    topic: "Ch6 Estates — Executors in dispute (joint retainer conflict)",
    q: "Two executors instruct you. One misuses estate funds and asks you to keep it secret from the co-executor. Best step?",
    choices: [
      "Keep it secret because it was told to you privately",
      "Tell beneficiaries immediately",
      "Advise PR clients on duties/rectification; if secrecy prevents acting for both, consider ceasing to act and manage confidentiality properly",
      "Ignore it as executor responsibility",
      "Report it publicly"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must manage the joint-retainer conflict and advise on fiduciary duties; secrecy may make continued joint representation impossible.",
      whyWrong: [
        "In joint representation, material secrecy creates conflict and may be unmanageable.",
        "You cannot automatically disclose confidential info to beneficiaries.",
        "—",
        "Ignoring may facilitate wrongdoing.",
        "Public disclosure breaches confidentiality and is inappropriate."
      ]
    }
  },

  
  
  
  {
    topic: "Ch7 Property — Lender reporting: cashback incentive",
    q: "You act for buyer and lender. Seller agrees an off-contract £8,000 cashback. Buyer says 'don’t tell lender'. Best analysis?",
    choices: [
      "Keep it confidential because buyer is your main client",
      "Ignore it because it’s off-contract",
      "Do not mislead the lender; incentives may be material and likely must be reported under lender requirements",
      "Tell seller to call it a 'gift' so it’s fine",
      "Only tell lender if asked"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Undisclosed incentives can be material to the lender’s security and decision; you must comply with lender reporting and not mislead.",
      whyWrong: [
        "Dual duties prevent keeping material matters from lender.",
        "Off-contract doesn’t mean immaterial.",
        "—",
        "Relabelling doesn’t cure non-disclosure.",
        "Silence can still mislead."
      ]
    }
  },
  {
    topic: "Ch7 Property — Gifted deposit and occupier",
    q: "Buyer’s deposit is a gift from a friend who will live at the property; buyer asks you not to tell lender. Best approach?",
    choices: [
      "Keep it secret; it’s personal",
      "Disclose only if lender asks",
      "Treat as potentially material; follow lender requirements and do not assist misleading lender",
      "Tell the friend to move out temporarily to avoid disclosure",
      "Proceed because gifted deposits are always acceptable"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Gifted deposits and occupiers can affect lender risk/security; you must not be complicit in misleading the lender.",
      whyWrong: [
        "Secrecy risks misleading.",
        "Waiting can still mislead.",
        "—",
        "Workarounds can be dishonest.",
        "Acceptability doesn’t remove reporting obligations."
      ]
    }
  },
  {
    topic: "Ch7 Property — Undertaking to redeem mortgage",
    q: "You undertook to redeem seller’s mortgage on completion. Seller asks you to delay redemption to use funds elsewhere. Best response?",
    choices: [
      "Delay because seller is the client",
      "Delay if lender won’t notice",
      "Comply with undertaking; client instructions do not justify breach",
      "Breach but offer compensation",
      "Withdraw and keep funds until seller agrees"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Undertakings are binding professional commitments and must be honoured.",
      whyWrong: [
        "Client wishes don’t override undertakings.",
        "Detection risk is irrelevant.",
        "—",
        "Compensation doesn’t cure breach.",
        "Withdrawal doesn’t end your undertaking and may worsen matters."
      ]
    }
  },
  {
    topic: "Ch7 Property — Mortgage fraud: inflated price",
    q: "Client wants contract price inflated so bank lends more; true price will be paid separately. Best response?",
    choices: [
      "Proceed if both parties agree",
      "Proceed with a file note",
      "Refuse: dishonest and likely mortgage fraud; you must not assist",
      "Proceed if valuation supports it",
      "Proceed if client promises to correct later"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Inflating price to obtain larger lending is dishonest and can be criminal; you must not be complicit.",
      whyWrong: [
        "Agreement doesn’t legalise fraud.",
        "File notes don’t cure participation.",
        "—",
        "Valuation doesn’t justify misrepresentation of true consideration.",
        "Promises don’t remove dishonesty."
      ]
    }
  },
  {
    topic: "Ch7 Property — AML/ID fraud red flags",
    q: "Seller refuses ID, keeps changing bank details, insists on urgent completion; agent says they’ve met them. Best approach?",
    choices: [
      "Proceed because agent confirms identity",
      "Proceed to avoid losing the deal",
      "Do not proceed without proper verification; escalate and follow AML/fraud controls",
      "Proceed but get ID after completion",
      "Proceed if seller signs a declaration"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Property is high-risk for fraud; you must complete proper CDD/verification before acting.",
      whyWrong: [
        "Agents are not a substitute for your checks.",
        "Commercial urgency does not override AML duties.",
        "—",
        "Post-completion checks are too late.",
        "Declarations don’t replace verification."
      ]
    }
  },

  
  
  
  {
    topic: "Ch8 Accounts — Client account as banking facility",
    q: "Client asks you to hold £100,000 in client account for 6 months 'for safekeeping' with no active matter. Best analysis?",
    choices: [
      "Agree because it is client money",
      "Agree if client signs written instructions",
      "Likely improper: do not use client account as a banking facility absent underlying legal services/transaction",
      "Agree if you charge a holding fee",
      "Agree if COLP approves"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client account is not a deposit facility; funds should be held only for proper purposes connected to legal services.",
      whyWrong: [
        "Client money status doesn’t allow indefinite holding without purpose.",
        "Instructions don’t override regulatory limits.",
        "—",
        "Charging a fee doesn’t legalise misuse.",
        "Internal approval doesn’t change the rules."
      ]
    }
  },
  {
    topic: "Ch8 Accounts — Transferring costs without bill",
    q: "You want to move £1,500 from client account to office account for fees, but no bill/written notification has been delivered. Safest position?",
    choices: [
      "Transfer because work is done",
      "Transfer if client verbally agrees",
      "Do not transfer yet; usually a bill/written notification and proper entitlement are required",
      "Transfer and send bill later",
      "Transfer if partner approves"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Controls typically require written notification (often a bill) before taking costs from client money.",
      whyWrong: [
        "Work done alone isn’t enough to justify transfer.",
        "Verbal agreement is risky and may be non-compliant.",
        "—",
        "After-the-event billing can still be improper.",
        "Partner approval doesn’t create entitlement."
      ]
    }
  },
  {
    topic: "Ch8 Accounts — Client account shortfall",
    q: "Reconciliation shows client account is £4,000 short due to an error. Colleague suggests moving £4,000 from another client ledger temporarily. Best response?",
    choices: [
      "Move between clients temporarily to fix it",
      "Ignore until audit",
      "Investigate and remedy promptly (often from office funds) and consider escalation/reporting depending on seriousness",
      "Wait for bank to fix it",
      "Ask affected client to top up"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client shortfalls are serious; investigate and replace promptly, and consider reporting/escalation.",
      whyWrong: [
        "Using other clients’ money is misappropriation.",
        "Delays risk ongoing harm and further breach.",
        "—",
        "Banks may not fix ledger errors; you must act.",
        "Clients should not bear the firm’s accounting failures."
      ]
    }
  },
  {
    topic: "Ch8 Accounts — Residual balances",
    q: "Matter closes with £18 left; client cannot be traced. Colleague says transfer to office as profit. Best approach?",
    choices: [
      "Transfer immediately to office",
      "Donate immediately to charity",
      "Follow residual balance procedures: attempts to return, proper records, then deal with it only in a permitted way",
      "Leave indefinitely and forget it",
      "Split between staff as a bonus"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Residual balances must be handled under prescribed processes with records; they are not firm profit.",
      whyWrong: [
        "Immediate transfer is improper.",
        "Charity donation may be possible only if residual balance conditions are met.",
        "—",
        "Indefinite holding is poor control and risky.",
        "Staff bonuses from client money are improper."
      ]
    }
  },
  {
    topic: "Ch8 Accounts — Misuse of client money for firm expenses",
    q: "Partner asks you to use client account money to pay salaries today and replace next week. Best analysis?",
    choices: [
      "Accept if replaced quickly",
      "Accept if no client will notice",
      "Refuse: using client money for firm expenses is serious misuse regardless of repayment plans",
      "Accept if partner signs written authority",
      "Accept if the amount is small"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client money must not be used for firm liabilities; this is serious misuse and may be dishonest.",
      whyWrong: [
        "Repayment timing doesn’t cure misuse.",
        "Detection risk is irrelevant.",
        "—",
        "Internal authority cannot legalise misappropriation.",
        "Amount doesn’t change the principle."
      ]
    }
  },

  
  
  
  {
    topic: "Mixed — Confidentiality vs lender reporting (Property + Principles)",
    q: "You act for buyer and lender. Buyer admits their deposit is a loan repayable to a friend, but asks you to describe it to lender as a 'gift'. Best response?",
    choices: [
      "Do as asked; it’s the buyer’s business",
      "Describe it as a gift but keep private notes",
      "Refuse to mislead; explain lender reporting duties and that you cannot act on instructions to deceive",
      "Send the lender partial information so it’s ambiguous",
      "Proceed and only disclose if the lender queries it"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not mislead the lender; you must follow lender reporting requirements and avoid dishonest descriptions.",
      whyWrong: [
        "Dual duties prevent assisting deception.",
        "Notes don’t cure deception.",
        "—",
        "Ambiguity can still mislead.",
        "Silence can be misleading when you know it’s material."
      ]
    }
  },
  {
    topic: "Mixed — Client demands aggressive tactics (DR + Principles)",
    q: "Client instructs you to file repeated hopeless applications purely to delay trial and increase opponent’s costs. Best analysis?",
    choices: [
      "Proceed; delay is a valid tactic",
      "Proceed if the client pays extra",
      "Refuse: you must not abuse process or waste court resources; applications must be properly arguable and for proper purpose",
      "Proceed if the opponent is being difficult",
      "Proceed but withdraw before the hearing"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not abuse the court process; integrity and proper administration of justice require properly arguable steps.",
      whyWrong: [
        "Delay alone is not a proper purpose.",
        "Payment doesn’t justify misconduct.",
        "—",
        "Opponent behaviour doesn’t permit abuse.",
        "Withdrawal doesn’t erase improper conduct in issuing applications."
      ]
    }
  },
  {
    topic: "Mixed — Third-party payer tries to control strategy (Criminal/DR + Code)",
    q: "A friend pays your client’s fees and demands to approve all advice and strategy. Client refuses to let you share updates. What should you do?",
    choices: [
      "Share updates because the friend pays",
      "Share limited updates to keep the friend funding the case",
      "Maintain confidentiality to the client; accept payment only on terms that preserve independence/confidentiality",
      "Stop acting immediately and keep the fees",
      "Let the friend instruct you directly to simplify"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Payment does not change who the client is; you must preserve independence and confidentiality.",
      whyWrong: [
        "Payment doesn’t create entitlement.",
        "Funding pressure doesn’t justify breach.",
        "—",
        "Stopping may be necessary but you should manage properly; keeping fees may raise separate issues.",
        "Changing instruction source undermines client relationship and conflicts."
      ]
    }
  },
  {
    topic: "Mixed — Mistake discovered (Principles + Code: openness and remediation)",
    q: "You miss a critical filing deadline due to your diarising error. The client has suffered loss risk. Best next step?",
    choices: [
      "Say nothing unless the client discovers it",
      "Blame the court system",
      "Inform the client appropriately, take urgent steps to mitigate/rectify, and follow internal reporting procedures",
      "Delete the calendar entry to avoid evidence",
      "Wait to see if the opponent notices"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You should be open about material errors, take steps to put matters right, and follow firm/regulatory processes.",
      whyWrong: [
        "Concealment undermines trust and can worsen harm.",
        "Blame doesn’t fix duties to client and court.",
        "—",
        "Deleting evidence is improper and risky.",
        "Delay may increase harm and breach duties."
      ]
    }
  },
  {
    topic: "Mixed — Conflicts: joint clients diverge (Property/Business + Code)",
    q: "You act for two joint buyers. One privately tells you they will use undisclosed borrowed money for the deposit and says 'don’t tell the other buyer'. Best analysis?",
    choices: [
      "Keep it secret; confidentiality to that buyer",
      "Tell the other buyer immediately",
      "This may create an unmanageable conflict in a joint retainer; you must address it and may need to cease acting if it can’t be resolved",
      "Ignore it as it’s their private finances",
      "Report it to the lender without telling anyone"
    ],
    correct: 2,
    explain: {
      whyRight:
        "In joint retainers, material information withheld from a joint client can create conflict between duties; you may have to stop acting if unresolvable.",
      whyWrong: [
        "Joint retainer often requires openness between joint clients for material facts.",
        "You can’t just breach confidentiality; you must manage properly.",
        "—",
        "It may be material to the transaction and lender reporting.",
        "You must manage confidentiality and reporting carefully; unilateral reporting may be improper."
      ]
    }
  },
  {
    topic: "Mixed — Client asks you to destroy evidence (Criminal/DR + Principles)",
    q: "Client asks you to shred a document damaging to them before disclosure. Best response?",
    choices: [
      "Shred it; duty is to client",
      "Return it and say you never saw it",
      "Refuse; do not assist destruction/concealment; advise on lawful handling and disclosure obligations",
      "Shred it if the opponent is acting unfairly",
      "Shred it only if client confirms in writing"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not obstruct justice or assist destruction of evidence; integrity and court duties apply.",
      whyWrong: [
        "Client loyalty is bounded by law and court duties.",
        "Returning may not cure impropriety if done to avoid disclosure.",
        "—",
        "Opponent conduct doesn’t justify wrongdoing.",
        "Written instructions don’t authorise illegality."
      ]
    }
  },
  {
    topic: "Mixed — Using client account to 'help' a client (Accounts + Principles)",
    q: "Client asks you to hold £20,000 in client account for months to stop them spending it, even though the matter ended. Best analysis?",
    choices: [
      "Agree; it’s client money",
      "Agree if client signs written authority",
      "Likely improper: client account is not a savings tool; return money promptly unless there is a proper ongoing reason to hold it",
      "Move it to office account then repay later",
      "Agree if you pay interest"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client account must not be used as a general holding/banking facility without a proper underlying purpose.",
      whyWrong: [
        "Client money status doesn’t allow indefinite holding without purpose.",
        "Authority doesn’t override accounts rules.",
        "—",
        "Office account transfer is misuse.",
        "Interest doesn’t legitimise improper holding."
      ]
    }
  },
  {
    topic: "Mixed — Media/publicity (Criminal + Confidentiality)",
    q: "A reporter calls asking for comment on your client’s arrest. You want to deny the allegations publicly. Client hasn’t consented. Best response?",
    choices: [
      "Comment freely to protect client reputation",
      "Give a vague comment so it’s not confidential",
      "Do not disclose client affairs or strategy without consent/legal basis; be cautious and maintain confidentiality",
      "Leak information to shape public opinion",
      "Confirm the client told you they are innocent"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Confidentiality applies; public statements can disclose confidential information and prejudice proceedings.",
      whyWrong: [
        "Client benefit doesn’t override confidentiality.",
        "Vagueness can still disclose confidential details.",
        "—",
        "Leaking is serious misconduct.",
        "Disclosing instructions is confidential."
      ]
    }
  },
  {
    topic: "Mixed — Acting for lender only (Property + Code)",
    q: "You are instructed by a lender only. The borrower asks you for advice on the mortgage terms. Best analysis?",
    choices: [
      "Advise them because it’s helpful",
      "Advise them if they pay you privately without telling the lender",
      "Be clear you act for the lender; do not advise borrower unless separately retained and conflicts are addressed",
      "Give informal advice off the record",
      "Refuse to speak to the borrower at all"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must be clear who your client is; advising the borrower may create conflict unless properly structured with informed consent and clear retainer.",
      whyWrong: [
        "Helpfulness doesn’t change client identity/conflicts.",
        "Secret separate retainers are high risk and undermine transparency.",
        "—",
        "‘Off the record’ is not an ethical workaround.",
        "You can communicate appropriately but must not mislead or create confusion."
      ]
    }
  }
];




  window.quizData = {
    title: "SQE1 Ethics | Final 45",
    subtitle: "Mixed review across core ethics themes and contexts.",
    questions: questions
  };
})();
  
