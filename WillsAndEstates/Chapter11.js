(() => {
  const questions = [
  {
    topic: "Will trusts — basic concept",
    q: "A will trust is best described as:",
    choices: [
      "A trust created during the testator’s lifetime only",
      "A trust that takes effect on death because the will directs assets to be held on trust",
      "A gift that must be witnessed by three witnesses",
      "A method of avoiding all creditor claims"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A will trust arises on death where the will directs that assets are held on trust rather than outright.",
      whyWrong: [
        "Lifetime trusts can exist, but a will trust is created by will on death.",
        "—",
        "Wills normally require two witnesses, not three, and a trust is not defined by witness count.",
        "Trusts do not automatically defeat creditors; liabilities still matter."
      ]
    }
  },
  {
    topic: "Trustees vs beneficiaries — ownership",
    q: "In a trust, who holds legal title to the trust assets?",
    choices: [
      "Beneficiaries",
      "Trustees",
      "The Probate Registry",
      "The settlor/testator after death"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees hold legal title and manage the assets for beneficiaries who hold equitable interests.",
      whyWrong: [
        "Beneficiaries hold equitable (beneficial) interests, not legal title (in the usual structure).",
        "—",
        "The Probate Registry does not hold title.",
        "A testator cannot hold property after death."
      ]
    }
  },
  {
    topic: "Bare trust — beneficiary entitlement",
    q: "Which statement best reflects a bare trust?",
    choices: [
      "Trustees decide whether beneficiaries receive anything",
      "A beneficiary has an immediate, absolute entitlement and trustees hold property as nominees",
      "The life tenant receives capital immediately",
      "No beneficiary can ever demand transfer"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A bare trust is where the beneficiary is absolutely entitled; trustees hold the legal title and must transfer on demand (adult + capacity).",
      whyWrong: [
        "That describes a discretionary trust.",
        "—",
        "Life interest trusts separate income and capital; the life tenant does not automatically take capital.",
        "In a bare trust, an adult beneficiary can generally call for the property."
      ]
    }
  },
  {
    topic: "Life interest trust — key feature",
    q: "In a life interest (interest in possession) trust, the life tenant’s core right is:",
    choices: [
      "To choose who receives capital",
      "To receive the income (or enjoy the property) during their lifetime",
      "To terminate the trust at any time regardless of terms",
      "To inherit the residue automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A life tenant typically has a right to trust income (or use/enjoyment) for life, with capital preserved for remaindermen.",
      whyWrong: [
        "Choosing who takes is typical of discretionary decision-making by trustees, not the life tenant.",
        "—",
        "A life tenant cannot necessarily terminate the trust unless all beneficiaries are absolutely entitled (and conditions met).",
        "Residue depends on the will, not automatically."
      ]
    }
  },
  {
    topic: "Remaindermen — definition",
    q: "In a life interest trust, the remaindermen are:",
    choices: [
      "People entitled to the capital after the life interest ends",
      "People entitled to income during the life tenant’s lifetime",
      "Trustees’ personal creditors",
      "Witnesses to the will"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Remaindermen take the trust capital when the life interest ends (usually on the life tenant’s death).",
      whyWrong: [
        "—",
        "Income entitlement is typically the life tenant’s right.",
        "Trustees’ creditors have no automatic entitlement to trust property.",
        "Witnesses are not beneficiaries by default."
      ]
    }
  },
  {
    topic: "Discretionary trust — core feature",
    q: "Which best describes a discretionary trust?",
    choices: [
      "Beneficiaries have fixed shares from day one",
      "Trustees have discretion over whether, when, and how much beneficiaries receive within the class",
      "Trustees must pay all income to the eldest child",
      "The trust has no beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Discretionary trusts give trustees decision-making power over distributions within the class of potential beneficiaries.",
      whyWrong: [
        "Fixed shares is more like a fixed/bare arrangement.",
        "—",
        "There is no rule favouring eldest child.",
        "A valid trust must have beneficiaries (or fall within a recognised exception)."
      ]
    }
  },
  {
    topic: "Trustee decision-making — unanimity",
    q: "As a general rule, trustees should make decisions:",
    choices: [
      "By majority unless the deed says otherwise",
      "Unanimously unless the trust instrument or statute provides otherwise",
      "Only after asking beneficiaries to vote",
      "Only if the Probate Registry approves"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The general default is unanimity among trustees, subject to any valid majority provisions in the trust instrument/statute.",
      whyWrong: [
        "Majority is not the general default unless authorised.",
        "—",
        "Beneficiaries do not normally vote on trustee decisions.",
        "The Registry does not approve routine trustee decisions."
      ]
    }
  },
  {
    topic: "Fiduciary duty — proper purpose",
    q: "A trustee must exercise powers:",
    choices: [
      "For their own benefit if it helps administration",
      "For a proper purpose and in good faith in the interests of the beneficiaries",
      "Only to maximise risk and return",
      "Only according to beneficiaries’ personal preferences"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees are fiduciaries: they must act in good faith for proper purposes for beneficiaries’ benefit (per the trust).",
      whyWrong: [
        "Trustees must not benefit personally without authorisation.",
        "—",
        "Trustees must balance objectives and follow duties; not 'maximise risk'.",
        "Beneficiaries’ preferences may be relevant but do not replace trustee judgment and duties."
      ]
    }
  },
  {
    topic: "Fiduciary duty — conflict of interest",
    q: "Which statement is most accurate?",
    choices: [
      "Trustees can freely profit from their position if no one notices",
      "Trustees must avoid conflicts of interest and not make unauthorised profits",
      "Conflicts are fine if trustees are family",
      "Trustees may ignore the trust deed if they think it is unfair"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Core fiduciary duties include avoiding conflicts and not profiting unless authorised by the trust instrument/statute/court/beneficiaries.",
      whyWrong: [
        "Hidden profit is a breach, not a defence.",
        "—",
        "Family status does not remove fiduciary duties.",
        "Trustees must follow the trust terms (subject to lawful powers/variations)."
      ]
    }
  },
  {
    topic: "Impartiality — income vs capital",
    q: "In a life interest trust, the duty of impartiality mainly concerns:",
    choices: [
      "Preferring the life tenant in every decision",
      "Balancing fairly between the income beneficiary (life tenant) and capital beneficiaries (remaindermen)",
      "Paying all capital to the life tenant immediately",
      "Ignoring the remaindermen until the trust ends"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees must consider both income and capital beneficiaries and act impartially between them.",
      whyWrong: [
        "Automatic preference is inconsistent with impartiality.",
        "—",
        "A life tenant does not automatically receive capital.",
        "Remaindermen’s interests must be protected throughout."
      ]
    }
  },
  {
    topic: "Trustee Act 2000 — duty of care",
    q: "Under the Trustee Act 2000 framework, trustees exercising powers generally owe:",
    choices: [
      "No duty of care in investments",
      "A duty of care to act reasonably, taking into account any special knowledge/experience",
      "A strict liability duty to prevent all loss",
      "A duty to follow beneficiaries’ instructions in every case"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The modern statutory framework imposes a duty of care when exercising certain powers: reasonable care and skill, considering special expertise.",
      whyWrong: [
        "There is a duty of care in relevant contexts.",
        "—",
        "Trustees are not insurers against loss if they act properly.",
        "Beneficiaries cannot generally direct trustees unless they are absolutely entitled (and even then, it depends)."
      ]
    }
  },
  {
    topic: "Investment power — broad scope",
    q: "Which is most accurate about trustees’ investment powers (modern position)?",
    choices: [
      "Trustees can only invest in government bonds",
      "Trustees generally have a broad power of investment, subject to duties and any trust restrictions",
      "Trustees must invest only in the family business",
      "Trustees can invest but must never diversify"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees usually have wide investment powers but must comply with duties (care, suitability, diversification, review) and trust terms.",
      whyWrong: [
        "Investment is not limited to government bonds.",
        "—",
        "Concentrating in a family business may breach diversification/suitability unless justified.",
        "Diversification is generally part of the standard investment criteria."
      ]
    }
  },
  {
    topic: "Standard investment criteria — components",
    q: "The standard investment criteria are best summarised as:",
    choices: [
      "Maximise return + ignore risk",
      "Suitability of investments + need for diversification (so far as appropriate)",
      "Follow the settlor’s personal politics",
      "Invest only in land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees must consider suitability and diversification (so far as appropriate) under the standard investment criteria.",
      whyWrong: [
        "Ignoring risk breaches suitability.",
        "—",
        "Politics is not the test (unless trust terms expressly require ethical screens).",
        "There is no land-only rule."
      ]
    }
  },
  {
    topic: "Investment review — ongoing duty",
    q: "Trustees should generally:",
    choices: [
      "Buy investments once and never review them",
      "Review investments from time to time and consider whether changes are needed",
      "Avoid professional advice in all cases",
      "Invest only after getting court approval each time"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees should keep investments under review and adjust where appropriate, consistent with duties and trust terms.",
      whyWrong: [
        "No-review is inconsistent with prudent administration.",
        "—",
        "Trustees often should take advice unless clearly unnecessary.",
        "Court approval is not needed for ordinary management."
      ]
    }
  },
  {
    topic: "Taking advice — general approach",
    q: "When investing, trustees should generally:",
    choices: [
      "Always take proper advice unless it is reasonable not to",
      "Never take advice because it costs money",
      "Only ask beneficiaries what they want",
      "Only invest in what the executor suggests"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A prudent approach is to take proper advice unless it is reasonable to conclude it is unnecessary in the circumstances.",
      whyWrong: [
        "—",
        "Cost alone is not a reason to ignore duties.",
        "Beneficiary views may be relevant but do not replace advice and trustee judgment.",
        "Executors administer estates; trustees manage trusts (roles can overlap but duties remain)."
      ]
    }
  },
  {
    topic: "Delegation — basic principle",
    q: "Which is most accurate about delegation by trustees?",
    choices: [
      "Trustees can never delegate any function",
      "Trustees can delegate certain functions, but must choose agents carefully and keep arrangements under review",
      "Delegation removes all trustee responsibility",
      "Delegation is only allowed if every beneficiary consents"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees may delegate within statutory/terms limits, but remain responsible for selection, instructions, and monitoring of agents.",
      whyWrong: [
        "Delegation is permitted in many contexts.",
        "—",
        "Delegation does not eliminate trustee accountability.",
        "Beneficiary consent is not always required for permitted delegation."
      ]
    }
  },
  {
    topic: "Discretionary trusts — beneficiary rights",
    q: "Which best reflects a discretionary beneficiary’s position?",
    choices: [
      "They can demand immediate payment of their 'share'",
      "They cannot demand distributions as of right, but can enforce proper exercise of trustee discretion",
      "They automatically receive all income",
      "They own legal title"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Discretionary beneficiaries typically have no fixed entitlement to payments, but can challenge improper decision-making (bad faith, wrong considerations, etc.).",
      whyWrong: [
        "Demand rights exist in bare/fixed entitlements, not discretionary structures.",
        "—",
        "Income is not automatic; trustees decide.",
        "Legal title is held by trustees."
      ]
    }
  },
  {
    topic: "Bare trusts — calling for transfer",
    q: "In a bare trust, an adult beneficiary with capacity generally can:",
    choices: [
      "Never demand transfer of the trust property",
      "Require trustees to transfer the property to them",
      "Only receive income but not capital",
      "Only receive distributions at trustee discretion"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A bare trust beneficiary is absolutely entitled and can generally call for transfer (assuming adult and capacity).",
      whyWrong: [
        "That contradicts the nature of a bare trust.",
        "—",
        "Bare trusts are not limited to income.",
        "Discretion is inconsistent with bare entitlement."
      ]
    }
  },
  {
    topic: "Information/accountability — core idea",
    q: "Which is most accurate about trustees and information?",
    choices: [
      "Trustees never need to keep accounts",
      "Trustees should keep proper accounts/records and be able to account to beneficiaries/court",
      "Trustees can refuse all information requests in every case",
      "Trustees only keep accounts if the trust is worth over £1 million"
    ],
    correct: 1,
    explain: {
      whyRight:
        "As fiduciaries, trustees must keep records and be able to account for administration, including receipts, payments, and investment decisions.",
      whyWrong: [
        "Accounts are part of fiduciary responsibility.",
        "—",
        "Trustees cannot blanket-refuse all information in every context.",
        "No such value threshold rule."
      ]
    }
  },
  {
    topic: "Trust assets vs estate assets — separation",
    q: "After death, why is it important to distinguish estate assets from trust assets?",
    choices: [
      "Because trust assets are distributed under intestacy",
      "Because PRs distribute estate assets; trustees administer trust assets under the trust terms",
      "Because the Probate Registry distributes both",
      "Because trust assets are always tax-free"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Different regimes apply: PRs administer estates; trustees administer trusts under trust terms—mixing them risks wrongful distribution.",
      whyWrong: [
        "Intestacy does not govern trust distributions (unless trust terms say so).",
        "—",
        "The Registry does not distribute assets.",
        "Trust assets can still have tax consequences."
      ]
    }
  },
  {
    topic: "Trustee appointment — will terms",
    q: "A will trust will usually identify initial trustees by:",
    choices: [
      "An oral statement made after death",
      "The will itself (often appointing executors as trustees as well)",
      "A random selection by beneficiaries",
      "A Probate Registry lottery"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The will commonly appoints trustees (often the executors), and may include replacement mechanisms.",
      whyWrong: [
        "Oral statements after death do not usually appoint trustees.",
        "—",
        "Beneficiaries do not typically appoint trustees unless the trust instrument/statute provides.",
        "No such process exists."
      ]
    }
  },
  {
    topic: "Trustees — number and decision-making",
    q: "A common reason to appoint more than one trustee is:",
    choices: [
      "To ensure conflicts are encouraged",
      "To provide checks and continuity in decision-making and administration",
      "To guarantee higher investment returns",
      "To avoid keeping records"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Multiple trustees can provide safeguards, shared responsibility, and continuity (e.g., if one trustee dies).",
      whyWrong: [
        "Trust law aims to avoid conflicts, not encourage them.",
        "—",
        "Returns are not guaranteed by headcount.",
        "Record-keeping remains required."
      ]
    }
  },
  {
    topic: "Breach of trust — basics",
    q: "A trustee is most likely to be in breach of trust if they:",
    choices: [
      "Act within their powers, in good faith, after proper consideration and advice where appropriate",
      "Use trust money for personal benefit without authorisation",
      "Keep clear accounts",
      "Diversify appropriately"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Unauthorised personal benefit is a classic breach (conflict/no-profit rules).",
      whyWrong: [
        "That is generally what proper administration looks like.",
        "—",
        "Accounting is expected.",
        "Diversification is often part of the standard criteria."
      ]
    }
  },
  {
    topic: "Exemption clauses — effect",
    q: "A trustee exemption clause in a trust instrument generally:",
    choices: [
      "Always protects a trustee from every type of wrongdoing",
      "May limit liability for certain breaches, but typically will not protect dishonesty and must be interpreted carefully",
      "Automatically makes the trust void",
      "Allows trustees to ignore all duties"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Exemption clauses can reduce liability scope, but they are not a licence for dishonesty and are construed strictly.",
      whyWrong: [
        "They do not protect everything in all circumstances.",
        "—",
        "They do not automatically void the trust.",
        "Trustees still owe core fiduciary duties."
      ]
    }
  },
  {
    topic: "Discretion — relevant vs irrelevant considerations",
    q: "When trustees exercise a discretionary power, which is most accurate?",
    choices: [
      "They can decide randomly",
      "They must consider relevant factors and ignore irrelevant factors, acting in good faith",
      "They must always follow the loudest beneficiary",
      "They must always split equally"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Discretion must be exercised properly: good faith, proper purpose, relevant considerations, no improper fettering.",
      whyWrong: [
        "Randomness risks breach of duty.",
        "—",
        "Noise is not a legal criterion.",
        "Equality may be appropriate sometimes but is not mandatory."
      ]
    }
  },
  {
    topic: "Fettering discretion",
    q: "Trustees 'fetter' their discretion if they:",
    choices: [
      "Keep an open mind and decide case-by-case",
      "Bind themselves to a fixed policy and refuse to consider individual circumstances",
      "Take advice where appropriate",
      "Review investments periodically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Improper fettering occurs when trustees refuse to exercise discretion by rigidly sticking to a policy without considering the merits of each case.",
      whyWrong: [
        "Case-by-case consideration is proper.",
        "—",
        "Taking advice can be proper.",
        "Reviewing investments is prudent."
      ]
    }
  },
  {
    topic: "Trustee remuneration — default",
    q: "Which is most accurate about trustee remuneration?",
    choices: [
      "Trustees are always entitled to take whatever fee they want",
      "Trustee payment generally requires authority (e.g., trust instrument, statute, or agreement); otherwise trustees may be unpaid",
      "Trustees must be paid by beneficiaries personally",
      "Trustees can pay themselves first, ahead of all debts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees typically need proper authority to be remunerated; otherwise they may serve without payment (though expenses are different).",
      whyWrong: [
        "Unilateral fees without authority can be a breach.",
        "—",
        "Payment is from the trust fund if authorised, not automatically beneficiaries personally.",
        "Priority rules and fiduciary duties constrain payments."
      ]
    }
  },
  {
    topic: "Trustee expenses — distinction",
    q: "Even if unpaid, trustees are generally entitled to:",
    choices: [
      "Unlimited profit",
      "Reimbursement of proper expenses incurred in administration",
      "A fixed percentage of the trust fund",
      "A beneficiary’s share"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees can usually recover proper out-of-pocket expenses incurred while administering the trust.",
      whyWrong: [
        "Profit is not allowed without authority.",
        "—",
        "A fixed percentage requires authority.",
        "They cannot take beneficiaries’ entitlements."
      ]
    }
  },
  {
    topic: "Minors — common reason for will trusts",
    q: "A common reason a will creates a trust is to:",
    choices: [
      "Avoid appointing executors",
      "Hold assets for minors until they reach a specified age",
      "Ensure intestacy applies",
      "Prevent any record-keeping"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Will trusts often hold assets for young beneficiaries until a stated age/milestone, with trustees managing meanwhile.",
      whyWrong: [
        "Executors are still needed for estate administration.",
        "—",
        "A will trust is the opposite of intestacy.",
        "Trusts require record-keeping."
      ]
    }
  },
  {
    topic: "Life interest — practical distribution",
    q: "In a typical life interest trust of investments, trustees usually:",
    choices: [
      "Pay income to the life tenant and preserve capital for remaindermen",
      "Pay all capital to the life tenant immediately",
      "Pay all income to remaindermen immediately",
      "Ignore investment performance entirely"
    ],
    correct: 0,
    explain: {
      whyRight:
        "The structure is usually income to the life tenant, capital preserved for remaindermen, with trustees balancing duties and investment strategy accordingly.",
      whyWrong: [
        "—",
        "Capital is for remaindermen later, not immediately to life tenant.",
        "Income is generally for life tenant in this structure.",
        "Trustees must act prudently and review investments."
      ]
    }
  },
  {
    topic: "Trustees — removing/appointing (exam feel)",
    q: "If trustees are clearly unfit or administration has broken down, a key route is:",
    choices: [
      "Beneficiaries must just accept it forever",
      "Statutory/term-based replacement mechanisms and, if necessary, court involvement to replace trustees",
      "The will becomes invalid automatically",
      "The trust property reverts to the Crown"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trust law provides routes to replace trustees via trust terms/statute, and courts can intervene where appropriate to protect the trust.",
      whyWrong: [
        "Beneficiaries can seek remedies if trustees breach duties or administration fails.",
        "—",
        "Trustee problems do not automatically invalidate a will.",
        "The Crown is not the default destination."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Wills and Estates | Chapter 11 | Trusts in Wills",
    subtitle: "Trust structures, trustees, and beneficiary rights basics.",
    questions: questions
  };
})();
  
