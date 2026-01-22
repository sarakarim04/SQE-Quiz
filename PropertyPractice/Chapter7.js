(() => {
  const questions = [
    {
      topic: "Grant vs assignment: basic distinction",
      q: "A retailer is moving into premises where an existing tenant has 8 years left on its lease. The retailer will take over the tenant’s position and pay the existing rent. What transaction is this most likely to be?",
      choices: [
        "A grant of a new lease by the landlord",
        "An assignment of the existing lease from the current tenant to the retailer",
        "A surrender and regrant automatically",
        "A sublease by the landlord to the retailer",
        "A freehold transfer",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where the existing tenant transfers its leasehold interest and the incoming party steps into the tenant’s shoes for the remaining term, the transaction is typically an assignment.",
        whyWrong: [
          "A grant is a new lease created by the landlord.",
          "",
          "Surrender and regrant is possible but not automatic—would require specific steps/intent.",
          "A sublease would leave the current tenant as intermediate landlord; the scenario suggests a full takeover of the tenant position.",
          "No freehold is being transferred.",
        ],
      },
    },
    {
      topic: "Grant: key documents",
      q: "A landlord is granting a new 10-year lease of office space. Which document is the primary instrument creating the tenant’s leasehold estate?",
      choices: [
        "Heads of terms",
        "The lease deed (and any counterpart), executed as a deed",
        "CPSE replies",
        "An OS1 search result",
        "A licence to assign",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A new lease is created by the lease deed (executed as a deed) setting out the term, demise and covenants.",
        whyWrong: [
          "Heads of terms are usually non-binding and do not create the estate.",
          "",
          "CPSE replies are pre-contract information, not the dispositive instrument.",
          "OS1 is a buyer-side priority search for registered title, not the grant instrument.",
          "A licence to assign is for assignment, not the grant of a new lease.",
        ],
      },
    },
    {
      topic: "Assignment: what transfers",
      q: "On an assignment of a commercial lease, what is the incoming tenant usually acquiring?",
      choices: [
        "A freehold title to the building",
        "The outgoing tenant’s leasehold interest for the remainder of the term, subject to the existing lease covenants and any variations",
        "A licence to occupy only, revocable at will",
        "A new lease on entirely new terms by default",
        "Only the fixtures and fittings",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Assignment transfers the existing leasehold interest. The assignee steps into the tenant’s position and is bound by the lease covenants for the remaining term.",
        whyWrong: [
          "No freehold is transferred.",
          "",
          "An assignment is not a revocable licence.",
          "New terms require variation/surrender and regrant; not automatic.",
          "Fixtures/fittings may be transferred separately but are not the leasehold estate.",
        ],
      },
    },
    {
      topic: "Due diligence: heads of terms",
      q: "Parties agree commercial heads of terms for a new lease. Which statement is most accurate in practice?",
      choices: [
        "Heads of terms are always legally binding contracts for the lease.",
        "Heads of terms are usually 'subject to contract' and guide drafting/negotiation but do not bind unless expressly made binding (e.g., exclusivity, confidentiality).",
        "Heads of terms replace the need for a written lease deed.",
        "Heads of terms are filed at the Land Registry to create the lease.",
        "Heads of terms determine SDLT automatically.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Commercial heads of terms are typically non-binding (subject to contract) but can include binding provisions like exclusivity/confidentiality if expressly stated.",
        whyWrong: [
          "They are often not binding unless clearly intended.",
          "",
          "A lease deed is still required to create the legal estate.",
          "Land Registry registration is not done by filing heads of terms.",
          "SDLT depends on consideration and rules, not heads of terms alone.",
        ],
      },
    },
    {
      topic: "1954 Act: identifying protected business tenancy",
      q: "A tenant is negotiating a new lease of a warehouse for its business. The landlord asks whether the tenant will have security of tenure. What is the default position (absent contracting out) for a typical business lease?",
      choices: [
        "Security of tenure never applies to warehouses.",
        "Part II of the Landlord and Tenant Act 1954 may apply, giving the tenant renewal rights unless validly contracted out.",
        "Tenants automatically get a perpetual lease.",
        "Security of tenure applies only to leases under 3 years.",
        "Security of tenure depends solely on whether the rent is high.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Business tenancies can fall within the 1954 Act, giving renewal rights unless the parties follow the statutory contracting-out procedure.",
        whyWrong: [
          "It can apply to warehouses; property type is not determinative.",
          "",
          "It is not a perpetual lease; it provides a renewal framework.",
          "Leases under 3 years may have different treatment, but security can still be relevant; the default for typical granted leases is potential 1954 Act protection.",
          "Rent level alone does not determine protection.",
        ],
      },
    },
    {
      topic: "Contracting out: timing",
      q: "When must the contracting-out procedure for 1954 Act security of tenure be completed for a new lease grant?",
      choices: [
        "After completion, within 30 days",
        "Before the lease is granted (before completion), following the prescribed notice/declaration steps",
        "At any time during the term",
        "Only if the lease is registered",
        "Only after rent review",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Contracting out must be done before the lease is entered into, using the statutory procedure (notice and tenant declaration).",
        whyWrong: [
          "You cannot retrospectively contract out after grant.",
          "",
          "It cannot be done at any time; timing is critical.",
          "Registration is separate from contracting-out validity.",
          "Rent review is unrelated.",
        ],
      },
    },
    {
      topic: "Grant: agreement for lease (AFL)",
      q: "A landlord agrees to grant a lease once the tenant obtains planning permission for change of use and completes a fit-out. What document is commonly used to bind the parties before the actual lease is completed?",
      choices: [
        "A deed of variation",
        "An agreement for lease setting conditions precedent and requiring grant of the lease once satisfied",
        "A licence to assign",
        "A DS1 discharge",
        "An OS1 search",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An agreement for lease is commonly used where conditions (planning, works, funding) must be met before the lease is granted, binding parties in the interim.",
        whyWrong: [
          "A deed of variation changes an existing lease, not usually used to create a future grant framework.",
          "",
          "Licence to assign relates to assignment.",
          "DS1 is mortgage discharge.",
          "OS1 is a priority search, not a pre-grant binding contract.",
        ],
      },
    },
    {
      topic: "Authorisation: landlord title check",
      q: "Your client is taking a new lease from a landlord company. Why do you investigate the landlord’s title as part of due diligence?",
      choices: [
        "To prove the tenant owns the premises already",
        "To confirm the landlord has the legal estate and power to grant the lease, and to identify superior interests/consents (e.g., mortgagee consent, restrictions) affecting grant",
        "To calculate the service charge",
        "To set the market rent",
        "To obtain EPC ratings",
      ],
      correct: 1,
      explain: {
        whyRight:
          "You must ensure the landlord can grant the lease and identify any superior interests (mortgages, restrictions, superior leases) requiring consent or affecting the tenant’s rights.",
        whyWrong: [
          "Tenant ownership is not being proven.",
          "",
          "Service charge calculation is commercial drafting, not landlord title proof.",
          "Market rent is commercial valuation, not title investigation.",
          "EPC is compliance; not the core purpose of landlord title investigation.",
        ],
      },
    },
    {
      topic: "Mortgagee consent to lease",
      q: "The landlord’s title shows a registered charge in favour of a bank. Your tenant is taking a 15-year lease. Why might you require the lender’s consent?",
      choices: [
        "Because charges always forbid any lease under 99 years",
        "Because the mortgage terms may restrict granting leases; without consent, the lender might enforce its security and seek to override or challenge the lease, creating risk for the tenant",
        "Because the tenant must pay the landlord’s mortgage",
        "Because consent is only needed for residential leases",
        "Because Land Registry won’t register any lease if a charge exists",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A mortgage may restrict leases. Without consent, a lender enforcing security might have rights that prejudice the tenant. Consent (or a deed of priority/non-disturbance) can mitigate risk.",
        whyWrong: [
          "There is no universal 99-year rule; it depends on mortgage terms.",
          "",
          "Tenant does not pay landlord’s mortgage as a rule.",
          "This issue arises in commercial as well as residential contexts.",
          "Land Registry can register leases over charged titles; the issue is priority and lender consent requirements.",
        ],
      },
    },
    {
      topic: "CPSE: landlord replies",
      q: "A prospective tenant of commercial premises requests CPSE replies from the landlord. What are CPSEs mainly used for?",
      choices: [
        "To register the lease at Land Registry",
        "To obtain structured pre-contract information about the property, compliance, disputes, services, notices, and occupational matters to support due diligence",
        "To calculate SDLT",
        "To replace the need for a lease plan",
        "To set the insurance premium",
      ],
      correct: 1,
      explain: {
        whyRight:
          "CPSEs provide a standard set of enquiries for commercial property to gather due diligence information about the property and risks before committing.",
        whyWrong: [
          "They are not registration documents.",
          "",
          "SDLT is tax calculation and filing; CPSEs are information-gathering.",
          "Lease plans are still required/important.",
          "Insurance premiums are determined by insurers; CPSEs may inform risk but not set premiums.",
        ],
      },
    },
    {
      topic: "Assignment: landlord’s consent requirement",
      q: "A lease contains a qualified covenant: 'The tenant shall not assign without the landlord’s consent, such consent not to be unreasonably withheld.' What should the outgoing tenant do first when planning assignment?",
      choices: [
        "Assign immediately and seek retrospective consent",
        "Apply formally for consent in accordance with the lease, provide required information (assignee details, references) and comply with any conditions for consideration",
        "Ask the estate agent to approve assignment",
        "Serve a notice to quit",
        "Apply to Land Registry for consent",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where consent is required, the outgoing tenant should make a proper application with supporting information so the landlord can consider it and so the tenant can rely on statutory controls over delay/unreasonable refusal where applicable.",
        whyWrong: [
          "Assignment without consent risks breach and forfeiture/claims.",
          "",
          "Agents do not grant legal consent.",
          "A notice to quit is not the mechanism to transfer a lease.",
          "Land Registry does not grant landlord consent.",
        ],
      },
    },
    {
      topic: "Licence to assign: function",
      q: "In a lease assignment where landlord consent is needed, what is the primary purpose of a licence to assign?",
      choices: [
        "To increase the rent automatically",
        "To document the landlord’s consent and any conditions (e.g., AGA, references, deeds) for the specific assignment",
        "To terminate the lease early",
        "To transfer the freehold to the assignee",
        "To register the leasehold title",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A licence to assign records the landlord’s consent and conditions for that particular assignment, protecting parties and evidencing compliance with the alienation covenant.",
        whyWrong: [
          "Rent change requires a rent review/variation, not a licence to assign by default.",
          "",
          "It does not terminate the lease; it permits assignment.",
          "Freehold is not transferred.",
          "Registration is separate; the licence is the consent instrument.",
        ],
      },
    },
    {
      topic: "Licence conditions: AGA requirement",
      q: "A landlord will only consent to assignment if the outgoing tenant enters into an AGA. Why does a landlord want an AGA?",
      choices: [
        "To make the outgoing tenant the new landlord",
        "To keep the outgoing tenant as a guarantor of the assignee’s performance, providing security if the assignee defaults",
        "To force the outgoing tenant to pay the service charge forever",
        "To remove the need for rent deposits",
        "To prevent the assignee from occupying",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An AGA provides the landlord with continuing security from the outgoing tenant, who guarantees the assignee’s obligations for the assignee’s period of ownership.",
        whyWrong: [
          "The outgoing tenant does not become landlord.",
          "",
          "Liability depends on the AGA terms and period; it’s not 'forever' necessarily.",
          "Rent deposits can still be required; AGA is separate security.",
          "It does not prevent occupation; it enables transfer with security.",
        ],
      },
    },
    {
      topic: "Assignment: due diligence of assignee",
      q: "A landlord asks for three years’ accounts and trade references for the proposed assignee. What is the landlord primarily assessing?",
      choices: [
        "The assignee’s taste in interior design",
        "The assignee’s covenant strength/ability to pay rent and comply with lease obligations",
        "Whether the assignee can demand a rent reduction",
        "Whether the assignee can avoid SDLT",
        "Whether the assignee can ignore forfeiture clauses",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Landlords assess covenant strength—creditworthiness and ability to perform lease obligations—when deciding whether to consent to assignment.",
        whyWrong: [
          "Design taste is irrelevant to covenant strength.",
          "",
          "Consent does not automatically change rent.",
          "Assignees may have SDLT obligations, but accounts aren’t about avoiding tax.",
          "Forfeiture clauses still apply.",
        ],
      },
    },
    {
      topic: "Assignment vs underlease: practical difference",
      q: "A tenant wants to transfer occupation but retain a right to take the premises back later. Which structure is most likely to achieve this (subject to lease permissions)?",
      choices: [
        "Assignment",
        "Underlease (subletting), where the tenant becomes an intermediate landlord and retains the headlease",
        "Freehold transfer",
        "Deed of rectification",
        "DS1",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Underletting allows the tenant to remain the headtenant and grant a sublease, potentially enabling reversionary control at sublease end.",
        whyWrong: [
          "Assignment transfers the tenant’s entire leasehold interest; the tenant generally exits and does not retain a reversion.",
          "",
          "Freehold is not involved.",
          "Rectification corrects errors; not an occupational structure.",
          "DS1 is mortgage discharge.",
        ],
      },
    },
    {
      topic: "Grant: lease as a deed and execution",
      q: "A company tenant is granting a lease (as tenant). Which statement about execution is most accurate?",
      choices: [
        "A lease deed never needs witnessing",
        "Execution must satisfy deed formalities; for companies, execution follows Companies Act methods (e.g., two authorised signatories or director + witness) as applicable",
        "Only the landlord needs to sign a lease",
        "Emailing a PDF signature is always sufficient with no further steps",
        "Execution rules are the same for all jurisdictions and never change",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Leases are typically deeds. Companies must execute in an authorised manner; individuals usually sign in the presence of a witness (subject to method).",
        whyWrong: [
          "Deed execution often requires witnessing for individuals; companies have their own formalities.",
          "",
          "Both parties typically execute the lease/counterpart as required.",
          "Whether e-signing is acceptable depends on deed formalities, platform, and Land Registry requirements.",
          "Execution requirements can vary; you must apply correct law and practice.",
        ],
      },
    },
    {
      topic: "Registration: when a lease is registrable",
      q: "A landlord grants a new commercial lease for 10 years. What is the standard registration position for the lease in England and Wales?",
      choices: [
        "No lease ever needs registration",
        "A lease granted for more than 7 years is usually registrable at HM Land Registry and the tenant must apply to register it",
        "Only leases over 99 years are registrable",
        "Only residential leases are registrable",
        "The landlord registers it; the tenant has no involvement",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Leases over 7 years are generally registrable. The tenant (often via their solicitor) applies to register, creating a leasehold title.",
        whyWrong: [
          "Some leases must be registered; it’s not optional in registrable cases.",
          "",
          "The threshold is not 99 years.",
          "Commercial leases can be registrable.",
          "In practice, the tenant’s solicitor typically deals with registration, though parties can agree mechanics.",
        ],
      },
    },
    {
      topic: "SDLT: assignment and premium",
      q: "A tenant assigns its lease and the assignee pays a premium to the outgoing tenant, plus takes over rent. Why is SDLT potentially relevant for the assignee?",
      choices: [
        "Because SDLT is only payable by landlords",
        "Because SDLT can be chargeable on the premium and/or on the net present value of rent for lease transactions, depending on rules and thresholds",
        "Because SDLT is charged on service charge only",
        "Because assignment avoids any SDLT rules",
        "Because SDLT applies only to freehold purchases",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Lease transactions can trigger SDLT on premiums and/or rent (NPV) subject to thresholds and rules. Assignees must consider SDLT filing/payment obligations.",
        whyWrong: [
          "SDLT is commonly payable by the purchaser/assignee/tenant depending on transaction.",
          "",
          "Service charge is not the basis of SDLT.",
          "Assignment does not bypass SDLT rules.",
          "SDLT applies to certain lease transactions too, not just freehold.",
        ],
      },
    },
    {
      topic: "VAT: option to tax and lease grant/assignment",
      q: "A landlord has opted to tax the building. What is the likely effect on the tenant’s payments under the lease?",
      choices: [
        "VAT is never chargeable on rent",
        "VAT may be chargeable on rent and other sums if the landlord has opted to tax, increasing the tenant’s cashflow burden (subject to VAT status/recovery)",
        "The tenant pays VAT only on the deposit",
        "VAT changes the term of the lease",
        "VAT makes the lease unregistrable",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If the landlord has opted to tax, VAT is often chargeable on rent and related payments. The tenant must budget and consider recoverability.",
        whyWrong: [
          "VAT can be chargeable in opted-to-tax situations.",
          "",
          "VAT is not limited to deposits.",
          "VAT does not change term length.",
          "VAT status does not prevent registration.",
        ],
      },
    },
    {
      topic: "Pre-completion: apportionment on assignment",
      q: "On an assignment completing mid-quarter, rent is payable quarterly in advance under the lease. What is commonly done between outgoing tenant and assignee?",
      choices: [
        "Nothing—assignee pays nothing until next quarter day",
        "The parties apportion rent between themselves contractually, so the assignee reimburses the outgoing tenant for the period after completion (subject to agreement)",
        "Landlord refunds the outgoing tenant automatically",
        "Rent is waived for the quarter",
        "Apportionment is illegal in commercial leases",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Even if the landlord is entitled to the full quarter’s rent, outgoing and incoming tenants commonly apportion between themselves so the assignee bears the post-completion occupation period.",
        whyWrong: [
          "Assignee is usually responsible for occupation period; apportionment is common practice.",
          "",
          "Landlords do not automatically refund rent; it depends on lease terms and practice.",
          "Rent is not automatically waived.",
          "Apportionment is not illegal; it’s a private settlement between parties.",
        ],
      },
    },
    {
      topic: "Assignment completion: notice to landlord",
      q: "A lease requires the tenant to serve notice of assignment on the landlord within 10 working days and pay a registration fee. Why does this matter?",
      choices: [
        "It doesn’t—post-completion notices are never required",
        "It is a contractual obligation; failure can be a breach and can also delay landlord updating records (rent demands, service charge, consents).",
        "It makes the assignment void automatically",
        "It is required by Land Registry for all assignments",
        "It transfers the freehold",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Leases often require notice of assignment so landlord can update records. Non-compliance can breach lease and cause practical problems.",
        whyWrong: [
          "Post-completion notices can be important and are often required.",
          "",
          "It won’t always void the assignment, but it can trigger breach consequences depending on lease.",
          "Land Registry requirements are separate; notice is a lease covenant.",
          "No freehold is transferred.",
        ],
      },
    },
    {
      topic: "Licence to assign: timing and exchange",
      q: "Your client wants to 'exchange' the assignment documents before landlord consent is issued. The lease prohibits assignment without consent. What is the best advice?",
      choices: [
        "Proceed; consent can be obtained after completion with no risk",
        "Do not complete the assignment without consent; structure the deal so completion is conditional on receiving landlord consent/licence to assign (or risk breach and forfeiture).",
        "Ignore the lease; landlord consent clauses are unenforceable",
        "Ask Land Registry to override the consent clause",
        "Tell the client to sublet instead, even if subletting is also prohibited",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If consent is a condition, completing without it is breach. Commercial transactions are typically structured with consent as a condition precedent to completion.",
        whyWrong: [
          "Retrospective consent may not cure breach and creates serious risk.",
          "",
          "Consent clauses are enforceable.",
          "Land Registry does not override lease covenants.",
          "Switching structure doesn’t help if underletting is also restricted.",
        ],
      },
    },
    {
      topic: "Surrender and regrant: unintended risk",
      q: "Parties to an existing lease agree extensive variations: term extension, additional premises, and revised rent. What is a potential legal risk if changes are too fundamental?",
      choices: [
        "Nothing—variations can never have side effects",
        "It may amount to a surrender and regrant, potentially triggering registration/SDLT consequences and affecting third-party interests (e.g., guarantors, subtenants, mortgages).",
        "It automatically voids the landlord’s title",
        "It removes the need for 1954 Act procedures",
        "It converts the lease into a freehold",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Fundamental changes can be treated as surrender and regrant, which can have tax/registration implications and can impact third-party rights.",
        whyWrong: [
          "Side effects are possible; you must assess the extent of variation.",
          "",
          "Landlord title is not voided.",
          "1954 Act contracting-out/renewal issues may arise but are not automatically removed by variation—analysis needed.",
          "No conversion to freehold occurs.",
        ],
      },
    },
    {
      topic: "Landlord’s consent: 'reasonably withheld' (overview)",
      q: "A lease says consent to assignment is not to be unreasonably withheld. The landlord refuses because they dislike the assignee’s branding. What is the key issue to consider?",
      choices: [
        "Branding dislike is always a reasonable ground",
        "Refusal must relate to the landlord and tenant relationship and property management; irrelevant or discriminatory reasons may be unreasonable depending on facts and the lease context",
        "Landlord can refuse for any reason even with a qualified covenant",
        "Tenant must pay double rent if refused",
        "Only the local authority can decide reasonableness",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where consent cannot be unreasonably withheld, the landlord’s reasons generally must be connected to legitimate property/lease management considerations and not arbitrary/irrelevant.",
        whyWrong: [
          "Branding might be relevant in some contexts (e.g., tenant mix) but not automatically reasonable; it depends on lease/building context and evidence.",
          "",
          "A qualified covenant limits refusal grounds.",
          "Rent consequences are not automatic.",
          "Reasonableness is a legal issue between parties, not for the local authority.",
        ],
      },
    },
    {
      topic: "Completion deliverables: grant",
      q: "On completion of a new lease grant that is registrable, which item is most critical for the tenant’s post-completion registration application?",
      choices: [
        "The heads of terms",
        "The executed lease (and any counterpart) in registrable form, plus SDLT evidence and any required consents/certificates",
        "Only CPSE replies",
        "The landlord’s marketing brochure",
        "A K16 bankruptcy search",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registration requires the executed lease deed (properly executed) and supporting documents such as SDLT evidence and compliance with restrictions/consents.",
        whyWrong: [
          "Heads of terms are not registrable instruments.",
          "",
          "CPSE replies are due diligence, not the registrable deed.",
          "Brochures are irrelevant.",
          "K16 is typically a lender/borrower check; not the core registration instrument.",
        ],
      },
    },
    {
      topic: "Rent deposit: release on assignment",
      q: "A lease includes a rent deposit deed. On assignment, what is a common issue to resolve between outgoing tenant, assignee and landlord?",
      choices: [
        "Whether the freehold transfers",
        "Whether the rent deposit is transferred, topped up, or released (and on what conditions), and whether a new rent deposit deed is needed",
        "Whether SDLT is cancelled",
        "Whether the landlord must pay the assignee’s legal fees",
        "Whether the lease becomes protected under the 1954 Act automatically",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Rent deposits are security arrangements; on assignment parties must agree how the deposit is dealt with—transfer, replacement, release and documentation.",
        whyWrong: [
          "Freehold is not transferred in assignment of a lease.",
          "",
          "SDLT obligations are not 'cancelled' by rent deposit arrangements.",
          "Who pays fees is negotiable but not the central rent deposit issue.",
          "1954 Act status depends on contracting out and tenancy facts; not automatic on assignment.",
        ],
      },
    },
    {
      topic: "Authorised occupiers and sharing",
      q: "A tenant company wants to allow a group company to occupy part of the premises without formal subletting. What lease provision is most relevant to check and negotiate?",
      choices: [
        "The rent review clause only",
        "Sharing/occupation with group companies clause (and any conditions), distinct from assignment/subletting restrictions",
        "The forfeiture clause only",
        "The insurance rent clause only",
        "The definition of 'Landlord' only",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Many leases regulate sharing occupation and group company occupation separately from alienation. You must check permitted sharing, conditions and notification requirements.",
        whyWrong: [
          "Rent review is not the key control on occupation.",
          "",
          "Forfeiture is a remedy, not the permission clause.",
          "Insurance rent is unrelated.",
          "Definitions matter but the key is the sharing/occupation clause.",
        ],
      },
    },
    {
      topic: "Landlord’s costs clause (consents)",
      q: "A lease says the tenant must pay the landlord’s 'reasonable legal and surveyor’s costs' in connection with considering assignment consent. What is the practical effect?",
      choices: [
        "The tenant pays nothing because consent is always free",
        "The tenant should budget for landlord’s professional fees during the consent process, which can be payable even if consent is refused (subject to wording)",
        "It means the landlord must always consent",
        "It means the tenant can assign without consent",
        "It is void because costs clauses are prohibited",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Cost recovery clauses shift landlord’s consent process costs to the tenant. This affects negotiation and can be payable regardless of outcome depending on drafting.",
        whyWrong: [
          "Such clauses are common and can make the process expensive.",
          "",
          "Costs clauses do not force consent to be granted.",
          "They do not remove the need for consent.",
          "Costs clauses are not generally prohibited outright (though reasonableness and drafting matter).",
        ],
      },
    },
    {
      topic: "Due diligence: superior lease (headlease) issue",
      q: "Your client is taking an underlease. Why must you investigate the headlease?",
      choices: [
        "Because the underlease automatically overrides the headlease",
        "Because the underlease must be consistent with and permitted by the headlease; the tenant’s rights may be vulnerable if headlease is forfeited or if underletting is prohibited",
        "Because SDLT is never payable on underleases",
        "Because headlease information is irrelevant to occupation",
        "Because Land Registry refuses underleases",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An underlease sits beneath the headlease. You must ensure underletting is permitted and assess risks such as headlease forfeiture, which could impact the under-tenant.",
        whyWrong: [
          "An underlease does not override the headlease; it is derivative.",
          "",
          "SDLT may still be payable depending on consideration.",
          "Headlease terms can directly affect the under-tenant’s rights and risks.",
          "Underleases can be registrable depending on term and circumstances.",
        ],
      },
    },
  ];

  window.quizData = {
    title:
      "Property Practice — Chapter 7: Grant and assignment of commercial leases",
    subtitle:
      "30 SQE-style scenario MCQs (grant vs assignment, pre-contract due diligence, heads of terms, 1954 Act, contracting out, SDLT/VAT flags, landlord consents, licences to assign, AGAs, COS/registration, and completion steps).",
    questions: questions,
  };
})();
