(() => {
  const questions = [
  {
    topic: "Tracing basics — following vs tracing",
    q: "Which statement best distinguishes following from tracing?",
    choices: [
      "Following tracks value into substitutes; tracing tracks the same asset",
      "Following tracks the same asset as it moves; tracing tracks value into substitutes",
      "They are identical concepts",
      "Tracing only applies to land; following applies to money"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Following is identifying the same asset through transfers; tracing is identifying the value of an asset as it changes form or is substituted.",
      whyWrong: [
        "This reverses the concepts.",
        "—",
        "They are related but distinct.",
        "Both can apply to different property types; not land-only vs money-only."
      ]
    }
  },
  {
    topic: "Equitable tracing — typical claimant",
    q: "Equitable tracing is most commonly available to:",
    choices: [
      "Any unsecured creditor",
      "A beneficiary with an equitable interest where trust property is misapplied in breach of trust/fiduciary duty",
      "Only the legal owner of property",
      "Only the Attorney General"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Equitable tracing is typically used by beneficiaries (equitable owners) to follow trust value after a breach of trust/fiduciary duty.",
      whyWrong: [
        "Unsecured creditors generally cannot trace merely because they are owed money.",
        "—",
        "Legal ownership is not required where the claimant has an equitable interest.",
        "Attorney General involvement is mainly for charities, not a general tracing requirement."
      ]
    }
  },
  {
    topic: "Tracing limit — equity’s darling",
    q: "A core limit on equitable proprietary claims is that they generally fail against:",
    choices: [
      "A volunteer recipient",
      "A bona fide purchaser for value without notice",
      "A trustee who acted honestly",
      "A beneficiary with capacity"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A bona fide purchaser for value without notice takes free of prior equitable interests, defeating proprietary claims.",
      whyWrong: [
        "Volunteers can often be subject to proprietary claims if the asset/value can be traced into their hands.",
        "—",
        "Honesty does not automatically block proprietary claims if property is traceable and no defence applies.",
        "Beneficiary capacity is irrelevant to this defence."
      ]
    }
  },
  {
    topic: "Tracing requirement — substitution",
    q: "A trustee misapplies £20,000 of trust money to buy shares. What is the best description of what tracing achieves?",
    choices: [
      "It proves the trustee committed a crime",
      "It identifies the trust value in the substitute asset (the shares) so proprietary remedies can be claimed",
      "It automatically makes the shares charitable property",
      "It cancels the share purchase automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Tracing identifies the trust value in the substitute asset, enabling a proprietary claim such as a constructive trust or lien.",
      whyWrong: [
        "Tracing is a civil equitable process, not a criminal determination.",
        "—",
        "Charity is irrelevant.",
        "Tracing does not automatically void the transaction."
      ]
    }
  },
  {
    topic: "Mixed funds — Re Hallett presumption",
    q: "A trustee wrongfully mixes £5,000 trust money with £5,000 personal money and then withdraws £4,000 for personal spending. Under Re Hallett’s Estate, the withdrawal is presumed to be:",
    choices: [
      "Trust money first",
      "The trustee’s own money first",
      "50/50 trust and personal",
      "Always the beneficiary’s money first"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Re Hallett presumes the trustee spends their own money first, protecting beneficiaries’ interest in the remaining balance.",
      whyWrong: [
        "That is not the Hallett presumption.",
        "—",
        "Not the default presumption in this context.",
        "Equity does not presume beneficiaries’ money is spent first."
      ]
    }
  },
  {
    topic: "Mixed funds — Re Oatway choice",
    q: "A trustee mixes trust money with personal money and buys an asset from the mixed fund, leaving insufficient cash. Re Oatway is important because it allows the beneficiary to:",
    choices: [
      "Be forced to accept the Hallett presumption even if unfair",
      "Claim the purchased asset (or choose a lien) so the trustee cannot rely on presumptions to keep the best asset",
      "Lose all remedies because the fund was mixed",
      "Trace only if the trustee is dishonest"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Re Oatway prevents the trustee using presumptions to protect themselves; the beneficiary can claim the asset bought with mixed funds (or take a lien).",
      whyWrong: [
        "Re Oatway is used to avoid unfair results from rigid presumptions.",
        "—",
        "Mixing does not remove equitable remedies; it triggers tracing rules.",
        "Dishonesty is not required to apply Oatway reasoning."
      ]
    }
  },
  {
    topic: "Lowest intermediate balance rule",
    q: "Which best describes the lowest intermediate balance rule in tracing into a mixed account?",
    choices: [
      "The claimant can claim any amount up to the original misapplied sum even if the account hit zero",
      "The claimant’s maximum claim is capped at the lowest balance the account fell to after the misapplication",
      "The claimant automatically gets the last payment made into the account",
      "The claimant can always claim the entire current balance regardless of history"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the account balance drops, the claimant cannot claim more than the lowest balance reached because the value is treated as dissipated to that extent.",
      whyWrong: [
        "If the balance falls to zero, the value is usually treated as dissipated (subject to special arguments).",
        "—",
        "That is not the lowest intermediate balance rule.",
        "History matters; you cannot ignore dips below the claim amount."
      ]
    }
  },
  {
    topic: "Overdrawn account",
    q: "A trustee pays trust money into a bank account that is already overdrawn. The best general analysis is:",
    choices: [
      "The trust money is treated as dissipated by reducing the overdraft, leaving nothing identifiable in that account to trace into",
      "The beneficiary automatically becomes the bank’s secured creditor",
      "The beneficiary can always claim later deposits as replacements",
      "Overdrafts never affect tracing"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Paying into an overdrawn account typically reduces the debt to the bank; the original asset is treated as gone, making tracing into that account difficult.",
      whyWrong: [
        "—",
        "This is not an automatic consequence of paying down an overdraft.",
        "Later deposits are not automatically traceable unless a recognised route applies on the facts.",
        "Overdrafts can be a major barrier to tracing."
      ]
    }
  },
  {
    topic: "Multiple beneficiaries — mixing",
    q: "Two beneficiaries’ trust monies are mixed together in the same account and then partly dissipated. The usual default approach to sharing remaining value is:",
    choices: [
      "First in, first out (Clayton) always",
      "Rateably (pari passu) unless the court applies a different rule on the facts",
      "Winner takes all",
      "Only the last beneficiary paid in can claim"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where multiple innocent claimants’ funds are mixed, courts often distribute remaining value rateably (pari passu) to avoid arbitrary priority.",
      whyWrong: [
        "FIFO can be applied in some contexts but is often displaced as unfair in mixed claimant cases.",
        "—",
        "Equity avoids arbitrary 'winner takes all' between innocent claimants.",
        "Not a general rule."
      ]
    }
  },
  {
    topic: "Clayton’s Case — FIFO idea",
    q: "Clayton’s Case is most closely associated with which default rule in certain current accounts?",
    choices: [
      "Last in, first out",
      "First in, first out",
      "Equal sharing always",
      "Trustee spends trust money first"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Clayton’s Case suggests a first-in, first-out approach in some running accounts, though courts may disapply it if unjust.",
      whyWrong: [
        "Not the Clayton rule.",
        "—",
        "Equality is not the Clayton default.",
        "That is not the Clayton approach."
      ]
    }
  },
  {
    topic: "Proprietary remedy choice — constructive trust",
    q: "If trust money is used to buy an asset that later increases sharply in value, the beneficiary will often prefer:",
    choices: [
      "An equitable lien only",
      "A constructive trust claim to a proportionate share of the asset",
      "No proprietary remedy",
      "Only nominal damages"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A constructive trust gives the claimant a proportionate proprietary share, allowing them to benefit from increases in value.",
      whyWrong: [
        "A lien typically secures repayment of the misapplied amount, which may be less attractive when value has risen.",
        "—",
        "Proprietary remedies are often the point of tracing.",
        "Nominal damages are not the usual outcome where significant value is traceable."
      ]
    }
  },
  {
    topic: "Proprietary remedy choice — equitable lien",
    q: "If trust money is used to buy an asset that later falls in value, the beneficiary will often prefer:",
    choices: [
      "A constructive trust share in the asset",
      "An equitable lien securing repayment of the misapplied amount (to the extent the asset remains)",
      "A declaration that the trust is void",
      "A criminal prosecution"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A lien is often preferable when value falls because it secures a fixed repayment amount rather than a reduced share value.",
      whyWrong: [
        "A constructive trust share may be worth less if the asset depreciated.",
        "—",
        "This does not follow from tracing.",
        "Tracing/remedies are civil; criminal prosecution is separate."
      ]
    }
  },
  {
    topic: "Constructive trust vs lien — key difference",
    q: "What is the best description of the difference between a constructive trust and an equitable lien in this context?",
    choices: [
      "A constructive trust is a personal remedy; a lien is proprietary",
      "A constructive trust gives a proprietary share in the asset; a lien gives a proprietary security interest for a sum",
      "Both are purely contractual",
      "A lien transfers legal title automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Constructive trust = proprietary ownership share; equitable lien = proprietary charge/security for a quantified amount.",
      whyWrong: [
        "Both are proprietary remedies, not purely personal vs proprietary.",
        "—",
        "They are equitable, not contractual.",
        "A lien does not automatically transfer legal title."
      ]
    }
  },
  {
    topic: "Subrogation — core idea",
    q: "Subrogation is most likely relevant where trust money is used to:",
    choices: [
      "Buy groceries",
      "Discharge a secured debt (e.g., pay off a mortgage) on property",
      "Pay a parking fine",
      "Donate to charity"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Subrogation can arise where misapplied funds discharge a secured debt, allowing the claimant to step into the creditor’s security position to that extent.",
      whyWrong: [
        "Everyday dissipation usually leaves nothing to trace into.",
        "—",
        "Typically dissipation.",
        "Charitable donation is not the classic subrogation context."
      ]
    }
  },
  {
    topic: "Tracing into substitutes — basic",
    q: "A trustee uses £10,000 trust money to buy a car in their own name. Assuming no defence applies, a beneficiary can typically:",
    choices: [
      "Only sue for emotional distress",
      "Trace into the car and claim an appropriate proprietary remedy (constructive trust or lien)",
      "Only claim against the bank",
      "Automatically void the car sale contract"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Equitable tracing allows the beneficiary to identify the trust value in the substitute asset and seek proprietary remedies over it.",
      whyWrong: [
        "Emotional distress is not the usual measure.",
        "—",
        "Claim is against the asset/recipient, not automatically the bank.",
        "Tracing does not automatically void the purchase."
      ]
    }
  },
  {
    topic: "Tracing into hands of volunteers",
    q: "A trustee gifts misapplied trust property to V (a volunteer) who has no notice of the breach. Which is most accurate?",
    choices: [
      "Tracing is automatically defeated because V is innocent",
      "A volunteer is not a purchaser for value, so proprietary claims can still succeed if the asset/value is traceable",
      "V is always immune in equity",
      "The beneficiary can only sue the trustee personally"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Innocence alone does not protect a volunteer; the key protection is being a bona fide purchaser for value without notice.",
      whyWrong: [
        "Innocence does not equal BFP protection.",
        "—",
        "Equity can bind volunteers with traceable property.",
        "Personal claims may exist, but proprietary claims may also be available."
      ]
    }
  },
  {
    topic: "BFP for value without notice — why it matters",
    q: "Why does BFP for value without notice matter in tracing?",
    choices: [
      "Because it automatically creates a new trust",
      "Because it blocks proprietary recovery of the asset against that recipient",
      "Because it proves the trustee acted honestly",
      "Because it forces pari passu distribution"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A BFP takes free of equitable interests, so proprietary tracing claims to recover the asset are defeated against them.",
      whyWrong: [
        "It does not create a trust automatically.",
        "—",
        "It does not prove trustee honesty.",
        "It is not a pari passu rule."
      ]
    }
  },
  {
    topic: "Election of remedies — why choose",
    q: "Why do tracing questions often say the beneficiary may 'elect' between a constructive trust and a lien?",
    choices: [
      "Because equity requires both remedies to be granted together",
      "Because different remedies are advantageous depending on whether the substitute asset has risen or fallen in value",
      "Because election determines criminal liability",
      "Because election decides whether the trust is express or implied"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Constructive trust is attractive when assets rise; lien is attractive when assets fall or when a secured sum is preferable.",
      whyWrong: [
        "Usually the claimant chooses; both are not automatically granted together.",
        "—",
        "Criminal liability is irrelevant here.",
        "Election does not change the type of trust originally created."
      ]
    }
  },
  {
    topic: "Equitable compensation — trust breaches",
    q: "Equitable compensation is best described as:",
    choices: [
      "A punitive fine",
      "A restorative remedy to put the trust fund in the position it would have been but for the breach",
      "A remedy only for contract breaches",
      "A remedy that requires proving dishonesty"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Equitable compensation aims to restore the trust fund for loss caused by breach of trust.",
      whyWrong: [
        "Equity is generally not punitive in this context.",
        "—",
        "It is not limited to contract.",
        "Dishonesty is not always required."
      ]
    }
  },
  {
    topic: "Account of profits — focus",
    q: "An account of profits is most appropriate where:",
    choices: [
      "Trustees made an unauthorised profit due to conflict/fiduciary position",
      "A beneficiary is disappointed with returns",
      "A third party is a BFP for value",
      "There is no breach at all"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Where fiduciaries gain unauthorised profits, equity typically requires disgorgement via an account of profits.",
      whyWrong: [
        "—",
        "Disappointment alone is not a ground for profit-stripping.",
        "BFP status is a defence to proprietary claims, not a reason for profit-stripping.",
        "No breach generally means no remedy."
      ]
    }
  },
  {
    topic: "Injunction — role",
    q: "Injunctions are most relevant in trust disputes where:",
    choices: [
      "The claimant wants to prevent threatened dissipation or misuse of trust property",
      "The claimant wants a jury trial",
      "The claimant wants to change the beneficiaries",
      "The claimant wants to rewrite the trust for fairness"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Equity can restrain threatened breaches or dissipation through injunctions, protecting trust assets pending resolution.",
      whyWrong: [
        "Jury trial is not the point of equitable remedies.",
        "—",
        "Beneficiary classes are not changed by injunction as a general rule.",
        "Courts do not rewrite trusts just for fairness."
      ]
    }
  },
  {
    topic: "Specific performance — when used",
    q: "Specific performance is most likely where:",
    choices: [
      "Damages are an adequate remedy",
      "Damages are inadequate and the court orders performance of a contractual obligation (subject to bars)",
      "The claimant wants punishment",
      "The claimant is an unsecured creditor"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Specific performance is a discretionary equitable remedy, typically granted where damages are inadequate (and no bars apply).",
      whyWrong: [
        "If damages are adequate, SP is less likely.",
        "—",
        "Equity is not primarily punitive.",
        "Creditor status alone does not justify SP."
      ]
    }
  },
  {
    topic: "Rescission — basic idea",
    q: "Rescission is best described as a remedy that:",
    choices: [
      "Creates a new trust",
      "Sets aside a transaction and restores parties to their pre-transaction positions (subject to bars)",
      "Automatically gives punitive damages",
      "Applies only to wills"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Rescission unwinds a transaction (e.g., for misrepresentation/undue influence), subject to bars like affirmation, lapse of time, and third-party rights.",
      whyWrong: [
        "It does not create a new trust automatically.",
        "—",
        "Not punitive damages.",
        "Not wills-only."
      ]
    }
  },
  {
    topic: "Bars to rescission — third party rights",
    q: "A key bar to rescission is:",
    choices: [
      "The claimant is unhappy",
      "Intervention of third-party rights (e.g., sale to a bona fide purchaser for value without notice)",
      "The defendant apologised",
      "The claimant lives abroad"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Rescission can be barred where third-party rights have intervened, especially where a BFP for value without notice has acquired the property.",
      whyWrong: [
        "Unhappiness is not a legal bar/ground.",
        "—",
        "Apology is irrelevant.",
        "Residence abroad is irrelevant."
      ]
    }
  },
  {
    topic: "Tracing — dissipation",
    q: "Which is the best example of dissipation (making tracing practically impossible into a substitute asset)?",
    choices: [
      "Trust money used to buy a painting",
      "Trust money used to pay ordinary living expenses with no identifiable substitute",
      "Trust money transferred to a savings account",
      "Trust money used to buy shares"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Dissipation is spending that leaves no identifiable substitute (e.g., food, rent), making proprietary tracing into an asset impossible.",
      whyWrong: [
        "A painting is an identifiable substitute.",
        "—",
        "A savings balance may still be identifiable (subject to mixing rules).",
        "Shares are an identifiable substitute."
      ]
    }
  },
  {
    topic: "Mixed account — beneficiary-friendly presumption",
    q: "Which principle is generally beneficiary-protective in a trustee’s mixed account?",
    choices: [
      "Trustee spends trust money first",
      "Trustee spends their own money first (Re Hallett), protecting the beneficiary’s share in the remainder",
      "FIFO always applies in equity",
      "The trustee can choose whichever presumption benefits them"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Re Hallett presumes the trustee spends their own funds first, which usually preserves the beneficiary’s entitlement in the remaining balance.",
      whyWrong: [
        "Equity generally avoids presuming the trustee spent trust money first in this context.",
        "—",
        "FIFO is not universally applied and is often displaced as unfair.",
        "Presumptions are applied to protect beneficiaries, not trustees."
      ]
    }
  },
  {
    topic: "Tracing into mixed fund — what can be claimed",
    q: "If trust money is mixed into an account that still has funds, the beneficiary can typically claim:",
    choices: [
      "Nothing because mixing defeats tracing",
      "A proprietary interest in the mixed fund to the extent traceable, subject to rules like lowest intermediate balance",
      "Only a criminal remedy",
      "Only the trustee’s personal assets"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Mixing triggers equitable tracing rules; beneficiaries may claim a proprietary interest in the remaining fund (limited by tracing rules).",
      whyWrong: [
        "Mixing does not automatically defeat tracing in equity.",
        "—",
        "Tracing is civil/equitable, not criminal.",
        "Personal assets might be reached via personal claims, but proprietary claims can target the traced fund."
      ]
    }
  },
  {
    topic: "Proprietary vs personal remedies — priority",
    q: "A key advantage of a proprietary claim (after tracing) over a purely personal claim is that it may:",
    choices: [
      "Give priority in insolvency because the claimant asserts rights in specific property rather than competing as an unsecured creditor",
      "Guarantee a higher profit always",
      "Avoid all defences automatically",
      "Convert the claim into a criminal matter"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Proprietary claims can remove assets from the insolvent estate or give priority (e.g., lien), whereas personal claims compete with unsecured creditors.",
      whyWrong: [
        "—",
        "Not guaranteed; it depends on the asset’s value and remedy choice.",
        "Defences like BFP can still defeat proprietary claims.",
        "It remains a civil claim."
      ]
    }
  },
  {
    topic: "When tracing is most valuable",
    q: "Tracing is often most valuable to a claimant where:",
    choices: [
      "The defendant is solvent and happy to pay",
      "The defendant is insolvent and the claimant wants to claim specific assets/value rather than rank as unsecured",
      "There was no breach of trust",
      "The property never changed hands"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Tracing enables proprietary claims that can give priority or recover specific assets even if the wrongdoer is insolvent.",
      whyWrong: [
        "Solvency reduces urgency, though tracing may still be useful.",
        "—",
        "No breach often means no basis for tracing in these contexts.",
        "If nothing changed, following may suffice and tracing adds less."
      ]
    }
  },
  {
    topic: "Choosing lien vs constructive trust — exam technique",
    q: "A beneficiary traces £50,000 into an asset now worth £30,000. Which choice is generally more attractive?",
    choices: [
      "Constructive trust share only",
      "Equitable lien for £50,000 (secured against the asset to the extent it exists), rather than a reduced ownership share",
      "No remedy because value fell",
      "FIFO distribution"
    ],
    correct: 1,
    explain: {
      whyRight:
        "When the asset has fallen in value, a lien securing the fixed sum is often preferable to owning a proportion of a depreciated asset.",
      whyWrong: [
        "A constructive trust share may now be worth less.",
        "—",
        "Falling value does not remove remedies.",
        "FIFO is not the relevant remedy choice."
      ]
    }
  },
  {
    topic: "Equitable lien — what it gives",
    q: "An equitable lien most accurately gives the claimant:",
    choices: [
      "Legal title to the asset",
      "A proprietary security interest to secure repayment of a quantified amount",
      "A prison sentence against the trustee",
      "A right to rewrite the trust terms"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A lien is a proprietary charge-like security that secures repayment of a defined sum against the asset/fund.",
      whyWrong: [
        "Lien does not transfer legal title.",
        "—",
        "Civil remedy, not criminal punishment.",
        "Courts do not rewrite trust terms as a lien remedy."
      ]
    }
  },
  {
    topic: "Constructive trust — what it gives",
    q: "A constructive trust in the tracing context most accurately gives the claimant:",
    choices: [
      "A proprietary share in the asset (often proportionate), enabling participation in gains",
      "Only a personal right to sue for damages",
      "Automatic registration at HM Land Registry",
      "A guarantee that the asset will be sold"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A constructive trust recognises proprietary ownership (often proportionate) in the traced asset, allowing the claimant to benefit from increases.",
      whyWrong: [
        "—",
        "It is proprietary, not merely personal.",
        "Registration may be relevant for land, but it is not automatic and depends on the context.",
        "It does not guarantee a sale."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Trust Law | Chapter 12 | Tracing and Claims",
    subtitle: "Following, tracing, and equitable proprietary remedies.",
    questions: questions
  };
})();
  
