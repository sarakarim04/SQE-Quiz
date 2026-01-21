(() => {
  const questions = [
  {
    topic: "Formalities — general rule",
    q: "Which statement is most accurate about formalities for creating express trusts?",
    choices: [
      "All trusts must be in writing and witnessed",
      "Express trusts of personal property can generally be created orally, but land and dispositions of existing equitable interests often require signed writing",
      "Only charitable trusts require writing",
      "Writing is never required in trust law"
    ],
    correct: 1,
    explain: {
      whyRight:
        "There is no universal writing requirement for all trusts. Personalty trusts can be oral, but land declarations and dispositions of existing equitable interests trigger statutory formalities (LPA 1925 s53).",
      whyWrong: [
        "Writing/witnessing is not required for all trusts (witnessing is mainly a wills formality).",
        "—",
        "Charitable status does not determine writing requirements in this way.",
        "Some trust situations do require writing (notably s53(1)(b)/(c))."
      ]
    }
  },
  {
    topic: "Trusts of land — LPA 1925 s53(1)(b)",
    q: "LPA 1925 s53(1)(b) requires signed writing for:",
    choices: [
      "Any trust of any property",
      "A declaration of trust of land",
      "Any transfer of a legal estate",
      "All constructive trusts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 53(1)(b) covers a declaration of trust of land and requires it to be manifested and proved by signed writing.",
      whyWrong: [
        "The section is not that broad.",
        "—",
        "Transfers of legal estates are generally governed by deed requirements (e.g., LPA 1925 s52), not s53(1)(b).",
        "Constructive trusts are excluded from s53(1) by s53(2)."
      ]
    }
  },
  {
    topic: "s53(1)(b) — 'manifested and proved'",
    q: "What is the best interpretation of 'manifested and proved' in s53(1)(b)?",
    choices: [
      "The trust does not exist unless writing is contemporaneous",
      "The trust may exist, but cannot be enforced without signed written evidence",
      "The writing must be a deed",
      "The writing must be witnessed by two witnesses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The usual exam approach is that s53(1)(b) is evidential: the trust may be declared orally, but it must be evidenced in signed writing to be enforceable.",
      whyWrong: [
        "It does not generally require contemporaneous writing for existence.",
        "—",
        "A deed is not required merely to evidence the trust under s53(1)(b).",
        "Two-witness attestation is a wills formality, not a general trust-evidence requirement."
      ]
    }
  },
  {
    topic: "s53(1)(b) — timing of writing",
    q: "S orally declares a trust of land. A month later S signs a letter confirming the trust terms. What is the likely effect?",
    choices: [
      "Too late: the writing must be at the moment of declaration",
      "The later signed writing can satisfy s53(1)(b) by manifesting and proving the trust",
      "The trust is void because it was oral",
      "The trust becomes a will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Because s53(1)(b) is commonly treated as an evidential requirement, later signed writing can 'manifest and prove' the trust.",
      whyWrong: [
        "Not the usual approach; the statute does not require contemporaneous writing.",
        "—",
        "Oral declaration is not automatically void; enforceability depends on evidence.",
        "It does not convert into a will."
      ]
    }
  },
  {
    topic: "Transfers of land — deed requirement",
    q: "Which rule most directly governs transfers of legal estates in land (as opposed to declaration of trust evidence)?",
    choices: [
      "LPA 1925 s52 (conveyance by deed)",
      "LPA 1925 s53(1)(b)",
      "LPA 1925 s53(2)",
      "Wills Act 1837 s9"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Transfers/conveyances of legal estates in land generally require a deed under LPA 1925 s52.",
      whyWrong: [
        "—",
        "s53(1)(b) is about declaration of trust of land being evidenced in writing.",
        "s53(2) is the exception for resulting/implied/constructive trusts.",
        "s9 governs wills, not inter vivos conveyances."
      ]
    }
  },
  {
    topic: "Disposition of equitable interest — LPA 1925 s53(1)(c)",
    q: "LPA 1925 s53(1)(c) requires signed writing for:",
    choices: [
      "Creating any express trust of personal property",
      "Any disposition of an existing equitable interest",
      "Any gift of chattels",
      "Any trust where the settlor is also trustee"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 53(1)(c) applies to dispositions of existing equitable interests and requires them to be in signed writing.",
      whyWrong: [
        "Personalty trusts can generally be created orally (subject to other rules).",
        "—",
        "Gifts of chattels are not generally within s53(1)(c).",
        "Settlor being trustee doesn’t itself trigger s53(1)(c)."
      ]
    }
  },
  {
    topic: "s53(1)(c) — what counts as a 'disposition' (Grey v IRC)",
    q: "A beneficiary under a trust orally directs trustees to hold the trust fund for new beneficiaries. What is the likely analysis?",
    choices: [
      "Not a disposition; no formality applies",
      "It is a disposition of an equitable interest and requires signed writing (Grey v IRC)",
      "It is automatically a constructive trust",
      "It is valid only if witnessed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In *Grey v IRC*, an oral direction by a beneficiary to trustees to hold for others was treated as a disposition of an equitable interest requiring writing under s53(1)(c).",
      whyWrong: [
        "Such a direction typically is a disposition of the beneficiary’s equitable interest.",
        "—",
        "A constructive trust is not automatic here; the issue is statutory formalities for an equitable disposition.",
        "Witnessing is not the s53(1)(c) requirement; signed writing is."
      ]
    }
  },
  {
    topic: "s53(1)(c) — agent signing",
    q: "Under s53(1)(c), who may sign the required writing?",
    choices: [
      "Only the trustees",
      "Only a solicitor",
      "The person disposing of the interest or their lawfully authorised agent",
      "Any witness"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Section 53(1)(c) allows signed writing by the person disposing or their lawfully authorised agent.",
      whyWrong: [
        "Trustees may be involved, but the statute focuses on the disposer’s signed writing.",
        "A solicitor is not required; an authorised agent suffices.",
        "—",
        "A witness is not a substitute for the disposer/agent signing."
      ]
    }
  },
  {
    topic: "s53(2) — exception scope",
    q: "What does LPA 1925 s53(2) provide?",
    choices: [
      "All trusts must be in writing",
      "s53(1) does not affect resulting, implied, or constructive trusts",
      "Only charitable trusts are exempt",
      "Wills do not need witnesses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s53(2) preserves the operation of resulting, implied, and constructive trusts (they can arise without the s53(1) writing requirements).",
      whyWrong: [
        "It does the opposite: it limits the scope of s53(1).",
        "—",
        "Charitable trusts are not the statutory exemption described by s53(2).",
        "Wills still need witnesses under Wills Act 1837 s9."
      ]
    }
  },
  {
    topic: "s53(2) — exam application",
    q: "A party tries to rely on lack of signed writing under s53(1)(b) to keep land contrary to an earlier understanding. Which route most directly avoids the formality barrier?",
    choices: [
      "Argue a constructive trust arises (s53(2) exception)",
      "Argue the will was validly executed",
      "Argue consideration was paid",
      "Argue the trust is charitable"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If equity imposes a constructive trust (e.g., to prevent unconscionability/fraud), s53(2) means s53(1) does not bar it.",
      whyWrong: [
        "—",
        "Wills formalities are irrelevant to an inter vivos land trust dispute.",
        "Consideration is not the key to bypassing s53(1).",
        "Charitable status is not the main statutory exception."
      ]
    }
  },
  {
    topic: "Rochefoucauld v Boustead — fraud principle",
    q: "What principle is commonly associated with *Rochefoucauld v Boustead* in this area?",
    choices: [
      "Equity will not allow a statute to be used as an instrument of fraud; a constructive trust may arise despite lack of writing",
      "All oral trusts of land are automatically valid and enforceable",
      "s53(1)(c) never applies to land",
      "Wills Act formalities are optional"
    ],
    correct: 0,
    explain: {
      whyRight:
        "*Rochefoucauld v Boustead* is often cited for the idea that equity may impose a constructive trust to prevent reliance on formality rules as an instrument of fraud.",
      whyWrong: [
        "Oral land trusts still face enforceability issues under s53(1)(b) unless the case fits an equitable exception.",
        "—",
        "s53(1)(c) can apply to equitable interests, including equitable interests in land.",
        "Wills Act formalities remain mandatory for valid wills."
      ]
    }
  },
  {
    topic: "Wills Act 1837 s9 — core requirements",
    q: "Which set best reflects the formalities under Wills Act 1837 s9?",
    choices: [
      "Oral declaration before one witness",
      "Writing + signature + intention + signature acknowledged in presence of two witnesses present at the same time + witnesses attest/sign",
      "Deed + registration + seal",
      "Email + typed name + one witness"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s9 requires writing, signature, intention, and attestation by two witnesses present at the same time (with the testator signing or acknowledging in their presence).",
      whyWrong: [
        "One witness and oral declaration are insufficient.",
        "—",
        "That describes deed-style formalities, not wills.",
        "Emails/typed names do not satisfy s9 in the usual way."
      ]
    }
  },
  {
    topic: "Secret trusts — why enforced",
    q: "Secret trusts are enforced primarily because:",
    choices: [
      "They comply with s9 automatically",
      "Equity acts to prevent fraud/unconscionable reliance on the will formality rules",
      "They are always charitable",
      "They do not require certainty of objects"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Equity enforces secret trusts to prevent the legatee keeping property contrary to the arrangement—often framed as preventing fraud or unconscionability.",
      whyWrong: [
        "Secret trusts operate alongside wills but are not simply 'automatic compliance'.",
        "—",
        "They can be non-charitable.",
        "Secret trusts still need identifiable beneficiaries/terms."
      ]
    }
  },
  {
    topic: "Secret trusts — requirements",
    q: "Which triad is required to establish a secret trust?",
    choices: [
      "Offer, acceptance, consideration",
      "Intention, communication, acceptance",
      "Duty, breach, causation",
      "Writing, witnessing, registration"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The standard requirements are intention to create a trust, communication of terms, and acceptance by the legatee.",
      whyWrong: [
        "Contract concepts are not the test.",
        "—",
        "Tort concepts are not the test.",
        "These are not the essential elements; secret trusts can operate without s9-style disclosure of terms."
      ]
    }
  },
  {
    topic: "Fully secret trust — timing of communication",
    q: "In a fully secret trust, when can communication of the trust terms occur?",
    choices: [
      "Only before the will is executed",
      "Before or after execution of the will, but before the testator’s death",
      "Only after the testator’s death",
      "Only if in writing signed by two witnesses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "For fully secret trusts, communication may be after execution (since the will looks like an absolute gift), but must occur before death so the legatee can accept.",
      whyWrong: [
        "That stricter timing is associated with half secret trusts.",
        "—",
        "Communication after death cannot create the obligation in time for acceptance.",
        "There is no universal two-witness writing requirement for communication."
      ]
    }
  },
  {
    topic: "Half secret trust — timing of communication (Re Keen/Blackwell)",
    q: "In a half secret trust, communication of terms must occur:",
    choices: [
      "After the will is executed, to preserve secrecy",
      "Before or at the time the will is executed",
      "Only after death",
      "Any time within 12 months"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Half secret trusts reveal a trust exists on the face of the will, so the terms must be communicated before or at execution (often linked with *Blackwell v Blackwell* / *Re Keen* principles).",
      whyWrong: [
        "Late communication undermines the rationale and risks making the will operate as a 'blank cheque'.",
        "—",
        "Too late.",
        "There is no such timing rule."
      ]
    }
  },
  {
    topic: "Secret trusts — effect of no communication",
    q: "T leaves property to L in the will, intending L to hold for B, but never communicates the trust to L. What is the likely outcome?",
    choices: [
      "B can enforce the secret trust anyway",
      "L takes beneficially (no secret trust arises)",
      "The property goes to the Crown",
      "A resulting trust arises automatically for B"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Without communication, there is no basis for L’s acceptance of obligations; typically L takes beneficially because no secret trust is established.",
      whyWrong: [
        "Communication is a core requirement.",
        "—",
        "Bona vacantia is not the normal result.",
        "Resulting trusts usually return property to the estate/settlor, not to an uncommunicated beneficiary."
      ]
    }
  },
  {
    topic: "Secret trusts — acceptance",
    q: "How may acceptance of a secret trust by the legatee occur?",
    choices: [
      "Only by signing a deed",
      "By express acceptance or by acquiescence/silent acceptance after communication",
      "Only by paying consideration",
      "Only by registering the trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Acceptance can be express or inferred (e.g., acquiescence) once terms are communicated; silence may amount to acceptance in context.",
      whyWrong: [
        "A deed is not required for acceptance.",
        "—",
        "Consideration is not required.",
        "Registration is not a general requirement."
      ]
    }
  },
  {
    topic: "Secret trusts — Re Snowden",
    q: "What is *Re Snowden* commonly used to illustrate?",
    choices: [
      "Courts will readily infer secret trusts from casual conversations",
      "A secret trust will not be found unless intention is clear; mere family expectations are insufficient",
      "s53(1)(c) applies to wills",
      "All half secret trusts are invalid"
    ],
    correct: 1,
    explain: {
      whyRight:
        "*Re Snowden* is commonly cited for the caution that secret trusts require clear intention/communication/acceptance; courts won’t enforce mere moral expectations.",
      whyWrong: [
        "It tends to show reluctance absent clear proof.",
        "—",
        "s53(1)(c) concerns dispositions of equitable interests; wills are governed by s9.",
        "Half secret trusts can be valid if requirements are satisfied."
      ]
    }
  },
  {
    topic: "s53(1)(c) — assignment of beneficial interest",
    q: "A beneficiary under a trust of land assigns their beneficial interest to X. What is required to satisfy s53(1)(c)?",
    choices: [
      "Oral statement in front of witnesses",
      "Signed writing evidencing the disposition",
      "A deed witnessed by two witnesses",
      "Nothing: equitable interests are always assignable orally"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A disposition of an existing equitable interest must be in signed writing under s53(1)(c).",
      whyWrong: [
        "Witnessing does not replace the statutory signed-writing requirement.",
        "—",
        "A deed is not required by s53(1)(c) (it requires signed writing).",
        "This is incorrect; s53(1)(c) imposes formality for dispositions."
      ]
    }
  },
  {
    topic: "Grey v IRC — why writing mattered",
    q: "In *Grey v IRC*, why did the oral direction fail without writing?",
    choices: [
      "Because trustees can never change beneficial interests",
      "Because it was a disposition of an equitable interest falling within s53(1)(c)",
      "Because it was a transfer of legal title requiring a deed",
      "Because it was a secret trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The beneficiary’s direction to trustees altered who held the equitable interest, so it was a disposition requiring signed writing under s53(1)(c).",
      whyWrong: [
        "Trustees can act on valid directions; the issue was formality.",
        "—",
        "The key issue was not a legal conveyance by deed.",
        "It was not a secret trust case."
      ]
    }
  },
  {
    topic: "Vandervell v IRC — directing transfer of legal title",
    q: "Which is the best exam take from *Vandervell v IRC*?",
    choices: [
      "s53(1)(c) applies to every transfer of legal title",
      "A direction to transfer legal title can avoid s53(1)(c) if the equitable interest passes with it and there is no separate equitable disposition",
      "All oral dispositions are valid",
      "Resulting trusts are abolished"
    ],
    correct: 1,
    explain: {
      whyRight:
        "*Vandervell* is used to show that where legal title is directed to be transferred and the equitable interest passes with it, there may be no separate equitable disposition requiring s53(1)(c).",
      whyWrong: [
        "s53(1)(c) targets equitable dispositions, not all legal transfers.",
        "—",
        "Oral dispositions can be caught by s53(1)(c).",
        "Resulting trusts remain part of English law."
      ]
    }
  },
  {
    topic: "Re Vandervell’s Trusts (No 2) — resulting trust and s53(2)",
    q: "After *Vandervell*, why was s53(2) important in *Re Vandervell’s Trusts (No 2)*?",
    choices: [
      "It required wills to be witnessed",
      "It allowed a resulting trust to arise without needing writing",
      "It converted an oral trust into a deed",
      "It abolished s53(1)(c)"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s53(2) preserves resulting trusts: where equity treats the beneficial interest as returning/remaining, it can arise without the s53(1) writing requirements.",
      whyWrong: [
        "That’s wills law.",
        "—",
        "No deed conversion occurs.",
        "s53(1)(c) still applies; s53(2) provides exceptions."
      ]
    }
  },
  {
    topic: "s53(1)(b) vs s53(1)(c) — spotting",
    q: "Which pairing is correct?",
    choices: [
      "s53(1)(b): disposition of equitable interest; s53(1)(c): declaration of trust of land",
      "s53(1)(b): declaration of trust of land; s53(1)(c): disposition of equitable interest",
      "s53(1)(b): wills; s53(1)(c): deeds",
      "s53(1)(b): constructive trusts; s53(1)(c): resulting trusts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s53(1)(b) concerns declarations of trust of land; s53(1)(c) concerns dispositions of existing equitable interests.",
      whyWrong: [
        "Those are reversed.",
        "—",
        "Wills are governed by Wills Act 1837 s9; deeds by other statutes.",
        "Constructive/resulting trusts are generally outside s53(1) by s53(2)."
      ]
    }
  },
  {
    topic: "Formalities — express trust of personalty",
    q: "S orally declares: 'I hold my £10,000 savings account on trust for B absolutely.' No writing is made. Likely result?",
    choices: [
      "Invalid because all trusts must be written",
      "Generally valid (personal property trusts can be oral, subject to certainty and constitution)",
      "Invalid unless witnessed",
      "Automatically a will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Express trusts of personal property can generally be created orally; formalities like s53(1)(b) relate to land, and s9 to wills.",
      whyWrong: [
        "No universal writing rule.",
        "—",
        "Witnessing is not generally required.",
        "An inter vivos oral trust is not a will."
      ]
    }
  },
  {
    topic: "Formalities — declaration vs transfer",
    q: "Which is most accurate about formalities and constitution?",
    choices: [
      "If formalities are met, the trust is always constituted",
      "Even if formalities are met, a trust can still fail if not properly constituted (e.g., property not transferred or no self-declaration)",
      "Constitution can be ignored if the settlor intended a trust",
      "Constitution only matters for land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Formalities and constitution are distinct: you can satisfy writing rules but still fail to vest property in trustees or declare yourself trustee.",
      whyWrong: [
        "Formalities do not guarantee constitution.",
        "—",
        "Intention alone is not enough if the trust is not constituted.",
        "Constitution matters for all property types."
      ]
    }
  },
  {
    topic: "Half secret trust — failure consequence",
    q: "A half secret trust is declared in a will ('to L on trust'), but the terms are not communicated in time. What is the usual consequence?",
    choices: [
      "L takes beneficially",
      "The trust fails and the property is held on resulting trust for the testator’s estate",
      "The property goes automatically to the intended secret beneficiary",
      "The court supplies terms"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If a half secret trust fails for lack of properly communicated terms, L does not take beneficially (because the will shows a trust), so the property usually results back to the estate.",
      whyWrong: [
        "L taking beneficially is more typical in fully secret trust failure, not half secret.",
        "—",
        "The intended beneficiary cannot enforce absent proper communication/acceptance.",
        "Courts do not invent missing terms."
      ]
    }
  },
  {
    topic: "Fully secret trust — failure consequence",
    q: "A fully secret trust fails because communication never occurred. The will leaves the property to L absolutely on its face. Likely result?",
    choices: [
      "L takes beneficially",
      "Resulting trust to the estate automatically",
      "Automatic constructive trust for all the testator’s friends",
      "The will is invalid"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If a fully secret trust fails, the will appears to give L the property absolutely, so L generally takes beneficially (subject to any other equitable doctrines on the facts).",
      whyWrong: [
        "—",
        "Resulting trust is more typical in half secret trust failure because the will indicates a trust.",
        "No basis for such a class trust.",
        "Failure of a secret trust does not automatically invalidate the will."
      ]
    }
  },
  {
    topic: "Wills Act s9 — witnesses present together",
    q: "Under Wills Act 1837 s9, the two witnesses must:",
    choices: [
      "Witness the will on separate days",
      "Be present at the same time when the testator signs or acknowledges their signature",
      "Be beneficiaries under the will",
      "Sign before the testator"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s9 requires the testator to sign or acknowledge in the presence of two witnesses present at the same time, who then attest/sign.",
      whyWrong: [
        "They must be present together at the relevant moment.",
        "—",
        "Beneficiaries should not witness (it can affect gifts), but they are not required to be beneficiaries.",
        "Witnesses attest after the testator signs/acknowledges."
      ]
    }
  },
  {
    topic: "Wills Act s9 — 'acknowledgement'",
    q: "What does 'acknowledgement of signature' allow under s9?",
    choices: [
      "The testator can acknowledge an existing signature to the witnesses instead of signing in front of them",
      "The will can be oral",
      "The witnesses do not need to sign",
      "Only a solicitor may sign"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Acknowledgement means the testator can confirm to the witnesses that the signature on the will is theirs, rather than signing at that moment.",
      whyWrong: [
        "s9 still requires writing.",
        "—",
        "Witnesses must still attest/sign.",
        "The testator can sign (or someone can sign in their presence and direction), not only a solicitor."
      ]
    }
  },
  {
    topic: "Secret trusts — communication of terms vs existence",
    q: "In a fully secret trust, which is most accurate about what must be communicated?",
    choices: [
      "Only the existence of a trust, not the terms",
      "The terms (or at least the substance of the trust obligations) must be communicated for the legatee to accept",
      "Nothing needs to be communicated; equity presumes a trust",
      "Communication must always be by deed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Communication must convey the trust terms sufficiently so the legatee can accept the obligations; mere vague hints are not enough.",
      whyWrong: [
        "Existence alone is usually insufficient without terms/substance.",
        "—",
        "Equity does not presume secret trusts.",
        "No general deed requirement."
      ]
    }
  },
  {
    topic: "s53(1)(c) — direction vs transfer to new trustees",
    q: "B is the sole beneficiary under a trust. B orally instructs trustees to transfer trust property to X to hold for Y. Which issue is most likely engaged first?",
    choices: [
      "Wills Act 1837 s9",
      "s53(1)(c) because B is disposing of an equitable interest (unless structured as a transfer of legal and equitable title that avoids a separate equitable disposition)",
      "s53(1)(b) because any trust needs writing",
      "Rule against perpetuities"
    ],
    correct: 1,
    explain: {
      whyRight:
        "B is dealing with an existing equitable interest; depending on how the transaction operates (direction to trustees, transfer of title), s53(1)(c) and the *Grey/Vandervell* distinction are central.",
      whyWrong: [
        "Not a will issue.",
        "—",
        "s53(1)(b) is for declarations of trust of land, not all trusts.",
        "Perpetuities is not the primary issue here."
      ]
    }
  },
  {
    topic: "Spotting — land trust evidence vs disposition writing",
    q: "Which scenario most clearly triggers s53(1)(b) rather than s53(1)(c)?",
    choices: [
      "A beneficiary assigns their equitable interest to another",
      "A trustee transfers legal title to a purchaser",
      "A person declares they hold land on trust for another",
      "A testator signs a will"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Declaring a trust of land is s53(1)(b) territory (manifested/proved in signed writing).",
      whyWrong: [
        "That is a disposition of an equitable interest (s53(1)(c)).",
        "Legal conveyance is generally deed territory (LPA 1925 s52).",
        "—",
        "That’s Wills Act s9."
      ]
    }
  },
  {
    topic: "Spotting — s53(2) exception",
    q: "Which is most likely to fall within s53(2) and so not be blocked by lack of writing?",
    choices: [
      "An express declaration of trust of land",
      "A signed assignment of a beneficial interest",
      "A resulting trust arising by operation of law",
      "A will failing to have two witnesses"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Resulting (and constructive/implied) trusts arise by operation of law and are preserved by s53(2), so they do not need s53(1) writing.",
      whyWrong: [
        "Express land declarations are within s53(1)(b).",
        "A signed assignment is already compliant; the question is about the exception category.",
        "—",
        "A will without two witnesses is generally invalid under s9."
      ]
    }
  },
  {
    topic: "Exam trap — 'writing' vs 'deed'",
    q: "Which statement is most accurate?",
    choices: [
      "If writing is required by s53, it must be a deed",
      "Signed writing under s53 is not the same as a deed; deed requirements arise from other rules (e.g., conveyance of legal estates in land)",
      "Deeds are required for all dispositions of equitable interests",
      "Wills and deeds have identical formalities"
    ],
    correct: 1,
    explain: {
      whyRight:
        "s53 generally requires signed writing, not a deed. Deeds are required for certain legal conveyances (e.g., LPA 1925 s52), which is a different formality regime.",
      whyWrong: [
        "s53 does not generally demand a deed.",
        "—",
        "Equitable dispositions usually need signed writing, not necessarily deeds.",
        "Wills have their own separate s9 requirements."
      ]
    }
  },
  {
    topic: "Secret trusts — Ottaway v Norman (core idea)",
    q: "Which statement best fits the modern approach seen in cases like *Ottaway v Norman*?",
    choices: [
      "Secret trusts are void because they contradict wills formalities",
      "Secret trusts can be enforced if intention, communication and acceptance are proved, to prevent unconscionability",
      "Secret trusts require registration at the Land Registry",
      "Secret trusts only apply to charitable gifts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Modern cases enforce secret trusts where the requirements are met, commonly justified by preventing unconscionable retention of property by the legatee.",
      whyWrong: [
        "Equity may enforce them despite wills formality rules in appropriate circumstances.",
        "—",
        "Registration is not a general requirement for the trust’s existence in this context.",
        "They can be private."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Trust Law | Chapter 2 | Formalities",
    subtitle: "LPA 1925 s53 requirements and exceptions.",
    questions: questions
  };
})();
  
