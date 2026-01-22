(() => {
  const questions = [
    {
      topic: "The register: three parts",
      q: "A trainee checks the Land Register for a freehold title. Where would they usually find (i) the description of the land, (ii) the name of the registered proprietor and class of title, and (iii) the registered mortgage?",
      choices: [
        "(i) Charges Register (ii) Property Register (iii) Proprietorship Register",
        "(i) Property Register (ii) Proprietorship Register (iii) Charges Register",
        "(i) Proprietorship Register (ii) Charges Register (iii) Property Register",
        "(i) Title Plan only (ii) Property Register (iii) Charges Register",
        "(i) Index Map (ii) Charges Register (iii) Proprietorship Register",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In registered land, the Property Register describes the land and any rights benefiting it; the Proprietorship Register identifies the proprietor and class of title (and restrictions); the Charges Register contains burdens such as registered charges and notices of third-party interests.",
        whyWrong: [
          "This mixes up the locations of ownership details and charges.",
          "",
          "This misallocates the register sections.",
          "The title plan helps with extent but proprietorship details are not in the Property Register only; the mortgage is usually in the Charges Register.",
          "The index map is not where ownership/charges are set out on an individual title.",
        ],
      },
    },
    {
      topic: "Mirror principle and its limits",
      q: "Buyer checks the register and sees no mention of any third-party rights. After completion, an adult occupier claims a beneficial interest under a trust. Buyer says: 'The register was silent so I take free.' What is the best response?",
      choices: [
        "Buyer always takes free because the register is conclusive of every right.",
        "Buyer may still be bound if the occupier has an overriding interest (e.g., actual occupation) despite no entry on the register.",
        "Buyer is bound only if the occupier is the registered proprietor.",
        "Buyer is bound only if the interest is a registered charge.",
        "Buyer is never bound by any beneficial interest.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registered land aims for the register to reflect title, but certain interests can bind without being entered—most notably overriding interests such as certain rights of persons in actual occupation.",
        whyWrong: [
          "The register is not exhaustive because overriding interests can exist.",
          "",
          "Beneficial interests can exist without being in the proprietor’s name.",
          "Overriding interests do not need to be registered charges.",
          "Some beneficial interests can bind (e.g., via overriding interests) unless overreached.",
        ],
      },
    },
    {
      topic: "s27 registrable dispositions",
      q: "Owner is the registered freehold proprietor. She signs a deed transferring the freehold to Buyer, but Buyer never applies to be registered. Who is the legal owner of the freehold estate immediately after completion?",
      choices: [
        "Buyer, because the deed alone transfers the legal estate in registered land.",
        "Buyer, but only if Buyer has moved into the property.",
        "Owner remains the legal owner until Buyer is registered; Buyer holds only an equitable interest meanwhile.",
        "No one owns it until the Land Registry updates the register.",
        "The Crown becomes the legal owner until registration.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "For registrable dispositions (including transfer of a registered freehold), the transfer does not operate at law until completed by registration. Until then, the buyer generally has an equitable interest.",
        whyWrong: [
          "In registered land, registration (not just the deed) completes the legal transfer for registrable dispositions.",
          "Occupation is not the condition for legal transfer.",
          "",
          "Legal title does not become ownerless; it remains with the registered proprietor until registration.",
          "There is no rule that title reverts to the Crown pending registration.",
        ],
      },
    },
    {
      topic: "s27: creation of legal mortgage",
      q: "Registered proprietor grants a legal mortgage to Bank by deed. Bank does not register the charge. Borrower later sells to Buyer who registers the transfer. Bank claims its mortgage binds Buyer. What is most accurate?",
      choices: [
        "Bank’s mortgage is legal and binds Buyer even if not registered.",
        "Bank’s mortgage does not operate at law until registered as a charge; it is only equitable until then.",
        "Bank’s mortgage is void because mortgages can never be registered.",
        "Bank’s mortgage automatically becomes an overriding interest.",
        "Bank’s mortgage binds only if Buyer had actual notice.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In registered land, the creation of a legal charge is a registrable disposition that must be completed by registration to take effect at law; otherwise it is typically only equitable.",
        whyWrong: [
          "A legal charge generally requires registration to operate at law in registered land.",
          "",
          "Mortgages are commonly registered as charges.",
          "Registered charges are not overriding interests; they are protected by entry in the Charges Register.",
          "Notice is not the key—registration is.",
        ],
      },
    },
    {
      topic: "s29: priority on registered disposition for value",
      q: "Owner grants an equitable interest to X (not protected on the register). Owner later sells the registered freehold to Buyer for value who registers. X claims priority. Which is the best analysis?",
      choices: [
        "X wins because equitable interests are first in time.",
        "Buyer takes subject to X even if X was not protected.",
        "Buyer takes free of X unless X is protected on the register or is an overriding interest.",
        "Buyer takes free only if Buyer had no notice of X.",
        "X wins if X paid money for the interest.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "On a registered disposition for valuable consideration, the disponee takes subject only to matters on the register and overriding interests; unprotected equitable interests generally lose priority.",
        whyWrong: [
          "First-in-time (s28) is displaced by the s29 rule on registered dispositions for value.",
          "Unprotected interests do not automatically bind a purchaser for value who registers.",
          "",
          "Notice is not decisive under s29; protection/overriding status is.",
          "Payment by X does not, by itself, preserve priority.",
        ],
      },
    },
    {
      topic: "s28: basic priority rule",
      q: "Owner grants an equitable easement to X, then later grants another equitable easement to Y. Neither is protected by notice. No registered disposition for value occurs. Which statement is most accurate?",
      choices: [
        "Y automatically has priority because it was created later.",
        "X generally has priority under the basic rule (subject to specific doctrines).",
        "Neither has priority because both are equitable.",
        "Priority depends only on who is in occupation.",
        "Priority is decided by the Land Registry even without any application.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where s29 does not apply, the basic priority rule generally preserves existing priorities (often meaning first in time prevails).",
        whyWrong: [
          "Later creation does not automatically defeat earlier interests under the basic rule.",
          "",
          "Equitable interests can have priorities between themselves.",
          "Occupation is not the general test for priority between equitable easements.",
          "The Land Registry does not decide priorities in the abstract without a relevant disposition/application.",
        ],
      },
    },
    {
      topic: "Protection by notice: which rights",
      q: "Which interest is most appropriately protected by entering a notice on the Charges Register of a registered title (rather than by a restriction)?",
      choices: [
        "A beneficial interest under a trust of land (co-owner’s share).",
        "An option to purchase the registered freehold.",
        "A requirement that two trustees sign all transfers.",
        "A standard form restriction protecting a minor’s interest.",
        "A limitation on the registered proprietor’s capacity (e.g., bankruptcy restriction).",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A notice is commonly used to protect third-party interests such as estate contracts (including options). Beneficial interests under a trust are typically protected by restrictions rather than notices.",
        whyWrong: [
          "Beneficial interests under a trust are usually protected by a restriction to control dispositions/overreaching, not by notice.",
          "",
          "A requirement about two trustees is a restriction-style issue.",
          "That describes a restriction, not a notice.",
          "Bankruptcy/capacity-type limitations are commonly dealt with by restrictions/entries affecting disposition, not a simple notice of an interest.",
        ],
      },
    },
    {
      topic: "Restrictions: purpose",
      q: "A beneficiary wants to ensure their equitable interest under a trust is not lost on a sale without proper overreaching. What is the best register-based protection?",
      choices: [
        "Enter a notice of the beneficial interest.",
        "Enter a restriction requiring dispositions to comply with overreaching requirements (e.g., two trustees).",
        "Register the beneficiary as joint proprietor of the legal estate automatically.",
        "Rely on actual occupation only.",
        "Apply to remove the proprietor from the register.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Restrictions regulate the ability of the registered proprietor to make dispositions (e.g., requiring two trustees), helping to protect beneficial interests and ensure overreaching occurs properly.",
        whyWrong: [
          "Notices are generally not used to protect beneficial interests under a trust of land.",
          "Beneficiaries do not automatically become legal proprietors.",
          "Actual occupation may help in some cases, but restriction is the standard protection mechanism for trust interests.",
          "Removing the proprietor is not the correct protective step.",
        ],
      },
    },
    {
      topic: "Overriding interests: short leases",
      q: "Tenant has a 5-year legal lease of a flat. The lease is not registered on the landlord’s title. Landlord sells the registered freehold to Buyer who registers. Tenant claims the lease binds Buyer. What is most accurate?",
      choices: [
        "Tenant is not protected because all leases must be registered to bind.",
        "Tenant’s lease can bind as an overriding interest because it is a short legal lease.",
        "Tenant is protected only if Tenant entered a notice.",
        "Tenant is protected only if Tenant paid a premium.",
        "Tenant is protected only if Buyer had actual notice.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Certain short legal leases (generally under a specified term threshold) can override without being entered on the register, binding a purchaser.",
        whyWrong: [
          "Not all leases must be substantively registered to bind; short leases can override.",
          "",
          "A notice may protect longer or non-overriding interests, but short leases can bind without notice.",
          "Premium payment is not the test.",
          "Notice is not decisive if the lease overrides.",
        ],
      },
    },
    {
      topic: "Leases: when must be registered",
      q: "Landlord grants Tenant a 10-year lease of registered land by deed. Tenant takes possession but does not register the lease. What is the status of Tenant’s leasehold estate?",
      choices: [
        "It is a legal lease because it was granted by deed.",
        "It is only equitable until it is registered because the grant is a registrable disposition.",
        "It is void and Tenant becomes a trespasser immediately.",
        "It is a licence only because it was not registered.",
        "It becomes an overriding interest automatically regardless of term.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A lease of a registrable term is a registrable disposition: it does not operate at law until registered. Until registration, the tenant typically has an equitable lease.",
        whyWrong: [
          "Deed is necessary but not sufficient for the legal estate where registration is required.",
          "",
          "The arrangement is not automatically void; equity may recognise rights, and the tenant may have remedies.",
          "Failure to register does not automatically turn a lease into a licence.",
          "Overriding status is not automatic for longer registrable leases.",
        ],
      },
    },
    {
      topic: "Overriding interests: actual occupation (baseline)",
      q: "Buyer purchases a registered freehold from the sole registered proprietor. An adult partner lives at the property and claims a beneficial interest under a trust. No restriction is on the register. Which factor is most likely to make the partner’s interest override?",
      choices: [
        "Whether the partner is in actual occupation at the time of completion.",
        "Whether the partner contributed more than 50% of the purchase price.",
        "Whether the partner is married to the proprietor.",
        "Whether the partner’s name appears on utility bills.",
        "Whether the partner paid rent to the proprietor.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "A beneficial interest can override if the holder is in actual occupation at the time of the disposition, subject to exceptions (e.g., enquiry and non-disclosure).",
        whyWrong: [
          "",
          "Contribution may help establish the interest but overriding status commonly turns on actual occupation (and exceptions).",
          "Marriage is not the test for overriding status.",
          "Bills can be evidence but are not the legal test.",
          "Paying rent is not the overriding test.",
        ],
      },
    },
    {
      topic: "Actual occupation: timing",
      q: "Seller exchanges contracts with Buyer on 1 March. Completion occurs on 31 March. A beneficiary is in occupation on exchange but moves out permanently on 20 March. Buyer completes on 31 March and registers. Is the beneficiary’s interest likely to override?",
      choices: [
        "Yes, because occupation at exchange is decisive.",
        "Yes, because any past occupation is sufficient.",
        "No, because the key time is typically completion; no actual occupation then means no overriding interest.",
        "Yes, because the beneficiary had an equitable interest first in time.",
        "No, because beneficial interests can never override.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "For overriding interests based on actual occupation, the relevant time is generally the time of the disposition (commonly completion). If the person is not in actual occupation then, overriding status may fail.",
        whyWrong: [
          "Exchange is not usually the decisive time for actual occupation overriding status.",
          "Past occupation alone is not enough if occupation has ended by the key time.",
          "",
          "Priority rules are modified by the registered land scheme; first-in-time is not decisive against a purchaser for value who registers unless the interest overrides/is protected.",
          "Beneficial interests can override in certain circumstances.",
        ],
      },
    },
    {
      topic: "Actual occupation: temporary absence",
      q: "An occupier with a beneficial interest goes into hospital for two weeks on the day of completion. Their possessions remain in the home and they intend to return. Buyer completes and registers. Does the occupier necessarily lose overriding status?",
      choices: [
        "Yes, absence always defeats actual occupation.",
        "No, a temporary absence with continuing intention to occupy can still amount to actual occupation.",
        "Yes, unless the occupier served a written notice on Buyer.",
        "No, but only if the occupier is the registered proprietor.",
        "Yes, because hospital stays are treated as abandonment.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Actual occupation can include cases of temporary absence where there remains a continuing presence (e.g., belongings) and intention to return, depending on the facts.",
        whyWrong: [
          "Absence is not automatically fatal; the question is fact-sensitive.",
          "",
          "No general requirement to serve written notice to preserve overriding status.",
          "The occupier need not be the registered proprietor to have an overriding interest.",
          "Hospital absence is not automatically treated as abandonment.",
        ],
      },
    },
    {
      topic: "Actual occupation: enquiry exception",
      q: "Buyer’s solicitor asks the occupier directly: 'Do you have any rights in the property?' The occupier lies and says 'No' despite having a beneficial interest. Buyer completes and registers. What is the best analysis of overriding status?",
      choices: [
        "The interest always overrides regardless of what was said.",
        "The interest may fail to override if the occupier, when reasonably asked, did not disclose it (subject to exceptions).",
        "The interest overrides only if it was entered as a notice.",
        "The interest overrides only if the occupier is a spouse.",
        "The interest can never override because it is equitable.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Even where there is actual occupation, overriding status can be lost if the purchaser makes a reasonable enquiry and the interest holder fails to disclose, subject to specific statutory exceptions.",
        whyWrong: [
          "Overriding interests based on occupation have statutory limits and exceptions.",
          "",
          "A notice is not required for an overriding interest, though it can protect in other ways.",
          "Spousal status is not the legal test.",
          "Equitable interests can override if the statutory conditions are met.",
        ],
      },
    },
    {
      topic: "Overriding interests: legal easements",
      q: "Neighbour claims a legal easement acquired by prescription over registered land. It is not noted on the register. Buyer purchases the servient land for value and registers. When is Buyer most likely to be bound as an overriding interest?",
      choices: [
        "Never; legal easements must always be on the register.",
        "Only if the easement is obvious on a reasonably careful inspection, or Buyer has actual knowledge, or it has been exercised in the relevant period.",
        "Only if Neighbour is in actual occupation.",
        "Only if Neighbour paid money for the easement.",
        "Only if the easement is mentioned in the transfer deed.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Certain legal easements can override if they meet statutory conditions such as being obvious on inspection, within the purchaser’s actual knowledge, or recently exercised (depending on the category).",
        whyWrong: [
          "Some easements can override without being entered, subject to conditions.",
          "",
          "Actual occupation is the test for a different overriding category, not for easements.",
          "Payment is irrelevant to whether a legal easement overrides.",
          "Mention in the transfer is not the statutory test.",
        ],
      },
    },
    {
      topic: "Priority: protected interest by notice",
      q: "X has an option to purchase registered land and enters a notice on the Charges Register. Owner later sells to Buyer for value who registers. Buyer argues the option does not bind. What is correct?",
      choices: [
        "Buyer takes free because s29 wipes out all pre-existing rights.",
        "Buyer takes subject because the option was protected by notice on the register.",
        "Buyer takes free unless X is in actual occupation.",
        "Buyer takes free unless Owner mentioned the option in the transfer deed.",
        "Buyer takes subject only if Buyer had actual notice.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A notice is the standard method to protect interests like an option; a purchaser for value takes subject to matters entered on the register.",
        whyWrong: [
          "s29 preserves registered entries and overriding interests; it does not wipe out everything.",
          "",
          "Occupation is not required if the interest is properly protected on the register.",
          "Mention in the transfer is not needed if the notice is on the register.",
          "Actual notice is not required where the register gives constructive notice.",
        ],
      },
    },
    {
      topic: "Effect of registering a notice",
      q: "X applies for a unilateral notice to protect an interest. Owner disputes the interest and says: 'The notice proves X is right.' Which is most accurate?",
      choices: [
        "A notice conclusively proves the underlying interest is valid.",
        "A notice protects priority but does not itself prove validity of the underlying interest.",
        "A notice turns any equitable interest into a legal interest.",
        "A notice prevents any future dispositions of the land.",
        "A notice is the same as being registered proprietor.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Notices are primarily a priority mechanism; they do not adjudicate or guarantee the underlying interest’s existence or validity.",
        whyWrong: [
          "Validity depends on substantive law and creation; notice is not conclusive proof.",
          "",
          "Registration of a notice does not convert the nature of the interest.",
          "A notice does not freeze the title; restrictions are used to control dispositions.",
          "A notice does not confer legal ownership.",
        ],
      },
    },
    {
      topic: "Restrictions vs notices: choosing the right tool",
      q: "A registered proprietor holds the land on trust for herself and her adult child. The child wants protection. Which combination is best?",
      choices: [
        "Unilateral notice only, because beneficial interests are always protected by notices.",
        "Restriction (to control dispositions/ensure overreaching) rather than notice.",
        "No entry is possible for trust interests.",
        "Only an agreed notice can be entered for a trust interest.",
        "A charge should be registered in the Charges Register.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Beneficial interests under a trust are typically protected by restrictions (e.g., requiring two trustees for a sale), rather than notices.",
        whyWrong: [
          "Notices are generally inappropriate for trust beneficial interests.",
          "",
          "Trust interests can be protected via restrictions.",
          "There is no rule that only agreed notices protect trust beneficial interests.",
          "A charge is a security interest, not the correct tool for a beneficiary’s protection.",
        ],
      },
    },
    {
      topic: "Priority search (OS1): effect",
      q: "Buyer’s solicitor carries out an OS1 priority search against the registered title and then completes within the priority period. Why is this valuable?",
      choices: [
        "It guarantees the property is free from all third-party rights forever.",
        "It protects Buyer’s priority so later adverse entries during the priority period generally do not defeat Buyer’s application to register the disposition.",
        "It replaces the need for a transfer deed.",
        "It automatically registers Buyer as proprietor.",
        "It prevents the seller from selling to anyone else by criminal sanction.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An OS1 search creates a priority period during which the buyer’s application to register is protected against later entries that would otherwise affect priority.",
        whyWrong: [
          "It does not eliminate all rights; overriding interests and existing register entries still matter.",
          "A deed is still needed to transfer/charge.",
          "Registration still requires an application and processing.",
          "It does not criminalise later dealings; it manages priority.",
        ],
      },
    },
    {
      topic: "Priority search (OS2): dealing with part/charge",
      q: "Bank is taking a new charge over a registered title already subject to a pending transfer application. The bank wants priority protection for its own charge application. Which search is most appropriate?",
      choices: [
        "OS2, because it relates to applications where there is a pending dealing or where the search is against a pending application/particular dealing.",
        "OS1, because it is always used for charges.",
        "No search is available for charges.",
        "Index map search, because the title is registered.",
        "Local land charges search only.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "OS2 is used in certain situations to protect priority for applications relating to pending dealings or where OS1 is not suitable; banks commonly use priority searches to protect charge registration priority.",
        whyWrong: [
          "OS1 is commonly used for whole-title purchases, but the best search depends on the dealing context.",
          "Priority searches are available and important for charges.",
          "Index map searches are primarily for identifying whether land is registered and the title number.",
          "Local land charges searches are about public-law matters, not registration priority.",
        ],
      },
    },
    {
      topic: "Rectification vs alteration (mistake)",
      q: "The register mistakenly shows Buyer as proprietor due to fraud by a third party. The true owner seeks to be reinstated, which will prejudice Buyer. What is the key label often used when correcting a mistake that prejudicially affects a registered proprietor?",
      choices: [
        "Overreaching",
        "Rectification",
        "Severance",
        "Prescription",
        "Escheat",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Rectification is commonly used to describe an alteration to correct a mistake that prejudicially affects a registered proprietor (often subject to restrictions and indemnity).",
        whyWrong: [
          "Overreaching concerns shifting beneficial interests to sale proceeds.",
          "",
          "Severance concerns beneficial joint tenancy.",
          "Prescription concerns acquiring easements by long use.",
          "Escheat is unrelated to correcting the register.",
        ],
      },
    },
    {
      topic: "Indemnity principle (registered land)",
      q: "A lender suffers loss because it relied on the register, but the register was wrong due to a Land Registry mistake. What is the primary remedy built into the registered land system?",
      choices: [
        "Damages from the seller only, never the state.",
        "State-backed indemnity/compensation for certain losses caused by register mistakes.",
        "Automatic ownership of additional land to make up the loss.",
        "Criminal prosecution of the Land Registrar.",
        "A right to rescind every transaction involving the title.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registered land includes an indemnity scheme to compensate for certain losses arising from mistakes in the register, reflecting the insurance principle.",
        whyWrong: [
          "Remedies can include indemnity; it is not confined to claims against the seller.",
          "",
          "The remedy is compensation, not automatic transfer of other land.",
          "The system is civil/administrative; criminal prosecution is not the standard remedy.",
          "Transactions are not automatically rescinded across the board.",
        ],
      },
    },
    {
      topic: "Boundaries: general boundaries rule",
      q: "A title plan shows a red edging that appears to include a strip of land, but a neighbour disputes it and points to a fence line. Buyer says: 'The title plan fixes the exact boundary.' What is the best statement?",
      choices: [
        "Title plans always show exact boundaries to the centimetre.",
        "Title plans usually show general boundaries; exact boundary determination may require additional evidence or a determined boundary application.",
        "Boundaries are decided by local councils, not the Land Registry.",
        "If the plan is unclear, the registered proprietor automatically wins.",
        "The register is irrelevant to boundaries.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The Land Registry typically shows general boundaries; the exact legal boundary can require interpretation using conveyances, physical features, and potentially a determined boundary process.",
        whyWrong: [
          "Plans are not normally precise to that level for boundary purposes.",
          "",
          "Local councils do not decide private boundaries as part of the register system.",
          "Registration does not guarantee success in every boundary dispute.",
          "The register is relevant but not determinative of the exact line in many cases.",
        ],
      },
    },
    {
      topic: "Cautions against first registration vs registered land",
      q: "A client asks whether they can lodge a 'caution against first registration' to protect an option over already registered land. What is the best response?",
      choices: [
        "Yes, that is the standard protection for registered titles.",
        "No, a caution against first registration is for unregistered land; for registered land, protect by notice/restriction as appropriate.",
        "Yes, but only if the option holder is in actual occupation.",
        "No, because options cannot be protected at all.",
        "Yes, but only for freehold, not leasehold.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Cautions against first registration relate to unregistered land. In registered land, the appropriate mechanisms are notices and restrictions depending on the nature of the interest.",
        whyWrong: [
          "It is not the correct mechanism for registered titles.",
          "",
          "Occupation is not the criterion for using a first registration caution.",
          "Options are commonly protectable by notice.",
          "The issue is registered vs unregistered, not freehold vs leasehold.",
        ],
      },
    },
    {
      topic: "Effect of registration: legal title and 'title by registration'",
      q: "Buyer is registered as proprietor after a transfer. Later, it emerges that the seller’s title was defective due to a prior forged deed in the chain. What is the best general statement about Buyer’s title?",
      choices: [
        "Buyer’s title is always void because the seller’s title was defective.",
        "Registration can confer title, subject to the register’s correction and indemnity framework; Buyer’s position depends on the rules on mistakes/rectification.",
        "Buyer automatically loses the land with no compensation.",
        "Buyer keeps the land but only if they can prove the seller was honest.",
        "Buyer keeps the land only if the property is leasehold.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registered land operates on title by registration. Even if earlier defects exist, the register is authoritative subject to correction rules, and an indemnity scheme may compensate where rectification occurs.",
        whyWrong: [
          "Defects do not automatically make the registered proprietor’s title void in all cases; the register system is more nuanced.",
          "",
          "The system provides potential compensation via indemnity in appropriate cases.",
          "Seller honesty is not the sole determinant of the registered proprietor’s position.",
          "The principle applies to registered freehold and leasehold titles.",
        ],
      },
    },
    {
      topic: "Unprotected equitable interest + gift (s29 not triggered)",
      q: "Owner grants X an equitable interest (not protected). Owner later gifts the registered freehold to Daughter, who registers as proprietor. X claims the interest binds Daughter. Which is most accurate?",
      choices: [
        "Daughter takes free because registration always wipes out prior interests.",
        "Daughter is treated as taking for valuable consideration, so s29 applies.",
        "Because the transfer is a gift, the valuable consideration rule may not apply; priorities may be governed by the basic rule, so X may still bind.",
        "X can never bind any registered proprietor.",
        "X binds only if X enters the land charges register.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "The s29 priority rule is tied to registered dispositions for valuable consideration. If the disposition is not for value (e.g., gift), s29 may not apply and the basic priority rule can preserve earlier interests.",
        whyWrong: [
          "Registration does not automatically eliminate all prior interests in non-value dispositions.",
          "A gift is not valuable consideration.",
          "",
          "Equitable interests can bind depending on the priority rules and protection.",
          "Land charges registration is for unregistered land, not registered titles.",
        ],
      },
    },
    {
      topic: "Overriding interest vs overreaching",
      q: "A beneficiary is in actual occupation and has a beneficial interest. Two trustees sell the registered land to Buyer for value and Buyer pays both trustees. The beneficiary claims overriding interest. What is the most likely result?",
      choices: [
        "The beneficiary always overrides because of actual occupation.",
        "Buyer takes free because the beneficial interest is overreached onto the sale proceeds.",
        "Buyer is bound unless the beneficiary signed a waiver.",
        "Buyer is bound because beneficial interests can never be overreached.",
        "The beneficiary’s interest becomes a legal charge automatically.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Overreaching can detach beneficial interests from the land on a qualifying disposition by two trustees/trust corporation with payment to them, so the buyer takes free even if the beneficiary was in occupation.",
        whyWrong: [
          "Occupation does not necessarily prevent overreaching.",
          "",
          "A waiver is not the legal prerequisite where overreaching applies.",
          "Beneficial interests can be overreached in qualifying circumstances.",
          "A beneficial interest does not become a legal charge automatically.",
        ],
      },
    },
    {
      topic: "Actual occupation: what counts as occupation",
      q: "At completion, a claimant with an equitable interest is not physically present, but has moved furniture in, has keys, and stays there regularly. Which is the best approach to 'actual occupation'?",
      choices: [
        "Only continuous physical presence counts.",
        "It is a fact-sensitive concept that can include physical presence or other indicators of occupation depending on the circumstances.",
        "It always requires sleeping there every night.",
        "It requires being named on the council tax account.",
        "It exists only if the claimant is the registered proprietor.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Actual occupation is assessed on the facts and can include a degree of physical presence and other objective indicators; it is not confined to constant presence.",
        whyWrong: [
          "Continuous presence is not required in every case.",
          "",
          "There is no rigid 'every night' rule.",
          "Council tax details may be evidence but are not decisive.",
          "A non-proprietor can be in actual occupation.",
        ],
      },
    },
    {
      topic: "Priority where interest is protected by restriction",
      q: "A restriction requires that no disposition by a sole proprietor is to be registered unless certain conditions are met (e.g., compliance with a trust). Owner nevertheless purports to sell as sole proprietor; Buyer applies to register. What is the main effect of the restriction?",
      choices: [
        "It automatically invalidates the transfer deed.",
        "It prevents registration of the disposition unless the restriction’s requirements are satisfied.",
        "It converts the buyer into a trustee automatically.",
        "It makes all third-party interests overriding.",
        "It guarantees the buyer takes free of all interests.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Restrictions control registration of dispositions. They can block registration unless the stated conditions are met, protecting beneficiaries/others.",
        whyWrong: [
          "A restriction primarily affects registration, not necessarily the deed’s underlying validity as between parties.",
          "",
          "It does not automatically make the buyer a trustee.",
          "It does not convert other interests into overriding interests.",
          "It does not give the buyer broader protection; it limits registration.",
        ],
      },
    },
    {
      topic: "Priority: equitable interest protected by notice vs overriding",
      q: "X has an equitable easement protected by a notice on the register. Buyer takes a transfer for value and registers. Buyer argues: 'It’s only equitable so it can’t bind.' What is correct?",
      choices: [
        "Buyer is right; only legal rights bind in registered land.",
        "X binds because the notice means the buyer takes subject to it (and equity can bind when protected).",
        "X binds only if X is in actual occupation.",
        "X binds only if it was acquired by prescription.",
        "X never binds because easements must be legal.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Equitable interests can bind purchasers in registered land if properly protected (e.g., by notice) or if they qualify as overriding interests.",
        whyWrong: [
          "Registered land recognises binding equitable interests when protected/overriding.",
          "",
          "Occupation is not required if the interest is protected by notice.",
          "Prescription is not the deciding factor here; protection on the register is.",
          "Equitable easements can exist and bind if properly protected.",
        ],
      },
    },
    {
      topic: "Register entries: agreed vs unilateral notice (overview)",
      q: "X applies to protect an option with a unilateral notice. Owner objects. Which statement is most accurate?",
      choices: [
        "A unilateral notice cannot be challenged once entered.",
        "Owner can challenge; the Registry may require evidence/resolve procedurally, but the notice’s presence is about protection not final validity.",
        "The option becomes invalid automatically when Owner objects.",
        "An agreed notice is impossible for options.",
        "The Registry will always remove the notice immediately upon objection.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A unilateral notice can be objected to and may be removed through the proper process if not justified. Its function is to protect priority, not to conclusively establish validity.",
        whyWrong: [
          "Unilateral notices can be challenged via the statutory process.",
          "",
          "Objection does not automatically extinguish the underlying right.",
          "Agreed notices can be used where the registered proprietor consents.",
          "Removal is not automatic; process and evidence matter.",
        ],
      },
    },
    {
      topic: "When an interest should be entered",
      q: "A buyer’s solicitor discovers a restrictive covenant burdening the land already entered as a notice. The buyer wants to 'remove it on completion.' What is the best advice?",
      choices: [
        "All notices automatically disappear on transfer.",
        "A notice remains unless formally cancelled/removed; transfer alone does not remove it.",
        "The buyer can delete it by writing to the seller.",
        "The buyer can ignore it because it is equitable.",
        "The Land Registry will remove it automatically if it is inconvenient.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Register entries do not vanish automatically on transfer. If the covenant still affects the land, the notice remains unless properly cancelled or the underlying interest is released/ceases.",
        whyWrong: [
          "Notices are not automatically cleared by a disposition.",
          "",
          "Private correspondence does not alter the register.",
          "Equitable burdens can still bind if protected.",
          "Convenience is not a ground for automatic removal.",
        ],
      },
    },
    {
      topic: "Adverse possession (registered land): initial application",
      q: "A squatter has been in adverse possession of registered land for 10 years and applies to be registered as proprietor. What is the usual procedural consequence?",
      choices: [
        "Automatic registration as proprietor with no further steps.",
        "The registered proprietor (and certain others) are notified and can usually object, potentially defeating the application unless special conditions apply.",
        "Immediate criminal prosecution of the squatter ends the claim.",
        "The squatter must show 20 years’ possession in registered land.",
        "The squatter can only claim if the land is unoccupied.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registered land adverse possession generally involves an application after a qualifying period, notice to the registered proprietor, and an opportunity to object—often defeating the application unless statutory exceptions/special conditions apply.",
        whyWrong: [
          "Registration is not automatic; the process includes notification and potential objection.",
          "",
          "Adverse possession is generally civil; criminal liability is not the mechanism determining title.",
          "The standard period is not generally 20 years in registered land for the application route.",
          "Occupation by others is not a strict bar; the test is possession and intention.",
        ],
      },
    },
    {
      topic: "Adverse possession (registered land): after objection",
      q: "A registered proprietor objects to a squatter’s adverse possession application. The squatter remains in possession and the proprietor does nothing to remove them for a further period. What is the general risk for the proprietor?",
      choices: [
        "No risk; once an objection is filed, the squatter can never succeed.",
        "The squatter may be able to reapply later and succeed if the proprietor does not take steps to evict within the specified period.",
        "The squatter automatically becomes a tenant.",
        "The land becomes unregistered.",
        "The squatter must restart the entire 10-year period from zero.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If the proprietor objects, the squatter’s first application is usually rejected, but if the squatter remains and the proprietor fails to act to recover possession within the statutory window, the squatter may later succeed on a further application.",
        whyWrong: [
          "Objection is powerful but not necessarily the end if the proprietor then fails to act.",
          "",
          "Adverse possession does not automatically create a tenancy.",
          "The title does not become unregistered due to adverse possession proceedings.",
          "The squatter does not necessarily have to restart from zero; the statutory scheme governs the follow-up application.",
        ],
      },
    },
    {
      topic: "Registered land: disposition not for value",
      q: "Owner transfers registered land to their sibling as a gift, and sibling registers. A prior equitable interest exists but is not protected by notice and is not overriding. Is the sibling automatically protected in the same way as a buyer for value?",
      choices: [
        "Yes, because registration always triggers the s29 rule.",
        "Yes, because gifts are treated as valuable consideration.",
        "No, because the enhanced protection generally applies to registered dispositions for valuable consideration; a gift may not trigger the same priority rule.",
        "No, because gifts are void in land law.",
        "Yes, but only if the gift is witnessed.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "The key priority advantage under the registered land scheme is linked to registered dispositions for valuable consideration. A donee may not receive the same s29 protection.",
        whyWrong: [
          "Registration alone is not always enough; the valuable consideration element can matter.",
          "A gift is not valuable consideration.",
          "",
          "Gifts of land are valid (subject to formalities).",
          "Witnessing relates to deed formalities, not the value-based priority rule.",
        ],
      },
    },
    {
      topic: "Registered land: dealing with 'interests that cannot be noted'",
      q: "A client asks: 'Can every right be entered as a notice on the register?' Which is most accurate?",
      choices: [
        "Yes, any claim can always be entered as a notice.",
        "No, some interests (e.g., certain beneficial interests under trusts) are typically protected by restriction rather than notice, and some matters are excluded from notice entry.",
        "No, notices are only for legal interests.",
        "Yes, but only if the proprietor agrees.",
        "Yes, but only if the claimant is in actual occupation.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Notices are not universal. Some interests are excluded from notice entry and others (notably trust beneficial interests) are generally protected via restrictions rather than notices.",
        whyWrong: [
          "The system limits what can be protected by notice.",
          "",
          "Notices can protect equitable interests too (e.g., options), not only legal interests.",
          "Proprietor consent can help for agreed notices but does not change the basic categories/exclusions.",
          "Occupation is relevant to overriding interests, not to whether an interest can be noted.",
        ],
      },
    },
    {
      topic: "Registered land: priority between two registered charges",
      q: "A property has a first registered charge to Bank1. Owner then grants a second legal charge to Bank2, which is also registered. Owner defaults. Which is the best statement about priority?",
      choices: [
        "Bank2 has priority because it is later and reflects current value.",
        "Bank1 generally has priority as the earlier registered charge, unless it agrees to postpone.",
        "Priority is shared equally between charges.",
        "Bank2 has priority only if it had no notice of Bank1.",
        "Priority depends on which bank lends more.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "As a general rule, earlier registered charges rank in priority ahead of later ones, unless there is postponement or some other agreed rearrangement.",
        whyWrong: [
          "Later charges do not outrank earlier ones merely by timing or value.",
          "",
          "Charges do not usually share equally by default.",
          "Notice is not the key determinant where both are registered and priority is governed by registration/entry order.",
          "Loan size does not set priority.",
        ],
      },
    },
    {
      topic: "Registered land: effect of a restriction on buyer’s lender",
      q: "A restriction on the register requires two trustees for a disposition by the registered proprietor. Buyer is purchasing from a sole registered proprietor and wants a mortgage. Why will the lender care about compliance with the restriction?",
      choices: [
        "Because the restriction affects whether the lender’s charge can be registered and have legal effect.",
        "Because restrictions determine council tax liability.",
        "Because restrictions only apply to leases, not freeholds.",
        "Because restrictions automatically invalidate the mortgage deed.",
        "Because restrictions mean the lender must inspect 30 years of title deeds.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "If the restriction is not complied with, the disposition/charge may not be registerable as intended, risking the lender not getting a legal charge and creating priority/ enforceability problems.",
        whyWrong: [
          "Council tax is irrelevant to register restrictions.",
          "Restrictions can apply to freehold titles too.",
          "Restrictions typically control registration, not automatically invalidate deeds in all cases.",
          "Registered land does not require 30 years of root-of-title deeds in the same way as unregistered land.",
        ],
      },
    },
    {
      topic: "Overriding interests: actual occupation and discoverability",
      q: "Buyer inspects a house and sees no one present and no personal belongings. The seller says they live alone. In fact, the seller’s partner (beneficial owner) has moved out temporarily but intends to return, leaving belongings in a locked room. Buyer completes. Which is the most accurate approach?",
      choices: [
        "The partner can never override because they were not physically present at inspection.",
        "The partner may still be in actual occupation depending on the facts; overriding status is not determined solely by a snapshot inspection.",
        "The partner overrides only if they are named on the title.",
        "The partner overrides only if the buyer had actual knowledge.",
        "The partner never overrides because beneficial interests cannot override.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Actual occupation is fact-sensitive and can include cases where occupation is not obvious at the moment of inspection; presence of belongings and continuing intention can be relevant.",
        whyWrong: [
          "Physical presence at one moment is not always decisive.",
          "",
          "Being named on title is not required for an overriding beneficial interest.",
          "Actual knowledge is one factor, but actual occupation can override even without it (subject to statutory exceptions).",
          "Beneficial interests can override in certain circumstances.",
        ],
      },
    },
    {
      topic: "Registered land: dealing with overriding risk",
      q: "Which step best reduces the risk of being bound by an overriding interest based on actual occupation when buying a registered freehold?",
      choices: [
        "Rely only on the register; do not ask anyone questions.",
        "Inspect the property and make reasonable enquiries of occupiers about any rights they claim.",
        "Search the Land Charges register.",
        "Ask the seller to delete all third-party rights from the register.",
        "Avoid using a solicitor.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Overriding interests can arise from actual occupation even if not on the register. Physical inspection and reasonable enquiries are key practical steps to identify or trigger non-disclosure exceptions.",
        whyWrong: [
          "Relying only on the register ignores overriding interests risk.",
          "",
          "Land Charges searches are for unregistered land, not registered titles.",
          "You cannot simply delete rights; removal requires proper grounds and process.",
          "Avoiding a solicitor increases risk and does not reduce overriding interests.",
        ],
      },
    },
    {
      topic:
        "Registered land: lender protection against unprotected equitable interests",
      q: "Bank is lending to a registered proprietor. A third party claims an unprotected equitable interest but is not in actual occupation. Bank registers its charge. In a priority dispute, which is most likely?",
      choices: [
        "The third party automatically defeats the bank because equity is first in time.",
        "The bank is likely to take priority if the third party interest is not protected by notice/restriction and is not overriding.",
        "The third party defeats the bank if they can show a moral entitlement.",
        "The bank is bound only if it had actual notice.",
        "The bank can never take priority over equitable interests.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For registered dispositions for value (including registered charges), the disponee generally takes subject only to protected entries and overriding interests. An unprotected non-overriding equitable interest typically loses priority.",
        whyWrong: [
          "First-in-time is displaced by the registered land priority rules for dispositions for value.",
          "",
          "Moral entitlement is not a priority rule.",
          "Actual notice is not the key determinant under the statutory scheme.",
          "Banks can and do take priority where the statutory conditions are met.",
        ],
      },
    },
    {
      topic:
        "Registered land: effect of failing to register a registrable disposition",
      q: "A buyer completes a transfer of registered land but forgets to apply for registration within the OS1 priority period. In the meantime, the seller grants a registered charge to Bank, which is registered first. What is the key risk?",
      choices: [
        "No risk; the buyer became legal owner at completion regardless of registration.",
        "The bank’s registered charge may take priority over the buyer because the buyer did not complete the disposition by registration in time.",
        "The transaction becomes void automatically and money must be repaid.",
        "The seller’s later charge is always void because it is dishonest.",
        "The buyer can rely on the Land Charges Act to defeat the bank.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If the buyer does not register (and loses priority protection), later registered dispositions can gain priority, potentially leaving the buyer only with equitable rights subject to the bank’s registered charge.",
        whyWrong: [
          "For registrable dispositions, legal title does not pass until registration.",
          "",
          "Failure to register does not automatically void the sale contract, though it can cause major priority problems.",
          "Dishonesty is not the general statutory mechanism determining priority here.",
          "Land Charges Act applies to unregistered land, not registered titles.",
        ],
      },
    },
    {
      topic: "Registered land: what ‘registered’ means",
      q: "A client says: 'The land is registered, so there can’t be any hidden rights.' Which is the best correction?",
      choices: [
        "Correct; registered land has no hidden rights at all.",
        "Incorrect; some rights can bind without appearing on the register, especially overriding interests (e.g., certain short leases and actual occupation).",
        "Correct, but only for freehold, not leasehold.",
        "Incorrect; the register is never reliable and should be ignored.",
        "Correct if the title plan is accurate.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registered land is designed for transparency, but overriding interests and certain exceptions mean some binding rights can exist without being entered.",
        whyWrong: [
          "Overriding interests contradict an absolute 'no hidden rights' claim.",
          "",
          "The same principles apply broadly across registered freehold and leasehold titles.",
          "The register is generally reliable and central; it should not be ignored.",
          "Plan accuracy is not the condition for existence of overriding interests.",
        ],
      },
    },
  ];

  window.quizData = {
    title: "Land Law — Chapter 3: Registered Land",
    subtitle:
      "30 SQE-style scenario MCQs (5 options each) in quizDataSchema format",
    questions: questions,
  };
})();
