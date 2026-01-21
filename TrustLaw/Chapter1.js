(() => {
  const questions = [
  {
    topic: "Three certainties — overview",
    q: "Which combination is required for a valid express trust at common law/equity?",
    choices: [
      "Certainty of intention, certainty of subject matter, certainty of objects",
      "Certainty of consideration, certainty of loss, certainty of reliance",
      "Certainty of intention only (equity will fill the rest)",
      "Certainty of writing, certainty of witnesses, certainty of delivery"
    ],
    correct: 0,
    explain: {
      whyRight:
        "An express trust requires the three certainties: intention, subject matter, and objects. If any is missing, the express trust fails.",
      whyWrong: [
        "—",
        "These relate to different doctrines (e.g., reliance-based claims), not trust creation.",
        "Equity does not create an express trust where the core certainties are missing.",
        "Formalities can matter (especially for land), but they are not the 'three certainties'."
      ]
    }
  },
  {
    topic: "Certainty of intention — objective approach",
    q: "In assessing certainty of intention, the court primarily considers:",
    choices: [
      "The settlor’s secret subjective thoughts",
      "Whether the words/conduct objectively show an intention to impose enforceable obligations",
      "Whether the trustee has agreed in writing",
      "Whether the beneficiaries are grateful"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The test is objective: do the words and conduct show an intention to create a trust (enforceable obligations), not merely a moral wish.",
      whyWrong: [
        "Courts focus on objective manifestation, not undisclosed intention.",
        "—",
        "Trustee acceptance can be relevant practically, but intention is assessed from the settlor’s manifested intention.",
        "Gratitude is irrelevant to whether a trust is created."
      ]
    }
  },
  {
    topic: "Certainty of intention — precatory words",
    q: "S leaves property to T 'hoping that T will do the right thing by my children'. What is the best starting point?",
    choices: [
      "This automatically creates a trust for the children",
      "Precatory language usually does not create a trust unless the context shows an obligation",
      "Any reference to children makes it a trust",
      "It is void as an unlawful purpose trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Words like 'hope' are normally precatory and insufficient (*Lambe v Eames*; *Re Adams*), unless the overall context indicates an intended obligation (cf *Comiskey*).",
      whyWrong: [
        "Precatory language does not automatically impose trust obligations.",
        "—",
        "Mentioning children does not itself establish trust intention.",
        "This is not primarily a purpose trust issue; it’s about intention."
      ]
    }
  },
  {
    topic: "Certainty of intention — Lambe v Eames / Re Adams",
    q: "Which statement best reflects the principle in *Lambe v Eames* and *Re Adams and Kensington Vestry*?",
    choices: [
      "‘Wish’ language always creates a trust",
      "Precatory words are generally insufficient to impose a trust",
      "A trust is created whenever there is a family context",
      "A trust fails unless the trustee signs a deed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Both cases illustrate that precatory words like 'wish' or 'in full confidence' are generally treated as non-binding unless the wording/context clearly imposes an obligation.",
      whyWrong: [
        "The opposite is the general rule.",
        "—",
        "Family context alone doesn’t turn moral encouragement into a trust.",
        "No general requirement that a trust must be by deed (though some property types have formalities)."
      ]
    }
  },
  {
    topic: "Certainty of intention — Comiskey v Bowring-Hanbury",
    q: "Which best captures what *Comiskey v Bowring-Hanbury* shows about precatory wording?",
    choices: [
      "Precatory words can never create a trust",
      "Even if some words are precatory, the will as a whole may impose a binding trust obligation",
      "A trust is only valid if the word 'trust' is used",
      "A trust requires beneficiaries to be named individually"
    ],
    correct: 1,
    explain: {
      whyRight:
        "*Comiskey* demonstrates that the instrument read as a whole may show an intention to impose obligations, even if some phrases look like wishes.",
      whyWrong: [
        "Precatory words can be overridden by clear obligatory context.",
        "—",
        "Use of the word 'trust' is helpful but not essential.",
        "Beneficiaries can be described by class if certain enough."
      ]
    }
  },
  {
    topic: "Certainty of intention — conduct (Paul v Constance)",
    q: "D tells E repeatedly that money in a bank account is 'as much yours as mine' and treats it that way. What case is most associated with finding trust intention from conduct/words?",
    choices: [
      "Paul v Constance",
      "Re London Wine",
      "McPhail v Doulton",
      "Milroy v Lord"
    ],
    correct: 0,
    explain: {
      whyRight:
        "*Paul v Constance* is authority that repeated statements and conduct can objectively show an intention to create a trust, even without formal trust language.",
      whyWrong: [
        "—",
        "*Re London Wine* concerns certainty of subject matter in unascertained goods.",
        "*McPhail v Doulton* concerns certainty of objects for discretionary trusts.",
        "*Milroy v Lord* is about imperfect transfers (constitution), not primarily intention."
      ]
    }
  },
  {
    topic: "Certainty of intention — commercial context (Re Kayford)",
    q: "A mail-order company places customer payments into a separate account to protect them if the company becomes insolvent. Which case supports finding a trust in this commercial setting?",
    choices: [
      "Re Kayford",
      "Boyce v Boyce",
      "Re Gulbenkian",
      "Re Goldcorp"
    ],
    correct: 0,
    explain: {
      whyRight:
        "*Re Kayford* supports that segregating customer monies and describing them as held for customers can evidence trust intention in a commercial context.",
      whyWrong: [
        "—",
        "*Boyce v Boyce* concerns uncertainty of beneficial shares/subject matter.",
        "*Re Gulbenkian* concerns the certainty of objects test for powers.",
        "*Re Goldcorp* concerns unascertained goods and failure of trust property certainty."
      ]
    }
  },
  {
    topic: "Certainty of intention — failed gift not treated as trust (Jones v Lock)",
    q: "A father places a cheque in his baby’s hand saying it’s for the baby, but does not complete the gift. Which principle is illustrated?",
    choices: [
      "Equity perfects imperfect gifts by construing them as trusts",
      "Equity will not construe an imperfect gift as a trust to perfect it",
      "Any intention to benefit a child creates a trust",
      "A cheque is always a declaration of trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "*Jones v Lock* illustrates that the court will not recharacterise an imperfect gift as a trust merely to make it effective.",
      whyWrong: [
        "Equity does not generally perfect imperfect gifts by re-labelling them as trusts.",
        "—",
        "Intending to benefit a child is not enough without trust intention and certainty.",
        "A cheque is not automatically a trust declaration."
      ]
    }
  },
  {
    topic: "Certainty of intention — Richards v Delbridge",
    q: "A settlor signs a memorandum attempting to assign leasehold property to a grandchild but does not comply with assignment formalities. Why won’t the court treat it as a declaration of trust?",
    choices: [
      "Because leaseholds can never be held on trust",
      "Because equity will not convert an ineffective transfer into a trust declaration to validate it",
      "Because the grandchild must provide consideration",
      "Because trusts require registration at Companies House"
    ],
    correct: 1,
    explain: {
      whyRight:
        "*Richards v Delbridge* shows the court won’t treat an ineffective attempt to transfer property as a declaration of trust just to save it.",
      whyWrong: [
        "Leaseholds can be held on trust.",
        "—",
        "Consideration is not required to create an express trust.",
        "Companies House registration is irrelevant."
      ]
    }
  },
  {
    topic: "Certainty of subject matter — trust property must be identifiable",
    q: "Which best describes the 'certainty of subject matter' requirement?",
    choices: [
      "The trust must be written and signed",
      "The trust property must be clearly identified (and, where relevant, beneficial shares must be clear)",
      "The trustee must be a solicitor",
      "The settlor must intend to avoid tax"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Certainty of subject matter requires identifiable trust property; and for fixed trusts, clarity of each beneficiary’s share is also needed.",
      whyWrong: [
        "Writing/signature may be a formality for certain trusts (e.g., land), but it’s not the definition of subject matter certainty.",
        "—",
        "Trustees need not be solicitors.",
        "Tax motive is irrelevant to certainty."
      ]
    }
  },
  {
    topic: "Certainty of subject matter — vague descriptions (Palmer v Simmonds)",
    q: "A settlor declares a trust over 'the bulk of my estate' for B. What is the best analysis?",
    choices: [
      "Valid: 'bulk' is always certain",
      "Likely invalid for uncertainty of subject matter (too vague)",
      "Valid only if B is a family member",
      "Valid only if witnesses sign"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Vague phrases like 'the bulk of my estate' have been treated as uncertain because the property subject to the trust cannot be identified with sufficient clarity (cf *Palmer v Simmonds*).",
      whyWrong: [
        "'Bulk' wording can be problematic precisely because it lacks precision.",
        "—",
        "Family relationship doesn’t cure uncertainty.",
        "Witnesses relate to formalities, not identifying the trust property."
      ]
    }
  },
  {
    topic: "Certainty of subject matter — fixed shares (Boyce v Boyce)",
    q: "T is to choose one of two houses for A, and the other house is for B. T dies without choosing. What is the likely result for B’s entitlement?",
    choices: [
      "B takes the remaining house automatically",
      "B’s share is uncertain, so B’s trust fails (and property results back to the settlor/estate)",
      "A and B split both houses equally",
      "The court will choose a house for A"
    ],
    correct: 1,
    explain: {
      whyRight:
        "This resembles *Boyce v Boyce*: where a trustee’s selection is essential to determine shares, failure to select can make the remaining entitlement uncertain and the trust fails.",
      whyWrong: [
        "If the selection is essential and never made, it may not be possible to identify what B gets.",
        "—",
        "Equality is not imposed where the intended mechanism fails and produces uncertainty.",
        "Courts generally won’t rewrite the trust by making the discretionary choice for the trustee."
      ]
    }
  },
  {
    topic: "Certainty of subject matter — unascertained tangible goods (Re London Wine)",
    q: "Customers pay for cases of wine stored in a warehouse; no specific bottles are allocated to each customer. If the company becomes insolvent, what is the likely trust position?",
    choices: [
      "A trust exists over the unascertained bottles in the warehouse",
      "No trust over specific property because the wine was not ascertained/appropriated to customers",
      "A trust exists if customers are wine enthusiasts",
      "A trust exists only if the warehouse is in London"
    ],
    correct: 1,
    explain: {
      whyRight:
        "*Re London Wine* indicates that, for tangible goods, a trust fails if the specific goods are not ascertained/appropriated; customers typically become unsecured creditors.",
      whyWrong: [
        "The problem is precisely that no specific property is identified for the trust.",
        "—",
        "Personal interest is irrelevant.",
        "Location is irrelevant."
      ]
    }
  },
  {
    topic: "Certainty of subject matter — bullion/commodities (Re Goldcorp)",
    q: "A company sells bullion to customers but does not allocate specific bullion to them. What is the likely outcome?",
    choices: [
      "Valid trust over an unallocated mass of bullion",
      "No trust because subject matter is uncertain (no specific allocation/identification)",
      "Valid trust if the company intended to be fair",
      "Valid trust because bullion is fungible"
    ],
    correct: 1,
    explain: {
      whyRight:
        "*Re Goldcorp* supports that without allocation/identification of specific goods, the trust property is uncertain and the trust fails.",
      whyWrong: [
        "The case points the other way where allocation is absent.",
        "—",
        "Fairness does not substitute for certainty.",
        "Fungibility alone does not automatically solve the tangible-goods allocation problem in this line of cases."
      ]
    }
  },
  {
    topic: "Certainty of subject matter — intangible assets (Hunter v Moss)",
    q: "S declares a trust of 50 out of 950 identical shares of the same class in a company for B, without identifying which 50. What is the best supported exam answer?",
    choices: [
      "Invalid for uncertainty because shares must always be earmarked",
      "Likely valid: identical intangible shares can satisfy certainty without segregation (Hunter v Moss approach)",
      "Valid only if a stockbroker certifies the shares",
      "Invalid because it breaches the beneficiary principle"
    ],
    correct: 1,
    explain: {
      whyRight:
        "*Hunter v Moss* is commonly taught as allowing certainty where the trust is over an undivided portion of identical intangible assets (e.g., same-class shares), even without earmarking, though the reasoning is debated.",
      whyWrong: [
        "That is not the usual *Hunter v Moss* exam approach.",
        "—",
        "No such certification requirement for certainty.",
        "Beneficiary principle is not the issue here."
      ]
    }
  },
  {
    topic: "Certainty of subject matter — fixed vs discretionary shares",
    q: "Which statement is most accurate about subject matter certainty in fixed vs discretionary trusts?",
    choices: [
      "Fixed trusts never need certainty of shares",
      "Discretionary trusts do not require fixed shares, but the trust property must still be certain",
      "Discretionary trusts require a complete list of beneficiaries to fix shares",
      "Subject matter certainty is irrelevant once intention is shown"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In a discretionary trust, beneficiaries’ shares need not be fixed (trustees decide), but the trust property itself must still be identifiable/certain.",
      whyWrong: [
        "Fixed trusts typically need certainty of each beneficiary’s share.",
        "—",
        "Complete list relates to fixed trusts; discretionary trusts use the 'is or is not' test for objects.",
        "All three certainties must be satisfied."
      ]
    }
  },
  {
    topic: "Certainty of objects — fixed trust test (IRC v Broadway Cottages)",
    q: "What test applies to certainty of objects for a fixed trust?",
    choices: [
      "‘Is or is not’ test",
      "Complete list test (can you draw up a list of all beneficiaries?)",
      "Reasonable certainty test",
      "Balance of probabilities test"
    ],
    correct: 1,
    explain: {
      whyRight:
        "For fixed trusts, the traditional test requires that you can draw up a complete list of beneficiaries (*IRC v Broadway Cottages*).",
      whyWrong: [
        "‘Is or is not’ is used for discretionary trusts and powers.",
        "—",
        "‘Reasonable certainty’ is not the standard formulation for fixed trusts.",
        "That is not the trust law test."
      ]
    }
  },
  {
    topic: "Certainty of objects — discretionary trust test (McPhail v Doulton)",
    q: "What is the key test for certainty of objects in a discretionary trust after *McPhail v Doulton*?",
    choices: [
      "Complete list test",
      "‘Is or is not’ test (can it be said of any person that they are or are not within the class?)",
      "Nearest relative test",
      "Majority vote of beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "*McPhail v Doulton* adopted the ‘is or is not’ test for discretionary trusts: it must be possible to say of any given person whether they are in the class.",
      whyWrong: [
        "Complete list is for fixed trusts, not discretionary trusts.",
        "—",
        "Nearest relative is not the test.",
        "Beneficiaries do not vote to determine class certainty."
      ]
    }
  },
  {
    topic: "Certainty of objects — powers (Re Gulbenkian)",
    q: "Which is most accurate for a mere power (as opposed to a trust) regarding certainty of objects?",
    choices: [
      "A mere power requires a complete list of objects",
      "A mere power generally uses the ‘is or is not’ test (*Re Gulbenkian*)",
      "A mere power is always void unless charitable",
      "A mere power can only benefit one person"
    ],
    correct: 1,
    explain: {
      whyRight:
        "*Re Gulbenkian* supports applying the ‘is or is not’ test to powers: you should be able to say of any given individual whether they are within the class.",
      whyWrong: [
        "Complete list is not generally required for a power.",
        "—",
        "Non-charitable powers can be valid if certain.",
        "Powers can be drafted for classes."
      ]
    }
  },
  {
    topic: "Certainty of objects — Re Baden (No 2) and uncertainty types",
    q: "In analysing a class such as 'relatives' or 'dependants' in a discretionary trust, which distinction is most important?",
    choices: [
      "Conceptual uncertainty vs evidential uncertainty",
      "Motive vs mistake",
      "Offer vs acceptance",
      "Breach vs causation"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Cases like *Re Baden (No 2)* emphasise the difference between conceptual uncertainty (meaning of the class is unclear) and evidential uncertainty (hard to prove membership). Conceptual uncertainty is more likely to be fatal.",
      whyWrong: [
        "—",
        "This is contract law terminology, not trust certainty analysis.",
        "This is contract law terminology.",
        "This is tort/crime style analysis, not trust objects certainty."
      ]
    }
  },
  {
    topic: "Certainty of objects — conceptual uncertainty (fatal)",
    q: "Which is the best statement about conceptual uncertainty in a discretionary trust class?",
    choices: [
      "It is never fatal if trustees act honestly",
      "It is generally fatal because you cannot apply the 'is or is not' test to an unclear concept",
      "It can be cured by asking beneficiaries what they think",
      "It is irrelevant if the trust property is large"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the concept defining the class is inherently unclear, you cannot determine who is in/out, so the objects certainty fails (conceptual uncertainty is typically fatal).",
      whyWrong: [
        "Honesty doesn’t fix inability to define the class.",
        "—",
        "Beneficiary opinions do not make an uncertain concept legally certain.",
        "Value of property doesn’t cure uncertainty."
      ]
    }
  },
  {
    topic: "Certainty of objects — evidential uncertainty (not necessarily fatal)",
    q: "Which best captures evidential uncertainty in the context of discretionary trusts?",
    choices: [
      "The wording of the class is meaningless",
      "The class meaning is clear, but proof of whether someone fits may be difficult",
      "The trust property is unascertained",
      "The trustees refuse to act"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Evidential uncertainty concerns difficulty proving whether a person satisfies a clear concept. It does not automatically invalidate the trust if the concept itself is clear (discussed in *Re Baden (No 2)*).",
      whyWrong: [
        "That describes conceptual uncertainty.",
        "—",
        "That’s subject matter certainty, not objects.",
        "Refusal to act is an administration issue, not necessarily objects certainty."
      ]
    }
  },
  {
    topic: "Certainty of objects — administrative unworkability",
    q: "A discretionary trust is created for 'all residents of Greater London'. Which doctrine may render it void even if the wording is conceptually clear?",
    choices: [
      "Promissory estoppel",
      "Administrative unworkability (class too wide to administer)",
      "Frustration",
      "Illegality of purpose trusts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Even if conceptually clear, a class may be so wide that it is administratively unworkable (discussed in *McPhail v Doulton* and applied in cases like *R v District Auditor ex p West Yorkshire MCC*).",
      whyWrong: [
        "That’s a contract/equity doctrine unrelated to class size.",
        "—",
        "Frustration is contract law.",
        "This is not a purpose trust issue; it’s about administrability of objects."
      ]
    }
  },
  {
    topic: "Certainty of objects — capriciousness",
    q: "Which best describes a 'capricious' power/trust issue?",
    choices: [
      "The settlor changes their mind after death",
      "The class is defined so irrationally that it suggests no sensible basis for selection",
      "The trustee is unpaid",
      "The beneficiaries are charities"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A capricious class/selection criterion may be challenged as lacking any rational basis for the settlor’s disposition, potentially undermining validity in extreme cases (often discussed alongside powers/discretions).",
      whyWrong: [
        "That is not what capriciousness means in this context.",
        "—",
        "Payment is irrelevant to capriciousness.",
        "Charitable status is irrelevant to whether the class is capricious."
      ]
    }
  },
  {
    topic: "Certainty of intention — trust vs moral obligation",
    q: "Which phrase is most likely (standing alone) to be treated as non-binding and therefore insufficient for trust intention?",
    choices: [
      "‘I declare that I hold this on trust for B’",
      "‘T must pay £1,000 per month to B’",
      "‘I hope T will look after B’",
      "‘T holds the property for B absolutely’"
    ],
    correct: 2,
    explain: {
      whyRight:
        "‘Hope’ is classic precatory language and generally indicates a moral wish rather than an enforceable obligation (*Lambe v Eames*; *Re Adams*), unless the instrument as a whole shows obligation (cf *Comiskey*).",
      whyWrong: [
        "Clear trust declaration wording indicates intention.",
        "Imperative obligation language supports intention.",
        "—",
        "This indicates beneficial ownership and strongly suggests intention."
      ]
    }
  },
  {
    topic: "Certainty of subject matter — identifying the trust property",
    q: "S says: 'I hold some of my shares on trust for B' (without specifying number or proportion). Likely outcome?",
    choices: [
      "Valid: trustees can choose which shares",
      "Invalid: subject matter uncertain because the trust property is not identified",
      "Valid if B is the settlor’s child",
      "Valid because shares are intangible"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Without specifying number/proportion, the subject matter is uncertain: you cannot identify what property is held on trust (contrast with specifying a fixed number/proportion, where *Hunter v Moss* may assist).",
      whyWrong: [
        "Trustees cannot cure an undefined trust property by selecting 'some' without a defined quantity.",
        "—",
        "Relationship doesn’t cure uncertainty.",
        "Intangibility may help where a definite quantity is specified; it doesn’t fix an undefined 'some'."
      ]
    }
  },
  {
    topic: "Certainty of objects — fixed trust consequence",
    q: "If a fixed trust fails for uncertainty of objects, the likely consequence is:",
    choices: [
      "The property passes to the Crown as bona vacantia",
      "The property is held on resulting trust for the settlor/estate",
      "The trustees choose beneficiaries anyway",
      "The court rewrites the class to make it workable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If an express trust fails (e.g., uncertainty of objects), the usual consequence is a resulting trust back to the settlor or their estate.",
      whyWrong: [
        "Bona vacantia is not the normal route where there is an identifiable settlor/estate.",
        "—",
        "Trustees cannot distribute without valid objects/class.",
        "Courts interpret; they do not generally rewrite to rescue uncertainty."
      ]
    }
  },
  {
    topic: "Certainty of objects — discretionary trust consequence",
    q: "A discretionary trust for 'my friends' is challenged. The main difficulty is most likely:",
    choices: [
      "Subject matter uncertainty",
      "Conceptual uncertainty as to who counts as a 'friend'",
      "Illegality due to non-charitable purpose",
      "Lack of consideration"
    ],
    correct: 1,
    explain: {
      whyRight:
        "‘Friends’ can be conceptually uncertain: it may be unclear what criteria determine membership (a key *Re Baden*-type analysis issue).",
      whyWrong: [
        "This is about identifying objects, not the property.",
        "—",
        "This is not a purpose trust; it’s an express trust for persons.",
        "Consideration is not required to create an express trust."
      ]
    }
  },
  {
    topic: "Certainty of intention — words vs substance",
    q: "Which statement is most accurate?",
    choices: [
      "Using the word 'trust' always creates a trust",
      "A trust can be found without using the word 'trust' if intention is clear",
      "A trust cannot exist without a trustee’s signature",
      "A trust fails unless it is registered"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Courts look at substance: clear intention can be inferred from words/conduct even without technical language (e.g., *Paul v Constance*).",
      whyWrong: [
        "‘Trust’ is strong evidence, but not conclusive if context contradicts.",
        "—",
        "Not a general requirement.",
        "Not a general requirement for express trusts."
      ]
    }
  },
  {
    topic: "Three certainties — which certainty is engaged?",
    q: "A trust is declared for 'those who have been kind to me'. Which certainty is most directly in issue?",
    choices: [
      "Certainty of intention",
      "Certainty of subject matter",
      "Certainty of objects",
      "Certainty of formalities"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The issue is identifying the beneficiaries/object class: 'those who have been kind' may be conceptually uncertain, affecting certainty of objects.",
      whyWrong: [
        "Intention might be clear, but the class definition is the bigger problem.",
        "Property may be certain; the problem is who can benefit.",
        "—",
        "Formalities are not the immediate issue here."
      ]
    }
  },
  {
    topic: "Three certainties — matching test to arrangement",
    q: "Which pairing is correct?",
    choices: [
      "Fixed trust → ‘is or is not’ test",
      "Discretionary trust → complete list test",
      "Mere power → ‘is or is not’ test",
      "Mere power → complete list test"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A mere power generally uses the ‘is or is not’ test (*Re Gulbenkian*). Fixed trusts use the complete list test (*IRC v Broadway Cottages*), and discretionary trusts use the ‘is or is not’ test (*McPhail v Doulton*).",
      whyWrong: [
        "Fixed trusts use complete list, not ‘is or is not’.",
        "Discretionary trusts use ‘is or is not’, not complete list.",
        "—",
        "Complete list is not generally required for a mere power."
      ]
    }
  },
  {
    topic: "Three certainties — exam trap (intention vs constitution)",
    q: "S clearly intends to create a trust, but does nothing to transfer property to trustees and does not declare themself trustee. Which is the best analysis?",
    choices: [
      "Trust is valid because intention alone is enough",
      "Trust may fail for lack of constitution (a separate issue from the three certainties)",
      "Trust is void for uncertainty of objects",
      "Trust is void as a purpose trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Even if the three certainties are satisfied, a trust can still fail if it is not properly constituted (e.g., property not transferred or self-declaration not made). That’s a different issue from certainty.",
      whyWrong: [
        "Intention is necessary but not sufficient if constitution is missing.",
        "—",
        "Objects uncertainty is not the issue on these facts.",
        "This is not about purposes; it’s about whether the trust has been properly set up."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Trust Law | Chapter 1 | Three Certainties",
    subtitle: "Intention, subject matter, and objects basics.",
    questions: questions
  };
})();
  
