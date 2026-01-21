(() => {
  const questions = [
  {
    topic: "Interpretation — overall approach",
    q: "When interpreting a will, the court’s primary objective is to:",
    choices: [
      "Achieve a fair outcome between family members",
      "Give effect to the testator’s intention as expressed in the will’s language, read in context",
      "Prefer intestacy rules over unclear clauses",
      "Rewrite the will to match what witnesses believed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Construction focuses on the testator’s intention as expressed in the will, using the ordinary meaning of the words in context and reading the will as a whole.",
      whyWrong: [
        "Fairness is not the test; the will/intention governs.",
        "—",
        "Intestacy applies only if the will/gift fails; it is not preferred.",
        "Witness beliefs are not the yardstick for construction."
      ]
    }
  },
  {
    topic: "Interpretation — reading the will as a whole",
    q: "Which statement is most accurate about construing clauses in a will?",
    choices: [
      "Each clause must be interpreted in isolation to avoid contamination",
      "A clause should be interpreted in the context of the will as a whole",
      "Earlier clauses automatically override later clauses",
      "Later clauses are ignored if they reduce a family member’s share"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The will is read as a whole; context within the document can clarify meaning and resolve apparent tensions.",
      whyWrong: [
        "Isolation can distort meaning; courts read the whole will.",
        "—",
        "No automatic override rule; construction resolves conflicts as a matter of intention/context.",
        "Family outcomes do not control interpretation."
      ]
    }
  },
  {
    topic: "Interpretation — ordinary meaning",
    q: "The starting point for interpreting words used in a will is generally:",
    choices: [
      "Whatever beneficiaries say the testator meant",
      "The ordinary and natural meaning of the words, in context",
      "A presumption that technical legal meanings always apply",
      "A presumption that charitable gifts are invalid"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Construction usually starts with ordinary meaning, considering context and the will as a whole.",
      whyWrong: [
        "Beneficiaries’ views are not the legal starting point.",
        "—",
        "Technical meanings may apply sometimes, but not always by presumption.",
        "There is no such presumption."
      ]
    }
  },
  {
    topic: "Armchair principle — background facts",
    q: "The ‘armchair principle’ most accurately means the court may:",
    choices: [
      "Ignore the wording and decide what seems sensible",
      "Place itself in the testator’s position, considering relevant background known to the testator",
      "Admit any evidence of intention even where wording is clear",
      "Treat the solicitor’s preferred reading as decisive"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The armchair approach allows the court to consider relevant surrounding circumstances to interpret the will, without contradicting clear language.",
      whyWrong: [
        "The wording remains central; the court does not substitute its own view.",
        "—",
        "Extrinsic intention evidence is limited and usually requires ambiguity/meaninglessness under statute.",
        "A solicitor’s preference is not decisive."
      ]
    }
  },
  {
    topic: "Extrinsic evidence — statutory gateway",
    q: "Administration of Justice Act 1982, s 20 primarily concerns:",
    choices: [
      "Formal execution of wills",
      "When extrinsic evidence can be admitted to assist interpretation",
      "Witness gifts being void",
      "Revocation by marriage"
    ],
    correct: 1,
    explain: {
      whyRight:
        "AJA 1982 s 20 permits extrinsic evidence (including intention evidence) in defined situations to help interpret a will.",
      whyWrong: [
        "Formalities are mainly Wills Act 1837 s 9.",
        "—",
        "Witness gifts relate to Wills Act 1837 s 15.",
        "Marriage revocation is a different topic."
      ]
    }
  },
  {
    topic: "Extrinsic evidence — meaninglessness",
    q: "A will clause states: “I leave £10,000 to my ‘blorf’.” The term ‘blorf’ is meaningless. Under AJA 1982 s 20, the court may:",
    choices: [
      "Automatically strike the gift out with no further inquiry",
      "Admit extrinsic evidence (including intention evidence) to help interpret the meaning",
      "Treat ‘blorf’ as meaning ‘spouse’ by default",
      "Convert the gift into a charitable gift"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where wording is meaningless, s 20 allows extrinsic evidence to assist interpretation.",
      whyWrong: [
        "The court can consider evidence to make sense of it if possible.",
        "—",
        "There is no default substitution rule.",
        "There is no automatic conversion to charity."
      ]
    }
  },
  {
    topic: "Extrinsic evidence — facial ambiguity",
    q: "A will says: “I leave my car to either A or B.” The will does not specify which. This is best described as:",
    choices: [
      "No ambiguity; it is certain",
      "Ambiguity on the face of the will (patent ambiguity), permitting extrinsic evidence under s 20",
      "A valid discretionary trust",
      "An alteration clause issue under Wills Act 1837 s 21"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the wording is ambiguous on its face, s 20 may permit extrinsic evidence to resolve the ambiguity.",
      whyWrong: [
        "It is ambiguous because it doesn’t identify the recipient.",
        "—",
        "This is not drafted as a trust and lacks certainty of intention/structure.",
        "This is not about alterations after execution."
      ]
    }
  },
  {
    topic: "Extrinsic evidence — latent ambiguity",
    q: "T leaves “£5,000 to my cousin Alex.” T has two cousins named Alex. This is:",
    choices: [
      "A facial ambiguity only",
      "A latent ambiguity revealed by extrinsic facts, allowing extrinsic evidence under s 20",
      "Automatically void for uncertainty",
      "Rectifiable only under s 21"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The wording seems clear until applied to facts; two people fit. That is latent ambiguity and s 20 can allow evidence to resolve it.",
      whyWrong: [
        "The ambiguity arises when applied to the facts, not solely on the face.",
        "—",
        "It is not automatically void; evidence may resolve it.",
        "Rectification is a separate remedy with different criteria."
      ]
    }
  },
  {
    topic: "Extrinsic evidence — limits",
    q: "If a will clearly states “I leave £50,000 to A,” but T later told friends they meant B, the court will generally:",
    choices: [
      "Admit the friends’ evidence to override the clear wording",
      "Refuse to admit intention evidence to contradict clear wording, absent a s 20 gateway or rectification case",
      "Treat the gift as void",
      "Split the £50,000 between A and B"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Clear wording is not normally displaced by informal intention evidence unless statutory gateways (s 20 ambiguity/meaninglessness) or rectification apply.",
      whyWrong: [
        "Evidence can’t usually contradict clear language without a proper basis.",
        "—",
        "A clear gift is not void.",
        "Courts don’t rewrite as a compromise."
      ]
    }
  },
  {
    topic: "Rectification — statutory basis",
    q: "Administration of Justice Act 1982, s 21 primarily provides for:",
    choices: [
      "Revocation by divorce",
      "Rectification of a will in defined circumstances",
      "Rules on witness attestation",
      "Intestacy distribution"
    ],
    correct: 1,
    explain: {
      whyRight:
        "AJA 1982 s 21 allows rectification where the will fails to carry out T’s intentions due to clerical error or failure to understand instructions.",
      whyWrong: [
        "Divorce effects are different provisions/topics.",
        "—",
        "Attestation is Wills Act 1837 s 9.",
        "Intestacy is separate legislation/topics."
      ]
    }
  },
  {
    topic: "Rectification — clerical error",
    q: "A solicitor accidentally types “£5,000” instead of “£50,000” in the will, contrary to T’s instructions. This is most likely:",
    choices: [
      "A valid alteration under Wills Act 1837 s 21",
      "Rectifiable under AJA 1982 s 21 as a clerical error",
      "Automatically corrected by reading the will as a whole",
      "Invalidating the entire will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A drafting slip like an incorrect figure is a classic clerical error potentially rectifiable under s 21.",
      whyWrong: [
        "This isn’t an alteration after execution; it’s a drafting error in the executed document.",
        "—",
        "Construction alone can’t usually change a clear number without statutory basis.",
        "One error rarely invalidates the entire will."
      ]
    }
  },
  {
    topic: "Rectification — failure to understand instructions",
    q: "T instructs the drafter to leave “my shares in X Ltd” to A, but the drafter mistakenly writes “my shares in Y Ltd.” This is most likely:",
    choices: [
      "Rectifiable under AJA 1982 s 21 as failure to understand instructions",
      "A harmless error that the court ignores without evidence",
      "A valid alteration under Wills Act 1837 s 21",
      "A case where extrinsic evidence is never admissible"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If the will fails to carry out instructions because the drafter misunderstood them, rectification under s 21 may be available.",
      whyWrong: [
        "—",
        "Courts need a proper basis; they don’t simply ‘ignore’ clear words.",
        "This is not an alteration after execution.",
        "Evidence may be admissible, particularly in rectification proceedings."
      ]
    }
  },
  {
    topic: "Rectification — not a general fairness power",
    q: "Which statement best reflects rectification under AJA 1982 s 21?",
    choices: [
      "The court can rewrite any will that seems unfair",
      "Rectification is limited to cases of clerical error or failure to understand instructions",
      "Rectification applies whenever beneficiaries agree",
      "Rectification is available only if the will was not witnessed correctly"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Rectification is a narrow remedy based on specific statutory grounds, not general fairness.",
      whyWrong: [
        "Courts do not have a general fairness jurisdiction to rewrite wills.",
        "—",
        "Beneficiary agreement doesn’t create the statutory basis.",
        "Witnessing defects relate to validity, not rectification."
      ]
    }
  },
  {
    topic: "Rectification — evidence of intention",
    q: "In a rectification claim under s 21, which is most accurate about evidence?",
    choices: [
      "Evidence of T’s instructions and intention can be central to prove the error and intended wording",
      "No extrinsic evidence is ever allowed",
      "Only witness evidence is admissible",
      "Only the will itself can be considered"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Rectification usually turns on proving what T intended and how the will failed to reflect it (e.g., instructions to drafter, drafts, notes).",
      whyWrong: [
        "—",
        "Extrinsic evidence is often crucial in rectification.",
        "Not limited to witnesses; drafting file evidence is common.",
        "Rectification necessarily looks beyond the face of the will."
      ]
    }
  },
  {
    topic: "Alterations — statutory rule",
    q: "Wills Act 1837, s 21 mainly governs:",
    choices: [
      "Alterations to a will after execution",
      "Minimum age to make a will",
      "Gifts to witnesses",
      "Rectification for clerical errors"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Wills Act 1837 s 21 addresses how alterations made after execution are treated, and when they are valid.",
      whyWrong: [
        "—",
        "Age is a different topic.",
        "Witness gifts are Wills Act 1837 s 15.",
        "Rectification is AJA 1982 s 21."
      ]
    }
  },
  {
    topic: "Alterations — invalid alteration consequence",
    q: "After execution, T crosses out a beneficiary’s name and writes another name, but the change is not properly witnessed/executed. The likely result is:",
    choices: [
      "The altered version automatically applies",
      "The alteration is ineffective and the will is read as originally executed (subject to evidence of the original text)",
      "The entire will becomes invalid",
      "The gift passes to the Crown"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A material post-execution alteration generally needs proper execution; otherwise it is ineffective and the will is treated as unaltered, if the original wording can be established.",
      whyWrong: [
        "Unauthorised alterations don’t automatically take effect.",
        "—",
        "One invalid alteration does not usually invalidate the whole will.",
        "Bona vacantia is not the automatic outcome."
      ]
    }
  },
  {
    topic: "Alterations — re-execution requirement",
    q: "A material alteration to a will made after execution is generally valid only if:",
    choices: [
      "The testator initials the margin",
      "It is executed with the same formalities as a will (signature/attestation)",
      "The beneficiaries consent in writing",
      "The Probate Registry stamps the page"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Material alterations after execution generally must be executed/attested as required (or otherwise meet statutory requirements) to be effective.",
      whyWrong: [
        "Initialling alone is usually not enough for a material alteration.",
        "—",
        "Beneficiary consent is irrelevant to statutory formalities.",
        "Registry stamping is not a validity requirement."
      ]
    }
  },
  {
    topic: "Alterations — non-material changes",
    q: "Which change is most likely to be treated as non-material (so it may not require re-execution to be effective)?",
    choices: [
      "Changing ‘£5,000’ to ‘£50,000’",
      "Correcting a spelling mistake that does not affect meaning",
      "Replacing A with B as a beneficiary",
      "Adding a new gift clause"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A purely clerical/spelling correction that does not affect meaning is more likely to be non-material.",
      whyWrong: [
        "Changing amounts is material.",
        "—",
        "Changing the beneficiary is material.",
        "Adding a new gift is material."
      ]
    }
  },
  {
    topic: "Alterations — obliteration/erasure",
    q: "T erases a line in the will after execution, removing a gift, without proper attestation. The most accurate analysis is:",
    choices: [
      "The erasure is effective because it removes wording rather than adds",
      "The erasure is a material alteration and is ineffective without compliance with s 21 formalities",
      "Erasures are always ignored even if properly executed",
      "The whole will is revoked"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Removing text can be a material alteration; without compliance, it is generally ineffective.",
      whyWrong: [
        "Deletion can still be a material alteration requiring compliance.",
        "—",
        "Properly executed alterations can be effective.",
        "An invalid alteration does not necessarily revoke the whole will."
      ]
    }
  },
  {
    topic: "Interpretation — identifying property",
    q: "T leaves “my house in London” to A. T owns two houses in London. The best approach is:",
    choices: [
      "Gift is automatically void for uncertainty",
      "Use extrinsic evidence/background facts to identify which property T meant (latent ambiguity)",
      "Assume the most valuable house is intended",
      "Divide both houses equally between A and the residuary beneficiary"
    ],
    correct: 1,
    explain: {
      whyRight:
        "This is latent ambiguity; the court can consider relevant background/extrinsic facts (often via s 20) to identify the intended property.",
      whyWrong: [
        "Not automatically void; it may be resolvable by evidence.",
        "—",
        "No such default ‘most valuable’ rule.",
        "Courts do not invent splits unless the will supports it."
      ]
    }
  },
  {
    topic: "Interpretation — identifying a person",
    q: "T leaves a gift to “my nephew Sam,” but has no nephew; T has a niece named Samantha known as 'Sam'. The court is most likely to:",
    choices: [
      "Treat the gift as void immediately",
      "Consider background facts/naming usage to identify the intended person",
      "Rewrite the will to include all nieces and nephews",
      "Apply intestacy for that gift automatically without inquiry"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Courts can use context and surrounding facts to identify persons referred to, especially where nicknames/misdescriptions are involved.",
      whyWrong: [
        "Not necessarily void if the intended person can be identified.",
        "—",
        "Courts don’t rewrite for a class gift without basis.",
        "A failed gift may fall to residue, not automatically intestacy."
      ]
    }
  },
  {
    topic: "Interpretation — class gifts",
    q: "T leaves “£20,000 to my children.” Which is most accurate?",
    choices: [
      "The gift fails unless every child is named individually",
      "This is a class description; the court identifies who qualifies as 'children' at the relevant time",
      "It always includes stepchildren",
      "It always excludes adopted children"
    ],
    correct: 1,
    explain: {
      whyRight:
        "‘My children’ is a class description; the court identifies who falls within it (usually biological and legally adopted children, depending on legal meaning/context).",
      whyWrong: [
        "Class gifts can be valid without naming each member.",
        "—",
        "Stepchildren are not automatically included without wording/context indicating that.",
        "Adopted children are generally treated as children in law, subject to context."
      ]
    }
  },
  {
    topic: "Interpretation — technical vs ordinary meaning",
    q: "If a will uses a legal term (e.g., 'issue') without explanation, the court will generally:",
    choices: [
      "Always use the technical legal meaning regardless of context",
      "Consider whether the context suggests ordinary meaning or technical meaning was intended",
      "Ignore the term and apply intestacy",
      "Ask witnesses what they thought it meant and follow that"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Courts look at the will as a whole and context to decide whether technical or ordinary meaning was intended.",
      whyWrong: [
        "Not always regardless of context.",
        "—",
        "Interpretation comes before intestacy.",
        "Witness beliefs are not determinative."
      ]
    }
  },
  {
    topic: "Interpretation — conflicting provisions",
    q: "A will contains two clauses that appear inconsistent. The court will generally:",
    choices: [
      "Automatically ignore the later clause",
      "Try to reconcile the clauses by reading the will as a whole to give effect to the overall intention",
      "Declare the entire will void",
      "Apply intestacy to the whole estate"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The court aims to construe the will as a whole and reconcile provisions if possible to give effect to intention.",
      whyWrong: [
        "No automatic rule that later clauses are ignored.",
        "—",
        "Inconsistency does not usually void the whole will.",
        "Intestacy is a last resort where gifts/parts fail."
      ]
    }
  },
  {
    topic: "AJA 1982 s20 — intention evidence included",
    q: "Under AJA 1982 s 20, when the gateway applies, extrinsic evidence may include:",
    choices: [
      "Evidence of the testator’s intention",
      "Only medical records",
      "Only the witnesses’ opinions",
      "Only the solicitor’s preferred interpretation"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Where s 20 applies (meaningless/ambiguous wording), extrinsic evidence can include evidence of the testator’s intention.",
      whyWrong: [
        "—",
        "Not limited to medical records.",
        "Not limited to witnesses’ opinions.",
        "Not limited to a solicitor’s preference."
      ]
    }
  },
  {
    topic: "Interpretation vs rectification — distinction",
    q: "Which best distinguishes construction (interpretation) from rectification?",
    choices: [
      "Construction changes the wording; rectification never does",
      "Construction interprets the wording used; rectification can change the wording where statutory grounds are met",
      "Construction is only for intestacy; rectification is only for wills",
      "Construction requires court proceedings; rectification does not"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Construction gives meaning to the words used; rectification is a remedy to amend the wording when the will fails to reflect instructions due to clerical error or misunderstanding.",
      whyWrong: [
        "Construction does not usually change wording; rectification can, but the statement is oversimplified and misleading.",
        "—",
        "Construction is primarily for wills; intestacy is separate.",
        "Both may require proceedings; rectification typically does."
      ]
    }
  },
  {
    topic: "Alterations — attestation near alteration",
    q: "A material alteration after execution is made and the testator and both witnesses sign near the alteration. The best analysis is:",
    choices: [
      "It is automatically invalid because alterations are prohibited",
      "It is likely valid if executed/attested in compliance with the required formalities for that alteration",
      "It is valid only if the whole will is re-signed on every page",
      "It is valid only if a solicitor countersigns"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A material alteration can be effective if properly executed/attested in line with the statutory requirements (commonly by signatures near the alteration indicating authentication).",
      whyWrong: [
        "Alterations are not prohibited, but they must comply with the rules.",
        "—",
        "There is no universal requirement to re-sign every page.",
        "A solicitor is not required."
      ]
    }
  },
  {
    topic: "Alterations — crossing out without proof of original text",
    q: "T crosses out a beneficiary’s name after execution without proper attestation. The original name is now unreadable. The most accurate risk is:",
    choices: [
      "The court will guess the original name",
      "If the original wording cannot be proved, the gift may fail due to uncertainty",
      "The crossed-out beneficiary automatically takes",
      "The entire will is revoked"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If an invalid alteration obscures the original text and the original cannot be established, the relevant gift can fail through uncertainty.",
      whyWrong: [
        "Courts do not guess without evidence.",
        "—",
        "There is no automatic rule that the crossed-out person takes.",
        "A failed clause does not automatically revoke the entire will."
      ]
    }
  },
  {
    topic: "Incorporation by reference — concept",
    q: "Incorporation by reference in wills generally refers to:",
    choices: [
      "Automatically attaching any document found in the testator’s home to the will",
      "Treating a separate document as part of the will if the will refers to it in a way that identifies it and the document exists as required",
      "Allowing verbal instructions to replace written clauses",
      "Letting beneficiaries choose which documents count"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A separate document can sometimes be incorporated if the will/codicil refers to it sufficiently and relevant conditions are met (often taught as ‘identified and existing’).",
      whyWrong: [
        "Not automatic; strict identification/conditions apply.",
        "—",
        "Oral instructions do not generally replace formal written terms.",
        "Beneficiaries don’t get to choose."
      ]
    }
  },
  {
    topic: "Codicil — function",
    q: "Which best describes a codicil?",
    choices: [
      "A letter to the family explaining the will",
      "A document executed with will formalities that amends, explains, or adds to an existing will",
      "A Probate Registry form",
      "A trust deed that replaces a will automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A codicil is a testamentary document executed with the required formalities, used to amend/supplement an existing will.",
      whyWrong: [
        "A letter is not necessarily testamentary or validly executed.",
        "—",
        "Registry forms are procedural, not testamentary.",
        "A trust deed does not automatically replace a will."
      ]
    }
  },
  {
    topic: "Republication by codicil — effect",
    q: "A properly executed codicil can ‘republish’ a will. The most accurate meaning is:",
    choices: [
      "The will becomes invalid and must be re-signed",
      "The will is treated as speaking from the date of the codicil for certain purposes",
      "The codicil replaces all gifts in the will automatically",
      "Republication only affects witness gifts under s 15"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Republication by codicil can treat the will as re-made at the date of the codicil (relevant to matters like identification of property/beneficiaries in some contexts).",
      whyWrong: [
        "Republication does not invalidate the will by default.",
        "—",
        "A codicil only changes what it changes.",
        "It is not limited to witness gifts."
      ]
    }
  },
  {
    topic: "Interpretation — ‘my’ and ownership",
    q: "T leaves “my shares in Z plc” to A. At death, T holds the shares through a nominee account. The best interpretive approach is:",
    choices: [
      "Gift fails because T did not personally hold paper certificates",
      "Consider the substance of ownership and context to decide whether the shares fall within ‘my shares’",
      "Treat nominee holdings as never part of an estate",
      "Give the gift to the nominee"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Construction looks at what T meant by ‘my shares’ in context; nominee arrangements may still represent T’s beneficial ownership within the estate.",
      whyWrong: [
        "Paper certificates are not determinative of ownership.",
        "—",
        "Nominee-held investments can still be estate assets beneficially owned by T.",
        "A nominee is not automatically the intended beneficiary."
      ]
    }
  },
  {
    topic: "Interpretation — ‘the residue’",
    q: "A will gives several specific legacies and then states “I give the residue to B.” ‘Residue’ generally means:",
    choices: [
      "Only cash held in bank accounts",
      "What remains after paying expenses/debts and satisfying prior gifts",
      "Only the deceased’s personal belongings",
      "Only property acquired after the will was signed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Residue is the remainder of the estate after liabilities, expenses, and earlier gifts are dealt with.",
      whyWrong: [
        "Residue is not limited to cash.",
        "—",
        "Not limited to chattels.",
        "Not limited to after-acquired property."
      ]
    }
  },
  {
    topic: "Interpretation — partial invalidity",
    q: "If one clause of a will is uncertain and cannot be resolved, the usual consequence is:",
    choices: [
      "The entire will is void",
      "Only that gift/part fails, and the rest of the will can still operate",
      "All gifts fail and intestacy applies to the entire estate",
      "Witnesses decide what the clause should mean"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A problem with one clause generally affects that clause; the remainder can still be valid and effective.",
      whyWrong: [
        "Wills are not usually wholly voided by one defective clause.",
        "—",
        "Intestacy may apply only to the failed part if it does not fall into residue.",
        "Witnesses do not decide meaning."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Wills and Estates | Chapter 3 | Construction of Wills",
    subtitle: "Interpreting clauses, intention, and contextual meaning.",
    questions: questions
  };
})();
  
