(() => {
  const questions = [
  {
    topic: "Family home trusts — key question",
    q: "In most family home co-ownership disputes, the main legal issue is:",
    choices: [
      "Who has criminal liability for mortgage fraud",
      "Whether the parties have beneficial interests (and in what shares) regardless of legal title",
      "Whether the Land Registry made an error",
      "Whether the property is a charity"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Family home disputes usually turn on beneficial ownership (equitable interests and shares), which may differ from the legal title.",
      whyWrong: [
        "Criminal liability is not the trust issue.",
        "—",
        "Land Registry error is not the typical focus.",
        "Family homes are not charities."
      ]
    }
  },
  {
    topic: "Joint legal title — starting presumption",
    q: "A and B buy a home in joint names with no express declaration of shares. What is the starting presumption?",
    choices: [
      "A owns 100% because A earned more",
      "Equity follows the law: joint beneficial ownership (often 50/50), rebuttable by evidence",
      "Shares are always based solely on deposit contributions",
      "A resulting trust automatically applies in domestic cases"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In joint names domestic cases, the starting point is joint beneficial ownership, rebuttable if evidence shows a different common intention.",
      whyWrong: [
        "Income differences alone do not fix shares.",
        "—",
        "The court looks at the whole course of dealing, not only deposit.",
        "Resulting trust is not the default domestic approach in joint names cases."
      ]
    }
  },
  {
    topic: "Joint names — rebutting the presumption",
    q: "Which is most relevant to rebutting the 50/50 presumption in joint names family home cases?",
    choices: [
      "Only direct mortgage payments",
      "The whole course of dealing between the parties relating to the property",
      "Whether one party is older",
      "Whether the property increased in value"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Rebuttal is based on the whole course of dealing (financial and non-financial factors) showing a different common intention.",
      whyWrong: [
        "Direct payments matter but are not the only factor.",
        "—",
        "Age is irrelevant.",
        "Value increase alone does not set shares."
      ]
    }
  },
  {
    topic: "Jones v Kernott — changed intentions",
    q: "Jones v Kernott is most closely associated with which idea?",
    choices: [
      "Joint owners can never change beneficial shares",
      "The court can infer (and if necessary impute) beneficial shares, including where intentions changed over time",
      "Resulting trusts always apply in family homes",
      "Only express declarations matter"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The court can infer or, if necessary, impute shares reflecting the parties’ intentions and dealings, including changes over time.",
      whyWrong: [
        "Shares can change if conduct shows a changed common intention.",
        "—",
        "CICT dominates domestic cases; resulting trusts are not automatic.",
        "Express declarations are important, but shares can be determined without one."
      ]
    }
  },
  {
    topic: "Express declaration — effect",
    q: "A and B sign an express declaration that they hold as tenants in common 70/30. What is the likely effect?",
    choices: [
      "The court will ignore it and apply 50/50",
      "It is usually conclusive as to beneficial shares unless set aside (e.g., fraud/misrepresentation/undue influence)",
      "It only affects legal title",
      "It is invalid unless registered at Companies House"
    ],
    correct: 1,
    explain: {
      whyRight:
        "An express declaration of beneficial shares is generally decisive unless set aside on recognised grounds.",
      whyWrong: [
        "Courts generally respect express declarations.",
        "—",
        "It is specifically about beneficial (equitable) ownership.",
        "Companies House is irrelevant."
      ]
    }
  },
  {
    topic: "Co-ownership — joint tenancy vs tenancy in common",
    q: "Which is true of a beneficial joint tenancy (as opposed to tenancy in common)?",
    choices: [
      "Each co-owner has a distinct fixed share",
      "The right of survivorship applies",
      "It can never be severed",
      "It only exists at law, never in equity"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Joint tenancy features survivorship: on death, interest passes to survivors automatically.",
      whyWrong: [
        "Distinct fixed shares describe tenancy in common.",
        "—",
        "It can be severed in equity.",
        "Joint tenancy can exist both at law and in equity."
      ]
    }
  },
  {
    topic: "Severance — effect",
    q: "What is the effect of severing a beneficial joint tenancy?",
    choices: [
      "It converts the legal title into sole ownership",
      "It converts the beneficial joint tenancy into a beneficial tenancy in common (usually in equal shares unless otherwise shown)",
      "It destroys all beneficial interests",
      "It automatically sells the property"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Severance removes survivorship and creates a tenancy in common in equity (shares often equal unless evidence shows otherwise).",
      whyWrong: [
        "Legal title is separate; severance affects beneficial ownership.",
        "—",
        "It does not destroy beneficial interests.",
        "No automatic sale occurs."
      ]
    }
  },
  {
    topic: "Severance — methods",
    q: "Which is a recognised method of severing a beneficial joint tenancy?",
    choices: [
      "One party privately deciding in their head to sever",
      "Written notice of severance to the other co-owner",
      "Paying household bills",
      "Having an argument about the relationship"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Serving written notice of severance is a classic, clear method of severance.",
      whyWrong: [
        "Uncommunicated intention is not sufficient.",
        "—",
        "Bills do not by themselves sever.",
        "Arguments alone are not severance."
      ]
    }
  },
  {
    topic: "Overreaching — purpose",
    q: "What is the main function of overreaching in co-owned land?",
    choices: [
      "To increase the purchase price",
      "To transfer beneficial interests from the land to the sale proceeds so a buyer takes free of those interests",
      "To make all trusts charitable",
      "To prevent any sale of the family home"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Overreaching moves beneficiaries’ equitable interests off the land and onto the proceeds (if conditions met), protecting buyers.",
      whyWrong: [
        "Not about price.",
        "—",
        "Unrelated to charity.",
        "It facilitates sale, not prevents it."
      ]
    }
  },
  {
    topic: "Overreaching — key condition",
    q: "Overreaching of beneficial interests under a trust of land typically requires:",
    choices: [
      "Payment to one trustee only",
      "Payment of capital money to at least two trustees (or a trust corporation)",
      "A written declaration of trust",
      "Consent from all beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A key condition is payment to two trustees (or a trust corporation), so the buyer can take free of equitable interests that are overreached.",
      whyWrong: [
        "Payment to one trustee often fails to overreach.",
        "—",
        "Writing may exist but is not the core condition for overreaching.",
        "Beneficiary consent is not required for overreaching to operate."
      ]
    }
  },
  {
    topic: "Overreaching — consequence for beneficiary",
    q: "If a beneficial interest is overreached on sale, the beneficiary’s claim is best described as:",
    choices: [
      "A right to stay in the property against the buyer",
      "A claim against the sale proceeds (and potentially trustees), not against the land in the buyer’s hands",
      "A criminal claim against the buyer",
      "Automatically extinguished with no remedy"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Overreaching shifts the interest from land to money; the beneficiary’s rights attach to the proceeds (and trustees’ duties).",
      whyWrong: [
        "Overreaching typically prevents binding the buyer with the equitable interest.",
        "—",
        "This is not a criminal matter.",
        "The interest is not wiped out; it attaches to proceeds."
      ]
    }
  },
  {
    topic: "Sole legal title — how non-owner proves interest",
    q: "H buys a home in H’s sole name. W claims a beneficial interest. Best starting analysis?",
    choices: [
      "W automatically has 50% because they are married",
      "W must establish a common intention constructive trust (common intention + detrimental reliance), unless another doctrine applies",
      "W must prove a resulting trust by showing household spending",
      "W has no possible claim unless on the title"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In sole name cases, claimant typically needs CICT: common intention to share + detrimental reliance (or possibly proprietary estoppel).",
      whyWrong: [
        "Marriage does not automatically create beneficial shares.",
        "—",
        "General household spending is usually weak for resulting trust/CICT.",
        "Equitable interests can arise without legal title."
      ]
    }
  },
  {
    topic: "Sole name — express common intention",
    q: "Which most clearly supports an express common intention to share beneficial ownership?",
    choices: [
      "Owner says: 'This house is ours; you’ll have half' and claimant then funds major renovations",
      "Claimant buys groceries",
      "Claimant visits the property",
      "Owner changes the locks"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Clear assurance plus detrimental reliance strongly supports CICT (or proprietary estoppel on similar facts).",
      whyWrong: [
        "Groceries are usually too indirect.",
        "—",
        "Visiting is irrelevant.",
        "Changing locks suggests the opposite."
      ]
    }
  },
  {
    topic: "Rosset — strict evidence focus",
    q: "Lloyds Bank v Rosset is commonly linked with a strict approach emphasising:",
    choices: [
      "Domestic work automatically creates a share",
      "Clear discussions of sharing OR direct contributions to purchase price/mortgage",
      "That resulting trusts are abolished",
      "That only written agreements count"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Rosset is associated with focusing on express discussions or direct financial contributions to acquisition/mortgage as strong evidence.",
      whyWrong: [
        "Domestic work alone was not enough on that approach.",
        "—",
        "Resulting trusts were not abolished.",
        "Oral discussions can matter; not only writing."
      ]
    }
  },
  {
    topic: "Detrimental reliance — role",
    q: "Why is detrimental reliance important in sole legal title CICT cases?",
    choices: [
      "It proves legal title",
      "It links claimant’s actions to the common intention, making it unconscionable to deny the interest",
      "It replaces the need for any common intention",
      "It automatically fixes shares at 50/50"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Detriment shows reliance on the intention/assurance and supports equitable intervention to prevent unconscionability.",
      whyWrong: [
        "Legal title is separate.",
        "—",
        "Common intention remains essential for CICT.",
        "Detriment doesn’t automatically mean 50/50."
      ]
    }
  },
  {
    topic: "Direct contributions — acquisition",
    q: "Which is most likely to support an inferred common intention to share in a sole-name case?",
    choices: [
      "Direct contributions to deposit or mortgage repayments",
      "Doing all the cooking and cleaning",
      "Buying birthday gifts",
      "Paying for holidays"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Direct contributions to acquisition (deposit/mortgage) are strong evidence for inferring an intention to share beneficial ownership.",
      whyWrong: [
        "Domestic contributions alone are often weak on strict approaches.",
        "—",
        "Gifts do not relate to acquisition.",
        "Holidays are unrelated to ownership intention."
      ]
    }
  },
  {
    topic: "Quantification — once interest established",
    q: "Once a CICT is established but no specific shares were agreed, the court may:",
    choices: [
      "Refuse to award any share",
      "Infer or (if necessary) impute shares based on the whole course of dealing",
      "Always award exactly 50%",
      "Base shares solely on deposit contributions"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Modern approach: infer from conduct; if not possible, impute a share reflecting the parties’ dealings.",
      whyWrong: [
        "If an interest exists, it must be quantified.",
        "—",
        "50/50 is not automatic, especially in sole-name cases.",
        "Deposit matters but is not always decisive."
      ]
    }
  },
  {
    topic: "Resulting trust vs CICT — modern domestic preference",
    q: "In modern domestic family home disputes, courts generally prefer to analyse beneficial shares using:",
    choices: [
      "Resulting trusts based purely on financial contributions",
      "Common intention constructive trusts considering the whole course of dealing",
      "Charitable trusts",
      "Purpose trusts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "CICT is the dominant modern tool for domestic contexts, allowing a broader look at intention and dealings.",
      whyWrong: [
        "Resulting trusts are more common in non-domestic/commercial settings (though still relevant in some contexts).",
        "—",
        "Irrelevant.",
        "Irrelevant."
      ]
    }
  },
  {
    topic: "Joint names — sole name vs joint name difference",
    q: "A key difference between joint legal title cases and sole legal title cases is that:",
    choices: [
      "Joint title cases start with a presumption of joint beneficial ownership; sole title cases require proving common intention + detriment to establish any interest",
      "Sole title cases always end 50/50",
      "Joint title cases never consider conduct",
      "Sole title cases are always resulting trusts"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Joint names: presumption joint beneficial ownership. Sole name: claimant must establish an equitable interest (typically via CICT) before quantification.",
      whyWrong: [
        "Sole title does not automatically mean 50/50.",
        "—",
        "Conduct is central in both contexts.",
        "Sole title is not automatically resulting trust."
      ]
    }
  },
  {
    topic: "Tenancy in common — effect on death",
    q: "If co-owners hold the beneficial interest as tenants in common, on death:",
    choices: [
      "Their share passes by survivorship to the other co-owner",
      "Their share passes under their will or intestacy",
      "Their share automatically becomes ownerless",
      "Their share always goes to the trustees"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Tenancy in common has no survivorship; each share forms part of the deceased’s estate.",
      whyWrong: [
        "Survivorship is joint tenancy, not tenancy in common.",
        "—",
        "It does not become ownerless.",
        "Trustees hold legal title; beneficial share passes via estate."
      ]
    }
  },
  {
    topic: "Severance — mutual agreement/course of dealing",
    q: "Which situation is most likely to sever a beneficial joint tenancy by mutual dealings?",
    choices: [
      "Both parties agree in writing to hold as tenants in common",
      "One party changes their mind silently",
      "A party starts paying more utility bills",
      "One party redecorates a room"
    ],
    correct: 0,
    explain: {
      whyRight:
        "An agreement to hold as tenants in common is a clear severance method (express or sufficiently evidenced).",
      whyWrong: [
        "Silent intention is not enough.",
        "—",
        "Utility bills are generally insufficient to sever.",
        "Redecoration is not severance."
      ]
    }
  },
  {
    topic: "TOLATA — application",
    q: "Disputes about occupation/sale of a family home held on a trust of land are commonly dealt with under:",
    choices: [
      "TOLATA 1996",
      "Wills Act 1837",
      "Sale of Goods Act 1979",
      "Companies Act 2006"
    ],
    correct: 0,
    explain: {
      whyRight:
        "TOLATA 1996 governs trusts of land and applications about sale, occupation, and trustee functions.",
      whyWrong: [
        "—",
        "Wills Act is about wills.",
        "Sale of Goods is irrelevant.",
        "Companies Act is irrelevant."
      ]
    }
  },
  {
    topic: "TOLATA — who can apply",
    q: "Who can apply to court for an order relating to trust property under TOLATA (e.g., sale/occupation)?",
    choices: [
      "Only trustees",
      "Trustees and persons with an interest in the property (e.g., beneficiaries)",
      "Only the mortgage lender",
      "Only the Attorney General"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Applications can be made by trustees and beneficiaries (persons with an interest) under the statutory scheme.",
      whyWrong: [
        "Beneficiaries can apply too.",
        "—",
        "Lenders may have their own remedies, but not exclusively.",
        "Attorney General is mainly relevant to charities."
      ]
    }
  },
  {
    topic: "TOLATA — s15 factors (high level)",
    q: "When deciding whether to order sale/occupation arrangements, the court will consider factors including:",
    choices: [
      "The settlor’s intentions, the purposes for which the property is held, welfare of minors, and interests of secured creditors",
      "Only who paid the deposit",
      "Only the length of the relationship",
      "Only the property’s market value"
    ],
    correct: 0,
    explain: {
      whyRight:
        "TOLATA requires consideration of multiple factors (intentions/purpose, minors’ welfare, creditors’ interests, etc.).",
      whyWrong: [
        "Deposit alone is not the whole inquiry.",
        "—",
        "Relationship length is not the only or main statutory factor.",
        "Market value alone is not determinative."
      ]
    }
  },
  {
    topic: "Occupation rent — basic idea",
    q: "In co-ownership disputes, 'occupation rent' is most relevant where:",
    choices: [
      "One co-owner is excluded and the other enjoys sole occupation, raising equitable accounting adjustments",
      "The mortgage lender raises interest rates",
      "A tenant fails to pay rent under an AST",
      "The property is a commercial lease"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Occupation rent can arise in equitable accounting where one co-owner is excluded from occupation while another solely occupies/benefits.",
      whyWrong: [
        "That’s lender/contract, not co-owner accounting.",
        "—",
        "AST rent is landlord-tenant law.",
        "Commercial leases are different."
      ]
    }
  },
  {
    topic: "Equitable accounting — improvements",
    q: "A co-owner pays for major improvements increasing the property’s value. In equitable accounting, the court may:",
    choices: [
      "Ignore improvements entirely",
      "Allow a credit/allowance reflecting the increased value attributable to the improvements (fact-sensitive)",
      "Automatically transfer legal title to that co-owner",
      "Always split the uplift equally regardless of contribution"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Equitable accounting may allow credits for improvements that enhance value, depending on circumstances.",
      whyWrong: [
        "Courts do not always ignore improvements.",
        "—",
        "Legal title does not automatically change.",
        "It is not always equal; it is fact-sensitive."
      ]
    }
  },
  {
    topic: "Proprietary estoppel — overlap",
    q: "Which elements best describe proprietary estoppel (often relevant in family home disputes)?",
    choices: [
      "Offer, acceptance, consideration",
      "Assurance, reliance, detriment, and unconscionability",
      "Duty, breach, causation",
      "Writing, witnessing, registration"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Proprietary estoppel typically requires an assurance, reliance, detriment, and that it would be unconscionable to go back on it.",
      whyWrong: [
        "Contract concepts are not the test.",
        "—",
        "Tort concepts are not the test.",
        "Those are not the estoppel elements."
      ]
    }
  },
  {
    topic: "Joint names — evidence of separate finances",
    q: "In joint names cases, which fact might support rebutting the 50/50 presumption?",
    choices: [
      "The parties always kept finances rigidly separate and contributed very unequally over time",
      "They had children",
      "They lived in the home together",
      "They both attended the same school"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Strong evidence of separate finances and markedly unequal contributions can support an inference that equal shares were not intended.",
      whyWrong: [
        "Children may be relevant context but do not alone rebut shares.",
        "—",
        "Cohabitation is common and not enough alone.",
        "School is irrelevant."
      ]
    }
  },
  {
    topic: "Sole name — indirect contributions",
    q: "Which statement is most accurate about indirect contributions (e.g., general household expenses) in sole-name cases?",
    choices: [
      "They always create a beneficial interest automatically",
      "They may be relevant depending on approach and facts, but are often weaker than direct purchase/mortgage contributions",
      "They are always irrelevant",
      "They automatically fix shares at 50/50"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Indirect contributions can matter, but historically are weaker evidence than direct acquisition contributions; modern cases may take a broader view depending on facts.",
      whyWrong: [
        "Not automatic.",
        "—",
        "Too absolute; context can matter.",
        "No automatic 50/50 rule."
      ]
    }
  },
  {
    topic: "Express declaration — challenging it",
    q: "If there is an express declaration of trust of shares, when is the court most likely to depart from it?",
    choices: [
      "Whenever one party later regrets it",
      "Where it can be set aside for reasons like fraud, misrepresentation, or undue influence",
      "Whenever contributions later become unequal",
      "Whenever the property value rises"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Express declarations are generally conclusive unless set aside on recognised vitiating factors (e.g., fraud/undue influence).",
      whyWrong: [
        "Regret is not a legal ground.",
        "—",
        "Unequal later contributions do not automatically undo a declaration.",
        "Value rise is irrelevant."
      ]
    }
  },
  {
    topic: "Commercial vs domestic context",
    q: "Why are resulting trusts more common in commercial/non-domestic co-ownership disputes?",
    choices: [
      "Because constructive trusts are illegal commercially",
      "Because courts often focus more on contributions and less on domestic-style whole-course-of-dealing intentions in commercial settings",
      "Because TOLATA does not apply commercially",
      "Because commercial parties must always sign an express declaration"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In commercial contexts, courts are often more willing to infer beneficial shares from contributions rather than domestic intention-based reasoning.",
      whyWrong: [
        "Constructive trusts are not illegal in commercial contexts.",
        "—",
        "TOLATA still applies to trusts of land generally.",
        "There is no universal express declaration requirement."
      ]
    }
  },
  {
    topic: "Mortgage payments — after separation",
    q: "After separation, one co-owner pays the entire mortgage. In a typical family home dispute, this is most relevant to:",
    choices: [
      "Criminal liability",
      "Possible equitable accounting adjustments and potentially evidence of changed intentions (fact-sensitive)",
      "Automatic transfer of legal title",
      "Automatic severance of the joint tenancy at law"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Post-separation payments may support accounting adjustments and, in some cases, inference of changed intentions as to shares.",
      whyWrong: [
        "Not criminal by default.",
        "—",
        "Legal title does not automatically transfer.",
        "Severance affects beneficial interest; not 'automatic at law'."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Trust Law | Chapter 8 | Family Home Trusts",
    subtitle: "Common intention, joint ownership, and shares.",
    questions: questions
  };
})();
  
