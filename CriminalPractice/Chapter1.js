(() => {
    const questions = [
  {
    topic: "Police station process — custody officer’s role",
    q: "On arrival at the police station, who decides whether D is detained and ensures a custody record is opened?",
    choices: [
      "The investigating officer",
      "The custody officer",
      "The duty solicitor",
      "The arresting officer’s supervisor"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The custody officer is responsible for authorising detention (where lawful), maintaining the custody record, and ensuring key safeguards are followed.",
      whyWrong: [
        "Investigators investigate; custody authorisation is a separate safeguard function.",
        "—",
        "Solicitors advise; they do not authorise detention.",
        "A supervisor may be involved in extensions, but the custody officer manages custody authorisation/record."
      ]
    }
  },
  {
    topic: "Police station process — initial solicitor priorities",
    q: "You receive a call to attend the station for D. What is the best first priority on arrival (before substantive interview advice)?",
    choices: [
      "Tell D to answer all questions to look cooperative",
      "Assess fitness/vulnerability, confirm rights, and obtain disclosure",
      "Ask police whether they can offer a caution immediately",
      "Tell D to refuse all procedures (fingerprints/DNA) automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "You must first ensure D is fit and safeguarded (including vulnerability/AA/interpreter), confirm rights, and obtain enough disclosure to give meaningful interview advice.",
      whyWrong: [
        "Automatic full answers can be risky without disclosure/fitness checks.",
        "—",
        "A caution decision is not your first control point and is case-dependent.",
        "Refusing procedures automatically is poor advice; lawfulness/strategy varies by procedure."
      ]
    }
  },
  {
    topic: "Rights in custody — legal advice",
    q: "Which statement best reflects D’s right to legal advice at the police station?",
    choices: [
      "Legal advice is only available after charge",
      "D has a right to legal advice while detained; interviews should generally not proceed once requested until advice is given (subject to narrow exceptions)",
      "Legal advice is only for indictable offences",
      "Police may discourage legal advice if it will delay the investigation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Legal advice is a core custody safeguard. If requested, interview should not usually proceed until advice is provided, save for limited authorised exceptions.",
      whyWrong: [
        "Legal advice is available pre-charge.",
        "—",
        "It is not restricted to indictable offences.",
        "Police must not dissuade access to legal advice."
      ]
    }
  },
  {
    topic: "Rights in custody — someone informed",
    q: "D asks police to tell a family member that they are at the station. Which is most accurate?",
    choices: [
      "This is only available to juveniles",
      "D has a right to have someone informed, subject to limited lawful delay/exception",
      "Police can refuse whenever the offence is serious",
      "This happens only after D is charged"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A key custody right is to have someone informed of arrest/detention, with limited grounds for lawful delay in specific circumstances.",
      whyWrong: [
        "Adults also have this right; juveniles have additional protections.",
        "—",
        "Seriousness alone is not enough to refuse.",
        "It applies during detention, not only after charge."
      ]
    }
  },
  {
    topic: "Custody welfare — fitness to be interviewed",
    q: "D appears heavily intoxicated and confused. Police want to interview immediately. What is your best advice?",
    choices: [
      "Proceed—intoxication makes answers unreliable but admissible anyway",
      "Insist on assessing fitness to interview, seek medical input if needed, and delay interview until D can understand and participate",
      "Tell D to confess quickly to get released",
      "Tell D to stay silent because intoxication guarantees no adverse inferences"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Fitness to interview is crucial. If D cannot understand/participate, interview should be delayed and medical/appropriate safeguards used.",
      whyWrong: [
        "Unfitness can undermine fairness and admissibility; you should not allow a procedurally unfair interview.",
        "—",
        "Confession advice is not a default and may be catastrophic.",
        "Intoxication does not ‘guarantee’ protection from inferences or consequences."
      ]
    }
  },
  {
    topic: "Vulnerable suspects — appropriate adult (juvenile)",
    q: "D is 17 and suspected of theft. Which is most accurate?",
    choices: [
      "No special safeguards apply because theft is minor",
      "An appropriate adult should be involved for key procedures such as interview, unless a narrow exception applies",
      "A solicitor replaces the need for an appropriate adult automatically",
      "An appropriate adult is only provided if D asks"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Juveniles generally require an appropriate adult for key stages (especially interview) to safeguard rights and welfare.",
      whyWrong: [
        "Safeguards are not offence-dependent in that way.",
        "—",
        "A solicitor does not automatically replace the AA safeguard.",
        "The safeguard is triggered by youth/vulnerability, not only by request."
      ]
    }
  },
  {
    topic: "Vulnerable suspects — appropriate adult (mentally vulnerable adult)",
    q: "D is an adult with a learning disability affecting understanding. Police say, 'He seems calm, so no AA is needed.' What is most accurate?",
    choices: [
      "If calm, no AA is ever needed",
      "An AA may be required where mental vulnerability affects understanding/communication; you should press for AA before interview",
      "AA is only required for children",
      "AA is optional if the interview is recorded"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Mental vulnerability can require an AA to ensure D understands and can participate. Calmness is not the test.",
      whyWrong: [
        "Being calm does not equal understanding or capacity to participate.",
        "—",
        "Adults can require AA where mentally vulnerable.",
        "Recording doesn’t replace safeguards."
      ]
    }
  },
  {
    topic: "Your role — explaining the custody record",
    q: "Why is the custody record important for your client?",
    choices: [
      "It is just internal paperwork with no practical value",
      "It records rights given, decisions, reviews, requests (solicitor/medical), and events that can support later challenges",
      "It guarantees release within 6 hours",
      "It replaces the need for an interview record"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The custody record is a contemporaneous log of safeguards and decisions; it can be critical in disputes about fairness and legality.",
      whyWrong: [
        "It often becomes highly important evidence of process.",
        "—",
        "It does not guarantee release within a set number of hours.",
        "It does not replace interview recording/notes."
      ]
    }
  },
  {
    topic: "Disclosure — purpose",
    q: "What is the main reason you seek disclosure before interview?",
    choices: [
      "To help police strengthen their case",
      "To advise properly on interview strategy and manage evidential risk",
      "To decide whether the custody officer can authorise detention",
      "To prevent the client from being fingerprinted"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Meaningful advice requires knowing what allegation/evidence will be put to the client so you can protect them from avoidable self-incrimination and inconsistencies.",
      whyWrong: [
        "Your duty is to your client, not to build the prosecution case.",
        "—",
        "Custody authorisation is not your decision.",
        "Disclosure does not control whether lawful biometric procedures occur."
      ]
    }
  },
  {
    topic: "Interview strategy — caution and consequences",
    q: "D is about to be questioned about suspected involvement in an offence. What should you ensure is done properly before and during interview?",
    choices: [
      "No caution is ever needed if D is detained",
      "Proper cautioning/recording and that D understands their rights and the process",
      "Police should avoid recording to keep things informal",
      "D should answer quickly without breaks to show cooperation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Interview safeguards focus on proper cautioning where required, clear understanding, lawful procedure, and accurate recording.",
      whyWrong: [
        "Detention does not remove caution requirements.",
        "—",
        "Informality undermines safeguards and accuracy.",
        "Rushing and denying breaks can make the process unfair and unreliable."
      ]
    }
  },
  {
    topic: "Silence — adverse inference risk",
    q: "D plans to say 'no comment' throughout interview. Which advice is most accurate?",
    choices: [
      "Silence can never have any consequences",
      "Silence may sometimes allow adverse inferences, so you must advise carefully with reference to what facts D may later rely on",
      "Silence automatically ends the case",
      "Silence is unlawful"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A 'no comment' strategy can be appropriate but must be advised with awareness of possible adverse inference rules where D later relies on unmentioned facts.",
      whyWrong: [
        "Silence can sometimes carry inference risks.",
        "—",
        "It does not automatically end proceedings.",
        "Silence is not unlawful."
      ]
    }
  },
  {
    topic: "Vulnerability — communication needs (interpreter)",
    q: "D’s first language is not English and they struggle to understand questions. What is the best step?",
    choices: [
      "Proceed if D appears to nod",
      "Request an interpreter and ensure D genuinely understands their rights and the interview",
      "Tell D to sign documents anyway",
      "Ask police to simplify by using leading questions"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Understanding is essential. An interpreter and clear explanations protect fairness and reliability.",
      whyWrong: [
        "Nodding is not proof of understanding.",
        "—",
        "Signing without understanding is dangerous and potentially unfair.",
        "Leading questions create reliability and fairness problems."
      ]
    }
  },
  {
    topic: "Vulnerability — autism/communication style",
    q: "D is autistic and becomes overwhelmed in noisy environments. Police insist on interviewing in a busy corridor area. Best advice?",
    choices: [
      "Agree; environment never matters",
      "Insist on reasonable adjustments and an appropriate environment to ensure D can participate and the interview is fair",
      "Tell D to mask distress to appear credible",
      "End legal advice because adjustments are not a police issue"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The interview environment can affect participation and fairness; you should push for adjustments that allow D to engage reliably.",
      whyWrong: [
        "Environment can directly affect comprehension and reliability.",
        "—",
        "Encouraging masking can worsen harm and reduce reliability.",
        "Adjustments are part of ensuring fairness and effective participation."
      ]
    }
  },
  {
    topic: "Custody time — detention reviews (concept)",
    q: "Why do detention reviews matter to your advice and interventions?",
    choices: [
      "They are routine paperwork only",
      "They are points to challenge ongoing necessity of detention and ensure lawful continued detention",
      "They only happen after charge",
      "They are conducted by the detainee"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Reviews are formal checkpoints to test whether detention remains necessary and lawful; you can make representations.",
      whyWrong: [
        "They can materially affect release/continued detention.",
        "—",
        "They happen pre-charge as part of detention safeguards.",
        "They are conducted by officers, not the detainee."
      ]
    }
  },
  {
    topic: "Legal advice — waiver and later change of mind",
    q: "D initially refused a solicitor. Later, before interview, D asks for legal advice. What should happen?",
    choices: [
      "Police can refuse because D waived earlier",
      "Police should allow D to obtain legal advice and generally delay interview until advice is given",
      "Police must interview immediately to prevent delay tactics",
      "D must wait until court"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A detainee can change their mind; legal advice should be facilitated and interview should generally wait for it (subject to limited exceptions).",
      whyWrong: [
        "A prior waiver does not permanently remove the right.",
        "—",
        "Delay tactics are not presumed; safeguards apply.",
        "Legal advice is not only available at court."
      ]
    }
  },
  {
    topic: "Improper pressure — discouraging legal advice",
    q: "An officer tells D, 'If you ask for a solicitor, you’ll be here all night.' What is most accurate?",
    choices: [
      "Acceptable motivational advice",
      "Improper: police must not discourage or dissuade access to legal advice",
      "Required as part of the caution",
      "Only improper if the offence is indictable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Statements designed to deter legal advice undermine a core safeguard and should be challenged and recorded.",
      whyWrong: [
        "It’s not acceptable to pressure someone to waive rights.",
        "—",
        "It is not part of the caution.",
        "Impropriety is not limited by offence type."
      ]
    }
  },
  {
    topic: "Vulnerable clients — AA role",
    q: "Which best describes the appropriate adult’s role for a vulnerable suspect?",
    choices: [
      "To give legal advice instead of the solicitor",
      "To safeguard the suspect’s welfare and help ensure understanding/communication during key procedures",
      "To persuade the suspect to confess",
      "To act as a witness for the police"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The AA is there to safeguard welfare and help ensure the suspect understands and can participate effectively; legal advice remains the solicitor’s role.",
      whyWrong: [
        "AA is not a substitute legal adviser.",
        "—",
        "AA should not pressure confessions.",
        "AA is not there to assist police; they are a safeguard for the suspect."
      ]
    }
  },
  {
    topic: "Interview planning — prepared statement option",
    q: "When might a prepared statement be strategically appropriate?",
    choices: [
      "Whenever the client has nothing to say",
      "Where you want to put forward a limited account/defence while controlling risk of unstructured questioning",
      "Only when police refuse to record the interview",
      "Only after charge"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A prepared statement can present key points while reducing the risk of damaging improvisation under pressure.",
      whyWrong: [
        "If there’s nothing to say, a prepared statement may not be needed.",
        "—",
        "Recording issues are not the primary reason for a prepared statement.",
        "It can be used pre-charge during interview strategy."
      ]
    }
  },
  {
    topic: "Custody welfare — medical assistance",
    q: "D says they need medication and feel unwell. Police say, 'After interview.' Best advice?",
    choices: [
      "Agree; medical needs can wait",
      "Insist medical needs and fitness are addressed before interview to protect fairness and welfare",
      "Tell D to exaggerate symptoms to avoid interview",
      "Ignore it unless D collapses"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Medical needs can affect fitness to interview and the fairness/reliability of evidence; it should be addressed promptly.",
      whyWrong: [
        "Delaying can undermine welfare and fairness.",
        "—",
        "Encouraging exaggeration is improper.",
        "You do not wait for collapse; you act preventively."
      ]
    }
  },
  {
    topic: "Searches — advising client",
    q: "Police propose searching D’s clothing and possessions on arrival. What is your best general advice?",
    choices: [
      "All searches are unlawful without a warrant",
      "Advise D that custody searches can be lawful for safety/evidence; ensure it is properly recorded and proportionate, and challenge improper intrusiveness",
      "Tell D to physically resist",
      "Tell D to consent to everything without question"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Many custody searches are lawful, but must be justified, proportionate, and properly recorded; you challenge excess and protect dignity.",
      whyWrong: [
        "Warrants are not required for all custody searches.",
        "—",
        "Resistance can create new offences and risks.",
        "Unthinking consent is not good advice; legality and proportionality matter."
      ]
    }
  },
  {
    topic: "Fingerprints/DNA — strategic advice",
    q: "D asks: 'Should I refuse fingerprints and DNA?' What is the most accurate general response?",
    choices: [
      "Refuse everything; police have no powers",
      "Explain police may have lawful powers to take samples in specified circumstances; focus on legality, recording, and any grounds to object or delay",
      "Consent is always required",
      "Refusal guarantees release"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Police often have statutory powers for biometrics. Your job is to ensure powers are used lawfully and strategically manage consequences, not give blanket refusal advice.",
      whyWrong: [
        "Police do have powers in many cases.",
        "—",
        "Consent is not always required depending on the power used.",
        "Refusal does not guarantee release."
      ]
    }
  },
  {
    topic: "Identification — contamination risk",
    q: "A witness has already been shown D’s photo by an officer before any formal identification procedure. Best concern?",
    choices: [
      "No issue; it improves accuracy",
      "It risks contamination/unfairness; you should consider challenging reliability and pressing for proper procedure/records",
      "It proves guilt",
      "It makes identification evidence inadmissible automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Suggestive exposure can contaminate memory. You flag it, get disclosure/records, and challenge reliability where appropriate.",
      whyWrong: [
        "It can reduce accuracy by suggestion.",
        "—",
        "It does not prove guilt.",
        "It is not automatically inadmissible; it depends on fairness/reliability."
      ]
    }
  },
  {
    topic: "Advising client — explaining outcomes",
    q: "Which is the best explanation of possible outcomes after police station investigation steps?",
    choices: [
      "Only charge or prison",
      "Possible outcomes include no further action, release under investigation/bail, or charge (and then court process)",
      "Only a fine",
      "Only a caution"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Police station processes can end in several outcomes: NFA, bail/RUI for further investigation, or charge leading to court.",
      whyWrong: [
        "Outcomes are broader than charge/prison.",
        "—",
        "Fines are court outcomes and not the only possibility.",
        "Cautions are only one potential disposal and not guaranteed."
      ]
    }
  },
  {
    topic: "Interview management — breaks and basic needs",
    q: "D is exhausted and has not eaten. Police want a long interview immediately. Best advice?",
    choices: [
      "Allow it; breaks are a luxury",
      "Request rest/food and a fair interview schedule so D can participate effectively",
      "Tell D to pretend to sleep",
      "Tell police you will leave if they don’t charge immediately"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Fatigue affects comprehension and reliability; ensuring humane conditions supports fairness and protects the client.",
      whyWrong: [
        "Breaks/basic needs are relevant to fairness and welfare.",
        "—",
        "Pretending creates credibility and conduct issues.",
        "Leaving is rarely the best tactic; you use process rights and record objections."
      ]
    }
  },
  {
    topic: "Client communication — simple explanation of rights",
    q: "D says: 'Why do I need you? I’ll just explain everything.' Best response?",
    choices: [
      "Agree and leave; lawyers complicate things",
      "Explain your role: protect rights, ensure fair process, and advise on the risks of speaking without disclosure/strategy",
      "Tell D to refuse to answer everything forever",
      "Tell D the police are always lying"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Clients often underestimate interview risk. You explain the function of advice: rights, fairness, and strategy based on evidence/disclosure.",
      whyWrong: [
        "Leaving abandons safeguards and increases risk.",
        "—",
        "Blanket refusal forever is not sensible; strategy is case-specific.",
        "Overgeneralising undermines credibility and good advice."
      ]
    }
  },
  {
    topic: "Vulnerability — ensuring understanding",
    q: "Which is the best way to check D understands their rights and your advice (especially if vulnerable)?",
    choices: [
      "Ask 'Do you understand?' once and accept yes",
      "Use simple language and ask D to explain back in their own words what will happen and what choices they have",
      "Assume understanding if D is educated",
      "Avoid explaining to prevent confusion"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Teach-back (asking them to explain in their own words) is a reliable way to confirm real understanding, especially for vulnerable clients.",
      whyWrong: [
        "A simple yes can be meaningless.",
        "—",
        "Education does not guarantee comprehension under stress.",
        "Avoiding explanation increases risk and undermines informed decisions."
      ]
    }
  },
  {
    topic: "Custody — making representations",
    q: "At a detention review, what is your best intervention if detention no longer seems necessary?",
    choices: [
      "Say nothing; reviews are automatic",
      "Make representations for release/bail and ensure reasons are recorded if detention continues",
      "Argue the merits of the eventual trial",
      "Demand an apology"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Reviews are a key moment to challenge necessity and create a record of objections and decision reasons.",
      whyWrong: [
        "Silence wastes a procedural safeguard.",
        "—",
        "Trial merits may be relevant later; here the issue is necessity/lawfulness of detention.",
        "Apologies are not the legal purpose of a review."
      ]
    }
  },
  {
    topic: "Solicitor conduct — accuracy and notes",
    q: "Why should you keep careful attendance notes at the police station?",
    choices: [
      "To sell them later",
      "To record disclosure, advice, decisions, vulnerability issues, and procedural concerns for later challenges and case progression",
      "Because police will do it for you",
      "Because courts require notes in every case"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Notes protect the client and you: they capture disclosure/advice and provide evidence if process is disputed or you need to justify strategy later.",
      whyWrong: [
        "Notes are confidential professional records, not merchandise.",
        "—",
        "Police records are not a substitute for your own.",
        "Courts may not 'require' notes in every case, but good practice makes them vital."
      ]
    }
  },
  {
    topic: "Ending the matter — bail/RUI advice (concept)",
    q: "If D is released while the investigation continues, what is the best advice?",
    choices: [
      "Ignore all conditions; release means the case is over",
      "Explain the status (bail/RUI), any conditions and return dates, and the importance of compliance and keeping contact details updated",
      "Tell D to delete messages to protect themselves",
      "Tell D to contact witnesses to ‘clear it up’"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Release pending investigation still carries risk. Compliance with conditions and good practical management protects D and avoids further offences/breach.",
      whyWrong: [
        "Release does not necessarily end the case.",
        "—",
        "Deleting evidence can be criminal and disastrous.",
        "Contacting witnesses can create further offences (e.g., interference) and risk."
      ]
    }
  },
  {
    topic: "Vulnerable clients — safeguarding over speed",
    q: "Police say: 'If we wait for an AA/interpreter, this will take longer.' Best response?",
    choices: [
      "Agree and proceed; speed is the priority",
      "Safeguards are not optional—fairness and the client’s ability to participate come first",
      "Leave the station to protest",
      "Tell the client to waive rights for convenience"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Safeguards exist to ensure fair and reliable evidence. Convenience does not trump a vulnerable client’s right to effective participation.",
      whyWrong: [
        "Speed is not the legal priority over fairness.",
        "—",
        "Walking out rarely helps; you assert rights and put objections on record.",
        "Encouraging waiver for convenience undermines the client’s protection."
      ]
    }
  }
];


window.quizData = {
    title: "SQE1 Criminal Practice | Chapter 1 | Advising Clients",
    subtitle: "Custody process, legal advice, disclosure, and interview strategy.",
    questions: questions
  };
})();
  
