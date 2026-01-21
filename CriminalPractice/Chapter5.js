(() => {
  const questions = [
  {
    topic: "Case management — overriding objective",
    q: "Which statement best reflects the purpose of criminal case management?",
    choices: [
      "To help the prosecution win",
      "To deal with cases justly by identifying issues early, setting directions, and ensuring an effective trial",
      "To delay cases until witnesses forget",
      "To ensure every witness attends court in every case"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Case management exists to achieve the overriding objective: dealing with cases justly through early issue identification, directions, timetables, and focused evidence.",
      whyWrong: [
        "The court’s role is fairness/justice, not helping one side win.",
        "—",
        "Delay undermines justice and efficiency.",
        "Case management aims to call only witnesses actually needed on real issues."
      ]
    }
  },
  {
    topic: "Case management — duty of the court",
    q: "Who has the primary duty to actively manage a criminal case?",
    choices: [
      "The defence only",
      "The prosecution only",
      "The court",
      "The jury"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The Criminal Procedure Rules place a duty on the court to further the overriding objective by actively managing the case.",
      whyWrong: [
        "Defence must assist, but the primary duty is the court’s.",
        "Prosecution must assist, but the primary duty is the court’s.",
        "—",
        "The jury does not manage cases."
      ]
    }
  },
  {
    topic: "Case management — duty of the parties",
    q: "Which is most accurate about the duties of prosecution and defence in case management?",
    choices: [
      "They only comply if the judge orders them to",
      "They must actively assist the court’s case management, often without being asked",
      "They can ignore deadlines if busy",
      "Only solicitors (not advocates) have duties"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Participants must actively assist the court in furthering the overriding objective and complying with case management processes.",
      whyWrong: [
        "The duty goes beyond responding to orders; it includes proactive assistance.",
        "—",
        "Workload does not automatically justify non-compliance.",
        "Advocates also have responsibilities to assist the court."
      ]
    }
  },
  {
    topic: "Active case management — identifying issues",
    q: "Which is an example of 'active case management'?",
    choices: [
      "Leaving disputed issues until the trial starts",
      "Early identification of the real issues and focusing evidence on those issues",
      "Calling every witness 'just in case'",
      "Refusing to set deadlines"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Active case management includes early identification of issues and controlling the evidence needed to decide those issues.",
      whyWrong: [
        "Trial ambushes are the opposite of effective management.",
        "—",
        "Unnecessary witnesses waste time and increase adjournment risk.",
        "Timetables are a core tool of management."
      ]
    }
  },
  {
    topic: "Directions — timetable",
    q: "Why does the court set a timetable (directions) early in proceedings?",
    choices: [
      "To punish parties with deadlines",
      "To ensure preparation is structured and the case progresses to an effective trial date",
      "To prevent either party from making applications",
      "To stop disclosure from happening"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Directions and timetables are designed to achieve readiness and avoid last-minute disruption.",
      whyWrong: [
        "Deadlines are not punishment; they are for fairness and efficiency.",
        "—",
        "Directions usually regulate applications, not prohibit them.",
        "Disclosure is part of preparation; directions support it."
      ]
    }
  },
  {
    topic: "Magistrates’ court — pre-trial case management",
    q: "What is a common focus of a magistrates’ court pre-trial review/case management hearing in a not guilty case?",
    choices: [
      "Jury selection",
      "Trial readiness, witness requirements, disputed issues, and deadlines for any pre-trial applications",
      "Sentencing credit for early plea",
      "Civil costs budgeting"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Pre-trial hearings in the magistrates’ court aim to ensure the case is trial-ready: issues narrowed, witnesses identified, and deadlines set.",
      whyWrong: [
        "Juries are not used in the magistrates’ court.",
        "—",
        "Guilty plea credit is not the main focus in a not guilty PTR.",
        "Civil budgeting is irrelevant."
      ]
    }
  },
  {
    topic: "Crown Court — PTPH purpose",
    q: "The Plea and Trial Preparation Hearing (PTPH) in the Crown Court is best described as:",
    choices: [
      "A full trial",
      "A key case management hearing to take plea/arraignment and set binding directions for trial preparation",
      "A sentencing hearing only",
      "A hearing where witnesses are cross-examined"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PTPH is the foundation hearing for plea/arraignment and for setting the directions that drive the case to an effective trial.",
      whyWrong: [
        "A trial is separate and later.",
        "—",
        "Sentencing is not the sole or primary function.",
        "Witness evidence is usually for trial (subject to special procedures)."
      ]
    }
  },
  {
    topic: "Better Case Management — practical expectation",
    q: "Under Better Case Management, what is most expected of parties by the time of the key pre-trial hearing?",
    choices: [
      "No preparation; issues can be decided at trial",
      "They should be ready to identify issues, agree admissions where possible, and propose realistic directions and time estimates",
      "Only the prosecution needs to be prepared",
      "Only the defence needs to be prepared"
    ],
    correct: 1,
    explain: {
      whyRight:
        "BCM expects early engagement so the court can set workable, focused directions and avoid avoidable trial disruption.",
      whyWrong: [
        "Leaving everything to trial undermines BCM.",
        "—",
        "Both parties have duties to assist the court.",
        "Both parties have duties to assist the court."
      ]
    }
  },
  {
    topic: "Disclosure — initial details (IDPC concept)",
    q: "At an early stage, what is the main function of the initial details of the prosecution case (IDPC)?",
    choices: [
      "Full disclosure of all unused material",
      "To provide sufficient early information about the prosecution case to enable effective first hearing decisions and case management",
      "To replace the need for any later disclosure",
      "To prove guilt"
    ],
    correct: 1,
    explain: {
      whyRight:
        "IDPC is early material to support decisions at first hearing and effective case management (including plea and bail decisions).",
      whyWrong: [
        "Unused material disclosure is governed by separate rules and stages.",
        "—",
        "Later disclosure obligations still apply.",
        "IDPC is not proof of guilt; it is early case information."
      ]
    }
  },
  {
    topic: "Disclosure — managing unused material (Crown Court focus)",
    q: "In Crown Court cases, structured disclosure management commonly involves:",
    choices: [
      "No engagement until the day of trial",
      "Using a disclosure management approach/document to identify disclosure issues early and assist the court",
      "Defence refusing to define issues",
      "Prosecution disclosing only what they choose with no oversight"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Disclosure management is intended to promote early, focused engagement and reduce late surprises and adjournments.",
      whyWrong: [
        "Late engagement is a major cause of ineffective trials.",
        "—",
        "Defence should identify issues so disclosure can be targeted appropriately.",
        "Disclosure remains a legal duty with court oversight."
      ]
    }
  },
  {
    topic: "Defence case statement — purpose (concept)",
    q: "Why might the court require the defence to clarify issues early (e.g., via defence statement/identifying issues where applicable)?",
    choices: [
      "To force the defence to confess",
      "To help focus the trial on real disputes and make disclosure and witness evidence proportionate",
      "To prevent D calling witnesses",
      "To shorten the prosecution case unfairly"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Clarifying issues supports focused disclosure, witness management, and an effective trial by narrowing what is genuinely in dispute.",
      whyWrong: [
        "It does not compel confession.",
        "—",
        "It does not automatically stop defence witnesses.",
        "The aim is fairness and effectiveness, not unfair advantage."
      ]
    }
  },
  {
    topic: "Admissions — efficiency",
    q: "Which is the best reason to agree admissions (where appropriate) before trial?",
    choices: [
      "To hide weaknesses in the defence case",
      "To avoid calling unnecessary witnesses and focus the trial on disputed issues",
      "To guarantee acquittal",
      "To stop the prosecution from using any documents"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Admissions can streamline trials by removing undisputed matters and reducing the need for witnesses.",
      whyWrong: [
        "Admissions are about efficiency/focus, not concealment.",
        "—",
        "Admissions do not guarantee outcomes.",
        "Admissions usually relate to documents/facts, not blanket exclusion."
      ]
    }
  },
  {
    topic: "Special measures — timing",
    q: "When should special measures needs (for vulnerable/intimidated witnesses) be raised?",
    choices: [
      "Only after the jury is sworn",
      "As early as possible so directions can be made and arrangements planned",
      "Only after conviction",
      "Never—special measures are automatic"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Special measures require planning and directions; late applications risk adjournment and unfairness.",
      whyWrong: [
        "That is far too late and risks ineffective trial.",
        "—",
        "They are pre-trial measures, not post-conviction.",
        "They are not automatic; they must be identified and ordered."
      ]
    }
  },
  {
    topic: "Ground rules hearings — function",
    q: "A ground rules hearing is primarily used to:",
    choices: [
      "Decide guilt",
      "Plan how evidence will be taken from a vulnerable witness (questioning style, intermediaries, breaks, arrangements)",
      "Choose the jury",
      "Set sentencing guidelines"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Ground rules hearings are designed to ensure vulnerable witnesses can give best evidence fairly, with structured questioning arrangements.",
      whyWrong: [
        "It is not a merits hearing on guilt.",
        "—",
        "Jury selection is separate and Crown Court only.",
        "Sentencing is separate."
      ]
    }
  },
  {
    topic: "Pre-trial applications — why early",
    q: "Why does the court push for admissibility applications (e.g., hearsay/bad character) to be made pre-trial where possible?",
    choices: [
      "To stop any applications ever being made",
      "To avoid trial disruption and ensure parties know the evidential parameters before witnesses attend",
      "To punish late advocates",
      "To guarantee the prosecution wins"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Early rulings reduce adjournment risk and allow realistic trial planning and witness management.",
      whyWrong: [
        "The aim is proper timing, not prohibition.",
        "—",
        "It’s not primarily punitive (though sanctions can follow).",
        "It’s about fairness and efficiency, not outcomes."
      ]
    }
  },
  {
    topic: "Time estimates — importance",
    q: "Why is an accurate trial time estimate important in case management?",
    choices: [
      "It determines guilt",
      "It helps the court list the case effectively, avoid wasted court time, and ensure witnesses are managed properly",
      "It replaces the need for disclosure",
      "It prevents bail applications"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Listing depends on realistic time estimates; inaccurate estimates cause overruns, adjournments, and witness inconvenience.",
      whyWrong: [
        "It has nothing to do with guilt.",
        "—",
        "Disclosure duties remain regardless.",
        "Bail is separate."
      ]
    }
  },
  {
    topic: "Technology — active management",
    q: "Which is most consistent with modern active case management?",
    choices: [
      "Refusing remote/tech solutions in all cases",
      "Using technology appropriately (e.g., remote hearings where suitable, digital bundles) to progress cases efficiently",
      "Only using handwritten bundles",
      "Waiting until trial to share documents"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Active case management includes making proper use of technology to support effective progression of cases.",
      whyWrong: [
        "A blanket refusal undermines efficient management.",
        "—",
        "Paper-only approaches can be inefficient where digital is appropriate.",
        "Late sharing increases adjournment risk."
      ]
    }
  },
  {
    topic: "Compliance — missing deadlines",
    q: "Defence misses a court deadline for a pre-trial application without good reason. What is the most accurate risk?",
    choices: [
      "No consequence; deadlines are optional",
      "The court may refuse the application, adjournment is less likely, and sanctions/criticism may follow",
      "The case is automatically dismissed",
      "The prosecution must withdraw"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Courts expect compliance; late applications risk refusal, loss of adjournment, and procedural consequences.",
      whyWrong: [
        "Deadlines matter in criminal case management.",
        "—",
        "Dismissal is not automatic.",
        "The prosecution is not required to withdraw."
      ]
    }
  },
  {
    topic: "Adjournments — modern approach",
    q: "Which statement best reflects the modern approach to adjournments in a case-managed system?",
    choices: [
      "Adjournments are granted whenever requested",
      "Adjournments should be avoided unless necessary; parties are expected to be ready and comply with directions",
      "Adjournments are never permitted",
      "Only the prosecution can request adjournments"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Case management aims to reduce avoidable delay; adjournments are not routine and must be justified.",
      whyWrong: [
        "Routine adjournments undermine effective trial management.",
        "—",
        "Adjournments are sometimes necessary, so 'never' is wrong.",
        "Either party may request, but must justify."
      ]
    }
  },
  {
    topic: "Witness management — who should attend",
    q: "Which principle best reflects witness management under effective case management?",
    choices: [
      "All witnesses should attend court in every case",
      "Only witnesses needed on genuinely disputed, relevant issues should attend",
      "No witnesses should attend; rely on documents only",
      "Witness attendance is decided by the police only"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The court aims to avoid unnecessary witness attendance and focus on disputed issues to run an effective trial.",
      whyWrong: [
        "That is inefficient and often unnecessary.",
        "—",
        "Some cases require live witnesses; it depends on issues.",
        "Witness requirements are a court case management issue, not solely police."
      ]
    }
  },
  {
    topic: "Admissions — s9 style statement concept",
    q: "If a witness statement is agreed/admitted (rather than requiring live attendance), what is the main benefit?",
    choices: [
      "It prevents cross-examination even if fairness requires it",
      "It can shorten the trial and reduce witness inconvenience when the evidence is not truly disputed",
      "It guarantees conviction",
      "It automatically excludes defence evidence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Agreed evidence can streamline the trial where the content is not genuinely disputed, saving court and witness time.",
      whyWrong: [
        "Fairness may still require live evidence where disputed; admission is not automatic in every scenario.",
        "—",
        "It does not guarantee any verdict.",
        "It does not exclude defence evidence."
      ]
    }
  },
  {
    topic: "Pre-trial hearing — identifying issues",
    q: "At a pre-trial hearing, which is the best way to present the defence position for case management purposes?",
    choices: [
      "Refuse to identify any issues until trial",
      "Identify what is agreed and what is disputed, and what directions are needed to resolve or prepare for the disputed issues",
      "Argue the entire closing speech",
      "Only discuss bail"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Good case management focuses the court on real disputes and what steps are required to make trial effective.",
      whyWrong: [
        "Refusal undermines effective directions and can cause late problems.",
        "—",
        "A closing speech is not appropriate at this stage.",
        "Bail is not the purpose of most PTR/CMH hearings."
      ]
    }
  },
  {
    topic: "Expert evidence — early control",
    q: "Why does the court control expert evidence early (permission, issues, timetable)?",
    choices: [
      "To stop experts being used at all",
      "To ensure experts are used only where necessary and on defined issues, with realistic deadlines",
      "To allow unlimited experts for each side",
      "To decide guilt based on the expert report alone"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Expert evidence can cause delay and cost; early control keeps it necessary, focused, and timely.",
      whyWrong: [
        "Experts are allowed where needed; the point is control and necessity.",
        "—",
        "Unlimited experts undermines proportionality.",
        "Guilt is decided at trial, not by permission decisions."
      ]
    }
  },
  {
    topic: "Variation of directions — when justified",
    q: "When is an application to vary case management directions most likely to succeed?",
    choices: [
      "Whenever a party forgot the deadline",
      "Where there is a good reason/material change and the variation will not derail the effective trial timetable",
      "Whenever the defendant asks",
      "Only if the prosecution consents"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The court expects compliance, but can vary directions for good reason, especially if the trial can remain effective and fair.",
      whyWrong: [
        "Forgetting is rarely a good reason.",
        "—",
        "It depends on reasons and impact, not request alone.",
        "Consent helps but is not always required if the court is satisfied."
      ]
    }
  },
  {
    topic: "Disclosure — defence engagement",
    q: "Which approach best supports effective disclosure and case management in a not guilty case?",
    choices: [
      "Defence keeps the case theory secret until trial and makes broad disclosure demands",
      "Defence identifies the real issues (e.g., identity, self-defence, intent) so disclosure and witness issues can be focused",
      "Defence refuses to read served material",
      "Defence asks for every document ever created"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Issue-focused engagement helps the court and parties manage disclosure proportionately and avoid wasted work and late surprises.",
      whyWrong: [
        "Ambush and blanket demands are inefficient and often ineffective.",
        "—",
        "Not reading material undermines readiness.",
        "Overbroad requests are unlikely to be proportionate."
      ]
    }
  },
  {
    topic: "Trial readiness — confirmation",
    q: "Why might the court require parties to confirm readiness shortly before trial?",
    choices: [
      "To create extra paperwork",
      "To catch problems early (missing witnesses, unresolved applications, disclosure issues) and avoid day-of-trial collapse",
      "To force a guilty plea",
      "To decide sentence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Readiness checks reduce cracked/ineffective trials by identifying and fixing issues before witnesses attend.",
      whyWrong: [
        "The purpose is practical effectiveness, not paperwork for its own sake.",
        "—",
        "It does not compel pleas.",
        "Sentencing is separate."
      ]
    }
  },
  {
    topic: "Case management — what the court wants from you",
    q: "In a pre-trial case management hearing, what does the court most want from advocates?",
    choices: [
      "Surprises and late applications",
      "A clear issues list, proposed directions, and realistic time estimates, with solutions to anticipated problems",
      "A speech on why the system is unfair",
      "Only mitigation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The court is trying to make the trial effective; it needs clarity, proposals, and practical solutions.",
      whyWrong: [
        "Surprises cause ineffective trials and wasted costs.",
        "—",
        "General complaints don’t help manage this case.",
        "Mitigation is relevant after conviction/plea, not CMH."
      ]
    }
  },
  {
    topic: "Late guilty plea — case management angle",
    q: "A defendant indicates they may plead guilty later, but not at the key pre-trial stage. What is the best case-management consequence to keep in mind?",
    choices: [
      "There is no impact at all",
      "Late pleas can waste trial preparation and may reduce the sentencing credit compared with an early guilty plea",
      "It guarantees a higher sentence than the maximum",
      "It automatically cancels all directions"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Late pleas can cause cracked trials and wasted work; the system incentivises early pleas and may reduce credit later.",
      whyWrong: [
        "It can have real system and sentencing-credit consequences.",
        "—",
        "It does not guarantee a sentence above the maximum.",
        "Directions usually remain unless varied by the court."
      ]
    }
  },
  {
    topic: "Linking issues to directions — best practice",
    q: "Prosecution relies on CCTV; defence disputes identification. Which direction is most logically case-management focused?",
    choices: [
      "No directions needed; decide at trial",
      "Timetable for service of CCTV, any expert evidence on image analysis if sought, and identification of witnesses needed",
      "Order the defendant to confess",
      "Ban any defence applications"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Directions should flow from the disputed issue: secure the CCTV, set service deadlines, and decide whether expert evidence is necessary.",
      whyWrong: [
        "Leaving it to trial risks adjournment and unfairness.",
        "—",
        "The court cannot order confession.",
        "A blanket ban is not proper; the court manages timing and necessity."
      ]
    }
  },
  {
    topic: "Consequences — ineffective trial risk",
    q: "Which situation most commonly causes an 'ineffective trial' that case management tries to prevent?",
    choices: [
      "Early agreement of admissions",
      "Late disclosure problems or late applications causing the trial to be adjourned on the day",
      "Accurate time estimates",
      "Early identification of special measures needs"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Late disclosure and last-minute applications are classic causes of day-of-trial adjournments and wasted listings.",
      whyWrong: [
        "Admissions tend to reduce trial length and risk.",
        "—",
        "Accurate estimates support effective listing.",
        "Early special measures planning supports effective trials."
      ]
    }
  },
  {
    topic: "Defence witness planning — why early",
    q: "Why does the system encourage early identification of defence witnesses (where required/appropriate)?",
    choices: [
      "To intimidate witnesses",
      "To allow fair planning: listing, witness warnings, and focused disclosure and trial preparation",
      "To stop the defence calling witnesses",
      "To guarantee conviction"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Early witness planning helps the court manage the trial fairly and efficiently and avoids last-minute disruption.",
      whyWrong: [
        "It is not about intimidation.",
        "—",
        "It does not prevent calling witnesses; it manages fairness and timing.",
        "It does not decide guilt."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Criminal Practice | Chapter 5 | Case Management",
    subtitle: "Overriding objective, duties, directions, and trial preparation.",
    questions: questions
  };
})();
  
