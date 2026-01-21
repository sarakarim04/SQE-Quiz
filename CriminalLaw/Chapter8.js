(() => {
  const questions = [
  {
    topic: "Fraud Act 2006 — structure of fraud (s1)",
    q: "Which is the correct statement about Fraud Act 2006 fraud?",
    choices: [
      "Fraud requires the victim to be deceived",
      "Fraud requires actual gain or loss",
      "Fraud can be committed by false representation, failing to disclose, or abuse of position",
      "Fraud is a strict liability offence"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Section 1 Fraud Act 2006 creates a single offence of fraud which can be committed in three ways: (i) false representation (s2), (ii) failing to disclose information when under a legal duty (s3), and (iii) abuse of position (s4).",
      whyWrong: [
        "Deception/reliance by the victim is not an element of the Fraud Act offences.",
        "Actual gain/loss is not required; intention to make a gain or cause loss (or risk) is enough.",
        "—",
        "Fraud requires dishonesty and intent to gain/cause loss, so it is not strict liability."
      ]
    }
  },
  {
    topic: "Fraud by false representation — loan application (s2)",
    q: "D lies on an online loan application about his income. Which offence is most directly engaged?",
    choices: [
      "Fraud by false representation (s2)",
      "Fraud by failing to disclose (s3)",
      "Fraud by abuse of position (s4)",
      "Theft"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Lying on an application is making a representation that is false; if done dishonestly with intent to gain/cause loss, it fits s2.",
      whyWrong: [
        "—",
        "s3 requires a legal duty to disclose specific information; lying is typically analysed under s2.",
        "s4 requires D to be in a position expected to safeguard another’s financial interests.",
        "Theft requires dishonest appropriation of property belonging to another with intent permanently to deprive—different elements."
      ]
    }
  },
  {
    topic: "Fraud by false representation — meaning of representation (s2)",
    q: "Which best describes a “representation” under s2?",
    choices: [
      "Only spoken words",
      "Only written statements to humans",
      "Any representation, express or implied, including to a machine",
      "Only representations about facts, not law or intentions"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A representation can be express or implied, can be made to a machine, and can relate to fact, law, or intentions.",
      whyWrong: [
        "Representations are not limited to spoken words.",
        "Representations can be made to machines and can be implied; not limited to written statements to humans.",
        "—",
        "Representations can relate to law and intentions as well as facts."
      ]
    }
  },
  {
    topic: "Fraud by false representation — implied authority (contactless card) (s2)",
    q: "D uses V’s contactless bank card to pay for groceries. Which implied representation is most relevant?",
    choices: [
      "“I am V”",
      "“This card is genuine and I am authorised to use it”",
      "“I will repay V later”",
      "No representation occurs because it’s contactless"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Presenting/using a payment card typically implies a representation of authority/entitlement to use it (and that the transaction is authorised).",
      whyWrong: [
        "The key implied representation is authority to use the card, not necessarily identity as V.",
        "—",
        "Promise of repayment is not the relevant implied representation for s2.",
        "A representation can be made to a machine/terminal; contactless does not prevent s2."
      ]
    }
  },
  {
    topic: "Fraud by false representation — falsity + knowledge (s2)",
    q: "For s2, the representation must be:",
    choices: [
      "True",
      "False and D must know it is or might be false",
      "False but D need only be negligent",
      "False and believed false by the victim"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 2 requires a false representation and that D knows the representation is, or might be, false (untrue or misleading).",
      whyWrong: [
        "A true representation does not satisfy s2.",
        "—",
        "Negligence is not enough; s2 requires knowledge that it is or might be false.",
        "Victim belief/reliance is not an element."
      ]
    }
  },
  {
    topic: "Dishonesty — modern test (Fraud Act)",
    q: "Fraud Act “dishonesty” is best tested by:",
    choices: [
      "Whether D felt guilty",
      "Whether D’s conduct is dishonest by ordinary decent people’s standards, considering D’s actual belief as to facts",
      "Whether the victim forgives D",
      "Whether D made a profit"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Dishonesty is assessed by taking D’s actual belief as to the facts and asking whether ordinary decent people would consider the conduct dishonest on those facts.",
      whyWrong: [
        "Personal guilt feelings are not the legal test.",
        "—",
        "Victim forgiveness is irrelevant to criminal liability.",
        "Profit is not required; intent to gain/cause loss is the key."
      ]
    }
  },
  {
    topic: "Gain/loss — scope under Fraud Act",
    q: "Under fraud, “intent to gain” includes:",
    choices: [
      "Only gaining money",
      "Gaining for self only",
      "Gaining money or other property, for self or another, including keeping what you already have",
      "Only gaining physical items"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Gain/loss covers money or other property; gain includes obtaining or keeping, and it can be for self or another.",
      whyWrong: [
        "Gain is not limited to money.",
        "Gain can be for another person, not just D.",
        "—",
        "It is not limited to physical items; it includes other property interests too."
      ]
    }
  },
  {
    topic: "False representation — no need for reliance or loss (s2)",
    q: "D exaggerates a product’s features to a customer. The customer is not convinced and does not buy. Fraud by false representation?",
    choices: [
      "No, because no one was deceived",
      "No, because no loss occurred",
      "Possibly yes, if D acted dishonestly and intended gain/loss risk",
      "Only attempted fraud exists"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Fraud by false representation does not require actual deception, reliance, or loss. The offence can be complete once the dishonest false representation is made with intent to gain/cause loss (or risk).",
      whyWrong: [
        "Victim deception is not required.",
        "Actual loss is not required.",
        "—",
        "Attempt may be unnecessary because s2 can be complete even if no one is persuaded."
      ]
    }
  },
  {
    topic: "Fraud by failing to disclose — legal duty requirement (s3)",
    q: "s3 (failure to disclose) requires:",
    choices: [
      "Any failure to volunteer information",
      "A moral duty to disclose",
      "A legal duty to disclose",
      "A written contract in every case"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Section 3 applies only where D is under a legal duty to disclose information and dishonestly fails to do so with intent to gain/cause loss (or risk).",
      whyWrong: [
        "Silence alone is not enough without a legal duty to disclose.",
        "A moral duty is not sufficient.",
        "—",
        "A legal duty can arise from various sources, not only a written contract."
      ]
    }
  },
  {
    topic: "s2 vs s3 — silence and implied representations",
    q: "D sells a car and says nothing about a serious undisclosed crash history. He is not asked. Which is most accurate?",
    choices: [
      "Always s3 because sellers must disclose everything",
      "Could be s2 if his conduct amounts to an implied false representation; s3 only if there is a legal duty to disclose",
      "No fraud possible unless asked directly",
      "Only theft"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Silence can amount to s2 if it implies something false (fact-sensitive). s3 applies only where there is a specific legal duty to disclose.",
      whyWrong: [
        "There is no general rule that sellers must disclose everything for s3; a legal duty is required.",
        "—",
        "You can commit fraud without being directly asked, depending on implied representations or legal duties.",
        "Theft is a different offence with different elements."
      ]
    }
  },
  {
    topic: "Fraud by abuse of position — definition (s4)",
    q: "s4 (abuse of position) applies where:",
    choices: [
      "D lies in any context",
      "D is expected to safeguard another’s financial interests and abuses that position",
      "D fails to disclose information in any situation",
      "D uses force to obtain property"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 4 targets dishonest abuse (by act or omission) of a position where D is expected to safeguard another’s financial interests, with intent to gain/cause loss (or risk).",
      whyWrong: [
        "Lying alone does not automatically make it s4; the trusted position element is required.",
        "—",
        "s3 is specifically about failing to disclose where under a legal duty; s4 is about abuse of a trusted position.",
        "Force relates to robbery, not the definition of s4."
      ]
    }
  },
  {
    topic: "Abuse of position — carer using client’s card (s4)",
    q: "A carer uses an elderly client’s bank card to withdraw cash for themselves. Best offence?",
    choices: [
      "Theft only",
      "Fraud by abuse of position (s4)",
      "Fraud by failing to disclose (s3) only",
      "No offence if client doesn’t notice"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A carer is typically in a position expected to safeguard the client’s financial interests. Dishonestly using the card for personal gain is an abuse of that position under s4.",
      whyWrong: [
        "Theft may also be relevant, but s4 is the most directly targeted fraud route for this trust-based misuse.",
        "—",
        "s3 would require a specific legal duty to disclose; s4 is the better fit on these facts.",
        "Detection is irrelevant; the offence does not require the victim to notice."
      ]
    }
  },
  {
    topic: "Abuse of position — employee ordering extra stock (s4)",
    q: "D is an employee authorised to order supplies for the company. D orders extra and sells them privately. Best fit?",
    choices: [
      "s4 abuse of position",
      "s3 only",
      "Assault",
      "Handling stolen goods only"
    ],
    correct: 0,
    explain: {
      whyRight:
        "D is in a trusted position regarding the employer’s financial interests. Dishonestly exploiting that authority for personal gain is an abuse of position under s4.",
      whyWrong: [
        "—",
        "s3 requires a legal duty to disclose specific information; the core wrongdoing here is abuse of entrusted authority.",
        "Assault is unrelated.",
        "Handling may arise in other fact patterns, but it is not the primary fraud route here."
      ]
    }
  },
  {
    topic: "Fraud — core mens rea",
    q: "Which statement about fraud is correct?",
    choices: [
      "Fraud requires proof that the victim relied on the lie",
      "Fraud requires proof of causation of loss",
      "Fraud requires dishonesty + intent to gain/cause loss (or risk)",
      "Fraud is only committed if money changes hands"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Across ss2–4, the key mental elements are dishonesty and intent to make a gain or cause loss (or expose another to risk of loss).",
      whyWrong: [
        "Reliance is not an element.",
        "Actual causation of loss is not required for the core fraud offence.",
        "—",
        "Money changing hands is not required; intent is enough."
      ]
    }
  },
  {
    topic: "s2 — honest belief negates knowledge of falsity",
    q: "D makes a false representation but honestly believes it is true. Liability under s2?",
    choices: [
      "Guilty because it turned out false",
      "Not guilty if he did not know it was or might be false",
      "Guilty if the victim believed it",
      "Guilty only if loss occurs"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 2 requires that D knows the representation is, or might be, false. If D honestly believed it was true, that knowledge element is missing (though dishonesty will often also be absent).",
      whyWrong: [
        "Turning out to be false is not enough without the required knowledge.",
        "—",
        "Victim belief is not an element.",
        "Loss is not required."
      ]
    }
  },
  {
    topic: "Fraud — no need for actual loss (refund later)",
    q: "D sells a fake designer bag as genuine, intending profit. Buyer later discovers it but loses no money (refund given). Fraud?",
    choices: [
      "No, because no loss",
      "Yes, because intent to gain/loss risk is enough",
      "No, because refund cancels the offence",
      "Only civil misrepresentation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Fraud can be complete once D dishonestly makes the false representation with intent to gain or cause loss/risk. Later refund does not undo completion.",
      whyWrong: [
        "Actual loss is not required.",
        "—",
        "A refund does not erase a completed fraud offence.",
        "Civil liability may exist, but it does not exclude criminal liability."
      ]
    }
  },
  {
    topic: "Fraud Act — services offence (s11)",
    q: "Which offence is most directly about services rather than property?",
    choices: [
      "Theft",
      "Robbery",
      "Obtaining services dishonestly (s11)",
      "Handling stolen goods"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Section 11 specifically criminalises obtaining services dishonestly where services are available only on payment and D avoids payment.",
      whyWrong: [
        "Theft concerns property, not services as such.",
        "Robbery is theft plus force/threat; still property-based.",
        "—",
        "Handling concerns stolen goods (property), not services."
      ]
    }
  },
  {
    topic: "Obtaining services dishonestly — fare evasion (s11)",
    q: "D uses a train without paying by jumping the barrier. Best?",
    choices: [
      "Theft of services",
      "Obtaining services dishonestly (s11)",
      "Burglary",
      "No offence because services cannot be stolen"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Using a paid service while dishonestly avoiding payment is the classic s11 scenario.",
      whyWrong: [
        "‘Theft of services’ is not the Theft Act route; s11 is designed for services.",
        "—",
        "Burglary is unrelated.",
        "It can be criminalised via s11 even though services are not ‘property’ for theft."
      ]
    }
  },
  {
    topic: "Possessing articles for use in fraud — elements (s6)",
    q: "s6 (possessing articles) requires:",
    choices: [
      "Possession of any article and any dishonest intent",
      "Possession of an article for use in the course of or in connection with fraud",
      "Proof that fraud was completed",
      "Possession only of forged banknotes"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 6 is made out where D possesses any article for use in the course of or in connection with fraud. Completion of a fraud is not required.",
      whyWrong: [
        "It is not any article with any dishonest intent; the ‘for use in fraud’ purpose is key.",
        "—",
        "Completion of fraud is not required.",
        "It applies to any article, not only forged banknotes."
      ]
    }
  },
  {
    topic: "Possessing articles — skimmer device (s6)",
    q: "D keeps a “skimmer” device to capture card details, intending to use it later. Offence?",
    choices: [
      "s6 possessing articles for use in fraud",
      "s7 making articles only",
      "Theft",
      "Robbery"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Possessing an article (like a skimmer) for use in fraud is the core s6 offence.",
      whyWrong: [
        "—",
        "s7 focuses on making/adapting/supplying articles; possession for use is s6.",
        "Theft involves appropriation of property belonging to another; not the best fit here.",
        "Robbery involves theft plus force/threat; not relevant."
      ]
    }
  },
  {
    topic: "Making/supplying articles for use in fraud — elements (s7)",
    q: "s7 (making/supplying articles) requires:",
    choices: [
      "The article was actually used in a fraud",
      "D made/adapted/supplied an article knowing it’s designed/adapted for fraud, or intending it be used",
      "D must be in a position of trust",
      "D must deceive a human victim"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 7 criminalises making, adapting, supplying or offering to supply an article knowing it is designed/adapted for use in fraud, or intending it be used to commit or assist fraud.",
      whyWrong: [
        "Actual use in a fraud is not required.",
        "—",
        "A position of trust is not required for s7.",
        "A representation to a human is not required; the offence is about the article and the relevant knowledge/intent."
      ]
    }
  },
  {
    topic: "Supplying false documents for bank fraud — s7",
    q: "D supplies counterfeit “proof of address” documents knowing they will be used in bank account fraud. Best offence?",
    choices: [
      "s7",
      "s11",
      "Robbery",
      "Assault"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Supplying an article (counterfeit documents) knowing it is designed/adapted for fraud use, or intending it be used, fits s7.",
      whyWrong: [
        "—",
        "s11 is about obtaining services dishonestly, not supplying fraud tools.",
        "Robbery is theft plus force/threat.",
        "Assault is unrelated."
      ]
    }
  },
  {
    topic: "Fraud by false representation — store refuses refund (still complete) (s2)",
    q: "D lies to obtain a refund, but the store refuses. Best?",
    choices: [
      "No offence at all",
      "Fraud by false representation may still be complete if dishonesty + intent proven",
      "Only theft",
      "Only conspiracy"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Fraud by false representation can be complete upon making the dishonest false representation with intent to gain/cause loss (or risk), regardless of whether the attempt succeeds.",
      whyWrong: [
        "Refusal does not necessarily prevent fraud being complete.",
        "—",
        "Theft requires appropriation of property belonging to another; lying for a refund fits s2 more directly.",
        "Conspiracy requires an agreement with another person."
      ]
    }
  },
  {
    topic: "s2 — representations to machines",
    q: "D makes a false representation to a vending machine to obtain goods without paying. Fraud?",
    choices: [
      "No, because a machine cannot be deceived",
      "Yes, representations can be made to machines under s2",
      "Only burglary",
      "Only theft, never fraud"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The Fraud Act explicitly allows representations to be made to machines; the focus is on D’s dishonest representation and intent.",
      whyWrong: [
        "A machine ‘being deceived’ is not the test; s2 covers machine-directed representations.",
        "—",
        "Burglary is unrelated.",
        "Fraud can apply even where theft might also be considered on other facts."
      ]
    }
  },
  {
    topic: "Abuse of position — omission by accountant (s4, possible s3 overlap)",
    q: "D, a company accountant, “forgets” to record invoices so the company pays his friend twice. Best fraud route?",
    choices: [
      "s2 only",
      "s3 only",
      "s4 abuse of position (and possibly s3 depending on legal duty to disclose)",
      "No offence because it’s an omission"
    ],
    correct: 2,
    explain: {
      whyRight:
        "An accountant is typically expected to safeguard the company’s financial interests; dishonestly exploiting that role by omission can be an abuse of position (s4). Depending on the facts, a legal duty to disclose may also engage s3.",
      whyWrong: [
        "s2 is possible in some cases, but the trusted-position facts point most directly to s4.",
        "s3 requires a specific legal duty to disclose; s4 captures abuse of entrusted role more broadly here.",
        "—",
        "Fraud by abuse of position can be committed by omission."
      ]
    }
  },
  {
    topic: "s3 — sources of legal duty to disclose",
    q: "In s3, the “legal duty” to disclose can arise from:",
    choices: [
      "Only statute",
      "Only contract",
      "Statute, contract, fiduciary/agency duties (and other legal duties)",
      "Only moral expectations"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A legal duty to disclose can arise from multiple legal sources (e.g., statute, contract, fiduciary/agency obligations).",
      whyWrong: [
        "Statute is one possible source, not the only one.",
        "Contract is one possible source, not the only one.",
        "—",
        "Moral expectations alone do not create the legal duty required by s3."
      ]
    }
  },
  {
    topic: "s2 — false address to obtain overdraft",
    q: "D opens a bank account using his real name but gives a false address to avoid credit checks. He intends to obtain overdraft facilities. Best?",
    choices: [
      "s2 false representation",
      "s3 failing to disclose",
      "s4 abuse of position",
      "Handling stolen goods"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Providing a false address is a false representation intended to obtain a financial advantage (gain) and/or expose the bank to risk of loss—classic s2.",
      whyWrong: [
        "—",
        "s3 requires a legal duty to disclose; here the issue is a positive false statement.",
        "s4 requires a position of trust safeguarding another’s financial interests.",
        "Handling stolen goods is unrelated."
      ]
    }
  },
  {
    topic: "Attempt vs complete fraud — when fraud is complete",
    q: "Which is the best statement about attempt and fraud?",
    choices: [
      "Fraud can never be attempted",
      "Attempt is always charged instead of fraud if no loss occurs",
      "Attempt may be relevant, but fraud often completes before any gain/loss happens",
      "Attempt is required for online fraud"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Fraud (ss2–4) often completes once the dishonest conduct occurs with the required intent, even if no gain/loss follows. Attempt may still be relevant in some edge cases, but it is not the default simply because no loss occurred.",
      whyWrong: [
        "Fraud can be attempted in principle, but often it is complete earlier than people think.",
        "No loss does not automatically mean only attempt; fraud can be complete without loss.",
        "—",
        "Online fraud does not require an attempt charge; the same completion principles apply."
      ]
    }
  },
  {
    topic: "Abuse of position — cashier undercharging friend (s4)",
    q: "D is a cashier. He scans only some items at checkout for his friend, intending the friend pays less. Best?",
    choices: [
      "s4 abuse of position",
      "s11 obtaining services dishonestly",
      "Robbery",
      "No offence because store consented to the sale"
    ],
    correct: 0,
    explain: {
      whyRight:
        "As a cashier, D is entrusted to safeguard the employer’s financial interests. Dishonestly undercharging is an abuse of position under s4 with intent to cause loss to the employer (or risk) and gain to the friend.",
      whyWrong: [
        "—",
        "s11 focuses on services; this is about dishonest undercharging via an entrusted role.",
        "Robbery is theft plus force/threat.",
        "Any apparent ‘consent’ at the till is vitiated by D’s dishonest abuse of his position."
      ]
    }
  },
  {
    topic: "Fraud Act mapping — s4",
    q: "Which pairing is correct?",
    choices: [
      "s2 = failing to disclose",
      "s3 = false representation",
      "s4 = abuse of position",
      "s11 = handling stolen goods"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Section 4 is fraud by abuse of position.",
      whyWrong: [
        "s2 is false representation, not failing to disclose.",
        "s3 is failing to disclose when under a legal duty, not false representation.",
        "—",
        "s11 is obtaining services dishonestly, not handling stolen goods."
      ]
    }
  },

  // The remaining questions (to make 30) mirror the earlier MCQs set’s Q10–Q29 coverage already,
  // but with the same substance phrased distinctly to avoid duplication.

  {
    topic: "Fraud by failing to disclose — identifying the duty (s3)",
    q: "Which statement best captures the key extra requirement for fraud by failing to disclose information (s3)?",
    choices: [
      "D must have used force",
      "D must be under a legal duty to disclose the information",
      "The victim must rely on the omission",
      "The omission must cause actual loss"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 3 applies only where there is a pre-existing legal duty to disclose the relevant information; without that duty, s3 is not made out.",
      whyWrong: [
        "Force is irrelevant to s3.",
        "—",
        "Reliance is not an element of s3.",
        "Actual loss is not required; intent to gain/cause loss (or risk) suffices."
      ]
    }
  },
  {
    topic: "Fraud by false representation — victim reliance not required (s2)",
    q: "Which is most accurate about victim reliance in fraud by false representation (s2)?",
    choices: [
      "The victim must have relied on the representation",
      "The victim must have believed the representation",
      "Victim reliance is not required; the offence can be complete once the dishonest false representation is made with intent",
      "Victim reliance is required only for online fraud"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Under s2, the offence focuses on D’s dishonest false representation and intent to gain/cause loss (or risk). Reliance is not an element.",
      whyWrong: [
        "Reliance is not required under s2.",
        "Victim belief is not required under s2.",
        "—",
        "There is no special reliance rule for online fraud."
      ]
    }
  },
  {
    topic: "Fraud — intent to cause risk of loss",
    q: "Under the Fraud Act 2006, D’s intent may relate to:",
    choices: [
      "Gain only (loss is irrelevant)",
      "Loss only (gain is irrelevant)",
      "Gain for self/another, or causing loss to another, or exposing another to a risk of loss",
      "Actual gain or actual loss only"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The statute allows intent to make a gain, cause a loss, or expose another to a risk of loss. Actual outcomes are not required.",
      whyWrong: [
        "Loss/risk of loss can be the relevant intent as well.",
        "Gain can be the relevant intent as well.",
        "—",
        "Actual outcomes are not necessary for the core fraud offence."
      ]
    }
  },
  {
    topic: "Obtaining services dishonestly — knowledge services are payable (s11)",
    q: "For obtaining services dishonestly (s11), which is generally required?",
    choices: [
      "The service provider must be deceived",
      "D must know the services are available only on payment and dishonestly avoids payment",
      "D must use violence",
      "D must obtain money, not services"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Section 11 targets dishonest obtaining of services where D knows payment is required and avoids or does not pay as required.",
      whyWrong: [
        "Deception of the provider is not framed as a necessary element in the same way; the focus is dishonest non-payment.",
        "—",
        "Violence is irrelevant.",
        "s11 is about services, not obtaining money."
      ]
    }
  },
  {
    topic: "Possessing articles — no need for completed fraud (s6)",
    q: "Which is correct about s6 (possessing articles for use in fraud)?",
    choices: [
      "Fraud must actually be carried out",
      "The article must be illegal to possess",
      "No completed fraud is needed; possession for use in fraud is enough",
      "Only bank cards count as “articles”"
    ],
    correct: 2,
    explain: {
      whyRight:
        "s6 criminalises possession of any article for use in the course of or in connection with fraud, without requiring a completed fraud.",
      whyWrong: [
        "Completion is not required.",
        "Legality of the item itself is not determinative; purpose for use in fraud is key.",
        "—",
        "“Article” is broad and not limited to bank cards."
      ]
    }
  }
];


  

window.quizData = {
    title: "SQE1 Criminal Law — Fraud Offences",
    subtitle: "Fraud Act 2006 (s1-s4), dishonesty, and related offences.",
    questions: questions
  };
})();
  
