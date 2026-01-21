(() => {
  const questions = [
    {
      "topic": "Purpose & scope",
      "q": "A firm receives £50,000 from a client to 'hold for now' while the client decides whether to buy a property. The client says no legal work is needed yet. What is the firm’s best compliance response?",
      "choices": [
        "Put the money in the client account as it is safest, even if no work is being done.",
        "Put the money in the office account and label it 'client holding'.",
        "Refuse to receive/hold it unless it relates to delivering regulated services (or return it).",
        "Hold it in cash in the safe until the client decides.",
        "Put it in a joint account with the client to avoid Accounts Rules."
      ],
      "correct": 2
    },
    {
      "topic": "Client account identification",
      "q": "A firm opens a new bank account titled 'Smith & Co – Receipts Account'. It will hold client money. Which statement is correct?",
      "choices": [
        "It’s compliant if the firm’s name is included.",
        "It’s compliant if the bank knows it is a client account.",
        "It’s non-compliant unless the account name includes the word 'client'.",
        "It’s compliant only if the COFA signs a waiver.",
        "It’s compliant if no interest is earned."
      ],
      "correct": 2
    },
    {
      "topic": "Keeping client money separate",
      "q": "A partner suggests paying a supplier invoice from the office account using funds that were received from a client yesterday and not yet transferred. What is the key issue?",
      "choices": [
        "No issue if the client will ultimately benefit.",
        "Client money must be kept separate from the firm’s money.",
        "The firm may mix money if it reconciles weekly.",
        "It is allowed if the partner approves the payment.",
        "It is allowed if the amount is under £1,000."
      ],
      "correct": 1
    },
    {
      "topic": "Mixed payments & prompt allocation",
      "q": "A client pays £3,000 with the reference 'fees + search fees'. £2,400 relates to the firm’s costs and £600 is for search disbursements not yet paid. What must the firm do first?",
      "choices": [
        "Put the full £3,000 into the office account and move £600 later if needed.",
        "Put the full £3,000 into the client account and keep it there until the matter ends.",
        "Allocate promptly to the correct account(s): office for properly billed costs and client for client money.",
        "Split equally between client and office accounts.",
        "Return the money because it is a mixed payment."
      ],
      "correct": 2
    },
    {
      "topic": "Paying costs from client money (bill first)",
      "q": "A firm holds £5,000 on client account. It wants to transfer £1,200 to office account for its fees for work completed last week but no bill has been issued. What should the firm do?",
      "choices": [
        "Transfer £1,200 now and issue a bill later.",
        "Issue a bill or written notification of costs incurred before transferring.",
        "Transfer £1,200 if the client is likely to agree.",
        "Transfer any amount provided it is under the client’s total balance.",
        "Transfer £1,200 only if the client signs a receipt afterwards."
      ],
      "correct": 1
    },
    {
      "topic": "Transfer amount must match bill/notification",
      "q": "A bill shows costs incurred of £950. The firm transfers £1,000 from client account 'to keep things neat'. Which is the best assessment?",
      "choices": [
        "Compliant because the difference is small.",
        "Compliant if the client has at least £1,000 held.",
        "Non-compliant: transfer must be for the specific sum identified in the bill/notification.",
        "Compliant if recorded in the cash book.",
        "Compliant because the client can be refunded later."
      ],
      "correct": 2
    },
    {
      "topic": "Withdrawals — permitted bases",
      "q": "A client asks the firm to pay £2,000 from monies held on client account to the client’s builder (unrelated to the legal matter). What is the best response?",
      "choices": [
        "Pay it because it is on client instruction.",
        "Pay it only if the builder provides an invoice.",
        "Do not use the client account to provide banking facilities; only pay if it is in respect of regulated services / proper purpose.",
        "Pay it but charge an administration fee.",
        "Pay it if the COFA approves."
      ],
      "correct": 2
    },
    {
      "topic": "Sufficient funds per client/matter",
      "q": "Client A has £100 on ledger. Client B has £10,000. The firm mistakenly pays £500 for Client A’s disbursement from the client account. Which principle is breached most directly?",
      "choices": [
        "Firms must always pay disbursements from office account first.",
        "Withdraw client money only if sufficient funds are held for that specific client/third party.",
        "Firms may use surplus from other clients if replaced within 30 days.",
        "Client ledgers are optional if bank statements exist.",
        "Payments under £1,000 do not require segregation."
      ],
      "correct": 1
    },
    {
      "topic": "Authorisation & supervision",
      "q": "A trainee with online banking access makes a client account transfer without any second approval because the partner is busy. What is the compliance risk?",
      "choices": [
        "No risk if the trainee is competent.",
        "Risk only if the transfer was over £10,000.",
        "Withdrawals must be appropriately authorised and supervised.",
        "It is fine if the COFA reviews it at month end.",
        "It is fine if the client later confirms by email."
      ],
      "correct": 2
    },
    {
      "topic": "Correcting breaches promptly",
      "q": "The COFA discovers £2,000 of client money was accidentally paid into office account yesterday. What should happen next?",
      "choices": [
        "Wait until the next 5-week reconciliation to correct it.",
        "Correct promptly upon discovery; replace/pay into client account immediately as appropriate.",
        "Leave it if the firm’s cashflow needs it.",
        "Offset it against future bills.",
        "Close the ledger and reopen it next month."
      ],
      "correct": 1
    },
    {
      "topic": "Residual balances & charity route",
      "q": "A matter ended 2 years ago. £120 remains on client ledger. The client cannot be traced despite reasonable steps. The firm wants to clear the balance. Which is the best approach?",
      "choices": [
        "Transfer to office account and record it as 'unclaimed'.",
        "Donate to a charity of the firm’s choice if prescribed conditions are met and keep the required records.",
        "Pay it to the partner as a bonus.",
        "Keep it indefinitely because the client might return.",
        "Send it to HMRC automatically."
      ],
      "correct": 1
    },
    {
      "topic": "Residual balances limit",
      "q": "A firm has a residual balance of £750 on one client matter. It cannot trace the client. What is the safest compliant route?",
      "choices": [
        "Pay £750 to charity under the prescribed circumstances without contacting the SRA.",
        "Split into two £375 payments to charity to stay under the limit.",
        "Seek SRA prior written authorisation before removing amounts over £500.",
        "Transfer to office account and keep a note.",
        "Offset it against another client’s deficit."
      ],
      "correct": 2
    },
    {
      "topic": "Banking facilities prohibition",
      "q": "A wealthy client asks the firm to temporarily hold £200,000 in client account to show 'proof of funds' to a seller, but the firm is not instructed on any legal work. What is the main issue?",
      "choices": [
        "It is fine because it is client money.",
        "It is fine if the firm charges for the service.",
        "Client account must not be used to provide banking facilities; movements must relate to regulated services.",
        "It is only an issue if interest is earned.",
        "It is fine if held for less than 7 days."
      ],
      "correct": 2
    },
    {
      "topic": "Mixed payments — practical handling",
      "q": "A client pays £1,500. £900 is a billed fee, £600 is to be held for counsel’s fee not yet invoiced. Where should the £600 go?",
      "choices": [
        "Office account (because it relates to costs).",
        "Client account (until it is properly payable for that client/matter).",
        "Split between both accounts.",
        "Any account, as long as recorded on the ledger.",
        "Cash, then bank later."
      ],
      "correct": 1
    },
    {
      "topic": "Client vs firm money (conceptual)",
      "q": "A firm receives £2,000 from an opponent’s insurer as settlement monies for the client. How should it be treated on receipt?",
      "choices": [
        "Office money because it arrived from a third party.",
        "Client money because it belongs to the client/beneficiary.",
        "Neither — it is outside the Accounts Rules.",
        "Office money unless the client demands otherwise.",
        "Profit cost only."
      ],
      "correct": 1
    },
    {
      "topic": "Instructions vs proper purpose",
      "q": "A client instructs the firm to pay the client’s rent arrears from client account funds held for a litigation matter. What is the best answer?",
      "choices": [
        "Always comply with client instructions even if unrelated.",
        "Comply only if a manager signs off.",
        "Decline unless it is properly connected to the purpose for which the money is held / regulated services; avoid banking facilities.",
        "Comply if the amount is small.",
        "Comply but record it as a disbursement."
      ],
      "correct": 2
    },
    {
      "topic": "Paying third parties from client account",
      "q": "During a conveyance, the firm holds completion monies. The client instructs payment of the purchase price to the seller’s solicitors on completion. Is paying from client account appropriate?",
      "choices": [
        "No — client account cannot be used for any third-party payment.",
        "Yes — it is for the purpose for which the money is held in a regulated service.",
        "Only if the seller’s solicitors are also the firm’s client.",
        "Only if the payment is under £10,000.",
        "Only if the client signs a deed."
      ],
      "correct": 1
    },
    {
      "topic": "Costs notification — what it enables",
      "q": "A client challenges a transfer from client to office account. The firm shows an email stating 'we’ve done lots of work so we’re taking £2,000' but no bill/notification of costs incurred. What is the key problem?",
      "choices": [
        "Email is always sufficient as a bill.",
        "A bill or written notification of costs incurred must precede transfer for costs.",
        "The firm can transfer if it believes costs are reasonable.",
        "The firm only needs client consent, not documentation.",
        "The firm can transfer if it reconciles every five weeks."
      ],
      "correct": 1
    },
    {
      "topic": "Office account temptation",
      "q": "To reduce admin, a firm keeps all client receipts in office account and ‘allocates on the ledger’ the same day. Best assessment?",
      "choices": [
        "Compliant if ledger entries are accurate.",
        "Compliant if no client complains.",
        "Non-compliant: client money must be kept separate from the firm’s money.",
        "Compliant if the firm is small.",
        "Compliant if payments are refunded within 14 days."
      ],
      "correct": 2
    },
    {
      "topic": "Client account location requirement",
      "q": "A firm wants to use a bank account based outside England & Wales as its client account to get better interest rates. Which is correct?",
      "choices": [
        "Allowed if the client agrees in writing.",
        "Allowed if the COFA approves.",
        "Not allowed: client account must be maintained at a branch/head office in England & Wales.",
        "Allowed if reconciled weekly.",
        "Allowed if only used for overseas clients."
      ],
      "correct": 2
    },
    {
      "topic": "Reconciliation cadence (foundation awareness)",
      "q": "A firm reconciles client account every 3 months because its accounting team is small. What is the standard requirement under the Accounts Rules?",
      "choices": [
        "At least every five weeks.",
        "At least every six months.",
        "Only at year end.",
        "Only when there is a complaint.",
        "No set period; it’s entirely discretionary."
      ],
      "correct": 0
    },
    {
      "topic": "Sign-off responsibility (foundation awareness)",
      "q": "A reconciliation is prepared but left unsigned because the COFA is on annual leave. Who must sign off the reconciliation record?",
      "choices": [
        "Any fee earner on the matter.",
        "The client.",
        "The COFA or a manager of the firm.",
        "Only the bank manager.",
        "No one; signature is optional."
      ],
      "correct": 2
    },
    {
      "topic": "Breach response — shortfall",
      "q": "The firm discovers a client ledger shows a £400 shortfall caused by an erroneous payment. What is the correct immediate response?",
      "choices": [
        "Wait to see if a later receipt covers it naturally.",
        "Correct promptly; money improperly withdrawn must be immediately replaced as appropriate.",
        "Transfer £400 from another client’s surplus temporarily.",
        "Ignore if under £500.",
        "Write it off as an accounting error."
      ],
      "correct": 1
    },
    {
      "topic": "Client instructions vs SRA safeguards",
      "q": "A client instructs: 'Take your fees directly from my client money whenever you want, no need to bill me.' What is the best response?",
      "choices": [
        "Accept; client instruction overrides the Accounts Rules.",
        "Accept only if the client is sophisticated.",
        "You still must give a bill or written notification of costs incurred before transferring for costs.",
        "Accept if the client signs a waiver witnessed by a solicitor.",
        "Accept if the amount is fixed."
      ],
      "correct": 2
    },
    {
      "topic": "Purpose for which money is held",
      "q": "The firm holds £8,000 as damages received for the client. The client is abroad and asks the firm to hold it for 4 months until they return. What is the most compliant approach?",
      "choices": [
        "Keep it in client account if there remains a proper reason and pay out when instructed, ensuring it’s not used as banking facilities beyond regulated services context.",
        "Transfer it to office account to simplify administration.",
        "Donate it to charity after 12 weeks automatically.",
        "Pay it to another client who has a shortfall.",
        "Convert it to cash and store it."
      ],
      "correct": 0
    },
    {
      "topic": "Central record of bills (foundation awareness)",
      "q": "During an SRA visit, the firm can’t quickly find copies of bills/written notifications used to justify transfers from client to office account. What control is relevant?",
      "choices": [
        "No specific control exists.",
        "A central readily accessible record of bills/notifications of costs should be kept.",
        "Only bank statements matter.",
        "Only fee earners must keep copies in personal email.",
        "Bills are irrelevant if the client paid voluntarily."
      ],
      "correct": 1
    },
    {
      "topic": "Client ledger integrity",
      "q": "A firm keeps one combined ledger for all clients and tracks totals only, not by client/matter. Best assessment?",
      "choices": [
        "Compliant if totals match the bank statement.",
        "Compliant if reconciled every five weeks.",
        "Non-compliant: records should be kept in client ledgers identified by client and matter.",
        "Compliant for firms under 5 employees.",
        "Compliant if the COFA reviews annually."
      ],
      "correct": 2
    },
    {
      "topic": "Charity residual balance conditions",
      "q": "A firm wants to pay a £300 residual balance to charity but also deduct £60 tracing costs it incurred. What is correct?",
      "choices": [
        "Allowed if the client can’t be found.",
        "Allowed if the firm keeps a record.",
        "Not allowed: the firm must not deduct tracing/communication costs from the residual balance paid to charity.",
        "Allowed only if the charity agrees.",
        "Allowed only if the amount is under £100."
      ],
      "correct": 2
    },
    {
      "topic": "Prescribed circumstances documentation",
      "q": "A firm pays a £200 residual balance to charity but keeps no note of steps taken to trace the client. What is the risk?",
      "choices": [
        "No risk; payment to charity cures all breaches.",
        "Risk: prescribed circumstances require recording steps taken and keeping relevant records (e.g., register/receipts) for the required period.",
        "No risk if the client is overseas.",
        "Risk only if the charity is not registered.",
        "No risk if the COFA verbally approved."
      ],
      "correct": 1
    },
    {
      "topic": "Mixed payment allocation timing",
      "q": "A mixed payment arrives Friday afternoon. The cashier plans to allocate it to client/office accounts next Thursday when they are back from leave. Best answer?",
      "choices": [
        "Fine if allocation is done within 14 days.",
        "Fine if the client account balance is high enough.",
        "Not ideal: funds from mixed payments must be allocated promptly to the correct account.",
        "Fine if a note is left on the matter file.",
        "Required because allocation must only occur after reconciliation."
      ],
      "correct": 2
    }
  ];

  window.quizData = {
    title: "SQE1 Solicitors Accounts | Chapter 1 | Core Principles",
    subtitle: "Client money, office money, and accounts handling basics.",
    questions: questions
  };
})();
