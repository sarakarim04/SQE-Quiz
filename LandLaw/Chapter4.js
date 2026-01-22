(() => {
  const questions = [
    {
      topic: "Fee simple absolute in possession",
      q: "Arjun buys a house described in the transfer as a “freehold”. Which statement best describes the freehold estate recognised in English land law?",
      choices: [
        "A freehold is ownership of land forever with no concept of tenure.",
        "A freehold is the fee simple absolute in possession: an estate of potentially indefinite duration giving immediate right to possession.",
        "A freehold is the term of years absolute granted for a fixed period.",
        "A freehold is a personal licence to occupy that ends on sale.",
        "A freehold is an equitable interest only until the owner moves in.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The freehold legal estate is the fee simple absolute in possession: potentially perpetual and giving immediate right to possession.",
        whyWrong: [
          "Tenure still underpins landholding; freehold is an estate, not absolute ownership of the physical land.",
          "That describes leasehold, not freehold.",
          "A licence is personal, not a freehold estate.",
          "Moving in is not what makes a freehold legal; formalities/registration govern.",
        ],
      },
    },
    {
      topic: "Possession vs remainder",
      q: "Helen transfers her freehold 'to Tom for life, then to Maya and her heirs.' Which statement is most accurate about what Maya receives?",
      choices: [
        "Maya receives a present legal freehold in possession immediately.",
        "Maya receives a future interest (a remainder) that becomes possessory when Tom’s life interest ends.",
        "Maya receives only a personal contractual right against Helen.",
        "Maya receives a leasehold because her right starts later.",
        "Maya receives nothing because future interests are invalid.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Tom has a life estate in possession; Maya has a remainder (future interest) that becomes possessory on Tom’s death.",
        whyWrong: [
          "Maya’s interest is not in possession until the life estate ends.",
          "",
          "The gift creates a proprietary future interest, not merely a contract right.",
          "A future freehold interest is not automatically a leasehold.",
          "Future interests can be valid if properly created and not offending relevant rules.",
        ],
      },
    },
    {
      topic: "Freehold covenants vs estates (distinction)",
      q: "A buyer is told: 'The freehold estate is the ownership; the covenant is an interest.' What is the best explanation of the difference?",
      choices: [
        "An estate defines the time-based slice of ownership; a covenant is a promise that may bind land depending on rules.",
        "An estate is always equitable; a covenant is always legal.",
        "A covenant is a type of freehold estate.",
        "There is no difference; they mean the same thing.",
        "A covenant is the physical boundary of the land.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "The estate is the legal ownership interest in time (freehold/leasehold). A covenant is a land obligation (promise) that may run with the land if rules are met.",
        whyWrong: [
          "",
          "Estates can be legal; covenants can be legal/equitable depending on context and protection.",
          "Covenants are not estates; they are obligations affecting land.",
          "They are distinct concepts in land law.",
          "Covenants do not define boundaries.",
        ],
      },
    },
    {
      topic: "Legal vs equitable freehold interests",
      q: "Jade agrees in a signed written contract to sell her registered freehold to Kyle. Completion is in 8 weeks. Kyle asks whether he has 'any property right' before completion. What is most accurate?",
      choices: [
        "Kyle has the legal freehold immediately on exchange.",
        "Kyle acquires an equitable interest (estate contract) under the contract, but the legal estate transfers on completion/registration.",
        "Kyle has no rights at all until the keys are handed over.",
        "Kyle becomes a joint tenant with Jade on exchange.",
        "Kyle has a legal lease until completion.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A contract for sale can create an equitable interest (estate contract). Legal title transfers on completion and, in registered land, on registration of the registrable disposition.",
        whyWrong: [
          "Legal title does not pass on exchange in registered land; registration completes legal transfer.",
          "",
          "Kyle has contractual and equitable rights before completion.",
          "Exchange does not make Kyle a joint tenant with the seller.",
          "A sale contract does not create a lease by default.",
        ],
      },
    },
    {
      topic: "Co-ownership of the legal estate",
      q: "Two siblings buy a freehold house and want to hold the legal title as tenants in common so each can leave their share by will. What is the correct position?",
      choices: [
        "They can hold legal title as tenants in common if they sign a declaration.",
        "They must hold the legal title as joint tenants; severance affects only the beneficial interest.",
        "They must hold both legal and beneficial title as tenants in common.",
        "They cannot co-own a freehold; only leaseholds can be co-owned.",
        "They can only co-own if they are married.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "At law, co-owners hold the legal estate as joint tenants. In equity, they can hold the beneficial interest as joint tenants or tenants in common, and severance affects the equitable joint tenancy.",
        whyWrong: [
          "Legal co-ownership as tenants in common is not recognised.",
          "",
          "Beneficial ownership can be tenancy in common, but legal must be joint tenancy.",
          "Freeholds can be co-owned.",
          "Marriage is irrelevant.",
        ],
      },
    },
    {
      topic: "Joint tenancy: right of survivorship",
      q: "Amir and Beth own a freehold house as beneficial joint tenants. Amir dies leaving a will giving 'my share of the house' to his sister. What happens to Amir’s beneficial share?",
      choices: [
        "It passes under Amir’s will to his sister.",
        "It passes automatically to Beth by survivorship and does not form part of Amir’s estate.",
        "It passes 50/50 to Beth and the sister.",
        "It is held on resulting trust for the sister.",
        "It reverts to the Crown.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A key feature of a joint tenancy is survivorship: the deceased’s share does not pass by will but accrues to the survivor.",
        whyWrong: [
          "A joint tenant cannot dispose of a 'share' by will unless the joint tenancy was severed first.",
          "",
          "Survivorship means the survivor takes the whole beneficial interest.",
          "Resulting trust does not apply simply because of a will.",
          "No Crown reversion occurs here.",
        ],
      },
    },
    {
      topic: "Severance: effect",
      q: "Cara and Dan own a freehold house as beneficial joint tenants. Cara validly severs her beneficial joint tenancy. Which is the result?",
      choices: [
        "The legal title becomes a tenancy in common.",
        "Cara and Dan become beneficial tenants in common (shares), so survivorship ends.",
        "The house must be sold immediately.",
        "Dan’s consent is always required for severance.",
        "Severance converts the freehold into leasehold.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Severance affects the beneficial interest: it converts a beneficial joint tenancy into a tenancy in common so that survivorship no longer applies.",
        whyWrong: [
          "Legal title remains a joint tenancy at law.",
          "",
          "Severance does not force a sale automatically (though disputes may lead to applications).",
          "Dan’s consent is not always required; severance can occur by notice/acts depending on rules.",
          "It does not change the estate type.",
        ],
      },
    },
    {
      topic: "Mortgage by one co-owner: effect on severance (principle)",
      q: "Eli and Farah are beneficial joint tenants of a registered freehold. Eli grants a mortgage over his interest to Bank (without Farah joining). What is the best general statement for SQE purposes?",
      choices: [
        "A mortgage by one joint tenant can sever the beneficial joint tenancy as to that share, depending on the nature of the mortgage and jurisdictional approach.",
        "A mortgage by one joint tenant is impossible.",
        "A mortgage by one joint tenant automatically transfers the whole property to the bank.",
        "A mortgage by one joint tenant has no effect on any rights at all.",
        "A mortgage by one joint tenant converts the legal estate into a tenancy in common.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Granting a charge over a joint tenant’s beneficial interest can be treated as an act operating on that share, potentially severing the beneficial joint tenancy (the precise analysis can depend on the legal form of the mortgage).",
        whyWrong: [
          "A co-owner can generally deal with their beneficial interest, subject to limits.",
          "A bank does not automatically take the whole; it takes security over the mortgagor’s interest.",
          "It affects the mortgagor’s interest and potentially severance/priority.",
          "Legal title remains joint tenancy; severance is equitable.",
        ],
      },
    },
    {
      topic: "Trusts of land: overreaching (freehold sale)",
      q: "Two trustees sell a registered freehold to Buyer and Buyer pays the full price to both trustees. A beneficiary claims a beneficial interest and says they were in actual occupation. Buyer wants to know if they take free. What is most accurate?",
      choices: [
        "Buyer always takes subject because occupation overrides everything.",
        "Buyer takes free because the beneficial interest is overreached onto the proceeds when paid to two trustees.",
        "Buyer takes free only if the beneficiary signed a consent.",
        "Buyer takes subject unless a notice was on the register.",
        "Buyer takes subject because beneficial interests cannot be overreached in freehold sales.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Overreaching applies on a qualifying disposition by two trustees (or trust corporation) with payment to them, detaching beneficial interests from the land and attaching them to the proceeds, so the buyer takes free.",
        whyWrong: [
          "Actual occupation does not prevent overreaching where the statutory conditions are met.",
          "",
          "Consent is not a legal prerequisite for overreaching.",
          "Notices/restrictions may be relevant but overreaching can still operate to give the buyer clean title.",
          "Beneficial interests can be overreached in freehold sales.",
        ],
      },
    },
    {
      topic: "Legal freehold and third-party rights: priority basics",
      q: "Gita owns a registered freehold. She grants Henry an equitable option to purchase, and Henry enters a notice. Gita later sells to Buyer for value who registers. Which is correct?",
      choices: [
        "Buyer takes free because options are always personal.",
        "Buyer takes subject to Henry’s option because it is protected by a notice on the register.",
        "Buyer takes free unless Henry is in actual occupation.",
        "Buyer takes subject only if Buyer had actual notice.",
        "Buyer takes free because Henry’s right is equitable.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A notice protects an interest such as an option; a buyer for value takes subject to register entries.",
        whyWrong: [
          "Options can be proprietary in effect and are protectable.",
          "",
          "Occupation is not required when the interest is protected on the register.",
          "Actual notice is not required because the register provides constructive notice.",
          "Equitable interests can bind when properly protected.",
        ],
      },
    },
    {
      topic: "Registered freehold transfer: completion by registration",
      q: "Isaac completes on a purchase of a registered freehold and receives the signed transfer deed. He does not apply for registration. Seller later grants a registered charge to Bank, which is registered. Isaac then applies to be registered. What is Isaac’s main risk?",
      choices: [
        "No risk: Isaac already had legal title from the deed.",
        "Isaac risks being postponed to the bank’s registered charge because his transfer did not operate at law until registration.",
        "The bank’s charge is void because the seller had already sold.",
        "Isaac automatically becomes proprietor backdated to exchange.",
        "Isaac can defeat the bank by searching the Land Charges register.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A registered freehold transfer is a registrable disposition: legal title passes on registration. Delay can allow later registered dealings (like a charge) to gain priority, leaving the buyer subject to them.",
        whyWrong: [
          "In registered land, the deed alone does not complete the legal transfer for registrable dispositions.",
          "",
          "The register treats the seller as proprietor until registration; the bank may be protected if it registers first.",
          "There is no automatic backdating to exchange for priority against later registered dispositions.",
          "Land Charges searches are for unregistered land.",
        ],
      },
    },
    {
      topic: "Freehold estate: waste and use (overview)",
      q: "A life tenant in possession starts demolishing the main structure of the house. The remainderman objects. Which broad concept is most relevant?",
      choices: [
        "Doctrine of waste: limits on a life tenant’s ability to damage the inheritance.",
        "Doctrine of notice in unregistered land.",
        "Overriding interests.",
        "Adverse possession.",
        "Doctrine of merger of leasehold.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "A life tenant holds a present freehold interest but is subject to duties not to commit waste that prejudices the remainderman’s interest.",
        whyWrong: [
          "",
          "Notice in unregistered land is unrelated to life tenant conduct.",
          "Overriding interests are about priority in registered land.",
          "Adverse possession is unrelated to the life tenant’s use vis-à-vis the remainderman.",
          "Merger of leasehold is irrelevant.",
        ],
      },
    },
    {
      topic: "Determinable vs conditional fee (conceptual)",
      q: "A deed grants land 'to Zara and her heirs so long as the land is used as a community garden.' If the use ceases, what is the best characterization?",
      choices: [
        "A fixed-term lease for as long as it is a garden.",
        "A determinable fee simple where the estate automatically ends on cessation of the stated use.",
        "A life estate because it depends on use.",
        "A licence because it is conditional.",
        "An easement because it concerns use.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Language like 'so long as' typically indicates a determinable fee that ends automatically when the condition is no longer met.",
        whyWrong: [
          "This is not a lease: no landlord–tenant relationship or term of years is created.",
          "",
          "It is not limited to a person’s life.",
          "Conditional language does not make it a licence; it can still be a freehold estate.",
          "It is not a right over another’s land.",
        ],
      },
    },
    {
      topic: "Condition subsequent (conceptual)",
      q: "A deed grants land 'to Ben and his heirs, but if alcohol is sold on the premises, the grantor may re-enter.' What is most accurate?",
      choices: [
        "A determinable fee which ends automatically if alcohol is sold.",
        "A fee simple subject to condition subsequent: the grantor has a right of re-entry if the condition is breached.",
        "A lease with a forfeiture clause.",
        "A mere personal promise with no property effect.",
        "A rentcharge.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Language like 'but if... may re-enter' indicates a condition subsequent: the estate does not end automatically; the grantor must exercise the right of re-entry.",
        whyWrong: [
          "Determinable fees typically use 'so long as/until' and end automatically.",
          "",
          "This is not a landlord–tenant lease forfeiture clause; it is attached to a freehold grant.",
          "It is more than a personal promise; it creates a proprietary condition/right of re-entry conceptually.",
          "A rentcharge is a different proprietary interest.",
        ],
      },
    },
    {
      topic: "Remainders and vesting (overview)",
      q: "A freehold is granted 'to Alex for life, then to Bianca if she reaches 25.' Bianca is 20 at the time of the grant. What is most accurate?",
      choices: [
        "Bianca has an immediately vested remainder in possession.",
        "Bianca has a contingent remainder, because the condition must be satisfied before the remainder vests.",
        "Bianca has a leasehold interest.",
        "Bianca has no proprietary interest at all until she turns 25.",
        "Bianca becomes a joint tenant with Alex.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A remainder dependent on a condition precedent (reaching 25) is typically contingent until the condition is met.",
        whyWrong: [
          "It is not vested if it is conditional on reaching 25.",
          "",
          "This is not leasehold.",
          "Bianca can have a proprietary future interest even before 25 (contingent), not 'nothing'.",
          "No joint tenancy is created by this wording.",
        ],
      },
    },
    {
      topic: "Reversion",
      q: "Owner grants a lease for 10 years of her freehold house to Tenant. Owner asks what interest she retains during the lease. What is correct?",
      choices: [
        "Owner retains no interest until the lease ends.",
        "Owner retains a reversion: the freehold interest that will come back into possession when the lease ends.",
        "Owner retains only an easement.",
        "Owner retains a licence.",
        "Owner retains a mortgage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Granting a lease carves out a term of years from the freehold; the landlord retains the reversion, which becomes possessory again when the lease ends.",
        whyWrong: [
          "The landlord retains the freehold reversion throughout.",
          "",
          "An easement is unrelated.",
          "A licence is not the landlord’s retained estate.",
          "A mortgage is separate from the landlord/tenant relationship.",
        ],
      },
    },
    {
      topic: "Freehold and capacity: corporation sole / trustees (overview)",
      q: "A charity is registered as freehold proprietor but holds the land on trust. A beneficiary asks why their name is not on the register as proprietor. What is the best explanation?",
      choices: [
        "Beneficiaries must always be registered as proprietors.",
        "Legal title is held by trustees/proprietor; beneficial interests are usually kept off the register and protected by restrictions.",
        "Beneficial ownership is illegal in freehold land.",
        "The Land Registry registers only tenants, not owners.",
        "The beneficiary should file a land charge.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Trustees hold legal title as registered proprietors; beneficiaries’ equitable interests are typically protected through restrictions and overreaching rather than registration as proprietor.",
        whyWrong: [
          "Beneficiaries are not typically registered as legal proprietors.",
          "",
          "Beneficial ownership is lawful and central to trust law.",
          "The Land Registry registers proprietors and interests, not only tenants.",
          "Land charges registration is for unregistered land.",
        ],
      },
    },
    {
      topic: "Freehold estates: co-owners selling",
      q: "Two registered proprietors hold a freehold as legal joint tenants. One disappears and cannot be found. The remaining proprietor wants to sell alone. What is the best initial advice?",
      choices: [
        "They can sell alone because survivorship lets them act for both.",
        "They cannot validly convey legal title alone without dealing with the missing co-owner’s legal title; they may need a court order/trustee appointment solution.",
        "They can sell if the buyer agrees in writing.",
        "They can sell if the missing co-owner’s name is deleted from utility bills.",
        "They can sell by registering a unilateral notice.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A disposition of the legal estate requires the participation of all legal owners (or a lawful mechanism to replace/appoint trustees). Survivorship applies on death, not mere disappearance.",
        whyWrong: [
          "Survivorship is triggered by death and concerns beneficial interests; it does not allow unilateral sale while both are alive.",
          "",
          "Buyer consent cannot fix lack of authority to convey legal title.",
          "Utility bills are irrelevant to legal title.",
          "A notice does not replace the missing owner’s legal participation.",
        ],
      },
    },
    {
      topic: "Freehold estates: trust and overreaching requirement",
      q: "A sole registered proprietor holds freehold land on trust for himself and his sister. He sells the property alone to Buyer for value. Buyer pays the full price to him. The sister claims Buyer is bound by her beneficial interest. What is the best analysis?",
      choices: [
        "Buyer takes free because any purchase for value overreaches automatically.",
        "Buyer may be bound because overreaching usually requires payment to at least two trustees (or a trust corporation) and that did not happen.",
        "Buyer always takes free because beneficial interests are never binding in registered land.",
        "Buyer takes free because the sister was not in occupation.",
        "Buyer is bound only if her interest was entered as a notice.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Overreaching of beneficial interests typically requires a disposition by two trustees (or a trust corporation) with payment to them. A sale by a sole trustee may not overreach, leaving a risk the beneficial interest binds (e.g., via actual occupation).",
        whyWrong: [
          "Overreaching is not automatic on any purchase for value; statutory conditions apply.",
          "Beneficial interests can bind in registered land, particularly as overriding interests if in actual occupation.",
          "",
          "Occupation may matter for overriding status, but the key overreaching defect exists regardless.",
          "Trust beneficial interests are typically protected by restrictions, not notices; and lack of notice does not itself guarantee the buyer takes free.",
        ],
      },
    },
    {
      topic: "Estate contracts over freeholds (overview)",
      q: "A developer grants a buyer an option to purchase a freehold plot in 6 months. The plot is registered. What is the best way for the option-holder to protect their interest?",
      choices: [
        "Register the option as the new proprietor immediately.",
        "Enter a notice on the Charges Register of the freehold title.",
        "Enter a caution against first registration.",
        "Rely on doctrine of notice.",
        "Rely on adverse possession.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In registered land, an option (estate contract) is typically protected by a notice on the Charges Register so that a purchaser for value takes subject to it.",
        whyWrong: [
          "An option-holder is not the proprietor until the option is exercised and a transfer is completed/registered.",
          "",
          "Cautions against first registration apply to unregistered land.",
          "Doctrine of notice is not the registered-land protection mechanism.",
          "Adverse possession is unrelated to options.",
        ],
      },
    },
    {
      topic: "Freehold: overriding interests vs register entries (summary)",
      q: "A buyer of a registered freehold is told: 'Anything not on the register can’t bind you.' Which is the best correction?",
      choices: [
        "Correct: the register is always complete.",
        "Incorrect: certain overriding interests (e.g., some short leases, some legal easements, and interests of persons in actual occupation) can bind despite not being entered.",
        "Correct if the buyer is a cash buyer.",
        "Incorrect only in unregistered land.",
        "Correct if the buyer has a survey.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registered land is designed to be comprehensive, but overriding interests remain a key exception that can bind even without entry on the register.",
        whyWrong: [
          "The system includes exceptions.",
          "Payment method is irrelevant.",
          "",
          "Overriding interests are a registered land concept; unregistered land uses different rules.",
          "A survey does not eliminate legal overriding risks.",
        ],
      },
    },
    {
      topic: "Freehold estates: title absolute vs possessory (overview)",
      q: "A client is registered as proprietor with 'possessory title' to a freehold. They ask what this generally indicates. Which is best?",
      choices: [
        "It means the property is leasehold, not freehold.",
        "It generally indicates the title is registered but based on possession/limited documentary evidence, and can be vulnerable to prior adverse claims compared with absolute title.",
        "It means the Land Registry guarantees there are no adverse claims.",
        "It means the client has only an equitable interest.",
        "It means the client must sell within one year.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Possessory title generally reflects registration based on possession rather than full documentary title, leaving some vulnerability to earlier interests/claims (subject to limitation/indemnity rules).",
        whyWrong: [
          "Title class is separate from whether the estate is freehold/leasehold.",
          "It is not the strongest guarantee; absolute title is stronger.",
          "The registered proprietor holds legal title, but with a weaker class of title.",
          "There is no automatic sale requirement.",
        ],
      },
    },
    {
      topic: "Freehold estate: adverse possession and title class (overview)",
      q: "A squatter successfully becomes registered proprietor of a freehold after adverse possession. Which class of title is most likely at first registration?",
      choices: [
        "Absolute title automatically.",
        "Possessory title initially (often), reflecting acquisition by possession rather than full documentary title.",
        "Qualified title only.",
        "Good leasehold title.",
        "Commonhold title.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where title is acquired by possession, registration often starts with possessory title, reflecting possible vulnerability to earlier documentary claims (subject to limitation/upgrade rules).",
        whyWrong: [
          "Absolute title is not automatic in possession-based acquisition.",
          "Qualified title depends on specific defects/limitations, not the default for adverse possession.",
          "Good leasehold title relates to leasehold estates.",
          "Commonhold is a different form of ownership.",
        ],
      },
    },
    {
      topic: "Freehold: doctrine of merger (overview)",
      q: "Owner holds a freehold reversion and later acquires the leasehold term of the same property. They ask if the lease still exists. What doctrine is relevant?",
      choices: [
        "Merger: a lesser estate can merge into a greater estate when vested in the same person, depending on intention and circumstances.",
        "Prescription: easements arise by long use.",
        "Severance: joint tenancies become tenancies in common.",
        "Overreaching: beneficial interests attach to proceeds.",
        "Rectification: correcting register mistakes.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Merger can occur where a greater and lesser estate come into the same ownership, potentially extinguishing the lesser estate depending on intention and equitable considerations.",
        whyWrong: [
          "",
          "Prescription is unrelated.",
          "Severance concerns co-ownership.",
          "Overreaching concerns trust beneficial interests on sale.",
          "Rectification concerns register mistakes.",
        ],
      },
    },
    {
      topic: "Freehold: easements benefiting the land (appurtenant)",
      q: "A freehold title states: 'Together with a right of way over the private road.' Buyer asks whether that right automatically passes on a sale of the freehold. What is the best answer?",
      choices: [
        "No, easements never pass on sale.",
        "Yes, appurtenant rights benefiting the land generally pass with the dominant land unless expressly excluded.",
        "Only if the buyer signs a separate deed of easement.",
        "Only if the right is used every day.",
        "Only if the neighbour consents at completion.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Easements appurtenant to the land are attached to the dominant tenement and generally pass automatically with it on transfer, unless lawfully excluded.",
        whyWrong: [
          "Easements can and do pass on sale of the dominant land.",
          "",
          "A separate deed may be needed to create a new easement, not to transfer an existing appurtenant easement.",
          "Daily use is not required for transfer.",
          "Neighbour consent is not required for transfer of an existing easement benefiting the land.",
        ],
      },
    },
    {
      topic: "Freehold: effect of a legal easement burden",
      q: "Buyer purchases a freehold plot that is subject to a pre-existing legal easement allowing neighbours to cross it. Buyer says: 'I didn’t agree to this.' What is most accurate?",
      choices: [
        "Buyer can ignore it because they did not agree.",
        "Buyer is bound because legal easements are proprietary rights that bind successors, subject to relevant registration rules.",
        "Buyer is bound only if the easement is mentioned in the contract.",
        "Buyer is bound only if the neighbours pay compensation.",
        "Buyer is bound only if the easement is under 3 years old.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A legal easement is a proprietary interest that generally binds successors to the servient land. In registered land, it may bind via register entry or overriding status depending on the type and circumstances.",
        whyWrong: [
          "Consent of the new buyer is not required for an existing proprietary right to bind.",
          "",
          "Contract mention is not required for an existing legal easement to exist and bind.",
          "Compensation is not a precondition for binding effect.",
          "Age is irrelevant.",
        ],
      },
    },
    {
      topic: "Freehold estates: advising on 'perpetual lease'",
      q: "A client says they have a 'perpetual lease' of a house and asks whether that is really a freehold. Which is the best response?",
      choices: [
        "Any lease over 100 years is automatically a freehold.",
        "A lease is a term of years; even a very long lease remains leasehold unless converted by statute/transaction. A freehold is a fee simple.",
        "A perpetual lease is illegal and void.",
        "A perpetual lease is the same as a licence.",
        "A perpetual lease becomes a commonhold automatically.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Leasehold is a term of years absolute (even if long). Freehold is a fee simple absolute in possession. Very long leases can look like ownership but remain leasehold unless changed by law/transaction.",
        whyWrong: [
          "Length alone does not convert leasehold into freehold.",
          "",
          "Long leases are generally valid; 'perpetual' wording raises construction issues but does not automatically void it.",
          "A lease is proprietary and differs from a licence.",
          "Commonhold requires specific statutory steps; it is not automatic.",
        ],
      },
    },
    {
      topic: "Freehold: title investigations (registered)",
      q: "A buyer is acquiring a registered freehold. Which statement best reflects how title is proved compared with unregistered land?",
      choices: [
        "The buyer must investigate a 15-year root of title by deeds.",
        "The register is the primary evidence of title; the buyer checks register entries, plan, and searches, plus manages overriding interest risk.",
        "The buyer relies only on the seller’s word.",
        "The buyer must search the Land Charges register.",
        "The buyer must always obtain the original parchment conveyance.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In registered land, title is proved by registration; investigations focus on the register and related searches, plus practical steps to address overriding interests.",
        whyWrong: [
          "Root-of-title deed investigation is characteristic of unregistered land.",
          "",
          "Seller’s word alone is not sufficient; the register is central.",
          "Land Charges searches apply to unregistered land.",
          "Original deeds are not generally required to prove registered title.",
        ],
      },
    },
    {
      topic: "Freehold: estates and interests (spotting)",
      q: "Which is a freehold estate rather than an interest in land?",
      choices: [
        "Fee simple absolute in possession",
        "Legal easement",
        "Restrictive covenant",
        "Legal mortgage (charge)",
        "Estate contract (option)",
      ],
      correct: 0,
      explain: {
        whyRight:
          "The fee simple absolute in possession is the freehold legal estate. The others are interests affecting an estate, not estates themselves.",
        whyWrong: [
          "",
          "An easement is an interest, not an estate.",
          "A restrictive covenant is an obligation/interest, not an estate.",
          "A mortgage/charge is a security interest, not an estate.",
          "An option is an estate contract (equitable interest), not an estate.",
        ],
      },
    },
    {
      topic: "Freehold: co-ownership and landlord’s reversion (mix)",
      q: "Two co-owners grant a 6-year lease of their freehold to Tenant. During the lease, one co-owner dies. They held the beneficial interest as joint tenants. What happens to the beneficial interest in the landlord’s reversion?",
      choices: [
        "It passes under the deceased’s will to their children.",
        "It passes to the surviving co-owner by survivorship (for the beneficial interest) unless severed.",
        "The lease ends automatically.",
        "The tenant becomes the freehold owner.",
        "The reversion becomes ownerless until probate is granted.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If the beneficial interest in the freehold reversion is held as a joint tenancy, survivorship operates on death so the survivor takes the deceased’s beneficial share (unless severed). The lease continues.",
        whyWrong: [
          "A joint tenant’s beneficial share does not pass by will unless severed.",
          "",
          "A co-owner’s death does not automatically terminate the lease.",
          "A tenant does not become freehold owner on landlord death.",
          "The reversion remains owned; legal title is held by the surviving legal owner(s)/trustees.",
        ],
      },
    },
    {
      topic: "Freehold: remedies for breach of condition (overview)",
      q: "A freehold grant is 'to Noor and her heirs, but if the land is used for retail, the grantor may re-enter.' The condition is breached. What must the grantor generally do to end Noor’s estate?",
      choices: [
        "Nothing; the estate ends automatically on breach.",
        "Exercise the right of re-entry (subject to legal constraints) because it is a condition subsequent.",
        "Apply to the Land Registry to delete Noor’s title without notice.",
        "Wait 12 years to obtain title by adverse possession.",
        "Serve a section 21 notice.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A condition subsequent does not automatically end the estate; the grantor must take steps to enforce the right of re-entry (and must comply with relevant legal controls).",
        whyWrong: [
          "Automatic termination is more characteristic of determinable fees.",
          "",
          "Registry alteration without process is not the mechanism.",
          "Adverse possession is unrelated to enforcing a re-entry condition.",
          "Section 21 is a landlord–tenant possession route, not freehold conditions.",
        ],
      },
    },
    {
      topic: "Freehold: concept of 'in possession'",
      q: "A conveyance grants 'to Priya and her heirs' but Priya’s right to take possession is postponed for 5 years while the grantor remains in occupation. Is Priya’s freehold a fee simple 'in possession'?",
      choices: [
        "Yes, because all freeholds are in possession by definition.",
        "No, because a fee simple in possession requires an immediate right to possession, not postponed enjoyment.",
        "Yes, because postponed enjoyment makes it a lease.",
        "No, because possession means physical occupation only.",
        "Yes, because the Land Registry will treat it as in possession regardless.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "‘In possession’ refers to the right to immediate possession (present enjoyment), not necessarily physical occupation. If possession is postponed, it resembles a future interest rather than fee simple in possession.",
        whyWrong: [
          "Not all freeholds are in possession; there can be future freehold interests (remainders/reversions).",
          "",
          "Postponed possession does not automatically create a lease.",
          "Physical occupation is not required; it is about the right to possession.",
          "Registry treatment follows legal character; it does not override the concept.",
        ],
      },
    },
    {
      topic: "Freehold: interplay with mortgages (overview)",
      q: "A registered freehold owner mortgages the property to Bank. The owner later grants a long lease to Tenant without Bank’s consent, and Tenant registers the lease. The owner defaults. What is the most accurate general statement?",
      choices: [
        "The mortgage disappears because the lease is registered later.",
        "The mortgage’s priority generally means the bank can enforce subject to the priority rules; the later lease may be postponed if created in breach of the mortgage terms/priority.",
        "The tenant becomes immune from enforcement because they registered.",
        "The bank can never enforce a mortgage over a freehold.",
        "The lease automatically becomes void because the owner defaulted.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A registered mortgage (charge) generally has priority. A later lease’s status depends on priority and whether it was authorised; banks often require consent to protect security.",
        whyWrong: [
          "A later registered lease does not automatically extinguish an earlier mortgage.",
          "",
          "Registration does not make the tenant immune from priority/enforcement consequences.",
          "Banks can enforce mortgages over freeholds.",
          "Default does not automatically void leases; priority/enforcement determines outcomes.",
        ],
      },
    },
  ];

  window.quizData = {
    title: "Land Law — Chapter 4: Freehold Estates",
    subtitle:
      "30 SQE-style scenario MCQs (5 options each) in quizDataSchema format",
    questions: questions,
  };
})();
