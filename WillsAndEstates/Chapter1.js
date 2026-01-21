(() => {
  const questions = [
  {
    topic: "Valid will — Wills Act 1837 s9 (core requirements)",
    q: "Which set of requirements best reflects Wills Act 1837, s 9 for a valid will?",
    choices: [
      "Oral declaration before two witnesses is sufficient if recorded",
      "In writing, signed by testator (or at their direction), with signature made/acknowledged in presence of two witnesses who then attest and sign",
      "In writing and signed, but witnesses are only required if the will makes gifts",
      "Signed by the testator and one witness, provided it is dated"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 9 requires writing; signature by the testator (or someone in their presence and at their direction); intention to give effect; signature made/acknowledged in the presence of two witnesses present at the same time; and each witness attests and signs in the testator’s presence.",
      whyWrong: [
        "Oral wills are not generally valid (privileged wills are exceptional).",
        "—",
        "Witnessing is a general requirement for validity, not dependent on gifts.",
        "Two witnesses are required; dating is not a substitute."
      ]
    }
  },
  {
    topic: "Valid will — witnesses present at the same time",
    q: "T signs a will alone. Later that day W1 signs in T’s presence, and the next day W2 signs in T’s presence. The will is:",
    choices: [
      "Valid, because two witnesses signed eventually",
      "Invalid, because the testator’s signature must be made or acknowledged in the presence of two witnesses present at the same time",
      "Valid, because witnesses need not be present at the same time",
      "Invalid, because witnesses must sign in each other’s presence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 9 requires T’s signature to be made or acknowledged in the presence of two witnesses who are present at the same time. Staggered witnessing fails this requirement.",
      whyWrong: [
        "The timing/presence requirement is strict: ‘present at the same time’ matters.",
        "—",
        "They must be present at the same time for T’s signing/acknowledgment.",
        "Witnesses need not sign in each other’s presence; the issue is T’s acknowledgment/signing."
      ]
    }
  },
  {
    topic: "Valid will — acknowledgment of signature",
    q: "T signed a will earlier in private. T later shows the signed will to W1 and W2 together and says, “That is my signature.” W1 and W2 then sign in T’s presence. The will is:",
    choices: [
      "Invalid because T did not sign in front of the witnesses",
      "Valid because T acknowledged their signature in the presence of two witnesses present at the same time",
      "Invalid unless T re-signs on that occasion",
      "Valid only if W1 and W2 also sign in each other’s presence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 9 allows T’s signature to be ‘made or acknowledged’ in the presence of two witnesses present at the same time. Acknowledgment can therefore cure earlier private signing.",
      whyWrong: [
        "Acknowledgment (not only signing) is permitted by s 9.",
        "—",
        "Re-signing is not required if acknowledgment is compliant.",
        "Witnesses do not need to sign in each other’s presence."
      ]
    }
  },
  {
    topic: "Valid will — who can sign for the testator",
    q: "Which is correct regarding signing a will on behalf of the testator?",
    choices: [
      "Anyone may sign for T, even if T is not present",
      "Another person may sign for T only if it is in T’s presence and at T’s direction",
      "Another person may sign for T if a solicitor is present, regardless of T’s direction",
      "Another person may sign for T only if all beneficiaries consent"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 9 permits signature by another person, but only where it is done in the testator’s presence and at the testator’s direction.",
      whyWrong: [
        "Presence and direction are required.",
        "—",
        "A solicitor’s presence does not replace the statutory conditions.",
        "Beneficiaries’ consent is irrelevant to s 9 formalities."
      ]
    }
  },
  {
    topic: "Valid will — intention of signature",
    q: "Under Wills Act 1837, s 9, the testator must sign the will with:",
    choices: [
      "Intention to give effect to the will",
      "Intention to benefit at least one family member",
      "Intention that the witnesses approve the contents",
      "Intention to deposit the will with the Probate Registry"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Section 9 requires that T intends by their signature to give effect to the will.",
      whyWrong: [
        "—",
        "There is no requirement to benefit family.",
        "Witnesses do not ‘approve’ contents; knowledge/approval is a separate concept.",
        "There is no requirement to deposit the will for validity."
      ]
    }
  },
  {
    topic: "Valid will — meaning of presence",
    q: "For Wills Act 1837, s 9, ‘in the presence of’ generally means:",
    choices: [
      "The parties must be in the same building",
      "The parties must be able to see each other’s act of signing (line of sight), even if they do not actually watch",
      "The parties must physically touch the document at the same time",
      "The parties must have met the testator previously"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Presence is generally satisfied if the person is in a position to see the signing (line of sight), even if they are not actually looking at that moment.",
      whyWrong: [
        "Same building is not the test; it’s about presence/line of sight.",
        "—",
        "Physical contact is not required.",
        "Prior acquaintance is irrelevant."
      ]
    }
  },
  {
    topic: "Valid will — witnesses signing requirement",
    q: "Which statement about witnesses signing is most accurate?",
    choices: [
      "Witnesses must sign in each other’s presence",
      "Witnesses must sign in the testator’s presence, but not necessarily in each other’s presence",
      "Witnesses must sign before the testator signs",
      "Witnesses must sign and also state their occupation for validity"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The requirement is that each witness attests and signs (or acknowledges) in the testator’s presence. They do not have to sign in each other’s presence.",
      whyWrong: [
        "Not required by s 9.",
        "—",
        "The statute does not require witnesses to sign first; acknowledgment can also operate.",
        "No requirement to state occupation."
      ]
    }
  },
  {
    topic: "Valid will — witness needs to know it’s a will",
    q: "W1 and W2 sign a document in T’s presence, believing it is a contract. In fact it is T’s will. Assuming s 9 is otherwise satisfied, the will is:",
    choices: [
      "Invalid because witnesses must know it is a will",
      "Valid because witnesses do not need to know the document is a will",
      "Invalid unless the witnesses read the will first",
      "Valid only if the witnesses are beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Witnesses need not know the document is a will; they are attesting the testator’s signature/execution, not the contents.",
      whyWrong: [
        "Knowledge of the document’s nature is not required for witnessing.",
        "—",
        "Reading the will is not required.",
        "Being a beneficiary creates other issues (s 15) and is not a validity requirement."
      ]
    }
  },
  {
    topic: "Valid will — effect of beneficiary as witness (s15)",
    q: "W1 witnesses T’s will and is also left £10,000 in the will. What is the effect?",
    choices: [
      "The will is invalid",
      "The gift to W1 is void, but the will remains valid",
      "The will is valid and the gift stands because W1 is a witness",
      "The gift stands only if W2 is not a beneficiary"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under Wills Act 1837, s 15, a gift to an attesting witness (or their spouse/civil partner) is void, but the will itself remains valid.",
      whyWrong: [
        "The whole will does not fail merely because a beneficiary witnessed it.",
        "—",
        "The gift is void under s 15.",
        "W2’s status does not cure s 15."
      ]
    }
  },
  {
    topic: "Valid will — witness’s spouse/civil partner (s15)",
    q: "T leaves £5,000 to W1’s spouse. W1 witnesses the will. The effect is:",
    choices: [
      "The will is invalid",
      "The gift to W1’s spouse is void under s 15, but the will remains valid",
      "The gift stands because W1 is not personally benefiting",
      "The gift stands if W1 signs before the testator"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 15 extends to gifts to the spouse/civil partner of an attesting witness: the gift is void, but the will remains valid.",
      whyWrong: [
        "The will remains valid.",
        "—",
        "The statute treats spouse/civil partner gifts as void in this context.",
        "Signing order does not avoid s 15."
      ]
    }
  },
  {
    topic: "Valid will — minimum age",
    q: "As a general rule, a person must be at least what age to make a valid will?",
    choices: ["16", "17", "18", "21"],
    correct: 2,
    explain: {
      whyRight:
        "The general rule is that a testator must be 18 or over to make a valid will (subject to limited exceptions such as privileged wills).",
      whyWrong: [
        "16 is not the general rule.",
        "17 is not the general rule.",
        "—",
        "21 is not required."
      ]
    }
  },
  {
    topic: "Valid will — testamentary capacity (Banks v Goodfellow)",
    q: "Which is NOT part of the Banks v Goodfellow test for testamentary capacity?",
    choices: [
      "Understanding the nature of making a will",
      "Understanding the extent of one’s property",
      "Comprehending the claims of potential beneficiaries",
      "Having perfect memory of all past financial transactions"
    ],
    correct: 3,
    explain: {
      whyRight:
        "Banks v Goodfellow requires understanding the act of making a will, the extent of property, and the claims of potential beneficiaries, and being free from a disorder affecting dispositions. Perfect memory of all transactions is not required.",
      whyWrong: ["These are core limbs of the test.", "These are core limbs of the test.", "These are core limbs of the test.", "—"]
    }
  },
  {
    topic: "Valid will — mental disorder and capacity",
    q: "T has a mental disorder but it does not affect the dispositions in the will. Which is most accurate?",
    choices: [
      "Capacity always fails if T has any diagnosed mental disorder",
      "Capacity can still exist if the disorder does not influence the testamentary decisions",
      "Capacity fails unless a doctor witnesses the will",
      "Capacity is irrelevant if the will is correctly executed under s 9"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under Banks v Goodfellow, the key question is whether any disorder of mind poisons the testator’s dispositions. A diagnosis alone does not automatically negate capacity.",
      whyWrong: [
        "A diagnosis is not determinative; effect on decisions matters.",
        "—",
        "Medical witnessing is good practice in some cases but not a legal requirement.",
        "Capacity is separate from formal execution."
      ]
    }
  },
  {
    topic: "Valid will — knowledge & approval (general presumption)",
    q: "Where a will is duly executed and appears rational, the usual starting point on knowledge and approval is:",
    choices: [
      "No presumption applies; the propounder must always prove knowledge and approval",
      "A presumption that the testator knew and approved the contents",
      "A presumption that the will is invalid unless read aloud",
      "A presumption of undue influence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Due execution and an apparently rational will typically raise a presumption of knowledge and approval, unless suspicious circumstances displace it.",
      whyWrong: [
        "The presumption helps the propounder unless displaced.",
        "—",
        "Reading aloud is not required for validity.",
        "Undue influence is not presumed for wills in the same way as lifetime transactions."
      ]
    }
  },
  {
    topic: "Valid will — suspicious circumstances",
    q: "Which scenario is most likely to amount to ‘suspicious circumstances’ requiring the propounder to prove knowledge and approval?",
    choices: [
      "A will leaving property equally to three adult children",
      "A will drafted by and leaving a substantial gift to the testator’s carer who arranged execution",
      "A will dated on a weekday",
      "A will with two independent witnesses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A substantial benefit to someone involved in preparing/executing the will (e.g., carer/drafter) is a classic suspicious circumstance that can rebut the presumption of knowledge and approval.",
      whyWrong: [
        "This is ordinary and not inherently suspicious.",
        "—",
        "The date being a weekday is irrelevant.",
        "Independent witnesses tend to reduce, not increase, suspicion."
      ]
    }
  },
  {
    topic: "Valid will — undue influence (wills)",
    q: "Which best reflects undue influence in the context of wills?",
    choices: [
      "Any pressure or persuasion is enough",
      "A presumption of undue influence automatically arises in relationships of trust",
      "The challenger must generally prove coercion that overbore the testator’s free will",
      "Undue influence is established if the will is unfair"
    ],
    correct: 2,
    explain: {
      whyRight:
        "For wills, undue influence requires proof of coercion (a high threshold) that overbore the testator’s free volition; it is not typically presumed.",
      whyWrong: [
        "Mere persuasion is not enough; coercion is required.",
        "Presumed undue influence is mainly associated with lifetime transactions, not wills.",
        "—",
        "Unfairness alone is not a legal test."
      ]
    }
  },
  {
    topic: "Valid will — fraud vs undue influence",
    q: "T signs a will because B lies about the contents and tricks T into believing it leaves money to T’s children. This issue is best analysed as:",
    choices: ["Lack of writing", "Fraud", "Privileged will", "Attestation clause defect"],
    correct: 1,
    explain: {
      whyRight:
        "If T is deceived about what they are signing, that points to fraud (and lack of true knowledge/approval), not a formalities problem.",
      whyWrong: [
        "The document can still be ‘in writing’.",
        "—",
        "Privileged wills are a different concept (special categories).",
        "An attestation clause is evidential, not a core validity requirement."
      ]
    }
  },
  {
    topic: "Valid will — execution by mark / initials",
    q: "T signs the will using an ‘X’ as a mark, intending it to authenticate the will. Assuming other requirements are met, the will is:",
    choices: [
      "Invalid because a full signature is required",
      "Valid because any mark intended as a signature can suffice",
      "Invalid unless a solicitor countersigns",
      "Valid only if the witnesses also initial each page"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A signature for s 9 purposes can include a mark if intended to authenticate/give effect to the will, provided the formalities are met.",
      whyWrong: [
        "A full name is not strictly required if the mark is intended as a signature.",
        "—",
        "A solicitor is not required.",
        "Initialling each page is not a statutory requirement."
      ]
    }
  },
  {
    topic: "Valid will — witnesses and capacity/benefit interplay",
    q: "Which statement is correct about a witness who is also a beneficiary?",
    choices: [
      "They cannot act as a witness at all, so execution fails",
      "They can be a witness, but their gift (and possibly their spouse/civil partner’s gift) is void under s 15",
      "They can be a witness and the gift stands if there are two witnesses",
      "They can be a witness only if the will is later proved in solemn form"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A beneficiary can witness, but the consequence is that the gift to the witness (and spouse/civil partner) is void under s 15; the will can still be validly executed.",
      whyWrong: [
        "Execution does not automatically fail; the gift is what is voided.",
        "—",
        "Two witnesses does not save the gift under s 15.",
        "Proof in solemn form is a procedural issue, not a cure for s 15."
      ]
    }
  },
  {
    topic: "Valid will — testator acknowledges signature but witnesses not together",
    q: "T acknowledges their signature to W1 on Monday and to W2 on Tuesday. W1 and W2 both later sign in T’s presence separately. The will is:",
    choices: [
      "Valid because acknowledgment can be separate",
      "Invalid because the signature must be made or acknowledged in the presence of two witnesses present at the same time",
      "Valid if both witnesses sign within 7 days",
      "Invalid only if the will leaves gifts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Acknowledgment must be in the presence of two witnesses present at the same time. Separate acknowledgments do not satisfy s 9.",
      whyWrong: [
        "Acknowledgment must still satisfy the ‘two witnesses present at the same time’ requirement.",
        "—",
        "There is no ‘7 day’ cure in s 9.",
        "Gifts are irrelevant to the formalities."
      ]
    }
  },
  {
    topic: "Valid will — witnesses sign out of testator’s presence",
    q: "T signs in front of W1 and W2 together. W1 and W2 then go into another room (T cannot see them) and sign the will. The will is:",
    choices: [
      "Valid because witnesses were present for T’s signature",
      "Invalid because witnesses must attest and sign in the testator’s presence",
      "Valid because the will was in writing and signed",
      "Invalid only if the witnesses are beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 9 requires each witness to attest and sign (or acknowledge) in the testator’s presence. If T is not present (line of sight), the requirement fails.",
      whyWrong: [
        "Witnesses must also sign in T’s presence.",
        "—",
        "Writing and T’s signature alone are insufficient without compliant witnessing.",
        "Beneficiary status is a separate issue."
      ]
    }
  },
  {
    topic: "Valid will — attestation clause",
    q: "A will has no attestation clause. Assuming s 9 is actually complied with, the will is:",
    choices: [
      "Invalid because an attestation clause is compulsory",
      "Valid; an attestation clause is evidential but not required",
      "Invalid unless the Probate Registry approves it",
      "Valid only if the will is handwritten"
    ],
    correct: 1,
    explain: {
      whyRight:
        "An attestation clause is good evidence of due execution but not a statutory requirement for validity.",
      whyWrong: [
        "No statutory requirement for an attestation clause.",
        "—",
        "Registry approval is not a validity requirement.",
        "Handwriting is not required."
      ]
    }
  },
  {
    topic: "Valid will — capacity vs formalities",
    q: "T’s will satisfies all s 9 formalities, but T lacked testamentary capacity at the time. The will is:",
    choices: [
      "Valid because formalities are everything",
      "Invalid because capacity is a separate essential requirement",
      "Valid if two doctors later confirm T was usually lucid",
      "Valid unless someone proves undue influence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Due execution is not enough: testamentary capacity is a separate essential requirement. If T lacked capacity at execution, the will is invalid.",
      whyWrong: [
        "Formalities do not override capacity requirements.",
        "—",
        "Later medical views may be evidence but cannot ‘validate’ a will made without capacity.",
        "Undue influence is separate; lack of capacity alone can invalidate."
      ]
    }
  },
  {
    topic: "Valid will — Banks v Goodfellow (claims of others)",
    q: "Under Banks v Goodfellow, the testator must be able to:",
    choices: [
      "List every relative by name",
      "Appreciate the claims of those who might expect to benefit",
      "Guarantee that the will is fair",
      "Explain probate procedure"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A key limb is that the testator can comprehend and appreciate the claims of potential beneficiaries (those with a moral claim).",
      whyWrong: [
        "Perfect recall of all relatives is not required.",
        "—",
        "Fairness is not the test.",
        "Probate procedure knowledge is not required for capacity."
      ]
    }
  },
  {
    topic: "Valid will — knowledge & approval displaced",
    q: "A will is duly executed, but there is strong evidence the testator was not told about a major clause added at the last minute. The best analysis is:",
    choices: [
      "Formalities fail automatically",
      "Knowledge and approval may be lacking, so the propounder may need to prove the testator knew and approved the contents",
      "The will is valid unless the witnesses also object",
      "This is only relevant to intestacy"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Even if s 9 is satisfied, the will can be challenged if the testator did not know/approve its contents—especially where suspicious circumstances arise.",
      whyWrong: [
        "Formalities and knowledge/approval are distinct issues.",
        "—",
        "Witness objections are not the legal test.",
        "It is directly relevant to validity of the will."
      ]
    }
  },
  {
    topic: "Valid will — undue influence vs persuasion",
    q: "Which example is most likely to be undue influence in a will case?",
    choices: [
      "B repeatedly asks T to remember B in the will",
      "B threatens to stop caring for T unless T leaves B everything",
      "B suggests T should consider charity as well as family",
      "B invites T to discuss estate planning with a solicitor"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A threat that effectively coerces T and overbears free will points to undue influence (coercion), the high threshold for wills.",
      whyWrong: [
        "Repeated requests may be persuasion but not necessarily coercion.",
        "—",
        "A suggestion is not coercion.",
        "Encouraging independent advice tends to reduce risk of undue influence."
      ]
    }
  },
  {
    topic: "Valid will — effect of later competence",
    q: "T lacked capacity on the day the will was executed but later regained capacity. The earlier will is:",
    choices: [
      "Validated automatically once capacity returns",
      "Invalid; capacity must exist at the time of execution",
      "Valid if T later tells the family they are happy with it",
      "Valid if the witnesses re-sign later"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Capacity must exist at the time the will is executed. Later recovery does not automatically validate a will made without capacity.",
      whyWrong: [
        "There is no automatic validation later.",
        "—",
        "Later approval may support a new will/codicil, but not retroactively validate the earlier execution.",
        "Re-signing by witnesses later does not fix lack of capacity at execution."
      ]
    }
  },
  {
    topic: "Valid will — reading the will",
    q: "Is it a legal requirement that the testator reads the will before signing?",
    choices: [
      "Yes, always",
      "No, but knowledge and approval must still be shown (e.g., it could be read/explained to them)",
      "Yes, unless the will is very short",
      "No, and knowledge and approval is irrelevant if s 9 is satisfied"
    ],
    correct: 1,
    explain: {
      whyRight:
        "There is no strict requirement that T personally reads the will, but T must still know and approve its contents; explanation/reading aloud can evidence this.",
      whyWrong: [
        "Not a formal statutory requirement.",
        "—",
        "Length does not change the requirement.",
        "Knowledge and approval remains relevant even with due execution."
      ]
    }
  },
  {
    topic: "Valid will — two witnesses requirement",
    q: "A will is signed by T and witnessed by only one witness. The will is:",
    choices: [
      "Valid if the witness is independent",
      "Invalid because two witnesses are required",
      "Valid if T initials each page",
      "Valid if it is handwritten"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 9 requires two witnesses. One witness is insufficient for a standard will.",
      whyWrong: [
        "Independence does not reduce the number required.",
        "—",
        "Initialling does not cure lack of a second witness.",
        "Handwriting does not cure lack of a second witness."
      ]
    }
  },
  {
    topic: "Valid will — witnesses must sign with intent?",
    q: "Do witnesses need to intend to give effect to the will when they sign?",
    choices: [
      "Yes, they must share the testator’s intention",
      "No, the statutory intention requirement relates to the testator’s signature",
      "Yes, otherwise the will is void",
      "Only if the will contains gifts to them"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The ‘intention to give effect’ requirement in s 9 is about the testator signing with that intention. Witnesses are attesting execution; they need not share the testamentary intention.",
      whyWrong: [
        "Witnesses do not need to share testamentary intent.",
        "—",
        "The will is not void for that reason alone.",
        "Gifts to witnesses engage s 15, not the testator-intention requirement."
      ]
    }
  },
  {
    topic: "Valid will — capacity and delusions",
    q: "T believes (without evidence) that their child is an impostor and disinherits them for that reason. Which issue is most directly raised?",
    choices: [
      "Lack of writing",
      "Possible lack of testamentary capacity if the delusion affected dispositions",
      "Automatic undue influence",
      "Failure of witnessing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under Banks v Goodfellow, a disorder/delusion can negate capacity if it poisons the dispositions made in the will.",
      whyWrong: [
        "The will can still be in writing.",
        "—",
        "Undue influence is different; delusion is about the testator’s mind.",
        "Witnessing is separate."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Wills and Estates | Chapter 1 | Validity of Wills",
    subtitle: "Wills Act 1837 s9 formalities, capacity, and knowledge/approval.",
    questions: questions
  };
})();
  
