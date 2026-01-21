(() => {
  const questions = [
  {
    topic: "Magistrates → Crown Court — right of appeal (MCA 1980 s108)",
    q: "D is convicted in the magistrates’ court after pleading guilty. What can D appeal under MCA 1980 s108?",
    choices: [
      "Conviction only",
      "Sentence only",
      "Conviction and sentence",
      "Neither, because a guilty plea bars appeal"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under MCA 1980 s108, if D pleaded guilty in the magistrates’ court, the appeal to the Crown Court lies against sentence only.",
      whyWrong: [
        "A guilty plea does not permit an appeal against conviction under s108.",
        "—",
        "Conviction appeals under s108 depend on a not guilty plea.",
        "A guilty plea does not bar a sentence appeal under s108."
      ]
    }
  },
  {
    topic: "Magistrates → Crown Court — scope where not guilty plea",
    q: "D pleaded not guilty in the magistrates’ court but was convicted. What is D entitled to appeal to the Crown Court under MCA 1980 s108?",
    choices: [
      "Conviction and/or sentence",
      "Sentence only",
      "Conviction only, never sentence",
      "Only points of law"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Where D did not plead guilty, MCA 1980 s108 allows an appeal to the Crown Court against conviction or sentence (or both).",
      whyWrong: [
        "—",
        "Sentence-only applies to guilty pleas.",
        "D can appeal sentence as well as conviction.",
        "An s108 appeal is not limited to points of law; it is a rehearing."
      ]
    }
  },
  {
    topic: "Magistrates → Crown Court — time limit",
    q: "What is the usual time limit for serving notice of appeal from the magistrates’ court to the Crown Court?",
    choices: [
      "7 days",
      "14 days",
      "21 days",
      "28 days"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A notice of appeal to the Crown Court must be filed within 21 days after the magistrates’ court decision.",
      whyWrong: [
        "7 days is not the standard statutory time limit for this route.",
        "14 days is not the standard statutory time limit for this route.",
        "—",
        "28 days is the key time limit for Crown Court → Court of Appeal notices."
      ]
    }
  },
  {
    topic: "Magistrates → Crown Court — nature of appeal",
    q: "Which best describes an appeal to the Crown Court under MCA 1980 s108?",
    choices: [
      "A paper review limited to legal errors",
      "A complete rehearing (no jury) where evidence may be heard again",
      "A judicial review on public law grounds",
      "A leapfrog appeal to the Supreme Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "An s108 appeal is a rehearing in the Crown Court rather than a narrow legal review.",
      whyWrong: [
        "That describes case stated/JR territory, not s108.",
        "—",
        "Judicial review is a separate route.",
        "There is no direct 'leapfrog' from magistrates to the Supreme Court."
      ]
    }
  },
  {
    topic: "Magistrates → Crown Court — sentence risk",
    q: "On an appeal against sentence from the magistrates’ court to the Crown Court, which statement is most accurate?",
    choices: [
      "The Crown Court can only reduce the sentence",
      "The Crown Court can increase the sentence but not beyond magistrates’ powers",
      "The Crown Court must impose the same sentence",
      "The Crown Court can increase the sentence without limit"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Crown Court may vary the sentence (including increasing it) but cannot exceed what the magistrates’ court could have imposed.",
      whyWrong: [
        "Increase is possible, so an appellant must be warned about risk.",
        "—",
        "The Crown Court is not bound to keep the original sentence.",
        "Any increase remains capped by magistrates’ sentencing powers for the offence(s)."
      ]
    }
  },
  {
    topic: "Bail pending appeal — magistrates’ court duty (MCA 1980 s113)",
    q: "D has lodged a valid notice of appeal to the Crown Court and applies for bail pending appeal. What is the magistrates’ court position?",
    choices: [
      "It must consider the bail application",
      "It has no power to grant bail once an appeal is lodged",
      "Bail pending appeal is only available in the Crown Court",
      "Bail is automatic once notice is filed"
    ],
    correct: 0,
    explain: {
      whyRight:
        "MCA 1980 s113 creates an obligation on the magistrates’ court to consider an application for bail pending appeal where notice is properly lodged and a proper bail application is made.",
      whyWrong: [
        "—",
        "The magistrates’ court can deal with bail pending appeal under the statutory scheme.",
        "Bail pending appeal is not confined to the Crown Court only.",
        "Bail is not automatic; it requires an application and consideration."
      ]
    }
  },
  {
    topic: "Case stated — purpose (MCA 1980 s111)",
    q: "An appeal 'by way of case stated' from a magistrates’ court is primarily used to challenge:",
    choices: [
      "Errors of law or jurisdiction",
      "Findings of fact only",
      "The fairness of jury directions",
      "The adequacy of legal aid"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Case stated under MCA 1980 s111 is aimed at questions of law and/or jurisdiction arising from the magistrates’ court decision.",
      whyWrong: [
        "—",
        "Pure fact re-argument is not the core function of case stated.",
        "Jury directions relate to Crown Court trials.",
        "Legal aid decisions are not challenged via criminal case stated."
      ]
    }
  },
  {
    topic: "Case stated — time limit (MCA 1980 s111(2))",
    q: "What is the statutory time limit for applying to the magistrates’ court to state a case under MCA 1980 s111(2)?",
    choices: [
      "21 days after the decision",
      "28 days after the decision",
      "3 months after the decision",
      "No time limit"
    ],
    correct: 0,
    explain: {
      whyRight:
        "MCA 1980 s111(2) requires the application to be made within 21 days after the day the decision was given.",
      whyWrong: [
        "—",
        "28 days is not the statutory limit in s111(2).",
        "3 months is not the s111(2) time limit.",
        "There is a strict statutory time limit."
      ]
    }
  },
  {
    topic: "Case stated — refusal to state a case",
    q: "If the magistrates’ court refuses to state a case, what remedy may be available to compel it to do so?",
    choices: [
      "Apply to the High Court for a mandatory order (MCA 1980 s111(6))",
      "Appeal directly to the Supreme Court",
      "Ask the CPS to reverse the conviction",
      "Apply for a civil injunction in the county court"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Where a magistrates’ court refuses to state a case, MCA 1980 s111(6) provides for an application to the High Court for a mandatory order requiring a case to be stated.",
      whyWrong: [
        "—",
        "There is no direct route to the Supreme Court from a magistrates’ refusal to state a case.",
        "The CPS cannot 'reverse' a conviction.",
        "A county court injunction is not the route to compel a case stated."
      ]
    }
  },
  {
    topic: "Judicial review — when used",
    q: "Judicial review of a magistrates’ court decision is most likely to be appropriate where:",
    choices: [
      "There is an adequate statutory appeal route that should be used instead",
      "There is no adequate alternative remedy and the challenge is on public law grounds",
      "D simply wants the Crown Court to hear witnesses again",
      "D wants a reduction for a guilty plea"
    ],
    correct: 1,
    explain: {
      whyRight:
        "JR is a public law remedy typically used where there is no adequate alternative remedy (or in exceptional urgency) and the decision is challenged on public law grounds.",
      whyWrong: [
        "JR is usually not appropriate if an adequate appeal route exists and should be used.",
        "—",
        "A rehearing is the Crown Court appeal route, not JR.",
        "Guilty plea credit is a sentencing issue, not JR."
      ]
    }
  },
  {
    topic: "Crown Court → Court of Appeal — time limit (CAA 1968 s18)",
    q: "What is the usual time limit for giving notice of appeal/application for leave to appeal to the Court of Appeal (Criminal Division) under the Criminal Appeal Act 1968?",
    choices: [
      "14 days",
      "21 days",
      "28 days",
      "3 months"
    ],
    correct: 2,
    explain: {
      whyRight:
        "CAA 1968 provides that notice must generally be given within 28 days from the date of the conviction/sentence/verdict/finding/decision appealed.",
      whyWrong: [
        "14 days applies to some specialist contexts, but 28 is the core CAA time limit.",
        "21 days is the common magistrates’ time limit (e.g., s108/s111).",
        "—",
        "3 months is not the standard CAA notice time limit."
      ]
    }
  },
  {
    topic: "Crown Court → Court of Appeal — leave requirement",
    q: "Which statement best reflects the need for permission/leave in Crown Court appeals to the Court of Appeal?",
    choices: [
      "Leave is never required",
      "Leave is required unless the trial judge grants a certificate that the case is fit for appeal",
      "Leave is required only for sentence appeals",
      "Leave is required only for conviction appeals"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Leave to appeal is required in relation to conviction or sentence unless the trial judge certifies the case is fit for appeal.",
      whyWrong: [
        "Leave is generally required.",
        "—",
        "The requirement applies to both conviction and sentence (subject to exceptions).",
        "The requirement applies to both conviction and sentence (subject to exceptions)."
      ]
    }
  },
  {
    topic: "Conviction appeals — test (CAA 1968 s2)",
    q: "Under CAA 1968 s2, a conviction appeal is allowed if the Court of Appeal thinks the conviction is:",
    choices: [
      "Unpopular",
      "Unsafe",
      "Politically sensitive",
      "Too old"
    ],
    correct: 1,
    explain: {
      whyRight:
        "CAA 1968 s2 frames the central question as whether the conviction is 'unsafe'.",
      whyWrong: [
        "Popularity is irrelevant.",
        "—",
        "Political sensitivity is not the legal test.",
        "Age alone is not the test (though it may affect evidence/justice)."
      ]
    }
  },
  {
    topic: "Sentence appeals — focus",
    q: "Which is the best general description of a sentence appeal to the Court of Appeal (Criminal Division)?",
    choices: [
      "A re-trial of the entire case with witnesses",
      "A challenge that the sentence was wrong in principle and/or manifestly excessive",
      "A request for the jury to reconsider guilt",
      "A claim for civil damages"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Sentence appeals focus on whether the sentencing decision was wrong in principle or manifestly excessive (or otherwise unlawful).",
      whyWrong: [
        "A full rehearing of facts is not the CA’s typical function.",
        "—",
        "Juries do not reconsider verdicts post-trial in this way.",
        "Damages are not the remedy in a criminal appeal."
      ]
    }
  },
  {
    topic: "Late appeals — extension of time",
    q: "D misses the 28-day time limit for a Crown Court → Court of Appeal appeal. What is the usual procedural solution?",
    choices: [
      "There is no remedy; the Court of Appeal has no power",
      "Apply for an extension of time and explain the delay",
      "Appeal to the county court instead",
      "Ask the trial judge to change the verdict"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Out-of-time appeals require an application for an extension of time, supported by reasons for the delay.",
      whyWrong: [
        "The Court of Appeal can entertain extension applications.",
        "—",
        "County courts do not hear criminal appeals of this type.",
        "A trial judge does not 'change the verdict' (distinct from sentencing corrections)."
      ]
    }
  },
  {
    topic: "Crown Court — correcting sentence without appeal (56-day power)",
    q: "Which statement is most accurate about correcting a Crown Court sentence without going to the Court of Appeal?",
    choices: [
      "The Crown Court can alter a sentence within 56 days of the date it was made",
      "Only the Supreme Court can correct Crown Court errors",
      "The Crown Court can alter a sentence at any time without limit",
      "The magistrates’ court can alter a Crown Court sentence"
    ],
    correct: 0,
    explain: {
      whyRight:
        "The Crown Court has power to alter a sentence or other order within 56 days of the date it was made, which can avoid the need for an appeal in some cases.",
      whyWrong: [
        "—",
        "The Supreme Court is not the routine mechanism for correcting Crown Court sentencing errors.",
        "There are time-limited correction powers; it is not unlimited.",
        "Magistrates’ courts cannot alter Crown Court sentences."
      ]
    }
  },
  {
    topic: "Supreme Court — gateway (general public importance)",
    q: "What must generally be shown for a criminal appeal to the Supreme Court from the Court of Appeal (Criminal Division)?",
    choices: [
      "A disagreement about the facts",
      "A certified point of law of general public importance, plus permission",
      "That the sentence is at least 10 years",
      "That the defendant is unrepresented"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A criminal appeal to the UK Supreme Court generally requires certification of a point of law of general public importance and permission to appeal.",
      whyWrong: [
        "Supreme Court appeals focus on significant points of law, not fact disputes.",
        "—",
        "There is no general '10 years' threshold.",
        "Representation status is not the jurisdictional gateway."
      ]
    }
  },
  {
    topic: "Supreme Court — statutory basis (CAA 1968 s33)",
    q: "Which provision primarily governs appeals from the Court of Appeal (Criminal Division) to the Supreme Court in criminal matters?",
    choices: [
      "Magistrates’ Courts Act 1980 s108",
      "Criminal Appeal Act 1968 s33",
      "Criminal Justice Act 2003 s58",
      "Police and Criminal Evidence Act 1984 s76"
    ],
    correct: 1,
    explain: {
      whyRight:
        "CAA 1968 s33 provides for appeals to the Supreme Court from decisions of the Court of Appeal in criminal matters (subject to restrictions/certification/permission).",
      whyWrong: [
        "s108 is magistrates → Crown Court.",
        "—",
        "s58 is prosecution terminating rulings, not the general UKSC gateway.",
        "PACE s76 concerns confession admissibility."
      ]
    }
  },
  {
    topic: "CrimPR mapping — which Part?",
    q: "Which Criminal Procedure Rules Part most directly governs appeals from the magistrates’ court to the Crown Court?",
    choices: [
      "Part 34",
      "Part 35",
      "Part 39",
      "Part 54"
    ],
    correct: 0,
    explain: {
      whyRight:
        "CrimPR Part 34 covers appeals to the Crown Court (including under MCA 1980 s108).",
      whyWrong: [
        "—",
        "Part 35 is for appeals by way of case stated.",
        "Part 39 relates to Court of Appeal (Criminal Division) procedure.",
        "Part 54 is civil JR procedure (CPR), not CrimPR."
      ]
    }
  },
  {
    topic: "CrimPR mapping — case stated",
    q: "Which Criminal Procedure Rules Part most directly covers applying to state a case for an appeal to the High Court?",
    choices: [
      "Part 34",
      "Part 35",
      "Part 39",
      "Part 1"
    ],
    correct: 1,
    explain: {
      whyRight:
        "CrimPR Part 35 governs appeals to the High Court by case stated.",
      whyWrong: [
        "Part 34 is Crown Court appeals.",
        "—",
        "Part 39 is Court of Appeal procedure.",
        "Part 1 contains overarching rules, not the specific case stated procedure."
      ]
    }
  },
  {
    topic: "Prosecution appeals — terminating rulings (CJA 2003 s58)",
    q: "Under CJA 2003 s58, the prosecution’s general right of appeal concerns:",
    choices: [
      "Any magistrates’ court acquittal",
      "A judge’s ruling in a trial on indictment that has the effect of terminating the trial",
      "Any sentence the prosecution dislikes",
      "Any refusal of legal aid"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 58 allows prosecution appeals (with leave) against certain rulings in indictment trials which have the effect of terminating the trial.",
      whyWrong: [
        "This is not a general appeal against magistrates’ acquittals.",
        "—",
        "Unduly lenient sentence referrals are a different scheme with strict criteria.",
        "Legal aid refusals are not appealed under s58."
      ]
    }
  },
  {
    topic: "Prosecution appeals — leave requirement (s58)",
    q: "Which is most accurate about a prosecution appeal under CJA 2003 s58?",
    choices: [
      "It can be brought only with leave (trial judge or Court of Appeal)",
      "It can be brought as of right without any permission",
      "It is available for summary-only trials",
      "It goes straight to the Supreme Court"
    ],
    correct: 0,
    explain: {
      whyRight:
        "The prosecution may bring a s58 appeal only with the leave of the trial judge or the Court of Appeal.",
      whyWrong: [
        "—",
        "Leave is required.",
        "The general right in s58 is tied to trials on indictment.",
        "The route is to the Court of Appeal, not directly to the Supreme Court."
      ]
    }
  },
  {
    topic: "Unduly lenient sentences — who refers (CJA 1988 s36)",
    q: "Who can refer an unduly lenient sentence to the Court of Appeal under the statutory scheme?",
    choices: [
      "Any member of the public directly",
      "The Attorney General / Law Officers (personally deciding), subject to scheme criteria",
      "The trial jury",
      "The police officer in charge"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under CJA 1988 s36 (and the scheme), the Law Officers can apply for leave to refer qualifying Crown Court sentences that appear unduly lenient.",
      whyWrong: [
        "The public can request consideration, but cannot refer directly.",
        "—",
        "Juries do not control referrals.",
        "Police do not control referrals."
      ]
    }
  },
  {
    topic: "Unduly lenient sentences — strict time limit",
    q: "What is the time limit for referring an unduly lenient sentence under the scheme (and can it be extended)?",
    choices: [
      "14 days; extendable",
      "21 days; extendable",
      "28 days; absolute (no power to extend)",
      "3 months; extendable"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A referral must be made within 28 days of sentence, and the time limit is absolute with no power to extend.",
      whyWrong: [
        "Not the correct scheme time limit and not the correct extension position.",
        "Not the correct scheme time limit and not the correct extension position.",
        "—",
        "Not the correct scheme time limit and not the correct extension position."
      ]
    }
  },
  {
    topic: "CCRC — role",
    q: "Which best describes the Criminal Cases Review Commission (CCRC)?",
    choices: [
      "A court that hears all criminal appeals",
      "A body that can refer cases back to an appeal court if there is a real possibility the conviction will be quashed or the sentence reduced",
      "A prosecution unit that decides charge selection",
      "A jury panel for miscarriages of justice"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The CCRC can refer cases back to the appeal courts where it considers there is a real possibility the conviction will be quashed or the sentence reduced.",
      whyWrong: [
        "The CCRC is not itself a court.",
        "—",
        "Charging decisions are for police/CPS, not the CCRC.",
        "It is not a jury body."
      ]
    }
  },
  {
    topic: "Magistrates appeal choice — best route for facts",
    q: "D wants to argue the magistrates got the facts wrong and key witnesses were unreliable. Which route is usually the most appropriate?",
    choices: [
      "Appeal to the Crown Court under s108 (rehearing)",
      "Appeal by case stated under s111",
      "Supreme Court appeal",
      "Judicial review as the default"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Fact-heavy challenges are usually suited to the Crown Court rehearing route under s108.",
      whyWrong: [
        "—",
        "Case stated is focused on law/jurisdiction rather than re-trying facts.",
        "Supreme Court is for exceptional points of law.",
        "JR is not the default where an adequate appeal route exists."
      ]
    }
  },
  {
    topic: "Magistrates appeal choice — best route for law/jurisdiction",
    q: "D accepts the facts but says the magistrates applied the wrong legal test (error of law). Which route is classically aimed at that type of issue?",
    choices: [
      "Crown Court rehearing only",
      "Case stated to the High Court (MCA 1980 s111)",
      "Jury reconsideration",
      "Appeal to the county court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Case stated under MCA 1980 s111 is the classic route for errors of law/jurisdiction from the magistrates’ court.",
      whyWrong: [
        "A rehearing can sometimes involve law points, but case stated is designed for law/jurisdiction issues.",
        "—",
        "Juries do not reconsider magistrates’ decisions.",
        "County courts do not hear criminal appeals in this way."
      ]
    }
  },
  {
    topic: "Appeal vs JR — principle",
    q: "Which principle is most accurate when choosing between statutory appeal routes and judicial review?",
    choices: [
      "JR is always preferred because it is faster",
      "If a statutory appeal provides an adequate remedy, JR is usually not appropriate",
      "JR is available only after a Supreme Court refusal",
      "Statutory appeals are available only to represented defendants"
    ],
    correct: 1,
    explain: {
      whyRight:
        "JR is generally a remedy of last resort where there is no adequate alternative remedy (e.g., statutory appeal).",
      whyWrong: [
        "JR is not automatically preferred and is tightly controlled.",
        "—",
        "JR is not dependent on Supreme Court refusal.",
        "Representation is not a gateway to statutory appeal rights."
      ]
    }
  },
  {
    topic: "Crown Court guilty plea — appeal possibility",
    q: "D pleaded guilty in the Crown Court. Which statement is most accurate about appealing against conviction?",
    choices: [
      "A guilty plea absolutely prevents any conviction appeal",
      "D can apply for leave to appeal against conviction, but it is generally difficult to obtain",
      "D can appeal as of right without leave",
      "D must go straight to the Supreme Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A guilty plea does not automatically bar a conviction appeal, but leave is required and such appeals are generally difficult.",
      whyWrong: [
        "A guilty plea is a major hurdle but not an absolute bar in every scenario.",
        "—",
        "Leave is generally required.",
        "There is no direct route to the Supreme Court."
      ]
    }
  },
  {
    topic: "Forms/practice — appeal paperwork",
    q: "Which is the best practical starting point for identifying the correct Criminal Procedure Rules forms for appeals and case stated applications?",
    choices: [
      "Civil Procedure Rules Part 52",
      "Gov.uk Criminal Procedure Rules forms guidance (Parts 34 and 35)",
      "The Land Registry practice guide",
      "The Highway Code"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Gov.uk publishes the Criminal Procedure Rules forms guidance, including forms linked to Part 34 (Crown Court appeals) and Part 35 (case stated).",
      whyWrong: [
        "CPR Part 52 is civil appeals, not criminal CrimPR forms.",
        "—",
        "Land Registry guidance is unrelated.",
        "The Highway Code is unrelated."
      ]
    }
  },
  {
    topic: "Exam technique — shortest high-scoring structure",
    q: "In an SQE1 criminal practice appeal question, which structure is most likely to score well?",
    choices: [
      "List every appeal route without matching it to the facts",
      "Identify: (1) which court made the decision, (2) what is challenged (fact/law/sentence), (3) correct route, (4) time limit, (5) permission/leave + key consequences",
      "Discuss only human rights and ignore procedure",
      "Discuss only sentencing guidelines"
    ],
    correct: 1,
    explain: {
      whyRight:
        "SQE answers score by matching the facts to the correct appeal route and then stating the procedural essentials: time limit, permission/leave, and consequences.",
      whyWrong: [
        "Unfocused lists miss marks for application to the scenario.",
        "—",
        "Procedure is central in an appeal chapter question.",
        "Sentencing guidelines are not the core of appeal procedure."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Criminal Practice | Chapter 9 | Appeals",
    subtitle: "Appeals from mags and Crown Court routes and limits.",
    questions: questions
  };
})();
  
