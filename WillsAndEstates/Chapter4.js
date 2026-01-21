(() => {
  const questions = [
  {
    topic: "Revocation — overview methods",
    q: "Which is NOT a recognised method of revoking a will?",
    choices: [
      "Making a later will or codicil",
      "Marriage/civil partnership (subject to exceptions)",
      "Destroying the will with intention to revoke",
      "Leaving the will in a drawer for more than 10 years"
    ],
    correct: 3,
    explain: {
      whyRight:
        "Mere passage of time or storage does not revoke a will. Revocation requires a recognised legal method such as later instrument, marriage/CP (subject to exceptions), or destruction with intent.",
      whyWrong: [
        "A later will/codicil can revoke earlier wills expressly or by inconsistency.",
        "Marriage/CP can revoke by operation of law unless an exception applies.",
        "Physical destruction with intention is a recognised method.",
        "—"
      ]
    }
  },
  {
    topic: "Revocation by later will — express revocation",
    q: "T signs a new will stating: “I revoke all former wills and testamentary dispositions.” The effect is:",
    choices: [
      "Only the inconsistent parts of the old will are revoked",
      "The earlier will is revoked expressly (subject to validity of the later will)",
      "Both wills operate side by side",
      "The new will is invalid because it mentions earlier wills"
    ],
    correct: 1,
    explain: {
      whyRight:
        "An express revocation clause revokes prior wills (assuming the later will is valid).",
      whyWrong: [
        "That describes implied revocation by inconsistency, not express revocation.",
        "—",
        "Express revocation is intended to prevent side-by-side operation.",
        "Mentioning earlier wills does not invalidate the new will."
      ]
    }
  },
  {
    topic: "Revocation by later will — implied inconsistency",
    q: "T has Will 1 leaving ‘all my estate to A’. Later T makes Will 2 leaving ‘my house to B’ but says nothing about revocation. Which is most accurate?",
    choices: [
      "Will 2 is ignored because it has no revocation clause",
      "Will 2 revokes Will 1 to the extent of inconsistency (house to B), with the rest governed by Will 1 (if not replaced)",
      "Both wills are invalid",
      "Will 1 always prevails because it was first"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A later will/codicil can revoke earlier dispositions by inconsistency. The inconsistent gift (house) is replaced; other parts may continue if not revoked and if documents can sensibly co-exist (often exam-framed as partial implied revocation).",
      whyWrong: [
        "A revocation clause is not essential; inconsistency can revoke impliedly.",
        "—",
        "There is no automatic invalidity of both.",
        "Later valid testamentary dispositions can override earlier ones."
      ]
    }
  },
  {
    topic: "Marriage/civil partnership — general rule",
    q: "As a general rule, entering into a valid marriage or civil partnership after making a will:",
    choices: [
      "Has no effect on the will",
      "Automatically revokes the will, unless an exception applies",
      "Only revokes gifts to the spouse/civil partner",
      "Revokes only if there are children"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The general rule is that marriage/civil partnership revokes a prior will, subject to the 'in contemplation' exception.",
      whyWrong: [
        "Marriage/CP is a major automatic revocation event.",
        "—",
        "This describes divorce-style effects, not marriage revocation.",
        "Children are not a condition for revocation."
      ]
    }
  },
  {
    topic: "Marriage/CP — contemplation exception",
    q: "When is a will most likely to survive a later marriage/civil partnership?",
    choices: [
      "When it is signed in the same year as the marriage",
      "When it is made expressly in contemplation of that specific marriage/civil partnership",
      "When it leaves nothing to the future spouse",
      "When it is witnessed by two family members"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A will is not revoked by later marriage/CP if it was made in contemplation of that specific marriage/CP (usually evidenced by clear wording).",
      whyWrong: [
        "Timing alone is not enough.",
        "—",
        "Leaving nothing to the spouse does not preserve validity against revocation.",
        "Witness identity does not create the exception."
      ]
    }
  },
  {
    topic: "Marriage/CP — effect of revoked will",
    q: "If T’s will is revoked by a later marriage (and no new will is made), the estate will generally be distributed:",
    choices: [
      "Under the revoked will",
      "Under intestacy rules (subject to any non-estate assets/trusts)",
      "Only to the spouse and nobody else",
      "At the Probate Registry’s discretion"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the will is revoked and there is no later valid will, the estate generally falls to be administered under intestacy rules (for estate assets).",
      whyWrong: [
        "A revoked will does not govern.",
        "—",
        "Intestacy can include spouse and other relatives depending on the rules.",
        "There is no discretionary distribution by the Registry."
      ]
    }
  },
  {
    topic: "Revocation by destruction — requirements",
    q: "For revocation by destruction to be effective, it generally requires:",
    choices: [
      "Any damage to the will, even accidental",
      "Physical destruction (or tearing/burning etc.) plus intention to revoke",
      "Only intention to revoke, even without any act",
      "A solicitor to witness the destruction"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Revocation by destruction requires both an act of destruction and the intention to revoke. Accidental damage is insufficient.",
      whyWrong: [
        "Accidental damage does not amount to revocation.",
        "—",
        "Intention alone without an act does not revoke by destruction (though a later will can revoke).",
        "No solicitor-witness requirement exists."
      ]
    }
  },
  {
    topic: "Revocation by destruction — accidental destruction",
    q: "T’s will is accidentally destroyed in a house fire. T did not intend to revoke it. The will is:",
    choices: [
      "Revoked automatically because it no longer exists",
      "Not revoked by destruction (lack of intention), though proving contents may be difficult",
      "Revoked because fire is a form of destruction",
      "Automatically replaced by intestacy regardless of evidence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Destruction revocation requires intention. Accidental loss does not revoke, but evidential issues arise in proving the will’s terms.",
      whyWrong: [
        "Physical absence alone does not equal revocation by destruction.",
        "—",
        "Fire without intention is not revocation.",
        "If contents can be proved, the will may still be admitted/proved; intestacy is not automatic."
      ]
    }
  },
  {
    topic: "Revocation — partial revocation by obliteration",
    q: "T crosses out a single clause (a £10,000 gift to A) intending to revoke only that gift, leaving the rest unchanged. If the revocation is effective, the result is:",
    choices: [
      "The whole will is revoked",
      "Only that gift is revoked; the remainder of the will can still operate",
      "Nothing changes because partial revocation is impossible",
      "All gifts to A are revoked automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Revocation can be whole or partial. If the act and intention are directed only at one gift, only that part can be revoked (subject to formalities where required for alterations).",
      whyWrong: [
        "Not necessarily; depends on intention.",
        "—",
        "Partial revocation is possible.",
        "Revocation targets what T intended, not automatically all gifts to A."
      ]
    }
  },
  {
    topic: "Codicil — definition",
    q: "A codicil is best described as:",
    choices: [
      "A letter of wishes that changes the will automatically",
      "A testamentary document executed with will formalities that amends or supplements an existing will",
      "A Probate Registry document confirming the will",
      "A schedule of assets that replaces the will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A codicil is a testamentary instrument, executed with the required formalities, used to amend/supplement a will.",
      whyWrong: [
        "Letters of wishes are not automatically binding or formally effective as amendments.",
        "—",
        "Registry documents are procedural, not testamentary.",
        "An asset schedule does not automatically replace a will."
      ]
    }
  },
  {
    topic: "Codicil — execution requirements",
    q: "Which statement is most accurate about a codicil’s execution?",
    choices: [
      "It can be oral if two witnesses hear it",
      "It must generally comply with the same formalities as a will",
      "It is valid if the testator initials it",
      "It is valid only if attached to the will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A codicil is a testamentary document and generally must comply with will formalities (writing, signature, two witnesses, etc.).",
      whyWrong: [
        "Oral codicils are not generally valid outside limited exceptional categories.",
        "—",
        "Initialling alone is not sufficient.",
        "Physical attachment is not required for validity."
      ]
    }
  },
  {
    topic: "Codicil — republication effect",
    q: "A properly executed codicil can ‘republish’ a will. This generally means:",
    choices: [
      "The original will becomes invalid",
      "The will may be treated as speaking from the date of the codicil for certain purposes",
      "The codicil replaces the entire will",
      "Republication only affects witness gifts"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Republication can treat the will as re-made at the codicil date for certain construction/identification purposes.",
      whyWrong: [
        "Republication does not invalidate the will.",
        "—",
        "A codicil only changes what it changes; it does not automatically replace everything.",
        "It is not limited to s 15 witness gift issues."
      ]
    }
  },
  {
    topic: "Revival — general principle",
    q: "Which is most accurate about revival of a revoked will?",
    choices: [
      "A revoked will revives automatically if the later will is destroyed",
      "A revoked will does not revive automatically; revival generally requires re-execution or a codicil showing intention to revive",
      "Revival occurs automatically after one year",
      "Revival can be done verbally to two witnesses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Revived wills generally require a fresh testamentary act (re-execution or codicil) demonstrating intention to revive; it is not automatic.",
      whyWrong: [
        "Destroying a later will does not automatically revive the earlier will.",
        "—",
        "No one-year automatic revival rule.",
        "Oral revival is not generally effective."
      ]
    }
  },
  {
    topic: "Revival — destroyed later will",
    q: "T makes Will 1, then Will 2 expressly revoking Will 1. T later destroys Will 2 intending to revive Will 1 but makes no new document. The likely position is:",
    choices: [
      "Will 1 automatically revives",
      "Will 1 does not automatically revive; T may now be intestate unless Will 1 is revived by proper re-execution/codicil",
      "Will 2 still governs because destruction is irrelevant",
      "Both wills are valid and the estate is split"
    ],
    correct: 1,
    explain: {
      whyRight:
        "An earlier will revoked by a later will does not usually revive simply because the later will is destroyed; revival normally needs a further valid testamentary act.",
      whyWrong: [
        "Automatic revival is the common trap—generally incorrect.",
        "—",
        "Destruction can revoke Will 2 if done with intention.",
        "There is no rule splitting between revoked instruments."
      ]
    }
  },
  {
    topic: "Revocation by destruction — who can destroy",
    q: "Which is most accurate regarding who can revoke a will by destruction?",
    choices: [
      "Anyone can destroy it and that always revokes it",
      "The testator (or someone acting in the testator’s presence and at their direction) must perform the act with intent to revoke",
      "Only the Probate Registry can revoke a will",
      "Only a witness can revoke a will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Revocation by destruction requires the testator’s intent and act, or an act by another person in the testator’s presence and at their direction.",
      whyWrong: [
        "A third party destroying it without the testator’s intent/direction does not necessarily revoke it.",
        "—",
        "The Registry does not perform revocation by destruction.",
        "Witnesses have no special revocation role."
      ]
    }
  },
  {
    topic: "Revocation — intention requirement",
    q: "T tears their will in half believing it is a photocopy. Which is most accurate?",
    choices: [
      "The will is revoked because it was torn",
      "The will is not revoked by destruction because T lacked intention to revoke the actual will",
      "The will is revoked because intention is irrelevant",
      "The will is automatically replaced by a codicil"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Revocation by destruction requires intention to revoke. Mistaken destruction without that intention is not effective revocation.",
      whyWrong: [
        "Physical act alone is not enough; intention matters.",
        "—",
        "Intention is central to destruction revocation.",
        "A codicil does not arise automatically."
      ]
    }
  },
  {
    topic: "Marriage/CP — contemplation wording",
    q: "Which wording most strongly supports the ‘in contemplation of marriage’ exception?",
    choices: [
      "“I plan to marry someday.”",
      "“This will is made in contemplation of my marriage to [named person].”",
      "“I am in a relationship.”",
      "“I leave everything to my future spouse.”"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The exception is strongest where the will expressly states it is made in contemplation of marriage/CP to a specific named person.",
      whyWrong: [
        "Too vague and not tied to a specific marriage.",
        "—",
        "Does not identify a contemplated marriage.",
        "Not necessarily enough without clear contemplation language and specificity."
      ]
    }
  },
  {
    topic: "Marriage/CP — effect on codicils",
    q: "T makes a will, then marries (revoking it). After marriage, T executes a codicil referring to the earlier will and making a small change. The most accurate analysis is:",
    choices: [
      "The codicil is void because the will was revoked",
      "The codicil can revive/republish the revoked will if it shows intention to revive and is validly executed",
      "Marriage only revokes gifts to the spouse, so codicil is unnecessary",
      "The codicil automatically creates intestacy"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A properly executed codicil can revive/republish an earlier will if it indicates intention to do so, even if the will had been revoked by marriage.",
      whyWrong: [
        "A codicil can operate to revive if requirements are met.",
        "—",
        "Marriage is generally revocatory of the will, not merely spouse gifts.",
        "A codicil does not automatically trigger intestacy."
      ]
    }
  },
  {
    topic: "Divorce — common tested effect (conceptual)",
    q: "Which is most accurate in general terms about the effect of divorce on a will (as commonly taught)?",
    choices: [
      "Divorce automatically revokes the entire will",
      "Divorce generally treats gifts/appointments in favour of the former spouse as failing (often as if they died), but the rest of the will can remain",
      "Divorce has no effect on any wills",
      "Divorce validates an otherwise invalid will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Divorce commonly affects will provisions benefiting a former spouse (appointments/gifts), usually treated as if the ex-spouse had died, while the remainder can continue.",
      whyWrong: [
        "That’s closer to marriage revocation, not divorce effects.",
        "—",
        "Divorce can have significant effects.",
        "Divorce does not validate invalid wills."
      ]
    }
  },
  {
    topic: "Revocation clause — conditional revocation",
    q: "T writes: “I revoke my previous will only if this new will is valid.” The most accurate analysis is:",
    choices: [
      "Revocation is always unconditional",
      "The revocation is conditional; if the new will is invalid, the old will may remain in force",
      "Both wills are automatically invalid",
      "This wording has no effect and is ignored"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Revocation can be expressed conditionally; if the condition fails (new will invalid), the old will may not be revoked.",
      whyWrong: [
        "Revocation can be conditional depending on wording/intention.",
        "—",
        "No automatic invalidity of both.",
        "Courts generally give effect to clear conditional language."
      ]
    }
  },
  {
    topic: "Revocation by later will — lost later will",
    q: "T made a later will revoking an earlier one, but the later will cannot now be found. Which is the best initial issue to consider?",
    choices: [
      "Whether the earlier will automatically revives",
      "Whether the later will can be proved (and whether it was revoked or simply lost), and the evidential presumptions that may apply",
      "Whether the witnesses to the earlier will are alive",
      "Whether intestacy is always automatic"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the later will is missing, questions arise about whether it existed, its contents, and whether it was revoked; this is an evidential/probate issue before assuming revival/intestacy.",
      whyWrong: [
        "Revival is not automatic and depends on what happened to the later will and proof issues.",
        "—",
        "Witness survival is not usually decisive; evidence can come from other sources.",
        "Intestacy is not automatically assumed without resolving proof questions."
      ]
    }
  },
  {
    topic: "Destruction — partial destruction",
    q: "T removes and destroys only the page containing a specific gift clause, intending to revoke that gift only. The best analysis is:",
    choices: [
      "Impossible: revocation by destruction must destroy the whole will",
      "It can amount to partial revocation if the act and intent target that part, but may create proof/alteration issues",
      "It always revokes the entire will",
      "It never has any effect"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Partial revocation can occur where the act and intention are directed at a specific part, but removal of pages can raise complex proof and alteration issues.",
      whyWrong: [
        "Partial revocation is possible in principle.",
        "—",
        "Not always; depends on intention and effect.",
        "It can have effect if requirements are met."
      ]
    }
  },
  {
    topic: "Codicil — minor change scenario",
    q: "T wants to change only the executor appointment but keep the rest of the will. The most appropriate instrument is usually:",
    choices: [
      "A deed poll",
      "A codicil (executed with will formalities)",
      "A text message to the beneficiaries",
      "A Probate Registry application to rewrite the will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A codicil is commonly used to make limited amendments (like changing executors) without re-writing the entire will, provided it is executed correctly.",
      whyWrong: [
        "A deed poll does not amend a will.",
        "—",
        "Text messages do not satisfy will formalities.",
        "The Registry does not rewrite wills administratively."
      ]
    }
  },
  {
    topic: "Revocation — intention inferred",
    q: "T writes ‘VOID’ across the original will and signs and dates it, intending to revoke. The best analysis is:",
    choices: [
      "Likely effective revocation by destruction/defacement if it amounts to an act of destruction/obliteration with intent",
      "Always ineffective unless witnessed",
      "Ineffective because writing on a will can never revoke it",
      "Automatically creates a new will"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Defacing/obliterating with intention can constitute an act of destruction for revocation, depending on extent and intent. It is not a ‘new will’ but can revoke.",
      whyWrong: [
        "—",
        "Witnessing is not strictly required for destruction revocation (though proof issues can arise).",
        "Defacement can revoke if it amounts to destruction/obliteration with intent.",
        "It does not create a new will."
      ]
    }
  },
  {
    topic: "Marriage/CP — gift to spouse in old will",
    q: "T makes a will leaving everything to their partner. They later marry that partner and make no new will. The most accurate outcome is:",
    choices: [
      "The will remains valid because it benefited the spouse",
      "The will is generally revoked by marriage unless it was made in contemplation of that marriage",
      "Only the gift to the spouse is revoked",
      "The will is converted into a codicil automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Marriage generally revokes a prior will even if it benefits the spouse, unless the will was made in contemplation of that marriage.",
      whyWrong: [
        "Benefit does not prevent statutory revocation.",
        "—",
        "Marriage tends to revoke the will (not just gifts).",
        "No automatic conversion."
      ]
    }
  },
  {
    topic: "Revocation by later instrument — codicil revoking will",
    q: "A codicil states: “I revoke my previous will.” If the codicil is validly executed, the effect is:",
    choices: [
      "No effect because codicils cannot revoke wills",
      "It can revoke the previous will (expressly), leaving intestacy unless another will exists",
      "It revokes only gifts to witnesses",
      "It automatically revives the previous will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A valid codicil is a testamentary instrument and can revoke a prior will by express wording, potentially resulting in intestacy if no other will governs.",
      whyWrong: [
        "Codicils can revoke/amend wills if properly executed.",
        "—",
        "It is not limited to s 15 issues.",
        "Revocation does not revive."
      ]
    }
  },
  {
    topic: "Revocation — proving revocation by destruction",
    q: "In a dispute, which combination is generally required to establish revocation by destruction?",
    choices: [
      "Evidence of physical act of destruction and intention to revoke",
      "Evidence that the testator disliked the beneficiaries",
      "Evidence that the witnesses have died",
      "Evidence that a solicitor drafted the will"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Revocation by destruction requires both the act (burning/tearing/obliterating) and the intention to revoke; both must be proved.",
      whyWrong: [
        "—",
        "Dislike may suggest motive but is not the legal test.",
        "Witness death is irrelevant to whether revocation occurred.",
        "Drafting by solicitor does not determine revocation."
      ]
    }
  },
  {
    topic: "Revocation — effect of ineffective alteration vs revocation",
    q: "T makes pen changes to a will after execution, intending to change beneficiaries, but the changes are not properly executed. The most accurate general risk is:",
    choices: [
      "The changes automatically take effect because intention is clear",
      "The changes are ineffective; the will is read as originally executed (if the original text can be proved), and T’s intention alone won’t fix it",
      "The whole will is revoked automatically",
      "The witnesses’ signatures validate the changes even if they were not present"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Post-execution changes often need proper execution/attestation to be effective. If not, the original wording usually stands (if provable).",
      whyWrong: [
        "Intention alone does not satisfy formalities for alterations.",
        "—",
        "Invalid alterations do not necessarily revoke the whole will.",
        "Witnesses must comply with the formalities at the relevant time."
      ]
    }
  },
  {
    topic: "Revocation & codicils — safest practice",
    q: "Which is generally the safest way for T to ensure an old will is revoked and replaced?",
    choices: [
      "Tells friends they changed their mind",
      "Makes a new will with an express revocation clause and executes it properly",
      "Writes ‘cancelled’ on the will without signature",
      "Hides the will so nobody finds it"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A properly executed new will with an express revocation clause is the cleanest way to revoke and replace prior wills.",
      whyWrong: [
        "Oral statements are not generally effective revocation.",
        "—",
        "Unsigned annotations can create disputes and may be ineffective.",
        "Hiding does not revoke."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Wills and Estates | Chapter 4 | Revocation and Alteration",
    subtitle: "Revocation methods, later wills, and destruction rules.",
    questions: questions
  };
})();
  
