(() => {
  const questions = [
  {
    topic: "Trustee liability — breach of trust meaning",
    q: "A breach of trust is best described as:",
    choices: [
      "Any decision that leads to a loss, even if within powers and reasonable",
      "A trustee acting outside powers or failing to comply with trustee duties in administering the trust",
      "Any disagreement between trustees and beneficiaries",
      "A criminal offence committed by a trustee"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A breach of trust occurs where trustees act outside their powers or breach their duties (e.g., duty of care, proper purposes, no conflict/profit, etc.).",
      whyWrong: [
        "Loss alone is not enough if trustees acted properly within powers and duties.",
        "—",
        "Disagreement is not a legal breach.",
        "Breach of trust is a civil equitable wrong, not automatically criminal."
      ]
    }
  },
  {
    topic: "Trustee liability — ultra vires acts",
    q: "If trustees apply trust funds to a purpose not permitted by the trust instrument, this is usually:",
    choices: [
      "Valid if the trustees believed it was sensible",
      "A breach of trust (acting outside powers)",
      "Automatically authorised if beneficiaries later approve informally",
      "Not actionable because trustees hold legal title"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees must act within their powers. Using trust funds for an unauthorised purpose is typically a breach of trust.",
      whyWrong: [
        "Good intentions do not expand powers.",
        "—",
        "Later informal approval may not cure it unless fully informed, competent beneficiaries consent/ratify properly.",
        "Beneficiaries can sue in equity despite trustees holding legal title."
      ]
    }
  },
  {
    topic: "Remedies — equitable compensation",
    q: "Equitable compensation against a trustee is generally aimed at:",
    choices: [
      "Punishing the trustee",
      "Restoring the trust fund to the position it would have been in but for the breach",
      "Rewarding beneficiaries for inconvenience",
      "Applying criminal fines"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Equitable compensation is primarily restorative: it compensates the trust for loss caused by the breach.",
      whyWrong: [
        "Equity is usually not punitive in trustee breach claims.",
        "—",
        "Inconvenience alone is not the focus.",
        "This is civil liability, not criminal."
      ]
    }
  },
  {
    topic: "Remedies — account of profits",
    q: "An account of profits is most associated with situations where:",
    choices: [
      "The trustee made an unauthorised profit due to a conflict or fiduciary position",
      "The trustee made a bad investment in good faith",
      "The beneficiary suffered emotional distress",
      "The trustee acted within powers and achieved high returns"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Where a trustee makes unauthorised profits (e.g., conflict/no-profit rule), the typical remedy is to strip the profit via an account.",
      whyWrong: [
        "—",
        "Bad investment in good faith is usually assessed via breach/duty of care and compensation, not profit-stripping.",
        "Emotional distress is not the usual measure.",
        "High returns within powers is not wrongdoing."
      ]
    }
  },
  {
    topic: "Strictness — no profit/no conflict",
    q: "Which statement is most accurate about trustee conflicts and profits?",
    choices: [
      "A trustee may keep profits if the trust suffered no loss",
      "Liability can arise even without bad faith; unauthorised profits are typically disgorged",
      "Trustee liability only exists if beneficiaries prove fraud",
      "A trustee can self-deal if they pay market value"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Fiduciary rules are strict: unauthorised profits/conflicts can trigger liability even without loss or bad faith.",
      whyWrong: [
        "No-loss does not automatically permit keeping unauthorised profit.",
        "—",
        "Fraud is not required for many fiduciary breaches.",
        "Fair price alone usually doesn’t cure self-dealing without authorisation."
      ]
    }
  },
  {
    topic: "Duty of care — Trustee Act 2000",
    q: "A trustee’s investment decision will most likely be judged against:",
    choices: [
      "A guarantee of best possible returns",
      "The statutory duty of care (TA 2000 s1) and standard investment criteria (s4) including suitability and diversification",
      "Whatever beneficiaries demand at the time",
      "A criminal negligence test"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Investment is governed by TA 2000: reasonable care and skill (s1) + suitability/diversification (s4) + review/advice obligations.",
      whyWrong: [
        "Trustees are not guarantors of returns.",
        "—",
        "Trustees must consider wishes sometimes, but duties/powers control decisions.",
        "This is not a criminal test."
      ]
    }
  },
  {
    topic: "Causation — basic requirement",
    q: "To recover equitable compensation, the claimant generally must show:",
    choices: [
      "Only that a breach occurred, never any causal link",
      "That the breach caused loss to the trust fund (though equity may be strict, especially on misapplication)",
      "That the trustee was dishonest",
      "That the trustee intended to harm beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A causal link between breach and loss generally matters, though equitable rules can be strict depending on the type of breach (e.g., misapplication).",
      whyWrong: [
        "Breach alone doesn’t always establish the measure without linking to loss (subject to strict rules in some cases).",
        "—",
        "Dishonesty is not always required.",
        "Intention to harm is not a general requirement."
      ]
    }
  },
  {
    topic: "Misapplication — wrong payment",
    q: "A trustee pays trust money to the wrong person by mistake. This is usually:",
    choices: [
      "Not a breach because it was accidental",
      "A breach of trust; trustees are typically liable to restore the misapplied sum (subject to defences)",
      "Automatically cured if the trustee apologises",
      "Only actionable if the trustee profited"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Misapplication is a classic breach; trustees generally must restore the fund even if the breach was innocent.",
      whyWrong: [
        "Mistake does not prevent breach.",
        "—",
        "Apologies do not cure liability.",
        "Profit is not required for liability."
      ]
    }
  },
  {
    topic: "Joint trustees — default liability",
    q: "Where there are joint trustees and a breach occurs, the usual position is:",
    choices: [
      "Only the trustee who signed the document is liable",
      "Trustees may be jointly and severally liable to beneficiaries (depending on facts), with contribution issues between trustees separately",
      "No trustee is liable unless fraud is proven",
      "Liability is always split equally regardless of involvement"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Beneficiaries can often recover from any liable trustee (joint and several). Trustees then sort contribution/indemnity between themselves.",
      whyWrong: [
        "Liability can extend beyond the signatory depending on participation/duty breaches (including failure to supervise).",
        "—",
        "Fraud is not required.",
        "Internal contribution isn’t always equal; it can depend on culpability."
      ]
    }
  },
  {
    topic: "Contribution — between trustees",
    q: "If one trustee pays the beneficiaries for the full loss, that trustee may:",
    choices: [
      "Have no further rights",
      "Seek contribution from co-trustees who are also liable",
      "Automatically become sole beneficiary",
      "Recover from beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A trustee who pays more than their fair share may seek contribution from co-trustees who share responsibility.",
      whyWrong: [
        "Contribution may be available.",
        "—",
        "Paying a claim doesn’t change beneficial ownership.",
        "Recovery is generally against co-trustees, not beneficiaries."
      ]
    }
  },
  {
    topic: "Indemnity — from trust fund",
    q: "A trustee is most likely to have an indemnity from the trust fund where:",
    choices: [
      "They acted dishonestly",
      "They acted properly within powers and incurred liabilities/expenses in the due administration of the trust",
      "They acted outside powers",
      "They committed fraud but returned the money"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees can often be indemnified out of the trust fund for proper administrative expenses/liabilities incurred within powers and in good faith.",
      whyWrong: [
        "Dishonesty usually defeats indemnity.",
        "—",
        "Ultra vires acts usually defeat indemnity.",
        "Fraud typically defeats indemnity."
      ]
    }
  },
  {
    topic: "Beneficiary consent — conditions",
    q: "Beneficiary consent will most likely defeat a breach of trust claim where:",
    choices: [
      "The beneficiary consented without understanding anything",
      "The beneficiary was adult, had capacity, and gave fully informed consent to the breach",
      "The beneficiary was a minor but agreed verbally",
      "The trustee assumed the beneficiary would agree"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Fully informed, competent consent/approval by an adult beneficiary can bar a claim (subject to limits).",
      whyWrong: [
        "Consent must be informed; uninformed consent is weak/ineffective.",
        "—",
        "Minors generally can’t give effective consent to waive trust rights.",
        "Assumption is not consent."
      ]
    }
  },
  {
    topic: "Authorisation — trust instrument",
    q: "Trustees do an act that would normally be a breach, but the trust deed expressly authorises it. Best analysis?",
    choices: [
      "It is still a breach because all breaches are forbidden",
      "If within the terms of the deed and not contrary to mandatory rules, it may be authorised and not a breach",
      "It becomes automatically charitable",
      "It is criminal regardless"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees’ powers can be expanded by the trust instrument; authorised acts within the deed are generally not breaches.",
      whyWrong: [
        "Trust terms can authorise actions that would otherwise be unauthorised.",
        "—",
        "Unrelated.",
        "Not criminal by default."
      ]
    }
  },
  {
    topic: "Exemption clauses — basic effect",
    q: "A trustee exemption (exoneration) clause typically:",
    choices: [
      "Automatically removes all trustee duties",
      "May limit trustee liability for certain breaches (often negligence), but is construed strictly and usually cannot protect fraud",
      "Makes the trustee immune from any court order",
      "Applies only to charities"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Exemption clauses can reduce liability scope (commonly for negligence), but courts interpret them strictly and they cannot generally exclude liability for fraud.",
      whyWrong: [
        "Duties still exist; the clause affects liability, not the trust’s existence.",
        "—",
        "Courts can still grant relief and supervise administration.",
        "Not charity-only."
      ]
    }
  },
  {
    topic: "Exemption clauses — construction",
    q: "How do courts typically approach trustee exemption clauses?",
    choices: [
      "They interpret them broadly to protect trustees wherever possible",
      "They construe them strictly, especially where they purport to exclude liability for serious wrongdoing",
      "They ignore them automatically",
      "They only enforce them if beneficiaries later agree"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Because exemption clauses reduce accountability, courts tend to construe them strictly and are reluctant to extend them beyond clear wording.",
      whyWrong: [
        "Broad protection is not the default approach.",
        "—",
        "They are not automatically ignored.",
        "They can be effective without later beneficiary agreement if properly included."
      ]
    }
  },
  {
    topic: "TA 1925 s61 — relief",
    q: "Under Trustee Act 1925 s61, the court may relieve a trustee from personal liability if the trustee:",
    choices: [
      "Acted dishonestly but regrets it",
      "Acted honestly and reasonably and ought fairly to be excused",
      "Made a profit but shared it with beneficiaries",
      "Is a professional trustee"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s61 gives discretionary relief where the trustee acted honestly and reasonably and ought fairly to be excused for the breach.",
      whyWrong: [
        "Dishonesty typically defeats relief.",
        "—",
        "Sharing profits doesn’t necessarily cure unauthorised gain/conflict.",
        "Professional status does not automatically entitle relief; if anything, the standard may be higher."
      ]
    }
  },
  {
    topic: "s61 — nature of relief",
    q: "Relief under TA 1925 s61 is best described as:",
    choices: [
      "Automatic once honesty is shown",
      "Discretionary and can be whole or partial, depending on the circumstances",
      "Only available to unpaid trustees",
      "A criminal defence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s61 relief is discretionary; the court can relieve wholly or partly if the statutory conditions are satisfied.",
      whyWrong: [
        "It is not automatic; the court decides.",
        "—",
        "It is not limited to unpaid trustees.",
        "This is civil equitable relief, not criminal."
      ]
    }
  },
  {
    topic: "Delegation — liability risk",
    q: "Trustees delegate investment management to an agent but fail to supervise and review. If loss occurs, trustees are most likely:",
    choices: [
      "Not liable because delegation transfers responsibility",
      "Potentially liable for breach of duty of care in selecting/supervising the agent",
      "Automatically protected by s61",
      "Liable only if they were paid trustees"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Delegation does not equal abdication. Trustees must act reasonably in appointing agents and keep delegation under review; failure can be a breach.",
      whyWrong: [
        "Responsibility is not fully transferred to the agent.",
        "—",
        "s61 is discretionary and not automatic.",
        "Liability does not depend solely on payment."
      ]
    }
  },
  {
    topic: "Standard of care — professional trustees",
    q: "A professional trustee’s standard of care is generally:",
    choices: [
      "Lower, because they manage many trusts",
      "Higher, reflecting special knowledge/experience and TA 2000 s1",
      "The same as a minor beneficiary",
      "Irrelevant because professional trustees are insured"
    ],
    correct: 1,
    explain: {
      whyRight:
        "TA 2000 s1 calibrates the duty: higher where trustees have or claim special knowledge/experience, especially professionals.",
      whyWrong: [
        "Being busy does not lower the standard.",
        "—",
        "That comparison makes no legal sense.",
        "Insurance does not remove duties."
      ]
    }
  },
  {
    topic: "Limitation — basic idea",
    q: "In trustee breach claims, limitation rules:",
    choices: [
      "Never apply in equity",
      "Can apply (often by analogy to statutory limitation), but certain breaches (e.g., fraud/dishonesty or trust property in trustee’s possession) may be treated differently",
      "Always bar claims after 12 months",
      "Apply only to land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Limitation can apply, but equity treats some trust claims differently, especially involving fraud/dishonesty or recovery of trust property in a trustee’s hands.",
      whyWrong: [
        "Limitation can apply to equitable claims.",
        "—",
        "No universal 12-month rule.",
        "Not land-only."
      ]
    }
  },
  {
    topic: "Trustee liability — dishonest vs innocent",
    q: "Which statement is most accurate?",
    choices: [
      "Only dishonest trustees are ever liable for breach of trust",
      "Innocent trustees can be liable (e.g., mistaken misapplication), though dishonesty affects remedies/defences like s61 and exemption clauses",
      "Dishonesty is required for any equitable remedy",
      "If a trustee is unpaid, they cannot be liable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustee liability does not require dishonesty. Innocent breaches can still trigger liability, but dishonesty often removes protections/relief.",
      whyWrong: [
        "Honest mistakes can still be breaches.",
        "—",
        "Equitable remedies exist for non-dishonest breaches.",
        "Unpaid trustees can still be liable."
      ]
    }
  },
  {
    topic: "Defence — beneficiary release/ratification",
    q: "A beneficiary signs a release waiving claims after receiving full disclosure and independent advice. Best analysis?",
    choices: [
      "The release is automatically void",
      "It may be effective to bar claims, provided the beneficiary had capacity and the release was fully informed and not procured improperly",
      "It is effective even if the beneficiary was misled",
      "It only works if approved by the Attorney General"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Fully informed consent/release by a competent beneficiary can bar claims, unless vitiated (e.g., undue influence, misrepresentation).",
      whyWrong: [
        "Releases are not automatically void.",
        "—",
        "Misleading undermines informed consent.",
        "Attorney General is mainly relevant to charities."
      ]
    }
  },
  {
    topic: "Breach measure — restore fund vs profits",
    q: "Which pairing is most accurate?",
    choices: [
      "Equitable compensation = strip profits; account of profits = restore losses",
      "Equitable compensation = restore losses to the trust fund; account of profits = strip unauthorised gains",
      "Both are criminal penalties",
      "Both only apply if there is fraud"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Equitable compensation restores the fund for loss; account of profits strips unauthorised gains.",
      whyWrong: [
        "This reverses the remedies.",
        "—",
        "They are civil equitable remedies.",
        "Fraud is not always required."
      ]
    }
  },
  {
    topic: "Failure to act — breach risk",
    q: "Trustees become aware that trust money is sitting uninvested for years without review, despite trust purposes requiring growth. This is most likely:",
    choices: [
      "Fine because doing nothing is always safest",
      "A potential breach (failure to review/invest appropriately) depending on circumstances and duties under TA 2000",
      "Never actionable because no one 'acted'",
      "Automatically justified if beneficiaries are adults"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees can breach duties by failing to act (e.g., failure to review or invest appropriately) depending on trust purposes and circumstances.",
      whyWrong: [
        "Doing nothing can breach duty of care/suitability.",
        "—",
        "Omissions can be breaches.",
        "Adult beneficiaries don’t automatically excuse trustee inactivity."
      ]
    }
  },
  {
    topic: "Self-dealing — validity",
    q: "A trustee sells trust land to themselves without proper authorisation. Best analysis?",
    choices: [
      "Valid if the price is fair",
      "Likely breach of the no-conflict/self-dealing rule; transaction vulnerable unless properly authorised/consented",
      "Automatically protected by s61",
      "Never a breach if the trustee is unpaid"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Self-dealing is a classic conflict; fairness alone rarely cures it without proper authorisation or fully informed consent.",
      whyWrong: [
        "Fair price is not usually enough to cure conflict.",
        "—",
        "s61 is discretionary and unlikely to excuse serious conflict wrongdoing.",
        "Unpaid status doesn’t authorise conflicts."
      ]
    }
  },
  {
    topic: "Trustees — improper purpose",
    q: "Trustees exercise a power of advancement to pressure a beneficiary into dropping a complaint, rather than for the beneficiary’s welfare. This is best analysed as:",
    choices: [
      "Proper exercise because trustees have discretion",
      "Potential breach: exercise for an improper purpose",
      "Not reviewable by any court",
      "Automatically ratified because advancement powers are broad"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Even discretionary powers must be used for proper purposes consistent with the trust; using powers to coerce is likely improper.",
      whyWrong: [
        "Discretion is not unlimited.",
        "—",
        "Trustee discretion is reviewable for improper purpose/irrelevant considerations.",
        "Breadth does not remove proper purpose limits."
      ]
    }
  },
  {
    topic: "Exemption clause — fraud",
    q: "Which is most accurate regarding exemption clauses and fraud?",
    choices: [
      "A clause can validly exclude liability for the trustee’s own fraud",
      "Courts will generally not allow trustees to rely on clauses to escape liability for fraud",
      "Fraud is treated like ordinary negligence for exemption clauses",
      "Fraud only matters if beneficiaries are minors"
    ],
    correct: 1,
    explain: {
      whyRight:
        "As a general principle, trustees cannot rely on exemption clauses to protect themselves from liability for fraud.",
      whyWrong: [
        "Courts are highly resistant to allowing fraud to be excluded.",
        "—",
        "Fraud is far more serious than negligence.",
        "Beneficiary age doesn’t make fraud acceptable."
      ]
    }
  },
  {
    topic: "Selecting the right analysis — mistaken investment loss",
    q: "A trustee invests imprudently, ignoring diversification and advice, and the portfolio falls significantly. The most likely claim is:",
    choices: [
      "Account of profits",
      "Breach of trust for failure to comply with duty of care/investment criteria, seeking equitable compensation",
      "Knowing receipt",
      "Resulting trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "This is classic breach of investment duties (TA 2000) and is normally pursued via equitable compensation to restore losses caused by breach.",
      whyWrong: [
        "No unauthorised profit is suggested.",
        "—",
        "Knowing receipt targets recipients, not trustees’ investment mistakes.",
        "Resulting trusts concern intention/failure, not trustee mismanagement."
      ]
    }
  },
  {
    topic: "Selecting the right analysis — trustee secret commission",
    q: "A trustee receives a secret commission from an investment provider for investing trust funds with them. Most appropriate remedy focus?",
    choices: [
      "Account of profits (disgorgement of the secret commission) and likely breach of fiduciary duty",
      "Only nominal damages because trust fund did not lose money",
      "No claim because commissions are normal",
      "Only criminal prosecution"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Secret commissions breach fiduciary no-profit/no-conflict duties; equity typically orders disgorgement (account of profits).",
      whyWrong: [
        "Loss is not required for profit-stripping remedies.",
        "—",
        "Undisclosed commissions are not automatically permitted.",
        "Civil equitable remedies are primary; criminal law is separate."
      ]
    }
  },
  {
    topic: "Multiple trustees — passive trustee",
    q: "T1 actively misapplies trust money. T2 'doesn’t get involved' and never checks accounts. T2’s best liability analysis is:",
    choices: [
      "T2 is never liable because they did not touch the money",
      "T2 may be liable for breach of duty (e.g., failure to supervise/joint responsibility), depending on facts",
      "T2 is only liable if beneficiaries are minors",
      "T2 becomes a beneficiary automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trustees can be liable for failing to supervise or perform duties as co-trustees; passive inaction can amount to breach.",
      whyWrong: [
        "Non-participation does not automatically excuse breach of supervisory duties.",
        "—",
        "Beneficiary age does not determine trustee liability.",
        "Trustees do not become beneficiaries by default."
      ]
    }
  },
  {
    topic: "s61 — when likely to fail",
    q: "Which scenario is least likely to attract s61 relief?",
    choices: [
      "Trustee made an honest, reasonable mistake after taking proper advice",
      "Trustee acted honestly but in a borderline case and promptly tried to remedy the breach",
      "Trustee deliberately concealed a conflict and profited secretly",
      "Trustee acted reasonably and transparently but misunderstood a technicality"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Concealed conflict and secret profit point to serious wrongdoing and lack of honesty/reasonableness—s61 relief is unlikely.",
      whyWrong: [
        "Honest/reasonable mistake is the kind of case where relief may be considered.",
        "Relief may be possible if honesty/reasonableness and fairness are shown.",
        "—",
        "Technical mistakes with reasonable conduct may still be candidates for partial relief."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Trust Law | Chapter 11 | Trustee Liability",
    subtitle: "Breach of trust, compensation, and remedies.",
    questions: questions
  };
})();
  
