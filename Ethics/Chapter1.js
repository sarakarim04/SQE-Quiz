(() => {
  const questions = [
  {
    topic: "SRA Principles — scope & hierarchy",
    q: "Which statement best describes the status of the SRA Principles within the SRA Standards and Regulations framework?",
    choices: [
      "They are optional guidance and only relevant if a Code provision is unclear",
      "They are high-level mandatory standards that underpin the more detailed rules in the Codes",
      "They apply only to solicitors in private practice, not to firms",
      "They apply only to court work and dispute resolution"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The SRA Principles are fundamental, high-level mandatory standards that sit at the top of the ethical framework and inform the interpretation/application of the more detailed Codes of Conduct.",
      whyWrong: [
        "They are not merely optional guidance; they are mandatory principles.",
        "—",
        "They apply across regulated individuals and firms (scope is not limited in that way).",
        "They apply across all practice areas, not just litigation."
      ]
    }
  },
  {
    topic: "SRA Principles — rule of law / administration of justice",
    q: "In a litigation matter, a client asks you to conceal a relevant document that harms their case. Which Principle is most directly engaged?",
    choices: [
      "Act in the best interests of each client",
      "Uphold public trust and confidence",
      "Uphold the rule of law and proper administration of justice",
      "Encourage equality, diversity and inclusion"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Concealing relevant material to gain advantage risks undermining the proper administration of justice and the rule of law, which is a core Principle—especially in disputes.",
      whyWrong: [
        "Client best interests cannot justify undermining justice or misleading conduct.",
        "Public trust may be impacted, but the most direct Principle in litigation wrongdoing is the rule of law/administration of justice.",
        "EDI is not the primary issue on these facts."
      ]
    }
  },
  {
    topic: "SRA Principles — public trust and confidence",
    q: "A solicitor exaggerates their success rate in marketing materials to attract clients. Which Principle is most directly engaged?",
    choices: [
      "Uphold public trust and confidence in the solicitors' profession and legal services",
      "Act with independence",
      "Encourage equality, diversity and inclusion",
      "Act in the best interests of each client"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Misleading promotional claims damage public trust and confidence in the profession and legal services.",
      whyWrong: [
        "—",
        "Independence is about freedom from improper influence; not the main point here.",
        "EDI is not the main point here.",
        "Client best interests does not justify misleading the public."
      ]
    }
  },
  {
    topic: "SRA Principles — independence",
    q: "A powerful third-party funder threatens to withdraw support unless you take an aggressive step you believe is improper. Which Principle is most directly engaged?",
    choices: [
      "Act with independence",
      "Act with honesty",
      "Encourage equality, diversity and inclusion",
      "Act in the best interests of each client"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Independence requires you to exercise professional judgment and resist improper influence from third parties.",
      whyWrong: [
        "—",
        "Honesty may be relevant depending on the step, but the pressure point is improper influence.",
        "EDI is not the main issue.",
        "Best interests cannot justify improper steps; and the key issue is resisting influence."
      ]
    }
  },
  {
    topic: "SRA Principles — honesty vs integrity",
    q: "Which statement best reflects the relationship between 'honesty' and 'integrity'?",
    choices: [
      "Integrity is narrower than honesty",
      "Honesty and integrity mean exactly the same thing",
      "Integrity is broader than honesty and captures ethical standards beyond literal truthfulness",
      "Integrity only applies in dealings with the court"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Honesty is about truthfulness; integrity is broader and includes doing the right thing and avoiding sharp practice even if no direct lie is told.",
      whyWrong: [
        "Integrity is generally broader, not narrower.",
        "They overlap but are not identical.",
        "Integrity applies in all professional contexts, not only court work."
      ]
    }
  },
  {
    topic: "SRA Principles — integrity (sharp practice)",
    q: "You find a loophole to mislead an unrepresented opponent without making any statement that is literally false. Which Principle most directly addresses this?",
    choices: [
      "Act with integrity",
      "Act with honesty",
      "Encourage equality, diversity and inclusion",
      "Act in the best interests of each client"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Integrity captures broader ethical conduct, including avoiding sharp practice and exploitation even where you might avoid an outright lie.",
      whyWrong: [
        "—",
        "Honesty is narrower and focuses on truthfulness; the issue here is broader ethical conduct.",
        "EDI is not the primary issue.",
        "Client best interests does not justify taking unfair advantage."
      ]
    }
  },
  {
    topic: "SRA Principles — best interests (not absolute)",
    q: "Which statement best describes 'act in the best interests of each client'?",
    choices: [
      "It requires you to follow every client instruction",
      "It overrides duties to the court and the rule of law",
      "It applies within the boundaries of law and your professional duties, including other Principles",
      "It means you must guarantee the client will achieve their objective"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client best interests is important but must be pursued lawfully and consistently with other Principles such as honesty, integrity and the rule of law/administration of justice.",
      whyWrong: [
        "You must not follow instructions that require improper or unlawful conduct.",
        "Duties to the court/rule of law can limit what you can do for a client.",
        "No principle requires guaranteeing outcomes."
      ]
    }
  },
  {
    topic: "SRA Principles — honesty",
    q: "You tell a client that you filed a claim form yesterday when you did not, to avoid criticism. Which Principle is most directly breached?",
    choices: [
      "Act with independence",
      "Act with honesty",
      "Uphold public trust and confidence",
      "Encourage equality, diversity and inclusion"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Making a false statement to a client is a direct breach of the duty to act with honesty.",
      whyWrong: [
        "Independence is not the main issue on these facts.",
        "—",
        "Public trust may be impacted, but honesty is the direct breach.",
        "EDI is not relevant on these facts."
      ]
    }
  },
  {
    topic: "SRA Principles — rule of law vs client pressure",
    q: "A client tells you to backdate a document to obtain a benefit. Which Principles are most directly engaged?",
    choices: [
      "Honesty and rule of law / proper administration of justice",
      "Independence and EDI",
      "Best interests only",
      "Public trust only"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Backdating to mislead is dishonest and undermines the rule of law; it can also impact the proper administration of justice depending on context.",
      whyWrong: [
        "—",
        "Independence may matter if you're being pressured, but it is not the most direct pairing.",
        "Client best interests does not justify deception.",
        "Public trust may be affected, but the most direct issue is dishonesty/rule of law."
      ]
    }
  },
  {
    topic: "SRA Principles — independence (internal pressure)",
    q: "A senior partner pressures you to mislead a third party to close a deal. Which Principles best explain why you must resist?",
    choices: [
      "Independence and integrity",
      "Best interests and profitability",
      "EDI and best interests",
      "Public trust only"
    ],
    correct: 0,
    explain: {
      whyRight:
        "You must exercise independent professional judgment and act with integrity rather than yielding to internal pressure to behave improperly.",
      whyWrong: [
        "—",
        "Profitability is not a Principle and cannot justify misconduct.",
        "EDI is not the main issue here.",
        "Public trust may be impacted but does not capture the full reason you must resist."
      ]
    }
  },
  {
    topic: "SRA Principles — EDI",
    q: "A client asks you to refuse to provide an accessible meeting format to a disabled customer because it is inconvenient. Which Principle is most directly engaged?",
    choices: [
      "Encourage equality, diversity and inclusion",
      "Act with independence",
      "Act with honesty",
      "Act in the best interests of each client"
    ],
    correct: 0,
    explain: {
      whyRight:
        "The Principles require you to encourage equality, diversity and inclusion; refusing reasonable accessibility without justification conflicts with that duty.",
      whyWrong: [
        "—",
        "Independence is not the primary issue on these facts.",
        "Honesty is not the primary issue on these facts.",
        "Best interests cannot justify discriminatory conduct."
      ]
    }
  },
  {
    topic: "SRA Principles — public trust (out of hours conduct)",
    q: "A solicitor engages in serious dishonest conduct in their private life, widely reported. Which Principle is most directly engaged?",
    choices: [
      "Uphold public trust and confidence",
      "Encourage equality, diversity and inclusion",
      "Act in the best interests of each client",
      "Uphold the rule of law only in court"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Serious dishonest conduct is likely to undermine public trust and confidence in the profession, even outside day-to-day client work.",
      whyWrong: [
        "—",
        "EDI may be relevant only if the conduct is discriminatory; not necessarily the core point.",
        "Client best interests is not the focus.",
        "The Principles are not confined to court work."
      ]
    }
  },
  {
    topic: "SRA Principles — administration of justice (misleading court)",
    q: "You realise that a statement you made to the court is inaccurate. Which Principles most strongly support taking steps to correct it?",
    choices: [
      "Honesty and rule of law / proper administration of justice",
      "Best interests only",
      "Independence and EDI",
      "Public trust only"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Correcting an inaccurate court statement aligns with honesty and upholding the proper administration of justice.",
      whyWrong: [
        "—",
        "Client best interests cannot justify leaving the court misled.",
        "EDI is not relevant; independence is not the main driver here.",
        "Public trust may be impacted but is not the most direct basis."
      ]
    }
  },
  {
    topic: "SRA Principles — best interests vs rule of law",
    q: "A client says, 'Winning is all that matters; do whatever it takes.' What is the most accurate response from a Principles perspective?",
    choices: [
      "You must follow the instruction because the client pays",
      "You can do it if there is no explicit rule against it",
      "You must pursue the client's interests only by lawful and proper means consistent with the Principles",
      "You should withdraw immediately in every case"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client objectives must be pursued within the law and consistently with duties of honesty, integrity, and the proper administration of justice.",
      whyWrong: [
        "Payment does not justify misconduct.",
        "Absence of a specific prohibition does not permit unethical conduct—integrity and other Principles still apply.",
        "Withdrawal may be appropriate in some cases, but not automatically required on these facts."
      ]
    }
  },
  {
    topic: "SRA Principles — honesty (half-truths)",
    q: "You answer an opponent's direct question with a technically true statement designed to create a false impression. Which Principle is most directly engaged?",
    choices: [
      "Act with honesty",
      "Encourage equality, diversity and inclusion",
      "Act with independence",
      "Act in the best interests of each client"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Honesty is not just avoiding literal lies; conduct intended to mislead can breach the duty to act honestly.",
      whyWrong: [
        "—",
        "EDI is not relevant here.",
        "Independence is not the main issue here.",
        "Client best interests cannot justify misleading conduct."
      ]
    }
  },
  {
    topic: "SRA Principles — integrity (ethical backbone)",
    q: "Which scenario best illustrates a potential breach of integrity even if no one is directly lied to?",
    choices: [
      "You politely decline instructions that are unlawful",
      "You exploit an unrepresented opponent's mistake to gain an unfair advantage",
      "You ask for an extension of time with consent",
      "You explain risks and costs to a client"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Integrity captures broader ethical conduct; exploiting a vulnerable/unrepresented opponent can be sharp practice even without an outright lie.",
      whyWrong: [
        "Declining unlawful instructions supports integrity.",
        "—",
        "Seeking an agreed extension is not inherently unethical.",
        "Providing proper advice is ethically appropriate."
      ]
    }
  },
  {
    topic: "SRA Principles — independence (personal interest)",
    q: "You have a personal financial interest in the outcome of a matter. Which Principle is most directly engaged?",
    choices: [
      "Act with independence",
      "Encourage equality, diversity and inclusion",
      "Uphold public trust and confidence",
      "Act with honesty"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Independence requires you to avoid improper influence on your judgment, including influence from your own interests.",
      whyWrong: [
        "—",
        "EDI is not the main issue here.",
        "Public trust may be impacted if mishandled, but independence is the direct Principle.",
        "Honesty may be relevant, but the core issue is impartial professional judgment."
      ]
    }
  },
  {
    topic: "SRA Principles — public trust (client money narrative)",
    q: "A solicitor makes comments online suggesting client money is routinely 'used as float' by firms. Which Principle is most directly engaged?",
    choices: [
      "Uphold public trust and confidence",
      "Act in the best interests of each client",
      "Encourage equality, diversity and inclusion",
      "Act with independence"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Statements that undermine confidence in solicitors handling client money can damage public trust and confidence in legal services.",
      whyWrong: [
        "—",
        "Client best interests is not the main focus on these facts.",
        "EDI is not relevant on these facts.",
        "Independence is not the main issue on these facts."
      ]
    }
  },
  {
    topic: "SRA Principles — rule of law (abuse of process)",
    q: "A client asks you to delay service purely to ambush the opponent where doing so would be procedurally abusive. Which Principle most directly pushes back?",
    choices: [
      "Uphold the rule of law and proper administration of justice",
      "Act in the best interests of each client",
      "Act with independence",
      "Encourage equality, diversity and inclusion"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Tactics that amount to abuse of process conflict with the proper administration of justice and the rule of law.",
      whyWrong: [
        "—",
        "Best interests is not absolute and cannot justify improper litigation conduct.",
        "Independence may be relevant if pressure is applied, but the direct issue is abuse of process.",
        "EDI is not relevant on these facts."
      ]
    }
  },
  {
    topic: "SRA Principles — identifying the correct Principle",
    q: "Which Principle is most directly concerned with maintaining confidence in the profession generally (including outside day-to-day client work)?",
    choices: [
      "Act with honesty",
      "Uphold public trust and confidence",
      "Act in the best interests of each client",
      "Act with independence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Public trust and confidence is the Principle expressly focused on the standing of the profession and confidence in legal services.",
      whyWrong: [
        "Honesty is crucial but is not the Principle framed around public confidence broadly.",
        "—",
        "Best interests focuses on the client relationship rather than the profession’s reputation generally.",
        "Independence focuses on freedom from improper influence."
      ]
    }
  },
  {
    topic: "SRA Principles — EDI in client selection",
    q: "A partner asks you to turn away clients from a particular ethnic group because 'they cause trouble'. Which Principle is most directly breached?",
    choices: [
      "Encourage equality, diversity and inclusion",
      "Act with honesty",
      "Uphold the rule of law and proper administration of justice",
      "Act in the best interests of each client"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Refusing services on discriminatory grounds conflicts directly with the duty to encourage equality, diversity and inclusion.",
      whyWrong: [
        "—",
        "Honesty may not be engaged unless deception occurs.",
        "Rule of law/administration of justice is not the primary issue here.",
        "Best interests does not justify discrimination."
      ]
    }
  },
  {
    topic: "SRA Principles — honesty (client + third party)",
    q: "A client asks you to state to a bank that funds are from salary when you know they are from an undisclosed loan. Which Principle is most directly engaged?",
    choices: [
      "Act with honesty",
      "Encourage equality, diversity and inclusion",
      "Act with independence",
      "Act in the best interests of each client"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Making a knowingly false statement to a third party is a clear honesty issue.",
      whyWrong: [
        "—",
        "EDI is not relevant.",
        "Independence might be relevant if pressured, but honesty is the direct issue.",
        "Best interests cannot justify misleading a third party."
      ]
    }
  },
  {
    topic: "SRA Principles — integrity (moral soundness)",
    q: "A solicitor follows every technical rule but behaves in a way most would regard as morally wrong and exploitative. Which Principle is most likely engaged?",
    choices: [
      "Act with integrity",
      "Act with honesty",
      "Act with independence",
      "Act in the best interests of each client"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Integrity captures broader ethical behaviour beyond mere technical compliance or literal truthfulness.",
      whyWrong: [
        "—",
        "Honesty is narrower and may not capture exploitative-but-not-false conduct.",
        "Independence is about improper influence, not necessarily exploitative conduct.",
        "Best interests focuses on the client, not general moral soundness."
      ]
    }
  },
  {
    topic: "SRA Principles — best interests + conflicts",
    q: "You are asked to act for two clients with potentially diverging objectives in the same transaction. Which Principle is most directly in play when thinking about how to proceed ethically?",
    choices: [
      "Act in the best interests of each client",
      "Encourage equality, diversity and inclusion",
      "Uphold the rule of law and proper administration of justice",
      "Uphold public trust and confidence"
    ],
    correct: 0,
    explain: {
      whyRight:
        "The 'best interests of each client' principle requires you to consider whether you can properly protect both clients’ interests; if you cannot, you must not proceed in a way that disadvantages one.",
      whyWrong: [
        "—",
        "EDI is not the primary issue.",
        "Rule of law/administration of justice is not the primary issue in a transactional conflict.",
        "Public trust may be affected but is not the most direct Principle for the analysis."
      ]
    }
  },
  {
    topic: "SRA Principles — independence vs client insistence",
    q: "A client insists you must adopt a particular strategy you believe is improper and threatens to complain if you refuse. Which Principle best supports you in refusing?",
    choices: [
      "Act with independence",
      "Encourage equality, diversity and inclusion",
      "Act in the best interests of each client",
      "Uphold public trust and confidence"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Independence protects your duty to exercise professional judgment and resist improper client pressure.",
      whyWrong: [
        "—",
        "EDI is not relevant.",
        "Best interests does not permit improper conduct.",
        "Public trust may be affected but independence is the most direct support to refuse pressure."
      ]
    }
  },
  {
    topic: "SRA Principles — rule of law (crime/fraud)",
    q: "A client asks you to structure a transaction specifically to conceal the proceeds of crime. Which Principle is most directly engaged?",
    choices: [
      "Uphold the rule of law and proper administration of justice",
      "Act in the best interests of each client",
      "Encourage equality, diversity and inclusion",
      "Act with independence"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Helping to conceal criminal proceeds is inconsistent with upholding the rule of law and the proper administration of justice.",
      whyWrong: [
        "—",
        "Client best interests cannot justify unlawful conduct.",
        "EDI is not relevant.",
        "Independence may be relevant if pressured, but the direct issue is the rule of law."
      ]
    }
  },
  {
    topic: "SRA Principles — public trust (misconduct pattern)",
    q: "Which situation most clearly engages the public trust and confidence Principle?",
    choices: [
      "A minor spelling error in an internal memo",
      "Deliberate participation in a scheme to mislead a third party for advantage",
      "Asking a client for clarification on instructions",
      "Declining work outside your competence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Deliberate misleading schemes undermine confidence in legal services and the profession.",
      whyWrong: [
        "A minor typo is unlikely to engage public trust in a meaningful way.",
        "—",
        "Clarifying instructions is proper practice.",
        "Declining unsuitable work can be the responsible choice."
      ]
    }
  },
  {
    topic: "SRA Principles — honesty (reckless accuracy)",
    q: "You make a statement in correspondence that you suspect may be wrong but you do not check because it helps your client's position. Which Principle is most directly engaged?",
    choices: [
      "Act with honesty",
      "Encourage equality, diversity and inclusion",
      "Act with independence",
      "Act in the best interests of each client"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Proceeding with a potentially inaccurate statement to gain advantage risks misleading conduct and breaches the duty to act honestly.",
      whyWrong: [
        "—",
        "EDI is not relevant.",
        "Independence is not the primary issue on these facts.",
        "Client best interests cannot justify misleading conduct."
      ]
    }
  },
  {
    topic: "SRA Principles — integrity (fair dealing)",
    q: "During negotiations, you intentionally omit a key qualification to create a misleading impression, while avoiding any explicit false statement. Which Principle is most directly engaged?",
    choices: [
      "Act with integrity",
      "Encourage equality, diversity and inclusion",
      "Uphold public trust and confidence",
      "Act in the best interests of each client"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Deliberate misleading impressions and sharp practice engage integrity even where there is no outright lie.",
      whyWrong: [
        "—",
        "EDI is not relevant.",
        "Public trust may be impacted, but integrity is the best fit for sharp practice.",
        "Best interests cannot justify misleading conduct."
      ]
    }
  },
  {
    topic: "SRA Principles — choosing between Principles",
    q: "You are deciding whether to comply with a client instruction that would involve misleading a regulator. Which option best reflects a Principles-first approach?",
    choices: [
      "Comply because client best interests override other concerns",
      "Comply if the client insists in writing",
      "Refuse because honesty and integrity constrain what you can do for the client",
      "Comply because regulators can look after themselves"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Honesty and integrity limit the steps you can take for a client; you must not mislead a regulator even if the client wants you to.",
      whyWrong: [
        "Best interests is not absolute and does not override honesty/integrity.",
        "Client confirmation does not make misconduct acceptable.",
        "—",
        "That is not a valid ethical justification."
      ]
    }
  },
  {
    topic: "SRA Principles — EDI (workplace culture)",
    q: "A colleague repeatedly makes discriminatory jokes in a team chat. Which Principle is most directly engaged?",
    choices: [
      "Encourage equality, diversity and inclusion",
      "Act with independence",
      "Uphold the rule of law and proper administration of justice",
      "Act in the best interests of each client"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Discriminatory conduct undermines inclusion and equality; the Principles require encouraging EDI.",
      whyWrong: [
        "—",
        "Independence is not the main issue.",
        "Rule of law/administration of justice is not the main issue.",
        "Client best interests is not the main issue."
      ]
    }
  },
  {
    topic: "SRA Principles — rule of law (court integrity)",
    q: "A client asks you to present allegations in a witness statement that you know are false. Which Principles are most directly engaged?",
    choices: [
      "Honesty and integrity",
      "Best interests and independence",
      "EDI and public trust",
      "Best interests only"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Knowingly advancing false allegations breaches honesty and integrity (and will also conflict with duties tied to the proper administration of justice in contentious matters).",
      whyWrong: [
        "—",
        "Best interests cannot justify dishonesty; independence may be relevant but not the key pairing.",
        "EDI is not relevant; public trust may be impacted but is not the core principle pair here.",
        "Best interests is not absolute and cannot justify falsity."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Ethics | Chapter 1 | SRA Principles",
    subtitle: "Core principles, integrity, and public trust duties.",
    questions: questions
  };
})();
  
