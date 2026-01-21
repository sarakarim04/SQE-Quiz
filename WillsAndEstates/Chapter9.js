(() => {
  const questions = [
  {
    topic: "Inheritance Act 1975 — purpose",
    q: "What is the main purpose of the Inheritance (Provision for Family and Dependants) Act 1975?",
    choices: [
      "To invalidate wills that exclude family members",
      "To allow certain applicants to seek reasonable financial provision from the estate",
      "To automatically rewrite a will to match intestacy",
      "To increase inheritance tax thresholds"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The 1975 Act allows eligible applicants to apply to court for orders that the estate makes reasonable financial provision for them.",
      whyWrong: [
        "The Act does not automatically invalidate wills; it provides a discretionary remedy.",
        "—",
        "It does not automatically substitute intestacy for the will.",
        "It has nothing to do with tax thresholds."
      ]
    }
  },
  {
    topic: "Eligibility — spouse/civil partner",
    q: "Which person is automatically within a core category of eligible applicants under the 1975 Act?",
    choices: [
      "A close friend",
      "A surviving spouse/civil partner",
      "A former partner who dated the deceased for 6 months",
      "A neighbour who helped with shopping"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A surviving spouse or civil partner is a key eligible category under the Act.",
      whyWrong: [
        "Friends are not a listed category unless they qualify as a dependant being maintained.",
        "—",
        "Dating alone is not a category.",
        "Helping a neighbour is not a category without maintenance dependency."
      ]
    }
  },
  {
    topic: "Eligibility — cohabitant requirement",
    q: "A cohabitant can claim under the 1975 Act if they:",
    choices: [
      "Lived together for 6 months",
      "Lived with the deceased as spouse/civil partner for 2 years immediately before death",
      "Were engaged to the deceased",
      "Shared a bank account for 1 year"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Cohabitants must generally show 2 years’ cohabitation immediately before death, living as spouses/civil partners.",
      whyWrong: [
        "6 months is insufficient.",
        "—",
        "Engagement alone is not enough.",
        "Shared finances may support evidence but do not replace the 2-year requirement."
      ]
    }
  },
  {
    topic: "Eligibility — child vs treated as child",
    q: "Which is most accurate?",
    choices: [
      "Only biological children can claim",
      "A person treated as a child of the family may be eligible even if not biologically related",
      "Stepchildren can never claim",
      "Only adult children can claim"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Act includes children and also persons treated as a child of the family (e.g., stepchild in a family relationship).",
      whyWrong: [
        "Eligibility is not limited to biological children.",
        "—",
        "Stepchildren may qualify if treated as a child of the family and/or maintained.",
        "Children can be minors or adults; adulthood is not a requirement."
      ]
    }
  },
  {
    topic: "Eligibility — maintained by the deceased",
    q: "To claim as a person 'maintained' by the deceased, the claimant generally must show:",
    choices: [
      "They were emotionally supported",
      "They were being maintained (wholly or partly) financially immediately before death",
      "They were promised a gift in the will",
      "They lived within 5 miles of the deceased"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Maintenance focuses on financial contribution/support by the deceased immediately before death (wholly or partly).",
      whyWrong: [
        "Emotional support alone is not maintenance.",
        "—",
        "A promise does not by itself create this category.",
        "Proximity is irrelevant."
      ]
    }
  },
  {
    topic: "Standard of provision — spouse vs others",
    q: "Which statement best reflects the different standards of 'reasonable financial provision'?",
    choices: [
      "Everyone is limited to maintenance",
      "Spouse/CP claims are not limited to maintenance; other categories are generally maintenance-only",
      "Only children are not limited to maintenance",
      "Only cohabitants are not limited to maintenance"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Spouse/civil partner claims can be broader than maintenance; non-spouse applicants are generally limited to maintenance provision.",
      whyWrong: [
        "That is wrong because spouse/CP is not limited to maintenance.",
        "—",
        "Children are generally maintenance-only (unless they also qualify differently, but the standard remains maintenance).",
        "Cohabitants are generally maintenance-only."
      ]
    }
  },
  {
    topic: "Maintenance — meaning",
    q: "In this context, 'maintenance' is best understood as:",
    choices: [
      "Any amount the claimant wants",
      "Provision for day-to-day living needs, appropriate to the circumstances",
      "A guaranteed share equal to a beneficiary’s share",
      "A penalty against the estate"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Maintenance is provision for reasonable living needs, assessed in the circumstances; it is not an automatic equal share.",
      whyWrong: [
        "It is not an entitlement to any desired amount.",
        "—",
        "There is no automatic parity with beneficiaries.",
        "It is not punitive."
      ]
    }
  },
  {
    topic: "Time limit — core rule",
    q: "A 1975 Act claim must generally be issued within:",
    choices: [
      "6 months of death",
      "6 months of the grant of representation",
      "12 months of death",
      "28 days of the grant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The general time limit is 6 months from the date of the grant (permission is needed if late).",
      whyWrong: [
        "The trigger is usually the grant, not death.",
        "—",
        "Not the standard limit.",
        "Not the standard limit."
      ]
    }
  },
  {
    topic: "Late claims — effect",
    q: "If a claimant issues a 1975 Act claim after the usual time limit, the most accurate statement is:",
    choices: [
      "The court has no power to hear it in any circumstances",
      "The court may allow it with permission, but late claims are risky and require justification",
      "The claim automatically succeeds if the estate is large",
      "The PRs must pay regardless"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Late claims are not automatically barred in all cases, but permission is required and the court expects good reasons.",
      whyWrong: [
        "The court can extend time/permit late claims, but it is not automatic.",
        "—",
        "Estate size does not automatically validate lateness or merit.",
        "PRs are not obliged to pay without a valid order/settlement."
      ]
    }
  },
  {
    topic: "Factors — estate size relevance",
    q: "When deciding a 1975 Act claim, which factor is clearly relevant?",
    choices: [
      "Claimant’s financial needs and resources",
      "Claimant’s favourite colour",
      "The beneficiaries’ social media presence",
      "The PR’s personal opinion of fairness"
    ],
    correct: 0,
    explain: {
      whyRight:
        "The court considers claimant’s resources/needs and other statutory factors when assessing reasonable provision.",
      whyWrong: [
        "—",
        "Irrelevant.",
        "Irrelevant.",
        "PRs must administer; their personal view is not the test."
      ]
    }
  },
  {
    topic: "Factors — competing needs",
    q: "Which is most accurate about the court’s approach to beneficiaries in a 1975 Act claim?",
    choices: [
      "Beneficiaries’ financial needs are irrelevant",
      "The court can consider beneficiaries’ financial needs and resources when deciding what is reasonable",
      "Beneficiaries always lose if a claim is made",
      "Only charities are considered"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The court considers the needs/resources of both claimants and beneficiaries, among other factors.",
      whyWrong: [
        "Beneficiaries’ circumstances can be relevant.",
        "—",
        "Outcomes are discretionary; beneficiaries do not automatically lose.",
        "Not limited to charities."
      ]
    }
  },
  {
    topic: "Orders — lump sum",
    q: "Which remedy is a court most likely able to order under the 1975 Act?",
    choices: [
      "A criminal fine payable to the claimant",
      "A lump sum payment from the estate",
      "Imprisonment of the executor",
      "Revocation of the marriage"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The court can order financial provision such as lump sums, periodic payments, or property-related orders.",
      whyWrong: [
        "It is a civil remedy, not a criminal fine.",
        "—",
        "Imprisonment is not a remedy under the Act.",
        "Marriage status is not altered by these orders."
      ]
    }
  },
  {
    topic: "Orders — transfer of property",
    q: "Which is most accurate about the court’s powers under the 1975 Act?",
    choices: [
      "The court can only order cash, never property",
      "The court can order transfer/settlement of property if appropriate",
      "The court can order any beneficiary to surrender unrelated personal assets",
      "The court can rewrite the will’s wording for all purposes"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The court has flexible powers, including property transfer/settlement orders, to achieve reasonable financial provision.",
      whyWrong: [
        "Property orders can be available.",
        "—",
        "Orders relate to the estate/settlements, not beneficiaries’ unrelated assets.",
        "The court makes provision orders; it does not generally rewrite the entire will for all purposes."
      ]
    }
  },
  {
    topic: "Spouse standard — wider than maintenance",
    q: "Why is a spouse/civil partner claim often described as potentially broader than maintenance?",
    choices: [
      "Because spouses always take the whole estate",
      "Because the court can consider what would be reasonable in all circumstances (not limited to maintenance)",
      "Because spouses can claim only if there are children",
      "Because spouses can claim only against intestacy, not a will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Spouse/CP claims are assessed on a broader reasonableness standard, not confined to maintenance.",
      whyWrong: [
        "Spouses do not automatically take everything under the Act.",
        "—",
        "Children are not a condition.",
        "Spouses can claim regardless of whether the estate is testate or intestate."
      ]
    }
  },
  {
    topic: "Cohabitant standard — maintenance",
    q: "A qualifying cohabitant’s 1975 Act claim is generally assessed on:",
    choices: [
      "The spouse standard (not limited to maintenance)",
      "The maintenance standard (reasonable for maintenance)",
      "A guaranteed half share of the estate",
      "A rule that excludes property orders"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Non-spouse categories (including cohabitants) are generally limited to reasonable maintenance provision.",
      whyWrong: [
        "Cohabitants are not spouses/CP for this purpose.",
        "—",
        "There is no guaranteed half share.",
        "Property orders can be possible; the standard is maintenance."
      ]
    }
  },
  {
    topic: "PR practical risk — distribution timing",
    q: "Why might PRs delay distribution when a potential 1975 Act claim is looming?",
    choices: [
      "Because they can ignore beneficiaries indefinitely",
      "Because distributing too early can complicate satisfying a later court order and expose them to criticism/liability risk",
      "Because the court forbids any distribution for 12 months in all cases",
      "Because claims are automatically dismissed if PRs distribute quickly"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If a claim may be brought, early distribution can create practical and legal problems; PRs often hold back pending clarity or protective steps.",
      whyWrong: [
        "PRs must act reasonably; delay must be justified.",
        "—",
        "There is no universal 12-month ban.",
        "Distribution does not automatically defeat a claim."
      ]
    }
  },
  {
    topic: "Settlement — common approach",
    q: "Many 1975 Act disputes resolve without a full trial because:",
    choices: [
      "The Act bans trials",
      "Parties often negotiate/mediate given costs, uncertainty, and discretionary outcomes",
      "Beneficiaries have no standing",
      "Claims always succeed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Outcomes are discretionary and litigation is costly; negotiated settlement/ADR is common.",
      whyWrong: [
        "Trials are possible; the Act does not ban them.",
        "—",
        "Beneficiaries are key stakeholders.",
        "Claims are not automatic wins."
      ]
    }
  },
  {
    topic: "Will validity — capacity vs 1975 Act",
    q: "Which best distinguishes a will validity challenge from a 1975 Act claim?",
    choices: [
      "Validity challenges argue the will is invalid; 1975 Act accepts the will may be valid but seeks financial provision anyway",
      "Both are identical",
      "A 1975 Act claim can only be made if the will is forged",
      "Validity challenges are only possible on intestacy"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A validity challenge attacks the will itself (e.g., capacity/undue influence). A 1975 Act claim can proceed even if the will is valid, focusing on reasonable provision.",
      whyWrong: [
        "—",
        "They are different routes.",
        "Forgery is not a prerequisite for a 1975 Act claim.",
        "Validity challenges concern wills; intestacy arises if the will fails."
      ]
    }
  },
  {
    topic: "Undue influence — concept check",
    q: "In probate, 'undue influence' (validity challenge) generally means:",
    choices: [
      "Persuasion that is merely annoying",
      "Coercion such that the testator’s free will is overborne in making the will",
      "Any request by a beneficiary",
      "A spouse asking for provision"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Undue influence in probate is a high threshold—coercion that overbears free will, not mere persuasion.",
      whyWrong: [
        "Mere persuasion is not enough.",
        "—",
        "Requests alone are insufficient.",
        "Spousal requests are not automatically undue influence."
      ]
    }
  },
  {
    topic: "Knowledge and approval — concept check",
    q: "A challenge based on lack of 'knowledge and approval' focuses on whether:",
    choices: [
      "The witnesses liked the will",
      "The testator knew and approved the contents of the will they executed",
      "The beneficiaries approved the contents",
      "The PR approved the distributions"
    ],
    correct: 1,
    explain: {
      whyRight:
        "This ground asks whether the testator understood and approved the will’s contents at execution.",
      whyWrong: [
        "Witness opinion is not the test.",
        "—",
        "Beneficiary approval is irrelevant.",
        "PR approval is irrelevant to execution validity."
      ]
    }
  },
  {
    topic: "Proprietary estoppel — why it appears",
    q: "Why does proprietary estoppel often appear in estates disputes?",
    choices: [
      "It automatically cancels the will",
      "Because someone claims they relied on a promise of property and suffered detriment, so equity should enforce/compensate",
      "Because it is the same as intestacy",
      "Because it is a tax relief"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Proprietary estoppel can arise where promises about property were relied on to the claimant’s detriment, leading to an equitable remedy against the estate/owners.",
      whyWrong: [
        "It does not automatically cancel a will.",
        "—",
        "It is distinct from intestacy.",
        "It is not a tax relief."
      ]
    }
  },
  {
    topic: "Constructive trust — family home link",
    q: "A constructive trust claim in an estates context often relates to:",
    choices: [
      "Proving ownership interests in property (especially home) arising from contributions/common intention",
      "Increasing the statutory legacy",
      "Reviving a revoked will",
      "Paying creditors first"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Constructive trust disputes often determine beneficial ownership of property (e.g., family home) which affects what is in the estate.",
      whyWrong: [
        "—",
        "Statutory legacy is intestacy, not constructive trust.",
        "Revival is will/codicil territory.",
        "Creditor priority is a separate administration issue."
      ]
    }
  },
  {
    topic: "Caveat — practical effect",
    q: "A probate caveat is primarily used to:",
    choices: [
      "Speed up the grant",
      "Stop a grant being issued while a dispute/concern is investigated",
      "Transfer property to the claimant immediately",
      "Distribute the estate without a PR"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A caveat prevents the issue of a grant (temporarily) to allow investigation of disputes about the will/entitlement.",
      whyWrong: [
        "It delays rather than speeds up.",
        "—",
        "It does not itself transfer assets.",
        "PR authority is still needed for administration."
      ]
    }
  },
  {
    topic: "1975 Act — effect of conduct",
    q: "Which is most accurate about 'conduct' in a 1975 Act claim?",
    choices: [
      "Conduct is never relevant",
      "The court can take account of conduct and other circumstances as part of the overall assessment",
      "Conduct decides the claim automatically",
      "Only the PR’s conduct matters"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Conduct can be one factor among many; it does not automatically decide the case but can influence the outcome.",
      whyWrong: [
        "Conduct can be relevant.",
        "—",
        "It is not automatically determinative.",
        "It is not limited to PR conduct."
      ]
    }
  },
  {
    topic: "Former spouse — basic point",
    q: "Which statement is most accurate about a former spouse/civil partner claiming under the 1975 Act?",
    choices: [
      "They can always claim even if remarried",
      "They may be eligible, but remarriage/new civil partnership and court orders can affect eligibility",
      "They can claim only if they were married for 20 years",
      "They can claim only if there is no will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Former spouses/CPs can be eligible, but eligibility can be removed/affected (e.g., remarriage/new CP, and family court orders can bar claims).",
      whyWrong: [
        "Not always; remarriage/new CP is a key bar in many frameworks.",
        "—",
        "There is no 20-year minimum rule.",
        "Claims can be made whether the estate is testate or intestate."
      ]
    }
  },
  {
    topic: "Child claims — adult child",
    q: "Which is most accurate about an adult child claiming under the 1975 Act?",
    choices: [
      "Adult children are never eligible",
      "Adult children can be eligible, but must show lack of reasonable maintenance provision on the facts",
      "Adult children automatically receive half the estate",
      "Adult children can only claim if they lived with the deceased"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Adult children are within an eligible category, but success depends on the statutory factors and whether reasonable maintenance provision was made.",
      whyWrong: [
        "Eligibility includes children regardless of age.",
        "—",
        "There is no automatic half share.",
        "Cohabitation is not a requirement for child category."
      ]
    }
  },
  {
    topic: "PRs — neutral stance",
    q: "In a 1975 Act claim, PRs should generally:",
    choices: [
      "Always fight the claimant",
      "Act neutrally and administer properly, taking directions/legal advice as needed and not distributing prematurely",
      "Refuse to disclose any estate information",
      "Pay the claimant immediately without checking eligibility"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs are fiduciaries: they must protect the estate, act properly, and avoid wrongful distribution; neutrality is common unless the estate’s interests require a position.",
      whyWrong: [
        "Not always; PRs often stay neutral while beneficiaries defend.",
        "—",
        "PRs must account appropriately.",
        "Paying without confirming legal basis is risky."
      ]
    }
  },
  {
    topic: "Interaction — joint property disputes",
    q: "Why might a 'property passing outside the estate' issue still matter in a claim dispute?",
    choices: [
      "Because outside-estate property can never be relevant",
      "Because disputes about whether an asset was joint tenancy/tenancy in common (or held on trust) affect what is in the estate and available to meet claims",
      "Because it automatically creates a 1975 Act claim",
      "Because it always makes the claim succeed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Determining whether property is in the estate is foundational—if it passes by survivorship or trust, it may not be available (or the dispute may be about beneficial ownership).",
      whyWrong: [
        "Outside-estate structures can be highly relevant to what’s available.",
        "—",
        "Outside-estate status does not automatically create a 1975 Act claim.",
        "No automatic success rule."
      ]
    }
  },
  {
    topic: "Grant date — why it matters",
    q: "Why is the date of the grant significant for 1975 Act claims?",
    choices: [
      "It determines whether the will is valid",
      "It usually starts the 6-month limitation period for issuing the claim",
      "It determines who the beneficiaries are",
      "It determines the inheritance tax rate"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The usual limitation period is 6 months from the grant date, so it is the key time marker.",
      whyWrong: [
        "Validity is not determined by grant date.",
        "—",
        "Beneficiaries are determined by will/intestacy.",
        "Tax rates are not determined by the grant date."
      ]
    }
  },
  {
    topic: "Remedy focus — provision not punishment",
    q: "Which is the best statement about the nature of 1975 Act remedies?",
    choices: [
      "They punish the beneficiaries for being chosen",
      "They are aimed at making reasonable financial provision for the applicant",
      "They reverse every gift in the will",
      "They automatically follow intestacy shares"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Act’s remedy is provision-focused: the court crafts financial provision that is reasonable in the circumstances.",
      whyWrong: [
        "It is not punitive.",
        "—",
        "It does not automatically reverse all gifts.",
        "It does not automatically replicate intestacy."
      ]
    }
  },
  {
    topic: "Quick eligibility spotter",
    q: "Which person is most clearly eligible to apply under the 1975 Act on these facts alone?",
    choices: [
      "A lodger who paid full market rent",
      "A cohabitant living as spouse for 2 years immediately before death",
      "A colleague who received birthday gifts",
      "A distant cousin who never met the deceased"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A qualifying cohabitant (2 years immediately before death as spouse/CP) is an express eligible category.",
      whyWrong: [
        "Paying market rent suggests no maintenance dependency.",
        "—",
        "Birthday gifts are not maintenance.",
        "Distant cousin is not an eligible category unless otherwise qualifying."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Wills and Estates | Chapter 9 | Inheritance Act Claims",
    subtitle: "1975 Act eligibility, maintenance, and reasonable provision.",
    questions: questions
  };
})();
  
