(() => {
  const questions = [
  {
    topic: "IHT — headline rate",
    q: "What is the usual rate of Inheritance Tax charged on the value above the nil-rate band?",
    choices: ["20%", "36%", "40%", "45%"],
    correct: 2,
    explain: {
      whyRight:
        "The usual headline IHT rate on the value above the tax-free threshold is 40%.",
      whyWrong: [
        "20% is commonly associated with lifetime chargeable transfers into trust, not the usual death rate.",
        "36% is the reduced rate that may apply where at least 10% of the net estate is left to charity.",
        "—",
        "45% is not the usual headline IHT rate."
      ]
    }
  },
  {
    topic: "IHT — reduced rate for charity",
    q: "When might a reduced IHT rate of 36% apply?",
    choices: [
      "Whenever the will names a charity as a beneficiary",
      "If 10% or more of the net estate is left to charity (meeting the reduced-rate rules)",
      "If the deceased made gifts within 7 years",
      "If the estate is below the nil-rate band"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A reduced rate of 36% can apply if the estate leaves at least 10% of the net estate to charity (under the reduced-rate rules).",
      whyWrong: [
        "A charity gift is exempt, but the 36% reduced rate depends on the 10% threshold and rules.",
        "—",
        "Gifts within 7 years do not automatically trigger the 36% rate.",
        "If the estate is below the threshold, no IHT is due anyway."
      ]
    }
  },
  {
    topic: "Nil-rate band — amount",
    q: "What is the basic nil-rate band (NRB) figure commonly used in IHT calculations?",
    choices: ["£175,000", "£250,000", "£325,000", "£500,000"],
    correct: 2,
    explain: {
      whyRight:
        "The basic nil-rate band (NRB) is £325,000.",
      whyWrong: [
        "£175,000 is the maximum residence nil-rate band (RNRB) figure, not the basic NRB.",
        "£250,000 is not the standard NRB.",
        "—",
        "£500,000 is not the standard basic NRB."
      ]
    }
  },
  {
    topic: "Residence nil-rate band — amount",
    q: "What is the maximum residence nil-rate band (RNRB) figure (subject to conditions)?",
    choices: ["£100,000", "£125,000", "£175,000", "£325,000"],
    correct: 2,
    explain: {
      whyRight:
        "The maximum RNRB is £175,000 (subject to conditions and taper).",
      whyWrong: [
        "£100,000 can be the RNRB used where the home is worth less than the maximum, but it’s not the maximum.",
        "£125,000 is a historic maximum for earlier tax years, not the current max figure used here.",
        "—",
        "£325,000 is the basic NRB, not the RNRB."
      ]
    }
  },
  {
    topic: "RNRB — key condition",
    q: "Which is required to access the residence nil-rate band (RNRB) on death?",
    choices: [
      "Any property is left to anyone in the will",
      "A qualifying residence is left to direct descendants",
      "The deceased made no lifetime gifts",
      "The estate must be under £1 million"
    ],
    correct: 1,
    explain: {
      whyRight:
        "RNRB is aimed at passing a qualifying residence to direct descendants.",
      whyWrong: [
        "Not every gift of property qualifies; it must be a qualifying residence and go to direct descendants.",
        "—",
        "Lifetime gifts do not automatically prevent RNRB.",
        "RNRB does not require the estate to be under £1 million (though tapering applies above £2m)."
      ]
    }
  },
  {
    topic: "RNRB taper — threshold",
    q: "At what net estate value does RNRB begin to taper away (in the standard rule set)?",
    choices: ["£1 million", "£1.5 million", "£2 million", "£2.5 million"],
    correct: 2,
    explain: {
      whyRight:
        "RNRB is tapered once the net estate exceeds £2 million.",
      whyWrong: [
        "£1 million is not the standard taper threshold.",
        "£1.5 million is not the standard taper threshold.",
        "—",
        "£2.5 million is above the taper threshold but not where taper starts."
      ]
    }
  },
  {
    topic: "RNRB taper — mechanism",
    q: "How is RNRB tapered once the net estate exceeds £2 million?",
    choices: [
      "Reduced £1 for every £1 over £2m",
      "Reduced £1 for every £2 over £2m",
      "Reduced by 10% for every £100,000 over £2m",
      "It is removed entirely as soon as the estate exceeds £2m by £1"
    ],
    correct: 1,
    explain: {
      whyRight:
        "RNRB is reduced by £1 for every £2 that the net estate exceeds £2 million.",
      whyWrong: [
        "This overstates the taper speed.",
        "—",
        "That is not the rule.",
        "RNRB tapers, it does not disappear instantly the moment £2m is exceeded."
      ]
    }
  },
  {
    topic: "NRB vs RNRB — lifetime gifts",
    q: "Which statement is most accurate about lifetime gifts and the two nil-rate bands?",
    choices: [
      "Both NRB and RNRB can be used against lifetime gifts within 7 years",
      "NRB can be used against lifetime gifts within 7 years, but RNRB cannot",
      "Only RNRB can be used against lifetime gifts",
      "Neither NRB nor RNRB can be used against lifetime gifts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "NRB can be set against chargeable lifetime transfers/failed PETs. RNRB applies to qualifying residence passing on death, not to lifetime gifts.",
      whyWrong: [
        "RNRB is not used against lifetime gifts.",
        "—",
        "This reverses the position.",
        "NRB can apply to lifetime transfers/gifts in the 7-year cumulation."
      ]
    }
  },
  {
    topic: "7-year rule — PET basic",
    q: "A PET (gift to an individual) is generally free of IHT if the donor:",
    choices: [
      "Survives 3 years from the gift",
      "Survives 5 years from the gift",
      "Survives 7 years from the gift",
      "Survives 10 years from the gift"
    ],
    correct: 2,
    explain: {
      whyRight:
        "No IHT is due on most gifts to individuals if the donor survives 7 years (subject to special rules such as trusts).",
      whyWrong: [
        "3 years may be relevant to taper relief bands, but not full exemption.",
        "5 years is not the full exemption point.",
        "—",
        "10 years is not the standard PET survival period."
      ]
    }
  },
  {
    topic: "Taper relief — when it starts",
    q: "Taper relief on gifts (in the standard rules) applies when death occurs:",
    choices: [
      "Within 0 to 3 years of the gift",
      "Between 3 and 7 years after the gift",
      "After 7 years of the gift",
      "Only if the gift was to a spouse"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Taper relief affects the tax on certain gifts made 3 to 7 years before death.",
      whyWrong: [
        "Gifts within 3 years are taxed at the full 40% rate (if chargeable).",
        "—",
        "After 7 years, most PETs fall out of account.",
        "Spouse gifts are typically exempt (subject to conditions)."
      ]
    }
  },
  {
    topic: "Taper relief — rate band 3–4 years",
    q: "If a chargeable gift was made 3 to 4 years before death, what tapered rate applies to the gift (standard table)?",
    choices: ["40%", "32%", "24%", "16%"],
    correct: 1,
    explain: {
      whyRight:
        "The tapered rate for 3 to 4 years is 32%.",
      whyWrong: [
        "40% is the full rate for gifts within 3 years (if chargeable).",
        "—",
        "24% is the rate for 4 to 5 years.",
        "16% is the rate for 5 to 6 years."
      ]
    }
  },
  {
    topic: "Taper relief — rate band 4–5 years",
    q: "If a chargeable gift was made 4 to 5 years before death, what tapered rate applies (standard table)?",
    choices: ["32%", "24%", "16%", "8%"],
    correct: 1,
    explain: {
      whyRight:
        "The tapered rate for 4 to 5 years is 24%.",
      whyWrong: [
        "32% is for 3 to 4 years.",
        "—",
        "16% is for 5 to 6 years.",
        "8% is for 6 to 7 years."
      ]
    }
  },
  {
    topic: "Taper relief — rate band 5–6 years",
    q: "If a chargeable gift was made 5 to 6 years before death, what tapered rate applies (standard table)?",
    choices: ["24%", "16%", "8%", "0%"],
    correct: 1,
    explain: {
      whyRight:
        "The tapered rate for 5 to 6 years is 16%.",
      whyWrong: [
        "24% is for 4 to 5 years.",
        "—",
        "8% is for 6 to 7 years.",
        "0% applies once 7 years or more have passed."
      ]
    }
  },
  {
    topic: "Taper relief — rate band 6–7 years",
    q: "If a chargeable gift was made 6 to 7 years before death, what tapered rate applies (standard table)?",
    choices: ["16%", "8%", "0%", "40%"],
    correct: 1,
    explain: {
      whyRight:
        "The tapered rate for 6 to 7 years is 8%.",
      whyWrong: [
        "16% is for 5 to 6 years.",
        "—",
        "0% is once 7 or more years have passed.",
        "40% is the full rate (typically within 3 years if chargeable)."
      ]
    }
  },
  {
    topic: "Annual exemption — amount",
    q: "What is the annual exemption for lifetime gifts (standard allowance) per tax year?",
    choices: ["£250", "£1,000", "£3,000", "£5,000"],
    correct: 2,
    explain: {
      whyRight:
        "The annual exemption is £3,000 per tax year (with limited carry forward).",
      whyWrong: [
        "£250 is the small gifts allowance per person (if no other allowance used for that person).",
        "£1,000 is the wedding gift allowance for 'any other person'.",
        "—",
        "£5,000 is a wedding gift allowance for a child, not the annual exemption."
      ]
    }
  },
  {
    topic: "Annual exemption — carry forward",
    q: "Unused annual exemption can generally be carried forward:",
    choices: [
      "Indefinitely",
      "For 1 tax year only",
      "For 3 tax years",
      "Never"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You can carry forward unused annual exemption, but only for one tax year.",
      whyWrong: [
        "It is not indefinite.",
        "—",
        "Not for 3 years under the standard rule.",
        "Carry forward is permitted for one year."
      ]
    }
  },
  {
    topic: "Small gifts allowance — rule",
    q: "Which best describes the small gifts allowance?",
    choices: [
      "Up to £250 total per year across all recipients",
      "Up to £250 per person per tax year, provided no other allowance is used on the same person",
      "Up to £250 per person per month",
      "Only available for gifts to charities"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The small gifts allowance allows gifts of up to £250 per person per tax year, but you cannot also use another allowance for that same person.",
      whyWrong: [
        "It is per person, not a total cap across all recipients.",
        "—",
        "It is not a monthly allowance.",
        "Charity gifts are separately exempt."
      ]
    }
  },
  {
    topic: "Wedding gifts — amounts",
    q: "What is the maximum wedding/civil partnership gift allowance to a child (standard table)?",
    choices: ["£1,000", "£2,500", "£3,000", "£5,000"],
    correct: 3,
    explain: {
      whyRight:
        "The wedding gift allowance to a child is up to £5,000.",
      whyWrong: [
        "£1,000 is the allowance for 'any other person'.",
        "£2,500 is the allowance for a grandchild or great-grandchild.",
        "£3,000 is the annual exemption (general).",
        "—"
      ]
    }
  },
  {
    topic: "Normal expenditure out of income — conditions",
    q: "Which is required for 'normal expenditure out of income' to be exempt?",
    choices: [
      "Payments must come from regular income and be affordable after usual living costs",
      "Payments must be made only once per year",
      "Payments must be under £3,000 per year",
      "Payments must be made only to children"
    ],
    correct: 0,
    explain: {
      whyRight:
        "To qualify, gifts must be part of normal expenditure, paid out of regular income, and the donor must be able to afford them after usual living costs.",
      whyWrong: [
        "—",
        "There is no once-a-year requirement.",
        "There is no fixed £3,000 cap for this exemption.",
        "It is not limited to children."
      ]
    }
  },
  {
    topic: "Spouse/civil partner gifts — general point",
    q: "Which statement is most accurate as a general rule of thumb for IHT on gifts to a spouse/civil partner?",
    choices: [
      "They are always chargeable at 40%",
      "They are generally exempt (subject to the standard conditions and domicile/permanence rules)",
      "They are PETs subject to the 7-year rule",
      "They are only exempt up to £3,000 per year"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Transfers between spouses/civil partners are generally exempt from IHT (subject to conditions in the rules).",
      whyWrong: [
        "They are not generally taxed at 40%.",
        "—",
        "They are not treated as PETs in the usual way because they are exempt.",
        "The £3,000 cap is the annual exemption for other gifts, not the spouse exemption."
      ]
    }
  },
  {
    topic: "Charity gifts — exemption vs reduced rate",
    q: "Which is most accurate about gifts to charity in IHT?",
    choices: [
      "Charity gifts are taxed at 40%",
      "Charity gifts are exempt, and leaving 10%+ of net estate to charity may reduce the IHT rate on the rest to 36%",
      "Charity gifts are PETs subject to 7-year rule",
      "Charity gifts use up the RNRB first"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Charity gifts are generally exempt, and a 10%+ charitable legacy can trigger a reduced 36% rate on relevant parts of the estate.",
      whyWrong: [
        "They are not taxed at 40% in the usual approach.",
        "—",
        "Charity gifts are exempt rather than PETs.",
        "RNRB is about a qualifying residence passing to direct descendants."
      ]
    }
  },
  {
    topic: "Gifts with reservation — concept",
    q: "A 'gift with reservation' most accurately refers to:",
    choices: [
      "A gift made in a will",
      "A gift where the donor continues to benefit from the asset after giving it away, so it is still treated as part of the estate",
      "A gift that can be revoked at any time",
      "A gift under £250"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the donor gives away an asset but still benefits from it (e.g., gives away home but continues living there), it can remain in the estate for IHT purposes.",
      whyWrong: [
        "A will gift is part of the estate, not a lifetime gift with reservation.",
        "—",
        "Revocability is not the defining feature.",
        "Small-gift allowance is unrelated."
      ]
    }
  },
  {
    topic: "Cumulation — NRB use",
    q: "In working out IHT where there were gifts within 7 years of death, the NRB is generally used:",
    choices: [
      "First against the death estate only, ignoring lifetime gifts",
      "First against chargeable lifetime transfers/failed PETs within 7 years, then against the death estate",
      "Only against the qualifying residence",
      "Only against gifts, never against the estate"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Lifetime transfers within 7 years are brought into account; NRB is used against those first, with any remaining NRB available against the death estate.",
      whyWrong: [
        "Lifetime transfers are not ignored in the cumulation.",
        "—",
        "NRB is not restricted to the home (that’s RNRB territory).",
        "Any remaining NRB can be used against the estate."
      ]
    }
  },
  {
    topic: "Who pays tax on gifts — general",
    q: "Which is the best general statement about who pays IHT on chargeable gifts within 7 years?",
    choices: [
      "The estate always pays, no matter what",
      "Usually the estate pays, but once gifts exceed the NRB within 7 years, recipients may have to pay IHT on their gifts",
      "Recipients always pay regardless of value",
      "No one pays tax on gifts ever"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Often the estate pays, but where gifts exceed the NRB in the 7-year window, donees can be liable for IHT on their gifts.",
      whyWrong: [
        "Not always once thresholds are exceeded.",
        "—",
        "Recipient liability is not universal regardless of value.",
        "Gifts can be taxed depending on timing/value/exemptions."
      ]
    }
  },
  {
    topic: "RNRB — direct descendants definition (spotter)",
    q: "Which is most likely to count as a 'direct descendant' for RNRB purposes (as a broad exam-safe concept)?",
    choices: ["A close friend", "A sibling", "A child or grandchild", "A colleague"],
    correct: 2,
    explain: {
      whyRight:
        "Direct descendants generally include children and grandchildren (lineal descendants).",
      whyWrong: [
        "Friends are not direct descendants.",
        "Siblings are not lineal descendants.",
        "—",
        "Colleagues are not direct descendants."
      ]
    }
  },
  {
    topic: "Quick calculation — basic IHT",
    q: "An estate is worth £500,000 and only the basic NRB (£325,000) applies. Ignoring reliefs, what IHT is due at 40%?",
    choices: ["£70,000", "£175,000", "£40,000", "£160,000"],
    correct: 0,
    explain: {
      whyRight:
        "Taxable = £500,000 − £325,000 = £175,000. IHT at 40% = £70,000.",
      whyWrong: [
        "—",
        "£175,000 is the taxable amount, not the tax.",
        "£40,000 is not 40% of £175,000.",
        "£160,000 would imply taxing £400,000, which is not correct here."
      ]
    }
  },
  {
    topic: "RNRB — home value cap",
    q: "If the home left to direct descendants is worth less than the maximum RNRB, the RNRB is generally:",
    choices: [
      "Still the full maximum RNRB",
      "Limited to the value of the home actually inherited by direct descendants",
      "Transferred to cover lifetime gifts instead",
      "Automatically converted into NRB"
    ],
    correct: 1,
    explain: {
      whyRight:
        "RNRB is generally limited to the value of the qualifying residence interest actually inherited by direct descendants (up to the maximum).",
      whyWrong: [
        "You cannot always claim the full maximum if the qualifying residence value is lower.",
        "—",
        "RNRB does not apply to lifetime gifts.",
        "RNRB does not automatically become NRB."
      ]
    }
  },
  {
    topic: "Taper relief — common trap",
    q: "Which statement best reflects taper relief?",
    choices: [
      "It reduces the value of the gift",
      "It reduces the tax payable on a chargeable gift (not the gift value), depending on how long between gift and death",
      "It applies to gifts made more than 7 years before death",
      "It applies only to gifts to charities"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Taper relief reduces the IHT rate/tax on certain chargeable gifts depending on time between gift and death; it does not change the gift’s value.",
      whyWrong: [
        "It does not reduce the gift’s value.",
        "—",
        "Gifts over 7 years old generally fall out of account.",
        "Charity gifts are typically exempt anyway."
      ]
    }
  },
  {
    topic: "Exemptions — mixing allowances",
    q: "Which is correct about combining the small gifts allowance with other allowances for the same recipient?",
    choices: [
      "You can always combine small gifts with any other allowance for the same person",
      "You cannot use the small gifts allowance for a person if you’ve used another allowance for that same person in that tax year",
      "Small gifts allowance is only for spouses",
      "Small gifts allowance replaces taper relief"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The £250 small-gifts allowance cannot be used for a person if you have used another allowance for that person in the same tax year.",
      whyWrong: [
        "That contradicts the rule.",
        "—",
        "Spouse gifts are generally exempt under a different rule set.",
        "Small gifts and taper relief are unrelated."
      ]
    }
  },
  {
    topic: "Estate vs gift — definition check",
    q: "Which best describes the 'estate' for IHT purposes (exam-level)?",
    choices: [
      "Only cash in bank accounts",
      "All money, property, and possessions owned at death (subject to debts and liabilities and relevant rules)",
      "Only the home",
      "Only assets mentioned in the will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The estate broadly covers the deceased’s assets at death (money, property, possessions), with liabilities deducted and relevant IHT rules applied.",
      whyWrong: [
        "It is broader than cash.",
        "—",
        "It is broader than just the home.",
        "Assets can be part of the estate even if not mentioned in the will (e.g., residue/partial intestacy)."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Wills and Estates | Chapter 10 | Inheritance Tax",
    subtitle: "Rates, thresholds, and key reliefs basics.",
    questions: questions
  };
})();
  
