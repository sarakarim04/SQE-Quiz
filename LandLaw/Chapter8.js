(() => {
  const questions = [
    {
      topic: "What is a mortgage (concept)",
      q: "Nadia borrows £250,000 from Bank to buy a house. Bank takes a proprietary right over the house as security for repayment. Which statement best describes the mortgage?",
      choices: [
        "A mortgage is an outright transfer of ownership to the bank.",
        "A mortgage is a proprietary security interest over land securing repayment of a debt, giving the lender enforcement rights on default.",
        "A mortgage is a personal promise only, not connected to the land.",
        "A mortgage is a lease of the property to the bank until repaid.",
        "A mortgage is a restrictive covenant to pay money.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A mortgage is a security interest over land to secure a debt, giving the mortgagee remedies if the mortgagor defaults.",
        whyWrong: [
          "Modern mortgages are typically charges, not outright transfers of ownership.",
          "",
          "A mortgage creates proprietary security, not only a personal promise.",
          "It is not a leasehold relationship.",
          "Restrictive covenants are different obligations; a mortgage is security.",
        ],
      },
    },
    {
      topic: "Registered land: legal mortgage creation",
      q: "Ethan grants Bank a mortgage over his registered freehold. What is the usual modern mechanism to create a legal mortgage in registered land?",
      choices: [
        "A declaration of trust signed by the borrower.",
        "A legal charge by deed, completed by registration of the charge.",
        "An oral agreement witnessed by two neighbours.",
        "A land charge registration at the Land Charges Department.",
        "A licence to occupy granted to the bank.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In registered land, a legal mortgage is typically created by a charge by deed and completed by registration on the title.",
        whyWrong: [
          "A declaration of trust is not the standard mechanism for creating a legal mortgage.",
          "",
          "Oral arrangements do not satisfy required formalities.",
          "Land Charges registration is for unregistered land.",
          "A licence is not a mortgage.",
        ],
      },
    },
    {
      topic: "Unregistered land: legal mortgage creation",
      q: "Imran mortgages an unregistered freehold to Bank. Which is the best general statement about how a legal mortgage is commonly created in unregistered land today?",
      choices: [
        "Only by oral agreement plus handing over keys.",
        "Often by a charge by deed (or equivalent legal mortgage), with protection via appropriate land charges registration of registrable interests and/or by retaining title deeds historically.",
        "Only by registering a notice at HM Land Registry.",
        "Only by creating a lease to the bank for 99 years.",
        "It is impossible to mortgage unregistered land.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Unregistered land can be mortgaged by deed (often as a legal charge). Priority/protection depends on the unregistered land system (and historically deposit of deeds), and certain interests may require land charges registration.",
        whyWrong: [
          "Oral agreement is not sufficient for legal mortgage formalities.",
          "Land Registry notices relate to registered land; unregistered land is not on the register.",
          "A lease to the bank is not the standard modern mortgage structure.",
          "",
        ],
      },
    },
    {
      topic: "Equity of redemption (core rule)",
      q: "A mortgage deed states: 'The borrower can never redeem the mortgage, even after repaying the debt.' Which is most accurate?",
      choices: [
        "Valid: parties are free to contract out of redemption.",
        "Invalid: the mortgagor has an equitable right to redeem once the secured debt is repaid; terms preventing redemption are generally void.",
        "Valid only if the interest rate is low.",
        "Valid only if the borrower is a company.",
        "Valid only if it is registered.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Equity protects the mortgagor’s right to redeem. Any clause preventing redemption is generally void as a 'clog' on the equity of redemption.",
        whyWrong: [
          "Mortgage security cannot be turned into irredeemable ownership.",
          "",
          "Interest rate is not the test for validity of an irredeemability clause.",
          "Company status does not remove the equity of redemption principle.",
          "Registration does not validate an unlawful clog.",
        ],
      },
    },
    {
      topic: "Clogs: option to purchase",
      q: "Bank lends £200,000 secured on Priya’s home. The mortgage contains a term giving Bank an option to buy the property at a fixed price at any time, even after redemption. Priya repays the loan and demands the option is removed. What is the best analysis?",
      choices: [
        "The option is always valid because it is in a deed.",
        "The option may be an unlawful clog if it effectively fetters the mortgagor’s right to redeem or continues beyond redemption in an oppressive way.",
        "The option is valid only if Bank registers it as a notice.",
        "The option is valid only if Priya had legal advice.",
        "The option is automatically void only if the mortgage is residential.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A mortgage term giving the mortgagee an option to purchase can be treated as a clog if it is unfairly tied to the mortgage and undermines redemption, especially if it survives redemption.",
        whyWrong: [
          "Deed form does not save an unlawful clog.",
          "Registration affects priority, not whether the clause is an unlawful clog.",
          "Legal advice is relevant to fairness but not determinative.",
          "The principles apply beyond residential settings; context matters.",
        ],
      },
    },
    {
      topic: "Collateral advantage (general)",
      q: "A lender requires the borrower, as part of the mortgage, to buy insurance from the lender’s sister company for the mortgage term. Borrower says it is invalid as a clog. Which is most accurate at a high level?",
      choices: [
        "All collateral advantages are always void.",
        "Collateral advantages may be allowed if they are not unconscionable and do not prevent redemption; but oppressive terms can be struck down.",
        "Collateral advantages are valid only if the borrower is a consumer.",
        "Collateral advantages are valid only if included in the mortgage deed.",
        "Collateral advantages are always void once the mortgage is registered.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Collateral advantages can be permissible if not unfair and not inconsistent with redemption; the court polices unconscionability and interference with redemption.",
        whyWrong: [
          "Not all are void; validity depends on effect and fairness.",
          "Consumer status does not automatically validate or invalidate them.",
          "Deed form does not guarantee enforceability if unconscionable.",
          "Registration does not determine clog validity.",
        ],
      },
    },
    {
      topic: "Mortgagor’s right to redeem: timing",
      q: "A mortgage provides that the borrower cannot redeem for the first 10 years. Borrower wants to redeem in year 2. Which is the best general statement?",
      choices: [
        "Any postponement is void and borrower can always redeem immediately.",
        "A reasonable postponement of redemption can be valid, but an excessive or oppressive postponement may be struck down as a clog depending on context.",
        "Postponement is valid only if the borrower is a company.",
        "Postponement is valid only if the property is commercial.",
        "Postponement is valid only if the lender consents at redemption.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The court balances freedom of contract with protection of redemption. Reasonable postponements can stand; oppressive ones may be a clog.",
        whyWrong: [
          "Immediate redemption is not always guaranteed if a valid contractual postponement exists.",
          "Company/commercial context may affect analysis but is not an absolute rule.",
          "Commercial/residential is relevant but not an absolute rule.",
          "Lender consent cannot override the equitable right to redeem once properly due.",
        ],
      },
    },
    {
      topic: "Right to possession (general rule)",
      q: "Bank holds a legal mortgage over a house. The borrower misses one payment. Bank asks if it has a right to take possession immediately. What is the best general statement for SQE purposes?",
      choices: [
        "A mortgagee never has a right to possession.",
        "A mortgagee generally has a right to possession as soon as the mortgage is created, but its exercise is controlled in practice (especially for homes) by statute and court discretion.",
        "A mortgagee can take possession only after selling the property.",
        "A mortgagee can take possession only if the borrower agrees in writing at the time of default.",
        "A mortgagee automatically becomes the owner on default.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "At common law, a mortgagee may be entitled to possession, but for residential property there are significant procedural/statutory controls and courts can adjourn/suspend possession.",
        whyWrong: [
          "Mortgagees can have possession rights; they are not categorically barred.",
          "Possession can be sought before sale, not only after.",
          "Borrower agreement at default is not required if the lender has the legal right and follows procedure.",
          "Default does not automatically transfer ownership.",
        ],
      },
    },
    {
      topic: "Residential possession: court discretion (overview)",
      q: "A borrower falls into arrears but can clear them within 18 months. Bank sues for possession of the borrower’s home. What is the strongest general point the borrower can raise?",
      choices: [
        "The bank cannot ever seek possession of a home.",
        "The court may adjourn/suspend possession if the borrower can pay sums due within a reasonable period under the relevant statutory discretion.",
        "The borrower wins automatically if they have children.",
        "The borrower can defeat the mortgage by claiming adverse possession.",
        "The borrower can insist the bank must sell first.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For residential mortgages, courts have statutory discretion to adjourn, stay, or suspend possession if the borrower can pay within a reasonable period.",
        whyWrong: [
          "Banks can seek possession; the issue is court control and reasonableness.",
          "Children may be relevant but do not automatically determine outcome.",
          "Adverse possession does not apply here.",
          "Lenders are not generally required to sell before possession proceedings.",
        ],
      },
    },
    {
      topic: "Mortgagee’s power of sale: when arises (overview)",
      q: "A lender wants to exercise a power of sale. Which is the best high-level statement?",
      choices: [
        "A mortgagee can sell only after obtaining a possession order.",
        "A mortgagee’s power of sale arises on default and becomes exercisable once statutory conditions are met (e.g., notice/arrears conditions), depending on the type of mortgage.",
        "A mortgagee can sell only if the borrower signs a sale consent form.",
        "A mortgagee can sell only if the property is registered.",
        "A mortgagee cannot sell because only owners can sell.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Mortgagees typically have a power of sale that is exercisable once statutory/contractual conditions are satisfied. Possession orders are common in practice but not always a strict prerequisite.",
        whyWrong: [
          "Possession is often sought but is not always legally required for the power to be exercisable.",
          "Borrower consent is not required if the lender has a valid power of sale.",
          "Registration affects priority/formality but not the existence of the power of sale itself.",
          "Mortgagees can sell under their power of sale even though they are not the outright owner.",
        ],
      },
    },
    {
      topic: "Mortgagee’s duty on sale: best price",
      q: "Bank sells a mortgaged property quickly at a low price without proper marketing. The borrower claims the bank breached its duty. What is the best statement?",
      choices: [
        "A mortgagee can sell at any price as long as it is a sale.",
        "A mortgagee must take reasonable care to obtain the true market value/best price reasonably obtainable at the time of sale.",
        "A mortgagee must always wait for the market to peak.",
        "A mortgagee must sell only by public auction.",
        "A mortgagee owes no duties to the borrower once default occurs.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "When exercising the power of sale, a mortgagee must take reasonable care to obtain the best price reasonably obtainable (often framed as true market value at the time).",
        whyWrong: [
          "There is a duty of reasonable care.",
          "No duty to time the market to peak; duty is reasonableness at the time of sale.",
          "Auction is not mandatory; method must be reasonable.",
          "Duties continue in relation to the sale process.",
        ],
      },
    },
    {
      topic: "Mortgagee’s duty: conflict and self-dealing",
      q: "Bank sells the mortgaged property to its subsidiary at an undervalue. The borrower challenges the sale. What is the key concern?",
      choices: [
        "There is no issue; a bank can sell to anyone.",
        "Potential breach of duty and conflict of interest; sale to a connected party at undervalue is vulnerable to challenge and damages.",
        "It is automatically valid if the borrower was in arrears.",
        "It is valid if it was a private treaty sale.",
        "It is invalid only if the borrower objects before completion.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Connected-party sales raise conflict/self-dealing concerns. The mortgagee must act in good faith and take reasonable care to obtain the best price reasonably obtainable.",
        whyWrong: [
          "Connected sales can be scrutinised; the issue is reasonableness and conflict.",
          "Arrears do not remove the duty to sell properly.",
          "Sale method does not remove duty.",
          "Borrower timing of objection is not the test for validity/duty breach.",
        ],
      },
    },
    {
      topic: "Order of priority: first and second mortgages",
      q: "A property has a first legal charge to Bank1 and a later legal charge to Bank2. The property is sold by Bank1 under power of sale. Who is paid first from the sale proceeds (ignoring costs)?",
      choices: [
        "Bank2 is paid first because it is more recent.",
        "Bank1 is paid first because it has priority as first registered/legal charge.",
        "The borrower is paid first.",
        "All lenders share equally.",
        "The estate agent is paid first by law.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Priority generally follows order of creation/registration. The first mortgagee is paid first from proceeds, then subsequent charges in order, then the borrower gets any surplus.",
        whyWrong: [
          "Later charges are generally postponed to earlier ones.",
          "The borrower receives any surplus only after secured debts are discharged.",
          "Equal sharing does not apply unless agreed or same priority.",
          "Agents may be paid from proceeds as costs, but secured debt priority governs distribution of net proceeds.",
        ],
      },
    },
    {
      topic: "Overreaching vs mortgages (distinction)",
      q: "Two trustees sell trust property subject to a mortgage to Bank. The buyer pays the price to the two trustees. The beneficiary says their interest is overreached so the buyer takes free of the mortgage too. What is correct?",
      choices: [
        "Overreaching removes the mortgage as well as beneficial interests.",
        "Overreaching affects beneficial interests under a trust; it does not remove a registered/legal mortgage, which remains binding according to priority rules unless redeemed.",
        "Overreaching applies only to mortgages.",
        "Overreaching converts the mortgage into a land charge.",
        "Overreaching means the bank must release the charge automatically.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Overreaching detaches equitable beneficial interests from the land onto the proceeds; it does not wipe out a mortgage which is a separate proprietary security interest that must be redeemed or remains binding.",
        whyWrong: [
          "Mortgages are not overreached by paying purchase money to trustees.",
          "",
          "Overreaching is a trusts concept, not a mortgage concept.",
          "It does not convert the legal nature of a mortgage.",
          "The bank releases only on redemption/discharge, not automatically via overreaching.",
        ],
      },
    },
    {
      topic: "Subrogation (overview)",
      q: "Buyer pays off Seller’s mortgage to Bank1 on completion expecting to get a clean title. Due to a mistake, Bank1’s discharge isn’t registered, and a later lender claims priority. Buyer argues they should step into Bank1’s priority position. What doctrine is most relevant?",
      choices: [
        "Prescription",
        "Equitable subrogation",
        "Adverse possession",
        "Forfeiture",
        "Severance",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Equitable subrogation can allow a party who pays off a secured debt to be treated as having the benefit of that security/priority to prevent unjust enrichment, depending on facts.",
        whyWrong: [
          "Prescription is about long use rights.",
          "",
          "Adverse possession is about possession, not priority correction by payment.",
          "Forfeiture is lease termination.",
          "Severance is co-ownership concept.",
        ],
      },
    },
    {
      topic: "Further advances: priority (overview)",
      q: "Bank has a registered charge securing 'all monies' including future advances. A second charge is later registered. Bank then makes a further advance. In priority terms, what is the key issue?",
      choices: [
        "Further advances always rank behind the second charge.",
        "Further advances can retain priority in some circumstances, but may be postponed depending on notice/registration and statutory rules for further advances.",
        "Further advances always rank first regardless of anything.",
        "Further advances are void unless the second lender consents.",
        "Further advances convert the first mortgage into a lease.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Priority of further advances is nuanced: some further advances may keep priority (e.g., obligatory advances or where protected), while others may be postponed depending on statutory conditions and notice of later interests.",
        whyWrong: [
          "Not always postponed; depends on the rules and circumstances.",
          "",
          "Not always first regardless; later interests can affect priority for optional advances.",
          "Consent is not universally required, though some protections exist.",
          "No conversion into lease occurs.",
        ],
      },
    },
    {
      topic: "Tacking (priority concept overview)",
      q: "A lender with a first mortgage makes additional lending after learning of a second mortgage. The lender argues the additional sums should rank with the first mortgage. What priority concept is being raised?",
      choices: [
        "Tacking/further advances priority",
        "Annexation",
        "Doctrine of merger",
        "Wheeldon v Burrows",
        "Relief from forfeiture",
      ],
      correct: 0,
      explain: {
        whyRight:
          "This is the classic priority issue of further advances/tacking—whether later sums can 'tack' onto the priority of the first security.",
        whyWrong: [
          "",
          "Annexation relates to covenants.",
          "Merger relates to unity of estates.",
          "Wheeldon v Burrows relates to implied easements.",
          "Relief from forfeiture relates to leases.",
        ],
      },
    },
    {
      topic: "Undue influence: warning signs",
      q: "Sam’s partner asks Sam to sign a charge over Sam’s home to secure the partner’s business debts. The bank deals mainly with the partner and does not insist on Sam receiving independent advice. Later Sam claims undue influence. What is the key risk for the bank?",
      choices: [
        "No risk because banks are never affected by domestic pressure.",
        "The bank may be fixed with constructive notice of potential undue influence in certain non-commercial surety situations and may lose security if it failed to take reasonable steps (e.g., independent advice).",
        "Undue influence applies only to wills, not mortgages.",
        "The charge is valid if it was registered.",
        "Sam can only complain if the partner committed a crime.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "In certain guarantee/third-party security cases (often domestic), lenders must take reasonable steps (like ensuring independent advice) when on notice of risk of undue influence; failure can render security unenforceable against the surety.",
        whyWrong: [
          "Banks can be affected where they are on notice of undue influence risk.",
          "Undue influence can apply to transactions like mortgages/charges.",
          "Registration does not cure undue influence problems.",
          "Criminality is not required; equity can set aside transactions for undue influence.",
        ],
      },
    },
    {
      topic: "Undue influence: independent legal advice (purpose)",
      q: "A bank requires a non-borrowing spouse who is offering their home as security to receive independent legal advice and sign a solicitor’s certificate. What is the main purpose?",
      choices: [
        "To increase the bank’s fees.",
        "To help the bank show it took reasonable steps to ensure the spouse entered the transaction freely and with understanding, reducing undue influence risk.",
        "To create a new mortgage automatically.",
        "To turn the charge into an easement.",
        "To avoid the need to register the charge.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Independent advice helps ensure the surety understands the nature and risks, and helps the bank rebut constructive notice of undue influence/misrepresentation.",
        whyWrong: [
          "Fees are incidental; the legal risk management is central.",
          "",
          "Advice doesn’t create a new mortgage; it supports enforceability of the security.",
          "No conversion into easement occurs.",
          "Registration is still required where applicable.",
        ],
      },
    },
    {
      topic: "Right to redeem vs early repayment charges (overview)",
      q: "A borrower wants to repay early. The mortgage allows early repayment but imposes a significant early repayment charge (ERC) for the first 3 years. Borrower says this is an unlawful clog. What is the best general approach?",
      choices: [
        "Any early repayment charge is automatically void as a clog.",
        "An ERC may be valid if it is not unconscionable or effectively prevents redemption; courts assess whether it is a genuine commercial term rather than oppressive.",
        "ERCs are valid only if the mortgage is unregistered.",
        "ERCs are valid only if the borrower is a company.",
        "ERCs are void if interest rates rise.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Charges linked to early redemption can be permitted if they don’t effectively prevent redemption and are not oppressive; context and proportionality matter.",
        whyWrong: [
          "Not all ERCs are void; many are standard and enforceable if fair.",
          "",
          "Registration is irrelevant to whether the ERC is a clog.",
          "Company status is not determinative.",
          "Interest rates rising is not the legal test.",
        ],
      },
    },
    {
      topic: "Mortgage term vs collateral contract",
      q: "A mortgage includes a clause requiring the borrower to purchase all their fuel from the lender’s petrol station for 30 years, even though the mortgage is repayable in 10 years. Borrower says it is unenforceable. What is the key issue?",
      choices: [
        "Whether the clause is a valid easement.",
        "Whether the clause is an impermissible collateral advantage/clog because it continues beyond redemption and is oppressive or unrelated to the mortgage security.",
        "Whether the clause is registered as a notice.",
        "Whether the borrower is in occupation.",
        "Whether the clause was witnessed.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A collateral advantage that extends beyond redemption or is oppressive/unconscionable may be struck down as a clog on the equity of redemption.",
        whyWrong: [
          "It is not an easement.",
          "Registration affects priority, not clog analysis.",
          "Occupation is irrelevant.",
          "Witnessing is not the key issue; fairness and effect on redemption are.",
        ],
      },
    },
    {
      topic: "Power of sale: distribution of proceeds",
      q: "A mortgagee sells the property. The sale price exceeds the mortgage debt. What must the mortgagee do with the surplus (after costs and discharge of prior claims)?",
      choices: [
        "Keep it as profit for taking risk.",
        "Pay the surplus to the mortgagor (or subsequent chargees in order, then mortgagor) after discharging the secured sums and costs.",
        "Donate it to charity.",
        "Hold it forever because it came from a mortgage sale.",
        "Pay it to the estate agent automatically.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "After paying costs and the secured debts in priority order, any surplus belongs to subsequent secured parties and then the mortgagor.",
        whyWrong: [
          "Mortgagee is not entitled to profit beyond the secured debt and allowable costs/interest.",
          "",
          "No general charity obligation exists.",
          "Surplus is not held indefinitely without entitlement.",
          "Agents may be paid as costs, but surplus is not automatically theirs.",
        ],
      },
    },
    {
      topic: "Mortgagee in possession: duty and accounting (overview)",
      q: "Bank takes possession of a rental property and collects rent from tenants. What is the best general statement of the bank’s position?",
      choices: [
        "Bank can keep all rent without accounting.",
        "A mortgagee in possession must account to the mortgagor for receipts and act with reasonable care in managing the property.",
        "Bank becomes the freehold owner immediately.",
        "Bank must hand all rent to the tenants.",
        "Bank has no duties once in possession.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A mortgagee in possession must account for income and manage the property with appropriate care; it cannot simply keep profits beyond what is due.",
        whyWrong: [
          "Accounting duties exist.",
          "",
          "Possession does not transfer ownership.",
          "Tenants don’t receive the rent as a refund; rent is payable for occupation.",
          "Duties do not disappear on possession.",
        ],
      },
    },
    {
      topic: "Remedy: appointment of receiver (overview)",
      q: "Bank wants income from a mortgaged rental property but prefers not to take possession. Which remedy is most relevant?",
      choices: [
        "Appointment of a receiver to collect income and manage property under mortgage powers",
        "Overreaching",
        "Forfeiture",
        "Prescription",
        "Rectification",
      ],
      correct: 0,
      explain: {
        whyRight:
          "A receiver can be appointed under mortgage powers to collect rent/manage property without the mortgagee taking possession itself.",
        whyWrong: [
          "",
          "Overreaching is about trust beneficial interests.",
          "Forfeiture is lease termination for breach.",
          "Prescription is long-use acquisition of easements.",
          "Rectification is correcting the register.",
        ],
      },
    },
    {
      topic: "Equitable mortgage: deposit of title deeds (historic concept)",
      q: "In an unregistered land scenario, a borrower hands the lender the original title deeds intending to create security, but no deed mortgage is executed. What is the most accurate high-level classification?",
      choices: [
        "A legal mortgage automatically.",
        "Potentially an equitable mortgage/security arrangement (depending on formalities and intention), not a legal mortgage.",
        "A lease because deeds were handed over.",
        "A restrictive covenant.",
        "An easement by necessity.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Historically, deposit of title deeds with intent to secure could create equitable security; it would not be a legal mortgage without the correct formalities.",
        whyWrong: [
          "Legal mortgage requires deed/formalities.",
          "",
          "Handing over deeds does not create a lease.",
          "Not a covenant.",
          "Not an easement.",
        ],
      },
    },
    {
      topic: "Priority: registered land charges and overriding interests",
      q: "A buyer purchases registered land subject to a registered mortgage (legal charge). The buyer says they take free because they did not know about it. What is correct?",
      choices: [
        "Correct: lack of knowledge means no binding effect.",
        "Incorrect: a registered charge binds purchasers regardless of actual knowledge; priority follows the register.",
        "Correct if the buyer paid full market value.",
        "Correct if the charge is more than 10 years old.",
        "Incorrect only if the mortgagee is in possession.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registered charges are interests entered on the register and bind purchasers; knowledge is not required because the register gives constructive notice.",
        whyWrong: [
          "Actual knowledge is not required.",
          "Price paid does not negate register priority.",
          "Age does not remove a registered charge automatically.",
          "",
          "Mortgagee possession is not the condition for binding effect of a registered charge.",
        ],
      },
    },
    {
      topic: "Equitable charge vs legal charge (overview)",
      q: "A borrower signs a contract promising to grant Bank a charge, but the legal charge is never executed/registered. Bank claims an interest in the land. What is the best analysis?",
      choices: [
        "Bank has no rights at all.",
        "Bank may have an equitable charge/interest if the contract is specifically enforceable, but it will need proper protection against third parties.",
        "Bank automatically has a legal charge.",
        "Bank becomes the owner.",
        "Bank’s interest overrides automatically because the debt is large.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A specifically enforceable agreement to create security can generate an equitable interest, which then requires protection (e.g., notice/land charge) to bind purchasers.",
        whyWrong: [
          "Equity can recognise enforceable security agreements.",
          "Legal charge needs formalities and (in registered land) registration.",
          "No transfer of ownership occurs.",
          "Debt size does not create overriding status.",
        ],
      },
    },
    {
      topic: "Redemption and discharge (registered land)",
      q: "Borrower repays the mortgage in full. What must usually happen to clear the title in registered land?",
      choices: [
        "Nothing; repayment automatically deletes the charge from the register.",
        "The charge must be formally discharged and the register updated to remove the charge entry.",
        "Borrower must transfer the freehold back to themselves.",
        "Borrower must register a land charge.",
        "Borrower must obtain a possession order.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Repayment gives the right to discharge, but the register must be updated (discharge/removal) so the title shows the mortgage is released.",
        whyWrong: [
          "The register is not automatically updated without formal discharge steps.",
          "",
          "No transfer back is needed; the borrower already owns the estate subject to the charge.",
          "Land charges are for unregistered land.",
          "Possession orders are unrelated to discharge.",
        ],
      },
    },
    {
      topic: "Equitable right to redeem vs contractual term",
      q: "A mortgage contract says: 'If you miss any payment, you lose the property permanently to the bank.' Borrower misses one payment. What is the best analysis?",
      choices: [
        "Valid: default automatically transfers ownership.",
        "Invalid as a penalty/clog: the lender’s remedy is to enforce security (possession/sale), and the mortgagor retains equity of redemption until properly foreclosed/sold under lawful process.",
        "Valid only if the bank serves written notice.",
        "Valid if the mortgage is over £200,000.",
        "Valid if it is a first mortgage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Mortgage law does not allow automatic confiscation on default. The mortgagor’s equity of redemption is protected; enforcement must follow lawful remedies (sale/possession etc.).",
        whyWrong: [
          "Automatic ownership transfer on default is not generally permitted.",
          "Notice does not make a confiscation clause valid.",
          "Debt size is irrelevant.",
          "Being a first mortgage does not validate an unlawful term.",
        ],
      },
    },
    {
      topic: "Foreclosure (overview)",
      q: "Bank wants to become the absolute owner of the mortgaged property instead of selling it, on the basis the borrower cannot repay. Which remedy is this?",
      choices: [
        "Foreclosure",
        "Overreaching",
        "Specific performance",
        "Prescription",
        "Rectification",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Foreclosure is the remedy by which the mortgagee can (in principle) obtain title to the property, extinguishing the equity of redemption, subject to court control and often replaced in practice by sale.",
        whyWrong: [
          "",
          "Overreaching concerns trust interests.",
          "Specific performance is contract enforcement, not mortgage remedy to take ownership.",
          "Prescription concerns easements.",
          "Rectification concerns register errors.",
        ],
      },
    },
    {
      topic: "Home rights and mortgages (overview spotting)",
      q: "Alex is not on the title but lives in the home. Jamie, the owner, mortgages the home to Bank without telling Alex. Alex later claims their 'home rights' should bind the bank. What is the best high-level risk point?",
      choices: [
        "Home rights automatically defeat any mortgage.",
        "Home rights can sometimes be protected (e.g., by registration) and may affect priorities, but do not automatically override a properly registered legal charge.",
        "Home rights are the same as an easement.",
        "Home rights automatically make Alex a co-owner.",
        "Home rights apply only in unregistered land.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Home rights can be relevant and often need protection; they don’t automatically trump a registered legal charge, and priority depends on the relevant regime and timing/protection.",
        whyWrong: [
          "They do not automatically defeat mortgages.",
          "They are not easements.",
          "They do not automatically confer ownership.",
          "They are not limited only to unregistered land contexts.",
        ],
      },
    },
    {
      topic: "Mortgage fraud / misrepresentation (bank protections overview)",
      q: "A borrower claims the bank’s agent misrepresented the risks of the mortgage product. Borrower seeks to set aside the mortgage. What is the best general statement?",
      choices: [
        "Misrepresentation can never affect a mortgage.",
        "Misrepresentation can provide remedies (rescission/damages) but rescission may be barred where third-party rights intervene; outcomes depend on facts and available remedies.",
        "The only remedy is criminal prosecution.",
        "The bank always loses the charge automatically.",
        "The mortgage becomes an easement.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Misrepresentation can give civil remedies, but unwinding a mortgage may be complex due to restitution and third-party interests; often damages are the practical remedy.",
        whyWrong: [
          "Misrepresentation can affect enforceability/remedies.",
          "",
          "Criminal routes may exist but don’t replace civil remedies.",
          "Automatic loss is not guaranteed; remedy depends on facts and bars to rescission.",
          "No conversion occurs.",
        ],
      },
    },
    {
      topic: "Priority: second charge and borrower’s sale",
      q: "Borrower sells the property without paying off the second charge. Buyer registers as proprietor. The second charge was registered on the title. What is most accurate?",
      choices: [
        "Buyer takes free because ownership changed.",
        "Buyer takes subject to the registered second charge unless it is discharged/redeemed, because it remains on title.",
        "Second charge disappears automatically on sale.",
        "Second charge binds only if the second lender is in occupation.",
        "Second charge becomes a restrictive covenant.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Registered charges remain binding and follow the land; a purchaser takes subject unless the charge is redeemed and removed from the register.",
        whyWrong: [
          "Change of ownership does not remove registered charges.",
          "",
          "Charges do not disappear automatically on sale.",
          "Occupation is irrelevant for registered charges.",
          "No conversion occurs.",
        ],
      },
    },
    {
      topic: "Mortgage and leases: priority overview",
      q: "Landlord mortgages the freehold to Bank, then grants Tenant a 10-year lease without Bank’s consent. On default, Bank enforces. What is the key issue?",
      choices: [
        "The lease automatically has priority because tenants are protected.",
        "Priority between the mortgage and later lease: the earlier mortgage typically has priority, so the lease may be postponed unless protected/authorised under the mortgage terms and applicable rules.",
        "The mortgage is void because the landlord granted a lease.",
        "The bank must become the tenant.",
        "The lease converts into a freehold.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The central issue is priority. An earlier mortgage commonly ranks ahead of a later lease, particularly if granted in breach of mortgage conditions; enforceability depends on rules and any bank consent.",
        whyWrong: [
          "Tenants are not automatically priority-protected against earlier mortgages.",
          "A lease does not void a prior mortgage.",
          "",
          "The bank does not become a tenant by enforcing.",
          "No conversion occurs.",
        ],
      },
    },
    {
      topic: "Mortgage and co-ownership: overreaching conditions",
      q: "Two trustees own a house on trust. One trustee alone grants a legal charge to Bank. Later, the property is sold by both trustees to Buyer. Can the buyer overreach the bank’s charge by paying the price to both trustees?",
      choices: [
        "Yes, overreaching removes all interests including charges.",
        "No, overreaching is about beneficial interests under a trust and does not generally remove a legal charge; the charge must be redeemed/discharged or remains binding according to priority.",
        "Yes, because there are two trustees on the sale.",
        "Yes, but only if the beneficiary is in occupation.",
        "No, because a charge is not a proprietary interest.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Overreaching typically affects equitable beneficial interests, not legal mortgages/charges. Charges are dealt with by redemption/discharge and priority rules.",
        whyWrong: [
          "Overreaching does not wipe out charges.",
          "Two trustees on sale helps overreach beneficial interests, not remove charges.",
          "Occupation is not relevant to whether a charge is overreached.",
          "A charge is a proprietary interest.",
        ],
      },
    },
    {
      topic: "Mortgagee’s remedies: choose",
      q: "A lender wants to recover arrears with minimal disruption and prefers not to sell the property. Which remedy is most aligned with obtaining income rather than capital?",
      choices: [
        "Power of sale",
        "Appointment of receiver to collect rent/income",
        "Foreclosure",
        "Adverse possession",
        "Rectification",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A receiver can be appointed to collect income and manage the property, allowing recovery from rents without immediate sale.",
        whyWrong: [
          "Sale is capital realisation, not primarily income collection.",
          "",
          "Foreclosure aims at ownership transfer, not income recovery.",
          "Adverse possession is unrelated.",
          "Rectification is unrelated.",
        ],
      },
    },
    {
      topic: "Equity: postponement by conduct (overview)",
      q: "Bank1 has a first registered charge. It tells Bank2 in writing that Bank2 will have priority if it lends. Bank2 lends and registers a second charge. Later Bank1 claims priority anyway. What equitable doctrine might Bank2 argue?",
      choices: [
        "Proprietary estoppel / equitable postponement based on representation",
        "Wheeldon v Burrows",
        "Severance",
        "Prescription",
        "Forfeiture",
      ],
      correct: 0,
      explain: {
        whyRight:
          "If a prior chargee induces a later lender to act on a representation about priority, equity may postpone the prior interest (e.g., via estoppel/inequitable conduct) depending on facts.",
        whyWrong: [
          "",
          "Wheeldon v Burrows is about implied easements.",
          "Severance is co-ownership.",
          "Prescription is long use.",
          "Forfeiture is leases.",
        ],
      },
    },
    {
      topic: "Mortgage and improvements (waste / insurance overview)",
      q: "A borrower wants to demolish the mortgaged house and rebuild. Bank refuses consent. Borrower argues: 'It’s my property, I can do what I like.' What is the best high-level response?",
      choices: [
        "Borrower can always do anything because they are registered proprietor.",
        "Bank’s security interest means it can restrict actions that materially prejudice the security; demolition may breach mortgage terms and justify enforcement if it endangers the lender’s security.",
        "Bank becomes owner and can demolish itself.",
        "Bank must consent if borrower promises to rebuild.",
        "Demolition automatically discharges the mortgage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The mortgagee’s interest is to preserve the security’s value. Actions that materially prejudice the security can breach terms and trigger remedies.",
        whyWrong: [
          "Ownership is subject to the mortgage; security restrictions apply.",
          "Mortgagee is not the owner by default.",
          "No general duty to consent exists.",
          "Demolition does not discharge the charge.",
        ],
      },
    },
    {
      topic: "Sale by mortgagor subject to charge",
      q: "Borrower sells a property while a registered mortgage remains on title. Buyer does not redeem the mortgage and still registers as proprietor. What is the most accurate outcome?",
      choices: [
        "The buyer becomes free of the mortgage because they registered first.",
        "The buyer takes the title subject to the existing registered mortgage, which remains enforceable against the land.",
        "The mortgage becomes a personal debt only.",
        "The mortgage is void unless the bank signs the transfer.",
        "The buyer automatically becomes personally liable for the borrower’s debt.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A registered mortgage binds the land. A buyer can register as proprietor, but the charge remains unless redeemed/discharged.",
        whyWrong: [
          "Registration as proprietor does not remove prior registered charges.",
          "",
          "The mortgage remains proprietary security, not merely personal.",
          "The bank’s consent may be needed for discharge, but the mortgage is not void without signature on transfer.",
          "Personal liability depends on contract/assumption; it is not automatic.",
        ],
      },
    },
    {
      topic: "Surety vs borrower (spotting)",
      q: "Leah agrees to give a charge over her home to secure her brother’s business loan from Bank. Leah will not receive any of the loan money. What is Leah’s role?",
      choices: [
        "Borrower",
        "Surety/third-party security provider",
        "Tenant",
        "Trustee",
        "Mortgagee",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Leah is providing security for another’s debt; she is a surety/third-party chargor, not the borrower of the money.",
        whyWrong: [
          "The borrower is Leah’s brother.",
          "",
          "This is not a tenancy.",
          "Trustee status is not implied here.",
          "Mortgagee is the lender (Bank).",
        ],
      },
    },
    {
      topic: "Undue influence: bank on inquiry (spotting)",
      q: "Which situation most likely puts a bank 'on inquiry' requiring it to take reasonable steps (e.g., independent advice) before accepting security?",
      choices: [
        "A sole borrower mortgages their own property to fund their own business.",
        "A spouse provides security over their home for the other spouse’s business debts with no direct benefit to the security-giver.",
        "A company grants a debenture over company assets for its own borrowing.",
        "A borrower refinances their mortgage with a new lender for a better rate.",
        "A cash buyer buys a property without any mortgage.",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Third-party domestic surety situations (one partner securing the other’s debts without direct benefit) commonly put lenders on notice of undue influence risk.",
        whyWrong: [
          "Own borrowing is lower risk for undue influence inquiry (though facts can vary).",
          "Company security for its own debts is a commercial context with different risk profile.",
          "Refinancing for own benefit is typically not the classic surety undue influence scenario.",
          "No mortgage, so no lender inquiry issue.",
        ],
      },
    },
  ];

  window.quizData = {
    title: "Land Law — Chapter 8: Mortgages",
    subtitle:
      "30 SQE-style scenario MCQs (5 options each) in quizDataSchema format",
    questions: questions,
  };
})();
