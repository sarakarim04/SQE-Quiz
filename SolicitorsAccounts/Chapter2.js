(() => {
  const questions = [
    {
      "topic": "Client money definition (Rule 2.1(a))",
      "q": "You act on a conveyance. Your client transfers £35,000 to you labelled 'deposit for exchange'. How should you classify the £35,000 on receipt?",
      "choices": [
        "Office money because it relates to a transaction fee-earners are handling.",
        "Client money because it relates to regulated services delivered to a client.",
        "Not client money unless it is held for more than 48 hours.",
        "Not client money if the client emails saying it can sit in your office account.",
        "Office money because it will be paid out to the seller’s solicitors."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "It is client money under Rule 2.1(a) (money held/received relating to regulated services delivered to a client). It should be paid promptly into client account unless an exception applies.",
        "whyWrong": [
          "Being connected to a matter does not make it the firm’s money.",
          "",
          "No time-based threshold exists.",
          "A casual email doesn’t automatically create a compliant alternative arrangement; default is client account.",
          "Paying it onward doesn’t change ownership/classification on receipt."
        ]
      }
    },
    {
      "topic": "Third-party money (Rule 2.1(b))",
      "q": "You act for a buyer. The seller’s solicitors send £5,000 to you to hold to their order pending completion (stakeholder-style). How should the £5,000 be classified?",
      "choices": [
        "Office money because the sender is not your client.",
        "Client money because it is held on behalf of a third party in relation to regulated services.",
        "Not client money because stakeholder funds are always outside the Accounts Rules.",
        "Office money unless you sign a stakeholder agreement.",
        "Not client money if you keep it separate on a spreadsheet."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 2.1(b) covers money held on behalf of a third party in relation to regulated services (eg stakeholder/agent/sender’s order).",
        "whyWrong": [
          "Client money can belong to a third party, not only your client.",
          "",
          "Stakeholder-type holding is explicitly within Rule 2.1(b).",
          "Classification doesn’t depend on signing an agreement (though documents matter).",
          "Recordkeeping doesn’t replace correct classification."
        ]
      }
    },
    {
      "topic": "Specified office/appointment (Rule 2.1(c))",
      "q": "You are appointed as a deputy by the Court of Protection and receive funds to manage for the protected person. How is this money classified under the Accounts Rules?",
      "choices": [
        "Office money because it comes from the Court.",
        "Client money under Rule 2.1(c).",
        "Not client money unless it is for fees.",
        "Not client money because deputies are outside legal services regulation.",
        "Office money if held in a separate bank account."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Money received as the holder of a specified office/appointment (eg Court of Protection deputy) is client money under Rule 2.1(c).",
        "whyWrong": [
          "Source does not determine ownership or classification.",
          "",
          "Rule 2.1(c) is separate from fees.",
          "It is expressly included by the rule wording.",
          "Separate account may be required by the appointment, but the rule classification remains."
        ]
      }
    },
    {
      "topic": "Fees before billing (Rule 2.1(d))",
      "q": "A client pays you £2,000 on account of your costs at the start of a litigation matter. You have not delivered any bill or written notification of costs incurred. How should the £2,000 be treated on receipt?",
      "choices": [
        "Office money because it is 'for fees'.",
        "Client money under Rule 2.1(d) until a bill/notification is delivered.",
        "Not client money if the client signs a letter saying you can use it immediately.",
        "Office money if you put it in a separate 'fees holding' office ledger.",
        "Not client money because it is an advance payment."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Money held for your fees before delivery of a bill is client money under Rule 2.1(d).",
        "whyWrong": [
          "It becomes office money only once properly billed/notified (and transferred correctly).",
          "",
          "Client instructions do not automatically convert it into office money.",
          "Internal labels don’t change its status.",
          "Advance payments for fees are a classic Rule 2.1(d) situation."
        ]
      }
    },
    {
      "topic": "Rule 2.2 exemption (no client account needed in narrow case)",
      "q": "A firm does not operate a client account. The only money it ever receives from clients is advance payments for its fixed fees, and occasionally money to reimburse disbursements the firm is liable for. The firm tells clients in its engagement letter where and how these monies will be held. Which statement best reflects Rule 2.2?",
      "choices": [
        "The firm can never receive client money without a client account.",
        "The firm may rely on Rule 2.2 if the only client money is Rule 2.1(d) and the client is informed in advance where/how it is held.",
        "The firm can rely on Rule 2.2 even if it also receives completion monies on conveyances.",
        "Rule 2.2 applies only if the SRA grants a waiver first.",
        "Rule 2.2 applies only where the client is a business client."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 2.2 allows client money within Rule 2.1(d) to be held outside a client account if conditions are met (including informing the client in advance), and the firm doesn’t otherwise maintain a client account.",
        "whyWrong": [
          "Rule 2.2 is the express exception.",
          "",
          "Completion monies are not Rule 2.1(d) only, so the exemption fails.",
          "This is a rule-based exemption, not necessarily a waiver process.",
          "No client-type restriction like that appears in Rule 2.2."
        ]
      }
    },
    {
      "topic": "Prompt payment into client account (Rule 2.3 default)",
      "q": "You receive £10,000 of client money for a property transaction on Monday. Accounts staff plan to bank it into client account the following Monday for convenience. What is the best compliance assessment?",
      "choices": [
        "Compliant because 'promptly' means within 7 days.",
        "Compliant if the client account has sufficient float.",
        "Likely non-compliant: client money should be paid promptly into client account unless an exception applies.",
        "Compliant if recorded in the client ledger on Monday.",
        "Compliant if the COFA approves the delay."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Rule 2.3 requires client money to be paid promptly into a client account unless an exception applies. Convenience is not an exception.",
        "whyWrong": [
          "The rules do not define 'promptly' as a fixed 7-day period.",
          "Float is irrelevant to the prompt banking requirement.",
          "",
          "Ledger entry doesn’t replace correct banking.",
          "COFA approval doesn’t create an exception."
        ]
      }
    },
    {
      "topic": "Exceptions to paying into client account (Rule 2.3)",
      "q": "You receive money as a trustee of an occupational pension scheme. The scheme rules require the money to be held in a specific trustee account structure that would conflict with putting it into your firm’s client account. Which is the best view?",
      "choices": [
        "You must always pay it into the firm’s client account no matter what.",
        "You may not receive it at all.",
        "Rule 2.3 allows an exception where paying into client account would conflict with obligations tied to the specified office/appointment.",
        "You can treat it as office money.",
        "You can keep it in cash to avoid the rules."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Rule 2.3 recognises that for money falling within Rule 2.1(c), paying into client account may conflict with obligations under the specified office/appointment.",
        "whyWrong": [
          "Rule 2.3 contains this exception.",
          "Receiving money can be proper; placement may differ.",
          "",
          "It is not the firm’s money.",
          "Cash holding doesn’t solve the legal compliance issue."
        ]
      }
    },
    {
      "topic": "Legal Aid Agency payments (Rule 2.3 exception)",
      "q": "Your firm receives a payment from the Legal Aid Agency that represents your costs on a legal aid matter. What does Rule 2.3 say is permissible here?",
      "choices": [
        "It must be paid promptly into client account because all third-party payments are client money.",
        "It can be treated as office money and need not be paid into client account if it represents LAA payments for your costs.",
        "It must be split 50/50 between client and office accounts.",
        "It must be held in a TPMA.",
        "It must be returned to the client on receipt."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 2.3 lists an exception where the client money represents payments received from the Legal Aid Agency for your costs.",
        "whyWrong": [
          "Rule 2.3 expressly carves out this situation.",
          "",
          "No such split rule exists.",
          "TPMA is optional, not mandatory here.",
          "It is not money belonging to the client if it is for your costs."
        ]
      }
    },
    {
      "topic": "Written alternative arrangement (Rule 2.3(c))",
      "q": "A commercial client asks, in a signed written agreement, that you hold a stakeholder sum in an escrow-style arrangement outside your client account with a regulated third-party provider, and the arrangement is suitable for the transaction. What is the best assessment under Rule 2.3?",
      "choices": [
        "Impossible—client money must always go to client account.",
        "Possible—Rule 2.3 permits an alternative arrangement in writing with the client/third party for whom money is held.",
        "Only possible if the SRA grants a waiver.",
        "Only possible if the money is under £500.",
        "Possible only if you also pay all interest to the client."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 2.3 allows a written alternative arrangement in the individual circumstances with the client or third party for whom the money is held.",
        "whyWrong": [
          "Rule 2.3 provides for alternatives in writing.",
          "",
          "Not necessarily a waiver route if it falls within the rule.",
          "No monetary threshold in Rule 2.3(c).",
          "Interest is a separate chapter/rule set."
        ]
      }
    },
    {
      "topic": "Client account location (Rule 3.1)",
      "q": "A firm wants to open its client account at a bank branch outside England & Wales to access better services. Which is correct?",
      "choices": [
        "Allowed if clients sign a consent form.",
        "Allowed if the firm reconciles weekly.",
        "Not allowed—Rule 3.1 restricts client accounts to a bank/building society branch (or head office) in England & Wales.",
        "Allowed only for conveyancing monies.",
        "Allowed if the account name includes 'client'."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Rule 3.1 sets the location requirement for maintaining a client account in England & Wales.",
        "whyWrong": [
          "Consent does not override Rule 3.1.",
          "Reconciliation does not change location rules.",
          "",
          "Rule 3.1 is not limited by practice area.",
          "Naming is required, but does not fix location."
        ]
      }
    },
    {
      "topic": "Client account naming (Rule 3.2)",
      "q": "A firm opens an account called 'Blue Oak Solicitors – Stakeholder Account' to hold client money. What is the problem, if any?",
      "choices": [
        "No problem if it is used only for stakeholder money.",
        "It must include the firm name and the word 'client' to distinguish it.",
        "It must include the client’s name, not the firm name.",
        "It is compliant if the bank confirms it is ring-fenced.",
        "It is compliant if no interest is earned."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 3.2 requires the client account name to include the authorised body’s name and the word 'client'.",
        "whyWrong": [
          "Stakeholder use does not remove naming requirements.",
          "",
          "The rule requires the firm name + 'client'.",
          "Bank understanding doesn’t replace rule compliance.",
          "Interest is irrelevant to naming."
        ]
      }
    },
    {
      "topic": "No banking facilities (Rule 3.3)",
      "q": "A client asks you to hold £80,000 in your client account purely so they can show 'proof of funds'. You are not instructed on any legal work yet. What is the key issue?",
      "choices": [
        "No issue—client account is the safest place for any client cash.",
        "Issue—Rule 3.3 prohibits using a client account to provide banking facilities.",
        "No issue if you charge a handling fee.",
        "No issue if you hold it for fewer than 14 days.",
        "No issue if you record it in the client ledger."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 3.3 prohibits using the client account to provide banking facilities to clients/third parties.",
        "whyWrong": [
          "Safety does not justify prohibited use.",
          "",
          "Charging doesn’t remove the prohibition.",
          "No time-limit exception exists.",
          "Recordkeeping doesn’t legitimise the purpose."
        ]
      }
    },
    {
      "topic": "Availability on demand (Rule 2.4)",
      "q": "You place client money into a 90-day notice account to earn better returns. There is no written agreement with the client about restricted access. What is the best assessment?",
      "choices": [
        "Compliant because it benefits the client.",
        "Non-compliant—client money must be available on demand unless an alternative is agreed in writing.",
        "Compliant if you can access it in an emergency.",
        "Compliant if the client is a sophisticated investor.",
        "Compliant because interest is dealt with in a different chapter."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 2.4 requires availability on demand unless an alternative is agreed in writing.",
        "whyWrong": [
          "Benefit does not override Rule 2.4.",
          "",
          "Emergency access is not the same as on-demand availability.",
          "Client sophistication is irrelevant.",
          "Interest is separate, but availability is still governed by Rule 2.4."
        ]
      }
    },
    {
      "topic": "Return promptly (Rule 2.5)",
      "q": "A matter completed two months ago. £150 remains on the client ledger. There is no outstanding reason to hold it, but the firm plans to keep it until year-end to reduce admin. What should the firm do?",
      "choices": [
        "Keep it until year-end—admin efficiency is acceptable.",
        "Transfer it to office account as 'breakage'.",
        "Return it promptly because there is no longer any proper reason to hold it.",
        "Donate it to charity immediately without conditions.",
        "Move it into a separate suspense ledger indefinitely."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Rule 2.5 requires returning client money promptly once there is no proper reason to hold it.",
        "whyWrong": [
          "Convenience is not a proper reason.",
          "It remains client money.",
          "",
          "Charity route is only in prescribed circumstances (different rule set).",
          "Accounting tricks do not satisfy Rule 2.5."
        ]
      }
    },
    {
      "topic": "Client money vs office money (fees not yet billed)",
      "q": "A client pays £1,500 on account of costs. You have done some work but have not delivered any bill or written notification of costs incurred. Where should the money sit as a default approach?",
      "choices": [
        "Office account because work has started.",
        "Client account because it remains client money until billed/notified.",
        "Any account as long as you note it is 'on account'.",
        "Office account if the client is happy.",
        "A personal account of the partner for safekeeping."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Until properly billed/notified, money for fees is client money (Rule 2.1(d)) and should be handled accordingly (promptly into client account unless a valid exception).",
        "whyWrong": [
          "Work starting doesn’t convert it into office money automatically.",
          "",
          "Correct bank placement still matters.",
          "Client happiness doesn’t disapply the rules.",
          "Personal accounts are inappropriate and high risk."
        ]
      }
    },
    {
      "topic": "Mixed purpose receipt: third party damages",
      "q": "An insurer pays £20,000 in damages to your firm for your client. Your client also owes you £2,000 in fees, but you have not billed yet. How should the £20,000 be classified on receipt?",
      "choices": [
        "Office money because the client owes fees.",
        "Client money because damages belong to the client.",
        "Office money if you intend to set-off later.",
        "Not client money because it is compensation.",
        "Neither; it must go into a TPMA."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Damages received for the client are client money (Rule 2.1(a)). Any fee recovery must follow proper billing/transfer rules later.",
        "whyWrong": [
          "A debt for fees doesn’t change ownership of damages.",
          "",
          "Intended set-off doesn’t change classification at receipt.",
          "Compensation for the client is still client money.",
          "TPMA is an option, not mandatory."
        ]
      }
    },
    {
      "topic": "Third party held to sender’s order (Rule 2.1(b))",
      "q": "A lender sends mortgage advance funds to your firm stating they are to be held to the lender’s order until completion. What is the correct classification?",
      "choices": [
        "Office money because it’s from the lender, not the client.",
        "Client money because it’s held for a third party in relation to regulated services.",
        "Not client money because it is a loan.",
        "Not client money because the client will repay it.",
        "Office money if you keep it in a separate sub-account."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Money held to a third party’s order in a regulated transaction is client money under Rule 2.1(b).",
        "whyWrong": [
          "Third-party ownership is expressly covered.",
          "",
          "Loan nature doesn’t remove classification.",
          "Repayment obligation is irrelevant to holding status.",
          "Separate sub-account doesn’t convert it to office money."
        ]
      }
    },
    {
      "topic": "Written alternative arrangement + suitability",
      "q": "A client insists you hold their funds in your office account and promises 'it’s fine'. There is no written agreement and the arrangement would expose funds to firm creditors. What is the best response?",
      "choices": [
        "Follow client wishes; client autonomy is paramount.",
        "Do it only if the COFA approves.",
        "Decline; default is client account and any alternative must be properly agreed in writing and be appropriate.",
        "Do it if the client is a repeat customer.",
        "Do it if the firm keeps a spreadsheet ledger."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Rule 2.3 contemplates written alternatives, but absent a proper written arrangement (and appropriateness), you should follow the default of paying into client account promptly.",
        "whyWrong": [
          "Client wishes do not override safeguards.",
          "COFA approval doesn’t replace rule requirements.",
          "",
          "Repeat business doesn’t change compliance.",
          "Recordkeeping doesn’t fix wrong account placement."
        ]
      }
    },
    {
      "topic": "TPMA basics (money not held/received by you)",
      "q": "You arrange a TPMA where the provider receives client funds directly and makes payments directly, without you holding the funds. Which statement is most accurate?",
      "choices": [
        "Money in a TPMA is always client money under the Accounts Rules.",
        "Money in a TPMA is generally not 'client money' under the Accounts Rules because it is not held/received by you, but you still have client protection duties.",
        "Using a TPMA automatically removes all regulatory duties about safeguarding money.",
        "A TPMA can be used only if the SRA grants permission first.",
        "A TPMA can only be used for conveyancing."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "SRA guidance explains TPMA funds are not client money under the Accounts Rules because you don’t hold/receive them, but your wider safeguarding/client-interest obligations remain.",
        "whyWrong": [
          "The guidance states the opposite where you do not hold/receive the money.",
          "",
          "Duties remain under wider standards/principles.",
          "You generally notify rather than require permission (and must ensure suitability).",
          "TPMAs can be used in various contexts if appropriate."
        ]
      }
    },
    {
      "topic": "Rule 2.2 limits (when it fails)",
      "q": "A firm relies on Rule 2.2 and does not operate a client account. It then starts taking conveyancing matters and receives completion monies. What is the best assessment?",
      "choices": [
        "Still fine; Rule 2.2 covers all client money.",
        "Not fine; Rule 2.2 is only where the only client money is Rule 2.1(d). Completion monies are different.",
        "Fine if clients are informed in advance.",
        "Fine if the firm keeps those monies in a separate office account.",
        "Fine if the firm uses cash for completion monies."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 2.2 is narrow: it applies only where the only client money is fees/unpaid disbursements pre-bill. Completion monies are not within that-only category.",
        "whyWrong": [
          "Overstates the exemption.",
          "",
          "Advance info alone doesn’t expand Rule 2.2 beyond its scope.",
          "Separate office account still isn’t a client account.",
          "Cash doesn’t avoid the classification/controls."
        ]
      }
    },
    {
      "topic": "Client account = bank/building society (Rule 3.1)",
      "q": "A firm proposes holding client money in an e-money wallet account (not a bank/building society) labelled 'client funds wallet'. Which is the best compliance view?",
      "choices": [
        "Compliant if labelled 'client'.",
        "Compliant if the provider is FCA-authorised.",
        "Potentially non-compliant as a 'client account' because Rule 3.1 contemplates a bank/building society in England & Wales; a different structure would need a proper alternative arrangement/TPMA route.",
        "Compliant only if the client is a business.",
        "Compliant if the firm reconciles weekly."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Rule 3.1 defines where a client account may be maintained (bank/building society in E&W). If using other mechanisms, you must ensure you are not improperly operating outside the rule framework and consider TPMA/alternative arrangements properly.",
        "whyWrong": [
          "Label alone is not enough.",
          "FCA authorisation doesn’t automatically make it a Rule 3 client account.",
          "",
          "Client type doesn’t fix structure.",
          "Reconciliation doesn’t cure the core issue."
        ]
      }
    },
    {
      "topic": "Holding money 'to client’s order' (Rule 2.1(b))",
      "q": "A client asks you to hold £9,000 to their order while they negotiate a settlement, with the money intended to be paid to the opponent only if a settlement is reached. How should it be classified?",
      "choices": [
        "Office money because it will be used for litigation.",
        "Client money relating to regulated services delivered to the client.",
        "Not client money because it is conditional.",
        "Office money if you anticipate billing soon.",
        "Not client money if kept in a separate ledger."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Money received to be held in connection with legal services is client money under Rule 2.1(a) (and can also resemble 'to order' holding).",
        "whyWrong": [
          "Connection to a matter doesn’t make it office money.",
          "",
          "Conditional purpose doesn’t remove classification.",
          "Billing soon is irrelevant until billed/notified.",
          "Ledger choice doesn’t change status."
        ]
      }
    },
    {
      "topic": "Client money must be kept separate (link to Part 1 logic)",
      "q": "Your accounts team suggests temporarily parking client money in the office account for one day to meet payroll, then moving it back. Best assessment in Part 1 terms?",
      "choices": [
        "Acceptable if replaced within 24 hours.",
        "Acceptable if authorised by a partner.",
        "Not acceptable—client money must be segregated; it should be promptly placed in client account and not used as firm money.",
        "Acceptable if the client would not notice.",
        "Acceptable if the firm is solvent."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Part 1 sets the core approach: client money is not the firm’s money and must be handled through proper client account arrangements, not used for firm liquidity.",
        "whyWrong": [
          "No 24-hour exception.",
          "Partner approval doesn’t legitimise misuse.",
          "",
          "Detection is irrelevant.",
          "Solvency doesn’t justify breach."
        ]
      }
    },
    {
      "topic": "Prompt return when no proper reason (Rule 2.5)",
      "q": "A client matter is done. The client asks you to keep £500 in client account 'just in case I need you next year'. No work is agreed or ongoing. What should you do?",
      "choices": [
        "Keep it—client asked, so that is a proper reason.",
        "Keep it if you label it as 'retainer deposit'.",
        "Return it promptly; absent a proper reason connected to services, holding risks becoming banking facilities and breaches Rule 2.5.",
        "Move it to office account and treat it as prepaid fees.",
        "Donate it to charity immediately."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Rule 2.5 requires prompt return once there is no proper reason to hold funds; indefinite 'just in case' holding is high-risk and can drift into banking facilities.",
        "whyWrong": [
          "Client request alone doesn’t necessarily create a proper reason.",
          "Relabelling doesn’t create a real purpose.",
          "",
          "It is not office money unless properly billed/notified and transferred correctly.",
          "Charity route is only for residual balances under prescribed circumstances."
        ]
      }
    },
    {
      "topic": "Client money for disbursements (Rule 2.1(d) / Part 1 framing)",
      "q": "A client gives you £400 so you can pay an expert’s invoice next week. You have not billed the client for any costs yet. How should this £400 be treated on receipt?",
      "choices": [
        "Office money because it will pay a third-party expense.",
        "Client money (it is money held in respect of unpaid disbursements before billing).",
        "Not client money because experts are outside legal services.",
        "Office money if you intend to pay it within 7 days.",
        "Neither; it must be held in cash until the invoice arrives."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Money held for unpaid disbursements prior to billing is client money under Rule 2.1(d).",
        "whyWrong": [
          "It’s not the firm’s money yet.",
          "",
          "The rule is about what you hold/receive in the matter.",
          "Time intention doesn’t change status.",
          "Cash isn’t required and increases risk."
        ]
      }
    },
    {
      "topic": "Client account cannot be a general payments hub (Rule 3.3)",
      "q": "A client asks you to use money in client account to pay their unrelated private school fees because 'you’re safer than my bank'. What is the main issue?",
      "choices": [
        "No issue if the client signs instructions.",
        "No issue if you charge an admin fee.",
        "Issue: using the client account as a general payments hub is providing banking facilities (Rule 3.3).",
        "Issue only if the amount exceeds £500.",
        "No issue if it’s a one-off request."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Rule 3.3 prohibits using a client account to provide banking facilities, even if the client requests it.",
        "whyWrong": [
          "Instructions don’t override Rule 3.3.",
          "Charging doesn’t legalise it.",
          "",
          "No £500 threshold for banking facilities.",
          "One-off can still be a breach."
        ]
      }
    },
    {
      "topic": "Client money held for a third party (agent/stakeholder)",
      "q": "In a settlement, the defendant pays your firm £12,000 stating it is 'for onward payment to the claimant' and you are to hold it until receipt of a signed settlement agreement. Which classification best fits?",
      "choices": [
        "Office money because it is settlement-related.",
        "Client money: held in relation to regulated services, for the client/beneficiary.",
        "Not client money because the defendant is not your client.",
        "Office money if you expect to bill from it later.",
        "Not client money if held less than 3 days."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "This is money held in connection with regulated services for the client (and potentially a third-party arrangement). It is client money under Rule 2.1(a)/(b) depending on structure.",
        "whyWrong": [
          "Settlement context doesn’t make it firm money.",
          "",
          "Third-party source doesn’t remove client money status.",
          "Billing later doesn’t change status now.",
          "No short time exception."
        ]
      }
    },
    {
      "topic": "Written agreement to restrict access (Rule 2.4)",
      "q": "A client signs a written agreement that their funds will be held in a notice account requiring 30 days’ notice before withdrawal because they want higher returns and do not need immediate access. Best assessment under Rule 2.4?",
      "choices": [
        "Non-compliant—client money must always be available on demand.",
        "Compliant—Rule 2.4 allows an alternative arrangement in writing.",
        "Non-compliant unless the SRA approves the arrangement.",
        "Compliant only if the account is outside England & Wales.",
        "Compliant only if the client is a commercial client."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Rule 2.4 allows availability-on-demand to be modified by an alternative arrangement agreed in writing with the client/third party.",
        "whyWrong": [
          "Rule 2.4 expressly allows written alternatives.",
          "",
          "Not a default SRA-approval requirement under Rule 2.4.",
          "Location is governed by Rule 3.1 for client accounts.",
          "No client-type limitation."
        ]
      }
    },
    {
      "topic": "Client instructs 'hold it forever' vs Rule 2.5",
      "q": "A client says: 'Do not return any remaining balance after completion; I want you to keep it indefinitely for future matters.' No future retainer/work is agreed. What is the best compliance approach?",
      "choices": [
        "Comply—client instruction is a proper reason.",
        "Keep it if you label it as a 'future fee float'.",
        "Return it promptly unless there is a proper reason to hold it; otherwise it risks breaching Rule 2.5 and the banking facilities prohibition.",
        "Move it to office account because it’s 'future fees'.",
        "Donate it to charity immediately."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Rule 2.5 requires prompt return when there is no longer a proper reason to hold the funds; indefinite holding for convenience is risky and may amount to banking facilities.",
        "whyWrong": [
          "Instruction alone doesn’t necessarily create a proper reason under the rule.",
          "Relabelling doesn’t create a genuine basis.",
          "",
          "It isn’t office money without proper billing/notification basis.",
          "Charity route is only for prescribed residual balances."
        ]
      }
    },
    {
      "topic": "Putting it all together (Rule 2.1 + Rule 2.3 + Rule 3.3)",
      "q": "A client sends you £25,000 saying: 'Hold this in your client account while I decide whether to buy a business. I don’t need you to do anything yet.' What is the best response?",
      "choices": [
        "Accept and bank into client account—client account is always appropriate.",
        "Accept and bank into office account—there is no work yet.",
        "Decline/return unless and until there is a proper regulated-service purpose; using client account as a holding facility risks breaching Rule 3.3 and the Part 1 framework.",
        "Accept if the client signs an indemnity for the firm.",
        "Accept if you place it in a notice account to earn interest."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "Holding money with no regulated-service purpose risks turning the client account into a banking facility (Rule 3.3) and undermines the Part 1 structure of when/how client money should be held.",
        "whyWrong": [
          "Client account is not a general safe deposit facility.",
          "Office account is worse—mixes client money with firm money and lacks safeguards.",
          "",
          "Indemnities don’t fix regulatory non-compliance.",
          "Interest strategy doesn’t justify improper holding."
        ]
      }
    }
  ];


  window.quizData = {
    title: "SQE1 Solicitors Accounts | Chapter 2 | Client Money Rules",
    subtitle: "Definitions, classifications, and rule applications.",
    questions: questions
  };
})();

