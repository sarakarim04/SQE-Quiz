(() => {
  const questions = [
    {
      "topic": "Mixed receipt: correct allocation",
      "q": "A client sends £4,000. £1,500 relates to a bill already delivered. £2,500 is to be held for future counsel’s fees not yet billed. What is the best way to handle the £4,000 on receipt?",
      "choices": [
        "Pay all £4,000 into office account because a bill exists.",
        "Pay all £4,000 into client account and leave it there until the matter ends.",
        "Allocate promptly: £1,500 to office account (billed costs) and £2,500 to client account (client money).",
        "Split it equally between accounts to avoid a mistake.",
        "Return the money and request separate payments."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Mixed receipts must be allocated promptly so office money (properly billed) goes to office account and the client-money element remains in client account.",
        "whyWrong": [
          "The £2,500 is not office money yet; putting it in office account risks misappropriation.",
          "Keeping billed costs in client account leaves office money sitting as client money unnecessarily.",
          "",
          "Arbitrary splits are not allocation.",
          "Mixed receipts are allowed; you just must allocate correctly."
        ]
      }
    },
    {
      "topic": "Client money wrongly received into office account",
      "q": "Client completion monies of £18,000 are accidentally paid into the firm’s office account. What should the firm do next?",
      "choices": [
        "Leave it in office account if a ledger note is made.",
        "Move it into client account promptly and correct the accounting records.",
        "Wait for the next monthly reconciliation to move it.",
        "Transfer it directly from office account to the seller’s solicitors to ‘avoid handling’.",
        "Treat it as office money because the firm received it."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Client money received in the wrong place must be moved promptly into client account and records corrected.",
        "whyWrong": [
          "A note doesn’t cure holding client money in office account.",
          "",
          "Delay prolongs the breach.",
          "Paying out from the wrong account doesn’t fix improper holding/controls.",
          "Receipt by the firm does not make it office money."
        ]
      }
    },
    {
      "topic": "Permitted withdrawal: proper purpose",
      "q": "You hold £12,000 in client account for a conveyancing completion. On completion, you need to send the purchase price to the seller’s solicitors. Is payment from client account appropriate?",
      "choices": [
        "No—client account payments can only be to the client.",
        "Yes—this is for the purpose for which the money is held (completion).",
        "Only if the seller’s solicitors are also your client.",
        "Only if the payment is under £10,000.",
        "Only if the client signs a deed of authority witnessed by a solicitor."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "A completion payment is a classic proper-purpose withdrawal from client account.",
        "whyWrong": [
          "Payments to third parties are permitted where proper purpose/instructions exist.",
          "",
          "No such requirement.",
          "No threshold rule.",
          "No deed requirement as a general rule."
        ]
      }
    },
    {
      "topic": "Insufficient funds: no cross-subsidy",
      "q": "Client A has £200 on their ledger. A £600 disbursement is due for Client A. Client B has £50,000 on their ledger. The cashier considers paying Client A’s £600 from client account anyway. What is the best assessment?",
      "choices": [
        "Permitted if the firm replaces the £400 shortfall within 48 hours.",
        "Permitted if a partner authorises it.",
        "Not permitted—you must not make a withdrawal unless sufficient funds are held for that client/matter.",
        "Permitted if the firm’s overall client account balance is positive.",
        "Permitted if Client B is told later."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "You cannot use other clients’ money to fund a payment for a different client/matter.",
        "whyWrong": [
          "No short-term ‘borrowing’ exception.",
          "Authorisation doesn’t legalise misuse.",
          "",
          "Overall balance is irrelevant; the client/matter ledger must support the payment.",
          "Disclosure doesn’t cure the breach."
        ]
      }
    },
    {
      "topic": "Client instruction vs banking facility",
      "q": "A client asks you to pay their private credit card bill from money held in client account for a litigation matter. What should you do?",
      "choices": [
        "Pay it because the client instructed you.",
        "Pay it if you charge an admin fee.",
        "Decline—client account must not be used as a general banking facility for unrelated payments.",
        "Pay it if the amount is small.",
        "Pay it if the client signs a waiver."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Client account must not be used as a payments hub for unrelated personal liabilities.",
        "whyWrong": [
          "Instruction alone is not enough if it becomes banking facilities.",
          "Charging doesn’t fix improper purpose.",
          "",
          "No de minimis exception.",
          "A waiver doesn’t disapply the rule."
        ]
      }
    },
    {
      "topic": "Transfer for costs: bill/notification prerequisite",
      "q": "You hold £6,500 in client account. You want to move £2,000 to office account for your fees, but you have not delivered a bill or written costs notification. What is the correct step?",
      "choices": [
        "Transfer now; deliver the bill later.",
        "Deliver the bill/notification first, then transfer the specified amount.",
        "Transfer now if the client emails consent.",
        "Transfer if the matter is urgent.",
        "Transfer only half now and half after the bill."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "A costs transfer from client to office requires the correct documentary step first (bill/notification), then the transfer.",
        "whyWrong": [
          "Wrong order.",
          "",
          "Consent doesn’t replace required process.",
          "Urgency doesn’t remove the requirement.",
          "Partial transfers don’t fix the missing prerequisite."
        ]
      }
    },
    {
      "topic": "Transfer amount must match authority",
      "q": "A bill delivered is £1,250. The cashier transfers £1,400 ‘to cover anticipated extras’. Best assessment?",
      "choices": [
        "Compliant if the client ledger has enough funds.",
        "Compliant if the client is told after.",
        "Non-compliant—transfer must match the billed/notified amount.",
        "Compliant if the COFA signs it off.",
        "Compliant if the difference is refunded later."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "You can only transfer what is properly authorised by the bill/notification.",
        "whyWrong": [
          "Sufficient funds doesn’t authorise taking more.",
          "After-the-event notice doesn’t cure the breach.",
          "",
          "COFA sign-off doesn’t create authority that isn’t there.",
          "Refund later doesn’t make the original transfer compliant."
        ]
      }
    },
    {
      "topic": "Correcting an error: office to client",
      "q": "A £900 client refund was mistakenly paid from office account instead of client account. The client’s ledger in client account still shows £900 owed to the client. What is the best corrective action?",
      "choices": [
        "Do nothing—client has received the refund so the ledger can stay wrong.",
        "Transfer £900 from client to office to reimburse the firm, without further steps.",
        "Correct the records and (if appropriate) transfer £900 from client to office only if a proper basis exists; otherwise treat it as firm error and fix ledgers accordingly.",
        "Ask another client if their surplus can cover it.",
        "Close the matter ledger and reopen it to ‘reset’ the balance."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "You must correct accounting records. Any client-to-office movement must have a proper basis; otherwise it’s the firm’s mistake.",
        "whyWrong": [
          "Records must reflect reality.",
          "Client-to-office transfer still needs proper authority/purpose.",
          "",
          "Never use one client’s money for another’s position.",
          "Admin workarounds don’t correct the underlying accounting."
        ]
      }
    },
    {
      "topic": "Payments to the client: proper withdrawal",
      "q": "A matter completes and £3,200 remains due back to the client. The client provides bank details for repayment. What is the best approach?",
      "choices": [
        "Keep it until year-end to reduce bank fees.",
        "Transfer it to office account first then pay the client from office.",
        "Pay the client promptly from client account and update the ledger.",
        "Donate it to charity immediately.",
        "Pay it only if the client signs a full waiver of liability."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Where there is no proper reason to hold money, return it promptly to the client from client account and record properly.",
        "whyWrong": [
          "Convenience is not a proper reason to delay return.",
          "Unnecessary transfer increases risk of improper mixing.",
          "",
          "Charity route is for residual balances in prescribed circumstances.",
          "No need for a waiver to return money owed."
        ]
      }
    },
    {
      "topic": "Unidentified receipt: suspense handling",
      "q": "£2,500 arrives in your client account with no reference. You cannot identify the payer or matter that day. What should the firm do?",
      "choices": [
        "Transfer it to office account until someone claims it.",
        "Allocate it to a random client matter to keep the books tidy.",
        "Record it as an unidentified/suspense client receipt, investigate promptly, and allocate/return once identified.",
        "Donate it to charity after 7 days.",
        "Refund it immediately to the sending bank without checking."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Unidentified funds must be safeguarded and tracked while you investigate; do not misallocate.",
        "whyWrong": [
          "You can’t treat unknown funds as the firm’s money.",
          "Misallocation is a serious breach risk.",
          "",
          "Charity route isn’t a quick fix and has conditions.",
          "Immediate refund may be wrong if it is client money or part of a transaction—investigate first."
        ]
      }
    },
    {
      "topic": "Third-party instructions: ‘to sender’s order’",
      "q": "A lender sends mortgage advance funds to be held to its order until completion. The client asks you to release the money early to pay a contractor. What should you do?",
      "choices": [
        "Release it—client instruction overrides lender conditions.",
        "Release it if the contractor provides an invoice.",
        "Do not release—money held to a third party’s order must be applied only as permitted by that order/purpose.",
        "Release half now as a compromise.",
        "Transfer it to office account to manage it more flexibly."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "You must comply with the conditions attached to third-party money held to order; the client can’t redirect it for unrelated purposes.",
        "whyWrong": [
          "Client instruction does not override the third party’s order.",
          "An invoice doesn’t change the holding conditions.",
          "",
          "Partial breach is still a breach.",
          "Office account transfer is improper and increases risk."
        ]
      }
    },
    {
      "topic": "Withdrawal controls: authorisation",
      "q": "A junior staff member initiates a client account transfer without any second approval because 'it’s routine'. What is the compliance concern?",
      "choices": [
        "No concern if it’s under £5,000.",
        "No concern if it’s recorded later.",
        "Client account withdrawals must be properly authorised and controlled.",
        "No concern if the client later confirms.",
        "No concern if the firm is small."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Controls and authorisation around client account withdrawals are essential; routine doesn’t remove the requirement.",
        "whyWrong": [
          "No threshold exception.",
          "Later recording doesn’t substitute for authorisation.",
          "",
          "Client confirmation doesn’t replace internal controls.",
          "Firm size doesn’t remove controls."
        ]
      }
    },
    {
      "topic": "Wrong payee / mistaken payment out",
      "q": "You mistakenly pay £4,000 from Client X’s ledger to the wrong supplier. What must happen next?",
      "choices": [
        "Wait for the supplier to return it eventually.",
        "Replace the £4,000 promptly and take immediate steps to recover the mistaken payment; correct records.",
        "Transfer £4,000 from another client’s surplus temporarily.",
        "Do nothing if the client is unlikely to notice.",
        "Write it off as a business expense."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Client money wrongly withdrawn creates a shortfall for that client/matter and must be remedied promptly; recovery steps and records correction are required.",
        "whyWrong": [
          "Delay leaves client money unprotected/short.",
          "",
          "You cannot use other clients’ money.",
          "Detection is irrelevant.",
          "You can’t write off missing client money."
        ]
      }
    },
    {
      "topic": "Client asks to ‘lend’ their money to the firm",
      "q": "A client emails: 'You can use the £20,000 you hold for me to help your cashflow this month. Just pay it back later.' Best response?",
      "choices": [
        "Accept—client consent allows it.",
        "Accept if the client is sophisticated.",
        "Decline—client money cannot be used as firm working capital; keep it segregated and for proper purpose only.",
        "Accept if documented as a loan without any further steps.",
        "Accept if kept in the client account but noted as ‘loaned’."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Client account funds are not a cashflow tool. Even with consent, this undermines segregation/proper purpose and risks regulatory breach.",
        "whyWrong": [
          "Consent does not necessarily legitimise misuse of client account.",
          "Sophistication doesn’t change the core control objective.",
          "",
          "Recharacterising it doesn’t remove the client-money regime risks.",
          "Labeling doesn’t change reality."
        ]
      }
    },
    {
      "topic": "Client money for disbursements: timing",
      "q": "You hold £800 in client account specifically to pay a search provider next week. The cashier wants to pay it today to reduce workload. Is paying today from client account acceptable?",
      "choices": [
        "No—payments can only be made on the exact due date.",
        "Yes—if it is for the proper purpose and authorised, timing can be earlier if consistent with client instructions/matter handling.",
        "No—disbursements must be paid from office account first.",
        "Yes—only if under £500.",
        "Yes—only if the client account is in credit overall."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "If the payment is for the proper purpose, authorised, and there are sufficient funds for that client/matter, early payment can be fine.",
        "whyWrong": [
          "No rigid due-date rule.",
          "",
          "No general rule requiring office-first for disbursements.",
          "No £500 threshold.",
          "Overall credit is irrelevant; you need sufficient funds for that client/matter."
        ]
      }
    },
    {
      "topic": "Office money incorrectly paid into client account",
      "q": "A billed fee of £1,100 is mistakenly paid into client account instead of office account. What should the firm do?",
      "choices": [
        "Leave it—money in client account is always safer.",
        "Transfer it to office account promptly and correct records, ensuring the transfer is properly evidenced.",
        "Donate it to charity because it’s not client money.",
        "Allocate it to a client matter with a deficit.",
        "Keep it in client account until the next reconciliation."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Office money should not sit in client account longer than necessary; correct placement and records should be made promptly.",
        "whyWrong": [
          "Leaving office money in client account can create confusion and control issues.",
          "",
          "Charity route is for residual client money, not firm fees.",
          "You can’t use money to patch unrelated positions.",
          "Unnecessary delay."
        ]
      }
    },
    {
      "topic": "Client asks for cash withdrawal",
      "q": "A client asks you to withdraw £2,000 in cash from client account and hand it to them in person. What is the best assessment?",
      "choices": [
        "Always refuse—cash withdrawals are never allowed.",
        "It may be permitted if it is a proper payment to the client, properly authorised, and the firm is satisfied on AML/identity and records the transaction fully.",
        "Always agree if the client insists.",
        "Agree only if under £500.",
        "Agree only if the client signs a waiver."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "A payment to the client can be proper, but cash increases risk. Controls, authorisation, AML checks and records are critical.",
        "whyWrong": [
          "Not an absolute prohibition, but it is high-risk.",
          "",
          "Insistence doesn’t remove safeguards.",
          "No £500 rule.",
          "Waiver doesn’t replace AML/controls."
        ]
      }
    },
    {
      "topic": "Payment on client instruction but improper purpose",
      "q": "You hold £9,000 for a probate matter. The beneficiary instructs you to pay £9,000 to their friend to help them buy a car. Best response?",
      "choices": [
        "Pay it—beneficiary instruction is enough.",
        "Pay it if the friend sends a receipt.",
        "Decline unless it aligns with the proper purpose and you are not providing banking facilities; otherwise pay the beneficiary and let them pay their friend.",
        "Pay it if the COFA approves.",
        "Pay it if you do it as two transfers."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Client account should not become a general payments hub. The safer compliant route is paying the beneficiary/client properly, not facilitating unrelated onward payments.",
        "whyWrong": [
          "Instruction doesn’t automatically make it proper purpose.",
          "Receipt doesn’t fix purpose.",
          "",
          "COFA approval doesn’t legitimise banking-facility behaviour.",
          "Splitting doesn’t change substance."
        ]
      }
    },
    {
      "topic": "Client money held jointly with third party conditions",
      "q": "Two parties to a dispute agree you will hold £15,000 as stakeholder and release it only when both sign a settlement agreement. How should withdrawals be managed?",
      "choices": [
        "Release to whichever party asks first.",
        "Release only in accordance with the stakeholder terms (both signatures / agreed trigger).",
        "Release once your client says it’s fine.",
        "Release if it’s been held longer than 30 days.",
        "Release if you personally believe settlement is likely."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Stakeholder funds must be released only as permitted by the agreed trigger/terms.",
        "whyWrong": [
          "Would breach stakeholder obligations.",
          "",
          "One party can’t override joint conditions.",
          "No time-based trigger unless agreed.",
          "Your opinion is irrelevant."
        ]
      }
    },
    {
      "topic": "Client ledger integrity: allocation must match reality",
      "q": "To speed up, a cashier allocates an unidentified £1,000 receipt to Client Z because 'they probably paid it'. What is the key issue?",
      "choices": [
        "No issue if the bank balance matches.",
        "No issue if corrected later.",
        "Misallocation risk—money must not be allocated without reasonable identification/evidence.",
        "No issue if Client Z is a long-standing client.",
        "No issue if the COFA is informed."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Allocating unidentified money without proper basis risks serious accounting and client money breaches.",
        "whyWrong": [
          "Bank totals don’t show entitlement.",
          "A later fix doesn’t justify a knowingly unreliable allocation.",
          "",
          "Relationship doesn’t evidence ownership.",
          "Informing doesn’t cure misallocation."
        ]
      }
    },
    {
      "topic": "Shortfall discovery: immediate action",
      "q": "A reconciliation shows the client account is short by £1,200 due to an earlier mistaken transfer. What should happen next?",
      "choices": [
        "Wait until month end to correct.",
        "Replace/correct promptly and investigate cause; ensure records are corrected.",
        "Move £1,200 from another client ledger surplus.",
        "Ignore if the firm is solvent.",
        "Close and reopen the client account."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Shortfalls in client money require prompt correction and investigation; cross-subsidising from other client funds is prohibited.",
        "whyWrong": [
          "Delay prolongs exposure.",
          "",
          "You cannot use other clients’ money.",
          "Solvency is irrelevant to safeguarding client money.",
          "Admin changes don’t address the shortfall."
        ]
      }
    },
    {
      "topic": "Client-to-office set-off temptation",
      "q": "A client owes the firm £700 on an unpaid bill. The firm also owes the client £700 held on client account from a previous matter. The firm wants to 'just net them off' without any steps. What is the best approach?",
      "choices": [
        "Automatically set-off without any documentation.",
        "Set-off is never allowed in any circumstances.",
        "Only transfer from client to office on a proper basis and with correct records; do not treat netting as a shortcut.",
        "Transfer if a partner approves verbally.",
        "Transfer if the client won’t complain."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Even where the numbers match, movement of client money requires a proper basis and clean records; 'netting' can’t bypass required controls.",
        "whyWrong": [
          "Shortcuts risk improper withdrawal.",
          "Not always 'never', but the process must be compliant.",
          "",
          "Verbal approval is not the required control mechanism.",
          "Complaint risk is irrelevant."
        ]
      }
    },
    {
      "topic": "Third-party managed account vs client account confusion",
      "q": "A fee earner tells a client: 'Send the money to our TPMA provider; it’s the same as paying into our client account.' What is the best assessment?",
      "choices": [
        "Correct—TPMA is legally identical to a client account.",
        "Incorrect—TPMA can be suitable but it’s not the same; you must explain arrangements and ensure safeguards and suitability.",
        "Correct if the provider is FCA-authorised.",
        "Correct if the client signs a waiver.",
        "Incorrect because TPMAs are never allowed."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "TPMAs can be used, but they are not identical to client accounts; proper client information, suitability and controls matter.",
        "whyWrong": [
          "It’s not identical under the rules.",
          "",
          "Authorisation doesn’t make it 'the same'.",
          "Waivers don’t replace proper explanation/suitability.",
          "TPMAs are allowed where appropriate."
        ]
      }
    },
    {
      "topic": "Payment to third party: must be linked to matter purpose",
      "q": "You hold £5,500 in client account for a conveyance. The client asks you to pay £1,000 to their interior designer unrelated to the completion mechanics. Best response?",
      "choices": [
        "Pay it because it’s from money you hold for the client.",
        "Pay it if the designer provides an invoice.",
        "Decline (or pay client instead); paying unrelated third-party bills risks banking facilities and improper purpose.",
        "Pay it if the COFA approves.",
        "Pay it if it is a one-off."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Client account payments should not become general bill-payment services unrelated to the legal purpose for which funds are held.",
        "whyWrong": [
          "Holding money doesn’t authorise unrelated payments.",
          "Invoice doesn’t make it related to the legal purpose.",
          "",
          "Approval doesn’t convert improper purpose into proper purpose.",
          "One-off can still be non-compliant."
        ]
      }
    },
    {
      "topic": "Client account withdrawal: timing + authority",
      "q": "A client emails at 6pm asking for an urgent £10,000 transfer from client account to complete a purchase. The partner cannot be reached. The cashier wants to process it anyway. What is the key compliance issue?",
      "choices": [
        "None—urgency overrides controls.",
        "None—client email instruction is enough on its own.",
        "Controls/authorisation: client account withdrawals must be properly authorised and supervised even when urgent.",
        "Only AML is relevant; accounts controls are irrelevant.",
        "Only the amount matters; under £10,000 is fine."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Urgency does not remove authorisation/control requirements over client account withdrawals.",
        "whyWrong": [
          "Urgency doesn’t disapply controls.",
          "Instruction alone doesn’t replace internal authorisation controls.",
          "",
          "Both AML and accounts controls can be relevant.",
          "No threshold exception."
        ]
      }
    },
    {
      "topic": "Overpayment by client: return vs holding",
      "q": "A client accidentally pays £1,000 too much into client account. There is no reason to retain the excess. What should the firm do?",
      "choices": [
        "Keep it as a buffer for future work.",
        "Transfer it to office account and treat as credit on account.",
        "Return the excess promptly to the client (after verifying details) and correct records.",
        "Donate it to charity.",
        "Leave it until the client asks for it."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "If there is no proper reason to hold the excess, it should be returned promptly with correct accounting.",
        "whyWrong": [
          "Holding as a buffer risks banking facilities.",
          "It is not office money.",
          "",
          "Charity route is not an immediate substitute and has conditions.",
          "Passive holding without reason is risky."
        ]
      }
    },
    {
      "topic": "Refund to source vs refund to client",
      "q": "£3,000 is received from a third party into client account for your client, but later it becomes clear the payer sent it in error (wrong firm). What is the best approach?",
      "choices": [
        "Keep it; it’s in your client account so it must be for your client.",
        "Transfer it to office account as 'windfall'.",
        "Investigate promptly and, once verified, return to the correct payer/source and document the steps.",
        "Donate it to charity after 14 days.",
        "Pay it to your client anyway to be safe."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Client account must reflect true entitlements; if the funds do not belong to your client/matter, you should rectify by returning to the rightful owner after verification.",
        "whyWrong": [
          "Banking location doesn’t determine entitlement.",
          "It’s not the firm’s money.",
          "",
          "Charity route doesn’t apply to active mistakes like this.",
          "Paying to client could misappropriate another party’s funds."
        ]
      }
    },
    {
      "topic": "Client wants faster payment via office account",
      "q": "The client asks you to move £7,500 from client account to office account because 'office transfers are faster' and then pay a third party from office account. Best response?",
      "choices": [
        "Agree—client instruction is enough.",
        "Agree if you record it carefully.",
        "Decline—do not move client money to office account unless there is a proper basis (e.g., billed costs); pay properly from client account if appropriate.",
        "Agree if the third party is reputable.",
        "Agree if done within 24 hours."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Client-to-office transfers require proper basis; convenience is not enough. If the payment is proper, it should be made from client account with correct controls.",
        "whyWrong": [
          "Instruction doesn’t create proper basis for transfer.",
          "Recording doesn’t create authority.",
          "",
          "Reputation is irrelevant.",
          "No 24-hour exception."
        ]
      }
    },
    {
      "topic": "Client money used to pay firm’s expenses",
      "q": "The firm’s rent is due. A partner suggests temporarily using client account funds and 'putting it back next week'. Best assessment?",
      "choices": [
        "Permitted if replaced within 7 days.",
        "Permitted if the client account is overall in credit.",
        "Prohibited—client money must not be used for firm expenses/working capital.",
        "Permitted if approved by the COFA.",
        "Permitted if the clients are not harmed."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Using client money for firm expenses is a core breach of segregation/proper purpose.",
        "whyWrong": [
          "No short-term borrowing exception.",
          "Overall credit is irrelevant.",
          "",
          "COFA approval cannot legitimise misuse.",
          "Harm isn’t the test; the rule is protective."
        ]
      }
    },
    {
      "topic": "End-to-end scenario: correct movement + records",
      "q": "You receive £9,500. £2,000 is for a billed fee. £7,500 is completion money to pay out tomorrow. The receipt arrives with one bank transfer. What should you do today?",
      "choices": [
        "Pay everything into office account, then move £7,500 to client account tomorrow before paying out.",
        "Pay everything into client account, then leave it there until after completion.",
        "Allocate promptly: move £2,000 to office account (billed costs) and keep £7,500 in client account for completion, with proper ledger entries.",
        "Split it 50/50 between client and office accounts to reduce risk.",
        "Return it and request separate transfers."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Mixed receipts require prompt correct allocation: billed costs to office; completion funds remain client money and stay in client account for proper-purpose payment.",
        "whyWrong": [
          "Routes client money through office account without basis.",
          "Leaves office money sitting in client account unnecessarily.",
          "",
          "Arbitrary split is not allocation.",
          "Not required; correct allocation solves it."
        ]
      }
    }
  ];


  window.quizData = {
    title: "SQE1 Solicitors Accounts | Chapter 3 | Handling Client Money",
    subtitle: "Receipts, withdrawals, and account corrections.",
    questions: questions
  };
})();

