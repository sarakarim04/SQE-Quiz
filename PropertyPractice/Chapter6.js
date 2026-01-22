(() => {
  const questions = [
    {
      topic: "Core structure: what a lease must contain",
      q: "A client asks what the minimum essentials are for a valid lease. Which combination best reflects the key elements you expect to see in the lease document?",
      choices: [
        "Only the rent and the landlord’s name",
        "Parties, premises (demise), term, and rent (or consideration), with sufficient certainty of what is granted",
        "A survey report and mortgage offer",
        "A title plan only",
        "Only the service charge provisions",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A lease must identify the parties, the property demised, the term, and the consideration/rent (and be sufficiently certain as to what rights/obligations are granted).",
        whyWrong: [
          "Rent and landlord name alone are insufficient.",
          "",
          "Surveys/mortgage offers are not lease essentials.",
          "A plan helps define the demise but is not the only required element.",
          "Service charge provisions are common but not the minimum essentials.",
        ],
      },
    },
    {
      topic: "Demise: what is included",
      q: "A tenant is taking a lease of a shop in a parade. The client assumes the roof is included. The lease plan shows only the ground floor unit edged red, and the lease says the demise is 'the Premises shown edged red'. What is the best interpretation?",
      choices: [
        "The roof is automatically included in every commercial lease.",
        "The roof is likely excluded unless expressly included; the demise is defined by the wording and plan, so you must check and clarify common parts/roof structure responsibility.",
        "Anything above the shop is included as a matter of law.",
        "The tenant owns the freehold of the roof once the lease is granted.",
        "The roof is included only if the tenant pays service charge.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The demise is determined by the lease’s definition and plan. If only the ground floor unit is demised, the roof/structure is usually retained by the landlord as part of the building/common parts unless stated otherwise.",
        whyWrong: [
          "There is no automatic inclusion of the roof.",
          "",
          "Vertical extent depends on the demise; it is not included 'as a matter of law'.",
          "A lease grants a term of years, not the freehold.",
          "Service charge relates to contributions, not what is demised.",
        ],
      },
    },
    {
      topic: "Rights granted: access and services",
      q: "A lease grants the tenant 'the Premises' but says nothing about rights to use the common corridor or for services to pass through risers. What is the key concern?",
      choices: [
        "No concern; rights are never needed in leases.",
        "Without express or implied rights, the tenant may lack legal rights of access/services; you should ensure the lease grants adequate rights (e.g., access, support, shelter, services).",
        "The tenant can force the landlord to grant rights after completion.",
        "Rights clauses are only needed in residential leases.",
        "Land Registry will add rights automatically on registration.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Leases normally need detailed rights provisions for access, use of common parts, and services. If missing, the tenant’s practical use may be compromised and disputes may arise.",
        whyWrong: [
          "Rights are often essential to operate the premises.",
          "",
          "Post-grant changes require landlord consent and may not be available.",
          "Rights issues are common in both commercial and residential leases.",
          "Land Registry registers what is granted; it doesn’t invent missing rights.",
        ],
      },
    },
    {
      topic: "Rights reserved: landlord’s access",
      q: "Why do leases commonly include rights reserved to the landlord (and others) to enter the premises on notice?",
      choices: [
        "So the landlord can live in the premises",
        "To allow inspection, repair, maintenance of adjoining parts/services, and compliance checks—supporting building management and the landlord’s obligations",
        "To let the landlord change the rent at will",
        "To allow the landlord to sell the tenant’s stock",
        "To remove the need for service charge",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Reserved rights commonly allow landlord entry for inspection, repair and managing the building/services—important to maintain the property and fulfil covenants.",
        whyWrong: [
          "It is not about occupation by the landlord.",
          "",
          "Rent change typically depends on review clauses, not entry rights.",
          "Entry rights don’t permit interference with tenant’s goods beyond lawful purposes.",
          "Service charge is separate and still needed for shared costs.",
        ],
      },
    },
    {
      topic: "Term and commencement",
      q: "A lease states: 'Term: 10 years from 1 March 2026.' Completion is scheduled for 15 March 2026. What is the practical consequence?",
      choices: [
        "The lease is invalid because completion is after the start date.",
        "The lease may be backdated in effect (term started on 1 March), affecting rent liability and any deadlines (e.g., break notice dates) calculated from commencement.",
        "The tenant pays no rent until completion because they weren’t in occupation.",
        "The landlord cannot charge rent for the first 14 days.",
        "The term automatically shifts to 15 March.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If the term starts before completion, obligations may run from that commencement date (subject to agreement), so rent, break windows, and other time periods may be affected.",
        whyWrong: [
          "Leases can have commencement dates different from completion; it does not automatically invalidate them.",
          "",
          "Rent and term start are contractual; occupation is relevant but does not automatically override commencement date terms.",
          "The landlord can charge rent if the lease provides for it; any apportionment is by agreement.",
          "The term doesn’t automatically shift without amendment.",
        ],
      },
    },
    {
      topic: "Rent: definition and payment",
      q: "A draft lease provides for rent payable 'quarterly in advance'. The tenant asks what this means in practice.",
      choices: [
        "Rent is paid monthly at the end of each month.",
        "Rent is paid four times a year at the start of each quarter (often on the traditional quarter days), meaning the tenant pays before the period of occupation.",
        "Rent is paid only if the landlord demands it in writing.",
        "Rent is paid only after the service charge is calculated.",
        "Rent is paid annually at the end of the year.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Quarterly in advance means the tenant pays rent at the beginning of each quarter, not at the end, which affects cashflow and apportionments.",
        whyWrong: [
          "Monthly in arrears is different.",
          "",
          "Rent is usually due per the lease terms without separate demand unless stated.",
          "Service charge is separate from rent.",
          "Annual in arrears is different.",
        ],
      },
    },
    {
      topic: "Rent review: key risk",
      q: "A 15-year lease has a rent review clause stating 'rent to be reviewed to market rent at year 5 and 10'. The tenant asks what the biggest commercial risk is.",
      choices: [
        "Rent will always go down at review.",
        "If the clause is upward-only (explicitly or effectively), rent may increase but not decrease, affecting long-term affordability.",
        "Rent review means the landlord must renovate the premises.",
        "Rent review automatically ends the lease at year 10.",
        "Rent review is irrelevant if the tenant is profitable.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Many commercial leases have upward-only or effectively upward-only reviews. The tenant’s risk is rising rent even if market falls, impacting costs over time.",
        whyWrong: [
          "Rent does not necessarily go down; it depends on drafting.",
          "",
          "Repair/renovation obligations are separate covenants.",
          "Rent review does not end the lease unless tied to a break (rare and would be explicit).",
          "Profitability does not change contractual obligations.",
        ],
      },
    },
    {
      topic: "Service charge: what it covers",
      q: "A tenant takes a lease in a multi-let building. Why is a service charge clause usually included?",
      choices: [
        "To fund the tenant’s fit-out works",
        "To allow the landlord to recover the cost of maintaining/repairing/insuring and managing the building and common parts from tenants, typically via a defined mechanism",
        "To replace the rent",
        "To pay the landlord’s income tax",
        "To compensate the tenant for business interruption",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Service charge allows the landlord to recover shared costs of services, repairs, maintenance, insurance and management from tenants in multi-let buildings.",
        whyWrong: [
          "Fit-out is typically the tenant’s cost unless incentives exist.",
          "",
          "Rent remains separate consideration.",
          "Landlord’s tax is not a recoverable service charge item unless expressly (and lawfully) provided, which is unusual.",
          "Business interruption insurance/compensation is different.",
        ],
      },
    },
    {
      topic: "Service charge: cap vs uncapped",
      q: "A retail tenant is offered a lease with an uncapped service charge. What is the tenant’s key concern?",
      choices: [
        "They will never have to pay service charge.",
        "Costs can be unpredictable and potentially very high, especially if major works are included; the tenant may seek caps/exclusions/transparency.",
        "Uncapped service charge makes the rent void.",
        "Uncapped service charge means the landlord must consult the tenant every month.",
        "Uncapped service charge only applies to residential leases.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Uncapped service charge exposes the tenant to potentially unlimited liability for building costs, so negotiation often focuses on caps, exclusions, and controls.",
        whyWrong: [
          "Uncapped means the opposite—liability can increase.",
          "",
          "Rent remains valid; it’s separate from service charge.",
          "Consultation duties depend on statute/lease and context; not monthly by default.",
          "Service charge issues arise in commercial as well as residential contexts.",
        ],
      },
    },
    {
      topic: "Repair covenant: FRI concept",
      q: "A landlord offers a lease described as 'full repairing and insuring (FRI)'. What does this usually indicate for the tenant?",
      choices: [
        "Tenant pays rent only, no other liabilities.",
        "Tenant is responsible for repairs (often including putting the premises into repair) and bears insurance cost (directly or via service charge), subject to drafting.",
        "Landlord must repair everything at their cost.",
        "Tenant owns the freehold during the term.",
        "FRI means the lease cannot be forfeited.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "FRI typically means the tenant takes repair responsibility and pays for insurance (or reimburses the landlord), which can be a substantial financial risk.",
        whyWrong: [
          "FRI is not rent-only; it’s higher liability.",
          "",
          "Landlord repair obligations may be limited in FRI structures.",
          "A lease does not transfer freehold.",
          "Forfeiture depends on breach clauses; FRI does not remove it.",
        ],
      },
    },
    {
      topic: "Repair: schedule of condition",
      q: "A tenant is worried about taking on a full repairing obligation in poor-condition premises. Which drafting tool most directly limits repair liability to the current condition?",
      choices: [
        "A rent review clause",
        "A schedule of condition attached to the lease (with repair covenant limited so tenant need not put premises into better condition than evidenced)",
        "A forfeiture clause",
        "A guarantor clause",
        "A break clause",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A schedule of condition can be used to limit repair obligations, preventing the tenant from having to put premises into better condition than at lease start (subject to wording).",
        whyWrong: [
          "Rent review affects rent, not repair scope.",
          "",
          "Forfeiture is a remedy, not a limitation on repair.",
          "A guarantor backs performance; it doesn’t limit scope.",
          "A break clause may allow early exit but doesn’t itself limit repair during the term.",
        ],
      },
    },
    {
      topic: "Insurance: who insures in multi-let",
      q: "In a multi-let office building, who typically insures the structure and common parts, and how are costs usually recovered?",
      choices: [
        "Each tenant insures the whole building directly",
        "The landlord insures the building and recovers the premium from tenants via service charge or insurance rent",
        "The local authority insures it",
        "The tenant with the largest floor area insures it for everyone",
        "No one insures; insurance is optional",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Commonly, the landlord arranges insurance for the building and recovers the cost from tenants through service charge/insurance rent mechanisms.",
        whyWrong: [
          "Individual tenant insurance of the whole building is impractical and uncommon.",
          "",
          "Local authority does not insure private buildings.",
          "Insurance responsibility is contractual, not based on tenant size by default.",
          "Insurance is typically essential and required by leases and lenders.",
        ],
      },
    },
    {
      topic: "Insurance: rent suspension",
      q: "A lease includes a rent suspension clause if premises are damaged by an insured risk. Why is this important to a tenant?",
      choices: [
        "It forces the tenant to pay double rent after repairs.",
        "It may relieve the tenant from paying rent (and possibly service charge) while the premises are unusable due to insured damage, subject to terms.",
        "It gives the tenant the right to buy the freehold.",
        "It removes the need for repair covenants.",
        "It prevents the landlord from insuring the building.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Rent suspension protects the tenant from paying for premises they cannot use following insured damage, depending on drafting and extent of unusability.",
        whyWrong: [
          "It does not typically impose double rent.",
          "",
          "Buying the freehold is unrelated.",
          "Repair covenants still apply; the clause addresses payment during damage.",
          "It does not prevent insurance; it operates alongside it.",
        ],
      },
    },
    {
      topic: "User covenant: permitted use",
      q: "A lease restricts use to 'Class E(a) retail' (or similar specified use). The tenant wants flexibility to run a café. What is the key lease drafting point?",
      choices: [
        "Use clauses never matter if planning permission exists.",
        "The permitted use covenant limits what the tenant may do contractually; they may need landlord consent/variation even if planning would allow it.",
        "The tenant can change use freely once the lease is granted.",
        "Only the local authority can restrict use.",
        "Use clauses apply only to residential leases.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Planning and lease are separate regimes. Even if planning permits, the lease may restrict contractual use, requiring consent or variation.",
        whyWrong: [
          "Planning permission doesn’t override private contract restrictions.",
          "",
          "The tenant is bound by the lease terms.",
          "Landlords can restrict use contractually; not only authorities.",
          "Use clauses are common in commercial leases.",
        ],
      },
    },
    {
      topic: "Alterations covenant: structure vs non-structure",
      q: "A tenant wants to remove an internal wall. The lease prohibits 'structural alterations' without consent and requires consent for 'non-structural alterations' not to be unreasonably withheld. What is your first step?",
      choices: [
        "Assume any internal wall is non-structural and proceed",
        "Identify whether the wall is structural (possibly via survey) and then assess what consent regime applies under the lease, advising the tenant accordingly",
        "Tell the tenant to do the works before asking",
        "Ignore the lease because planning law governs",
        "Assume landlord consent is never needed for internal works",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Whether an alteration is structural can be technical. Determine classification and then apply the lease’s consent framework; advise on approvals and risk.",
        whyWrong: [
          "You can’t safely assume structural status without evidence.",
          "",
          "Proceeding without consent risks breach and forfeiture/claims.",
          "Planning doesn’t replace contractual lease obligations.",
          "Many leases require consent for internal works.",
        ],
      },
    },
    {
      topic: "Alienation: assignment basics",
      q: "A tenant wants the right to assign the lease. The lease says 'no assignment without landlord’s consent'. What is the practical consequence?",
      choices: [
        "The tenant can assign freely; consent clauses are unenforceable.",
        "The tenant must obtain landlord consent before assigning, and the consent process and conditions will be governed by the lease and relevant statutory controls where applicable.",
        "Assignment automatically terminates the lease.",
        "Only the mortgage lender can give consent.",
        "The tenant must pay no rent after assignment regardless of terms.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A qualified covenant means consent is required. The lease and law may regulate how consent is requested and granted, and conditions may apply.",
        whyWrong: [
          "Consent clauses are common and enforceable.",
          "",
          "Assignment transfers the tenant’s interest; it doesn’t automatically end the lease.",
          "Landlord consent is typically required, not lender consent (though lender may have separate requirements).",
          "Rent liability depends on assignment terms and any continuing liability mechanisms.",
        ],
      },
    },
    {
      topic: "Underletting: typical landlord concern",
      q: "Why do landlords often restrict underletting/subletting in commercial leases?",
      choices: [
        "To ensure the tenant can’t ever share the premises with staff",
        "To control who occupies, protect investment value, and manage building use/tenant mix and risks (including ensuring rent and covenants are complied with)",
        "Because underletting is always illegal",
        "Because it automatically breaches planning law",
        "To increase SDLT",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Restrictions help landlords control occupiers, maintain tenant mix/standards, and reduce risk of default or unsuitable use affecting the building’s value.",
        whyWrong: [
          "Staff occupation is not underletting; it’s occupation by the tenant.",
          "",
          "Underletting can be lawful if permitted by the lease and law.",
          "Planning issues may arise but are not automatic; lease restrictions are contractual control.",
          "SDLT is not the purpose of alienation restrictions.",
        ],
      },
    },
    {
      topic: "Break clause: conditions",
      q: "A lease has a tenant break at year 5 'on giving 6 months’ notice and subject to full compliance with tenant covenants'. What is the major risk for the tenant?",
      choices: [
        "Break clauses always succeed if notice is served.",
        "Any minor breach (even trivial) could invalidate the break if the condition is drafted strictly, so compliance conditions can be high-risk.",
        "The landlord can’t enforce any covenant after year 5.",
        "The rent automatically halves at year 5.",
        "The tenant can break without paying rent up to the break date.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Break conditions can be strictly interpreted. A condition requiring full compliance can be risky because even minor breaches may prevent effective termination.",
        whyWrong: [
          "Notice alone may not be enough if conditions exist.",
          "",
          "Covenants remain enforceable unless lease ends.",
          "Rent doesn’t halve unless expressly reviewed/varied.",
          "Rent is typically payable up to the break date; any apportionment depends on drafting.",
        ],
      },
    },
    {
      topic: "Break: rent payment condition",
      q: "A tenant break is conditional on 'all rent due up to the break date being paid'. Rent is payable quarterly in advance, and the break date falls mid-quarter. What is the common issue?",
      choices: [
        "Tenant never has to pay rent for the quarter containing the break date.",
        "Tenant may need to pay the full quarter’s rent in advance even if the lease ends mid-quarter, unless the lease provides for apportionment; otherwise the break may fail for underpayment.",
        "Landlord must refund rent automatically.",
        "The break is invalid because it is mid-quarter.",
        "Service charge replaces rent for that quarter.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If rent is payable in advance and the break condition requires all rent due to be paid, the tenant may have to pay the whole quarter, with no automatic apportionment unless expressly stated.",
        whyWrong: [
          "Quarterly in advance usually means the full quarter’s rent is due at quarter day.",
          "",
          "Refunds/apportionment depend on drafting; not automatic.",
          "Mid-quarter break dates are possible; the issue is payment and apportionment.",
          "Service charge does not replace rent.",
        ],
      },
    },
    {
      topic: "Forfeiture clause: what it is",
      q: "A lease includes a forfeiture (re-entry) clause. What is its primary function?",
      choices: [
        "It lets the tenant end the lease whenever they like.",
        "It gives the landlord a right to terminate the lease for specified breaches (e.g., non-payment, breach of covenant), subject to legal controls.",
        "It guarantees the tenant will renew the lease.",
        "It removes the need to pay rent.",
        "It transfers the freehold to the landlord.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Forfeiture clauses allow landlords to terminate for breach, but exercise is regulated (e.g., notice requirements for breaches other than rent) and relief may be available.",
        whyWrong: [
          "Tenant termination is governed by break clauses/surrender, not forfeiture.",
          "",
          "Renewal rights are separate (e.g., security of tenure regime).",
          "Rent remains payable unless suspended/varied.",
          "Freehold is already landlord’s; forfeiture doesn’t transfer it.",
        ],
      },
    },
    {
      topic: "Contracting out security of tenure (overview)",
      q: "A landlord wants to exclude the tenant’s security of tenure rights under the Landlord and Tenant Act 1954. What must generally happen for an effective 'contracting out'?",
      choices: [
        "Nothing—security of tenure is excluded by default in all business leases.",
        "The parties must follow the statutory contracting-out procedure (including notices/declarations) before the lease is granted.",
        "The tenant must agree verbally on completion day.",
        "The landlord must register a restriction at Land Registry.",
        "The landlord must increase the rent by 10%.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "To contract out of 1954 Act security, the prescribed procedure must be followed before grant, typically involving serving notice and the tenant making the required declaration.",
        whyWrong: [
          "Security can apply by default unless validly excluded.",
          "",
          "Verbal agreement is insufficient for statutory contracting-out formalities.",
          "Land Registry restrictions are not the contracting-out mechanism.",
          "Rent level is irrelevant to statutory exclusion.",
        ],
      },
    },
    {
      topic: "Rent deposit deed (commercial)",
      q: "A landlord requires a rent deposit deed. What is the usual commercial purpose of this arrangement?",
      choices: [
        "To replace the need for rent",
        "To provide security: a sum held (often by landlord) that can be drawn on if tenant defaults, with top-up obligations",
        "To pay the tenant’s service charge",
        "To guarantee the tenant will renew under the 1954 Act",
        "To avoid VAT on rent",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A rent deposit provides the landlord with security against tenant default, often with conditions for drawdown and top-up during the term.",
        whyWrong: [
          "Rent remains payable; deposit is security, not substitution.",
          "",
          "Service charge is separate.",
          "Renewal rights are separate from deposits.",
          "VAT treatment depends on option to tax and other factors; deposit doesn’t 'avoid VAT'.",
        ],
      },
    },
    {
      topic: "VAT clause (commercial lease overview)",
      q: "A lease states: 'Rent is exclusive of VAT which the tenant must pay if chargeable.' Why is this clause important?",
      choices: [
        "Because VAT always applies to all rents in England.",
        "Because if the landlord has opted to tax, VAT may be chargeable on rent and other sums, increasing the tenant’s total cost.",
        "Because it makes the lease shorter.",
        "Because it removes the service charge.",
        "Because it guarantees the tenant can assign.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "VAT may be chargeable on rent if the landlord has opted to tax; the clause allocates responsibility so tenant bears VAT in addition to rent where applicable.",
        whyWrong: [
          "VAT is not automatically chargeable on all rents; it depends on tax status/option to tax.",
          "",
          "VAT clauses do not affect the term length.",
          "VAT is separate from service charge mechanisms.",
          "VAT does not confer assignment rights.",
        ],
      },
    },
    {
      topic: "Yielding up: end of term obligations",
      q: "A lease includes a 'yielding up' clause requiring the tenant to return the premises 'in repair and condition required by this lease'. Why does this matter at lease end?",
      choices: [
        "It means the tenant gets compensation for improvements automatically.",
        "It can support claims for dilapidations if the premises are not left in the required repair/condition, potentially costing the tenant significant sums.",
        "It cancels the rent review.",
        "It makes the lease a licence.",
        "It removes any requirement to comply with alterations clauses.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Yielding up ties into repair obligations and can underpin dilapidations claims, which can be significant at expiry or termination.",
        whyWrong: [
          "Compensation is not automatic; depends on agreement/statute and lease terms.",
          "",
          "Rent review is separate.",
          "Yielding up does not change the legal nature of a lease.",
          "Alterations obligations may still affect reinstatement/yielding up duties.",
        ],
      },
    },
    {
      topic: "Reinstatement of alterations",
      q: "The tenant obtained landlord consent for alterations, but the licence says the landlord may require reinstatement at lease end. What is the key consequence?",
      choices: [
        "Reinstatement clauses are never enforceable.",
        "The tenant may have to remove alterations and restore the premises, adding significant cost—so the tenant must factor this into negotiations and exit planning.",
        "It means the tenant owns the alterations as a separate title.",
        "It replaces the service charge.",
        "It prevents forfeiture.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Landlords often reserve a right to require reinstatement. Tenants must budget for potential reinstatement costs and ensure the licence terms are understood.",
        whyWrong: [
          "Reinstatement obligations can be enforceable if properly drafted.",
          "",
          "Alterations don’t create a separate title.",
          "Service charge is unrelated.",
          "Forfeiture rights are separate.",
        ],
      },
    },
    {
      topic: "Quiet enjoyment",
      q: "A tenant complains the landlord is repeatedly entering the premises without notice to show prospective tenants. Which lease covenant is most directly engaged?",
      choices: [
        "The landlord’s covenant for quiet enjoyment (subject to reserved rights of entry)",
        "The tenant’s repairing covenant",
        "The rent review clause",
        "The service charge clause",
        "The break clause",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Quiet enjoyment protects the tenant’s lawful use without substantial interference by the landlord, subject to any express rights of entry in the lease.",
        whyWrong: [
          "",
          "Repair covenants concern maintenance, not landlord interference.",
          "Rent review concerns rent setting, not access disruption.",
          "Service charge concerns cost recovery, not interference.",
          "Break clauses concern termination rights.",
        ],
      },
    },
    {
      topic: "Alienation: authorised guarantee agreement (AGA) concept",
      q: "A lease says landlord consent to assignment may require the outgoing tenant to enter an AGA. What is the key effect for the outgoing tenant?",
      choices: [
        "They have no continuing obligations after assignment.",
        "They may guarantee the assignee’s performance of tenant covenants for the period of the assignee’s occupation, creating ongoing contingent liability.",
        "They immediately regain the lease if the assignee pays late once.",
        "They become landlord under the lease.",
        "They can ignore rent arrears after assignment.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An AGA can keep the outgoing tenant on the hook as guarantor for the assignee, meaning potential liability continues after assignment.",
        whyWrong: [
          "Without an AGA, liability may still persist depending on regime/lease, but the clause indicates potential ongoing liability.",
          "",
          "AGA doesn’t automatically revert the lease for one late payment.",
          "Outgoing tenant does not become the landlord.",
          "Rent arrears can still be pursued depending on timing and liabilities.",
        ],
      },
    },
    {
      topic: "Definition clauses: importance",
      q: "Why do leases usually begin with detailed definitions (e.g., 'Premises', 'Building', 'Common Parts', 'Service Charge')?",
      choices: [
        "To make the lease longer for no reason",
        "To ensure key obligations and rights apply with precision and reduce ambiguity in interpretation throughout the lease",
        "Because Land Registry refuses leases without definitions",
        "Because definitions replace the need for plans",
        "Because definitions prevent rent review",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Definitions create consistency and clarity. They are crucial to interpreting obligations like repair, service charge, rights, and insurance without ambiguity.",
        whyWrong: [
          "They serve a real drafting purpose.",
          "",
          "Land Registry does not impose a universal definition requirement, though clarity is essential.",
          "Plans remain important for defining physical extent; definitions complement plans.",
          "Definitions do not prevent rent review.",
        ],
      },
    },
    {
      topic: "Lease plan: Land Registry standard (overview)",
      q: "A tenant is taking a lease that will be registered. Why is the lease plan important?",
      choices: [
        "It only helps the estate agent market the property.",
        "A clear plan is usually required to identify the demised premises for registration and to avoid boundary/demise disputes.",
        "Plans are optional and never used by Land Registry.",
        "It replaces the need for a written description of the premises.",
        "It determines whether VAT is payable.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registered leases need sufficient certainty of the extent. A compliant plan helps satisfy registration requirements and reduces disputes about what is included.",
        whyWrong: [
          "Marketing is not the legal function.",
          "",
          "Plans are commonly required/expected for registrable leases.",
          "Written description still matters; the plan supports it.",
          "VAT is unrelated to the plan.",
        ],
      },
    },
    {
      topic: "Rent and other sums: 'as rent' wording",
      q: "A clause says service charge and insurance rent are payable 'as rent'. What is the main practical consequence?",
      choices: [
        "It means those sums are optional.",
        "It can give the landlord stronger remedies (including potentially forfeiture for non-payment) because they are treated similarly to rent, subject to law and drafting.",
        "It automatically caps service charge.",
        "It converts the lease into a licence.",
        "It removes the need for a rent review clause.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Making sums payable 'as rent' can extend landlord remedies (including forfeiture triggers) to those sums, increasing tenant risk for non-payment.",
        whyWrong: [
          "It does not make payment optional.",
          "",
          "It does not cap amounts.",
          "It does not change the legal nature of the grant.",
          "Rent review is separate.",
        ],
      },
    },
    {
      topic: "Guarantor clause",
      q: "A landlord requires a personal guarantor for a new tenant company. What is the landlord seeking to achieve?",
      choices: [
        "To ensure the tenant never assigns the lease",
        "To obtain additional security: if the tenant defaults, the guarantor can be pursued for rent and other liabilities (subject to the guarantee terms).",
        "To reduce the rent review increases",
        "To avoid insuring the building",
        "To prevent planning enforcement",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A guarantor strengthens the landlord’s position by providing another party to pursue if the tenant defaults, improving credit security.",
        whyWrong: [
          "Guarantees do not inherently prohibit assignment; that is dealt with by alienation clauses.",
          "",
          "Guarantees do not control rent review.",
          "Insurance is separate.",
          "Planning is separate.",
        ],
      },
    },
    {
      topic: "Contractual vs statutory rights",
      q: "A tenant says: 'The lease allows me to do it, so planning permission isn’t needed.' What is the correct response?",
      choices: [
        "They are right—lease permission overrides planning law.",
        "Lease and statute are separate: even if the lease permits, the tenant must still comply with planning/building regulations and other statutory controls.",
        "If the lease permits, all statutory requirements are waived.",
        "Planning only applies to freehold owners.",
        "Planning is only relevant at lease renewal.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A lease is a private contract. Statutory regimes (planning, building regs, licensing) still apply regardless of what the lease says.",
        whyWrong: [
          "Private agreements do not override public law requirements.",
          "",
          "There is no general waiver of statute by lease terms.",
          "Tenants can require planning permission for their use/works.",
          "Planning is relevant during the term when changes are made.",
        ],
      },
    },
    {
      topic: "Landlord covenant: title to grant",
      q: "A tenant asks what it means that the landlord grants the lease with 'full title guarantee'. In lease context, what does this mainly indicate?",
      choices: [
        "The landlord guarantees the tenant will make a profit.",
        "The landlord gives implied covenants about its right to grant the lease and about freedom from encumbrances it has created, subject to context and drafting.",
        "The landlord guarantees no service charge will be payable.",
        "The landlord guarantees the lease will never be forfeited.",
        "It means the tenant owns the freehold.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Full title guarantee generally implies covenants about the landlord’s right to grant and that it has not itself created undisclosed encumbrances, giving the tenant better assurance.",
        whyWrong: [
          "Profit is a commercial outcome, not a title covenant.",
          "",
          "Service charge depends on lease terms; title guarantee does not remove it.",
          "Forfeiture depends on breach and clause; not removed by title guarantee.",
          "A lease does not transfer freehold ownership.",
        ],
      },
    },
  ];

  window.quizData = {
    title: "Property Practice — Chapter 6: Structure and content of a lease",
    subtitle:
      "30 SQE-style scenario MCQs (parties, demise, term, rent, service charge, repair, insurance, alterations, alienation, user, forfeiture, break clauses, security of tenure basics, LTA 1987/1993 flags).",
    questions: questions,
  };
})();
