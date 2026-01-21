(() => {
  const questions = [
  {
    topic: "Beneficial entitlement — meaning",
    q: "In trust law, 'beneficial entitlement' most directly refers to:",
    choices: [
      "Who holds legal title to the trust property",
      "Who is entitled in equity to enjoy the benefit (income/capital) of the trust property",
      "Who drafted the trust deed",
      "Who pays inheritance tax"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Beneficial entitlement is about the equitable right to enjoy the trust property (income/capital), distinct from legal title held by trustees.",
      whyWrong: [
        "Legal title is held by trustees; beneficial entitlement is equitable enjoyment.",
        "—",
        "Drafting is irrelevant to entitlement.",
        "Tax may be affected by interests, but it does not define beneficial entitlement."
      ]
    }
  },
  {
    topic: "Beneficial interests — absolute interest",
    q: "Which is most characteristic of an absolute beneficial interest?",
    choices: [
      "Right to income only, with capital held for others",
      "Right to both income and capital (subject to the trust terms), amounting to full beneficial ownership",
      "No right unless trustees decide to appoint",
      "Right only if the beneficiary survives to 30"
    ],
    correct: 1,
    explain: {
      whyRight:
        "An absolute interest entitles the beneficiary to the whole beneficial enjoyment of the trust property (income and capital).",
      whyWrong: [
        "That describes a life interest (income) with a remainder (capital).",
        "—",
        "That describes a discretionary interest.",
        "That describes a contingent interest."
      ]
    }
  },
  {
    topic: "Beneficial interests — life interest (interest in possession)",
    q: "A trust provides 'income to A for life, then capital to B'. What is A’s beneficial interest?",
    choices: [
      "Absolute interest",
      "Life interest (interest in possession) in income",
      "Discretionary interest",
      "Contingent remainder in capital"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A has a life interest: an entitlement to income (or use) for life; B has the remainder in capital.",
      whyWrong: [
        "A does not have capital absolutely.",
        "—",
        "A’s entitlement is fixed, not discretionary.",
        "A’s interest is not in the capital remainder."
      ]
    }
  },
  {
    topic: "Vesting vs possession — distinction",
    q: "Which statement best distinguishes 'vested' from 'in possession'?",
    choices: [
      "Vested means enjoying now; in possession means fixed for later",
      "Vested means a fixed right exists now; in possession means the right to enjoy now",
      "They mean the same thing",
      "Vesting depends only on trustee discretion"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A vested interest is a present fixed entitlement (even if enjoyment is postponed); an interest in possession is a right to present enjoyment.",
      whyWrong: [
        "That reverses the concepts.",
        "—",
        "They are distinct concepts.",
        "Vesting is about the nature of the entitlement, not simply trustee discretion."
      ]
    }
  },
  {
    topic: "Vested but not in possession",
    q: "A trust states: 'Capital to B at age 25'. B is currently 19. Which is the best general analysis?",
    choices: [
      "B is definitely vested and in possession",
      "B may be vested but not in possession if the wording is construed as postponing enjoyment rather than imposing a condition; otherwise it may be contingent",
      "B has a discretionary interest only",
      "The trust is void for uncertainty"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Whether 'at 25' is a condition (contingent) or merely a postponement of possession depends on construction. If it’s postponement, B is vested but not in possession; if it’s a condition, B is contingent.",
      whyWrong: [
        "At 19, B is not in possession of capital.",
        "—",
        "No discretion is indicated.",
        "Age clauses are not inherently uncertain."
      ]
    }
  },
  {
    topic: "Contingent interest — condition precedent",
    q: "Which clause most clearly creates a contingent beneficial interest?",
    choices: [
      "‘To B absolutely’",
      "‘To B for life’",
      "‘To B if B marries’",
      "‘To B, and trustees may pay B such sums as they think fit’"
    ],
    correct: 2,
    explain: {
      whyRight:
        "‘If B marries’ is a condition precedent: B’s entitlement depends on satisfaction of a condition, making it contingent.",
      whyWrong: [
        "Absolute interest is vested.",
        "Life interest is vested (in possession).",
        "—",
        "That is discretionary, not contingent."
      ]
    }
  },
  {
    topic: "Discretionary interest — core feature",
    q: "Which statement best reflects a discretionary beneficiary’s position?",
    choices: [
      "They have a fixed right to a defined share",
      "They have no entitlement unless and until trustees exercise discretion in their favour, but they have a right to due consideration and proper administration",
      "They can terminate the trust at any time",
      "They automatically receive income each year"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Discretionary objects do not have fixed shares; their key right is to due administration (proper consideration of discretion).",
      whyWrong: [
        "Fixed shares are inconsistent with discretion.",
        "—",
        "Saunders v Vautier generally won’t apply where no one has absolute entitlement.",
        "Automatic annual entitlement suggests an interest in possession, not discretion."
      ]
    }
  },
  {
    topic: "Saunders v Vautier — rule",
    q: "What is the core rule in Saunders v Vautier?",
    choices: [
      "Trustees can always refuse to distribute until the age stated",
      "If all beneficiaries are adult, of full capacity, and absolutely entitled, they can terminate the trust and demand transfer of the trust property",
      "Beneficiaries cannot challenge trustees",
      "Only the settlor can collapse a trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Saunders v Vautier allows beneficiaries who are all adult, capable, and absolutely entitled (together) to collapse the trust, despite contrary terms in the instrument.",
      whyWrong: [
        "Trustees cannot insist on postponement if the rule applies.",
        "—",
        "Beneficiaries can enforce trust obligations.",
        "Settlors cannot generally revoke unless powers are reserved."
      ]
    }
  },
  {
    topic: "Saunders v Vautier — why it works",
    q: "Why does Saunders v Vautier allow beneficiaries to demand the trust property?",
    choices: [
      "Because beneficiaries are always legally owners",
      "Because beneficiaries who are absolutely entitled collectively are treated as the equitable owners and can direct trustees",
      "Because trustees lose powers after 12 months",
      "Because it only applies to land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If beneficiaries together own the entire beneficial interest, equity treats them as the real owners and allows them to require trustees to transfer the legal title to them.",
      whyWrong: [
        "Beneficiaries are equitable owners; trustees hold legal title.",
        "—",
        "No such time rule exists.",
        "It applies to all trust property, not only land."
      ]
    }
  },
  {
    topic: "Saunders v Vautier — minors",
    q: "A trust has one beneficiary, B (aged 16), who is absolutely entitled. Can B collapse the trust under Saunders v Vautier?",
    choices: [
      "Yes, because B is absolutely entitled",
      "No, because B is not an adult (and/or lacks capacity requirements for the rule)",
      "Yes, if trustees agree",
      "Yes, if B’s parents consent"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Saunders v Vautier requires beneficiaries to be adult and of full capacity. A minor cannot exercise the right to collapse the trust.",
      whyWrong: [
        "Absolute entitlement alone is not enough without capacity/adulthood.",
        "—",
        "Trustee agreement cannot substitute for the beneficiary meeting the rule’s requirements.",
        "Parental consent does not generally confer the required capacity."
      ]
    }
  },
  {
    topic: "Saunders v Vautier — unborn/unascertained beneficiaries",
    q: "Why will Saunders v Vautier fail where there are potential unborn beneficiaries under the trust?",
    choices: [
      "Because unborn beneficiaries automatically take nothing",
      "Because not all beneficiaries can consent or be identified to show collective absolute entitlement",
      "Because trustees must always retain discretion",
      "Because the trust becomes charitable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The rule requires all beneficiaries to be able to agree and to be absolutely entitled together. Unborn/unascertained beneficiaries prevent unanimity and collective entitlement.",
      whyWrong: [
        "Unborn beneficiaries can have valid future interests.",
        "—",
        "Trustees do not always have discretion; it depends on the trust.",
        "No charitable conversion occurs."
      ]
    }
  },
  {
    topic: "Saunders v Vautier — discretionary trusts",
    q: "Why does Saunders v Vautier generally not apply to a discretionary trust?",
    choices: [
      "Because discretionary trusts are illegal",
      "Because no beneficiary has absolute entitlement to the trust property until trustees exercise discretion",
      "Because trustees must be solicitors",
      "Because discretionary trusts must be registered"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In a discretionary trust, beneficiaries have no fixed entitlement to the fund; therefore they are not collectively absolutely entitled in the Saunders v Vautier sense.",
      whyWrong: [
        "Discretionary trusts are lawful.",
        "—",
        "No such requirement.",
        "Registration is not the reason the rule fails."
      ]
    }
  },
  {
    topic: "Interest in possession — enforcement",
    q: "A life tenant under an interest in possession trust is typically entitled to:",
    choices: [
      "Capital immediately",
      "Income (or use/benefit) as it arises, subject to trust terms",
      "Only what trustees choose to appoint",
      "Nothing unless the settlor confirms annually"
    ],
    correct: 1,
    explain: {
      whyRight:
        "An interest in possession generally gives a present entitlement to income (or enjoyment), while capital is preserved for remaindermen.",
      whyWrong: [
        "Capital is for the remainderman unless otherwise provided.",
        "—",
        "That is discretionary, not an interest in possession.",
        "No such annual confirmation requirement exists."
      ]
    }
  },
  {
    topic: "Remainderman — position",
    q: "In an 'income to A for life, then capital to B' trust, B is best described as:",
    choices: [
      "Life tenant",
      "Remainderman with an interest in capital (often vested but not in possession until A’s death)",
      "Discretionary object",
      "Trustee"
    ],
    correct: 1,
    explain: {
      whyRight:
        "B is the remainderman entitled to capital after the life interest ends; B’s interest is often vested but postponed in possession.",
      whyWrong: [
        "A is the life tenant.",
        "—",
        "No discretion is indicated.",
        "Being a beneficiary is not the same as being trustee."
      ]
    }
  },
  {
    topic: "Beneficiary rights — due administration",
    q: "Which is a core right shared by beneficiaries across most trust types (including discretionary objects, in a limited form)?",
    choices: [
      "A fixed right to capital",
      "A right to due administration (trustees must act within powers, for proper purposes, and consider relevant matters)",
      "A right to remove trustees at will",
      "A right to decide trustee investment strategy personally"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Even where beneficiaries have no fixed share (e.g., discretionary trusts), they can generally require trustees to administer the trust properly and in accordance with fiduciary duties.",
      whyWrong: [
        "Fixed right to capital depends on the trust type.",
        "—",
        "Removal requires grounds/court powers; not 'at will'.",
        "Beneficiaries can challenge breaches, but do not directly run investments unless absolutely entitled and using Saunders v Vautier."
      ]
    }
  },
  {
    topic: "Beneficiary information — accounts",
    q: "A beneficiary asks trustees for trust accounts and information. Which is most accurate as a starting point?",
    choices: [
      "Beneficiaries have no right to information",
      "Trustees generally have duties to account, and beneficiaries may obtain appropriate trust information to enforce the trust",
      "Only the settlor can see trust accounts",
      "Only beneficiaries with a fixed interest can ever get information"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Beneficiaries’ ability to enforce the trust usually entails access to information/accounts, though scope can vary by context and trust type.",
      whyWrong: [
        "Too absolute; beneficiaries commonly can obtain information needed to enforce rights.",
        "—",
        "Settlors do not automatically retain rights unless reserved.",
        "Discretionary objects may have more limited rights, but not 'never'."
      ]
    }
  },
  {
    topic: "Vested remainder — postponement",
    q: "Which phrasing most likely indicates a vested remainder with postponed enjoyment (rather than a contingent remainder)?",
    choices: [
      "‘To B if B reaches 25’",
      "‘To B at 25’ (depending on context, may be construed as postponement of possession)",
      "‘To such of my children as trustees select’",
      "‘To B if B marries with consent’"
    ],
    correct: 1,
    explain: {
      whyRight:
        "‘At 25’ can, depending on construction, be treated as postponing possession rather than making the gift conditional. ‘If B reaches 25’ is more clearly contingent.",
      whyWrong: [
        "‘If reaches’ is classic contingent wording.",
        "—",
        "That is discretionary.",
        "That is contingent on marriage/consent."
      ]
    }
  },
  {
    topic: "Fixed trust — entitlement",
    q: "In a fixed trust, beneficiaries’ beneficial entitlement is best described as:",
    choices: [
      "A mere hope to be considered",
      "A defined equitable right to the specified share (subject to terms), enforceable against trustees",
      "Dependent on trustee discretion each year",
      "Unenforceable because only trustees have rights"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Fixed beneficiaries have defined equitable rights to their shares and can enforce the trust against trustees.",
      whyWrong: [
        "That describes discretionary beneficiaries.",
        "—",
        "Discretion is inconsistent with fixed entitlement.",
        "Beneficiaries can enforce trusts."
      ]
    }
  },
  {
    topic: "Discretionary trust — entitlement to income",
    q: "In a discretionary trust of income, which is most accurate?",
    choices: [
      "Every object has a right to equal income each year",
      "No object has a fixed right to income; trustees decide whether and how much to appoint",
      "The oldest beneficiary automatically takes the income",
      "Income must be accumulated forever"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Discretionary objects have no fixed entitlement; trustees decide appointments within their powers and duties.",
      whyWrong: [
        "Equality is not implied in discretionary trusts.",
        "—",
        "No such rule exists.",
        "Accumulation depends on terms and statutory limits; not automatic forever."
      ]
    }
  },
  {
    topic: "Saunders v Vautier — multiple beneficiaries",
    q: "A trust has two adult beneficiaries, A and B, each absolutely entitled to 50% of the capital. Can they together collapse the trust?",
    choices: [
      "Yes, if they unanimously agree and together are absolutely entitled to the whole beneficial interest",
      "No, because there is more than one beneficiary",
      "No, because trustees can always insist on the trust terms",
      "Yes, but only if the settlor consents"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If all beneficiaries are adult/capable and together absolutely entitled to the entire beneficial interest, they can collectively terminate the trust under Saunders v Vautier.",
      whyWrong: [
        "Multiple beneficiaries can do it if unanimity and full entitlement are met.",
        "—",
        "Trust terms cannot prevent Saunders v Vautier where its requirements are satisfied.",
        "Settlor consent is not required once the trust is properly constituted and beneficiaries are absolutely entitled."
      ]
    }
  },
  {
    topic: "Saunders v Vautier — partial entitlement",
    q: "A is absolutely entitled to 60% of the trust fund; B (adult) is absolutely entitled to 40%. A wants to collapse the trust alone. Outcome?",
    choices: [
      "A can collapse the trust alone because A has the majority",
      "A cannot collapse the trust alone; all beneficiaries who together own 100% must agree",
      "A can collapse the trust only if trustees agree",
      "A can collapse the trust only if the court thinks it is fair"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Saunders v Vautier requires all beneficiaries (collectively owning the whole beneficial interest) to agree; a majority share is not enough unilaterally.",
      whyWrong: [
        "There is no majority rule for collapsing trusts.",
        "—",
        "Trustee agreement doesn’t replace beneficiary unanimity.",
        "Fairness is not the test; entitlement is."
      ]
    }
  },
  {
    topic: "Beneficial entitlement — enforcement against trustees",
    q: "Which statement is most accurate about beneficiary enforcement?",
    choices: [
      "Beneficiaries cannot sue trustees because trustees hold legal title",
      "Beneficiaries can enforce trustees’ fiduciary duties and proper administration in equity",
      "Only the Attorney General can enforce private trusts",
      "Only discretionary beneficiaries can sue"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Beneficiaries have equitable rights and can bring claims to enforce trustees’ duties (e.g., for breach of trust).",
      whyWrong: [
        "Legal title doesn’t prevent equitable enforcement.",
        "—",
        "Attorney General enforcement is mainly relevant to charities.",
        "Fixed beneficiaries can sue too."
      ]
    }
  },
  {
    topic: "Beneficial entitlement — trustee discretion limits",
    q: "Which is most accurate about trustee discretion in discretionary trusts?",
    choices: [
      "Trustees can act capriciously for any reason",
      "Trustees must exercise discretion within the trust purposes, considering relevant factors and ignoring irrelevant ones",
      "Trustees must always distribute equally",
      "Trustees can delegate all decisions to beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustee discretion is fiduciary: trustees must act for proper purposes, consider relevant matters, and avoid irrelevant considerations.",
      whyWrong: [
        "Capricious/improper exercise can be challenged.",
        "—",
        "Equality is not required unless the trust says so.",
        "Delegation is limited and must comply with trust law rules."
      ]
    }
  },
  {
    topic: "Contingent vs discretionary",
    q: "Which best distinguishes a contingent interest from a discretionary interest?",
    choices: [
      "Contingent interest depends on a condition; discretionary interest depends on trustee choice",
      "Contingent interest depends on trustee choice; discretionary interest depends on a condition",
      "They are the same",
      "Both give fixed immediate rights"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Contingent interests arise if/when conditions are satisfied; discretionary interests arise only if trustees choose to appoint to the person.",
      whyWrong: [
        "That reverses the concepts.",
        "—",
        "They are distinct.",
        "Neither necessarily gives fixed immediate rights."
      ]
    }
  },
  {
    topic: "Life tenant vs discretionary object",
    q: "Who has the stronger immediate claim to current trust income?",
    choices: [
      "A life tenant with an interest in possession",
      "A discretionary object",
      "Neither, because only trustees can receive income",
      "The settlor, automatically"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A life tenant is entitled to income as of right (subject to terms). A discretionary object has no fixed entitlement without trustee appointment.",
      whyWrong: [
        "Discretionary objects lack a fixed right to income.",
        "—",
        "Trustees receive income legally but must apply it according to beneficial interests.",
        "Settlors do not automatically retain rights unless reserved."
      ]
    }
  },
  {
    topic: "Exam trap — 'absolutely entitled' meaning",
    q: "For Saunders v Vautier, 'absolutely entitled' most accurately means:",
    choices: [
      "The beneficiary is named in the trust document",
      "The beneficiary(ies) collectively have the entire beneficial interest in the trust property (income and capital), with no other interests outstanding",
      "The beneficiary is the settlor’s favourite",
      "The trustees agree to distribute"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Absolute entitlement means the full beneficial interest is vested in the beneficiary(ies) so no one else has any beneficial claim that would prevent termination.",
      whyWrong: [
        "Being named is not enough if others have interests.",
        "—",
        "Preference is irrelevant.",
        "Trustee agreement is not the definition."
      ]
    }
  },
  {
    topic: "Beneficial entitlement — default on failure",
    q: "If a trust fails and there is no alternative disposition, what is the most typical equitable outcome?",
    choices: [
      "Property goes to the trustees beneficially",
      "A resulting trust back to the settlor/estate",
      "Automatic charitable trust",
      "Court appoints new beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If an express trust fails without an alternative disposition, equity commonly recognises a resulting trust back to the settlor or their estate.",
      whyWrong: [
        "Trustees do not usually take beneficially absent intention.",
        "—",
        "No automatic charity.",
        "Courts generally do not choose beneficiaries."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Trust Law | Chapter 5 | Beneficial Interests",
    subtitle: "Absolute, life, discretionary, and contingent interests.",
    questions: questions
  };
})();
  
