(() => {
  const questions = [
    {
      topic: "Co-ownership basics: legal vs equitable title",
      q: "A solicitor explains co-ownership of land. Which statement is most accurate?",
      choices: [
        "There can be any number of legal owners, and they can hold as tenants in common at law.",
        "There can be a maximum of four legal owners, who hold the legal estate as joint tenants; the equitable interest can be joint tenants or tenants in common.",
        "Legal owners always hold as tenants in common, while equitable owners always hold as joint tenants.",
        "A single person cannot hold land on trust for themselves.",
        "If there are two owners, the legal estate is automatically a tenancy in common.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The legal estate can be held by up to four trustees, and it is held as a joint tenancy at law. The beneficial (equitable) ownership can be joint tenancy or tenancy in common.",
        whyWrong: [
          "At law, co-owners hold as joint tenants (not tenants in common), and there is a statutory limit on legal owners.",
          "",
          "This reverses the correct position.",
          "A trust can exist even with one trustee and beneficiaries (including themselves in some contexts), but the key co-ownership rule is about multiple owners/trustees.",
          "Two legal owners still hold jointly at law.",
        ],
      },
    },
    {
      topic: "Joint tenancy vs tenancy in common (beneficial)",
      q: "Two friends buy a house and want their shares to pass under their wills to their respective families. Which beneficial co-ownership best achieves this?",
      choices: [
        "Beneficial joint tenancy",
        "Beneficial tenancy in common",
        "Legal joint tenancy only",
        "A leasehold estate",
        "A mortgage",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Tenants in common hold distinct shares that can be left by will; joint tenancy carries the right of survivorship (jus accrescendi), preventing a will gift of the share.",
        whyWrong: [
          "Joint tenancy passes automatically to the survivor, not under a will.",
          "Legal title is joint anyway; it is the beneficial form that matters for wills.",
          "",
          "Leasehold is a different estate concept.",
          "A mortgage is security, not co-ownership structure.",
        ],
      },
    },
    {
      topic: "Right of survivorship",
      q: "A and B are beneficial joint tenants. A dies leaving a will giving 'my half of the house' to C. What happens to A’s beneficial interest?",
      choices: [
        "It passes to C under the will.",
        "It passes to B automatically by survivorship.",
        "It passes to the state as bona vacantia.",
        "It is split: half to B and half to C.",
        "It becomes a life interest for C.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Under a beneficial joint tenancy, the right of survivorship operates so the deceased’s share passes automatically to the surviving joint tenant(s), outside the will.",
        whyWrong: [
          "A has no separable share to gift by will while the joint tenancy subsists.",
          "",
          "There is a surviving co-owner, so not bona vacantia.",
          "No split occurs unless severance occurred before death.",
          "No automatic life interest arises.",
        ],
      },
    },
    {
      topic: "Severance: effect",
      q: "Two co-owners hold the beneficial interest as joint tenants. One validly severs. What is the effect of severance?",
      choices: [
        "It splits the legal estate into two legal tenancies in common.",
        "It converts the beneficial joint tenancy into a beneficial tenancy in common in equal shares (unless evidence suggests otherwise).",
        "It terminates the trust and transfers the property to the severing party.",
        "It prevents any sale ever taking place.",
        "It converts the mortgage into a lease.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Severance affects the equitable (beneficial) interest only, converting it from joint tenancy to tenancy in common (often equal shares) while the legal estate remains jointly held by trustees.",
        whyWrong: [
          "The legal estate remains a joint tenancy at law.",
          "",
          "Severance does not end the trust or transfer ownership outright.",
          "Sale remains possible; severance changes shares/survivorship.",
          "No conversion of mortgage occurs.",
        ],
      },
    },
    {
      topic: "Severance: notice in writing (s36(2) LPA 1925)",
      q: "Cara and Dev are beneficial joint tenants. Cara emails Dev: 'I am severing our joint tenancy with immediate effect.' Dev receives and reads it. What is the best analysis?",
      choices: [
        "Severance is impossible by written notice.",
        "This can be effective severance by notice in writing if it clearly shows an immediate intention to sever and is served.",
        "It severs only if Dev replies agreeing.",
        "It severs only if Cara registers a notice at HM Land Registry.",
        "It severs only if they are married.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A joint tenancy in equity can be severed by notice in writing under s36(2) if it is sufficiently clear and properly served.",
        whyWrong: [
          "Written notice is a classic severance method.",
          "Consent is not required; unilateral severance is possible.",
          "Registration is not the legal requirement for severance (though practical steps may follow).",
          "Marriage is irrelevant.",
        ],
      },
    },
    {
      topic: "Severance: mutual agreement",
      q: "Two co-owners discuss and agree they will own 'in equal shares from now on' and will make wills accordingly. No written notice is served. What is the strongest severance route here?",
      choices: [
        "Severance by mutual agreement",
        "Severance by course of dealing only",
        "Severance by murder rule",
        "Severance by adverse possession",
        "No severance is possible without a deed",
      ],
      correct: 0,
      explain: {
        whyRight:
          "An agreement between co-owners to treat their interests as separate shares can amount to severance by mutual agreement, even if not by formal deed.",
        whyWrong: [
          "Course of dealing is a separate route; here there is a clear agreement.",
          "",
          "Murder rule is unrelated.",
          "Adverse possession is unrelated.",
          "A deed is not required for severance.",
        ],
      },
    },
    {
      topic: "Severance: course of dealing",
      q: "Amir and Bea co-own beneficially as joint tenants. Over several years they keep accounts treating the property as 'Amir 70% / Bea 30%,' each receiving rent accordingly. They never expressly agree to sever. Which route might support severance?",
      choices: [
        "Course of dealing showing they mutually treated their interests as separate shares",
        "Notice in writing is the only possible route",
        "Foreclosure",
        "Prescription",
        "Rectification",
      ],
      correct: 0,
      explain: {
        whyRight:
          "A consistent course of dealing indicating both parties treated their interests as tenancies in common can evidence severance.",
        whyWrong: [
          "Notice in writing is one route, but not the only route.",
          "",
          "Foreclosure is a mortgage remedy.",
          "Prescription is easements by long use.",
          "Rectification is correcting register mistakes.",
        ],
      },
    },
    {
      topic: "Severance by act operating on one’s share",
      q: "Two beneficial joint tenants. One sells their equitable share to a third party. What is the effect on the beneficial joint tenancy?",
      choices: [
        "No effect; joint tenancy survives any sale.",
        "It severs the joint tenancy because the seller has acted on their share, creating a tenancy in common.",
        "It severs the legal estate only.",
        "It converts the property into a lease.",
        "It creates an easement.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Disposing of one’s equitable interest is an act operating on one’s share and severs the beneficial joint tenancy.",
        whyWrong: [
          "A sale of the equitable share is inconsistent with survivorship and therefore severs.",
          "",
          "Legal estate remains jointly held.",
          "No conversion into lease occurs.",
          "No easement is created.",
        ],
      },
    },
    {
      topic: "Joint tenants: the four unities",
      q: "Which set of 'unities' is traditionally required for a beneficial joint tenancy?",
      choices: [
        "Unity of race, religion, residence, and rent",
        "Unity of possession, interest, title, and time",
        "Unity of possession, mortgage, notice, and sale",
        "Unity of title, time, occupation, and registration",
        "Unity of interest, contract, consent, and deed",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The classic four unities for joint tenancy are possession, interest, title, and time.",
        whyWrong: [
          "Nonsense categories.",
          "",
          "Not the legal test.",
          "Not the legal test.",
          "Not the legal test.",
        ],
      },
    },
    {
      topic: "Express declaration of trust (beneficial shares)",
      q: "Transfer deed says: 'A and B are to hold the property upon trust for themselves as tenants in common in equal shares.' Later, A claims it was really meant to be joint tenants. What is the best starting point?",
      choices: [
        "Ignore the deed and look only at contributions.",
        "An express declaration of trust is generally conclusive of beneficial ownership, absent fraud/mistake.",
        "Assume joint tenancy because they are co-owners.",
        "Assume tenancy in common 70/30 based on income.",
        "Assume the bank decides.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An express declaration of trust in a deed is usually decisive of beneficial interests unless set aside for reasons like fraud or mistake.",
        whyWrong: [
          "Contributions are relevant where there is no express declaration, but the declaration is the primary evidence.",
          "",
          "There is no such presumption overriding an express declaration.",
          "Percentages are not assumed without evidence and are contradicted by the declaration.",
          "Banks do not determine beneficial ownership.",
        ],
      },
    },
    {
      topic: "Resulting trust (purchase money contributions) overview",
      q: "Two friends buy an investment property. The transfer is silent on shares. They contribute 80% and 20% to the purchase price and intend it as an investment. Which trust analysis is most likely to be relevant to determine shares?",
      choices: [
        "Resulting trust approach based on contributions",
        "Adverse possession",
        "Easement by necessity",
        "Forfeiture",
        "Rectification of the register",
      ],
      correct: 0,
      explain: {
        whyRight:
          "For non-domestic/investment contexts with no express declaration, a resulting trust analysis based on contributions may be the likely starting point (subject to evidence).",
        whyWrong: [
          "",
          "Adverse possession is unrelated.",
          "Easements are unrelated.",
          "Forfeiture relates to leases.",
          "Rectification is unrelated.",
        ],
      },
    },
    {
      topic: "Constructive trust / common intention (family home)",
      q: "Jamie buys a home in their sole name. Partner Alex moves in. Alex pays for a large kitchen renovation and the parties discuss 'this is our home.' On separation, Alex claims a beneficial share. What route is most relevant?",
      choices: [
        "Common intention constructive trust (and/or proprietary estoppel depending on facts)",
        "Resulting trust only, always",
        "Adverse possession",
        "Prescription",
        "Foreclosure",
      ],
      correct: 0,
      explain: {
        whyRight:
          "In family home contexts, courts often use common intention constructive trust (and sometimes proprietary estoppel) to determine if and what beneficial shares arise from intentions and reliance.",
        whyWrong: [
          "Resulting trusts may be less central in domestic contexts; intention and reliance are key.",
          "",
          "Adverse possession is unrelated.",
          "Prescription is unrelated.",
          "Foreclosure is unrelated.",
        ],
      },
    },
    {
      topic: "Overreaching: conditions",
      q: "A home is held on trust for sale by two trustees. One beneficiary is in actual occupation. The trustees sell the freehold to a buyer who pays the purchase price to both trustees. What is the effect on the beneficiary’s equitable interest in the land?",
      choices: [
        "It automatically binds the buyer because the beneficiary was in occupation.",
        "It is overreached and attaches to the sale proceeds instead of the land, so the buyer takes free of it (assuming the conditions are met).",
        "It is extinguished entirely with no substitute.",
        "It becomes a legal estate.",
        "It converts into a restrictive covenant.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where the purchase money is paid to at least two trustees (or a trust corporation) in a qualifying disposition, beneficial interests are overreached and move from the land to the proceeds.",
        whyWrong: [
          "Actual occupation can create overriding interests, but overreaching can still remove the beneficial interest from the land if conditions are satisfied.",
          "The interest is not destroyed; it transfers to proceeds.",
          "",
          "It does not become a legal estate automatically.",
          "It does not convert into a covenant.",
        ],
      },
    },
    {
      topic: "Overreaching: one trustee problem",
      q: "Property is held on trust by two beneficial owners, but only one is registered as proprietor (sole trustee). The sole proprietor sells to a buyer and receives the purchase money alone. A non-legal owner beneficiary was in occupation. What is the key risk for the buyer?",
      choices: [
        "No risk; payment to one trustee always overreaches.",
        "Overreaching may fail because purchase money was not paid to two trustees, so the beneficiary’s equitable interest may bind the buyer as an overriding interest if actual occupation requirements are met.",
        "The sale is void automatically.",
        "The beneficiary’s interest is always postponed because it is equitable.",
        "The buyer can ignore occupation if they registered.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Overreaching typically requires payment to two trustees (or a trust corporation). If paid to only one, the beneficial interest may remain in the land and can bind if it qualifies as overriding via actual occupation.",
        whyWrong: [
          "Payment to one trustee may not satisfy overreaching conditions.",
          "The sale can be valid but subject to the equitable interest.",
          "",
          "Equitable interests can bind if protected/overriding; they are not always postponed.",
          "Registration does not necessarily defeat overriding interests.",
        ],
      },
    },
    {
      topic: "Actual occupation: timing",
      q: "A buyer exchanges contracts to purchase a house. Between exchange and completion, a beneficiary moves in and begins living there. At completion, buyer pays the price and completes. For overriding interest purposes, when is actual occupation generally assessed?",
      choices: [
        "At the date of exchange",
        "At the date of completion (the disposition)",
        "At the date the seller first bought the property",
        "At the date the mortgage was granted",
        "At the date the beneficiary first heard about the sale",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Overriding interests based on actual occupation are generally assessed at the time of the disposition (typically completion), not exchange.",
        whyWrong: [
          "Exchange is not usually the operative time for priority of overriding interests in the transfer of title.",
          "",
          "Earlier dates are irrelevant to the priority snapshot for the disposition.",
          "Mortgage grant date is not the key for the buyer’s acquisition.",
          "Knowledge timing does not set the priority snapshot.",
        ],
      },
    },
    {
      topic: "Actual occupation: disclosure and inspection",
      q: "A buyer inspects a property and sees signs someone is living there, but the seller says 'they’re just visiting.' The buyer makes no further enquiries. A beneficiary later claims an overriding interest by actual occupation. What is the best general point?",
      choices: [
        "The beneficiary cannot bind a buyer unless they are registered.",
        "A buyer who fails to make reasonable enquiries despite indications of occupation increases the risk of being bound by an overriding interest.",
        "The buyer is never bound if they inspected.",
        "Actual occupation requires the beneficiary to confront the buyer personally.",
        "Actual occupation can be defeated by the seller’s statement alone.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "If occupation is apparent on inspection, buyers should enquire. Failure to do so can mean they take subject to an overriding interest if the beneficiary is in actual occupation and other conditions apply.",
        whyWrong: [
          "Overriding interests can bind without registration.",
          "Inspection doesn’t automatically protect the buyer; the issue is what was obvious and what enquiries were made.",
          "",
          "Confrontation is not required for occupation to exist.",
          "Seller statements do not necessarily defeat overriding interests.",
        ],
      },
    },
    {
      topic: "Severance: will and death planning",
      q: "A and B are beneficial joint tenants. A wants their share to go to their children, not B. What should A do to achieve this outcome?",
      choices: [
        "Do nothing; a will gift will override survivorship.",
        "Sever the joint tenancy during lifetime (e.g., by written notice) and make a will disposing of their tenancy in common share.",
        "Grant an easement to the children.",
        "Register a restriction that automatically transfers the share.",
        "Ask B to die first.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Severance converts beneficial ownership into tenancy in common so A has a distinct share to leave by will; without severance, survivorship defeats the will gift.",
        whyWrong: [
          "A will cannot dispose of a joint tenant’s interest while survivorship applies.",
          "",
          "Easements are unrelated.",
          "Restrictions manage dispositions but do not automatically transfer beneficial shares; severance is needed.",
          "Not a legal solution.",
        ],
      },
    },
    {
      topic: "Joint tenancy severance: service",
      q: "One co-owner posts a severance notice by first-class post to the other’s last known address. The other never opens it. Which statement is most accurate?",
      choices: [
        "Service fails unless the notice is actually read.",
        "Service can be effective if properly served; actual reading is not always required if the notice is delivered to the proper address.",
        "Service is effective only if hand-delivered.",
        "Service is effective only if registered at HM Land Registry.",
        "Service is effective only if witnessed by a solicitor.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Severance by notice requires service. Delivery to the last known address can be sufficient; actual reading is not necessarily required if service rules are met.",
        whyWrong: [
          "Actual reading is not always necessary for valid service.",
          "Hand delivery is not the only valid method.",
          "Registration is not required for severance itself.",
          "A solicitor witness is not required for the notice to be valid.",
        ],
      },
    },
    {
      topic: "Trusts of land: sale and occupation rights (TOLATA overview)",
      q: "Co-owners disagree about whether to sell the family home. One wants sale; the other wants to remain living there with children. Under modern law, what is the relevant statutory framework for resolving this dispute?",
      choices: [
        "Law of Property Act 1925 s52 only",
        "Trusts of Land and Appointment of Trustees Act 1996 (TOLATA)",
        "Land Charges Act 1972",
        "Limitation Act 1980 only",
        "Companies Act 2006",
      ],
      correct: 1,
      explain: {
        whyRight:
          "TOLATA provides the framework for trusts of land, including applications for orders for sale and consideration of relevant factors.",
        whyWrong: [
          "s52 concerns deeds for conveyances; it’s not the main dispute framework.",
          "",
          "Land Charges Act relates to unregistered land priorities.",
          "Limitation relates to time bars, not co-owner sale disputes.",
          "Companies Act is irrelevant.",
        ],
      },
    },
    {
      topic: "TOLATA factors (overview)",
      q: "In a TOLATA application for an order for sale of a family home, which factor is most likely to be relevant for the court to consider?",
      choices: [
        "The parties’ favourite TV shows",
        "The intentions of the persons who created the trust and the welfare of any minor occupying the land",
        "The colour of the front door",
        "Whether one party owns a car",
        "Whether the property is registered",
      ],
      correct: 1,
      explain: {
        whyRight:
          "TOLATA requires the court to consider factors including the intentions behind the trust and welfare of minors occupying, among others such as purposes and secured creditors’ interests.",
        whyWrong: [
          "Irrelevant.",
          "",
          "Irrelevant.",
          "Irrelevant.",
          "Registration status is not a core discretionary factor for sale under TOLATA.",
        ],
      },
    },
    {
      topic: "Secured creditor’s interests in TOLATA",
      q: "A property is co-owned and subject to a mortgage. The co-owners separate and one applies to postpone sale for many years. The bank supports an order for sale. What is a key point?",
      choices: [
        "The bank’s interest is irrelevant in TOLATA.",
        "The court must consider the interests of secured creditors, and these can weigh strongly in favour of sale.",
        "Banks can never intervene in co-owner disputes.",
        "The bank automatically becomes a trustee.",
        "The presence of a mortgage means TOLATA cannot apply.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "TOLATA includes consideration of secured creditors’ interests, which can be significant, particularly where the purpose of the trust is spent and debts remain.",
        whyWrong: [
          "Secured creditors are expressly relevant.",
          "Banks can be involved and their interests considered.",
          "",
          "Banks do not automatically become trustees.",
          "TOLATA still applies to trusts of land even if mortgaged.",
        ],
      },
    },
    {
      topic: "Beneficial shares: quantification (domestic)",
      q: "In a domestic cohabitation case with no express declaration of trust, the court finds a common intention constructive trust exists. How does the court usually approach quantifying shares?",
      choices: [
        "Always 50/50, no matter what.",
        "By inferring or imputing parties’ common intention from the whole course of conduct, considering contributions and arrangements.",
        "By awarding 100% to the legal owner automatically.",
        "By using the Land Registry title plan measurements.",
        "By applying adverse possession time limits.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where a constructive trust is found, shares are determined by the parties’ actual or imputed intentions gleaned from the whole course of conduct, not a rigid formula.",
        whyWrong: [
          "Not always equal; depends on intention and conduct.",
          "Legal title is relevant but not automatically decisive once beneficial interest is established.",
          "",
          "Title plans do not determine beneficial shares.",
          "Adverse possession is irrelevant.",
        ],
      },
    },
    {
      topic:
        "Presumption of resulting trust vs presumption of advancement (overview spotting)",
      q: "Parent buys a house in adult child’s sole name, paying the full price. There is no express declaration. Parent later claims the child holds it on trust for the parent. What is the key issue to spot?",
      choices: [
        "Whether the property is registered",
        "Whether a presumption of resulting trust arises or whether any presumption of advancement/gift is relevant, depending on relationship and evidence",
        "Whether the child is in actual occupation",
        "Whether an easement exists",
        "Whether the parent has a mortgage",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where one person provides purchase money but title is in another’s name, issues of resulting trust and any presumption of gift/advancement (and rebuttal evidence) can arise.",
        whyWrong: [
          "Registration is not the main trust issue.",
          "",
          "Occupation relates to overriding interests, not whether a trust arose.",
          "Easements are unrelated.",
          "Mortgage is not the key trust formation issue.",
        ],
      },
    },
    {
      topic: "Overreaching and restriction (registered land practice)",
      q: "Two people are beneficial owners, but only one is registered proprietor. The non-owner is worried about being overreached or losing priority. What practical register entry is commonly used to ensure sale proceeds go to two trustees and protect against a sole disposition?",
      choices: [
        "A unilateral notice of the beneficial interest only",
        "A restriction requiring two trustees (or a trust corporation) for a disposition",
        "A caution against first registration",
        "A Class D land charge",
        "A planning condition",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A restriction on the register can require that dispositions be made by at least two trustees, helping protect beneficial interests and ensuring proper overreaching mechanics.",
        whyWrong: [
          "A notice may protect priority but does not force two trustees for valid overreaching.",
          "Cautions against first registration relate to unregistered land becoming registered.",
          "",
          "Land charges are unregistered land mechanisms.",
          "Planning conditions are public law controls.",
        ],
      },
    },
    {
      topic: "Trustee powers: who can sell",
      q: "A property is held on trust of land with two trustees. One trustee wants to sell unilaterally. Which is most accurate?",
      choices: [
        "One trustee can always sell alone if they are registered proprietor.",
        "Trustees generally must act jointly in exercising powers over the legal estate, including sale, unless otherwise authorised.",
        "Beneficiaries must always sign the transfer.",
        "A court order is always required for any sale.",
        "Sale is impossible if any beneficiary objects.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The legal estate is held by trustees who generally must act together in dealing with the land, including selling, subject to the trust instrument and statutory framework.",
        whyWrong: [
          "Even if one is registered, if there should be two trustees, unilateral action is not the general rule and can create risks.",
          "Beneficiaries do not usually sign; trustees do.",
          "",
          "Court order is not required for every sale.",
          "Objection does not make sale legally impossible; disputes can be resolved via TOLATA.",
        ],
      },
    },
    {
      topic:
        "Occupation rent / accounting between co-owners (overview spotting)",
      q: "After separation, one co-owner remains living in the jointly owned home alone while the other pays rent elsewhere. The absent co-owner asks for compensation. What is the best issue to spot?",
      choices: [
        "Adverse possession against the co-owner",
        "Potential occupation rent/accounting and equitable adjustments on sale, depending on exclusion, purpose, and contributions",
        "Prescription of a right to live there",
        "Forfeiture of the co-owner’s share",
        "Automatic transfer by survivorship",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Courts can account between co-owners, including occupation rent/equitable adjustments, especially where one is excluded or fairness requires it, typically resolved on sale/accounting.",
        whyWrong: [
          "Co-owners generally cannot easily adversely possess against each other without clear ouster and time, and it’s not the main initial issue.",
          "",
          "Prescription is irrelevant.",
          "Forfeiture is lease-related.",
          "Survivorship is a joint tenancy issue and does not resolve separation occupancy accounting.",
        ],
      },
    },
    {
      topic: "Severance and bankruptcy (overview spotting)",
      q: "A beneficial joint tenant is made bankrupt. What is the most likely impact on the beneficial joint tenancy?",
      choices: [
        "No impact; bankruptcy cannot affect co-ownership.",
        "Bankruptcy can operate to sever the beneficial joint tenancy, as the bankrupt’s interest becomes vested in the trustee in bankruptcy, inconsistent with survivorship.",
        "It severs the legal estate into two halves.",
        "It converts the property into a lease.",
        "It creates an easement.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Bankruptcy is typically treated as severing the beneficial joint tenancy because the interest vests in the trustee in bankruptcy, which is inconsistent with survivorship.",
        whyWrong: [
          "Bankruptcy can affect beneficial interests.",
          "",
          "Legal title remains jointly held by trustees; severance is equitable.",
          "No conversion into lease occurs.",
          "No easement arises.",
        ],
      },
    },
    {
      topic: "Joint tenancy and murder rule (for completeness spotting)",
      q: "A and B are beneficial joint tenants. A unlawfully kills B. What is the most accurate statement about A receiving B’s share by survivorship?",
      choices: [
        "A automatically takes B’s share by survivorship.",
        "The forfeiture rule prevents A from benefiting from the killing; survivorship is blocked and the property is typically treated as held on a constructive trust to prevent A benefiting.",
        "A becomes sole legal owner immediately.",
        "B’s share is destroyed.",
        "The mortgagee takes B’s share.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The forfeiture rule prevents a person from benefiting from their wrongdoing, so survivorship is typically prevented and alternative equitable outcomes apply.",
        whyWrong: [
          "Survivorship is blocked by forfeiture.",
          "",
          "Legal title consequences depend on registration/trusteeship; not automatic.",
          "B’s share is not destroyed; it is dealt with according to equitable principles.",
          "Mortgagees do not automatically take the victim’s share.",
        ],
      },
    },
    {
      topic: "Co-ownership: registered land and 'joint proprietors'",
      q: "Two people are registered as joint proprietors of a freehold. Does this tell you the form of beneficial ownership?",
      choices: [
        "Yes, it proves they are beneficial joint tenants.",
        "Yes, it proves they are beneficial tenants in common.",
        "No, the register shows legal ownership; beneficial ownership depends on declaration/intent and can be joint tenants or tenants in common.",
        "No, because registered proprietors are never trustees.",
        "Yes, it proves the property is leasehold.",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Registration reflects legal title. Co-owners hold the legal estate jointly as trustees; beneficial ownership can differ and depends on the trust arrangements and evidence.",
        whyWrong: [
          "The register does not conclusively determine beneficial form.",
          "Same issue: it does not conclusively determine beneficial tenancy in common.",
          "",
          "Registered joint proprietors can be trustees of land.",
          "Freehold/leasehold is separate from beneficial co-ownership.",
        ],
      },
    },
    {
      topic: "Quantifying shares: express vs inferred intention",
      q: "A deed contains no express declaration. Both parties contributed equally to deposit and mortgage for a home. One later claims a 70% share because they did more childcare. Which is the best general starting point?",
      choices: [
        "Start with equal shares as a likely inference from equal financial contributions, but consider whole course of conduct if a constructive trust analysis applies in a domestic context.",
        "Start with 70/30 because childcare always counts as 70%.",
        "Start with legal title only; equitable shares never differ.",
        "Start with a resulting trust only and ignore intention.",
        "Start with the mortgage lender’s view.",
      ],
      correct: 0,
      explain: {
        whyRight:
          "With no express declaration, courts infer/intend shares from evidence. In domestic contexts, the whole course of conduct can be relevant; equal contributions often support equality but can be adjusted if intention/conduct show otherwise.",
        whyWrong: [
          "There is no fixed childcare percentage rule.",
          "Equitable shares can differ from legal title.",
          "",
          "Resulting trust is not the only route and may not fit domestic contexts.",
          "Lenders do not decide beneficial shares.",
        ],
      },
    },
    {
      topic: "TOLATA: occupation rights and exclusion (overview)",
      q: "One co-owner changes the locks and refuses to let the other co-owner enter. The excluded co-owner applies to court. What is the best issue to spot under modern trusts of land law?",
      choices: [
        "The excluded co-owner has no remedy because they have no legal title.",
        "The court can make orders relating to occupation and can consider exclusion and compensation within TOLATA’s framework.",
        "The excluded co-owner can only sue for trespass in criminal court.",
        "The excluded co-owner automatically gains 100% beneficial ownership.",
        "The property becomes ownerless.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Under TOLATA, courts can regulate occupation and make orders, including addressing exclusion and consequential financial adjustments.",
        whyWrong: [
          "Beneficial co-owners can have remedies even if not sole legal owner; and co-owners often share legal title anyway.",
          "Trespass is civil; and TOLATA is the relevant co-ownership framework.",
          "",
          "Exclusion does not automatically transfer ownership.",
          "The property remains owned.",
        ],
      },
    },
    {
      topic: "Overreaching: purchase money paid to trust corporation",
      q: "A property is held on trust of land, but only one trustee is appointed because the trustee is a trust corporation. The property is sold and the buyer pays the purchase price to the trust corporation. What is the best analysis?",
      choices: [
        "Overreaching cannot occur because there is only one trustee.",
        "Overreaching can occur because payment to a trust corporation satisfies the statutory requirement, so beneficial interests can be overreached onto proceeds.",
        "Overreaching occurs only if the beneficiary consents.",
        "Overreaching requires three trustees.",
        "Overreaching turns the beneficial interest into a legal estate.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A trust corporation can act as sole trustee for overreaching purposes; payment to a trust corporation can satisfy the requirement that protects purchasers and shifts beneficial interests to proceeds.",
        whyWrong: [
          "The trust corporation exception means one trustee can be enough.",
          "Consent is not required if statutory overreaching conditions are met.",
          "",
          "No three-trustee requirement exists.",
          "Beneficial interests transfer to proceeds, not become legal estates.",
        ],
      },
    },
    {
      topic:
        "Priority: beneficial interest vs purchaser (registered land) recap",
      q: "A beneficial interest exists and is not protected by a notice, but the beneficiary is in actual occupation at completion. Buyer registers title. Which is most accurate?",
      choices: [
        "Buyer always takes free because there was no notice registered.",
        "Buyer may still be bound if the beneficial interest qualifies as an overriding interest through actual occupation and is not overreached.",
        "Buyer is bound only if the beneficiary told the buyer face-to-face.",
        "Buyer is bound only if the beneficiary is a legal owner.",
        "Buyer is never bound by equitable interests.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In registered land, some equitable interests can bind as overriding interests through actual occupation, provided they are not overreached and statutory exceptions don’t apply.",
        whyWrong: [
          "Lack of notice does not defeat overriding interests.",
          "Face-to-face disclosure is not the legal test.",
          "",
          "Beneficiary need not be a legal owner to have an overriding equitable interest.",
          "Equitable interests can bind if protected or overriding.",
        ],
      },
    },
    {
      topic: "Severance: effect on right of survivorship",
      q: "A and B are beneficial joint tenants. A serves a valid severance notice. A later dies. What happens to A’s beneficial share?",
      choices: [
        "It passes to B by survivorship.",
        "It passes under A’s will or intestacy because survivorship has been removed by severance.",
        "It is extinguished.",
        "It passes to the mortgagee.",
        "It passes to the Land Registry.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Once severed, survivorship no longer applies to the severing party’s share; they hold as tenants in common, so their share passes under will/intestacy.",
        whyWrong: [
          "Survivorship applies only while the joint tenancy subsists.",
          "The share is not extinguished.",
          "",
          "Mortgagees do not automatically receive the share.",
          "Land Registry does not inherit property.",
        ],
      },
    },
  ];

  window.quizData = {
    title: "Land Law — Chapter 9: Co-ownership",
    subtitle:
      "30 SQE-style scenario MCQs (5 options each) in quizDataSchema format",
    questions: questions,
  };
})();
