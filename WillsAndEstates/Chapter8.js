(() => {
  const questions = [
  {
    topic: "Estate administration — overall sequence",
    q: "Which sequence best reflects standard estate administration?",
    choices: [
      "Distribute to beneficiaries first, then pay debts, then collect assets",
      "Collect in assets, settle expenses and liabilities, then distribute to those entitled",
      "Pay beneficiaries, then apply for a grant, then value the estate",
      "Apply intestacy rules, then decide whether to keep accounts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs should collect in estate assets, settle funeral/administration expenses and liabilities (including tax), and only then distribute the estate to beneficiaries/heirs.",
      whyWrong: [
        "Distributing before paying liabilities is risky and can create personal liability.",
        "—",
        "A grant/valuation usually comes before safe distribution in many estates.",
        "Accounting is a continuing duty, not an optional last step."
      ]
    }
  },
  {
    topic: "Collecting in assets — PR responsibility",
    q: "Which is a core task when 'collecting in' the estate?",
    choices: [
      "Choosing which beneficiaries deserve more",
      "Identifying and securing assets (e.g., bank accounts, property, investments) and arranging transfer/realisation",
      "Paying legacies immediately to avoid disputes",
      "Ignoring assets that pass outside the estate"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Collecting in means identifying, securing, and bringing estate assets under PR control (or realising them where needed).",
      whyWrong: [
        "PRs must follow the will/intestacy, not personal views of fairness.",
        "—",
        "Paying legacies too early can expose PRs to liability if debts remain.",
        "Outside-estate assets may still matter for valuation/tax and overall picture."
      ]
    }
  },
  {
    topic: "Expenses — funeral and administration",
    q: "Which is generally paid before beneficiaries receive distributions?",
    choices: [
      "Residuary gifts",
      "Funeral and administration expenses",
      "Voluntary payments to family members",
      "Discretionary gifts chosen by the PR"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Funeral and administration expenses are typically settled before distributions to beneficiaries.",
      whyWrong: [
        "Residue is what remains after liabilities and prior gifts/expenses.",
        "—",
        "Voluntary payments are not priority items.",
        "PRs do not have a discretion to invent gifts."
      ]
    }
  },
  {
    topic: "Debts — risk of early distribution",
    q: "PRs distribute the estate to beneficiaries and later discover unpaid creditors. Which is most accurate?",
    choices: [
      "PRs are never liable once they have distributed",
      "PRs may be personally liable if they distributed without properly settling known liabilities or protecting themselves",
      "Creditors can only sue beneficiaries, never PRs",
      "The Probate Registry automatically reverses distributions"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs can incur personal liability if they distribute prematurely or improperly. Protective steps (like creditor notices) reduce risk but don’t make care unnecessary.",
      whyWrong: [
        "Distribution does not automatically end PR responsibility.",
        "—",
        "Creditors may have claims against PRs (and sometimes recipients).",
        "There is no automatic reversal mechanism."
      ]
    }
  },
  {
    topic: "Unknown creditors — s27 notices purpose",
    q: "The main practical point of Trustee Act 1925 s 27 notices is to:",
    choices: [
      "Validate an invalid will",
      "Reduce PRs’ personal liability risk to unknown creditors after proper advertisement and waiting",
      "Prevent any beneficiary from complaining about delay",
      "Eliminate inheritance tax"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 27 notices are used to flush out unknown creditors/claimants and protect PRs from personal liability if they distribute after the notice period.",
      whyWrong: [
        "It does not cure will validity problems.",
        "—",
        "It does not bar all complaints or claims.",
        "Tax liabilities are not eliminated by s27 notices."
      ]
    }
  },
  {
    topic: "Estate accounts — fiduciary duty",
    q: "Which is most accurate about estate accounts?",
    choices: [
      "PRs do not need to keep accounts unless asked by court",
      "PRs should keep clear estate accounts showing assets, payments, and distributions",
      "Only the Probate Registry keeps estate accounts",
      "Accounts are only required where the estate contains land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs are fiduciaries and should keep proper estate accounts to evidence receipts, payments, and distributions.",
      whyWrong: [
        "Accounts are a standard fiduciary obligation, not only court-triggered.",
        "—",
        "The Registry issues grants; it does not run the estate’s accounts.",
        "Accounts are needed regardless of asset type."
      ]
    }
  },
  {
    topic: "Executor’s year — timing concept",
    q: "The 'executor’s year' is most accurately:",
    choices: [
      "A strict legal deadline to distribute within 12 months in all cases",
      "A commonly cited period giving PRs reasonable time (often around a year) to administer before beneficiaries expect distribution",
      "A rule that beneficiaries cannot ever sue PRs",
      "A tax year for inheritance tax"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Executor’s year is a practical principle: PRs are often allowed reasonable time (commonly described as about a year) to complete administration.",
      whyWrong: [
        "It is not a universal absolute deadline in every case.",
        "—",
        "Beneficiaries can still bring claims for breach/delay where appropriate.",
        "It is not the IHT tax year."
      ]
    }
  },
  {
    topic: "Insolvent estate — concept",
    q: "An estate is 'insolvent' when:",
    choices: [
      "There is no will",
      "The estate’s liabilities exceed its assets available to pay them",
      "There is a surviving spouse",
      "There are no beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Insolvent means the estate cannot pay all debts and liabilities in full from available assets.",
      whyWrong: [
        "No will triggers intestacy, not insolvency.",
        "—",
        "Spouse presence is irrelevant to solvency.",
        "Beneficiary existence is irrelevant to solvency."
      ]
    }
  },
  {
    topic: "Insolvent estate — priority importance",
    q: "Why is creditor priority crucial in an insolvent estate?",
    choices: [
      "Because PRs can choose which creditors they like best",
      "Because paying lower-priority creditors first can expose PRs to personal liability",
      "Because beneficiaries take priority over all creditors",
      "Because priority rules apply only to solvent estates"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In insolvency, PRs must follow priority rules; mis-paying can lead to personal liability to unpaid higher-priority creditors.",
      whyWrong: [
        "PRs must not choose arbitrarily.",
        "—",
        "Creditors generally must be paid before beneficiaries.",
        "Priority rules matter especially in insolvency."
      ]
    }
  },
  {
    topic: "Secured creditors — general principle",
    q: "Which statement is most accurate about a secured creditor (e.g., mortgage lender) in estate administration?",
    choices: [
      "A secured creditor is treated the same as an unsecured creditor in all cases",
      "A secured creditor generally has security rights over the secured asset, affecting how they are paid",
      "Secured creditors are paid only after residuary beneficiaries",
      "Security is irrelevant once a person dies"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Security gives the creditor rights over the asset, shaping repayment and priority.",
      whyWrong: [
        "Security distinguishes them from unsecured creditors.",
        "—",
        "Beneficiaries do not take priority over secured debts attached to assets.",
        "Death does not extinguish security rights."
      ]
    }
  },
  {
    topic: "Distribution — receipts",
    q: "Why do PRs commonly obtain signed receipts from beneficiaries on payment?",
    choices: [
      "To make the will valid",
      "To evidence distributions and reduce dispute/liability risk",
      "To increase the statutory legacy",
      "To avoid needing a grant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Receipts provide proof of payment and help protect PRs if distribution is later challenged.",
      whyWrong: [
        "Will validity depends on execution/capacity, not receipts.",
        "—",
        "Receipts do not change entitlement amounts.",
        "Receipts do not remove institutional grant requirements."
      ]
    }
  },
  {
    topic: "Land — assent",
    q: "An 'assent' in estate administration is most closely associated with:",
    choices: [
      "Transferring land/registered title from PRs to beneficiaries",
      "Changing creditor priority",
      "Revoking a will",
      "Creating a pension nomination"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Assent is the mechanism used by PRs to vest/transmit land to beneficiaries (as opposed to selling it).",
      whyWrong: [
        "—",
        "Creditor priority is separate.",
        "Revocation is separate.",
        "Pensions are usually outside-estate scheme matters."
      ]
    }
  },
  {
    topic: "Appropriation — definition",
    q: "Appropriation means PRs:",
    choices: [
      "Take estate assets as their fee",
      "Use a particular asset to satisfy a beneficiary’s entitlement (instead of selling and paying cash)",
      "Destroy assets to reduce tax",
      "Transfer all assets to residuary beneficiaries immediately"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Appropriation is allocating a specific asset to a beneficiary in satisfaction of their share, usually requiring proper valuation and fairness.",
      whyWrong: [
        "That would risk breach/conflict unless authorised.",
        "—",
        "Destroying assets is improper.",
        "Immediate blanket transfer without settling liabilities is improper."
      ]
    }
  },
  {
    topic: "Valuation — why it matters",
    q: "Why is date-of-death valuation important?",
    choices: [
      "Because PRs can choose any value they like",
      "Because it affects tax reporting, accounting, and fair distribution between beneficiaries",
      "Because it determines whether a will is valid",
      "Because it replaces the need for a grant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Accurate valuation supports tax calculations, estate accounts, and ensures beneficiaries are treated fairly (especially if appropriating assets).",
      whyWrong: [
        "PRs should use reasonable evidence-based values.",
        "—",
        "Validity is about formalities/capacity, not valuation.",
        "Valuation does not replace the need for a grant."
      ]
    }
  },
  {
    topic: "Abatement — concept",
    q: "Abatement is the process of:",
    choices: [
      "Reviving a revoked will",
      "Reducing gifts when the estate is insufficient to pay them in full",
      "Increasing gifts when the estate is valuable",
      "Changing executor appointments"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Abatement deals with what happens when there is not enough value to satisfy all gifts—some gifts must be reduced.",
      whyWrong: [
        "Revival is a separate concept.",
        "—",
        "There is no general 'increase gifts' mechanism.",
        "Executor appointments are separate."
      ]
    }
  },
  {
    topic: "Abatement — common order (general)",
    q: "If the estate is short and the will does not specify otherwise, which is the common general starting point?",
    choices: [
      "Specific gifts abate first",
      "Residue abates first",
      "Funeral expenses abate first",
      "Secured debts abate first"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Commonly, the residue bears the shortfall first, then other gifts, unless the will indicates a different intention.",
      whyWrong: [
        "Specific gifts are typically more protected than residue in the usual order.",
        "—",
        "Expenses are paid before gifts; they are not 'abatement' items.",
        "Debts must be paid; abatement concerns gifts to beneficiaries."
      ]
    }
  },
  {
    topic: "Specific vs general gifts — distinction",
    q: "Which is the best example of a specific gift?",
    choices: [
      "£10,000 to A",
      "My Rolex watch to A",
      "The residue to B",
      "£5,000 from my Barclays account to C (without identifying a particular account balance)"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A specific gift identifies a particular item owned by the deceased (e.g., 'my Rolex watch').",
      whyWrong: [
        "A fixed cash sum is generally a pecuniary (general) legacy.",
        "—",
        "Residue is what remains, not a specific item.",
        "This is typically a pecuniary/demonstrative-style cash gift depending on wording; not the clearest specific item."
      ]
    }
  },
  {
    topic: "Demonstrative gifts — concept check",
    q: "A demonstrative legacy is best described as:",
    choices: [
      "A gift of a specific item only",
      "A cash gift directed to be paid primarily from a particular fund/source",
      "A gift of the entire residue",
      "A gift made outside the will by survivorship"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A demonstrative legacy is a pecuniary sum with an identified source (e.g., '£5,000 from my HSBC account'), often treated as a hybrid in abatement.",
      whyWrong: [
        "That’s more like a specific legacy.",
        "—",
        "Residue is different.",
        "Survivorship is outside-estate, not a legacy type."
      ]
    }
  },
  {
    topic: "PR duty — impartiality",
    q: "When administering and distributing, PRs should generally:",
    choices: [
      "Prefer the residuary beneficiaries because they get 'what’s left'",
      "Act impartially between beneficiaries and follow the will/intestacy",
      "Prioritise whichever beneficiary complains the most",
      "Treat family members as automatically entitled over non-family beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs are fiduciaries and should act impartially, administering according to the will/intestacy rather than personal preferences.",
      whyWrong: [
        "PRs must not favour one class without legal basis.",
        "—",
        "Complaints don’t change entitlement.",
        "A valid will can benefit non-family; PRs must follow it."
      ]
    }
  },
  {
    topic: "PR powers — selling assets",
    q: "Which is most accurate about PRs selling estate assets?",
    choices: [
      "PRs can never sell without all beneficiaries’ consent",
      "PRs can generally sell assets as needed to pay liabilities and administer the estate, subject to duties and any will restrictions",
      "Only the Probate Registry can sell assets",
      "PRs can sell only personal possessions, not investments"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs usually have broad administrative powers, including selling assets to pay debts/expenses and facilitate distribution, while acting properly as fiduciaries.",
      whyWrong: [
        "Consent is not always required; necessity and authority matter.",
        "—",
        "The Registry issues grants; it does not administer sales.",
        "PRs can deal with investments too."
      ]
    }
  },
  {
    topic: "Beneficiaries — information rights (general)",
    q: "Which is most accurate about beneficiary information?",
    choices: [
      "Beneficiaries have no right to any information",
      "PRs should be able to account and explain administration, including providing estate accounts when appropriate",
      "PRs must publish all bank statements online",
      "Only residuary beneficiaries can ever receive any information"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs must be able to account for their administration; providing accounts/information is part of fiduciary accountability.",
      whyWrong: [
        "Beneficiaries can generally require PRs to account in appropriate circumstances.",
        "—",
        "There is no requirement to publish private documents online.",
        "Information/accountability is not limited only to residuary beneficiaries in all situations."
      ]
    }
  },
  {
    topic: "Estate shortfall — gifts vs debts",
    q: "If the estate is insufficient to pay both debts and legacies, which is generally correct?",
    choices: [
      "Legacies are paid first because the will says so",
      "Debts and expenses are paid before legacies; legacies may abate",
      "PRs choose whether to pay debts or legacies",
      "Debts abate and legacies must be paid in full"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Liabilities (including debts and administration expenses) take priority; if funds are short, beneficiary gifts may need to be reduced (abate).",
      whyWrong: [
        "A will cannot usually defeat creditor rights to be paid from the estate.",
        "—",
        "PRs must follow legal priority, not preference.",
        "Debts do not 'abate' in the same way as gifts."
      ]
    }
  },
  {
    topic: "Distribution — partial intestacy link",
    q: "A valid will makes specific gifts but has no residue clause. After paying debts/expenses, assets remain. The leftover assets are:",
    choices: [
      "Kept by the PRs",
      "Distributed under intestacy as partial intestacy",
      "Automatically shared among the specific legatees",
      "Automatically given to the spouse regardless of relatives"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Undisposed assets fall to be distributed under intestacy rules as partial intestacy.",
      whyWrong: [
        "PRs do not keep estate property for themselves.",
        "—",
        "No automatic share among legatees without wording.",
        "Spouse entitlement depends on intestacy scheme; not automatic regardless."
      ]
    }
  },
  {
    topic: "Claims risk — distributing too soon",
    q: "Why might PRs delay final distribution even when beneficiaries are pressuring them?",
    choices: [
      "Because PRs can choose to delay for fun",
      "Because unresolved liabilities/claims (including unknown creditors) can create PR personal liability if they distribute prematurely",
      "Because beneficiaries have no rights until 10 years pass",
      "Because distribution must always wait for a court hearing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs must manage risk: distribute too early and they may be personally exposed if later liabilities/claims arise.",
      whyWrong: [
        "PRs must act reasonably; delay must have justification.",
        "—",
        "Beneficiaries can enforce rights well before 10 years.",
        "Most estates do not require a court hearing to distribute."
      ]
    }
  },
  {
    topic: "Administration — separating estate from personal funds",
    q: "Which best reflects a prudent fiduciary approach by PRs?",
    choices: [
      "Mix estate money with personal money to simplify paperwork",
      "Keep estate funds separate and maintain a clear audit trail",
      "Pay themselves from estate funds whenever they want",
      "Ignore records if all beneficiaries are family"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Separating funds and keeping records helps avoid breach of duty and supports estate accounts.",
      whyWrong: [
        "Mixing funds risks breach and confusion.",
        "—",
        "PR remuneration requires authority; self-payment without authority is risky.",
        "Family status doesn’t remove fiduciary duties."
      ]
    }
  },
  {
    topic: "Interim distributions — caution",
    q: "Which is most accurate about interim distributions?",
    choices: [
      "They are always forbidden",
      "They can be made, but PRs should retain sufficient reserves for liabilities/claims and document the basis",
      "They remove all PR liability",
      "They can only be made to residuary beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Interim payments can be appropriate, but PRs must ensure enough is retained to meet liabilities and keep proper records.",
      whyWrong: [
        "They are not always forbidden.",
        "—",
        "They do not remove liability if made imprudently.",
        "Not limited to residuary beneficiaries as a hard rule."
      ]
    }
  },
  {
    topic: "Administration — dealing with disputes",
    q: "If PRs face genuinely conflicting claims to the same asset, the safest option is often:",
    choices: [
      "Pick the claimant who is most persuasive",
      "Seek directions/approval (e.g., legal advice and, if necessary, court directions) before distributing",
      "Destroy the asset so nobody gets it",
      "Distribute equally regardless of entitlements"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where there’s genuine doubt, PRs may protect themselves by seeking advice and, if needed, court directions rather than guessing.",
      whyWrong: [
        "Guessing can create personal liability.",
        "—",
        "Destroying property is improper.",
        "Equal splits without legal basis can still be wrongful distribution."
      ]
    }
  },
  {
    topic: "Administration — final step",
    q: "Which is most accurate about the role of estate accounts at the end of administration?",
    choices: [
      "Accounts are irrelevant once distribution is done",
      "Accounts evidence what was collected, paid, and distributed, and help PRs show proper administration",
      "Accounts are required only for estates with shares",
      "Accounts replace the need for receipts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Estate accounts are key evidence of proper administration and are part of fiduciary accountability.",
      whyWrong: [
        "Accounts remain important for transparency and defence of PR actions.",
        "—",
        "Accounts are not limited to certain asset classes.",
        "Receipts still matter; accounts and receipts serve different evidential roles."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Wills and Estates | Chapter 8 | Estate Administration",
    subtitle: "Collecting assets, paying liabilities, and distribution steps.",
    questions: questions
  };
})();
  
