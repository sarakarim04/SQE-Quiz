(() => {
  const questions = [
  {
    topic: "SRA Code of Conduct — 1: Maintaining trust and acting fairly (discrimination)",
    q: "A solicitor refuses to act for a client because of the client’s religion, saying it conflicts with the solicitor’s personal views. Under the SRA Code of Conduct, which is most accurate?",
    choices: [
      "Permitted if the solicitor gives notice and suggests another firm",
      "Permitted provided the solicitor is otherwise polite",
      "Not permitted: you must not unfairly discriminate by allowing personal views to affect professional relationships",
      "Permitted if the matter is outside the solicitor’s preferred practice area"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code requires you not to unfairly discriminate by allowing personal views to affect professional relationships and the way you provide services (Maintaining trust and acting fairly).",
      whyWrong: [
        "Signposting does not make unfair discrimination acceptable.",
        "Being polite does not cure unfair discrimination.",
        "—",
        "Practice-area preference is different; the issue here is discrimination driven by personal views."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 1: Maintaining trust and acting fairly (unfair advantage)",
    q: "You notice an unrepresented opponent has misunderstood a deadline and will miss it. You quietly plan to take advantage without correcting the obvious misunderstanding. Which statement is most accurate under the Code?",
    choices: [
      "Acceptable: you owe no duties to an opponent",
      "Acceptable if you do not actively mislead them",
      "Potential breach: you must not abuse your position by taking unfair advantage of others",
      "Acceptable if your client instructed you to do so"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code prohibits abusing your position by taking unfair advantage of clients or others; exploiting an obvious mistake can cross that line.",
      whyWrong: [
        "You still have professional obligations toward others (including opponents).",
        "Avoiding explicit lies does not justify unfair advantage.",
        "—",
        "Client instructions cannot justify unethical conduct."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 1: Maintaining trust and acting fairly (undertakings)",
    q: "You give an undertaking to send redemption funds within 24 hours. The fee earner forgets. Under the Code, which is most accurate?",
    choices: [
      "No issue if it was a junior who forgot",
      "You must perform undertakings within the agreed timescale (or a reasonable time if none is agreed)",
      "Undertakings are only enforceable if in writing",
      "An undertaking can be ignored if it becomes inconvenient"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code requires you to perform all undertakings given by you within the agreed timescale (or if none is agreed, within a reasonable time).",
      whyWrong: [
        "Responsibility is not avoided because someone junior forgot.",
        "—",
        "Undertakings can be binding even if not in a formal written document; the Code focuses on performance.",
        "Inconvenience does not justify non-performance."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 1: Maintaining trust and acting fairly (misleading by omission)",
    q: "A client asks, 'Have you filed the application?' You have not, but you reply: 'We’re progressing it' intending them to think it has been filed. Which is most accurate under the Code?",
    choices: [
      "Acceptable because the statement is technically true",
      "Acceptable because you did not say it was filed",
      "Potential breach: you must not mislead clients by acts or omissions",
      "Acceptable if filing will happen later today"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code prohibits misleading clients (and others), including through omissions or allowing misleading impressions.",
      whyWrong: [
        "Technical truth is not enough if you intend to mislead.",
        "Omissions that mislead are still prohibited.",
        "—",
        "Future intention does not justify misleading now."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 1: Maintaining trust and acting fairly (colleagues/bullying)",
    q: "A manager witnesses a colleague repeatedly bullying a trainee in meetings. Under the Code, which is most accurate?",
    choices: [
      "It is a private HR matter and not a conduct issue",
      "The manager must challenge behaviour that does not treat colleagues fairly and with respect",
      "Bullying is only relevant if it affects a client matter",
      "It is acceptable if the trainee’s work improves"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code requires fair and respectful treatment of colleagues and, for managers, a duty to challenge behaviour that falls below this standard.",
      whyWrong: [
        "Professional conduct obligations can apply to workplace behaviour.",
        "—",
        "The obligation is not limited to client impact.",
        "Improvement does not justify bullying."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 2: Dispute resolution (tampering with evidence)",
    q: "During litigation, your client suggests removing a damaging paragraph from a document before disclosure. Which is most accurate under the Code?",
    choices: [
      "Acceptable if the paragraph is embarrassing rather than legally relevant",
      "Acceptable if you do not personally edit the document",
      "Prohibited: you must not misuse or tamper with evidence or attempt to do so",
      "Acceptable if you later disclose the original version"
    ],
    correct: 2,
    explain: {
      whyRight:
        "In dispute resolution, the Code expressly prohibits misusing or tampering with evidence or attempting to do so.",
      whyWrong: [
        "Embarrassment is not a justification for tampering.",
        "You cannot avoid responsibility by having someone else do it.",
        "—",
        "Later disclosure does not cure deliberate tampering."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 2: Dispute resolution (influencing witnesses)",
    q: "You tell a witness, 'If you soften your evidence, the case will be easier for everyone.' Which is most accurate under the Code?",
    choices: [
      "Permitted as long as you do not tell them to lie",
      "Permitted if the witness is your client",
      "Prohibited: you must not seek to influence the substance of evidence",
      "Permitted if the other side is doing the same"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code prohibits seeking to influence the substance of evidence, including persuading witnesses to change their evidence.",
      whyWrong: [
        "Influencing substance can breach the Code even without explicit instructions to lie.",
        "Whether the witness is your client does not permit improper influence.",
        "—",
        "Another party’s misconduct does not justify yours."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 2: Dispute resolution (benefits to witnesses)",
    q: "You offer a witness a bonus if your client wins and the witness’s evidence is 'helpful'. Which is most accurate under the Code?",
    choices: [
      "Permitted if disclosed to the court",
      "Permitted if the witness is an expert",
      "Prohibited: you must not offer benefits to witnesses dependent on evidence or outcome",
      "Permitted if paid by the client not the solicitor"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code prohibits providing or offering any benefit to witnesses dependent upon the nature of their evidence or the outcome of the case.",
      whyWrong: [
        "Disclosure does not make it acceptable.",
        "Experts are still witnesses; outcome-dependent benefits are prohibited.",
        "—",
        "Who pays does not change the prohibition."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 2: Dispute resolution (properly arguable assertions)",
    q: "You plan to allege fraud in pleadings with no evidence, hoping disclosure will 'turn something up'. Under the Code, which is most accurate?",
    choices: [
      "Acceptable if your client insists",
      "Acceptable if you phrase it as 'it is suspected'",
      "Not acceptable: you should only put forward statements that are properly arguable",
      "Acceptable if it is tactically useful"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code requires that assertions/submissions to the court or others must be properly arguable.",
      whyWrong: [
        "Client pressure does not justify improper allegations.",
        "Labeling something as a suspicion does not cure lack of a proper arguable basis.",
        "—",
        "Tactical benefit is not a justification."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 2: Dispute resolution (court orders/contempt)",
    q: "You miss a court-ordered deadline to serve evidence because you were busy on another matter. Under the Code, which is most accurate?",
    choices: [
      "It is acceptable if the delay is short",
      "It is acceptable if the client did not complain",
      "Potential breach: you must comply with court orders and not place yourself in contempt",
      "It is acceptable if you later apologise to the opponent"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code requires compliance with court orders placing obligations on you and avoiding conduct that places you in contempt of court.",
      whyWrong: [
        "Short delay can still breach duties depending on circumstances.",
        "Client silence does not remove court obligations.",
        "—",
        "Apologising may mitigate but does not make non-compliance acceptable."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 2: Dispute resolution (wasting court time)",
    q: "You file repetitive applications with little prospect of success purely to pressure the opponent into settlement. Under the Code, which is most accurate?",
    choices: [
      "Acceptable as robust litigation strategy",
      "Acceptable if the client is funding the litigation",
      "Potential breach: you must not waste the court’s time",
      "Acceptable if the opponent is unrepresented"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code specifically states you must not waste the court’s time; tactical abuse of applications can breach this.",
      whyWrong: [
        "Robustness is not a licence to abuse process.",
        "Funding does not justify wasting court resources.",
        "—",
        "Opponent vulnerability increases risk of unfair advantage, not justification."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 2: Dispute resolution (duty to draw attention to relevant law/irregularities)",
    q: "You become aware of a binding statutory provision that undermines your client’s case, and the opponent has overlooked it. Under the Code, which is most accurate?",
    choices: [
      "You should keep quiet because it harms your client",
      "You must draw the court’s attention to relevant cases/statutes or procedural irregularities likely to have a material effect",
      "You only need to mention it if the judge asks",
      "You can ignore it if the opponent is represented"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code requires drawing the court’s attention to relevant cases/statutory provisions or procedural irregularities you are aware of that are likely to have a material effect.",
      whyWrong: [
        "You cannot withhold material legal authorities from the court on that basis.",
        "—",
        "The obligation is not limited to answering direct questions.",
        "Representation status does not remove the duty."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 3: Service and competence (client instructions)",
    q: "A relative gives you instructions on behalf of an elderly client, but you suspect the client does not agree. Under the Code, what should you do?",
    choices: [
      "Proceed because the relative is paying",
      "Proceed but note your concerns on file",
      "Do not act unless you have satisfied yourself the instructions represent the client’s wishes",
      "Act only if the relative signs an indemnity"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You should act only on instructions from the client (or someone properly authorised). If you suspect instructions do not represent the client’s wishes, you must not act unless satisfied they do.",
      whyWrong: [
        "Payment does not establish authority or client wishes.",
        "A file note is not sufficient if you still suspect instructions are not the client’s wishes.",
        "—",
        "An indemnity does not cure lack of proper instructions."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 3: Service and competence (competent and timely service)",
    q: "You take on a matter outside your expertise and miss a critical deadline because you didn’t know the procedure. Under the Code, which is most accurate?",
    choices: [
      "It is acceptable if you tried your best",
      "It is acceptable if the client accepted the risk",
      "Potential breach: you must ensure service is competent and delivered in a timely manner",
      "It is acceptable if you refund your fees"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code requires competent service delivered in a timely manner; lack of competence that causes delay/missed deadlines can breach this duty.",
      whyWrong: [
        "Good intentions do not replace competence requirements.",
        "Client agreement does not remove your regulatory obligation to provide competent service.",
        "—",
        "Refunding fees may address loss but does not undo the breach."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 3: Service and competence (maintaining competence)",
    q: "Which statement best reflects your obligation to keep skills up to date?",
    choices: [
      "Only trainees must maintain up-to-date skills",
      "You must maintain your competence and keep professional knowledge and skills up to date",
      "Competence is assumed once qualified and does not require ongoing steps",
      "Only litigation lawyers must keep up to date"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code requires you to maintain competence to carry out your role and keep professional knowledge and skills up to date.",
      whyWrong: [
        "The obligation applies to all regulated individuals, not just trainees.",
        "Competence is an ongoing requirement.",
        "—",
        "It applies across all practice areas."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 3: Service and competence (client needs/circumstances)",
    q: "A client has limited English and appears confused about the advice. Under the Code, which is most accurate?",
    choices: [
      "You can proceed as long as the engagement letter was sent",
      "You must consider and take account of the client’s attributes, needs and circumstances",
      "You should only communicate in legal terminology to avoid ambiguity",
      "You can rely on the client’s friend to interpret without checking"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code requires you to consider and take account of your client’s attributes, needs and circumstances.",
      whyWrong: [
        "An engagement letter alone is not enough if the client cannot properly understand.",
        "—",
        "Overly technical language may worsen understanding; the duty is to adapt appropriately.",
        "You must ensure communication is effective and appropriate; unverified informal interpretation can be risky."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 3: Service and competence (supervision/accountability)",
    q: "A paralegal drafts advice that you sign off without reading, and it contains serious errors. Under the Code, which is most accurate?",
    choices: [
      "You are not responsible because the paralegal drafted it",
      "You remain accountable and must effectively supervise work being done for clients",
      "Supervision is optional if the paralegal is experienced",
      "Responsibility lies solely with the firm’s COLP"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where you supervise or manage others providing legal services, you remain accountable for work carried out through them and must effectively supervise work for clients.",
      whyWrong: [
        "Delegation does not remove accountability.",
        "—",
        "Experience does not make supervision optional; it depends on risk and role.",
        "COLP oversight does not remove your personal responsibility."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 4: Client money and assets (financial benefit)",
    q: "A third party offers you a commission for placing a client’s funds into a particular product, and you keep it without telling the client. Under the Code, which is most accurate?",
    choices: [
      "Acceptable if the commission is small",
      "Acceptable if it does not affect your advice",
      "Potential breach: you must properly account to clients for any financial benefit received as a result of their instructions",
      "Acceptable if your firm policy allows it"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code requires you to properly account to clients for any financial benefit you receive as a result of their instructions (unless they have agreed otherwise).",
      whyWrong: [
        "Size does not remove the duty to account.",
        "Independence of advice does not remove the duty to account.",
        "—",
        "Firm policy cannot override the Code."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 4: Client money and assets (safeguarding)",
    q: "You leave signed transfer forms and title deeds unattended on an open desk overnight. Under the Code, which is most accurate?",
    choices: [
      "No issue if the office is locked",
      "No issue if you trust your colleagues",
      "Potential breach: you must safeguard money and assets entrusted to you by clients and others",
      "Only client money is protected, not documents"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code requires safeguarding money and assets entrusted by clients and others; this includes protecting client assets (including documents) from loss or misuse.",
      whyWrong: [
        "Security measures matter, but leaving assets exposed can still be a safeguarding failure.",
        "Trust is not a control.",
        "—",
        "The duty is to safeguard money and assets, not money alone."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 4: Client money and assets (personal holding of client money)",
    q: "A client asks to transfer settlement money into your personal bank account 'just for one day' to help them. Under the Code, which is most accurate?",
    choices: [
      "Permitted if the client consents in writing",
      "Permitted if you keep a clear record",
      "Not permitted except in limited circumstances allowed by the regulations; generally you must not personally hold client money",
      "Permitted if it helps the client avoid bank charges"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code says you do not personally hold client money save as permitted under the relevant regulatory exception; client consent alone is not a general permission.",
      whyWrong: [
        "Client consent does not create a general exception.",
        "Record-keeping does not make it permissible.",
        "—",
        "Practical benefit does not override the rule."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 5: Referrals/introducers (disclosure of interests)",
    q: "You refer a client to a financial adviser you partly own but say nothing about your interest. Under the Code, which is most accurate?",
    choices: [
      "Acceptable if the adviser is reputable",
      "Acceptable if the client benefits",
      "Potential breach: clients must be informed of any financial or other interest in the referral",
      "Acceptable if the interest is less than 10%"
    ],
    correct: 2,
    explain: {
      whyRight:
        "For referrals/introducers/fee sharing, the Code requires informing clients of any financial or other interest you/your business has in referring them.",
      whyWrong: [
        "Reputation does not remove the disclosure duty.",
        "Client benefit does not remove the disclosure duty.",
        "—",
        "No percentage threshold is stated in the Code for disclosure."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 5: Referrals/introducers (fee sharing in writing)",
    q: "Your firm has an informal handshake arrangement to share fees with an introducer, and you do not put it in writing. Under the Code, which is most accurate?",
    choices: [
      "Acceptable if both parties remember the terms",
      "Acceptable if the client is told about the arrangement",
      "Not compliant: the fee sharing agreement must be in writing",
      "Acceptable if the introducer is not regulated"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code requires that the fee sharing agreement is in writing.",
      whyWrong: [
        "Memory is not a substitute for a written agreement.",
        "Client information is required, but the Code also requires the agreement to be in writing.",
        "—",
        "Regulatory status of the introducer does not remove the writing requirement."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 5: Referrals (criminal proceedings prohibition)",
    q: "An introducer offers you a payment for each client they send who is facing criminal proceedings. Under the Code, which is most accurate?",
    choices: [
      "Permitted if fully disclosed to the client",
      "Permitted if the client signs a waiver",
      "Prohibited: you must not receive or make payments relating to referrals for clients who are the subject of criminal proceedings",
      "Permitted if paid after the case ends"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code states you do not receive payments relating to a referral or make payments to an introducer in respect of clients who are the subject of criminal proceedings.",
      whyWrong: [
        "Disclosure does not override the prohibition.",
        "A waiver does not override the prohibition.",
        "—",
        "Timing does not avoid the rule if it relates to the referral."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 5: Separate businesses (informed consent)",
    q: "You want to split a client’s matter between your firm and a separate, unregulated business you own. Under the Code, which is most accurate?",
    choices: [
      "Permitted without telling the client if it reduces cost",
      "Permitted if you supervise the separate business",
      "Permitted only where the client has given informed consent",
      "Never permitted in any circumstances"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code allows referral/recommendation/introduction to a separate business (or division of the matter) only where the client has given informed consent.",
      whyWrong: [
        "Cost reduction does not remove the informed consent requirement.",
        "Supervision does not remove the informed consent requirement.",
        "—",
        "It is not an absolute ban; it is conditional on informed consent."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 5: Other business requirements (use of 'solicitors' name)",
    q: "You become a director of an unregulated company called 'High Street Solicitors Ltd'. Under the Code, which is most accurate?",
    choices: [
      "Permitted if you are not providing reserved legal activities there",
      "Permitted if the company website has a disclaimer",
      "Not permitted unless the business is an authorised body",
      "Permitted if the company only does consultancy"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code restricts being a manager/employee/member/interest holder of a business whose name includes 'solicitors' or suggests it is a solicitors’ firm, unless it is an authorised body.",
      whyWrong: [
        "The restriction focuses on the business identity/name, not only reserved activity.",
        "A disclaimer does not necessarily cure the prohibited setup.",
        "—",
        "Consultancy still may suggest regulation; the rule is about the name/suggestion unless authorised."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 6: Conflicts (own interest conflict)",
    q: "You are asked to advise a client on whether to sue a company you own shares in. Under the Code, which is most accurate?",
    choices: [
      "You can act if you disclose your shareholding and the client agrees",
      "You can act if your shares are held through a fund",
      "You must not act if there is an own interest conflict or a significant risk of one",
      "You can act if you charge a reduced fee"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code states you do not act if there is an own interest conflict or a significant risk of such a conflict.",
      whyWrong: [
        "Disclosure/consent does not automatically permit acting where an own interest conflict exists under the Code’s wording.",
        "Indirect holding may still create an own interest conflict depending on facts.",
        "—",
        "Discounts do not remove conflicts."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 6: Conflicts (acting for multiple clients)",
    q: "You act for two clients in the same matter whose interests conflict. Under the Code, when can you still act?",
    choices: [
      "Never: acting for both is always prohibited",
      "Only if both clients are wealthy and sophisticated",
      "Only if they have a substantially common interest or are competing for the same objective AND all give informed written consent AND safeguards are used where appropriate AND it is reasonable to act",
      "Only if your firm has a conflict waiver clause in its standard terms"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code allows acting despite a conflict only in limited situations (substantially common interest or competing for same objective) and only if informed written consent is obtained, safeguards are applied where appropriate, and it is reasonable to act.",
      whyWrong: [
        "It is not an absolute prohibition; there are limited exceptions.",
        "Sophistication does not replace the Code’s conditions.",
        "—",
        "Standard terms cannot replace genuine informed consent and reasonableness."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 6: Confidentiality (basic rule)",
    q: "A journalist calls asking whether you act for a high-profile client. The client has not consented. Under the Code, which is most accurate?",
    choices: [
      "You can confirm you act, but not give details",
      "You can confirm if it helps your marketing",
      "You must keep the affairs of current and former clients confidential unless disclosure is required or permitted by law or the client consents",
      "You can confirm if the information is widely suspected"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code requires confidentiality of current and former clients’ affairs unless disclosure is required/permitted by law or the client consents.",
      whyWrong: [
        "Even confirming you act can be a breach if it is confidential.",
        "Marketing does not justify disclosure.",
        "—",
        "Speculation does not equal permission to disclose."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 6: Disclosure to client (material information)",
    q: "You learn a fact that is material to your client’s transaction, but telling them would make them pull out and you would lose fees. Under the Code, which is most accurate?",
    choices: [
      "You can keep it quiet to protect your fees",
      "You should tell them only if asked directly",
      "You must make the client aware of all information material to the matter, unless a listed exception applies",
      "You can keep it quiet if it benefits the client"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Code requires you to make the client aware of all information material to the matter, unless an exception applies (eg legal prohibition, informed consent in writing to non-disclosure, serious injury risk, or privileged mistakenly disclosed document).",
      whyWrong: [
        "Your fees are irrelevant and create an own-interest issue.",
        "The duty is proactive; not limited to direct questions.",
        "—",
        "You cannot decide unilaterally to withhold material information outside the exceptions."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 6: Privileged mistakenly disclosed document",
    q: "The opponent mistakenly emails you a privileged memo that is material to your client’s case. Under the Code’s disclosure-to-client rule, which is most accurate?",
    choices: [
      "You must always show it to your client because it is material",
      "You may be prevented from disclosing it to your client because it is privileged and you only know of it due to mistaken disclosure",
      "You can use it freely as long as you do not quote it",
      "You should post it to the court to be transparent"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code’s rule on telling clients material information has an exception where the information is in a privileged document known to you only because it was mistakenly disclosed.",
      whyWrong: [
        "Materiality alone does not override the privileged mistaken-disclosure exception.",
        "—",
        "Using privileged material can raise serious issues beyond the Code’s disclosure rule.",
        "You should not disseminate privileged material in that way."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 7: Cooperation and accountability (SRA requests)",
    q: "The SRA asks you for documents and explanations about a complaint. Under the Code, which is most accurate?",
    choices: [
      "You can ignore it until you receive a formal notice",
      "You should respond promptly and provide full and accurate explanations, information and documents",
      "You can provide partial information to protect your reputation",
      "You only have to cooperate if your firm is being investigated, not you personally"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code requires prompt response to the SRA and providing full and accurate explanations, information and documents requested.",
      whyWrong: [
        "The duty is to respond promptly; delaying without justification is risky.",
        "You must be full and accurate, not selective.",
        "—",
        "Individuals are personally accountable and must cooperate."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 7: Reporting serious breaches",
    q: "You discover credible facts suggesting another solicitor has committed a serious breach of regulatory arrangements. Under the Code, which is most accurate?",
    choices: [
      "You should wait until a client complains",
      "You should report promptly to the SRA (or another approved regulator as appropriate) if you reasonably believe it is capable of amounting to a serious breach",
      "You should only report if you have absolute proof",
      "You should report only if your COLP tells you to"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code requires prompt reporting where you reasonably believe facts/matters are capable of amounting to a serious breach (and also requires informing the SRA of matters that should be brought to its attention).",
      whyWrong: [
        "Reporting is not dependent on a client complaint.",
        "You do not need absolute proof; it is a reasonable belief threshold.",
        "—",
        "You may report via COLP/COFA where appropriate, but the obligation is not conditional on their permission."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 7: Things going wrong (openness with clients)",
    q: "You make an error that causes the client financial loss. Under the Code, which is most accurate?",
    choices: [
      "You should avoid telling the client until you know if they notice",
      "You must be honest and open with the client; put matters right if possible and explain what happened and the likely impact",
      "You should only disclose if the client asks",
      "You can disclose only after your insurer approves"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code requires honesty and openness with clients if things go wrong, and (if loss/harm occurs) to put matters right if possible and explain fully and promptly what happened and likely impact.",
      whyWrong: [
        "Concealment conflicts with the duty of openness.",
        "—",
        "The duty is proactive and prompt.",
        "Insurance issues may need managing, but do not justify withholding required client information."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 8: Complaints handling (time of engagement)",
    q: "At the start of a retainer, what information must clients be given in writing under the Code’s complaints handling rules?",
    choices: [
      "Only the firm’s hourly rate",
      "Their right to complain, how and to whom to complain, and any right to complain to the Legal Ombudsman and when",
      "Only the solicitor’s qualifications",
      "Only the client’s right to sue for negligence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code requires clients to be informed in writing at the time of engagement about their right to complain, how/whom to complain to, and any right to complain to the Legal Ombudsman and when.",
      whyWrong: [
        "Rates are separate pricing information; complaints info is specifically required.",
        "—",
        "Qualifications do not replace complaints information.",
        "The Code focuses on complaints procedure and Legal Ombudsman rights, not civil claims explanations."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 8: Complaints handling (8-week rule and ADR info)",
    q: "A client complains. After 8 weeks, the complaint is not resolved to the client’s satisfaction. Under the Code, which is most accurate?",
    choices: [
      "You can close the file without further communication",
      "You must inform the client in writing about their right to go to the Legal Ombudsman and provide contact details; and if your procedure is exhausted, give ADR body details and say whether you agree to use it",
      "You only need to respond if the client threatens court",
      "You can charge the client an admin fee for the complaints process"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code requires written information after 8 weeks if unresolved (Legal Ombudsman route, time frames and contact details), and—if procedure exhausted—ADR body details and whether you agree to use it.",
      whyWrong: [
        "The Code requires specific written information.",
        "—",
        "Client threats are not the trigger; the 8-week unresolved position is.",
        "Complaints must be dealt with free of charge."
      ]
    }
  },
  {
    topic: "SRA Code of Conduct — 8: Client information and publicity (pricing/costs)",
    q: "Which statement best reflects your obligation about costs information under the Code?",
    choices: [
      "You only need to give a cost estimate at the end of the matter",
      "You must give the best possible information about pricing and, at engagement and when appropriate as the matter progresses, the likely overall cost and any costs incurred",
      "You can refuse to discuss costs until the client signs",
      "You should give a single fixed quote even if it is unrealistic"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Code requires the best possible pricing information and updates at engagement and when appropriate as the matter progresses about likely overall cost and costs incurred.",
      whyWrong: [
        "Costs info is required early and updated when appropriate, not just at the end.",
        "—",
        "Refusing to discuss costs conflicts with informed decision-making.",
        "Unrealistic quotes risk being misleading."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Ethics | Chapter 2 | SRA Code of Conduct",
    subtitle: "Fairness, undertakings, conflicts, and client care duties.",
    questions: questions
  };
})();
  
