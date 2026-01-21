(() => {
  const questions = [
  {
    topic: "Grant of Representation — purpose",
    q: "What is the main function of a Grant of Representation?",
    choices: [
      "To decide who should inherit under intestacy",
      "To give legal authority to administer the deceased’s estate assets",
      "To validate all lifetime gifts made by the deceased",
      "To transfer all jointly owned property into the estate"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A grant is the court document that authorises the personal representative to collect, deal with, and distribute the estate assets.",
      whyWrong: [
        "Intestacy rules determine entitlement, but the grant is about authority to administer assets.",
        "—",
        "Lifetime gifts are separate from the grant’s function.",
        "Joint tenancy property typically passes by survivorship, not into the estate."
      ]
    }
  },
  {
    topic: "Types of grant — will present",
    q: "Where the deceased left a valid will appointing executors, the usual grant is:",
    choices: [
      "Letters of Administration",
      "Grant of Probate",
      "A statutory legacy certificate",
      "A rectification order"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If there is a will and an executor applies, the usual grant is a Grant of Probate.",
      whyWrong: [
        "Letters of Administration is typically where there is no will (or no executor able/willing, in which case it may be with will annexed).",
        "—",
        "No such certificate governs grants.",
        "Rectification is a court remedy for correcting a will, not a grant type."
      ]
    }
  },
  {
    topic: "Types of grant — no will",
    q: "Where the deceased died without a will, the usual grant is:",
    choices: [
      "Grant of Probate",
      "Letters of Administration",
      "A codicil",
      "A deed of variation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If there is no will, an eligible person applies for Letters of Administration.",
      whyWrong: [
        "Grant of Probate is for wills/executors.",
        "—",
        "A codicil amends a will; it is not a grant.",
        "A deed of variation changes distributions after death; it is not a grant."
      ]
    }
  },
  {
    topic: "Eligibility — will case",
    q: "If there’s a will, who can generally apply for probate?",
    choices: [
      "Any beneficiary, even if not connected to the will",
      "An executor named in the will (or codicil) (subject to capacity/willingness)",
      "Only the deceased’s spouse",
      "Only the Probate Registry"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where there is a will, the executor(s) named in the will/codicil can apply.",
      whyWrong: [
        "Beneficiaries do not automatically have priority if executors are able to act.",
        "—",
        "A spouse is not automatically the applicant if not appointed executor.",
        "The Registry issues the grant; it does not apply for it."
      ]
    }
  },
  {
    topic: "Eligibility — intestacy case",
    q: "If there is no will, who is generally entitled to apply for the grant?",
    choices: [
      "The closest living relative/entitled person under intestacy rules",
      "Any friend of the deceased",
      "Any creditor",
      "The witnesses to the deceased’s signature"
    ],
    correct: 0,
    explain: {
      whyRight:
        "On intestacy, the applicant is typically the person(s) entitled under the statutory scheme (often described as the closest living relative).",
      whyWrong: [
        "—",
        "Friends do not have default priority under intestacy.",
        "Creditors are not the default administrators (though they may have remedies).",
        "Witnesses have no priority role in administration."
      ]
    }
  },
  {
    topic: "Need for a grant — not always required",
    q: "Which statement is most accurate about whether you always need probate?",
    choices: [
      "A grant is always required for every death",
      "A grant is not always required; it depends on the asset holders and what assets exist",
      "A grant is only required if there is a will",
      "A grant is never required if there is a spouse"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Whether you need a grant depends on the assets and whether institutions require it (and some assets pass outside the estate).",
      whyWrong: [
        "Many estates can be administered without a grant.",
        "—",
        "Grants can be needed with or without a will.",
        "Spouse status does not remove grant requirements."
      ]
    }
  },
  {
    topic: "Pre-application step — valuing the estate",
    q: "Before applying for probate, you usually need to:",
    choices: [
      "Distribute the estate to beneficiaries",
      "Estimate/value the estate",
      "Sell all property immediately",
      "Obtain a court order for rectification"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You typically must estimate the estate’s value before applying (and for IHT reporting decisions).",
      whyWrong: [
        "You generally cannot distribute before authority and asset collection.",
        "—",
        "Sale is not always needed and can be later.",
        "Rectification is only in specific disputes/errors."
      ]
    }
  },
  {
    topic: "Application routes — online vs post",
    q: "Which is most accurate about applying for probate in England & Wales?",
    choices: [
      "You can only apply by post",
      "You can apply online or by post",
      "You can only apply through a solicitor",
      "You can apply only at a hearing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "GOV.UK confirms probate can be applied for online or by post.",
      whyWrong: [
        "Post is possible, but not the only route.",
        "—",
        "You can apply yourself; a solicitor is optional.",
        "Non-contentious probate is typically an administrative process, not a hearing."
      ]
    }
  },
  {
    topic: "Forms — will present",
    q: "Which form is used to apply by post where the deceased left a will?",
    choices: ["PA1A", "PA1P", "IHT205", "IHT400"],
    correct: 1,
    explain: {
      whyRight:
        "PA1P is the probate application form used (by post) where the deceased left a will.",
      whyWrong: [
        "PA1A is for no will (letters of administration).",
        "—",
        "IHT205 relates to IHT reporting for certain deaths/estates, not the probate application itself.",
        "IHT400 is an Inheritance Tax account, not the probate application form."
      ]
    }
  },
  {
    topic: "Forms — no will",
    q: "Which form is used to apply by post where the deceased did not leave a will?",
    choices: ["PA1P", "PA1A", "IHT400", "NCPR"],
    correct: 1,
    explain: {
      whyRight:
        "PA1A is used to apply for letters of administration where there is no will.",
      whyWrong: [
        "PA1P is for where there is a will.",
        "—",
        "IHT400 is for Inheritance Tax reporting in relevant cases.",
        "NCPR refers to the rules framework, not an application form."
      ]
    }
  },
  {
    topic: "Documents — will and codicils",
    q: "In a will case, what is typically required to be sent with the probate application?",
    choices: [
      "Only a photocopy of the will",
      "The last original will and any codicils",
      "Only a witness statement",
      "Only bank statements"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The probate application typically requires the original will and any codicils (plus other required documents).",
      whyWrong: [
        "Photocopies are often insufficient where the original is required.",
        "—",
        "A witness statement is not the standard substitute for the will itself.",
        "Bank statements may be relevant to valuation but are not the key core document."
      ]
    }
  },
  {
    topic: "Documents — death certificate",
    q: "Which document is typically required for the probate application?",
    choices: [
      "A marriage certificate only",
      "An official copy of the death certificate (or a coroner’s interim certificate)",
      "A passport only",
      "A deed poll"
    ],
    correct: 1,
    explain: {
      whyRight:
        "An official copy death certificate (or interim certificate) is commonly required for the application.",
      whyWrong: [
        "Marriage certificates are not the standard required document for the grant.",
        "—",
        "A passport is not the standard substitute.",
        "Deed poll is irrelevant."
      ]
    }
  },
  {
    topic: "IHT reporting — when full account is needed",
    q: "If full details of the estate must be reported to HMRC before probate, which form is used?",
    choices: ["IHT205", "IHT400", "PA1P", "PA1A"],
    correct: 1,
    explain: {
      whyRight:
        "IHT400 is the Inheritance Tax account used where IHT is due or a full account is required.",
      whyWrong: [
        "IHT205 is associated with certain excepted estate reporting for deaths up to 31 December 2021.",
        "—",
        "PA1P/PA1A are probate application forms, not HMRC IHT accounts."
      ]
    }
  },
  {
    topic: "IHT reporting — timing point",
    q: "Which is most accurate about IHT reporting and probate?",
    choices: [
      "You always apply for probate first, then do IHT later",
      "Where a full IHT account is needed, you generally submit IHT400 before applying for probate",
      "IHT forms are optional",
      "IHT reporting is only required if the estate includes land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "GOV.UK guidance indicates that where full details are required, IHT400 is submitted before applying for probate.",
      whyWrong: [
        "In full-account cases, IHT reporting precedes the probate application.",
        "—",
        "IHT reporting is not simply optional if required by the rules.",
        "Land is not the sole trigger; value/structure and rules determine reporting."
      ]
    }
  },
  {
    topic: "Excepted estates — deaths from 1 Jan 2022",
    q: "For many excepted estates where the person died on or after 1 January 2022, the IHT information is generally:",
    choices: [
      "Reported within the probate application rather than on IHT205",
      "Always reported on IHT205",
      "Never reported at all",
      "Reported only after the grant is issued"
    ],
    correct: 0,
    explain: {
      whyRight:
        "For deaths on/after 1 January 2022, qualifying excepted estate information is generally captured in the probate application (PA1A/PA1P), rather than using IHT205.",
      whyWrong: [
        "—",
        "IHT205 relates to earlier death-date reporting rules for certain excepted estates.",
        "Excepted estates still involve reporting if probate is needed.",
        "Reporting is not postponed until after the grant where the system requires it beforehand."
      ]
    }
  },
  {
    topic: "Excepted estates — earlier deaths",
    q: "IHT205 (print and post) is particularly associated with which death-date window (for the relevant category)?",
    choices: [
      "Deaths on or after 1 January 2022",
      "Deaths on or before 31 December 2021 (for certain excepted estates)",
      "Only deaths before 1900",
      "Only deaths where IHT is definitely payable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "GOV.UK guidance links IHT205 reporting to deaths on or before 31 December 2021 for the relevant excepted estate route.",
      whyWrong: [
        "For 2022 onwards, reporting is generally via the probate application for qualifying excepted estates.",
        "—",
        "Not limited to historical deaths.",
        "IHT205 is generally for estates unlikely to pay IHT (subject to conditions), not where IHT is definitely payable."
      ]
    }
  },
  {
    topic: "Common form vs contentious",
    q: "Non-contentious probate (often called 'common form') is best described as:",
    choices: [
      "A probate dispute trial about will validity",
      "The standard administrative process for issuing grants where there is no dispute",
      "A criminal hearing about fraud",
      "A negotiation between beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Non-contentious probate is the usual process for issuing grants in the absence of disputes, governed by the Non-Contentious Probate Rules.",
      whyWrong: [
        "That describes contentious probate.",
        "—",
        "Probate is civil, not criminal in the ordinary course.",
        "Negotiation may happen, but it is not what defines non-contentious probate."
      ]
    }
  },
  {
    topic: "Rules framework",
    q: "Which set of rules primarily governs non-contentious probate procedure in England & Wales?",
    choices: [
      "CPR Part 7",
      "Non-Contentious Probate Rules",
      "Land Registration Rules",
      "SRA Accounts Rules"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Non-contentious probate is governed by the Non-Contentious Probate Rules (as amended).",
      whyWrong: [
        "CPR may be relevant to claims, but non-contentious probate has its own rules set.",
        "—",
        "Land registration is separate.",
        "SRA Accounts Rules are for solicitors’ accounts."
      ]
    }
  },
  {
    topic: "Executor role — will vs entitlement",
    q: "Which statement is most accurate?",
    choices: [
      "Only beneficiaries can be executors",
      "Executors apply for probate because they are appointed in the will, not because they are beneficiaries",
      "Executors automatically inherit the entire estate",
      "Executors have no duties after the grant is issued"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Executors derive authority from appointment in the will; they may or may not be beneficiaries.",
      whyWrong: [
        "Executors can be non-beneficiaries.",
        "—",
        "Executors do not automatically inherit everything.",
        "Executors’ duties continue through collecting assets, paying liabilities, and distributing."
      ]
    }
  },
  {
    topic: "Administrator role — intestacy",
    q: "An 'administrator' in probate most accurately refers to:",
    choices: [
      "A person appointed by the will",
      "A person entitled to act where there is no executor (commonly in intestacy)",
      "A court clerk who stamps the grant",
      "A trustee of a pension scheme"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Administrators are personal representatives appointed under a grant of letters of administration (often in intestacy or where no executor can act).",
      whyWrong: [
        "Appointment by will is the executor concept.",
        "—",
        "Clerks issue/process documents but are not the personal representative.",
        "Pension trustees are separate from estate PRs."
      ]
    }
  },
  {
    topic: "Estate planning — assets outside estate link",
    q: "Why is 'property passing outside the estate' relevant to whether probate is needed?",
    choices: [
      "Because outside-estate assets always require probate",
      "Because if most assets pass outside the estate, a grant may not be needed for those assets",
      "Because outside-estate assets are illegal",
      "Because it eliminates inheritance tax"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If assets pass by survivorship/trust/scheme rules, they may not require a grant to transfer (though it depends on the asset holder).",
      whyWrong: [
        "They often do not require probate for transfer.",
        "—",
        "They are lawful structures.",
        "Outside-estate status does not automatically remove tax considerations."
      ]
    }
  },
  {
    topic: "Applying — who issues the grant",
    q: "Which body issues the grant in the usual non-contentious process?",
    choices: [
      "The Land Registry",
      "HM Courts & Tribunals Service (Probate Registry)",
      "HMRC",
      "The SRA"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Probate grants are issued through HMCTS (Probate Registry) in England & Wales.",
      whyWrong: [
        "Land Registry deals with land title, not probate authority.",
        "—",
        "HMRC deals with tax reporting, not issuing grants.",
        "The SRA regulates solicitors."
      ]
    }
  },
  {
    topic: "Post-grant — core duties",
    q: "After the grant is issued, the personal representative’s primary tasks usually include:",
    choices: [
      "Ignoring debts and distributing immediately",
      "Collecting assets, paying funeral/administration expenses and debts, then distributing to those entitled",
      "Only valuing the estate",
      "Only challenging the will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Core administration: collect assets, settle liabilities, then distribute to beneficiaries/intestacy heirs.",
      whyWrong: [
        "Debts/expenses must be handled before final distribution.",
        "—",
        "Valuation is important but not the only task.",
        "Challenging the will is contentious probate, not a standard duty."
      ]
    }
  },
  {
    topic: "Application — will validity not 'decided' here",
    q: "In non-contentious probate, the Probate Registry generally:",
    choices: [
      "Conducts a full trial on will validity in every case",
      "Issues grants on the papers where there is no dispute, subject to checks and requirements",
      "Distributes the estate itself",
      "Rewrites unclear will clauses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Non-contentious probate is generally a paper-based administrative process where there is no dispute.",
      whyWrong: [
        "Trials are for contentious cases.",
        "—",
        "PRs distribute, not the Registry.",
        "Construction/rectification are separate legal processes."
      ]
    }
  },
  {
    topic: "Form choice — quick test",
    q: "Which pairing is correct?",
    choices: [
      "PA1A = will case; PA1P = no will case",
      "PA1P = will case; PA1A = no will case",
      "PA1P = IHT reporting; PA1A = Land Registry",
      "PA1A = IHT400; PA1P = IHT205"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PA1P is used where there is a will; PA1A is used where there is no will.",
      whyWrong: [
        "This reverses the forms.",
        "—",
        "Neither form is Land Registry; both are probate application forms.",
        "These are different HMRC forms; PA1A/PA1P are HMCTS probate application forms."
      ]
    }
  },
  {
    topic: "IHT400 — when relevant (concept)",
    q: "Which is most accurate about when IHT400 might be needed?",
    choices: [
      "Only when the estate has a property",
      "When IHT is payable or a full account is required (i.e., not an excepted estate)",
      "Whenever there is a will",
      "Whenever there is a surviving spouse"
    ],
    correct: 1,
    explain: {
      whyRight:
        "IHT400 is used where IHT is payable or a full Inheritance Tax account is required (i.e., the estate does not qualify as excepted).",
      whyWrong: [
        "Property alone is not the trigger.",
        "—",
        "A will does not determine IHT reporting category by itself.",
        "A spouse may affect reliefs, but does not automatically remove full-account requirements."
      ]
    }
  },
  {
    topic: "Excepted estate — probate link",
    q: "Which is most accurate about excepted estates and reporting if probate is required?",
    choices: [
      "No reporting is ever needed for excepted estates",
      "If you apply for probate for an excepted estate, you still need to report the estimated value/info required (even if no IHT is due)",
      "You must always send IHT205 for deaths after 1 January 2022",
      "You must always send IHT400 for excepted estates"
    ],
    correct: 1,
    explain: {
      whyRight:
        "GOV.UK explains that if probate is required for an excepted estate, you still report the relevant estimated value/info (even though no IHT is payable).",
      whyWrong: [
        "Excepted estate status does not mean 'no reporting' if probate is needed.",
        "—",
        "For many deaths on/after 1 Jan 2022, reporting is captured in the probate application (not IHT205).",
        "Excepted estates are generally those where a full IHT400 is not needed (subject to rules)."
      ]
    }
  },
  {
    topic: "Grant terminology — letters of administration",
    q: "Letters of Administration are most closely associated with:",
    choices: [
      "A valid will with executors",
      "Intestacy / no will (or no executor able/willing to act)",
      "Rectifying a drafting error",
      "A dispute about capacity"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Letters of Administration are used where there is no executor able/willing to act, commonly because there is no will (intestacy).",
      whyWrong: [
        "That is the will + executor (probate) route.",
        "—",
        "Rectification is separate.",
        "Capacity disputes are contentious probate issues."
      ]
    }
  },
  {
    topic: "Common SQE trap — will doesn’t control joint tenancy",
    q: "Why might an executor still need probate even if some major assets pass outside the estate?",
    choices: [
      "Because outside-estate assets cannot be transferred without probate",
      "Because any remaining estate assets (e.g., sole bank accounts, tenancy in common share) may still require a grant to collect/transfer",
      "Because probate is required just to read the will",
      "Because probate is required only for pensions"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Even if some assets pass outside the estate, estate assets still may require a grant to be collected/transferred (depends on asset holders).",
      whyWrong: [
        "Outside-estate assets often transfer without probate (subject to the institution’s requirements).",
        "—",
        "Reading the will does not require probate.",
        "Probate is not limited to pensions."
      ]
    }
  },
  {
    topic: "Procedural source — GOV.UK guidance link",
    q: "Which is the best 'exam-safe' statement about the application process?",
    choices: [
      "It is always done in person at court",
      "It can be done online or by post, using the appropriate probate application route and providing required documents",
      "It is done through HMRC only",
      "It is done through the Land Registry only"
    ],
    correct: 1,
    explain: {
      whyRight:
        "GOV.UK confirms probate can be applied for online or by post, and the process requires proper forms/routes and documents.",
      whyWrong: [
        "It is not always in-person.",
        "—",
        "HMRC handles tax reporting, but HMCTS handles the probate grant.",
        "Land Registry is separate."
      ]
    }
  },
  {
    topic: "Non-contentious vs contentious — quick check",
    q: "A beneficiary challenges the validity of the will, alleging lack of capacity. This is best described as:",
    choices: [
      "Non-contentious probate (common form) only",
      "Contentious probate (a dispute), not the standard administrative grant process",
      "A routine PA1P application",
      "A trust dispute only"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A will validity challenge is contentious probate, not the routine non-contentious grant process.",
      whyWrong: [
        "Non-contentious probate is for undisputed grants.",
        "—",
        "PA1P is an application form; disputes require different procedures.",
        "It may involve trusts sometimes, but the core is a probate dispute."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Wills and Estates | Chapter 7 | Grants of Representation",
    subtitle: "Probate vs administration, authority, and grant types.",
    questions: questions
  };
})();
  
