(() => {
  const questions = [
    {
      "topic": "Tenure and estates",
      "q": "Nina buys a house in England described in the transfer as a “freehold”. She tells her friend she now owns the land outright in an absolute sense. Which statement best reflects the nature of land ownership in English land law?",
      "choices": [
        "Nina owns the land absolutely because freehold means absolute ownership of the physical land.",
        "Nina holds an estate in land, while ultimate title is conceptually held by the Crown.",
        "Nina has only a licence to occupy because all land is owned by the state.",
        "Nina owns the land absolutely but only if it is registered at HM Land Registry.",
        "Nina holds a leasehold estate unless she bought from the Crown directly."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "English land law is based on tenure: private persons do not own the land itself absolutely, but hold an estate (a bundle of rights in time) derived from the Crown.",
        "whyWrong": [
          "Freehold is the largest estate, but still an estate rather than absolute ownership of the physical land.",
          "",
          "A freehold purchase is not merely a personal licence.",
          "Registration affects priority and proof of title, not the conceptual nature of tenure/estates.",
          "Freehold is not recharacterised as leasehold just because of the seller."
        ]
      }
    },
    {
      "topic": "Legal vs equitable interests",
      "q": "Omar agrees in writing to transfer to Priya a right to use his private driveway. The document is signed by both parties but is not executed as a deed. Priya seeks to enforce the right against Omar. Which is most accurate?",
      "choices": [
        "Priya has a legal easement because the agreement is signed in writing.",
        "Priya has an equitable easement if the agreement satisfies the contract formalities.",
        "Priya has no enforceable right because easements can only arise by long use.",
        "Priya automatically has an overriding interest because she uses the driveway.",
        "Priya has a legal licence which binds successors in title."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "To create a legal easement by express grant, the grant must be by deed. A signed written contract may support an equitable easement (specific performance), assuming proper contract formalities are met.",
        "whyWrong": [
          "A legal easement by express grant requires a deed, not just signed writing.",
          "",
          "Easements can arise by express grant, implied grant/reservation, or prescription; not only long use.",
          "Use alone does not create an overriding interest; that depends on the type of right and registration rules.",
          "A contractual licence is generally personal and does not automatically bind successors."
        ]
      }
    },
    {
      "topic": "Proprietary vs personal rights",
      "q": "Ella pays Sam £10,000 for the ‘right to park in Sam’s garage whenever she likes’ for 5 years. The agreement is a simple signed contract. Sam sells the house to Buyer, who refuses to allow Ella to park. Which is the best analysis?",
      "choices": [
        "Ella has a proprietary right that automatically binds Buyer because it relates to land.",
        "Ella likely has a contractual licence against Sam, which does not automatically bind Buyer.",
        "Ella has a legal lease because she paid money for 5 years’ use of the garage.",
        "Ella has an easement because it is a right to use Sam’s land.",
        "Ella has an overriding interest because she paid a premium."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Many ‘use’ arrangements create personal (contractual) rights, not proprietary rights. A bare contractual licence typically binds only the original contracting party unless special doctrines apply.",
        "whyWrong": [
          "Not all land-related rights are proprietary; proprietary rights must fit recognised categories and creation rules.",
          "",
          "A lease requires exclusive possession for a term at rent (or generally consideration); garage parking is often non-exclusive.",
          "A parking right can be an easement in principle, but creation/formalities and the facts may not satisfy easement requirements.",
          "Payment alone does not confer overriding status."
        ]
      }
    },
    {
      "topic": "Formalities: deeds",
      "q": "Liam intends to gift his small plot of land to his sister Maya. He signs a one-page document stating “I give Maya my land at Plot A” and hands it to her. It is not witnessed. Maya tries to register her title. What is the likely outcome?",
      "choices": [
        "Valid transfer of the legal estate because it is in writing and signed.",
        "Valid transfer of the legal estate because it is a gift.",
        "Invalid legal transfer because the disposition must be by deed properly executed.",
        "Valid equitable transfer because any signed writing is enough for land gifts.",
        "Valid transfer only if Maya takes possession immediately."
      ],
      "correct": 2,
      "explain": {
        "whyRight": "A transfer of a legal estate must be made by deed (and a deed must be properly executed, typically signed and witnessed). Without a deed, the legal estate does not pass.",
        "whyWrong": [
          "A signed writing is not enough to transfer a legal estate.",
          "Gifts still require the correct formality for the legal estate.",
          "",
          "Equitable dispositions may arise in some circumstances, but a gratuitous promise without more will not necessarily create enforceable equitable rights.",
          "Possession does not cure defective deed formalities for transfer of the legal estate."
        ]
      }
    },
    {
      "topic": "Formalities: contracts for land",
      "q": "Chloe and Dan exchange emails agreeing a sale of Chloe’s freehold for £400,000. The emails contain all terms and both type their names at the end. No single document is signed by both. Dan later seeks specific performance. Which is most accurate under the contract formalities for land?",
      "choices": [
        "The contract is valid if there is clear offer and acceptance by email.",
        "The contract is valid because typed names count as signatures and emails can be linked to form one document signed by both.",
        "The contract is invalid because land contracts must always be in a deed.",
        "The contract is valid only if Dan has paid a deposit.",
        "The contract is invalid unless it was made in the presence of a solicitor."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "A land contract generally must be in writing, contain all terms, and be signed by or on behalf of each party—often satisfied by a single document or exchange of documents that together meet the requirement. Typed names can constitute signatures depending on context.",
        "whyWrong": [
          "General contract principles are not enough; statutory formality applies for land contracts.",
          "",
          "A deed is for transferring legal estates; the contract to sell is separate and typically not by deed.",
          "A deposit is common but not a statutory requirement for validity.",
          "Solicitors are not required for validity (though common in practice)."
        ]
      }
    },
    {
      "topic": "Equity: maxim and conscience",
      "q": "A buyer purchases land from a seller who fraudulently conceals a known boundary dispute. The buyer seeks an equitable remedy. Which principle best explains why equity may intervene?",
      "choices": [
        "Equity intervenes only when the common law provides no remedy at all.",
        "Equity is concerned with conscience and may grant remedies to prevent unconscionable conduct.",
        "Equity automatically voids any sale involving misrepresentation.",
        "Equity always prefers the buyer over the seller in land disputes.",
        "Equity applies only to registered land."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Equity’s intervention is rooted in preventing unconscionable conduct and providing equitable remedies (e.g., rescission, injunction, specific performance) where appropriate.",
        "whyWrong": [
          "Equity can supplement or modify common law remedies; it is not limited to ‘no remedy’ situations.",
          "",
          "Not every misrepresentation automatically voids a transaction; remedies depend on type and circumstances.",
          "Equity does not operate with a blanket preference for buyers.",
          "Equity applies across registered and unregistered systems."
        ]
      }
    },
    {
      "topic": "Doctrine of notice (overview)",
      "q": "Before completion, Buyer learns informally that Neighbour claims “a right” over the garden path, but the solicitor does no further checks. After purchase, Neighbour asserts an old equitable right. At a high level, which concept most directly explains why Buyer’s knowledge may matter in an unregistered (title deeds) context?",
      "choices": [
        "The mirror principle.",
        "The doctrine of notice affecting priority of equitable interests.",
        "Overreaching.",
        "Indemnity.",
        "First registration."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "In unregistered land, priority of equitable interests can depend on notice: a bona fide purchaser for value without notice may take free of certain equitable interests.",
        "whyWrong": [
          "The mirror principle is a registered land concept about the register reflecting title.",
          "",
          "Overreaching is about shifting certain beneficial interests off the land to sale proceeds on a qualifying disposition.",
          "Indemnity is compensation linked to register mistakes in registered land.",
          "First registration is an event/process, not the doctrine governing equitable priority in unregistered land."
        ]
      }
    },
    {
      "topic": "Legal interests bind the world (overview)",
      "q": "Seller grants a legal easement by deed to Neighbour. Seller later sells the servient land to Buyer. Buyer argues she is not bound because she had no knowledge. What is the best statement?",
      "choices": [
        "Buyer is not bound because she lacked notice.",
        "Buyer is bound because legal interests generally bind successors whether or not they have notice.",
        "Buyer is bound only if Neighbour is in actual occupation.",
        "Buyer is not bound unless the easement is mentioned in the transfer.",
        "Buyer is bound only if the easement is registered as a land charge."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Legal property rights generally bind the world (subject to the relevant system of registration). Lack of notice is not a defence to a properly created legal interest.",
        "whyWrong": [
          "Notice primarily affects equitable interests in some contexts; not a general defence to legal rights.",
          "",
          "Actual occupation is relevant to certain overriding interests, not to the binding nature of a legal easement as such.",
          "A transfer’s omission does not extinguish an existing legal easement.",
          "Land charges registration concerns unregistered land and certain equitable interests, not the general rule for legal easements."
        ]
      }
    },
    {
      "topic": "Fixtures vs chattels",
      "q": "A seller removes a built-in kitchen unit and fitted oven bolted to the wall the day before completion. The buyer claims they should have remained. Which is the best approach?",
      "choices": [
        "Anything not mentioned in the contract can be removed.",
        "If attached and intended to be permanent, it is likely a fixture and should pass with the land.",
        "Only items made of brick are fixtures.",
        "If the buyer has not yet paid, the seller can remove anything.",
        "All appliances are always chattels."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "The fixtures/chattels test looks at degree and purpose of annexation. Built-in units and fitted ovens bolted in place are commonly treated as fixtures intended to form part of the property.",
        "whyWrong": [
          "Fixtures can pass with the land even if not expressly mentioned; contracts often list exclusions but the default may include fixtures.",
          "",
          "Fixtures are not limited to brick items.",
          "Payment timing does not change the legal character of fixtures.",
          "Some appliances can be fixtures if annexed and intended to be permanent."
        ]
      }
    },
    {
      "topic": "Land as a three-dimensional concept",
      "q": "A developer owns the freehold of a plot and claims ownership of a valuable mineral deposit deep underground. A third party argues the owner’s title does not extend that far. Which statement best reflects the general principle?",
      "choices": [
        "A freehold owner owns unlimited depth and height absolutely.",
        "Title to land generally includes airspace and subsoil to the extent necessary for ordinary use and enjoyment, subject to exceptions.",
        "Airspace belongs entirely to the Civil Aviation Authority and subsoil to the Environment Agency.",
        "Title stops exactly one metre below and one metre above the surface.",
        "Subsoil is always owned by the person who first excavates it."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Ownership typically extends to airspace and subsoil only so far as necessary for ordinary use/enjoyment, and can be limited by statutes and special rules (e.g., minerals, aviation).",
        "whyWrong": [
          "Modern law does not treat ownership as unlimited ‘to the heavens and to the centre of the earth’.",
          "",
          "There is no blanket rule vesting all airspace/subsoil in those bodies.",
          "There is no fixed one-metre rule.",
          "Excavation does not generally determine ownership of subsoil/minerals."
        ]
      }
    },
    {
      "topic": "Lease, licence and proprietary nature (principle)",
      "q": "A student pays monthly for a room in a house. The agreement says the landlord can move the student to a different room at any time and retains keys for cleaning, with no right to exclude the landlord. The student claims a lease. What factor is most central to whether the right is proprietary (lease) rather than personal (licence)?",
      "choices": [
        "Whether the student paid rent.",
        "Whether the student has exclusive possession for a term.",
        "Whether the agreement is in writing.",
        "Whether the landlord is a company.",
        "Whether the student has a deposit protection certificate."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "The hallmark of a lease is exclusive possession for a term (usually at rent). If the arrangement does not confer genuine exclusive possession, it is likely a licence.",
        "whyWrong": [
          "Rent is relevant but not determinative; exclusive possession is key.",
          "",
          "Writing is not always required for short leases; the substance matters.",
          "Landlord identity is irrelevant to the lease/licence distinction.",
          "Deposit protection is a regulatory matter and not determinative of proprietary status."
        ]
      }
    },
    {
      "topic": "Proprietary estoppel (overview)",
      "q": "Tariq tells his niece Leila: 'Build your studio on my land—one day it will be yours.' Leila spends £60,000 building it. Tariq later refuses to transfer anything. Which doctrine is most likely to assist Leila?",
      "choices": [
        "Privity of contract.",
        "Proprietary estoppel.",
        "Adverse possession.",
        "Overreaching.",
        "Rectification of the register."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Proprietary estoppel can arise where there is an assurance, reliance, and detriment, and it would be unconscionable to go back on the assurance.",
        "whyWrong": [
          "There may be no contract between them; privity does not create a land right here.",
          "",
          "Adverse possession concerns possession over time, not reliance on an assurance.",
          "Overreaching concerns transferring certain equitable interests to proceeds on sale.",
          "Rectification is a registered land remedy tied to register mistakes."
        ]
      }
    },
    {
      "topic": "Resulting/constructive trusts (overview)",
      "q": "A property is bought in Alex’s name alone. Ben pays half the purchase price and they agree informally they will share the property equally. Ben later claims a beneficial interest. Which broad equitable concept is most relevant?",
      "choices": [
        "Legal mortgage.",
        "Constructive/resulting trust principles governing beneficial ownership.",
        "The doctrine of tenure.",
        "The rule against perpetuities.",
        "Bona vacantia."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Where legal title is in one name but contributions/intentions indicate shared ownership, equity may recognise beneficial interests via resulting or constructive trusts (co-ownership principles).",
        "whyWrong": [
          "A mortgage is a security interest; it does not explain Ben’s beneficial ownership claim.",
          "",
          "Tenure is about estates derived from the Crown, not beneficial ownership split.",
          "Perpetuities are not the issue.",
          "Bona vacantia concerns ownerless property passing to the Crown."
        ]
      }
    },
    {
      "topic": "Priority: first in time",
      "q": "Owner grants an equitable option to buy to X on Monday. On Tuesday Owner grants another equitable option to Y. Neither is registered anywhere. Both seek to enforce. As a general starting point in equity, what priority rule applies (subject to exceptions)?",
      "choices": [
        "The later interest always wins.",
        "First in time generally prevails in equity.",
        "The interest with higher value prevails.",
        "The interest of the party in occupation prevails.",
        "The interest created by the longer document prevails."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Equity’s general priority maxim is that where the equities are equal, the first in time prevails, subject to doctrines like bona fide purchaser without notice and registration regimes.",
        "whyWrong": [
          "There is no rule that later equitable interests always defeat earlier ones.",
          "",
          "Value alone does not determine equitable priority.",
          "Occupation can matter in registered land overriding interests, not as a general priority rule for competing options.",
          "Document length is irrelevant."
        ]
      }
    },
    {
      "topic": "Registration rationale (overview)",
      "q": "A policy debate asks why England and Wales moved towards a registration system. Which combination best reflects the classic policy aims of registered land?",
      "choices": [
        "To increase tax revenue and reduce conveyancers’ fees only.",
        "To simplify conveyancing by making title discoverable from the register and to provide state-backed indemnity.",
        "To abolish leases and replace them with licences.",
        "To ensure all equitable interests are void automatically.",
        "To make land transactions private."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Registered land aims to make title and interests discoverable from the register (simplification/marketability) and provides indemnity for certain register mistakes.",
        "whyWrong": [
          "Those may be incidental but are not the classic core aims.",
          "",
          "The system does not abolish leases.",
          "Equitable interests can still exist and may bind in specified ways.",
          "Registration is designed to increase transparency, not privacy."
        ]
      }
    },
    {
      "topic": "Mirror principle (overview)",
      "q": "In registered land, a buyer checks the register and relies on it. Which idea is most closely associated with the 'mirror principle'?",
      "choices": [
        "The register should reflect the totality of title to land and interests affecting it, subject to limited exceptions.",
        "The buyer must inspect the physical boundaries and ignore the register.",
        "The buyer must investigate root of title for 15 years.",
        "The register is only evidence, never conclusive.",
        "The register is irrelevant if the seller is in possession."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "The mirror principle is that the register should be a complete and accurate reflection of title and interests (with exceptions such as overriding interests).",
        "whyWrong": [
          "",
          "Physical inspection can be prudent but does not replace the register’s role.",
          "Root of title investigation is characteristic of unregistered land conveyancing.",
          "Registered title is intended to be authoritative, though not immune from mistakes.",
          "Possession does not make the register irrelevant."
        ]
      }
    },
    {
      "topic": "Curtain principle (overview)",
      "q": "A buyer of registered land typically does not investigate the details of beneficial interests under a trust because they are kept 'behind a curtain'. What mechanism most commonly supports this in practice?",
      "choices": [
        "Adverse possession.",
        "Overreaching on a sale by two trustees/trust corporation.",
        "The doctrine of notice.",
        "Restrictive covenants automatically disappearing on sale.",
        "The buyer’s knowledge being irrelevant."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "The curtain principle is supported by overreaching: on a qualifying disposition by two trustees (or a trust corporation), beneficial interests can be shifted from land to purchase money, allowing buyers to take free of them.",
        "whyWrong": [
          "Adverse possession is unrelated to keeping beneficial interests off the register.",
          "",
          "Notice is more central to unregistered equitable priority than the curtain principle.",
          "Restrictive covenants do not automatically disappear on sale.",
          "Buyer knowledge is not the key mechanism; overreaching is."
        ]
      }
    },
    {
      "topic": "Insurance principle (overview)",
      "q": "A buyer suffers loss because the register inaccurately omitted an interest and the buyer relied on the register. Which principle most directly addresses compensation in registered land?",
      "choices": [
        "The insurance/indemnity principle.",
        "The doctrine of notice.",
        "Equity’s maxim: delay defeats equity.",
        "Caveat emptor only.",
        "Frustration."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "Registered land includes a state-backed indemnity scheme (insurance principle) compensating for certain losses caused by register mistakes, subject to rules and exceptions.",
        "whyWrong": [
          "",
          "Notice is not the compensation mechanism in registered land.",
          "Delay defeats equity is an equitable defence, not an indemnity scheme.",
          "Caveat emptor is moderated by the register’s role and indemnity framework.",
          "Frustration is a contract doctrine, not land registration compensation."
        ]
      }
    },
    {
      "topic": "Co-ownership structure (principle)",
      "q": "Two friends buy a house together and are told they cannot hold the legal estate as tenants in common. Which statement is correct in English land law?",
      "choices": [
        "Both legal and beneficial title can be held as tenants in common.",
        "The legal estate must be held as a joint tenancy, but the beneficial interest may be joint tenancy or tenancy in common.",
        "The legal estate must be held as a tenancy in common, but the beneficial interest must be a joint tenancy.",
        "Both legal and beneficial title must always be joint tenancy.",
        "Co-ownership is impossible unless there are at least three owners."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "At law, co-owners hold the legal estate as joint tenants (with the 'four unities' at law). In equity, the beneficial interest can be held either as joint tenants or tenants in common.",
        "whyWrong": [
          "Legal co-ownership as tenants in common is not permitted; only a legal joint tenancy is recognised.",
          "",
          "This reverses the correct position.",
          "Beneficial ownership does not have to be joint tenancy; it can be tenancy in common.",
          "Two owners is common; three is not required."
        ]
      }
    },
    {
      "topic": "Severance (overview)",
      "q": "A couple hold the beneficial interest as joint tenants. One wants their share to pass under their will rather than by survivorship. Which broad concept is relevant?",
      "choices": [
        "Severance of the equitable joint tenancy.",
        "First registration.",
        "Rectification of the register.",
        "Prescription.",
        "Merger."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "Severance converts a beneficial joint tenancy into a tenancy in common, preventing survivorship and allowing a share to pass by will.",
        "whyWrong": [
          "",
          "First registration is about entering land onto the register.",
          "Rectification concerns correcting the register, not altering beneficial co-ownership by intention/acts.",
          "Prescription relates to acquiring easements by long use.",
          "Merger concerns combining estates/interests under one title in certain circumstances."
        ]
      }
    },
    {
      "topic": "Overreaching conditions (overview)",
      "q": "Buyer purchases a house from two trustees who hold legal title. The sale proceeds are paid to both trustees. An adult beneficiary living there claims a beneficial interest and seeks to bind Buyer. What is the most likely result (high-level)?",
      "choices": [
        "Buyer is bound because the beneficiary is in occupation.",
        "Buyer takes free of the beneficial interest because it is overreached onto the proceeds.",
        "Buyer is bound unless they had no notice of the beneficiary.",
        "Buyer is bound because beneficial interests are always overriding.",
        "Buyer takes free only if the beneficiary consents in writing."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "On a qualifying disposition by two trustees/trust corporation, certain beneficial interests under a trust can be overreached and attach to the purchase money, so Buyer takes free of them.",
        "whyWrong": [
          "Occupation matters for overriding interests, but overreaching can remove beneficial interests from the land even if the beneficiary occupies.",
          "",
          "Overreaching does not depend on notice in the same way.",
          "Beneficial interests are not automatically overriding; their binding effect depends on rules and whether they were overreached.",
          "Consent may be relevant practically, but overreaching can operate without written consent."
        ]
      }
    },
    {
      "topic": "Land obligations (overview)",
      "q": "A seller tells the buyer: 'You must keep the garden tidy forever' and wants it to bind future owners. Which statement is most accurate at the level of basic principles?",
      "choices": [
        "Any promise about land automatically binds future owners.",
        "Only obligations fitting recognised proprietary categories (e.g., covenants/easements) can bind successors, and formalities/privity rules apply.",
        "All positive obligations always bind successors in freehold land.",
        "Only oral promises bind successors because they show genuine intention.",
        "Such an obligation binds successors only if the neighbour approves."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Not all promises about land are proprietary. To bind successors, the obligation must fit a recognised doctrine (e.g., covenants, easements) and satisfy creation/registration and enforceability rules.",
        "whyWrong": [
          "Many land promises are merely personal and do not run with land.",
          "",
          "Freehold positive covenants do not generally bind successors at common law; special structures are often used.",
          "Oral form does not make an obligation proprietary; formalities often require writing/deed.",
          "Neighbour approval is not the legal test for running with land."
        ]
      }
    },
    {
      "topic": "Legal estates (overview)",
      "q": "Which pair correctly identifies the two legal estates recognised under the Law of Property Act framework?",
      "choices": [
        "Fee simple absolute in possession, and term of years absolute.",
        "Easement, and restrictive covenant.",
        "Mortgage, and beneficial interest under a trust.",
        "Licence, and option to purchase.",
        "Freehold, and equity."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "The two legal estates are the fee simple absolute in possession (freehold) and the term of years absolute (leasehold).",
        "whyWrong": [
          "",
          "Easements and restrictive covenants are interests, not legal estates.",
          "A mortgage is a legal interest/security; beneficial interests are equitable interests.",
          "Licences and options are generally personal/equitable rights rather than legal estates.",
          "‘Equity’ is not an estate."
        ]
      }
    },
    {
      "topic": "Legal interests (overview)",
      "q": "Which of the following is most likely to be capable of existing as a legal proprietary interest (assuming proper creation/formalities)?",
      "choices": [
        "A bare contractual licence to visit the garden on Sundays.",
        "An easement granted by deed.",
        "A promise to leave land to someone in a will.",
        "A purely moral obligation to share profits from sale.",
        "A verbal agreement to sell land next year."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "An easement can be a legal interest if properly created (e.g., by deed) and recognised as such by land law.",
        "whyWrong": [
          "A bare licence is typically personal, not proprietary.",
          "",
          "A promise to leave land by will is not itself a present proprietary interest.",
          "Moral obligations are not proprietary interests.",
          "A verbal land sale agreement generally fails statutory contract formalities."
        ]
      }
    },
    {
      "topic": "Equitable interests: creation by writing",
      "q": "Grace declares: 'I hold my house on trust for my brother.' She writes and signs a document stating this. What is the best statement about the beneficial interest?",
      "choices": [
        "A beneficial interest under an express trust can be created in equity if the relevant declaration is evidenced in signed writing.",
        "A trust of land can only be created by deed.",
        "A trust of land is invalid unless registered at HM Land Registry.",
        "A beneficial interest can only be created orally.",
        "A trust is impossible unless there are two trustees."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "Express declarations of trust of land must be evidenced in writing signed by the person able to declare the trust; this supports valid equitable beneficial interests.",
        "whyWrong": [
          "",
          "A deed is not always required for the declaration of trust (though formalities apply).",
          "Registration is not generally a validity requirement for the trust’s existence.",
          "Oral creation is restricted for land trusts by formality rules.",
          "A trust can exist with a sole trustee holding legal title, though multiple trustees are often required for overreaching."
        ]
      }
    },
    {
      "topic": "Equitable vs legal priority (overview)",
      "q": "Owner grants a legal lease to Tenant for 10 years by deed. Later, Owner grants an equitable lease to Second Tenant. In a straightforward priority contest, which interest has priority?",
      "choices": [
        "The equitable lease because it was granted later.",
        "The legal lease because legal interests generally take priority over equitable interests.",
        "Whichever tenant is in occupation.",
        "Whichever tenant paid more.",
        "Neither has priority; both share the land equally."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "A validly created legal interest will generally have priority over later equitable interests, subject to the specific registration rules and facts.",
        "whyWrong": [
          "Later timing does not generally let an equitable interest defeat an earlier legal one.",
          "",
          "Occupation can matter for overriding interests but does not automatically reorder legal/equitable priority.",
          "Payment is not the governing rule for priority.",
          "Interests do not ‘merge’ into equal sharing by default."
        ]
      }
    },
    {
      "topic": "Registered vs unregistered conveyancing (overview)",
      "q": "A trainee is asked to explain the key practical difference between investigating title in unregistered land versus registered land. Which is best?",
      "choices": [
        "Unregistered land relies on the title register; registered land relies on root of title deeds.",
        "Unregistered land relies heavily on examining title deeds and a good root of title; registered land relies primarily on the register as proof of title.",
        "Both systems require investigating 30 years of deeds.",
        "Registered land requires no searches; unregistered land requires no searches.",
        "There is no meaningful difference."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Unregistered conveyancing traditionally revolves around title deeds and establishing a good root of title; registered conveyancing uses the Land Register as the central proof of title and source of registered interests.",
        "whyWrong": [
          "This reverses the systems.",
          "",
          "Registered land typically does not require the same root-of-title deed investigation.",
          "Searches are relevant in both systems (though their focus differs).",
          "There are important differences in proof and priority."
        ]
      }
    },
    {
      "topic": "Equitable remedies (overview)",
      "q": "A buyer has a valid written land contract and wants the court to force the seller to complete rather than pay damages. Which remedy is the buyer most likely to seek?",
      "choices": [
        "Specific performance.",
        "Quantum meruit.",
        "Restitution for unjust enrichment only.",
        "Mareva injunction only.",
        "Judicial review."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "Specific performance is a classic equitable remedy for land contracts because land is traditionally treated as unique.",
        "whyWrong": [
          "",
          "Quantum meruit is payment for work done/services, not completion of a land transfer.",
          "Restitution may arise in some cases but is not the primary ‘force completion’ remedy.",
          "A freezing injunction is not the usual remedy to compel conveyance.",
          "Judicial review concerns public law decisions."
        ]
      }
    },
    {
      "topic": "Equity follows the law (principle)",
      "q": "Sonia argues that because her arrangement feels fair, the court should treat her personal right to stay in a house as a property right binding buyers. Which statement best reflects the basic principle ‘equity follows the law’?",
      "choices": [
        "Equity can invent any new property right whenever fairness demands it.",
        "Equity generally works within established property categories and will not lightly create new proprietary rights outside recognised doctrines.",
        "Equity never intervenes in land disputes.",
        "Equity applies only if the claimant is a consumer.",
        "Equity always overrides statute."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Equity is flexible but not limitless; it generally operates within recognised property doctrines and respects statutory frameworks, rather than inventing entirely new proprietary rights at will.",
        "whyWrong": [
          "Courts are cautious about creating new proprietary categories because of third-party effects and certainty.",
          "",
          "Equity frequently intervenes in land disputes.",
          "Consumer status is not the trigger for equitable proprietary rights.",
          "Equity cannot override clear statutory provisions."
        ]
      }
    },
    {
      "topic": "Certainty and marketability (principle)",
      "q": "Why does land law place such emphasis on formalities and registration rather than simply enforcing informal promises based on fairness?",
      "choices": [
        "Because land is less valuable than other property.",
        "Because land rights affect third parties and require certainty and marketability.",
        "Because equity refuses to deal with land.",
        "Because courts are prohibited from reading written documents.",
        "Because all land disputes must be decided by juries."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Land rights can bind successors and affect third parties, so the system prioritises certainty, predictability, and ease of transaction (marketability), supported by formalities and registration.",
        "whyWrong": [
          "Land is often highly valuable; that is not the reason.",
          "",
          "Equity does deal with land extensively.",
          "Courts routinely interpret written documents.",
          "Juries are not the standard decision-makers in land/property disputes."
        ]
      }
    },
    {
      "topic": "Proprietary rights: numerus clausus (overview)",
      "q": "A business wants to create a 'new' kind of land right: 'a perpetual right to host parties on the patio every Friday night' binding future owners. Which principle explains why this is difficult?",
      "choices": [
        "Numerus clausus: property rights are limited to recognised categories to protect third parties and certainty.",
        "Caveat emptor: buyers must always beware.",
        "Frustration: contracts can end unexpectedly.",
        "Ultra vires: companies cannot hold land.",
        "Estoppel by record."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "The numerus clausus idea is that property rights are a closed list (or tightly controlled) so that third parties can understand and transact with certainty; bespoke 'new' rights are not easily recognised as proprietary.",
        "whyWrong": [
          "",
          "Caveat emptor is not the principle limiting creation of new proprietary categories.",
          "Frustration is a contract doctrine unrelated to property categories.",
          "Companies can hold land; ultra vires is not the key point here.",
          "Estoppel by record is irrelevant."
        ]
      }
    },
    {
      "topic": "Public vs private controls (overview)",
      "q": "A homeowner is prevented from building an extension because of planning restrictions, even though no private neighbour has a covenant. What does this illustrate?",
      "choices": [
        "Only private law controls land use.",
        "Land use is controlled by both public law (planning) and private law (e.g., covenants/easements).",
        "Planning law applies only to leaseholds.",
        "Covenants are created by government agencies.",
        "Planning restrictions are void unless registered on title."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Land use is regulated by both public law (planning/environmental controls) and private law (property rights and obligations).",
        "whyWrong": [
          "Private law is not the only control; public law can restrict use independently.",
          "",
          "Planning law applies broadly, including to freeholds.",
          "Covenants are private agreements, not generally government-created.",
          "Planning restrictions do not depend on registration on the title to operate."
        ]
      }
    },
    {
      "topic": "Land and priority problems (overview)",
      "q": "Owner grants an equitable interest to A, then later sells to B who pays value and had no notice of A. At a basic principles level (unregistered context), what is the likely effect?",
      "choices": [
        "B may take free of A’s equitable interest as a bona fide purchaser for value without notice.",
        "A always wins because equitable interests are always binding.",
        "A always loses because equitable interests are never binding.",
        "B is bound only if A is a close friend of Owner.",
        "B is bound only if B is a company."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "In unregistered land, a bona fide purchaser for value without notice can take free of certain prior equitable interests (subject to the registration regime for land charges and other rules).",
        "whyWrong": [
          "",
          "Equitable interests can bind, but not invariably—priority rules and notice/registration matter.",
          "Equitable interests can bind in many situations; they are not never binding.",
          "Personal relationships are irrelevant to priority.",
          "Company status is not the key determinant."
        ]
      }
    },
    {
      "topic": "Third-party enforceability (overview)",
      "q": "Why is it important in land law to distinguish between rights enforceable only against the grantor and rights enforceable against successors?",
      "choices": [
        "Because courts refuse to enforce contracts.",
        "Because proprietary rights can affect third parties and the value/marketability of land on future dealings.",
        "Because successors are always liable for all promises made by predecessors.",
        "Because land cannot be sold once any right exists.",
        "Because only legal rights can exist."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Proprietary rights can bind successors and affect the land’s value and transferability; understanding which rights 'run with the land' is central to advising buyers and lenders.",
        "whyWrong": [
          "Courts do enforce contracts; the point is the reach of the right against third parties.",
          "",
          "Successors are not automatically liable for all promises; only certain obligations run, and often only in limited ways.",
          "Land can still be sold; rights affect price/priority, not saleability per se.",
          "Equitable rights also exist."
        ]
      }
    },
    {
      "topic": "Equity: clean hands (overview)",
      "q": "Ravi seeks an injunction to stop a neighbour trespassing, but evidence shows Ravi has repeatedly lied to the court about the facts. Which equitable maxim may affect Ravi’s claim?",
      "choices": [
        "He who comes to equity must come with clean hands.",
        "Equity will not assist a volunteer.",
        "Equity looks to the intent rather than the form.",
        "Equity regards as done that which ought to be done.",
        "Delay defeats equity."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "A party seeking equitable relief may be denied if they have acted improperly in relation to the claim—captured by the 'clean hands' maxim.",
        "whyWrong": [
          "",
          "Volunteer relates to gratuitous transfers and consideration, not lying to court.",
          "Intent vs form is not the maxim addressing misconduct in proceedings.",
          "That maxim relates to treating enforceable obligations as carried out in equity.",
          "Delay defeats equity focuses on undue delay (laches), not dishonesty."
        ]
      }
    },
    {
      "topic": "Overview: mortgages as land law (principle)",
      "q": "A lender takes a mortgage over a borrower’s freehold. At a conceptual level, why is mortgage law treated as part of land law?",
      "choices": [
        "Because a mortgage is a proprietary security interest in land affecting third parties and priority.",
        "Because mortgages are purely personal loans and never affect property rights.",
        "Because mortgages can only exist over unregistered land.",
        "Because mortgages transfer absolute ownership to the lender permanently.",
        "Because mortgage law is criminal law."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "A mortgage is a security interest over land that can bind third parties and raises priority/registration and enforcement issues central to land law.",
        "whyWrong": [
          "",
          "Mortgages are not purely personal; they create proprietary security rights.",
          "Mortgages exist over registered and unregistered land (with system-specific rules).",
          "Modern mortgages do not transfer permanent absolute ownership in the practical sense; the borrower retains equity of redemption.",
          "Mortgage law is not criminal law."
        ]
      }
    },
    {
      "topic": "Overview: co-ownership problems (principle)",
      "q": "Why do co-ownership disputes frequently arise in land law questions (especially in family contexts)?",
      "choices": [
        "Because land cannot be owned by more than one person.",
        "Because legal title and beneficial ownership can differ, and equity may recognise contributions/intentions not shown on the legal title.",
        "Because trusts are illegal in England and Wales.",
        "Because the Land Registry records all beneficial interests fully.",
        "Because co-owners must always be married."
      ],
      "correct": 1,
      "explain": {
        "whyRight": "Co-ownership often involves a split between legal title and beneficial shares; equitable doctrines (resulting/constructive trusts, proprietary estoppel) and statutory regimes can determine beneficial ownership and occupation/sale rights.",
        "whyWrong": [
          "Multiple persons can own land together.",
          "",
          "Trusts are lawful and central to co-ownership.",
          "Beneficial interests are often not fully reflected on the register; the 'curtain' concept applies.",
          "Co-owners do not need to be married."
        ]
      }
    },
    {
      "topic": "Priority: why lenders care (principle)",
      "q": "A bank is deciding whether to lend on the security of a house. Why is the priority of interests a core land law concern for the lender?",
      "choices": [
        "Because priority determines who gets paid first from the sale proceeds if the borrower defaults.",
        "Because priority only matters for gardens, not houses.",
        "Because priority is a criminal sentencing concept.",
        "Because lenders never enforce mortgages.",
        "Because priority is decided by whoever shouts first."
      ],
      "correct": 0,
      "explain": {
        "whyRight": "Priority rules determine whether the lender’s security ranks ahead of other rights and whether the lender can realise value on enforcement—central to risk and underwriting.",
        "whyWrong": [
          "",
          "Priority matters for all land, including houses.",
          "Priority in land law is not about criminal sentencing.",
          "Lenders do enforce security where necessary; priority affects recovery.",
          "Priority is determined by legal rules, not by chance."
        ]
      }
    }
  ]

  window.quizData = {
    "title": "Land Law — Chapter 1: The Nature and Principles of Land Law",
    "subtitle": "30 SQE-style scenario MCQs (5 options each) in quizDataSchema format",
    questions: questions
  };
})();
  
