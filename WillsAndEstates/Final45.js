(() => {
  const questions = [
  // CH1 — Essential requirements for a valid will
  {
    topic: "Ch1 Valid will formalities — signature + intention",
    q: "Farah, 78, types a document titled 'My Will' and signs at the bottom. Two neighbours are present at the same time, but Farah signs in the kitchen while they stand in the hallway and cannot see her. Farah then takes the document to them and asks each to sign as witness, which they do. Farah dies. Which is the best advice on validity?",
    choices: [
      "Valid: witnesses were nearby, so presence is satisfied",
      "Valid: as long as Farah signed, witness presence is irrelevant",
      "Invalid: the witnesses must be present and able to see Farah sign (or acknowledge her signature) when they attest",
      "Invalid only if the neighbours are not beneficiaries",
      "Valid if the neighbours later confirm by affidavit they would have seen her if the door were open"
    ],
    correct: 2
  },
  {
    topic: "Ch1 Valid will formalities — acknowledgement",
    q: "Tom signs his will alone at home. The next day, he meets two colleagues together and says, 'That is my signature on this will,' and asks them to sign as witnesses, which they do in his presence. Is the will properly executed?",
    choices: [
      "No, because Tom did not sign in their presence",
      "No, because acknowledgement is not permitted",
      "Yes, because acknowledgment of signature to two witnesses present together can satisfy execution requirements",
      "Yes, but only if the colleagues are not beneficiaries",
      "No, because witnessing must occur on the same day as signing"
    ],
    correct: 2
  },
  {
    topic: "Ch1 Valid will formalities — beneficiary witness",
    q: "Leila makes a will leaving £25,000 to her friend Sam. Sam is one of the two witnesses and signs the will. Leila dies. What is the effect?",
    choices: [
      "The entire will is invalid",
      "Sam’s gift is void, but the rest of the will can remain valid",
      "Sam can take if the other witness is independent",
      "Sam can take if the gift is under £50,000",
      "Sam can take if Leila later confirmed the gift in writing"
    ],
    correct: 1
  },
  {
    topic: "Ch1 Capacity — Banks v Goodfellow style test",
    q: "Mina, 84, has early dementia but has lucid periods. During a lucid interval, she makes a will leaving her estate to her niece, explaining her assets and why she is excluding a distant cousin. The cousin challenges capacity. Which is the best analysis?",
    choices: [
      "Invalid: any dementia automatically removes capacity",
      "Valid if Mina understood the nature/effect of the will, the extent of her property, and the claims she ought to consider at the time of execution",
      "Invalid unless Mina obtained a medical certificate on the day",
      "Valid only if the cousin consents",
      "Invalid because excluding a relative is suspicious"
    ],
    correct: 1
  },

  // CH2 — Personal representatives (roles, appointment, general powers)
  {
    topic: "Ch2 Executors vs administrators — who acts",
    q: "Nadia dies leaving a valid will appointing her partner Jay as executor. Jay refuses to act. The will has no substitute executor. Nadia’s adult child applies to deal with the estate. What grant is most appropriate?",
    choices: [
      "Grant of Probate to the child",
      "Letters of Administration (intestacy)",
      "Letters of Administration with will annexed",
      "No grant is possible because an executor was named",
      "A resealing of grant"
    ],
    correct: 2
  },
  {
    topic: "Ch2 Authority — when executors get it",
    q: "Omar dies leaving a will appointing two executors. Before any grant is obtained, one executor sells Omar’s car to pay the funeral bill. Is this within an executor’s authority?",
    choices: [
      "No, executors have no authority until the grant issues",
      "Yes, executors derive authority from the will from death, but they must still act properly and account",
      "No, only administrators can sell assets",
      "Yes, but only if all beneficiaries consent in writing",
      "Yes, but only after publishing s27 notices"
    ],
    correct: 1
  },
  {
    topic: "Ch2 Duties — fiduciary obligations of PRs",
    q: "Priya dies. The executor keeps poor records and cannot explain several withdrawals from the estate account. A residuary beneficiary demands details. What is the best statement?",
    choices: [
      "Executors never need to keep accounts",
      "Beneficiaries can require PRs to account; keeping records is a core fiduciary duty",
      "Only the Probate Registry can demand accounts",
      "Only specific legatees can demand accounts",
      "Accounts are required only if the estate includes land"
    ],
    correct: 1
  },
  {
    topic: "Ch2 Renunciation vs power reserved",
    q: "Two executors are appointed. One wants to take no active role now but may act later if needed. Which is the best course?",
    choices: [
      "Renounce, which allows them to come back later",
      "Take 'power reserved' so they can potentially step in later",
      "Do nothing; their role ends automatically",
      "Assign their executorship to a beneficiary",
      "Apply for letters of administration"
    ],
    correct: 1
  },

  // CH3 — Interpretation/alteration/rectification (construction)
  {
    topic: "Ch3 Ademption — specific gift fails",
    q: "Ethan’s will gifts 'my Rolex watch' to Asha. Before death, Ethan sells the Rolex and buys a different watch. On death, what happens to Asha’s gift?",
    choices: [
      "Asha receives the replacement watch",
      "Asha receives the cash proceeds of sale automatically",
      "The specific gift adeems and fails; Asha gets nothing unless the will indicates otherwise",
      "Asha receives an equivalent value from residue as of right",
      "Asha can claim the watch from the executor personally"
    ],
    correct: 2
  },
  {
    topic: "Ch3 Lapse vs substitution — anti-lapse concept",
    q: "Tara leaves '£50,000 to my son Ben' in her will. Ben dies before Tara leaving two children. The will is silent on substitution. What is the best analysis?",
    choices: [
      "The gift always lapses into residue",
      "The gift passes to Ben’s children under the anti-lapse principle (subject to conditions) rather than lapsing",
      "The gift passes to the spouse automatically",
      "The gift is shared among all grandchildren equally regardless of Ben",
      "The gift becomes a charitable gift"
    ],
    correct: 1
  },
  {
    topic: "Ch3 Abatement — shortage scenario",
    q: "A will leaves (1) £20,000 to A, (2) 'my car' to B, and (3) the residue to C. After paying debts and funeral expenses, only £10,000 remains and the car still exists. Which is most likely?",
    choices: [
      "B’s car gift is sold to pay A in full",
      "C receives nothing first; residue bears the shortfall before general legacies are reduced",
      "A must be paid in full before any debts",
      "B’s car gift always abates before residue",
      "All gifts are reduced proportionally from the start"
    ],
    correct: 1
  },
  {
    topic: "Ch3 Rectification — clerical error",
    q: "A solicitor accidentally drafts a will gift as '£5,000 to my cousin Ali' but the testator’s clear instructions were '£50,000'. The error is discovered after death. What remedy is most directly relevant?",
    choices: [
      "Rectification of the will to correct a clerical error (if the requirements are met)",
      "A deed of variation by the executor alone",
      "A statutory legacy under intestacy",
      "Severance of a joint tenancy",
      "A caveat to stop the grant permanently"
    ],
    correct: 0
  },

  // CH4 — Alterations/Revocation (depending on book mapping)
  {
    topic: "Ch4 Revocation by marriage — general rule",
    q: "Imran makes a will in 2020 leaving everything to his sister. In 2023, he marries. He dies in 2026 without making another will. What is the likely effect?",
    choices: [
      "The 2020 will remains valid because it was signed correctly",
      "The 2020 will is generally revoked by the marriage (subject to any 'in contemplation of marriage' exception)",
      "Only the gifts to non-family are revoked",
      "The will is revoked only if the spouse applies to court",
      "The will is partially revoked but the executor appointment stands"
    ],
    correct: 1
  },
  {
    topic: "Ch4 Revocation by destruction — intention",
    q: "Sana tears her will in half intending to revoke it. She later regrets it but does not create a new will. On her death, what is most likely?",
    choices: [
      "The torn will is still valid if all pieces are kept",
      "The will is revoked because destruction with intent to revoke is effective",
      "The will is valid because she later regretted it",
      "The will is valid if witnesses confirm it existed",
      "The will becomes valid again automatically after 1 year"
    ],
    correct: 1
  },
  {
    topic: "Ch4 Alterations — after execution",
    q: "After signing and witnessing her will, Rina crosses out a beneficiary’s name and writes in a different name, without any further signatures or attestation. What is the best analysis?",
    choices: [
      "The alteration is effective because it is in Rina’s handwriting",
      "The alteration is ineffective unless executed with the same formalities as a will (subject to limited exceptions)",
      "The entire will is automatically revoked",
      "The executor can choose which name to use",
      "The alteration is effective if the new beneficiary is a spouse"
    ],
    correct: 1
  },
  {
    topic: "Ch4 Duplicate wills — revocation presumption",
    q: "A testator executed two copies of the same will, keeping one and giving one to their solicitor. On death, the testator’s copy cannot be found, but the solicitor’s copy exists. What is the likely starting presumption?",
    choices: [
      "The will is automatically invalid",
      "There may be a presumption the testator destroyed their copy intending to revoke, but it can be rebutted on evidence",
      "The solicitor’s copy is treated as intestacy",
      "The beneficiaries must prove capacity again",
      "The Probate Registry refuses all grants"
    ],
    correct: 1
  },

  // CH5 — Grants and probate procedure (or "Getting the grant" earlier)
  {
    topic: "Ch5 Need for a grant — asset-holder requirement",
    q: "Zara dies with a house solely in her name and a bank account with £5,000. The bank will release funds without a grant, but the house is registered in Zara’s sole name. What is the best advice?",
    choices: [
      "No grant is ever needed if the bank releases funds",
      "A grant is likely needed to deal with the registered land even if some assets can be collected without it",
      "A grant is needed only if there is no will",
      "A grant is needed only if the estate exceeds £325,000",
      "A grant is never needed for land"
    ],
    correct: 1
  },
  {
    topic: "Ch5 Probate vs administration — form choice",
    q: "A firm is instructed on an estate with a valid will and appointed executors. The executors want to apply by post rather than online. Which form is generally used?",
    choices: ["PA1A", "PA1P", "IHT400", "IHT205", "N1 claim form"],
    correct: 1
  },
  {
    topic: "Ch5 Caveat — procedural protection",
    q: "A disappointed heir believes the will is forged and wants to stop a grant issuing while they investigate. What is the most appropriate immediate step?",
    choices: [
      "Apply for rectification",
      "Enter a caveat at the Probate Registry",
      "Issue a 1975 Act claim",
      "Serve a s27 notice",
      "Apply to Land Registry for restriction"
    ],
    correct: 1
  },
  {
    topic: "Ch5 IHT reporting — sequencing",
    q: "An estate requires a full IHT account. What is the correct sequence in broad terms?",
    choices: [
      "Apply for probate first, then file IHT400 later",
      "File IHT400 to HMRC first (where required), then apply for the grant",
      "Distribute residue first, then report tax",
      "File IHT205 for all deaths after 2022",
      "No IHT reporting is needed if there is a will"
    ],
    correct: 1
  },

  // CH6 — Property passing outside the estate
  {
    topic: "Ch6 Joint tenancy — survivorship",
    q: "Haris and Mei own their home as joint tenants. Haris’ will leaves 'my half of the house to my brother'. Haris dies first. What is the best outcome?",
    choices: [
      "Brother takes Haris’ half under the will",
      "Mei takes the whole by survivorship unless the joint tenancy was severed before death",
      "The house is split 50/50 between Mei and the brother automatically",
      "The brother can force Mei to sell immediately",
      "The gift becomes a demonstrative legacy from residue"
    ],
    correct: 1
  },
  {
    topic: "Ch6 Tenancy in common — estate asset",
    q: "Lina and Rob own a property as tenants in common 60/40. Lina dies leaving all her estate to her daughter. What happens to Lina’s share?",
    choices: [
      "Rob takes Lina’s 60% automatically",
      "Lina’s 60% forms part of her estate and passes under her will",
      "The whole property passes outside the estate",
      "The 60% goes to the mortgage lender",
      "The 60% must pass to Rob unless he consents otherwise"
    ],
    correct: 1
  },
  {
    topic: "Ch6 Pension death benefits — scheme discretion",
    q: "Dev dies and his will states 'I give my pension death benefit to my sister.' The pension scheme rules give trustees discretion. Dev previously completed an expression of wish naming his partner. What is the best advice?",
    choices: [
      "The will binds the pension trustees, so sister must receive it",
      "The expression of wish is always legally binding, so partner must receive it",
      "The trustees/scheme rules control; they may consider the expression of wish and circumstances, and the will may not control",
      "The benefit must be paid to the PRs as part of the estate",
      "The benefit is split 50/50 between sister and partner automatically"
    ],
    correct: 2
  },
  {
    topic: "Ch6 Life policy — in trust",
    q: "Aisha’s life insurance policy is written in trust for her children. On her death, the proceeds are paid to the trustees. Which is most accurate?",
    choices: [
      "The proceeds automatically form part of Aisha’s probate estate",
      "The proceeds typically pass under the trust and outside the probate estate",
      "The will overrides the trust beneficiaries",
      "The proceeds must be paid to the executor first",
      "The trust is invalid unless executed with will formalities"
    ],
    correct: 1
  },

  // CH7 — Getting the grant of representation
  {
    topic: "Ch7 Grant type — intestacy",
    q: "Chen dies without a will. His adult daughter applies to administer his estate. Which grant is appropriate?",
    choices: [
      "Grant of Probate",
      "Letters of Administration",
      "Resealing of grant",
      "Letters of Administration with will annexed",
      "A rectification order"
    ],
    correct: 1
  },
  {
    topic: "Ch7 Grant type — will but no executor able",
    q: "Rafi dies leaving a valid will but the only executor named has died and no substitute is appointed. What is the most appropriate grant?",
    choices: [
      "Letters of Administration (intestacy)",
      "Grant of Probate to the main beneficiary",
      "Letters of Administration with will annexed",
      "No grant is possible",
      "A caveat"
    ],
    correct: 2
  },
  {
    topic: "Ch7 Paper forms — will vs no will",
    q: "A PR is applying by post for a grant where there is no will. Which form is generally used?",
    choices: ["PA1P", "PA1A", "IHT400", "IHT205", "NCPR"],
    correct: 1
  },
  {
    topic: "Ch7 Documents — core requirements",
    q: "In a standard will case application, which set is most likely to be required to be sent in?",
    choices: [
      "Photocopy of the will only",
      "Original will and any codicils, plus the death certificate (or interim certificate)",
      "Only bank statements and a passport",
      "A deed of variation signed by beneficiaries",
      "A completed Land Registry TR1"
    ],
    correct: 1
  },

  // CH8 — Administering the estate
  {
    topic: "Ch8 Order of administration — liabilities before distribution",
    q: "An executor is under pressure to distribute residue immediately. There may be an outstanding tax liability and a potential creditor claim. What is the best advice?",
    choices: [
      "Distribute now; creditors can only sue beneficiaries",
      "Distribute now if beneficiaries sign receipts",
      "Delay distribution until liabilities/claims are resolved or adequate reserves/protection are in place",
      "Distribute now if the will contains a no-contest clause",
      "Distribute now because executors are never personally liable"
    ],
    correct: 2
  },
  {
    topic: "Ch8 s27 notices — protection scope",
    q: "Personal representatives place Trustee Act 1925 s27 notices and wait the required period, then distribute. An unknown creditor later appears. What is the best statement?",
    choices: [
      "PRs are always personally liable regardless of s27",
      "s27 can protect PRs from personal liability to unknown creditors if done properly, though the creditor may pursue recipients in some cases",
      "s27 invalidates the creditor’s debt",
      "s27 prevents all claims including 1975 Act claims",
      "s27 guarantees the estate is solvent"
    ],
    correct: 1
  },
  {
    topic: "Ch8 Appropriation — satisfaction in specie",
    q: "An estate’s main asset is a valuable painting. One residuary beneficiary wants the painting in satisfaction of their share rather than sale. What is the most accurate approach?",
    choices: [
      "The executor must always sell and distribute cash",
      "The executor may appropriate the painting to the beneficiary if proper valuation and fairness are observed and the legal requirements are met",
      "Appropriation is only possible for land",
      "Appropriation is only possible if all creditors consent",
      "Appropriation automatically increases the beneficiary’s share"
    ],
    correct: 1
  },
  {
    topic: "Ch8 Insolvent estate — priority risk",
    q: "An administrator pays a large unsecured trade creditor in full, then discovers the estate cannot pay funeral expenses and tax. What is the most likely consequence?",
    choices: [
      "No issue; administrators can choose who to pay",
      "The administrator may be personally liable for misapplying estate assets by not following priority rules in an insolvent estate",
      "The creditor must refund automatically without action",
      "The beneficiaries must pay the shortfall",
      "The grant becomes invalid"
    ],
    correct: 1
  },

  // CH9 — Claims against the estate (1975 Act + disputes)
  {
    topic: "Ch9 1975 Act — eligibility cohabitant",
    q: "Amir dies leaving everything to his adult children. Noor lived with Amir as his partner for 2 years and 3 months immediately before his death. Noor was financially dependent on Amir. Noor seeks reasonable financial provision. Which is most accurate?",
    choices: [
      "Noor cannot claim because she is not married",
      "Noor can claim as a qualifying cohabitant (2 years immediately before death), and the provision standard is maintenance",
      "Noor can claim but only if she has a child with Amir",
      "Noor can claim under the spouse standard (not limited to maintenance)",
      "Noor must bring the claim within 6 months of death, not the grant"
    ],
    correct: 1
  },
  {
    topic: "Ch9 1975 Act — time limit trigger",
    q: "A grant of probate is issued on 1 March. A dependant wants to issue a 1975 Act claim. By when should it normally be issued?",
    choices: [
      "Within 6 months of death",
      "Within 6 months of the grant date",
      "Within 12 months of the grant date",
      "Within 3 months of the grant date",
      "Any time before distribution"
    ],
    correct: 1
  },
  {
    topic: "Ch9 Spouse vs maintenance standard",
    q: "Dina is the deceased’s spouse and brings a 1975 Act claim. Which is the best statement about the standard of provision?",
    choices: [
      "Dina is limited to maintenance only",
      "Dina’s provision is assessed as reasonable in all circumstances and is not limited to maintenance",
      "Dina must prove 2 years cohabitation",
      "Dina can claim only if the will is invalid",
      "Dina automatically receives half the estate"
    ],
    correct: 1
  },
  {
    topic: "Ch9 Will validity vs 1975 Act",
    q: "A claimant says: 'The will is valid, but it does not make reasonable financial provision for me.' Which is the most appropriate route?",
    choices: [
      "A capacity challenge",
      "A 1975 Act claim",
      "Rectification for clerical error",
      "A caveat permanently preventing the grant",
      "A s27 notice"
    ],
    correct: 1
  },

  // CH10 — Inheritance Tax
  {
    topic: "Ch10 PET + 7-year rule scenario",
    q: "In 2021, Mo gifts £200,000 to his adult son. Mo dies in 2026. Ignoring exemptions and earlier gifts, how is the gift treated for IHT?",
    choices: [
      "It is ignored because it is a PET",
      "It becomes chargeable because Mo died within 7 years; it uses Mo’s nil-rate band first",
      "It is taxed at 20% only",
      "It is taxed at 36% automatically",
      "It is covered by the residence nil-rate band"
    ],
    correct: 1
  },
  {
    topic: "Ch10 Taper relief trigger",
    q: "A chargeable lifetime gift was made 4 years and 2 months before death. Assuming it is taxable after using any NRB, what is the best statement?",
    choices: [
      "No taper relief applies until after 5 years",
      "Taper relief can reduce the tax rate on the gift because death occurred between 4 and 5 years after the gift",
      "Taper relief reduces the value of the gift",
      "Taper relief applies only if the gift was to charity",
      "Taper relief applies only if the estate exceeds £2 million"
    ],
    correct: 1
  },
  {
    topic: "Ch10 Gift with reservation (GWR)",
    q: "In 2019, Salma gives her house to her daughter but continues living there rent-free until she dies in 2026. What is the best IHT analysis?",
    choices: [
      "The gift is a PET and is outside the estate because 7 years have passed",
      "The gift is a gift with reservation; the house is treated as part of Salma’s estate for IHT",
      "The gift is exempt as a small gift",
      "The gift is automatically covered by RNRB even if not left at death",
      "The gift is treated as a charity gift"
    ],
    correct: 1
  },
  {
    topic: "Ch10 RNRB scenario — direct descendants",
    q: "Hannah dies owning a home worth £180,000, left to her child. Her other assets are £200,000. Ignoring lifetime gifts and tapering, which is the best statement?",
    choices: [
      "Only the basic NRB can apply; RNRB never applies under £2m",
      "RNRB may apply (up to the home value capped at the maximum), potentially reducing the taxable estate alongside the basic NRB",
      "RNRB applies to cover lifetime gifts within 7 years",
      "RNRB applies only if the home is worth at least £175,000",
      "RNRB applies only if there is no surviving spouse"
    ],
    correct: 1
  },

  // CH11 — Will trusts: trustees and beneficiaries
  {
    topic: "Ch11 Bare trust — Saunders v Vautier style scenario",
    q: "A will leaves £100,000 'to my trustees to hold for my niece Ella absolutely.' Ella is 25 and has full capacity. She asks the trustees to transfer the £100,000 to her now. The trustees want to retain it until she is 30 for 'maturity'. What is the best analysis?",
    choices: [
      "Trustees can refuse because they control timing",
      "Ella can require transfer because she is absolutely entitled and adult with capacity",
      "Ella must wait until the executor’s year ends",
      "Ella can only demand income, not capital",
      "Ella needs a court order in every case"
    ],
    correct: 1
  },
  {
    topic: "Ch11 Discretionary trust — beneficiary rights scenario",
    q: "A will creates a discretionary trust for 'my grandchildren' with power for trustees to pay income/capital as they think fit. One grandchild, Leo, demands his 'one-third share' immediately. Which is most accurate?",
    choices: [
      "Leo can demand payment because beneficiaries always have fixed shares",
      "Leo cannot demand a fixed share, but can require trustees to consider distributions properly and in good faith",
      "Leo can demand only income, not capital",
      "Leo can demand payment if the trust fund is over £325,000",
      "Leo’s demand automatically terminates the trust"
    ],
    correct: 1
  },
  {
    topic: "Ch11 Trustee investment duties — suitability/diversification scenario",
    q: "Trustees of a will trust invest the entire trust fund in a single volatile cryptocurrency because one trustee believes it will 'moon'. No advice is taken. The fund collapses. Which is the best statement?",
    choices: [
      "Trustees are protected because investment always involves risk",
      "This is likely a breach of duty of care and standard investment criteria (suitability/diversification), exposing trustees to liability",
      "Trustees are never liable if they acted unanimously",
      "Trustees are not subject to any investment duties if the trust arises under a will",
      "Trustees can avoid liability by blaming the beneficiaries"
    ],
    correct: 1
  },
  {
    topic: "Ch11 Conflict/no-profit — trustee buying trust asset",
    q: "A trustee of a will trust wants to buy a trust-owned property at market value because it is 'perfect for their family'. The trust instrument is silent. Which is the best analysis?",
    choices: [
      "Always allowed if market value is paid",
      "Likely a conflict transaction requiring proper authority (e.g., express power, beneficiary consent, or court approval) to avoid breach",
      "Automatically invalidates the trust",
      "Allowed if the trustee abstains from voting",
      "Allowed only if the trustee is also a beneficiary"
    ],
    correct: 1
  }
];



  window.quizData = {
    title: "SQE1 Wills and Estates | Final 45",
    subtitle: "Mixed review across wills, PRs, grants, estates, and tax.",
    questions: questions
  };
})();
  
