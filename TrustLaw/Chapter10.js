(() => {
  const questions = [
  {
    topic: "Trustees — legal vs beneficial ownership",
    q: "Which statement best describes a trustee’s position?",
    choices: [
      "Trustees own the trust property beneficially",
      "Trustees hold legal title and must deal with the property for the benefit of the beneficiaries",
      "Trustees are the same as beneficiaries",
      "Trustees have no enforceable duties"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A trustee holds the legal title and must exercise powers and perform duties for beneficiaries’ benefit.",
      whyWrong: [
        "Trustees usually do not take beneficially unless the trust provides.",
        "—",
        "Trustees and beneficiaries are distinct roles (though a person can be both).",
        "Trustees have enforceable fiduciary duties."
      ]
    }
  },
  {
    topic: "Trustees — sources of powers",
    q: "Trustees’ powers come primarily from:",
    choices: [
      "Only the beneficiaries’ wishes",
      "The trust instrument and relevant statutes (and, where necessary, court powers)",
      "Only common law contracts",
      "Only the Charity Commission"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustee powers derive from the trust deed and statutes (e.g., Trustee Act 2000; TOLATA 1996), plus court powers where needed.",
      whyWrong: [
        "Beneficiaries’ wishes may be relevant but do not create powers.",
        "—",
        "Trust powers are not mainly contractual.",
        "Charity Commission is relevant only to charities."
      ]
    }
  },
  {
    topic: "Trustees — fiduciary duty: proper purposes",
    q: "A core fiduciary obligation of trustees is to:",
    choices: [
      "Act for their own financial benefit if it helps them stay motivated",
      "Act in good faith and for proper purposes within the trust",
      "Guarantee investment profits",
      "Always follow the strongest beneficiary’s preference"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees must act in good faith and use powers only for proper purposes (consistent with the trust).",
      whyWrong: [
        "This breaches fiduciary loyalty/no profit principles.",
        "—",
        "Trustees are not guarantors of returns.",
        "Trustees must consider relevant factors and act impartially, not follow the loudest voice."
      ]
    }
  },
  {
    topic: "Trustees — no conflict rule",
    q: "The 'no conflict' rule means trustees must:",
    choices: [
      "Avoid arguments with beneficiaries",
      "Not place themselves in a position where personal interests conflict with trustee duties",
      "Never deal with third parties",
      "Always obtain beneficiary consent for every decision"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees must avoid situations where duty and personal interest conflict, unless fully authorised.",
      whyWrong: [
        "Personal disagreements are not the legal test.",
        "—",
        "Trustees often must deal with third parties.",
        "Consent is not required for every decision unless the trust demands it."
      ]
    }
  },
  {
    topic: "Trustees — no unauthorised profit",
    q: "Which statement best reflects the 'no unauthorised profit' rule?",
    choices: [
      "Trustees can keep secret commissions if no one finds out",
      "Trustees must account for unauthorised profits made because of their position, even if the trust suffered no loss",
      "Trustees may profit freely as long as they invest well",
      "Trustees may profit if beneficiaries are minors"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Fiduciary law is strict: unauthorised gains made by reason of trusteeship must be surrendered (account of profits).",
      whyWrong: [
        "Secret commissions typically breach fiduciary duty.",
        "—",
        "Good performance doesn’t authorise profits.",
        "Beneficiary age does not authorise trustee profit."
      ]
    }
  },
  {
    topic: "Trustees — duty of impartiality",
    q: "A trustee’s duty of impartiality requires the trustee to:",
    choices: [
      "Treat all beneficiaries identically in every situation",
      "Balance fairly the interests of different beneficiaries (e.g., life tenant and remainderman) in accordance with the trust",
      "Always favour income beneficiaries over capital beneficiaries",
      "Always favour the eldest beneficiary"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Impartiality means even-handedness and fairness between classes of beneficiaries, consistent with trust terms.",
      whyWrong: [
        "Impartiality is not mechanical equality; context and trust terms matter.",
        "—",
        "Automatic favouring breaches impartiality.",
        "Age preference is not a rule."
      ]
    }
  },
  {
    topic: "Co-trustees — unanimity rule",
    q: "As a general rule, co-trustees must:",
    choices: [
      "Act unanimously unless the trust instrument authorises otherwise",
      "Act by simple majority in all trusts",
      "Let the settlor decide day-to-day decisions forever",
      "Act only after a court order"
    ],
    correct: 0,
    explain: {
      whyRight:
        "The default position is that trustees act jointly/unanimously, subject to any express power to act by majority or delegate.",
      whyWrong: [
        "Majority action is not the default (though it can be authorised).",
        "—",
        "Settlors do not retain ongoing control unless powers are reserved.",
        "Court orders are not required for ordinary administration."
      ]
    }
  },
  {
    topic: "Trustees — duty of care (TA 2000 s1)",
    q: "Trustee Act 2000 s1 is most associated with:",
    choices: [
      "A strict liability rule for any loss",
      "A statutory duty of care: trustees must exercise such care and skill as is reasonable in the circumstances",
      "A requirement that trustees must be paid",
      "A prohibition on delegation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "TA 2000 s1 imposes a duty of care calibrated to circumstances, including any special knowledge/experience and professional status.",
      whyWrong: [
        "It is not strict liability.",
        "—",
        "Payment is not required.",
        "TA 2000 permits delegation under conditions."
      ]
    }
  },
  {
    topic: "Duty of care — professional trustee",
    q: "How does the TA 2000 duty of care apply to a professional trustee?",
    choices: [
      "Lower standard because they manage many trusts",
      "Higher standard reflecting their special knowledge/experience",
      "No duty of care applies to professionals",
      "Only applies to unpaid trustees"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The statutory duty of care is higher where a trustee has (or holds out) special knowledge/experience, especially professionals.",
      whyWrong: [
        "The standard does not drop for being busy.",
        "—",
        "Professionals are very much within the duty.",
        "It applies to trustees generally, not only unpaid trustees."
      ]
    }
  },
  {
    topic: "Investment power (TA 2000 s3)",
    q: "TA 2000 s3 gives trustees:",
    choices: [
      "No power to invest unless the trust deed says so",
      "A general power of investment as if they were absolutely entitled, subject to the trust terms",
      "A power to invest only in UK government bonds",
      "A power to speculate freely without duties"
    ],
    correct: 1,
    explain: {
      whyRight:
        "TA 2000 s3 provides a broad general investment power, subject to the trust instrument and fiduciary duties.",
      whyWrong: [
        "Statute supplies a general power (unless restricted).",
        "—",
        "Not limited to gilts.",
        "The power is constrained by duties (care, suitability, diversification)."
      ]
    }
  },
  {
    topic: "Investment — standard investment criteria (TA 2000 s4)",
    q: "Which pair best matches the standard investment criteria under TA 2000 s4?",
    choices: [
      "Speed and secrecy",
      "Suitability and diversification",
      "Profit and punishment",
      "Seniority and nationality"
    ],
    correct: 1,
    explain: {
      whyRight:
        "TA 2000 s4 requires trustees to consider suitability of investments and the need for diversification (as appropriate).",
      whyWrong: [
        "Not criteria.",
        "—",
        "Not criteria.",
        "Not criteria."
      ]
    }
  },
  {
    topic: "Investment — duty to review (TA 2000 s4(2))",
    q: "TA 2000 s4(2) requires trustees to:",
    choices: [
      "Never change investments once chosen",
      "Review investments from time to time and consider whether changes are needed",
      "Ask beneficiaries to pick all investments",
      "Hold all funds in cash"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees must keep investments under review and reconsider suitability/diversification periodically.",
      whyWrong: [
        "A 'set and forget' approach is inconsistent with the duty.",
        "—",
        "Beneficiaries don’t manage the trust (unless absolutely entitled and directing via Saunders v Vautier).",
        "Holding all cash may be unsuitable and breach duties depending on circumstances."
      ]
    }
  },
  {
    topic: "Investment advice (TA 2000 s5)",
    q: "Under TA 2000 s5, trustees should generally:",
    choices: [
      "Always obtain proper advice before any investment decision, no exceptions",
      "Obtain and consider proper advice on investments unless they reasonably conclude it is unnecessary or inappropriate",
      "Only take advice from beneficiaries",
      "Never take advice because it shows weakness"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s5 encourages proper advice unless trustees reasonably decide it is unnecessary/inappropriate in the circumstances.",
      whyWrong: [
        "There is an exception where it’s reasonably unnecessary/inappropriate.",
        "—",
        "Beneficiaries are not the mandated advisers.",
        "Refusing advice can breach the duty of care."
      ]
    }
  },
  {
    topic: "Delegation — general position (TA 2000)",
    q: "Which statement best reflects trustee delegation after TA 2000?",
    choices: [
      "Trustees may delegate everything and then forget about it",
      "Trustees may delegate certain functions but must set terms, keep the arrangement under review, and be able to intervene",
      "Trustees can never delegate any function",
      "Delegation is valid only if beneficiaries sign a deed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "TA 2000 allows delegation but trustees retain oversight duties: terms, review, and intervention where appropriate.",
      whyWrong: [
        "Abdicating responsibility is inconsistent with trustee duties.",
        "—",
        "Delegation is permitted within statutory/trust limits.",
        "Beneficiary deed-signing is not a general requirement."
      ]
    }
  },
  {
    topic: "Delegation — duty to keep under review",
    q: "A key trustee duty when delegating investment management is to:",
    choices: [
      "Never look at performance again",
      "Keep the agent’s performance and the delegation under review",
      "Give the agent full ownership of the trust fund",
      "Refuse to intervene even if problems arise"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees must supervise delegation: review performance and take action if needed.",
      whyWrong: [
        "Failure to review risks breach of duty of care.",
        "—",
        "Ownership does not transfer.",
        "Refusal to intervene can be a breach."
      ]
    }
  },
  {
    topic: "Trustees — appointment (TA 1925 s36) idea",
    q: "Trustee Act 1925 s36 is commonly used for:",
    choices: [
      "General investment rules",
      "Appointment of new trustees / replacement in certain situations (e.g., death, incapacity, refusal)",
      "Rules on charitable registration",
      "Bona fide purchaser defence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "TA 1925 s36 provides mechanisms for appointing new/replacement trustees in various situations.",
      whyWrong: [
        "Investment rules are mainly TA 2000.",
        "—",
        "Charity registration is a different regime.",
        "BFP is a different equitable doctrine."
      ]
    }
  },
  {
    topic: "Trustees — retirement (TA 1925 s39) idea",
    q: "A trustee’s retirement under TA 1925 s39 generally requires:",
    choices: [
      "A criminal background check",
      "Proper steps so the trust continues with remaining trustees (or replacements) and the trust property is properly vested",
      "Consent of every beneficiary in all cases",
      "That the trust ends immediately"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Retirement usually requires continuity of trusteeship and proper vesting/administration; it cannot leave the trust without the required trustees.",
      whyWrong: [
        "No such requirement.",
        "—",
        "Beneficiary consent is not always required as a universal rule.",
        "Retirement does not terminate the trust."
      ]
    }
  },
  {
    topic: "Court powers — appoint/remove (TA 1925 s41) idea",
    q: "TA 1925 s41 is most associated with the court’s power to:",
    choices: [
      "Rewrite trust terms for fairness",
      "Appoint new trustees (and facilitate proper administration, including removal where appropriate)",
      "Impose criminal sanctions",
      "Create charitable status"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s41 gives the court power to appoint trustees and support proper administration (often used alongside removal principles).",
      whyWrong: [
        "Courts cannot generally rewrite trusts just for fairness (absent specific doctrines).",
        "—",
        "No criminal sanctions here.",
        "Charitable status is separate."
      ]
    }
  },
  {
    topic: "Removal — guiding principle (Letterstedt-style)",
    q: "The court’s guiding concern when asked to remove a trustee is usually:",
    choices: [
      "Punishing the trustee",
      "The welfare of minors only",
      "The proper administration of the trust and the beneficiaries’ interests",
      "Whether the trustee is unpopular"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Removal is typically justified where necessary for proper administration and the beneficiaries’ interests (not punishment).",
      whyWrong: [
        "Punishment is not the aim.",
        "Minors’ welfare may be relevant but is not the only concern.",
        "—",
        "Unpopularity alone is not enough without impact on administration."
      ]
    }
  },
  {
    topic: "Trustees — duty to keep accounts",
    q: "Which is a standard administrative duty of trustees?",
    choices: [
      "Keep proper accounts and records of trust property and dealings",
      "Avoid all communication with beneficiaries",
      "Distribute capital whenever asked",
      "Ignore the trust deed if inconvenient"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Trustees must account and maintain proper records to enable proper administration and enforcement.",
      whyWrong: [
        "Trustees must often provide information appropriate to enforcement.",
        "—",
        "Distributions must follow trust terms and powers.",
        "Trustees must comply with the trust deed."
      ]
    }
  },
  {
    topic: "Trustees — acting within powers",
    q: "If trustees act outside their powers (ultra vires), the best description is:",
    choices: [
      "Automatically valid if done honestly",
      "A breach of trust risk because trustees must act within powers given by the trust/statute",
      "Always cured by beneficiary gratitude",
      "Always a criminal offence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees must stay within the scope of their powers; acting outside them can amount to breach of trust.",
      whyWrong: [
        "Honesty does not expand powers.",
        "—",
        "Gratitude is irrelevant.",
        "It is not automatically criminal."
      ]
    }
  },
  {
    topic: "Trustees — power of advancement (TA 1925 s32) concept",
    q: "A 'power of advancement' generally refers to trustees’ ability to:",
    choices: [
      "Advance (pay/apply) capital to or for a beneficiary before it becomes payable under the trust, subject to limits/terms",
      "Increase their own fee each year",
      "Convert all trusts into charities",
      "Sever a joint tenancy"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Advancement allows trustees to apply capital early for a beneficiary (subject to statutory/trust limits).",
      whyWrong: [
        "Self-fees are not the idea.",
        "—",
        "Unrelated.",
        "Unrelated."
      ]
    }
  },
  {
    topic: "Trustees — power of maintenance (TA 1925 s31) concept",
    q: "A 'power of maintenance' is most closely associated with trustees’ ability to:",
    choices: [
      "Use trust income for a beneficiary’s maintenance/education (often relevant for minors), subject to terms/limits",
      "Use capital only, never income",
      "Invest only in property",
      "Avoid any duty of care"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Maintenance powers commonly permit applying income for a beneficiary’s support/education where appropriate, often for minors.",
      whyWrong: [
        "Maintenance is usually income-focused (depending on terms/statute).",
        "—",
        "Not limited to property investment.",
        "Powers don’t eliminate duties."
      ]
    }
  },
  {
    topic: "Trusts of land — TOLATA s6",
    q: "Under TOLATA 1996, trustees of land generally have:",
    choices: [
      "No power to sell unless all beneficiaries consent",
      "All the powers of an absolute owner, subject to the trust and statutory duties",
      "Power only to rent, never sell",
      "Power to ignore mortgages"
    ],
    correct: 1,
    explain: {
      whyRight:
        "TOLATA s6 gives trustees of land broad powers akin to an absolute owner, constrained by the trust terms and duties.",
      whyWrong: [
        "Beneficiary consent is not always required; powers depend on the trust and statute.",
        "—",
        "They can sell if within powers.",
        "Mortgages/creditors must be dealt with properly."
      ]
    }
  },
  {
    topic: "Trusts of land — duty to consult (TOLATA s11) idea",
    q: "A trustee of land’s duty to consult beneficiaries is best described as:",
    choices: [
      "A duty to follow beneficiaries’ instructions in all cases",
      "A duty (where applicable) to consult beneficiaries with an interest in possession and give effect to their wishes so far as consistent with the trust’s purposes",
      "A duty owed only to mortgage lenders",
      "A duty that applies only to charities"
    ],
    correct: 1,
    explain: {
      whyRight:
        "TOLATA contemplates consultation with beneficiaries (especially those in possession) and taking wishes into account, but trustees retain decision-making subject to trust purposes.",
      whyWrong: [
        "Consultation is not absolute obedience.",
        "—",
        "Not lender-only.",
        "Not charity-only."
      ]
    }
  },
  {
    topic: "Investment — diversification meaning",
    q: "‘Diversification’ under TA 2000 s4 primarily requires trustees to:",
    choices: [
      "Invest all funds in one very safe asset",
      "Spread investments to manage risk, so far as appropriate to the trust",
      "Invest only overseas",
      "Avoid investment entirely"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Diversification means spreading risk appropriately, tailored to the trust’s purposes and circumstances.",
      whyWrong: [
        "Concentration in one asset is the opposite of diversification.",
        "—",
        "Overseas-only is not required.",
        "Avoiding investment may breach duties depending on circumstances."
      ]
    }
  },
  {
    topic: "Investment — suitability meaning",
    q: "‘Suitability’ under TA 2000 s4 most directly means trustees must consider:",
    choices: [
      "Whether the investment fits the trust’s purposes and the beneficiaries’ needs/risk profile",
      "Whether the investment is trendy",
      "Whether the trustee personally likes the company",
      "Whether the investment avoids tax at all costs"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Suitability is about appropriateness for the trust’s purposes, time horizon, risk tolerance, and beneficiary needs.",
      whyWrong: [
        "Trendiness is not a legal criterion.",
        "—",
        "Personal preference is improper.",
        "Tax is relevant but not the sole overriding criterion."
      ]
    }
  },
  {
    topic: "Delegation — cannot abdicate",
    q: "Trustees delegate portfolio management to an agent and then stop monitoring. Best analysis?",
    choices: [
      "No issue because delegation transfers responsibility",
      "Likely breach of duty: trustees must keep delegation under review and intervene if needed",
      "Always valid if the agent is FCA-authorised",
      "Always invalid because delegation is never permitted"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Delegation doesn’t remove trustee responsibility; trustees must supervise and review the agent’s work.",
      whyWrong: [
        "Responsibility is not fully transferred.",
        "—",
        "Regulation helps but doesn’t remove trustees’ oversight duties.",
        "Delegation is permitted, but not abdication."
      ]
    }
  },
  {
    topic: "Trustees — conflict authorisation",
    q: "A trustee wants to buy trust property. The safest legal approach is that this is:",
    choices: [
      "Always permitted if they pay market value",
      "Generally prohibited by conflict rules unless properly authorised (e.g., by the trust instrument or fully informed beneficiary consent/court)",
      "Automatically required if no other buyers",
      "Allowed if the trustee is unpaid"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Self-dealing/conflict situations are tightly controlled; proper authorisation is required, not just ‘fair price’.",
      whyWrong: [
        "Fair price alone doesn’t cure conflict.",
        "—",
        "No automatic requirement exists.",
        "Unpaid status does not authorise conflicts."
      ]
    }
  },
  {
    topic: "Trustees — discretion and relevant considerations",
    q: "When exercising a discretionary power, trustees should:",
    choices: [
      "Consider relevant factors, ignore irrelevant ones, and act within the trust purposes",
      "Act randomly to appear impartial",
      "Follow only one beneficiary’s demands",
      "Refuse to act to avoid criticism"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Proper exercise of discretion requires relevant considerations, proper purposes, and exclusion of irrelevant factors.",
      whyWrong: [
        "Randomness is improper decision-making.",
        "—",
        "That would breach impartiality/proper administration.",
        "Failure to act can itself be a breach."
      ]
    }
  },
  {
    topic: "Trustees — delegation vs unanimity",
    q: "Which statement is most accurate?",
    choices: [
      "Because trustees must act unanimously, delegation is always impossible",
      "Unanimity is the default for trustee decisions, but statutory/express powers can allow delegation of functions within limits",
      "If trustees delegate, they no longer owe fiduciary duties",
      "Delegation requires Saunders v Vautier"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees typically decide jointly, but delegation is permitted under TA 2000 (and/or the trust deed), with oversight duties.",
      whyWrong: [
        "Delegation can coexist with unanimity for key decisions.",
        "—",
        "Duties continue.",
        "Saunders v Vautier is about beneficiaries collapsing trusts."
      ]
    }
  },
  {
    topic: "Trustees — investment and duty of care together",
    q: "Which combination best reflects trustee investment obligations under TA 2000?",
    choices: [
      "Invest however they like, provided they mean well",
      "Exercise reasonable care and skill (s1), consider suitability/diversification (s4), review investments, and obtain proper advice unless unnecessary (s5)",
      "Avoid investment entirely to prevent loss",
      "Only invest in the settlor’s favourite assets"
    ],
    correct: 1,
    explain: {
      whyRight:
        "This captures the integrated TA 2000 scheme: care + criteria + review + advice (unless reasonably unnecessary).",
      whyWrong: [
        "Good intentions don’t satisfy statutory duties.",
        "—",
        "Blanket avoidance can breach duties depending on trust purposes.",
        "Settlor preference is irrelevant unless expressed in the trust terms."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Trust Law | Chapter 10 | Trustees’ Duties",
    subtitle: "Powers, fiduciary duties, and decision-making basics.",
    questions: questions
  };
})();
  
