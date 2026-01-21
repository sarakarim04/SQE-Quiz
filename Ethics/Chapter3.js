(() => {
  const questions = [
  {
    topic: "Dispute resolution — misleading the court (acts/omissions)",
    q: "Your client insists you keep quiet about a key fact that makes your earlier statement to the court inaccurate. You could avoid correcting it and still 'win'. What is the best ethical analysis?",
    choices: [
      "Follow the client’s instruction because best interests override other duties",
      "Do nothing unless the judge asks a direct question",
      "You must not allow the court to be misled; you should take steps to correct misleading impressions and refuse to be complicit",
      "You can proceed if the opponent is represented and should have spotted it"
    ],
    correct: 2,
    explain: {
      whyRight:
        "In disputes, duties to the court and the rule against misleading (including by omission/complicity) mean you cannot let the court remain misled to advance the client’s case.",
      whyWrong: [
        "Client best interests are constrained by duties to the court and honesty/integrity.",
        "You must not rely on silence if that leaves the court misled.",
        "—",
        "Opponent representation does not justify misleading the court."
      ]
    }
  },
  {
    topic: "Dispute resolution — evidence tampering (2.1)",
    q: "Before disclosure, a client asks you to delete a damaging paragraph from a document and upload the edited version to the disclosure platform. What is most accurate?",
    choices: [
      "Acceptable if the paragraph is 'irrelevant' in the client’s view",
      "Acceptable if you keep the original on your file",
      "Prohibited: you must not misuse or tamper with evidence or attempt to do so",
      "Acceptable if the client does the editing, not you"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The disputes rules prohibit misusing/tampering with evidence (or attempting to). Editing evidence to mislead the process breaches that duty.",
      whyWrong: [
        "Relevance is determined by legal disclosure duties, not the client’s preference.",
        "Keeping a copy does not cure tampering.",
        "—",
        "You cannot be complicit by letting the client do it."
      ]
    }
  },
  {
    topic: "Dispute resolution — influencing witnesses (2.2)",
    q: "You tell a witness: 'If you change your evidence to be less damaging, the judge will like you more.' What is most accurate?",
    choices: [
      "Permitted as long as you do not tell them to lie",
      "Permitted if the witness is your client",
      "Prohibited: you must not seek to influence the substance of evidence or persuade witnesses to change evidence",
      "Permitted if done during witness familiarisation"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not influence the substance of evidence, including persuading witnesses to change their evidence.",
      whyWrong: [
        "Subtle pressure can still be improper influence.",
        "Client status does not permit influencing evidence substance.",
        "—",
        "Familiarisation is not a licence to change evidence."
      ]
    }
  },
  {
    topic: "Dispute resolution — benefits to witnesses (2.3)",
    q: "You offer a fact witness £2,000 'bonus' if your client wins and their evidence is helpful. Which is most accurate?",
    choices: [
      "Permitted if disclosed to the opponent",
      "Permitted if the witness signs a statement confirming independence",
      "Prohibited: you must not offer benefits dependent on the nature of evidence or the outcome",
      "Permitted if the money comes from the client, not the firm"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Outcome- or evidence-dependent benefits to witnesses are prohibited.",
      whyWrong: [
        "Disclosure does not make it acceptable.",
        "A statement cannot cure a prohibited inducement.",
        "—",
        "The prohibition is about the benefit being contingent, not who pays."
      ]
    }
  },
  {
    topic: "Dispute resolution — properly arguable allegations (2.4)",
    q: "A client wants you to plead fraud with no evidence, hoping disclosure will reveal something. What is most accurate?",
    choices: [
      "Acceptable if phrased as 'suspected fraud'",
      "Acceptable if the client signs instructions confirming they believe it",
      "Not acceptable: assertions must be properly arguable on the material you have",
      "Acceptable if it increases settlement pressure"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must only make allegations/submissions that are properly arguable; you cannot plead serious allegations as a fishing expedition.",
      whyWrong: [
        "Labeling it 'suspected' does not create a proper arguable basis.",
        "Client belief does not replace evidential basis.",
        "—",
        "Tactical pressure does not justify improper allegations."
      ]
    }
  },
  {
    topic: "Dispute resolution — compliance with court orders (2.5)",
    q: "You miss a court-ordered deadline because you were busy on another matter. The hearing goes ahead and time is wasted. What is most accurate?",
    choices: [
      "No breach if the delay was short",
      "Potential breach: you must comply with court orders and avoid placing yourself in contempt",
      "No breach if the client told you to prioritise another case",
      "No breach if you apologise afterwards"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You must comply with court orders placing obligations on you and avoid conduct that risks contempt; workload is not an excuse.",
      whyWrong: [
        "Short delay can still breach obligations depending on context.",
        "—",
        "Client preference cannot override court orders.",
        "Apology may mitigate but does not erase the breach."
      ]
    }
  },
  {
    topic: "Dispute resolution — wasting the court’s time (2.6)",
    q: "You file repeated weak applications mainly to drive up pressure and costs for the opponent. Which is most accurate?",
    choices: [
      "Acceptable litigation strategy if it helps settlement",
      "Acceptable if the client pays for it",
      "Potential breach: you must not waste the court’s time",
      "Acceptable if the opponent is unrepresented"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The disputes rules prohibit wasting the court’s time; abusive/repetitive applications risk breach.",
      whyWrong: [
        "Settlement objectives do not justify abusive tactics.",
        "Payment does not justify wasting court resources.",
        "—",
        "Opponent vulnerability increases ethical risk; it is not a justification."
      ]
    }
  },
  {
    topic: "Dispute resolution — duty to draw attention to law/irregularities (2.7)",
    q: "You realise a binding statutory provision undermines your argument and the other side missed it. What is most accurate?",
    choices: [
      "Keep quiet: it is the opponent’s job to find the law",
      "You must draw the court’s attention to relevant cases/statutes or procedural irregularities likely to have a material effect",
      "Only mention it if the judge asks",
      "Mention it only if your client agrees"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You must draw the court’s attention to relevant cases/statutory provisions or procedural irregularities you are aware of that are likely to have a material effect.",
      whyWrong: [
        "You cannot treat the court as a game; this duty exists even if it harms your case.",
        "—",
        "The duty is not limited to responding to questions.",
        "Client consent cannot remove the duty to the court."
      ]
    }
  },
  {
    topic: "Dispute resolution — unfair advantage against LiP",
    q: "The opponent is a litigant in person who misunderstands what 'without prejudice' means. You exploit their confusion to extract admissions. Most accurate?",
    choices: [
      "Acceptable because they chose to act without a lawyer",
      "Potential breach: taking unfair advantage of others is prohibited, especially where vulnerability is obvious",
      "Acceptable if you avoid explicit threats",
      "Acceptable if your client instructs it"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The fairness rules prohibit taking unfair advantage of others; exploiting obvious misunderstanding can breach that standard.",
      whyWrong: [
        "LiP status does not remove your professional duties.",
        "—",
        "Avoiding threats doesn’t cure unfair advantage.",
        "Client instructions do not justify unfair conduct."
      ]
    }
  },
  {
    topic: "Dispute resolution — SLAPP-style threats and abusive tactics",
    q: "A wealthy client asks you to send a pre-action letter threatening ruinous costs and repeated applications mainly to silence criticism, not to resolve a genuine claim. Best analysis?",
    choices: [
      "Acceptable if the claim is arguable in theory",
      "Acceptable if the letter is drafted politely",
      "High risk: abusive/meritless intimidation tactics can breach duties of fairness, integrity, and proper administration of justice",
      "Acceptable if you add a line saying 'we invite ADR'"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Misusing litigation tactics to intimidate/stifle criticism (rather than pursue genuine claims properly) is a classic ethics risk in disputes and can evidence serious misconduct.",
      whyWrong: [
        "A theoretical claim doesn’t justify abusive tactics.",
        "Tone does not cure substance.",
        "—",
        "A token ADR line doesn’t neutralise abusive conduct."
      ]
    }
  },
  {
    topic: "Dispute resolution — complicit misleading (client’s conduct)",
    q: "Your client proposes to file a witness statement containing facts you know are false. They say: 'It’s my statement, not yours.' Most accurate?",
    choices: [
      "Acceptable because the client signs it",
      "Acceptable if you do not draft it",
      "Not acceptable: you must not mislead or be complicit in misleading the court, including via the client’s acts",
      "Acceptable if the statement is 'mostly true'"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not mislead or attempt to mislead the court, and you must not be complicit in the client doing so.",
      whyWrong: [
        "Client signature does not protect you from complicity.",
        "Drafting is not the only route to being complicit.",
        "—",
        "Partial truth does not justify known falsehoods."
      ]
    }
  },
  {
    topic: "Dispute resolution — misrepresenting settlement authority",
    q: "To pressure settlement, you tell the opponent: 'I have full authority to settle today' when you do not. Most accurate?",
    choices: [
      "Acceptable negotiation tactic",
      "Potential breach: misleading others in a dispute engages honesty/integrity and fairness duties",
      "Acceptable if you later get authority",
      "Acceptable if the opponent is aggressive"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Misrepresenting authority is misleading and undermines trust and fairness in disputes.",
      whyWrong: [
        "Common practice is not a defence.",
        "—",
        "Later authority does not justify misleading now.",
        "Opponent conduct does not justify dishonesty."
      ]
    }
  },
  {
    topic: "Dispute resolution — evidence handling (client tries to destroy evidence)",
    q: "A client tells you they intend to shred documents relevant to disclosure and asks if you can 'look the other way'. Best analysis?",
    choices: [
      "Advise them to do it quickly so it cannot be found",
      "Say nothing because confidentiality prevents you engaging",
      "You must not be complicit; you should advise against destruction and consider whether you can continue to act if they insist on misleading conduct",
      "It is fine if the documents are embarrassing"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not be complicit in misleading conduct or evidence tampering; if the client persists, continuing to act may be impossible.",
      whyWrong: [
        "That would be complicity in wrongdoing.",
        "Confidentiality does not require you to assist wrongdoing; you still must not be complicit.",
        "—",
        "Embarrassment is not a justification for destruction."
      ]
    }
  },
  {
    topic: "Dispute resolution — witness statement drafting vs coaching",
    q: "Which is the safest ethical approach to preparing a witness statement?",
    choices: [
      "Tell the witness what the 'best version' of events is and ask them to adopt it",
      "Draft from the witness’s own account, check accuracy carefully, and avoid pressuring them to change their evidence",
      "Offer the witness a reward for being 'consistent'",
      "Ask the witness to remove anything that harms your case"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You may help with presentation/structure, but must not influence substance or persuade the witness to change their evidence.",
      whyWrong: [
        "That risks influencing substance.",
        "—",
        "Contingent benefits are prohibited and distort evidence.",
        "Removing harmful truth is improper."
      ]
    }
  },
  {
    topic: "Dispute resolution — expert witnesses (contingent fees)",
    q: "You agree to pay an expert a higher fee only if your client wins. Most accurate?",
    choices: [
      "Permitted if the expert is highly qualified",
      "Prohibited/very high risk: outcome-dependent benefits can undermine evidence integrity and may breach witness benefit rules",
      "Permitted if disclosed in the report",
      "Permitted if the opponent does the same"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Outcome-dependent payment risks breaching the rule against benefits dependent on outcome/evidence and undermines integrity of evidence.",
      whyWrong: [
        "Qualifications do not cure contingent incentives.",
        "—",
        "Disclosure does not necessarily make a prohibited arrangement acceptable.",
        "Opponent misconduct is not a defence."
      ]
    }
  },
  {
    topic: "Dispute resolution — properly arguable (threatening proceedings)",
    q: "You threaten an injunction in a letter before claim when you know there is no legal basis for it, purely to scare the opponent. Most accurate?",
    choices: [
      "Acceptable if it helps achieve a quick settlement",
      "Potential breach: misleading/unfair intimidation and making positions not properly arguable",
      "Acceptable if the client wants a strong letter",
      "Acceptable if you call it 'commercial pressure'"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Threats must be properly grounded; empty threats can be misleading and unfair, and not properly arguable.",
      whyWrong: [
        "Settlement speed does not justify improper threats.",
        "—",
        "Client instructions do not justify misconduct.",
        "Labeling doesn’t change substance."
      ]
    }
  },
  {
    topic: "Dispute resolution — court timetable management",
    q: "You intentionally serve evidence late hoping the opponent won’t have time to respond, forcing an adjournment. Most accurate?",
    choices: [
      "Acceptable tactical move",
      "Potential breach: failing to comply with orders and wasting court time",
      "Acceptable if you later consent to costs",
      "Acceptable if the evidence is strong"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Deliberate disruption of timetables risks breach of court orders/compliance duties and wasting court time.",
      whyWrong: [
        "Tactics do not justify undermining procedure.",
        "—",
        "Agreeing costs may mitigate but does not cure misconduct.",
        "Strength of evidence is irrelevant."
      ]
    }
  },
  {
    topic: "Dispute resolution — disclosure and privilege (mistakenly disclosed privileged document)",
    q: "The opponent accidentally emails you a privileged advice note. Your client demands to use it at trial. Best analysis?",
    choices: [
      "Use it: it’s their mistake",
      "Use it if you don’t quote it directly",
      "High risk/improper: you must not misuse evidence and must act with integrity; using privileged mistakenly disclosed material is ethically dangerous",
      "Send it to the court immediately"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Even if received by mistake, exploiting privileged material can be improper; integrity/fairness and evidence-handling duties are engaged.",
      whyWrong: [
        "Mistake does not automatically give permission to use privileged material.",
        "Avoiding quotes doesn’t cure misuse.",
        "—",
        "You should not disseminate privileged material to the court as a first step."
      ]
    }
  },
  {
    topic: "Dispute resolution — allegations as advocate",
    q: "In submissions, you accuse the opponent’s witness of lying when you have no proper basis and it is unnecessary to your case. Most accurate?",
    choices: [
      "Acceptable robust advocacy",
      "Potential breach: assertions must be properly arguable; unfair attacks can undermine integrity and fairness",
      "Acceptable if your client wants a strong stance",
      "Acceptable if the judge seems sceptical of the witness"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Accusations must be properly grounded and necessary; baseless personal attacks can breach properly arguable and fairness standards.",
      whyWrong: [
        "Robust advocacy still has ethical limits.",
        "—",
        "Client preference does not justify improper accusations.",
        "Judicial mood is not your evidential basis."
      ]
    }
  },
  {
    topic: "Dispute resolution — court bundles and accuracy",
    q: "You deliberately omit a key authority from the bundle because it harms your case. The judge is unlikely to notice. Most accurate?",
    choices: [
      "Acceptable: it’s the opponent’s job to cite it",
      "Potential breach: you must draw the court’s attention to relevant law likely to materially affect outcome",
      "Acceptable if you include it in a later hearing",
      "Acceptable if you advise your client about the risk"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You have a duty to draw the court’s attention to relevant cases/statutes likely to have a material effect, even if harmful.",
      whyWrong: [
        "Not a game—duty is to the court.",
        "—",
        "Delaying can still leave the court misled at the relevant time.",
        "Telling the client does not remove your duty."
      ]
    }
  },
  {
    topic: "Dispute resolution — undertakings in litigation context",
    q: "You give an undertaking to the court to file a document by 4pm. You miss it and say: 'I didn’t mean it literally.' Most accurate?",
    choices: [
      "Undertakings to the court are flexible",
      "Potential serious breach: undertakings must be complied with within agreed timescales; court-related breaches can escalate risk",
      "No breach if filed the next day",
      "No breach if you blame IT"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Undertakings are binding professional commitments; failing to comply (especially in court context) is serious.",
      whyWrong: [
        "They are not flexible promises.",
        "—",
        "Late filing can still be a breach and may waste court time.",
        "IT issues may explain but don’t automatically excuse; you must manage compliance."
      ]
    }
  },
  {
    topic: "Dispute resolution — client instructs abusive strategy",
    q: "A client says: 'I want you to bankrupt them with costs—issue everything possible, even if weak.' Best ethical response?",
    choices: [
      "Proceed: the client sets the strategy",
      "Proceed but warn the client you might lose",
      "Refuse to run abusive tactics; ensure steps taken are properly arguable and not wasting court time",
      "Proceed if the opponent is disliked by the client"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must ensure positions are properly arguable and must not waste the court’s time; abusive litigation conduct is not permitted.",
      whyWrong: [
        "Client control is limited by professional duties.",
        "Warning does not make abusive steps acceptable.",
        "—",
        "Personal dislike is irrelevant."
      ]
    }
  },
  {
    topic: "Dispute resolution — making/maintaining false case",
    q: "Mid-way through proceedings you discover a key factual assertion in your pleadings is wrong. The client says: 'Keep it in—maybe no one will prove it.' Most accurate?",
    choices: [
      "Keep it in unless the opponent proves it false",
      "Keep it in but avoid mentioning it at hearing",
      "You must not mislead; you should correct/withdraw inaccurate assertions and cannot run a case you know is false",
      "It’s fine if you add 'to the best of my knowledge'"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not mislead the court/others and you must only make properly arguable assertions; knowingly maintaining false assertions is improper.",
      whyWrong: [
        "Waiting for disproof is misleading conduct.",
        "Silence doesn’t cure misleading pleadings.",
        "—",
        "A phrase cannot sanitise a known falsehood."
      ]
    }
  },
  {
    topic: "Dispute resolution — procedural irregularity (2.7)",
    q: "You spot that the court has listed the matter without giving the required notice under a rule/PD, and it may materially affect fairness. What should you do?",
    choices: [
      "Say nothing: it benefits your client",
      "Raise it only after you win",
      "Draw the procedural irregularity to the court’s attention if likely to have a material effect",
      "Email the opponent only and keep the court out of it"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must draw procedural irregularities you’re aware of to the court’s attention where likely to have a material effect on the outcome.",
      whyWrong: [
        "Client benefit cannot justify withholding material irregularities.",
        "Too late—duty is to assist the court at the relevant time.",
        "—",
        "You cannot bypass the court where the listing/procedure is the issue."
      ]
    }
  },
  {
    topic: "Dispute resolution — communications designed to mislead (fairness)",
    q: "You draft a letter that is technically true but intentionally designed to mislead the opponent about your evidence. Most accurate?",
    choices: [
      "Acceptable: no lie, no breach",
      "Potential breach: misleading by omission/half-truth and sharp practice can breach fairness/ integrity expectations",
      "Acceptable if marked 'without prejudice'",
      "Acceptable if it helps settlement"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Misleading impressions (even without literal lies) can breach duties not to mislead and to act fairly with integrity.",
      whyWrong: [
        "Regulatory duties go beyond literal falsity.",
        "—",
        "Labels do not excuse misleading conduct.",
        "Settlement goals don’t justify misleading tactics."
      ]
    }
  },
  {
    topic: "Dispute resolution — witness expenses vs inducements",
    q: "Which arrangement is MOST ethically acceptable for a fact witness?",
    choices: [
      "Paying reasonable travel expenses not linked to outcome or evidence content",
      "Paying a 'success fee' if your client wins",
      "Paying more if the witness sticks to the script under cross-examination",
      "Paying a bonus if the judge 'likes' their evidence"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Reasonable expenses are not outcome- or evidence-dependent; contingent rewards are prohibited and distort evidence integrity.",
      whyWrong: [
        "—",
        "Outcome-dependent benefits are prohibited.",
        "That’s an inducement tied to evidence conduct/content.",
        "That’s effectively contingent on perception/outcome."
      ]
    }
  },
  {
    topic: "Dispute resolution — dealing with threats and intimidation",
    q: "A client wants you to threaten to report the opponent to the police unless they settle a civil claim, where there is no genuine basis for the report. Best analysis?",
    choices: [
      "Acceptable if it accelerates settlement",
      "Potential breach: unfair intimidation and improper pressure undermines trust and fairness in disputes",
      "Acceptable if you do it by phone not in writing",
      "Acceptable if the client makes the threat rather than you"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Using improper threats to gain advantage is unfair and risks misleading/abusive conduct.",
      whyWrong: [
        "Speed does not justify intimidation.",
        "—",
        "Medium does not change ethics.",
        "You must not be complicit in the client doing it."
      ]
    }
  },
  {
    topic: "Dispute resolution — abusive applications (wasting court time)",
    q: "You apply to adjourn repeatedly with thin reasons, knowing it will likely be refused, mainly to delay enforcement. Most accurate?",
    choices: [
      "Acceptable if your client wants delay",
      "Potential breach: wasting the court’s time and undermining proper administration of justice",
      "Acceptable if you pay the opponent’s costs",
      "Acceptable if the opponent is a corporation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Repeated weak adjournment tactics can waste court time and amount to abusive litigation conduct.",
      whyWrong: [
        "Client objectives do not justify abuse.",
        "—",
        "Costs don’t necessarily cure abuse.",
        "Opponent identity does not justify abuse."
      ]
    }
  },
  {
    topic: "Dispute resolution — truthfulness about evidence",
    q: "You tell the opponent: 'We have CCTV proving everything' when you have not seen the CCTV and only suspect it exists. Most accurate?",
    choices: [
      "Acceptable puffing in negotiations",
      "Potential breach: misleading others in a dispute, especially about evidence",
      "Acceptable if you later obtain CCTV",
      "Acceptable if your client told you it exists"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Overstating evidence you have not verified risks misleading, which breaches duties of trust/fairness and not misleading others.",
      whyWrong: [
        "Negotiation does not permit misleading statements.",
        "—",
        "Later obtaining evidence doesn’t justify misleading now.",
        "You must still exercise judgment and avoid passing on misleading claims."
      ]
    }
  },
  {
    topic: "Dispute resolution — when duties override client instructions",
    q: "Which statement is MOST accurate in dispute work?",
    choices: [
      "Your duty to act in the client’s best interests always overrides duties to the court",
      "If Principles conflict, wider public interest duties (rule of law/public confidence) can override the client’s interests",
      "There are no duties to opponents or witnesses",
      "As long as you avoid lying, any tactic is acceptable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In dispute work, duties safeguarding the wider public interest can take precedence over advancing the client’s case.",
      whyWrong: [
        "Client best interests is not absolute.",
        "—",
        "You owe duties impacting third parties (fairness, witness integrity, etc.).",
        "Misleading by omission/sharp practice can still breach duties."
      ]
    }
  },
  {
    topic: "Dispute resolution — refusal/withdrawal where client insists on misleading",
    q: "Your client refuses to correct a misleading impression on the court record and demands you continue. What is the best next step?",
    choices: [
      "Continue and let the court work it out",
      "Continue but avoid speaking at the hearing",
      "You cannot assist misleading conduct; you should refuse and consider ceasing to act if the issue cannot be resolved ethically",
      "File an application accusing the client of contempt"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not be complicit in misleading the court. If the client insists, you may be unable to continue acting consistently with your duties.",
      whyWrong: [
        "Continuing would risk complicity.",
        "Silence does not remove the duty if the court is misled.",
        "—",
        "You should take proportionate steps; accusing the client in court is not the default."
      ]
    }
  },
  {
    topic: "Dispute resolution — quick spot: which rule?",
    q: "Which disputes rule is MOST directly engaged by offering a witness an 'outcome bonus'?",
    choices: [
      "2.1 (tampering with evidence)",
      "2.2 (influencing substance of evidence)",
      "2.3 (benefits to witnesses dependent on evidence/outcome)",
      "2.7 (drawing law to court’s attention)"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Outcome-dependent benefits are specifically addressed by the witness benefit prohibition.",
      whyWrong: [
        "Evidence tampering is different.",
        "Influencing substance can be related, but the direct rule is the benefits prohibition.",
        "—",
        "2.7 is about assisting the court with law/irregularities."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Ethics | Chapter 3 | Conduct in Disputes",
    subtitle: "Duties to the court, evidence handling, and witness conduct.",
    questions: questions
  };
})();
  
