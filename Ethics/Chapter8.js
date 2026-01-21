(() => {
  const questions = [
  {
    topic: "Solicitors Accounts ethics — client money vs office money",
    q: "A client transfers £50,000 to your firm to hold 'until they decide' whether to buy property next month. There is no active transaction yet. What is the best analysis?",
    choices: [
      "Treat it as client money and hold indefinitely in client account",
      "Treat it as office money because there is no open matter",
      "You should not use client account as a banking facility; holding money without underlying legal service/transaction is likely improper",
      "Hold it in office account and promise to transfer later"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client accounts are not general deposit accounts. Money should only be held in client account in connection with underlying legal services/transactions; otherwise it risks being treated as improper banking.",
      whyWrong: [
        "Client money rules are strict; you cannot hold indefinitely without an underlying purpose.",
        "Office account is also wrong—misclassifies and risks misuse.",
        "—",
        "Office account holding would mix funds and be improper."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — mixing client and office money",
    q: "Your firm is short on cashflow. A partner suggests using money sitting in client account for 48 hours to pay salaries, then replacing it. Best analysis?",
    choices: [
      "Acceptable if repaid quickly",
      "Acceptable if the client will not notice",
      "Not acceptable: misuse of client money is a serious breach regardless of repayment plans",
      "Acceptable if the partner authorises it in writing"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Using client money for firm expenses is a serious breach and can amount to dishonesty/misappropriation.",
      whyWrong: [
        "Speed of repayment does not cure misuse.",
        "Detection risk is irrelevant.",
        "—",
        "Internal authorisation does not legalise misuse."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — paying costs from client account",
    q: "You want to transfer £2,000 from client account to office account for your fees. What is the safest general requirement?",
    choices: [
      "You can transfer whenever you like as long as work was done",
      "You can transfer if the client verbally agrees on the phone",
      "Usually you must deliver a bill or other written notification of costs before transferring from client to office account",
      "You can transfer if you make a file note that costs are due"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Transferring costs from client account typically requires that the costs are properly due and the client has been notified in writing (often by a bill).",
      whyWrong: [
        "Work done is not enough without proper notification/authority.",
        "Verbal agreement is not the safest approach and may not satisfy rules.",
        "—",
        "File notes do not replace written notification."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — receiving damages/settlement funds",
    q: "Your firm receives £30,000 damages for a client. The client asks you to keep it in client account for six months 'for safekeeping'. Best analysis?",
    choices: [
      "Agree: it is client money so you can keep it as long as they want",
      "Agree if the client signs a waiver",
      "You must return client money promptly unless there is a proper reason to hold it; client account is not a long-term banking facility",
      "Move it to office account to simplify"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client money should be returned promptly when there is no longer a proper reason to hold it. Client account cannot be used as a deposit facility.",
      whyWrong: [
        "Client status does not justify indefinite holding without proper reason.",
        "Waivers do not turn client account into a bank.",
        "—",
        "Office account would be misappropriation."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — third-party funds and proper purpose",
    q: "A family member transfers £10,000 to your client account to help a client pay a litigation settlement. The matter is ongoing. Best analysis?",
    choices: [
      "Treat as office money because it came from a third party",
      "Treat as client money held for the matter, with proper records and authority",
      "Refuse to accept any third-party funds ever",
      "Put it into office account then transfer later"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Money received for a client matter (even from a third party) is typically client money and must be handled in accordance with the accounts rules, with proper records and safeguards.",
      whyWrong: [
        "Source does not make it office money.",
        "—",
        "Third-party funds can be accepted if compliant and properly documented.",
        "Office account use would be improper."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — residual balance",
    q: "A matter ends with £12 left in client account. You cannot contact the client. What is the best approach?",
    choices: [
      "Transfer it to office account as profit",
      "Donate it to charity immediately",
      "Take steps to trace/return it; only use residual balance procedures if conditions are met",
      "Leave it indefinitely and forget about it"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Residual balances must be dealt with properly—attempt to return, keep records, and only apply residual balance rules where applicable.",
      whyWrong: [
        "Transferring to office is misappropriation.",
        "Charity donation requires compliance with residual balance rules; not automatic.",
        "—",
        "Leaving indefinitely is poor control and can breach rules."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — client account shortage",
    q: "A reconciliation shows the client account is £5,000 short due to an accounting error. Best analysis?",
    choices: [
      "Ignore it; it will correct itself next month",
      "Wait until the annual audit",
      "Investigate immediately and replace the shortage promptly; shortages are serious and may trigger reporting duties",
      "Transfer £5,000 from another client ledger to cover it temporarily"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Shortfalls in client account are serious. You must investigate, remedy promptly (often from office funds), and consider reporting depending on circumstances.",
      whyWrong: [
        "Ignoring is unacceptable.",
        "Delay increases risk and breach.",
        "—",
        "Using other clients’ money is misappropriation."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — suspense account misuse",
    q: "You receive £8,000 into client account but do not know which matter it relates to. A colleague says to hold it in a suspense ledger for months. Best analysis?",
    choices: [
      "Fine to leave indefinitely",
      "Transfer it to office account until identified",
      "You should investigate promptly to identify the owner/purpose and allocate correctly; prolonged suspense holding is risky",
      "Return it to the sender without checking"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Unidentified receipts require prompt investigation and correct allocation/return. Prolonged suspense balances are a control risk.",
      whyWrong: [
        "Indefinite suspense is poor control.",
        "Office transfer is improper.",
        "—",
        "Returning without checks can misdirect funds."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — client money used for bank charges",
    q: "Your bank charges monthly fees on the client account. A partner suggests paying them out of client balances proportionately. Best analysis?",
    choices: [
      "Fine because it’s a client account cost",
      "Fine if the amounts are tiny",
      "Not generally acceptable unless the rules and client agreements allow; firms usually bear bank charges, not clients by default",
      "Fine if you tell clients after the event"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client money cannot be used for firm overheads/bank charges unless there is proper basis/permission. The default is the firm bears its own banking costs.",
      whyWrong: [
        "Client account costs are not automatically chargeable to clients.",
        "Amount does not create permission.",
        "—",
        "After-the-event notice doesn’t cure lack of authority."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — office money paid into client account",
    q: "Your cashier accidentally pays an invoice for office rent into the client account. Best analysis?",
    choices: [
      "Leave it there to build a buffer",
      "Use it to cover client account shortages later",
      "Correct promptly: client account should not contain office money except very limited permitted circumstances",
      "Transfer it to a partner’s personal account to fix it quickly"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client account must not be used to hold office funds. Errors should be corrected promptly with proper records.",
      whyWrong: [
        "Buffers are improper mixing.",
        "Using it later entrenches misuse.",
        "—",
        "Personal accounts are not appropriate."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — paying a third party",
    q: "You hold client money to pay a surveyor’s invoice. The client disputes the invoice and says do not pay. The surveyor demands payment. Best analysis?",
    choices: [
      "Pay the surveyor because you promised",
      "Pay half as a compromise",
      "Do not pay without client authority unless there is a clear legal basis; hold and resolve dispute appropriately",
      "Transfer it to office account while you decide"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must only use client money with proper authority/purpose. If the client disputes payment, you generally should not pay until resolved or legally required.",
      whyWrong: [
        "Third-party demands do not override client authority.",
        "Compromise without authority is still unauthorised.",
        "—",
        "Office transfer is improper."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — client money for counsel fees",
    q: "You need to pay counsel tomorrow. Client money is held, but you have not yet told the client the amount of counsel’s fee. Best analysis?",
    choices: [
      "Pay counsel anyway; it’s urgent",
      "Pay counsel if you think the client will agree",
      "You should ensure proper authority/notification and record before using client money; do not treat urgency as permission",
      "Transfer money to office then pay counsel"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client money should only be used for its intended purpose with proper authority and records. Urgency does not waive controls.",
      whyWrong: [
        "Urgency does not remove requirements.",
        "Assumptions are not authority.",
        "—",
        "Office transfer may be improper and breaks audit trail."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — holding money for third party (stakeholder)",
    q: "Two parties to a settlement ask you to hold £100,000 as stakeholder pending completion of conditions. Best analysis?",
    choices: [
      "This is office money because it’s not for your client",
      "This can be client money (held as stakeholder) if connected to legal services, with clear terms and records",
      "You must refuse all stakeholder roles",
      "You can put it in office account if both parties agree"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Stakeholder funds held in connection with legal services are typically client money and must be handled with clear terms, records, and compliance.",
      whyWrong: [
        "Stakeholder funds are not automatically office money.",
        "—",
        "Stakeholder roles are allowed but must be managed properly.",
        "Agreement does not justify misclassification."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — withdrawing costs without bill",
    q: "You transfer money from client account to office account for costs because 'it’s clearly earned', but you have not delivered any bill/notification. Best analysis?",
    choices: [
      "Acceptable if the file note says costs are due",
      "Acceptable if a partner approves",
      "Breach risk: costs transfers usually require bill or written notification and proper entitlement",
      "Acceptable if the client does not complain"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Controls on moving client money for costs protect clients. Without proper notification/authority, the transfer is improper.",
      whyWrong: [
        "File notes do not replace formal requirements.",
        "Partner approval does not create entitlement.",
        "—",
        "Silence does not make it compliant."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — promptly paying out client money",
    q: "A matter completes and you hold £5,000 surplus belonging to the client. Best practice?",
    choices: [
      "Keep it as a buffer against future errors",
      "Keep it until the client asks for it",
      "Return it promptly unless there is a proper reason to hold it",
      "Transfer it to office account to reduce admin"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client money should be returned promptly when no longer needed for the matter.",
      whyWrong: [
        "Buffers are misuse of client money.",
        "Waiting unnecessarily is poor control.",
        "—",
        "Office transfer is misappropriation."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — interest on client money",
    q: "A client asks about interest on money held in client account. Most accurate?",
    choices: [
      "Clients are never entitled to interest",
      "Clients are always entitled to all interest earned",
      "Interest depends on firm policy/rules and what is fair; firms typically have a written interest policy that must be applied",
      "Interest is decided by the bank, not the firm"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Firms must have and apply an interest policy consistent with the rules and fairness. It’s not automatically 'never' or 'all'.",
      whyWrong: [
        "That’s too absolute.",
        "That’s too absolute.",
        "—",
        "The firm’s policy/rules govern allocation, not just the bank."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — office account payment into client ledger",
    q: "You receive a payment of your fees from a client directly into the client account by mistake. Best analysis?",
    choices: [
      "Leave it in client account permanently",
      "Treat it as client money",
      "Identify it as office money and transfer to office account promptly with proper record",
      "Refund it and ask the client to pay again"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Fees are office money. If paid into client account by mistake, correct promptly and keep proper records.",
      whyWrong: [
        "Leaving it mixes funds.",
        "Fees are not client money merely because of the account used.",
        "—",
        "Refunding may be unnecessary and adds risk; correction is usually better."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — improper 'rounding'",
    q: "Your cashier 'rounds up' small disbursements and keeps the difference in office account to cover admin time. Best analysis?",
    choices: [
      "Acceptable if differences are small",
      "Acceptable if clients never notice",
      "Improper: you must account accurately; taking extra without transparency/authority is misconduct",
      "Acceptable if you call it a 'processing fee' after the event"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Financial integrity requires accuracy and transparency. Taking money without proper basis is improper.",
      whyWrong: [
        "Small amounts still matter in trust accounting.",
        "Detection risk is irrelevant.",
        "—",
        "After-the-event labelling doesn’t create authority."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — using client account to pay firm VAT bill",
    q: "A partner asks to pay the firm’s quarterly VAT bill from client account because it’s 'temporary'. Best analysis?",
    choices: [
      "Acceptable if repaid within a week",
      "Acceptable if the accountant approves",
      "Not acceptable: firm tax liabilities are office money; paying from client funds is serious misuse",
      "Acceptable if you choose clients with large balances"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client money cannot be used to pay firm liabilities. This is a serious breach.",
      whyWrong: [
        "Repayment timing does not cure misuse.",
        "Accountant approval doesn’t legalise it.",
        "—",
        "Choosing clients worsens the breach."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — AML + accounts interaction",
    q: "A client insists on paying large sums in cash into client account for a property deal and refuses source-of-funds evidence. Best analysis?",
    choices: [
      "Accept; accounts rules are separate from AML",
      "Accept if the client signs a declaration",
      "Do not proceed until AML/CDD is satisfied; accounts compliance and AML obligations both apply",
      "Accept then ask for evidence later"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Accounts rules do not replace AML duties. You must comply with both and not accept/process funds without required checks where risk is high.",
      whyWrong: [
        "They overlap in risk management.",
        "Declarations do not replace proper checks.",
        "—",
        "Later is too late."
      ]
    }
  },

  // 9 more to make 30
  {
    topic: "Solicitors Accounts — client account used to 'store' money",
    q: "A long-standing client asks you to hold £200,000 in client account for a year because 'banks feel unsafe'. There is no ongoing legal work. Best analysis?",
    choices: [
      "Agree because they are a good client",
      "Agree if you charge a small holding fee",
      "Likely improper: client account must not be used as a banking facility absent underlying legal services",
      "Agree if the COLP approves"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client accounts are not deposit facilities. Holding money without an underlying legal matter risks serious breach regardless of client status.",
      whyWrong: [
        "Client status does not create permission.",
        "Charging a fee does not legalise misuse.",
        "—",
        "Internal approval doesn’t change the rules."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — paying costs when there is a dispute",
    q: "You deliver a bill for £5,000. The client disputes it and asks you not to transfer any money. Best analysis?",
    choices: [
      "Transfer anyway because a bill was delivered",
      "Transfer half as compromise",
      "Do not transfer disputed sums; hold appropriately and follow dispute resolution (and only transfer any undisputed part if permitted)",
      "Transfer to a partner’s personal account pending agreement"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Disputed funds should not be removed from client account. Proper handling of disputed costs is required; undisputed elements may be transferable if permitted.",
      whyWrong: [
        "A bill does not automatically authorise taking disputed sums.",
        "Compromise without authority is improper.",
        "—",
        "Personal accounts are inappropriate."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — client money held for counsel then matter ends",
    q: "You held client money to pay counsel, but the hearing is vacated and no longer needed. Best practice?",
    choices: [
      "Keep it in client account for future work",
      "Return it promptly (or apply as instructed) because there is no longer a proper reason to hold it",
      "Transfer it to office as an admin fee",
      "Leave it as residual balance indefinitely"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the purpose for holding client money ends, you should return it or deal with it promptly under proper instructions.",
      whyWrong: [
        "Future potential work is not a present proper reason.",
        "—",
        "Admin fee without authority is improper.",
        "Indefinite holding is poor control."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — misposting to wrong client ledger",
    q: "A cashier accidentally posts £3,000 belonging to Client A to Client B’s ledger and uses it to pay Client B’s bill. Best analysis?",
    choices: [
      "Not serious if corrected later",
      "Fine because both are clients",
      "Serious: it uses one client’s money for another; must be corrected immediately and treated as a breach/shortage issue",
      "Fine if the amounts are similar"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Using Client A’s money for Client B is misappropriation even if accidental. Immediate correction and investigation is required.",
      whyWrong: [
        "Delay increases harm and risk.",
        "Clients’ monies must be segregated per client; mixing is prohibited.",
        "—",
        "Similarity is irrelevant."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — partner overdraws client account",
    q: "A partner transfers money out of client account to office account before funds have cleared, creating a temporary shortfall. Best analysis?",
    choices: [
      "Fine if funds clear next day",
      "Fine if the client will not notice",
      "Serious breach: client account must not be overdrawn; shortages must be remedied promptly and controls reviewed",
      "Fine if recorded in a spreadsheet"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client account shortages/overdrafts are serious. Timing/clearance issues do not excuse breach; remedy and investigate promptly.",
      whyWrong: [
        "Next-day clearance does not cure the breach.",
        "Detection is irrelevant.",
        "—",
        "Recording does not legalise the transfer."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — sending client money to wrong bank details",
    q: "You transfer £20,000 client money to bank details emailed by 'the client', but it was a fraudster. Best analysis?",
    choices: [
      "No issue because you followed the email",
      "Only the bank is responsible",
      "Potential serious failure of controls; you must act promptly to mitigate, inform client appropriately, and review/report as required",
      "You should keep it quiet to avoid reputational harm"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client money protection requires robust verification controls. If funds are mis-sent, immediate mitigation and transparency obligations arise.",
      whyWrong: [
        "Emails can be spoofed; verification is required.",
        "Banks may help but the firm has duties too.",
        "—",
        "Concealment worsens the breach."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — accounting records and reconciliations",
    q: "Your firm has not done client account reconciliations for three months due to workload. Best analysis?",
    choices: [
      "Acceptable if there are no complaints",
      "Acceptable if partners are confident",
      "Improper: reconciliations and proper records are key controls; failure increases risk of breaches and may require escalation",
      "Acceptable if you do a big reconciliation at year-end"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Regular reconciliations are a core safeguard. Not doing them risks undetected shortfalls and client harm.",
      whyWrong: [
        "Complaints are not the standard.",
        "Confidence does not replace controls.",
        "—",
        "Year-end catch-up is not an acceptable substitute."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — office account used for client money",
    q: "A client pays £15,000 completion funds into your office account by mistake. Best analysis?",
    choices: [
      "Keep it there until completion",
      "Use it to pay office expenses then replace later",
      "Treat it as client money and transfer promptly to client account with clear records",
      "Refund it and ask the client to resend"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client money must be kept separate. If received into office account by mistake, it should be moved promptly to client account with proper accounting entries.",
      whyWrong: [
        "Keeping it mixes funds.",
        "Using it is misuse.",
        "—",
        "Refunding may be possible but prompt correct allocation is usually required."
      ]
    }
  },
  {
    topic: "Solicitors Accounts — quick spot: most fundamental rule",
    q: "Which is the most fundamental principle of solicitors accounts handling?",
    choices: [
      "Maximise interest earned on client funds",
      "Keep client money separate and only use it for proper authorised purposes",
      "Always keep at least £1,000 buffer in client account",
      "Transfer costs weekly to keep accounts tidy"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The core is safeguarding client money: separation, accurate records, and authorised use only.",
      whyWrong: [
        "Interest is secondary to safeguarding.",
        "—",
        "Buffers are often improper mixing.",
        "Tidiness doesn’t justify improper transfers."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Ethics | Chapter 8 | Solicitors Accounts",
    subtitle: "Client money, office money, and billing controls.",
    questions: questions
  };
})();
  
