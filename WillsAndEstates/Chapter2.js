(() => {
  const questions = [
  {
    topic: "Personal representatives — definition",
    q: "Which best describes a personal representative (PR)?",
    choices: [
      "Any beneficiary under the will",
      "A person with authority to collect in, administer, and distribute the deceased’s estate",
      "A solicitor instructed by the family",
      "Only the person named as executor in a will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs are the persons legally authorised to deal with the estate: collecting assets, paying liabilities, and distributing to those entitled.",
      whyWrong: [
        "Beneficiaries may have rights, but they are not automatically PRs.",
        "—",
        "A solicitor may assist but is not automatically the PR.",
        "Administrators can also be PRs; it’s not limited to named executors."
      ]
    }
  },
  {
    topic: "Executors vs administrators — source of appointment",
    q: "Which statement is most accurate?",
    choices: [
      "Executors are appointed by the court; administrators are appointed by the will",
      "Executors derive their role from the will; administrators are appointed where there is no executor able/willing to act or no valid will",
      "Executors can only act after the grant; administrators can act before the grant",
      "Executors and administrators are the same and the labels are interchangeable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Executors are appointed by the will; administrators are appointed (via the grant) when there is no acting executor or no valid will/intestacy.",
      whyWrong: [
        "This reverses the roles.",
        "—",
        "Administrators generally get authority only on the grant; executors’ authority arises from the will (though they usually need the grant in practice).",
        "They are both PRs but differ in appointment and timing of authority."
      ]
    }
  },
  {
    topic: "Authority — executors",
    q: "When does an executor’s authority to administer the estate arise?",
    choices: [
      "Only when the grant of probate is issued",
      "From the will (though a grant is usually needed to prove authority to third parties)",
      "Only when all beneficiaries consent",
      "Only after estate accounts are approved"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Executors take authority from the will itself, but in practice they often need a grant of probate to deal with asset-holders.",
      whyWrong: [
        "The grant is evidential/procedural but authority derives from the will.",
        "—",
        "Beneficiaries’ consent is not a precondition for authority.",
        "Accounts are part of administration, not a trigger for authority."
      ]
    }
  },
  {
    topic: "Authority — administrators",
    q: "When does an administrator’s authority to administer the estate arise?",
    choices: [
      "From the deceased’s will",
      "Only upon the grant of letters of administration",
      "As soon as the death certificate is issued",
      "Once they notify creditors"
    ],
    correct: 1,
    explain: {
      whyRight:
        "An administrator has no authority until the grant of letters of administration is issued.",
      whyWrong: [
        "Administrators are used where there is no executor/valid will.",
        "—",
        "A death certificate does not confer authority.",
        "Notifying creditors does not create authority."
      ]
    }
  },
  {
    topic: "Grants — types",
    q: "Which pairing is correct?",
    choices: [
      "Executors → letters of administration; Administrators → probate",
      "Executors → grant of probate; Administrators → grant of letters of administration",
      "Executors → decree nisi; Administrators → decree absolute",
      "Executors → power of attorney; Administrators → trust deed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Executors generally obtain a grant of probate; administrators obtain letters of administration.",
      whyWrong: ["Reversed.", "—", "These are divorce terms.", "These are unrelated instruments."]
    }
  },
  {
    topic: "Core duties — collect in, pay, distribute",
    q: "Which is NOT a core duty of PRs?",
    choices: [
      "Collecting in the estate assets",
      "Paying the deceased’s debts and liabilities",
      "Distributing the estate to those entitled",
      "Guaranteeing the beneficiaries a minimum inheritance"
    ],
    correct: 3,
    explain: {
      whyRight:
        "PRs must administer the estate lawfully; they do not guarantee a minimum inheritance (entitlement depends on the will/intestacy and any claims).",
      whyWrong: [
        "Collecting in assets is a core duty.",
        "Paying liabilities is a core duty.",
        "Distributing to those entitled is a core duty.",
        "—"
      ]
    }
  },
  {
    topic: "Fiduciary nature — best interests",
    q: "PRs are best described as:",
    choices: [
      "Fiduciaries who must act in the best interests of the estate and beneficiaries",
      "Agents of the beneficiaries who take instructions from the majority",
      "Owners of the estate property once the person dies",
      "Free to distribute as they think fair"
    ],
    correct: 0,
    explain: {
      whyRight:
        "PRs are fiduciaries: they must act properly, avoid conflicts, and administer the estate in accordance with the law and the will/intestacy.",
      whyWrong: [
        "PRs are not merely agents of beneficiaries.",
        "Estate assets are held for administration; PRs are not beneficial owners.",
        "They must follow the will/intestacy rules, not personal views of fairness."
      ]
    }
  },
  {
    topic: "Power to sell — general principle",
    q: "Which statement best reflects PRs’ powers over estate assets?",
    choices: [
      "PRs cannot sell assets unless every beneficiary consents",
      "PRs generally have power to sell/call in and convert estate property as needed for administration",
      "Only the Probate Registry can sell assets",
      "PRs can sell only personal chattels, not land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs generally have broad powers to realise assets to pay liabilities and administer/distribute the estate (often taught with reference to Trustee Act 1925 s 25 and related principles).",
      whyWrong: [
        "Consent is not always required; sale can be necessary for administration.",
        "Only PRs (not the Registry) administer the estate.",
        "PRs can deal with land as part of the estate, subject to proper administration."
      ]
    }
  },
  {
    topic: "Priority — administration expenses",
    q: "Which is generally paid first out of the estate before distributing to beneficiaries?",
    choices: [
      "Residuary gifts",
      "Funeral and administration expenses",
      "Legacies to friends",
      "Voluntary payments to family"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Funeral and administration expenses are typically paid before debts and distributions.",
      whyWrong: [
        "Residue is distributed after liabilities and expenses.",
        "—",
        "Legacies are subject to debts/expenses being met.",
        "Voluntary payments are not a priority category."
      ]
    }
  },
  {
    topic: "Liability — wrongful distribution",
    q: "If PRs distribute the estate to the wrong person, which is most accurate?",
    choices: [
      "They are never liable if they acted honestly",
      "They may be personally liable to the true beneficiary",
      "The distribution is automatically reversed by the Probate Registry",
      "The PR is protected as long as the will was witnessed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs can incur personal liability if they distribute incorrectly; they must ensure the right people are paid.",
      whyWrong: [
        "Honesty does not automatically remove liability.",
        "—",
        "There is no automatic reversal mechanism; recovery may require action.",
        "Witnessing relates to validity, not protection from wrongful distribution."
      ]
    }
  },
  {
    topic: "Protection — Trustee Act 1925 s27 notices",
    q: "What is the main purpose of Trustee Act 1925, s 27 notices in estate administration?",
    choices: [
      "To validate an invalid will",
      "To protect PRs from personal liability to unknown creditors after proper advertisement and waiting",
      "To prevent beneficiaries from bringing any claim",
      "To allow PRs to avoid paying tax"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 27 enables PRs to advertise for creditors and claimants; if they then distribute after the notice period, they are generally protected from later claims by unknown creditors (though assets may still be traceable in beneficiaries’ hands).",
      whyWrong: [
        "It does not cure validity issues.",
        "—",
        "It does not bar all claims.",
        "Tax liabilities are not avoided by s 27 notices."
      ]
    }
  },
  {
    topic: "Executors — renunciation",
    q: "Which best describes renunciation by an executor?",
    choices: [
      "A temporary pause from acting",
      "A formal giving up of the right to take a grant and act as executor",
      "A method to remove a beneficiary",
      "A way to change the will’s terms"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Renunciation is a formal step by which an executor gives up the right to prove the will and act (typically before intermeddling).",
      whyWrong: [
        "It is not just a pause.",
        "—",
        "It does not affect beneficiaries.",
        "It does not vary will terms."
      ]
    }
  },
  {
    topic: "Executors — power reserved",
    q: "If one executor applies for the grant while another does not, the non-applying executor may have:",
    choices: [
      "A disclaimer of the will",
      "Power reserved (so they may apply to join later)",
      "Automatic removal from the will",
      "A guaranteed entitlement to residue"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Power reserved allows an executor to stand aside while others take the grant, preserving the ability to apply later.",
      whyWrong: [
        "Power reserved is not the same as a disclaimer/renunciation.",
        "—",
        "They remain an executor unless removed/renounced.",
        "Executorship does not guarantee beneficial entitlement."
      ]
    }
  },
  {
    topic: "Intermeddling — consequence",
    q: "Why is 'intermeddling' by an executor relevant?",
    choices: [
      "It automatically invalidates the will",
      "It may prevent renunciation and may expose the person to responsibilities/liability as if acting",
      "It transfers ownership of all assets to the executor personally",
      "It means no grant is required"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If a person acts in a way consistent with administering the estate (intermeddling), it can make it harder to renounce and may carry responsibilities/liability.",
      whyWrong: [
        "It does not affect the will’s validity.",
        "—",
        "PRs do not become beneficial owners.",
        "A grant may still be needed to deal with third parties."
      ]
    }
  },
  {
    topic: "PRs — duty to keep accounts",
    q: "Which is most accurate regarding estate accounts?",
    choices: [
      "PRs have no obligation to keep accounts",
      "PRs should keep proper accounts and be able to justify receipts and payments",
      "Only the Probate Registry keeps the accounts",
      "Accounts are optional unless the estate is over £1m"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs owe fiduciary duties, including keeping clear records and accounts of administration.",
      whyWrong: [
        "They do have an obligation as fiduciaries.",
        "—",
        "The Registry does not run the estate’s accounts.",
        "There is no such threshold rule."
      ]
    }
  },
  {
    topic: "Appropriation — concept",
    q: "What does 'appropriation' mean in estate administration?",
    choices: [
      "PRs taking estate assets as payment for their work",
      "Using a specific asset to satisfy a beneficiary’s entitlement (instead of selling and paying cash)",
      "Destroying assets to reduce tax",
      "Transferring all assets to the residuary beneficiaries immediately"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Appropriation is where PRs satisfy a beneficiary’s share by allocating a specific asset to them, rather than converting everything to cash first (subject to proper conditions/valuation).",
      whyWrong: [
        "That would raise conflict/self-dealing issues; not what appropriation means.",
        "—",
        "This is not permitted/appropriate administration.",
        "Immediate transfer without settling liabilities is improper."
      ]
    }
  },
  {
    topic: "Conflict of interest — fiduciary principle",
    q: "Which statement is most accurate?",
    choices: [
      "PRs can freely buy estate assets for themselves if they pay market price",
      "PRs should avoid conflicts of interest and must act properly as fiduciaries",
      "PRs are allowed to favour one beneficiary if they think it is fair",
      "PRs can ignore the will if most beneficiaries agree"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs are fiduciaries and must avoid conflicts and administer according to law/will/intestacy.",
      whyWrong: [
        "Self-dealing is risky and typically requires authority/consent/court approval.",
        "—",
        "They must not act based on personal fairness.",
        "They cannot override the will simply by majority agreement."
      ]
    }
  },
  {
    topic: "Residue vs specific gifts — who ultimately takes what remains",
    q: "After paying expenses and debts and satisfying specific/pecuniary legacies, the remaining estate is:",
    choices: [
      "Ownerless property",
      "Residue, distributed to the residuary beneficiary(ies)",
      "Automatically paid to HMRC",
      "Shared equally among the witnesses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "What remains after liabilities and prior gifts is the residue, which passes to the residuary beneficiary(ies) under the will or intestacy rules.",
      whyWrong: [
        "It is not ownerless.",
        "—",
        "HMRC is paid what is due; not automatically entitled to residue.",
        "Witnesses have no such entitlement."
      ]
    }
  },
  {
    topic: "PRs — dealing with third parties",
    q: "Why do executors often obtain a grant of probate even though their authority comes from the will?",
    choices: [
      "Because without a grant, the will is invalid",
      "Because third parties (e.g., banks, Land Registry) usually require formal proof of authority",
      "Because a grant is needed to change beneficiaries",
      "Because a grant removes all debts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In practice, asset-holders typically require a grant as proof of the executor’s authority before releasing/transferring assets.",
      whyWrong: [
        "A will can be valid without a grant.",
        "—",
        "A grant does not vary beneficial entitlement.",
        "Debts remain payable."
      ]
    }
  },
  {
    topic: "Administrators — when used",
    q: "In which situation is a grant of letters of administration most likely needed?",
    choices: [
      "A valid will appoints two executors who both act",
      "A will exists but no executor is able or willing to act",
      "A will is valid and the executor has already taken the grant",
      "A will contains an attestation clause"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Administrators are appointed where there is no executor able/willing to act or where there is no valid will.",
      whyWrong: [
        "Executors acting → probate, not administration.",
        "—",
        "Already granted probate means executors are acting.",
        "Attestation clauses are evidential only."
      ]
    }
  },
  {
    topic: "PRs — paying beneficiaries before debts",
    q: "PRs distribute the estate to beneficiaries before paying all known debts. Which is most accurate?",
    choices: [
      "This is acceptable because beneficiaries take priority",
      "This is risky and can expose PRs to personal liability to creditors",
      "This is required to prevent claims under the Inheritance Act",
      "This automatically voids the will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs must settle liabilities before distributing; distributing too early can lead to personal liability if debts cannot be met.",
      whyWrong: [
        "Creditors and expenses generally must be dealt with first.",
        "—",
        "Early distribution does not prevent statutory claims.",
        "It does not void the will."
      ]
    }
  },
  {
    topic: "PRs — receipts and releases",
    q: "Why do PRs often obtain signed receipts/release documents from beneficiaries on distribution?",
    choices: [
      "To make the will valid",
      "To evidence proper payment and reduce disputes/liability risk",
      "To increase inheritance tax thresholds",
      "To avoid needing a grant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Receipts and releases help prove distributions were made correctly and can reduce later disputes, though they do not eliminate all risks.",
      whyWrong: [
        "Validity is governed by will formalities/capacity etc.",
        "—",
        "They do not affect tax thresholds.",
        "They don’t remove the need for a grant where required."
      ]
    }
  },
  {
    topic: "PRs — court directions",
    q: "In a genuinely uncertain case (e.g., conflicting claims), PRs may protect themselves by:",
    choices: [
      "Guessing and distributing quickly",
      "Applying to the court for directions/approval",
      "Destroying disputed documents",
      "Paying only the largest claimant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Seeking court directions can protect PRs when there is real doubt about entitlement or administration steps.",
      whyWrong: [
        "Guessing risks liability.",
        "—",
        "Destroying documents is improper and potentially criminal.",
        "This is arbitrary and risky."
      ]
    }
  },
  {
    topic: "PRs — title to estate property",
    q: "Which statement is most accurate about title to estate property during administration?",
    choices: [
      "Beneficiaries automatically own specific assets immediately on death",
      "PRs hold/control the estate property for the purpose of administration and distribution",
      "HMRC owns the estate until tax is paid",
      "The deceased’s spouse automatically owns all assets"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs control/hold estate property during administration to pay liabilities and then distribute to those entitled.",
      whyWrong: [
        "Beneficiaries’ interests exist, but PRs typically control assets during administration.",
        "—",
        "HMRC is a creditor, not the owner.",
        "Spouses do not automatically own all assets."
      ]
    }
  },
  {
    topic: "Multiple executors — decision-making",
    q: "Where there are multiple acting executors, which is generally most accurate?",
    choices: [
      "Any one executor can always act alone in all matters",
      "Executors should act together on key administration steps and ensure proper authority for significant transactions",
      "Executors must always defer to the eldest executor",
      "Executors must always obtain unanimous beneficiary consent"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Co-executors generally act jointly on important decisions/transactions, ensuring proper authority and reducing dispute risk.",
      whyWrong: [
        "Not always; acting alone can be problematic depending on the act.",
        "—",
        "There is no rule that the eldest controls.",
        "Beneficiary consent is not a general legal requirement."
      ]
    }
  },
  {
    topic: "Executor who is also beneficiary",
    q: "E is both executor and residuary beneficiary. Which is most accurate?",
    choices: [
      "E cannot act as executor due to conflict",
      "E can act as executor, but must still comply with fiduciary duties and avoid improper self-dealing",
      "E automatically gets paid for acting as executor",
      "E can ignore other beneficiaries’ interests because E is residuary"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Executors can also be beneficiaries; the key is acting properly as fiduciaries and avoiding conflicts/improper transactions.",
      whyWrong: [
        "Being a beneficiary does not disqualify someone from acting as executor.",
        "—",
        "Payment requires authority (e.g., charging clause/professional entitlement) and is not automatic.",
        "Fiduciary duties still apply."
      ]
    }
  },
  {
    topic: "Dealing with debts — general approach",
    q: "Which is the safest general approach before distributing to beneficiaries?",
    choices: [
      "Distribute immediately to avoid complaints",
      "Identify assets and liabilities, settle debts/tax, consider s 27 notices, then distribute",
      "Pay only unsecured debts and ignore tax",
      "Distribute to residuary beneficiaries first, then pay creditors later"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A prudent approach is to collect in, identify liabilities, settle them (including tax), consider s 27 notices, and only then distribute.",
      whyWrong: [
        "Immediate distribution is risky.",
        "—",
        "Tax cannot be ignored.",
        "Paying creditors after distribution risks shortfall and PR liability."
      ]
    }
  },
  {
    topic: "PRs — duty to act promptly",
    q: "If PRs unreasonably delay administration without good reason, which is most accurate?",
    choices: [
      "Delay is irrelevant once a grant is issued",
      "Delay may be breach of duty and could justify court intervention/removal in serious cases",
      "Delay automatically revokes the will",
      "Delay always protects PRs from liability"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Unreasonable delay can be a breach of fiduciary duty and may justify court action (including possible removal) depending on seriousness and impact.",
      whyWrong: [
        "Duties continue throughout administration.",
        "—",
        "It does not revoke the will.",
        "Delay does not provide protection."
      ]
    }
  },
  {
    topic: "PRs — who benefits from s27 protection",
    q: "If PRs properly place Trustee Act 1925, s 27 notices and then distribute, the main protection is against:",
    choices: [
      "Claims by beneficiaries who already received their entitlement",
      "Personal liability to unknown creditors who did not come forward in time",
      "All inheritance tax",
      "Challenges to the validity of the will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "S 27 is primarily about protecting PRs from later personal liability to unknown creditors/claimants if they follow the notice procedure and distribute after the period.",
      whyWrong: [
        "It does not bar beneficiary disputes generally.",
        "—",
        "It does not remove tax liability.",
        "It does not resolve will validity disputes."
      ]
    }
  },
  {
    topic: "PRs — overall role",
    q: "Which best summarises the PR’s overarching role?",
    choices: [
      "To act as the deceased’s replacement decision-maker for all matters forever",
      "To wind up the deceased’s financial affairs: collect assets, pay liabilities, and distribute to those entitled",
      "To negotiate new entitlements between family members",
      "To ensure all family members receive something"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The PR’s job is to administer the estate: collect in, pay liabilities, and distribute according to the will/intestacy and law.",
      whyWrong: [
        "PR authority is tied to estate administration, not permanent decision-making.",
        "—",
        "PRs do not rewrite entitlements.",
        "There is no duty to ensure everyone receives something."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Wills and Estates | Chapter 2 | Personal Representatives",
    subtitle: "Executors, administrators, authority, and core duties.",
    questions: questions
  };
})();
  
