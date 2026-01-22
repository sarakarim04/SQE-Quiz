(() => {
  const questions = [
    {
      topic: "Unregistered land: three-step priority approach",
      q: "You are advising Buyer on purchasing an unregistered freehold. You identify a potential third-party right affecting the land. What is the best sequence of questions to determine whether Buyer will be bound?",
      choices: [
        "Is it fair to bind Buyer? If yes, Buyer is bound.",
        "Is it legal or equitable? If legal, it never binds; if equitable, it always binds.",
        "Is it a legal interest? If not, is it registrable as a land charge and registered? If not registrable, apply the doctrine of notice.",
        "Is the land in England? If yes, Buyer is always bound.",
        "Has the right been used recently? If yes, Buyer is bound.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "In unregistered land, you usually ask: (1) is the right legal (binds generally) or equitable; (2) if equitable, is it registrable as a land charge and registered (priority under the Act); (3) if not registrable, apply the doctrine of notice.",
        whyWrong: [
          "Fairness is not the governing test; priority is rule-based.",
          "Legal interests can bind; equitable interests do not always bind (registration/notice rules).",
          "",
          "England/Wales law still requires applying the correct priority regime.",
          "Use alone is not the binding test.",
        ],
      },
    },
    {
      topic: "Legal interests in unregistered land",
      q: "Seller granted Neighbour a legal easement by deed over Seller’s unregistered land 5 years ago. Seller now sells the freehold to Buyer for value. Buyer says they are not bound because nothing appears on the title deeds. What is the best statement?",
      choices: [
        "Buyer is not bound unless the easement is registered as a land charge.",
        "Buyer is bound because legal interests generally bind purchasers regardless of notice.",
        "Buyer is not bound unless Neighbour is in actual occupation.",
        "Buyer is bound only if the easement was created before 1926.",
        "Buyer is not bound because the land is unregistered.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In unregistered land, properly created legal property rights (like a legal easement) generally bind successors whether or not they have notice.",
        whyWrong: [
          "Land charges registration is primarily for certain equitable rights, not for the general validity/binding nature of legal easements.",
          "Actual occupation is not a general requirement for a legal easement to bind.",
          "The date is not the determinant of whether a legal easement binds.",
          "Unregistered land does not mean ‘no binding rights’—it means priority is determined differently.",
        ],
      },
    },
    {
      topic: "Equitable interests and the Land Charges regime",
      q: "Owner grants X an option to purchase the unregistered freehold. X does not register anything. Owner later sells the freehold to Buyer for market price. X tries to enforce the option against Buyer. What is the most likely outcome?",
      choices: [
        "X can enforce because Buyer had constructive notice from local rumours.",
        "X cannot enforce because an unregistered registrable land charge can be void against a purchaser despite notice.",
        "X can enforce because options always bind successors.",
        "X can enforce only if X is in occupation.",
        "X cannot enforce only if Buyer is a volunteer (gift).",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Options are typically treated as estate contracts (registrable as land charges). If a registrable land charge is not registered, it can be void against a purchaser for money or money’s worth of a legal estate—knowledge may not save it.",
        whyWrong: [
          "For registrable land charges, the statute can disapply notice-based arguments.",
          "",
          "Options do not automatically bind successors; they must be properly protected.",
          "Occupation is not the key protection mechanism for an option in unregistered land.",
          "A volunteer is the opposite of a purchaser for value; the rule is about purchasers for value.",
        ],
      },
    },
    {
      topic: "Money or money’s worth",
      q: "Owner grants X an option to purchase (not registered). Owner later gifts the freehold to her daughter (no payment). X seeks to enforce the option against the daughter. Which is most accurate?",
      choices: [
        "The daughter takes free because all purchasers take free of unregistered land charges.",
        "The daughter is bound because the statutory protection is aimed at purchasers for money or money’s worth, not volunteers.",
        "The daughter is never bound because she was not a party to the option.",
        "X is bound because options are only personal rights.",
        "The daughter is bound only if she had actual notice.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The statutory ‘void against a purchaser’ protection typically requires a purchaser for money or money’s worth. A volunteer (gift recipient) may not benefit, so the unregistered option may still bind them.",
        whyWrong: [
          "The protection is not for ‘all purchasers’ regardless of consideration.",
          "Third-party binding is precisely what proprietary protection rules address; lack of privity isn’t decisive.",
          "An option can be a proprietary-type interest (estate contract) if properly protected; here the issue is who is protected by the statute.",
          "Notice may matter in some contexts, but the key point here is the absence of money or money’s worth.",
        ],
      },
    },
    {
      topic: "Class D(ii): restrictive covenants (registrable land charges)",
      q: "In 2018, Owner covenants (not in a lease) that the unregistered land will not be used for business. The covenant benefits Neighbour’s land. Neighbour does not register it. In 2026, Owner sells to Buyer for value. Buyer wants to run a café. Can Neighbour enforce?",
      choices: [
        "Yes, because restrictive covenants always bind successors automatically.",
        "Yes, because Buyer had actual notice from a conversation with Neighbour.",
        "No, because an unregistered registrable restrictive covenant can be void against a purchaser.",
        "Yes, because the covenant benefits land (so it must bind).",
        "No, because covenants can never bind successors in unregistered land.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "A post-1925 restrictive covenant (outside a landlord–tenant relationship) is typically registrable as a land charge. If it is not registered, it can be void against a purchaser of the affected legal estate for value.",
        whyWrong: [
          "Restrictive covenants can bind, but only if properly protected under the relevant system.",
          "For registrable land charges, statutory rules can defeat notice-based arguments.",
          "",
          "Benefiting land is necessary for ‘running’, but protection/priority still matters.",
          "Covenants can bind in unregistered land; the point is the protection mechanism.",
        ],
      },
    },
    {
      topic: "Class D(iii): equitable easements",
      q: "Owner signs a written agreement granting Neighbour a right of way but does not execute a deed. Neighbour uses the route. The right is therefore (at most) equitable. Neighbour does not register it. Owner sells the unregistered freehold to Buyer for value. Buyer blocks the route. What is the best analysis?",
      choices: [
        "Neighbour is not bound because equitable easements can never bind anyone.",
        "Buyer is bound because Neighbour has been using the route (actual use always binds).",
        "Neighbour’s unregistered equitable easement may be void against Buyer because it is registrable as a land charge.",
        "Buyer is bound only if Neighbour paid rent.",
        "Neighbour is bound because only legal easements exist.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "An equitable easement (created without a deed) is typically registrable as a Class D(iii) land charge in unregistered land. If not registered, it may be void against a purchaser for value of the legal estate.",
        whyWrong: [
          "Equitable easements can exist and bind if properly protected.",
          "Use alone is not the statutory protection mechanism for registrable land charges.",
          "",
          "Rent is irrelevant to easements.",
          "Legal easements exist, but the facts here point to an equitable right.",
        ],
      },
    },
    {
      topic: "Estate contracts: what counts",
      q: "Which arrangement is most likely to be treated as an 'estate contract' for unregistered land charges purposes (and therefore requires registration to protect against a purchaser)?",
      choices: [
        "A purely personal licence to store boxes in a shed for six months.",
        "A contract for the grant of a legal lease next month.",
        "A promise to be a good neighbour.",
        "A statement of intention to sell 'one day' with no agreed terms.",
        "A right to visit the garden whenever invited.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A contract to convey or create a legal estate (e.g., a contract for a lease, option, pre-emption) is typically an estate contract and is registrable as a land charge in unregistered land.",
        whyWrong: [
          "A bare licence is generally personal and not an estate contract.",
          "Moral/personal promises are not estate contracts.",
          "An uncertain ‘intention’ without contractual certainty is unlikely to be an estate contract.",
          "A right dependent on invitation is personal, not an estate contract.",
        ],
      },
    },
    {
      topic: "Registration is against the estate owner’s name",
      q: "X registers a land charge, but mistakenly registers it against the wrong first name of the estate owner (e.g., 'Jon' instead of 'John' as per the deeds). Buyer later searches correctly and finds nothing. What is the likely consequence?",
      choices: [
        "The registration is still effective because the land charge exists in substance.",
        "The registration may be ineffective, so Buyer can take free if the charge is void against purchasers.",
        "Buyer is bound because they should have searched for spelling variants.",
        "Buyer is bound because registration errors are automatically corrected.",
        "The charge becomes a legal interest due to attempted registration.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In unregistered land, registration is name-based. If a registrable charge is not properly registered against the estate owner’s correct name, a purchaser who searches the correct name may take free because the charge is treated as unregistered for priority purposes.",
        whyWrong: [
          "Effectiveness depends on correct registration formalities, not merely substance.",
          "Purchasers must make reasonable searches, but they are not expected to guess every possible error by the charge-holder.",
          "Errors are not automatically cured for priority purposes.",
          "Registration does not transform an equitable interest into a legal one.",
        ],
      },
    },
    {
      topic: "Practical searching: name changes",
      q: "Seller owned unregistered land under the name 'Aisha Khan'. She changed her surname after marriage to 'Aisha Patel' and sells as Patel. Buyer searches only 'Patel' at the Land Charges Department and completes. Later, a land charge registered against 'Khan' emerges. What is the best advice?",
      choices: [
        "Buyer is automatically protected because they searched the current name.",
        "Buyer may be bound because the correct practice is to search all relevant names used by the estate owner during the relevant period.",
        "Buyer is never bound by land charges because the land is unregistered.",
        "Buyer is protected only if they also searched the Land Registry title (there isn’t one).",
        "Buyer is bound only if they had actual notice of the land charge.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Land charges searches are name-based. A prudent purchaser searches against all relevant names/aliases of the estate owner (e.g., prior surname) to avoid missing properly registered charges.",
        whyWrong: [
          "Searching only the current name can be insufficient where the estate owner previously used other names.",
          "Unregistered land can still be affected by binding rights—priority is the key issue.",
          "Land Registry title does not exist pre-registration; the relevant search is the Land Charges register (and other searches).",
          "For registrable land charges, statutory consequences can apply regardless of notice.",
        ],
      },
    },
    {
      topic: "Definition of purchaser in unregistered land charges",
      q: "Owner grants an unregistered equitable easement to X. Later, Owner grants a legal mortgage to Bank over the unregistered freehold for a loan. Bank did no land charges search. X claims the easement binds Bank. Who is most likely correct?",
      choices: [
        "X, because banks are not purchasers.",
        "Bank, because mortgagees for value are treated as purchasers and can take free of unregistered registrable land charges.",
        "X, because only buyers (not lenders) can rely on the land charges system.",
        "X, because equitable easements always outrank mortgages.",
        "Bank, but only if X is not using the easement.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For land charges purposes, a 'purchaser' can include a mortgagee or lessee who takes for valuable consideration. If X’s registrable land charge was not registered, it can be void against such a purchaser.",
        whyWrong: [
          "Mortgagees can qualify as purchasers under the statutory definition.",
          "The regime applies to purchasers of interests, including charges, not only outright buyers.",
          "Priority is not based on a blanket rule that equitable easements always outrank mortgages.",
          "Use is not the key statutory protection mechanism for registrable land charges.",
        ],
      },
    },
    {
      topic: "C(i): puisne mortgage (concept)",
      q: "Owner already has a first legal mortgage protected by deposit of title deeds with Lender1. Owner later grants Lender2 a second legal mortgage over the same unregistered land. What is the special unregistered-land protection issue for Lender2?",
      choices: [
        "Lender2 must register its mortgage as a land charge (puisne mortgage) to protect priority.",
        "Lender2 is automatically first in time and therefore first in priority.",
        "Lender2 is protected by actual occupation.",
        "Lender2’s mortgage is invalid because second mortgages are prohibited.",
        "Lender2 becomes the freehold owner immediately.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "A subsequent legal mortgage that is not protected by holding the title deeds may need protection through the land charges system (as a puisne mortgage) to avoid being void against certain purchasers if not registered.",
        whyWrong: [
          "Priority is not automatically improved by later creation; protection rules matter.",
          "Actual occupation is not the protection route for mortgages in unregistered land.",
          "Second mortgages are permitted; they raise priority issues.",
          "A mortgage is security, not an immediate transfer of ownership in practical terms.",
        ],
      },
    },
    {
      topic: "C(iii): general equitable charge",
      q: "Owner signs a document 'charging my unregistered freehold to secure £50,000 owed to X' but does not create a legal mortgage. X does not register anything. Owner sells to Buyer for value. What is the most accurate outcome?",
      choices: [
        "X binds Buyer because equitable charges are invisible and therefore always binding.",
        "X is likely defeated because the charge is registrable and, if unregistered, can be void against a purchaser.",
        "X automatically becomes a co-owner of the land.",
        "Buyer is bound only if X is in actual occupation.",
        "X binds Buyer only if the charge was created before 1926.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A general equitable charge is typically registrable as a land charge in unregistered land. If not registered, it can be void against a purchaser for value (including purchasers of interests).",
        whyWrong: [
          "Equitable charges do not always bind; statutory registration can be decisive.",
          "Security does not create co-ownership by default.",
          "Occupation is not the usual test for a registrable land charge’s enforceability.",
          "The key issue is registration and purchaser status, not simply the date.",
        ],
      },
    },
    {
      topic: "D(ii) restrictive covenant: who must register",
      q: "Neighbour has the benefit of a restrictive covenant over Owner’s unregistered land. Owner agrees to sell to Buyer. Neighbour wants to ensure Buyer will be bound. What is the best step?",
      choices: [
        "Do nothing—restrictive covenants always bind buyers.",
        "Register the covenant as a land charge against the name of the estate owner of the burdened land.",
        "Register the covenant against Neighbour’s own name.",
        "Apply to HM Land Registry to add it to the title register of the land (even though it is unregistered).",
        "Serve a notice on Buyer after completion.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In unregistered land, protection is usually by registering the covenant as a land charge against the estate owner of the burdened estate (name-based registration).",
        whyWrong: [
          "Without registration, the covenant may be void against a purchaser for value.",
          "Registration must be against the estate owner intended to be affected, not the beneficiary.",
          "There is no title register yet (until first registration).",
          "Post-completion notice to Buyer does not substitute for statutory registration where required.",
        ],
      },
    },
    {
      topic: "Registrable vs non-registrable equitable interests",
      q: "Which interest is LEAST likely to be protected by registering a land charge in unregistered land (and therefore usually falls to the doctrine of notice/overreaching instead)?",
      choices: [
        "An option to purchase.",
        "A restrictive covenant (not in a lease).",
        "A beneficial interest under a trust of land (co-owner’s share).",
        "An equitable easement.",
        "A general equitable charge.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Beneficial interests under a trust are generally not protected by the land charges register in the same way; their priority is typically managed through overreaching and/or the doctrine of notice in unregistered land.",
        whyWrong: [
          "Options are typically estate contracts (registrable).",
          "Restrictive covenants (outside leases) are typically registrable.",
          "Equitable easements are typically registrable.",
          "General equitable charges are typically registrable.",
        ],
      },
    },
    {
      topic: "Residual doctrine of notice (where no land charge)",
      q: "Owner holds unregistered land on trust for herself and her brother (beneficial owner). The brother’s interest is not registered as a land charge. Owner sells the legal estate to Buyer for value. Which statement best reflects how Buyer’s liability is assessed (ignoring overreaching for the moment)?",
      choices: [
        "Buyer is bound in all cases because trusts always bind purchasers.",
        "Buyer is bound only if the trust was written on the title deeds.",
        "Buyer may take free if they are a bona fide purchaser of the legal estate for value without notice of the equitable interest.",
        "Buyer is never bound because beneficial interests are not property rights.",
        "Buyer is bound only if the brother has lived there for 1 year.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Where an equitable interest is not protected by the land charges system, the residual doctrine of notice can apply: a bona fide purchaser of a legal estate for value without notice may take free.",
        whyWrong: [
          "Equitable interests do not always bind; notice/overreaching rules can defeat them.",
          "Entry on deeds may affect notice but is not the only route to notice.",
          "Beneficial interests are proprietary in equity.",
          "There is no fixed one-year occupation rule for notice.",
        ],
      },
    },
    {
      topic: "Overreaching in unregistered land",
      q: "Two trustees sell unregistered land to Buyer and Buyer pays the full purchase price to both trustees. A beneficiary in occupation claims Buyer is bound by their beneficial interest. What is the most likely result?",
      choices: [
        "Buyer is bound because occupation always defeats buyers.",
        "Buyer takes free because the beneficial interest is overreached onto the sale proceeds.",
        "Buyer is bound unless they searched the Land Charges register.",
        "Buyer is bound only if the beneficiary is a minor.",
        "Buyer takes free only if the beneficiary signed a consent.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Overreaching can apply in unregistered land too: on a sale by two trustees (or trust corporation) with payment to both, beneficial interests can be detached from the land and attach to the proceeds, allowing Buyer to take free.",
        whyWrong: [
          "Occupation does not necessarily prevent overreaching.",
          "Land charges searches do not typically reveal beneficial interests under a trust.",
          "Minor/adult status is not the core test for overreaching.",
          "Consent can be practically relevant, but overreaching can operate without beneficiary consent.",
        ],
      },
    },
    {
      topic: "Land charges vs local land charges",
      q: "Buyer’s solicitor says: 'We must check both land charges and local land charges.' What is the most accurate distinction?",
      choices: [
        "Land charges are registered against the land; local land charges are registered against names.",
        "Land charges (LCA) are registered against the estate owner’s name; local land charges are registered against the land and relate to public-law matters (e.g., planning).",
        "Both are identical registers run by the council.",
        "Local land charges relate only to covenants; land charges relate only to mortgages.",
        "Local land charges only exist in registered land.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Land charges under the Land Charges Act are generally name-based registrations affecting unregistered land; local land charges are typically land-based and often concern public-law restrictions and obligations.",
        whyWrong: [
          "This reverses the key distinction.",
          "They are not identical and are not always run by the council in the same way.",
          "Both registers cover a wider range of matters than that.",
          "Local land charges can affect land regardless of whether title is registered.",
        ],
      },
    },
    {
      topic: "Effect of registration: not proof of validity",
      q: "Neighbour registers a restrictive covenant as a land charge against Owner’s name. Owner argues: 'Registration proves it’s valid and enforceable.' Which is most accurate?",
      choices: [
        "Registration conclusively proves validity and enforceability.",
        "Registration protects priority against purchasers but does not itself cure invalidity or guarantee enforceability.",
        "Registration automatically turns the covenant into a legal interest.",
        "Registration is irrelevant in unregistered land.",
        "Registration means the covenant is enforceable even against volunteers only.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registration is primarily a priority/protection mechanism. A registered entry does not necessarily prove the underlying right is valid or enforceable; it simply prevents loss of priority due to non-registration.",
        whyWrong: [
          "Validity still depends on creation and substantive law.",
          "Registration does not transform the nature of the underlying interest.",
          "Registration can be crucial in unregistered land for registrable interests.",
          "Volunteer/purchaser distinctions depend on the relevant statutory wording and context, not an automatic rule.",
        ],
      },
    },
    {
      topic: "Unregistered estate contract: who is protected",
      q: "Owner enters into a contract to sell unregistered land to Buyer1 (not registered). Before completion, Owner sells and transfers the legal estate to Buyer2, who pays market price. Buyer1 claims 'I was first in time, so I win.' What is the best response?",
      choices: [
        "Buyer1 always wins because equity is first in time.",
        "Buyer2 may take free if Buyer1’s contract is an unregistered registrable estate contract and Buyer2 qualifies as the protected purchaser.",
        "Buyer1 wins because contracts for sale are legal interests.",
        "Buyer2 is bound only if Buyer1 is in occupation.",
        "Buyer1 wins because Buyer2 is always deemed to have notice.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Although equity has a first-in-time starting point, registrable interests in unregistered land must be registered to bind protected purchasers. An unregistered estate contract can be void against a qualifying purchaser.",
        whyWrong: [
          "First-in-time is not absolute; statutory registration can override it.",
          "A contract for sale is not a legal interest in the land itself; it is equitable (estate contract).",
          "Occupation is not the standard protection mechanism for a registrable land charge.",
          "Notice rules are curtailed where the land charges regime applies.",
        ],
      },
    },
    {
      topic: "Completion moment",
      q: "A registrable land charge is not registered. Owner and Buyer exchange contracts on Monday and complete on Friday. The charge-holder tries to register on Thursday. What is the key date for whether Buyer is protected against the charge?",
      choices: [
        "Exchange only.",
        "Completion of the purchase.",
        "Any date before exchange is irrelevant.",
        "The date Buyer first viewed the property.",
        "The date the charge-holder first learned about the sale.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For many land charges, the statutory protection focuses on whether the land charge is registered before completion; the key event for the purchaser’s protection is commonly completion.",
        whyWrong: [
          "Exchange is important in conveyancing, but statutory voidness often turns on registration before completion.",
          "",
          "Pre-exchange timing can be relevant; the point is whether registration is in place by completion.",
          "Viewing dates are irrelevant to statutory priority.",
          "Charge-holder knowledge is not the priority test.",
        ],
      },
    },
    {
      topic:
        "Actual notice doesn’t necessarily save a registrable but unregistered charge",
      q: "Buyer knows about a restrictive covenant but sees it is not registered as a land charge. Buyer completes anyway and later argues: 'I’m still not bound because it wasn’t registered.' Which is the best statement?",
      choices: [
        "Buyer is bound because actual notice always defeats statutory rules.",
        "Buyer may still take free because the land charges regime can make unregistered registrable charges void even with notice.",
        "Buyer is bound unless they expressly excluded liability in the transfer.",
        "Buyer is bound because they acted in bad faith and bad faith always binds.",
        "Buyer is not bound only if they also lacked constructive notice.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For registrable land charges, the statute can be harsh: failure to register can make the interest void against a protected purchaser, even if the purchaser had notice.",
        whyWrong: [
          "Statute can override notice principles for registrable charges.",
          "Exclusions in a transfer cannot usually reverse statutory priority rules in favour of the charge-holder.",
          "Bad faith may matter in exceptional doctrines, but the key statutory consequence can still apply.",
          "Constructive notice is not the controlling test where the land charges regime governs.",
        ],
      },
    },
    {
      topic: "Class D(i): Inland Revenue / tax-type charges (concept)",
      q: "Owner dies, and a statutory charge for unpaid death duties is said to affect unregistered land. Which statement is most accurate at a high level?",
      choices: [
        "Such charges are never registrable and must be discovered only by doctrine of notice.",
        "Certain statutory/tax-related charges can be registrable within the land charges framework and can bind purchasers if properly protected.",
        "They are always void against purchasers even if registered.",
        "They can only exist in registered land.",
        "They are treated as leases.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Some statutory charges (including certain tax-related charges) can fall within the land charges system and may affect purchasers depending on registration and statutory rules.",
        whyWrong: [
          "They are not necessarily confined to doctrine-of-notice analysis.",
          "Registered charges are not automatically void; registration is meant to protect priority.",
          "Such charges can exist in unregistered contexts too.",
          "They are not leases.",
        ],
      },
    },
    {
      topic: "Equitable lease as an estate contract",
      q: "Owner agrees in a signed written contract to grant Tenant a 7-year lease of unregistered land next month. No deed has been executed yet. Owner then sells the freehold to Buyer for value. Tenant did not register anything. What is the best analysis?",
      choices: [
        "Tenant has a legal lease and binds Buyer automatically.",
        "Tenant has at most an equitable lease/estate contract which is registrable and may be void against Buyer if unregistered.",
        "Tenant has no rights at all because leases can only be created orally.",
        "Tenant binds Buyer because Tenant paid a deposit.",
        "Tenant binds Buyer only if Tenant is a friend of Owner.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Before the deed/lease is granted, the tenant may have an equitable interest arising from contract (often treated within the estate contract category). In unregistered land, failure to register a registrable interest can make it void against a protected purchaser.",
        whyWrong: [
          "A legal lease of that length generally requires a deed/proper grant.",
          "Leases are not created only orally; formalities depend on term and creation method.",
          "Deposit payment does not replace statutory protection mechanisms.",
          "Personal relationships are irrelevant.",
        ],
      },
    },
    {
      topic: "Bona fide purchaser requirements (doctrine of notice)",
      q: "In a doctrine of notice scenario (i.e., the equitable right is not registrable as a land charge), which combination best describes a purchaser who can take free?",
      choices: [
        "A purchaser of any interest, even as a volunteer, with notice.",
        "A bona fide purchaser of the legal estate for value without notice.",
        "Any purchaser of an equitable interest for value without notice.",
        "Any purchaser who registers at the Land Registry (even though unregistered).",
        "Any purchaser who is in occupation.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The classic protected person is a bona fide purchaser of a legal estate for value without notice of the equitable interest (where notice doctrine applies).",
        whyWrong: [
          "Volunteers and purchasers with notice are not protected by this doctrine.",
          "Purchasing only an equitable interest does not generally confer the same protection.",
          "Land Registry registration isn’t available until first registration; the concept is different.",
          "Occupation is not the test for bona fide purchaser status.",
        ],
      },
    },
    {
      topic: "Actual vs constructive vs imputed notice",
      q: "Buyer’s solicitor fails to inspect the title deeds, which clearly refer to a third-party equitable right. Buyer claims they had no actual knowledge. In a doctrine of notice case (non-registrable interest), what is the most accurate statement?",
      choices: [
        "Only actual notice counts; Buyer takes free.",
        "Buyer may be fixed with constructive/imputed notice through their solicitor’s failure to investigate.",
        "Buyer is automatically bound only if the right is registered as a land charge.",
        "Buyer is never bound by anything mentioned in deeds.",
        "Notice is irrelevant in unregistered land.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where doctrine of notice applies, a purchaser can be bound by constructive notice of what would have been discovered by reasonable inspection, and notice can be imputed via the purchaser’s agent/solicitor.",
        whyWrong: [
          "Notice is not limited to actual knowledge.",
          "Registrable interests are handled by registration; but this question is about non-registrable interests where notice matters.",
          "Mentions in deeds can give notice; ignoring them may not help.",
          "Notice is relevant in unregistered land for certain rights.",
        ],
      },
    },
    {
      topic: "What searches cover in unregistered transactions",
      q: "Buyer is purchasing unregistered land. Which set of checks most directly targets private rights and priorities specific to unregistered land (as opposed to purely public-law matters)?",
      choices: [
        "Land charges search against the estate owner’s names and inspection of the title deeds.",
        "Only a local authority search.",
        "Only a coal mining search.",
        "Only a valuation survey.",
        "Only a bankruptcy search against Buyer.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Unregistered transactions typically require careful deed investigation (root of title/chain) and land charges searches (name-based) to identify and prioritise registrable equitable interests.",
        whyWrong: [
          "Local authority searches target public-law matters; they do not replace land charges/deed investigation.",
          "Specialised searches are not substitutes for core private-right priority checks.",
          "A survey is about physical condition/value, not priority of rights.",
          "Bankruptcy searches can be relevant but do not replace core land charges/deed checks.",
        ],
      },
    },
    {
      topic: "Root of title concept",
      q: "In unregistered conveyancing, Buyer’s solicitor asks for a 'good root of title'. What is the best description?",
      choices: [
        "Any document, however informal, showing the seller owns the land.",
        "A reasonably old conveyance/transfer that deals with the whole legal estate and contains nothing that casts doubt on title, forming the start point for investigating the chain.",
        "A screenshot of Google Maps showing the seller lives there.",
        "A land charges registration certificate.",
        "A witness statement that the seller is honest.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A good root of title is a suitable starting conveyance/transfer that shows ownership of the whole legal estate and allows the solicitor to investigate the subsequent chain without obvious defects.",
        whyWrong: [
          "Informal documents rarely suffice for title investigation.",
          "Maps don’t prove title.",
          "Land charges certificates deal with registrable charges, not proof of legal title.",
          "Character evidence is not proof of title.",
        ],
      },
    },
    {
      topic: "First registration trigger (overview)",
      q: "Seller sells an unregistered freehold to Buyer. Which statement best reflects what commonly happens next under the modern system?",
      choices: [
        "Nothing—land remains unregistered forever.",
        "Buyer will usually need to apply for first registration following a registrable disposition (e.g., transfer for value).",
        "Only the seller can apply for registration.",
        "Registration is optional and never recommended.",
        "First registration automatically happens without any application.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A transfer of unregistered land for value commonly triggers compulsory first registration, requiring the buyer to apply to register title after completion.",
        whyWrong: [
          "Many dispositions trigger compulsory first registration.",
          "Buyers commonly apply after acquiring the title.",
          "Registration is often mandatory rather than optional.",
          "An application is typically required; it is not fully automatic.",
        ],
      },
    },
    {
      topic: "Effect of missing a properly registered charge",
      q: "A land charge was properly registered against the estate owner’s correct name. Buyer’s solicitor accidentally searched only a different spelling and found nothing. Buyer completes and later discovers the charge. What is the likely outcome?",
      choices: [
        "Buyer takes free because their search was clean.",
        "Buyer is bound because the charge was properly registered and a correct search would have revealed it.",
        "Buyer takes free because of doctrine of notice.",
        "Buyer is bound only if they had actual notice.",
        "Buyer takes free because the land is unregistered.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If the charge was properly registered, the system expects purchasers to search the correct names. A failure to search correctly generally does not defeat a properly registered charge.",
        whyWrong: [
          "A ‘clean’ result based on the wrong search does not protect against a properly registered charge.",
          "Doctrine of notice is not the substitute where registration governs.",
          "Actual notice is not the key issue where a charge is properly registered.",
          "Unregistered land can still be bound by properly protected rights.",
        ],
      },
    },
    {
      topic: "Class F (historical): home rights style charges (overview)",
      q: "A spouse claims a right to occupy the matrimonial home and says it should bind purchasers of unregistered land. Which is the best high-level point for SQE purposes?",
      choices: [
        "Such occupation rights are never protected in unregistered land.",
        "Certain statutory occupation/home rights have historically been capable of protection via a specific registration mechanism in the land charges framework, affecting purchasers depending on protection.",
        "They are always legal leases.",
        "They automatically override all purchasers without any protection.",
        "They are treated as easements.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Certain statutory home/occupation rights have historically interacted with protection/registration mechanisms in unregistered land, meaning purchasers’ liability can depend on proper protection rather than mere assertion.",
        whyWrong: [
          "Some such rights can be protected; it is not a blanket ‘never’.",
          "They are not automatically legal leases.",
          "Automatic overriding of all purchasers is too broad; protection rules matter.",
          "They are not easements.",
        ],
      },
    },
    {
      topic: "Which interests are typically registrable land charges?",
      q: "Which set contains only interests that are typically registrable as land charges in unregistered land?",
      choices: [
        "Restrictive covenant; equitable easement; estate contract (option).",
        "Legal freehold; legal easement; legal lease under 3 years.",
        "Beneficial interest under a trust; legal mortgage by deed; freehold estate.",
        "Licence to occupy; promise to be kind; goodwill.",
        "Adverse possession claim; planning permission; building regulations approval.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Restrictive covenants (outside leases), equitable easements, and estate contracts (including options/pre-emption) are classic examples of registrable land charges in unregistered land.",
        whyWrong: [
          "Legal estates/interests are not typically protected via land charges registration in this way.",
          "Trust beneficial interests and legal estates are handled differently (notice/overreaching; deeds/title).",
          "Personal permissions/promises are not land charges.",
          "Public-law matters and adverse possession are not protected by land charges registration.",
        ],
      },
    },
    {
      topic: "Voidness: what it means",
      q: "A registrable land charge is 'void against a purchaser' because it was not registered. What does 'void' most accurately mean in this context?",
      choices: [
        "The underlying agreement never existed.",
        "The charge-holder commits a criminal offence.",
        "The interest is unenforceable against the protected purchaser (and successors taking through them), even if it remains valid between the original parties.",
        "The land is automatically transferred to the purchaser.",
        "The interest becomes legal automatically.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Statutory voidness typically means the interest cannot be enforced against the protected purchaser (and can lose proprietary effect), even though it may still exist contractually/equitably between the original parties.",
        whyWrong: [
          "The agreement can still exist between the original parties.",
          "Non-registration is not generally a criminal offence.",
          "Voidness does not transfer land automatically.",
          "Non-registration does not convert an interest into a legal one.",
        ],
      },
    },
    {
      topic: "Purchaser of what? Legal estate vs any interest",
      q: "You are comparing two unregistered land charges: (A) an estate contract (option) and (B) a general equitable charge. At a high level, which statement is most accurate about who is protected if they are unregistered?",
      choices: [
        "Both are void only against purchasers of the legal estate for money or money’s worth.",
        "Both are void against everyone, including volunteers.",
        "Estate contracts are typically void against purchasers of a legal estate for money or money’s worth; some other classes can be void against purchasers of any interest for value.",
        "General equitable charges are never registrable, so doctrine of notice always applies.",
        "Options are legal interests, so registration never matters.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Different classes can have different statutory wording/thresholds (e.g., estate contracts often focus on purchasers of legal estates for money or money’s worth). Other registrable charges can be void against purchasers of interests for value. The key is to identify the class and the protected purchaser definition for that class.",
        whyWrong: [
          "The protected purchaser category can differ by class.",
          "Volunteers are not always protected—often the protection is for value purchasers.",
          "General equitable charges are typically registrable as land charges.",
          "Options are not legal interests in the land; they are typically equitable/estate contracts requiring protection.",
        ],
      },
    },
    {
      topic:
        "Unregistered land: equitable interest created before 1926 (overview)",
      q: "A restrictive covenant was created in 1910 over unregistered land and still affects the land today. Buyer purchases for value in 2026. Which is the best high-level point?",
      choices: [
        "All pre-1926 covenants are automatically void.",
        "Pre-1926 covenants are always registrable as Class D(ii) land charges.",
        "Some older equitable rights may fall outside certain land charge classes and may instead be assessed under the doctrine of notice (and other doctrines).",
        "Buyer is always bound because the covenant is old.",
        "Buyer is never bound because the covenant is old.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "The land charges scheme has date-based definitions for some classes. Older rights can present classification issues and may sometimes fall outside the scheme, meaning residual doctrines (like notice) may become relevant.",
        whyWrong: [
          "Old does not automatically mean void.",
          "Class D(ii) is typically about restrictive covenants entered into on/after a specified date; not everything pre-1926 fits neatly.",
          "",
          "Age alone does not determine enforceability.",
          "Age alone does not defeat enforceability.",
        ],
      },
    },
    {
      topic: "Practical: seller’s duty to disclose vs buyer’s protection",
      q: "Seller tells Buyer about an unregistered restrictive covenant and promises: 'Don’t worry, I’ll pay any loss if it’s a problem.' The covenant was registrable but never registered. Buyer completes. Neighbour later tries to enforce against Buyer. What is most accurate?",
      choices: [
        "Seller’s promise automatically makes the covenant bind Buyer.",
        "Buyer may still take free under the land charges regime, but Buyer might have a separate contractual claim against Seller if losses arise.",
        "Buyer must be bound because Seller disclosed it.",
        "Neighbour can enforce because Seller promised to pay.",
        "Buyer is bound because the covenant is equitable.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Priority/binding is determined by the relevant land charges rules, not by private side-promises. However, contractual allocations of risk between Seller and Buyer can still be enforceable between them.",
        whyWrong: [
          "A promise does not change proprietary priority rules.",
          "Disclosure does not necessarily defeat statutory voidness.",
          "Neighbour’s rights against Buyer depend on property/priority rules, not Seller’s indemnity promise to Buyer.",
          "Equitable status alone does not decide; protection does.",
        ],
      },
    },
    {
      topic: "Unregistered land: equitable interest not registrable + notice",
      q: "Owner orally assures Friend she can live in the cottage for life. Friend moves in and spends money improving it. Owner sells the unregistered freehold to Buyer for value. Friend’s right is not a registrable land charge. Which factor is most likely to determine whether Buyer is bound?",
      choices: [
        "Whether Buyer had notice (actual/constructive/imputed) of Friend’s equity.",
        "Whether Friend paid rent.",
        "Whether the land is coastal.",
        "Whether Buyer is married.",
        "Whether the assurance was witnessed.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "If Friend’s claim is a non-registrable equity (e.g., proprietary estoppel-type equity), priority typically turns on doctrine of notice: a bona fide purchaser of the legal estate for value without notice may take free.",
        whyWrong: [
          "Rent may matter to lease/licence questions but not the notice test.",
          "Location is irrelevant.",
          "Marital status of Buyer is irrelevant.",
          "Witnessing may affect evidence but does not replace the notice framework.",
        ],
      },
    },
    {
      topic: "Unregistered land: advising on risk",
      q: "Which advice best reflects the main risk of relying only on physical inspection (e.g., seeing a path used by neighbours) when buying unregistered land?",
      choices: [
        "Physical inspection replaces all searches and deed checks.",
        "Physical inspection can reveal some issues, but registrable land charges and deed-based rights may still bind (or be avoided) depending on registration and searches; you must do both.",
        "Physical inspection is illegal.",
        "Physical inspection only matters in registered land.",
        "Physical inspection means you are always bound by everything you see.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Some rights depend on documentation/registration/searches rather than obvious physical signs. Conversely, some obvious uses may not bind if registrable but unregistered. Competent advice requires combining inspection with proper searches and deed investigation.",
        whyWrong: [
          "Inspection is not a substitute for the legal priority framework.",
          "Inspection is lawful and standard practice.",
          "Inspection can matter in both systems.",
          "Seeing something does not automatically make it binding if the statutory regime requires registration.",
        ],
      },
    },
    {
      topic: "Unregistered land: equitable interest created by contract",
      q: "Buyer signs a valid contract to purchase unregistered land but has not yet completed. Seller becomes insolvent and a creditor obtains a charging order against the land. Buyer did not register any estate contract. What is the best high-level risk point for Buyer?",
      choices: [
        "Buyer has no interest at all until completion.",
        "Buyer may have an equitable estate contract but could lose priority against protected purchasers/creditors if it is a registrable land charge and not registered.",
        "Buyer automatically becomes the legal owner at exchange.",
        "Buyer’s solicitor can ignore creditors because equity always wins.",
        "Buyer’s contract is void because land must be registered.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A contract for sale can create an equitable interest (estate contract). In unregistered land, failure to register a registrable interest can expose Buyer to priority loss against later parties who qualify for statutory protection.",
        whyWrong: [
          "Equity can recognise an interest before completion (subject to rules).",
          "Legal title typically passes on completion/transfer, not exchange alone.",
          "Equity does not always win; statutory schemes can override.",
          "Unregistered land can still be sold; registration status doesn’t void the contract.",
        ],
      },
    },
    {
      topic: "Who can register and when (practical overview)",
      q: "A charge-holder wants to protect an equitable easement affecting unregistered land. When should they register it to maximise protection?",
      choices: [
        "Only after the burdened land is first registered.",
        "Only after completion of any sale.",
        "As soon as the registrable interest arises, and before completion of any purchase by a protected purchaser.",
        "Only if the burdened owner consents in writing.",
        "Never—equitable easements cannot be registered.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Because non-registration can make registrable rights void against protected purchasers upon completion, early registration is crucial to preserve priority.",
        whyWrong: [
          "Waiting for first registration can be too late in unregistered conveyancing.",
          "Registering after completion may not protect against the completed purchaser.",
          "Consent is not generally required for the charge-holder to protect their interest via registration (subject to procedure).",
          "Equitable easements are typically registrable land charges.",
        ],
      },
    },
    {
      topic: "Unregistered land: limitations of 'first in time'",
      q: "Owner grants X a restrictive covenant benefit in 2020 (not registered). In 2024, Owner sells the burdened unregistered freehold to Buyer for value. X argues: 'My covenant was created first so it must bind.' What is the best response?",
      choices: [
        "Correct—first in time always wins in equity.",
        "Incorrect—if the covenant is registrable and not registered, statutory voidness can defeat first-in-time.",
        "Correct—but only if X is in occupation.",
        "Incorrect—because covenants can never run with land.",
        "Correct—because equity always overrides statute.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The land charges regime can override the equitable first-in-time starting point: registrable interests must be registered to bind protected purchasers.",
        whyWrong: [
          "Equitable maxims do not trump statutory schemes.",
          "Occupation is not the standard test for a registrable restrictive covenant’s binding effect.",
          "Restrictive covenants can run in equity subject to requirements and protection.",
          "Equity cannot override clear statutory provisions.",
        ],
      },
    },
    {
      topic: "Unregistered land: advising a buyer who is a volunteer",
      q: "A parent gifts unregistered land to their child. The child asks whether they are protected by the land charges system against unregistered estate contracts and restrictive covenants. What is the best general advice?",
      choices: [
        "Yes—volunteers are treated the same as purchasers for value.",
        "No—many statutory protections apply to purchasers for value/money or money’s worth; a volunteer may not be protected and may take subject to prior equities.",
        "Yes—because gifts are always safer.",
        "No—because volunteers can never take title.",
        "Yes—because the child is family.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A volunteer often does not meet the 'purchaser for value/money or money’s worth' threshold, so they may not benefit from statutory voidness rules that protect purchasers, and can take subject to prior rights.",
        whyWrong: [
          "Value requirements commonly matter.",
          "Gifts are not inherently safer; they can be riskier on priority.",
          "Volunteers can take title, but priority protection may differ.",
          "Family status does not change priority rules.",
        ],
      },
    },
  ];

  window.quizData = {
    title: "Land Law — Chapter 2: Unregistered Land",
    subtitle:
      "30 SQE-style scenario MCQs (5 options each) in quizDataSchema format",
    questions: questions,
  };
})();
