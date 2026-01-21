(() => {
  const questions = [
  {
    topic: "Youth Court basics — age range",
    q: "Which age group is the Youth Court primarily designed to deal with?",
    choices: ["Under 10 only", "10 to 17", "16 to 21", "18 and over"],
    correct: 1,
    explain: {
      whyRight:
        "A youth court is a special type of magistrates’ court for defendants aged 10–17.",
      whyWrong: [
        "Under-10s are below the youth court defendant age range.",
        "—",
        "16–21 includes adults and is not the youth court jurisdiction.",
        "18+ are adults and generally not dealt with in the youth court."
      ]
    }
  },
  {
    topic: "Youth Court basics — composition",
    q: "How is a Youth Court ordinarily constituted?",
    choices: [
      "A High Court judge sitting alone",
      "A jury of 12 and a judge",
      "Three magistrates or a District Judge (Magistrates’ Courts)",
      "Two jurors and a District Judge"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Youth courts sit as a specialist magistrates’ court: either three magistrates or a District Judge, with no jury.",
      whyWrong: [
        "High Court judges do not ordinarily sit in the Youth Court.",
        "There is no jury in the Youth Court.",
        "—",
        "There is no such mixed jury arrangement in the Youth Court."
      ]
    }
  },
  {
    topic: "Youth Court basics — jury",
    q: "Which statement is most accurate about juries in Youth Court proceedings?",
    choices: [
      "A jury decides guilt in the Youth Court",
      "A jury decides sentence in the Youth Court",
      "There is no jury in the Youth Court",
      "A jury is used only for either-way offences in the Youth Court"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Youth Court proceedings are heard without a jury.",
      whyWrong: [
        "Guilt is determined by the bench (magistrates/DJ), not a jury.",
        "Sentencing is for the bench, not a jury.",
        "—",
        "Either-way classification does not introduce a jury into the Youth Court."
      ]
    }
  },
  {
    topic: "Attendance — parent/guardian",
    q: "Which is most accurate regarding parental attendance at the Youth Court?",
    choices: [
      "A parent/guardian must attend with a child under 16",
      "Parents are never permitted in Youth Court",
      "A parent must attend for all defendants up to age 25",
      "A parent must attend only if the prosecution applies"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Guidance indicates a parent/guardian must attend if the defendant is under 16 (and may be required for 16–17s by order).",
      whyWrong: [
        "—",
        "Parents/guardians are commonly expected/allowed and may be required.",
        "25 is not the Youth Court age range.",
        "It is not dependent solely on a prosecution application."
      ]
    }
  },
  {
    topic: "Open justice — public access",
    q: "Which statement best reflects public access to Youth Court hearings?",
    choices: [
      "Youth Court is open to the public like adult magistrates’ court",
      "Youth Court is not open to the general public, but bona fide press may attend",
      "Youth Court is always held in private with no press allowed",
      "Youth Court is open only to the victim’s family"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Youth Court proceedings are generally closed to the public by statute, but bona fide media representatives may attend and report subject to restrictions.",
      whyWrong: [
        "Youth Court is a statutory exception to ordinary open justice access.",
        "—",
        "Press are generally permitted, subject to reporting restrictions.",
        "Access is not limited only to the victim’s family."
      ]
    }
  },
  {
    topic: "Reporting restrictions — core rule (CYPA 1933 s49)",
    q: "What does CYPA 1933 s49 primarily restrict in Youth Court proceedings?",
    choices: [
      "The ability to cross-examine prosecution witnesses",
      "Publication of identifying details of children/young people concerned in the proceedings",
      "The prosecution’s right to appeal",
      "The court’s power to grant bail"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 49 restricts publication of the name and identifying particulars of a child/young person concerned in Youth Court proceedings.",
      whyWrong: [
        "Cross-examination is not the subject of s49.",
        "—",
        "Prosecution appeals are not governed by s49.",
        "Bail powers are not governed by s49."
      ]
    }
  },
  {
    topic: "Reporting restrictions — what counts as 'identifying'",
    q: "Which is most likely to breach CYPA 1933 s49 if published about a 15-year-old defendant in Youth Court proceedings?",
    choices: [
      "A general statement that 'a youth appeared in court'",
      "The defendant’s full name and school",
      "A summary of the legal issues with no identifying details",
      "The date of the hearing only"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Publishing a child’s name and school is classic identifying material restricted by s49.",
      whyWrong: [
        "A non-identifying general report is less likely to breach s49.",
        "—",
        "Non-identifying legal summaries are generally permitted (subject to other restrictions).",
        "A date alone does not identify the child."
      ]
    }
  },
  {
    topic: "Reporting restrictions — who is protected",
    q: "In Youth Court proceedings, who can fall within s49 restrictions as 'concerned in the proceedings'?",
    choices: [
      "Only the child defendant",
      "Only child witnesses",
      "Child defendant and (in Youth Court) child victims/witnesses concerned in the proceedings",
      "Only adult co-defendants"
    ],
    correct: 2,
    explain: {
      whyRight:
        "In the Youth Court, s49 can cover children/young people concerned in the proceedings, which can include defendants and child victims/witnesses there.",
      whyWrong: [
        "It can extend beyond just the defendant.",
        "It is not limited to witnesses only.",
        "—",
        "Adult co-defendants are not protected as 'children' under s49."
      ]
    }
  },
  {
    topic: "Reporting restrictions — duration",
    q: "What is the general position on how long s49 Youth Court reporting restrictions last?",
    choices: [
      "They last for life automatically in every case",
      "They generally cease when the person turns 18, unless another order extends protection",
      "They cease immediately after conviction",
      "They cease once the media asks permission"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Youth Court’s s49 restrictions are commonly treated as lasting until the person reaches 18, unless another lawful order provides longer protection.",
      whyWrong: [
        "Lifelong anonymity is not automatic under s49 in every case.",
        "—",
        "They do not automatically end at conviction.",
        "Media requests do not determine statutory duration."
      ]
    }
  },
  {
    topic: "Youth Court aims — welfare/rehabilitation emphasis",
    q: "Which statement best fits the Youth Court’s general approach compared with adult court?",
    choices: [
      "It is designed to prioritise welfare and preventing reoffending, with procedures adapted for children",
      "It is identical to adult court but with smaller furniture",
      "It exists mainly to increase punishment levels",
      "It exists to remove the need for legal representation"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Youth court procedure and practice are designed around a child-focused approach, including welfare and preventing reoffending, and supporting engagement.",
      whyWrong: [
        "—",
        "It differs in access, reporting, approach, and adaptations for children.",
        "Punishment is not the sole/primary procedural design aim.",
        "Legal representation remains important and is not removed."
      ]
    }
  },
  {
    topic: "Case management — effective participation",
    q: "Which tool is most associated with planning adjustments to questioning and procedure for a vulnerable child defendant or witness?",
    choices: [
      "Ground rules hearing",
      "Newton hearing",
      "Judicial review",
      "Voir dire by jury"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Ground rules hearings are commonly used to set directions to facilitate fair treatment and effective participation of vulnerable witnesses/defendants.",
      whyWrong: [
        "Newton hearings resolve factual disputes at sentencing, not participation planning.",
        "Judicial review is a public law remedy, not a participation planning tool.",
        "A jury voir dire is not the usual mechanism in Youth Court."
      ]
    }
  },
  {
    topic: "Intermediaries — purpose",
    q: "What is the primary function of an intermediary in youth proceedings (where granted)?",
    choices: [
      "To negotiate a plea bargain with the prosecution",
      "To help the child communicate/understand questions and give best evidence",
      "To act as the judge’s clerk",
      "To decide whether evidence is admissible"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Intermediaries support communication so the child can understand and respond, promoting effective participation and best evidence.",
      whyWrong: [
        "Intermediaries do not negotiate pleas.",
        "—",
        "They are not court staff performing legal advisory functions.",
        "Admissibility is for the court, not the intermediary."
      ]
    }
  },
  {
    topic: "Special measures — where governed",
    q: "Special measures for eligible witnesses (e.g., screens/live link/intermediaries) are primarily within the framework of:",
    choices: [
      "The Theft Act 1968",
      "YJCEA 1999 and associated Criminal Procedure Rules provisions",
      "The Civil Procedure Rules Part 52",
      "The Police and Criminal Evidence Act 1984 Code G"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Special measures are grounded in the Youth Justice and Criminal Evidence Act 1999 and implemented through procedural rules.",
      whyWrong: [
        "Theft Act defines offences, not special measures.",
        "—",
        "CPR is civil procedure, not criminal special measures.",
        "PACE Code G is about arrest, not court special measures."
      ]
    }
  },
  {
    topic: "Bail — starting point",
    q: "In youth cases, what is the general starting point before considering remand in custody?",
    choices: [
      "Automatic detention until trial",
      "The right to bail, subject to statutory exceptions",
      "No bail is possible for under-18s",
      "Bail only if the victim consents"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Bail Act framework begins with a right to bail, with custody/remand requiring statutory justification (and youth remand has additional strict conditions).",
      whyWrong: [
        "There is no automatic detention rule.",
        "—",
        "Bail is possible for under-18s (subject to rules).",
        "Victim consent is not the legal test."
      ]
    }
  },
  {
    topic: "Remand — ages 10–11",
    q: "Which statement is most accurate about remand options for 10–11 year olds?",
    choices: [
      "They can be remanded to youth detention accommodation like older youths",
      "They can only be remanded to local authority accommodation",
      "They must always be bailed",
      "They must be sent to the Crown Court for remand decisions"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Guidance reflects that youths aged 10–11 can only be remanded to local authority accommodation, not youth detention accommodation.",
      whyWrong: [
        "Youth detention accommodation is not available for 10–11s in this framework.",
        "—",
        "Bail is not automatic; remand to LA accommodation can occur if bail refused.",
        "Remand decisions are made by the relevant court, not automatically sent to Crown Court."
      ]
    }
  },
  {
    topic: "Remand — youth detention accommodation (12–17)",
    q: "Which is most accurate about remanding a 14-year-old to youth detention accommodation (YDA)?",
    choices: [
      "It is the default position if charged with any offence",
      "It requires strict statutory conditions to be satisfied (and is a last resort)",
      "It can be ordered only on the prosecutor’s request with no test",
      "It is available only after conviction"
    ],
    correct: 1,
    explain: {
      whyRight:
        "YDA is a form of custodial remand and can be ordered only if strict statutory conditions are met; policy and legislation emphasise last resort.",
      whyWrong: [
        "Custodial remand is not a default.",
        "—",
        "A prosecutor’s request alone is insufficient; the court must apply the test.",
        "Remand is pre-conviction; it is not limited to post-conviction detention."
      ]
    }
  },
  {
    topic: "Remand — reasons requirement",
    q: "If the court remands a child to youth detention accommodation, which is most accurate as a procedural safeguard?",
    choices: [
      "The court must give reasons in ordinary language (and record them) for custodial remand",
      "The court must keep reasons secret",
      "No reasons are required in Youth Court",
      "Reasons can be given only after the trial"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Youth remand guidance emphasises that the court should state reasons clearly (in ordinary language) when ordering custodial remand and ensure proper recording/communication.",
      whyWrong: [
        "—",
        "That contradicts transparency safeguards.",
        "Reasons are required; custodial remand is tightly controlled.",
        "Reasons are not postponed until after trial."
      ]
    }
  },
  {
    topic: "Sending to Crown Court — homicide",
    q: "Which case category must be dealt with in the Crown Court (not retained in the Youth Court)?",
    choices: [
      "Any shop theft by a 16-year-old",
      "Any public order offence",
      "Homicide (e.g., murder/manslaughter) charged against a child/young person",
      "All either-way offences automatically"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A youth charged with homicide must appear in the Crown Court for trial.",
      whyWrong: [
        "Minor offences are ordinarily dealt with in the Youth Court.",
        "Public order offences are not automatically Crown Court for youths.",
        "—",
        "Either-way does not automatically mean Crown Court for youths."
      ]
    }
  },
  {
    topic: "Sending to Crown Court — mandatory minimum firearms (16–17)",
    q: "Which is most accurate about certain serious firearms offences charged against 16–17 year olds with a mandatory minimum sentence?",
    choices: [
      "They must always be tried in the Youth Court",
      "They must be sent to the Crown Court for trial",
      "They can be tried only by jury in the Youth Court",
      "They are dealt with by the Family Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Some firearms offences carrying a mandatory minimum (for 16–17s) are in the category that must be sent to the Crown Court.",
      whyWrong: [
        "That contradicts the statutory sending framework.",
        "—",
        "There is no jury in the Youth Court.",
        "The Family Court does not try criminal offences."
      ]
    }
  },
  {
    topic: "Sending to Crown Court — serious/complex fraud or child cases",
    q: "When can a serious or complex fraud case involving a youth be sent to the Crown Court under the Crime and Disorder Act 1998 sending framework?",
    choices: [
      "Only if the youth elects Crown Court trial",
      "If a statutory notice is given under the relevant provisions (e.g., s51B/s51C) triggering sending",
      "Only after conviction",
      "Never; fraud must stay in Youth Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The sending framework includes provision for serious/complex fraud or child cases where a statutory notice is given.",
      whyWrong: [
        "Youth defendants do not have the same 'election' mechanism as adults for trial venue.",
        "—",
        "Sending decisions occur pre-trial, not only post-conviction.",
        "Fraud can be sent in specific circumstances."
      ]
    }
  },
  {
    topic: "Sending — Crime and Disorder Act 1998 s51A (concept)",
    q: "Which best describes what CDA 1998 s51A provides for in relation to children and young persons?",
    choices: [
      "Sending certain youth cases to the Crown Court when statutory conditions apply",
      "Creating the offence of robbery",
      "A general power to impose detention and training orders",
      "A rule that youths can always choose jury trial"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Section 51A sets out when a child/young person’s case must be sent to the Crown Court if specified conditions apply.",
      whyWrong: [
        "—",
        "Robbery is governed elsewhere (Theft Act 1968).",
        "DTO sentencing powers are under separate legislation/sentencing framework.",
        "Youths do not have a general right to elect jury trial."
      ]
    }
  },
  {
    topic: "Dangerousness — specified offences (youth)",
    q: "A youth charged with a specified offence is at risk of being sent to the Crown Court where the court considers dangerousness provisions may apply. What is the key idea?",
    choices: [
      "It is sent because Youth Court has no jurisdiction over specified offences",
      "It may be sent because an extended sentence/dangerousness sentence is realistically in play if convicted",
      "It is sent only if the youth asks",
      "It is always retained in the Youth Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Sending can be required where the offence is specified and the court thinks dangerous offender criteria (and an extended sentence) could apply if convicted.",
      whyWrong: [
        "Youth Court has jurisdiction over many serious offences; the issue is sentence type/power.",
        "—",
        "Sending is not based on youth 'election'.",
        "Specified offences may be sent depending on the dangerousness assessment."
      ]
    }
  },
  {
    topic: "Grave crime — when Crown Court sentence becomes relevant",
    q: "A youth is tried in the Youth Court for a grave crime. When is committal to the Crown Court for sentence most relevant?",
    choices: [
      "Whenever the youth denies the offence",
      "Where Youth Court sentencing powers are insufficient and long detention under PCC(S)A 2000 s91 may be needed",
      "Whenever a victim requests custody",
      "Whenever the prosecution applies for a fine"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the offence (or overall criminality) may require a sentence beyond Youth Court powers (e.g., long detention under s91), committal for sentence becomes relevant.",
      whyWrong: [
        "Denial affects trial, not sentencing powers.",
        "—",
        "Victim preference is not the legal test.",
        "A fine application does not trigger committal."
      ]
    }
  },
  {
    topic: "Youth Court sentencing power — 2-year DTO context",
    q: "Why is the 'two years' figure often mentioned when deciding whether a youth case should be sent/committed to the Crown Court?",
    choices: [
      "Because the Youth Court has no power to impose any custodial sentence",
      "Because the Youth Court’s custodial disposal (DTO) has a maximum of 24 months, so longer custody points toward Crown Court powers",
      "Because every youth sentence must be exactly two years",
      "Because two years is the minimum sentence for any indictable offence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Youth Court’s main custodial disposal (DTO) is capped at 24 months; if substantially longer custody is a realistic possibility, Crown Court involvement may be needed.",
      whyWrong: [
        "The Youth Court can impose custody (as a last resort).",
        "—",
        "Sentences are individualised; there is no fixed two-year requirement.",
        "Two years is not a universal minimum for indictable offences."
      ]
    }
  },
  {
    topic: "Joint defendants — youth with adult co-defendant",
    q: "A 15-year-old and a 19-year-old are jointly charged. Which is most accurate as a general procedural risk?",
    choices: [
      "The adult must be tried in the Youth Court",
      "The youth must always be tried in the adult magistrates’ court",
      "The presence of an adult co-defendant can affect venue, sometimes resulting in Crown Court proceedings",
      "Joint charging automatically leads to dismissal"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Co-defendant scenarios can affect venue/which court tries the matter (including Crown Court trial in suitable cases), even though the youth protections remain important.",
      whyWrong: [
        "Adults are not tried in the Youth Court as the default.",
        "The youth is ordinarily dealt with in the Youth Court unless statutory/venue reasons point elsewhere.",
        "—",
        "Joint charging does not automatically cause dismissal."
      ]
    }
  },
  {
    topic: "Youth Court — effective participation (court duty idea)",
    q: "Which best reflects the court’s approach to ensuring a child can participate effectively?",
    choices: [
      "Proceed exactly as in adult court regardless of understanding",
      "Take reasonable steps and give directions/adaptations to support understanding and fair participation",
      "Refuse legal representation to encourage independence",
      "Rely solely on the prosecutor to explain the process"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Criminal procedure emphasises fair case management and effective participation, particularly for vulnerable court users, supported by directions/adaptations where needed.",
      whyWrong: [
        "A child-focused approach requires adaptations where needed.",
        "—",
        "Refusing representation undermines fairness.",
        "The court retains responsibility; it is not left solely to the prosecutor."
      ]
    }
  },
  {
    topic: "Special measures — live link example",
    q: "A 13-year-old witness is eligible for special measures. Which option is a classic special measure?",
    choices: [
      "A mandatory jury trial",
      "Giving evidence by live link",
      "A civil injunction",
      "A costs order against the defendant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Live link is a well-known special measure available for eligible witnesses to support best evidence and reduce distress.",
      whyWrong: [
        "There is no mandatory jury trial in Youth Court.",
        "—",
        "Injunctions are civil remedies, not special measures.",
        "Costs orders are not a 'special measure' for a witness."
      ]
    }
  },
  {
    topic: "Speed/priority — children’s cases",
    q: "Which statement best reflects the policy emphasis in cases involving child defendants?",
    choices: [
      "Delay is desirable to allow memories to fade",
      "Cases involving children should be prioritised and dealt with expeditiously to avoid delay",
      "Children’s cases are always stayed if not tried within 7 days",
      "Children’s cases must be postponed until the defendant turns 18"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Prosecution/court guidance emphasises avoiding delay in youth cases because long delays undermine effective engagement and rehabilitation aims.",
      whyWrong: [
        "Delay undermines fairness and youth justice aims.",
        "—",
        "There is no universal 7-day stay rule.",
        "Proceedings are not automatically postponed until adulthood."
      ]
    }
  },
  {
    topic: "Press attendance vs identification",
    q: "Which best describes the relationship between press attendance and youth anonymity?",
    choices: [
      "If press can attend, they can name the child freely",
      "Press can attend but must not publish identifying details restricted by s49 (and any other applicable restriction)",
      "Press can never attend Youth Court",
      "Press can attend only if the child consents"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Press may attend Youth Court but reporting is constrained by s49 and other restrictions (e.g., sexual offence complainant anonymity).",
      whyWrong: [
        "Attendance does not override statutory reporting restrictions.",
        "—",
        "Press are generally permitted as bona fide representatives.",
        "Child consent does not control statutory restrictions."
      ]
    }
  },
  {
    topic: "Procedure — most appropriate route for serious youth cases",
    q: "Which is the best general rule about where youths should be tried, absent a statutory requirement or compelling reason?",
    choices: [
      "They should usually be tried in the youth court",
      "They should usually be tried in the Crown Court",
      "They must always be tried by jury",
      "They must always be tried in the Family Court"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Guidance indicates the normal position is that children and young persons should be tried in the Youth Court unless statute/compelling reasons require otherwise.",
      whyWrong: [
        "—",
        "Crown Court is reserved for specific categories/thresholds.",
        "There is no general right to jury trial for youths.",
        "Family Court does not try criminal offences."
      ]
    }
  },
  {
    topic: "Exam technique — Youth Court scenario spotting",
    q: "In an SQE1 Youth Court question, which issue is most likely to be a 'trigger' for Crown Court involvement?",
    choices: [
      "A minor first offence of theft",
      "Homicide or a statutory sending category (e.g., certain mandatory-minimum firearms offences)",
      "A youth being nervous in court",
      "A request for an adjournment"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Homicide and other statutory sending categories are classic triggers for Crown Court trial rather than Youth Court retention.",
      whyWrong: [
        "Minor theft normally stays in Youth Court.",
        "—",
        "Nervousness is managed via participation measures, not venue transfer.",
        "Adjournments are case management, not a Crown Court trigger by themselves."
      ]
    }
  },
  {
    topic: "Procedure — what 'Youth Court is a magistrates’ court' means",
    q: "Which is most accurate about calling the Youth Court a 'type of magistrates’ court'?",
    choices: [
      "It applies civil procedure rules instead of criminal procedure rules",
      "It is a criminal court applying criminal procedure, but with youth-specific adaptations and restrictions",
      "It has no power to convict",
      "It is run by the local authority, not HMCTS"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Youth Court is a criminal magistrates’ court with youth-specific procedures (access/reporting/adaptations), still within criminal procedure.",
      whyWrong: [
        "Civil procedure does not govern Youth Court trials.",
        "—",
        "It can convict and sentence (within powers).",
        "It is part of the court system, not run by a local authority."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Criminal Practice | Chapter 10 | Youth Court",
    subtitle: "Youth jurisdiction, procedure, and sentencing basics.",
    questions: questions
  };
})();
  
