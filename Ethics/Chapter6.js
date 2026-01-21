(() => {
  const questions = [
  {
    topic: "Wills ethics — identifying the client (will instructions)",
    q: "A daughter books an appointment and says: 'I’m paying, so you take instructions from me.' The elderly parent is making the will. Who is the client?",
    choices: [
      "The daughter because she is paying",
      "Both the daughter and the parent jointly",
      "The parent (testator) only, unless you separately retainer the daughter",
      "Whichever person speaks most during the meeting"
    ],
    correct: 2,
    explain: {
      whyRight:
        "For a will, the testator is the client. A third-party payer does not become the client just by paying or arranging the appointment.",
      whyWrong: [
        "Payment does not determine who the client is.",
        "You cannot assume joint clients without a clear retainer and conflicts analysis.",
        "—",
        "Speaking most is irrelevant to client identity."
      ]
    }
  },
  {
    topic: "Wills ethics — seeing the testator alone (undue influence risk)",
    q: "A son insists on staying in the room while his mother gives will instructions, and answers questions for her. What is the best ethical step?",
    choices: [
      "Proceed because it saves time",
      "Proceed but record that the son was present",
      "Insist on speaking to the testator alone to ensure free, informed instructions and assess undue influence/capacity",
      "Refuse to act immediately without exploring further"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Presence and dominance by a beneficiary is a classic undue influence/vulnerability red flag. You should see the testator alone to confirm independent instructions and understanding.",
      whyWrong: [
        "Speed does not override safeguarding the client’s autonomy.",
        "Recording alone doesn’t cure the risk if you didn’t test independence.",
        "—",
        "Immediate refusal may be premature; first take proper steps (unless risk is extreme)."
      ]
    }
  },
  {
    topic: "Wills ethics — capacity: warning signs",
    q: "An older testator seems confused about assets and repeatedly forgets close family members. What is the most appropriate next step?",
    choices: [
      "Draft the will quickly before they forget more",
      "Take instructions from the family instead",
      "Pause and consider capacity assessment steps (e.g., medical evidence) and detailed attendance notes",
      "Proceed if the will is 'simple'"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Where capacity is in doubt, you should take steps to assess it properly (often including medical evidence) and document carefully.",
      whyWrong: [
        "Rushing increases risk of invalid will and professional breach.",
        "Family cannot replace the testator’s instructions.",
        "—",
        "Simplicity does not remove capacity concerns."
      ]
    }
  },
  {
    topic: "Wills ethics — instructions via third party",
    q: "A beneficiary emails you a full draft will 'approved by Dad' and asks you to finalise it without meeting Dad. Best analysis?",
    choices: [
      "Accept: it’s efficient",
      "Accept if the beneficiary signs to confirm accuracy",
      "High risk: you should take instructions directly from the testator and assess capacity/voluntariness",
      "Accept if the will leaves everything to that beneficiary"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Taking instructions through a beneficiary is a major undue influence and capacity risk. You should take instructions from the testator directly.",
      whyWrong: [
        "Efficiency does not override safeguarding duties.",
        "A beneficiary’s confirmation is not independent instructions.",
        "—",
        "A one-beneficiary will increases the risk; it does not justify it."
      ]
    }
  },
  {
    topic: "Wills ethics — solicitor as beneficiary",
    q: "A testator insists on leaving you a substantial legacy because you 'helped so much'. You are drafting the will. Best analysis?",
    choices: [
      "Proceed if you disclose it in your file notes",
      "Proceed if the client confirms in writing",
      "Very high risk: you should not draft a will giving yourself a benefit; independent advice/different solicitor is required (often refusal to act)",
      "Proceed if the legacy is under £500"
    ],
    correct: 2,
    explain: {
      whyRight:
        "A gift to the drafter creates serious conflict and integrity risk and risks challenge. The safe approach is independent drafting/advice (often by another firm/solicitor).",
      whyWrong: [
        "Disclosure alone does not cure a conflict of this seriousness.",
        "Client confirmation is not enough to remove the risk.",
        "—",
        "Amount does not remove the conflict risk."
      ]
    }
  },
  {
    topic: "Wills ethics — witness independence",
    q: "A main beneficiary offers to witness the will to 'make it quicker'. Best analysis?",
    choices: [
      "Acceptable if the beneficiary is reliable",
      "Acceptable if two other witnesses are also present",
      "Inadvisable: beneficiary-witnessing risks invalidating their gift and creates challenge risk; use independent witnesses",
      "Required because beneficiaries should confirm the will"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Beneficiary witnesses create serious validity and challenge issues. Independent witnesses should be used.",
      whyWrong: [
        "Reliability doesn’t solve the legal/ethical risk.",
        "Additional witnesses don’t fix the beneficiary witness problem for their gift.",
        "—",
        "Beneficiaries are not required to witness."
      ]
    }
  },
  {
    topic: "Wills ethics — file notes and suspicious circumstances",
    q: "A will cuts out the testator’s children and leaves everything to a new carer. What is the best practice to reduce risk of later challenge?",
    choices: [
      "Do nothing; it’s the testator’s choice",
      "Rely on the carer to explain the reasons",
      "Take detailed contemporaneous notes, test capacity and independence, and consider additional safeguards (e.g., medical evidence)",
      "Ask the carer to sign a statement confirming no pressure"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Suspicious circumstances require enhanced safeguards: independent instructions, capacity checks, and careful documentation.",
      whyWrong: [
        "Choice is respected, but you must manage risk where circumstances look suspicious.",
        "Carer explanations are not independent evidence of free intention.",
        "—",
        "Carer statements do not replace independent safeguards."
      ]
    }
  },
  {
    topic: "Wills ethics — confidentiality (after death)",
    q: "After the testator dies, a disappointed beneficiary asks for your attendance notes of the will meeting. The PR has not authorised disclosure. Best analysis?",
    choices: [
      "Disclose because the client is deceased",
      "Disclose because beneficiaries are entitled to know the reasons",
      "Do not disclose without proper authority/legal basis; confidentiality generally continues after death",
      "Disclose if the beneficiary threatens to complain"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Confidentiality does not end at death. Disclosure of notes requires proper authority (typically PR instructions) or legal basis.",
      whyWrong: [
        "Death does not automatically remove confidentiality.",
        "Beneficiaries are not automatically entitled to the deceased’s confidential communications.",
        "—",
        "Threats do not create a lawful basis to disclose."
      ]
    }
  },
  {
    topic: "Wills ethics — who is the client in administration",
    q: "You are instructed to administer an estate. The beneficiaries keep emailing you for updates and instructions. Who is your client in a typical estate administration retainer?",
    choices: [
      "All beneficiaries collectively",
      "The PRs (executors/administrators)",
      "The deceased person",
      "The probate registry"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In estate administration, you are usually retained by the PRs. Beneficiaries are typically third parties (unless separately retained).",
      whyWrong: [
        "You cannot assume beneficiaries are joint clients without a retainer.",
        "—",
        "The deceased is not a current client for the ongoing retainer.",
        "The court is not your client."
      ]
    }
  },
  {
    topic: "Wills ethics — PRs disagree (conflict risk)",
    q: "Two executors instruct you. One wants to sell the house quickly; the other refuses and accuses them of self-interest. Best analysis?",
    choices: [
      "Continue acting for both without comment",
      "Act for the executor who seems more reasonable",
      "Conflict risk: if PRs’ interests diverge and you cannot take joint instructions, you may need to stop acting for one or both",
      "Take instructions from the majority beneficiaries instead"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Where joint PR clients are in dispute, you may be unable to act for both if you cannot receive clear instructions or interests conflict.",
      whyWrong: [
        "Ignoring the dispute can breach duties and worsen risk.",
        "Picking sides without proper process is improper.",
        "—",
        "Beneficiaries cannot override PR authority."
      ]
    }
  },
  {
    topic: "Wills ethics — PR wrongdoing",
    q: "You discover an executor has been using estate money for personal expenses. What is the most accurate first step?",
    choices: [
      "Ignore it because it is the executor’s responsibility",
      "Tell the beneficiaries immediately",
      "Raise it with the PR client(s), advise on duties/rectification, and consider whether you can continue to act if misconduct persists",
      "Withdraw and publish a warning online"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You should address it with the PR client(s) first, advise them of fiduciary duties and remedies, and manage conflict/confidentiality carefully. Continuing may become impossible if dishonesty persists.",
      whyWrong: [
        "Ignoring potential misconduct can be a serious breach.",
        "You cannot automatically disclose confidential information to beneficiaries.",
        "—",
        "Public warnings breach confidentiality and are inappropriate."
      ]
    }
  },
  {
    topic: "Wills ethics — beneficiary requests for information",
    q: "A beneficiary demands a full copy of your advice to the executors about whether to defend a claim. Best analysis?",
    choices: [
      "Disclose because beneficiaries fund the estate indirectly",
      "Disclose because executors owe beneficiaries duties",
      "Do not disclose privileged/confidential advice without PR authority or legal basis; you can provide appropriate factual updates if authorised",
      "Disclose if the beneficiary is also a close relative"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Your advice to PRs is confidential/privileged as between solicitor and PR client(s). Beneficiaries are not automatically entitled to it.",
      whyWrong: [
        "Funding source does not change confidentiality/privilege.",
        "Executor duties do not remove privilege automatically.",
        "—",
        "Family relationship does not create entitlement."
      ]
    }
  },
  {
    topic: "Wills ethics — contentious probate emerging",
    q: "A beneficiary threatens to challenge the will and asks you to represent them, but you drafted the will for the deceased. Best analysis?",
    choices: [
      "Act because you know the file best",
      "Act if the executors consent",
      "High conflict risk: you must assess confidentiality to the deceased/PRs and conflicts; you will often be unable to act for the challenger",
      "Act if you use a different team"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Drafting the will creates serious conflict/confidentiality issues, especially if you are asked to act against the will/estate interests.",
      whyWrong: [
        "Knowing the file can worsen conflict and confidentiality risk.",
        "Consent does not automatically make it permissible.",
        "—",
        "A different team does not automatically cure conflict."
      ]
    }
  },
  {
    topic: "Wills ethics — storing original wills",
    q: "Your firm holds the original will. After death, a beneficiary asks you to release it directly to them. Best analysis?",
    choices: [
      "Release it because beneficiaries are entitled",
      "Release it if they promise to keep it safe",
      "Release only to the PRs (or someone authorised by the PRs/court); handle as a client document",
      "Refuse always; firms must never release originals"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The original will should usually be released to the PRs or a properly authorised person, not directly to beneficiaries without authority.",
      whyWrong: [
        "Beneficiaries are not automatically entitled to possession.",
        "Promises do not create authority.",
        "—",
        "Release can be appropriate to authorised persons."
      ]
    }
  },
  {
    topic: "Wills ethics — costs transparency in estate work",
    q: "You begin estate administration without explaining likely fees, billing basis, or that costs may come from the estate. Best analysis?",
    choices: [
      "Fine; costs are obvious in probate work",
      "Fine if the PRs are experienced",
      "Potential breach: you should provide clear costs/client care information at the outset and update as needed",
      "Fine if you only bill at the end"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Client care requires costs information early and updated appropriately so PRs can make informed decisions.",
      whyWrong: [
        "Obviousness is not enough.",
        "Experience does not remove the obligation.",
        "—",
        "Timing of billing doesn’t remove the duty to inform."
      ]
    }
  },
  {
    topic: "Wills ethics — third-party payer (will drafting)",
    q: "A beneficiary pays for the testator’s will and asks for a copy of the draft before the testator sees it. Best analysis?",
    choices: [
      "Provide it because they paid",
      "Provide it because it’s just a draft",
      "Do not disclose without the testator’s consent; confidentiality is owed to the testator",
      "Provide it but remove the financial gifts"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The testator is the client; you cannot share drafts/contents with a third party payer without the client’s consent.",
      whyWrong: [
        "Payment does not create entitlement.",
        "Drafts can still be confidential.",
        "—",
        "Editing doesn’t cure the confidentiality breach."
      ]
    }
  },
  {
    topic: "Wills ethics — will execution supervision",
    q: "You cannot attend execution. The client suggests the main beneficiary will arrange witnesses at home. Best advice?",
    choices: [
      "Agree: any witnesses will do",
      "Agree if the beneficiary promises independence",
      "Advise independent witnesses and safe execution procedure; avoid beneficiary involvement that creates challenge risk",
      "Advise the beneficiary to sign as witness to prove authenticity"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Execution errors and beneficiary involvement increase challenge risk. Advise independent witnesses and correct formalities.",
      whyWrong: [
        "Not all witness choices are safe; beneficiary involvement is risky.",
        "Promises do not remove risk.",
        "—",
        "Beneficiary witnessing is risky and can affect gifts."
      ]
    }
  },
  {
    topic: "Wills ethics — capacity 'golden rule' style approach",
    q: "A very elderly testator changes a long-standing will significantly. What is the safest approach?",
    choices: [
      "Proceed with no extra steps because it’s their right",
      "Ask the main beneficiary if this is sensible",
      "Consider enhanced safeguards: independent meeting, detailed notes, and where appropriate medical evidence of capacity",
      "Refuse to act because older clients cannot change wills"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Major changes for an elderly client are a classic challenge risk; enhanced safeguards reduce risk and protect client autonomy.",
      whyWrong: [
        "Rights exist, but safeguards are still prudent.",
        "Beneficiary input risks undue influence.",
        "—",
        "Age alone does not remove capacity."
      ]
    }
  },
  {
    topic: "Wills ethics — keeping the court/registry accurate",
    q: "A PR asks you to omit a known asset from the IHT/probate papers to reduce tax. Best analysis?",
    choices: [
      "Do it because it benefits the beneficiaries",
      "Do it if the asset is small",
      "Refuse: assisting dishonesty/illegality breaches integrity; advise properly and consider reporting/ceasing to act if they persist",
      "Do it but keep a file note"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not assist fraud/tax evasion or mislead authorities. Integrity and rule of law duties override client wishes.",
      whyWrong: [
        "Client benefit does not justify dishonesty.",
        "Amount does not make dishonesty acceptable.",
        "—",
        "File notes do not legalise misconduct."
      ]
    }
  },
  {
    topic: "Wills ethics — beneficiary pressure in meeting",
    q: "A beneficiary repeatedly interrupts and pressures the testator to 'do the right thing' and leave them the house. Best analysis?",
    choices: [
      "Let it happen; family dynamics are normal",
      "Proceed as long as the testator nods",
      "Stop and see the testator alone; assess undue influence and voluntariness before continuing",
      "Only proceed if the beneficiary signs a disclaimer"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Pressure by a beneficiary is a red flag for undue influence. You must secure free, independent instructions.",
      whyWrong: [
        "Normal dynamics can still be undue influence.",
        "Nodding is not sufficient evidence of free intention/understanding.",
        "—",
        "A disclaimer does not remove the ethical risk."
      ]
    }
  },
  {
    topic: "Wills ethics — acting for PR and beneficiary simultaneously",
    q: "You act for an executor. The same person is also a beneficiary and asks for advice on whether they can take an asset early. Best analysis?",
    choices: [
      "No issue because it’s the same individual",
      "Always treat them as beneficiary only",
      "You must be clear in what capacity you are advising (PR role vs personal/beneficiary role) and manage conflict risk",
      "Advise informally so it’s not a retainer"
    ],
    correct: 2,
    explain: {
      whyRight:
        "One person can have multiple roles. You must clarify the capacity, scope, and manage conflicts between fiduciary duties and personal interests.",
      whyWrong: [
        "Same person does not remove role conflicts.",
        "They are still your PR client if retained as executor.",
        "—",
        "Avoiding formality increases risk; it does not solve it."
      ]
    }
  },
  {
    topic: "Wills ethics — beneficiary wants you to 'explain reasons'",
    q: "A disappointed beneficiary asks: 'Tell me why Mum cut me out.' You have attendance notes from Mum’s meeting. Best analysis?",
    choices: [
      "Tell them to reduce conflict",
      "Tell them only if they promise secrecy",
      "Do not disclose the deceased’s confidential instructions without proper authority/legal basis",
      "Tell them if you personally think it was unfair"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The deceased’s instructions are confidential. Without authority or legal basis, you should not disclose reasons or notes.",
      whyWrong: [
        "Reducing conflict is not a lawful basis to disclose.",
        "Promises do not create consent/authority.",
        "—",
        "Personal views are irrelevant."
      ]
    }
  },
  {
    topic: "Wills ethics — estate funds and transparency",
    q: "Executors ask you to bill all work to the estate but request you do extra private work for them personally 'off the books'. Best analysis?",
    choices: [
      "Agree; it keeps clients happy",
      "Agree if the estate is large",
      "Refuse: you must be transparent about costs and not misallocate charges; integrity and proper billing are required",
      "Agree but make it a verbal arrangement"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Billing must be honest and transparent. Misallocating personal work to the estate is improper.",
      whyWrong: [
        "Client happiness doesn’t justify improper billing.",
        "Size doesn’t change ethics.",
        "—",
        "Verbal arrangements worsen the misconduct."
      ]
    }
  },
  {
    topic: "Wills ethics — lost will and client document handling",
    q: "A PR asks you to say you never held the original will because it has been misplaced at your firm. Best analysis?",
    choices: [
      "Say it to help the PR get probate quickly",
      "Say it if your supervisor agrees",
      "Refuse: honesty/integrity require accurate disclosure; you must deal with the error openly and properly",
      "Say it but keep the truth in a private note"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must not lie or mislead. If the firm mislaid a document, it must be dealt with transparently and professionally.",
      whyWrong: [
        "Speed does not justify dishonesty.",
        "Supervisor approval doesn’t make dishonesty acceptable.",
        "—",
        "Private notes don’t cure misleading statements."
      ]
    }
  },
  {
    topic: "Wills ethics — rectifying execution mistakes",
    q: "You realise after the client leaves that the will was signed but only one witness signed. What is the best step?",
    choices: [
      "Do nothing; it’s probably fine",
      "Ask the witness to sign later without the testator present",
      "Contact the client promptly to arrange proper re-execution in accordance with formalities",
      "Backdate the second witness signature"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Execution formalities matter. You should promptly rectify by arranging correct execution, not patching it improperly.",
      whyWrong: [
        "It may be invalid; ignoring is risky.",
        "Witnessing later without required presence is problematic.",
        "—",
        "Backdating is dishonest and serious misconduct."
      ]
    }
  },
  {
    topic: "Wills ethics — will storage and release to PR",
    q: "After death, the PR requests the original will and you are satisfied they are properly appointed. Best approach?",
    choices: [
      "Refuse because the will belongs to the beneficiaries",
      "Release it only to a beneficiary who promises to file probate",
      "Release to the PR (or authorised agent) with appropriate identification and record of delivery",
      "Photocopy it and destroy the original"
    ],
    correct: 2,
    explain: {
      whyRight:
        "The original will should be released to the PR (or authorised person) with proper checks and records.",
      whyWrong: [
        "Beneficiaries are not automatically entitled to possession.",
        "A beneficiary promise is not authority.",
        "—",
        "Destroying originals is improper."
      ]
    }
  },
  {
    topic: "Wills ethics — beneficiaries and 'instructions'",
    q: "A beneficiary emails: 'Tell the executors to distribute now.' Best analysis?",
    choices: [
      "Follow the beneficiary’s instructions as they inherit",
      "Follow if the beneficiary is the largest beneficiary",
      "Your instructions come from the PR client(s), not beneficiaries; respond appropriately without breaching confidentiality",
      "Ignore all beneficiary emails completely"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Beneficiaries are not usually the client. You take instructions from PRs and must manage communications appropriately.",
      whyWrong: [
        "Inheritance does not create instruction rights over the solicitor.",
        "Size of benefit is irrelevant.",
        "—",
        "You can respond, but carefully and within confidentiality limits."
      ]
    }
  },
  {
    topic: "Wills ethics — estate dispute: acting for PR and beneficiary claimant",
    q: "You act for executors. A beneficiary asks you to also advise them on making an Inheritance Act claim against the estate. Best analysis?",
    choices: [
      "Act for both; it’s one estate",
      "Act for both if they consent in an email",
      "Conflict: the claim is against the estate/PRs; you cannot act for both sides",
      "Act for the beneficiary only because they asked first"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Advising a claimant against the estate conflicts with acting for the executors/estate administration. You cannot act for both.",
      whyWrong: [
        "Same estate does not remove adverse interests.",
        "An email 'consent' does not cure a non-permitted conflict.",
        "—",
        "Timing does not justify acting against your PR client."
      ]
    }
  },
  {
    topic: "Wills ethics — drafting legacy to staff member",
    q: "A testator wants to leave a gift to your paralegal who has been helping them. You are drafting the will. Best analysis?",
    choices: [
      "Proceed; conflict only exists if the solicitor benefits",
      "Proceed if the paralegal signs a disclaimer",
      "High risk: gifts to firm/staff create serious conflict and challenge risk; require independent advice/drafter",
      "Proceed if the gift is 'a token'"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Benefits to firm staff raise the same serious conflict and integrity risks as gifts to the drafter.",
      whyWrong: [
        "Conflict risk extends to firm and close associates/staff.",
        "A disclaimer doesn’t remove the conflict.",
        "—",
        "Amount doesn’t remove the risk."
      ]
    }
  },
  {
    topic: "Wills ethics — equality and non-discrimination",
    q: "A colleague suggests refusing to draft wills for clients with dementia 'because it’s too risky' even when capacity can be assessed. Best analysis?",
    choices: [
      "Acceptable; risk management allows blanket refusal",
      "Potential issue: you should not unfairly discriminate; manage risk with proper safeguards and assessments",
      "Acceptable if the firm is small",
      "Required by the SRA"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You must avoid unfair discrimination. Risk should be managed by appropriate safeguards rather than blanket exclusion where lawful and workable.",
      whyWrong: [
        "Blanket refusal may be unfair and not justified.",
        "—",
        "Firm size doesn’t change professional standards.",
        "There is no requirement to refuse categorically."
      ]
    }
  },
  {
    topic: "Wills ethics — competence: complex tax advice",
    q: "A testator asks detailed inheritance tax planning questions that you do not understand. Best analysis?",
    choices: [
      "Guess; it’s only planning",
      "Avoid answering and hope they don’t notice",
      "Get appropriate supervision/specialist input or refer; do not advise outside competence",
      "Tell the client tax is not relevant to wills"
    ],
    correct: 2,
    explain: {
      whyRight:
        "You must provide competent service. If outside competence, you should seek supervision/specialist advice or refer appropriately.",
      whyWrong: [
        "Guessing is unsafe and unethical.",
        "Avoidance is misleading and risks harm.",
        "—",
        "Tax often is relevant."
      ]
    }
  },
  {
    topic: "Wills ethics — PRs ask to 'delay' paying a creditor",
    q: "Executors ask you to delay paying a known creditor so beneficiaries can receive their gifts sooner. Best analysis?",
    choices: [
      "Do it because beneficiaries come first",
      "Do it if the creditor is small",
      "Advise executors of duties: estate debts must be dealt with properly; do not assist breach of fiduciary duty",
      "Ignore because it is the executors’ decision"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Executors have duties to settle debts properly. Assisting an improper distribution can be unethical and expose executors and solicitor to risk.",
      whyWrong: [
        "Beneficiaries do not come before lawful debts.",
        "Amount does not justify breach.",
        "—",
        "You must advise and not assist wrongdoing."
      ]
    }
  },
  {
    topic: "Wills ethics — quick spot: who can waive confidentiality after death?",
    q: "Who most commonly can authorise disclosure of the deceased’s confidential file material after death (if any disclosure is appropriate)?",
    choices: [
      "Any beneficiary",
      "The PRs (executors/administrators), subject to legal limits",
      "The deceased’s friends",
      "The probate registry"
    ],
    correct: 1,
    explain: {
      whyRight:
        "PRs commonly control the estate administration and can authorise disclosure where lawful and appropriate, though confidentiality and privilege issues still need care.",
      whyWrong: [
        "Beneficiaries are not automatically entitled to control disclosure.",
        "—",
        "Friends have no authority by default.",
        "The registry does not act as client authority."
      ]
    }
  }
];


  window.quizData = {
    title: "SQE1 Ethics | Chapter 6 | Wills and Capacity Ethics",
    subtitle: "Client identity, undue influence risks, and capacity checks.",
    questions: questions
  };
})();
  
