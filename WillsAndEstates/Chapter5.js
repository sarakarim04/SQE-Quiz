(() => {
  const questions = [
  {
    topic: "Intestacy — when it applies",
    q: "In which situation do the intestacy rules apply?",
    choices: [
      "Whenever a will exists, regardless of its terms",
      "When a person dies without a valid will, or the will fails to dispose of all the estate (partial intestacy)",
      "Only when there is no surviving spouse/civil partner",
      "Only when the estate is worth less than £5,000"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Intestacy rules apply where there is no valid will or where the will does not effectively dispose of the entire estate (partial intestacy).",
      whyWrong: [
        "A valid will normally governs distribution.",
        "—",
        "Intestacy can apply even if there is a spouse/CP, depending on will/partial intestacy.",
        "No such value threshold triggers intestacy."
      ]
    }
  },
  {
    topic: "Intestacy — net estate concept",
    q: "Under intestacy, distribution is generally of the deceased’s net estate. Which is most accurate?",
    choices: [
      "Net estate means assets before paying funeral and debts",
      "Net estate means what remains after funeral/administration expenses, debts and liabilities (including tax) are dealt with",
      "Net estate means only cash in bank accounts",
      "Net estate means only land"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Intestacy distribution occurs after settling expenses, debts and liabilities; beneficiaries take from the net estate.",
      whyWrong: [
        "Expenses and debts are dealt with before distribution.",
        "—",
        "Net estate includes more than cash.",
        "Net estate includes more than land."
      ]
    }
  },
  {
    topic: "Survivorship — 28-day rule",
    q: "A relative must generally survive the deceased by how long to inherit under intestacy?",
    choices: ["24 hours", "7 days", "28 days", "6 months"],
    correct: 2,
    explain: {
      whyRight:
        "Under the intestacy survivorship requirement, a beneficiary generally must survive the deceased by 28 days to inherit under intestacy.",
      whyWrong: [
        "No general 24-hour rule for intestacy entitlement.",
        "No general 7-day rule.",
        "—",
        "No general 6-month rule."
      ]
    }
  },
  {
    topic: "Survivorship — effect on spouse/CP",
    q: "D dies intestate. S (spouse) survives D by 10 days and then dies. The best analysis is:",
    choices: [
      "S inherits under intestacy because they survived D",
      "S does not inherit under intestacy because they did not survive D by the required 28 days (so treat as if S predeceased)",
      "S inherits only personal chattels",
      "S inherits only if there are no children"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under the 28-day rule, S must survive D by 28 days to inherit on intestacy; otherwise S is treated as having predeceased for intestacy purposes.",
      whyWrong: [
        "Survival alone is not enough; the 28-day requirement matters.",
        "—",
        "Chattels-only is not the rule; it depends on surviving entitlement.",
        "Children do not cure the 28-day survivorship issue."
      ]
    }
  },
  {
    topic: "Order of entitlement — headline priority",
    q: "Under intestacy in England & Wales, who is generally first in line to inherit (if they satisfy survivorship)?",
    choices: [
      "Parents",
      "Spouse/civil partner",
      "Siblings",
      "Grandparents"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The surviving spouse/civil partner has priority under intestacy (subject to the detailed distribution scheme).",
      whyWrong: [
        "Parents are lower down the ladder if there is a spouse/CP and/or issue.",
        "—",
        "Siblings are below spouse/CP and issue.",
        "Grandparents are further down the ladder."
      ]
    }
  },
  {
    topic: "Issue — meaning",
    q: "For intestacy purposes, 'issue' most accurately refers to:",
    choices: [
      "Only biological children",
      "Children (including legally adopted children) and further descendants",
      "Only stepchildren",
      "Only children born within marriage"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Issue generally means children and further lineal descendants; adopted children are typically treated as children in law for inheritance purposes.",
      whyWrong: [
        "It is not limited to biological children only.",
        "—",
        "Stepchildren are not included unless adopted.",
        "Modern rules do not generally exclude children born outside marriage."
      ]
    }
  },
  {
    topic: "Stepchildren — default position",
    q: "D dies intestate leaving a stepchild (not adopted), and no biological/adopted children. Which is most accurate?",
    choices: [
      "The stepchild automatically inherits as 'issue'",
      "The stepchild does not inherit under intestacy unless adopted or otherwise qualifying under the statutory scheme",
      "The stepchild inherits if they lived with D for 2 years",
      "The stepchild inherits if named on the birth certificate"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Stepchildren are not included as 'issue' for intestacy unless they have been legally adopted or otherwise qualify under a statutory route (not the basic intestacy ladder).",
      whyWrong: [
        "Stepchildren are not automatically treated as issue.",
        "—",
        "Cohabitation does not automatically create intestacy entitlement.",
        "A birth certificate does not make a stepchild the deceased’s legal child."
      ]
    }
  },
  {
    topic: "Representation — per stirpes",
    q: "D dies intestate with two children, C1 and C2. C1 died before D but left two children (G1, G2). Who takes C1’s share?",
    choices: [
      "Nobody; C1’s branch fails",
      "C2 takes everything",
      "G1 and G2 take C1’s share between them (by representation)",
      "The deceased’s parents take C1’s share"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Under representation (per stirpes), if a child predeceases but leaves descendants, that branch can inherit the share the child would have taken.",
      whyWrong: [
        "A child’s branch does not necessarily fail if there are descendants.",
        "C2 does not take the whole if C1’s descendants can represent.",
        "—",
        "Parents are below issue in priority."
      ]
    }
  },
  {
    topic: "Spouse/CP + issue — structure",
    q: "D dies intestate leaving a spouse and children. Which is generally most accurate about the spouse’s entitlement?",
    choices: [
      "Spouse takes nothing because children have priority",
      "Spouse typically takes personal chattels and a statutory legacy, plus a share of the residue; children take the remaining share of residue",
      "Spouse takes only the family home",
      "Spouse takes the entire estate and children take nothing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where spouse/CP and issue survive, spouse commonly takes personal chattels + statutory legacy + a share of residue, with issue taking the remaining share (per stirpes).",
      whyWrong: [
        "Children do not entirely exclude spouse/CP in modern intestacy scheme.",
        "—",
        "There is no rule limiting the spouse to only the home.",
        "Children usually still receive a share where both spouse and issue survive."
      ]
    }
  },
  {
    topic: "Spouse/CP — statutory legacy (concept)",
    q: "The 'statutory legacy' in intestacy is best described as:",
    choices: [
      "A discretionary payment the court may award",
      "A fixed-sum entitlement for the spouse/civil partner, set by law and updated from time to time",
      "A gift only available if the spouse is also an executor",
      "The same as personal chattels"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The statutory legacy is a fixed sum payable to the spouse/CP where spouse and issue survive, set by statute/order and periodically updated.",
      whyWrong: [
        "It is not discretionary.",
        "—",
        "Executorship is irrelevant.",
        "Personal chattels are a separate category."
      ]
    }
  },
  {
    topic: "No spouse/CP — who is next in line",
    q: "D dies intestate with no surviving spouse/civil partner but leaves two children. The estate goes to:",
    choices: [
      "Parents",
      "Children (issue)",
      "Full siblings",
      "Grandparents"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If there is no spouse/CP, the issue take next (children, then descendants by representation).",
      whyWrong: [
        "Parents are below issue.",
        "—",
        "Siblings are below issue.",
        "Grandparents are lower down the ladder."
      ]
    }
  },
  {
    topic: "No spouse/CP, no issue — parents",
    q: "D dies intestate leaving no spouse/civil partner and no children/descendants, but both parents survive. Who takes?",
    choices: [
      "Parents",
      "Full siblings",
      "Half siblings",
      "The Crown"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If there is no spouse/CP and no issue, parents are next in the entitlement ladder.",
      whyWrong: [
        "—",
        "Siblings come after parents.",
        "Half siblings come even later.",
        "The Crown is last resort when no entitled relatives exist."
      ]
    }
  },
  {
    topic: "No spouse/CP, no issue, no parents — full siblings",
    q: "D dies intestate leaving no spouse/CP, no issue, and no surviving parents, but has a surviving full sister (S). The estate goes to:",
    choices: [
      "S as full sibling",
      "Half siblings equally",
      "Grandparents",
      "The Crown"
    ],
    correct: 0,
    explain: {
      whyRight:
        "After parents, full siblings (and their issue by representation) are next in line.",
      whyWrong: [
        "—",
        "Half siblings are lower priority than full siblings.",
        "Grandparents come after siblings.",
        "The Crown is only if no entitled relatives exist."
      ]
    }
  },
  {
    topic: "Full siblings — representation",
    q: "D dies intestate leaving no spouse/CP, no issue, no parents. D had two full siblings: S1 (alive) and S2 (died leaving a child N). How is S2’s share treated?",
    choices: [
      "S1 takes everything",
      "N can take S2’s share by representation",
      "S2’s share goes to the Crown",
      "S2’s share goes to D’s grandparents"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Representation applies to siblings too: if a sibling predeceases leaving descendants, those descendants can inherit that sibling’s share.",
      whyWrong: [
        "Not if representation applies.",
        "—",
        "The Crown is only if there are no entitled relatives.",
        "Grandparents are below siblings in priority."
      ]
    }
  },
  {
    topic: "Half siblings — priority",
    q: "Half siblings generally inherit on intestacy:",
    choices: [
      "Before full siblings",
      "After full siblings (and their issue), but before grandparents",
      "Only if named in a will",
      "Only if they lived with the deceased"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Half siblings are lower priority than full siblings but can inherit if there are no spouse/CP, issue, parents or full siblings entitled.",
      whyWrong: [
        "Full siblings have priority over half siblings.",
        "—",
        "Half siblings can inherit under intestacy without being named in a will.",
        "Cohabitation does not determine sibling entitlement."
      ]
    }
  },
  {
    topic: "Grandparents — when they inherit",
    q: "Grandparents inherit on intestacy only if there is:",
    choices: [
      "No spouse/CP, no issue, no parents, and no siblings (full/half) or their issue entitled",
      "No spouse/CP only",
      "No issue only",
      "No will only"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Grandparents are further down the ladder and inherit only after spouse/CP, issue, parents, and siblings (full then half) and their issue.",
      whyWrong: [
        "Spouse/CP absence alone is not enough.",
        "Issue absence alone is not enough.",
        "No will triggers intestacy, but entitlement depends on the ladder."
      ]
    }
  },
  {
    topic: "Aunts/uncles — whole blood vs half blood",
    q: "If the estate reaches aunts/uncles, which is generally correct about priority?",
    choices: [
      "Half-blood aunts/uncles inherit before whole-blood aunts/uncles",
      "Whole-blood aunts/uncles inherit before half-blood aunts/uncles",
      "Aunts/uncles never inherit under intestacy",
      "Only maternal aunts/uncles can inherit"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where relevant, whole-blood relatives generally have priority over half-blood equivalents at the same generational level.",
      whyWrong: [
        "This reverses the typical priority.",
        "—",
        "They can inherit if the ladder reaches them.",
        "No maternal-only rule."
      ]
    }
  },
  {
    topic: "Bona vacantia — last resort",
    q: "If no entitled relatives exist under the intestacy ladder, the estate generally passes to:",
    choices: ["The local council", "The Crown (bona vacantia)", "The deceased’s friends", "HMRC"],
    correct: 1,
    explain: {
      whyRight:
        "If there are no entitled relatives, the estate passes to the Crown as bona vacantia (last resort).",
      whyWrong: [
        "Local councils do not inherit by default.",
        "—",
        "Friends do not inherit under intestacy rules (absent a will).",
        "HMRC is a creditor, not the default heir."
      ]
    }
  },
  {
    topic: "Cohabitants — default position",
    q: "D dies intestate leaving a long-term cohabiting partner but no spouse/civil partner. Which is most accurate?",
    choices: [
      "Cohabitants inherit automatically like spouses",
      "Cohabitants do not inherit under the basic intestacy rules (though they may have other potential claims)",
      "Cohabitants inherit if they lived together for 2 years",
      "Cohabitants inherit if they were engaged"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A cohabitant is not treated as a spouse/CP for intestacy; they do not inherit under the basic ladder (though separate claims may be possible).",
      whyWrong: [
        "Spouse/CP status is required for spousal intestacy rights.",
        "—",
        "Cohabitation length does not create basic intestacy entitlement.",
        "Engagement is not a trigger for intestacy entitlement."
      ]
    }
  },
  {
    topic: "Partial intestacy — definition",
    q: "Partial intestacy occurs when:",
    choices: [
      "A will is handwritten",
      "A valid will exists but does not effectively dispose of the entire estate",
      "There are no surviving relatives",
      "The Probate Registry rejects the application for a grant"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Partial intestacy happens where a valid will exists but some property is not disposed of (e.g., no residue clause or a gift fails).",
      whyWrong: [
        "Handwriting does not cause partial intestacy.",
        "—",
        "No relatives leads to bona vacantia, not 'partial intestacy' as a concept.",
        "Grant issues are procedural, not definitional."
      ]
    }
  },
  {
    topic: "Partial intestacy — missing residue clause",
    q: "A will makes several specific gifts but contains no residue clause, and there are assets left over. The leftover assets will generally:",
    choices: [
      "Go to the witnesses",
      "Pass under intestacy rules as undisposed residue (partial intestacy)",
      "Be divided equally among all legatees",
      "Automatically pass to the spouse regardless of other relatives"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If there is no effective residue clause, undisposed property passes under intestacy rules (partial intestacy).",
      whyWrong: [
        "Witnesses have no default right.",
        "—",
        "There is no automatic equal split among legatees without a will clause.",
        "Spouse entitlement depends on the intestacy scheme and who survives."
      ]
    }
  },
  {
    topic: "Failed gift — effect where there is a residue clause",
    q: "A will leaves '£10,000 to A' but A dies before T and there is a residue clause leaving residue to B. If the £10,000 gift fails and no saving rule applies, it will generally:",
    choices: [
      "Go to A’s children automatically",
      "Fall into residue and go to B",
      "Be shared between witnesses",
      "Trigger intestacy for the whole estate"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If a specific gift fails and does not pass by a saving provision, it generally falls into the residue if there is a valid residue clause.",
      whyWrong: [
        "Not automatic; depends on saving rules (e.g., anti-lapse) and facts.",
        "—",
        "Witnesses do not benefit by default.",
        "A failed gift does not usually invalidate the whole will."
      ]
    }
  },
  {
    topic: "Representation — per stirpes vs per capita",
    q: "Under intestacy, descendants generally inherit:",
    choices: [
      "Per capita only (equal shares across all descendants regardless of branch)",
      "Per stirpes (by branch/representation)",
      "Only the eldest descendant inherits",
      "Only male descendants inherit"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Intestacy uses representation: descendants inherit per stirpes (by branch), meaning a deceased child’s issue can take that child’s share.",
      whyWrong: [
        "Per capita across all descendants is not the general intestacy approach.",
        "—",
        "Primogeniture does not apply to modern intestacy.",
        "No gender-based rule."
      ]
    }
  },
  {
    topic: "Adoption — effect on inheritance",
    q: "C was adopted by D. D dies intestate. Which is most accurate?",
    choices: [
      "C cannot inherit because they are not biologically related",
      "C generally inherits as D’s child for intestacy purposes",
      "C inherits only if named in a will",
      "C inherits only if over 18"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Legally adopted children are generally treated as the child of the adoptive parent for inheritance, including intestacy.",
      whyWrong: [
        "Biological relation is not required for legal parent-child status after adoption.",
        "—",
        "Intestacy does not require naming in a will.",
        "No such age restriction on inheriting under intestacy."
      ]
    }
  },
  {
    topic: "Simultaneous deaths — survivorship relevance",
    q: "D and S die in the same accident and it is unclear who died first. For intestacy, which is a key consequence?",
    choices: [
      "S always inherits because spouses have priority",
      "If S cannot be shown to have survived D (and/or the 28-day rule is not met), S may be treated as not inheriting under intestacy",
      "The estate always passes to parents",
      "The estate always passes to the Crown"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Intestacy entitlement depends on survivorship (including the 28-day rule). If S cannot be shown to meet the survivorship requirement, S may be treated as predeceased for intestacy purposes.",
      whyWrong: [
        "Priority depends on survivorship.",
        "—",
        "Parents inherit only if higher classes are not entitled.",
        "The Crown is only a last resort."
      ]
    }
  },
  {
    topic: "Disclaimers — effect (conceptual)",
    q: "If an entitled intestacy beneficiary disclaims their inheritance, the most accurate general effect is:",
    choices: [
      "The disclaimer is invalid under intestacy",
      "Their entitlement is treated as if they had died before the deceased, and the estate is re-distributed accordingly",
      "The disclaimed share goes automatically to the disclaimant’s spouse",
      "The PRs can keep the disclaimed share"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A valid disclaimer generally results in the beneficiary being treated as having predeceased for distribution purposes, so the estate is redistributed under the intestacy scheme.",
      whyWrong: [
        "Disclaimers can be valid in principle.",
        "—",
        "There is no automatic spouse transfer rule.",
        "PRs do not keep the estate; they administer it."
      ]
    }
  },
  {
    topic: "Parents vs siblings — priority check",
    q: "D dies intestate with no spouse/CP and no issue. D leaves one surviving parent and one full sibling. Who inherits?",
    choices: [
      "The full sibling",
      "The surviving parent",
      "They split equally",
      "The Crown"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Parents have priority over siblings where there is no spouse/CP and no issue.",
      whyWrong: [
        "Siblings come after parents.",
        "—",
        "No equal split at this level in the ladder.",
        "The Crown is last resort."
      ]
    }
  },
  {
    topic: "Half blood — when relevant",
    q: "Half siblings inherit only if:",
    choices: [
      "There is a spouse/CP",
      "There are no spouse/CP, issue, parents, and no full siblings (or their issue) entitled",
      "There are living grandparents",
      "They are named in a codicil"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Half siblings are reached only after spouse/CP, issue, parents, and full siblings (and their issue) are exhausted.",
      whyWrong: [
        "Spouse/CP presence generally prevents reaching siblings-only distribution levels.",
        "—",
        "Grandparents are below siblings.",
        "Naming in a codicil relates to wills, not intestacy."
      ]
    }
  },
  {
    topic: "Crown — not a discretionary scheme",
    q: "Which is most accurate about the Crown taking bona vacantia?",
    choices: [
      "It is a discretionary choice if the family disputes",
      "It happens only if no entitled relatives can be found within the intestacy scheme",
      "It happens whenever the estate is over £1 million",
      "It happens whenever there is no spouse"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Bona vacantia is the final outcome only if no entitled relatives exist under the statutory ladder.",
      whyWrong: [
        "It is not a discretionary choice.",
        "—",
        "No value threshold triggers bona vacantia.",
        "No spouse does not automatically mean bona vacantia."
      ]
    }
  },
  {
    topic: "Partial intestacy — residuary beneficiary absent",
    q: "A will leaves the entire residue to R, but R dies before T and there is no substitution and no other residue provision. The residue will generally:",
    choices: [
      "Automatically pass to R’s children",
      "Pass under intestacy rules (partial intestacy) unless a saving rule applies",
      "Be shared equally among the witnesses",
      "Pass to the solicitor who drafted the will"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If the residue gift fails and there is no effective alternative disposition, the undisposed residue generally passes by intestacy (partial intestacy), unless a saving provision applies.",
      whyWrong: [
        "Not automatic; depends on saving rules and wording.",
        "—",
        "Witnesses do not inherit by default.",
        "The drafter has no default right."
      ]
    }
  },
  {
    topic: "Intestacy — overarching principle",
    q: "Which statement best summarises intestacy distribution?",
    choices: [
      "It distributes based on who was closest emotionally",
      "It distributes according to a strict statutory hierarchy of relatives, subject to survivorship and representation rules",
      "It gives everything to the oldest child",
      "It allows PRs to choose who deserves it"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Intestacy is a statutory scheme: strict hierarchy, with survivorship (28 days) and representation determining who takes.",
      whyWrong: [
        "Emotional closeness is not the legal test.",
        "—",
        "Oldest-child priority is not the rule.",
        "PRs administer; they do not choose beneficiaries."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Wills and Estates | Chapter 5 | Intestacy",
    subtitle: "Distribution rules, net estate, and survivorship basics.",
    questions: questions
  };
})();
  
