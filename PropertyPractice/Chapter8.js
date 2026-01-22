(() => {
  const questions = [
    {
      topic: "Remedies overview: choosing the right tool",
      q: "A landlord’s tenant is in breach of multiple lease covenants (rent arrears, unauthorised alterations, and nuisance). What is the best initial approach when advising on remedies?",
      choices: [
        "Immediately forfeit the lease without checking anything",
        "Identify each breach, check the lease terms and statutory controls for each remedy (e.g., CRAR, s146 notice, injunction), and consider strategy/risks including waiver and relief",
        "Only sue for damages because it’s always fastest",
        "Report the tenant to the Land Registry",
        "Change the locks and sell the tenant’s goods",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Commercial remedies are breach-specific and regulated. You must match remedy to breach, check lease clauses and statutory conditions, and manage risks such as waiver and relief from forfeiture.",
        whyWrong: [
          "Forfeiture may be available but can be risky and is not always appropriate or immediately available.",
          "",
          "Damages may not be sufficient or appropriate where urgent compliance is needed.",
          "Land Registry does not enforce lease covenants as a remedy route.",
          "Self-help seizure/sale of goods is heavily regulated; misuse risks liability.",
        ],
      },
    },
    {
      topic: "Rent arrears: basic landlord options",
      q: "A commercial tenant has missed two quarters’ rent. Which is a common range of landlord remedies (subject to lease and law)?",
      choices: [
        "Only terminate the lease; nothing else is available",
        "Sue for the debt, use CRAR (if conditions met), forfeit for non-payment (subject to controls), and/or pursue guarantors/AGA/rent deposit if applicable",
        "Call the police to arrest the tenant",
        "Register a new charge at Land Registry over the tenant’s assets",
        "Force the tenant to sell the business",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Typical remedies include debt action, CRAR, forfeiture for non-payment (with restrictions), and enforcing security like guarantees, AGAs, or rent deposits, depending on documents.",
        whyWrong: [
          "Termination is not the only remedy; many options exist.",
          "",
          "Non-payment is usually civil, not criminal.",
          "Landlord can’t unilaterally register charges over tenant assets without basis.",
          "Landlord cannot force a business sale as a direct lease remedy.",
        ],
      },
    },
    {
      topic: "CRAR: what it is",
      q: "A landlord wants to recover rent arrears by taking control of goods at the premises. What remedy is this most likely to involve?",
      choices: [
        "Specific performance",
        "Commercial Rent Arrears Recovery (CRAR)",
        "Rectification",
        "Adverse possession",
        "First registration",
      ],
      correct: 1,
      explain: {
        whyRight:
          "CRAR is the statutory procedure allowing a landlord to take control of and sell tenant goods to recover rent arrears, subject to strict conditions and process.",
        whyWrong: [
          "Specific performance compels performance of obligations; not seizure of goods.",
          "",
          "Rectification corrects documents.",
          "Adverse possession relates to land ownership by possession.",
          "First registration is Land Registry procedure, not a remedy for arrears.",
        ],
      },
    },
    {
      topic: "CRAR: scope of sums recoverable",
      q: "Under CRAR, what category of sums is the landlord primarily seeking to recover?",
      choices: [
        "Any breach damages, including dilapidations",
        "Pure rent arrears (as defined for CRAR), not generally service charge or other non-rent sums unless they fall within the statutory definition",
        "The tenant’s business profits",
        "The landlord’s legal fees in all circumstances",
        "The premium originally paid on assignment",
      ],
      correct: 1,
      explain: {
        whyRight:
          "CRAR is primarily for recovery of rent arrears within the statutory definition of rent; other sums like service charge/insurance are typically outside unless structured to qualify.",
        whyWrong: [
          "Dilapidations and other breaches are not CRAR scope.",
          "",
          "CRAR does not target profits.",
          "Legal fees are not automatically recoverable via CRAR.",
          "Premiums are unrelated to CRAR arrears recovery.",
        ],
      },
    },
    {
      topic: "CRAR: premises and tenant goods",
      q: "A landlord asks whether they can use CRAR to seize goods belonging to a subtenant occupying the premises. What is the key point?",
      choices: [
        "Yes, any goods on site can be seized regardless of ownership",
        "CRAR generally targets the immediate tenant’s goods; goods of third parties are not generally available for seizure under CRAR, so ownership/rights must be checked carefully",
        "Yes, but only if the goods are insured by the landlord",
        "No, because CRAR can only be used for residential property",
        "Yes, because CRAR is automatic once rent is late",
      ],
      correct: 1,
      explain: {
        whyRight:
          "CRAR is focused on the tenant’s goods. Taking third-party goods is high risk and generally not permitted—ownership and statutory rules must be carefully followed.",
        whyWrong: [
          "Seizing third-party goods can create liability.",
          "",
          "Insurance does not determine seizure rights.",
          "CRAR is a commercial remedy, not residential.",
          "CRAR requires compliance with statutory thresholds and procedure; it’s not automatic.",
        ],
      },
    },
    {
      topic: "Forfeiture: definition",
      q: "What is forfeiture (re-entry) in a commercial lease context?",
      choices: [
        "A tenant’s right to renew the lease",
        "A landlord’s right to terminate the lease for breach (if the lease provides), exercised by peaceable re-entry or court proceedings, subject to statutory controls and relief",
        "A landlord’s right to increase rent immediately",
        "A lender’s right to repossess the freehold",
        "A tenant’s right to remove fixtures",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Forfeiture is the landlord’s remedy to end the lease for breach, typically by court or peaceable re-entry, governed by the lease and statutory controls and subject to relief.",
        whyWrong: [
          "Renewal rights are separate (1954 Act).",
          "",
          "Rent increase needs a rent review/variation, not forfeiture.",
          "Freehold repossession is different and relates to mortgages.",
          "Fixtures removal is governed by lease and law; not forfeiture.",
        ],
      },
    },
    {
      topic: "Forfeiture: non-payment of rent vs other breaches",
      q: "A tenant has breached an alterations covenant (unauthorised works) but is up to date with rent. Before forfeiting, what step is commonly required?",
      choices: [
        "Serve a section 146 notice (Law of Property Act 1925) specifying the breach and requiring remedy/compensation where appropriate (subject to exceptions)",
        "Serve an OS1 search",
        "Apply for first registration",
        "Send an SDLT return",
        "Serve a bankruptcy petition",
      ],
      correct: 0,
      explain: {
        whyRight:
          "For breaches other than non-payment of rent, the landlord generally must serve a s146 notice before forfeiture, giving details and an opportunity to remedy where remediable.",
        whyWrong: [
          "",
          "OS1 is a Land Registry priority search, irrelevant to forfeiture steps.",
          "First registration is unrelated.",
          "SDLT is unrelated.",
          "Bankruptcy is not the standard precondition for forfeiture for alterations breach.",
        ],
      },
    },
    {
      topic: "Section 146 notice: content",
      q: "Which statement best describes what a valid s146 notice must generally do?",
      choices: [
        "Demand rent arrears only",
        "Specify the particular breach complained of, require the tenant to remedy if capable of remedy, and require compensation if appropriate",
        "Terminate the lease immediately without warning",
        "Guarantee the tenant will get relief",
        "Apply automatically to the Land Registry",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A s146 notice must identify the breach and, where remediable, require remedy, and may demand compensation—forming a gateway to forfeiture (other than rent).",
        whyWrong: [
          "Rent arrears forfeiture uses different controls; s146 is mainly for other breaches.",
          "",
          "It is a notice step, not instant termination.",
          "Relief is discretionary and depends on court and facts.",
          "Land Registry is not involved in serving s146 notices.",
        ],
      },
    },
    {
      topic: "Waiver of forfeiture",
      q: "A landlord knows about a tenant’s unauthorised alterations. After that, the landlord demands and accepts the next quarter’s rent. What is the main risk?",
      choices: [
        "No risk; rent acceptance strengthens forfeiture",
        "The landlord may have waived the right to forfeit for that known breach, at least for the period up to that rent payment, so careful strategy is needed",
        "The tenant automatically gets a new lease",
        "The lease becomes contracted out of the 1954 Act",
        "The landlord must refund the rent",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Accepting rent with knowledge of a breach can waive the right to forfeit for that breach (depending on facts), so landlords must manage communications and payments carefully.",
        whyWrong: [
          "Rent acceptance can undermine forfeiture for existing known breaches.",
          "",
          "No automatic new lease arises.",
          "Security of tenure is separate from waiver.",
          "Refund is not automatic; the issue is waiver of the forfeiture right.",
        ],
      },
    },
    {
      topic: "Peaceable re-entry: risk",
      q: "A landlord wants to forfeit by changing locks while the premises are closed. What is the key legal/commercial risk to flag?",
      choices: [
        "There is no risk if the landlord owns the freehold",
        "Risk of wrongful forfeiture and potential damages if forfeiture is not validly available or procedure is mishandled; also potential confrontation/public order issues",
        "Land Registry will immediately fine the landlord",
        "The tenant will be arrested",
        "The landlord must pay SDLT",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Peaceable re-entry can be risky: if forfeiture is invalid, the landlord can face significant liability for wrongful eviction and business disruption, and practical risks arise.",
        whyWrong: [
          "Freehold ownership doesn’t remove the need to comply with forfeiture requirements.",
          "",
          "Land Registry does not police this.",
          "Arrest is not an automatic consequence; it’s primarily civil.",
          "SDLT is irrelevant.",
        ],
      },
    },
    {
      topic: "Relief from forfeiture: concept",
      q: "After forfeiture, the tenant applies for relief from forfeiture. What is relief aimed at achieving?",
      choices: [
        "A new tenancy on different terms",
        "Restoring the lease as if forfeiture had not occurred, usually on terms (e.g., paying arrears, remedying breaches) if the court grants relief",
        "Transferring the freehold to the tenant",
        "Cancelling the rent review clause permanently",
        "A criminal conviction of the landlord",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Relief is an equitable remedy allowing the court to reinstate the lease on terms, often where the tenant remedies the breach and compensates the landlord.",
        whyWrong: [
          "Relief restores the existing lease, not a new different tenancy (unless negotiated).",
          "",
          "Freehold is not transferred.",
          "Rent review remains unless altered by agreement.",
          "Relief is civil/equitable, not criminal.",
        ],
      },
    },
    {
      topic: "Remedy: damages for breach of covenant",
      q: "A tenant breaches a repair covenant causing deterioration. The landlord wants money instead of termination. What is a common remedy?",
      choices: [
        "Debt action for rent",
        "Damages for breach of covenant (and possibly a dilapidations claim), subject to evidence and any statutory limitations",
        "First registration application",
        "Rectification of the register",
        "Specific performance for rent",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For repair breach, landlords commonly claim damages (often via dilapidations) to compensate for loss/cost of putting the property into required condition, subject to limitations.",
        whyWrong: [
          "Debt is for rent, not repair breach (unless sums are defined as rent).",
          "",
          "Registration steps are irrelevant.",
          "Rectification is about Land Registry errors.",
          "Specific performance is not the usual route for rent; debt recovery is.",
        ],
      },
    },
    {
      topic: "Injunction: when appropriate",
      q: "A tenant is causing persistent nuisance to other occupiers, risking loss of other tenants. What remedy might be most suitable for urgent compliance?",
      choices: [
        "Injunction to restrain nuisance/breach (and possibly damages), depending on evidence and urgency",
        "CRAR",
        "SDLT refund claim",
        "Rectification",
        "Adverse possession",
      ],
      correct: 0,
      explain: {
        whyRight:
          "An injunction can provide urgent court-ordered restraint/compulsion to stop ongoing nuisance or breach where damages are inadequate.",
        whyWrong: [
          "",
          "CRAR is for rent arrears, not nuisance.",
          "SDLT is tax, unrelated.",
          "Rectification is Land Registry remedy.",
          "Adverse possession is unrelated.",
        ],
      },
    },
    {
      topic: "Specific performance: limits in leases",
      q: "A landlord wants a tenant to carry out repairs promised in the lease. What is the key point about specific performance here?",
      choices: [
        "Specific performance is automatic for all repair covenants",
        "Courts may be reluctant to order specific performance of repair obligations requiring ongoing supervision; damages or injunction-type relief may be more realistic depending on circumstances",
        "Specific performance is available only for rent payment",
        "Specific performance is a criminal penalty",
        "Specific performance is ordered by HM Land Registry",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Specific performance for repairs can be difficult because of ongoing supervision issues; courts often prefer damages or more tailored injunctive relief depending on facts.",
        whyWrong: [
          "It is not automatic.",
          "",
          "Rent is usually pursued as a debt, not via specific performance.",
          "Specific performance is civil/equitable, not criminal.",
          "Land Registry does not order it.",
        ],
      },
    },
    {
      topic: "Service charge recovery: lease drafting",
      q: "A landlord wants to forfeit for non-payment of service charge. The lease says service charge is payable 'as rent'. Why does this matter?",
      choices: [
        "It means service charge is optional",
        "It may allow the landlord to use remedies tied to rent (including potential forfeiture triggers) for service charge arrears, subject to statutory controls and lease wording",
        "It makes CRAR available for any sum in any case",
        "It eliminates the need for a s146 notice for alterations breaches",
        "It automatically contracts out the 1954 Act",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Making sums payable 'as rent' can broaden landlord remedies associated with rent, though statutory regimes still apply and careful analysis is needed.",
        whyWrong: [
          "It does not make sums optional.",
          "",
          "CRAR scope is statutory and not automatically expanded to any sum by drafting.",
          "s146 notices relate to forfeiture for breaches other than rent, not affected by 'as rent' drafting for service charge.",
          "1954 Act contracting out is separate.",
        ],
      },
    },
    {
      topic: "Rent deposit: landlord drawdown",
      q: "A rent deposit deed allows the landlord to draw down if the tenant is in arrears. The landlord draws down and the deed requires the tenant to 'top up' within 10 working days. Tenant does nothing. What is the landlord’s best next step?",
      choices: [
        "Ignore it; top-up clauses are unenforceable",
        "Treat as a breach of the rent deposit deed/lease (if linked) and consider enforcement options (debt claim, forfeiture if applicable, and other security routes) consistent with documents",
        "Use CRAR against the landlord’s own goods",
        "Apply for adverse possession",
        "File an AP1",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Failure to top up is a breach of the deposit arrangement (and often a lease breach). The landlord should enforce under the deed/lease—debt, notice, or forfeiture where available.",
        whyWrong: [
          "Top-up clauses can be enforceable if properly drafted.",
          "",
          "CRAR targets tenant goods for rent arrears; not relevant here.",
          "Adverse possession is irrelevant.",
          "AP1 is Land Registry registration form.",
        ],
      },
    },
    {
      topic: "Guarantor enforcement",
      q: "A tenant defaults on rent and there is a guarantor. What is the simplest enforcement route often available to the landlord (subject to guarantee terms)?",
      choices: [
        "Serve an OS1",
        "Make a demand and pursue the guarantor for the guaranteed sums as a contractual claim, potentially alongside action against the tenant",
        "Apply to the local authority for seizure",
        "File a DS1",
        "Apply for first registration",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A guarantee is a contractual promise. Landlords can demand payment from the guarantor and pursue a claim based on the guarantee terms.",
        whyWrong: [
          "OS1 is unrelated.",
          "",
          "Local authority seizure is not the route.",
          "DS1 is mortgage discharge.",
          "First registration is irrelevant.",
        ],
      },
    },
    {
      topic: "AGA: remedy on assignee default",
      q: "An outgoing tenant gave an AGA on assignment. The assignee later defaults on rent. What is the landlord’s practical remedy focus?",
      choices: [
        "Only sue the assignee; the AGA is irrelevant",
        "Pursue the assignee for arrears and also pursue the outgoing tenant under the AGA as guarantor (subject to terms), potentially requiring the outgoing tenant to take an assignment if the AGA provides",
        "Apply for rectification of title",
        "Serve a planning enforcement notice",
        "Cancel the lease automatically",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An AGA gives landlord an additional party to pursue. The landlord can claim against the outgoing tenant for the assignee’s breaches during the assignee’s tenure, subject to the AGA.",
        whyWrong: [
          "AGA is specifically designed to be relevant on assignee default.",
          "",
          "Land Registry rectification is unrelated.",
          "Planning enforcement is unrelated.",
          "Automatic cancellation is not how it works; remedies must be exercised.",
        ],
      },
    },
    {
      topic: "Waiver risk: demanding rent after breach",
      q: "A landlord discovers an unlawful subletting (a breach) and immediately sends a rent demand for the next quarter, expressly stating 'without prejudice to our rights'. Does this eliminate waiver risk?",
      choices: [
        "Yes, 'without prejudice' always prevents waiver",
        "Not necessarily; waiver turns on recognising the lease as continuing (e.g., demanding/accepting rent) with knowledge of breach—labels may not prevent waiver depending on facts",
        "Yes, because waiver only happens if rent is paid",
        "No, because waiver only applies to repair breaches",
        "Yes, because waiver is criminal law",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Waiver can occur where landlord affirms the lease (e.g., rent demand/acceptance) with knowledge of breach. 'Without prejudice' wording may not be decisive; careful handling is needed.",
        whyWrong: [
          "Labels are not automatically determinative; substance matters.",
          "",
          "Waiver can arise from acceptance and sometimes from demanding in context; risk must be assessed.",
          "Waiver can apply to many breaches giving rise to forfeiture rights.",
          "Waiver is a civil property concept, not criminal.",
        ],
      },
    },
    {
      topic: "Repudiatory breach vs forfeiture",
      q: "A landlord asks whether any breach allows immediate termination of the lease at common law without using forfeiture provisions. What is the best response?",
      choices: [
        "Yes, any breach automatically ends the lease",
        "Generally, leases are terminated using forfeiture/break/expiry; common-law termination for repudiatory breach is exceptional and fact-sensitive—typically landlords rely on forfeiture mechanisms",
        "Yes, by sending a complaint to HMRC",
        "Yes, because leases are licences",
        "No, because leases can never end",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Leases are usually terminated via contractual mechanisms (forfeiture, breaks, expiry). Treating a breach as repudiatory is rare and risky; forfeiture is the usual route.",
        whyWrong: [
          "Not every breach ends a lease; remedies depend on contract and law.",
          "",
          "HMRC is irrelevant.",
          "Leases are proprietary estates, not mere licences.",
          "Leases can end by expiry, surrender, forfeiture, etc.",
        ],
      },
    },
    {
      topic: "Self-help remedies: distress vs CRAR",
      q: "A landlord says: 'I’ll just distrain like the old days and take goods.' What is the key modern legal point?",
      choices: [
        "Distress is still the same as always",
        "Common-law distress has been replaced/regulated by CRAR for commercial rent arrears; the landlord must comply with CRAR rules rather than informal seizure",
        "Landlords can seize goods for any breach without notice",
        "Only residential landlords can use distress",
        "Distress is done by Land Registry",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Traditional distress has been replaced by CRAR in commercial contexts. Landlords must follow statutory CRAR procedures and limitations.",
        whyWrong: [
          "The regime changed—informal distress is not the modern approach.",
          "",
          "Seizing goods for any breach is not permitted; CRAR is limited and regulated.",
          "CRAR is commercial, not residential.",
          "Land Registry is unrelated.",
        ],
      },
    },
    {
      topic: "Remedy: declaration/interpretation",
      q: "Landlord and tenant dispute whether a clause permits the tenant to install external signage. There’s no urgent harm but the parties need clarity. What remedy might be appropriate?",
      choices: [
        "CRAR",
        "A court declaration/interpretation claim to determine the meaning of the lease term",
        "First registration",
        "Adverse possession",
        "A DS1",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where the main issue is contractual interpretation, a declaration can clarify rights/obligations and guide conduct without necessarily seeking damages or termination.",
        whyWrong: [
          "CRAR is for rent arrears.",
          "",
          "Registration is unrelated.",
          "Adverse possession is unrelated.",
          "DS1 is mortgage discharge.",
        ],
      },
    },
    {
      topic: "Relief from forfeiture for rent arrears: tenant strategy",
      q: "A tenant’s lease is forfeited for non-payment. The tenant can pay all arrears, interest and landlord costs quickly. Why might the tenant apply for relief?",
      choices: [
        "Relief is guaranteed if any money is paid",
        "Relief can reinstate the lease, preserving the business premises, if the tenant remedies the default promptly and meets the court’s conditions",
        "Relief gives the tenant the freehold",
        "Relief cancels future rent",
        "Relief is only available before forfeiture",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Relief can restore the lease where the tenant promptly pays arrears and compensates landlord, which is crucial for business continuity.",
        whyWrong: [
          "Relief is discretionary and fact-dependent.",
          "",
          "It does not transfer freehold.",
          "Future rent remains payable under the reinstated lease.",
          "Relief is commonly sought after forfeiture; timing and promptness matter.",
        ],
      },
    },
    {
      topic: "Remedy: set-off and withholding rent",
      q: "A tenant wants to withhold rent because the landlord failed to repair the roof. The lease is FRI with landlord responsibility for structure and no express set-off clause. What is the cautious advice?",
      choices: [
        "Withhold rent freely; it is always allowed",
        "Withholding rent is risky and may trigger forfeiture; consider the lease terms, any statutory rights, and alternative remedies (e.g., claim/injunction) rather than unilateral non-payment",
        "Stop paying rent and move out immediately",
        "Apply for adverse possession",
        "Register a restriction on the freehold title",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Withholding rent can put the tenant in breach. Unless there is a clear right of set-off/abatement, the safer approach is to pursue repair enforcement remedies.",
        whyWrong: [
          "Rent withholding is not automatically permitted.",
          "",
          "Moving out doesn’t necessarily end liability; it can worsen breach.",
          "Adverse possession is irrelevant.",
          "Restrictions at Land Registry don’t solve rent/repair disputes.",
        ],
      },
    },
    {
      topic: "Limitation on damages for disrepair (dilapidations)",
      q: "A landlord claims £500,000 for disrepair at lease end, but the property’s value would only increase by £100,000 if repaired. What key principle may limit the landlord’s recoverable damages?",
      choices: [
        "The landlord can always recover full repair cost regardless",
        "Damages for disrepair at lease end can be limited to the diminution in value of the landlord’s reversion (and may be affected by intention to redevelop), depending on law and facts",
        "Landlord must accept a new tenant instead",
        "Tenant automatically gets relief from forfeiture",
        "CRAR applies to disrepair",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In dilapidations, damages can be capped by the diminution in value of the reversion and affected by the landlord’s plans (e.g., redevelopment), depending on legal framework and evidence.",
        whyWrong: [
          "Full cost is not always recoverable.",
          "",
          "Accepting a new tenant is not a legal cap principle.",
          "Relief from forfeiture is separate from end-of-term dilapidations damages.",
          "CRAR is for rent, not disrepair.",
        ],
      },
    },
    {
      topic: "Immediate tenant remedy: landlord breach",
      q: "A landlord unlawfully blocks the tenant’s access to the premises, causing business interruption. Which tenant remedy is most directly relevant for urgent access restoration?",
      choices: [
        "Injunction requiring the landlord to restore access (and/or restraining interference), plus potential damages",
        "CRAR",
        "Forfeiture by the tenant",
        "OS1 priority search",
        "SDLT reclaim",
      ],
      correct: 0,
      explain: {
        whyRight:
          "An injunction can compel or restrain conduct quickly where access is unlawfully interfered with, and damages may also be claimed for losses.",
        whyWrong: [
          "",
          "CRAR is landlord rent arrears remedy.",
          "Tenants do not 'forfeit' the lease; forfeiture is landlord remedy.",
          "OS1 is unrelated.",
          "SDLT is unrelated.",
        ],
      },
    },
    {
      topic: "Remedy: suing for rent vs forfeiture strategy",
      q: "A landlord is considering forfeiture for rent arrears but first issues a claim for the arrears as a debt. What is a strategic risk to consider?",
      choices: [
        "Debt claims are illegal if forfeiture exists",
        "Pursuing rent as a debt may be treated as affirming the lease and could risk waiving forfeiture rights for that breach depending on timing and facts",
        "Debt claims automatically terminate the lease",
        "Debt claims guarantee tenant insolvency",
        "Debt claims must be filed at Land Registry",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Certain actions consistent with the lease continuing can waive forfeiture rights for a known breach. Strategy and sequencing matter to avoid unintended waiver.",
        whyWrong: [
          "Debt claims are not illegal; they are common.",
          "",
          "Debt claims do not automatically terminate the lease.",
          "They do not guarantee insolvency.",
          "Land Registry is not the forum for rent debt claims.",
        ],
      },
    },
    {
      topic: "Service charge dispute: landlord remedy",
      q: "A tenant disputes service charge invoices and refuses to pay. The lease states service charge is payable as rent. What is a cautious landlord approach before escalating remedies?",
      choices: [
        "Immediately seize goods without checking the dispute",
        "Review lease mechanism, ensure service charge demands are compliant (budget/accounting provisions), consider ADR, and then pursue debt/forfeiture as appropriate while managing waiver and procedural risks",
        "Delete the service charge clause",
        "Tell the tenant service charge is voluntary",
        "Apply for adverse possession",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Service charge enforcement depends on compliance with the lease machinery. Landlord should ensure demands are properly made, consider dispute resolution, and then pursue appropriate remedies.",
        whyWrong: [
          "Seizure requires CRAR conditions and is not for all sums; plus procedural risk.",
          "",
          "You cannot unilaterally delete contract terms.",
          "Service charge is contractual, not voluntary.",
          "Adverse possession is irrelevant.",
        ],
      },
    },
    {
      topic: "Forfeiture: insolvency and ipso facto",
      q: "A lease includes a forfeiture trigger on tenant insolvency. The tenant enters administration. What is a key practical/legal consideration for the landlord before re-entry?",
      choices: [
        "Landlord can always re-enter immediately with no restrictions",
        "Insolvency regimes can restrict enforcement and require court/administrator consent or impose a moratorium; the landlord must check insolvency law and lease terms carefully",
        "Land Registry must approve forfeiture",
        "The landlord must pay the tenant compensation first",
        "The tenant automatically becomes protected under the 1954 Act",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Tenant insolvency can impose moratoria and restrictions on enforcement actions. Landlord must consider insolvency law alongside lease forfeiture provisions.",
        whyWrong: [
          "There can be restrictions; immediate re-entry may be unlawful.",
          "",
          "Land Registry does not approve forfeiture steps.",
          "Compensation is not an automatic prerequisite to forfeiture.",
          "1954 Act protection is not automatically triggered by insolvency.",
        ],
      },
    },
  ];

  window.quizData = {
    title: "Property Practice — Chapter 8: Commercial leasehold remedies",
    subtitle:
      "30 SQE-style scenario MCQs (rent arrears recovery, CRAR, forfeiture, relief, s146, self-help vs court, damages, injunctions, service charge recovery, guarantors/AGA, rent deposits, and key practical steps).",
    questions: questions,
  };
})();
