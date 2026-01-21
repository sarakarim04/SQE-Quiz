(() => {
  const questions = [
  {
    topic: "Resulting trusts — definition",
    q: "A resulting trust most commonly arises where:",
    choices: [
      "The trustee commits a breach of trust",
      "Equity concludes the transferee was not intended to take beneficially, so the benefit 'results back' to the transferor/estate",
      "A trust is created for charitable purposes",
      "A beneficiary collapses the trust under Saunders v Vautier"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Resulting trusts reflect a default equitable response: the beneficial interest returns to the transferor (or estate) where there is no intention for the recipient to take beneficially.",
      whyWrong: [
        "Breach of trust engages liability/remedies, not the definition of resulting trust.",
        "—",
        "Charitable trusts are a different category.",
        "Saunders v Vautier terminates a valid trust; it doesn’t create a resulting trust."
      ]
    }
  },
  {
    topic: "Automatic resulting trust — failed express trust",
    q: "Which scenario most clearly produces an automatic resulting trust?",
    choices: [
      "An express trust fails for uncertainty and there is no alternative disposition",
      "A trustee pays the wrong beneficiary by mistake",
      "A beneficiary assigns their interest to someone else in writing",
      "Trustees invest in shares"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If an express trust fails (e.g., uncertainty) and the beneficial interest is undisposed of, equity commonly imposes an automatic resulting trust back to the settlor/estate.",
      whyWrong: [
        "—",
        "That is a breach/administration issue, not an automatic resulting trust basis.",
        "That is a disposition issue, not a trust failure.",
        "Investment is administration, not a trust-failure trigger."
      ]
    }
  },
  {
    topic: "Automatic resulting trust — undisposed beneficial interest",
    q: "An express trust disposes of income but is silent on capital after the income interest ends. Likely result for the undisposed capital?",
    choices: [
      "Trustees take beneficially",
      "Automatic resulting trust to the settlor/estate (unless another construction/gift-over applies)",
      "Charitable trust",
      "Capital goes to the income beneficiary automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where the instrument does not dispose of the entire beneficial interest, the undisposed part commonly results back to the settlor/estate.",
      whyWrong: [
        "Trustees do not take beneficially without clear intention.",
        "—",
        "No charitable purpose is indicated.",
        "Income entitlement does not automatically carry capital."
      ]
    }
  },
  {
    topic: "Presumed resulting trust — voluntary transfer",
    q: "A transfers £50,000 to B (a friend) with no consideration and no clear evidence of gift intention. The starting presumption is:",
    choices: [
      "Presumed resulting trust in A’s favour",
      "Presumption of advancement in B’s favour",
      "Automatic charitable trust",
      "No presumption: B always takes beneficially"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A voluntary transfer without consideration can raise a presumed resulting trust: equity presumes no intention to gift unless rebutted.",
      whyWrong: [
        "—",
        "Advancement is limited to certain relationships (not usually friends).",
        "Not relevant.",
        "Equity does not always presume an outright gift in a voluntary transfer."
      ]
    }
  },
  {
    topic: "Presumed resulting trust — purchase money",
    q: "A pays the full purchase price for a house, but title is put in B’s name (no evidence of gift). Likely equitable position?",
    choices: [
      "B holds on resulting trust for A (purchase money resulting trust)",
      "A holds on trust for B because A paid",
      "The transaction is void",
      "B takes absolutely because legal title is in B’s name"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Where A provides purchase money but title is in B’s name, equity commonly presumes B holds on resulting trust for A (unless rebutted).",
      whyWrong: [
        "Payment by A supports A’s beneficial claim, not B’s.",
        "—",
        "Not automatically void.",
        "Legal title is not conclusive of beneficial ownership."
      ]
    }
  },
  {
    topic: "Purchase money resulting trust — proportions",
    q: "A pays 30% of the purchase price, B pays 70%, but title is in B’s name alone. No contrary intention is shown. Likely result?",
    choices: [
      "A has no beneficial interest",
      "B holds 30% on resulting trust for A and 70% beneficially for B",
      "A and B split 50/50 automatically",
      "A holds 70% on trust for B"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Resulting trusts typically track contributions unless rebutted: A’s 30% contribution supports a 30% beneficial interest.",
      whyWrong: [
        "A’s contribution usually gives rise to a proportional beneficial interest.",
        "—",
        "Equality is not presumed under resulting trust analysis.",
        "This reverses the contribution logic."
      ]
    }
  },
  {
    topic: "Rebutting presumed resulting trust — evidence",
    q: "How can a presumed resulting trust be rebutted?",
    choices: [
      "Only by a deed witnessed by two witnesses",
      "By evidence that the transferor intended a gift (or a loan) rather than retention of beneficial interest",
      "By trustee refusal",
      "By proving the transferor is wealthy"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The presumption is about intention; evidence of gift/loan intention rebuts it.",
      whyWrong: [
        "No universal deed requirement for rebutting evidence.",
        "—",
        "Trustee refusal doesn’t determine the transferor’s intention.",
        "Wealth is not determinative."
      ]
    }
  },
  {
    topic: "Presumption of advancement — meaning",
    q: "What does the presumption of advancement do?",
    choices: [
      "It creates a resulting trust automatically",
      "It presumes a transfer was intended as a gift in certain relationships, rebutting a resulting trust presumption",
      "It converts private trusts into charities",
      "It allows trustees to ignore beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Advancement presumes gifting in limited relationships, working against a resulting trust presumption (but it is rebuttable).",
      whyWrong: [
        "It operates against, not in favour of, a resulting trust presumption.",
        "—",
        "Unrelated.",
        "Unrelated."
      ]
    }
  },
  {
    topic: "Presumption of advancement — classic category",
    q: "Which relationship is most traditionally associated with presumption of advancement?",
    choices: [
      "Employer → employee",
      "Father → child",
      "Friend → friend",
      "Landlord → tenant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Traditionally, father→child (and husband→wife) are classic advancement categories (scope is limited and rebuttable).",
      whyWrong: [
        "Not a classic category.",
        "—",
        "Not a classic category.",
        "Not a classic category."
      ]
    }
  },
  {
    topic: "Automatic vs presumed resulting trusts",
    q: "Which statement best distinguishes automatic from presumed resulting trusts?",
    choices: [
      "Automatic resulting trusts depend on presumed intentions; presumed resulting trusts arise when express trusts fail",
      "Automatic resulting trusts arise when an express trust fails/doesn’t dispose of the whole beneficial interest; presumed resulting trusts arise from presumed intention in voluntary transfer/purchase money cases",
      "They are the same",
      "Presumed resulting trusts arise only in wills"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Automatic = trust failure/undisposed beneficial interest. Presumed = presumption about intention in certain transfers/contributions.",
      whyWrong: [
        "This reverses the categories.",
        "—",
        "They’re distinct.",
        "They commonly arise inter vivos too."
      ]
    }
  },
  {
    topic: "Vandervell — link to resulting trusts",
    q: "Why is Vandervell-type reasoning relevant to resulting trusts?",
    choices: [
      "Because it proves all transfers need writing",
      "Because if an equitable interest is not effectively disposed of, equity may treat it as remaining/returning to the transferor via resulting trust",
      "Because it abolishes the beneficiary principle",
      "Because it makes all trusts charitable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the beneficial interest is not effectively disposed of, a resulting trust may arise (and s53(2) preserves resulting trusts from writing barriers).",
      whyWrong: [
        "Not correct; writing issues are more nuanced (s53(1)/(2)).",
        "—",
        "Unrelated.",
        "Unrelated."
      ]
    }
  },
  {
    topic: "LPA 1925 s53(2) — resulting trusts",
    q: "How does LPA 1925 s53(2) relate to resulting trusts?",
    choices: [
      "It requires resulting trusts to be evidenced in writing",
      "It provides that s53(1) writing requirements do not affect resulting trusts, which arise by operation of law",
      "It abolishes resulting trusts",
      "It converts resulting trusts into express trusts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s53(2) preserves resulting trusts: they can arise without s53(1) signed writing because they arise by operation of law.",
      whyWrong: [
        "It does the opposite.",
        "—",
        "They still exist.",
        "No such conversion."
      ]
    }
  },
  {
    topic: "Failed purpose trust → resulting trust",
    q: "A non-charitable purpose trust fails and there is no gift-over. The most typical outcome is:",
    choices: [
      "Trustees take beneficially",
      "Resulting trust to the settlor/estate",
      "Automatic charitable trust",
      "Court appoints a substitute purpose"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the purpose trust is void, the beneficial interest is undisposed of and commonly results back to settlor/estate.",
      whyWrong: [
        "Trustees do not take beneficially without clear intention.",
        "—",
        "No automatic conversion into charity.",
        "Courts don’t generally invent substitute private purposes."
      ]
    }
  },
  {
    topic: "Presumed resulting trust — loan vs gift",
    q: "A transfers £20,000 to B. Evidence shows A intended B to repay it. What is the best analysis?",
    choices: [
      "Resulting trust necessarily arises",
      "No resulting trust: the proper analysis is loan/debt, not beneficial ownership",
      "Automatic constructive trust",
      "Automatic charitable trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If intention is a loan, B is intended to take the money but owes repayment; a resulting trust is not the right analysis.",
      whyWrong: [
        "Resulting trust is about lack of intention to pass beneficial ownership; a loan intends transfer of ownership subject to repayment.",
        "—",
        "Not automatic.",
        "Not relevant."
      ]
    }
  },
  {
    topic: "Voluntary transfer to trustee? (express trust vs resulting trust)",
    q: "A transfers property to T 'to hold on trust', but the trust terms fail for uncertainty. Likely outcome?",
    choices: [
      "T takes beneficially",
      "Resulting trust back to A (automatic resulting trust)",
      "Gift to the Crown",
      "Trust becomes charitable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where an express trust fails, equity commonly imposes an automatic resulting trust back to the settlor.",
      whyWrong: [
        "No intention to benefit T.",
        "—",
        "No basis for bona vacantia.",
        "No basis for charity."
      ]
    }
  },
  {
    topic: "Resulting trust vs constructive trust — key difference",
    q: "Which best distinguishes a resulting trust from a constructive trust?",
    choices: [
      "Resulting trusts arise only where there is wrongdoing; constructive trusts never do",
      "Resulting trusts commonly respond to lack of intention to benefit transferee; constructive trusts commonly respond to unconscionability/wrongdoing or certain established categories",
      "Constructive trusts require writing; resulting trusts never do",
      "Resulting trusts only relate to land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Resulting trusts often reflect presumed/automatic return of beneficial interest; constructive trusts often arise to prevent unconscionability or in recognised categories (e.g., common intention).",
      whyWrong: [
        "Wrongdoing is not a requirement for all constructive trusts, and resulting trusts can arise without wrongdoing.",
        "—",
        "Writing is not the core distinction (and s53(2) matters).",
        "Resulting trusts can apply to many assets, not only land."
      ]
    }
  },
  {
    topic: "Purchase money RT — joint names (starting point)",
    q: "A pays the whole purchase price but puts title in joint names of A and B (no evidence of gift intention). What is the best starting point?",
    choices: [
      "Automatic resulting trust for A of 100%",
      "Presumed resulting trust may arise in A’s favour for B’s share unless evidence shows gift intention (and subject to any applicable advancement presumption)",
      "B takes 50% automatically because joint names always means 50/50 beneficially",
      "Trust is void"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Equity may presume A did not intend to gift B a share, so B may hold their share on resulting trust unless rebutted (and subject to any advancement presumption).",
      whyWrong: [
        "Automatic resulting trusts are primarily about failed trusts/undisposed benefits, not purchase money situations.",
        "—",
        "Joint legal title is not always determinative of beneficial ownership.",
        "No basis for voidness."
      ]
    }
  },
  {
    topic: "Advancement — effect on purchase money RT",
    q: "A pays purchase money and puts title in child C’s name. No evidence of intention. What is the starting position?",
    choices: [
      "Presumed resulting trust for A",
      "Presumption of advancement: gift to C (rebuttable)",
      "Automatic resulting trust to A’s estate",
      "C holds as trustee for A only if writing exists"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Traditionally, parent→child can trigger presumption of advancement (gift), rebutting the resulting trust presumption, though it remains rebuttable.",
      whyWrong: [
        "Advancement may displace that presumption in this relationship.",
        "—",
        "No trust failure here.",
        "Writing is not the basis for the presumption."
      ]
    }
  },
  {
    topic: "Rebutting advancement",
    q: "How can the presumption of advancement be rebutted?",
    choices: [
      "It cannot be rebutted",
      "By evidence showing the transferor did not intend a gift (e.g., intended a trust/loan/retained beneficial ownership)",
      "Only by executing a deed of revocation",
      "Only if the child agrees"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Advancement is a rebuttable presumption: evidence of contrary intention can rebut it.",
      whyWrong: [
        "It is not irrebuttable.",
        "—",
        "No universal deed requirement for rebuttal.",
        "Child’s agreement is not required to prove intention."
      ]
    }
  },
  {
    topic: "Automatic RT — partial failure",
    q: "A trust validly disposes of 90% of the fund but leaves 10% undisposed (no gift-over). Likely result for the 10%?",
    choices: [
      "Trustees take it beneficially",
      "Automatic resulting trust to settlor/estate for the 10%",
      "The 10% is split equally among the existing beneficiaries automatically",
      "The court chooses a new beneficiary"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Any undisposed beneficial interest commonly results back to settlor/estate via automatic resulting trust.",
      whyWrong: [
        "No intention to benefit trustees.",
        "—",
        "Courts don’t generally reallocate unless the instrument supports it.",
        "Courts don’t choose beneficiaries for private trusts."
      ]
    }
  },
  {
    topic: "Resulting trust — trustee taking beneficially?",
    q: "If an express trust fails, when do trustees take beneficially?",
    choices: [
      "Always",
      "Generally they do not; absent clear intention to benefit trustees, the property results back to the settlor/estate",
      "Whenever the trust is in writing",
      "Whenever trustees acted honestly"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees are not presumed to benefit. If the trust fails and there is no gift-over, it commonly results back to settlor/estate.",
      whyWrong: [
        "Trustees do not automatically take beneficially.",
        "—",
        "Writing doesn’t imply trustees are beneficiaries.",
        "Honesty doesn’t change beneficial ownership."
      ]
    }
  },
  {
    topic: "Purchase money RT — rebuttal by gift intention",
    q: "A pays purchase price for property in B’s name, but evidence shows A said 'this is a gift to you'. Likely outcome?",
    choices: [
      "Resulting trust still arises because A paid",
      "Presumption is rebutted; B likely takes beneficially (subject to other doctrines like undue influence)",
      "Trust is charitable",
      "Transaction is void"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Payment creates a presumption, not an irrebuttable rule. Clear gift intention rebuts it.",
      whyWrong: [
        "The presumption can be rebutted.",
        "—",
        "No charitable purpose.",
        "Not automatically void."
      ]
    }
  },
  {
    topic: "Evidence timing",
    q: "When is evidence of intention most relevant for resulting trust presumptions?",
    choices: [
      "Only intentions formed after the transfer",
      "Intentions at or around the time of transfer/purchase are most relevant",
      "Only intentions formed years later",
      "Intention is irrelevant once legal title is transferred"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Presumptions are about what was intended when the transfer/purchase was made; contemporaneous evidence is typically most probative.",
      whyWrong: [
        "Later intention may be weaker and can be self-serving.",
        "—",
        "Same problem: remote intentions are less probative.",
        "Legal title does not conclusively determine beneficial ownership."
      ]
    }
  },
  {
    topic: "Resulting trust — 'gap' vs 'precatory'",
    q: "Why might an automatic resulting trust NOT arise where property is transferred with merely precatory words ('hoping you will…')?",
    choices: [
      "Because precatory wording indicates no trust was intended in the first place, so the recipient may take absolutely",
      "Because resulting trusts only arise for land",
      "Because trustees must be appointed first",
      "Because equity always imposes a trust where someone hopes for one"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If construction shows no trust was intended (only a moral request), there is no 'failed trust' to generate an automatic resulting trust; the donee may take beneficially.",
      whyWrong: [
        "Resulting trusts apply across asset types.",
        "—",
        "Trustees need not be appointed for the analysis of intention/ownership.",
        "Equity does not impose trusts from hopes alone."
      ]
    }
  },
  {
    topic: "Resulting trust vs express trust",
    q: "Which statement is most accurate?",
    choices: [
      "Resulting trusts are always created intentionally by the settlor",
      "Resulting trusts typically arise by operation of law (automatic) or presumption (presumed), often contrary to an expressed gift label",
      "Resulting trusts require the three certainties",
      "Resulting trusts must comply with LPA 1925 s53(1)(b)"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Resulting trusts commonly arise by operation of law or presumption about intention, rather than being expressly created like express trusts.",
      whyWrong: [
        "They often arise without intention to create a resulting trust.",
        "—",
        "Three certainties are for express trusts.",
        "Resulting trusts are preserved by s53(2); s53(1)(b) is about express declarations of land trusts."
      ]
    }
  },
  {
    topic: "Illegality and presumptions (exam awareness)",
    q: "In disputes involving illegality (e.g., putting property in another’s name to hide assets), what is the safest general SQE point?",
    choices: [
      "Illegality never affects beneficial ownership",
      "Illegality can affect whether a claimant can rely on presumptions/evidence; outcomes depend on whether the claim requires reliance on the illegal purpose",
      "Illegality always means the transferee keeps everything",
      "Illegality automatically creates a charitable trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Illegality can bar claims where the claimant must rely on the illegality; the effect is fact-sensitive and tied to how the claim is pleaded and proven.",
      whyWrong: [
        "Illegality can matter to enforceability of the claim.",
        "—",
        "Not automatic; it depends on the doctrine and facts.",
        "No connection to charity."
      ]
    }
  },
  {
    topic: "Resulting trust — remedy/outcome",
    q: "If B holds property on resulting trust for A, what is A’s core entitlement?",
    choices: [
      "A can demand that B holds the property for A beneficially (to the extent of A’s interest)",
      "A can demand criminal sanctions against B",
      "A can demand that the trust becomes charitable",
      "A can demand the trustees distribute to A’s friends"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A is the beneficial owner to the relevant extent and can seek transfer/accounting consistent with that equitable ownership.",
      whyWrong: [
        "Resulting trusts are civil/equitable, not criminal sanctions.",
        "—",
        "No such conversion.",
        "No basis for distributing to unrelated persons."
      ]
    }
  },
  {
    topic: "Presumed RT — why it exists",
    q: "What is the main rationale behind presumed resulting trusts?",
    choices: [
      "To punish people who transfer property informally",
      "To reflect an evidential starting point that, absent evidence, people do not usually intend to give away beneficial ownership for free",
      "To ensure trustees always benefit",
      "To maximise tax collection"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The presumption is an evidential starting point about intention in voluntary transfers/contributions.",
      whyWrong: [
        "It is not a punishment doctrine.",
        "—",
        "Trustees are not presumed beneficiaries.",
        "Tax is not the rationale."
      ]
    }
  },
  {
    topic: "Resulting trust — interaction with formalities",
    q: "Why do resulting trusts often avoid statutory writing requirements in LPA 1925 s53(1)?",
    choices: [
      "Because resulting trusts are always made by deed",
      "Because s53(2) preserves resulting trusts as arising by operation of law, not as express dispositions requiring writing",
      "Because writing requirements apply only to chattels",
      "Because trustees can waive writing requirements"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s53(2) provides that resulting trusts are not affected by s53(1) formalities because they arise by operation of law.",
      whyWrong: [
        "Deeds are not the reason.",
        "—",
        "Writing requirements are significant for land and equitable dispositions, not limited to chattels.",
        "Trustees cannot waive statutory requirements."
      ]
    }
  },
  {
    topic: "Exam spotting — which box?",
    q: "A clause: 'to T on trust to build a monument to me' (non-charitable), with no gift-over. Likely classification and outcome?",
    choices: [
      "Valid express trust; T distributes to the public",
      "Likely void non-charitable purpose trust; property results back to settlor/estate via automatic resulting trust",
      "Valid charitable trust",
      "Valid discretionary trust for beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Non-charitable purpose trusts generally fail (unless an anomalous exception applies and within perpetuity limits). If it fails with no gift-over, an automatic resulting trust to settlor/estate is typical.",
      whyWrong: [
        "No identifiable beneficiaries and not an enforceable purpose trust generally.",
        "—",
        "Monument/private memorial is usually not charitable.",
        "No beneficiary class is stated for discretionary trust."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Trust Law | Chapter 7 | Resulting Trusts",
    subtitle: "Automatic and presumed resulting trusts basics.",
    questions: questions
  };
})();
  
