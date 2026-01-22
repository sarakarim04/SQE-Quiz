(() => {
  const questions = [
    {
      topic: "Draft contract: key components",
      q: "You receive a seller’s draft contract for a registered freehold sale. Which set of documents most typically accompanies the draft contract as part of the contract package?",
      choices: [
        "Mortgage offer, valuation report, and lender’s instructions",
        "Official copies of the register and title plan, protocol forms (e.g., TA6/TA10), and any supporting title documents referred to",
        "OS1 priority search and K16 bankruptcy search",
        "AP1 application form and SDLT return",
        "Buyer’s survey report and buildings insurance policy",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The seller’s contract pack typically includes the draft contract, official copies (and filed deeds as needed), protocol forms like TA6/TA10, and supporting documents referenced in the title.",
        whyWrong: [
          "Mortgage offer/valuation/lender instructions are buyer/lender-side documents.",
          "",
          "OS1 and K16 are usually buyer-side pre-completion searches, not part of seller’s pack.",
          "AP1/SDLT are buyer post-completion steps.",
          "Survey/insurance are buyer-side due diligence, not seller’s pack items.",
        ],
      },
    },
    {
      topic: "Standard Conditions of Sale: function",
      q: "A buyer asks why the contract refers to the Standard Conditions of Sale. What is the best explanation?",
      choices: [
        "They are non-binding guidance only.",
        "They provide the core standard terms (e.g., risk, title matters, completion mechanics, remedies) that apply unless varied by special conditions.",
        "They only apply to commercial property.",
        "They replace the need to negotiate any special conditions.",
        "They are the Land Registry rules for registration.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Standard Conditions set default contractual rules on key issues like risk, completion, and remedies, and can be modified by special conditions.",
        whyWrong: [
          "They are incorporated as binding terms when referenced in the contract.",
          "",
          "They are commonly used in residential conveyancing and can be adapted.",
          "Special conditions may still be needed to reflect the deal-specific arrangements.",
          "Land Registry rules are separate from contract conditions.",
        ],
      },
    },
    {
      topic: "Special conditions: overriding standard terms",
      q: "The draft contract includes a special condition stating the buyer 'accepts the property subject to all matters whether discoverable or not'. Why is this a red flag for a buyer?",
      choices: [
        "It gives the buyer more rights than usual.",
        "It can shift unknown risk to the buyer beyond what is normally accepted, potentially undermining the effect of searches/enquiries and the seller’s disclosure obligations.",
        "It guarantees the seller has perfect title.",
        "It only affects the purchase price, not the title.",
        "It is legally meaningless and can be ignored.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A broadly drafted 'subject to all matters' clause can allocate undisclosed risk to the buyer, which may be unacceptable to the buyer or lender and should be negotiated/limited.",
        whyWrong: [
          "It generally protects the seller, not the buyer.",
          "",
          "It is not a guarantee of perfect title; it’s often the opposite.",
          "It can affect title risk and remedies, not only price.",
          "Special conditions can be legally effective if properly incorporated.",
        ],
      },
    },
    {
      topic: "Title guarantee in the contract",
      q: "The seller is a personal representative selling a deceased’s property and proposes 'limited title guarantee'. What is the best buyer-side approach at contract stage?",
      choices: [
        "Insist on full title guarantee in every case or refuse to act.",
        "Accept limited title guarantee as often appropriate for PRs, but ensure the buyer understands the reduced covenants and increase focus on due diligence and risk management.",
        "Assume limited title guarantee means the seller has no right to sell.",
        "Treat title guarantee as irrelevant because the register is conclusive.",
        "Agree to exchange before checking any title documents because PRs are always reliable.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Limited title guarantee is common for PRs. Buyer-side should ensure the client understands reduced covenants and rely on thorough investigation and appropriate protections.",
        whyWrong: [
          "Full title guarantee may be unrealistic for PRs and not always commercially achievable.",
          "",
          "Limited title guarantee does not mean no authority to sell; it limits implied covenants.",
          "Title guarantee still matters for covenants/undisclosed encumbrances and remedies.",
          "You should not exchange without completing due diligence.",
        ],
      },
    },
    {
      topic: "Contract: deposit mechanics",
      q: "In a chain, your buyer is selling and buying. They need to use their sale deposit as the deposit on their purchase. What is the typical legal mechanism enabling this?",
      choices: [
        "The buyer pays no deposit at all in chains; deposits are optional.",
        "The seller’s solicitor agrees to hold the deposit as stakeholder and allows it to be released/used for the onward purchase by agreement (often with contractual provisions).",
        "The estate agent lends the deposit to the buyer.",
        "Deposits can only be transferred after completion.",
        "The buyer can use mortgage advance funds as the exchange deposit.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In chains, deposits are often passed up the chain via stakeholder arrangements and agreed release provisions, enabling onward exchange using the same funds.",
        whyWrong: [
          "Deposits are commonly paid; they are not automatically optional.",
          "",
          "Agents do not typically lend deposits as a conveyancing mechanism.",
          "Deposit passing commonly happens at exchange, not only after completion.",
          "Lenders generally do not release mortgage advances for exchange deposits (they fund completion).",
        ],
      },
    },
    {
      topic: "Stakeholder vs agent",
      q: "The contract says the seller’s solicitor will hold the deposit 'as stakeholder'. What does this most accurately mean?",
      choices: [
        "They hold it as the buyer’s agent and can release it to the seller immediately.",
        "They hold it neutrally and cannot release it to the seller until completion (subject to agreed exceptions), protecting both parties.",
        "They must invest it in shares for the buyer.",
        "They can keep it as their firm’s money.",
        "They must return it to the buyer on demand at any time.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Stakeholder holding is neutral: the deposit is held pending completion and cannot be released to the seller early unless the contract permits, reducing buyer risk.",
        whyWrong: [
          "Holding as agent typically allows release to the seller; stakeholder is different.",
          "",
          "Investment in shares is not required.",
          "Client money rules apply; it is not the firm’s money.",
          "After exchange, the buyer cannot demand it back unless the contract provides.",
        ],
      },
    },
    {
      topic: "Exchange: formation of binding contract",
      q: "Which statement best describes what happens at exchange of contracts in a standard conveyancing transaction?",
      choices: [
        "Legal title transfers to the buyer immediately.",
        "A binding contract is formed; completion date is fixed or determinable, and the parties become obligated to complete on the agreed terms.",
        "The buyer can still walk away freely until completion.",
        "The seller becomes obligated but the buyer does not.",
        "The Land Registry updates the register instantly.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Exchange creates a binding contract: both parties are committed to complete under agreed terms (including the completion date) and remedies apply if either defaults.",
        whyWrong: [
          "Title transfers on completion (and registration), not at exchange.",
          "",
          "After exchange, withdrawal is breach unless contract allows.",
          "Both parties are bound once exchanged.",
          "Registration is a post-completion step.",
        ],
      },
    },
    {
      topic: "Pre-exchange checklist: lender offer",
      q: "Your buyer is obtaining a mortgage. They want to exchange before the mortgage offer is issued. What is the primary contract-stage risk you must highlight?",
      choices: [
        "None—mortgage offers are guaranteed once applied for.",
        "The buyer could be bound to complete but unable to fund the purchase, risking forfeiture of deposit and damages.",
        "The seller will have to pay the buyer’s SDLT.",
        "The Land Registry will refuse to register the buyer.",
        "Buildings insurance will be invalid.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Without a mortgage offer, the buyer may not have funds to complete yet will be contractually bound after exchange, exposing them to severe default consequences.",
        whyWrong: [
          "Lenders can decline or delay offers; funding is not guaranteed.",
          "",
          "SDLT is generally the buyer’s liability.",
          "Registration issues are not the primary risk; inability to complete is.",
          "Insurance validity is separate; the key risk is contractual funding failure.",
        ],
      },
    },
    {
      topic: "Risk and insurance clause",
      q: "Under typical residential standard conditions, when does risk of damage usually pass to the buyer (absent special conditions)?",
      choices: [
        "On exchange of contracts",
        "On completion only",
        "On registration at the Land Registry",
        "On receipt of the mortgage offer",
        "On the buyer’s first viewing",
      ],
      correct: 0,
      explain: {
        whyRight:
          "In many standard residential contracts, risk passes at exchange, so the buyer is usually advised to insure from exchange (subject to the contract terms).",
        whyWrong: [
          "",
          "Completion is not always the risk point under standard terms.",
          "Registration is post-completion and not usually the contractual risk trigger.",
          "A mortgage offer does not control contractual risk allocation.",
          "A viewing has no contractual effect on risk.",
        ],
      },
    },
    {
      topic: "Contract: completion date",
      q: "The parties agree to exchange now with completion 'two weeks from exchange'. What must you ensure for the completion date term to be enforceable and workable?",
      choices: [
        "Nothing; it is always clear.",
        "That the contract provides a clear, certain completion date or a mechanism to calculate it, and that it is diarised across the chain and consistent with mortgage drawdown times.",
        "That the estate agent approves it in writing.",
        "That the Land Registry confirms availability.",
        "That the seller has moved out before exchange.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Completion must be certain or objectively determinable. You also need to ensure practical logistics (chain alignment, lender drawdown) are feasible.",
        whyWrong: [
          "Ambiguity can create disputes; certainty is required.",
          "",
          "Agents can help coordinate but do not make contractual terms enforceable.",
          "Land Registry does not control contractual completion dates.",
          "Vacant possession is typically required on completion (if agreed), not necessarily before exchange.",
        ],
      },
    },
    {
      topic: "Exchange method: telephone exchange",
      q: "Two firms agree to exchange by telephone. What is the key professional step that makes this effective?",
      choices: [
        "Both firms email the estate agent and that counts as exchange.",
        "Each solicitor holds their client’s signed part and undertakes to date/complete exchange in accordance with the agreed formula (e.g., Law Society formulae).",
        "The buyer transfers the entire purchase price at exchange.",
        "The parties meet physically to shake hands.",
        "The lender confirms exchange in writing.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Telephone exchange relies on solicitors holding signed parts and using an agreed exchange formula/undertakings to create a binding contract without physical swapping.",
        whyWrong: [
          "Estate agent notification is not exchange.",
          "",
          "Only the deposit is typically paid at exchange; full price is paid at completion.",
          "A handshake does not meet formal exchange requirements.",
          "Lender confirmation is not what effects exchange.",
        ],
      },
    },
    {
      topic: "Formulae: release of deposit",
      q: "In a chain, the seller’s solicitor asks to hold the deposit as 'agent' to release it up the chain. Why might a buyer resist this?",
      choices: [
        "Agent holding increases buyer protection compared to stakeholder.",
        "If the seller’s solicitor holds as agent, the deposit may be released to the seller, increasing risk if the seller later defaults and the buyer needs deposit recovery.",
        "Because agent holding is illegal.",
        "Because deposits can never be released in chains.",
        "Because agent holding prevents exchange from being binding.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Stakeholder holding is safer for the buyer. Agent holding can permit early release to the seller, potentially complicating deposit recovery if the transaction fails.",
        whyWrong: [
          "Agent holding usually reduces buyer protection compared to stakeholder.",
          "",
          "It’s not illegal; it’s a matter of risk allocation and agreement.",
          "Deposits are commonly released up chains by agreement and formulae.",
          "Exchange can still be binding; the issue is deposit risk.",
        ],
      },
    },
    {
      topic: "Contract: fixtures and fittings",
      q: "A buyer believes the garden shed is included. The seller says it is excluded. Which contract-stage document most commonly resolves this?",
      choices: [
        "OS1 search result",
        "TA10 Fittings and Contents Form (or equivalent schedule)",
        "AP1 form",
        "K16 bankruptcy search",
        "DS1 discharge",
      ],
      correct: 1,
      explain: {
        whyRight:
          "TA10 (or a contractual schedule) lists what is included/excluded, reducing disputes about fixtures/fittings/contents at completion.",
        whyWrong: [
          "OS1 is a priority search for registration.",
          "",
          "AP1 is for registration post-completion.",
          "K16 is a buyer bankruptcy search.",
          "DS1 is for discharge of a registered mortgage.",
        ],
      },
    },
    {
      topic: "Contract: vacant possession",
      q: "Your buyer wants to ensure the property will be empty on completion. How is this typically dealt with in the contract?",
      choices: [
        "By relying on the seller’s verbal promise",
        "By an express term/special condition requiring vacant possession on completion (and checking occupier issues via enquiries)",
        "By ordering an environmental search",
        "By completing without exchange",
        "By registering the transfer early",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Vacant possession is usually a contractual promise (often standard or special condition) supported by enquiries about occupiers and practical arrangements.",
        whyWrong: [
          "Verbal promises are unreliable and not enforceable like contract terms.",
          "",
          "Environmental searches don’t ensure physical vacancy.",
          "Completing without exchange increases risk and is unusual, especially in chains.",
          "Registration is post-completion and does not guarantee vacant possession.",
        ],
      },
    },
    {
      topic: "Contract: 'subject to' tenancies",
      q: "The seller proposes that the property is sold 'subject to the existing tenancy' but your buyer expected vacant possession. What is your key contract-stage action?",
      choices: [
        "Exchange anyway; tenancy automatically ends on completion.",
        "Clarify the position immediately, obtain tenancy documents, and ensure the contract reflects the agreed basis (vacant possession vs subject to tenancy) before exchange.",
        "Tell the buyer this is a minor issue that can be sorted after completion.",
        "Ask the estate agent to change the title register.",
        "Ignore because residential buyers can always evict quickly.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Whether the property is sold with vacant possession or subject to a tenancy is fundamental. You must investigate and reflect the agreed position in the contract before exchange.",
        whyWrong: [
          "Tenancies do not automatically end on sale.",
          "",
          "Post-completion surprises are high risk and often costly.",
          "Agents cannot change the legal nature of occupation via the register.",
          "Eviction can be slow/regulated; buyers cannot assume quick removal.",
        ],
      },
    },
    {
      topic: "Misdescription and property particulars",
      q: "The estate agent’s particulars say the property includes a parking space, but the title register and plan do not show it. How should you address this in the contract process?",
      choices: [
        "Rely on the particulars; they are legally binding.",
        "Raise enquiries and ensure the contract and transfer accurately describe what is included; if necessary, amend plan/contract or negotiate.",
        "Ignore because parking spaces are never part of title.",
        "Tell the buyer to claim compensation automatically after completion.",
        "Exchange now and check later.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Contract and title documents must match what is being sold. If a parking space is expected, it must be legally included (by title, rights, or easement) and documented.",
        whyWrong: [
          "Particulars can be inaccurate; the legal sale is governed by contract and title.",
          "",
          "Parking can be part of title or granted by rights; it must be clarified.",
          "Compensation is not automatic and depends on remedies/misrepresentation analysis.",
          "Exchanging without clarifying risks the buyer buying less than expected.",
        ],
      },
    },
    {
      topic: "Contract: property information and reliance",
      q: "The seller’s TA6 answer about flooding appears inconsistent with the environmental search. What is the most appropriate contract-stage response?",
      choices: [
        "Ignore the search; TA6 is always correct.",
        "Raise further enquiries, request clarification/evidence, advise the buyer on risk/insurability, and consider whether any contractual protections are needed before exchange.",
        "Delete the TA6 because it’s unreliable.",
        "Exchange now to lock in the price.",
        "Tell the buyer to complain to the local authority.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Inconsistencies must be investigated. You should raise enquiries and advise on practical and legal risk before exchange and consider any needed special conditions.",
        whyWrong: [
          "Search results can be highly relevant; you can’t blindly prefer TA6.",
          "",
          "TA6 should be retained; you manage risk by investigating.",
          "Exchange before resolving material risk is unsafe.",
          "Complaints do not resolve flood risk or insurability.",
        ],
      },
    },
    {
      topic: "Draft contract: title matters clause",
      q: "The contract provides that title will be deduced by 'official copies of the register'. What does this mean for the buyer’s title investigation?",
      choices: [
        "The seller must provide all original paper title deeds.",
        "The seller’s proof of title is the Land Registry official copies; investigation focuses on the register and filed documents it refers to.",
        "The buyer can’t raise enquiries about title.",
        "The buyer must accept any undisclosed interests.",
        "The buyer must apply for first registration.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For registered land, official copies are evidence of title and direct investigation to the register and any referred filed deeds, rather than original paper deeds.",
        whyWrong: [
          "Original deeds are not typically required for registered title proof (though filed deeds may be needed).",
          "",
          "Enquiries can still be raised based on what the register and other info reveals.",
          "The buyer doesn’t accept undisclosed interests automatically; the contract and law determine what binds.",
          "First registration applies to unregistered land, not registered land.",
        ],
      },
    },
    {
      topic: "Exchange readiness: client authority",
      q: "Your client says: 'Just exchange whenever you think it’s fine.' What is the best practice before exchange?",
      choices: [
        "Exchange without further contact; the solicitor decides.",
        "Ensure you have clear, specific authority to exchange on agreed terms (price, deposit, completion date, special conditions) and that the client has been advised of key risks.",
        "Wait for the estate agent to confirm authority.",
        "Ask the seller’s solicitor to decide the completion date.",
        "Exchange but leave the completion date blank.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "You must have the client’s informed authority to exchange on the final agreed terms, including completion date and any special conditions, and should document it.",
        whyWrong: [
          "Solicitors need client authority; exchanging without it risks negligence/complaints.",
          "",
          "Agents do not give legal authority for exchange.",
          "Completion date is a contractual term agreed between parties with client approval.",
          "A blank completion date risks uncertainty and unenforceability.",
        ],
      },
    },
    {
      topic: "Contract: completion on notice (common pitfall)",
      q: "The seller proposes 'completion on notice' because their onward purchase isn’t ready. Your buyer wants certainty. What is the key issue?",
      choices: [
        "Completion on notice always benefits the buyer.",
        "It can create uncertainty for the buyer’s moving and mortgage drawdown; buyer may insist on a fixed completion date or robust mechanism and protections.",
        "It is illegal in residential transactions.",
        "It automatically reduces the deposit to 5%.",
        "It prevents the contract from being binding.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Completion on notice can be workable but creates uncertainty. Buyers often need fixed dates for removals, schools, and mortgage logistics, so the mechanism must be carefully negotiated.",
        whyWrong: [
          "It often increases buyer uncertainty rather than benefiting them.",
          "",
          "It is not inherently illegal, but must be drafted properly.",
          "Deposit size is negotiable and not automatically tied to this mechanism.",
          "The contract can still be binding, but terms need certainty/mechanism.",
        ],
      },
    },
    {
      topic: "Exchange: consequences of buyer default",
      q: "After exchange, your buyer fails to complete without a contractual excuse. What is the most typical immediate consequence regarding the deposit?",
      choices: [
        "The deposit must always be returned to the buyer.",
        "The seller may be entitled to forfeit the deposit (subject to contract terms) and claim further losses/damages.",
        "The buyer can simply extend completion by 30 days automatically.",
        "The estate agent must refund the deposit.",
        "The deposit is converted into SDLT.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Buyer default after exchange typically allows the seller to forfeit the deposit and pursue damages and other contractual remedies (e.g., interest, resale losses).",
        whyWrong: [
          "Deposits are not automatically refundable after exchange if the buyer defaults.",
          "",
          "Extensions require agreement or contractual mechanism; not automatic.",
          "Agents do not control deposit remedies.",
          "Deposit is not SDLT.",
        ],
      },
    },
    {
      topic: "Exchange: seller default",
      q: "After exchange, the seller refuses to complete because they received a higher offer. What is the buyer’s most appropriate remedy focus?",
      choices: [
        "No remedy; the seller can withdraw anytime before completion.",
        "Potentially seek specific performance and/or damages depending on the contract and circumstances.",
        "Complain to the Land Registry to force completion.",
        "Claim the estate agent’s commission as compensation automatically.",
        "Demand the lender cancels the mortgage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Once exchanged, the contract is binding. A buyer may pursue damages and in some cases specific performance to compel completion, depending on facts.",
        whyWrong: [
          "Seller cannot freely withdraw after exchange without being in breach.",
          "",
          "Land Registry does not enforce completion of private contracts.",
          "Agent commission is not an automatic measure of buyer’s loss.",
          "Mortgage cancellation does not remedy seller breach.",
        ],
      },
    },
    {
      topic: "Contract: apportionments and outgoings",
      q: "On a freehold completion, which payment is most commonly apportioned between buyer and seller on completion?",
      choices: [
        "Stamp duty land tax",
        "Council tax and utilities (by agreement/practice), and occasionally service/estate rentcharges on managed estates",
        "The seller’s capital gains tax",
        "The buyer’s mortgage arrangement fee",
        "The estate agent’s commission (paid by the buyer)",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In freehold transactions, parties often apportion outgoings like council tax/utilities to the completion date, and on some estates, rentcharges/service charges may be apportioned too.",
        whyWrong: [
          "SDLT is typically a buyer liability and not apportioned between parties.",
          "",
          "CGT is seller-side and not apportioned.",
          "Mortgage fees are buyer’s arrangement with lender.",
          "Agent commission is usually paid by the seller.",
        ],
      },
    },
    {
      topic: "Contract: inclusions/exclusions dispute",
      q: "The TA10 indicates the fridge is included, but the seller’s solicitor says it was a mistake and wants it excluded. What is the safest step before exchange?",
      choices: [
        "Ignore it; TA10 cannot be changed.",
        "Amend the contractual position clearly (e.g., updated TA10 or special condition) so both parties agree what is included before exchange.",
        "Tell the buyer to remove the fridge on completion day.",
        "Exchange and argue later.",
        "Assume the buyer can sue the estate agent if missing.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Before exchange, the parties should agree and record what is included/excluded. If there is a discrepancy, amend documents/contract so the agreement is clear.",
        whyWrong: [
          "TA10 can be corrected if both parties agree, and the contract should reflect the final position.",
          "",
          "Self-help removal is not appropriate and risks dispute.",
          "Post-exchange disputes are harder to resolve and can derail completion.",
          "Agent liability is uncertain; best to fix contract terms.",
        ],
      },
    },
    {
      topic: "Exchange: part exchange / incentives (new build)",
      q: "On a developer sale, the buyer is offered 'cashback on completion' not shown in the contract. The buyer wants to exchange. What is your key professional concern?",
      choices: [
        "None—developer incentives never affect lenders.",
        "Undisclosed incentives can mislead the lender/valuer; you may need to report incentives and ensure transparency in documentation before exchange.",
        "It only matters after registration.",
        "Incentives are prohibited by the Standard Conditions.",
        "The buyer can keep it secret from the lender safely.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Lenders require disclosure of incentives as they can affect valuation and lending decision. You must ensure incentives are properly disclosed and comply with lender instructions.",
        whyWrong: [
          "Incentives can materially affect lenders’ risk/valuation.",
          "",
          "It matters pre-exchange because the buyer commits and lender conditions must be met.",
          "Standard Conditions don’t automatically prohibit incentives; disclosure is key.",
          "Concealing incentives can breach lender instructions and professional duties.",
        ],
      },
    },
    {
      topic: "Contract: planning/building regs risk allocation",
      q: "The seller proposes a special condition that the buyer accepts the property 'as is' and will not raise requisitions about lack of building regs approval for an extension. What should you do?",
      choices: [
        "Accept; buyers must always accept the property as is.",
        "Advise the buyer of risk, consider lender requirements, and negotiate (or arrange insurance/other mitigation) before exchange; do not accept unless buyer/lender agree.",
        "Tell the seller the special condition is automatically void.",
        "Exchange and then request the approvals later anyway.",
        "Ignore because building regs is not relevant to conveyancing.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A clause waiving enquiries can expose buyer to significant enforcement/marketability risk and may breach lender instructions. It should be negotiated or mitigated before exchange.",
        whyWrong: [
          "Buyers do not have to accept unknown/serious defects without negotiation.",
          "",
          "Special conditions are not automatically void; they can be effective if agreed.",
          "After exchange, leverage is reduced and the buyer is bound.",
          "Building regs compliance can be highly relevant to value and lender security.",
        ],
      },
    },
    {
      topic: "Exchange: practical steps for signed contracts",
      q: "Your client has signed the contract but you have not yet exchanged. What must you typically ensure immediately before exchange?",
      choices: [
        "That the client has already moved into the property",
        "That all agreed amendments/special conditions are incorporated, deposit arrangements are in place, and you have the client’s authority on completion date and final terms",
        "That the transfer deed is dated",
        "That registration has been completed",
        "That the seller has already redeemed their mortgage",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Before exchange you must ensure the contract is final, amendments are included, deposit is arranged, and you have clear authority on the key terms.",
        whyWrong: [
          "Moving in pre-completion is unusual and risky; not a pre-exchange requirement.",
          "",
          "The transfer is usually dated on completion, not before exchange.",
          "Registration is post-completion.",
          "Seller redemption is typically arranged for completion using proceeds.",
        ],
      },
    },
    {
      topic: "Default and notice to complete (overview)",
      q: "Completion date passes and the buyer has not completed. Which is the most accurate statement about the seller’s next contractual step in many standard contracts?",
      choices: [
        "Seller can immediately rescind with no process.",
        "Seller may serve a notice to complete making time of the essence, requiring completion within the notice period and enabling remedies if still not completed.",
        "Seller must wait 6 months automatically.",
        "Seller must apply to Land Registry for permission to complete.",
        "Seller must accept any new completion date proposed by the buyer.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Standard conditions often allow a notice to complete to be served, making time of the essence and triggering interest/other remedies if completion still fails.",
        whyWrong: [
          "Immediate rescission may not be available without following contractual steps/notice.",
          "",
          "There is no automatic 6-month wait.",
          "Land Registry does not manage contractual completion steps.",
          "Seller is not obliged to accept buyer’s proposed date.",
        ],
      },
    },
    {
      topic: "Exchange: chain coordination",
      q: "In a four-link chain, why is it common to exchange all contracts on the same day?",
      choices: [
        "Because the law requires same-day exchange for chains.",
        "To ensure each party is contractually bound and reduces the risk of one link dropping out, which could collapse the chain.",
        "Because Land Registry only processes chain exchanges on one day per week.",
        "Because deposits cannot be transferred otherwise.",
        "Because surveys expire after exchange.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Same-day chain exchange improves certainty: everyone becomes bound, reducing the risk that one link withdraws leaving others exposed.",
        whyWrong: [
          "There is no strict legal requirement; it is risk management/practice.",
          "",
          "Land Registry is not involved in exchange timing.",
          "Deposits can be managed via formulae; not the only reason.",
          "Survey expiry is not tied to exchange in that way.",
        ],
      },
    },
    {
      topic: "Contract: 'time is of the essence' misconception",
      q: "A buyer asks if completion time (e.g., 'by 2pm') is always a strict legal deadline on completion day. What is the best conveyancing response?",
      choices: [
        "Yes, missing 2pm automatically cancels the contract.",
        "Completion times are largely practical banking/undertaking arrangements; contractual default depends on failing to complete on the completion date and any notice to complete provisions, not a universal 2pm rule.",
        "No, completion can occur any time in the next week automatically.",
        "Yes, because the Land Registry requires completion by 2pm.",
        "No, because completion date is never binding.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "While firms often aim for certain times due to banking and key release, contractual default typically hinges on failing to complete on the contractual date and any notice to complete process, not a universal clock time rule.",
        whyWrong: [
          "Late-in-day completion may be problematic, but it does not automatically 'cancel' the contract solely because of 2pm.",
          "",
          "There is no automatic one-week grace period unless agreed or provided by notice mechanisms.",
          "Land Registry does not set universal completion times.",
          "The completion date is binding once exchanged.",
        ],
      },
    },
    {
      topic: "Exchange: contract race and gazumping",
      q: "Your buyer worries about being gazumped before exchange. What is the most accurate explanation?",
      choices: [
        "Gazumping is illegal and cannot happen.",
        "Until exchange, either party can generally withdraw or accept other offers; exchange creates the binding commitment that prevents gazumping in that transaction.",
        "Gazumping can only happen after completion.",
        "The estate agent must hold the offer open once accepted.",
        "Once a survey is booked, the seller must sell to your client.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Before exchange, there is usually no binding contract, so a seller may accept another offer. Exchange creates binding obligations and protects against gazumping.",
        whyWrong: [
          "Gazumping is not generally illegal in itself (though conduct can raise issues).",
          "",
          "It happens pre-exchange, not after completion.",
          "Agents can communicate offers but generally cannot force sellers to proceed without exchange.",
          "Booking a survey does not create a binding sale contract.",
        ],
      },
    },
    {
      topic: "Contract: incorporating agreed documents",
      q: "The buyer and seller agree that the seller will provide a new electrical certificate before completion. Where is the best place to document this obligation?",
      choices: [
        "In a WhatsApp message between the parties",
        "In a special condition to the contract (or clearly referenced contractual schedule) so it is enforceable",
        "Only in the estate agent’s notes",
        "Only on the completion statement",
        "In the buyer’s mortgage deed",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Agreed pre-completion obligations should be recorded in the contract (special condition/schedule) to be enforceable and clear.",
        whyWrong: [
          "Informal messages are risky and may not be incorporated into the contract.",
          "",
          "Agent notes are not necessarily contractual.",
          "Completion statements are accounting tools, not the contract’s obligation clause.",
          "Mortgage deeds govern the lender’s security, not seller obligations.",
        ],
      },
    },
    {
      topic: "Exchange: confirming buildings insurance",
      q: "Because risk commonly passes at exchange, what is a key practical instruction you should give to a buyer before exchange (absent special terms)?",
      choices: [
        "Cancel any insurance to save money until completion.",
        "Arrange buildings insurance from exchange (or confirm existing cover) in accordance with contract terms and lender requirements.",
        "Only insure after registration.",
        "Only insure if the seller asks in writing.",
        "Wait until you receive the Land Registry title information document.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If risk passes at exchange, the buyer should have buildings insurance in place from exchange, and lenders often require confirmation of cover.",
        whyWrong: [
          "Cancelling insurance increases risk at the point risk passes.",
          "",
          "Registration is too late for risk and lender requirements.",
          "Insurance is not dependent on seller request.",
          "The register is already available; insurance timing relates to contractual risk.",
        ],
      },
    },
  ];

  window.quizData = {
    title:
      "Property Practice — Chapter 4: The draft contract and exchange of contracts",
    subtitle:
      "30 SQE-style scenario MCQs (contract package, Standard Conditions, special conditions, deposit, fixtures, title/tenure clauses, risk, exchange mechanics, chains, and consequences).",

    questions: questions,
  };
})();
