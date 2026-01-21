(() => {
  const questions = [
    {
      "topic": "Actus reus + mens rea (coincidence)",
      "q": "D, planning to kill V, puts poison into V’s tea. Before V drinks it, V trips, falls, and dies from hitting his head. D then pours the tea away. Which is the most accurate?",
      "choices": [
        "D is guilty of murder because he had the intention to kill at some point that day",
        "D is guilty of attempted murder because he prepared poison",
        "D is not guilty of murder because D’s mens rea did not coincide with the actus reus causing death",
        "D is guilty of gross negligence manslaughter",
        "D is guilty of unlawful act manslaughter because poisoning is unlawful"
      ],
      "correct": 2
    },
    {
      "topic": "Factual causation",
      "q": "D stabs V. V would have died that night anyway from an unrelated condition even if not stabbed. V dies. Which statement is most accurate?",
      "choices": [
        "D cannot be liable for homicide because V would have died anyway",
        "D is liable only if the stab wound was the sole cause of death",
        "D may still be liable if the stabbing was a factual cause under the 'but for' test",
        "D is automatically liable for murder regardless of causation",
        "D is not liable unless V’s condition was unknown to doctors"
      ],
      "correct": 2
    },
    {
      "topic": "Legal causation (operating and substantial cause)",
      "q": "D punches V once. V falls, hits his head, and later dies. Medical treatment was poor but not “palpably wrong.” Best analysis?",
      "choices": [
        "D is not liable because medical treatment always breaks causation",
        "D is liable only if he intended death",
        "D may be liable if his act was an operating and substantial cause and treatment did not break the chain",
        "D is liable only for assault because death was not foreseeable",
        "D is never liable where an intervening act occurs"
      ],
      "correct": 2
    },
    {
      "topic": "Thin skull rule",
      "q": "D pushes V lightly. V has a rare condition and suffers catastrophic injury, far worse than expected. Which is most accurate?",
      "choices": [
        "D is not liable because the harm was unforeseeable",
        "D is liable only if he knew about the condition",
        "D takes V as found; unexpected severity does not usually defeat causation",
        "D is liable only for battery, never for offences requiring harm",
        "V’s condition is an intervening act that breaks causation"
      ],
      "correct": 2
    },
    {
      "topic": "Secondary liability (assistance)",
      "q": "S lends P a crowbar, knowing P will use it to burgle a shop that night, and intending to help. P commits the burglary. Best statement?",
      "choices": [
        "S is not liable because lending a crowbar is lawful",
        "S is liable as a secondary party if he intended to assist/encourage the burglary",
        "S is liable only if he was present at the scene",
        "S is liable only if P shares the proceeds",
        "S is liable only for attempted burglary"
      ],
      "correct": 1
    },
    {
      "topic": "Joint enterprise after Jogee (foresight)",
      "q": "S goes with P to confront V. S foresees P might use a knife but hopes he won’t. P stabs V. Which is most accurate post-Jogee?",
      "choices": [
        "S is automatically guilty of the stabbing offence because he foresaw it",
        "S is guilty only if he physically joined the stabbing",
        "Foresight is evidence but not enough by itself; prosecution must prove intent to assist/encourage the stabbing offence",
        "S is never liable if he hoped the stabbing would not happen",
        "S is guilty only of conspiracy"
      ],
      "correct": 2
    },
    {
      "topic": "Withdrawal",
      "q": "S agrees to act as lookout for P’s robbery. Before it happens, S texts P: “I’m out. Don’t do it,” and leaves. P robs anyway. Best analysis?",
      "choices": [
        "S is liable because agreement is enough for secondary liability",
        "S has a strong withdrawal argument if communication was timely and effective given S’s contribution",
        "S is liable unless he reports P to the police",
        "Withdrawal is impossible once you agree",
        "S is only liable for theft"
      ],
      "correct": 1
    },
    {
      "topic": "Encouragement by presence",
      "q": "During a fight, S stands nearby, cheering P on loudly: “Hit him again!” P continues and causes ABH. Best statement?",
      "choices": [
        "S is not liable because presence alone can never be encouragement",
        "S is liable if his conduct was capable of encouraging and he intended to encourage",
        "S is liable only if he planned the fight earlier",
        "S is liable only if he also strikes V",
        "S is not liable because words cannot create liability"
      ],
      "correct": 1
    },
    {
      "topic": "Attempt (more than merely preparatory)",
      "q": "D plans a burglary. He goes to V’s house at night, puts a screwdriver into the window frame, and begins to lever it. Police arrest him immediately. Best?",
      "choices": [
        "No attempt because he did not enter",
        "Attempted burglary because he has gone beyond merely preparatory acts",
        "Only conspiracy is possible",
        "Only criminal damage is possible",
        "No offence because no property was taken"
      ],
      "correct": 1
    },
    {
      "topic": "Attempt + impossibility",
      "q": "D tries to buy a laptop believing it is stolen and intending to commit handling stolen goods. The laptop is not stolen. Best?",
      "choices": [
        "No liability because the laptop was not stolen",
        "Attempt liability is possible; factual impossibility does not necessarily bar attempt",
        "D is guilty of handling stolen goods",
        "Only theft can be charged",
        "D is not liable unless the seller also believed it was stolen"
      ],
      "correct": 1
    },
    {
      "topic": "Conspiracy (agreement point)",
      "q": "P and S agree to commit fraud next week. They take no further steps. Which is most accurate?",
      "choices": [
        "No offence until they attempt the fraud",
        "Conspiracy is complete at the point of agreement",
        "Attempted fraud is complete at the point of agreement",
        "Only assisting/encouraging under SCA 2007 applies",
        "No offence because there was no victim yet"
      ],
      "correct": 1
    },
    {
      "topic": "SCA 2007 encouraging/assisting (offence not committed)",
      "q": "S messages P detailed instructions on how to commit arson, intending P to do it. P ignores S and does nothing. Best?",
      "choices": [
        "No liability because arson did not occur",
        "S may still be liable for encouraging/assisting under the Serious Crime Act 2007 (subject to defences), even if P does nothing",
        "S is guilty of attempted arson",
        "S is guilty of conspiracy only",
        "S is liable only if P replies to the message"
      ],
      "correct": 1
    },
    {
      "topic": "Self-defence (necessity + reasonableness)",
      "q": "V raises a bottle and steps toward D. D honestly believes he’s about to be struck and punches V once to stop him. Best?",
      "choices": [
        "Self-defence fails because D struck first",
        "Self-defence can apply if D honestly believed force was necessary and the force was reasonable in those circumstances",
        "Self-defence requires D to retreat first",
        "Self-defence only applies inside the home",
        "Self-defence applies only if V actually intended to hit D"
      ],
      "correct": 1
    },
    {
      "topic": "Intoxication (basic vs specific intent)",
      "q": "D voluntarily becomes very drunk and punches V (battery). D says he was too drunk to foresee any risk. Best?",
      "choices": [
        "Voluntary intoxication is a defence to battery if D was very drunk",
        "Voluntary intoxication is generally no defence to basic intent offences like battery",
        "Voluntary intoxication always negates mens rea for any offence",
        "D is not liable unless V is injured",
        "D is guilty only if he intended to cause serious injury"
      ],
      "correct": 1
    },
    {
      "topic": "Duress (limits)",
      "q": "P threatens to kill D unless D kills V. D kills V. Which is most accurate?",
      "choices": [
        "Duress is a complete defence to murder",
        "Duress is not a defence to murder",
        "Duress applies if the threat is immediate, regardless of offence",
        "Duress reduces murder to manslaughter",
        "Duress applies only if D reports to police after"
      ],
      "correct": 1
    },
    {
      "topic": "Automatism vs insanity (internal/external)",
      "q": "D suffers an epileptic seizure (internal condition) and strikes V while not conscious. Which is the most accurate classification?",
      "choices": [
        "Sane automatism, leading to automatic acquittal",
        "Likely insanity route rather than sane automatism, because the cause is internal",
        "Self-defence",
        "Duress",
        "Consent"
      ],
      "correct": 1
    },
    {
      "topic": "Murder mens rea (GBH intent)",
      "q": "D hits V with a metal bar, intending to cause really serious injury (GBH) but not death. V dies. Best?",
      "choices": [
        "Not murder because D did not intend to kill",
        "Murder because intent to cause GBH is sufficient mens rea",
        "Only unlawful act manslaughter",
        "Only gross negligence manslaughter",
        "No homicide offence because death was unintended"
      ],
      "correct": 1
    },
    {
      "topic": "Oblique intention",
      "q": "D sets fire to a house to frighten V. D realises death is a virtual certainty if he does this, but proceeds anyway. V dies. Best?",
      "choices": [
        "No murder because D’s purpose was only to frighten",
        "Murder is possible via oblique intention where death was a virtual certainty and D appreciated it",
        "Only manslaughter because D did not desire death",
        "No offence because V chose not to leave",
        "Only arson, never homicide"
      ],
      "correct": 1
    },
    {
      "topic": "Loss of control (revenge bar)",
      "q": "D kills V two days after V seriously insulted D, after calmly planning revenge. D claims loss of control. Best?",
      "choices": [
        "Loss of control applies because insults are always a trigger",
        "Loss of control likely fails because it cannot be a considered desire for revenge",
        "Loss of control automatically applies if D was angry",
        "Loss of control requires the loss to be sudden, so it automatically fails for any delay",
        "Loss of control applies only if V used physical violence"
      ],
      "correct": 1
    },
    {
      "topic": "Diminished responsibility elements",
      "q": "D kills V. D suffers severe depression (recognised medical condition). It substantially impaired D’s ability to form rational judgment and explains the killing. Best?",
      "choices": [
        "Automatic acquittal",
        "Possible diminished responsibility, reducing murder to manslaughter if elements are proved",
        "Only loss of control applies",
        "Diminished responsibility applies only to non-fatal offences",
        "Diminished responsibility requires total impairment"
      ],
      "correct": 1
    },
    {
      "topic": "Unlawful act manslaughter (dangerousness)",
      "q": "D commits a minor assault on V. V falls awkwardly, suffers a fatal head injury, and dies. D did not foresee serious harm. Best analysis?",
      "choices": [
        "No manslaughter because D did not foresee death",
        "Unlawful act manslaughter may apply if the unlawful act was objectively dangerous and caused death",
        "Gross negligence manslaughter is the only possibility",
        "Murder automatically applies because death occurred",
        "No offence because assault is too minor"
      ],
      "correct": 1
    },
    {
      "topic": "Assault vs battery",
      "q": "D raises a clenched fist and steps toward V. V genuinely believes D is about to hit him immediately. D then walks away without touching V. Best offence?",
      "choices": [
        "Battery",
        "Assault",
        "s47 ABH",
        "s20 GBH",
        "No offence because no contact"
      ],
      "correct": 1
    },
    {
      "topic": "s47 mens rea (trap)",
      "q": "D intentionally pushes V (battery). V falls and suffers a minor fracture (ABH). D did not foresee injury. Best charge?",
      "choices": [
        "Battery only",
        "Assault only",
        "s47, because mens rea for the battery is enough",
        "s20, because fracture is always GBH",
        "No offence because injury was unforeseeable"
      ],
      "correct": 2
    },
    {
      "topic": "s20 mens rea",
      "q": "D throws a brick toward V in anger, foreseeing a risk of some injury. The brick hits V causing really serious harm (GBH). Best?",
      "choices": [
        "s18, because GBH occurred",
        "s20, because D was reckless as to some harm and GBH was caused",
        "s47 only",
        "Assault only",
        "No offence because D did not intend GBH"
      ],
      "correct": 1
    },
    {
      "topic": "s18 intent",
      "q": "D attacks V with a knife intending to cause really serious injury. V suffers a deep wound. Best charge?",
      "choices": [
        "s47",
        "s20",
        "s18",
        "Battery only",
        "Assault only"
      ],
      "correct": 2
    },
    {
      "topic": "Wound definition",
      "q": "D scratches V with a blade, breaking both layers of the skin. V suffers no serious long-term harm. Which OAPA concept is most clearly satisfied?",
      "choices": [
        "GBH",
        "A wound",
        "No injury in law",
        "Only assault",
        "Only battery"
      ],
      "correct": 1
    },
    {
      "topic": "Theft elements",
      "q": "D picks up V’s wallet from a table and puts it in his bag intending to keep it. Which combination best matches theft?",
      "choices": [
        "Appropriation + property + belonging to another + dishonesty + intention permanently to deprive",
        "Force + appropriation + dishonesty",
        "Agreement + dishonesty + gain",
        "Trespass + entry + theft",
        "Possession + negligence"
      ],
      "correct": 0
    },
    {
      "topic": "Appropriation with consent",
      "q": "V hands D her phone believing D will take a quick photo and return it. D immediately sells it. Best statement?",
      "choices": [
        "No theft because V consented to handing it over",
        "Theft is possible because appropriation can occur even with consent, plus dishonesty and IPD",
        "Only civil liability because it began with consent",
        "Only fraud is possible, never theft",
        "No offence unless V withdraws consent first"
      ],
      "correct": 1
    },
    {
      "topic": "Belonging to another (possession/control)",
      "q": "D takes his own car from a garage without paying for repairs, while the garage has lawful possession/control. Theft?",
      "choices": [
        "Impossible to steal your own property",
        "Possible theft because the car can ‘belong to another’ via possession/control",
        "No theft because the garage is not the owner",
        "Only criminal damage",
        "Only robbery"
      ],
      "correct": 1
    },
    {
      "topic": "Intention permanently to deprive",
      "q": "D takes V’s concert ticket, uses it, then posts it back to V the next day. Best analysis?",
      "choices": [
        "No theft because D returned it",
        "Theft is possible because ‘borrowing’ can be equivalent to taking outright when the item’s value is exhausted",
        "No theft because tickets are not property",
        "Only fraud",
        "Only handling stolen goods"
      ],
      "correct": 1
    },
    {
      "topic": "Robbery (timing + in order to steal)",
      "q": "D snatches V’s phone and, as V reaches for it, D pushes V away to keep hold and escape. Best offence?",
      "choices": [
        "Theft only, because force was after the taking",
        "Robbery may apply if force is used at the time of stealing and in order to steal/retain the property (fact-sensitive)",
        "Burglary",
        "Handling stolen goods",
        "No offence because force must be before the taking"
      ],
      "correct": 1
    },
    {
      "topic": "Burglary s9(1)(a)",
      "q": "D climbs through an open window into V’s house as a trespasser intending to steal. D panics and leaves without taking anything. Best?",
      "choices": [
        "No burglary because nothing was stolen",
        "Burglary under s9(1)(a) is complete upon entry with intent",
        "Only attempted theft",
        "Only criminal damage",
        "Only robbery"
      ],
      "correct": 1
    },
    {
      "topic": "Burglary: trespasser by exceeding permission",
      "q": "D lawfully enters a shop during opening hours but goes through a ‘Staff Only’ door knowing customers are not allowed, and steals stock. Best?",
      "choices": [
        "No burglary because entry to the shop was lawful",
        "Burglary is possible because D can be a trespasser in part of a building by exceeding permission",
        "Robbery only",
        "Handling only",
        "No offence because the door was unlocked"
      ],
      "correct": 1
    },
    {
      "topic": "Handling stolen goods (knowledge/belief)",
      "q": "D buys a laptop very cheaply, thinking it ‘might be stolen’ but not believing it is. It is stolen. Best?",
      "choices": [
        "Handling is proved because suspicion is enough",
        "Handling is not proved because it requires knowledge or belief, not mere suspicion",
        "Robbery is proved",
        "Burglary is proved",
        "D is automatically guilty of theft"
      ],
      "correct": 1
    },
    {
      "topic": "Fraud by false representation (s2)",
      "q": "D lies on an online loan application about his salary, intending to obtain a loan. The lender checks and rejects him. Best?",
      "choices": [
        "No offence because the lender was not deceived",
        "No offence because no money was obtained",
        "Fraud by false representation may be complete if dishonesty and intent to gain are proved",
        "Only attempted fraud is possible",
        "Only theft is possible"
      ],
      "correct": 2
    },
    {
      "topic": "Fraud by failing to disclose (s3) legal duty",
      "q": "D applies for an insurance policy and intentionally fails to disclose a prior serious conviction, despite a clear contractual duty to disclose it. Best fraud route?",
      "choices": [
        "s3 fraud by failing to disclose information (legal duty)",
        "s4 abuse of position only",
        "No fraud because silence can never be fraud",
        "Only theft",
        "Only robbery"
      ],
      "correct": 0
    },
    {
      "topic": "Fraud by abuse of position (s4)",
      "q": "D is a carer for an elderly client and withdraws cash from the client’s account for himself, intending personal gain. Best?",
      "choices": [
        "No fraud because the client is unaware",
        "Fraud by abuse of position (s4) is likely, subject to proof of dishonesty and intent",
        "Only burglary",
        "Only criminal damage",
        "Only s3 failing to disclose"
      ],
      "correct": 1
    },
    {
      "topic": "Obtaining services dishonestly (s11)",
      "q": "D repeatedly uses a paid streaming service by using another person’s login, knowing it requires payment and intending not to pay. Best?",
      "choices": [
        "Theft (services are property)",
        "Obtaining services dishonestly (s11)",
        "Handling stolen goods",
        "Robbery",
        "No offence because no physical item was taken"
      ],
      "correct": 1
    },
    {
      "topic": "Basic criminal damage s1(1)",
      "q": "D sprays graffiti on V’s wall. It can be cleaned but requires time and cost. D foresaw the risk of causing such damage and did it anyway. Best?",
      "choices": [
        "No damage because it is temporary",
        "Criminal damage under s1(1) is likely: damage to property belonging to another with recklessness as to damage, absent lawful excuse",
        "Only theft",
        "Only fraud",
        "No offence unless the wall is permanently ruined"
      ],
      "correct": 1
    },
    {
      "topic": "Arson (s1(3))",
      "q": "D sets fire to V’s shed, destroying it. No risk to life. Best offence label?",
      "choices": [
        "Aggravated arson only",
        "Basic arson (criminal damage by fire)",
        "No offence because it was a shed",
        "Handling stolen goods",
        "Burglary"
      ],
      "correct": 1
    },
    {
      "topic": "Aggravated criminal damage s1(2) (endangering life)",
      "q": "D sets fire to his own car outside a busy nightclub, foreseeing a risk the blaze will endanger people nearby. Best?",
      "choices": [
        "No criminal damage because it was D’s own property",
        "Aggravated arson may apply if D was reckless as to endangering life by the damage",
        "Only basic arson can ever apply to your own property",
        "Only theft",
        "No offence unless someone is actually injured"
      ],
      "correct": 1
    },
    {
      "topic": "Lawful excuse (protection of property)",
      "q": "D smashes V’s window to spray a fire extinguisher at a growing fire inside, honestly believing it is necessary to protect V’s house and that smashing the window is reasonable. Best?",
      "choices": [
        "No lawful excuse can apply to intentional damage",
        "Lawful excuse may apply (protection of property) if belief and reasonableness are satisfied",
        "Only self-defence applies",
        "Only duress applies",
        "D is guilty unless V later gives written consent"
      ],
      "correct": 1
    },
    {
      "topic": "Public order: violent disorder vs affray (overview)",
      "q": "During a street confrontation, three people together threaten violence and throw bottles at a group, causing bystanders to fear for their safety. Which public order offence is most likely on these facts?",
      "choices": [
        "Riot (requires 12 or more)",
        "Violent disorder (involves 3 or more using or threatening unlawful violence)",
        "Affray (requires only words in private)",
        "s5 harassment only (no violence)",
        "No public order offence because no one was injured"
      ],
      "correct": 1
    },
    {
      "topic": "Public order: riot threshold",
      "q": "A group of 14 people acts together in a shopping centre, using and threatening unlawful violence for a common purpose, and a reasonable person would fear for their safety. Which is most accurate?",
      "choices": [
        "This can only be violent disorder because riot requires weapons",
        "This may amount to riot because the threshold is 12 or more acting together with violence/threats for a common purpose",
        "This is only affray because it is in public",
        "This is only s5 because there is no property damage",
        "No offence because there was no serious injury"
      ],
      "correct": 1
    },
    {
      "topic": "Public order: harassment/alarm/distress style offences (low-level)",
      "q": "D shouts abusive language at V in a public street, causing V to feel alarmed and distressed, but D uses no violence. Which is the most accurate general statement?",
      "choices": [
        "No offence because words can never be criminal",
        "A lower-level public order offence may apply where threatening/abusive words cause harassment/alarm/distress (subject to specific statutory elements/defences)",
        "Only robbery applies",
        "Only burglary applies",
        "Only criminal damage applies"
      ],
      "correct": 1
    }
  ];

  window.quizData = {
    title: "SQE1 Criminal Law | Final 45",
    subtitle: "Mixed review across core criminal law topics.",
    questions: questions
  };
})();

