(() => {
  const questions = [
  {
    topic: "Admissibility — relevance as the gateway",
    q: "Which statement best reflects the starting point for admissibility of evidence in criminal proceedings?",
    choices: [
      "All evidence is admissible unless the defence objects",
      "Evidence must first be relevant, then comply with admissibility rules (and may still be excluded for fairness)",
      "Only eyewitness evidence is admissible",
      "Evidence is admissible only if it proves guilt beyond reasonable doubt"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The court starts with relevance, then applies specific admissibility rules (e.g., hearsay/bad character/confessions) and may exclude evidence where fairness requires.",
      whyWrong: [
        "There are strict admissibility rules; it’s not a free-for-all unless objected to.",
        "—",
        "Many types of evidence are admissible besides eyewitness evidence.",
        "Admissibility does not require proof beyond reasonable doubt; that’s the trial standard overall."
      ]
    }
  },
  {
    topic: "Exclusion — PACE s78 overview",
    q: "PACE s78 is best described as:",
    choices: [
      "A mandatory rule excluding all illegally obtained evidence",
      "A discretionary power to exclude prosecution evidence if its admission would adversely affect the fairness of proceedings",
      "A rule that only applies to confessions",
      "A rule that only applies in the magistrates’ court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PACE s78 gives the court a discretion to exclude prosecution evidence where admitting it would have such an adverse effect on fairness that it ought not be admitted.",
      whyWrong: [
        "It is not automatic/mandatory for all illegal evidence.",
        "—",
        "PACE s76 is confession-specific; s78 is broader.",
        "It applies across criminal courts."
      ]
    }
  },
  {
    topic: "Confessions — PACE s76 scope",
    q: "Which type of evidence is specifically governed by PACE s76’s exclusion framework?",
    choices: [
      "Any prosecution evidence obtained unfairly",
      "Confession evidence",
      "Hearsay statements",
      "Bad character evidence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PACE s76 is aimed at confessions, with mandatory exclusion where the statutory conditions are met.",
      whyWrong: [
        "General unfairness across evidence is mainly addressed by PACE s78.",
        "—",
        "Hearsay is governed primarily by CJA 2003.",
        "Bad character is governed primarily by CJA 2003."
      ]
    }
  },
  {
    topic: "Confessions — oppression ground",
    q: "Under PACE s76, which ground most directly targets improper coercion (e.g., threats/violence) leading to a confession?",
    choices: [
      "Oppression",
      "Hearsay",
      "Propensity",
      "Judicial notice"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Oppression is the statutory ground addressing coercive treatment that undermines the voluntariness/fairness of a confession.",
      whyWrong: [
        "—",
        "Hearsay concerns out-of-court statements used for their truth.",
        "Propensity relates to bad character reasoning, not confession admissibility.",
        "Judicial notice is unrelated."
      ]
    }
  },
  {
    topic: "Confessions — unreliability ground",
    q: "PACE s76(2)(b) focuses on excluding confessions where:",
    choices: [
      "The defendant is under 25",
      "Anything said or done was likely to render the confession unreliable",
      "The confession is the only evidence",
      "The offence is indictable-only"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The unreliability limb targets confessions made unreliable by something said/done or the circumstances.",
      whyWrong: [
        "Age alone is not the statutory test (though vulnerability may be relevant to reliability/fairness).",
        "—",
        "A confession can be admissible even if important, subject to the statutory tests.",
        "Offence type does not determine s76 applicability."
      ]
    }
  },
  {
    topic: "Confessions — burden and standard (high-yield)",
    q: "When the defence challenges a confession under PACE s76, who must satisfy the court that the confession should be admitted?",
    choices: [
      "The defendant, on the balance of probabilities",
      "The prosecution, proving the confession was not obtained by oppression or likely unreliability",
      "The court must admit it automatically unless there is medical evidence",
      "The police officer must personally guarantee it was fair"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under s76, once properly raised, the prosecution must satisfy the court that the confession was not obtained by oppression or likely unreliability (mandatory exclusion if they cannot).",
      whyWrong: [
        "The burden is not on the defendant to prove inadmissibility under s76.",
        "—",
        "Admission is not automatic; s76 is a structured admissibility test.",
        "Personal guarantees are irrelevant; the court assesses evidence."
      ]
    }
  },
  {
    topic: "Procedure — voir dire purpose",
    q: "What is the main purpose of a voir dire in relation to disputed evidence?",
    choices: [
      "To let the jury decide admissibility",
      "To decide admissibility in a separate hearing so the jury does not hear inadmissible material",
      "To sentence the defendant early",
      "To replace cross-examination at trial"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A voir dire is a ‘trial within a trial’ where the judge rules on admissibility, usually in the jury’s absence.",
      whyWrong: [
        "Admissibility is for the judge, not the jury.",
        "—",
        "Sentencing is separate.",
        "It doesn’t replace trial cross-examination on admissible issues."
      ]
    }
  },
  {
    topic: "Exclusion — PACE s78 trigger",
    q: "Which is most likely to trigger an application under PACE s78?",
    choices: [
      "Evidence is relevant and obtained fairly",
      "A significant breach of PACE/Codes in obtaining key prosecution evidence, risking an unfair trial",
      "Defendant has no previous convictions",
      "The prosecution served evidence on time"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s78 is commonly used where the way evidence was obtained risks unfairness (e.g., serious procedural breaches).",
      whyWrong: [
        "Fairly obtained evidence is less likely to be excluded on fairness grounds.",
        "—",
        "Previous convictions are a bad character issue, not the s78 trigger itself.",
        "Timely service does not create unfairness."
      ]
    }
  },
  {
    topic: "Hearsay — definition",
    q: "Which best describes hearsay (CJA 2003 approach)?",
    choices: [
      "Any document produced by the police",
      "A statement not made in oral evidence in the proceedings, relied on as evidence of the truth of what it states",
      "Any evidence that damages the defendant’s case",
      "Any opinion evidence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Hearsay is an out-of-court statement (not made in oral evidence in the proceedings) relied upon for its truth.",
      whyWrong: [
        "Police documents may be hearsay, but not all are automatically hearsay.",
        "—",
        "Damaging evidence is not necessarily hearsay.",
        "Opinion evidence is a different category."
      ]
    }
  },
  {
    topic: "Hearsay — general gateways (s114)",
    q: "Under CJA 2003 s114(1), hearsay is admissible if:",
    choices: [
      "It is always admissible in the Crown Court",
      "A statutory provision applies, a preserved common law rule applies, all parties agree, or it is in the interests of justice",
      "The maker is anonymous",
      "The defence has not objected"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s114(1) sets the main gateways: statutory, preserved common law, agreement, or interests of justice.",
      whyWrong: [
        "There is no Crown Court-only rule making hearsay always admissible.",
        "—",
        "Anonymity is not itself a gateway; it can create additional problems.",
        "Non-objection does not automatically satisfy the statutory gateways."
      ]
    }
  },
  {
    topic: "Hearsay — interests of justice gateway",
    q: "If hearsay is argued to be admissible in the 'interests of justice' under s114(1)(d), the court will most likely focus on:",
    choices: [
      "Whether the evidence is entertaining",
      "Factors like importance, reliability, and availability of other evidence",
      "Whether the defendant is wealthy",
      "Whether the jury prefers documents"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The interests of justice assessment is a structured balancing exercise focusing on relevance/importance, reliability, circumstances, and alternatives.",
      whyWrong: [
        "Entertainment is irrelevant.",
        "—",
        "Wealth is irrelevant.",
        "Jury preference is not a legal test."
      ]
    }
  },
  {
    topic: "Hearsay — unavailable witness (s116)",
    q: "CJA 2003 s116 is most directly concerned with admitting a prior statement where:",
    choices: [
      "The witness is available and willing",
      "The witness is unavailable for specified reasons (e.g., death/illness/abroad/fear), subject to conditions",
      "The statement is anonymous and unsigned",
      "The statement was made after conviction"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s116 provides a gateway for admitting statements of an identified witness who is unavailable for specified reasons, subject to statutory conditions.",
      whyWrong: [
        "If the witness is available, the normal expectation is live evidence.",
        "—",
        "Anonymity/unsigned issues are not what s116 is designed to solve.",
        "The gateway is about trial evidence, not post-conviction statements."
      ]
    }
  },
  {
    topic: "Hearsay — challenge approach",
    q: "Which is the strongest defence approach when opposing a hearsay application?",
    choices: [
      "Only say 'I don’t like hearsay'",
      "Attack the gateway (no statutory basis) and/or argue fairness/reliability issues (and where relevant, s78 fairness concerns)",
      "Ask for automatic dismissal",
      "Refuse to make submissions"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You oppose by (1) challenging the gateway and statutory conditions, and (2) arguing reliability/fairness and safeguards.",
      whyWrong: [
        "Bare dislike is not legal analysis.",
        "—",
        "Dismissal is not automatic just because hearsay is sought.",
        "Silence concedes the ground."
      ]
    }
  },
  {
    topic: "Bad character — definition concept",
    q: "In general terms under the CJA 2003, 'bad character' evidence concerns:",
    choices: [
      "Evidence of the defendant’s hobbies",
      "Evidence of misconduct and/or a disposition or reputation for misconduct",
      "Any evidence that is prejudicial",
      "Only convictions"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Bad character focuses on misconduct and related disposition/reputation, not just convictions.",
      whyWrong: [
        "Hobbies are irrelevant unless they amount to misconduct or are directly relevant to an issue.",
        "—",
        "Not all prejudicial evidence is bad character evidence.",
        "Convictions are one form, but not the only form."
      ]
    }
  },
  {
    topic: "Defendant bad character — admissibility rule (s101)",
    q: "Which statement best reflects the rule in CJA 2003 s101 about defendant bad character evidence?",
    choices: [
      "It is always admissible if relevant",
      "It is admissible only if it passes through one of the statutory gateways",
      "It is never admissible",
      "It is admissible only if the defendant testifies"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s101 provides that defendant bad character evidence is admissible only through a gateway (e.g., agreement, D introduces it, important matter in issue, etc.).",
      whyWrong: [
        "Relevance alone is insufficient for bad character.",
        "—",
        "Bad character can be admissible in defined situations.",
        "It can be admissible even if D does not testify, depending on the gateway."
      ]
    }
  },
  {
    topic: "Defendant bad character — gateway: agreement",
    q: "Which is a clear s101 gateway for defendant bad character evidence?",
    choices: [
      "All parties to the proceedings agree to it",
      "The press are interested",
      "The defendant has a job",
      "The judge dislikes the defendant"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Agreement of all parties is an express statutory gateway for defendant bad character evidence.",
      whyWrong: [
        "—",
        "Media interest is irrelevant.",
        "Employment is not a gateway.",
        "Judicial dislike is improper and not a gateway."
      ]
    }
  },
  {
    topic: "Defendant bad character — gateway: important matter in issue",
    q: "A common prosecution route to admit defendant bad character is to argue it is relevant to an 'important matter in issue' such as:",
    choices: [
      "Propensity to commit the offence type or untruthfulness (where truly in issue)",
      "Whether the courtroom is comfortable",
      "Whether the defendant is nervous",
      "Whether the defendant’s solicitor is experienced"
    ],
    correct: 0,
    explain: {
      whyRight:
        "One major gateway allows admission where bad character is relevant to an important issue between prosecution and defence, commonly propensity/untruthfulness (depending on the case).",
      whyWrong: [
        "—",
        "Comfort is irrelevant.",
        "Nervousness is not a statutory issue gateway.",
        "Solicitor experience is irrelevant."
      ]
    }
  },
  {
    topic: "Defendant bad character — correcting false impression",
    q: "Which situation most clearly opens the 'false impression' gateway against D?",
    choices: [
      "D tells the court they have never been in trouble and invites belief in spotless character",
      "D pleads not guilty",
      "D requests disclosure",
      "D applies for bail"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If D creates a misleading impression about their character (e.g., claiming spotless history), the prosecution may seek to correct it via the statutory gateway.",
      whyWrong: [
        "—",
        "A not guilty plea does not itself create a false impression.",
        "Disclosure requests do not relate to bad character gateways.",
        "Bail applications do not create a false impression gateway."
      ]
    }
  },
  {
    topic: "Defendant bad character — fairness backstop",
    q: "Even if a statutory gateway applies for defendant bad character, what is the key control the court retains?",
    choices: [
      "It must admit the evidence without question",
      "It can exclude or limit to ensure fairness (e.g., if unfairly prejudicial or distracting)",
      "It can only exclude in the magistrates’ court",
      "It must ask the jury first"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Courts retain fairness controls and can exclude/limit bad character evidence even where a gateway applies, to prevent unfairness or distraction.",
      whyWrong: [
        "Admission is not automatic in practice; fairness remains central.",
        "—",
        "Fairness controls apply across courts.",
        "The judge decides admissibility, not the jury."
      ]
    }
  },
  {
    topic: "Non-defendant bad character — s100 test (headline)",
    q: "Under CJA 2003 s100, non-defendant bad character evidence is admissible only if:",
    choices: [
      "It is relevant to anything at all",
      "It is important explanatory evidence OR has substantial probative value on a matter in issue of substantial importance (or by agreement where applicable)",
      "The witness is unpopular",
      "The defence wants to embarrass a witness"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s100 strictly limits non-defendant bad character: it must be important explanatory or substantially probative on a key matter (or agreement).",
      whyWrong: [
        "Relevance alone is not enough for non-defendant bad character.",
        "—",
        "Popularity is irrelevant.",
        "Embarrassment is not a lawful basis."
      ]
    }
  },
  {
    topic: "Non-defendant bad character — best example",
    q: "Which scenario most likely satisfies the 'substantial probative value' concept for non-defendant bad character?",
    choices: [
      "A witness once missed a bus",
      "A key identifying witness has prior convictions for dishonesty closely linked to credibility, and credibility is a central issue",
      "A witness supports a rival football team",
      "A witness is nervous in court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where credibility is central, specific dishonesty history may have substantial probative value—subject to strict controls and permission/notice.",
      whyWrong: [
        "Trivial matters don’t have substantial probative value.",
        "—",
        "Sports teams are irrelevant.",
        "Nervousness is not bad character."
      ]
    }
  },
  {
    topic: "Procedure — notice and early applications (bad character)",
    q: "As a practical rule, applications about bad character evidence should usually be raised:",
    choices: [
      "For the first time in closing speeches",
      "Early and in compliance with CrimPR notice requirements, so the court can rule pre-trial",
      "Only after conviction",
      "Only on appeal"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Bad character has structured procedure: raise it early with proper notices so the judge can decide admissibility before trial is disrupted.",
      whyWrong: [
        "Late ambush undermines case management and risks refusal/sanctions.",
        "—",
        "It must be dealt with before verdict.",
        "Appeal is not the primary stage for first-time admissibility arguments."
      ]
    }
  },
  {
    topic: "Procedure — who decides admissibility",
    q: "Who decides whether disputed evidence is admissible (e.g., hearsay/bad character/confession challenges)?",
    choices: [
      "The jury",
      "The judge (or magistrates), often after hearing submissions/evidence in a voir dire",
      "The police",
      "The complainant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Admissibility is a question of law for the judge (or magistrates), not the jury.",
      whyWrong: [
        "The jury decides facts, not admissibility.",
        "—",
        "Police do not decide what is admissible at trial.",
        "The complainant does not decide admissibility."
      ]
    }
  },
  {
    topic: "Exclusion strategy — choosing s76 vs s78",
    q: "D challenges a confession as forced and unreliable. Which is the best primary route?",
    choices: [
      "CJA 2003 s114",
      "PACE s76 (confessions), with s78 as an additional fairness route where appropriate",
      "CJA 2003 s101",
      "A civil injunction"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Confession challenges are primarily s76; s78 can also be relevant as a fairness discretion depending on the circumstances.",
      whyWrong: [
        "s114 is hearsay.",
        "—",
        "s101 is defendant bad character.",
        "Civil remedies are not the trial admissibility route."
      ]
    }
  },
  {
    topic: "Exclusion strategy — non-confession evidence",
    q: "Police obtained CCTV after a serious procedural breach. Defence argues the trial would be unfair if it is admitted. Which is the best legal route?",
    choices: [
      "PACE s78",
      "PACE s76",
      "CJA 2003 s116",
      "CJA 2003 s100"
    ],
    correct: 0,
    explain: {
      whyRight:
        "s78 is the main discretionary exclusion power for prosecution evidence where admission would adversely affect fairness.",
      whyWrong: [
        "—",
        "s76 is confession-specific.",
        "s116 is hearsay for unavailable witnesses.",
        "s100 is non-defendant bad character."
      ]
    }
  },
  {
    topic: "Hearsay — agreement gateway",
    q: "Which is most accurate if both prosecution and defence agree that a hearsay statement may be used?",
    choices: [
      "Agreement is irrelevant; hearsay is always inadmissible",
      "Agreement can be a gateway under s114(1)(c), subject to any necessary safeguards",
      "Agreement forces the court to convict",
      "Agreement only matters in the magistrates’ court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Party agreement is an express s114 gateway for hearsay admissibility, though the court retains control for fairness.",
      whyWrong: [
        "Hearsay is not always inadmissible; it depends on gateways.",
        "—",
        "Admissibility does not dictate guilt.",
        "It applies across criminal courts."
      ]
    }
  },
  {
    topic: "Hearsay — reliability concern",
    q: "Which argument most strongly attacks hearsay reliability?",
    choices: [
      "‘The statement is written’",
      "‘The maker had a strong motive to lie and cannot be cross-examined; the statement was made in suspicious circumstances’",
      "‘The statement is on headed paper’",
      "‘The statement is short’"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Motive to lie + inability to test via cross-examination + dubious circumstances are classic reliability concerns for hearsay.",
      whyWrong: [
        "Written form alone does not determine reliability.",
        "—",
        "Headed paper does not guarantee truth.",
        "Length is not a reliability test."
      ]
    }
  },
  {
    topic: "Bad character — using it against a witness",
    q: "Defence wants to adduce bad character of a key prosecution witness to undermine credibility. Which statutory framework is most relevant?",
    choices: [
      "CJA 2003 s100 (non-defendant bad character)",
      "PACE s76",
      "CJA 2003 s114",
      "Civil Evidence Act 1995"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Bad character of someone other than the defendant is controlled by s100, with strict thresholds and procedure.",
      whyWrong: [
        "—",
        "s76 is confession admissibility.",
        "s114 is hearsay admissibility.",
        "That Act is not the main criminal bad character control here."
      ]
    }
  },
  {
    topic: "Bad character — improper purpose",
    q: "Which purpose is most likely to be rejected by the court when seeking to adduce bad character evidence?",
    choices: [
      "To prove propensity where it is truly an important matter in issue and gateway applies",
      "To correct a false impression created by D",
      "To harass or humiliate a witness with marginal relevance",
      "To provide important explanatory background where permitted"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Using bad character merely to harass/humiliate with marginal relevance is improper and likely to be excluded as unfair or distracting.",
      whyWrong: [
        "This may be permitted if the statutory conditions/gateways are met and fairness supports admission.",
        "This is a recognised gateway concept.",
        "—",
        "Background/explanatory evidence can be permissible through the relevant gateway."
      ]
    }
  },
  {
    topic: "Procedure — timing and case management",
    q: "Which is the best reason to raise admissibility issues (hearsay/bad character/confession) pre-trial where possible?",
    choices: [
      "To hide the issues from the judge",
      "To avoid disrupting trial listing and ensure witnesses/parties know what evidence will be permitted",
      "To guarantee the defence wins",
      "To prevent the prosecution from serving evidence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Pre-trial rulings reduce day-of-trial adjournments and enable effective trial preparation and witness management.",
      whyWrong: [
        "The point is the opposite: to get a ruling from the judge.",
        "—",
        "It does not guarantee outcomes; it protects fairness and efficiency.",
        "It doesn’t prevent service; it manages admissibility."
      ]
    }
  },
  {
    topic: "Confessions — 'confession' concept",
    q: "Which statement best reflects what counts as a 'confession' for PACE purposes?",
    choices: [
      "Only a signed written admission at the station",
      "Any statement wholly or partly adverse to the maker (not limited to formal interviews)",
      "Only statements made to a solicitor",
      "Only statements made in court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A confession is broadly defined as any statement wholly or partly adverse to its maker, not limited to formal interview settings.",
      whyWrong: [
        "Confessions are not limited to signed interview documents.",
        "—",
        "Statements to a solicitor are generally privileged and not the only category of admissions.",
        "Confessions can be made outside court and then relied upon in court."
      ]
    }
  },
  {
    topic: "Choosing the right tool — hearsay vs bad character",
    q: "A prosecution seeks to rely on a witness’s out-of-court statement because the witness has died. Which is the primary admissibility framework?",
    choices: [
      "CJA 2003 hearsay (e.g., s116 unavailable witness gateway)",
      "CJA 2003 bad character (s101)",
      "PACE s76",
      "Civil Procedure Rules"
    ],
    correct: 0,
    explain: {
      whyRight:
        "That is classic hearsay: an out-of-court statement offered for its truth, with s116 being a key gateway when the witness is unavailable.",
      whyWrong: [
        "—",
        "Bad character controls misconduct evidence, not hearsay admissibility.",
        "s76 is confession admissibility.",
        "Civil rules do not govern criminal hearsay admissibility."
      ]
    }
  },
  {
    topic: "Judicial control — not all 'unfair' equals 'inadmissible'",
    q: "Which statement best reflects the relationship between unlawfully obtained evidence and admissibility in England & Wales?",
    choices: [
      "Unlawfully obtained evidence is always inadmissible",
      "Unlawful/irregular obtaining may support exclusion (especially via s78), but admissibility often turns on fairness rather than illegality alone",
      "Unlawful evidence is always admissible",
      "Illegality decides guilt"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The system does not operate a blanket exclusionary rule; the court focuses on fairness (often via s78) and the circumstances of obtaining evidence.",
      whyWrong: [
        "There is no automatic blanket rule excluding all unlawfully obtained evidence.",
        "—",
        "It is not always admissible; fairness may require exclusion.",
        "Illegality does not determine guilt."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Criminal Practice | Chapter 6 | Evidence and Admissibility",
    subtitle: "Relevance, PACE ss76-78, confessions, and fairness.",
    questions: questions
  };
})();
  
