(() => {
  const questions = [
  {
    topic: "PBV — when it applies",
    q: "In which situation does the plea before venue (PBV) procedure primarily apply?",
    choices: [
      "Any offence, including indictable-only",
      "Adult (18+) either-way offences at the first appearance in the magistrates’ court",
      "Only summary-only offences",
      "Only after the case has been allocated to the Crown Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PBV is the gateway procedure for adult either-way offences: the court invites an indication of plea before allocating venue.",
      whyWrong: [
        "Indictable-only offences are sent to the Crown Court; PBV is for either-way cases.",
        "—",
        "Summary-only cases do not require PBV; a plea is taken in the magistrates’ court.",
        "PBV occurs before allocation/sending for trial."
      ]
    }
  },
  {
    topic: "PBV — purpose",
    q: "What is the main purpose of PBV in either-way offences?",
    choices: [
      "To decide guilt or innocence",
      "To obtain an indication of plea before deciding venue and directions",
      "To conduct the trial immediately",
      "To decide sentence in every case"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PBV is about plea indication first, so the court can move straight to sentence steps if guilty, or allocation if not guilty.",
      whyWrong: [
        "PBV is not a fact-finding determination of guilt.",
        "—",
        "Trial does not happen at PBV.",
        "Sentence only follows if there is a guilty plea/indication and the court can deal with it."
      ]
    }
  },
  {
    topic: "PBV — what the court must ensure",
    q: "Before inviting an indication of plea under PBV, the court should primarily ensure:",
    choices: [
      "The prosecution has served full trial evidence",
      "The charge is put to the defendant and the defendant can understand/participate",
      "The jury has been sworn",
      "The defendant has already been allocated to the Crown Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PBV depends on the defendant understanding the charge and being able to participate (including interpreter/vulnerability safeguards).",
      whyWrong: [
        "Full trial service is not required at this stage.",
        "—",
        "There is no jury at the magistrates’ first hearing.",
        "Allocation to Crown happens after PBV if not guilty, or by sending if indictable-only."
      ]
    }
  },
  {
    topic: "PBV — guilty indication effect",
    q: "In an adult either-way offence, D indicates guilty at PBV. Which is most accurate about the next procedural step?",
    choices: [
      "The case must be listed for a magistrates’ court trial",
      "The court proceeds as if there is a guilty plea and moves to sentencing steps (including possible committal for sentence)",
      "The case is automatically dismissed",
      "The court must allocate venue before it can accept the plea"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A guilty indication at PBV is treated procedurally as a guilty plea so the case moves to sentence (or committal for sentence if needed).",
      whyWrong: [
        "A trial is unnecessary following a guilty plea/indication.",
        "—",
        "A guilty indication does not dismiss the case.",
        "Allocation for trial is mainly relevant after a not guilty indication."
      ]
    }
  },
  {
    topic: "PBV — not guilty indication effect",
    q: "D indicates not guilty at PBV in an either-way offence. What must happen next?",
    choices: [
      "The magistrates must commit D for sentence",
      "The magistrates proceed to allocation (mode of trial) decision",
      "The magistrates must send the case to the Crown Court automatically",
      "The magistrates must acquit because D denied the offence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A not guilty indication triggers the allocation (mode of trial) decision: magistrates’ trial or Crown Court trial.",
      whyWrong: [
        "Committal for sentence follows guilt/conviction, not a not guilty indication.",
        "—",
        "Either-way offences are not automatically sent; venue is allocated.",
        "Denial is not an acquittal."
      ]
    }
  },
  {
    topic: "Allocation — what it decides",
    q: "What is the allocation (mode of trial) decision for either-way offences?",
    choices: [
      "Whether the defendant gets legal aid",
      "Whether the case should be tried in the magistrates’ court or the Crown Court",
      "Whether the defendant is guilty",
      "Whether the prosecution must disclose unused material"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Allocation is the venue decision for trial in either-way offences (mags vs Crown).",
      whyWrong: [
        "Legal aid is a separate issue.",
        "—",
        "Guilt is determined at trial or by plea.",
        "Disclosure obligations exist, but allocation is not the disclosure decision."
      ]
    }
  },
  {
    topic: "Allocation — general guideline steer",
    q: "Which statement best reflects the Sentencing Council’s general steer on allocation?",
    choices: [
      "Either-way offences should generally be tried in the Crown Court",
      "Either-way offences should generally be tried summarily unless seriousness/complexity makes Crown Court more appropriate",
      "Either-way offences must always be tried by a jury",
      "Allocation depends only on whether D wants a jury"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The guideline steers toward summary trial as the norm for either-way offences, unless factors point to Crown Court.",
      whyWrong: [
        "Crown Court is not the default venue.",
        "—",
        "Jury trial is not automatic for either-way offences.",
        "Defendant preference is relevant only at the election stage after a summary allocation."
      ]
    }
  },
  {
    topic: "Allocation — key reason to allocate to Crown",
    q: "What is the most common reason a magistrates’ court allocates an either-way case to the Crown Court?",
    choices: [
      "Because the defendant denies the offence",
      "Because the likely sentence exceeds magistrates’ sentencing powers (or the case is too serious/complex for summary trial)",
      "Because the prosecution asks for Crown Court in every case",
      "Because summary trial is unlawful for either-way offences"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A central allocation driver is whether magistrates’ powers are sufficient; seriousness/complexity may require Crown Court trial.",
      whyWrong: [
        "Not guilty is common and does not itself dictate venue.",
        "—",
        "Prosecution views matter but do not dictate venue in every case.",
        "Either-way offences can lawfully be tried summarily."
      ]
    }
  },
  {
    topic: "Allocation — representations",
    q: "At allocation, what should the court do regarding party input?",
    choices: [
      "Refuse to hear from the defence",
      "Hear representations from both parties about suitability for summary trial",
      "Hear only from the prosecution",
      "Decide allocation without any information about the alleged facts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Allocation procedure involves hearing representations from both parties and assessing likely sentence/seriousness.",
      whyWrong: [
        "Defence representations are part of the process.",
        "—",
        "Both sides should be heard.",
        "The court considers the facts alleged (and relevant defence points) when deciding likely sentence and venue."
      ]
    }
  },
  {
    topic: "Allocation — defence role",
    q: "Which is the strongest defence contribution at allocation?",
    choices: [
      "A speech about general fairness only",
      "Focused submissions on likely sentence, mitigation, complexity, and why magistrates’ powers are sufficient",
      "Arguing the complainant is lying in detail",
      "Asking the court to ignore sentencing guidelines"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Allocation is about likely sentence/seriousness and suitability: tailored submissions on powers and complexity matter most.",
      whyWrong: [
        "Fairness rhetoric without venue-focused content is weak.",
        "—",
        "Merits attacks are usually for trial; allocation focuses on suitability.",
        "Guidelines are a key tool for allocation decisions."
      ]
    }
  },
  {
    topic: "After summary allocation — defendant election",
    q: "The magistrates allocate an either-way case as suitable for summary trial. What is most accurate about D’s position next?",
    choices: [
      "D must accept summary trial with no choice",
      "D may be entitled to elect Crown Court trial (jury) following the statutory procedure",
      "The case must be dismissed unless the prosecution consents",
      "The magistrates must still send it to the Crown Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If allocated to summary trial, D is then offered the right (in many either-way cases) to elect Crown Court trial.",
      whyWrong: [
        "Election is a key feature after summary allocation.",
        "—",
        "Dismissal does not follow from election issues.",
        "Either-way offences are not automatically sent after a summary allocation."
      ]
    }
  },
  {
    topic: "Election — consequences",
    q: "D elects Crown Court trial after a summary allocation. What happens?",
    choices: [
      "The case is tried in the magistrates’ court anyway",
      "The case is sent to the Crown Court for trial",
      "The magistrates sentence immediately",
      "The prosecution must restart the case from scratch"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Election means the trial venue becomes the Crown Court and the case is sent there for trial.",
      whyWrong: [
        "Election changes the venue to Crown Court.",
        "—",
        "Sentence follows conviction/plea, not election.",
        "The case continues; it is not restarted from zero."
      ]
    }
  },
  {
    topic: "Indictable-only — sending vs allocation",
    q: "Which is most accurate about indictable-only offences at first appearance?",
    choices: [
      "They are allocated (mode of trial) like either-way offences",
      "They are sent to the Crown Court; allocation is not the route",
      "They must be tried summarily",
      "They can only proceed if D consents"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Indictable-only offences go to Crown Court by sending procedure, not allocation.",
      whyWrong: [
        "Allocation is for either-way offences.",
        "—",
        "Indictable-only cannot be tried summarily.",
        "Defendant consent is not the deciding mechanism."
      ]
    }
  },
  {
    topic: "Allocation — seriousness assessment",
    q: "When deciding allocation, which factor is most directly relevant?",
    choices: [
      "Whether D is polite in court",
      "The likely sentence if convicted, assessed using guidelines and the alleged facts",
      "Whether the complainant has a lawyer",
      "Whether D dislikes juries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Allocation focuses on likely sentence/seriousness and suitability for summary trial, informed by guidelines.",
      whyWrong: [
        "Politeness is irrelevant to venue suitability.",
        "—",
        "Complainant representation is not an allocation factor.",
        "Personal preference is relevant only at election stage, not to the court’s initial assessment."
      ]
    }
  },
  {
    topic: "Allocation — complexity",
    q: "Which scenario most strongly supports allocation to the Crown Court?",
    choices: [
      "A straightforward single-issue theft",
      "Multiple defendants with complex legal issues and extensive evidence likely requiring longer trial management",
      "A minor public order offence",
      "A guilty indication at PBV"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Complexity, multiple defendants, and substantial evidential/legal issues can make Crown Court trial more appropriate.",
      whyWrong: [
        "Straightforward cases often suit summary trial.",
        "—",
        "Minor offences are generally suitable for summary trial.",
        "Guilty indication leads to sentencing steps, not allocation for trial."
      ]
    }
  },
  {
    topic: "PBV — strategic advice on guilty indication",
    q: "Which is the best general solicitor approach before a client indicates guilty at PBV?",
    choices: [
      "Advise guilty immediately to get it over with, regardless of disclosure",
      "Ensure the client understands the charge, obtain sufficient information, and advise on consequences including sentencing and credit",
      "Tell the client to plead guilty to secure bail",
      "Tell the client to plead guilty because it prevents any criminal record"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A guilty indication is significant: you must ensure understanding, advise on consequences, and consider what is known about the case.",
      whyWrong: [
        "Rushing a plea without advice/information risks injustice.",
        "—",
        "Plea decisions should not be traded for bail; risk and merits are separate.",
        "A guilty plea generally results in a conviction and criminal record."
      ]
    }
  },
  {
    topic: "PBV — tactical use of mitigation at allocation",
    q: "Why might defence personal mitigation be raised at allocation?",
    choices: [
      "To decide guilt at allocation",
      "To help the court assess likely sentence and whether magistrates’ powers are sufficient",
      "To cross-examine the complainant",
      "To obtain full disclosure immediately"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Mitigation can affect likely sentence, which is central to whether the case is suitable for summary trial.",
      whyWrong: [
        "Allocation is not a determination of guilt.",
        "—",
        "Cross-examination is for trial.",
        "Allocation does not guarantee full disclosure at that moment."
      ]
    }
  },
  {
    topic: "Committal for sentence — when used",
    q: "In an either-way offence where D pleads guilty, when might the magistrates commit D to the Crown Court for sentence?",
    choices: [
      "Whenever the prosecution asks",
      "When the offence is so serious that magistrates’ sentencing powers may be insufficient",
      "Only where D elects Crown Court trial",
      "Only for summary-only offences"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If magistrates cannot sentence adequately due to seriousness, they can commit to Crown for sentence.",
      whyWrong: [
        "Prosecution request is not the sole test.",
        "—",
        "Election is about trial venue, not sentencing after a guilty plea.",
        "Summary-only offences are sentenced in magistrates’ court."
      ]
    }
  },
  {
    topic: "Allocation — not about preference alone",
    q: "Which statement is most accurate about how venue is decided in either-way offences?",
    choices: [
      "The defendant chooses venue at the start, before PBV",
      "The magistrates first decide suitability for summary trial; only after that may the defendant have a right to elect Crown Court trial",
      "The prosecution always decides venue",
      "Venue depends only on media interest"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The sequence is: PBV → allocation decision by magistrates → if summary allocated, defendant may elect Crown Court trial.",
      whyWrong: [
        "Defendant election does not come before PBV/allocation.",
        "—",
        "Prosecution input matters but does not control the decision.",
        "Media interest is irrelevant."
      ]
    }
  },
  // 10 more (to make 30)
  {
    topic: "PBV — why it matters for case route",
    q: "Why does PBV reduce unnecessary hearings in either-way cases?",
    choices: [
      "It removes the need for disclosure",
      "A guilty indication moves the case straight into sentencing steps without allocation for trial",
      "It prevents any appeal",
      "It guarantees bail"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If D indicates guilty, the case moves to sentence steps rather than allocating for trial venue and listing trial hearings.",
      whyWrong: [
        "Disclosure duties still exist; PBV doesn’t remove them.",
        "—",
        "PBV does not prevent appeals.",
        "Bail is a separate decision."
      ]
    }
  },
  {
    topic: "Allocation — sentencing powers focus",
    q: "At allocation, why is magistrates’ sentencing power central?",
    choices: [
      "Because the court must choose the harshest forum",
      "Because if summary trial is likely to exceed magistrates’ powers, Crown Court trial may be more appropriate",
      "Because magistrates can never sentence for either-way offences",
      "Because sentencing powers determine guilt"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If conviction would likely require greater sentencing powers, that points away from summary trial and towards Crown Court.",
      whyWrong: [
        "The test is suitability, not harshness.",
        "—",
        "Magistrates can sentence for either-way offences within their powers.",
        "Guilt is separate from sentencing powers."
      ]
    }
  },
  {
    topic: "Allocation — prosecutorial facts basis",
    q: "When the court assesses likely sentence for allocation, it primarily considers:",
    choices: [
      "Only the defence version of events",
      "The facts alleged by the prosecution, taking account of relevant defence points and mitigation raised",
      "A random sample of similar cases",
      "Only the defendant’s character references"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Allocation is based on the prosecution’s alleged facts, with defence submissions (including mitigation) considered to gauge likely sentence and suitability.",
      whyWrong: [
        "It is not based solely on the defence account.",
        "—",
        "It is not random; it is case-specific and guideline-led.",
        "Character references alone don’t set the likely sentence framework."
      ]
    }
  },
  {
    topic: "PBV — equivocal indication",
    q: "D says at PBV: 'I might plead guilty if I can see the evidence first.' What is the best next step?",
    choices: [
      "Treat it as a guilty plea and sentence immediately",
      "Treat it as no clear guilty indication; proceed on the basis that trial steps/allocation may be needed unless and until an unequivocal plea is entered",
      "Dismiss the charge",
      "Force D to choose guilty or not guilty immediately with no advice"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PBV turns on an indication; if it’s not unequivocally guilty, the case proceeds to allocation/trial management unless a clear plea is later entered.",
      whyWrong: [
        "An ambiguous indication should not be treated as an actual guilty plea.",
        "—",
        "Ambiguity does not justify dismissal.",
        "Defendant must be able to make an informed decision with advice."
      ]
    }
  },
  {
    topic: "After summary allocation — if D does NOT elect",
    q: "The magistrates allocate an either-way case as suitable for summary trial. D does not elect Crown Court trial. What happens?",
    choices: [
      "The case is sent to the Crown Court anyway",
      "The case proceeds to summary trial in the magistrates’ court (with case management directions)",
      "The prosecution must drop the case",
      "D must plead guilty"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If allocated to summary and D does not elect, the trial venue is the magistrates’ court and the case proceeds there.",
      whyWrong: [
        "It is not sent to Crown if D doesn’t elect and magistrates accept jurisdiction.",
        "—",
        "Allocation does not require the prosecution to drop the case.",
        "A not guilty indication leads to trial, not a forced guilty plea."
      ]
    }
  },
  {
    topic: "Allocation — linked offences",
    q: "D faces an indictable-only count and a related either-way count arising from the same incident. Which venue outcome is most likely?",
    choices: [
      "Both must stay in the magistrates’ court",
      "The indictable-only count is sent to the Crown Court and related matters are commonly dealt with there for coherence",
      "The indictable-only count is dismissed because there is an either-way count",
      "The either-way count must be tried summarily regardless"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Indictable-only matters go to Crown Court and related offences are commonly managed together there to avoid fragmentation.",
      whyWrong: [
        "Indictable-only cannot be tried in magistrates’ court.",
        "—",
        "No dismissal flows from having additional counts.",
        "Related either-way counts are not forced into summary trial."
      ]
    }
  },
  {
    topic: "PBV — role of bail alongside PBV/allocation",
    q: "During a PBV/allocation hearing, what must the magistrates’ court also be prepared to decide?",
    choices: [
      "A final appeal",
      "Bail/remand (and any conditions), even if the case will go to the Crown Court",
      "The trial verdict",
      "Civil damages"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Bail is a live issue at first appearance and remains for the magistrates’ court to determine even if the case is sent/allocated to Crown.",
      whyWrong: [
        "Appeals are not the immediate purpose of first hearing.",
        "—",
        "Verdicts come at trial or plea.",
        "Civil damages are not determined in criminal first hearings."
      ]
    }
  },
  {
    topic: "Allocation — why enforceable directions matter",
    q: "Why do magistrates often give case management directions at the same hearing as allocation?",
    choices: [
      "To replace the need for a trial",
      "To set a timetable for service, attendance, and next hearings, ensuring the case progresses efficiently in the chosen venue",
      "To punish the parties",
      "To prevent any disclosure"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Case management supports efficient progression: deadlines, next listing, and identifying issues early (especially in summary trials).",
      whyWrong: [
        "Directions don’t remove the need for trial.",
        "—",
        "They are not punitive.",
        "They do not prevent disclosure obligations."
      ]
    }
  },
  {
    topic: "Election — common solicitor warning",
    q: "Which is the best practical warning to give a client considering election for Crown Court trial?",
    choices: [
      "Crown Court is always quicker and simpler",
      "Crown Court can involve longer timelines and greater formality; election should be strategic (jury, complexity, sentencing exposure) not automatic",
      "Electing Crown Court guarantees acquittal",
      "Election removes the possibility of conviction"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Election is strategic: jury trial and case complexity may favour Crown, but it may take longer and carries different practical/sentencing dynamics.",
      whyWrong: [
        "Crown Court is not always quicker.",
        "—",
        "No venue guarantees acquittal.",
        "Election does not remove the risk of conviction."
      ]
    }
  },
  {
    topic: "Sending indictable-only — statutory route",
    q: "Which statutory route most directly governs sending adult indictable-only cases to the Crown Court from the magistrates’ court?",
    choices: [
      "Magistrates’ Courts Act 1980, s19",
      "Crime and Disorder Act 1998, s51",
      "Police and Criminal Evidence Act 1984, s24",
      "Criminal Justice Act 2003, Schedule 1"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 51 Crime and Disorder Act 1998 provides for sending adults charged with indictable-only offences to the Crown Court.",
      whyWrong: [
        "s19 MCA 1980 is about allocation of either-way offences.",
        "—",
        "PACE s24 is about arrest, not venue.",
        "That is not the primary sending provision."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Criminal Practice | Chapter 4 | Plea Before Venue",
    subtitle: "PBV steps, indications of plea, and allocation decisions.",
    questions: questions
  };
})();
  
