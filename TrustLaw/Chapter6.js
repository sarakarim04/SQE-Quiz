(() => {
  const questions = [
  {
    topic: "Purpose trusts — general rule",
    q: "Which statement best reflects the general position on non-charitable purpose trusts?",
    choices: [
      "They are generally valid if the purpose is morally good",
      "They are generally void because there is no beneficiary with standing to enforce (beneficiary principle), unless an exception applies",
      "They are always valid if in writing",
      "They are valid if trustees are professionals"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Non-charitable purpose trusts generally fail under the beneficiary principle: there must be someone who can enforce the trust, unless it is charitable or within a narrow exception (Morice v Bishop of Durham).",
      whyWrong: [
        "Moral worth does not substitute for enforceability and legal validity.",
        "—",
        "Writing does not cure the beneficiary principle problem.",
        "Trustee professionalism does not make a purpose trust enforceable."
      ]
    }
  },
  {
    topic: "Beneficiary principle — Morice v Bishop of Durham",
    q: "What is the key principle from Morice v Bishop of Durham?",
    choices: [
      "All trusts must be charitable",
      "Every trust must have a definite object/beneficiary who can enforce it (except charities)",
      "Trustees can enforce trusts without beneficiaries",
      "Purposes are always certain"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Morice is authority for the beneficiary principle: there must be someone in whose favour the court can decree performance—charities are the main exception due to public enforcement mechanisms.",
      whyWrong: [
        "Private trusts for persons are valid and need not be charitable.",
        "—",
        "Trustees have duties, but enforcement typically requires beneficiaries or public authorities (for charities).",
        "Purposes can be uncertain and unworkable."
      ]
    }
  },
  {
    topic: "Charitable trusts — why valid",
    q: "Why can charitable purpose trusts be valid despite the beneficiary principle?",
    choices: [
      "Because charities always have named beneficiaries",
      "Because charities are enforced by public authorities (e.g., Attorney General/Charity Commission), and must satisfy public benefit",
      "Because charities are always for animals",
      "Because charitable trusts do not need certainty of subject matter"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Charitable trusts are enforced through public mechanisms and must satisfy recognised charitable purposes and public benefit, so they can exist without individual beneficiaries.",
      whyWrong: [
        "Charities need not have named individual beneficiaries.",
        "—",
        "Animal trusts are a separate narrow non-charitable exception, not ‘always charitable’.",
        "Charities still need certainty of subject matter."
      ]
    }
  },
  {
    topic: "Charities — 'exclusively charitable' requirement",
    q: "A trust is created 'to advance education and to support my friends'. Best analysis?",
    choices: [
      "It is charitable because education is charitable",
      "It risks failing as a charitable trust because it includes a non-charitable purpose (supporting friends), unless severable/incidental",
      "It is automatically saved by cy-près",
      "It is valid as a non-charitable purpose trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "To be charitable, the purposes must be exclusively charitable. A non-charitable purpose mixed in can prevent charitable status unless it is merely ancillary/incidental or severable.",
      whyWrong: [
        "A mixed-purpose trust is not automatically charitable.",
        "—",
        "Cy-près applies in certain charitable failure situations, not to convert mixed private purposes into charity automatically.",
        "Non-charitable purpose trusts are generally void unless an exception applies."
      ]
    }
  },
  {
    topic: "Purpose trusts — perpetuity risk",
    q: "One reason non-charitable purpose trusts are problematic is that they may:",
    choices: [
      "Always breach the rule in Saunders v Vautier",
      "Potentially last indefinitely without beneficiaries to collapse/enforce them, raising perpetuity/control concerns",
      "Always create criminal liability",
      "Be valid only for land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Purpose trusts can be hard to control and may become perpetual because no beneficiaries exist to enforce or terminate them, unless charity rules apply.",
      whyWrong: [
        "Saunders v Vautier is about beneficiaries collapsing a trust; purpose trusts often have none.",
        "—",
        "No general criminal liability arises.",
        "Purpose trusts can concern any property type."
      ]
    }
  },
  {
    topic: "Anomalous exceptions — animals (Re Dean)",
    q: "Which is a recognised anomalous exception allowing some non-charitable purpose trusts?",
    choices: [
      "A trust to maintain specific animals",
      "A trust to benefit 'the world at large'",
      "A trust to promote a private business",
      "A trust to do 'good deeds' generally"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A trust for maintenance of specific animals is a classic anomalous exception (Re Dean), though it must still comply with certainty and perpetuity rules.",
      whyWrong: [
        "Too vague and lacks enforceable beneficiaries.",
        "—",
        "Private business promotion is not a recognised exception.",
        "‘Good deeds’ is too uncertain and not an exception."
      ]
    }
  },
  {
    topic: "Anomalous exceptions — graves/monuments",
    q: "A trust 'to maintain my family grave forever' is most likely:",
    choices: [
      "A valid charitable trust",
      "A non-charitable purpose trust that may only be valid (if at all) as an anomalous exception, and must comply with perpetuity limits",
      "Automatically valid because it is sentimental",
      "Valid only if registered with the Charity Commission"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Grave/monument maintenance can fall within anomalous exceptions, but these are narrow and cannot be perpetual like charities; 'forever' raises perpetuity issues.",
      whyWrong: [
        "Private grave maintenance is generally not charitable.",
        "—",
        "Sentiment is not a legal test; validity depends on exceptions and limits.",
        "Charity Commission registration is not applicable if it is not charitable."
      ]
    }
  },
  {
    topic: "Anomalous exceptions — certainty required",
    q: "Even where an anomalous purpose trust exception applies, the trust must still:",
    choices: [
      "Be capable of being enforced and be sufficiently certain, and comply with perpetuity rules",
      "Have public benefit",
      "Name the Attorney General as trustee",
      "Be made only by will"
    ],
    correct: 0,
    explain: {
      whyRight:
        "These exceptions are narrow and still require certainty and compliance with perpetuity limits; they are not treated like charities.",
      whyWrong: [
        "Public benefit is required for charities, not necessarily for anomalous exceptions.",
        "—",
        "No such requirement.",
        "They can be created inter vivos or by will, subject to applicable rules."
      ]
    }
  },
  {
    topic: "Re Denley — 'purpose' benefiting people",
    q: "Re Denley’s Trust Deed is most associated with which idea?",
    choices: [
      "All purpose trusts are valid",
      "A trust framed as a purpose may be upheld if it directly/indirectly benefits identifiable individuals who can enforce it",
      "Animal trusts are always charitable",
      "Cy-près applies to private trusts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Re Denley supports that a trust expressed as a purpose (e.g., sports ground) can be valid where it benefits identifiable individuals (employees) who can enforce it.",
      whyWrong: [
        "It is not a blanket validation of all purpose trusts.",
        "—",
        "Animal trusts are usually non-charitable exceptions, not automatically charitable.",
        "Cy-près is primarily a charitable doctrine."
      ]
    }
  },
  {
    topic: "Re Denley — why enforceable",
    q: "Why was the Re Denley trust considered enforceable?",
    choices: [
      "Because the purpose was charitable",
      "Because the employees were identifiable beneficiaries with standing to enforce the trust",
      "Because the trustees were a company",
      "Because it was in writing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Although framed as a purpose, the trust benefited identifiable individuals (employees), giving someone locus standi to enforce.",
      whyWrong: [
        "It was not treated as charitable.",
        "—",
        "Trustee identity is not the key.",
        "Writing alone does not cure the beneficiary principle."
      ]
    }
  },
  {
    topic: "Purpose trusts — 'public benefit' (charities)",
    q: "Which statement best reflects the 'public benefit' requirement for charitable status?",
    choices: [
      "Any purpose that helps one person is charitable",
      "The charitable purpose must benefit the public or a sufficient section of it, not merely private individuals",
      "Public benefit is irrelevant if the settlor says it is charitable",
      "Only trusts for animals have public benefit"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Charitable status requires public benefit: the purpose must benefit the public or a sufficient section, not be a private arrangement.",
      whyWrong: [
        "Private benefit to one person is generally not charity.",
        "—",
        "Labeling something ‘charitable’ is not determinative.",
        "Animal trusts are not the definition of public benefit."
      ]
    }
  },
  {
    topic: "Purpose trusts — 'friends' purpose",
    q: "A trust is created 'to throw an annual party for my friends'. Best analysis?",
    choices: [
      "Valid charitable trust",
      "Generally void as a non-charitable purpose trust (no beneficiaries), unless it can be analysed as a trust for persons with standing (unlikely) or fits an exception",
      "Valid under Saunders v Vautier",
      "Automatically saved by Re Rose"
    ],
    correct: 1,
    explain: {
      whyRight:
        "This is a private purpose (party) with no clear beneficiaries to enforce; it is not charitable and doesn’t fit the narrow exceptions, so likely void.",
      whyWrong: [
        "It lacks charitable purpose/public benefit.",
        "—",
        "Saunders v Vautier requires beneficiaries with absolute entitlement, not a purpose trust.",
        "Re Rose is about imperfect transfers, not purpose trust validity."
      ]
    }
  },
  {
    topic: "Purpose trusts — mixed purposes",
    q: "A trust is 'to advance education and to maintain my pet dog'. Best analysis?",
    choices: [
      "Automatically charitable because education is charitable",
      "Not exclusively charitable due to the non-charitable animal purpose; would not be charitable, though the pet trust might be an anomalous exception if properly limited",
      "Valid as a single non-charitable purpose trust",
      "Void because charitable and non-charitable purposes can never coexist in one instrument"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Charitable trusts must be exclusively charitable. The dog maintenance purpose is non-charitable (though potentially an anomalous exception if properly limited), so the trust is not charitable as drafted.",
      whyWrong: [
        "Mixed purposes prevent 'exclusively charitable' status.",
        "—",
        "Non-charitable purpose trusts are generally void unless an exception applies; mixing doesn’t validate it.",
        "Instruments can contain severable gifts, but the key is whether purposes are severable and how it is drafted."
      ]
    }
  },
  {
    topic: "Purpose trust failure — resulting trust",
    q: "If a non-charitable purpose trust fails and there is no alternative disposition, the likely outcome is:",
    choices: [
      "Trustees take beneficially",
      "Resulting trust back to the settlor/estate",
      "Automatic charitable trust",
      "Court appoints the nearest charity"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the intended purpose trust is void, equity typically treats the property as held on resulting trust for the settlor/estate unless there is a valid gift-over.",
      whyWrong: [
        "Trustees do not usually take beneficially absent intention.",
        "—",
        "No automatic charity conversion.",
        "Cy-près/charity substitution is a charity doctrine, not a general rule for private purpose trusts."
      ]
    }
  },
  {
    topic: "Purpose trusts — certainty",
    q: "A trust is declared 'to promote kindness'. What is the key validity issue?",
    choices: [
      "It is automatically charitable",
      "It is likely void due to uncertainty and lack of enforceable beneficiaries (non-charitable purpose trust)",
      "It is valid if trustees are kind",
      "It is valid if the settlor intended it strongly"
    ],
    correct: 1,
    explain: {
      whyRight:
        "‘Promote kindness’ is vague and lacks enforceable beneficiaries; unless it can be classified as charitable under recognised heads/public benefit (unlikely as drafted), it is likely void.",
      whyWrong: [
        "Not automatically charitable.",
        "—",
        "Trustee character is irrelevant.",
        "Intention alone does not cure uncertainty/beneficiary principle problems."
      ]
    }
  },
  {
    topic: "Purpose trusts — charitable vs private",
    q: "Which is most likely to be a charitable purpose?",
    choices: [
      "To provide scholarships for students in financial hardship",
      "To maintain my personal yacht",
      "To pay my friend’s rent",
      "To throw a party for my colleagues"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Scholarships to relieve hardship/advance education can fall within recognised charitable purposes and may satisfy public benefit.",
      whyWrong: [
        "Private enjoyment is not charitable.",
        "—",
        "Private benefit to a friend is not charitable.",
        "A private party is not charitable."
      ]
    }
  },
  {
    topic: "Purpose trusts — enforcement mechanism",
    q: "Which feature best explains why charitable trusts do not fail for lack of human beneficiaries?",
    choices: [
      "Charities always distribute money to named people",
      "Public enforcement/oversight (e.g., Attorney General/Charity Commission) provides locus standi",
      "Trustees are paid",
      "Charities do not need trustees"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Charitable trusts are enforced through public oversight, so the absence of private beneficiaries does not undermine enforceability.",
      whyWrong: [
        "Charities can benefit classes and the public, not named individuals only.",
        "—",
        "Payment is irrelevant.",
        "Charities still require trustees."
      ]
    }
  },
  {
    topic: "Re Denley — identifying the beneficiaries",
    q: "A trust sets aside land 'to be used as a recreation ground for employees of X Ltd'. Which is the best analysis?",
    choices: [
      "Void as a purpose trust because it is not charitable",
      "Potentially valid under Re Denley principles because it benefits identifiable employees who can enforce",
      "Automatically charitable because recreation is always charitable",
      "Valid only if the Attorney General approves"
    ],
    correct: 1,
    explain: {
      whyRight:
        "It resembles Re Denley: a purpose benefiting identifiable individuals (employees), potentially giving enforceability despite purpose wording.",
      whyWrong: [
        "Denley-type analysis may save it where beneficiaries are identifiable.",
        "—",
        "Recreation may be charitable in some contexts, but not automatically; and an employee-only class may be private.",
        "Attorney General involvement is for charities, not necessary for Denley-type private trusts."
      ]
    }
  },
  {
    topic: "Anomalous exception — perpetuity",
    q: "Why is 'forever' problematic in a non-charitable purpose trust that falls within an anomalous exception (e.g., grave maintenance)?",
    choices: [
      "Because anomalous exceptions cannot exist",
      "Because unlike charities, these exceptions must comply with perpetuity limits and cannot be perpetual",
      "Because the Wills Act forbids the word 'forever'",
      "Because trustees cannot own land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Anomalous exceptions are not charitable; they cannot last indefinitely and must comply with perpetuity rules, so 'forever' creates validity problems.",
      whyWrong: [
        "They can exist, but narrowly.",
        "—",
        "No such Wills Act rule.",
        "Trustees can own land."
      ]
    }
  },
  {
    topic: "Purpose trusts — label not decisive",
    q: "A clause says 'I create a charitable trust to maintain my pet cat'. Best analysis?",
    choices: [
      "Charitable because the settlor said so",
      "Not charitable just because it is labelled charitable; cat maintenance is typically a non-charitable purpose (though may fall within an anomalous exception if properly limited)",
      "Automatically void because animals can never be trust objects",
      "Automatically valid forever"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Labeling is not determinative; the court classifies the purpose. Pet maintenance is generally non-charitable, though it may fall into a narrow exception, and must obey perpetuity limits.",
      whyWrong: [
        "The legal classification matters, not the label.",
        "—",
        "Animals can be covered by the anomalous exception.",
        "Non-charitable exceptions cannot be perpetual like charities."
      ]
    }
  },
  {
    topic: "Purpose trusts — public benefit vs private class",
    q: "Which scenario most obviously risks failing the public benefit requirement for charity?",
    choices: [
      "Relief of poverty for a wide section of the community",
      "Education scholarships open to the public based on need/merit",
      "A trust 'to improve the welfare of my immediate family only'",
      "Advancement of religion for the public"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A trust confined to the settlor’s immediate family is generally private, risking failure of the public benefit requirement for charitable status.",
      whyWrong: [
        "Relief of poverty can satisfy public benefit, often with special rules.",
        "Scholarships can be charitable if public benefit is satisfied.",
        "—",
        "Public religious purposes can be charitable if public benefit is met."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Trust Law | Chapter 6 | Purpose and Charitable Trusts",
    subtitle: "Beneficiary principle, exceptions, and public benefit.",
    questions: questions
  };
})();
  
