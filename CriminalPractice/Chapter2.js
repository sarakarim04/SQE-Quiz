(() => {
  const questions = [
  {
    topic: "Bail basics — presumption and exceptions",
    q: "At D’s first appearance in the magistrates’ court, which statement best reflects the general approach to bail?",
    choices: [
      "Bail is refused unless D proves they deserve it",
      "Bail is the general rule unless an exception applies",
      "Bail is only available for summary offences",
      "Bail is never available where there is a complainant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The starting point is the presumption/right to bail, subject to statutory exceptions (e.g., substantial grounds of failing to surrender, further offending, or interference).",
      whyWrong: [
        "The default is not refusal; the default is bail subject to exceptions.",
        "—",
        "Bail is not limited to summary offences.",
        "Having a complainant does not automatically remove bail; conditions may manage risk."
      ]
    }
  },
  {
    topic: "Refusing bail — core Schedule 1 risks",
    q: "Which is NOT one of the three classic 'substantial grounds' risks used to refuse bail?",
    choices: [
      "Failing to surrender",
      "Committing further offences",
      "Interfering with witnesses/obstructing justice",
      "Denying the allegation in interview"
    ],
    correct: 3,
    explain: {
      whyRight:
        "Refusal grounds focus on substantial grounds for failing to surrender, further offending, or interference/obstruction—not on whether D denies guilt.",
      whyWrong: [
        "Failing to surrender is a key bail risk category.",
        "Further offending is a key bail risk category.",
        "Interference/obstruction is a key bail risk category.",
        "—"
      ]
    }
  },
  {
    topic: "Bail advocacy — structure",
    q: "You are making a bail application. What is the best overall approach?",
    choices: [
      "Argue only that D is innocent",
      "Identify each alleged risk and propose targeted conditions to manage it",
      "Ask for unconditional bail in every case",
      "Attack the complainant’s credibility in detail"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Strong applications address each risk head-on and show how proportionate conditions can manage them (rather than arguing merits alone).",
      whyWrong: [
        "Merits can matter, but bail turns primarily on risk management.",
        "—",
        "Unconditional bail is not suitable in every case.",
        "Over-attacking credibility often backfires and is not the main bail focus."
      ]
    }
  },
  {
    topic: "Failing to surrender — strongest factors",
    q: "Which factor most strongly supports an argument that D is unlikely to fail to surrender?",
    choices: [
      "D says they will attend",
      "D has a stable address, employment, and a history of attending court",
      "D dislikes court buildings",
      "D has many friends"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Community ties and past compliance (attendance history) are powerful indicators against flight risk.",
      whyWrong: [
        "A bare promise is weaker than objective indicators.",
        "—",
        "Personal preference is irrelevant.",
        "Friends alone do not show stability or compliance."
      ]
    }
  },
  {
    topic: "Further offending — tailoring conditions",
    q: "D is charged with repeated shop thefts. Which condition most directly targets the further-offending risk?",
    choices: [
      "Surrender passport",
      "Reporting daily to a police station",
      "Curfew and exclusion from the shopping centre",
      "No alcohol condition in all cases"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A curfew plus a specific exclusion zone targets the alleged offending pattern and reduces opportunity.",
      whyWrong: [
        "Passport surrender targets flight risk, not shop theft opportunity.",
        "Reporting may help monitoring but is less targeted than exclusion + curfew here.",
        "—",
        "Alcohol conditions must be linked to the risk; they’re not automatic."
      ]
    }
  },
  {
    topic: "Interference risk — witness protection",
    q: "D is charged with harassment of an ex-partner. What is the best condition package to address interference/safety risk?",
    choices: [
      "Unconditional bail",
      "Non-contact + exclusion zone around the complainant’s address/work + surrender passport",
      "Reporting once per month only",
      "A condition to 'be good'"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Non-contact and exclusion are the most directly protective; passport surrender may be added if flight risk is alleged.",
      whyWrong: [
        "Unconditional bail may not manage the protection risk.",
        "—",
        "Infrequent reporting doesn’t prevent contact or proximity.",
        "Vague conditions are ineffective and unenforceable."
      ]
    }
  },
  {
    topic: "Conditional vs unconditional bail",
    q: "When is conditional bail most appropriate?",
    choices: [
      "Whenever D asks for it",
      "Where risks exist but can be managed proportionately by conditions",
      "Only for indictable-only offences",
      "Only after a guilty plea"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Conditional bail is used to manage identifiable risks without resorting to remand in custody.",
      whyWrong: [
        "It depends on risks and proportionality, not preference alone.",
        "—",
        "It is not offence-category limited in that way.",
        "It applies pre-trial; it is not limited to post-plea."
      ]
    }
  },
  {
    topic: "Surety vs security — concepts",
    q: "Which statement best distinguishes a surety from security in bail terms?",
    choices: [
      "Surety is a promise of good behaviour; security is a curfew",
      "Surety is a person who pledges money if D absconds; security is money lodged/committed as part of bail",
      "Surety is only for youths; security only for adults",
      "They mean the same thing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A surety is typically a person who undertakes to forfeit a sum if D breaches; security involves money/value committed under the bail decision.",
      whyWrong: [
        "Neither is defined as simply 'promise' or 'curfew'.",
        "—",
        "Both can be used across ages depending on the case.",
        "They are related but not identical."
      ]
    }
  },
  {
    topic: "Residence condition — purpose",
    q: "Why might the court impose a residence condition (live and sleep at a specified address)?",
    choices: [
      "To punish D for being charged",
      "To reduce flight risk and support monitoring/attendance",
      "To make it easier for police to interview D daily",
      "To guarantee conviction"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A stable address reduces failing-to-surrender risk and makes conditions practical to monitor.",
      whyWrong: [
        "Bail is not punitive.",
        "—",
        "Interview needs are separate from bail purposes.",
        "Bail conditions do not determine guilt."
      ]
    }
  },
  {
    topic: "Curfew + electronic monitoring — function",
    q: "A curfew with electronic monitoring is most often used to:",
    choices: [
      "Replace all other conditions automatically",
      "Manage risk by restricting and verifying D’s whereabouts at certain times",
      "Prove guilt",
      "Allow D to travel freely"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Curfew/monitoring is a risk-management tool: it restricts movement and increases compliance oversight.",
      whyWrong: [
        "It does not automatically replace other tailored conditions.",
        "—",
        "It is not evidence of guilt by itself.",
        "It restricts travel rather than enabling it."
      ]
    }
  },
  {
    topic: "Bail hearing — prosecution opposition",
    q: "In a contested bail application, what must the prosecution usually do to justify refusing bail?",
    choices: [
      "Prove guilt beyond reasonable doubt",
      "Show substantial grounds for a relevant risk (e.g., FTS/further offending/interference) or another statutory basis",
      "Show the offence is unpopular",
      "Show D has no lawyer"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Bail refusal is primarily risk-based; the prosecution relies on statutory refusal grounds, not proof of guilt to trial standard.",
      whyWrong: [
        "Trial standard proof is not required at a bail decision.",
        "—",
        "Popularity is irrelevant.",
        "Legal representation is irrelevant to entitlement."
      ]
    }
  },
  {
    topic: "Merits in bail — when relevant",
    q: "How do case merits (strength of evidence) typically fit into bail decisions?",
    choices: [
      "Merits are irrelevant in all cases",
      "Strength of evidence can inform risk assessment (e.g., incentive to abscond) but bail remains primarily risk-managed by conditions",
      "Merits determine bail automatically",
      "Merits are considered only after conviction"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Stronger evidence can increase perceived flight risk, but the core is still whether risks can be managed by conditions.",
      whyWrong: [
        "Merits can be relevant to risk; they’re not always irrelevant.",
        "—",
        "There is no automatic merits-to-bail formula.",
        "Merits are considered pre-trial too."
      ]
    }
  },
  {
    topic: "Material change — renewing bail",
    q: "D was refused bail last week. Which is the best basis to renew the application?",
    choices: [
      "Simply repeating the same arguments",
      "A material change: e.g., new address/surety now available or key witness risk now addressed by new conditions",
      "Saying the court was unfair",
      "Asking for bail because the client is bored"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Bail can be revisited where there is a material change in circumstances or a new workable package that addresses prior refusal reasons.",
      whyWrong: [
        "Repetition without change is weaker.",
        "—",
        "Allegations of unfairness without new substance rarely help at first instance.",
        "Boredom is irrelevant."
      ]
    }
  },
  {
    topic: "Withdrawing/varied bail — concept",
    q: "If D is on bail and new information shows increased risk (e.g., attempted contact with a witness), what is the most accurate next step?",
    choices: [
      "Nothing can be done until trial",
      "The prosecution may apply for bail to be varied or withdrawn, and the court can reconsider conditions/remand",
      "D must be convicted first",
      "Police must ignore it unless there is a confession"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Bail status and conditions can be revisited where risk changes; the court can vary conditions or remand if justified.",
      whyWrong: [
        "Bail can be actively managed pre-trial.",
        "—",
        "Conviction is not required to vary/withdraw bail.",
        "Police/prosecution do not have to ignore risk escalations."
      ]
    }
  },
  {
    topic: "Non-contact condition — scope",
    q: "A non-contact condition typically means D must:",
    choices: [
      "Avoid direct and indirect contact (including messages via others/social media) with named persons",
      "Only avoid face-to-face contact",
      "Only avoid contact after 6pm",
      "Avoid contact only if the complainant asks"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Non-contact is usually framed to prevent direct or indirect contact to protect witnesses/complainants and the integrity of proceedings.",
      whyWrong: [
        "—",
        "Limiting it to face-to-face often fails to manage the real risk.",
        "Time-limited non-contact is unusual unless specifically justified.",
        "It is a court condition, not optional on request."
      ]
    }
  },
  {
    topic: "Exclusion zone — purpose",
    q: "An exclusion zone condition is best used to:",
    choices: [
      "Punish D by restricting all movement",
      "Create physical separation to protect complainants/witnesses or prevent re-offending at a location",
      "Prove D’s guilt",
      "Replace the need for any trial"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Exclusion zones reduce proximity opportunities and manage interference or repeat-offending risks.",
      whyWrong: [
        "Conditions must be proportionate and risk-linked, not punitive.",
        "—",
        "It does not prove guilt.",
        "It does not remove the need for trial."
      ]
    }
  },
  {
    topic: "Reporting condition — use",
    q: "A reporting condition (attend police station at set times) mainly aims to:",
    choices: [
      "Ensure D is available and monitored, reducing absconding risk",
      "Force D to confess",
      "Allow daily interrogation",
      "Guarantee acquittal"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Reporting provides a compliance mechanism and helps manage fail-to-surrender risk.",
      whyWrong: [
        "—",
        "It is not designed to compel confession.",
        "It is not a tool for ongoing interrogation.",
        "It does not determine verdict."
      ]
    }
  },
  {
    topic: "Passport surrender — correct linkage",
    q: "Passport surrender is most logically linked to which bail risk?",
    choices: [
      "Failing to surrender",
      "Interfering with witnesses",
      "Shoplifting",
      "Noise nuisance"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Surrendering travel documents reduces flight risk and supports attendance at court.",
      whyWrong: [
        "—",
        "It doesn’t directly stop witness interference (non-contact/exclusion does).",
        "It doesn’t directly target shoplifting opportunity.",
        "It’s not the typical response to nuisance."
      ]
    }
  },
  {
    topic: "Bail package — best practice",
    q: "Which is the best bail 'package' approach when prosecution alleges interference risk?",
    choices: [
      "Offer vague reassurances only",
      "Offer specific, enforceable conditions (non-contact, exclusion, curfew/EM if needed) supported by facts",
      "Refuse all conditions and demand unconditional bail",
      "Attack the complainant’s character"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Courts respond to practical risk-control proposals backed by evidence (address, phone access, willingness, third-party support).",
      whyWrong: [
        "Vague reassurance doesn’t manage risk.",
        "—",
        "Refusing conditions can make custody more likely if risk is accepted.",
        "Character attacks usually aren’t the bail focus and can be counterproductive."
      ]
    }
  },
  {
    topic: "Bail decision — proportionality",
    q: "Which statement best reflects how conditions should be set?",
    choices: [
      "Conditions should be as strict as possible to be safe",
      "Conditions should be proportionate and necessary to manage the identified risks",
      "Conditions should always include a curfew",
      "Conditions should be used to punish"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Bail conditions are risk-management tools and must be necessary and proportionate to those risks.",
      whyWrong: [
        "Overly strict conditions may be unlawful/unnecessary and increase breach risk.",
        "—",
        "Curfew is not automatic; it depends on risk and proportionality.",
        "Bail is not punishment."
      ]
    }
  },
  {
    topic: "Breach — immediate consequence",
    q: "If D breaches a bail condition (e.g., contacts the complainant), which is most accurate?",
    choices: [
      "Nothing happens unless the trial is finished",
      "D may be arrested and brought back to court; bail can be varied or D can be remanded",
      "Breach automatically means a prison sentence",
      "The complainant decides the consequence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Breach can lead to arrest and reconsideration of bail (tightened conditions or remand). Consequences depend on the context and powers used.",
      whyWrong: [
        "Bail is actively enforceable pre-trial.",
        "—",
        "There isn’t an automatic sentence just for breach in every scenario.",
        "The court/police process determines outcomes, not the complainant."
      ]
    }
  },
  {
    topic: "Failure to surrender — concept",
    q: "Which scenario most clearly raises a failing-to-surrender concern?",
    choices: [
      "D has attended court reliably in the past and has strong community ties",
      "D has no fixed address, recently missed a court date, and has limited ties",
      "D is polite to the custody officer",
      "D denies the charge"
    ],
    correct: 1,
    explain: {
      whyRight:
        "No fixed address and a history of non-attendance are classic indicators of flight/FTS risk.",
      whyWrong: [
        "These factors reduce FTS risk.",
        "—",
        "Politeness is irrelevant to attendance risk.",
        "Denial does not equal flight risk."
      ]
    }
  },
  {
    topic: "Youth — bail focus",
    q: "For a 15-year-old charged with assault, what is your best bail-focused approach?",
    choices: [
      "Treat it exactly like an adult case with no extra welfare focus",
      "Emphasise welfare and safeguarding, propose suitable supervision/address arrangements, and tailor conditions realistically",
      "Assume bail will always be refused for youths",
      "Only argue the merits of the case"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Youth cases require practical safeguarding planning (where they will live, supervision, schooling) and realistic conditions.",
      whyWrong: [
        "Youth cases require welfare-sensitive planning.",
        "—",
        "Bail is not automatically refused because of age.",
        "Merits alone rarely address the bail risk questions."
      ]
    }
  },
  {
    topic: "Bail hearing — what to prepare",
    q: "Which is the most useful preparation for a contested bail hearing?",
    choices: [
      "Only a speech about fairness",
      "Verified address details, proposed conditions, surety information, and a plan addressing each alleged risk",
      "A list of insults about the prosecution",
      "A promise that D will behave"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Courts decide bail on practical risk management—evidence of stability and an enforceable conditions package matters most.",
      whyWrong: [
        "Fairness rhetoric without a plan won’t manage risk.",
        "—",
        "Insults are irrelevant and harmful.",
        "Promises are weaker than concrete safeguards."
      ]
    }
  },
  {
    topic: "Court duty — considering bail",
    q: "Which statement is most accurate about the court’s duty regarding bail at hearings?",
    choices: [
      "The court considers bail only if the defence applies",
      "The court must consider bail whenever it can detain the defendant, even if no application is made",
      "The court considers bail only at the first hearing",
      "The court considers bail only in the Crown Court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Courts are required to consider bail at relevant stages whenever detention is an option, not only on request.",
      whyWrong: [
        "Bail consideration is not purely application-driven.",
        "—",
        "Bail can be reconsidered at later hearings too.",
        "Bail is considered in both magistrates’ and Crown Courts."
      ]
    }
  },
  {
    topic: "Police bail vs court bail — distinction",
    q: "Which statement best distinguishes police bail from court bail?",
    choices: [
      "Police bail is post-conviction; court bail is pre-charge",
      "Police bail is a pre-charge investigative tool; court bail follows charge and relates to attendance pending trial/sentence",
      "They are identical in law and purpose",
      "Police bail always has conditions; court bail never does"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Police bail is typically used while investigating pre-charge; court bail is used after charge to manage attendance and risks pending court outcome.",
      whyWrong: [
        "That reverses the usual position.",
        "—",
        "They differ in stage and function.",
        "Either can be conditional or unconditional depending on circumstances."
      ]
    }
  },
  {
    topic: "Proposed condition — enforceability",
    q: "Which proposed condition is MOST likely to be rejected as unenforceable or vague?",
    choices: [
      "Report to X police station every Monday at 10am",
      "Do not contact Ms A directly or indirectly",
      "Do not enter the ABC shopping centre",
      "Be of good behaviour at all times"
    ],
    correct: 3,
    explain: {
      whyRight:
        "Vague conditions like 'be of good behaviour' are hard to enforce and don’t target specific risks.",
      whyWrong: [
        "This is specific and enforceable.",
        "This is specific and enforceable.",
        "This is specific and enforceable.",
        "—"
      ]
    }
  },
  {
    topic: "Risk assessment — matching condition to risk",
    q: "Prosecution alleges D will intimidate a neighbour witness. Which condition most directly targets that risk?",
    choices: [
      "Surrender passport",
      "No contact with the witness and an exclusion zone around the witness’s home",
      "Reporting once per month",
      "No alcohol in all cases"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Non-contact and exclusion directly reduce opportunities for intimidation/interference.",
      whyWrong: [
        "Passport surrender targets flight risk.",
        "—",
        "Reporting does not prevent intimidation.",
        "Alcohol conditions must be linked to the alleged risk; they’re not automatic."
      ]
    }
  },
  {
    topic: "When bail is refused — next steps",
    q: "If bail is refused, what is the best immediate practice point?",
    choices: [
      "Do nothing until trial",
      "Ensure reasons are clear/recorded, consider whether conditions could address concerns, and plan for a renewed application if circumstances change",
      "Assume refusal is final and cannot be revisited",
      "Tell the client to contact witnesses to help"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You need the refusal reasons to target future applications/appeal and to craft a conditions package that addresses specific concerns.",
      whyWrong: [
        "Inaction wastes opportunities to manage risk and revisit bail.",
        "—",
        "Bail decisions can be revisited, especially on change of circumstances.",
        "Contacting witnesses risks further offences and makes bail worse."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Criminal Practice | Chapter 2 | Bail and Pre-trial",
    subtitle: "Bail applications, risk factors, conditions, and remand decisions.",
    questions: questions
  };
})();
  
