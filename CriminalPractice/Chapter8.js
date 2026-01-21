(() => {
  const questions = [
  {
    topic: "Purposes of sentencing — CJA 2003 s142",
    q: "Which is NOT one of the statutory purposes of sentencing for adults in CJA 2003 s142?",
    choices: [
      "Punishment of offenders",
      "Reform and rehabilitation",
      "Maximising conviction rates",
      "Protection of the public"
    ],
    correct: 2,
    explain: {
      whyRight:
        "CJA 2003 s142 lists purposes such as punishment, crime reduction, rehabilitation, public protection, and reparation. Maximising conviction rates is not a sentencing purpose.",
      whyWrong: [
        "Punishment is an express purpose.",
        "Rehabilitation is an express purpose.",
        "—",
        "Public protection is an express purpose."
      ]
    }
  },
  {
    topic: "Guidelines — duty to follow",
    q: "Which statement best reflects the status of Sentencing Council guidelines?",
    choices: [
      "They are optional suggestions with no weight",
      "Courts must generally follow them unless it would be contrary to the interests of justice",
      "They apply only in the magistrates’ court",
      "They apply only to offences committed after 2025"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Sentencing guidelines are intended to be followed in sentencing unless there is a justified reason not to (interests of justice).",
      whyWrong: [
        "They are not merely optional in ordinary cases.",
        "—",
        "They apply across courts (magistrates and Crown Court).",
        "There is no blanket 'after 2025' rule."
      ]
    }
  },
  {
    topic: "General guideline — sequencing",
    q: "In the general sentencing workflow, which is the best order for key steps?",
    choices: [
      "Guilty plea reduction first, then decide offence category",
      "Reach a provisional sentence, then consider aggravating/mitigating factors, then apply guilty plea reduction",
      "Apply totality first, then decide guilt",
      "Sentence first, then hear mitigation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The structured approach is: determine a provisional sentence (often via offence category), adjust for aggravation/mitigation, then apply guilty plea reduction (and other steps).",
      whyWrong: [
        "You usually determine seriousness/category before applying the guilty plea reduction.",
        "—",
        "Totality is for multiple offences after you have provisional sentences; guilt is already determined.",
        "Mitigation is part of the sentencing exercise, not something you skip until after sentence is fixed."
      ]
    }
  },
  {
    topic: "Seriousness — core components",
    q: "Offence seriousness is most commonly assessed by reference to:",
    choices: [
      "Culpability and harm (or risk of harm)",
      "The defendant’s social media following",
      "Whether the hearing is in the morning",
      "Whether the defendant is represented"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Sentencing generally assesses seriousness through culpability and harm (including risk).",
      whyWrong: [
        "—",
        "Irrelevant.",
        "Irrelevant.",
        "Representation is not a seriousness factor (though vulnerability can be relevant elsewhere)."
      ]
    }
  },
  {
    topic: "Community order threshold — concept",
    q: "Which statement best reflects the community order threshold?",
    choices: [
      "A community order may be imposed for any offence, however minor",
      "A community order must not be imposed unless the offence is serious enough to warrant it",
      "A community order is only available in the Crown Court",
      "A community order is automatically imposed if there is mitigation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A community order requires the offence to cross the community threshold: seriousness makes a fine/discharge inadequate.",
      whyWrong: [
        "Minor offences may be appropriate for discharge/fine and may not justify a community order.",
        "—",
        "Community orders are available in the magistrates’ court as well.",
        "Mitigation does not make a community order automatic."
      ]
    }
  },
  {
    topic: "Custody threshold — statutory test",
    q: "When is the custody threshold passed?",
    choices: [
      "Whenever the defendant has a previous conviction",
      "Only if the offence is so serious that neither a fine alone nor a community sentence can be justified",
      "Whenever the prosecution asks for custody",
      "Only in indictable-only offences"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Custody is reserved for the most serious offending: the statutory threshold is that neither a fine alone nor a community sentence can be justified.",
      whyWrong: [
        "Previous convictions may aggravate, but do not automatically trigger custody.",
        "—",
        "Prosecution submissions do not control the legal threshold.",
        "Either-way offences can cross the custody threshold too."
      ]
    }
  },
  {
    topic: "Custody — suspension step",
    q: "If the custody threshold is crossed, what is the next key question in the imposition framework?",
    choices: [
      "Whether the sentence can be suspended (instead of immediate custody)",
      "Whether to ignore mitigation",
      "Whether to re-open the verdict",
      "Whether to remove credit for a guilty plea automatically"
    ],
    correct: 0,
    explain: {
      whyRight:
        "After deciding custody is justified, the court considers whether the custodial sentence can properly be suspended.",
      whyWrong: [
        "—",
        "Mitigation remains relevant throughout.",
        "Verdict is not re-opened at sentencing.",
        "Guilty plea credit is not removed automatically."
      ]
    }
  },
  {
    topic: "Guilty plea credit — maximum",
    q: "What is the maximum reduction for a guilty plea under the definitive guideline?",
    choices: [
      "One-half",
      "One-third",
      "One-quarter",
      "One-tenth"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The guideline states the maximum reduction is one-third.",
      whyWrong: [
        "One-half is not the general maximum.",
        "—",
        "One-quarter is the maximum after the first stage, not the overall maximum.",
        "One-tenth is a much later-stage maximum (e.g., at/near trial), not the overall maximum."
      ]
    }
  },
  {
    topic: "Guilty plea credit — first stage",
    q: "A defendant indicates a guilty plea at the first stage of proceedings. What reduction should generally be made (subject to exceptions)?",
    choices: [
      "One-third",
      "One-quarter",
      "One-tenth",
      "No reduction"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A plea at the first stage generally attracts a one-third reduction (subject to guideline exceptions).",
      whyWrong: [
        "—",
        "One-quarter is the maximum after the first stage.",
        "One-tenth is typically much later, e.g., on the first day of trial.",
        "A guilty plea normally attracts some reduction unless exceptions apply."
      ]
    }
  },
  {
    topic: "Guilty plea credit — after first stage",
    q: "A defendant pleads guilty after the first stage but well before trial. What is the general maximum reduction at that point?",
    choices: [
      "One-third",
      "One-quarter (sliding down thereafter)",
      "One-half",
      "No reduction is allowed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "After the first stage, the guideline’s maximum reduction is one-quarter, and it reduces the later the plea is entered.",
      whyWrong: [
        "One-third is tied to a first-stage plea (subject to exceptions).",
        "—",
        "One-half is not the general maximum.",
        "Reductions still exist after first stage, just smaller."
      ]
    }
  },
  {
    topic: "Aggravation vs mitigation — basics",
    q: "Which is most accurately described as an aggravating factor?",
    choices: [
      "Previous convictions relevant to the offence and/or pattern",
      "Genuine remorse",
      "Strong personal mitigation with evidence",
      "Early guilty plea"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Relevant previous convictions commonly aggravate sentence by increasing culpability/need for deterrence/public protection.",
      whyWrong: [
        "Remorse is usually mitigating.",
        "Mitigation is not aggravation.",
        "Guilty plea reduction is applied as a separate step (and is beneficial to the defendant)."
      ]
    }
  },
  {
    topic: "Totality — when it applies",
    q: "When does the totality principle apply?",
    choices: [
      "Only when sentencing a single offence",
      "When sentencing multiple offences (or an offender already serving a sentence), to ensure an overall just and proportionate total",
      "Only in the magistrates’ court",
      "Only where the defendant pleads guilty"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Totality applies to multiple offences / existing sentences to ensure the overall outcome reflects overall criminality and remains proportionate.",
      whyWrong: [
        "Totality is not limited to a single-offence case.",
        "—",
        "It applies across courts.",
        "Plea does not determine totality relevance."
      ]
    }
  },
  {
    topic: "Concurrent vs consecutive — purpose",
    q: "Choosing concurrent vs consecutive sentences is primarily a tool for:",
    choices: [
      "Ensuring the overall sentence reflects totality and overall criminality",
      "Deciding guilt",
      "Reducing the burden of proof",
      "Punishing the victim"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Concurrency/consecutivity is used to shape the overall sentence so it is just and proportionate under the totality principle.",
      whyWrong: [
        "—",
        "Guilt is already determined.",
        "Burden of proof is a trial concept.",
        "Victims are not punished by sentencing."
      ]
    }
  },
  {
    topic: "Compensation — duty to consider",
    q: "Which statement is most accurate about compensation orders?",
    choices: [
      "The court must consider compensation where loss/injury/damage resulted from the offence",
      "Compensation is available only if the prosecution applies",
      "Compensation can never be made alongside another disposal",
      "The court can never order compensation in magistrates’ court"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Compensation is a key financial order and the court must consider it where relevant harm/loss/damage arose.",
      whyWrong: [
        "Compensation is not solely application-driven in practice.",
        "Compensation can be made in addition to other disposals.",
        "Magistrates can order compensation (subject to statutory framework)."
      ]
    }
  },
  {
    topic: "Compensation — reasons if not made",
    q: "If compensation is available and the court decides not to make a compensation order, what must it do?",
    choices: [
      "Nothing",
      "Give reasons",
      "Automatically increase the fine",
      "Order immediate custody"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where compensation is available, the court must give reasons if it does not make an order.",
      whyWrong: [
        "A reasons duty applies.",
        "—",
        "Increasing a fine is not the required substitute step.",
        "Custody is not automatic."
      ]
    }
  },
  {
    topic: "Ancillary orders — what they are",
    q: "Which best describes an 'ancillary order' at sentencing?",
    choices: [
      "A separate civil claim",
      "An order made in addition to (or alongside) the main sentence, e.g., compensation, disqualification, restraining orders",
      "A police caution",
      "A jury direction"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Ancillary orders are additional orders the court can make to address harm, protection, or consequences alongside the main disposal.",
      whyWrong: [
        "Ancillary orders are within the criminal sentencing process, not civil claims.",
        "—",
        "A caution is not a court sentence.",
        "Jury directions are trial management, not sentencing."
      ]
    }
  },
  {
    topic: "Reasons — transparency",
    q: "Why is giving reasons at sentencing important?",
    choices: [
      "It replaces the need for guidelines",
      "It promotes transparency, fairness, and enables meaningful appeal review",
      "It guarantees a shorter sentence",
      "It is only required in the Crown Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Reasons demonstrate how the court applied law/guidelines, and they support fairness and appellate review.",
      whyWrong: [
        "Guidelines still apply.",
        "—",
        "Reasons don’t guarantee outcome.",
        "Reasons are important across courts."
      ]
    }
  },
  {
    topic: "Magistrates — custody powers (single either-way)",
    q: "What is the maximum custodial sentence magistrates can impose for a single either-way offence under the extended power (current position)?",
    choices: [
      "6 months",
      "12 months",
      "18 months",
      "2 years"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The extended power allows up to 12 months for a single either-way offence (within the statutory scheme).",
      whyWrong: [
        "6 months was the previous standard limit in many contexts.",
        "—",
        "18 months is discussed in proposals but is not the baseline position here.",
        "2 years exceeds the relevant single-offence magistrates limit."
      ]
    }
  },
  {
    topic: "Choosing disposal — principle",
    q: "Which is the best statement about selecting a disposal (fine/community/custody)?",
    choices: [
      "Always impose custody if the offence is imprisonable",
      "Select the least onerous sentence that is commensurate with seriousness and meets sentencing purposes",
      "Always impose a fine if the defendant is employed",
      "Always impose community orders before considering culpability/harm"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Sentencing aims for proportionality: an appropriate sentence commensurate with seriousness, not more onerous than necessary.",
      whyWrong: [
        "Imprisonable does not equal custody threshold passed.",
        "—",
        "Employment does not dictate disposal type.",
        "Culpability/harm assessment is central before disposal selection."
      ]
    }
  },
  {
    topic: "Mitigation — what it is",
    q: "Which is most clearly a mitigating factor?",
    choices: [
      "Offence committed on bail",
      "Use of weapon",
      "Genuine remorse and steps toward rehabilitation",
      "Targeting a vulnerable victim"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Remorse and rehabilitation steps commonly mitigate by reducing perceived culpability/risk and supporting reform.",
      whyWrong: [
        "Offending on bail often aggravates.",
        "Weapon use often aggravates.",
        "—",
        "Targeting vulnerability often aggravates."
      ]
    }
  },
  {
    topic: "Fine vs compensation — priority idea",
    q: "If both a fine and compensation seem appropriate but the offender has insufficient means to pay both, what is the most accurate general approach?",
    choices: [
      "Always prioritise the fine",
      "Prefer compensation so the victim is reimbursed where possible",
      "Cancel both",
      "Order custody instead"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Compensation is commonly prioritised to address victim loss where means are limited (subject to statutory framework).",
      whyWrong: [
        "Fines are not automatically prioritised over victim compensation.",
        "—",
        "Cancelling both is not the normal approach.",
        "Custody is not a substitute for inability to pay."
      ]
    }
  },
  {
    topic: "Suspended sentence — core idea",
    q: "Which best describes a suspended sentence?",
    choices: [
      "A community order with no custody element",
      "A custodial sentence that is not activated immediately, subject to conditions and the risk of activation on breach",
      "A fine paid in instalments",
      "An absolute discharge"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A suspended sentence is a custodial sentence held in reserve, usually with requirements, and can be activated if breached.",
      whyWrong: [
        "A suspended sentence is still custody in nature.",
        "—",
        "That describes a fine arrangement.",
        "A discharge is different."
      ]
    }
  },
  {
    topic: "Guilty plea — what credit is applied to",
    q: "Guilty plea reduction is generally applied to:",
    choices: [
      "The provisional sentence reached after assessing seriousness (before finalising the sentence)",
      "Whether D is guilty",
      "The prosecution’s evidence",
      "The victim’s compensation amount automatically"
    ],
    correct: 0,
    explain: {
      whyRight:
        "The guilty plea reduction is applied to the sentence (after provisional sentence is identified, before final sentence is finalised).",
      whyWrong: [
        "Guilt is already established by plea/conviction.",
        "The evidence is not reduced.",
        "Compensation does not automatically reduce by plea credit."
      ]
    }
  },
  {
    topic: "Totality — outcome focus",
    q: "What is the key 'totality' question the court is trying to answer?",
    choices: [
      "Did the police act lawfully?",
      "Does the overall sentence reflect overall criminality and remain just and proportionate?",
      "Can the trial be re-run?",
      "Should the defendant be acquitted?"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Totality is about the overall justice of the combined sentence.",
      whyWrong: [
        "Police lawfulness may be relevant to admissibility, not totality.",
        "—",
        "Re-trials are an appellate/procedural matter.",
        "Acquittal is a verdict issue, not totality."
      ]
    }
  },
  {
    topic: "Crown Court vs magistrates — sentencing roles",
    q: "Which statement is most accurate about who sentences after conviction?",
    choices: [
      "The jury sentences in the Crown Court",
      "The judge sentences in the Crown Court; magistrates/DJ sentence in the magistrates’ court",
      "The police sentence in the magistrates’ court",
      "The prosecution chooses the sentence in both courts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Sentencing is for the court (judge or magistrates/DJ), not the jury or parties.",
      whyWrong: [
        "The jury does not sentence.",
        "—",
        "Police do not sentence.",
        "Parties make submissions but do not choose sentence."
      ]
    }
  },
  {
    topic: "Custody — last resort idea",
    q: "Which best reflects the sentencing principle behind the custody threshold?",
    choices: [
      "Custody should be routine for deterrence",
      "Custody should be reserved for the most serious cases and imposed only when no lesser disposal is justified",
      "Custody should be imposed whenever the victim requests it",
      "Custody is preferred because it is simple"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The threshold test is designed to reserve custody for the most serious cases where lesser disposals are not justified.",
      whyWrong: [
        "Routine custody contradicts the threshold approach.",
        "—",
        "Victim preference is not the legal test.",
        "Simplicity is not a lawful reason."
      ]
    }
  },
  {
    topic: "Sentencing remarks — what they should cover",
    q: "Which combination best reflects what sentencing remarks should usually address?",
    choices: [
      "Only the defendant’s background",
      "Guideline steps: seriousness, aggravation/mitigation, plea credit, totality (if relevant), and key orders/reasons",
      "Only criticism of the police",
      "Only the victim’s opinion on sentence length"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Good sentencing reasons track the guideline logic and explain how the court arrived at the outcome.",
      whyWrong: [
        "Background alone is insufficient.",
        "—",
        "Police criticism is not the core purpose of remarks.",
        "Victim impact is relevant in some contexts, but does not replace the legal reasoning."
      ]
    }
  },
  {
    topic: "Multiple offences — common pitfall",
    q: "Which is a common totality pitfall the court aims to avoid?",
    choices: [
      "Ignoring guideline categories",
      "Imposing consecutive sentences that create an overall sentence that is disproportionate to overall criminality",
      "Considering mitigation",
      "Giving reasons"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Totality guards against an overall sentence becoming excessive when offences are stacked consecutively.",
      whyWrong: [
        "Categories are part of the process.",
        "—",
        "Mitigation should be considered.",
        "Reasons should be given."
      ]
    }
  },
  {
    topic: "Magistrates’ powers — timing awareness",
    q: "Why does the increase in magistrates’ maximum custodial power matter in practice for venue/allocation decisions?",
    choices: [
      "It changes the definition of theft",
      "It can affect whether a case is suitable to remain in the magistrates’ court (because likely sentence may now fall within magistrates’ powers)",
      "It removes the right to legal representation",
      "It abolishes the Crown Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Allocation/venue decisions consider likely sentence; increasing magistrates’ powers can keep more cases in the magistrates’ court.",
      whyWrong: [
        "It does not change offence definitions.",
        "—",
        "Representation rights remain.",
        "Crown Court still exists for serious cases."
      ]
    }
  },
  {
    topic: "Compensation vs surcharge — basic distinction",
    q: "Which statement is most accurate as a general distinction?",
    choices: [
      "Compensation is paid to the victim; surcharge is a separate financial imposition linked to sentencing",
      "Compensation is paid to the court; surcharge is paid to the defendant",
      "Compensation replaces all other sentences",
      "Surcharge decides guilt"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Compensation is directed to victim loss; the surcharge is a separate statutory financial consequence attached to sentencing outcomes.",
      whyWrong: [
        "That reverses the direction/purpose.",
        "Compensation can be alongside other disposals and does not necessarily replace them.",
        "Surcharge has nothing to do with guilt."
      ]
    }
  },
  {
    topic: "Exam technique — quickest sentencing roadmap",
    q: "In an SQE sentencing question, which approach is most likely to score well?",
    choices: [
      "Jump straight to a sentence without explaining",
      "Follow a guideline-based structure: seriousness → disposal threshold → aggravation/mitigation → guilty plea → totality → ancillary/compensation → reasons",
      "Only discuss punishment and ignore rehabilitation/public protection",
      "Only discuss victim compensation and ignore everything else"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A structured guideline approach shows correct legal method and hits the key examinable steps.",
      whyWrong: [
        "Unexplained outcomes lose marks.",
        "—",
        "You must address the proper purposes/factors and the guideline method.",
        "Compensation is important but it’s only one part of sentencing."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Criminal Practice | Chapter 8 | Sentencing",
    subtitle: "Sentencing purposes, guideline steps, and plea reductions.",
    questions: questions
  };
})();
  
