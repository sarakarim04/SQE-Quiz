(() => {
  const questions = [
  {
    topic: "Criminal ethics — duty to the court vs client instructions",
    q: "Your client insists you should tell the court they were at home all evening, but the client has privately admitted they were at the scene. What is most accurate?",
    choices: [
      "You must run the alibi because the client instructs it",
      "You may run the alibi as long as you do not personally say 'I believe it'",
      "You must not put forward a positive case you know to be false; you should advise the client and adjust the defence strategy accordingly",
      "You should withdraw immediately without any discussion"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You cannot mislead the court or advance a positive case you know is false. You must advise the client and ensure the defence presented is consistent with your duties.",
      whyWrong: [
        "Client instructions do not justify misleading the court.",
        "Avoiding words like 'I believe' does not cure presenting a case you know is false.",
        "—",
        "Immediate withdrawal is not always required; first advise and manage the ethical issue properly."
      ]
    }
  },
  {
    topic: "Criminal ethics — client admits guilt and wants a trial",
    q: "A client admits the offence to you but says they want to plead not guilty and 'make the prosecution prove it'. Which is most accurate?",
    choices: [
      "You must refuse to act because the client admitted guilt",
      "You may act and require the prosecution to prove the case, but you must not assert facts you know to be false",
      "You must tell the court the client confessed to you",
      "You should pressure the client to plead guilty to save court time"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A client can put the prosecution to proof. You can test evidence and legal elements, but you must not run a defence that depends on facts you know are untrue.",
      whyWrong: [
        "A confession to you does not automatically prevent acting.",
        "—",
        "Confidentiality prevents you disclosing the confession (absent a legal basis).",
        "You must advise, not pressure; plea decisions are the client’s."
      ]
    }
  },
  {
    topic: "Criminal ethics — pleading guilty",
    q: "Which statement is most accurate about pleas?",
    choices: [
      "The solicitor decides the plea because they know the law",
      "The client decides the plea; the solicitor must advise on evidence, procedure, and likely outcomes",
      "A client should plead guilty if the judge seems strict",
      "A solicitor can enter a guilty plea for the client without instructions if the evidence is strong"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The plea is the client’s decision. Your role is to advise fully so the client makes an informed choice.",
      whyWrong: [
        "Solicitors advise; they do not decide pleas.",
        "—",
        "Judicial impressions are not a proper basis for overriding instructions.",
        "You need clear client instructions for a plea."
      ]
    }
  },
  {
    topic: "Criminal ethics — misleading by omission",
    q: "In mitigation you say 'this was out of character' while knowing the client has relevant recent convictions you have seen on the PNC printout. Most accurate?",
    choices: [
      "Acceptable because you did not mention convictions",
      "Acceptable if the prosecutor does not raise it",
      "Potential breach: you must not mislead the court; you should not make statements that create a misleading impression",
      "Acceptable if it helps the client get a lower sentence"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not mislead the court. Saying 'out of character' can be misleading if you know it is inconsistent with the client’s record.",
      whyWrong: [
        "Omission can still mislead.",
        "The prosecutor’s silence does not justify misleading submissions.",
        "—",
        "Client benefit does not justify misleading the court."
      ]
    }
  },
  {
    topic: "Criminal ethics — disclosure and evidence tampering",
    q: "Your client asks you to 'lose' a knife the police missed during a house search. What is most accurate?",
    choices: [
      "Acceptable if you never touch the knife",
      "You should advise the client to dispose of it safely",
      "You must not be complicit in destruction or concealment of evidence; you should refuse and advise appropriately",
      "Acceptable if the knife is not used in the offence"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Assisting concealment/destruction of evidence is improper and risks criminal/ethical breaches. You must refuse and avoid complicity.",
      whyWrong: [
        "Complicity can arise through advice or arrangement, not only physical handling.",
        "Advising disposal can amount to assisting obstruction.",
        "—",
        "Relevance is a legal issue; you cannot take steps to hide evidence."
      ]
    }
  },
  {
    topic: "Criminal ethics — interviewing and coaching witnesses",
    q: "Which is the safest approach when preparing a defence witness for trial?",
    choices: [
      "Tell them the 'best story' and ask them to stick to it",
      "Encourage them to change anything that harms the defence",
      "Help them structure their account, check clarity and accuracy, and avoid influencing the substance of their evidence",
      "Offer them a bonus if the client is acquitted"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You may assist with presentation and clarity, but you must not influence the substance of evidence or provide improper inducements.",
      whyWrong: [
        "That is coaching and risks influencing substance.",
        "That is improper pressure to alter evidence.",
        "—",
        "Outcome-dependent benefits are prohibited and distort evidence."
      ]
    }
  },
  {
    topic: "Criminal ethics — vulnerable suspects",
    q: "You attend the police station. Your client appears confused, has learning difficulties, and struggles to understand cautions. Best ethical step?",
    choices: [
      "Proceed with interview quickly to get it over with",
      "Insist on an appropriate adult / additional support and consider fitness for interview",
      "Tell the police you will not attend at all",
      "Let the client’s friend interpret without checking"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You must take account of the client’s needs and circumstances. In police station work, vulnerability may require an appropriate adult and careful approach to fitness for interview.",
      whyWrong: [
        "Speed must not override fairness and client understanding.",
        "—",
        "You should engage and protect the client’s interests, not abandon them.",
        "Unverified informal interpreting is risky and may be inappropriate."
      ]
    }
  },
  {
    topic: "Criminal ethics — legal professional privilege (LPP)",
    q: "Police ask you what your client told you privately about the alleged offence. What is most accurate?",
    choices: [
      "You should answer to help the investigation",
      "You must keep the communication confidential and privileged unless an exception/legal basis applies",
      "You must disclose if the officer seems trustworthy",
      "You can disclose if it will reduce your client’s sentence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Client communications for legal advice are confidential and often privileged. You cannot disclose without lawful basis or client consent (and privilege limits).",
      whyWrong: [
        "Helping the investigation does not override confidentiality/LPP.",
        "—",
        "Trustworthiness is irrelevant.",
        "Client advantage does not justify breaching privilege."
      ]
    }
  },
  {
    topic: "Criminal ethics — third-party payer and confidentiality",
    q: "A client’s parent is paying fees and asks for updates and copies of advice. The client refuses consent. Most accurate?",
    choices: [
      "You must disclose because the parent is paying",
      "You may disclose limited updates because it’s family",
      "You must keep the client’s affairs confidential and cannot share without consent or legal basis",
      "You should stop acting immediately"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Payment does not make the parent the client. Confidentiality is owed to the client and disclosure needs consent or legal basis.",
      whyWrong: [
        "Third-party payment does not override confidentiality.",
        "Family relationship does not create consent.",
        "—",
        "Stopping immediately is not always required; manage boundaries properly."
      ]
    }
  },
  {
    topic: "Criminal ethics — conflict: co-defendants",
    q: "Two defendants jointly ask you to represent them. Each privately blames the other. Best analysis?",
    choices: [
      "Act for both to save costs",
      "Act for both if they sign a conflict waiver",
      "High risk conflict: their interests are adverse; you likely cannot act for both",
      "Act for whichever is paying more"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Co-defendants with blame-shifting defences create a clear conflict/significant risk. Acting for both is generally not possible.",
      whyWrong: [
        "Cost-saving does not override conflicts duties.",
        "A waiver does not make a prohibited/unsuitable conflict acceptable.",
        "—",
        "Payment is irrelevant and improper to consider this way."
      ]
    }
  },
  {
    topic: "Criminal ethics — advising silence vs fabrication",
    q: "A client asks: 'Should I just make something up in interview?' What is most accurate advice?",
    choices: [
      "Encourage them to give a strong made-up story",
      "You can advise the client about options (including silence) but must not advise fabrication or misleading the process",
      "Tell them to confess immediately regardless of instructions",
      "Tell them to say whatever the police want to hear"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You can advise on legal options and consequences, but you must not encourage lying or fabricate an account.",
      whyWrong: [
        "That is improper and risks misleading justice.",
        "You advise; you do not override instructions.",
        "Agreeing to false statements is improper."
      ]
    }
  },
  {
    topic: "Criminal ethics — wasting court time",
    q: "A client wants you to make repeated applications with no real basis to delay trial. Most accurate?",
    choices: [
      "Proceed: delay is a valid defence tactic",
      "Proceed if the client pays extra",
      "Refuse: you must not abuse process or waste the court’s time; applications must be properly arguable",
      "Proceed if the prosecution is being difficult"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not waste court time or run abusive tactics. Steps must be properly arguable and taken for proper purpose.",
      whyWrong: [
        "Delay alone is not a proper purpose.",
        "Payment does not justify abuse.",
        "—",
        "Opponent behaviour does not justify misconduct."
      ]
    }
  },
  {
    topic: "Criminal ethics — undertaking to the court",
    q: "You undertake to file a defence statement by a court deadline, then intentionally miss it to gain time. Most accurate?",
    choices: [
      "Fine if you file it a few days later",
      "Potential serious breach: undertakings and court orders must be complied with; intentional non-compliance is serious",
      "Fine if your client instructed it",
      "Fine if the prosecutor does not complain"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Undertakings and court directions must be complied with. Deliberate non-compliance undermines justice and risks serious misconduct.",
      whyWrong: [
        "Late filing can still be a breach, especially if deliberate.",
        "Client instructions do not excuse breach.",
        "—",
        "Absence of complaint does not remove the breach."
      ]
    }
  },
  {
    topic: "Criminal ethics — confidentiality: former clients",
    q: "A former client’s confidential information would help you cross-examine a witness in a new case for a different client. Most accurate?",
    choices: [
      "Use it because the old case is finished",
      "Use it if you don’t reveal the source",
      "Do not use/disclose: confidentiality continues for former clients unless law permits or consent is obtained",
      "Use it if it helps achieve an acquittal"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Confidentiality extends to former clients. You cannot use it for another client without legal basis or consent.",
      whyWrong: [
        "Retainer end does not end confidentiality.",
        "Concealing the source does not cure misuse.",
        "—",
        "Client benefit does not justify breach."
      ]
    }
  },

  // --- POCA / criminal proceeds / fees (exam favourites) ---
  {
    topic: "Criminal ethics — POCA red flags on fees",
    q: "A new client charged with drug supply offers to pay a large cash retainer in small notes and refuses to explain the source. Best analysis?",
    choices: [
      "Accept: cash is normal in criminal defence",
      "Accept if you issue a receipt",
      "High AML/POCA risk: consider internal/external reporting and do not proceed in a way that risks money laundering offences",
      "Refuse only if the police are already investigating"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Unexplained cash in a criminal context is a classic red flag. You must follow AML/POCA procedures and avoid handling criminal property.",
      whyWrong: [
        "Criminal defence does not exempt AML duties.",
        "Receipts do not cure AML risk.",
        "—",
        "You have duties even without a known investigation."
      ]
    }
  },
  {
    topic: "Criminal ethics — tipping off risk",
    q: "After making a report about suspicious funds, the client asks: 'Did you report me?' What is the safest approach?",
    choices: [
      "Tell them yes to be transparent",
      "Tell them no even if you did, to calm them",
      "Avoid confirming or denying; respond neutrally and follow internal procedures to avoid tipping off",
      "Send them a copy of the report to explain"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must avoid tipping off/prejudicing investigations. Neutral, careful communication and internal compliance procedures are key.",
      whyWrong: [
        "Confirming can tip off.",
        "Lying creates its own serious ethical issues.",
        "—",
        "Sharing the report can tip off and breach duties."
      ]
    }
  },
  {
    topic: "Criminal ethics — accepting payment from third parties",
    q: "A friend of the client offers to pay your fees and demands influence over strategy. Best analysis?",
    choices: [
      "Accept and follow the friend’s instructions because they pay",
      "Accept payment but make clear your duties and confidentiality are owed to the client; do not allow payer to control advice",
      "Refuse all third-party payments",
      "Accept only if you share confidential updates with the payer"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Third-party funding can be permissible, but it must not compromise independence, confidentiality, or who the client is.",
      whyWrong: [
        "Payment does not create authority over the retainer.",
        "—",
        "Third-party payment is not automatically prohibited.",
        "Sharing confidential updates without consent is improper."
      ]
    }
  },

  // --- Police station / procedure ethics ---
  {
    topic: "Criminal ethics — advising at police station (best interests)",
    q: "In interview, the officer tries to rush you and refuses a private consultation. Best analysis?",
    choices: [
      "Proceed to keep relations friendly",
      "Insist on a private consultation; effective advice requires proper opportunity to take instructions",
      "Tell the client to answer everything quickly",
      "Leave the station so the interview cannot proceed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You need a proper opportunity to advise and take instructions. A private consultation is often essential for competent service.",
      whyWrong: [
        "Friendliness cannot override effective representation.",
        "—",
        "Rushing can harm the client’s position.",
        "You should take proportionate steps rather than abandoning the client."
      ]
    }
  },
  {
    topic: "Criminal ethics — disclosure to prosecution",
    q: "The prosecutor asks you informally whether your client will run an alibi. You do not yet have instructions. Best analysis?",
    choices: [
      "Tell them yes to appear cooperative",
      "Tell them no to keep options open",
      "Do not speculate; protect confidentiality and only communicate what you are authorised to say",
      "Tell them the client confessed to you so they stop asking"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not mislead or disclose confidential matters. Don’t speculate; only communicate authorised/appropriate information.",
      whyWrong: [
        "Guessing can mislead and breach duties.",
        "Guessing can mislead and breach duties.",
        "—",
        "Confession disclosure breaches confidentiality/privilege."
      ]
    }
  },

  // --- Court advocacy ethics ---
  {
    topic: "Criminal ethics — properly arguable submissions",
    q: "You plan to accuse a prosecution witness of perjury in cross-examination with no evidential basis, purely to intimidate. Most accurate?",
    choices: [
      "Acceptable robust advocacy",
      "Acceptable if it might shake the witness",
      "Improper: allegations should be properly grounded; intimidation and baseless accusations risk misconduct",
      "Acceptable if the client tells you the witness is lying"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Baseless serious allegations are improper. You must act with integrity and avoid unfair, ungrounded accusations.",
      whyWrong: [
        "Robust advocacy still has limits.",
        "Intimidation is not a proper purpose.",
        "—",
        "Client belief alone is not an evidential basis."
      ]
    }
  },
  {
    topic: "Criminal ethics — correcting an error to the court",
    q: "You realise after a hearing you mistakenly told the court the client had no previous convictions, but they do. Best analysis?",
    choices: [
      "Do nothing unless the prosecutor complains",
      "Correct it only if it harms your client",
      "You must take steps to correct misleading information given to the court, consistent with duties and procedure",
      "Blame the clerk and move on"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not leave the court misled. You should rectify material mistakes promptly in an appropriate way.",
      whyWrong: [
        "Silence leaves the court misled.",
        "Your duty is not conditional on client advantage.",
        "—",
        "Blame does not fix the ethical breach."
      ]
    }
  },

  // --- Conflicts & independence ---
  {
    topic: "Criminal ethics — conflict: advising complainant and defendant",
    q: "Your firm previously advised the complainant in a harassment matter. You are now asked to represent the accused defendant. Best analysis?",
    choices: [
      "Act: criminal defence is separate work",
      "Act if you use a different office",
      "High risk conflict/confidentiality issue; you must assess whether you can act at all",
      "Act if the complainant no longer instructs the firm"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Prior work for the complainant can create conflicts/significant risk and confidentiality constraints that may prevent acting for the accused.",
      whyWrong: [
        "Practice area does not remove conflict risks.",
        "A different office does not automatically fix conflicts.",
        "—",
        "Even if former client, confidentiality continues and conflict risk remains."
      ]
    }
  },
  {
    topic: "Criminal ethics — own-interest conflict (media case)",
    q: "You agree to a TV documentary about your client’s case that will pay you if the client is acquitted. Best analysis?",
    choices: [
      "Fine if disclosed to the client",
      "Fine if the client consents in writing",
      "High risk own-interest conflict: outcome-linked personal benefit may compromise independence and is likely impermissible",
      "Fine because it promotes access to justice"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Outcome-linked benefits create serious own-interest conflict risk and can undermine independence and trust.",
      whyWrong: [
        "Disclosure does not make an own-interest conflict permissible.",
        "Consent does not automatically cure own-interest conflicts.",
        "—",
        "Good motives do not remove conflict risk."
      ]
    }
  },

  // --- Client care and competence ---
  {
    topic: "Criminal ethics — competent service (appeal deadline)",
    q: "You miss a criminal appeal deadline because you did not diarise it. Best analysis?",
    choices: [
      "No issue if you refund fees",
      "No issue if the client can reapply",
      "Potential breach: failure to provide competent/timely service; you must be open with the client and take steps to put matters right",
      "No issue because criminal procedure is complex"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Missing deadlines indicates competence/system failure. You must be open with the client and take steps to rectify/mitigate.",
      whyWrong: [
        "Refunds don’t remove the breach.",
        "It may not be fixable; you still have duties of openness and remediation.",
        "—",
        "Complexity increases the need for systems, not excuses."
      ]
    }
  },
  {
    topic: "Criminal ethics — complaints information",
    q: "At the start of a criminal retainer, what should the client be told about complaints handling?",
    choices: [
      "Nothing; complaints rules are for civil matters",
      "Only the hourly rate and VAT",
      "Information about their right to complain and how, and any right to complain to the Legal Ombudsman and when",
      "Only that court decisions are final"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Clients should be given clear written information about complaints routes and relevant ombudsman rights/timing at engagement.",
      whyWrong: [
        "Complaints obligations apply broadly.",
        "Costs info is separate; complaints info is also required.",
        "—",
        "That’s incorrect and not a substitute for complaints information."
      ]
    }
  },

  // --- Specific police station / solicitor conduct scenarios ---
  {
    topic: "Criminal ethics — dealing with police pressure",
    q: "A custody sergeant says: 'If you keep asking for breaks, I’ll note you’re obstructive.' Best analysis?",
    choices: [
      "Stop requesting breaks to avoid trouble",
      "Continue to act in the client’s best interests; request breaks where needed for proper instructions and welfare",
      "Tell the client to sack you so you aren’t blamed",
      "Agree with the sergeant and rush the interview"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You must provide proper representation and take instructions. Welfare and effective advice matter; professional pressure should not derail duties.",
      whyWrong: [
        "Avoiding conflict cannot override client care.",
        "—",
        "That harms the client.",
        "Rushing undermines competent service."
      ]
    }
  },

  // --- 30 total: add remaining items ---
  {
    topic: "Criminal ethics — client wants you to 'hide' disclosure material",
    q: "Your client gives you a phone containing messages relevant to the allegation and says: 'Keep it so the police can’t take it.' Most accurate?",
    choices: [
      "Accept it and lock it in your drawer",
      "Accept it but delete the messages first",
      "You must not be complicit in concealing evidence; you should refuse to assist and advise appropriately",
      "Accept it if you do not look at it"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Taking custody to prevent lawful access can amount to concealment/obstruction. You must not be complicit.",
      whyWrong: [
        "Locking it away can be concealment.",
        "Deleting is even more serious wrongdoing.",
        "—",
        "Not looking does not remove the act of concealment."
      ]
    }
  },
  {
    topic: "Criminal ethics — advising on interview strategy",
    q: "A client asks: 'Should I answer questions or go no comment?' What is most accurate?",
    choices: [
      "Always advise no comment",
      "Always advise full answers",
      "Advise based on the case, evidence, and risks (including adverse inference), taking instructions and considering welfare and vulnerability",
      "Tell the client to do what the officer suggests"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Interview advice must be tailored to the evidence and circumstances, including potential adverse inferences and the client’s needs.",
      whyWrong: [
        "A blanket rule is unsafe.",
        "A blanket rule is unsafe.",
        "—",
        "Police suggestions are not a substitute for independent legal advice."
      ]
    }
  },
  {
    topic: "Criminal ethics — disclosure vs confidentiality (victim contact)",
    q: "Your client asks you to contact the complainant directly to 'sort it out'. There is a bail condition not to contact the complainant. Best analysis?",
    choices: [
      "Do it through you because the bail condition only applies to the client",
      "Do it if the complainant agrees",
      "Do not facilitate breach of bail conditions; advise the client and use lawful channels only",
      "Do it but do not put it in writing"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not assist in breaching court/bail conditions or obstruct justice. Use lawful processes only.",
      whyWrong: [
        "Using you as a channel can still facilitate breach.",
        "Consent may not override a bail condition.",
        "—",
        "Avoiding writing doesn’t make it proper."
      ]
    }
  },
  {
    topic: "Criminal ethics — client recants a confession",
    q: "A client previously admitted guilt to you but now insists they will give evidence denying involvement. What is the best approach?",
    choices: [
      "Put the denial evidence forward regardless",
      "Tell the judge about the prior confession",
      "Explain you cannot present a case you know is false; advise the client on options and adjust representation consistently with duties",
      "Stop acting immediately without explanation"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You cannot mislead the court. Manage the ethical boundary through advice and strategy consistent with duties.",
      whyWrong: [
        "That risks misleading the court.",
        "Confession is privileged/confidential; you cannot disclose.",
        "—",
        "Withdrawal may be necessary in some cases, but not always the first step."
      ]
    }
  },
  {
    topic: "Criminal ethics — press and publicity",
    q: "A reporter asks you for comment and you want to deny the allegations publicly to protect your client. The client has not consented. Best analysis?",
    choices: [
      "Comment freely because it helps the client",
      "You may comment if you keep it vague",
      "Confidentiality applies; do not disclose client affairs or strategy without consent/legal basis",
      "You should leak information to shape jury perception"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Public statements can breach confidentiality and risk improper influence. You need client consent and must act within professional boundaries.",
      whyWrong: [
        "Client benefit does not override confidentiality.",
        "Vagueness can still disclose confidential information.",
        "—",
        "Leaking to influence proceedings is serious misconduct."
      ]
    }
  },
  {
    topic: "Criminal ethics — dealing with unrepresented defendant",
    q: "In court, an unrepresented co-accused misunderstands a listing and may miss it. You plan to exploit this. Best analysis?",
    choices: [
      "Acceptable: they chose to be unrepresented",
      "Acceptable if you do not misstate anything",
      "Potential breach: unfair advantage/sharp practice undermines trust and fairness",
      "Acceptable because it helps your client"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Taking unfair advantage of others—especially obvious misunderstanding—can breach fairness duties even in adversarial contexts.",
      whyWrong: [
        "LiP status does not remove your professional duties.",
        "Omissions can still be sharp practice.",
        "—",
        "Client advantage does not justify unfair conduct."
      ]
    }
  },
  {
    topic: "Criminal ethics — supervision at police station",
    q: "A trainee attends a police station alone for a serious case without supervision and gives incorrect advice. What is most accurate?",
    choices: [
      "Only the trainee is responsible",
      "Only the firm is responsible",
      "Both individual and firm supervision/competence duties can be engaged; effective supervision is required",
      "No issue if the client was later charged anyway"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Poor supervision and competence can engage both individual accountability and firm systems responsibilities.",
      whyWrong: [
        "Individuals remain accountable, but firms also have systems duties.",
        "Firms have duties, but individuals can also be accountable.",
        "—",
        "Outcome does not erase poor advice."
      ]
    }
  },
  {
    topic: "Criminal ethics — giving an undertaking to release exhibits",
    q: "You give an undertaking to return prosecution exhibits by a deadline, then keep them to help prepare your case. Best analysis?",
    choices: [
      "Fine because it helps preparation",
      "Fine if you return them before trial",
      "Breach risk: undertakings must be complied with; you cannot retain items contrary to your commitment",
      "Fine if the prosecutor does not ask"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Undertakings are binding professional commitments. You must comply with agreed terms and deadlines.",
      whyWrong: [
        "Preparation does not justify breach.",
        "Late compliance can still breach the undertaking.",
        "—",
        "Silence does not remove the obligation."
      ]
    }
  },
  {
    topic: "Criminal ethics — client wants you to mislead probation/pre-sentence report",
    q: "Your client asks you to tell probation they have a job lined up when you know they do not. Best analysis?",
    choices: [
      "Do it because it helps reduce sentence",
      "Do it if probation won’t verify",
      "Do not mislead; provide honest, accurate information or decline to make the statement",
      "Do it but phrase it as 'we expect'"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Misleading third parties involved in sentencing is unethical and undermines trust and integrity.",
      whyWrong: [
        "Client benefit doesn’t justify misleading.",
        "Verification risk is irrelevant.",
        "—",
        "Re-labelling can still mislead if you know it’s false."
      ]
    }
  },
  {
    topic: "Criminal ethics — quick spot",
    q: "Which scenario most directly triggers the 'do not mislead the court' duty?",
    choices: [
      "You negotiate a lower fee with a client",
      "You make a factual assertion in mitigation that you know is false",
      "You request an adjournment with proper medical evidence",
      "You advise the client about adverse inference rules"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Knowingly false factual assertions to the court are the clearest form of misleading conduct.",
      whyWrong: [
        "Fees negotiation is not about misleading the court.",
        "—",
        "A properly supported adjournment is legitimate.",
        "Advising on law is proper."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Ethics | Chapter 5 | Criminal Practice Ethics",
    subtitle: "Client instructions, pleas, and duties to the court.",
    questions: questions
  };
})();
  
