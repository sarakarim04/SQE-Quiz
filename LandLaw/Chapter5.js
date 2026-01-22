(() => {
  const questions = [
    {
      topic: "Lease vs licence: exclusive possession",
      q: "Mina pays £900 per month to live in a studio. The agreement calls her a “licensee” and says the owner can enter at any time. In practice, Mina has the only keys and the owner never enters without asking. What is the strongest indicator that Mina has a lease rather than a licence?",
      choices: [
        "The agreement uses the word “licence”.",
        "Mina pays rent monthly.",
        "Mina has exclusive possession for a term.",
        "The owner is friendly and visits sometimes.",
        "Mina signed a written agreement.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Exclusive possession for a term is the key hallmark of a lease; labels are not conclusive if the substance gives the occupier exclusive possession.",
        whyWrong: [
          "Labels are not decisive; courts look at substance.",
          "Rent helps but is not essential and not the strongest indicator.",
          "",
          "Occasional visits don’t negate exclusive possession if they are consistent with a landlord’s rights.",
          "Writing may affect enforceability/formality, not whether the arrangement is a lease in substance.",
        ],
      },
    },
    {
      topic: "Street v Mountford principle (labels vs substance)",
      q: "A landlord inserts clauses stating (i) the occupier is a licensee, (ii) no exclusive possession is granted, and (iii) the landlord may introduce others to share at any time. In reality, the occupier has sole use of a self-contained flat for two years and no one is ever introduced. What is most accurate?",
      choices: [
        "It is automatically a licence because the agreement says so.",
        "It is likely a lease because the occupier in fact has exclusive possession for a term, and sham clauses can be disregarded.",
        "It is a licence because the landlord reserved a right to share, even if never used.",
        "It is a lease only if rent is paid weekly.",
        "It cannot be a lease because it is self-contained.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Courts can disregard sham provisions designed to avoid a tenancy where the reality is exclusive possession for a term; substance prevails over label.",
        whyWrong: [
          "Labels are not conclusive.",
          "A purely theoretical right to share that is a sham may be ignored.",
          "Rent frequency is irrelevant to the basic classification.",
          "Self-contained premises are often consistent with a lease, not inconsistent.",
        ],
      },
    },
    {
      topic: "Certainty of term",
      q: "A written agreement grants Omar the right to occupy a flat “for as long as he needs it,” paying monthly. Which is the best analysis?",
      choices: [
        "A valid fixed-term lease because Omar subjectively knows when he no longer needs it.",
        "Not a valid fixed-term lease because the duration is uncertain; it is likely a periodic tenancy if rent is paid periodically and exclusive possession exists.",
        "A life lease automatically.",
        "A licence only, regardless of exclusive possession.",
        "A 90-year lease because courts imply a long term.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A lease must have a certain maximum duration. “As long as needed” is uncertain, so it cannot be a fixed-term lease; regular rent with exclusive possession often points to a periodic tenancy.",
        whyWrong: [
          "Subjective certainty is not enough; the term must be objectively certain.",
          "",
          "A life interest lease is not automatically created by uncertain wording.",
          "Exclusive possession may still produce a tenancy even if the intended fixed term fails.",
          "Courts do not simply imply a long term to cure uncertainty.",
        ],
      },
    },
    {
      topic: "Periodic tenancy",
      q: "Laila moves in under an oral arrangement: rent is paid monthly, there is exclusive possession, and no end date is agreed. What tenancy is most likely to arise?",
      choices: [
        "A fixed-term tenancy for 12 months.",
        "A monthly periodic tenancy.",
        "A tenancy for life.",
        "A tenancy at sufferance.",
        "No tenancy can exist without writing.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where there is exclusive possession and rent is paid by reference to a period (monthly) with no fixed end date, the common result is a periodic tenancy.",
        whyWrong: [
          "A fixed term is not implied just because rent is monthly.",
          "",
          "Life tenancies are not implied in ordinary letting arrangements.",
          "Tenancy at sufferance arises after a tenant holds over after a lawful tenancy ends.",
          "Some leases can exist without writing (subject to term and formalities).",
        ],
      },
    },
    {
      topic: "Tenancy at will",
      q: "A buyer is allowed into occupation between exchange and completion, paying no rent, on the understanding they must leave immediately if the sale falls through. What is the most likely status of the buyer’s occupation?",
      choices: [
        "A fixed-term lease until completion.",
        "A periodic tenancy.",
        "A tenancy at will.",
        "An easement.",
        "A tenancy at sufferance.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Occupation pending a transaction, terminable at any time by either party, is commonly characterised as a tenancy at will (or sometimes a licence), rather than a periodic tenancy.",
        whyWrong: [
          "There is no fixed term.",
          "No rent and the express terminability makes a periodic tenancy unlikely.",
          "",
          "An easement is a right over land, not occupation.",
          "Tenancy at sufferance requires holding over after a tenancy ends.",
        ],
      },
    },
    {
      topic: "Tenancy at sufferance",
      q: "A tenant’s fixed-term lease expires on 30 June. The tenant stays on without the landlord’s consent and continues paying nothing. What is the tenant’s status immediately after 30 June (before any acceptance of rent)?",
      choices: [
        "A new fixed-term lease arises automatically.",
        "A periodic tenancy automatically arises.",
        "A tenancy at sufferance (a bare holding over) until the landlord consents or accepts rent.",
        "A licence granted by implication.",
        "The tenant becomes the freehold owner.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Holding over after a lease ends without the landlord’s consent creates a tenancy at sufferance until the position changes (e.g., rent accepted, new agreement, or possession proceedings).",
        whyWrong: [
          "No automatic new fixed term arises.",
          "A periodic tenancy typically requires consent/acceptance (often through acceptance of rent).",
          "",
          "A licence is not implied merely by holding over.",
          "Holding over does not transfer ownership.",
        ],
      },
    },
    {
      topic: "Rent not essential to a lease",
      q: "A landowner grants Nina exclusive possession of a cottage for 6 months, for no rent, by deed. Nina asks whether it can still be a lease. What is most accurate?",
      choices: [
        "No, rent is essential to create a lease.",
        "Yes, a lease can exist without rent if exclusive possession and a certain term exist, and formalities are satisfied.",
        "No, it becomes a licence because it is free.",
        "Yes, but only if the landlord also lives there.",
        "No, a lease must be at least 1 year.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Rent is not an essential requirement for a lease; the key elements are exclusive possession and certainty of term (plus proper formalities).",
        whyWrong: [
          "Rent is strong evidence but not essential.",
          "Free occupation can still be a lease if it meets the requirements.",
          "Landlord residence is not required for a lease.",
          "Leases can be granted for very short periods.",
        ],
      },
    },
    {
      topic: "Formalities: deed requirement for legal lease",
      q: "Landlord grants Tenant a 5-year lease of a shop. The parties sign a simple written agreement but do not execute a deed. Tenant takes possession and pays rent. What is the most accurate statement about the leasehold estate?",
      choices: [
        "It is a legal 5-year lease because it is in writing and signed.",
        "It is likely only an equitable lease (or a periodic tenancy depending on facts), because a legal lease for 5 years generally requires a deed.",
        "It is void and creates no rights.",
        "It becomes legal automatically after 1 year of occupation.",
        "It is a licence because it is not a deed.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A legal lease for more than 3 years generally requires a deed. Without a deed, the arrangement may take effect in equity (if contract formalities are met) or as a periodic tenancy based on possession and rent.",
        whyWrong: [
          "Writing/signature alone does not usually create the legal lease for this term.",
          "There can still be rights in equity or via periodic tenancy.",
          "",
          "Time in occupation does not convert an equitable lease into a legal lease automatically.",
          "Lack of deed does not automatically mean licence if the substance indicates a tenancy.",
        ],
      },
    },
    {
      topic: "s54(2) LPA 1925 exception (short lease)",
      q: "Landlord and Tenant agree orally that Tenant may occupy a flat for 2 years at a market rent, starting immediately. Tenant moves in and pays rent monthly. Is it capable of being a legal lease without a deed?",
      choices: [
        "Yes, because any lease under 7 years can be oral and legal.",
        "Yes, because the short-lease exception can apply to a lease taking effect in possession at the best rent with term not exceeding 3 years.",
        "No, because all leases must be by deed.",
        "No, because 2 years is too long to be legal without registration.",
        "Yes, but only if the landlord also occupies part of the flat.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A lease can be legal without deed if it falls within the short-lease exception: not exceeding 3 years, taking effect in possession, and at the best rent reasonably obtainable (no fine).",
        whyWrong: [
          "The key threshold is not 7 years for this exception; it is the 3-year short-lease exception for deed formalities.",
          "",
          "Most leases over 3 years require a deed; this is a specific exception.",
          "Registration requirements and deed formalities are separate issues; the term here is within 3 years.",
          "Landlord occupation is not a requirement.",
        ],
      },
    },
    {
      topic: "Short lease exception: 'best rent' and fine",
      q: "Landlord grants Tenant an oral 3-year lease taking effect immediately. Tenant pays a premium (fine) of £10,000 and a low rent. Tenant says it is a legal lease under the short-lease exception. What is most accurate?",
      choices: [
        "It is legal because it is under 3 years.",
        "It is unlikely to be legal under the exception because paying a premium/low rent suggests it is not at the best rent reasonably obtainable.",
        "It is legal only if the premium is under £1,000.",
        "It is automatically equitable only if the landlord objects.",
        "It becomes legal if registered.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The short-lease exception typically requires the best rent without a fine. A premium combined with low rent suggests the arrangement may not meet the 'best rent' requirement.",
        whyWrong: [
          "Term alone is not enough; 'best rent' matters.",
          "There is no £1,000 threshold.",
          "Whether it is legal does not depend on landlord objection.",
          "Registration does not cure the absence of a deed for creation where required.",
        ],
      },
    },
    {
      topic: "Registered land: lease registration threshold",
      q: "A landlord grants a 12-year lease of registered land by deed. Tenant takes possession but does not register the lease. What is the status of Tenant’s leasehold estate in registered land?",
      choices: [
        "Legal automatically because it was granted by deed.",
        "Only equitable until registered, because a lease of this length is a registrable disposition.",
        "Void, so Tenant becomes a trespasser.",
        "A licence only.",
        "An overriding interest automatically because Tenant is in occupation.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In registered land, leases over the registrable threshold must be completed by registration to operate at law; otherwise they are typically equitable.",
        whyWrong: [
          "Deed is not enough where registration is required to complete the legal estate.",
          "",
          "Equity can still recognise the lease; it is not necessarily void.",
          "The substance is still a lease, not automatically a licence.",
          "Overriding status is not automatic for registrable long leases.",
        ],
      },
    },
    {
      topic: "Registered land: short legal lease as overriding",
      q: "A tenant holds a valid legal 6-year lease of registered land but it is not entered on the landlord’s title. Landlord sells the freehold to Buyer who registers. Tenant claims the lease binds Buyer. Which is most accurate?",
      choices: [
        "Tenant is not bound because it is not on the register.",
        "Tenant is likely bound because certain short legal leases can override without being noted.",
        "Tenant is bound only if Buyer had actual knowledge.",
        "Tenant is bound only if Tenant paid a premium.",
        "Tenant is bound only if the lease is for exactly 7 years.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Certain short legal leases can bind as overriding interests even if not entered on the register, so a purchaser can take subject to them.",
        whyWrong: [
          "Not all binding rights need to be entered because overriding interests exist.",
          "",
          "Actual knowledge is not the sole test if the lease is overriding by category.",
          "Premium is not determinative.",
          "The threshold is not 'exactly 7 years'—it is about being within the short-lease category.",
        ],
      },
    },
    {
      topic: "Lease vs licence: service occupancy",
      q: "A school provides a caretaker with a flat on site so he can respond to emergencies. The contract says he must live there and leave when employment ends. Who is most likely correct about the arrangement?",
      choices: [
        "It is always a lease because it is a flat.",
        "It may be a licence (service occupancy) if occupation is truly required for performance of the job rather than a separate tenancy.",
        "It is always a periodic tenancy because wages are paid monthly.",
        "It is a fixed-term lease equal to the employment term.",
        "It is an easement because it relates to work.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where occupation is required for better performance of duties (service occupancy), the arrangement may be a licence rather than a tenancy, depending on the facts and intention.",
        whyWrong: [
          "The premises being a flat is not decisive.",
          "Wage periods do not determine property status.",
          "Employment term does not automatically create a lease term.",
          "Easements are rights over land, not occupation.",
        ],
      },
    },
    {
      topic: "Licence indicators: sharing and control",
      q: "A hostel provides beds in a dormitory; the operator can move residents between beds and rooms at any time, and residents have no control over who shares. What is the most likely classification?",
      choices: [
        "Lease, because residents sleep there.",
        "Lease, because payment is weekly.",
        "Licence, because there is no exclusive possession of identifiable premises.",
        "Lease, because rooms are within a building.",
        "Tenancy at sufferance.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "A licence is likely where the occupier lacks exclusive possession of identifiable premises and the provider retains real control and ability to move the occupier.",
        whyWrong: [
          "Sleeping there is not the test.",
          "Payment frequency is not decisive.",
          "",
          "Being within a building does not create exclusive possession.",
          "Tenancy at sufferance is holding over after a tenancy ends.",
        ],
      },
    },
    {
      topic: "Implied periodic tenancy by acceptance of rent",
      q: "A fixed-term lease ends. The tenant stays on. The landlord accepts monthly rent for three months without protest. What is the most likely outcome?",
      choices: [
        "Tenant is a trespasser and rent is a gift.",
        "A new monthly periodic tenancy is likely implied by acceptance of rent.",
        "The old fixed-term lease automatically renews for the same term.",
        "Tenant is a tenant at sufferance despite rent acceptance.",
        "Landlord loses all rights to possession permanently.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Acceptance of rent after expiry can imply landlord consent and a new periodic tenancy corresponding to the rent period.",
        whyWrong: [
          "Acceptance of rent usually indicates consent, not a gift.",
          "",
          "There is no automatic renewal for the same fixed term.",
          "Rent acceptance typically moves the relationship beyond mere sufferance.",
          "Landlord retains rights, including to terminate with proper notice.",
        ],
      },
    },
    {
      topic: "Assignment vs sublease",
      q: "Tenant grants a third party the right to occupy the premises for the last 3 years of Tenant’s 10-year term, keeping no reversion. What has Tenant done?",
      choices: ["Sublease", "Assignment", "Surrender", "Licence", "Novation"],
      correct: 1,
      explain: {
        whyRight:
          "If the tenant transfers the whole of their remaining term (leaving no reversion), it is an assignment, not a sublease.",
        whyWrong: [
          "A sublease requires the tenant to retain a reversion (even if very short).",
          "",
          "Surrender is giving the lease back to the landlord.",
          "A licence does not transfer an estate in land.",
          "Novation is a contract concept; the property concept here is assignment.",
        ],
      },
    },
    {
      topic: "Sublease: retention of reversion",
      q: "Tenant has a 10-year lease. After 2 years, Tenant grants Occupier a lease for 7 years, keeping the final 1 year. What is this?",
      choices: ["Assignment", "Sublease", "Surrender", "Easement", "Mortgage"],
      correct: 1,
      explain: {
        whyRight:
          "Because Tenant retains a reversionary period (the final year), the grant is a sublease (underlease), not an assignment.",
        whyWrong: [
          "Assignment would transfer the whole remaining term.",
          "",
          "Surrender is to the landlord, not to a third party.",
          "Easements are rights over land, not estates.",
          "A mortgage is security, not creating a subtenancy.",
        ],
      },
    },
    {
      topic: "Privity of contract vs privity of estate (overview)",
      q: "Tenant assigns a lease to Assignee. The landlord wants to sue the original Tenant for unpaid rent that accrued after the assignment. What is the best general statement?",
      choices: [
        "Landlord can never sue the original Tenant once assigned.",
        "Landlord may still be able to sue the original Tenant on privity of contract (especially for older tenancies), subject to statutory reforms for new tenancies.",
        "Landlord can sue only the assignee because privity of contract ends automatically in all cases.",
        "Landlord can sue only if the assignment was by deed poll.",
        "Landlord can sue only if the tenant is in occupation.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Historically, original parties remained liable on privity of contract after assignment; for 'new' tenancies, statutory rules modify this (often releasing the original tenant subject to permitted guarantees).",
        whyWrong: [
          "Not universally true across all tenancies; rules depend on whether the tenancy is old/new and on statutory regime.",
          "",
          "Privity of contract does not always end automatically.",
          "Deed poll is irrelevant.",
          "Occupation is not the test for contractual liability.",
        ],
      },
    },
    {
      topic:
        "Landlord and Tenant (Covenants) Act 1995: release on assignment (overview)",
      q: "A commercial lease granted in 2010 is assigned by the tenant in 2026. The landlord claims the assigning tenant remains liable for future rent simply because they signed the original lease. What is most accurate at a high level?",
      choices: [
        "Correct: original tenants are always liable forever.",
        "Incorrect: under the modern statutory regime for new tenancies, the assigning tenant is generally released from future liability on assignment, subject to permitted guarantees (e.g., AGA).",
        "Correct: release only applies to residential leases.",
        "Incorrect: the lease is void on assignment.",
        "Correct: only the landlord can be released, not the tenant.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For 'new' tenancies (post-1995 regime), assignment generally releases the outgoing tenant from future tenant covenants, though landlords may require an authorised guarantee agreement in some cases.",
        whyWrong: [
          "This overstates the old privity rule and ignores reforms.",
          "",
          "The regime is not limited to residential leases.",
          "Assignment does not void the lease.",
          "Release rules apply to tenants (and landlords) under the statutory framework.",
        ],
      },
    },
    {
      topic: "Repairing covenant: tenant liability",
      q: "A lease requires Tenant to “keep the premises in repair.” The roof deteriorates due to age and weather, causing leaks. Tenant argues: 'I didn’t cause the damage, so I’m not responsible.' What is most accurate?",
      choices: [
        "Tenant is not responsible unless they caused the disrepair.",
        "Tenant is likely responsible if the covenant is to keep in repair, which can require putting and keeping the property in repair regardless of fault.",
        "Tenant is responsible only if the landlord served a section 21 notice.",
        "Tenant is responsible only if the lease is registered.",
        "Tenant is never responsible for structural items like roofs.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A covenant to keep in repair can impose an objective duty to put and keep the premises in repair, not merely to avoid causing damage.",
        whyWrong: [
          "Fault is not required if the covenant is broadly drafted.",
          "",
          "Section 21 relates to assured shorthold possession, not repairing obligations.",
          "Registration is irrelevant to the covenant’s meaning.",
          "Structural responsibility depends on the lease terms; it is not 'never'.",
        ],
      },
    },
    {
      topic: "Quiet enjoyment (implied covenant)",
      q: "Landlord repeatedly enters Tenant’s flat without notice to show prospective buyers, despite Tenant’s objections. Which covenant is most directly engaged?",
      choices: [
        "Covenant for quiet enjoyment",
        "Covenant to pay rent",
        "Covenant to insure",
        "Covenant against alienation",
        "Covenant to keep in repair",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Quiet enjoyment protects the tenant’s lawful possession from substantial interference by the landlord or those claiming under them.",
        whyWrong: [
          "",
          "Rent relates to payment obligations.",
          "Insurance relates to risk cover, not interference with possession.",
          "Alienation relates to assignment/subletting, not landlord entry.",
          "Repair relates to condition, not repeated unlawful entry.",
        ],
      },
    },
    {
      topic: "Forfeiture: breach and s146 notice (overview)",
      q: "Tenant breaches a covenant to keep the premises in repair. The lease contains a forfeiture clause. Landlord wants to forfeit immediately by changing the locks. What is the best general advice?",
      choices: [
        "Landlord can forfeit immediately for any breach without notice.",
        "Landlord generally must serve a compliant s146 notice (for breaches other than non-payment of rent), giving particulars and time to remedy, before forfeiture.",
        "Landlord must always sue for damages only; forfeiture is abolished.",
        "Landlord can forfeit only if the tenant agrees in writing.",
        "Landlord can forfeit only if the lease is under 3 years.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For most breaches (other than non-payment of rent), forfeiture generally requires a s146 notice specifying the breach and giving a chance to remedy/compensate before re-entry/possession.",
        whyWrong: [
          "Immediate forfeiture without notice is generally not permitted for non-rent breaches.",
          "",
          "Forfeiture still exists, subject to controls.",
          "Tenant consent is not generally required if contractual/statutory conditions are met.",
          "Term length is not the controlling factor for s146.",
        ],
      },
    },
    {
      topic: "Forfeiture: non-payment of rent",
      q: "Tenant is two months late paying rent. The lease contains a forfeiture clause. Which is the most accurate general position?",
      choices: [
        "Landlord must always serve a s146 notice before forfeiture for non-payment of rent.",
        "Landlord may forfeit for non-payment of rent without a s146 notice (subject to statutory and procedural constraints, and potential relief).",
        "Landlord can never forfeit for non-payment of rent; only damages are available.",
        "Landlord can only forfeit if the tenant is in breach of repair covenants as well.",
        "Landlord can forfeit only by physically evicting the tenant without court.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Non-payment of rent is treated differently: forfeiture may be possible without a s146 notice, but enforcement is controlled (often requiring court process) and tenants may seek relief.",
        whyWrong: [
          "s146 is typically required for breaches other than rent.",
          "",
          "Forfeiture can exist for rent arrears if the lease allows it.",
          "Additional breaches are not required.",
          "Self-help eviction is heavily restricted; court process is commonly required, especially residentially.",
        ],
      },
    },
    {
      topic: "Waiver of forfeiture",
      q: "Tenant breaches a covenant. Landlord learns of the breach and, two weeks later, demands and accepts rent that accrued after the breach. Landlord then tries to forfeit for that breach. What is the strongest argument for Tenant?",
      choices: [
        "Landlord cannot forfeit because forfeiture clauses are void.",
        "Landlord may have waived the right to forfeit for that particular breach by unequivocally affirming the lease (e.g., accepting rent with knowledge).",
        "Tenant is immune because they paid rent once.",
        "Landlord can never waive forfeiture rights.",
        "Waiver applies only to non-payment of rent breaches.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Accepting rent that falls due after the landlord knows of the breach can amount to an election to treat the lease as continuing, waiving forfeiture for that breach.",
        whyWrong: [
          "Forfeiture clauses are generally valid (subject to controls).",
          "",
          "Payment once does not create immunity; the point is landlord election/waiver.",
          "Landlords can waive forfeiture rights for a breach by their conduct.",
          "Waiver principles can apply to various breaches, not only rent.",
        ],
      },
    },
    {
      topic: "Relief from forfeiture (overview)",
      q: "A landlord obtains possession for forfeiture due to rent arrears. Tenant immediately offers to pay all arrears and costs. What remedy may the tenant seek?",
      choices: [
        "Specific performance of the rent covenant",
        "Relief from forfeiture, potentially restoring the lease on terms",
        "Rectification of the register",
        "Adverse possession",
        "An easement by necessity",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Courts can grant relief from forfeiture, especially for non-payment of rent, typically on terms such as paying arrears and costs.",
        whyWrong: [
          "Specific performance is not the typical remedy here.",
          "",
          "Rectification concerns registered title mistakes, not forfeiture.",
          "Adverse possession is unrelated.",
          "Easements are unrelated.",
        ],
      },
    },
    {
      topic: "Alienation covenant: assignment/subletting",
      q: "A lease says: 'Tenant must not assign the lease without Landlord’s written consent.' Tenant assigns without asking. What is most likely?",
      choices: [
        "The assignment is automatically void and the assignee is a trespasser.",
        "The assignment may be effective to pass the leasehold estate, but Tenant is in breach of covenant and Landlord may have remedies (including potentially forfeiture if the lease provides).",
        "The assignment is valid and there is no breach because consent clauses are unenforceable.",
        "The assignment becomes a sublease automatically.",
        "The landlord must consent as a matter of law.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A breach of an alienation covenant does not necessarily make the assignment void; it can still transfer the estate while exposing the tenant to breach remedies (and potentially forfeiture).",
        whyWrong: [
          "Assignments aren’t automatically void; effectiveness and remedies are distinct issues.",
          "Consent clauses can be enforceable.",
          "",
          "Assignment and sublease are different; this does not convert it into a sublease.",
          "Landlord consent is required by the contract, but not automatically 'must be given' unless statute/lease implies reasonableness.",
        ],
      },
    },
    {
      topic: "Consent not to be unreasonably withheld (overview)",
      q: "A commercial lease requires landlord consent to assignment and states consent is “not to be unreasonably withheld.” Landlord refuses because they dislike the assignee’s branding colour scheme. Which is most accurate?",
      choices: [
        "Refusal is automatically reasonable because the landlord can choose freely.",
        "Refusal is likely unreasonable if it is based on irrelevant considerations not connected to the landlord and tenant relationship/property interest.",
        "Refusal is reasonable only if the landlord can prove the assignee will breach repairs.",
        "Refusal is valid only if the lease is registered.",
        "Refusal is valid if the landlord sends a s146 notice.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where consent must not be unreasonably withheld, the landlord’s reasons generally must relate to the subject matter of the lease/property and not be arbitrary or irrelevant.",
        whyWrong: [
          "A reasonableness constraint limits the landlord’s freedom.",
          "The landlord need not prove certainty of future breach, but must act reasonably.",
          "Registration is irrelevant to reasonableness of consent.",
          "s146 relates to forfeiture procedure, not whether refusal is reasonable.",
        ],
      },
    },
    {
      topic:
        "Covenants: landlord’s remedies against assignee (privity of estate)",
      q: "Tenant assigns a lease to Assignee. The lease contains a covenant to repair. Assignee later fails to repair. Against whom can the landlord most directly enforce the repair covenant while the assignee holds the term?",
      choices: [
        "Only the original tenant, never the assignee.",
        "Only the assignee, because privity of estate connects landlord and current tenant for covenants that run with the land.",
        "Only the guarantor, because landlords cannot sue tenants for repair.",
        "No one; repair covenants are unenforceable.",
        "Only the freeholder’s neighbour.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Landlord and current tenant are in privity of estate; covenants that touch and concern the land (like repair) are generally enforceable against the current tenant/assignee while they hold the term.",
        whyWrong: [
          "Landlords often can sue the current tenant; original tenant liability depends on regime/contract.",
          "",
          "Guarantors may be liable if validly bound, but the primary obligor is the current tenant on running covenants.",
          "Repair covenants are generally enforceable.",
          "Neighbours are irrelevant.",
        ],
      },
    },
    {
      topic: "Surrender",
      q: "Tenant and Landlord agree that Tenant will give up the lease early and Landlord will accept it back. Tenant vacates and returns keys, and Landlord expressly accepts the surrender in writing. What has occurred?",
      choices: [
        "Assignment",
        "Surrender of the lease",
        "Forfeiture",
        "Merger of freehold into leasehold",
        "Adverse possession",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A surrender is the yielding up of the lease by the tenant to the landlord, accepted by the landlord, ending the lease early.",
        whyWrong: [
          "Assignment transfers the lease to a third party.",
          "",
          "Forfeiture is landlord’s termination for breach.",
          "Merger is a different concept involving unity of estates.",
          "Adverse possession is unrelated.",
        ],
      },
    },
    {
      topic: "Surrender by operation of law (implied)",
      q: "Tenant agrees with Landlord to move out early. Landlord grants a new lease of the same premises to a new tenant starting immediately, and the new tenant moves in. Tenant later claims their old lease still exists. What is the best analysis?",
      choices: [
        "The old lease necessarily continues unless a deed of surrender was executed.",
        "There may be a surrender by operation of law because the parties’ conduct is inconsistent with the continuation of the old lease.",
        "The old lease continues and the new lease is void.",
        "Both leases exist simultaneously over the same premises.",
        "The situation creates an easement.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A surrender can arise by operation of law where the parties’ conduct is unequivocally inconsistent with the lease continuing (e.g., landlord granting and giving possession under a new lease).",
        whyWrong: [
          "A deed is not always required if surrender arises by operation of law.",
          "A new lease is not automatically void; the old lease may be treated as surrendered.",
          "Two inconsistent leases over the same premises at the same time is not generally the intended outcome.",
          "Easements are unrelated.",
        ],
      },
    },
    {
      topic: "Break clause: conditions",
      q: "A 10-year lease contains a tenant’s break clause at year 5, conditional on (i) giving 3 months’ notice and (ii) paying all rent due up to the break date. Tenant gives proper notice but mistakenly underpays rent by £50 due to a calculation error. What is the best risk analysis?",
      choices: [
        "The break will always work because it is a minor error.",
        "The break may fail if the condition is strictly construed and not satisfied (depending on wording), so tenant must take extreme care to comply.",
        "The break works automatically on service of notice regardless of conditions.",
        "The landlord must accept the break because withholding consent is unreasonable.",
        "The break converts the lease into a periodic tenancy automatically.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Break conditions are often construed strictly. If full compliance is required, even small underpayment can jeopardise the break, depending on the precise clause wording.",
        whyWrong: [
          "Courts may be strict; 'minor' is not guaranteed to be excused.",
          "",
          "Conditions matter; notice alone may not suffice.",
          "Break clauses are not typically about landlord consent (unless drafted that way).",
          "A break ends the lease (if effective), not convert it into periodic tenancy.",
        ],
      },
    },
    {
      topic: "Rent review clause (overview)",
      q: "A lease says rent is 'to be agreed from time to time' with no mechanism if the parties cannot agree. Tenant argues the lease is void for uncertainty. What is most accurate?",
      choices: [
        "The entire lease is automatically void for uncertainty.",
        "The lease can still be valid; the uncertain rent review provision may be severed/ineffective while the lease continues on the existing rent (depending on construction).",
        "The lease becomes a licence immediately.",
        "The landlord can set any rent unilaterally.",
        "The court will always set rent at the tenant’s preferred level.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An uncertain rent review mechanism does not always void the lease; courts may treat the review clause as ineffective while maintaining the lease on the last certain rent, depending on drafting and context.",
        whyWrong: [
          "Uncertainty in a subsidiary clause does not necessarily invalidate the whole lease.",
          "",
          "Invalid rent review does not convert a lease into a licence.",
          "Unilateral landlord setting is not implied unless clearly provided.",
          "Courts do not set rent at a party’s preference; mechanisms depend on agreement/interpretation.",
        ],
      },
    },
    {
      topic: "Leasehold title: 'term of years absolute'",
      q: "Which statement best describes the leasehold legal estate?",
      choices: [
        "A leasehold is ownership of land forever.",
        "A leasehold is a term of years absolute: an estate giving exclusive possession for a fixed or periodic duration.",
        "A leasehold is always equitable.",
        "A leasehold is a personal licence only.",
        "A leasehold is a freehold remainder.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The leasehold legal estate is the term of years absolute: a time-limited estate granting exclusive possession.",
        whyWrong: [
          "That describes freehold (fee simple), not leasehold.",
          "",
          "Leasehold can be legal (if formalities/registration met).",
          "A licence is not an estate.",
          "A remainder is a future freehold interest, not leasehold.",
        ],
      },
    },
    {
      topic: "Exclusive possession: sharing arrangements (genuine)",
      q: "A landlord genuinely runs a shared house and reserves a real right to move residents between rooms to manage capacity, and does so regularly. Residents have individual room keys but can be moved with short notice. Is a resident most likely to have exclusive possession of a particular room?",
      choices: [
        "Yes, because having a key always proves exclusive possession.",
        "Yes, because payment is monthly.",
        "Not necessarily; a genuine right to move occupants and actual exercise of control can indicate no exclusive possession of specific premises, pointing to a licence.",
        "Yes, because the landlord cannot ever enter shared accommodation.",
        "No, because exclusive possession can exist only in self-contained flats.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "If the landlord genuinely retains and exercises control to move occupants and manage rooms, residents may lack exclusive possession of identifiable premises, indicating a licence rather than a tenancy of a specific room.",
        whyWrong: [
          "Keys are evidence but not conclusive.",
          "Payment frequency is not decisive.",
          "",
          "Landlords can retain entry rights consistent with tenancies; the question is the genuine control and premises identification.",
          "Exclusive possession can exist for rooms as well as flats, depending on facts.",
        ],
      },
    },
    {
      topic: "Creation of equitable lease: contract formalities",
      q: "Landlord and Tenant sign a written agreement for a 4-year lease, containing all agreed terms and signed by both. The parties intended a formal lease later by deed. Tenant takes possession. What is the best analysis?",
      choices: [
        "No rights exist until the deed is executed.",
        "An equitable lease may arise from the enforceable contract, even if the legal lease requires a deed.",
        "The arrangement is automatically a licence.",
        "It is a legal lease because it is in writing.",
        "It is void because the landlord intended a later deed.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A specifically enforceable contract for a lease can create an equitable lease, even though the legal lease requires a deed/registration.",
        whyWrong: [
          "Equity can recognise rights arising from a binding contract.",
          "Licence is not automatic if exclusive possession and term exist.",
          "Writing alone does not always create a legal lease where a deed is required.",
          "Intending a later deed does not necessarily negate the enforceable contract effect.",
        ],
      },
    },
    {
      topic: "Lease covenants: 'touch and concern' concept (overview)",
      q: "Which covenant is most likely to 'touch and concern' the land (and so run with the leasehold estate via privity of estate while the tenant holds the term)?",
      choices: [
        "Tenant promises to buy the landlord a birthday gift each year.",
        "Tenant promises to pay rent.",
        "Tenant promises to work for the landlord’s company.",
        "Tenant promises not to criticise the landlord online.",
        "Tenant promises to lend the landlord £5,000.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Payment of rent is a classic covenant touching and concerning the land, relating directly to the leasehold relationship and property.",
        whyWrong: [
          "Personal gifts are not connected to the land.",
          "",
          "Employment promises are personal, not land-related covenants.",
          "Online criticism is unrelated to land use/occupation.",
          "A loan is personal and collateral, not a land covenant.",
        ],
      },
    },
    {
      topic: "Landlord covenants running to assignee (overview)",
      q: "A lease requires the landlord to insure the building. The landlord assigns the reversion to NewLandlord. Tenant suffers loss because the building is uninsured after the assignment. Who can Tenant usually sue on the insurance covenant during NewLandlord’s ownership?",
      choices: [
        "Only the original landlord, never NewLandlord.",
        "NewLandlord, because landlord covenants that touch and concern can run with the reversion via privity of estate (subject to the statutory regime).",
        "Only the tenant’s insurer.",
        "No one; landlord covenants never run.",
        "Only if Tenant registered a notice on the freehold title.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Covenants that touch and concern the land can run with the reversion so the current landlord can be liable while holding the reversion (with modern statutory rules supporting this).",
        whyWrong: [
          "Not always true; liability may pass with the reversion for running covenants.",
          "",
          "Tenant’s insurer is not the promisor on the covenant.",
          "Landlord covenants can run with the reversion.",
          "Notice registration is not the mechanism for lease covenants running.",
        ],
      },
    },
    {
      topic:
        "Determining if a clause grants a lease or licence: certainty of premises",
      q: "An agreement allows Jordan to “use any room in the building as allocated by the owner from time to time.” Jordan pays weekly and can be moved between rooms. What is the strongest reason this is unlikely to be a lease of a particular room?",
      choices: [
        "Rent is paid weekly.",
        "The premises are not sufficiently certain/identified to support a lease of a particular room, and exclusive possession is lacking.",
        "Jordan is a student.",
        "The building has multiple floors.",
        "Jordan can decorate the room.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A lease generally requires identifiable premises and exclusive possession. If the occupier can be moved and the premises are not fixed, it points away from a lease.",
        whyWrong: [
          "Weekly rent is not determinative.",
          "",
          "Student status is irrelevant.",
          "Number of floors is irrelevant.",
          "Decoration permission is not decisive.",
        ],
      },
    },
    {
      topic:
        "Lease determination: notice to quit for periodic tenancy (overview)",
      q: "A monthly periodic tenancy exists. Tenant wants to end it. What is the best general rule (ignoring special statutory regimes) for the notice required?",
      choices: [
        "No notice is needed; the tenant can leave any day.",
        "At least one full period’s notice, expiring at the end of a period of the tenancy, unless modified by agreement/statute.",
        "Exactly 6 months’ notice in all cases.",
        "Notice must be given only on the first day of a month.",
        "Only the landlord can end a periodic tenancy.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "At common law, periodic tenancies generally require at least one full period’s notice, expiring at the end of a tenancy period, unless the tenancy agreement or statute changes this.",
        whyWrong: [
          "Periodic tenancies usually require notice.",
          "",
          "There is no universal 6-month rule.",
          "Notice timing depends on tenancy periods and any agreed/statutory rules.",
          "Tenants can end periodic tenancies by proper notice.",
        ],
      },
    },
    {
      topic: "Lease vs licence: family arrangement",
      q: "A parent lets their adult child live in a spare house rent-free for 18 months, with an understanding it’s temporary and the parent can use the house whenever visiting. The child has keys but the parent keeps a set and stays regularly. What is most likely?",
      choices: [
        "A lease, because there is a house and keys.",
        "A licence is more likely in a domestic/family context where there is no intention to create legal relations and no true exclusive possession.",
        "A lease automatically because the period is 18 months.",
        "A tenancy at sufferance.",
        "A legal mortgage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In domestic/family contexts, courts often find no intention to create legal relations and/or no exclusive possession, pointing to a licence rather than a tenancy.",
        whyWrong: [
          "Keys and premises type are not conclusive.",
          "Duration alone does not compel a lease finding.",
          "",
          "Tenancy at sufferance requires holding over after a tenancy ends.",
          "A mortgage is unrelated.",
        ],
      },
    },
    {
      topic:
        "Leasehold estate: enforceability against third parties (registered land)",
      q: "Tenant has an equitable lease of registered land (because the 10-year lease was not registered). Landlord sells the freehold to Buyer for value who registers. Tenant remains in occupation. Which is the best analysis of whether Buyer is bound?",
      choices: [
        "Buyer is never bound because the lease is only equitable.",
        "Buyer may be bound if Tenant’s interest qualifies as an overriding interest through actual occupation (subject to statutory exceptions).",
        "Buyer is bound only if Tenant entered a notice.",
        "Buyer is bound only if Tenant paid a premium.",
        "Buyer is bound only if the landlord told Buyer verbally.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Even equitable interests can bind a purchaser of registered land if they qualify as overriding interests, commonly via the holder’s actual occupation at the time of the disposition.",
        whyWrong: [
          "Equitable interests can bind if overriding/protected.",
          "A notice can protect, but overriding status can exist without it.",
          "Premium is not determinative.",
          "Verbal disclosure is not the legal test under the registered land priority scheme.",
        ],
      },
    },
    {
      topic: "Unregistered land: equitable lease protection (overview)",
      q: "Owner of unregistered land grants Tenant a 7-year lease by written contract but no deed. Tenant does not register anything as a land charge. Owner later sells the freehold to Buyer for value. Tenant claims the lease binds Buyer. What is the best high-level risk point?",
      choices: [
        "Tenant is fully protected because they are in occupation.",
        "If the lease is only equitable and is registrable as a land charge but not registered, it may be void against a purchaser for value under the unregistered land scheme.",
        "Tenant is protected because unregistered land has no priority rules.",
        "Tenant is protected because leases cannot be land charges.",
        "Tenant is protected only if rent is paid weekly.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In unregistered land, certain equitable interests (including some lease-related interests/estate contracts) need land charges registration to bind purchasers for value; non-registration can be fatal.",
        whyWrong: [
          "Occupation alone is not the land charges protection mechanism for registrable interests.",
          "Unregistered land has its own priority system (land charges + notice).",
          "Some lease-related equitable rights can fall within registrable categories.",
          "Rent frequency is irrelevant.",
        ],
      },
    },
    {
      topic: "Term commencement: 'in possession'",
      q: "A clause grants Tenant a right to occupy 'from 1 January next year' for 2 years. Tenant asks what 'in possession' means in this context. Which is most accurate?",
      choices: [
        "It means the tenant must physically move in on day one.",
        "It means the lease gives a right to immediate possession when the term starts (as opposed to a future interest that is not yet possessory).",
        "It means the lease is necessarily a freehold.",
        "It means rent is payable in advance only.",
        "It means the landlord cannot ever enter.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "‘In possession’ refers to the right to possession at the relevant time; a lease can be granted to take effect in the future, becoming possessory when the commencement date arrives.",
        whyWrong: [
          "Physical move-in is not the definition.",
          "A lease is not a freehold.",
          "Rent timing is not what 'in possession' means.",
          "Landlord entry can be compatible with a lease (e.g., with notice), depending on terms.",
        ],
      },
    },
    {
      topic: "Fixtures vs chattels (lease context)",
      q: "At the end of a lease, Tenant removes a large wall-mounted shelving system bolted into the walls to run a retail shop. Landlord claims it must stay because it is a fixture. What is the best general approach?",
      choices: [
        "Anything bolted is always a fixture and must stay.",
        "Determine whether it is a fixture by degree and purpose of annexation; some trade fixtures may be removable if removal causes no substantial damage and is done in time.",
        "Tenant can remove anything they paid for at any time, even after leaving.",
        "Landlord always owns everything inside the premises.",
        "It is always a chattel if used for business.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Fixtures/chattels depend on annexation tests. In leases, tenants may remove certain trade fixtures if done properly and without substantial damage, typically before lease ends or within allowed time.",
        whyWrong: [
          "Bolting is evidence but not conclusive; purpose matters too.",
          "Removal rights are time-sensitive and can be constrained by damage and agreement.",
          "Landlord does not automatically own all items; classification matters.",
          "Business use alone does not make it a chattel.",
        ],
      },
    },
  ];

  window.quizData = {
    title: "Land Law — Chapter 5: Leasehold Estates",
    subtitle:
      "30 SQE-style scenario MCQs (5 options each) in quizDataSchema format",
    questions: questions,
  };
})();
