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
        "Saunders v Vautier is about terminating a valid trust, not creating a resulting trust."
      ]
    }
  },
  {
    topic: "Automatic resulting trust — failed express trust",
    q: "Which scenario most clearly produces an automatic resulting trust?",
    choices: [
      "An express trust fails for uncertainty and there is no alternative disposition",
      "A trustee pays the wrong beneficiary by mistake",
      "A beneficiary gifts their interest to someone else in writing",
      "Trustees invest in shares"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If an express trust fails (e.g., uncertainty) and the beneficial interest is undisposed of, equity commonly imposes an automatic resulting trust back to the settlor/estate.",
      whyWrong: [
        "—",
        "That is a breach/administration issue, not an automatic resulting trust basis.",
        "That is an assignment/disposition issue, not a failure leading to a resulting trust.",
        "Investment is part of administration, not an automatic resulting trust trigger."
      ]
    }
  },
  {
    topic: "Automatic resulting trust — surplus/undisposed interest",
    q: "An express trust disposes of income but is silent on capital after the income interest ends. What is the likely outcome for the undisposed capital?",
    choices: [
      "The trustees take beneficially",
      "Automatic resulting trust to the settlor/estate (unless another construction/gift-over applies)",
      "Charitable trust",
      "Capital goes to the income beneficiary automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the trust instrument fails to dispose of the whole beneficial interest (e.g., a gap as to capital), equity commonly imposes an automatic resulting trust for the settlor/estate unless the instrument indicates otherwise.",
      whyWrong: [
        "Trustees do not take beneficially absent intention.",
        "—",
        "No charitable purpose is implied.",
        "Income entitlement does not automatically confer capital."
      ]
    }
  },
  {
    topic: "Presumed resulting trust — voluntary transfer",
    q: "A transfers £50,000 to B (a friend) without consideration and without clear evidence of gift intention. What is the likely starting presumption?",
    choices: [
      "Presumption of resulting trust in A’s favour",
      "Presumption of advancement in B’s favour",
      "Automatic charitable trust",
      "No presumption applies; B always takes beneficially"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A voluntary transfer without consideration can raise a presumed resulting trust: equity presumes A did not intend B to take beneficially unless rebutted by evidence of gift intention.",
      whyWrong: [
        "—",
        "Presumption of advancement is limited to certain relationships (not generally friends).",
        "Not relevant.",
        "Equity does not always presume beneficial ownership passes in voluntary transfers."
      ]
    }
  },
  {
    topic: "Presumed resulting trust — purchase money resulting trust",
    q: "A pays the full purchase price for a house, but title is put in B’s name (no evidence of gift). What is the likely equitable position?",
    choices: [
      "B holds on resulting trust for A (purchase money resulting trust)",
      "A holds on trust for B because A paid",
      "The transaction is void",
      "B takes absolutely because legal title is in B’s name"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Where A provides purchase money but title is in B’s name, equity commonly presumes B holds on resulting trust for A in proportion to A’s contribution, unless rebutted.",
      whyWrong: [
        "Payment by A is the basis for A’s beneficial claim, not B’s.",
        "—",
        "The transaction is not automatically void.",
        "Legal title is not conclusive of beneficial ownership."
      ]
    }
  },
  {
    topic: "Purchase money resulting trust — proportion",
    q: "A pays 30% of the purchase price, B pays 70%, but title is in B’s name alone. No contrary intention is shown. Likely result?",
    choices: [
      "A has no beneficial interest",
      "B holds 30% on resulting trust for A and 70% beneficially for B (subject to evidence/rebuttals)",
      "A and B split 50/50 automatically",
      "A holds 70% on trust for B"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The presumption generally tracks contributions: A is presumed beneficially entitled to 30% via resulting trust unless rebutted; B retains 70%.",
      whyWrong: [
        "A’s contribution typically gives rise to a proportional beneficial interest.",
        "—",
        "Equality is not presumed in resulting trust analysis (unless evidence supports it).",
        "This reverses the contribution logic."
      ]
    }
  },
  {
    topic: "Rebutting presumed resulting trust — evidence",
    q: "How can a presumed resulting trust be rebutted?",
    choices: [
      "Only by a deed witnessed by two witnesses",
      "By evidence showing the transferor intended a gift (or loan) rather than retention of beneficial interest",
      "By trustee refusal",
      "By proving the transferor is wealthy"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The presumption can be rebutted by evidence of intention: if A intended a gift (or loan), the resulting trust presumption falls away.",
      whyWrong: [
        "No universal deed requirement for rebuttal evidence.",
        "—",
        "Trustee refusal does not determine intention.",
        "Wealth is not determinative."
      ]
    }
  },
  {
    topic: "Presumption of advancement — idea",
    q: "What does the presumption of advancement do?",
    choices: [
      "It creates a resulting trust automatically",
      "It presumes a transfer was intended as a gift in certain relationships, rebutting the presumption of resulting trust",
      "It converts all purpose trusts into charities",
      "It allows trustees to ignore beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In certain relationships, the law presumes a gift/advancement was intended, countering a presumed resulting trust (though it remains rebuttable).",
      whyWrong: [
        "It works in the opposite direction to resulting trust presumption.",
        "—",
        "Unrelated.",
        "Unrelated."
      ]
    }
  },
  {
    topic: "Presumption of advancement — classic categories",
    q: "Which relationship is most traditionally associated with the presumption of advancement?",
    choices: [
      "Employer to employee",
      "Father to child",
      "Friend to friend",
      "Landlord to tenant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Traditionally, father-to-child (and husband-to-wife) transfers could raise a presumption of advancement, rebutting resulting trust presumptions.",
      whyWrong: [
        "Not a classic category.",
        "—",
        "Friends generally do not attract advancement presumption.",
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
        "Automatic resulting trusts arise by operation of law on trust failure/undisposed benefit; presumed resulting trusts arise from presumptions about intention in certain transfers/contributions.",
      whyWrong: [
        "This reverses the categories.",
        "—",
        "They are distinct.",
        "They arise inter vivos as well, not only by will."
      ]
    }
  },
  {
    topic: "Vandervell — why resulting trust matters",
    q: "Why is Vandervell-type reasoning relevant to resulting trusts?",
    choices: [
      "Because it proves all transfers need writing",
      "Because where an equitable interest is not effectively disposed of, equity may treat it as remaining/returning to the transferor via resulting trust",
      "Because it abolishes the beneficiary principle",
      "Because it makes all trusts charitable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the beneficial interest is not effectively disposed of, equity may recognise it as remaining with or returning to the transferor under a resulting trust (and s53(2) allows resulting trusts without writing).",
      whyWrong: [
        "Vandervell interacts with s53(1)(c) and resulting trusts; it doesn’t make all transfers require writing.",
        "—",
        "Unrelated.",
        "Unrelated."
      ]
    }
  },
  {
    topic: "s53(2) — resulting trusts",
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
        "s53(2) preserves resulting (and constructive/implied) trusts, meaning s53(1) does not block them for lack of writing.",
      whyWrong: [
        "It does the opposite.",
        "—",
        "Resulting trusts remain part of the law.",
        "No such conversion rule."
      ]
    }
  },
  {
    topic: "Resulting trust — trustees taking beneficially?",
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
        "Trustees are not presumed to benefit. If the trust fails and there is no gift-over, equity commonly imposes a resulting trust back to the settlor/estate.",
      whyWrong: [
        "Trustees do not automatically take beneficially.",
        "—",
        "Writing doesn’t imply trustees benefit.",
        "Honesty does not change beneficial ownership."
      ]
    }
  },
  {
    topic: "Purchase money resulting trust — rebuttal (gift intention)",
    q: "A pays the purchase price for a property put in B’s name, but evidence shows A said 'this is a gift to you'. Likely outcome?",
    choices: [
      "Resulting trust still arises because A paid",
      "Presumption is rebutted; B likely takes beneficially (subject to other doctrines like undue influence)",
      "Trust is charitable",
      "Transaction is void"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The purchase money resulting trust presumption can be rebutted by evidence of gift intention; then B takes beneficially, though other doctrines may still apply on the facts.",
      whyWrong: [
        "Payment creates a presumption, not an irrebuttable rule.",
        "—",
        "No charitable purpose.",
        "Not automatically void."
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
  
