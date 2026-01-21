(() => {
  const questions = [
  {
    topic: "Barnes v Addy — overview",
    q: "Barnes v Addy is best known for identifying two main routes by which a stranger may be liable for breach of trust. These are:",
    choices: [
      "Negligent auditing and breach of contract",
      "Dishonest assistance and knowing receipt",
      "Undue influence and proprietary estoppel",
      "Tracing and subrogation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Barnes v Addy is the classic starting point for stranger liability: (1) dishonest assistance in a breach of trust, and (2) knowing receipt of trust property.",
      whyWrong: [
        "Auditing/contract is not the Barnes v Addy framework.",
        "—",
        "Those are separate equitable doctrines.",
        "Tracing/subrogation are remedies/processes, not the two Barnes routes."
      ]
    }
  },
  {
    topic: "Dishonest assistance — basic elements",
    q: "Which set of elements best describes dishonest assistance liability?",
    choices: [
      "Receipt of trust property + strict liability + no breach required",
      "Breach of trust + assistance by defendant + dishonesty",
      "Contract + reliance + detriment",
      "Misrepresentation + inducement + loss"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Dishonest assistance requires (i) a breach of trust, (ii) assistance by the defendant, and (iii) dishonesty.",
      whyWrong: [
        "Receipt is not required for dishonest assistance, and it is not strict liability.",
        "—",
        "Those are estoppel/contract concepts.",
        "Those are misrepresentation concepts."
      ]
    }
  },
  {
    topic: "Dishonest assistance — receipt not required",
    q: "For dishonest assistance, the defendant must:",
    choices: [
      "Receive trust property for their own benefit",
      "Assist the breach; receipt of trust property is not required",
      "Be a trustee",
      "Have entered a written contract with the trustee"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Dishonest assistance focuses on participation/assistance and dishonesty, not on receiving trust property.",
      whyWrong: [
        "That describes knowing receipt, not dishonest assistance.",
        "—",
        "A stranger can be liable; trustee status is not required.",
        "No contract requirement exists."
      ]
    }
  },
  {
    topic: "Dishonest assistance — dishonesty test (Ivey-style)",
    q: "The modern approach to dishonesty in this context is closest to:",
    choices: [
      "Purely subjective: if defendant thinks it is honest, they are not liable",
      "Objective assessment by ordinary standards, taking into account what the defendant actually knew/believed as to the facts",
      "Strict liability whenever a breach occurs",
      "Dishonesty only if there is a criminal conviction"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Dishonesty is assessed by ordinary standards, but the court first determines the defendant’s actual knowledge/belief of facts (Ivey-style approach).",
      whyWrong: [
        "Not purely subjective.",
        "—",
        "It is not strict liability.",
        "A criminal conviction is not required."
      ]
    }
  },
  {
    topic: "Dishonest assistance — negligence",
    q: "Which statement is most accurate?",
    choices: [
      "Negligence alone is always enough for dishonest assistance",
      "Negligence alone is not enough; dishonesty is required",
      "Dishonest assistance requires the defendant to be paid for assisting",
      "Dishonest assistance only applies to land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The accessory must be dishonest; mere carelessness/negligence is not sufficient for dishonest assistance.",
      whyWrong: [
        "Negligence does not equal dishonesty.",
        "—",
        "Payment is not an element.",
        "It applies to all trust property types."
      ]
    }
  },
  {
    topic: "Knowing receipt — basic elements",
    q: "Which set of elements best describes knowing receipt?",
    choices: [
      "Breach of trust + receipt of trust property for the defendant’s own benefit + knowledge making retention unconscionable",
      "Breach of trust + assistance + dishonesty",
      "No breach needed + receipt + strict liability",
      "Contract + breach + damages"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Knowing receipt requires receipt of trust property (beneficially) following a breach of trust, with knowledge that makes retention unconscionable.",
      whyWrong: [
        "—",
        "That is dishonest assistance.",
        "Knowing receipt is not strict liability and a breach is needed.",
        "Contract concepts are not the test."
      ]
    }
  },
  {
    topic: "Knowing receipt — beneficial receipt",
    q: "For knowing receipt, which is generally required?",
    choices: [
      "The defendant must receive trust property for their own benefit (beneficial receipt)",
      "The defendant must have assisted the breach",
      "The defendant must be a beneficiary",
      "The defendant must have signed the trust deed"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Knowing receipt requires receipt for the defendant’s own benefit; a mere agent/custodian typically is not a beneficial recipient.",
      whyWrong: [
        "Assistance is not required for receipt-based liability.",
        "—",
        "The defendant is a stranger, not necessarily a beneficiary.",
        "No signature requirement."
      ]
    }
  },
  {
    topic: "Knowing receipt — no need for dishonesty",
    q: "Which statement is most accurate?",
    choices: [
      "Knowing receipt always requires dishonesty",
      "Knowing receipt focuses on knowledge/unconscionability, not necessarily dishonesty",
      "Knowing receipt is strict liability",
      "Knowing receipt only applies if the trustee intended fraud"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Knowing receipt is about what the recipient knew (or should have realised) such that keeping the property is unconscionable; it does not always require dishonesty.",
      whyWrong: [
        "Dishonesty is central to dishonest assistance, not always to receipt.",
        "—",
        "It is not strict liability.",
        "Trustee fraud intention is not a universal requirement."
      ]
    }
  },
  {
    topic: "Knowledge — Baden categories (idea)",
    q: "The Baden categories are most associated with:",
    choices: [
      "Classifying levels of knowledge relevant to knowing receipt",
      "Rules for severing joint tenancies",
      "Requirements for valid wills",
      "The doctrine of donatio mortis causa"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Baden categories classify knowledge (actual knowledge, wilful blindness, reckless failure to inquire, etc.) often used in analysing knowing receipt.",
      whyWrong: [
        "—",
        "That is co-ownership law.",
        "That is wills law.",
        "That is deathbed gifts."
      ]
    }
  },
  {
    topic: "Knowing receipt — 'unconscionable to retain'",
    q: "In modern terms, the key question for knowing receipt is usually whether:",
    choices: [
      "The defendant was paid a fee",
      "The defendant’s knowledge makes it unconscionable to retain the property",
      "The trustee was solvent",
      "The defendant promised to return the money"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The central inquiry is whether, given the defendant’s knowledge, it would be unconscionable for them to keep the trust property.",
      whyWrong: [
        "Payment is irrelevant to the core test.",
        "—",
        "Trustee solvency is not the core test.",
        "A promise may be evidence, but not the legal test."
      ]
    }
  },
  {
    topic: "Knowing receipt — receipt vs assistance",
    q: "Which best distinguishes knowing receipt from dishonest assistance?",
    choices: [
      "Knowing receipt requires receipt of trust property; dishonest assistance does not",
      "Dishonest assistance requires receipt; knowing receipt does not",
      "Both require a criminal conviction",
      "Both are strict liability"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Receipt is required for knowing receipt. Dishonest assistance can apply even without any receipt.",
      whyWrong: [
        "This reverses the distinction.",
        "—",
        "No criminal conviction requirement.",
        "Neither is strict liability."
      ]
    }
  },
  {
    topic: "Knowing dealing — concept",
    q: "‘Knowing dealing’ is most closely associated with:",
    choices: [
      "A stranger dealing with trust property inconsistently with the trust, in circumstances making them liable",
      "A beneficiary collapsing the trust",
      "A valid charitable trust",
      "A land registration priority rule"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Knowing dealing refers to a stranger dealing with trust assets in a way inconsistent with trust rights (conceptually distinct but related to Barnes v Addy thinking).",
      whyWrong: [
        "That is Saunders v Vautier.",
        "—",
        "Not charity law.",
        "Not a registration priority rule."
      ]
    }
  },
  {
    topic: "Requirement — underlying breach",
    q: "For both dishonest assistance and knowing receipt, a key prerequisite is usually:",
    choices: [
      "A criminal offence",
      "A breach of trust or breach of fiduciary duty",
      "A written contract",
      "A registered charge"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Accessory/receipt liability generally depends on an underlying breach of trust or fiduciary duty.",
      whyWrong: [
        "Not required.",
        "—",
        "Not required.",
        "Not required."
      ]
    }
  },
  {
    topic: "Bona fide purchaser — definition",
    q: "A bona fide purchaser for value without notice is best described as someone who:",
    choices: [
      "Receives property as a gift",
      "Buys property for value in good faith without notice of the equitable interest",
      "Is always a trustee",
      "Can never be sued in equity for anything"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Equity’s darling is a purchaser for value acting in good faith without notice of prior equitable rights, typically taking free of them.",
      whyWrong: [
        "A gift is not 'for value'.",
        "—",
        "Purchaser is not a trustee by definition.",
        "It is not a universal immunity from equity."
      ]
    }
  },
  {
    topic: "Bona fide purchaser — impact",
    q: "If a defendant is a bona fide purchaser for value without notice, the most likely consequence is that:",
    choices: [
      "A proprietary claim to the asset is defeated",
      "Dishonest assistance liability automatically arises",
      "The trust becomes charitable",
      "The trustee is automatically removed"
    ],
    correct: 0,
    explain: {
      whyRight:
        "BFPfVwN typically defeats proprietary claims to recover the asset; the claimant may be left to personal claims against wrongdoers.",
      whyWrong: [
        "BFP status does not create dishonest assistance.",
        "—",
        "Unrelated.",
        "Removal is separate and not automatic."
      ]
    }
  },
  {
    topic: "Knowing receipt — agent vs beneficial recipient",
    q: "X receives misapplied trust money into a client account purely as an agent/custodian and passes it on. The best starting point is:",
    choices: [
      "X is automatically liable for knowing receipt",
      "Knowing receipt usually requires beneficial receipt, so pure custody as agent may not satisfy the receipt element (though other liabilities may)",
      "X is immune because they are not a trustee",
      "X becomes a beneficiary"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Knowing receipt typically needs beneficial receipt. Mere custody may fail that element, though dishonest assistance might still be relevant if assistance/dishonesty is shown.",
      whyWrong: [
        "Not automatic.",
        "—",
        "Strangers can be liable; no automatic immunity.",
        "Receiving money does not make someone a beneficiary."
      ]
    }
  },
  {
    topic: "Dishonest assistance — assistance meaning",
    q: "Which is the best description of 'assistance' for dishonest assistance?",
    choices: [
      "The defendant must control the trustee’s mind",
      "The defendant must do acts that help the breach occur (even if minor), provided they are causally linked in a broad sense",
      "The defendant must be the main perpetrator",
      "The defendant must sign a deed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Assistance is interpreted broadly: any acts that facilitate the breach can qualify, even if not the primary cause, as long as they help the breach happen.",
      whyWrong: [
        "Control is not required.",
        "—",
        "Being the main perpetrator is not required.",
        "No deed-signing requirement."
      ]
    }
  },
  {
    topic: "Dishonest assistance — knowledge vs dishonesty",
    q: "Which statement is most accurate about the role of knowledge in dishonest assistance?",
    choices: [
      "Knowledge is irrelevant",
      "What the defendant knew/believed about facts informs whether their conduct was dishonest by ordinary standards",
      "Only actual knowledge counts; suspicion is never relevant",
      "Dishonesty is judged only by the defendant’s personal moral code"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The court finds the defendant’s actual belief/knowledge of facts, then asks whether conduct was dishonest by ordinary standards (knowledge feeds the dishonesty conclusion).",
      whyWrong: [
        "Knowledge is highly relevant to dishonesty.",
        "—",
        "Wilful blindness and obvious risk may matter, depending on facts.",
        "Not purely subjective."
      ]
    }
  },
  {
    topic: "Knowing receipt — property requirement",
    q: "For knowing receipt, the claimant must generally show the defendant received:",
    choices: [
      "Any benefit at all from any source",
      "Trust property (or its traceable proceeds) following a breach of trust",
      "Only land (not money)",
      "Only property registered at HM Land Registry"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Receipt must be of trust assets (or traceable proceeds) and linked to a breach of trust.",
      whyWrong: [
        "The benefit must be trust property-related.",
        "—",
        "Money can be trust property.",
        "Trust property is not limited to registered assets."
      ]
    }
  },
  {
    topic: "Remedy — knowing receipt",
    q: "A typical remedy against a knowing recipient is:",
    choices: [
      "Specific performance of a contract",
      "Personal liability to restore value (equitable compensation) and/or proprietary remedies if the asset/proceeds are traceable and defences don’t apply",
      "A prison sentence",
      "Automatic rescission of the trust"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Knowing recipients commonly face personal restitution/equitable compensation; proprietary recovery may also be sought if tracing is possible and defences don’t intervene.",
      whyWrong: [
        "Contract remedy is not the usual trust response.",
        "—",
        "Civil equity claim, not criminal sentencing.",
        "The trust is not automatically rescinded."
      ]
    }
  },
  {
    topic: "Remedy — dishonest assistance",
    q: "A dishonest assistant is typically liable:",
    choices: [
      "Only to hand back any asset they still have",
      "Personally for losses caused by the breach (equitable compensation), even if they never received trust property",
      "Only if they were paid",
      "Only if the trustee is insolvent"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Dishonest assistance is personal accessory liability; it can require the defendant to compensate for loss caused by the breach even without receipt.",
      whyWrong: [
        "That is too narrow and assumes receipt.",
        "—",
        "Payment is not required.",
        "Trustee insolvency is not an element."
      ]
    }
  },
  {
    topic: "Fiduciary relationship — definition",
    q: "A fiduciary relationship is best described as one where:",
    choices: [
      "The parties are friends",
      "One party undertakes to act for another with discretionary power, requiring loyalty and good faith",
      "There is always a written agreement",
      "The relationship is always charitable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Fiduciary relationships involve an undertaking and discretionary power affecting another’s interests, triggering duties of loyalty and good faith.",
      whyWrong: [
        "Friendship alone is not enough.",
        "—",
        "Writing is not required.",
        "Charity is irrelevant."
      ]
    }
  },
  {
    topic: "Fiduciaries — common examples",
    q: "Which is most likely to be a fiduciary?",
    choices: [
      "Trustee",
      "Casual seller in a one-off sale",
      "Stranger who reads about the trust online",
      "Random neighbour"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Trustees are paradigmatic fiduciaries, owing strict duties of loyalty and proper administration.",
      whyWrong: [
        "A one-off seller is not typically fiduciary.",
        "—",
        "Mere awareness does not create fiduciary status.",
        "Neighbour status is irrelevant."
      ]
    }
  },
  {
    topic: "Fiduciary duty — no conflict",
    q: "The 'no conflict' rule means a fiduciary must:",
    choices: [
      "Avoid all disagreements with the beneficiary",
      "Not put themselves in a position where personal interest conflicts with fiduciary duty",
      "Never invest trust funds",
      "Always act for free"
    ],
    correct: 1,
    explain: {
      whyRight:
        "No conflict prohibits the fiduciary from placing themselves in a position of conflict between duty and personal interest.",
      whyWrong: [
        "Personal disagreements are not the legal point.",
        "—",
        "Investment may be permitted within powers and duties.",
        "Payment is not prohibited if authorised."
      ]
    }
  },
  {
    topic: "Fiduciary duty — no profit",
    q: "The 'no profit' rule is best expressed as:",
    choices: [
      "Fiduciaries may profit if the beneficiary does not complain",
      "Fiduciaries must not make unauthorised profits from their position, even if the beneficiary suffers no loss",
      "Fiduciaries can keep secret commissions",
      "Fiduciaries only owe duties if paid"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The no-profit rule is strict: unauthorised gains made by reason of the fiduciary position must be accounted for, even absent loss.",
      whyWrong: [
        "Consent/authorisation matters; silence is not always consent.",
        "—",
        "Secret commissions typically breach fiduciary duty.",
        "Duties don’t depend on being paid."
      ]
    }
  },
  {
    topic: "Fiduciary breach — remedies",
    q: "Which remedy is especially associated with fiduciary breaches involving unauthorised gain?",
    choices: [
      "Account of profits",
      "Criminal damages",
      "Probate grant",
      "Specific performance of a will"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Where the wrong involves unauthorised profit, an account of profits is a classic equitable response.",
      whyWrong: [
        "No such concept as criminal damages here.",
        "—",
        "Probate is unrelated.",
        "Wills remedies are unrelated."
      ]
    }
  },
  {
    topic: "Accessory liability — fiduciary breach",
    q: "Dishonest assistance can apply to:",
    choices: [
      "Only trustees",
      "Breaches of trust and also breaches of fiduciary duty",
      "Only land trusts",
      "Only charities"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Dishonest assistance is not confined to trustees; it can extend to breaches of fiduciary duty where the necessary elements are met.",
      whyWrong: [
        "Not limited to trustees.",
        "—",
        "Not limited to land.",
        "Not limited to charities."
      ]
    }
  },
  {
    topic: "Knowing receipt — why 'receipt' matters",
    q: "Why is receipt central to knowing receipt liability?",
    choices: [
      "Because it is a criminal offence",
      "Because liability is based on the defendant being enriched by receiving misapplied trust property in circumstances making retention unconscionable",
      "Because it proves the trustee was dishonest",
      "Because it automatically transfers legal title"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Knowing receipt targets recipients who take trust assets for their benefit with knowledge that makes keeping them unconscionable.",
      whyWrong: [
        "This is civil equitable liability, not a crime by itself.",
        "—",
        "Trustee dishonesty is not automatically proven.",
        "Receipt does not automatically transfer legal title in all contexts."
      ]
    }
  },
  {
    topic: "Exam spotting — choosing the right claim",
    q: "Trust funds are misapplied by a trustee to pay X’s personal debt. X receives the payment knowing it came from a trust and that it was unauthorised. The best claim is usually:",
    choices: [
      "Dishonest assistance only",
      "Knowing receipt (and potentially proprietary recovery if traceable and no defence applies)",
      "Only breach of contract",
      "Only defamation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "X received trust money for their benefit with knowledge making retention unconscionable, fitting knowing receipt (and possibly tracing-based claims).",
      whyWrong: [
        "Dishonest assistance might also be argued if X assisted, but receipt is the clearest route on these facts.",
        "—",
        "No contract basis here.",
        "Defamation is irrelevant."
      ]
    }
  },
  {
    topic: "Exam spotting — assistance without receipt",
    q: "Y helps a trustee transfer trust assets to a third party, but Y never receives any trust property. If Y acted dishonestly, the most fitting claim is:",
    choices: [
      "Knowing receipt",
      "Dishonest assistance",
      "Resulting trust",
      "Saunders v Vautier"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Dishonest assistance covers dishonest participation even where the assistant never receives trust property.",
      whyWrong: [
        "Knowing receipt needs receipt.",
        "—",
        "Resulting trust is about failure/intent, not accessory wrongdoing.",
        "Saunders v Vautier is about beneficiaries collapsing trusts."
      ]
    }
  }
];

  window.quizData = {
    title: "SQE1 Trust Law | Chapter 9 | Breach and Liability",
    subtitle: "Dishonest assistance, knowing receipt, and Barnes v Addy.",
    questions: questions
  };
})();
  
