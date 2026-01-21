(() => {
  const questions = [
  {
    topic: "Criminal Damage — s1(1): elements",
    q: "Basic criminal damage under CDA 1971 s1(1) requires which combination?",
    choices: [
      "Damage to property belonging to another + intention/recklessness as to damage + no lawful excuse",
      "Damage to any property + negligence",
      "Damage to property belonging to another + intention to endanger life",
      "Damage only if permanent"
    ],
    correct: 0,
    explain: {
      whyRight:
        "CDA 1971 s1(1) requires (i) destroying/damaging property belonging to another, (ii) intention or recklessness as to that damage, and (iii) absence of lawful excuse under s5.",
      whyWrong: [
        "—",
        "Negligence is not enough; the mens rea is intention or recklessness.",
        "Endangering life is the aggravating element for s1(2), not s1(1).",
        "Damage need not be permanent; temporary impairment can suffice."
      ]
    }
  },
  {
    topic: "Criminal Damage — meaning of 'damage'",
    q: "Which is most likely to count as 'damage' for criminal damage?",
    choices: [
      "Temporarily scratching paintwork requiring repair",
      "Purely upsetting someone",
      "Reading someone’s private diary",
      "A threat to damage in the future"
    ],
    correct: 0,
    explain: {
      whyRight:
        "‘Damage’ is interpreted broadly and can include temporary physical impairment that requires time/money to remedy (e.g., scratched paint requiring repair).",
      whyWrong: [
        "—",
        "Emotional upset alone is not damage to property.",
        "Reading a diary is not damage to property.",
        "A mere threat is not the actus reus of criminal damage (though other offences may apply)."
      ]
    }
  },
  {
    topic: "Criminal Damage — temporary impairment/cleaning cost",
    q: "D smears mud on V’s wall. It takes time and money to clean. Is this 'damage'?",
    choices: [
      "No, because it can be cleaned",
      "Yes, because impairment and cleaning cost can amount to damage",
      "Only if the wall is permanently stained",
      "Only if V was home"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Temporary impairment that requires cleaning effort and expense can amount to ‘damage’ even if it can be restored.",
      whyWrong: [
        "Cleanability does not prevent something being ‘damage’.",
        "—",
        "Permanent staining is not required.",
        "The owner’s presence is irrelevant."
      ]
    }
  },
  {
    topic: "Criminal Damage — 'belonging to another'",
    q: "For criminal damage, 'belonging to another' includes:",
    choices: [
      "Only legal ownership",
      "Anyone with possession/control or proprietary interest",
      "Only the person who paid",
      "Only the person named on a title document"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Property ‘belongs to another’ if anyone has possession or control of it, or any proprietary right or interest in it (broad, like theft).",
      whyWrong: [
        "Ownership is not the only basis; possession/control or interest is enough.",
        "—",
        "Payment is not the legal test.",
        "Title documents are not the only determinant."
      ]
    }
  },
  {
    topic: "Criminal Damage — landlord/tenant interests",
    q: "D scratches a rented flat’s door while living there as tenant. Does the door 'belong to another'?",
    choices: [
      "No, because D lives there",
      "Yes, because the landlord has a proprietary interest",
      "No, because the tenant has possession",
      "Only if the landlord is present"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Even if the tenant has possession, the landlord typically retains a proprietary interest, so it can ‘belong to another’ for s1(1).",
      whyWrong: [
        "Living there does not remove the landlord’s proprietary interest.",
        "—",
        "Tenant possession doesn’t negate that it can also belong to the landlord.",
        "Presence of the landlord is irrelevant."
      ]
    }
  },
  {
    topic: "Criminal Damage — recklessness (mens rea)",
    q: "Recklessness for criminal damage generally means:",
    choices: [
      "D should have known of the risk",
      "D actually foresaw the risk of damage and unreasonably took it",
      "Any careless act",
      "Strict liability"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Recklessness is usually subjective: D must foresee a risk of damage and go on to take it unreasonably.",
      whyWrong: [
        "That is an objective ‘should have known’ standard, which is not the general test here.",
        "—",
        "Carelessness without foresight is not enough.",
        "Criminal damage is not strict liability."
      ]
    }
  },
  {
    topic: "Criminal Damage — s1(1): recklessness suffices",
    q: "D throws a stone at a window 'for fun,' seeing a risk it may break. It breaks. Is s1(1) made out?",
    choices: [
      "No, because D didn’t intend damage",
      "Yes, recklessness as to damage is enough",
      "Only if D hated the owner",
      "No, because glass is not property"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s1(1) is satisfied by intention OR recklessness as to damage, provided there is no lawful excuse and the property belongs to another.",
      whyWrong: [
        "Intention is not required; recklessness is sufficient.",
        "—",
        "Motive/hatred is not an element.",
        "Glass is property; damage to it can qualify."
      ]
    }
  },
  {
    topic: "Criminal Damage — arson (s1(3))",
    q: "Arson is best described as:",
    choices: [
      "A separate statute offence unrelated to criminal damage",
      "Criminal damage committed by fire",
      "Only aggravated criminal damage",
      "Only damaging forests"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under CDA 1971 s1(3), where destruction/damage is caused by fire, the offence is charged as arson (basic or aggravated depending on s1(1)/(2)).",
      whyWrong: [
        "Arson is not separate from criminal damage; it’s criminal damage by fire.",
        "—",
        "Arson can be basic (s1(1)) or aggravated (s1(2)).",
        "Arson is not limited to forests."
      ]
    }
  },
  {
    topic: "Criminal Damage — basic arson",
    q: "D sets fire to an abandoned shed belonging to V. No one is at risk. What is the best offence?",
    choices: [
      "Arson (basic criminal damage by fire)",
      "Aggravated arson automatically",
      "No offence because it’s abandoned",
      "Theft"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If the shed belongs to another and is damaged/destroyed by fire without lawful excuse, that is arson under s1(1) and s1(3).",
      whyWrong: [
        "—",
        "Aggravated arson requires intent/recklessness as to endangering life by the damage (s1(2)).",
        "‘Abandoned’ doesn’t mean ownerless; belonging to another can still be satisfied.",
        "Theft is not the relevant offence."
      ]
    }
  },
  {
    topic: "Criminal Damage — aggravated criminal damage (s1(2))",
    q: "Aggravated criminal damage under CDA 1971 s1(2) requires:",
    choices: [
      "Intention/recklessness as to damage only",
      "Intention/recklessness as to endangering life by the damage",
      "Intent to kill",
      "Damage must be permanent"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s1(2) requires the usual damage element plus D intends or is reckless as to endangering life by that damage.",
      whyWrong: [
        "That describes basic criminal damage (s1(1)) and omits endangerment.",
        "—",
        "Intent to kill is not required for s1(2).",
        "Permanence is not required."
      ]
    }
  },
  {
    topic: "Criminal Damage — s1(2): whose property?",
    q: "For CDA 1971 s1(2), the property damaged must:",
    choices: [
      "Belong to another",
      "Belong to the defendant",
      "Be any property (including D’s own)",
      "Be a dwelling house only"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Unlike s1(1), s1(2) can apply to any property, including D’s own, because the gravamen is endangering life by the damage.",
      whyWrong: [
        "s1(2) does not require the property to belong to another.",
        "It can include D’s property, but is not limited to it.",
        "—",
        "It is not restricted to dwellings."
      ]
    }
  },
  {
    topic: "Criminal Damage — aggravated arson on own property",
    q: "D damages his own car by setting it on fire while it is parked next to a busy pavement, intending to endanger passers-by. Which offence fits best?",
    choices: [
      "No offence because it’s his property",
      "s1(2) aggravated arson may apply",
      "Only basic arson",
      "Theft"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If D intends or is reckless as to endangering life by the damage caused by fire, that can be aggravated arson under s1(2) and s1(3), even if the property is D’s.",
      whyWrong: [
        "s1(2) can apply to D’s own property.",
        "—",
        "Basic arson lacks the endangering life element; here the facts point to s1(2).",
        "Theft is irrelevant."
      ]
    }
  },
  {
    topic: "Criminal Damage — lawful excuse: belief in consent (s5(2)(a))",
    q: "Lawful excuse based on belief in consent requires:",
    choices: [
      "Actual consent",
      "Honest belief in consent (or would-have-consented)",
      "Belief must be reasonable",
      "Written consent only"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under s5(2)(a), it is enough that D honestly believes the owner consented or would have consented; it need not be reasonable (though reasonableness may be evidential).",
      whyWrong: [
        "Actual consent is not required if D honestly believes consent exists.",
        "—",
        "Reasonableness is not a legal requirement.",
        "Consent need not be written."
      ]
    }
  },
  {
    topic: "Criminal Damage — lawful excuse: would-have-consented",
    q: "D breaks V’s door believing V would want it broken to rescue a child from a fire. V actually would not consent. Lawful excuse?",
    choices: [
      "Yes, if D honestly believed V would consent",
      "No, because V didn’t actually consent",
      "No, because door damage is always criminal",
      "Yes, only if police were called first"
    ],
    correct: 0,
    explain: {
      whyRight:
        "s5(2)(a) focuses on D’s honest belief that the owner would have consented in the circumstances; actual consent is not required.",
      whyWrong: [
        "—",
        "Actual consent is not necessary if D had an honest belief.",
        "There is no rule that door damage is always criminal; lawful excuse may apply.",
        "Calling police is not a legal requirement for the defence."
      ]
    }
  },
  {
    topic: "Criminal Damage — lawful excuse: protection of property (s5(2)(b))",
    q: "Protection of property lawful excuse requires:",
    choices: [
      "Honest belief property needs immediate protection + reasonable means",
      "Actual proof the property was in danger",
      "That D is the owner",
      "That D intended to damage"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Under s5(2)(b), D must honestly believe property was in immediate need of protection and that the means used were reasonable in the circumstances.",
      whyWrong: [
        "—",
        "The test focuses on D’s honest belief, not proof of actual danger.",
        "D need not be the owner; the defence can protect another’s property too.",
        "Intending damage is not a requirement of the defence."
      ]
    }
  },
  {
    topic: "Criminal Damage — lawful excuse: reasonable means",
    q: "D smashes V’s window to spray water on a small fire in V’s living room, believing it’s necessary to protect V’s house. Lawful excuse?",
    choices: [
      "Always guilty because window damage is intentional",
      "Possible lawful excuse: protection of property with reasonable means",
      "Only lawful excuse if V later thanks D",
      "Only self-defence applies"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If D honestly believed the property needed immediate protection and the damage was a reasonable means in the circumstances, s5(2)(b) can apply.",
      whyWrong: [
        "Intention doesn’t prevent lawful excuse; the defence can justify intentional damage.",
        "—",
        "The owner’s later approval is not required.",
        "Self-defence is not the relevant route; the statutory lawful excuse is."
      ]
    }
  },
  {
    topic: "Criminal Damage — limits of lawful excuse",
    q: "D damages property as a political protest, claiming 'I had a good reason.' Lawful excuse?",
    choices: [
      "Yes, any moral/political reason counts",
      "No, lawful excuse is limited (e.g., consent belief, protection of property)",
      "Yes, if many people agree",
      "Yes, if no one is hurt"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Lawful excuse is defined by statutory categories (not a general ‘good motive’ defence). Political/moral justification alone is not enough.",
      whyWrong: [
        "Moral/political motives are not automatically lawful excuses under s5.",
        "—",
        "Popular support is irrelevant.",
        "Lack of personal injury does not create lawful excuse."
      ]
    }
  },
  {
    topic: "Criminal Damage — graffiti as damage",
    q: "D sprays graffiti on a wall. Is this 'damage'?",
    choices: [
      "No, because it’s art",
      "Yes, if it requires cleaning/restoration",
      "Only if the wall is historic",
      "Only if the owner is present"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Graffiti can be ‘damage’ because it impairs the property and requires cleaning/restoration expense or effort.",
      whyWrong: [
        "Artistic intention doesn’t prevent it being damage.",
        "—",
        "Historic status is not required.",
        "Owner presence is irrelevant."
      ]
    }
  },
  {
    topic: "Criminal Damage — attempt",
    q: "D tries to damage V’s car but is interrupted before causing any mark. Liability?",
    choices: [
      "No offence possible",
      "Attempted criminal damage may apply",
      "Only theft",
      "Only burglary"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Even if no damage occurs, D may be liable for attempt if his acts are more than merely preparatory and he intended to commit criminal damage.",
      whyWrong: [
        "Attempt liability can apply even where the completed offence is not achieved.",
        "—",
        "Theft is not the relevant offence.",
        "Burglary is not made out on these facts."
      ]
    }
  },
  {
    topic: "Criminal Damage — joint ownership",
    q: "D damages a car jointly owned by V and D. Does it 'belong to another' for s1(1)?",
    choices: [
      "No, because D owns it too",
      "Yes, because it belongs to another if anyone else has an interest",
      "Only if V paid more",
      "Only if D intended to harm V"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If another person has any proprietary interest or possession/control, the property can ‘belong to another’ even if D also has an interest.",
      whyWrong: [
        "Co-ownership does not prevent it belonging to another.",
        "—",
        "Payment shares are irrelevant to the legal test.",
        "Intent to harm V is not an element."
      ]
    }
  },
  {
    topic: "Criminal Damage — s1(2): endangering life by the damage",
    q: "In s1(2), 'endangering life' includes:",
    choices: [
      "Endangering only the defendant’s life",
      "Endangering any life, but it must be by the damage (not just by the act generally)",
      "Any risk of property loss",
      "Any fear caused"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s1(2) requires intention or recklessness as to endangering life, and the danger must arise from the destruction/damage itself.",
      whyWrong: [
        "It is not limited to D’s life.",
        "—",
        "Property loss is not the aggravating factor.",
        "Fear is not the relevant legal threshold."
      ]
    }
  },
  {
    topic: "Criminal Damage — aggravated arson: people inside",
    q: "D sets fire to a building at night knowing people are inside. Even if no one is harmed, what is most likely?",
    choices: [
      "Basic arson only",
      "Aggravated arson likely (reckless as to endangering life)",
      "No offence because no injuries",
      "Theft"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where D intends or is reckless as to endangering life by the fire damage, s1(2) applies (aggravated arson), even if no injury occurs.",
      whyWrong: [
        "Basic arson omits the endangering life element present on these facts.",
        "—",
        "Actual injury is not required; risk to life is enough.",
        "Theft is irrelevant."
      ]
    }
  },
  {
    topic: "Criminal Damage — mistake about ownership (mens rea/lawful excuse)",
    q: "D damages property believing (wrongly) that it belongs to him. Best?",
    choices: [
      "Always guilty because belief is irrelevant",
      "May lack mens rea if he honestly believed it was his (and/or may have lawful excuse on belief in consent)",
      "Guilty unless belief was reasonable",
      "Only theft applies"
    ],
    correct: 1,
    explain: {
      whyRight:
        "An honest belief that the property is his can negate intention/recklessness as to damaging another’s property and may overlap with lawful excuse concepts. Reasonableness is not required (though it may be evidence).",
      whyWrong: [
        "Honest belief can be relevant to mens rea/lawful excuse analysis.",
        "—",
        "Reasonableness is not a legal requirement for an honest belief.",
        "Theft is a different offence."
      ]
    }
  },
  {
    topic: "Criminal Damage — transferred intent/recklessness",
    q: "D throws a brick at V’s house. It misses and hits a nearby car, damaging it. Criminal damage?",
    choices: [
      "No, because he targeted the house",
      "Yes, if he intended or was reckless as to damage to property belonging to another",
      "No, because mistake cancels mens rea",
      "Only attempted damage"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If D intended to cause damage or foresaw a risk of damage and went ahead, mens rea can attach even if different property is damaged.",
      whyWrong: [
        "Targeting a different object doesn’t automatically remove liability if mens rea covers damage generally.",
        "—",
        "A mistake doesn’t automatically cancel mens rea if D was reckless/intended damage.",
        "If actual damage occurred, the completed offence may be made out."
      ]
    }
  },
  {
    topic: "Criminal Damage — public property",
    q: "D breaks a streetlamp owned by the council. Does it 'belong to another'?",
    choices: [
      "No, because it’s public property",
      "Yes, it belongs to another (the council/public body)",
      "Only if the lamp is insured",
      "Only if D was warned"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Public bodies can have proprietary interests/possession/control; public property can ‘belong to another’ for CDA 1971.",
      whyWrong: [
        "Public ownership does not prevent the ‘belonging to another’ element.",
        "—",
        "Insurance is irrelevant.",
        "Warnings are irrelevant."
      ]
    }
  },
  {
    topic: "Criminal Damage — damage need not be permanent",
    q: "Which statement about 'damage' is most accurate?",
    choices: [
      "Damage must be permanent",
      "Damage includes temporary impairment and cost/time to repair",
      "Damage requires total destruction",
      "Damage requires the owner to complain"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Courts interpret ‘damage’ broadly; temporary impairment and the need for repair/cleaning can be sufficient.",
      whyWrong: [
        "Permanence is not required.",
        "—",
        "Total destruction is not required; partial damage is enough.",
        "Owner complaint is not an element."
      ]
    }
  },
  {
    topic: "Criminal Damage — plants as property",
    q: "D intentionally breaks into V’s garden and tramples V’s flowers, destroying them. Offence?",
    choices: [
      "Criminal damage s1(1)",
      "Theft",
      "Robbery",
      "No offence because plants aren’t property"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Plants/flowers can be property; destroying them without lawful excuse with intention/recklessness as to damage can amount to criminal damage under s1(1).",
      whyWrong: [
        "—",
        "This is damage, not appropriation of property for theft.",
        "No force used in order to steal is described.",
        "Plants can be property for these purposes."
      ]
    }
  },
  {
    topic: "Criminal Damage — burden of proof: lawful excuse",
    q: "D damages property and raises lawful excuse under s5(2)(b). Who must disprove lawful excuse (once properly raised)?",
    choices: [
      "Defendant beyond reasonable doubt",
      "Defendant on balance of probabilities",
      "Prosecution beyond reasonable doubt",
      "Prosecution on balance of probabilities"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Once D has properly raised evidence of lawful excuse, the prosecution must disprove it beyond reasonable doubt (standard criminal burden).",
      whyWrong: [
        "The defendant does not bear the criminal standard burden to disprove guilt.",
        "Lawful excuse is not generally proved by D on balance as the legal burden in the usual exam framing.",
        "—",
        "The prosecution’s standard is beyond reasonable doubt, not balance of probabilities."
      ]
    }
  },
  {
    topic: "Criminal Damage — consent vs scope + recklessness",
    q: "D lights a small controlled fire in V’s fireplace with V’s permission, but it spreads due to D’s recklessness and damages the room. Best?",
    choices: [
      "No offence because initial permission covers everything",
      "Possible criminal damage if D was reckless as to damage beyond what was consented to and no lawful excuse applies",
      "Only arson if D intended to endanger life",
      "Only civil liability"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Permission to light a controlled fire does not automatically excuse reckless damage beyond the scope of consent; criminal damage/arson may arise if mens rea and lack of lawful excuse are shown.",
      whyWrong: [
        "Consent to one act does not necessarily cover reckless spread and further damage.",
        "—",
        "Endangering life is not required for basic arson/criminal damage by fire.",
        "Civil liability may exist, but it does not exclude criminal liability."
      ]
    }
  },
  {
    topic: "Criminal Damage — core mapping",
    q: "Which statement is correct?",
    choices: [
      "s1(1) requires endangering life",
      "s1(2) requires property belonging to another",
      "Arson is criminal damage by fire",
      "Lawful excuse is any good motive"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Arson is simply criminal damage where the destruction/damage is caused by fire (s1(3)), whether basic (s1(1)) or aggravated (s1(2)).",
      whyWrong: [
        "Endangering life is the aggravating element for s1(2), not s1(1).",
        "s1(2) can apply even if the property is D’s own.",
        "—",
        "Lawful excuse is limited to statutory/recognised categories, not any good motive."
      ]
    }
  },

  // --- Additional 4 to make the full 30 (aligned with the same chapter points) ---

  {
    topic: "Criminal Damage — s1(1): property must belong to another",
    q: "Which statement best reflects the property requirement for basic criminal damage (s1(1))?",
    choices: [
      "Damage to any property is enough",
      "Property must belong to another (possession/control/proprietary interest)",
      "Property must be owned by the Crown",
      "Property must be land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "For s1(1), the damaged/destroyed property must ‘belong to another’ (broadly defined by possession/control or proprietary interest).",
      whyWrong: [
        "That describes s1(2) more closely; s1(1) requires belonging to another.",
        "—",
        "There is no Crown-ownership requirement.",
        "No such limitation applies."
      ]
    }
  },
  {
    topic: "Criminal Damage — s1(2): danger must be 'by the damage'",
    q: "For aggravated criminal damage (s1(2)), which is most accurate about the endangerment requirement?",
    choices: [
      "Life can be endangered by anything D does, even if unrelated to the damage",
      "Life must be endangered by the destruction/damage itself",
      "Endangering life requires actual injury",
      "Endangering life requires intent to kill"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s1(2) requires that the danger to life arises from the destruction or damage (not merely from D’s broader conduct).",
      whyWrong: [
        "The statute requires endangerment ‘by the damage’.",
        "—",
        "Actual injury is not required; risk is enough.",
        "Intent to kill is not required."
      ]
    }
  },
  {
    topic: "Criminal Damage — lawful excuse: protection of property can protect another’s property",
    q: "Under s5(2)(b), which is correct about whose property may be protected?",
    choices: [
      "Only D’s own property",
      "Only the owner’s property",
      "Any property (D’s or another’s) that D honestly believes needs immediate protection",
      "Only insured property"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The defence can apply where D honestly believes property (whether his or another’s) is in immediate need of protection and the means are reasonable.",
      whyWrong: [
        "It is not limited to D’s property.",
        "It is not limited only to the owner’s property; it can include third parties’ property too.",
        "—",
        "Insurance status is irrelevant."
      ]
    }
  },
  {
    topic: "Criminal Damage — arson: aggravated vs basic",
    q: "Which statement best distinguishes basic arson from aggravated arson?",
    choices: [
      "Basic arson requires intent to endanger life; aggravated arson does not",
      "Aggravated arson includes intent/recklessness as to endangering life by the fire damage",
      "Aggravated arson requires the property to belong to another",
      "Basic arson can never apply to buildings"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Aggravated arson is arson with the additional s1(2) element: intent or recklessness as to endangering life by the damage caused by fire.",
      whyWrong: [
        "This is reversed; endangering life is for the aggravated form.",
        "—",
        "s1(2) does not require belonging to another; it can be D’s own property.",
        "Basic arson can apply to buildings as property."
      ]
    }
  }
];



  

window.quizData = {
    title: "SQE1 Criminal Law — Criminal Damages",
    subtitle: "CDA 1971 elements, lawful excuse, and aggravated damage.",
    questions: questions
  };
})();
  
