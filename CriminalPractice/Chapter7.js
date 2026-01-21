(() => {
  const questions = [
  {
    topic: "Structure — where the rules live",
    q: "Which statement best reflects where the Criminal Procedure Rules set out trial order for magistrates’ and Crown Court trials?",
    choices: [
      "Only in the Civil Procedure Rules",
      "CrimPR Part 24 covers trial in the magistrates’ court; Part 25 covers trial in the Crown Court",
      "Only in the Police and Criminal Evidence Act 1984",
      "Only in the Magistrates’ Courts Act 1980"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The CrimPR provide dedicated Parts for trial procedure: Part 24 (magistrates’ court) and Part 25 (Crown Court).",
      whyWrong: [
        "Civil procedure rules do not govern criminal trials.",
        "—",
        "PACE governs police powers and some evidence rules; it’s not the trial-order rulebook.",
        "MCA 1980 contains important procedure, but CrimPR set out the modern trial order framework."
      ]
    }
  },
  {
    topic: "Magistrates’ court — who decides facts",
    q: "In a summary trial in the magistrates’ court, who determines the verdict?",
    choices: [
      "The jury",
      "The prosecution",
      "The magistrates (or District Judge) as tribunal of fact",
      "The police officer in charge"
    ],
    correct: 2,
    explain: {
      whyRight:
        "There is no jury in the magistrates’ court; magistrates (or a District Judge) decide facts and deliver the verdict.",
      whyWrong: [
        "Juries sit in the Crown Court, not in summary trials.",
        "The prosecution does not decide guilt.",
        "—",
        "Police do not decide verdicts."
      ]
    }
  },
  {
    topic: "Crown Court — roles",
    q: "Which best describes the division of roles in a Crown Court jury trial?",
    choices: [
      "Judge decides facts; jury decides law",
      "Jury decides facts/verdict; judge decides law and sentence",
      "Jury decides sentence; judge decides verdict",
      "Magistrates decide both law and facts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In the Crown Court, the jury determines the verdict (facts); the judge determines law, admissibility, directions, and sentence.",
      whyWrong: [
        "That reverses the roles.",
        "—",
        "The jury does not sentence.",
        "Magistrates do not determine verdicts in the Crown Court."
      ]
    }
  },
  {
    topic: "Order — prosecution case first",
    q: "Which is the standard position at the start of a criminal trial (magistrates’ or Crown Court)?",
    choices: [
      "Defence opens and calls evidence first",
      "Prosecution opens and presents its case first",
      "The judge cross-examines the defendant first",
      "There are no openings in criminal trials"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The prosecution bears the burden and ordinarily opens and calls evidence first.",
      whyWrong: [
        "Defence does not usually go first in criminal trials.",
        "—",
        "Judges do not start by cross-examining the defendant.",
        "Openings are common and assist the tribunal/jury."
      ]
    }
  },
  {
    topic: "Half-time submission — what it is",
    q: "A 'no case to answer' submission is typically made:",
    choices: [
      "Before any evidence is heard",
      "At the close of the prosecution case",
      "Only after the verdict",
      "Only during sentencing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A no case submission is classically made after the prosecution has closed its evidence.",
      whyWrong: [
        "It is not usually made before evidence, because it tests sufficiency of prosecution evidence.",
        "—",
        "It must be decided before verdict.",
        "It is not part of sentencing."
      ]
    }
  },
  {
    topic: "Half-time submission — Galbraith core",
    q: "Which statement best reflects the Galbraith approach to 'no case to answer'?",
    choices: [
      "If the judge dislikes the evidence, the case must stop",
      "If there is no evidence, or the evidence is so weak that no properly directed tribunal/jury could convict, the case should not proceed",
      "If the defence refuses to call evidence, the case must stop",
      "If the prosecution has many witnesses, there is always a case to answer"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Galbraith: stop the case where there is no evidence, or where evidence is so weak/defective that conviction would be unsafe for a properly directed tribunal/jury.",
      whyWrong: [
        "Personal preference is not the test.",
        "—",
        "Defence silence does not automatically stop a case.",
        "Quantity of witnesses is not the legal test."
      ]
    }
  },
  {
    topic: "Half-time submission — who decides",
    q: "Who decides a 'no case to answer' submission?",
    choices: [
      "The jury",
      "The judge (or magistrates/DJ), as a legal sufficiency ruling",
      "The defendant",
      "The press"
    ],
    correct: 1,
    explain: {
      whyRight:
        "No case to answer is a legal ruling on sufficiency, decided by the judge (or magistrates/DJ).",
      whyWrong: [
        "The jury decides verdict, not admissibility/sufficiency rulings.",
        "—",
        "Defendant does not decide legal rulings.",
        "Media have no role."
      ]
    }
  },
  {
    topic: "Closing speeches — general order",
    q: "After all evidence is heard, which is the usual order of final speeches described in mainstream court explanations?",
    choices: [
      "Defence then prosecution",
      "Prosecution then defence",
      "Judge then jury",
      "No final speeches occur"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A common description is prosecution summarises first, then defence makes the final statement before verdict deliberations.",
      whyWrong: [
        "That reverses the common order described in general guidance.",
        "—",
        "Judge directions/summing up are separate from advocates’ final speeches.",
        "Final speeches are a normal feature of trials."
      ]
    }
  },
  {
    topic: "Magistrates’ court — verdict step",
    q: "In the magistrates’ court, after closing speeches, what happens next?",
    choices: [
      "Jury retires to consider verdict",
      "Magistrates/District Judge retire (or consider) and then deliver the verdict",
      "The prosecution sentences immediately",
      "The defence must file an indictment"
    ],
    correct: 1,
    explain: {
      whyRight:
        "There is no jury; the tribunal (magistrates/DJ) considers the evidence and returns the verdict.",
      whyWrong: [
        "Jury retirement is a Crown Court feature.",
        "—",
        "Sentencing follows only if guilty/convicted (and is for the court).",
        "Indictments are Crown Court documents."
      ]
    }
  },
  {
    topic: "Crown Court — judge’s summing up timing",
    q: "In a Crown Court jury trial, the judge’s summing up typically happens:",
    choices: [
      "Before any evidence is heard",
      "After closing speeches and before the jury retires to deliberate",
      "Only after the jury returns a verdict",
      "Only during sentencing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The judge sums up the law and reviews the evidence after speeches, before the jury deliberates.",
      whyWrong: [
        "Summing up is not usually before evidence.",
        "—",
        "It must happen before the jury’s verdict.",
        "Sentencing is separate."
      ]
    }
  },
  {
    topic: "Crown Court — what summing up includes",
    q: "Which best describes the two core elements commonly identified in a judge’s summing up to the jury?",
    choices: [
      "Civil directions and costs budgeting",
      "Directions of law and a summary/review of the evidence and the parties’ cases",
      "A police briefing and sentencing decision",
      "A witness statement reading and verdict"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The summing up generally covers legal directions and a review of the evidence/cases before the jury decides.",
      whyWrong: [
        "Civil procedure concepts are irrelevant.",
        "—",
        "Sentencing is not part of summing up to the jury.",
        "Verdict is for the jury after deliberation."
      ]
    }
  },
  {
    topic: "Jury verdicts — majority basics",
    q: "Which statement best reflects the statutory position on majority verdicts in England & Wales?",
    choices: [
      "Majority verdicts are never permitted",
      "Majority verdicts may be accepted, with thresholds set by statute (e.g., 10–2 with 12 jurors)",
      "A verdict must always be 7–5",
      "A judge can choose any majority they like"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 17 Juries Act 1974 provides for majority verdicts with set thresholds (depending on jury size).",
      whyWrong: [
        "Majority verdicts are permitted in defined circumstances.",
        "—",
        "That is not the statutory scheme.",
        "The judge cannot invent thresholds outside statute."
      ]
    }
  },
  {
    topic: "Jury verdicts — threshold example",
    q: "With a full jury of 12, which majority verdict is recognised by the statutory scheme?",
    choices: [
      "8–4",
      "10–2",
      "9–3",
      "6–6"
    ],
    correct: 1,
    explain: {
      whyRight:
        "For 12 jurors, one recognised majority is 10–2 under the statutory scheme.",
      whyWrong: [
        "Not the standard statutory threshold.",
        "—",
        "Not the standard statutory threshold.",
        "A tie is not a verdict."
      ]
    }
  },
  {
    topic: "Handling legal disputes — jury absence",
    q: "Why are some legal arguments (e.g., admissibility) handled without the jury present in the Crown Court?",
    choices: [
      "To entertain the lawyers",
      "To avoid the jury being prejudiced by hearing inadmissible or contested material",
      "Because juries are not allowed to sit down",
      "Because the prosecution must always win"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The point is to prevent prejudice: the jury should not hear material that may be ruled inadmissible.",
      whyWrong: [
        "It’s not for entertainment.",
        "—",
        "That is nonsense.",
        "Procedure is about fairness, not outcomes."
      ]
    }
  },
  {
    topic: "Defence case — choice to call evidence",
    q: "Which statement is most accurate about the defence case at trial?",
    choices: [
      "The defence must call the defendant to give evidence",
      "The defence may choose to call evidence (including the defendant), but is not forced to do so",
      "The defence can never call witnesses",
      "The defence must prove innocence beyond reasonable doubt"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The defence can choose whether to call evidence; the prosecution bears the burden of proof.",
      whyWrong: [
        "The defendant is not compelled to give evidence (subject to consequences of silence in some contexts).",
        "—",
        "Defence witnesses can be called.",
        "The defence does not bear the burden to prove innocence."
      ]
    }
  },
  {
    topic: "Trial focus — why admissions matter",
    q: "Why do courts encourage admissions of undisputed facts/documents before or at trial?",
    choices: [
      "To prevent cross-examination entirely",
      "To shorten the trial and focus on genuinely disputed issues",
      "To remove the presumption of innocence",
      "To guarantee conviction"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Admissions streamline proceedings by removing issues that are not genuinely in dispute.",
      whyWrong: [
        "Admissions don’t abolish cross-examination where issues remain.",
        "—",
        "Admissions don’t remove the presumption of innocence.",
        "They don’t guarantee outcomes."
      ]
    }
  },
  {
    topic: "Comparative — magistrates vs Crown",
    q: "Which is a key procedural difference between a magistrates’ court trial and a Crown Court jury trial?",
    choices: [
      "There is never cross-examination in the magistrates’ court",
      "The Crown Court has a jury who decides facts; the magistrates’ court does not",
      "The magistrates’ court uses indictments",
      "The Crown Court cannot hear witness evidence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Crown Court jury decides facts; magistrates’ court does not have a jury.",
      whyWrong: [
        "Cross-examination exists in magistrates’ trials.",
        "—",
        "Indictments are Crown Court documents.",
        "Crown Court routinely hears witness evidence."
      ]
    }
  },
  {
    topic: "Galbraith — what it is NOT",
    q: "Which is NOT the purpose of a Galbraith 'no case to answer' submission?",
    choices: [
      "To test whether there is legally sufficient prosecution evidence to proceed",
      "To ask the tribunal/judge to stop the case before the defence is called",
      "To argue that the defence version is more believable",
      "To prevent unsafe convictions where evidence is missing or too weak"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A no case submission is not a credibility contest between competing defence/prosecution narratives; it’s a legal sufficiency test.",
      whyWrong: [
        "This is exactly what it does.",
        "This is a common effect of a successful submission.",
        "—",
        "This is one of the policy reasons behind the test."
      ]
    }
  },
  {
    topic: "Crown Court — where verdict comes from",
    q: "After the judge’s summing up, what is the next step in a Crown Court jury trial?",
    choices: [
      "The jury retires to consider its verdict",
      "The judge sentences immediately",
      "The prosecution files a requisition",
      "The magistrates retire"
    ],
    correct: 0,
    explain: {
      whyRight:
        "The jury retires to deliberate after summing up.",
      whyWrong: [
        "—",
        "Sentencing follows only after a guilty verdict (or plea).",
        "Requisitions are for starting cases, not post-summing up.",
        "Magistrates are not the tribunal in Crown Court."
      ]
    }
  },
  {
    topic: "Magistrates’ court — sentence after conviction",
    q: "Which is most accurate once a defendant is convicted in the magistrates’ court?",
    choices: [
      "The jury determines sentence",
      "The court proceeds to sentencing (immediately or adjourned), applying relevant sentencing principles",
      "The prosecution chooses the sentence",
      "The case automatically transfers to the Crown Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Sentencing is for the court; it may be immediate or adjourned depending on reports/needs.",
      whyWrong: [
        "No jury in magistrates’ court.",
        "—",
        "The prosecution does not choose sentence.",
        "Transfer is not automatic; it depends on powers and procedure."
      ]
    }
  },
  {
    topic: "Current powers — magistrates custody (update awareness)",
    q: "Which statement best reflects the recent position on magistrates’ custody sentencing powers (single either-way offence), relevant to venue/practice discussions?",
    choices: [
      "They were extended from 6 to 12 months with effect from November 2024",
      "They were reduced from 12 to 6 months in 2024",
      "They are always 24 months",
      "They depend entirely on the defendant’s income"
    ],
    correct: 0,
    explain: {
      whyRight:
        "There was a policy change extending magistrates’ sentencing range to 12 months with effect from November 2024 (subject to the offence and statutory framework).",
      whyWrong: [
        "—",
        "That reverses the direction of the extension.",
        "24 months is not the baseline position; it is discussed in proposals, not the established default.",
        "Income affects fines, not the maximum custody powers in this way."
      ]
    }
  },
  {
    topic: "Reforms — proposals vs current law",
    q: "You read that magistrates may get 18-month custody powers and some jury trials may be reduced by 'swift courts'. What is the safest exam approach?",
    choices: [
      "Assume it is already law and apply it automatically",
      "Treat it as proposal/legislation-in-progress unless your materials confirm it is in force, and answer using current tested law",
      "Ignore all criminal procedure updates forever",
      "Apply civil procedure rules instead"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Reform announcements exist, but for SQE you should apply the law in force and the content your course is testing unless clearly updated.",
      whyWrong: [
        "Assuming in-force changes can make your answer wrong.",
        "—",
        "You should stay updated, not ignore changes.",
        "Civil rules don’t govern criminal trials."
      ]
    }
  },
  {
    topic: "Verdicts — where majority rules sit",
    q: "Which statute provides the key framework for majority verdicts in Crown Court jury trials?",
    choices: [
      "Juries Act 1974",
      "Magistrates’ Courts Act 1980",
      "Police and Criminal Evidence Act 1984",
      "Criminal Justice and Public Order Act 1994"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Section 17 Juries Act 1974 sets out majority verdict rules and thresholds.",
      whyWrong: [
        "—",
        "MCA 1980 does not set jury majority thresholds.",
        "PACE is about police powers/evidence fairness, not jury majorities.",
        "CJPOA 1994 has major provisions, but not the core majority verdict thresholds."
      ]
    }
  },
  {
    topic: "Practical advocacy — why time estimates matter",
    q: "Why are realistic time estimates important in trial procedure and case management?",
    choices: [
      "They decide guilt",
      "They help the court list the case effectively and reduce ineffective trials/adjournments",
      "They replace disclosure duties",
      "They prevent cross-examination"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Accurate estimates support efficient listing and reduce day-of-trial collapse.",
      whyWrong: [
        "They don’t decide guilt.",
        "—",
        "Disclosure remains mandatory.",
        "Cross-examination is unaffected."
      ]
    }
  },
  {
    topic: "Comparative — the tribunal’s legal knowledge",
    q: "Why is the judge’s summing up a key feature of Crown Court trials but not a direct equivalent in magistrates’ trials?",
    choices: [
      "Because magistrates never hear evidence",
      "Because the jury needs legal directions from the judge before deliberation, whereas magistrates/DJ determine law and fact themselves",
      "Because juries sentence defendants",
      "Because the defence does not make closing speeches in the Crown Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A jury needs legal directions and a structured review before deliberation; magistrates/DJ are the tribunal of law and fact.",
      whyWrong: [
        "Magistrates’ courts do hear evidence.",
        "—",
        "Juries do not sentence.",
        "Defence closing speeches do occur in the Crown Court."
      ]
    }
  },
  {
    topic: "Evidence handling — protecting fairness",
    q: "If a legal argument could expose the jury to inadmissible prejudicial material, what is the typical procedural safeguard?",
    choices: [
      "Discuss it loudly in front of the jury anyway",
      "Hear the argument in the jury’s absence and rule before the jury hears the material",
      "Ask the jury to decide admissibility",
      "Let the police decide"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The safeguard is to keep the jury out and have the judge rule first, preventing prejudice.",
      whyWrong: [
        "That risks unfairness.",
        "—",
        "Admissibility is for the judge, not jury.",
        "Police do not decide admissibility."
      ]
    }
  },
  {
    topic: "End of trial — what happens next",
    q: "Once a verdict is delivered, what is the general next step if the verdict is guilty?",
    choices: [
      "Immediate appeal to the Supreme Court",
      "Proceed to sentencing (immediately or after reports), which is for the judge/magistrates, not the jury",
      "The jury sets the sentence",
      "Automatic dismissal of all other charges"
    ],
    correct: 1,
    explain: {
      whyRight:
        "After a guilty verdict, the court proceeds to sentence (or adjourns for reports).",
      whyWrong: [
        "Supreme Court appeals are rare and not the immediate next step.",
        "—",
        "The jury does not sentence.",
        "Other charges are not automatically dismissed."
      ]
    }
  },
  {
    topic: "Galbraith — timing nuance",
    q: "Why is a 'no case to answer' submission often called a 'half-time' submission?",
    choices: [
      "Because it is made halfway through the day",
      "Because it is made after the prosecution closes, before the defence case begins",
      "Because it is only available in the afternoon",
      "Because it happens after sentencing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "It sits at the halfway point of the trial: after prosecution evidence, before any defence evidence (if any).",
      whyWrong: [
        "It is not about the clock.",
        "—",
        "Not time-of-day dependent.",
        "It is not post-sentencing."
      ]
    }
  },
  {
    topic: "Jury deliberations — why majority matters",
    q: "What is the main practical reason the law allows majority verdicts under statute?",
    choices: [
      "To remove the presumption of innocence",
      "To reduce hung juries where near-unanimity is reached, while keeping a high threshold",
      "To guarantee quicker convictions",
      "To stop defence counsel making speeches"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Majority verdicts aim to prevent deadlock where there is a strong consensus, with high thresholds defined by statute.",
      whyWrong: [
        "It does not remove the presumption of innocence.",
        "—",
        "It is not designed to guarantee convictions, just to avoid deadlock.",
        "It has nothing to do with speeches."
      ]
    }
  },
  {
    topic: "Magistrates’ trial — absence of jury",
    q: "Which statement best explains why majority verdict rules do not apply in the magistrates’ court?",
    choices: [
      "Because magistrates are not allowed to retire",
      "Because there is no jury; the tribunal itself decides the verdict",
      "Because all magistrates’ trials are civil",
      "Because the prosecution chooses the verdict"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Majority verdict rules apply to juries; magistrates’ trials are decided by the tribunal (magistrates/DJ).",
      whyWrong: [
        "Magistrates can retire to consider their decision.",
        "—",
        "Magistrates’ criminal trials are criminal, not civil.",
        "Prosecution does not choose verdict."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Criminal Practice | Chapter 7 | Trial Process",
    subtitle: "Magistrates vs Crown Court trial order and roles.",
    questions: questions
  };
})();
  
