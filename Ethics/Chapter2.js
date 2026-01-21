(() => {
  const questions = [
  {
    topic: "SRA Code of Conduct — structure (individual vs firm)",
    q: "Which statement best reflects how the SRA Codes of Conduct are organised under the SRA Standards and Regulations?",
    choices: [
      "There is only one Code of Conduct that applies identically to individuals and firms",
      "There is a Code for individuals (solicitors/RELs/RFLs) and a separate Code for firms, each addressing different responsibilities",
      "The Code of Conduct applies only to solicitors in court work; transactional work is excluded",
      "The Codes are optional guidance and apply only if the Principles do not cover the issue"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The framework includes a Code of Conduct for individuals and a separate Code of Conduct for firms, reflecting different ethical and systems-based duties.",
      whyWrong: [
        "There are separate Codes for individuals and for firms.",
        "—",
        "The Codes apply across practice areas, not only disputes.",
        "The Codes are part of the binding regulatory framework, not optional guidance."
      ]
    }
  },
  {
    topic: "Code (Solicitors) — undertakings",
    q: "You give an undertaking to send a signed document to the other side within 7 days. You then forget and send it 3 weeks later without explanation. What is the most accurate Code-based issue?",
    choices: [
      "No issue: undertakings are informal and only binding if in writing",
      "Likely breach: undertakings must be performed within the agreed timescale (or a reasonable time if none was agreed)",
      "No issue: delay is acceptable as long as your client benefits",
      "Only the firm is responsible for undertakings; individuals are not"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Codes treat undertakings as a serious professional obligation that must be performed within the agreed timescale (or a reasonable time where none is agreed).",
      whyWrong: [
        "Undertakings are treated as binding professional commitments.",
        "—",
        "Client advantage does not excuse failure to perform an undertaking properly.",
        "Individuals can be responsible for undertakings they give."
      ]
    }
  },
  {
    topic: "Code — fairness (taking unfair advantage)",
    q: "You notice an unrepresented party has misunderstood a key deadline. You decide not to correct it because it will give your client a tactical advantage. Which is the best Code analysis?",
    choices: [
      "Acceptable: your only duty is to maximise your client’s tactical advantage",
      "Likely breach: the Code expects you not to take unfair advantage of others",
      "Acceptable if you do not make any false statements",
      "Acceptable if the unrepresented party is not your client"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Codes emphasise maintaining trust and acting fairly, including not taking unfair advantage of clients or others.",
      whyWrong: [
        "Client best interests does not justify unfair advantage or sharp practice.",
        "—",
        "Avoiding literal lies does not make unfair advantage acceptable.",
        "Duties of fairness can apply even when dealing with non-clients."
      ]
    }
  },
  {
    topic: "Code — discrimination",
    q: "A partner tells you to stop acting for clients from a particular ethnic group because they are 'too much hassle'. What is the most accurate regulatory analysis?",
    choices: [
      "Permissible: firms can choose clients for any reason",
      "Likely breach: the Codes prohibit unfair discrimination affecting professional relationships and service delivery",
      "Permissible if the decision is framed as a commercial choice",
      "Only an employment-law issue, not a regulatory one"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Codes require maintaining trust and acting fairly, including not unfairly discriminating in professional relationships and the provision of services.",
      whyWrong: [
        "Firms have discretion, but not to discriminate unfairly in a way prohibited by the Codes.",
        "—",
        "A commercial label does not cure discriminatory conduct.",
        "It can be both a regulatory and an equality-law issue."
      ]
    }
  },
  {
    topic: "Conflicts — core rule",
    q: "You are asked to act for Buyer and Seller in the same transaction. Buyer wants the lowest price; Seller wants the highest. What is the best starting point under the Codes?",
    choices: [
      "Act for both as long as they consent after the transaction completes",
      "Assume a conflict (or significant risk of conflict) and only proceed if a permitted exception applies and safeguards are met",
      "Act for both because it is more efficient and saves costs",
      "Act for both if you promise to be neutral"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The starting point is identifying a conflict (or significant risk) and only proceeding where the Codes permit and safeguards/conditions are met.",
      whyWrong: [
        "Consent timing does not solve a conflict; the analysis must be done before acting.",
        "—",
        "Efficiency/cost-saving does not override conflicts duties.",
        "Neutrality does not remove the underlying conflict of interest."
      ]
    }
  },
  {
    topic: "Conflicts — significant risk",
    q: "You acted for Client A last year. You are now asked to act for Client B in a matter where B’s objectives could harm A’s confidential interests. Under the Codes, what is the key issue to consider first?",
    choices: [
      "Whether Client B is willing to pay higher fees",
      "Whether there is a conflict or a significant risk of conflict between current and former clients, and whether you can lawfully proceed",
      "Whether the matter is contentious or non-contentious",
      "Whether you can complete the work quickly"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Codes require you to identify conflicts (including those involving former clients) and significant risks of conflict, then decide if any permitted basis to proceed exists.",
      whyWrong: [
        "Fees are irrelevant to the conflicts analysis.",
        "—",
        "Contentious vs non-contentious may affect detail, but conflicts analysis comes first.",
        "Speed is irrelevant to conflicts compliance."
      ]
    }
  },
  {
    topic: "Confidentiality — general rule",
    q: "A journalist asks you to confirm you act for a celebrity client. The client has not consented. Which is the most accurate statement under the Codes?",
    choices: [
      "You may confirm representation because it is not legal advice",
      "You must keep the client’s affairs confidential unless disclosure is required/permitted by law or the client consents",
      "You may disclose if the journalist already suspects it",
      "You may disclose if it helps the firm’s marketing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Codes impose a duty of confidentiality over current and former clients’ affairs unless disclosure is required/permitted by law or the client consents.",
      whyWrong: [
        "Client affairs include who you act for in many contexts; confidentiality is not limited to advice content.",
        "—",
        "Third-party suspicion does not create permission to disclose.",
        "Marketing benefit does not justify breaching confidentiality."
      ]
    }
  },
  {
    topic: "Confidentiality — regulator/ombudsman tension",
    q: "The Legal Ombudsman requests information about a complaint. Your client refuses consent to disclose. Which is the best analysis?",
    choices: [
      "You must always refuse because confidentiality is absolute",
      "You must consider confidentiality, but also any legal/regulatory obligation to cooperate with the Ombudsman, disclosing only what is required/permitted",
      "You may disclose everything to defend yourself because complaints are exempt",
      "You should ignore the request unless a court order is produced"
    ],
    correct: 1,
    explain: {
      whyRight:
        "There can be competing duties: confidentiality vs obligations to cooperate with the Legal Ombudsman/regulatory arrangements. The correct approach is to identify what is required/permitted and disclose no more than necessary.",
      whyWrong: [
        "Confidentiality is strong but not always absolute; law/regulatory obligations can permit/require disclosure.",
        "—",
        "Complaints do not give you a blank cheque to disclose everything.",
        "You must engage appropriately with the request and the applicable rules."
      ]
    }
  },
  {
    topic: "Code — service and competence",
    q: "You take on a specialist tax matter you do not understand and do not seek supervision or refer it. The client suffers loss. What is the most accurate Code issue?",
    choices: [
      "No issue if the client signed a disclaimer",
      "Likely breach: failing to provide a proper standard of service/competence and failing to ensure the work is competently carried out",
      "No issue if you worked hard and tried your best",
      "Only a negligence issue; ethics is irrelevant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Codes expect competent service. Taking on work outside competence without proper supervision/support risks regulatory breach as well as civil liability.",
      whyWrong: [
        "A disclaimer rarely cures lack of competence/supervision for regulatory purposes.",
        "—",
        "Effort does not replace competence and proper safeguards.",
        "It can be both a negligence and a regulatory/ethics issue."
      ]
    }
  },
  {
    topic: "Firm Code — governance and controls",
    q: "A firm repeatedly misses limitation deadlines because it has no diary system, no training, and no supervision. Which is the best firm-level regulatory analysis?",
    choices: [
      "Only the individual fee earners are responsible; the firm has no duty here",
      "Likely breach: the firm must have effective governance, systems and controls to ensure compliance and competent service delivery",
      "No breach if clients are compensated afterwards",
      "No breach if the firm is small"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The firm Code focuses on systems and controls—weak supervision/governance leading to repeated failures is a classic firm-level breach scenario.",
      whyWrong: [
        "Firms have independent duties to maintain effective systems and supervision.",
        "—",
        "Compensation may mitigate harm but does not remove regulatory failings.",
        "Firm size does not remove the duty to have effective controls."
      ]
    }
  },
  {
    topic: "Code — undertakings (wording matters)",
    q: "You email: 'We will definitely pay the outstanding search fees by Friday.' The other side relies on it as an undertaking. Which is the most accurate risk point?",
    choices: [
      "There is no risk because only documents titled 'Undertaking' count",
      "Risk: you may have created an undertaking by clear commitment, so you must treat it as binding and comply",
      "No risk if your client later refuses to pay",
      "Risk only arises if the commitment was made in court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Undertakings can arise from clear professional commitments. If your wording amounts to an undertaking, it must be performed within the promised timeframe.",
      whyWrong: [
        "Formality/title is not decisive; substance and reliance matter.",
        "—",
        "Client refusal does not automatically excuse breach of an undertaking you gave.",
        "Undertakings are not limited to court settings."
      ]
    }
  },
  {
    topic: "Code — acting fairly (abuse of position)",
    q: "A vulnerable client is pressured into signing an engagement letter they do not understand. You notice but proceed anyway. Which is the best Code issue?",
    choices: [
      "No issue if the fee is reasonable",
      "Likely breach: taking unfair advantage/abusing position and failing to act fairly toward the client",
      "No issue if the client appears calm",
      "Only a consumer-law issue"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Codes emphasise acting fairly and not abusing your position or taking unfair advantage of clients, particularly where vulnerability is apparent.",
      whyWrong: [
        "A reasonable fee does not cure unfair pressure or abuse of position.",
        "—",
        "Apparent calm does not remove the duty to ensure fairness and understanding.",
        "It can be a regulatory issue as well as other legal issues."
      ]
    }
  },
  {
    topic: "Code — honesty vs sharp practice",
    q: "You avoid making false statements but deliberately craft correspondence to create a misleading impression. What is the best regulatory lens?",
    choices: [
      "Acceptable because it is not a lie",
      "Potential breach: honesty/integrity expectations can be engaged by misleading impressions and sharp practice",
      "Acceptable if it helps your client settle",
      "Acceptable if the opponent has solicitors"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Codes are concerned with fair dealing and trust; misleading impressions can engage honesty/integrity expectations even without an outright lie.",
      whyWrong: [
        "Regulatory standards go beyond literal truthfulness in many situations.",
        "—",
        "Settlement objectives do not justify misleading conduct.",
        "Opponent representation does not permit sharp practice."
      ]
    }
  },
  {
    topic: "Code — confidentiality (former clients)",
    q: "A former client’s information would help your current client in a negotiation. The former client has not consented. What is the best Code analysis?",
    choices: [
      "You may use it because the retainer ended",
      "You must keep former clients’ affairs confidential unless disclosure is required/permitted by law or the former client consents",
      "You may use it if it will not be discovered",
      "You may use it if it improves your fee prospects"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Confidentiality extends to former clients. You cannot use/disclose it unless legally permitted/required or consent is obtained.",
      whyWrong: [
        "Confidentiality does not end with the retainer.",
        "—",
        "Risk of discovery is irrelevant to compliance.",
        "Commercial benefit is irrelevant."
      ]
    }
  },
  {
    topic: "Firm Code — client complaints",
    q: "A firm has no complaints policy, no named complaints handler, and routinely ignores written complaints. What is the best firm-level analysis?",
    choices: [
      "No issue as long as the firm offers refunds informally",
      "Likely breach: firms must have appropriate systems for handling complaints and regulatory accountability",
      "Only the Legal Ombudsman deals with complaints; the SRA has no interest",
      "No issue if the firm is very busy"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Complaints handling and accountability are firm-level system obligations; ignoring complaints is a classic compliance failure.",
      whyWrong: [
        "Informal refunds do not replace having proper systems and responsiveness.",
        "—",
        "The SRA can regulate conduct and systems even where LeO handles consumer redress.",
        "Workload is not an excuse for non-compliance."
      ]
    }
  },
  {
    topic: "Code — supervision (individual duty to seek help)",
    q: "You are a trainee handling a complex matter alone. You realise you are out of depth but stay silent to look competent. What is the best analysis?",
    choices: [
      "Acceptable: juniors are expected to learn by doing",
      "Potential breach: you should seek supervision/assistance to ensure competent service and avoid harm",
      "Acceptable if no complaint is made",
      "Acceptable if the client is paying a reduced fee"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A proper standard of service/competence often requires seeking supervision where needed; silence can lead to preventable errors and breaches.",
      whyWrong: [
        "Learning is expected, but not at the cost of competence and client protection.",
        "—",
        "Absence of complaint does not equal compliance.",
        "Reduced fees do not justify incompetent work."
      ]
    }
  },
  {
    topic: "Code — conflicts (informed consent limits)",
    q: "You identify a conflict and both clients say they 'consent'. What is the most accurate next step?",
    choices: [
      "Proceed automatically because consent cures all conflicts",
      "Check whether the Codes permit acting despite the conflict (limited exceptions) and whether safeguards/conditions are met",
      "Proceed if the matter is low value",
      "Proceed if you disclose the conflict only to the paying client"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Consent is not enough by itself. You must check whether a permitted exception exists and whether conditions/safeguards are satisfied.",
      whyWrong: [
        "Conflicts are not always consentable.",
        "—",
        "Value does not determine whether you may act.",
        "Both affected clients must be treated properly; selective disclosure is improper."
      ]
    }
  },
  {
    topic: "Code — acting fairly (third parties)",
    q: "You threaten criminal proceedings to gain civil leverage when you have no proper basis to do so. Which is the best Code analysis?",
    choices: [
      "Acceptable negotiation tactic",
      "Potential breach: improper pressure/unfair conduct undermining trust and fairness",
      "Acceptable if it speeds up settlement",
      "Acceptable if your client instructs it"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Improper threats and unfair pressure can breach the Codes’ emphasis on trust, fairness, and proper professional conduct.",
      whyWrong: [
        "Negotiation does not justify improper intimidation tactics.",
        "—",
        "Speed/settlement does not make it acceptable.",
        "Client instructions do not justify misconduct."
      ]
    }
  },
  {
    topic: "Code — confidentiality vs 'helping' a friend",
    q: "A friend asks you if their ex is your client and how the case is going. You disclose small details 'off the record'. What is the best analysis?",
    choices: [
      "Permissible if you do not disclose documents",
      "Likely breach: confidentiality covers client affairs and informal disclosures can still breach the Code",
      "Permissible because it is outside work hours",
      "Permissible if your friend promises secrecy"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Confidentiality applies to client affairs; informal 'small' disclosures can still be breaches, regardless of time or setting.",
      whyWrong: [
        "Confidentiality is not limited to documents.",
        "—",
        "Out-of-hours conduct can still be regulated.",
        "A promise of secrecy does not create client consent or legal permission."
      ]
    }
  },
  {
    topic: "Firm Code — outsourcing and contractors",
    q: "A firm outsources work to a contractor but provides no oversight; errors and breaches occur. What is the best firm-level issue?",
    choices: [
      "No issue: contractors are solely responsible",
      "Likely breach: firms must ensure those they employ/contract with do not cause or substantially contribute to breaches and are properly supervised",
      "No issue if the contract contains an indemnity clause",
      "No issue if clients are unaware of outsourcing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The firm Code focuses on systems/controls and responsibility for those it employs or contracts with, including supervision and compliance.",
      whyWrong: [
        "Firms retain regulatory responsibility for systems and oversight.",
        "—",
        "Indemnities do not replace regulatory compliance.",
        "Non-disclosure does not cure lack of controls."
      ]
    }
  },
  {
    topic: "Code — honesty in communications",
    q: "You tell an opponent you have authority to settle when you do not, to pressure them. What is the best analysis?",
    choices: [
      "Acceptable because it is common in negotiation",
      "Likely breach: misleading statements in professional communications engage honesty/integrity concerns",
      "Acceptable if you later obtain authority",
      "Acceptable if the opponent is aggressive"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Misrepresenting authority is misleading and risks breaching honesty/integrity expectations under the Codes.",
      whyWrong: [
        "Common practice is not a defence to regulatory breach.",
        "—",
        "Later authority does not justify earlier misleading conduct.",
        "Opponent behaviour does not justify dishonesty."
      ]
    }
  },
  {
    topic: "Code — conflicts (gift/benefit risks)",
    q: "A client offers you an expensive watch after you win their case. You accept without recording it or informing the firm. What is the best regulatory concern?",
    choices: [
      "No concern: gifts are personal",
      "Potential concern: integrity, conflicts of interest, and firm controls/recording expectations may be engaged",
      "No concern if the client is wealthy",
      "No concern if the case is finished"
    ],
    correct: 1,
    explain: {
      whyRight:
        "High-value gifts can raise integrity and conflict/independence concerns and may require firm-level controls and transparency.",
      whyWrong: [
        "Gifts can create conflicts and regulatory risk.",
        "—",
        "Client wealth is irrelevant.",
        "End of case does not remove risk of improper influence or perception."
      ]
    }
  },
  {
    topic: "Code — file and information handling",
    q: "You leave a client file on a train. Which is the best Code-based issue to spot first?",
    choices: [
      "Only a data protection issue",
      "Confidentiality and protection of client information (and potentially firm systems/training)",
      "No issue unless the media reports it",
      "No issue if you inform your supervisor verbally"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Loss of a client file is fundamentally a confidentiality/protection issue, and may also indicate firm-level training/system failings.",
      whyWrong: [
        "Data protection may also arise, but confidentiality is a central regulatory duty.",
        "—",
        "Media coverage is not the trigger for compliance.",
        "Verbal notification alone does not address the underlying duties."
      ]
    }
  },
  {
    topic: "Firm Code — culture and compliance",
    q: "A firm rewards fee earners solely for billing, ignoring repeated ethical complaints about sharp practice. What is the best firm-level analysis?",
    choices: [
      "No issue: business incentives are not regulated",
      "Potential breach: firm systems/culture can undermine compliance; governance and controls must support ethical service delivery",
      "No issue if profits rise",
      "Only an HR issue"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Firm-level obligations include governance, systems and controls that support compliance; a culture incentivising sharp practice can drive breaches.",
      whyWrong: [
        "The SRA regulates firm systems and controls that impact ethical delivery of legal services.",
        "—",
        "Profitability does not excuse compliance failures.",
        "It may be HR-related, but it is also a regulatory risk."
      ]
    }
  },
  {
    topic: "Code — conflicts (own interest)",
    q: "You act on a matter where your sibling owns shares in a counterparty, and you do not disclose it. What is the best analysis?",
    choices: [
      "No conflict because you are not the shareholder",
      "Potential own-interest conflict/significant risk; you must assess and manage under the Code (and likely disclose/avoid acting)",
      "No issue if your sibling promises not to trade shares",
      "No issue if the matter is small"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Connections creating an own-interest conflict or significant risk must be identified and dealt with under conflicts rules—often requiring non-involvement or robust safeguards where permitted.",
      whyWrong: [
        "Indirect interests can still create conflicts/significant risks.",
        "—",
        "A promise not to trade does not remove the conflict risk.",
        "Value is not the test for conflicts compliance."
      ]
    }
  },
  {
    topic: "Code — misleading by omission",
    q: "You answer a direct question with a technically true response designed to conceal a material fact. What is the best analysis?",
    choices: [
      "Acceptable because the statement is technically true",
      "Potential breach: misleading conduct can engage honesty/integrity even without literal falsity",
      "Acceptable if the other side could have asked better questions",
      "Acceptable if your client benefits"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Professional standards focus on trust and fairness; misleading by omission/half-truth can breach honesty/integrity expectations.",
      whyWrong: [
        "Technical truth does not guarantee compliance if the intent/effect is misleading.",
        "—",
        "Opponents’ questioning does not excuse misleading conduct.",
        "Client benefit is not a justification."
      ]
    }
  },
  {
    topic: "Firm Code — client money/assets (high level)",
    q: "A firm mixes client money with office money to help cashflow. Which is the best regulatory analysis at a high level?",
    choices: [
      "Permissible if the firm repays it within 30 days",
      "Serious risk: firm-level duties on client money/assets controls are engaged, and this can amount to major regulatory breach",
      "Permissible if the client is wealthy",
      "Permissible if recorded in an internal spreadsheet"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Handling client money requires strict controls; using it as 'float' is a classic serious compliance breach (and triggers accounts rules issues too).",
      whyWrong: [
        "Time-limited repayment does not make misuse acceptable.",
        "—",
        "Client wealth is irrelevant.",
        "Internal recording does not legalise misuse."
      ]
    }
  },
  {
    topic: "Code — reporting and accountability (scenario)",
    q: "You discover a colleague has been fabricating client signatures. Your manager tells you to 'keep quiet' to avoid scandal. What is the best starting point?",
    choices: [
      "Do nothing unless the client complains",
      "You must take the issue seriously and act appropriately in line with regulatory duties, including escalating within the firm and considering reporting obligations",
      "Join in so you are not singled out",
      "Only the COLP can act; you have no role"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Serious misconduct engages regulatory accountability. You should escalate appropriately and consider relevant duties to report/rectify, rather than conceal.",
      whyWrong: [
        "Waiting for a complaint is not appropriate where serious misconduct is known.",
        "—",
        "Participating compounds the misconduct.",
        "COLP has responsibilities, but individuals also have duties to act appropriately."
      ]
    }
  },
  {
    topic: "Code — professional boundaries with clients",
    q: "A client asks you to 'just sign' a statement for them because they trust you and it saves time. You know they have not read it. What is the best analysis?",
    choices: [
      "Acceptable if the statement is probably accurate",
      "Potential breach: fairness and integrity concerns; you must not facilitate improper process or take unfair advantage",
      "Acceptable if the client is experienced",
      "Acceptable if you keep a copy on file"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Facilitating a client signing unread documents can exploit vulnerability and risks improper conduct; your duty is to act fairly and with integrity.",
      whyWrong: [
        "Probability of accuracy does not justify improper process.",
        "—",
        "Experience does not remove the duty to ensure fair/proper practice.",
        "Record-keeping does not cure the underlying issue."
      ]
    }
  },
  {
    topic: "Firm Code — training and supervision",
    q: "A firm hires many paralegals, gives them targets, but provides no compliance training and minimal supervision. Errors and complaints spike. What is the best firm-level issue?",
    choices: [
      "No issue because paralegals are not solicitors",
      "Likely breach: the firm must maintain effective systems/controls and supervision to ensure compliant, competent service delivery",
      "No issue if clients sign engagement letters",
      "Only a commercial problem"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Firms must ensure their delivery model is properly supervised and controlled to comply with regulatory arrangements and provide competent services.",
      whyWrong: [
        "Firm duties extend to how services are delivered, including by non-solicitors under supervision.",
        "—",
        "Engagement letters do not substitute for supervision and training.",
        "It is commercial, but also a regulatory compliance issue."
      ]
    }
  },
  {
    topic: "Code — quick identification question",
    q: "Which issue is MOST likely to be analysed under both the individual Code and the firm Code in an SQE ethics scenario?",
    choices: [
      "A solicitor’s favourite football team",
      "A single typo in an internal draft",
      "Repeated deadline-missing caused by poor supervision and weak systems",
      "A client choosing to change solicitors mid-matter"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Repeated failures often indicate both individual competence issues and firm-level governance/supervision/control failings—SQE commonly tests both layers.",
      whyWrong: [
        "That is unrelated.",
        "A single typo rarely engages both Codes meaningfully.",
        "—",
        "Changing solicitors is generally a client choice, not automatically a regulatory breach."
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
  
