(() => {
  const questions = [
  {
    topic: "Outside the estate — core idea",
    q: "Which best explains 'property passing outside the estate'?",
    choices: [
      "Property that is not taxed",
      "Property that does not pass under the will/intestacy because it passes by a different legal mechanism (e.g., survivorship, trust, nomination)",
      "Property that cannot be owned by individuals",
      "Only foreign property"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Some property passes outside the probate estate because it transfers by survivorship, trust terms, or scheme rules rather than under the will/intestacy.",
      whyWrong: [
        "Outside-estate status is not the same as 'not taxed'.",
        "—",
        "Individuals can own property that passes outside the estate.",
        "Foreign property can still be part of an estate; it depends on the asset/structure."
      ]
    }
  },
  {
    topic: "Joint ownership — joint tenancy effect",
    q: "D owns a house as a joint tenant with S. D dies. The house will generally:",
    choices: [
      "Pass under D’s will",
      "Pass automatically to S by survivorship",
      "Be divided equally between all beneficiaries",
      "Pass under intestacy even if D left a will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A joint tenant’s interest passes automatically to the surviving joint tenant(s) by survivorship, outside the will/intestacy.",
      whyWrong: [
        "A will cannot dispose of a joint tenancy interest at death (unless severed beforehand).",
        "—",
        "Beneficiaries do not take joint tenancy property via probate distribution.",
        "Intestacy does not apply to this asset if survivorship operates."
      ]
    }
  },
  {
    topic: "Joint ownership — tenancy in common effect",
    q: "D owns a house as a tenant in common with S. D dies. D’s share will generally:",
    choices: [
      "Pass by survivorship to S automatically",
      "Form part of D’s estate and pass under D’s will/intestacy",
      "Be owned by the mortgage lender",
      "Pass to the Crown"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A tenancy in common share forms part of the deceased’s estate and can pass under the will/intestacy.",
      whyWrong: [
        "Survivorship is a joint tenancy feature, not tenancy in common.",
        "—",
        "A mortgage does not transfer ownership to the lender.",
        "The Crown takes only if no entitled beneficiaries exist."
      ]
    }
  },
  {
    topic: "Joint tenancy — will gift trap",
    q: "D owns a joint tenancy interest in a flat with A. D’s will says: 'I give my half share in the flat to B.' On D’s death, the best analysis is:",
    choices: [
      "B takes D’s half share under the will",
      "A takes the whole by survivorship (unless the joint tenancy was severed before death)",
      "The flat is split between A and B automatically",
      "The will revokes the joint tenancy automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A joint tenancy passes by survivorship. A will clause cannot override survivorship unless severance occurred before death.",
      whyWrong: [
        "A will cannot dispose of a joint tenancy share at death without severance.",
        "—",
        "Courts do not split a joint tenancy simply because a will tries to.",
        "A will does not automatically sever a joint tenancy."
      ]
    }
  },
  {
    topic: "Severance — consequence",
    q: "If a joint tenancy is severed during D’s lifetime, the effect is generally:",
    choices: [
      "The property becomes ownerless until death",
      "The co-owners become tenants in common, so D’s share can pass under the will/intestacy",
      "Survivorship becomes stronger",
      "Only the mortgage is affected, not ownership"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Severance converts a joint tenancy into a tenancy in common, meaning the deceased’s share forms part of the estate.",
      whyWrong: [
        "Ownership continues; it does not become ownerless.",
        "—",
        "Severance removes survivorship.",
        "Severance affects the nature of co-ownership, not merely the mortgage."
      ]
    }
  },
  {
    topic: "Severance — timing",
    q: "Why does severance matter in estate planning?",
    choices: [
      "It guarantees lower inheritance tax",
      "It can prevent survivorship so that a deceased’s share passes under their will/intestacy",
      "It makes a will valid without witnesses",
      "It creates a trust automatically in all cases"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Severance can stop survivorship so the share passes via the will/intestacy, aligning with the testator’s plan.",
      whyWrong: [
        "Severance does not guarantee tax outcomes.",
        "—",
        "Will formalities are separate.",
        "Severance does not automatically create a trust in all cases."
      ]
    }
  },
  {
    topic: "Bank accounts — joint account",
    q: "D and A hold a joint bank account. D dies. The best general starting point is:",
    choices: [
      "Funds automatically form part of D’s estate",
      "Funds may pass to A by survivorship depending on the joint account arrangement, though disputes can arise about beneficial ownership",
      "Funds always pass under intestacy",
      "Funds always pass under the will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Joint accounts often operate with survivorship, but beneficial ownership can be contested depending on intention and contributions.",
      whyWrong: [
        "Not automatically; survivorship commonly applies but facts matter.",
        "—",
        "Intestacy is not automatic if survivorship/beneficial principles apply.",
        "A will may not control if survivorship applies."
      ]
    }
  },
  {
    topic: "Trust property — general rule",
    q: "Assets held in trust (where the deceased was not absolutely entitled) generally:",
    choices: [
      "Always pass under the deceased’s will",
      "Pass according to the trust terms rather than the will/intestacy",
      "Pass to the PRs automatically as legal owners",
      "Pass to the Crown"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trust assets are governed by the trust instrument and trust law; they usually do not fall into the probate estate for distribution by will/intestacy.",
      whyWrong: [
        "Wills generally dispose of estate property, not trust property already governed by trust terms.",
        "—",
        "PRs do not automatically become legal owners of trust assets just because someone dies.",
        "The Crown is only last resort where no entitlement exists."
      ]
    }
  },
  {
    topic: "Trusts — beneficiary interest",
    q: "D is a beneficiary of a trust (not the sole absolute owner). On D’s death, the trust assets:",
    choices: [
      "Automatically become part of D’s estate",
      "Remain subject to the trust and pass as the trust provides (though D’s own beneficial interest may end or pass depending on the trust)",
      "Automatically pass to D’s spouse",
      "Must be sold by the PRs"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The trust continues and assets are dealt with under the trust. What happens depends on D’s interest (e.g., life interest vs fixed share).",
      whyWrong: [
        "Trust assets aren’t automatically pulled into the estate.",
        "—",
        "Spousal entitlement is not automatic outside the trust terms.",
        "PRs do not necessarily control trust assets."
      ]
    }
  },
  {
    topic: "Pensions — death benefits",
    q: "Many pension death benefits are often treated as outside the estate because:",
    choices: [
      "They are always paid to the PRs",
      "They are often paid under scheme rules, sometimes at trustees’ discretion, rather than under the will/intestacy",
      "They are illegal to include in wills",
      "They can never be taxed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Pension benefits are commonly distributed under scheme rules (often discretionary), so they may bypass the estate.",
      whyWrong: [
        "Often they are not paid to PRs unless the scheme requires.",
        "—",
        "There is no general illegality in mentioning them, but the will may not control them.",
        "Tax treatment varies; 'outside estate' ≠ 'no tax'."
      ]
    }
  },
  {
    topic: "Nominations — binding effect",
    q: "An 'expression of wish' (nomination) for pension death benefits is usually:",
    choices: [
      "Always legally binding on the trustees",
      "Often persuasive but not strictly binding (depends on the scheme rules)",
      "A substitute for a valid will",
      "A document that revokes the will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Many schemes treat nominations as guidance; trustees may retain discretion depending on the scheme’s governing rules.",
      whyWrong: [
        "Not always binding; scheme rules often preserve discretion.",
        "—",
        "A nomination does not replace will formalities for estate assets.",
        "It does not revoke the will."
      ]
    }
  },
  {
    topic: "Life insurance — payable to estate",
    q: "A life insurance policy is expressly payable to 'my estate'. The proceeds will generally:",
    choices: [
      "Pass outside the estate automatically",
      "Form part of the estate for administration and distribution",
      "Go to the insurer",
      "Be divided between the witnesses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If payable to the estate, proceeds are collected by PRs and distributed under will/intestacy as part of estate administration.",
      whyWrong: [
        "Payable-to-estate proceeds are generally inside the estate.",
        "—",
        "Insurers pay out according to the policy terms.",
        "Witnesses have no default entitlement."
      ]
    }
  },
  {
    topic: "Life insurance — written in trust",
    q: "A life policy is written in trust for named beneficiaries. The most accurate statement is:",
    choices: [
      "The proceeds typically pass under the trust and can fall outside the probate estate",
      "The proceeds must be paid to PRs first",
      "The will always overrides the trust beneficiaries",
      "The trust is invalid unless witnessed like a will"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A policy in trust is generally paid to trustees for the beneficiaries under the trust, usually outside the probate estate.",
      whyWrong: [
        "—",
        "Payment to PRs is typical only if payable to the estate.",
        "A will does not usually override a valid trust disposition.",
        "Trust creation has different requirements from will execution."
      ]
    }
  },
  {
    topic: "Death-in-service benefits",
    q: "Death-in-service benefits from an employer often pass outside the estate because:",
    choices: [
      "They are always paid under intestacy",
      "They are often paid under scheme rules or discretionary trust arrangements rather than under the will",
      "They are paid only to PRs by law",
      "They cannot be paid to family members"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Many death-in-service benefits operate under discretionary arrangements/scheme rules, bypassing the estate.",
      whyWrong: [
        "They are not governed by intestacy by default.",
        "—",
        "They are not always paid to PRs.",
        "They can commonly be paid to family/dependants."
      ]
    }
  },
  {
    topic: "Property passing outside — effect on PRs",
    q: "If an asset passes outside the estate, the PRs generally:",
    choices: [
      "Still distribute it under the will",
      "Do not have control to distribute it under the will/intestacy (though they may need information for tax/admin)",
      "Can take it as payment for their work",
      "Can ignore it entirely in all contexts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs generally do not distribute non-estate assets under the will/intestacy, though they may need to consider them for administration and sometimes tax reporting.",
      whyWrong: [
        "Distribution under the will applies to estate assets.",
        "—",
        "PRs have no right to appropriate assets for themselves without authority.",
        "They cannot always ignore it (e.g., information/tax context)."
      ]
    }
  },
  {
    topic: "Will clause attempting to gift pension",
    q: "T’s will says: 'I give my pension lump sum death benefit to A.' The best analysis is:",
    choices: [
      "The will definitely controls the pension benefit",
      "Whether A receives it depends primarily on the pension scheme rules/trustees’ discretion; the will may not control it",
      "The clause revokes the pension nomination automatically",
      "The clause is void and invalidates the whole will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Pension death benefits are often governed by scheme rules and trustee discretion; a will clause may not be determinative.",
      whyWrong: [
        "The will does not necessarily bind pension trustees.",
        "—",
        "A will clause does not automatically revoke a nomination; scheme rules govern.",
        "One ineffective clause does not usually invalidate the entire will."
      ]
    }
  },
  {
    topic: "Joint tenancy — survivorship terminology",
    q: "The rule that a joint tenant’s interest passes automatically to the surviving joint tenant(s) is called:",
    choices: ["Per stirpes", "Survivorship (jus accrescendi)", "Ademption", "Rectification"],
    correct: 1,
    explain: {
      whyRight:
        "Survivorship (jus accrescendi) is the key incident of joint tenancy.",
      whyWrong: [
        "Per stirpes relates to representation in succession.",
        "—",
        "Ademption concerns a missing gifted asset in a will.",
        "Rectification concerns correcting drafting errors in a will."
      ]
    }
  },
  {
    topic: "Tenancy in common — no survivorship",
    q: "Which is most accurate about tenancy in common?",
    choices: [
      "Survivorship always applies",
      "Each co-owner has a distinct share that can pass under a will/intestacy",
      "It only exists for married couples",
      "It prevents any sale of the property"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Tenants in common hold separate shares that can be left by will or pass under intestacy.",
      whyWrong: [
        "Survivorship is not a feature of tenancy in common.",
        "—",
        "It is not limited to married couples.",
        "Co-owned property can still be sold subject to proper processes."
      ]
    }
  },
  {
    topic: "Trust vs estate — who receives",
    q: "If D creates a lifetime trust of investments for B and retains no absolute entitlement, on D’s death the investments generally:",
    choices: [
      "Return automatically to D’s estate",
      "Continue to be held under the trust for B (outside the will/intestacy distribution)",
      "Are distributed by PRs under intestacy",
      "Are shared between D’s children by default"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trust assets remain subject to the trust, and are dealt with under the trust terms, not by PRs under the will/intestacy.",
      whyWrong: [
        "They do not return automatically to the estate if properly settled.",
        "—",
        "PRs do not distribute settled trust property as estate assets.",
        "There is no default children-sharing rule for trust assets."
      ]
    }
  },
  {
    topic: "DMC — core definition",
    q: "A donatio mortis causa (DMC) is best described as:",
    choices: [
      "A lifetime gift completed with no conditions",
      "A gift made in contemplation of death, conditional on death, with delivery of dominion/control",
      "A gift made only in a will",
      "A gift that must be witnessed by two witnesses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A DMC is a deathbed-type gift: made in contemplation of death, conditional on death, and requiring delivery of dominion/control.",
      whyWrong: [
        "DMCs are conditional and linked to contemplated death.",
        "—",
        "A DMC is not made by will (it’s an exceptional lifetime mechanism).",
        "Two-witness will formalities are not the defining requirement (though evidence matters)."
      ]
    }
  },
  {
    topic: "DMC — conditional nature",
    q: "Which statement best reflects the conditional nature of a DMC?",
    choices: [
      "It is irrevocable immediately",
      "It takes effect only if the donor dies from the contemplated peril/condition, and can be revoked if the donor recovers or changes mind",
      "It takes effect only after probate is granted",
      "It is valid only if written in the will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A DMC is conditional on death (often from the contemplated peril) and is not fully effective if the donor survives; it can be revoked during life.",
      whyWrong: [
        "DMCs are not necessarily irrevocable immediately.",
        "—",
        "A DMC is not dependent on probate grant as a distribution mechanism.",
        "It is not a will gift."
      ]
    }
  },
  {
    topic: "DMC — delivery requirement",
    q: "For a DMC, 'delivery' generally requires:",
    choices: [
      "Handing over cash only",
      "Some form of delivery of dominion/control (e.g., keys or documents giving control over the property)",
      "A text message confirming the gift",
      "Signing before two witnesses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A key feature is delivery of dominion/control over the subject matter (or something representing it).",
      whyWrong: [
        "Not limited to cash.",
        "—",
        "A text message is usually insufficient without delivery of control.",
        "Will formalities are different and not the delivery requirement."
      ]
    }
  },
  {
    topic: "Outside estate — nominated accounts",
    q: "Which asset is most likely to pass outside the estate via nomination/scheme rules?",
    choices: [
      "A specific legacy of a ring in the will",
      "A discretionary pension death benefit",
      "A tenancy in common share in land",
      "A debt owed to the deceased"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Pension death benefits commonly pass under scheme rules (often discretionary), outside the estate.",
      whyWrong: [
        "A ring given by will is an estate gift.",
        "—",
        "A tenancy in common share forms part of the estate.",
        "Debts owed to the deceased are estate assets collectible by PRs."
      ]
    }
  },
  {
    topic: "Will vs trust — priority",
    q: "T’s will leaves 'all my assets to A', but T had previously placed £200,000 into a valid trust for B. On T’s death:",
    choices: [
      "A takes the trust fund under the will",
      "The trust fund remains governed by the trust for B; the will covers T’s estate assets",
      "The trust is automatically revoked by the will",
      "The PRs distribute the trust fund under intestacy"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A will generally disposes of estate assets, not assets already settled in a valid trust for someone else.",
      whyWrong: [
        "The will does not usually override an existing trust.",
        "—",
        "A will does not automatically revoke a lifetime trust.",
        "Trust assets are not distributed under intestacy by PRs."
      ]
    }
  },
  {
    topic: "Joint tenancy — severance not automatic",
    q: "Which statement is most accurate?",
    choices: [
      "Marriage automatically severs joint tenancies",
      "A joint tenancy continues unless severed; if not severed, survivorship applies on death",
      "A will clause automatically severs joint tenancies",
      "Joint tenancy only exists for bank accounts, not land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Survivorship applies unless severance occurs during lifetime; a will clause alone doesn’t usually sever.",
      whyWrong: [
        "Marriage does not automatically sever joint tenancies as a general rule.",
        "—",
        "A will clause does not automatically sever before death.",
        "Joint tenancy can exist for land and other property."
      ]
    }
  },
  {
    topic: "Outside estate — practical probate impact",
    q: "Which is most accurate about assets passing outside the estate?",
    choices: [
      "They never matter because PRs only handle estate assets",
      "They can significantly affect what beneficiaries receive, even though PRs do not distribute them under the will/intestacy",
      "They always go to the spouse regardless of structure",
      "They are illegal to plan for"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Outside-estate assets can be a major part of wealth transfer (survivorship, pensions, trusts), affecting overall outcomes even if PRs don’t distribute them as estate property.",
      whyWrong: [
        "They can matter greatly to the overall inheritance picture.",
        "—",
        "Destination depends on the mechanism (trust/survivorship/scheme rules), not always spouse.",
        "It is not illegal to plan using lawful structures."
      ]
    }
  },
  {
    topic: "Insurance — beneficiary designation vs estate",
    q: "Which arrangement is most likely to keep insurance proceeds outside the probate estate?",
    choices: [
      "Policy payable to 'my personal representatives'",
      "Policy written in trust for named beneficiaries",
      "Policy payable to 'my estate'",
      "Policy with no beneficiary/trust wording at all"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A policy in trust typically pays out to trustees for beneficiaries, bypassing the probate estate.",
      whyWrong: [
        "Payable to PRs normally routes into estate administration.",
        "—",
        "Payable to the estate routes into the estate.",
        "No wording may mean it defaults to estate/PRs depending on the policy terms."
      ]
    }
  },
  {
    topic: "Trusts — PRs vs trustees",
    q: "Who is responsible for distributing trust assets on the trustee’s death (where the trust continues)?",
    choices: [
      "The PRs of the trustee automatically distribute the trust assets",
      "The continuing/new trustees administer and distribute according to the trust terms",
      "The beneficiaries distribute amongst themselves",
      "The Probate Registry distributes the trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Trust assets are administered by trustees (continuing or replacement trustees) under the trust terms; PRs deal with the trustee’s personal estate, not the trust fund itself.",
      whyWrong: [
        "PRs do not automatically become responsible for distributing trust assets as estate property.",
        "—",
        "Beneficiaries do not self-administer unless also trustees/appointed properly.",
        "The Registry does not distribute trust assets."
      ]
    }
  },
  {
    topic: "Outside estate — common categories check",
    q: "Which combination is most likely to pass outside the estate?",
    choices: [
      "Tenancy in common share + debts owed to the deceased",
      "Joint tenancy property + pension death benefits under scheme rules + life policy in trust",
      "Car owned solely by the deceased + bank account solely in their name",
      "Cash under the mattress + shares registered in the deceased’s name"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Joint tenancy passes by survivorship; many pension death benefits follow scheme rules; life policies in trust pay out under the trust—each commonly outside the probate estate.",
      whyWrong: [
        "Tenancy in common and debts are typically estate assets.",
        "—",
        "Solely owned assets form part of the estate.",
        "Solely owned assets form part of the estate."
      ]
    }
  },
  {
    topic: "DMC vs will — why it matters",
    q: "Why can a DMC be exam-relevant in 'property outside the estate'?",
    choices: [
      "It is the standard method of gifting property on death",
      "It is an exceptional mechanism allowing a conditional death-related gift outside the usual will formalities",
      "It automatically overrides intestacy rules",
      "It requires probate to be granted first"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A DMC is a limited exception: it can transfer property on death without being a will gift, if strict requirements are met.",
      whyWrong: [
        "DMCs are exceptional, not standard.",
        "—",
        "It does not automatically override intestacy; it operates only if valid on its own facts.",
        "It is not dependent on probate grant as a mechanism."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Wills and Estates | Chapter 6 | Assets Outside the Estate",
    subtitle: "Survivorship, nominations, trusts, and non-probate assets.",
    questions: questions
  };
})();
  
