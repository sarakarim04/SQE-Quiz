(() => {
  const questions = [
  {
    topic: "First hearing — purpose and core outcomes",
    q: "At the first hearing in the magistrates’ court, which combination of matters is most typically dealt with?",
    choices: [
      "Verdict and sentence in every case",
      "Identity/charge, bail decision, plea or indication of plea, and case management/venue steps",
      "Only full disclosure of all prosecution evidence",
      "Only cross-examination of key witnesses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "First hearings commonly cover identity/charge, bail/remand, plea (or indication in either-way cases), and directions/venue steps to move the case forward.",
      whyWrong: [
        "Verdict is for trial; sentence only sometimes follows an early guilty plea within powers.",
        "—",
        "Initial details are provided early, but not full disclosure of all evidence.",
        "Cross-examination is a trial feature, not a first-hearing feature."
      ]
    }
  },
  {
    topic: "Offence classification — venue pathways",
    q: "Which statement is most accurate about how offence type affects the first hearing pathway?",
    choices: [
      "All offences are tried in the magistrates’ court unless D elects Crown Court trial",
      "Summary-only stays in mags; indictable-only is sent to Crown; either-way uses plea-before-venue then allocation",
      "Indictable-only offences can be tried in mags if D consents",
      "Either-way offences always go to Crown Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Offence type drives venue: summary-only stays; indictable-only goes to Crown; either-way requires PBV then allocation (and sometimes election).",
      whyWrong: [
        "Indictable-only cannot be tried in magistrates’ court.",
        "—",
        "Consent does not give mags trial jurisdiction for indictable-only.",
        "Either-way can remain in mags if allocated and not elected."
      ]
    }
  },
  {
    topic: "Indictable-only — magistrates’ role",
    q: "D appears in the magistrates’ court charged with an indictable-only offence. Which is most accurate?",
    choices: [
      "The magistrates take a full plea and begin trial immediately",
      "The magistrates send the case to the Crown Court but still decide bail and deal with initial administration",
      "The magistrates must dismiss because they can’t try it",
      "The magistrates sentence D if D pleads guilty"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Indictable-only cases are sent to the Crown Court for trial; the mags still deal with bail and early case management steps.",
      whyWrong: [
        "There is no magistrates’ trial for indictable-only offences.",
        "—",
        "Lack of trial jurisdiction ≠ dismissal.",
        "Sentence for indictable-only offences is for the Crown Court."
      ]
    }
  },
  {
    topic: "Sending to Crown Court — legal basis",
    q: "Which statement best reflects the legal mechanism for sending adults charged with indictable-only offences to the Crown Court?",
    choices: [
      "They are committed for trial after a full committal hearing",
      "They are sent to the Crown Court under the statutory sending procedure (no committal proceedings)",
      "They are transferred only if D elects jury trial",
      "They are tried in mags unless the prosecutor objects"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Adults charged with indictable-only offences are sent to the Crown Court under the statutory sending regime (no committal proceedings).",
      whyWrong: [
        "The modern scheme removed the need for committal proceedings in this context.",
        "—",
        "Election applies to either-way, not indictable-only.",
        "Indictable-only offences are not tried in mags."
      ]
    }
  },
  {
    topic: "Either-way — plea before venue (PBV) sequence",
    q: "In an adult either-way case at the first hearing, what is the correct basic sequence?",
    choices: [
      "Allocation first, then indication of plea",
      "Indication of plea first (PBV), then allocation if a not guilty indication is given",
      "Trial first, then plea at the end",
      "Sentence first, then allocation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PBV involves seeking an indication of guilty/not guilty before venue is allocated (allocation follows a not guilty indication).",
      whyWrong: [
        "Allocation usually follows the PBV indication if needed.",
        "—",
        "Trial does not precede plea/indication steps.",
        "Sentence does not precede allocation."
      ]
    }
  },
  {
    topic: "Either-way — guilty indication at PBV",
    q: "In an either-way offence, D indicates a guilty plea at PBV. Which is most accurate?",
    choices: [
      "The case must be sent to the Crown Court for trial",
      "The magistrates may sentence if within powers, or commit to the Crown Court for sentence if powers are insufficient",
      "The court must still allocate for trial",
      "The case is automatically dismissed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A guilty indication leads to sentence in mags if within sentencing powers; otherwise committal for sentence to the Crown Court.",
      whyWrong: [
        "Trial is unnecessary once guilty is entered/accepted.",
        "—",
        "Allocation for trial is for contested cases (after NG indication).",
        "A guilty indication does not dismiss the case."
      ]
    }
  },
  {
    topic: "Either-way — not guilty indication at PBV",
    q: "In an either-way offence, D indicates not guilty at PBV. What happens next?",
    choices: [
      "Automatic sending to the Crown Court",
      "The magistrates make an allocation decision (mags vs Crown) and give case management directions",
      "Immediate Crown Court sentencing listing",
      "A jury is empanelled"
    ],
    correct: 1,
    explain: {
      whyRight:
        "After a not guilty indication, the court allocates venue and sets directions (dates, timetables, issues).",
      whyWrong: [
        "Not all either-way NG cases go to Crown; allocation decides.",
        "—",
        "Sentencing is not next where NG is indicated.",
        "Juries are for Crown Court trials, not first hearings."
      ]
    }
  },
  {
    topic: "Allocation — meaning",
    q: "What is the 'allocation decision' in an either-way case?",
    choices: [
      "Whether D qualifies for legal aid",
      "Whether trial should be in the magistrates’ court or the Crown Court",
      "Whether D is guilty",
      "Which police station keeps the file"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Allocation is the venue decision for an either-way offence: summary trial in mags or trial on indictment in Crown.",
      whyWrong: [
        "Legal aid is separate from allocation.",
        "—",
        "Allocation is not a verdict.",
        "Police administration is unrelated."
      ]
    }
  },
  {
    topic: "Either-way — defendant election",
    q: "After the magistrates allocate an either-way case as suitable for summary trial, which is most accurate?",
    choices: [
      "D must accept magistrates’ trial with no choice",
      "D may have the right to elect Crown Court trial (jury) even if magistrates think summary trial is suitable",
      "The case must be dismissed unless prosecution agrees",
      "The case must be sent to Crown in every either-way offence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In many either-way cases, D retains a right to elect Crown Court trial even if allocated to mags.",
      whyWrong: [
        "Either-way procedure commonly permits election.",
        "—",
        "Election does not require dismissal.",
        "Either-way cases are not automatically sent."
      ]
    }
  },
  {
    topic: "Bail at first hearing — continuing duty",
    q: "Even where the case will be sent to the Crown Court, what must the magistrates’ court still consider at the first hearing?",
    choices: [
      "Jury directions",
      "Bail/remand decision",
      "Final appeal points",
      "Sentencing guideline for final disposal"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The mags court still decides bail/remand and can impose conditions at the first appearance even if the case is going to the Crown Court.",
      whyWrong: [
        "Jury directions are for Crown Court trial.",
        "—",
        "Appeals come later and are not the first-hearing function.",
        "Final sentencing guideline application is not the main first-hearing task."
      ]
    }
  },
  {
    topic: "Bail framework — refusal risks",
    q: "Which set correctly reflects the three classic 'substantial grounds' risks used to refuse bail?",
    choices: [
      "Guilt, remorse, victim impact",
      "Failing to surrender, committing further offences, interfering with witnesses/obstructing justice",
      "Bad attitude, lack of apology, social media use",
      "Being charged, having prior convictions, denying the offence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The standard bail refusal risks are failing to surrender, further offending, and interference/obstruction (subject to statutory framing).",
      whyWrong: [
        "These are not the bail refusal categories.",
        "—",
        "These are not bail refusal categories.",
        "Prior convictions may be relevant, but denial/being charged are not the refusal categories themselves."
      ]
    }
  },
  {
    topic: "Initial details — prosecutor’s obligation",
    q: "Before or at the first hearing, what is the prosecutor required to provide under the Criminal Procedure Rules to enable effective case management?",
    choices: [
      "Nothing until after a not guilty plea",
      "Initial details of the prosecution case (at least a summary of evidence and key material as required)",
      "Only the name of the arresting officer",
      "Only unused material schedules"
    ],
    correct: 1,
    explain: {
      whyRight:
        "CrimPR requires service of initial details of the prosecution case so the first hearing can be conducted properly and directions set.",
      whyWrong: [
        "The rules expect early provision of initial details.",
        "—",
        "Officer identity alone is insufficient.",
        "Unused schedules come later; initial details come early."
      ]
    }
  },
  {
    topic: "First hearing — if plea is guilty (summary-only)",
    q: "In a summary-only case, D pleads guilty at the first hearing. Which is most accurate?",
    choices: [
      "The magistrates must send the case to Crown Court",
      "The magistrates may sentence immediately or adjourn for reports (e.g., PSR) depending on circumstances",
      "The case must go to trial anyway",
      "The defendant must be acquitted because there is no trial"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A guilty plea in summary-only can be sentenced in mags (sometimes immediately), or adjourned for reports/mitigation.",
      whyWrong: [
        "Summary-only cases are normally disposed of in mags.",
        "—",
        "No trial is needed after a guilty plea.",
        "No trial does not mean acquittal; guilty plea enables sentence."
      ]
    }
  },
  {
    topic: "Guilty plea credit — maximum",
    q: "What is the maximum reduction normally available for a guilty plea indicated at the first stage of proceedings for adults?",
    choices: ["One-tenth", "One-quarter", "One-third", "One-half"],
    correct: 2,
    explain: {
      whyRight:
        "The Sentencing Council guideline states the maximum reduction is one-third when a guilty plea is indicated at the first stage (normally the first hearing where plea/indication is sought/recorded).",
      whyWrong: [
        "One-tenth is typically the maximum at/around the first day of trial, not first stage.",
        "One-quarter is the maximum after the first stage (subject to exceptions), not the first stage maximum.",
        "—",
        "One-half is not the normal maximum in the guideline."
      ]
    }
  },
  {
    topic: "Guilty plea credit — what you advise",
    q: "Which is the best advice point about pleading guilty at the first hearing?",
    choices: [
      "It has no sentencing impact",
      "It can attract the maximum guilty plea reduction (subject to exceptions), so timing matters",
      "It automatically guarantees bail",
      "It prevents the prosecution using any evidence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Early guilty plea timing affects sentence reduction. Advising on timing/credit is a key first-hearing practical point.",
      whyWrong: [
        "It often has a major impact on sentence reduction.",
        "—",
        "Bail depends on risk, not plea timing alone.",
        "Evidence rules are not switched off by a guilty plea."
      ]
    }
  },
  {
    topic: "Case management — why it starts early",
    q: "Why does the court give directions at the first hearing?",
    choices: [
      "To decide guilt immediately",
      "To identify issues early, set timetables, and ensure the case progresses efficiently and fairly",
      "To punish late disclosure automatically",
      "To avoid recording any decisions"
    ],
    correct: 1,
    explain: {
      whyRight:
        "CrimPR case management focuses on early identification of issues and structured timetabling for fairness and efficiency.",
      whyWrong: [
        "Directions are not a verdict mechanism.",
        "—",
        "Punishment is not the function of directions.",
        "Decisions should be recorded and clear."
      ]
    }
  },
  {
    topic: "Adjournments — when likely",
    q: "Which scenario most commonly justifies an adjournment at first hearing?",
    choices: [
      "The prosecutor forgot to bring any initial details and the defence cannot take instructions meaningfully",
      "D wants to argue innocence loudly",
      "The bench prefers Fridays",
      "The defendant dislikes the charge"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If essential information (initial details) is missing and the defence cannot properly advise or the court cannot case-manage, an adjournment may be necessary.",
      whyWrong: [
        "—",
        "Volume is irrelevant; substance and fairness matter.",
        "Court preference is not a legal ground.",
        "Dislike of the charge is irrelevant."
      ]
    }
  },
  {
    topic: "Representation — duty solicitor reality",
    q: "At first hearing, D is unrepresented and confused. What is the best immediate practical step?",
    choices: [
      "Proceed to take a plea without checking understanding",
      "Ensure D understands the process and facilitate access to legal advice/representation where possible (including duty schemes), especially if custody risk is present",
      "Tell D to plead guilty to finish quickly",
      "Ignore vulnerability because it is not the court’s role"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Fair process requires comprehension; representation access is crucial where liberty is at stake or the procedure is complex.",
      whyWrong: [
        "Taking a plea without understanding risks unfairness.",
        "—",
        "Pressuring a guilty plea is improper.",
        "Courts must ensure fairness and effective participation."
      ]
    }
  },
  {
    topic: "Interpreters — effective participation",
    q: "D does not understand English adequately. Which is most accurate at first hearing?",
    choices: [
      "Proceed if D nods",
      "The court should ensure interpretation so D can participate effectively before taking pleas or making decisions",
      "Interpretation is only for trial",
      "Interpretation is optional if the offence is minor"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Effective participation requires an interpreter where needed; key decisions (plea/bail) should not be taken without understanding.",
      whyWrong: [
        "Nodding is not proof of comprehension.",
        "—",
        "Interpretation is needed at hearings too, not only at trial.",
        "It’s about comprehension, not offence seriousness."
      ]
    }
  },
  {
    topic: "Summary-only — not guilty plea outcome",
    q: "In a summary-only case, D pleads not guilty at the first hearing. What is the typical next step?",
    choices: [
      "Send to Crown Court automatically",
      "List for trial in the magistrates’ court and give directions (e.g., issues, witnesses, timetables)",
      "Sentence immediately",
      "End the case because D denied it"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A not guilty plea in a summary-only case leads to trial listing and case management directions in mags.",
      whyWrong: [
        "Summary-only stays in mags.",
        "—",
        "Sentencing follows conviction or guilty plea, not a not guilty plea.",
        "Denial does not end proceedings."
      ]
    }
  },
  {
    topic: "Either-way — allocation factors (concept)",
    q: "Which is the best description of what drives allocation in either-way cases?",
    choices: [
      "Whether D is popular",
      "Seriousness and complexity (and whether magistrates’ powers are adequate), assessed at allocation stage",
      "Whether the prosecutor is busy",
      "Whether the complainant wants Crown Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Allocation considers seriousness/complexity and suitability for summary trial (including sentencing powers).",
      whyWrong: [
        "Popularity is irrelevant.",
        "—",
        "Prosecutor workload is irrelevant.",
        "Complainant preference is not determinative of allocation."
      ]
    }
  },
  {
    topic: "Either-way — committal for sentence trigger",
    q: "When might magistrates commit an either-way case to the Crown Court for sentence after a guilty plea or conviction in mags?",
    choices: [
      "Whenever the prosecution requests it",
      "Where the offence is so serious that magistrates’ sentencing powers are insufficient",
      "Whenever D has a previous conviction",
      "Whenever D is on bail"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Committal for sentence occurs where the case is too serious for mags’ sentencing powers.",
      whyWrong: [
        "It’s not simply on request; it’s based on seriousness/powers.",
        "—",
        "Previous convictions may inform seriousness but do not automatically trigger committal.",
        "Bail status does not trigger committal."
      ]
    }
  },
  {
    topic: "CrimPR — early information exchange",
    q: "Why do the CrimPR require initial details early (especially where D is in custody)?",
    choices: [
      "To help the defence build a false alibi",
      "To enable meaningful decisions on plea, bail, and directions at the first hearing",
      "To ensure the trial is completed at first hearing",
      "To avoid any record keeping"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Initial details enable proper first-hearing decisions: bail/remand, plea/indication, and case management directions.",
      whyWrong: [
        "That is improper and not the purpose of disclosure rules.",
        "—",
        "First hearing is not usually the trial.",
        "The system relies on records; it does not avoid them."
      ]
    }
  },
  {
    topic: "Bail decision — what defence should do",
    q: "At first hearing, prosecution opposes bail citing risk of interference with a witness. What is the best defence response?",
    choices: [
      "Say nothing because bail is automatic",
      "Propose targeted conditions (non-contact, exclusion zone) supported by facts to manage the specific risk",
      "Demand unconditional bail in every case",
      "Argue only that the witness is lying"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Bail advocacy is risk management: address the risk and propose enforceable, proportionate conditions.",
      whyWrong: [
        "Bail is not automatic if statutory risks are made out.",
        "—",
        "Refusing conditions can increase custody likelihood if risk is accepted.",
        "Merits may matter, but bail turns on managing risk now."
      ]
    }
  },
  {
    topic: "Bail Act — ‘duty to surrender’ concept",
    q: "Which statement is most accurate about the effect of being granted bail?",
    choices: [
      "D has no obligations until trial",
      "D is under a duty to surrender to custody as required by the bail decision",
      "D can choose any court date",
      "Bail removes the court’s power to remand later"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Grant of bail places D under an enforceable duty to surrender/attend as required.",
      whyWrong: [
        "Bail imposes obligations.",
        "—",
        "Court dates are set by the court.",
        "The court can reconsider bail if circumstances change or conditions are breached."
      ]
    }
  },
  {
    topic: "Either-way — what PBV is NOT",
    q: "Which statement is most accurate about 'plea before venue' (PBV)?",
    choices: [
      "It is a formal sentencing hearing",
      "It is the stage where D indicates guilty or not guilty before allocation is decided",
      "It is a Crown Court-only procedure",
      "It is the stage where the jury is selected"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PBV is an early stage in either-way cases to record an indication of plea before deciding venue (allocation).",
      whyWrong: [
        "Sentencing is separate and comes after a guilty plea/conviction.",
        "—",
        "PBV is a magistrates’ court stage in either-way proceedings.",
        "Jury selection is for Crown Court trial."
      ]
    }
  },
  {
    topic: "Case management — identifying issues",
    q: "Which is the best example of an 'issue identification' point suitable for first hearing directions?",
    choices: [
      "Whether D likes the prosecutor",
      "Whether an interpreter/special measures are needed and what witnesses/evidence will be disputed",
      "Whether the bench prefers tea or coffee",
      "Whether social media should ban commentary"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Effective case management starts by identifying practical needs and the real issues: participation needs, witnesses, disputed facts, and evidence.",
      whyWrong: [
        "Personal preferences are irrelevant.",
        "—",
        "Bench refreshments are irrelevant.",
        "Reporting restrictions are separate and not automatic."
      ]
    }
  },
  {
    topic: "Youth — first hearing venue (concept)",
    q: "Which statement is most accurate as a general principle about children/young persons and first hearings?",
    choices: [
      "All youth cases are heard in the Crown Court",
      "Many youth cases are dealt with in the Youth Court (a form of magistrates’ court), with different safeguarding and procedure",
      "Youth cases never involve bail decisions",
      "Youth cases skip plea and go straight to trial"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Youth proceedings are commonly in the Youth Court with adapted procedure and safeguarding (while still addressing bail and early case management).",
      whyWrong: [
        "Not all youth cases go to Crown Court.",
        "—",
        "Bail/remand can arise in youth cases too.",
        "Plea/indication is still part of process."
      ]
    }
  },
  {
    topic: "Guilty plea — why timing matters at first hearing",
    q: "Why is it especially important to advise on plea timing at the first hearing?",
    choices: [
      "Because a guilty plea guarantees the case is dismissed",
      "Because an early guilty plea can secure the maximum sentencing reduction under the guideline (subject to exceptions)",
      "Because an early guilty plea prevents any victim statement",
      "Because an early guilty plea automatically prevents a criminal record"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The guideline links maximum reduction to the first stage. Advising early avoids losing credit and helps informed decisions.",
      whyWrong: [
        "Guilty plea does not dismiss the case; it leads to sentence.",
        "—",
        "Victim statements are not automatically prevented.",
        "A conviction can still be recorded after guilty plea."
      ]
    }
  },
  {
    topic: "Crown Court link — summary offences sent with indictable-only (concept)",
    q: "D is sent to the Crown Court for an indictable-only offence, and there is a related summary offence charge too. Which is most accurate?",
    choices: [
      "The summary offence must be dropped automatically",
      "The Crown Court may be able to deal with related summary offences in defined circumstances",
      "The magistrates must try the summary offence first before sending the indictable-only",
      "The summary offence can never be dealt with once the case is in Crown"
    ],
    correct: 1,
    explain: {
      whyRight:
        "There are statutory mechanisms allowing the Crown Court to deal with related summary offences alongside sent offences in defined situations.",
      whyWrong: [
        "It is not automatically dropped.",
        "—",
        "Indictable-only sending is not dependent on summary trial first.",
        "The Crown Court can sometimes deal with related summary offences."
      ]
    }
  },
  {
    topic: "CrimPR — venue rules exist",
    q: "Which statement best describes what CrimPR Part 9 covers at a high level?",
    choices: [
      "Civil small claims procedure",
      "Allocation and sending for trial rules in criminal proceedings",
      "Divorce petitions",
      "Appeals to the Supreme Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "CrimPR Part 9 deals with allocation and sending for trial, supporting the venue decisions made around first hearings.",
      whyWrong: [
        "Not civil procedure.",
        "—",
        "Not family procedure.",
        "Supreme Court appeals are not Part 9’s focus."
      ]
    }
  }
];

  

  window.quizData = {
    title: "SQE1 Criminal Practice | Chapter 3 | First Hearing and Venue",
    subtitle: "Plea, allocation, sending, and early case management in mags.",
    questions: questions
  };
})();
  
