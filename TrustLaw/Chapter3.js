(() => {
  const questions = [
  {
    topic: "Construction — objective interpretation",
    q: "When construing a trust instrument, the court primarily seeks to determine:",
    choices: [
      "The settlor’s undisclosed subjective intention",
      "The objective meaning of the words used, read in context",
      "What outcome seems fairest to the beneficiaries",
      "What the trustees personally think is best"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Construction is objective: the court interprets the words used in their context to determine the legal effect of the disposition.",
      whyWrong: [
        "Secret subjective intention is not the primary test.",
        "—",
        "Fairness does not allow the court to rewrite the instrument.",
        "Trustees’ personal views do not determine meaning."
      ]
    }
  },
  {
    topic: "Construction — court can construe but not rewrite",
    q: "Which statement is most accurate about the court’s role in construing trusts?",
    choices: [
      "The court may rewrite unclear clauses to achieve a sensible result",
      "The court interprets the instrument and may resolve ambiguities, but generally will not rewrite the settlor’s dispositions",
      "The court must always prefer an interpretation that benefits the widest class",
      "The court always treats unclear wording as creating a discretionary trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Courts interpret the instrument and can resolve genuine ambiguity, but they do not generally rewrite the trust to rescue poor drafting.",
      whyWrong: [
        "Rewriting goes beyond construction.",
        "—",
        "No such rule: the aim is the legal meaning, not maximum breadth.",
        "Unclear wording doesn’t automatically become a discretionary trust."
      ]
    }
  },
  {
    topic: "Construction — trust vs power (spotting)",
    q: "T is given property 'to distribute among my relatives as T thinks fit'. Which is the best starting point?",
    choices: [
      "This is always a fixed trust",
      "This is likely a discretionary trust (trust power) because T is to distribute, but has discretion as to shares/selection within the class",
      "This is always a mere power because discretion is mentioned",
      "This is void because 'relatives' is always conceptually uncertain"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Language directing T 'to distribute' suggests obligation (trust), while 'as T thinks fit' indicates discretion as to allocation—typical of a discretionary trust.",
      whyWrong: [
        "Fixed trusts require fixed shares (or a clear basis to fix them).",
        "—",
        "Discretion does not automatically mean mere power; obligation language can still create a discretionary trust.",
        "'Relatives' can be workable depending on definition/evidence; it’s not automatically conceptually uncertain."
      ]
    }
  },
  {
    topic: "Construction — mere power language",
    q: "A clause states: 'T may pay such amounts to any of my children as T thinks fit.' Most likely classification?",
    choices: [
      "Mere power (permissive 'may')",
      "Fixed trust",
      "Resulting trust",
      "Charitable trust"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Permissive language ('may') typically indicates a mere power rather than an obligation to distribute, though the whole instrument must be read.",
      whyWrong: [
        "—",
        "Fixed trust would require obligation plus fixed shares.",
        "A resulting trust is usually a consequence of failure, not the initial construction.",
        "Children are private beneficiaries, not a charitable purpose."
      ]
    }
  },
  {
    topic: "Construction — 'shall' vs 'may'",
    q: "Which statement is most accurate about the significance of 'shall' and 'may'?",
    choices: [
      "'Shall' always creates a trust and 'may' always creates a power",
      "The words are strong indicators, but the entire instrument and context determine whether there is an obligation",
      "The words make no difference at all",
      "Only the heading of the document matters"
    ],
    correct: 1,
    explain: {
      whyRight:
        "‘Shall’ tends to indicate obligation and ‘may’ permission, but construction is contextual and looks at the instrument as a whole.",
      whyWrong: [
        "There is no absolute rule.",
        "—",
        "Wording does matter as part of construction.",
        "Headings can help but are not determinative."
      ]
    }
  },
  {
    topic: "Construction — fixed trust features",
    q: "Which is most characteristic of a fixed trust?",
    choices: [
      "Trustees decide who benefits from within a class",
      "Beneficiaries’ shares are predetermined and trustees have no discretion as to allocation",
      "Trustees can choose whether to distribute at all",
      "Beneficiaries cannot enforce the trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In a fixed trust, the beneficiaries and their entitlements are fixed; trustees must give effect to them.",
      whyWrong: [
        "That describes a discretionary trust.",
        "—",
        "That suggests a mere power, not a fixed trust.",
        "Beneficiaries can enforce fixed trusts."
      ]
    }
  },
  {
    topic: "Construction — discretionary trust features",
    q: "Which is most characteristic of a discretionary trust?",
    choices: [
      "A complete list of beneficiaries must be drawable in all cases",
      "Trustees must distribute, but have discretion as to which objects benefit and/or in what amounts",
      "Trustees are free to ignore the clause entirely without considering it",
      "Beneficiaries have fixed shares"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A discretionary trust imposes an obligation to consider distribution and to distribute, but trustees choose the recipients/amounts within the class.",
      whyWrong: [
        "Complete list is the fixed trust test; discretionary trusts use the 'is or is not' test for objects.",
        "—",
        "Trustees usually must at least consider exercise; they cannot simply ignore obligations.",
        "Fixed shares point to a fixed trust."
      ]
    }
  },
  {
    topic: "Construction — trust power vs mere power (consequences)",
    q: "Which consequence most strongly suggests a clause is a discretionary trust rather than a mere power?",
    choices: [
      "Trustees can be compelled by the court to properly consider and carry out distributions",
      "Trustees can never be removed",
      "Beneficiaries must provide consideration",
      "The trust must be in writing"
    ],
    correct: 0,
    explain: {
      whyRight:
        "With a discretionary trust (trust power), trustees are under a duty to consider and distribute; the court can enforce due administration. Mere powers are generally not enforceable in the same way.",
      whyWrong: [
        "Trustees can be removed in appropriate circumstances.",
        "—",
        "Consideration is not required.",
        "Writing depends on subject matter/formalities, not the trust/power classification."
      ]
    }
  },
  {
    topic: "Construction — 'friends' class",
    q: "A trust clause benefits 'my friends'. What is the main construction/validity risk?",
    choices: [
      "The court will treat it as charitable",
      "Conceptual uncertainty as to who counts as a 'friend'",
      "Subject matter uncertainty",
      "Automatic severance of the word 'friends'"
    ],
    correct: 1,
    explain: {
      whyRight:
        "‘Friends’ may be conceptually uncertain, making it hard to apply the 'is or is not' test; construction cannot invent a precise boundary.",
      whyWrong: [
        "Private 'friends' is not a charitable purpose/class.",
        "—",
        "This is objects/class uncertainty, not identifying the property.",
        "Courts cannot simply delete problematic words if that changes the substance."
      ]
    }
  },
  {
    topic: "Construction — 'relatives' class (Re Baden-type issue)",
    q: "A discretionary trust for 'my relatives' is challenged. Which is the best approach?",
    choices: [
      "Automatically void: 'relatives' is always uncertain",
      "Consider whether the term has a workable legal meaning (e.g., descendants / next of kin) and whether the 'is or is not' test can be applied",
      "Treat it as a fixed trust with equal shares",
      "Convert it into a charitable trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Construction asks whether 'relatives' can be given a workable meaning, enabling the class test to be applied; not every broad term is automatically conceptually uncertain.",
      whyWrong: [
        "Too absolute; it depends on meaning and context.",
        "—",
        "Equal shares is not imposed unless the instrument supports it.",
        "Private family terms do not become charitable."
      ]
    }
  },
  {
    topic: "Construction — precatory language (Lambe/Re Adams)",
    q: "S gives property to T 'in full confidence that T will provide for my children'. Best construction starting point?",
    choices: [
      "Automatic trust for the children",
      "Likely absolute gift to T unless, reading the instrument as a whole, the words impose an obligation (precatory words usually insufficient)",
      "Void for uncertainty of subject matter",
      "Always a half secret trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Precatory wording like 'in full confidence' often indicates a moral request rather than a trust, unless the whole instrument shows obligation (cf *Lambe v Eames*, *Re Adams*, contrasted with *Comiskey*).",
      whyWrong: [
        "Precatory words do not automatically create a trust.",
        "—",
        "This is not primarily a subject matter problem.",
        "Not a secret trust scenario unless the will indicates trust secretly/partially."
      ]
    }
  },
  {
    topic: "Construction — Comiskey-style reading as a whole",
    q: "Which best reflects the lesson from construction cases like *Comiskey v Bowring-Hanbury*?",
    choices: [
      "If any phrase is precatory, the entire trust fails",
      "The instrument must be read as a whole; apparently precatory words can be overridden by clear mandatory directions elsewhere",
      "Only technical trust words count",
      "Construction ignores later clauses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Reading the instrument as a whole is key: mandatory provisions can show binding intention despite some wish-like language.",
      whyWrong: [
        "Precatory phrases do not automatically defeat a trust if overall obligation is clear.",
        "—",
        "Trusts can be created without technical words if intention is clear.",
        "Later clauses can be crucial to meaning."
      ]
    }
  },
  {
    topic: "Construction — fixed trust share uncertainty (Boyce v Boyce)",
    q: "T is to pick one item for A, and the remainder goes to B, but T never chooses. What construction/operation issue arises?",
    choices: [
      "Objects uncertainty",
      "Share uncertainty because the mechanism for determining entitlements failed (risking trust failure)",
      "Illegality",
      "Wills Act formalities"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where the trustee’s choice is essential to identify what B gets, failure to choose can make B’s entitlement uncertain and cause failure (classic exam trap: *Boyce v Boyce*).",
      whyWrong: [
        "The beneficiaries are identifiable; the problem is what each gets.",
        "—",
        "Illegality is not engaged.",
        "Not a will formality issue on these facts."
      ]
    }
  },
  {
    topic: "Construction — condition precedent vs subsequent (spotting)",
    q: "S leaves property 'to B if B survives me by 30 days'. This is best analysed as:",
    choices: [
      "A discretionary trust",
      "A condition precedent to B taking the gift",
      "A mere power",
      "A resulting trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "‘If’ survival by 30 days is a condition that must be satisfied before B takes; it’s a condition precedent, not a trust/power.",
      whyWrong: [
        "No discretion/trust language is present.",
        "—",
        "No power to appoint; it’s a conditional gift.",
        "Resulting trust is not the first construction; it may arise only if the gift fails with no alternative."
      ]
    }
  },
  {
    topic: "Construction — 'subject to' wording",
    q: "S gives property to T 'subject to paying £10,000 to B'. Best construction?",
    choices: [
      "T takes absolutely and B has no rights",
      "T takes, but is burdened with an enforceable obligation (often a trust/charge depending on context)",
      "Void for uncertainty",
      "Automatically a charitable trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "‘Subject to paying’ typically indicates an enforceable obligation; construction may treat it as a trust obligation or a charge depending on the instrument.",
      whyWrong: [
        "The wording indicates B is intended to have enforceable rights.",
        "—",
        "If the amount/person is clear, it’s not uncertain.",
        "No charitable element is indicated."
      ]
    }
  },
  {
    topic: "Construction — identifying whether clause creates a trust",
    q: "Which factor most strongly supports construing a clause as creating a trust (rather than a mere power)?",
    choices: [
      "Use of the word 'may' without more",
      "A clear imperative direction to hold/distribute for beneficiaries",
      "Lack of any trustee named",
      "Trust property is valuable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Imperative language imposing duties to hold/distribute is a strong indicator of a trust obligation.",
      whyWrong: [
        "'May' tends to indicate permission/power.",
        "—",
        "Trustees can sometimes be appointed by the court; absence of a named trustee doesn’t automatically mean no trust.",
        "Value doesn’t determine classification."
      ]
    }
  },
  {
    topic: "Construction — 'as T thinks fit' (allocation)",
    q: "A clause states: 'T shall apply the income for the benefit of my children as T thinks fit.' Most likely effect?",
    choices: [
      "Fixed trust with equal shares",
      "Discretionary trust as to selection/amounts (trust power over income)",
      "Mere power (no obligation to apply income)",
      "Void because children are too uncertain"
    ],
    correct: 1,
    explain: {
      whyRight:
        "‘Shall apply’ indicates obligation (trust), while ‘as T thinks fit’ gives discretion as to allocation within the children class—typical discretionary trust over income.",
      whyWrong: [
        "Equal shares aren’t implied where discretion is conferred.",
        "—",
        "The obligation language points away from a mere power.",
        "Children are conceptually certain as a class."
      ]
    }
  },
  {
    topic: "Construction — power with default gift",
    q: "S leaves property to T with 'power to distribute among my nieces', and if not appointed, to X absolutely. What does the default gift suggest?",
    choices: [
      "It confirms T has a power (not a duty) because there is an express gift-over if not exercised",
      "It converts the power into a fixed trust",
      "It makes the clause void",
      "It creates a charitable trust"
    ],
    correct: 0,
    explain: {
      whyRight:
        "An express gift-over on non-exercise often suggests the settlor contemplated non-exercise, supporting construction as a mere power rather than an obligation to distribute.",
      whyWrong: [
        "A gift-over does not typically create fixed shares.",
        "—",
        "It does not make the clause void; it can clarify operation.",
        "No charitable purpose is indicated."
      ]
    }
  },
  {
    topic: "Construction — evidential vs conceptual uncertainty (objects)",
    q: "Why does the court distinguish conceptual uncertainty from evidential uncertainty when construing a class?",
    choices: [
      "Because conceptual uncertainty (unclear meaning) can be fatal, whereas evidential uncertainty (hard proof) may not be",
      "Because evidential uncertainty always invalidates trusts",
      "Because conceptual uncertainty can always be cured by trustee discretion",
      "Because the distinction only matters for charities"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If the concept itself is unclear, you cannot apply the class test; but if the concept is clear and proof is hard, the trust may still be valid (especially for discretionary trusts/powers).",
      whyWrong: [
        "Evidential uncertainty does not always invalidate a trust.",
        "—",
        "Trustee discretion cannot cure an undefined concept.",
        "The distinction is not limited to charities."
      ]
    }
  },
  {
    topic: "Construction — administrative unworkability",
    q: "A discretionary trust for 'all residents of the UK' is challenged. Even if conceptually clear, it may fail because:",
    choices: [
      "It is a purpose trust",
      "The class is administratively unworkable (too large to meaningfully administer)",
      "It breaches Wills Act s9",
      "It requires consideration"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A class may be so wide that it is administratively unworkable for trustees to perform their duties, risking invalidity for a discretionary trust.",
      whyWrong: [
        "It is a trust for persons, not a purpose trust.",
        "—",
        "Not a wills formality issue on these facts.",
        "Consideration is irrelevant."
      ]
    }
  },
  {
    topic: "Construction — absolute gift vs trust (default position)",
    q: "If, on construction, a clause is found to be merely precatory (non-binding), the likely effect is:",
    choices: [
      "The trust is enforced anyway to achieve fairness",
      "The recipient takes the property absolutely (subject to any other valid conditions/charges)",
      "A resulting trust automatically arises for the suggested beneficiaries",
      "The gift becomes charitable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If no trust obligation is imposed, the donee takes beneficially; courts do not impose a trust merely because the settlor hoped they would use it in a certain way.",
      whyWrong: [
        "Fairness does not allow imposing obligations absent trust intention.",
        "—",
        "A resulting trust is a common consequence of failure of an intended trust, but precatory wording indicates no trust was created in the first place.",
        "No basis for charity."
      ]
    }
  },
  {
    topic: "Construction — trust intended but fails (resulting trust)",
    q: "If the court construes the instrument as intending a trust, but the trust fails for uncertainty, the typical consequence is:",
    choices: [
      "Donee takes absolutely regardless",
      "Resulting trust back to the settlor/estate (unless another disposition applies)",
      "Automatic charitable trust",
      "The court chooses beneficiaries"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where an intended trust fails, equity commonly responds with a resulting trust back to the settlor/estate, subject to the instrument’s other provisions.",
      whyWrong: [
        "If a trust was intended, taking absolutely is not automatic.",
        "—",
        "No automatic charity.",
        "Courts generally cannot select beneficiaries in place of a failed class."
      ]
    }
  },
  {
    topic: "Construction — ambiguity and extrinsic evidence",
    q: "When is extrinsic evidence most likely to be admissible in construction disputes?",
    choices: [
      "Never; only the document matters",
      "Where there is genuine ambiguity in the language and evidence helps resolve meaning without rewriting the disposition",
      "Whenever a beneficiary claims the clause is unfair",
      "Only if both trustees agree"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Extrinsic evidence may assist in resolving genuine ambiguity (depending on context and type of instrument), but cannot be used to rewrite the trust or add new terms.",
      whyWrong: [
        "Too absolute; ambiguity can open the door to limited contextual evidence.",
        "—",
        "Fairness is not the test for admitting evidence.",
        "Trustee agreement doesn’t govern admissibility."
      ]
    }
  },
  {
    topic: "Construction — 'for the benefit of' language",
    q: "T is directed to 'apply income for the benefit of B as T sees fit'. Which is most accurate?",
    choices: [
      "Mere power; no obligation to consider B",
      "Trust obligation to apply/consider income for B, but discretion as to how (discretionary trust over income for B)",
      "Fixed trust giving B an immediate right to all income",
      "Void for uncertainty of objects"
    ],
    correct: 1,
    explain: {
      whyRight:
        "‘Apply income for the benefit of B’ indicates an obligation to use income for B’s benefit, while discretion lies in manner/amount—supporting a discretionary trust-type duty rather than a mere power.",
      whyWrong: [
        "Obligation language points away from a mere power.",
        "—",
        "Discretion is inconsistent with B taking all income as of right.",
        "B is certain; objects are not the issue."
      ]
    }
  },
  {
    topic: "Construction — gifts with moral language",
    q: "Which clause is most likely (all else equal) to be construed as an absolute gift rather than a trust?",
    choices: [
      "‘To T on trust for B’",
      "‘To T, and T must pay B £5,000’",
      "‘To T, hoping T will help B’",
      "‘To T as trustee for B’"
    ],
    correct: 2,
    explain: {
      whyRight:
        "‘Hoping’ is classic precatory language and is usually treated as non-binding, pointing to an absolute gift to T (unless the instrument as a whole shows obligation).",
      whyWrong: [
        "This is explicit trust language.",
        "Obligation language suggests enforceable duties.",
        "—",
        "Explicit trustee language indicates a trust."
      ]
    }
  },
  {
    topic: "Construction — severance (uncertain words)",
    q: "A trust is declared for 'my employees who are loyal'. The term 'loyal' is contested. Which is most accurate?",
    choices: [
      "The court will always delete 'loyal' to save the trust",
      "If 'loyal' is conceptually uncertain and not severable without changing substance, the trust may fail for uncertainty of objects",
      "The trust automatically becomes a fixed trust for all employees",
      "The trustees can define 'loyal' however they like to make it valid"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If a defining term is conceptually uncertain, and it cannot be severed without altering the intended class, construction cannot rescue it; the class may fail.",
      whyWrong: [
        "Severance is not automatic and depends on whether removal changes the substance.",
        "—",
        "The court does not convert it into a fixed trust as a default fix.",
        "Trustees cannot cure conceptual uncertainty by inventing definitions."
      ]
    }
  },
  {
    topic: "Construction — power coupled with duty to consider",
    q: "Why can it matter (practically) whether a clause is a trust power or a mere power?",
    choices: [
      "Because only trust powers can be enforced: trustees can be compelled to consider and distribute in accordance with duties",
      "Because mere powers require consideration",
      "Because trust powers are always void for uncertainty",
      "Because mere powers always create resulting trusts"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A trust power imposes enforceable duties (e.g., to consider, and to distribute), whereas a mere power generally does not impose an enforceable duty to distribute.",
      whyWrong: [
        "Consideration is irrelevant.",
        "—",
        "Trust powers can be valid if the objects test is satisfied.",
        "Mere powers do not automatically create resulting trusts."
      ]
    }
  },
  {
    topic: "Construction — 'and such other persons as trustees think fit'",
    q: "A clause benefits 'my children and such other persons as my trustees think fit'. Best construction?",
    choices: [
      "Fixed trust for children only; extra persons ignored",
      "Discretionary trust/power to benefit children and a wider class (depending on obligation wording)",
      "Void automatically because the class is too wide",
      "Charitable trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The drafting indicates a core class (children) plus an extended class at trustees’ discretion. Whether it’s a trust or power depends on whether there is an obligation to distribute.",
      whyWrong: [
        "You cannot simply ignore explicit words if they form part of the disposition.",
        "—",
        "Not automatically void; assess certainty/administrability.",
        "No charitable purpose is indicated."
      ]
    }
  },
  {
    topic: "Construction — 'as trustee thinks fit' and certainty of shares",
    q: "Why does a discretionary trust avoid the 'certainty of shares' problem that can defeat a fixed trust?",
    choices: [
      "Because shares are fixed by statute",
      "Because the trustee is given power to decide allocations, so no fixed shares are required",
      "Because courts presume equal shares",
      "Because beneficiaries waive their rights"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In discretionary trusts, trustees decide what each beneficiary receives, so fixed shares are not required (though trust property and objects must be certain).",
      whyWrong: [
        "No such statute fixes shares generally.",
        "—",
        "Equality is not presumed where discretion is granted.",
        "Beneficiaries cannot waive the need for certainty."
      ]
    }
  },
  {
    topic: "Construction — failure of appointment mechanism",
    q: "A clause says 'T shall choose one of my paintings for A; the rest for B'. T refuses to act. Best analysis?",
    choices: [
      "Court will always choose for T",
      "If the selection is essential to define entitlements, failure to select can cause uncertainty and potential failure (risking a resulting trust)",
      "It becomes a discretionary trust over all paintings",
      "B automatically takes all paintings"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where the trustee’s choice is central to defining what each beneficiary gets, failure/refusal can create uncertainty and defeat the intended fixed division, potentially leading to failure and a resulting trust.",
      whyWrong: [
        "Courts do not always step into trustees’ shoes to make discretionary selections.",
        "—",
        "The clause isn’t drafted as discretionary over the whole fund; it’s a specific selection mechanism.",
        "Automatic outcomes depend on whether the entitlement can still be identified."
      ]
    }
  },
  {
    topic: "Construction — exam trap (classification affects objects test)",
    q: "Why does classification (fixed vs discretionary vs power) matter for certainty of objects?",
    choices: [
      "Because it determines whether the complete list test or the 'is or is not' test applies",
      "Because only fixed trusts require trustees",
      "Because discretionary trusts never need certainty of objects",
      "Because powers are always void"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Fixed trusts use the complete list test, while discretionary trusts and powers use the 'is or is not' test—so classification affects validity.",
      whyWrong: [
        "All trusts typically require trustees (or court can appoint).",
        "—",
        "Discretionary trusts still need certainty of objects (just a different test).",
        "Powers can be valid if certain."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Trust Law | Chapter 3 | Construction and Powers",
    subtitle: "Interpreting instruments, trusts vs powers, and discretion.",
    questions: questions
  };
})();
  
