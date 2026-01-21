(() => {
  const questions = [
  {
    topic: "Constitution — core rule (Milroy v Lord)",
    q: "Which statement best reflects the rule in Milroy v Lord?",
    choices: [
      "Equity will perfect an imperfect gift whenever intention is clear",
      "To constitute a trust/gift, the settlor must either transfer the property or declare themself trustee; equity will not convert a failed transfer into a declaration to save it",
      "A volunteer can always sue for specific performance of a gift",
      "If formalities are attempted, the gift is automatically valid"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Milroy v Lord establishes that the correct method must be used: transfer to trustee/donee or self-declaration. Equity won’t recharacterise a failed transfer as a trust declaration to perfect it.",
      whyWrong: [
        "Equity does not generally perfect imperfect gifts based on intention alone.",
        "—",
        "Volunteers generally cannot compel completion of an imperfect gift.",
        "Attempting formalities is not enough if the transfer/declaration is incomplete."
      ]
    }
  },
  {
    topic: "Constitution — equity will not assist a volunteer",
    q: "In this context, a 'volunteer' is best described as:",
    choices: [
      "A person who agrees to act as trustee without pay",
      "A person who has not provided consideration and is therefore not entitled to equitable assistance to perfect an imperfect gift",
      "A person who witnesses a will",
      "A person who works for a charity"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A volunteer is someone who has provided no consideration; equity will generally not assist them by perfecting an imperfect gift or constitution.",
      whyWrong: [
        "That is an unpaid trustee, not the meaning here.",
        "—",
        "Witnessing is unrelated.",
        "Charity work is unrelated."
      ]
    }
  },
  {
    topic: "Constitution — failed transfer vs valid self-declaration",
    q: "S attempts to transfer shares to B but fails to complete the required transfer steps. Which is most accurate?",
    choices: [
      "The court will treat S as having declared a trust for B",
      "The transfer fails unless an exception applies; the court will not usually recharacterise it as a trust declaration",
      "B can compel transfer because S intended it",
      "The shares automatically pass to B in equity on the date of intention"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Absent an applicable exception, an incomplete transfer remains imperfect and will not be treated as a self-declaration just to perfect it (Milroy v Lord; Richards v Delbridge).",
      whyWrong: [
        "Recharacterisation to rescue the gift is generally rejected.",
        "—",
        "A volunteer cannot usually compel completion.",
        "Intention alone does not pass equitable title."
      ]
    }
  },
  {
    topic: "Re Rose — 'everything in his power' principle",
    q: "Which best captures the principle in Re Rose?",
    choices: [
      "A gift is valid only once the transferee is registered as legal owner",
      "If the donor has done everything necessary on their part to transfer the property, equity may treat the transfer as effective even if registration/third-party steps remain",
      "Equity perfects all gifts of shares once a form is signed",
      "Re Rose applies only to gifts made by will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Re Rose: when the donor has done everything required of them to effect the transfer, equity may treat the transfer as complete in equity even though legal title completes later.",
      whyWrong: [
        "Registration completes legal title but equity may recognise the transfer earlier if Re Rose is satisfied.",
        "—",
        "Signing alone may not be enough if further donor steps are required.",
        "Re Rose is an inter vivos principle, not limited to wills."
      ]
    }
  },
  {
    topic: "Re Rose — what remains to be done?",
    q: "Under Re Rose, what is the key question?",
    choices: [
      "Whether the donor wrote a letter expressing intention",
      "Whether the donor has done everything required of them (so nothing further remains within their power to effect the transfer)",
      "Whether the donee is a family member",
      "Whether the transfer is tax efficient"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The focus is whether the donor has completed all actions required on their part; if so, equity can treat the gift as effective despite later formal registration.",
      whyWrong: [
        "Intention letters alone don’t satisfy the test.",
        "—",
        "Family relationship is irrelevant.",
        "Tax motive is irrelevant."
      ]
    }
  },
  {
    topic: "Re Rose — control",
    q: "Which factor most strongly supports applying Re Rose?",
    choices: [
      "The donor retains the ability to cancel the transfer easily",
      "The donor has irrevocably delivered properly executed transfer documents so that completion depends on third parties",
      "The donor promised to transfer next year",
      "The donor asked the donee to remind them"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Re Rose is most compelling where the donor has effectively parted with control by doing all required steps on their part and leaving only third-party steps.",
      whyWrong: [
        "Retention of control suggests the donor has not done everything required.",
        "—",
        "A future promise does not constitute the gift.",
        "Reminders do not constitute the gift."
      ]
    }
  },
  {
    topic: "Pennington v Waine — unconscionability",
    q: "Pennington v Waine is often used to support which idea?",
    choices: [
      "A gift is always perfected once intended",
      "Even if Re Rose is not satisfied, a gift may be treated as effective where it would be unconscionable for the donor to revoke",
      "All gifts of shares must be by deed",
      "Volunteers can always sue for damages"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Pennington v Waine suggests (controversially) that in some cases equity will treat a gift as complete where it would be unconscionable to withdraw, even if 'everything in his power' isn’t met.",
      whyWrong: [
        "Intention alone is insufficient.",
        "—",
        "No general deed requirement for share gifts.",
        "Volunteers usually cannot sue to perfect gifts; damages isn’t the key doctrine here."
      ]
    }
  },
  {
    topic: "Pennington v Waine — cautious exam use",
    q: "What is the safest SQE-style approach to Pennington v Waine?",
    choices: [
      "Treat it as a broad rule that saves most imperfect gifts",
      "Treat it as fact-sensitive and exceptional; look for elements making retraction unconscionable",
      "Ignore it because it is never applied",
      "Assume it overrules Milroy v Lord"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Pennington is controversial and best treated as narrow and fact-driven: identify reliance/assurances/steps making it unconscionable to retract.",
      whyWrong: [
        "That overstates the case.",
        "—",
        "It is still cited and examinable.",
        "It does not wholly displace Milroy; it’s an exceptional route."
      ]
    }
  },
  {
    topic: "Strong v Bird — elements",
    q: "Which combination is required for the Strong v Bird exception?",
    choices: [
      "Donor’s intention + delivery + two witnesses",
      "Intention to make an immediate gift + intention continues until death + donee becomes executor/administrator",
      "Payment of consideration + registration + deed",
      "Illness + keys handed over + death within 7 days"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Strong v Bird requires intention to make an immediate gift, continuing intention until death, and the donee becoming executor/administrator so legal title vests in them.",
      whyWrong: [
        "Witnesses/delivery are not the test.",
        "—",
        "Consideration/registration/deed are not the elements.",
        "Those are not the Strong v Bird requirements."
      ]
    }
  },
  {
    topic: "Strong v Bird — immediate intention",
    q: "Why must the donor’s intention in Strong v Bird be 'immediate' rather than purely future?",
    choices: [
      "Because only immediate intentions are morally acceptable",
      "Because the doctrine perfects an incomplete inter vivos gift at death, so intention must have been to give at once (not merely to gift later)",
      "Because wills require immediacy",
      "Because executors cannot receive property"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The doctrine treats the gift as perfected when legal title vests in the executor at death; it requires an intention to give immediately that persisted, not a mere future promise.",
      whyWrong: [
        "Morality is irrelevant.",
        "—",
        "Wills formalities are separate.",
        "Executors can receive property."
      ]
    }
  },
  {
    topic: "Strong v Bird — continuing intention",
    q: "Which statement is most accurate about the 'continuing intention' requirement?",
    choices: [
      "It is irrelevant once the donor first intended the gift",
      "The donor must not revoke the gift; intention must persist until death",
      "The donee must remind the donor weekly",
      "It applies only to gifts of land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The exception requires intention to continue (not be revoked) up to the donor’s death.",
      whyWrong: [
        "Continuing intention is a core element.",
        "—",
        "Reminders are irrelevant.",
        "It can apply beyond land."
      ]
    }
  },
  {
    topic: "Strong v Bird — effect",
    q: "What is the legal mechanism by which Strong v Bird perfects the gift?",
    choices: [
      "Equity forces specific performance against the estate",
      "Legal title vests in the donee as executor/administrator, perfecting the imperfect transfer",
      "The court deems delivery to have occurred",
      "The donor is treated as having made a will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The gift becomes effective because the donee obtains legal title as executor/administrator on death, curing the previous lack of transfer.",
      whyWrong: [
        "Not framed as specific performance for a volunteer.",
        "—",
        "Delivery is not the operative mechanism.",
        "It is not treated as a will."
      ]
    }
  },
  {
    topic: "Donatio mortis causa — definition",
    q: "A donatio mortis causa (DMC) is best described as:",
    choices: [
      "A normal inter vivos gift requiring full transfer formalities",
      "A conditional gift made in contemplation of death, effective only if the donor dies, with delivery of dominion",
      "A trust created for charitable purposes",
      "A contract to leave property by will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A DMC is an exceptional, conditional deathbed gift: contemplation of death, conditional on death, and delivery of dominion/control.",
      whyWrong: [
        "It is exceptional and can operate despite incomplete transfer formalities.",
        "—",
        "Not limited to charities.",
        "Not a contract to make a will."
      ]
    }
  },
  {
    topic: "DMC — contemplation of death",
    q: "Which is the best statement about 'contemplation of death' for a DMC?",
    choices: [
      "The donor must contemplate death generally at some undefined time",
      "The donor must contemplate death from a specific illness/peril (not merely general mortality)",
      "The donor must be on a plane",
      "The donor must be over 70"
    ],
    correct: 1,
    explain: {
      whyRight:
        "DMC requires contemplation of impending death from a particular illness/peril, not just awareness of mortality.",
      whyWrong: [
        "General mortality is not sufficient.",
        "—",
        "No such requirement.",
        "Age is irrelevant."
      ]
    }
  },
  {
    topic: "DMC — conditional nature",
    q: "Which best reflects the conditional requirement of a DMC?",
    choices: [
      "The gift is unconditional and immediate",
      "The gift is conditional on the donor’s death; if the donor survives, it is revocable and does not take effect",
      "The gift is conditional on witnesses signing",
      "The gift is conditional on the donee paying tax"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A DMC is conditional on death: it is revocable if the donor does not die as contemplated.",
      whyWrong: [
        "Unconditional immediate gifts are normal inter vivos gifts, not DMCs.",
        "—",
        "Witnesses are not a general DMC requirement.",
        "Tax does not define the doctrine."
      ]
    }
  },
  {
    topic: "DMC — delivery of dominion",
    q: "For a DMC, 'delivery' most accurately means:",
    choices: [
      "Physical delivery of the property itself is always required",
      "Delivery of dominion/control (e.g., keys or title indicia) sufficient to give control, depending on the property",
      "Delivery by email is always sufficient",
      "Delivery is not required if intention is clear"
    ],
    correct: 1,
    explain: {
      whyRight:
        "DMC requires delivery of dominion—something that gives practical control over the property (often keys/documents), tailored to the type of asset.",
      whyWrong: [
        "Not always the asset itself; dominion can be via indicia.",
        "—",
        "Email alone is not a general rule for delivery of dominion.",
        "Delivery is a core element."
      ]
    }
  },
  {
    topic: "DMC — difference from will",
    q: "Which statement best distinguishes a DMC from a will?",
    choices: [
      "A DMC must comply with Wills Act s9",
      "A DMC is an equitable, conditional gift operating exceptionally without Wills Act s9 formalities",
      "A will can be oral, but DMC cannot",
      "A DMC is always charitable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A DMC is a narrow equitable doctrine that can operate without Wills Act s9, whereas wills must comply with s9 formalities.",
      whyWrong: [
        "DMCs are notable because they can operate without s9 compliance (though courts apply them narrowly).",
        "—",
        "Wills are generally not oral (s9 requires writing).",
        "DMCs are not limited to charities."
      ]
    }
  },
  {
    topic: "Exceptions — comparing Re Rose and Pennington",
    q: "Which is the most accurate comparison?",
    choices: [
      "Re Rose and Pennington are identical tests",
      "Re Rose focuses on donor doing everything required of them; Pennington focuses on unconscionability even if not everything is done",
      "Pennington overrules Re Rose completely",
      "Neither applies to shares"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Re Rose is the 'everything in his power' test; Pennington suggests an additional unconscionability route in some fact patterns.",
      whyWrong: [
        "They are distinct approaches.",
        "—",
        "Pennington does not fully overrule Re Rose.",
        "Both are often discussed in share transfer contexts."
      ]
    }
  },
  {
    topic: "Constitution — why equity refuses assistance",
    q: "What is the main policy reason behind 'equity will not assist a volunteer' in constitution cases?",
    choices: [
      "To punish donors who change their minds",
      "To respect formal transfer requirements and avoid bypassing them based on mere intention",
      "To ensure only solicitors create trusts",
      "To maximise tax revenue"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The rule supports certainty and respects property transfer formalities; intention alone should not bypass required steps.",
      whyWrong: [
        "It’s not about punishment.",
        "—",
        "No such requirement.",
        "Tax revenue is not the underlying principle."
      ]
    }
  },
  {
    topic: "Spotting — which exception fits?",
    q: "D signs a share transfer form and delivers it to the company for registration. Registration occurs later. Which exception is most directly engaged?",
    choices: [
      "Strong v Bird",
      "Re Rose",
      "Donatio mortis causa",
      "Secret trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "This matches the classic Re Rose scenario: donor has done everything required on their part, leaving only third-party registration steps.",
      whyWrong: [
        "Executor appointment is not involved.",
        "—",
        "No contemplation of death/delivery of dominion in a DMC sense.",
        "Not a wills secrecy situation."
      ]
    }
  },
  {
    topic: "Spotting — Strong v Bird",
    q: "D promises to gift a painting to P immediately, but never delivers it. D later appoints P as executor in the will and dies without revoking the intention. Best analysis?",
    choices: [
      "Gift still fails because delivery never occurred",
      "Strong v Bird can perfect the gift at death because P becomes executor and intention continued",
      "Re Rose applies because paintings are registered",
      "This is a DMC because D died"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The pattern fits Strong v Bird: immediate intention + continuing intention + donee becomes executor, perfecting the imperfect transfer on death.",
      whyWrong: [
        "Delivery is not required if Strong v Bird applies.",
        "—",
        "Re Rose is about doing everything required for transfer (often shares), not executor vesting of chattels.",
        "DMC needs contemplation of death and delivery of dominion, not just death."
      ]
    }
  },
  {
    topic: "Spotting — DMC",
    q: "On their deathbed, D says 'this is yours if I don’t make it' and hands over the keys to a safe containing valuable documents. D dies. Which doctrine is most relevant?",
    choices: [
      "DMC",
      "Re Rose",
      "Strong v Bird",
      "Broadway Cottages"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Contemplation of death + conditional gift + delivery of dominion (keys) strongly indicates a donatio mortis causa.",
      whyWrong: [
        "—",
        "Re Rose is about completing transfer steps in inter vivos gifts, not deathbed conditional gifts.",
        "Strong v Bird requires donee to be executor and immediate continuing intention.",
        "Broadway Cottages is about certainty of objects for fixed trusts."
      ]
    }
  },
  {
    topic: "DMC — survival",
    q: "D makes a purported DMC while seriously ill but later recovers fully. What is the likely effect?",
    choices: [
      "The gift becomes an immediate inter vivos gift automatically",
      "The DMC is revoked/does not take effect because it was conditional on death",
      "The donee keeps the gift regardless",
      "The gift converts into a will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A DMC is conditional on death; if the donor survives, it does not take effect and is revocable.",
      whyWrong: [
        "It does not automatically convert into an inter vivos gift without proper transfer.",
        "—",
        "Conditional nature prevents it taking effect if donor survives.",
        "It does not become a will without s9 compliance."
      ]
    }
  },
  {
    topic: "Pennington — when unconscionability is unlikely",
    q: "Which scenario is least likely to satisfy Pennington-style unconscionability?",
    choices: [
      "Donee relied on donor’s assurance to their detriment and donor encouraged that reliance",
      "Donor completed most steps and explicitly told donee the gift was complete",
      "Donor merely expressed an intention to gift someday and did nothing further",
      "Donor’s conduct made withdrawal unfair in the circumstances"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A bare intention to gift in the future with no further steps is the weakest case; unconscionability is unlikely without more (assurance/reliance/steps).",
      whyWrong: [
        "Reliance can strengthen unconscionability arguments.",
        "Assurances and steps can support unconscionability.",
        "—",
        "Unfairness based on conduct is central to the idea."
      ]
    }
  },
  {
    topic: "Strong v Bird — revocation before death",
    q: "D intended an immediate gift to P but later clearly revoked the intention before death. P is still appointed executor. What is the likely result?",
    choices: [
      "Strong v Bird still perfects the gift because P is executor",
      "Strong v Bird fails because continuing intention is missing",
      "Re Rose applies instead",
      "A DMC arises automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Continuing intention is essential; if D revoked before death, Strong v Bird does not apply.",
      whyWrong: [
        "Executor status alone is insufficient.",
        "—",
        "Re Rose is a different doctrine with different requirements.",
        "DMC requires contemplation of death and delivery of dominion."
      ]
    }
  },
  {
    topic: "Milroy v Lord — 'every effort' is not enough",
    q: "Which is most consistent with Milroy v Lord?",
    choices: [
      "If the donor tries hard but fails, equity will complete the gift",
      "If the donor uses the wrong method or fails to complete necessary steps, the gift/trust fails unless an exception applies",
      "Any signed letter completes a transfer",
      "A volunteer can always sue for specific performance"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Milroy v Lord rejects perfecting gifts simply because the donor intended them; compliance with transfer/declaration requirements is needed unless an exception applies.",
      whyWrong: [
        "Effort alone isn’t enough.",
        "—",
        "A signed letter is not generally sufficient for all property transfers.",
        "Volunteers generally cannot compel completion."
      ]
    }
  },
  {
    topic: "Exam trap — constitution vs certainty",
    q: "Which statement best distinguishes constitution issues from the three certainties?",
    choices: [
      "Constitution asks whether the trust property has been effectively vested or declared; certainties ask whether intention/subject matter/objects are sufficiently certain",
      "Constitution and certainties are identical",
      "Certainty only matters for land",
      "Constitution only matters for wills"
    ],
    correct: 0,
    explain: {
      whyRight:
        "You can have a perfectly certain trust that still fails because the property was never effectively transferred or declared (constitution), and vice versa.",
      whyWrong: [
        "They are separate doctrines.",
        "—",
        "Certainty matters across trust types, not only land.",
        "Constitution is mainly inter vivos (though related issues arise in wills contexts too)."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Trust Law | Chapter 4 | Constitution",
    subtitle: "Milroy v Lord, imperfect gifts, and exceptions.",
    questions: questions
  };
})();
  
