(() => {
  const questions = [
    {
      topic: "Ways a lease can end",
      q: "A commercial tenant asks how a lease can lawfully end. Which list best captures the main termination routes?",
      choices: [
        "Only by landlord eviction",
        "Expiry at end of term, surrender (express or implied), forfeiture for breach, break clause exercise, and (for 1954 Act tenancies) termination/renewal procedure via statutory notices",
        "Only by selling the freehold",
        "Only by Land Registry cancellation",
        "Only by rent review",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Commercial leases can end by expiry, surrender, forfeiture, break, and—if protected under the 1954 Act—through the statutory termination/renewal notice regime.",
        whyWrong: [
          "Eviction/forfeiture is only one route.",
          "",
          "Freehold sale doesn’t necessarily end leases; they usually bind successors.",
          "Land Registry does not 'cancel' leases as a termination mechanism; it records legal position.",
          "Rent review changes rent; it doesn’t end the lease.",
        ],
      },
    },
    {
      topic: "Security of tenure: what it means",
      q: "What is the core effect of security of tenure under Part II of the Landlord and Tenant Act 1954 for a protected business tenant?",
      choices: [
        "The tenant owns the freehold automatically",
        "The tenant has a right to remain and renew at the end of the term unless the landlord can establish a statutory ground to oppose renewal (or the tenancy was contracted out)",
        "The rent can never increase",
        "The landlord can never enter the premises",
        "The lease becomes perpetual with no court involvement",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For protected tenancies, the tenant has renewal rights and can remain in occupation while the statutory procedure runs, unless the landlord successfully opposes on statutory grounds.",
        whyWrong: [
          "Security of tenure does not transfer freehold ownership.",
          "",
          "Rent can be reviewed/changed; renewal often resets rent to market.",
          "Landlord rights of entry depend on the lease.",
          "It is not perpetual; renewal/termination is managed via statutory procedure/court.",
        ],
      },
    },
    {
      topic: "Is the tenancy protected? (high-level test)",
      q: "A café occupies premises under a lease for 8 years and runs its business there. The lease does not mention the 1954 Act. What is the default assumption to check first?",
      choices: [
        "All business leases are automatically contracted out",
        "The tenancy may be within the 1954 Act if it is a business tenancy and has not been validly contracted out; you must confirm whether contracting-out procedure was followed",
        "The 1954 Act applies only to warehouses",
        "The 1954 Act applies only to monthly tenancies",
        "The 1954 Act only applies if the rent is below £50,000",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Most business tenancies can be protected unless contracted out. The key is whether the statutory contracting-out procedure was properly completed before grant.",
        whyWrong: [
          "Contracting out is not automatic; formal steps are required.",
          "",
          "Property type is not determinative.",
          "It is not limited to monthly tenancies.",
          "There is no simple rent threshold test like that.",
        ],
      },
    },
    {
      topic: "Contracting out: consequence",
      q: "The landlord and tenant validly contracted out of the 1954 Act before the lease was granted. What is the practical result at lease end?",
      choices: [
        "Tenant still has an automatic right to a new lease",
        "Tenant has no statutory right to renew; the lease ends at expiry unless a new lease is negotiated or other arrangements exist",
        "Tenant can renew only if the rent is paid on time",
        "Landlord must pay compensation at expiry in every case",
        "The lease becomes void",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If contracted out, the tenant generally has no statutory renewal rights. The lease ends at expiry unless the parties agree otherwise.",
        whyWrong: [
          "Contracting out removes automatic statutory renewal rights.",
          "",
          "Renewal rights do not depend solely on rent punctuality once contracted out—they don’t exist by statute.",
          "Compensation is not automatic in every case.",
          "The lease remains valid; it just lacks security of tenure.",
        ],
      },
    },
    {
      topic: "Holding over: continuation after expiry",
      q: "A protected business lease expires but the tenant stays in occupation and continues paying rent, and the landlord accepts it. What is the legal effect under the 1954 Act regime (at a high level)?",
      choices: [
        "The tenancy ends automatically on expiry regardless of occupation",
        "The tenancy can continue under statutory 'holding over' provisions pending termination/renewal through the statutory notice process",
        "A new 10-year lease is automatically created",
        "The tenant becomes a trespasser immediately",
        "The tenant obtains the freehold by adverse possession",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For protected tenancies, the tenant can 'hold over' after expiry and the tenancy continues by statute until ended by the proper notice procedure or court order.",
        whyWrong: [
          "Protected tenancies can continue by statute after expiry.",
          "",
          "No automatic 10-year lease is created.",
          "A protected tenant holding over is not automatically a trespasser.",
          "Adverse possession is not the mechanism here.",
        ],
      },
    },
    {
      topic: "Landlord’s s25 notice: purpose",
      q: "A landlord wants to terminate a protected business tenancy at lease end and either offer a renewal or oppose renewal. Which notice is typically used?",
      choices: [
        "Section 25 notice (Landlord’s notice to terminate / propose terms or oppose renewal)",
        "Section 146 notice",
        "A DS1",
        "An OS1",
        "A K16",
      ],
      correct: 0,
      explain: {
        whyRight:
          "A landlord uses a s25 notice to bring the tenancy towards termination and to propose renewal terms or to oppose renewal on statutory grounds.",
        whyWrong: [
          "",
          "s146 relates to forfeiture for breach, not 1954 Act renewal termination.",
          "DS1 is mortgage discharge.",
          "OS1 is priority search.",
          "K16 is bankruptcy search.",
        ],
      },
    },
    {
      topic: "Tenant’s s26 request: purpose",
      q: "A tenant wants to initiate renewal of a protected business tenancy. What statutory notice can the tenant serve?",
      choices: [
        "Section 26 request for a new tenancy",
        "Section 146 notice",
        "Section 25 notice",
        "Notice to quit under the Protection from Eviction Act 1977",
        "AP1",
      ],
      correct: 0,
      explain: {
        whyRight:
          "A tenant may serve a s26 request to initiate the renewal process for a protected business tenancy.",
        whyWrong: [
          "s146 is forfeiture related.",
          "",
          "s25 is served by the landlord (not the tenant’s initiating notice).",
          "Eviction act notices relate to residential/protected occupiers and are not the 1954 Act route here.",
          "AP1 is Land Registry application form.",
        ],
      },
    },
    {
      topic: "Timing: s25/s26 lead-in period (concept)",
      q: "As a general rule, why is timing critical when serving s25 or s26 notices?",
      choices: [
        "Because serving them too early automatically voids the lease",
        "Because the notices must comply with statutory timing windows and specify a termination date; defective timing can invalidate the notice and disrupt strategy",
        "Because notices must be filed at the Land Registry within 2 days",
        "Because notices must always be served at midnight",
        "Because the tenant loses the right to repair",
      ],
      correct: 1,
      explain: {
        whyRight:
          "s25/s26 notices have statutory timing requirements and must specify a termination date within the permitted window. Errors can invalidate the notice and affect renewal/termination plans.",
        whyWrong: [
          "Serving too early doesn’t 'void the lease' but may make the notice invalid/ineffective.",
          "",
          "Land Registry filing is not part of serving s25/s26 notices.",
          "No midnight requirement.",
          "Repair obligations are unrelated.",
        ],
      },
    },
    {
      topic: "Opposing renewal: landlord must rely on statutory grounds",
      q: "A landlord wants to oppose renewal of a protected tenancy. What is the correct high-level legal position?",
      choices: [
        "Landlord can refuse renewal for any reason",
        "Landlord must establish one or more statutory grounds of opposition under s30 of the 1954 Act",
        "Landlord must pay the tenant’s entire relocation costs in every case",
        "Landlord can oppose renewal only if tenant agrees",
        "Landlord can oppose renewal only if rent is unpaid for 3 days",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A landlord can oppose renewal only by proving one or more statutory grounds under s30 (e.g., tenant fault grounds, redevelopment, own occupation).",
        whyWrong: [
          "Freedom to refuse is limited under the 1954 Act.",
          "",
          "Compensation may be payable in some cases, but not 'entire relocation costs' automatically.",
          "Tenant agreement is not required if a statutory ground is established.",
          "There is no 3-day universal rule.",
        ],
      },
    },
    {
      topic: "s30 grounds: fault vs no-fault (overview)",
      q: "Which is the best description of the types of grounds a landlord may use to oppose renewal under s30?",
      choices: [
        "Only tenant fault grounds exist",
        "Both 'fault' grounds (e.g., breaches, delay in rent, disrepair) and 'no-fault' grounds (e.g., redevelopment, landlord’s own occupation) exist",
        "Only redevelopment grounds exist",
        "Only rent-level grounds exist",
        "Grounds are whatever the lease says",
      ],
      correct: 1,
      explain: {
        whyRight:
          "s30 includes both tenant-fault grounds and no-fault grounds such as redevelopment or landlord’s intention to occupy, each with different evidence and compensation implications.",
        whyWrong: [
          "Not only fault grounds; no-fault grounds exist too.",
          "",
          "Not only redevelopment.",
          "Rent level itself isn’t a ground; it affects terms, not entitlement.",
          "Lease terms don’t create s30 grounds; statute does.",
        ],
      },
    },
    {
      topic: "Ground (f): redevelopment intention (concept)",
      q: "A landlord wants to oppose renewal because it intends to redevelop the premises and needs vacant possession. What must the landlord generally show (at a high level)?",
      choices: [
        "A vague hope to redevelop someday",
        "A genuine, settled intention and a reasonable prospect of being able to carry out the redevelopment (supported by evidence such as plans, funding, consents where relevant)",
        "That the tenant is unprofitable",
        "That the tenant dislikes the landlord",
        "That the landlord has already completed all works",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For redevelopment opposition, landlords must show genuine, settled intention and a real prospect of carrying out the scheme—not mere aspiration.",
        whyWrong: [
          "A mere hope is insufficient.",
          "",
          "Tenant profitability is irrelevant.",
          "Personal dislike is irrelevant.",
          "The works need not already be completed; intention and ability to carry out are key.",
        ],
      },
    },
    {
      topic: "Ground (g): landlord’s own occupation (concept)",
      q: "A landlord opposes renewal stating it intends to occupy the premises for its own business. What is the key legal idea behind this ground?",
      choices: [
        "Landlord can oppose if it wants higher rent",
        "Landlord must show genuine intention to occupy for its own business/residence (as permitted) and a reasonable prospect of doing so",
        "Landlord can oppose only if tenant consents",
        "Landlord can oppose only if it has already moved in",
        "Landlord can oppose only if the lease is under 1 year",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The own-occupation ground requires a genuine, settled intention and a real prospect of occupying, supported by evidence—not just a desire for higher rent.",
        whyWrong: [
          "Higher rent is not a statutory ground.",
          "",
          "Tenant consent is not required if ground is proved.",
          "Physical occupation need not already have started, but intention must be real.",
          "Not limited to leases under 1 year.",
        ],
      },
    },
    {
      topic: "Compensation: when it may be payable (overview)",
      q: "In which broad situation is statutory compensation most likely to be payable to a protected tenant on termination?",
      choices: [
        "Whenever the landlord opposes renewal on tenant fault grounds",
        "Where renewal is opposed and the landlord relies on certain no-fault grounds (e.g., redevelopment/own occupation), subject to statutory conditions",
        "Whenever the tenant loses a negotiation",
        "Whenever the lease is contracted out",
        "Whenever rent is reviewed",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Compensation is generally associated with termination where the landlord successfully relies on certain no-fault grounds (commonly redevelopment/own occupation), subject to statutory rules.",
        whyWrong: [
          "Compensation is not typically payable on tenant fault grounds.",
          "",
          "Negotiation outcomes alone do not trigger statutory compensation.",
          "Contracted-out tenancies do not give statutory compensation under the 1954 Act regime in the same way because rights are excluded.",
          "Rent review is unrelated.",
        ],
      },
    },
    {
      topic: "Tenant’s right to apply to court: deadline concept",
      q: "A tenant receives a s25 notice opposing renewal. What must the tenant do to preserve its renewal rights?",
      choices: [
        "Nothing; renewal happens automatically",
        "Issue a court application for a new tenancy before the statutory deadline (often tied to the termination date in the notice) or risk losing the right to renew",
        "Leave the premises immediately",
        "Apply to Land Registry for a new lease",
        "Serve a s146 notice",
      ],
      correct: 1,
      explain: {
        whyRight:
          "To preserve renewal rights, the tenant must apply to court within the statutory timeframe; missing the deadline can end renewal protection.",
        whyWrong: [
          "Renewal is not automatic; procedure must be followed.",
          "",
          "Immediate departure is not required (and can harm the tenant’s position).",
          "Land Registry does not grant renewals.",
          "s146 is forfeiture-related.",
        ],
      },
    },
    {
      topic: "Interim rent: concept",
      q: "During renewal proceedings, the landlord asks about 'interim rent'. What is interim rent?",
      choices: [
        "A penalty for serving a notice late",
        "A court-determined rent payable for the interim period between the end of the old tenancy and the start of the new tenancy (or determination), in appropriate cases",
        "The rent under a rent deposit deed",
        "The service charge budget",
        "The rent paid only if the tenant wins in court",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Interim rent can be ordered by the court for the interim period during holding over/renewal proceedings, aligning payments with market realities.",
        whyWrong: [
          "It is not a penalty; it’s a statutory/court mechanism.",
          "",
          "Rent deposit is separate.",
          "Service charge budget is separate.",
          "Interim rent is not contingent on 'winning'; it can be payable depending on order.",
        ],
      },
    },
    {
      topic: "Break clause vs 1954 Act protection",
      q: "A protected lease contains a tenant break clause exercisable at year 3. Tenant validly exercises the break. What is the likely effect on 1954 Act protection?",
      choices: [
        "1954 Act overrides the break; lease continues anyway",
        "If the break is effectively exercised, the tenancy ends under the contract, so 1954 Act continuation/renewal is not engaged because there is no tenancy to renew",
        "Tenant automatically gets a new lease",
        "Landlord must pay compensation automatically",
        "The break converts into a s25 notice",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If the lease ends by a valid contractual break, the tenancy ends; statutory renewal is not pursued because there is no continuing tenancy to renew.",
        whyWrong: [
          "The 1954 Act does not nullify valid contractual breaks.",
          "",
          "No automatic new lease follows.",
          "Compensation is tied to statutory opposition grounds, not tenant’s own break.",
          "A break is not a s25 notice.",
        ],
      },
    },
    {
      topic: "Surrender: basic concept",
      q: "A landlord and tenant agree to end the lease early and record it in a deed. What is this called?",
      choices: [
        "Assignment",
        "Surrender",
        "Underletting",
        "Rectification",
        "Easement",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A surrender is the consensual giving up of the lease by the tenant to the landlord, often documented by deed.",
        whyWrong: [
          "Assignment transfers the lease to a third party.",
          "",
          "Underletting grants a sublease; it doesn’t end the headlease.",
          "Rectification corrects errors in documents.",
          "Easements are rights over land, not termination of a lease.",
        ],
      },
    },
    {
      topic: "Surrender by operation of law",
      q: "Tenant moves out, returns keys, and landlord takes back possession and grants a new lease to someone else, treating the old lease as ended. What may this amount to?",
      choices: [
        "An automatic renewal under the 1954 Act",
        "Surrender by operation of law (implied surrender) depending on unequivocal conduct of both parties",
        "A mortgage discharge",
        "A rent review",
        "A right of way",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Unequivocal conduct by both parties inconsistent with the continuation of the lease can amount to surrender by operation of law.",
        whyWrong: [
          "This is not renewal; it is ending the tenancy.",
          "",
          "Mortgage discharge is unrelated.",
          "Rent review doesn’t end the lease.",
          "Right of way is unrelated.",
        ],
      },
    },
    {
      topic: "Tenant wants renewal: strategic steps",
      q: "A protected tenant wants certainty of renewal terms and timing. Which is the most proactive statutory step the tenant can take?",
      choices: [
        "Serve a s26 request initiating renewal proceedings",
        "Serve a s146 notice",
        "Register a restriction on the freehold",
        "Serve a notice to complete",
        "Apply for adverse possession",
      ],
      correct: 0,
      explain: {
        whyRight:
          "A s26 request allows the tenant to initiate the renewal process, propose terms, and set the statutory timetable in motion.",
        whyWrong: [
          "",
          "s146 relates to forfeiture for breach.",
          "Land Registry restrictions do not initiate 1954 Act renewal.",
          "Notice to complete is a sale contract concept.",
          "Adverse possession is irrelevant.",
        ],
      },
    },
    {
      topic: "Landlord wants possession: correct route",
      q: "A landlord wants the tenant out at lease end but the lease is protected and not contracted out. Which approach is most appropriate?",
      choices: [
        "Tell the tenant to leave at expiry or they will be trespassers",
        "Use the 1954 Act procedure (serve a s25 notice and, if opposing, rely on s30 grounds; obtain court order if necessary)",
        "Change the locks at midnight on expiry",
        "Send a DS1 to the tenant",
        "Apply to HMRC",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For protected tenancies, landlords must follow the statutory notice and (if needed) court process; self-help eviction risks unlawful eviction and damages.",
        whyWrong: [
          "Protected tenants can hold over; they are not automatically trespassers at expiry.",
          "",
          "Locking out risks unlawful eviction.",
          "DS1 is mortgage discharge.",
          "HMRC is unrelated.",
        ],
      },
    },
    {
      topic: "Notice validity: service and form",
      q: "Why is careful attention to service and form of s25/s26 notices essential?",
      choices: [
        "Because defects can invalidate the notice, undermining termination/renewal strategy and possibly causing missed deadlines",
        "Because the notice must be registered at the Land Registry to be valid",
        "Because it automatically changes the rent to nil",
        "Because it transfers title",
        "Because it eliminates all repairing obligations",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Incorrect form, service, or dates can render notices invalid, causing delay, uncertainty, and potentially loss of rights if deadlines are missed.",
        whyWrong: [
          "",
          "Land Registry registration is not the validity requirement for service of these notices.",
          "Rent does not become nil automatically.",
          "Notices do not transfer title.",
          "Repair obligations continue unless and until the tenancy ends.",
        ],
      },
    },
    {
      topic: "Opposition ground: persistent delay in paying rent (concept)",
      q: "A landlord wants to oppose renewal because the tenant often pays late, though arrears are usually cleared. Which category of s30 grounds is this most closely associated with?",
      choices: [
        "No-fault ground: redevelopment",
        "Fault ground: persistent delay in paying rent",
        "No-fault ground: landlord’s own occupation",
        "Ground: tenant’s business type",
        "Ground: VAT election",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Persistent delay in paying rent is a 'fault' type ground (tenant conduct) that can be relied upon to oppose renewal if established on evidence.",
        whyWrong: [
          "Redevelopment is a no-fault ground based on landlord intention.",
          "",
          "Own occupation is also a no-fault landlord intention ground.",
          "Business type is not a statutory ground by itself.",
          "VAT status is not a statutory ground.",
        ],
      },
    },
  ];

  window.quizData = {
    title:
      "Property Practice — Chapter 9: Termination of leases and security of tenure (Part II, Landlord and Tenant Act 1954)",
    subtitle:
      "30 SQE-style scenario MCQs (ending leases: expiry, surrender, forfeiture, break; 1954 Act protected tenancies; contracting out; s25/s26 notices; court timelines; interim rent; renewal grounds s30; and practical strategy).",
    questions: questions,
  };
})();
