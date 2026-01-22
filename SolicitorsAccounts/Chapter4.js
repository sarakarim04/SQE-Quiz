(() => {
  const questions = [
    {
      "topic": "Rule 7.1: basic duty",
      "q": "Your firm holds £120,000 of client money for 3 months in its pooled client account. The firm earns interest on the account. What is the firm’s core duty under the Accounts Rules?",
      "choices": [
        "Pay the client the exact interest the bank credited on their portion of the pooled account.",
        "Pay the client a fair sum of interest on the client money held on their behalf.",
        "Pay no interest unless the client asks for it in writing.",
        "Pay interest only if the matter is conveyancing.",
        "Keep all interest as office money because the account is in the firm’s name."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7 requires accounting to clients/third parties for a fair sum of interest on client money held for them.",
        "whyWrong": [
          "The rule is 'fair sum'—not necessarily the exact bank credit allocation.",
          "",
          "The duty exists regardless of whether the client asks, unless a different written arrangement exists.",
          "Rule 7 applies across practice areas where client money is held.",
          "Interest may be earned on the account, but the firm must still account fairly to clients/third parties."
        ]
      }
    },
    {
      "topic": "Rule 7.2: written different arrangement + informed consent",
      "q": "Your engagement letter states: ‘No interest will be paid on any client money held.’ The client signs it after you explain what that means and why. Is this potentially permissible under the Accounts Rules?",
      "choices": [
        "No, firms can never agree anything other than paying interest.",
        "Yes, if it is a written agreement and the client had sufficient information to give informed consent.",
        "Yes, but only if the SRA approves it in advance.",
        "Yes, but only if the client money is held for under 5 working days.",
        "No, because interest must always be paid at the Bank of England base rate."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7.2 allows a different arrangement in writing, provided sufficient information is given for informed consent.",
        "whyWrong": [
          "Rule 7.2 expressly allows written alternatives.",
          "",
          "No general requirement for prior SRA approval under Rule 7.2.",
          "Rule 7.2 is not limited to short holding periods.",
          "No rule mandates base rate."
        ]
      }
    },
    {
      "topic": "Client vs third party entitlement",
      "q": "A lender sends mortgage advance funds to be held to the lender’s order until completion. The funds are held for 10 days and earn interest. To whom must the firm account for a fair sum of interest (absent any different agreement)?",
      "choices": [
        "The borrower client only.",
        "The lender (third party) because the money is held on their behalf.",
        "No one, because the money is not the client’s.",
        "The firm can keep all interest because it is the firm’s account.",
        "Half to the lender and half to the borrower."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7 applies to client money held on behalf of clients or third parties; where held to the lender’s order, it is held on the lender’s behalf.",
        "whyWrong": [
          "Ownership/beneficial entitlement matters; here it is held for the lender’s benefit/control.",
          "",
          "Third parties are expressly covered by Rule 7.",
          "The firm must still account fairly to the relevant beneficiary.",
          "No automatic split rule."
        ]
      }
    },
    {
      "topic": "Fair sum: short holding period",
      "q": "A firm’s written policy says it will not pay interest when client money is held for fewer than 2 business days because the administrative cost would exceed likely interest. The policy is provided to the client at the start. Which is the best assessment?",
      "choices": [
        "Automatically unlawful—interest must always be paid regardless of time held.",
        "Potentially permissible if it forms part of a written arrangement and is fair in the circumstances with informed consent.",
        "Permissible only if the client is a business client.",
        "Permissible only if the firm pays base rate on all other monies.",
        "Permissible only if the SRA publishes an approved threshold."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7 allows written alternatives, and 'fair' depends on circumstances. A short-holding de minimis approach can be defensible if properly disclosed and agreed.",
        "whyWrong": [
          "Rule 7.2 permits different arrangements in writing.",
          "",
          "No client-type limitation in Rule 7.",
          "No requirement to link to base rate.",
          "No requirement for an SRA-set threshold."
        ]
      }
    },
    {
      "topic": "Informed consent: not enough information",
      "q": "A client signs standard terms that contain a buried clause: 'Interest will not be paid.' The firm never draws it to the client’s attention or explains the impact. What is the main compliance risk?",
      "choices": [
        "No risk because the client signed the terms.",
        "Risk: the client may not have given informed consent to a different interest arrangement.",
        "No risk if the firm is a small practice.",
        "No risk if the client money was held for under a week.",
        "Risk only if the client complains."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7.2 requires sufficient information for informed consent; a hidden term without explanation risks failing that standard.",
        "whyWrong": [
          "Signature alone isn’t necessarily informed consent.",
          "",
          "Firm size is irrelevant.",
          "Duration doesn’t cure lack of informed consent.",
          "Compliance isn’t complaint-dependent."
        ]
      }
    },
    {
      "topic": "Fair sum vs exact interest earned",
      "q": "Your firm’s pooled client account earned £6,000 interest this quarter across all client funds. The firm’s interest policy pays clients a fair sum calculated by reference to a published benchmark and time/amount held. Which statement is most accurate?",
      "choices": [
        "The firm must distribute the entire £6,000 to clients in proportion to balances.",
        "The firm can never retain any interest.",
        "The firm must account a fair sum; it is not necessarily required to pass on the entire interest earned on the pooled account.",
        "The firm can keep all interest if it labels it ‘bank charges recovery’.",
        "The firm must pay each client interest at the bank’s best retail savings rate."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "The rule requires a fair sum, not necessarily the entire pooled-account interest, though an unfair approach risks breach.",
        "whyWrong": [
          "The rule is ‘fair sum’ rather than a strict ‘pass-through all interest’ formula.",
          "Rule 7.2 allows different arrangements, and 'fair sum' doesn’t equal 'all interest'.",
          "",
          "Labelling doesn’t determine fairness/compliance.",
          "No rule mandates the best retail rate."
        ]
      }
    },
    {
      "topic": "Large sum + long period: designated account expectation",
      "q": "A firm holds £2 million for a client for 6 months pending a transaction. The firm keeps it in the pooled client account paying clients a token rate close to zero. What is the strongest risk under Rule 7?",
      "choices": [
        "No risk—clients never receive interest on client accounts.",
        "Risk: the firm may not be accounting a fair sum given the amount and period held.",
        "No risk if the client money is stakeholder money.",
        "No risk if the client is wealthy.",
        "Risk only if the bank paid interest."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Fairness is assessed in context; a token sum on a large balance held for a long time is a classic unfairness risk.",
        "whyWrong": [
          "Rule 7 requires accounting for a fair sum.",
          "",
          "Stakeholder funds can still be client money, and Rule 7 can still apply.",
          "Wealth doesn’t change the obligation.",
          "Even where interest rates are low, 'fair' must be justified in context."
        ]
      }
    },
    {
      "topic": "Negative interest / charges: need agreement",
      "q": "The bank charges the firm for holding client money (negative interest). The firm wants to deduct the charge from each client’s balance automatically without saying anything in advance. Best assessment?",
      "choices": [
        "Permissible—clients must always bear bank charges.",
        "Risky—deductions from client money should be covered by a clear written arrangement with sufficient information (informed consent) if the client will bear it.",
        "Permissible as long as the firm tells clients afterwards.",
        "Permissible only for conveyancing.",
        "Permissible if the firm uses a joint account."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7.2 is the mechanism for different interest arrangements. Passing negative interest/charges to clients without prior informed agreement is high-risk.",
        "whyWrong": [
          "There is no automatic rule that clients bear charges absent agreement.",
          "",
          "After-the-event notice doesn’t create informed consent.",
          "Not practice-area specific.",
          "Joint account changes which rules apply, but it doesn’t justify unilateral deductions."
        ]
      }
    },
    {
      "topic": "Rule 2.2: Rule 7 disapplied",
      "q": "A firm relies on Rule 2.2 (no client account; only receives money in respect of its fees/unpaid disbursements pre-bill). It holds those monies in a separate account outside the client account. How does Rule 7 apply to that money?",
      "choices": [
        "Rule 7 applies in full.",
        "Rule 7 does not apply to that money held outside a client account in accordance with Rule 2.2.",
        "Rule 7 applies only if interest is actually earned.",
        "Rule 7 applies only above £1,000.",
        "Rule 7 applies only if the client requests interest in writing."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Where money is held outside a client account under Rule 2.2, Rule 7 is expressly disapplied for that money.",
        "whyWrong": [
          "Rule 2.2 carves it out.",
          "",
          "The disapplication isn’t conditional on interest being earned.",
          "No £1,000 threshold.",
          "Not request-based."
        ]
      }
    },
    {
      "topic": "Joint accounts: Rule 7 doesn’t apply",
      "q": "A firm and client open a joint account for holding a litigation settlement sum temporarily. Which statement best reflects the Accounts Rules position?",
      "choices": [
        "Rule 7 applies because it is still client money.",
        "Part 2 generally does not apply to joint accounts, so Rule 7 does not apply (subject to limited exceptions).",
        "Rule 7 applies only if the firm is a signatory on the account.",
        "Rule 7 applies only if the money is held for more than 5 weeks.",
        "Rule 7 applies but only to business clients."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 9 provides that Part 2 does not apply to joint accounts (save limited record provisions), so Rule 7 is not in play.",
        "whyWrong": [
          "Joint accounts are treated differently by Rule 9.",
          "",
          "Signatory status doesn’t reinstate Rule 7 under Rule 9.",
          "No 5-week trigger.",
          "No business-client limitation."
        ]
      }
    },
    {
      "topic": "Third party interest: stakeholder holding",
      "q": "You hold £50,000 as stakeholder between Buyer and Seller. The stakeholder agreement states interest belongs to the Buyer. What is the best approach?",
      "choices": [
        "Ignore the agreement; pay interest to whoever is your client.",
        "Account for a fair sum of interest to the party for whom the money is held (here, Buyer per the agreement), unless a different written arrangement exists.",
        "Keep all interest because stakeholder interest always belongs to the firm.",
        "Pay interest equally to Buyer and Seller.",
        "Pay no interest because stakeholder money is outside Rule 7."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7 requires accounting to the client/third party for whom the money is held; stakeholder terms determine on whose behalf it is held for interest purposes.",
        "whyWrong": [
          "You must follow the proper beneficiary/terms of holding.",
          "",
          "No such rule.",
          "Only if agreement says so.",
          "Stakeholder money can be client money and Rule 7 can apply."
        ]
      }
    },
    {
      "topic": "Interest policy: must be disclosed",
      "q": "A firm has an internal interest policy but never provides it to clients. It pays interest only if clients demand it. Main risk?",
      "choices": [
        "No risk if the firm pays some interest when asked.",
        "Risk: failure to account a fair sum and/or inability to show clients gave informed consent to any alternative approach.",
        "No risk if the policy is approved by the COFA.",
        "No risk if the firm’s bank pays low rates.",
        "Risk only if the policy is not signed by the client."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7.1 is proactive; and relying on a different arrangement requires informed consent with sufficient information.",
        "whyWrong": [
          "The duty isn’t only on request.",
          "",
          "COFA approval doesn’t replace disclosure/informed consent.",
          "Low rates don’t excuse unfairness or non-disclosure.",
          "A signed agreement is one way, but the core issue is informed consent + fairness."
        ]
      }
    },
    {
      "topic": "Client money held briefly: fairness assessment",
      "q": "Client funds of £8,000 are held for 48 hours in a pooled account. The firm’s written policy says it will not pay interest where the calculated amount would be less than £25. Best assessment?",
      "choices": [
        "Automatically a breach because any non-payment is illegal.",
        "Potentially defensible as a fair approach if disclosed and agreed and genuinely reflects administrative proportionality.",
        "Automatically compliant because £25 thresholds are mandated by the SRA.",
        "Breach unless the client is a business client.",
        "Breach unless the firm pays base rate on all other monies."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "A de minimis threshold can be part of a fair, disclosed approach, but it must be justified and properly communicated.",
        "whyWrong": [
          "Rule 7.2 allows different arrangements; fairness is contextual.",
          "",
          "The SRA does not mandate a specific threshold in the Accounts Rules.",
          "No client-type limitation.",
          "No base-rate requirement."
        ]
      }
    },
    {
      "topic": "Client requests interest: no written alternative",
      "q": "A client asks why they received no interest on £60,000 held for 2 months. The firm has no written alternative agreement and no disclosed policy. Best response?",
      "choices": [
        "Refuse—interest is always firm money unless agreed otherwise.",
        "Assess and pay a fair sum of interest and explain the basis.",
        "Pay the exact interest the bank paid the firm on the pooled account only.",
        "Pay nothing unless the client sues.",
        "Pay interest only from the date of the complaint."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Absent a written alternative arrangement, Rule 7.1 requires accounting for a fair sum of interest.",
        "whyWrong": [
          "Opposite of Rule 7.1.",
          "",
          "The duty is a fair sum; it may or may not match bank credit exactly.",
          "Not compliant with the underlying duty.",
          "No rule defers the duty until complaint."
        ]
      }
    },
    {
      "topic": "Different arrangement with third party",
      "q": "You hold money on behalf of a third party (not your client) under a stakeholder arrangement. The third party signs a written agreement that no interest will be paid. Is this capable of being valid under Rule 7.2?",
      "choices": [
        "No—Rule 7.2 applies only to clients.",
        "Yes—Rule 7.2 allows a written different arrangement with the client or the third party for whom money is held, with informed consent.",
        "Yes, but only if the SRA countersigns the agreement.",
        "No—interest must always be paid to third parties.",
        "Yes, but only for sums under £10,000."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7.2 expressly includes third parties for whom the money is held.",
        "whyWrong": [
          "Rule 7.2 includes third parties.",
          "",
          "No SRA countersignature requirement.",
          "Different arrangements are allowed.",
          "No £10,000 threshold."
        ]
      }
    },
    {
      "topic": "Fairness: firm pays token rate while earning high interest",
      "q": "A firm earns high interest on pooled client funds due to current rates, but pays clients 0.01% with no clear justification. What is the strongest issue?",
      "choices": [
        "No issue—firms can keep whatever interest they earn.",
        "Potential breach: clients may not be receiving a fair sum of interest.",
        "No issue if clients are wealthy.",
        "No issue if the firm pays interest only on designated accounts.",
        "No issue if the client signed a retainer letter (without interest terms)."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "The SRA expects interest to be accounted fairly; a token rate without justification is a classic fairness risk.",
        "whyWrong": [
          "Rule 7 imposes a duty to account a fair sum.",
          "",
          "Wealth irrelevant.",
          "Designated accounts may be relevant, but token payments can still be unfair.",
          "If there is no informed written alternative, Rule 7.1 still applies."
        ]
      }
    },
    {
      "topic": "Client money in client account vs money not held by firm",
      "q": "Client funds are paid directly into a third-party managed account operated by an external provider; the firm never receives or controls the funds. Under the Accounts Rules, which is most accurate about Rule 7?",
      "choices": [
        "Rule 7 always applies because the firm arranged the account.",
        "Rule 7 applies only if the firm is also a signatory.",
        "Rule 7 generally applies to client money held by you; if you do not hold the money, the Rule 7 duty under Accounts Rules may not be triggered (though other duties remain).",
        "Rule 7 never applies to any client funds in any circumstance.",
        "Rule 7 applies only to conveyancing matters."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Rule 7 is framed around client money held by the firm; where the firm does not hold/receive funds, the Accounts Rules interest duty is generally not the same (though broader obligations can still apply).",
        "whyWrong": [
          "Arrangement alone doesn’t equal holding/receiving.",
          "Signatory status is relevant, but the key trigger is whether the firm holds the client money.",
          "",
          "Incorrect—Rule 7 clearly applies in many cases.",
          "Not practice-area specific."
        ]
      }
    },
    {
      "topic": "Interest credited to office account by mistake",
      "q": "The bank mistakenly credits interest earned on the pooled client account into the firm’s office account. What should the firm do?",
      "choices": [
        "Keep it because it is now office money.",
        "Treat it as client money and move it promptly into client account; then apply Rule 7 fairness/accounting as required.",
        "Donate it to charity.",
        "Ignore it if the amount is small.",
        "Pay it directly to the client with the largest balance."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Interest arising from client account funds should be treated within the client money framework; miscrediting is a breach to correct promptly and then account fairly.",
        "whyWrong": [
          "A bank error doesn’t change the underlying character/obligations.",
          "",
          "Charity isn’t the route for this.",
          "Small amounts still require appropriate handling and correction.",
          "You must allocate fairly, not arbitrarily."
        ]
      }
    },
    {
      "topic": "Client asks for designated account",
      "q": "A client will deposit £500,000 for 4 months. They ask for it to be held in a designated client deposit account to maximise returns. What is the best compliance-focused response?",
      "choices": [
        "Refuse—designated accounts are banned.",
        "Consider whether a designated account is appropriate and explain the interest arrangements; ensure any agreement is in writing with informed consent.",
        "Tell the client interest never belongs to them.",
        "Agree but keep it in pooled account and say it’s designated.",
        "Agree only if the client waives all interest rights."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "You must account a fair sum and can agree different arrangements in writing; for large/long holdings, designated accounts may be relevant to fairness and transparency.",
        "whyWrong": [
          "No ban in the Accounts Rules.",
          "",
          "Wrong—Rule 7 requires accounting a fair sum.",
          "Misleading and risks unfairness.",
          "Waiver must still be informed and fair; blanket waivers without explanation are risky."
        ]
      }
    },
    {
      "topic": "Interest payable to a third party (damages to be held for lien)",
      "q": "You receive settlement funds that are subject to a third party’s entitlement (e.g., held to a third party’s order) and you hold them for 6 weeks. Who might have the Rule 7 interest entitlement?",
      "choices": [
        "Always the client only.",
        "The firm only.",
        "The client or the relevant third party, depending on who the money is held for.",
        "The bank only.",
        "No one—interest is never payable on settlement sums."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Rule 7 is owed to the client or third party for whom the money is held; entitlement tracks the holding basis.",
        "whyWrong": [
          "Third parties can be entitled.",
          "Firm entitlement is limited by Rule 7 fairness duties.",
          "",
          "Bank is not the beneficiary under Rule 7.",
          "Settlement sums can be client money and attract Rule 7."
        ]
      }
    },
    {
      "topic": "Interest policy: timing of payment",
      "q": "Your policy says interest will be calculated and paid at the end of the matter, even if money was held for 12 months. What’s the best statement?",
      "choices": [
        "Always non-compliant; interest must be paid daily.",
        "Potentially acceptable as an administrative approach if it still results in a fair sum and is clearly disclosed/agreed.",
        "Always compliant, regardless of outcome.",
        "Non-compliant unless paid monthly.",
        "Non-compliant unless approved by the bank."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "The Accounts Rules focus on a fair sum and informed consent for any alternative arrangement; timing can be a policy issue if it remains fair and disclosed.",
        "whyWrong": [
          "No daily requirement in Rule 7.",
          "",
          "Outcome fairness still matters.",
          "No monthly requirement.",
          "Bank approval is irrelevant."
        ]
      }
    },
    {
      "topic": "Client demands base rate",
      "q": "A client argues that 'fair' must mean Bank of England base rate and threatens to complain. Best response under Rule 7?",
      "choices": [
        "Agree—base rate is mandated by the Accounts Rules.",
        "Explain that the rule requires a fair sum and outline the firm’s method/policy and why it is fair (or adjust if not).",
        "Refuse—clients are never entitled to interest.",
        "Pay whatever the client demands to avoid trouble.",
        "Pay interest only if you earned interest on that specific client’s funds."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7 requires a fair sum; it doesn’t define a single benchmark. The firm should explain and ensure the outcome is fair in context.",
        "whyWrong": [
          "Not mandated in the Accounts Rules.",
          "",
          "Contradicts Rule 7.1.",
          "Fairness is not client-dictated; it must be objectively defensible.",
          "The fairness assessment can be broader than strict tracing of bank credits."
        ]
      }
    },
    {
      "topic": "Interest and prompt return",
      "q": "A client asks for their funds back. The firm delays repayment for 3 weeks 'to let more interest accrue' so it can pay a bigger interest figure. What is the best assessment?",
      "choices": [
        "Good practice—maximising interest is always best.",
        "Risky—client money must be returned promptly when no proper reason to hold it; delaying for interest can be improper.",
        "Required—firms must hold money to maximise interest for clients.",
        "Fine if the client didn’t complain.",
        "Fine if the firm pays base rate for the delay."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Interest does not justify holding onto client money longer than proper; prompt return obligations can be breached by delay.",
        "whyWrong": [
          "Maximising interest doesn’t override prompt return/proper purpose duties.",
          "",
          "No such duty exists.",
          "Complaint is irrelevant to compliance.",
          "Paying interest doesn’t cure improper retention."
        ]
      }
    },
    {
      "topic": "Partial payments and interest calculation",
      "q": "You held £40,000 for 60 days, then paid out £30,000, leaving £10,000 for another 30 days. What approach best aligns with 'fair sum'?",
      "choices": [
        "Calculate interest as if £40,000 was held for 90 days.",
        "Calculate interest reflecting the changing balance over time (time-weighted).",
        "Pay no interest because money moved during the matter.",
        "Pay interest only on the final £10,000.",
        "Pay interest only if the client requests it in writing."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "A fair approach typically reflects both amount and time held; changes in balance should be reflected.",
        "whyWrong": [
          "Overstates holding period for part of the money.",
          "",
          "Movement doesn’t eliminate the obligation.",
          "Ignores the period where £40,000 was held.",
          "Not request-based absent a written alternative arrangement."
        ]
      }
    },
    {
      "topic": "Third party: paying party vs client",
      "q": "A paying party (not your client) sends £15,000 to be held to their order pending a condition. The money earns interest. Who is entitled under Rule 7 (absent any written alternative arrangement)?",
      "choices": [
        "Your client only.",
        "The paying party (third party) because the money is held on their behalf.",
        "No one.",
        "The firm only.",
        "Split equally between paying party and your client."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7 covers third parties for whom the money is held.",
        "whyWrong": [
          "Not necessarily held for your client.",
          "",
          "Rule 7 requires accounting to the beneficiary.",
          "Firm must account fairly to beneficiary.",
          "No automatic split."
        ]
      }
    },
    {
      "topic": "Changing policy mid-matter",
      "q": "Halfway through a matter, the firm changes its interest policy to a lower rate and applies it retrospectively without telling the client. Main risk?",
      "choices": [
        "No risk if the firm emails the client after completion.",
        "Risk: lack of informed consent and potential unfairness in the sum accounted.",
        "No risk if the firm is struggling financially.",
        "No risk if the client is a company.",
        "No risk if interest rates in the economy fell."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 7.2 requires informed consent for alternative arrangements; retrospective change without disclosure risks both consent and fairness.",
        "whyWrong": [
          "After-the-event notice isn’t informed consent.",
          "",
          "Financial hardship doesn’t justify breach.",
          "Client type doesn’t remove consent requirements.",
          "Economic changes may affect fairness but do not justify secret retrospective changes."
        ]
      }
    },
    {
      "topic": "Client requests proof/calculation",
      "q": "A client asks how their interest was calculated. The firm cannot explain the method or produce any calculation record. What is the best assessment?",
      "choices": [
        "No issue—Rule 7 doesn’t require any transparency.",
        "Risky—if challenged, the firm may struggle to demonstrate that the sum accounted was fair and/or that the client gave informed consent to any alternative arrangement.",
        "No issue if the client signed the engagement letter.",
        "No issue if the firm paid some interest.",
        "No issue if the amount is small."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Fairness and informed consent are hard to show without a clear policy and evidence of application.",
        "whyWrong": [
          "While not a detailed formula rule, firms must be able to justify compliance.",
          "",
          "Signature alone doesn’t prove fairness or informed consent content.",
          "Paying ‘some’ interest may still be unfair.",
          "Small amounts may be de minimis but still require a defensible approach."
        ]
      }
    },
    {
      "topic": "Client money held for costs under Rule 2.1(d)",
      "q": "A client pays £3,000 on account of your fees. You hold it in client account for 8 weeks before billing anything. Which is the best position on interest (absent a written alternative arrangement)?",
      "choices": [
        "No interest is ever payable on money held for costs.",
        "Rule 7 can apply because it is client money held on the client’s behalf; account a fair sum.",
        "It is office money so Rule 7 does not apply.",
        "Interest is payable only after the bill is delivered.",
        "Interest is payable only if held for more than 5 weeks."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Money for fees pre-bill is client money; Rule 7 applies to client money held by you (unless disapplied under Rule 2.2 circumstances).",
        "whyWrong": [
          "Not correct—classification as client money can trigger Rule 7.",
          "",
          "It is not office money yet.",
          "Rule 7 is about money held; billing affects costs transfers, not whether money was client money.",
          "No 5-week trigger in Rule 7."
        ]
      }
    },
    {
      "topic": "Different arrangement: third party informed consent",
      "q": "You hold £100,000 for a third party (not your client) as agent. You propose paying no interest and send them a clear written explanation of the likely interest value they’d otherwise receive. They sign acceptance. Best assessment?",
      "choices": [
        "Valid—Rule 7.2 allows written different arrangements with third parties for whom money is held, with informed consent.",
        "Invalid—only clients can agree to waive interest.",
        "Invalid—interest can never be waived.",
        "Valid only if the SRA countersigns it.",
        "Valid only if the money is held less than 7 days."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "Rule 7.2 expressly covers third parties for whom the money is held and requires informed consent.",
        "whyWrong": [
          "",
          "Rule 7.2 includes third parties.",
          "Different arrangements are allowed.",
          "No countersignature requirement.",
          "No duration requirement for using Rule 7.2."
        ]
      }
    },
    {
      "topic": "End-to-end: identify the safest compliance approach",
      "q": "Your firm expects to hold £250,000 for 4 months for a transaction. You have no interest policy, and your client asks 'Will I get the interest?' What is the best next step?",
      "choices": [
        "Say ‘No’ without explanation; all interest belongs to the firm.",
        "Say ‘Yes’ but do not specify how; deal with it later.",
        "Explain Rule 7 (fair sum), set out the likely approach/rate or options (e.g., designated account), and document any agreement in writing with enough info for informed consent.",
        "Tell the client to open their own savings account and pay you cash instead.",
        "Ignore the question to avoid creating expectations."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "The rules require a fair sum unless a different written arrangement is agreed with informed consent—so you should explain and document the approach clearly.",
        "whyWrong": [
          "Contrary to Rule 7.1 and risks unfairness.",
          "Vague promises risk disputes and lack of informed consent.",
          "",
          "Cash handling creates extra risk and doesn’t answer Rule 7 obligations where you hold client money.",
          "Avoidance increases regulatory and complaint risk."
        ]
      }
    }
  ];

  window.quizData = {
    title: "SQE1 Solicitors Accounts | Chapter 4 | Interest and Residual Balances",
    subtitle: "Interest calculations and permitted arrangements.",
    questions: questions
  };
})();
