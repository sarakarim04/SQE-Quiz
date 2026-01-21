(() => {
  const questions = [
  {
    topic: "Theft — core definition (force not required)",
    q: "D picks up V’s phone from a café table, intending to keep it. Which element is NOT required for theft?",
    choices: [
      "Appropriation",
      "Dishonesty",
      "Intention permanently to deprive",
      "Use of force"
    ],
    correct: 3,
    explain: {
      whyRight:
        "Theft under Theft Act 1968 s1 requires dishonest appropriation of property belonging to another with intention permanently to deprive. Force is not an element of theft; it is relevant to robbery (s8).",
      whyWrong: [
        "Appropriation is a required element of theft (s3).",
        "Dishonesty is a required element of theft (s1, with s2 guidance).",
        "Intention permanently to deprive is a required element of theft (s1, s6).",
        "—"
      ]
    }
  },
  {
    topic: "Theft — intention permanently to deprive (borrowing)",
    q: "D takes V’s bike intending to borrow it for an hour and then return it. On these facts, is D guilty of theft?",
    choices: [
      "Yes, any borrowing is theft",
      "No, because there is no intention permanently to deprive on these facts",
      "Yes, because appropriation always equals theft",
      "No, because V’s consent is required for theft"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Theft requires intention permanently to deprive (IPD). Short borrowing is not usually equivalent to an outright taking, so IPD is not established on these facts.",
      whyWrong: [
        "Borrowing can amount to IPD only if it is for so long/in such circumstances as to be equivalent to taking outright (s6).",
        "—",
        "Appropriation alone is insufficient without dishonesty and IPD (s1).",
        "Lack of consent is not a separate element of theft; the key is dishonesty and IPD."
      ]
    }
  },
  {
    topic: "Theft — appropriation (assumption of owner’s rights)",
    q: "D switches price labels in a shop so he pays £5 for a £50 item. Is there an appropriation?",
    choices: [
      "No, because the goods were not removed from the store",
      "Yes, because assuming a right of an owner (e.g., deciding the price) can be appropriation",
      "No, because the shop consented to sell the goods",
      "Only robbery is possible"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Appropriation under s3 is any assumption of the rights of an owner. Switching labels assumes an owner’s right (deciding the price) and can amount to appropriation even before leaving the store.",
      whyWrong: [
        "Removal from the store is not required for appropriation; assuming owner’s rights is enough (s3).",
        "—",
        "Owner consent does not necessarily prevent appropriation; appropriation can occur with consent (s3).",
        "Robbery requires theft plus force/threat; label switching involves no force."
      ]
    }
  },
  {
    topic: "Theft — appropriation with consent",
    q: "Owner hands D a wallet believing D is a cashier who will put it in the safe. D intends to keep it. Is there appropriation?",
    choices: [
      "No, because the owner consented to hand over the wallet",
      "Yes, because consent does not prevent appropriation",
      "No, because theft requires taking without consent",
      "Only fraud is possible; theft cannot apply"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Appropriation can occur even where the owner consents to the transfer/handling of the item. Consent does not automatically negate appropriation (s3).",
      whyWrong: [
        "Consent does not necessarily prevent appropriation (s3).",
        "—",
        "Theft does not require absence of consent as a separate element; dishonesty + IPD are key (s1).",
        "Fraud may be possible, but theft can also apply if s1 elements are met."
      ]
    }
  },
  {
    topic: "Theft — property (s4)",
    q: "Which is 'property' for the purposes of theft under Theft Act 1968 s4?",
    choices: [
      "Confidential information alone",
      "Land (always)",
      "Money",
      "A person’s labour/services"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Money is property for the purposes of theft (s4).",
      whyWrong: [
        "Pure information is generally not treated as 'property' for theft in typical exam framing.",
        "Land is not generally stolen except in specific statutory exceptions (s4).",
        "—",
        "Services/labour are not 'property' for theft; obtaining services is dealt with differently."
      ]
    }
  },
  {
    topic: "Theft — belonging to another (possession/control)",
    q: "D takes his own watch back from a repair shop without paying. Can the watch 'belong to another'?",
    choices: [
      "No, you cannot steal your own property",
      "Yes, because the repair shop has possession/control of the watch",
      "Only if the repair shop owns the watch",
      "Only if D used force"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Property 'belongs to another' if another has possession or control or any proprietary interest (s5). Even if D owns it, the repair shop’s possession/control can make theft possible.",
      whyWrong: [
        "You can steal your own property if another has possession/control or an interest (s5).",
        "—",
        "Ownership is not required; possession/control is enough (s5).",
        "Force is not an element of theft; it relates to robbery."
      ]
    }
  },
  {
    topic: "Theft — found property and dishonesty",
    q: "D finds a ring in the street and keeps it without trying to find the owner. Is theft possible?",
    choices: [
      "Never; found items cannot be stolen",
      "Possibly; if the owner retains rights and D is dishonest (e.g., fails to take reasonable steps) with IPD",
      "No; appropriation requires contact with the owner",
      "Yes, but only if D sells it"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Found property can be stolen if it still belongs to another (owner retains rights) and D acts dishonestly with intention permanently to deprive. Failing to take reasonable steps to find the owner is relevant to dishonesty (s2(1)(c)).",
      whyWrong: [
        "Found items can be stolen if the s1 elements are satisfied.",
        "—",
        "Appropriation does not require contact with the owner (s3).",
        "Selling is not required for theft; IPD may exist without sale."
      ]
    }
  },
  {
    topic: "Theft — dishonesty (s2(1)(a) legal right)",
    q: "D genuinely believes (mistakenly) that he has a legal right to take V’s property to settle a debt. Dishonesty?",
    choices: [
      "Always dishonest if the belief is wrong",
      "Not dishonest if D genuinely believes he has a legal right to deprive (s2(1)(a))",
      "Not dishonest only if a lawyer confirms the right",
      "Dishonesty depends only on V’s view"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under s2(1)(a), a genuine belief that D has a legal right to deprive the other of the property negates dishonesty, even if mistaken.",
      whyWrong: [
        "A genuine belief in a legal right can negate dishonesty even if mistaken (s2(1)(a)).",
        "—",
        "No requirement for external confirmation; the belief must be genuinely held.",
        "Dishonesty is judged by ordinary decent people’s standards, informed by D’s belief in facts—not by the victim’s personal view."
      ]
    }
  },
  {
    topic: "Theft — dishonesty (s2(1)(b) belief in consent)",
    q: "D takes V’s laptop believing V would have consented if asked. Dishonesty?",
    choices: [
      "Automatically dishonest because there was no actual consent",
      "Not dishonest if D genuinely believes V would consent (s2(1)(b))",
      "Not dishonest only if V later agrees",
      "Not dishonest only if D returns it"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under s2(1)(b), D is not dishonest if he genuinely believes the owner would consent to the appropriation.",
      whyWrong: [
        "Actual consent is not required if D genuinely believes consent would have been given (s2(1)(b)).",
        "—",
        "Later consent is not required; the question is D’s genuine belief at the time.",
        "Returning property may affect IPD but does not automatically remove dishonesty."
      ]
    }
  },
  {
    topic: "Theft — intention permanently to deprive (replacing money)",
    q: "D takes cash from a charity collection box intending to replace it next week. Is intention permanently to deprive (IPD) likely?",
    choices: [
      "Never; replacement always defeats IPD",
      "Yes; treating money as one’s own to dispose of can amount to IPD even if replacement is intended",
      "No; cash is fungible so IPD is impossible",
      "Only if D was dishonest"
    ],
    correct: 1,
    explain: {
      whyRight:
        "IPD (s6) includes treating property as one’s own to dispose of regardless of the other’s rights. Taking cash to use as your own, even with intent to replace, can satisfy IPD because the exact notes/coins are treated as disposable.",
      whyWrong: [
        "Replacement does not automatically defeat IPD; s6 can still be satisfied.",
        "—",
        "Fungibility does not prevent IPD; it can support the view D treated the money as his to dispose of.",
        "Dishonesty is a separate element; IPD is assessed independently (though both are required for theft)."
      ]
    }
  },
  {
    topic: "Theft — borrowing equivalent to taking outright",
    q: "D takes V’s concert ticket, uses it, then returns it after the concert. Theft?",
    choices: [
      "No, because it was returned",
      "Yes, because borrowing can be IPD if it is equivalent to taking outright (value exhausted)",
      "No, because tickets are not property",
      "Yes, but only robbery"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Returning an item after its value has been exhausted can be equivalent to permanent deprivation under s6. Using the ticket destroys its essential value.",
      whyWrong: [
        "Return does not prevent IPD if the borrowing is equivalent to taking outright (s6).",
        "—",
        "A ticket is property for theft purposes (s4).",
        "Robbery requires force/threat; none is indicated."
      ]
    }
  },
  {
    topic: "Robbery — core definition (s8)",
    q: "Which statement best describes robbery under Theft Act 1968 s8?",
    choices: [
      "Any threat at any time connected with theft",
      "Theft plus force or threat of force immediately before or at the time, used in order to steal",
      "Theft plus any violence within 24 hours",
      "Force alone (no theft needed)"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Robbery requires a completed theft plus force or threat of force immediately before or at the time of stealing, and the force/threat must be used in order to steal (s8).",
      whyWrong: [
        "The timing and purpose requirements are specific; not any threat at any time qualifies (s8).",
        "—",
        "There is no 24-hour rule; the statute requires immediate before/at the time (s8).",
        "Robbery requires theft; force alone is not robbery."
      ]
    }
  },
  {
    topic: "Robbery — force (snatching)",
    q: "D snatches V’s bag without any struggle. Is that 'force' for robbery?",
    choices: [
      "Never; snatching is not force",
      "Possibly; even minimal force can suffice depending on the facts",
      "Yes; it is always robbery",
      "Only theft; robbery requires a weapon"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Force for robbery can be minimal. Whether snatching involves sufficient force is fact-sensitive (e.g., whether it overcomes resistance or applies force to the person).",
      whyWrong: [
        "Force can be minimal; snatching may amount to force depending on circumstances.",
        "—",
        "Not every snatch is automatically robbery; the force element can be disputed on facts.",
        "A weapon is not required for robbery."
      ]
    }
  },
  {
    topic: "Robbery — threat used in order to steal",
    q: "D threatens V: 'Give me your wallet or I’ll hit you,' and V complies. Best offence?",
    choices: [
      "Theft only",
      "Robbery",
      "Burglary",
      "Handling stolen goods"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Robbery is theft accompanied by force or threat of force used immediately before or at the time in order to steal. The threat is used to obtain the wallet (s8).",
      whyWrong: [
        "The added threat of force elevates theft to robbery if timing and purpose are satisfied.",
        "—",
        "Burglary is about entering as a trespasser with intent or then stealing/GBH (s9), not threats in the street.",
        "Handling concerns dealing with already-stolen goods (s22)."
      ]
    }
  },
  {
    topic: "Burglary — s9(1)(a) definition",
    q: "Which best describes burglary under Theft Act 1968 s9(1)(a)?",
    choices: [
      "Entry as a trespasser with intent to steal, inflict GBH, or do unlawful damage",
      "Theft plus force",
      "Agreement to steal",
      "Handling stolen goods"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Burglary under s9(1)(a) is committed when D enters a building/part of a building as a trespasser with intent to steal, inflict GBH, or do unlawful damage.",
      whyWrong: [
        "—",
        "That describes robbery, not burglary.",
        "Agreement points to conspiracy, not burglary.",
        "Handling is a separate offence under s22."
      ]
    }
  },
  {
    topic: "Burglary — s9(1)(a) complete on entry",
    q: "D enters a house as a trespasser with intent to steal but steals nothing and leaves. Liability?",
    choices: [
      "No offence because nothing was stolen",
      "Burglary under s9(1)(a)",
      "Burglary only under s9(1)(b)",
      "Robbery"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s9(1)(a) burglary is complete upon entry as a trespasser with the relevant intent; no actual theft is required.",
      whyWrong: [
        "Actual theft is not required for s9(1)(a); intent at entry is enough.",
        "—",
        "s9(1)(b) requires theft/attempt theft or GBH/attempt GBH after entry; not necessary here.",
        "Robbery requires theft plus force/threat (s8)."
      ]
    }
  },
  {
    topic: "Burglary — trespasser by exceeding permission",
    q: "D is invited into a shop but then enters a clearly marked 'Staff Only' room knowing he is not allowed and steals a phone. Burglary?",
    choices: [
      "No, because he had permission to enter the building",
      "Yes, he can become a trespasser by exceeding permission",
      "No, burglary only happens at night",
      "Only theft is possible"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A person can be a trespasser by entering part of a building without permission or by exceeding permission, provided D knows or is reckless as to trespass. Theft after such entry can satisfy burglary (s9).",
      whyWrong: [
        "Permission for one area does not confer permission for all areas; trespass can arise in part of a building.",
        "—",
        "There is no night-time requirement for burglary.",
        "The facts can support burglary as well as theft."
      ]
    }
  },
  {
    topic: "Burglary — s9(1)(b) definition",
    q: "Which best describes burglary under Theft Act 1968 s9(1)(b)?",
    choices: [
      "Entry as a trespasser with intent to steal only",
      "Entry as a trespasser and then stealing/attempting to steal or inflicting/attempting GBH",
      "Theft plus force",
      "Agreement to burgle"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s9(1)(b) burglary requires entry as a trespasser followed by stealing/attempting to steal, or inflicting/attempting GBH.",
      whyWrong: [
        "That is closer to s9(1)(a) and is incomplete (s9(1)(a) includes other intents).",
        "—",
        "That describes robbery, not burglary.",
        "Agreement suggests conspiracy, not burglary."
      ]
    }
  },
  {
    topic: "Handling — definition and MR (s22)",
    q: "Handling stolen goods requires D to:",
    choices: [
      "Have stolen the goods himself",
      "Receive/arrange/assist dealing with goods knowing or believing they are stolen",
      "Be reckless as to whether goods are stolen",
      "Use force to take the goods"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Handling under s22 includes receiving or assisting in the retention/removal/disposal/realisation of stolen goods, with knowledge or belief that the goods are stolen.",
      whyWrong: [
        "Handling is aimed at those dealing with stolen goods; it is not limited to the original thief.",
        "—",
        "Mere suspicion/recklessness is not enough; s22 requires knowledge or belief.",
        "Force is not an element of handling."
      ]
    }
  },
  {
    topic: "Handling — suspicion vs belief",
    q: "D buys a phone cheaply, thinking it 'might be stolen' but not believing it is. Handling?",
    choices: [
      "Yes; suspicion is enough",
      "No; handling requires knowledge or belief (not mere suspicion)",
      "Yes; carelessness is enough",
      "Yes; if the phone was actually stolen"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s22 requires that D knows or believes the goods are stolen. Mere suspicion that goods might be stolen is insufficient.",
      whyWrong: [
        "Suspicion alone does not meet the knowledge/belief requirement of s22.",
        "—",
        "Negligence/carelessness is not the test; knowledge or belief is required.",
        "Even if goods are stolen, s22 still requires D’s knowledge or belief at the time."
      ]
    }
  },
  {
    topic: "Handling — original thief distinction",
    q: "D steals a laptop. Two days later, D helps sell the laptop. Is D guilty of handling stolen goods in respect of that laptop?",
    choices: [
      "Yes; the thief can always be charged with handling",
      "No; handling generally targets dealing with stolen goods by others, and the original thief is not usually liable for handling his own theft",
      "Yes; but only if he sells it quickly",
      "No; because selling is never handling conduct"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Handling is generally aimed at third parties dealing with stolen goods. The original thief is not usually convicted of handling the goods he stole (exam expects this separation of offences).",
      whyWrong: [
        "It is not correct that a thief can always be charged with handling his own stolen goods.",
        "—",
        "Speed of sale is irrelevant to the core principle.",
        "Selling/arranging disposal can be handling conduct, but the issue here is that D is the original thief."
      ]
    }
  },
  {
    topic: "Theft — IPD by abandonment",
    q: "D takes V’s car intending to use it for a month and then abandon it somewhere V likely won’t find it. IPD?",
    choices: [
      "No; because D did not intend to keep it forever",
      "Yes; treating it as one’s own to dispose of regardless of V’s rights can amount to IPD",
      "No; cars are always returned eventually",
      "Only if D sells it"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Intention permanently to deprive (s6) includes treating property as one’s own to dispose of regardless of the owner’s rights. Abandonment in a way likely to permanently deprive V supports IPD.",
      whyWrong: [
        "IPD does not require intent to keep forever; disposal/abandonment can suffice (s6).",
        "—",
        "There is no such presumption; abandonment can permanently deprive.",
        "Sale is not required; disposal/abandonment can satisfy s6."
      ]
    }
  },
  {
    topic: "Theft — dishonesty missing (mistake of ownership)",
    q: "D takes V’s property by mistake, honestly believing it is his. Theft?",
    choices: [
      "Yes; because appropriation occurred",
      "No; because dishonesty is missing",
      "Yes; because mistake is irrelevant",
      "Only robbery"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Theft requires dishonesty. If D honestly believes the property is his, dishonesty is absent and theft is not made out.",
      whyWrong: [
        "Appropriation alone is not enough without dishonesty and IPD (s1).",
        "—",
        "Mistake can negate dishonesty (s2(1)(a) style belief in right).",
        "Robbery requires theft plus force/threat; neither applies here."
      ]
    }
  },
  {
    topic: "Theft — belonging to another (definition)",
    q: "Which best describes 'belonging to another' under Theft Act 1968 s5?",
    choices: [
      "Only legal ownership counts",
      "Anyone with possession/control or a proprietary interest",
      "Only the person who paid for the item",
      "Only the person named on a receipt"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under s5, property belongs to another if that person has possession or control of it, or any proprietary right or interest.",
      whyWrong: [
        "s5 is wider than legal ownership and includes possession/control and interests.",
        "—",
        "Payment is not the legal test under s5.",
        "Receipts are irrelevant to s5’s legal definition."
      ]
    }
  },
  {
    topic: "Theft — obligation to deal with money (s5)",
    q: "V gives D £500 to pay V’s rent that day. D spends the £500 on himself instead. Is theft possible?",
    choices: [
      "No; money becomes D’s on receipt so it cannot belong to another",
      "Yes; if D was under an obligation to deal with the money in a particular way, it can still belong to another and theft may be made out",
      "No; it is always a civil matter only",
      "Only fraud is possible; theft cannot apply"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Money can 'belong to another' where D receives it under an obligation to apply it in a particular way (s5). If D dishonestly appropriates it with IPD, theft can be made out.",
      whyWrong: [
        "Receipt does not necessarily end V’s interest if there is an obligation to deal with the money in a particular way (s5).",
        "—",
        "Criminal liability can arise; it is not automatically civil only.",
        "Fraud may be possible, but theft can also apply if s1 elements are satisfied."
      ]
    }
  },
  {
    topic: "Robbery — forcing safe to be opened",
    q: "D threatens V and forces V to open a safe. D then takes cash. Offence?",
    choices: [
      "Theft only",
      "Robbery",
      "Burglary only",
      "Handling stolen goods"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Theft plus threat/force used immediately before or at the time in order to steal amounts to robbery (s8).",
      whyWrong: [
        "The threat elevates the theft to robbery if the s8 timing/purpose requirements are met.",
        "—",
        "Burglary depends on entry as a trespasser (s9); not required on these facts.",
        "Handling concerns dealing with stolen goods, not taking them by threat."
      ]
    }
  },
  {
    topic: "Burglary — intent to do unlawful damage (s9(1)(a))",
    q: "D enters a building as a trespasser intending to cause criminal damage, but does not damage anything and leaves. Liability?",
    choices: [
      "No offence because no damage occurred",
      "Burglary under s9(1)(a)",
      "Burglary under s9(1)(b)",
      "Theft"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s9(1)(a) burglary includes entry as a trespasser with intent to do unlawful damage. The offence is complete on entry with that intent.",
      whyWrong: [
        "Completion of the intended offence is not required for s9(1)(a).",
        "—",
        "s9(1)(b) requires theft/attempt theft or GBH/attempt GBH after entry.",
        "Theft is not necessary and may not be present."
      ]
    }
  },
  {
    topic: "Robbery — timing 'at the time of stealing' (escape threats)",
    q: "After taking V’s wallet, D threatens: 'If you chase me, I’ll hit you.' Could this be robbery?",
    choices: [
      "Yes; any threat after stealing makes it robbery",
      "Possibly; if theft is treated as continuing and the threat is used in order to steal/retain the property (fact-sensitive)",
      "No; threats after theft can never be robbery",
      "No; robbery requires a weapon"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Robbery requires force/threat immediately before or at the time of stealing and used in order to steal. Whether theft is treated as continuing into escape can be fact-sensitive; if so, the threat may satisfy s8.",
      whyWrong: [
        "Not any post-theft threat qualifies; timing and 'in order to steal' must be satisfied (s8).",
        "—",
        "It is too absolute to say never; courts may treat stealing as continuing in some scenarios.",
        "A weapon is not required for robbery."
      ]
    }
  },
  {
    topic: "Inchoate crossover — agreement only",
    q: "D agrees with P to burgle a shop next week but does nothing else. Which inchoate offence is most relevant?",
    choices: [
      "Attempt",
      "Conspiracy",
      "Handling stolen goods",
      "Robbery"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Conspiracy is complete upon agreement between two or more parties to pursue a course of conduct that will involve an offence (Criminal Law Act 1977).",
      whyWrong: [
        "Attempt requires an act that is more than merely preparatory (Criminal Attempts Act 1981).",
        "—",
        "Handling concerns dealing with stolen goods (s22), not agreeing to burgle.",
        "Robbery requires theft plus force/threat (s8)."
      ]
    }
  },
  {
    topic: "Robbery — quick distinction",
    q: "Which pairing is correct?",
    choices: [
      "Theft needs force; robbery does not",
      "Robbery is theft plus force/threat used immediately before or at the time in order to steal",
      "Burglary requires theft be completed",
      "Handling requires only suspicion goods are stolen"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Robbery under s8 is theft plus force or threat of force used immediately before or at the time of stealing, used in order to steal.",
      whyWrong: [
        "Force is not required for theft; it is required for robbery.",
        "—",
        "s9(1)(a) burglary is complete on entry with intent; theft need not occur.",
        "Handling requires knowledge or belief, not mere suspicion (s22)."
      ]
    }
  }
];

  

window.quizData = {
    title: "SQE1 Criminal Law — Theft Offences",
    subtitle: "Theft Act 1968 basics, appropriation, dishonesty, and robbery.",
    questions: questions
  };
})();
  
