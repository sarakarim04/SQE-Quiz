(() => {
  const questions = [
    {
      topic: "Core characteristics of an easement",
      q: "A buyer asks what must be shown for a right to qualify as a legal easement rather than a mere permission. Which set of requirements is most accurate?",
      choices: [
        "A written contract, payment of rent, and registration at the Land Registry.",
        "Two pieces of land (dominant and servient), different owners, the right accommodates the dominant land, and the right is capable of forming the subject matter of a grant.",
        "A personal benefit to the dominant owner, a fixed term, and exclusive possession.",
        "Continuous use for 3 years, and a deed.",
        "A public right of way and planning permission.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An easement generally requires dominant and servient tenements, diversity of ownership, accommodation of the dominant land, and a right capable of being granted as an easement.",
        whyWrong: [
          "Rent and exclusive possession are lease concepts; registration may be relevant but not the defining criteria.",
          "",
          "Exclusive possession and term describe leases, not easements.",
          "Time and deed may be relevant depending on method of creation, but not the core definitional test.",
          "Public rights and planning permission are different legal concepts.",
        ],
      },
    },
    {
      topic: "Dominant and servient tenements",
      q: "Priya owns House A and claims a right of way over neighbouring Drive B to access the highway. Which statement best reflects the dominant/servient relationship?",
      choices: [
        "House A is servient because it benefits from the right.",
        "Drive B is dominant because it bears the burden.",
        "House A is dominant and Drive B is servient.",
        "Both are dominant because both are land.",
        "Neither is dominant unless the right is registered.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "The land that benefits is the dominant tenement (House A). The land that bears the burden is the servient tenement (Drive B).",
        whyWrong: [
          "Servient bears the burden, not the benefit.",
          "Dominant benefits, not bears the burden.",
          "",
          "Only one is dominant in relation to a particular easement; the other is servient.",
          "Registration affects enforceability/priority, not the dominant/servient classification.",
        ],
      },
    },
    {
      topic: "Accommodation of the dominant land",
      q: "A café owner wants an easement over the neighbour’s land allowing customers to park there, arguing it will increase profits. Which is most accurate?",
      choices: [
        "Valid easement because any commercial advantage counts.",
        "Not an easement because it is a personal commercial benefit and may not accommodate the dominant land.",
        "Valid easement if the café pays a fee.",
        "Valid easement only if the neighbour agrees orally.",
        "Valid easement only if it lasts less than 3 years.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An easement must benefit the dominant land in its normal use, not merely provide a personal or purely commercial advantage to the owner’s business.",
        whyWrong: [
          "Commercial advantage alone is not sufficient if it does not accommodate the land.",
          "",
          "Payment does not convert a personal advantage into an easement.",
          "Oral agreement relates to creation/formality, not whether the right is capable of being an easement.",
          "Duration limits do not determine whether a right is an easement.",
        ],
      },
    },
    {
      topic: "Diversity of ownership",
      q: "Owner holds both Plot X and Plot Y. She writes in a note: 'Plot X has a right of way over Plot Y.' She later sells Plot X to Buyer but keeps Plot Y. Buyer claims the right of way is already an easement. What is most accurate?",
      choices: [
        "An easement can exist even when one person owns both lands.",
        "No easement can exist without diversity of ownership; it might arise later via implied grant/reservation on sale depending on facts.",
        "The note creates a legal easement immediately.",
        "It becomes a public right of way on sale.",
        "It is a lease of Plot Y.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An easement requires dominant and servient land owned by different persons. While both plots are owned by the same owner, there is no easement, though rights may be implied on sale in certain circumstances.",
        whyWrong: [
          "Diversity of ownership is required for an easement.",
          "A note cannot create an easement where the basic requirements are not met.",
          "",
          "Selling land does not create public rights of way automatically.",
          "A right of way is not a lease.",
        ],
      },
    },
    {
      topic: "Capable subject matter: not too vague",
      q: "A deed grants 'a right to use the garden whenever convenient.' The neighbour asks if this is a valid easement. What is the best issue-spotter?",
      choices: [
        "Easements must always be for vehicles, not gardens.",
        "The right may be too vague/uncertain to be an easement and could amount to a mere licence.",
        "Any right in a deed is automatically an easement.",
        "Convenience wording makes it a lease.",
        "It is automatically an equitable mortgage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Easements must be sufficiently certain and defined. A broadly framed right 'whenever convenient' risks being too vague and may be treated as a personal permission.",
        whyWrong: [
          "Easements can include rights over gardens (e.g., rights of way), depending on content.",
          "",
          "Deed form does not guarantee the right is an easement if it fails the substantive tests.",
          "This does not create exclusive possession or a term, so it is not a lease.",
          "Nothing here suggests a mortgage.",
        ],
      },
    },
    {
      topic: "Capable subject matter: must not amount to joint occupation",
      q: "Owner of House A claims an easement over House B allowing her to 'store furniture in B’s spare room permanently.' Which is most accurate?",
      choices: [
        "Valid easement because it concerns storage.",
        "Not an easement because it gives rights akin to exclusive possession/joint occupation of a building space rather than a classic easement.",
        "Valid if it is registered.",
        "Valid only if it is for less than 7 years.",
        "Valid only if it benefits the owner personally.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Rights that effectively amount to possession or joint occupation of the servient land (especially internal spaces) are unlikely to be easements; they look more like a lease or licence.",
        whyWrong: [
          "Content matters: storage in a room can be too possessory to qualify as an easement.",
          "",
          "Registration cannot convert a non-easement right into an easement.",
          "Duration does not cure the possessory character issue.",
          "Easements must accommodate land, not be purely personal.",
        ],
      },
    },
    {
      topic: "Express grant: deed requirement (legal easement)",
      q: "In unregistered land, Seller grants Buyer a right of way over Seller’s retained land, but they record it only in an unsigned email. Buyer asks if it is a legal easement. What is most accurate?",
      choices: [
        "It is legal because emails are always sufficient for land rights.",
        "It is not a legal easement because an express legal easement generally requires a deed (or, if informal, it may at best be equitable).",
        "It becomes legal once used for 20 years.",
        "It is legal because it is a right of way.",
        "It is legal if Buyer pays consideration.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Express creation of a legal easement generally requires a deed. Without a deed, the right may only be equitable (if contract formalities are met) or a mere licence.",
        whyWrong: [
          "Emails do not satisfy deed formalities.",
          "Long use may found prescription, but that’s a different route and not immediate.",
          "",
          "Type of right does not bypass formalities.",
          "Consideration does not replace deed formalities.",
        ],
      },
    },
    {
      topic: "Registered land: protection of easements",
      q: "A legal easement is expressly granted over registered servient land. The parties execute a deed but do not enter anything on the register. Buyer later purchases the servient title for value and registers. When can the easement still bind Buyer as an overriding interest?",
      choices: [
        "Never; easements must always be entered to bind.",
        "If the easement is a legal easement that overrides under the statutory rules (e.g., obvious on inspection, within actual knowledge, or recently exercised, depending on category).",
        "Only if the dominant owner is in actual occupation of the servient land.",
        "Only if the easement is mentioned in the contract for sale.",
        "Only if the easement is for drainage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Certain legal easements can override even if not entered, typically where they are obvious on inspection, within actual knowledge, or exercised within the relevant period (depending on the statutory category).",
        whyWrong: [
          "Some easements can override without entry.",
          "Actual occupation applies to different overriding categories.",
          "Contract mention is not the statutory test for overriding status.",
          "Drainage is not automatically overriding; the statutory conditions matter.",
        ],
      },
    },
    {
      topic: "Implied grant: necessity",
      q: "Owner sells a landlocked plot to Buyer. There is no express right of way in the transfer. Buyer cannot access the plot except by crossing Seller’s retained land. What is the strongest implied easement argument?",
      choices: [
        "Easement by prescription",
        "Easement of necessity",
        "Easement by long user under a deed",
        "Easement by estoppel only",
        "Easement by adverse possession",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where land is truly landlocked, a right of way may be implied as an easement of necessity to make the grant workable.",
        whyWrong: [
          "Prescription requires long use, not immediate necessity at conveyance.",
          "",
          "This is not the correct concept; necessity arises from the circumstances of the disposition.",
          "Estoppel may apply on facts, but necessity is the most direct for landlocked access at transfer.",
          "Adverse possession is unrelated to easements.",
        ],
      },
    },
    {
      topic: "Implied grant: common intention",
      q: "A developer sells a plot expressly for the purpose of building a house. Access for construction vehicles is impossible without using an existing track over the retained land. No express easement is granted. Which implied easement route is most relevant?",
      choices: [
        "Easement by common intention",
        "Easement by prescription",
        "Easement by surrender",
        "Easement by rentcharge",
        "Easement by merger",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Where the parties share a common intention as to the use of the land, an easement may be implied if necessary for that intended use (often a stronger threshold than mere convenience).",
        whyWrong: [
          "Prescription requires long use.",
          "",
          "Surrender relates to leases, not easements.",
          "Rentcharges are different proprietary interests.",
          "Merger concerns combining estates, not implying easements.",
        ],
      },
    },
    {
      topic: "Implied grant: Wheeldon v Burrows (continuous and apparent)",
      q: "Before selling part of their land, Seller uses a path over the part to be sold to access a garage on the retained land. The path is obvious and used regularly. Seller then sells the path land to Buyer but says nothing about rights. Seller claims an implied easement. Which doctrine is most directly relevant?",
      choices: [
        "Wheeldon v Burrows",
        "Prescription",
        "Adverse possession",
        "Forfeiture",
        "Overreaching",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Wheeldon v Burrows can imply quasi-easements on the grant of part, where the right was continuous and apparent and necessary for the reasonable enjoyment of the retained land (as against the grantee).",
        whyWrong: [
          "Prescription needs long use as of right after severance, not quasi-easements before sale.",
          "",
          "Adverse possession is unrelated.",
          "Forfeiture relates to leases.",
          "Overreaching relates to beneficial interests under trusts.",
        ],
      },
    },
    {
      topic: "Implied grant: LPA 1925 s62 (effect)",
      q: "A tenant occupies a building under a licence that permits use of a shared accessway. The landlord later grants the tenant a lease of part of the building. The lease is silent on the accessway. How can s62 be relevant?",
      choices: [
        "s62 can operate to convert certain permissions into easements on conveyance, potentially elevating prior privileges into legal easements if conditions are met.",
        "s62 prevents any easements from arising.",
        "s62 applies only to mortgages.",
        "s62 creates adverse possession rights.",
        "s62 makes the lease void for uncertainty.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "s62 can ‘pass’ and sometimes transform existing rights/privileges enjoyed with the land into easements on a conveyance/lease, even if not expressly mentioned, depending on the circumstances.",
        whyWrong: [
          "s62 is a potential easement-creating provision, not a blocker.",
          "",
          "It is not about mortgages.",
          "It does not create adverse possession.",
          "It does not void leases.",
        ],
      },
    },
    {
      topic: "Implied reservation: general reluctance",
      q: "Seller sells part of their land to Buyer and later claims an easement over the part sold to benefit the land retained, despite no express reservation. What is the best general statement?",
      choices: [
        "Easements are implied on reservation as readily as on grant.",
        "Implied reservation is generally more limited; it is not favoured and usually requires necessity or common intention (not merely convenience).",
        "Implied reservation is automatic whenever the seller previously used the right.",
        "Implied reservation can be created by s62 in all cases.",
        "Implied reservation is impossible in law.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Courts are generally reluctant to imply easements in favour of a seller (reservation). It is usually confined to necessity or common intention rather than the broader rules for implied grant.",
        whyWrong: [
          "Implied grant is broader than implied reservation.",
          "",
          "Prior use alone does not automatically imply reservation.",
          "s62 is more commonly associated with implied grant and is not a universal reservation tool.",
          "Reservation can be implied in limited cases.",
        ],
      },
    },
    {
      topic: "Prescription: basic idea",
      q: "For 25 years, Neighbour has used a path over Owner’s land openly, without permission, without force, and without secrecy. Owner now blocks the path. Neighbour claims an easement by prescription. What is the key principle Neighbour must show?",
      choices: [
        "Use was with Owner’s written consent.",
        "Use was as of right (without force, without secrecy, without permission) for the required period.",
        "Use was hidden to avoid dispute.",
        "Use was paid for.",
        "Use was only on weekends.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Prescriptive easements require long use 'as of right'—without force, without secrecy, and without permission—for the relevant period under the applicable doctrine.",
        whyWrong: [
          "Permission defeats 'as of right'.",
          "Secrecy undermines the claim.",
          "Payment is not required.",
          "Weekend-only use could still support a claim depending on the nature of the right; frequency is fact-sensitive but not the core principle.",
        ],
      },
    },
    {
      topic: "Prescription: permission defeats",
      q: "For 30 years, Owner allowed Neighbour to cross the land after Neighbour asked and Owner said, 'Sure, you may do that whenever you like.' Neighbour now claims an easement by prescription. Which is best?",
      choices: [
        "Strong claim because 30 years is enough.",
        "Weak claim because use was by permission, so not 'as of right'.",
        "Strong claim because asking once does not matter.",
        "Automatic easement because the parties are neighbours.",
        "No claim because prescription requires a deed.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Prescriptive rights require use without permission. Express permission usually defeats the 'as of right' requirement.",
        whyWrong: [
          "Duration alone is not enough if the use is permissive.",
          "If permission is clear, it can defeat the claim even if long-standing.",
          "",
          "Neighbourhood status is irrelevant.",
          "Prescription does not require a deed; it is based on long use.",
        ],
      },
    },
    {
      topic: "Prescription: force defeats",
      q: "Neighbour used a shortcut over Owner’s land for 20 years. Owner regularly locked the gate, but Neighbour repeatedly broke the lock and continued. Neighbour claims prescriptive easement. What is the best analysis?",
      choices: [
        "Strong claim: 20 years is always enough.",
        "Weak claim: use was 'by force', so not as of right.",
        "Strong claim because the owner protested.",
        "Strong claim if neighbour paid damages for locks.",
        "Claim succeeds only if registered.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Use by force (e.g., breaking locks) is not 'as of right' and typically prevents acquisition by prescription.",
        whyWrong: [
          "Time alone does not cure use by force.",
          "Owner protest does not help the claimant; it supports that use was contentious/forced.",
          "",
          "Payment does not convert forced use into 'as of right'.",
          "Registration is not the basis of prescription acquisition (though recording may be relevant later).",
        ],
      },
    },
    {
      topic: "Extent: reasonable use and ancillary rights",
      q: "An easement of way is granted 'for pedestrian access' to a cottage. The dominant owner starts driving a car over the way daily. Servient owner objects. What is the best approach?",
      choices: [
        "Any right of way automatically includes vehicular use.",
        "Interpret the grant: a pedestrian-only grant likely does not permit vehicles; excessive use could be restrained.",
        "Dominant owner can do anything that benefits them.",
        "Servient owner must accept any intensification.",
        "Vehicular use is allowed only if the dominant owner pays extra.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Easements are interpreted according to their express terms and context. A pedestrian-only right generally excludes vehicle use, and misuse can be restrained.",
        whyWrong: [
          "Not all rights of way include vehicles; wording matters.",
          "",
          "Easements are limited rights, not general freedom.",
          "Servient land is protected from excessive or different use beyond the grant.",
          "Payment is not how scope is expanded unless a new grant is agreed.",
        ],
      },
    },
    {
      topic: "Intensification: change in dominant land use",
      q: "A right of way benefits a single farmhouse. The dominant owner converts the farmhouse into 12 holiday lets, massively increasing traffic. The servient owner claims the easement is being used beyond its scope. Which is the best general statement?",
      choices: [
        "Any increase in use is permitted as of right.",
        "Substantial intensification or change in character of use may exceed the scope of the easement and can be restrained.",
        "The easement automatically expands to match any development.",
        "The easement ends automatically if traffic increases.",
        "The servient owner must build a wider road.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "While some increase may be permissible, a radical change or excessive intensification may go beyond what was contemplated and be actionable.",
        whyWrong: [
          "Unlimited expansion is not allowed.",
          "Easements do not automatically expand with development.",
          "",
          "Increased use does not automatically terminate an easement.",
          "Servient owner generally has no duty to upgrade the way.",
        ],
      },
    },
    {
      topic: "Positive burden on servient owner (general rule)",
      q: "Dominant owner claims an easement requiring the servient owner to 'keep the path lit and maintained at all times.' Is that likely to be a valid easement obligation?",
      choices: [
        "Yes, easements routinely impose positive obligations on servient owners.",
        "No, easements generally do not impose positive obligations on the servient owner (save for limited exceptions or separate agreements).",
        "Yes, if the dominant owner pays a fee.",
        "Yes, if the path is registered.",
        "No, because paths can never be easements.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Easements are typically negative or permissive rights; imposing ongoing positive duties on the servient owner is generally not characteristic of an easement (subject to limited exceptions/ancillary obligations).",
        whyWrong: [
          "The general rule is the opposite.",
          "Payment doesn’t change the nature of the right into an easement duty automatically.",
          "Registration doesn’t convert an invalid positive burden into a valid easement.",
          "",
          "Rights of way are classic easements.",
        ],
      },
    },
    {
      topic: "Creation: implied by necessity vs convenience",
      q: "After a sale of part, the buyer can access their plot via a long public footpath but would prefer a shorter route across the seller’s retained land. They claim an easement of necessity. What is most accurate?",
      choices: [
        "Necessity always exists if a shorter route is preferable.",
        "An easement of necessity requires strict necessity; if there is another reasonable access, necessity likely fails (though other implied routes may be argued).",
        "Necessity exists whenever access is inconvenient.",
        "Necessity exists if the buyer pays compensation.",
        "Necessity exists only for vehicles.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Necessity is interpreted strictly: the right must be necessary for use of the land, not merely convenient or preferable if alternative access exists.",
        whyWrong: [
          "Preference is not necessity.",
          "",
          "Inconvenience does not equal necessity.",
          "Compensation does not create necessity.",
          "Necessity can relate to pedestrian access too.",
        ],
      },
    },
    {
      topic: "Extinguishment: unity of seisin (merger)",
      q: "An easement of way exists between Plot A (dominant) and Plot B (servient). One person later buys both plots and holds them in the same capacity. What generally happens to the easement?",
      choices: [
        "It continues automatically, because easements are permanent.",
        "It is generally extinguished by unity of ownership (unity of seisin), though it may be recreated on later severance if properly granted/ implied.",
        "It converts into a restrictive covenant.",
        "It becomes a public right of way.",
        "It becomes a lease.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Easements require separate ownership. If both dominant and servient land come into the same ownership and possession in the same capacity, the easement is typically extinguished by unity.",
        whyWrong: [
          "Easements can be extinguished in certain ways, including unity.",
          "",
          "It does not convert into a covenant automatically.",
          "No automatic public dedication occurs.",
          "It does not become a lease.",
        ],
      },
    },
    {
      topic: "Extinguishment: release",
      q: "Dominant owner no longer wants a right of way and agrees in writing to give it up. What is the safest formal method to extinguish the easement?",
      choices: [
        "Oral agreement in front of witnesses",
        "Deed of release (and registration if required for registered land)",
        "A text message to the servient owner",
        "Stopping use for 6 months",
        "Applying to the Land Charges register",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Release of a legal easement should be by deed to satisfy formalities, and in registered land the register should be updated to reflect the release.",
        whyWrong: [
          "Oral agreement will generally not satisfy formalities for legal easement release.",
          "Texts are unlikely to meet deed/formality requirements.",
          "",
          "Non-use for a short period does not automatically extinguish an easement.",
          "Land Charges registration is for unregistered land and not the correct release method.",
        ],
      },
    },
    {
      topic: "Extinguishment: abandonment (high threshold)",
      q: "An easement holder stops using a right of way for 15 years. The path becomes overgrown. Servient owner claims the easement is abandoned. Which is most accurate?",
      choices: [
        "Non-use alone automatically proves abandonment.",
        "Abandonment requires clear evidence of intention to permanently give up the right; mere non-use is usually insufficient.",
        "Any non-use over 5 years is abandonment.",
        "Abandonment is decided by the Land Registry only.",
        "Abandonment requires a court order in every case regardless of evidence.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Abandonment has a high threshold: there must be clear evidence of intention to relinquish permanently; non-use alone rarely suffices.",
        whyWrong: [
          "Non-use is not automatically abandonment.",
          "There is no fixed 5-year rule.",
          "",
          "Registry entries reflect rights but abandonment is a substantive question often determined by evidence/courts.",
          "A court order may be needed to resolve disputes, but it’s not a formal prerequisite for the concept to exist.",
        ],
      },
    },
    {
      topic: "Interference: servient owner’s duty not to derogate",
      q: "Servient owner builds a wall blocking a right of way used to access the dominant property. Dominant owner seeks an injunction. What is the strongest legal basis?",
      choices: [
        "Servient owner can do anything on their land regardless of easements.",
        "Blocking the easement is a substantial interference; dominant owner can seek injunction/damages for obstruction of an easement.",
        "The dominant owner must buy the servient land.",
        "The easement ends automatically once blocked.",
        "Only criminal law applies.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The servient owner must not substantially interfere with the reasonable exercise of an easement; obstruction can be restrained by injunction and/or compensated by damages.",
        whyWrong: [
          "Easements are binding proprietary rights limiting servient land use.",
          "",
          "No requirement to purchase the land.",
          "An easement is not extinguished simply by obstruction.",
          "It is primarily a civil property matter.",
        ],
      },
    },
    {
      topic: "Interference: dominant owner’s limits",
      q: "Dominant owner uses a right of way and installs fixed bollards and signage on the servient land to 'improve safety.' Servient owner objects. What is most accurate?",
      choices: [
        "Dominant owner can place permanent structures on servient land whenever they use an easement.",
        "Dominant owner must use the easement reasonably and cannot impose additional burdens or take possession-like control of the servient land.",
        "Dominant owner can do anything as long as it benefits the dominant land.",
        "Servient owner must remove the bollards at their own cost even if dominant installed them.",
        "The easement automatically expands into a lease.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Easements confer limited rights. The dominant owner must exercise them reasonably and cannot materially increase the burden or treat the servient land as if they own it.",
        whyWrong: [
          "Permanent structures can exceed the scope of an easement depending on rights granted and can be unlawful.",
          "",
          "Benefit alone is not enough; scope and burden matter.",
          "Cost allocation depends on remedies and who placed them; no automatic servient duty.",
          "Easements do not transform into leases.",
        ],
      },
    },
    {
      topic: "Easement vs public right",
      q: "A right of way is claimed over a farm track used by local residents generally. A homeowner says it is 'their easement.' Which is most accurate?",
      choices: [
        "If the public uses it, it must be the homeowner’s private easement.",
        "Public use may indicate a public right of way, not a private easement benefiting a particular dominant tenement.",
        "Any right of way is automatically an easement.",
        "An easement can exist only if the council registers it.",
        "A public right of way can be created only by deed.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Easements are private rights benefiting identifiable dominant land. Widespread public use points to public rights of way concepts, which are different from easements.",
        whyWrong: [
          "Public use suggests a different category of right.",
          "Some rights of way are easements, but not all rights of way are private easements.",
          "",
          "Council records may be relevant but are not the definition of an easement.",
          "Public rights of way can arise through dedication and long use, not only by deed.",
        ],
      },
    },
    {
      topic: "Protection: notice vs overriding for easements (registered land)",
      q: "A buyer of registered land wants to reduce risk of being bound by an unregistered easement. Which is the best practical step?",
      choices: [
        "Ignore physical inspection because only the register matters.",
        "Inspect the land carefully for obvious signs of rights of way/drains and make enquiries, because some easements can override if obvious/known/recently used.",
        "Search the Land Charges register.",
        "Assume no easements can bind unless noted.",
        "Require the seller to remove all covenants.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Because certain legal easements can override without entry, inspection and enquiries are key to identifying obvious rights and managing risk alongside register review.",
        whyWrong: [
          "Overriding easements can bind despite no register entry.",
          "",
          "Land Charges searches are for unregistered land.",
          "This assumption is incorrect due to overriding interests.",
          "Covenants are different and removal is not a simple purchase condition.",
        ],
      },
    },
    {
      topic: "Easement creation: express reservation on sale",
      q: "Seller sells part of their land but wants to retain a right of way across the part sold to reach the highway. What is the safest approach?",
      choices: [
        "Rely on implied reservation by convenience.",
        "Expressly reserve the easement in the transfer by deed (and register it if required).",
        "Assume Wheeldon v Burrows will always imply it.",
        "Assume s62 will automatically reserve it.",
        "Do nothing; reservation always arises automatically.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Implied reservation is limited and uncertain. The safest route is an express reservation in the transfer deed, with appropriate registration/protection.",
        whyWrong: [
          "Convenience is unlikely to support implied reservation.",
          "Wheeldon v Burrows generally supports implied grant, not reservation.",
          "s62 is not a guaranteed reservation mechanism.",
          "Reservation is not automatic.",
        ],
      },
    },
    {
      topic: "Easements and leases: tenant claiming easement",
      q: "A tenant of the dominant land claims a right of way over neighbouring servient land for access to the leased premises. Who can typically enjoy the benefit of the easement?",
      choices: [
        "Only the freehold owner, never a tenant.",
        "The easement benefits the dominant land, so occupiers such as tenants can generally use it as part of their lawful enjoyment of the dominant tenement.",
        "Only the person named in the easement deed personally.",
        "Only if the tenant pays the servient owner.",
        "Only if the tenant registers as proprietor.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An easement attaches to the dominant land, so those in lawful occupation (like tenants) can usually exercise it as part of using the dominant land.",
        whyWrong: [
          "Tenants can typically benefit through the dominant land.",
          "Easements are generally proprietary and not purely personal to a named individual.",
          "",
          "Payment is not a precondition for exercising an existing easement.",
          "Tenants don’t need to be registered proprietors to use appurtenant rights.",
        ],
      },
    },
    {
      topic: "Licence vs easement (key distinction)",
      q: "Owner gives Neighbour written permission to cross the garden 'until further notice.' Neighbour claims it is an easement. What is the best analysis?",
      choices: [
        "It is an easement because it is in writing.",
        "It is likely a licence because it is revocable 'until further notice' and appears personal, not a permanent proprietary right benefiting land.",
        "It is an easement because it is a right of way.",
        "It is automatically a lease.",
        "It is a restrictive covenant.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A revocable permission is characteristic of a licence. An easement is generally a proprietary right attached to land, not a revocable personal permission.",
        whyWrong: [
          "Writing alone does not make it an easement.",
          "Not all rights of way are easements; the substance and permanence matter.",
          "",
          "No exclusive possession/term is granted, so not a lease.",
          "A restrictive covenant is a promise restricting land use, not a permission to cross.",
        ],
      },
    },
    {
      topic: "Easement and repair of the way (ancillary rights)",
      q: "An easement of way is granted over a private track. The track becomes potholed. The dominant owner wants to carry out reasonable repairs on the track to make it passable. What is most accurate?",
      choices: [
        "Dominant owner can never enter the servient land for any purpose other than passing.",
        "Dominant owner may have ancillary rights to do what is reasonably necessary to enjoy the easement (including reasonable repairs), provided it does not substantially burden the servient land.",
        "Dominant owner can force the servient owner to repair at the servient owner’s cost.",
        "Dominant owner can widen the track into a two-lane road.",
        "The easement ends if the track deteriorates.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Ancillary rights can be implied to make the easement effective (e.g., reasonable repairs), but must be exercised reasonably and without imposing substantial additional burden.",
        whyWrong: [
          "Ancillary rights can exist beyond mere passage.",
          "Servient owner is not generally under a positive duty to repair absent agreement.",
          "",
          "Widening significantly could exceed the scope and increase the burden.",
          "Deterioration does not automatically extinguish the easement.",
        ],
      },
    },
    {
      topic: "Prescription: interruption",
      q: "Neighbour claims a prescriptive right of way based on 20 years’ use. For 18 months during that period, Owner successfully blocked the route with a locked gate and Neighbour did not use it. What issue does this raise?",
      choices: [
        "No issue; any interruption strengthens prescription.",
        "Potential interruption: a substantial effective interruption can break the continuity required for prescription depending on doctrine and timing.",
        "It proves the use was by force.",
        "It converts the claim into adverse possession.",
        "It automatically creates a legal easement by deed.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Prescription generally requires continuous use over the relevant period. Effective interruptions can break continuity and defeat the claim depending on the facts and applicable doctrine.",
        whyWrong: [
          "Interruption can weaken, not strengthen, the claim.",
          "Blocking does not itself prove the claimant used 'by force' (though the claimant’s response might).",
          "",
          "Adverse possession is unrelated to easements by prescription.",
          "No deed is created by interruption.",
        ],
      },
    },
  ];

  window.quizData = {
    title: "Land Law — Chapter 6: Easements",
    subtitle:
      "30 SQE-style scenario MCQs (5 options each) in quizDataSchema format",
    questions: questions,
  };
})();
