(() => {
  const questions = [
    {
      topic: "SDLT – filing and payment deadline",
      q: "On a straightforward purchase of a freehold house in England, by when must the SDLT return be filed and any SDLT paid (assuming no special filing arrangements)?",
      choices: [
        "Within 7 days of exchange of contracts",
        "Within 14 days after the effective date of the transaction",
        "Within 30 days after completion",
        "By the end of the tax year",
        "Within 60 days after completion",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The SDLT return and any SDLT due must be dealt with within 14 days after the transaction’s effective date.",
        whyWrong: [
          "Exchange is not the standard trigger for the statutory filing/payment deadline.",
          "",
          "30 days is not the current general SDLT deadline.",
          "There is no ‘tax-year end’ SDLT filing rule for standard transactions.",
          "60 days is commonly associated with CGT reporting on UK residential property disposals, not SDLT.",
        ],
      },
    },
    {
      topic: "SDLT – residential rates (single main property)",
      q: "Your client buys their only residential property in England for £295,000. Ignoring any reliefs, what SDLT is due?",
      choices: ["£0", "£4,750", "£7,250", "£9,500", "£12,250"],
      correct: 1,
      explain: {
        whyRight:
          "At current residential rates: 0% to £125k = £0; 2% on £125k = £2,500; 5% on £45k = £2,250; total £4,750.",
        whyWrong: [
          "There is SDLT because the price exceeds the £125,000 zero-rate band for standard buyers.",
          "",
          "£7,250 would overstate the tax by applying too much at 5% or mis-banding.",
          "£9,500 incorrectly doubles the correct sum.",
          "£12,250 wrongly applies higher bands that are not reached at £295,000.",
        ],
      },
    },
    {
      topic: "SDLT – residential band thresholds",
      q: "For a buyer purchasing their only residential property in England (no reliefs), which band is charged at 5%?",
      choices: [
        "The portion from £125,001 to £250,000",
        "The portion from £250,001 to £925,000",
        "The portion from £925,001 to £1.5 million",
        "The portion above £1.5 million",
        "The portion from £0 to £125,000",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Under the current residential SDLT table, the 5% rate applies to the slice from £250,001 to £925,000.",
        whyWrong: [
          "£125,001–£250,000 is charged at 2%.",
          "",
          "£925,001–£1.5m is charged at 10%.",
          "Above £1.5m is charged at 12%.",
          "£0–£125,000 is charged at 0%.",
        ],
      },
    },
    {
      topic: "SDLT – first-time buyer relief (eligibility cap)",
      q: "A couple (both first-time buyers) buy a house in England for £510,000 as their first home. How does first-time buyer SDLT relief apply?",
      choices: [
        "Relief still applies: 0% up to £300,000 and 5% on the rest",
        "Relief still applies: 0% up to £425,000 and 5% on the rest",
        "Relief does not apply because the price exceeds the relief cap",
        "Relief applies only if they are UK residents",
        "Relief applies only if the seller is a developer",
      ],
      correct: 2,
      explain: {
        whyRight:
          "First-time buyer relief is not available if the purchase price is over £500,000; the buyers must use the normal residential rates instead.",
        whyWrong: [
          "That structure applies only where the price is within the relief limit.",
          "Those thresholds are not the current first-time buyer relief thresholds.",
          "",
          "Residence can affect surcharges, but the first-time buyer relief cap is a separate rule.",
          "Seller identity is irrelevant to first-time buyer relief.",
        ],
      },
    },
    {
      topic: "SDLT – first-time buyer relief (rates)",
      q: "A first-time buyer purchases a property in England for £450,000 (qualifying for first-time buyer relief). What SDLT is due?",
      choices: ["£0", "£5,000", "£7,500", "£10,000", "£12,500"],
      correct: 2,
      explain: {
        whyRight:
          "First-time buyer relief: 0% up to £300,000, then 5% on the portion £300,001–£500,000. Here: 5% of £150,000 = £7,500.",
        whyWrong: [
          "£0 would only be correct if the price were £300,000 or less under the relief.",
          "£5,000 miscalculates the taxable slice or applies the wrong rate.",
          "",
          "£10,000 would be correct at a £500,000 price (5% of £200,000), not £450,000.",
          "£12,500 misapplies bands/rates.",
        ],
      },
    },
    {
      topic: "SDLT – higher rates for additional dwellings",
      q: "Your client already owns a flat and is buying a second residential property in England. What is the general rule for the higher rates surcharge on additional properties?",
      choices: [
        "An extra 1% on top of standard residential SDLT rates",
        "An extra 2% on top of standard residential SDLT rates",
        "An extra 3% on top of standard residential SDLT rates",
        "An extra 5% on top of standard residential SDLT rates",
        "No surcharge applies if the buyer is an individual",
      ],
      correct: 3,
      explain: {
        whyRight:
          "Where buying an additional residential property, the higher rates are generally 5% on top of the standard residential SDLT rates.",
        whyWrong: [
          "1% is not the general higher rates uplift.",
          "2% is commonly associated with the non-resident surcharge (if applicable), not the additional dwellings uplift.",
          "3% is not the current additional dwellings uplift.",
          "",
          "Individuals can still be subject to higher rates when they will own more than one residential property.",
        ],
      },
    },
    {
      topic: "SDLT – replacing main residence (36-month rule)",
      q: "Your client buys a new home before selling their existing main residence, so they pay higher rates at completion. They sell the old main residence 20 months later. What is the usual position?",
      choices: [
        "No refund is possible because higher rates were correctly paid at completion",
        "A refund is usually available because the previous main residence was sold within 36 months",
        "A refund is only available if the old residence sold within 12 months",
        "A refund is only available if they never let the old property",
        "Higher rates never apply when buying a new main residence",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where the purchase replaces a main residence and the former main residence is sold within 36 months of completing the new purchase, the extra higher rates element is usually refundable.",
        whyWrong: [
          "A later sale within the permitted period can enable a refund even though payment at completion was required.",
          "",
          "The usual period is 36 months, not 12 months.",
          "Letting is not the core trigger for the refund rule described here.",
          "Higher rates can apply on completion if the old main residence has not yet been sold.",
        ],
      },
    },
    {
      topic: "SDLT – non-UK resident surcharge (test)",
      q: "A buyer is treated as ‘not a UK resident’ for SDLT surcharge purposes if they were not present in the UK for at least how many days during the 12 months before the purchase?",
      choices: ["90 days", "120 days", "150 days", "183 days", "365 days"],
      correct: 3,
      explain: {
        whyRight:
          "The SDLT non-resident test uses a 183-day presence threshold over the 12 months before the purchase.",
        whyWrong: [
          "90 days is not the statutory presence test used here.",
          "120 days is not the statutory presence test used here.",
          "150 days is not the statutory presence test used here.",
          "",
          "A full 365-day presence is not required to be treated as UK resident for this SDLT test.",
        ],
      },
    },
    {
      topic: "SDLT – non-UK resident surcharge (rate)",
      q: "A non-UK resident buyer purchases a residential property in England and is subject to the non-resident surcharge. What is the usual surcharge rate (in addition to any other SDLT that applies)?",
      choices: ["1%", "2%", "3%", "5%", "10%"],
      correct: 1,
      explain: {
        whyRight:
          "Non-UK resident buyers usually pay a 2% SDLT surcharge on residential purchases (in addition to any other applicable rates/surcharges).",
        whyWrong: [
          "1% is not the usual non-resident surcharge rate.",
          "",
          "3% is not the current non-resident surcharge rate.",
          "5% is the current additional dwellings uplift (where applicable), not the non-resident surcharge.",
          "10% is not the non-resident surcharge rate.",
        ],
      },
    },
    {
      topic: "SDLT – mixed-use property",
      q: "Your client buys a property comprising a shop with a self-contained flat above it in one transaction in England. Which SDLT rate set generally applies?",
      choices: [
        "Residential SDLT rates, because there is a dwelling",
        "Non-residential/mixed rates, because the property has both residential and non-residential elements",
        "Zero SDLT, because it is ‘mixed’",
        "Residential rates plus the 5% additional dwellings surcharge automatically",
        "Non-residential rates only if the flat is let at completion",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A property with both residential and non-residential elements is treated as mixed-use and generally uses the non-residential/mixed SDLT rates.",
        whyWrong: [
          "The presence of a dwelling does not automatically make it a purely residential transaction if there are non-residential elements.",
          "",
          "Mixed-use is not exempt from SDLT.",
          "Higher rates for additional dwellings depend on ownership position and whether residential rates apply; mixed-use typically uses non-residential/mixed rates.",
          "Letting at completion is not the test for mixed-use classification.",
        ],
      },
    },
    {
      topic: "SDLT – non-residential freehold/transfer rates",
      q: "A company buys a freehold office building in England for £275,000. Ignoring any reliefs, what SDLT is due (non-residential rates)?",
      choices: ["£0", "£2,000", "£3,250", "£4,000", "£6,250"],
      correct: 2,
      explain: {
        whyRight:
          "Non-residential rates: 0% up to £150,000 = £0; 2% on the next £100,000 = £2,000; 5% on £25,000 = £1,250; total £3,250.",
        whyWrong: [
          "£0 would only apply if the consideration were £150,000 or less (subject to return rules).",
          "£2,000 ignores the 5% slice above £250,000.",
          "",
          "£4,000 overstates the correct amount.",
          "£6,250 applies incorrect rates/bands for this consideration.",
        ],
      },
    },
    {
      topic: "SDLT – non-residential lease: premium + rent (NPV)",
      q: "Your client is granted a new 10-year commercial lease in England. They pay a premium and also annual rent. For SDLT purposes, what is the correct approach?",
      choices: [
        "Pay SDLT only on the premium; rent is ignored",
        "Pay SDLT only on the rent’s NPV; premium is ignored",
        "Pay SDLT separately on the premium and on the rent’s NPV, then add the two amounts",
        "Pay residential SDLT rates because it is a lease",
        "No SDLT is due on leases",
      ],
      correct: 2,
      explain: {
        whyRight:
          "For a new non-residential/mixed lease, SDLT is calculated on (i) the lease premium using non-residential bands and (ii) the net present value (NPV) of rent using the NPV table, then the amounts are added.",
        whyWrong: [
          "Rent can attract SDLT via the NPV calculation on new leases.",
          "Premium can be chargeable consideration and is not ignored.",
          "",
          "Commercial leases do not default to residential rates.",
          "SDLT can apply to leases (premium and/or rent NPV) depending on thresholds.",
        ],
      },
    },
    {
      topic: "SDLT – non-residential lease: NPV thresholds",
      q: "For a new non-residential lease in England, if the rent NPV is less than £150,000, what SDLT is payable on the rent element?",
      choices: [
        "0%",
        "1% on the whole NPV",
        "2% on the whole NPV",
        "5% on the whole NPV",
        "A fixed £100 charge",
      ],
      correct: 0,
      explain: {
        whyRight:
          "No SDLT is payable on the rent element if the NPV is less than £150,000.",
        whyWrong: [
          "",
          "1% applies only to the slice above £150,000 (up to £5m), not to an NPV below £150,000.",
          "2% applies only to the slice above £5m.",
          "5% is not a rent-NPV rate in the non-residential lease table.",
          "There is no fixed £100 SDLT charge for this scenario.",
        ],
      },
    },
    {
      topic: "SDLT – non-residential lease: rent NPV bands",
      q: "A new commercial lease has an NPV of rent of £6,000,000. What SDLT rates apply to the rent NPV element?",
      choices: [
        "0% on the first £150,000; 1% on £150,001–£5,000,000; 2% on the portion above £5,000,000",
        "0% on the first £125,000; 2% on the next £125,000; 5% on the remainder",
        "0% on the whole NPV because rent is exempt",
        "1% on the whole NPV because it is commercial rent",
        "2% on the whole NPV because it exceeds £5,000,000",
      ],
      correct: 0,
      explain: {
        whyRight:
          "For non-residential lease rent NPV: 0% up to £150,000; 1% on the slice £150,001–£5,000,000; 2% on the slice above £5,000,000.",
        whyWrong: [
          "",
          "Those are residential purchase bands, not the non-residential rent NPV table.",
          "Rent can be chargeable via the SDLT NPV mechanism on new leases.",
          "The 1% rate is not applied to the whole NPV if it exceeds the thresholds; it is a slice system.",
          "2% applies only to the slice above £5,000,000, not the whole NPV.",
        ],
      },
    },
    {
      topic: "SDLT – assigned (existing) non-residential lease",
      q: "Your client takes an assignment of an existing commercial lease (not the grant of a new lease). For SDLT purposes, which is generally correct?",
      choices: [
        "SDLT is charged on the rent NPV only",
        "SDLT is charged on the consideration paid for the assignment; rent NPV is not charged as it is not a new lease",
        "SDLT is charged on both the premium and rent NPV as usual",
        "SDLT is never payable on assignments",
        "Residential SDLT rates apply because a leasehold interest is being transferred",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For an existing (assigned) lease, SDLT is generally charged on the price/consideration for the assignment; the rent NPV charge is for new leasehold sales/transfers.",
        whyWrong: [
          "Rent NPV charging is associated with new leases, not simple assignments of existing leases.",
          "",
          "The ‘premium + NPV’ approach is for new leasehold transactions.",
          "Assignments can be chargeable for SDLT depending on consideration.",
          "Commercial lease assignments do not default to residential SDLT rates.",
        ],
      },
    },
    {
      topic: "SDLT – residential lease: premium + rent threshold",
      q: "A buyer is granted a new residential lease in England and pays a premium. They also pay rent over the term. When does SDLT potentially apply to the rent element for residential leases?",
      choices: [
        "Never—residential rent is ignored for SDLT",
        "Only if the net present value (NPV) of rent exceeds £125,000, charged at 1% on the portion above £125,000",
        "Only if the annual rent exceeds £1,000",
        "Only if the lease term exceeds 7 years",
        "Always, at 5% of the NPV",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For new residential leases, SDLT can apply to the rent element if the rent NPV exceeds £125,000, at 1% on the portion above £125,000.",
        whyWrong: [
          "Residential rent can be relevant via the NPV mechanism for new leases (subject to threshold).",
          "",
          "There is no £1,000 annual rent trigger in this SDLT rule.",
          "The key trigger is the NPV threshold, not simply lease length.",
          "5% is not the residential lease rent-NPV rate.",
        ],
      },
    },
    {
      topic: "SDLT – residential lease: assigned lease",
      q: "A buyer takes an assignment of an existing residential lease in England and pays a price for the lease. Which statement is generally correct?",
      choices: [
        "They must calculate SDLT on both the price and the rent NPV",
        "They pay SDLT on the lease price/premium using residential rates; the rent NPV charge does not apply to existing assigned leases",
        "They pay SDLT only on the rent NPV",
        "They do not need to file an SDLT return for assigned leases",
        "Residential lease assignments are always exempt",
      ],
      correct: 1,
      explain: {
        whyRight:
          "For assigned (existing) residential leases, SDLT is generally calculated on the consideration for the lease interest (the price/premium) using the residential rates; the rent NPV charge described applies to new leases.",
        whyWrong: [
          "The rent NPV charge in the guidance is framed for new leasehold sales/transfers, not existing assigned leases.",
          "",
          "Rent NPV-only is incorrect where consideration is paid for the lease.",
          "An SDLT return may still be required depending on the transaction; assignments are not automatically outside the regime.",
          "There is no blanket exemption for residential lease assignments.",
        ],
      },
    },
    {
      topic: "SDLT – linked transactions: core definition",
      q: "Which situation is most likely to be treated as ‘linked transactions’ for SDLT?",
      choices: [
        "Two entirely unrelated purchases by the same buyer from different sellers",
        "Two purchases between the same buyer and seller that form part of a single arrangement or scheme",
        "Two purchases by friends on the same day",
        "A purchase and then, years later, an unrelated purchase from someone else",
        "A single purchase funded by two lenders",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Transactions are linked where there is more than one transaction between the same buyer and seller (or connected persons) and they are part of a single arrangement/scheme or series.",
        whyWrong: [
          "Linked transactions focus on same buyer/seller (or connected persons) and an arrangement/series, not merely the same buyer in isolation.",
          "",
          "Friendship between buyers is not the test.",
          "A different seller with no connecting scheme is unlikely to be ‘linked’ on these facts.",
          "Funding structure does not make a single transaction ‘linked’.",
        ],
      },
    },
    {
      topic: "SDLT – linked transactions: effect of linking",
      q: "If two transactions are treated as linked for SDLT, what is the general effect on calculation?",
      choices: [
        "Each transaction is taxed separately with no interaction",
        "SDLT is calculated on the total value of all linked transactions, potentially pushing the buyer into higher bands",
        "Only the most expensive transaction is taxed",
        "Only the last transaction in time is taxed",
        "All linked transactions become exempt",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where transactions are linked, SDLT is calculated by reference to the total value/consideration of all linked transactions, which can produce a higher overall SDLT outcome than separate treatment.",
        whyWrong: [
          "Linked treatment specifically prevents purely separate banding in many cases.",
          "",
          "There is no rule to tax only the most expensive deal.",
          "There is no rule to tax only the last deal.",
          "Linked status does not create an exemption.",
        ],
      },
    },
    {
      topic: "SDLT – linked transactions: connected persons",
      q: "A developer sells a house to Buyer A and, as part of the same overall deal, sells the garden next door to Buyer A’s spouse under a separate contract. Which is most accurate?",
      choices: [
        "Not linked because there are two contracts",
        "Not linked because the spouse is a different legal person",
        "Likely linked because the transactions involve connected persons and are part of a single arrangement",
        "Automatically exempt because it is ‘garden land’",
        "Always treated as non-residential because land is involved",
      ],
      correct: 2,
      explain: {
        whyRight:
          "HMRC can treat connected persons as the same buyer/seller and treat multiple contracts as linked if they form part of one deal/arrangement.",
        whyWrong: [
          "Separate contracts can still be linked if they are part of a single arrangement.",
          "Connected persons (including spouses) can cause transactions to be treated as linked.",
          "",
          "Garden land is not automatically exempt; classification depends on the facts (including whether it is garden/grounds of a dwelling).",
          "Land being involved does not automatically make it non-residential.",
        ],
      },
    },
    {
      topic: "SDLT – MDR abolition (operative date)",
      q: "Multiple Dwellings Relief (MDR) for SDLT in England and Northern Ireland was abolished for transactions with an effective date on or after:",
      choices: [
        "1 January 2024",
        "6 March 2024",
        "1 June 2024",
        "1 April 2025",
        "27 October 2021",
      ],
      correct: 2,
      explain: {
        whyRight:
          "MDR was abolished for transactions with an effective date on or after 1 June 2024 (subject to transitional rules).",
        whyWrong: [
          "That is not the operative date for MDR abolition.",
          "6 March 2024 is relevant to the transitional contract-exchange cut-off, not the operative abolition date.",
          "",
          "1 April 2025 is relevant to certain SDLT rate/threshold changes, not MDR abolition.",
          "27 October 2021 is relevant to the CGT 60-day property reporting change, not MDR.",
        ],
      },
    },
    {
      topic: "SDLT – MDR transitional protection (exchange cut-off)",
      q: "A buyer exchanged contracts to buy two dwellings on 4 March 2024, completes on 10 June 2024, and the contract was not varied after exchange. Which statement best reflects the MDR transitional rules?",
      choices: [
        "MDR is unavailable because completion is after 1 June 2024",
        "MDR remains available because the contract was entered into on or before 6 March 2024 and not varied",
        "MDR remains available only if completion was before 6 March 2024",
        "MDR remains available only if the buyer is a company",
        "MDR is available only for mixed-use purchases",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Even after 1 June 2024, MDR can still apply where contracts were exchanged on or before 6 March 2024 and not varied (and other transitional conditions are satisfied).",
        whyWrong: [
          "The transitional protection can preserve MDR despite completion after 1 June 2024.",
          "",
          "The relevant cut-off is exchange on or before 6 March 2024 (not completion).",
          "The transitional rule is not limited to companies.",
          "MDR was for multiple dwellings; mixed-use is a different concept.",
        ],
      },
    },
    {
      topic: "SDLT – six or more dwellings rule",
      q: "A buyer acquires 6 or more residential properties in a single transaction in England. Which SDLT rate set is typically used?",
      choices: [
        "Residential rates only, with first-time buyer relief if available",
        "Non-residential rates, as the transaction can be treated as non-residential for SDLT rate purposes",
        "Zero SDLT because it is ‘bulk’",
        "Only the 5% additional property surcharge applies",
        "Council tax rules replace SDLT",
      ],
      correct: 1,
      explain: {
        whyRight:
          "A purchase of 6 or more residential properties in one transaction is treated as non-residential for SDLT rate purposes in the SDLT guidance on non-residential property.",
        whyWrong: [
          "First-time buyer relief is not designed for bulk acquisitions and the guidance treats 6+ dwellings as non-residential for rates.",
          "",
          "Bulk purchases are not automatically SDLT-free.",
          "The additional property surcharge is not the sole charge; SDLT is calculated under the applicable regime.",
          "Council tax is unrelated to SDLT liability.",
        ],
      },
    },
    {
      topic: "SDLT – return requirement under £150,000 (non-res/mixed)",
      q: "A buyer acquires a small non-residential freehold in England for £120,000. SDLT is £0 under the non-residential rates. What is the general filing position?",
      choices: [
        "No SDLT return is ever required if the tax is £0",
        "An SDLT return is still required for most transactions under £150,000",
        "A return is required only if the buyer is a company",
        "A return is required only if the buyer requests a title number",
        "A return is required only if VAT is payable",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Even where no SDLT is payable, an SDLT return is still required for most transactions under £150,000 (non-residential/mixed), subject to limited exceptions.",
        whyWrong: [
          "£0 tax does not automatically mean no return is required.",
          "",
          "Company status is not the general trigger for the return requirement.",
          "Land Registry/admin steps do not determine the statutory SDLT return requirement.",
          "VAT position is separate from SDLT return obligations.",
        ],
      },
    },
    {
      topic: "VAT – default liability of land/buildings supplies",
      q: "A landlord grants a lease of a commercial unit and has not opted to tax the property. What is the default VAT position for supplies of land and buildings (like leasing or renting), in general terms?",
      choices: [
        "They are normally exempt from VAT, meaning no VAT is charged but input VAT recovery is usually restricted",
        "They are always standard-rated at 20%",
        "They are always zero-rated",
        "They are outside the scope of VAT entirely",
        "They are always reduced-rated",
      ],
      correct: 0,
      explain: {
        whyRight:
          "Supplies of land and buildings (including leasing/renting) are normally exempt, which typically blocks recovery of input VAT on related costs unless an option to tax applies.",
        whyWrong: [
          "",
          "Commercial property supplies are not always standard-rated; exemption is the default unless the exemption is waived/varied via option to tax or other rules.",
          "Zero-rating is not the default for commercial leases.",
          "They are generally within VAT law; the usual treatment is exemption rather than ‘outside scope’.",
          "Reduced rate is not the default position for commercial leasing.",
        ],
      },
    },
    {
      topic: "VAT – effect of opting to tax",
      q: "A VAT-registered property owner opts to tax an office building. What is the main effect of the option to tax on their supplies of that interest?",
      choices: [
        "Their supplies remain exempt, but they can now reclaim input VAT",
        "Their supplies are normally standard-rated, and they will normally be able to recover VAT they incur in making those supplies",
        "Their supplies become zero-rated automatically",
        "They must deregister for VAT",
        "The option to tax applies only to residential lettings",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Opting to tax generally makes supplies of the opted interest (sale/lease/rent) standard-rated, and usually enables input VAT recovery on related costs.",
        whyWrong: [
          "Exemption usually blocks recovery; the point of opting is to move supplies to taxable (standard-rated) treatment.",
          "",
          "Zero-rating is not the general consequence of an option to tax.",
          "An option to tax does not require VAT deregistration.",
          "Option to tax is primarily relevant to land/buildings otherwise exempt (typically commercial), not a rule for residential lettings.",
        ],
      },
    },
    {
      topic: "VAT – option to tax does not transfer",
      q: "A seller has opted to tax a commercial building and sells it. The buyer assumes the building is ‘opted’ automatically after completion. Which is correct?",
      choices: [
        "Correct: the seller’s option automatically transfers with the building",
        "Incorrect: the option to tax affects only the person who opted; the buyer must decide whether to opt",
        "Correct, but only if the buyer is VAT registered",
        "Correct, but only if the sale is at market value",
        "Incorrect, because options to tax are illegal",
      ],
      correct: 1,
      explain: {
        whyRight:
          "An option to tax is made by a person in relation to their interest and does not transfer to the buyer; the buyer has their own choice whether to opt.",
        whyWrong: [
          "Options to tax are personal to the person making them; they do not automatically transfer.",
          "",
          "VAT registration of the buyer does not make a seller’s option transfer.",
          "Market value does not change the non-transfer nature of an option.",
          "Options to tax are lawful and governed by VAT legislation.",
        ],
      },
    },
    {
      topic: "VAT – scope of an option to tax (land vs building)",
      q: "A developer opts to tax a specific building. Later the building is demolished and a new building is constructed on the same plot. What is the usual effect of the original option?",
      choices: [
        "The option ends immediately on demolition",
        "If the option was over the building, it continues to apply to the land and any future buildings constructed on it",
        "The option automatically converts into a residential option",
        "The option applies only to the new building, not the land",
        "The option applies only if the new building is linked by a covered walkway",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where the option specifies a building, it can continue to apply to the land on which it stood (and future buildings on that land), unless excluded under the detailed rules.",
        whyWrong: [
          "Demolition does not automatically terminate the option in the way suggested.",
          "",
          "There is no ‘residential option’ conversion rule of this type.",
          "The guidance indicates the option can extend to the land and future buildings (depending on how it is specified).",
          "Walkways/links are relevant to what counts as a single building in some cases, not the basic continuity point after demolition.",
        ],
      },
    },
    {
      topic: "VAT – TOGC core requirement (separate business + same kind)",
      q: "A landlord sells a fully let commercial property with the leases assigned to the buyer, intending TOGC treatment. Which key requirement must be satisfied for TOGC treatment to be available (in broad terms)?",
      choices: [
        "The buyer must be a first-time buyer",
        "The assets sold must be capable of forming a separate business and the buyer must use them to carry on the same kind of business",
        "The property must be residential",
        "The seller must charge VAT and then refund it after completion",
        "The buyer must be non-UK resident",
      ],
      correct: 1,
      explain: {
        whyRight:
          "TOGC treatment requires (among other conditions) that the assets are capable of forming a separate business and the buyer will carry on the same kind of business as the seller.",
        whyWrong: [
          "First-time buyer status is irrelevant to VAT TOGC rules.",
          "",
          "TOGC is not limited to residential property; it often arises in commercial property contexts.",
          "If TOGC applies, the sale is not treated as a supply for VAT purposes; it is not achieved by charging VAT and refunding it.",
          "Buyer residence is not a general TOGC requirement.",
        ],
      },
    },
    {
      topic: "VAT – TOGC and opted land (buyer’s option to tax)",
      q: "A seller has opted to tax a commercial property. They want the sale to qualify as a TOGC. Which step is often required regarding the buyer’s VAT position (in broad terms)?",
      choices: [
        "The buyer must opt to tax the land/building by the relevant date and notify the seller (to prevent VAT becoming chargeable)",
        "The buyer must be exempt from VAT registration",
        "The buyer must pay SDLT within 60 days",
        "The buyer must claim MDR",
        "The buyer must register the lease at HM Land Registry before completion",
      ],
      correct: 0,
      explain: {
        whyRight:
          "In property TOGC scenarios involving land/buildings that would otherwise be standard-rated, TOGC conditions include the buyer opting to tax and notifying appropriately so the transfer can fall within TOGC treatment.",
        whyWrong: [
          "",
          "Being exempt from VAT registration is not the general TOGC condition; the buyer must be a taxable person already or become one as a result of the transfer.",
          "SDLT timing is unrelated to whether the transfer is a TOGC for VAT purposes.",
          "MDR concerns SDLT and has been abolished (subject to transitional rules); it is unrelated to VAT TOGC.",
          "Land Registry registration is not a TOGC condition.",
        ],
      },
    },
    {
      topic: "CGT – UK residential property: 60-day reporting",
      q: "A UK resident sells a UK residential investment property (not their main home) and realises a taxable gain. The completion date is 15 February 2026. By when must they generally report and pay any CGT due via the UK property account route?",
      choices: [
        "Within 14 days of completion",
        "Within 30 days of exchange",
        "Within 60 days of selling (completion) because the completion date is after 27 October 2021",
        "By 31 January following the end of the tax year, with no earlier reporting requirement",
        "No reporting is required until HMRC asks",
      ],
      correct: 2,
      explain: {
        whyRight:
          "Disposals of UK residential property with completion on or after 27 October 2021 generally require reporting and payment within 60 days of selling (completion).",
        whyWrong: [
          "14 days is the SDLT deadline, not the CGT UK property reporting deadline.",
          "The CGT 60-day clock is tied to selling/completion (under these rules), not “30 days of exchange”.",
          "",
          "Self Assessment deadlines may still apply, but the 60-day property reporting/payment requirement can apply earlier.",
          "Taxpayers are expected to report/pay within the deadline; it is not “only when HMRC asks”.",
        ],
      },
    },
    {
      topic: "CGT – UK residents and the tax-free allowance",
      q: "A UK resident disposes of a UK residential property and the total gains are below the tax-free allowance for the year. Which statement best reflects the general position in the GOV.UK guidance?",
      choices: [
        "They must always report the disposal online within 60 days even if there is no tax to pay",
        "They do not need to report the gains online if their total gains are less than the tax-free allowance",
        "They must report only if they are higher-rate taxpayers",
        "They must report only if the property was ever rented",
        "They can choose whether to report in the next tax year instead",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The GOV.UK guidance indicates that UK residents do not need to report gains online if total gains are below the tax-free allowance.",
        whyWrong: [
          "That “always” rule is not the stated position for UK residents in the guidance.",
          "",
          "Reporting is not limited to higher-rate taxpayers.",
          "Letting history affects reliefs/calculation, but it is not the only trigger for reporting in the way stated.",
          "There is no general elective deferral rule simply because the taxpayer prefers the next year.",
        ],
      },
    },
    {
      topic: "CGT – jointly owned property",
      q: "Two joint owners sell a UK residential property. How should the CGT reporting generally be handled for the gain/loss?",
      choices: [
        "Only one joint owner reports the entire gain",
        "Each joint owner reports their own gain or loss",
        "The conveyancer reports the gain for both owners automatically",
        "No one reports if they are married",
        "Only the owner with the higher income reports",
      ],
      correct: 1,
      explain: {
        whyRight:
          "The guidance states that where property is jointly owned, each person must report their own gain or loss.",
        whyWrong: [
          "Joint owners each have their own CGT position to report (subject to specific transfer rules).",
          "",
          "A conveyancer may assist, but the obligation is not automatically discharged by the conveyancer for CGT purposes.",
          "Marriage does not remove CGT reporting obligations on disposals; special rules apply to transfers between spouses/civil partners, not to third-party sales.",
          "CGT reporting is not assigned to only the higher-income owner.",
        ],
      },
    },
    {
      topic: "ATED – what it is and who it targets",
      q: "Which statement best describes ATED (Annual Tax on Enveloped Dwellings)?",
      choices: [
        "A tax paid by individuals on their main residence if worth more than £500,000",
        "An annual tax payable mainly by companies owning UK residential property valued at more than £500,000",
        "A one-off tax paid only on completion of a property purchase",
        "A tax replacing SDLT for corporate buyers",
        "A Scottish-only property tax",
      ],
      correct: 1,
      explain: {
        whyRight:
          "ATED is an annual tax payable mainly by companies (and certain other vehicles) that own UK residential property valued at more than £500,000.",
        whyWrong: [
          "ATED mainly targets corporate ‘envelopes’, not individuals’ main residences as such.",
          "",
          "ATED is annual, not a one-off completion tax.",
          "SDLT still applies; ATED is a separate annual charge in relevant cases.",
          "ATED is a UK-wide regime for UK residential property held in certain corporate wrappers, not Scotland-only.",
        ],
      },
    },
    {
      topic: "ATED – chargeable periods",
      q: "For ATED, the ‘chargeable periods’ run:",
      choices: [
        "From 6 April to 5 April",
        "From 1 January to 31 December",
        "From 1 April to 31 March",
        "From exchange of contracts to completion",
        "From completion to the next completion",
      ],
      correct: 2,
      explain: {
        whyRight:
          "ATED is charged by reference to chargeable periods that run from 1 April to 31 March.",
        whyWrong: [
          "6 April–5 April is the UK income tax year, not the ATED chargeable period.",
          "Calendar-year accounting is not the ATED chargeable period rule.",
          "",
          "Conveyancing milestones are not how ATED chargeable periods are defined.",
          "ATED is not defined by completion-to-completion cycles.",
        ],
      },
    },
    {
      topic: "ATED – banded annual charges (example band)",
      q: "A company owns a UK dwelling valued at £750,000 for ATED purposes. Using the published 1 April 2026–31 March 2027 charge table, what annual ATED charge band applies?",
      choices: [
        "No ATED because the value is under £1 million",
        "More than £500,000 up to £1 million: £4,600",
        "More than £1 million up to £2 million: £9,450",
        "More than £2 million up to £5 million: £32,200",
        "More than £5 million up to £10 million: £75,450",
      ],
      correct: 1,
      explain: {
        whyRight:
          "£750,000 falls in the ‘more than £500,000 up to £1 million’ band for 1 April 2026–31 March 2027, giving a £4,600 annual charge (subject to reliefs/exemptions in applicable cases).",
        whyWrong: [
          "ATED can apply from values above £500,000 (subject to conditions); £750,000 is within scope on value.",
          "",
          "That band applies only once the value exceeds £1 million.",
          "That band applies only once the value exceeds £2 million.",
          "That band applies only once the value exceeds £5 million.",
        ],
      },
    },
    {
      topic: "Devolved land transaction taxes",
      q: "Your firm acts on purchases in different UK nations. Which statement is correct about the land transaction taxes replacing SDLT in Scotland and Wales?",
      choices: [
        "Scotland uses Land Transaction Tax (LTT) from 1 April 2015; Wales uses LBTT from 1 April 2018",
        "Scotland uses Land and Buildings Transaction Tax (LBTT) from 1 April 2015; Wales uses Land Transaction Tax (LTT) from 1 April 2018",
        "Both Scotland and Wales use SDLT, but with different rates",
        "Scotland uses LBTT from 1 April 2018; Wales uses LTT from 1 April 2015",
        "Wales uses Council Tax instead of SDLT from 1 April 2018",
      ],
      correct: 1,
      explain: {
        whyRight:
          "Scotland replaced SDLT with LBTT from 1 April 2015, and Wales replaced SDLT with LTT from 1 April 2018.",
        whyWrong: [
          "Those acronyms are swapped in this option.",
          "",
          "SDLT applies in England and Northern Ireland, not as the main land transaction tax in Scotland/Wales.",
          "The dates are incorrect and Scotland’s/Wales’ taxes are misassigned.",
          "Council tax is an occupation/holding tax and does not replace the land transaction tax on acquisition.",
        ],
      },
    },
  ];

  window.quizData = {
    title: "Property Practice – Chapter 10: Property taxation",
    subtitle:
      "Core UK taxes commonly encountered in property practice (SDLT, VAT on property, CGT reporting, ATED, devolved land taxes).",
    questions: questions,
  };
})();
