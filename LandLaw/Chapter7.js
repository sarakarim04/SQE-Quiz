(() => {
  const questions = [
    {
      topic: "Positive vs restrictive covenant",
      q: "A 1998 transfer of a freehold plot includes: (1) 'The Buyer must maintain the boundary fence.' (2) 'The Buyer must not build any extension without consent.' A later purchaser asks which is most likely to bind successors in title. What is most accurate?",
      choices: [
        "Both covenants bind successors at common law automatically.",
        "Only the positive covenant binds successors because it improves the land.",
        "Only the restrictive covenant is capable of running in equity to bind successors, whereas the positive covenant generally does not run with freehold land.",
        "Neither covenant can ever bind successors.",
        "Both covenants bind successors only if the original parties intended it.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Restrictive covenants can run with freehold land in equity to bind successors if conditions are met. Positive covenants generally do not run with freehold land (subject to workarounds like chains/estate schemes/benefit and burden).",
        whyWrong: [
          "Freehold covenants do not both run automatically at common law; the key running doctrine is equitable and generally for restrictive covenants.",
          "Positive covenants generally do not run with freehold land.",
          "",
          "Restrictive covenants can bind successors if properly created and protected.",
          "Intention matters but is not sufficient by itself; other requirements must be satisfied.",
        ],
      },
    },
    {
      topic: "Tulk v Moxhay core rule",
      q: "In 1840, Owner covenanted not to build on a square to preserve it as open garden land. The land is later sold to Buyer who had notice of the restriction. Buyer begins building. What principle is most directly engaged?",
      choices: [
        "A positive covenant runs at law if it benefits the land.",
        "A restrictive covenant can bind successors in equity who take with notice, even though they were not parties to the original covenant.",
        "A covenant is always personal and cannot affect land.",
        "Only registered charges can bind successors.",
        "The covenant automatically becomes a lease.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Tulk v Moxhay: restrictive covenants can run in equity to bind successors who take with notice (subject to modern protection rules) to prevent unconscionable breach.",
        whyWrong: [
          "Positive covenants generally do not run with freehold land at law in this way.",
          "",
          "Restrictive covenants can affect land and bind successors in equity.",
          "Registration/protection matters in modern systems, but the equitable principle is the foundation.",
          "A covenant does not become a lease.",
        ],
      },
    },
    {
      topic: "Requirements for burden to run in equity",
      q: "A developer sold Plot 1 in 2015 with a covenant 'not to use the property for business.' Plot 1 is sold to NewOwner in 2026. Which requirement is essential for the burden to bind NewOwner in equity?",
      choices: [
        "The covenant must be positive.",
        "The covenant must be restrictive (negative) in substance.",
        "The covenant must be made orally.",
        "The covenant must be for a fixed term not exceeding 3 years.",
        "The covenant must be witnessed by a notary.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For the burden to run in equity, the covenant must be restrictive in substance (i.e., a negative obligation), among other requirements such as intention, benefit to dominant land, and proper protection.",
        whyWrong: [
          "Positive covenants generally do not run with freehold land in equity in the same way.",
          "",
          "Oral creation is not the essential requirement and will often fail formalities.",
          "Restrictive covenants are not limited to short terms.",
          "Notary involvement is not required.",
        ],
      },
    },
    {
      topic: "Restrictive in substance (Haywood v Brunswick style)",
      q: "A covenant requires 'the owner will maintain the garden so it remains tidy and weed-free.' Is this covenant likely to be restrictive or positive in substance for running of burden?",
      choices: [
        "Restrictive, because it concerns appearance.",
        "Positive, because it requires expenditure/action to comply.",
        "Restrictive, because it benefits neighbours.",
        "Restrictive, because it was in a deed.",
        "Neither; it is void.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A covenant that requires taking action or spending money (maintenance) is typically positive, not purely restrictive, and so its burden generally does not run in equity as a freehold covenant.",
        whyWrong: [
          "Appearance does not determine restrictive/positive; the nature of the obligation does.",
          "Benefit is a separate requirement and does not change the obligation’s character.",
          "Formality does not change substance.",
          "",
        ],
      },
    },
    {
      topic: "Benefit must touch and concern the land",
      q: "Owner of Plot A covenants with Owner of Plot B that the owner of Plot A will not keep pets, purely because B's owner dislikes animals. Plot B is later sold. Can the benefit of this covenant run with Plot B?",
      choices: [
        "Yes, because any covenant can run if the parties intended.",
        "No, because the benefit must touch and concern (accommodate) the dominant land, not be purely personal.",
        "Yes, because it is negative.",
        "Yes, but only if the covenant is registered as a land charge.",
        "No, because restrictive covenants can never benefit land.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For a covenant to run with land, the benefit must accommodate/touch and concern the dominant land, not be merely personal to the covenantee.",
        whyWrong: [
          "Intention alone is insufficient if the covenant is purely personal.",
          "Negativity is not enough; it must benefit the land.",
          "Registration protects against purchasers but does not transform a purely personal covenant into one benefiting land.",
          "Restrictive covenants can benefit land; that is the point of the doctrine.",
        ],
      },
    },
    {
      topic: "Annexation of benefit (express annexation)",
      q: "A transfer states: 'The covenants are made for the benefit of the land known as Greenacre and each and every part of it.' What is the most likely effect?",
      choices: [
        "It prevents the covenant from running.",
        "It is likely an express annexation of the benefit to Greenacre, allowing successors to enforce without needing assignment each time.",
        "It makes the burden automatically run at law.",
        "It converts the covenant into an easement.",
        "It means only the original covenantee can enforce.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Express annexation attaches the benefit to the dominant land so successors in title to that land can enforce the covenant without separate assignment.",
        whyWrong: [
          "It facilitates running of the benefit, not prevents it.",
          "It does not make the burden run at law; burden running is an equitable doctrine for restrictive covenants.",
          "Covenants do not convert into easements by annexation language.",
          "It is designed to allow successors, not only the original covenantee, to enforce.",
        ],
      },
    },
    {
      topic: "Assignment of benefit",
      q: "A restrictive covenant benefits Plot B but was not expressly annexed. Owner of Plot B sells to Buyer without mentioning the covenant. Buyer wants to enforce against Plot A. What must Buyer generally show to enforce via assignment?",
      choices: [
        "Nothing; benefit always runs automatically.",
        "That the benefit was expressly assigned to Buyer at the time of transfer of Plot B (and the covenant touches and concerns Plot B).",
        "That the burden was registered.",
        "That the covenant is positive.",
        "That Plot A’s owner had actual knowledge.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If the benefit is not annexed, it may need to be expressly assigned on each transfer to enable the new owner to enforce (subject to other running requirements).",
        whyWrong: [
          "Benefit does not always run automatically unless annexed or building scheme applies.",
          "Burden registration is about binding purchasers; it does not substitute for assignment of benefit.",
          "Positive covenants are not the typical enforceable class against successors.",
          "Actual knowledge is not the key to who has standing to enforce; it goes to whether burden binds a purchaser under certain regimes.",
        ],
      },
    },
    {
      topic: "Building scheme (estate scheme) basics",
      q: "A developer sells plots on a new estate with similar restrictive covenants intended to be mutually enforceable by all plot owners. What doctrine may allow each plot owner to enforce against the others even if benefit assignment is imperfect?",
      choices: [
        "Building scheme (scheme of development)",
        "Overreaching",
        "Prescription",
        "Adverse possession",
        "Forfeiture",
      ],
      correct: 0,
      explain: {
        whyRight:
          "A building scheme can create a network of mutually enforceable restrictive covenants among purchasers on an estate where conditions for a scheme are satisfied.",
        whyWrong: [
          "",
          "Overreaching concerns beneficial interests under trusts, not estate covenants.",
          "Prescription concerns long use rights, not covenants.",
          "Adverse possession concerns possession, not covenants.",
          "Forfeiture concerns leases.",
        ],
      },
    },
    {
      topic:
        "Unregistered land: protecting restrictive covenants (Land Charges)",
      q: "A restrictive covenant burdening unregistered freehold land is created in 2005. In 2026, the burdened land is sold to a purchaser for money. The covenant was never registered as a land charge. What is the likely consequence?",
      choices: [
        "The covenant binds because it is in a deed.",
        "The covenant may be void against the purchaser for money because it was not registered as the appropriate land charge.",
        "The covenant binds only if the purchaser had actual notice.",
        "The covenant binds because it benefits neighbouring land.",
        "The covenant converts into an easement.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In unregistered land, many restrictive covenants must be registered as land charges (typically Class D(ii)) to bind purchasers for money; failure to register can make them void against such purchasers.",
        whyWrong: [
          "Deed alone is not enough against purchasers for money under the land charges system.",
          "For registrable land charges, actual notice does not generally save an unregistered charge against a purchaser for money.",
          "Benefit to neighbouring land does not cure failure to register as a land charge.",
          "Covenants do not convert into easements.",
        ],
      },
    },
    {
      topic: "Registered land: protection of restrictive covenants",
      q: "A restrictive covenant is created in 2018 burdening registered land. What is the usual way to protect it so that it binds a purchaser of the burdened land?",
      choices: [
        "Register it as a notice on the burdened title at HM Land Registry.",
        "Register it as a Class D land charge.",
        "Do nothing; restrictive covenants always override.",
        "Record it only in the contract.",
        "Register it as an overriding interest by occupation.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "In registered land, restrictive covenants are typically protected by entry of a notice on the register of the burdened title.",
        whyWrong: [
          "Land charges registration is for unregistered land.",
          "Restrictive covenants do not generally override merely by existing; protection by notice is standard.",
          "Contract wording does not protect against third parties if not registered/protected.",
          "Overriding interests relate to certain categories (like some occupations), not restrictive covenants as such.",
        ],
      },
    },
    {
      topic: "Enforcement: who can be sued (successor burdened owner)",
      q: "A restrictive covenant burdening Plot A is properly protected. Plot A is sold to NewOwner. Neighbouring Plot B has the benefit and is now owned by BeneficiaryOwner. NewOwner breaches the covenant. Who is the proper defendant in an enforcement claim?",
      choices: [
        "Only the original covenantor who signed in the past.",
        "The current owner of the burdened land (NewOwner) because the burden runs in equity to successors.",
        "Only the original developer.",
        "The Land Registry.",
        "The council.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For restrictive covenants, the burden can run in equity to bind successors in title to the burdened land (if requirements met), so the current owner is the proper defendant.",
        whyWrong: [
          "The original covenantor may have personal liability, but the point of running burden is to bind successors.",
          "The developer may be irrelevant once land is sold.",
          "",
          "Land Registry is not a party to covenant enforcement.",
          "The council is not generally the defendant in a private covenant claim.",
        ],
      },
    },
    {
      topic: "Remedies: injunction vs damages",
      q: "A homeowner breaches a restrictive covenant prohibiting building and completes a rear extension. The beneficiary seeks an injunction requiring demolition. Which is most accurate?",
      choices: [
        "Injunction is always granted automatically for any breach.",
        "The court has discretion: it may grant an injunction, but in some cases may award damages in lieu depending on factors like delay, proportionality, and adequacy of damages.",
        "Only damages are available for restrictive covenants.",
        "Only criminal penalties apply.",
        "The covenant is unenforceable once the building is completed.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Restrictive covenants are commonly enforced by injunction, but courts have discretion and may award damages in lieu in appropriate circumstances.",
        whyWrong: [
          "Not automatic; discretion applies.",
          "",
          "Injunction is often available; it’s not limited to damages.",
          "Private covenants are civil matters.",
          "Completion does not necessarily make enforcement impossible.",
        ],
      },
    },
    {
      topic: "Standing to enforce: need dominant land",
      q: "A retired developer sold all its land on the estate and retained no neighbouring land. It tries to enforce a restrictive covenant against a plot owner. What is the best general point?",
      choices: [
        "The developer can always enforce because it wrote the covenant.",
        "Enforcement usually requires the covenant to benefit land retained by the covenantee or be part of a building scheme; if the covenantee retains no benefiting land, standing may fail.",
        "Any person can enforce any restrictive covenant.",
        "Only the burdened owner can enforce.",
        "The covenant becomes public law once created.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Restrictive covenants are typically enforceable by those with the benefit attached to land (dominant land) or under a building scheme. If the covenantee retains no benefited land, enforcement may not be available.",
        whyWrong: [
          "Creation alone does not guarantee ongoing enforceability without benefited land/scheme.",
          "Enforcement is not open to the public generally.",
          "Burdened owner is the party bound, not the enforcer.",
          "They do not become public law.",
        ],
      },
    },
    {
      topic: "Positive covenant: general non-running of burden",
      q: "A 2002 transfer contains a covenant by the buyer 'to contribute 50% to the cost of maintaining the private road.' The burdened land is sold in 2026. The road company demands payment from the new owner as a freehold covenant. What is the best response?",
      choices: [
        "The new owner is automatically liable because all covenants run with land.",
        "The new owner is generally not bound at common law/equity by the burden of a positive freehold covenant, though liability might be achieved via alternative mechanisms (e.g., chain of covenants or benefit/burden).",
        "The new owner is liable only if the covenant is registered as a notice.",
        "The new owner is liable only if they had actual notice.",
        "The new owner is never liable under any circumstances.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Positive covenants generally do not run with freehold land, but practitioners use workarounds such as chains of indemnity covenants, rentcharges, or benefit and burden structures.",
        whyWrong: [
          "Not all covenants run; positive burdens are the classic exception.",
          "Registration does not generally make a positive covenant burden run as a covenant.",
          "Actual notice does not generally create liability for a positive covenant burden.",
          "Workarounds can sometimes impose practical liability, so 'never' is too strong.",
        ],
      },
    },
    {
      topic: "Benefit and burden principle (Halsall v Brizell style)",
      q: "A deed grants the freehold owner rights to use private estate roads and communal gardens, and also includes a covenant to contribute to maintenance costs. A successor wants to use the roads but refuses to pay. What is the strongest principle the estate company may rely on?",
      choices: [
        "Positive covenants always run with freeholds.",
        "A person cannot take the benefit of a deed while rejecting the corresponding burden where the benefit and burden are linked, provided the benefit is truly optional.",
        "The covenant becomes a criminal offence.",
        "The estate company can sue in nuisance instead.",
        "The covenant is void for uncertainty.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Under the benefit and burden principle, if a successor chooses to take a benefit conferred by a deed, they may be required to accept the linked burden (e.g., contribution) where the benefit is optional and the burden is relevant to it.",
        whyWrong: [
          "Positive covenants do not generally run; this is an exception-like mechanism.",
          "It is not criminal.",
          "Nuisance is not the primary route for enforcing a contribution covenant.",
          "Such covenants are not automatically void; enforceability depends on structure.",
        ],
      },
    },
    {
      topic: "Benefit and burden limits",
      q: "An estate covenant requires each plot owner to pay £2,000 per year to maintain the swimming pool. The deed also says every owner 'is entitled to use the pool.' A new owner never uses the pool but is demanded to pay. What is the best analysis?",
      choices: [
        "They must pay regardless, because benefit and burden always applies automatically.",
        "If the right to use the pool is genuinely optional and the only relevant benefit, the owner may be able to avoid the burden by not taking the benefit; but if the scheme makes the benefit unavoidable or bundled, the analysis is more complex.",
        "They never have to pay because positive covenants are always unenforceable.",
        "They must pay only if they had actual notice.",
        "They must pay only if the covenant is an easement.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Benefit and burden requires a close link and a choice: if the benefit is optional, refusing the benefit may allow avoidance. If the benefit is inherent/inevitable or bundled with land enjoyment, the argument may be weaker.",
        whyWrong: [
          "It does not apply automatically without the required linkage/choice.",
          "Positive covenants can be enforced via mechanisms; 'always unenforceable' is wrong.",
          "Notice is not the core of benefit/burden.",
          "An easement is different from a maintenance covenant.",
        ],
      },
    },
    {
      topic: "Indemnity covenant chain (practical workaround)",
      q: "A seller of burdened freehold land is required by the transfer to procure from the buyer a covenant to observe the positive covenant and to indemnify the seller. The land is sold again later with a similar promise. What is the purpose of this structure?",
      choices: [
        "To make the positive covenant burden run directly with the land.",
        "To create a chain of indemnity covenants so liability can be passed contractually from current owner back through previous owners.",
        "To turn the covenant into an easement.",
        "To register a land charge automatically.",
        "To avoid all maintenance payments.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Because positive burdens don’t run with freehold land, practitioners use indemnity chains so each successor promises to perform/indemnify, allowing earlier owners to be reimbursed if sued.",
        whyWrong: [
          "It does not make the burden run as a proprietary obligation; it is contractual.",
          "",
          "It does not create an easement.",
          "It does not automatically register anything.",
          "It does not avoid payment; it manages risk and recourse.",
        ],
      },
    },
    {
      topic:
        "Discharge/modify restrictive covenants (statutory route overview)",
      q: "A landowner wants to build housing but is restricted by an old covenant 'no building on the land.' They ask if there is a formal way to seek modification/discharge. What is the best response?",
      choices: [
        "No, restrictive covenants can never be changed.",
        "Yes, an application may be made to the Upper Tribunal (Lands Chamber) to discharge or modify restrictive covenants on certain statutory grounds.",
        "Yes, by serving a s146 notice.",
        "Yes, by registering a unilateral notice.",
        "Yes, by adverse possession.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "There is a statutory mechanism to apply to the Upper Tribunal (Lands Chamber) for discharge or modification of restrictive covenants on prescribed grounds (e.g., obsolete, impedes reasonable use, etc.).",
        whyWrong: [
          "They can sometimes be modified/discharged via statutory or consensual means.",
          "s146 is lease forfeiture procedure, irrelevant.",
          "Notices protect interests; they don’t discharge them.",
          "Adverse possession is unrelated.",
        ],
      },
    },
    {
      topic: "Who has benefit: annexation to 'each and every part'",
      q: "A covenant is expressed to be for the benefit of 'Blueacre and each and every part of it.' Blueacre is later subdivided into three plots and sold to different owners. Who can potentially enforce the covenant (assuming other requirements met)?",
      choices: [
        "Only the first buyer of Blueacre.",
        "Only the original covenantee.",
        "Each owner of the subdivided parts, because the benefit is annexed to the land and each part.",
        "No one, because subdivision destroys enforceability.",
        "Only the owner with the largest plot.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Express annexation to the land and each part can allow successors to each part to enforce, as the benefit attaches to the land itself.",
        whyWrong: [
          "Annexation is designed to enable successors, not just the first buyer.",
          "The original covenantee is not the only enforcer if benefit runs.",
          "",
          "Subdivision does not necessarily destroy enforceability if annexation and other conditions are satisfied.",
          "Plot size is irrelevant.",
        ],
      },
    },
    {
      topic: "Notice: registered land and purchasers",
      q: "A restrictive covenant burdening registered land is not protected by a notice on the title. The burdened land is sold to a purchaser for value who registers. What is the key risk for the beneficiary?",
      choices: [
        "No risk; restrictive covenants always bind.",
        "Risk that the covenant will not bind the purchaser because it was not properly protected on the register (subject to any rare overriding routes).",
        "Risk only if the purchaser had actual knowledge.",
        "Risk only if the beneficiary is in occupation.",
        "Risk only if the covenant is positive.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In registered land, most restrictive covenants should be protected by a notice. Failure to protect can mean they do not bind a purchaser for value, because priority follows the register.",
        whyWrong: [
          "They do not always bind without protection.",
          "",
          "Actual knowledge is not the main protection mechanism in registered land.",
          "Occupation is not the normal route for restrictive covenants to bind.",
          "Positivity affects whether the burden can run, but even restrictive covenants usually require protection.",
        ],
      },
    },
    {
      topic: "Privity of contract: original covenantor liability",
      q: "Original buyer covenanted to pay towards a private road (positive covenant). The buyer sells the land. The covenantee sues the original buyer for arrears incurred after sale. What is the best general point?",
      choices: [
        "Original buyer is never liable once they sell.",
        "Original buyer may remain personally liable on the contract they signed, even though the burden does not run with the land; they may seek indemnity from successors if chains exist.",
        "The covenantee must sue the current owner only.",
        "The claim must be brought in criminal court.",
        "The covenant is automatically void on sale.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Even if a positive burden doesn’t run with freehold land, the original covenantor can remain personally liable on the covenant they made, subject to limitation/terms, and may seek indemnity via contractual chains.",
        whyWrong: [
          "Sale doesn’t automatically release contractual liability.",
          "",
          "Covenantee cannot necessarily sue the current owner if the burden doesn't run and no other mechanism applies.",
          "It’s civil, not criminal.",
          "Covenants don’t automatically become void on sale.",
        ],
      },
    },
    {
      topic: "Interpretation: covenant 'not to use as a shop'",
      q: "A covenant states: 'Not to use the property as a shop.' The owner starts running a small online business from home with occasional parcel collections. Neighbour alleges breach. What is the best approach?",
      choices: [
        "Any business activity is automatically a breach.",
        "Interpret the covenant objectively in context: whether the use amounts to 'as a shop' depends on the nature/scale and impact, not labels.",
        "The covenant is void for uncertainty.",
        "The covenant applies only if the owner has planning permission.",
        "The covenant cannot be enforced once the property is sold.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Covenants are interpreted objectively, considering wording and context. 'As a shop' may focus on retail-facing use; small incidental online trading may or may not breach depending on facts.",
        whyWrong: [
          "Not necessarily; it depends on the covenant’s wording and the nature/extent of use.",
          "",
          "Such wording is usually not void for uncertainty.",
          "Planning permission is separate from private covenant enforcement.",
          "Running with land means it can be enforced by successors if requirements met.",
        ],
      },
    },
    {
      topic: "Release by deed vs informal consent",
      q: "Beneficiary owner verbally tells burdened owner: 'Go ahead, build the extension—I'm fine with it.' The burdened owner builds. Later, beneficiary sells to a new owner, who seeks to enforce the covenant. Which is most accurate?",
      choices: [
        "Verbal consent permanently releases the covenant for all time.",
        "Informal consent may not amount to a legal release; new owner may still enforce unless there is an effective release/variation (often by deed) or estoppel on the facts.",
        "The covenant is automatically removed once breached with consent.",
        "The covenant becomes unenforceable because the beneficiary sold.",
        "The burdened owner becomes immune because they relied on a conversation.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A covenant release/variation generally needs proper formality (often a deed) to bind successors, though estoppel may arise if reliance makes enforcement unconscionable depending on facts.",
        whyWrong: [
          "Verbal consent is not generally a formal release binding successors.",
          "A covenant is not automatically removed by a permitted breach without formal variation.",
          "Sale does not necessarily end enforceability if benefit runs with land.",
          "Reliance may help via estoppel but is not automatic immunity.",
        ],
      },
    },
    {
      topic: "Identifying benefited land",
      q: "A covenant in a transfer says it is made 'for the benefit of the Transferor’s remaining land' but does not specify which land. Years later, the transferor has sold multiple parcels. A current owner wants to enforce. What is the key risk?",
      choices: [
        "No risk; any land the transferor ever owned benefits.",
        "Uncertainty identifying the benefited land can prevent the benefit running or enforcement by successors if the dominant land cannot be clearly ascertained.",
        "The covenant becomes an easement automatically.",
        "The covenant becomes a mortgage.",
        "The burden will not run because the covenant is restrictive.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "To run/enforce, the benefited land should be identifiable. If the dominant land cannot be determined, successors may struggle to show the covenant benefits their land and that they have standing.",
        whyWrong: [
          "Benefit is not unlimited to any formerly owned land; it must attach to identifiable dominant land.",
          "Covenants do not convert into easements.",
          "Not a mortgage issue.",
          "Restrictiveness supports burden running; it does not prevent it.",
        ],
      },
    },
    {
      topic: "Covenant entered into with developer vs management company",
      q: "On an estate, purchasers covenant with a management company (which owns no land on the estate) to comply with restrictive covenants about building design. A plot owner later breaches. Who is most likely to enforce (assuming no building scheme and management company owns no benefited land)?",
      choices: [
        "The management company, because it is named.",
        "Any neighbour automatically.",
        "Enforcement may be problematic if the management company has no benefited land; neighbours may need a building scheme or proper annexation/assignment to enforce.",
        "The local authority.",
        "Only the original developer who is now dissolved.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Restrictive covenants are typically enforced by owners of benefited land. If the covenantee holds no dominant land, enforcement can be difficult unless a scheme or other structure confers enforceability.",
        whyWrong: [
          "Being named is not always enough if the covenant is intended to benefit land rather than be personal, and the company has no land benefit.",
          "Neighbours do not automatically have standing absent benefit/scheme.",
          "Local authority enforcement is a public law/planning matter, not private covenants.",
          "A dissolved developer cannot enforce; the real issue is who has the benefit.",
        ],
      },
    },
    {
      topic: "Damages measure (Wrotham Park-style overview)",
      q: "A homeowner breaches a restrictive covenant by building. The court refuses an injunction but awards damages. What is one possible approach to quantifying damages in lieu?",
      choices: [
        "Automatically order demolition costs as damages.",
        "A negotiating damages approach reflecting the sum that might reasonably have been demanded for releasing the covenant (depending on the case).",
        "Always award zero because injunction was refused.",
        "Always award the homeowner’s profit from the extension.",
        "Always award the original purchase price.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where an injunction is refused, damages in lieu may sometimes be assessed on a 'negotiating damages' basis reflecting a hypothetical release fee, depending on circumstances.",
        whyWrong: [
          "Demolition costs are not the default measure if injunction is refused.",
          "Refusal of injunction does not mean no damages.",
          "",
          "Profits are not automatically the measure in covenant cases.",
          "Purchase price is not the typical measure.",
        ],
      },
    },
  ];

  window.quizData = {
    title: "Land Law — Chapter 7: Freehold Covenants",
    subtitle:
      "30 SQE-style scenario MCQs (5 options each) in quizDataSchema format",
    questions: questions,
  };
})();
