const originalQuestions = [
    {
      topic: "Encouragement — presence",
      q: "P punches V causing ABH. S stands nearby smiling and nodding at P, which P sees and is emboldened. Best analysis?",
      choices: [
        "S is not liable because mere presence can never be enough",
        "S is liable if S intended his presence to encourage P",
        "S is liable only if S physically joined in",
        "S is liable only if S planned the offence in advance"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Presence can amount to encouragement if S intended their presence (or gestures) to encourage P, and it was capable of encouraging/actually encouraged P.",
        whyWrong: [
          "Mere presence is not automatically enough, but it can be if intended to encourage; ‘never’ is too absolute.",
          "—",
          "Physical participation is not required for secondary liability where there is encouragement/assistance plus the required mental element.",
          "Advance planning is not required; encouragement can be spontaneous."
        ]
      }
    },
    {
      topic: "Timing — assistance after the offence",
      q: "After P commits a burglary, S helps hide the stolen items. S is:",
      choices: [
        "A secondary party to burglary",
        "Not a party to burglary; may be liable for separate offences",
        "A principal to burglary",
        "Automatically liable for handling stolen goods only if paid"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Secondary liability generally requires assistance/encouragement before or during the offence. Help after completion is usually not secondary liability for the burglary itself, though it may found liability for separate offences.",
        whyWrong: [
          "Post-offence help is usually not enough to make S an accessory to the completed burglary.",
          "—",
          "S did not commit the actus reus of burglary as principal on these facts.",
          "Payment is not a requirement; and liability is not ‘automatic’ in the way stated."
        ]
      }
    },
    {
      topic: "SCA 2007 — intentional encouragement/assistance",
      q: "S sends P a message: “Go smash his car tonight, I want you to do it.” P then smashes the car. Most fitting mental element label?",
      choices: [
        "Intention to encourage/assist",
        "Recklessness as to encouragement",
        "Negligence",
        "Strict liability"
      ],
      correct: 0,
      explain: {
        whyRight:
          "This is direct, purposive encouragement: S intends to encourage/assist P to commit the offence.",
        whyWrong: [
          "—",
          "Recklessness is not the best fit where S expressly wants P to do it.",
          "Negligence is not the relevant mental element here.",
          "Secondary liability is not strict liability."
        ]
      }
    },
    {
      topic: "Joint enterprise after Jogee — foresight trap",
      q: "S accompanies P to “scare” V. S foresees P might stab V, but S hopes P won’t. P stabs V. Most accurate post-Jogee?",
      choices: [
        "Foresight automatically makes S guilty",
        "Foresight is evidence but not enough; need intent to assist/encourage the stabbing (or the relevant offence)",
        "S is never guilty if he hoped it wouldn’t happen",
        "S is guilty only if he personally stabs V"
      ],
      correct: 1,
      explain: {
        whyRight:
          "After Jogee, foresight that P might commit an offence is evidence from which intent may be inferred, but it is not sufficient by itself. The prosecution must prove S intended to assist/encourage the offence (or the relevant act).",
        whyWrong: [
          "This reflects the outdated approach; foresight alone is not enough.",
          "—",
          "Hope that it won’t happen does not automatically negate intent; it depends on what S intended to assist/encourage.",
          "Secondary liability allows conviction without personally performing the actus reus."
        ]
      }
    },
    {
      topic: "Assistance — lending tools",
      q: "S lends P a crowbar knowing P will use it to burgle a shop. P burgles the shop. Best?",
      choices: [
        "S is not liable because lending is lawful",
        "S is liable as a secondary party if S intended to assist/encourage burglary",
        "S is liable only if S was present at the scene",
        "S is liable only if the crowbar is used exactly as S imagined"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Providing equipment can be practical assistance. If S intended to assist/encourage the burglary (or had the relevant belief under the statutory scheme), S can be liable as a secondary party.",
        whyWrong: [
          "A lawful act can still constitute assistance if done with the requisite mental element.",
          "—",
          "Presence is not required for secondary liability.",
          "S need not anticipate every detail; what matters is assistance plus the requisite intent/belief as to the essential matters."
        ]
      }
    },
    {
      topic: "Conditional intent — encouragement",
      q: "S tells P: “If V resists, hit him.” P then hits V during a robbery. S is:",
      choices: [
        "Not liable because intent was conditional",
        "Liable if S intended assistance/encouragement even conditionally",
        "Liable only if V actually resisted",
        "Liable only if S foresaw serious injury"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Conditional intent can still be intent: S is encouraging violence if a condition occurs, and that can satisfy the mental element if the condition is met and the offence is committed.",
        whyWrong: [
          "Conditional intent does not prevent liability.",
          "—",
          "Whether V resisted is relevant to whether the condition was triggered, but conditional encouragement can still ground liability; the answer is too narrow as a rule.",
          "Foreseeing serious injury is not the correct test for secondary liability here."
        ]
      }
    },
    {
      topic: "Withdrawal — communication",
      q: "S agrees to be lookout for P’s robbery. Before it happens, S texts P: “I’m out, don’t do it,” and goes home. P robs anyway. Best?",
      choices: [
        "S is still liable because he originally agreed",
        "S has a strong withdrawal argument because he communicated withdrawal before commission",
        "S is liable unless he calls the police",
        "Withdrawal is impossible once you agree"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Effective withdrawal usually requires timely and clear communication to the others before the offence is committed, and (depending on S’s contribution) reasonable steps to neutralise prior assistance.",
        whyWrong: [
          "Original agreement does not necessarily fix liability if S effectively withdraws before commission.",
          "—",
          "Calling the police can be relevant but is not an absolute requirement in every case.",
          "Withdrawal can be possible; it depends on timing and steps taken."
        ]
      }
    },
    {
      topic: "Withdrawal — neutralising prior assistance",
      q: "S gives P a knife for an attack. Later S changes mind and texts “don’t do it” but does not retrieve the knife. P uses the knife. Best?",
      choices: [
        "Withdrawal is effective because S texted",
        "Withdrawal likely ineffective; S should take reasonable steps to neutralise prior assistance (retrieve knife)",
        "Withdrawal is always impossible if weapons are involved",
        "S is not liable because P chose to use the knife"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where S has provided substantial assistance (especially a weapon), withdrawal usually requires more than words: S should take reasonable steps to undo/neutralise the assistance (e.g., retrieving the weapon).",
        whyWrong: [
          "Communication alone is often insufficient when S has provided significant practical assistance.",
          "—",
          "Not absolute—withdrawal may be possible, but it requires meaningful steps.",
          "P’s decision does not automatically erase S’s earlier assistance and intent."
        ]
      }
    },
    {
      topic: "Omissions — duty from special relationship",
      q: "A parent watches their partner assault their child and does nothing. Liability can arise because:",
      choices: [
        "Parents never owe duties in criminal law",
        "A legal duty exists from special relationship; omission can ground liability",
        "Omission can never make you a secondary party",
        "Only the attacker can be liable"
      ],
      correct: 1,
      explain: {
        whyRight:
          "A parent may owe a legal duty to protect a child. Where a duty exists, omission can ground liability (including as a party to offences, depending on the facts and mental element).",
        whyWrong: [
          "Parents can owe duties recognised by criminal law.",
          "—",
          "Omissions can lead to liability where a duty exists; it is not categorically excluded.",
          "More than one person can be liable where duties and participation/encouragement are established."
        ]
      }
    },
    {
      topic: "Scope — fundamentally different act",
      q: "S encourages P to “teach V a lesson” with a fistfight. P instead intentionally shoots V dead. Best?",
      choices: [
        "S liable for murder because he encouraged violence",
        "S not liable for murder if shooting is fundamentally different from what S intended to assist/encourage",
        "S liable if he could foresee a shooting",
        "S always liable for any escalation"
      ],
      correct: 1,
      explain: {
        whyRight:
          "If P commits an offence that is fundamentally different from what S intended to assist/encourage, S may not be liable for that escalated offence.",
        whyWrong: [
          "Encouraging some violence does not automatically mean S intended to assist/encourage murder by shooting.",
          "—",
          "Foresight alone is not enough post-Jogee (it is evidence only).",
          "Liability is not unlimited; it depends on S’s intent and the scope of what was assisted/encouraged."
        ]
      }
    },
    {
      topic: "SCA 2007 — capable of assisting",
      q: "S gives P bad directions to V’s house intending to help P burgle it. P still finds the house and burgles. S:",
      choices: [
        "Not liable because help must actually assist",
        "Can still be liable because the act was capable of assisting/encouraging and done with intent",
        "Liable only if P relied on the directions",
        "Liable only if S was paid"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Under the statutory encouragement/assistance framework, the conduct can be sufficient if it is capable of assisting/encouraging and S has the required mental element, even if it turns out not to be effective.",
        whyWrong: [
          "Actual assistance is not always required; capability plus the mental element can suffice.",
          "—",
          "Reliance may be evidence, but it is not an absolute requirement.",
          "Payment is irrelevant to liability."
        ]
      }
    },
    {
      topic: "Assistance by information",
      q: "S tells P when V will be away so P can burgle. P burgles. Best basis?",
      choices: [
        "S is principal because he planned it",
        "S can be secondary party for assisting",
        "S is not liable because words cannot assist",
        "S is liable only if he enters the property"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Providing information (timings, access details) can be practical assistance. With the requisite intent/belief, S can be liable as a secondary party.",
        whyWrong: [
          "Planning alone does not necessarily make S a principal; principal liability requires commission of the actus reus (or use of an innocent agent).",
          "—",
          "Words and information can assist.",
          "Entry is not required for secondary liability."
        ]
      }
    },
    {
      topic: "Encouragement — general statement",
      q: "S posts online: “I hope someone burns down that shop.” P reads it and does so. Best?",
      choices: [
        "S is liable if the post encouraged and S had intent/belief required",
        "S is never liable for general statements",
        "S liable only if he tagged P",
        "S liable only if he bought petrol"
      ],
      correct: 0,
      explain: {
        whyRight:
          "Encouragement can be by words capable of encouraging, even if not directed to a specific person, provided the required mental element is met and the communication is capable of encouraging the offence.",
        whyWrong: [
          "—",
          "Too absolute; general encouragement can still be capable of encouraging an offence.",
          "Tagging is not a legal requirement.",
          "Buying petrol would be assistance, but it is not required for encouragement liability."
        ]
      }
    },
    {
      topic: "Joint principals",
      q: "P and D together hold V down while the other punches, causing ABH. Both are:",
      choices: [
        "Only one principal; the other is always secondary",
        "Both can be principals (joint principals)",
        "Both are secondary only",
        "Neither is liable because you can’t split AR"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where two people together perform the conduct that amounts to the actus reus, both can be treated as joint principals.",
        whyWrong: [
          "More than one person can be a principal.",
          "—",
          "They are not ‘secondary only’ if each plays a direct role in the actus reus.",
          "Actus reus can be jointly committed; it does not require a single actor."
        ]
      }
    },
    {
      topic: "MR for secondary liability — general",
      q: "Which is the best statement?",
      choices: [
        "Secondary party needs only foreseeability of offence",
        "Secondary party must intend to assist/encourage the offence (foresight is evidence only)",
        "Secondary party has strict liability for whatever happens",
        "Secondary party is liable only if he benefits financially"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Post-Jogee, the mental element is intent to assist/encourage the offence (or the relevant conduct/essential matters). Foresight is evidence but not sufficient on its own.",
        whyWrong: [
          "Foresight alone is not enough.",
          "—",
          "Secondary liability is not strict liability.",
          "Financial benefit is not a requirement."
        ]
      }
    },
    {
      topic: "Spontaneous encouragement",
      q: "In a pub, S shouts “Hit him!” and P immediately punches V. S:",
      choices: [
        "Not liable because it wasn’t pre-planned",
        "Liable if the shout encouraged and S intended that encouragement",
        "Liable only if he also punches",
        "Not liable because speech is protected"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Encouragement can be immediate and spontaneous. If S intends to encourage the assault and the words are capable of encouraging, S can be liable.",
        whyWrong: [
          "Planning is not required.",
          "—",
          "Physical participation is not necessary for secondary liability.",
          "Speech is not protected where it constitutes criminal encouragement/assistance."
        ]
      }
    },
    {
      topic: "Mistaken identity — scope",
      q: "S encourages P to attack V. P mistakenly attacks W believing W is V. Best?",
      choices: [
        "S not liable because wrong victim",
        "S may still be liable if the offence encouraged is essentially the same and the mistake doesn’t change the nature of what was intended",
        "S liable only if he personally identified W",
        "S liable only if he foresaw the mistake"
      ],
      correct: 1,
      explain: {
        whyRight:
          "If S intended to assist/encourage an attack of that type, a mistake as to the victim’s identity may not prevent liability where the offence committed is within the scope of what S encouraged.",
        whyWrong: [
          "Wrong victim does not automatically defeat liability.",
          "—",
          "Personal identification is not a legal requirement.",
          "Foresight of the mistake is not the sole test; scope/intent is key."
        ]
      }
    },
    {
      topic: "Parties + defences (duress idea)",
      q: "S helps P commit a robbery because P threatens to kill S if he refuses. Most accurate (re parties)?",
      choices: [
        "S is automatically not a party because duress removes AR",
        "S can be a party but may have a defence of duress (if requirements met)",
        "S is never liable if threatened",
        "S becomes principal automatically"
      ],
      correct: 1,
      explain: {
        whyRight:
          "S’s conduct can still amount to assistance/participation; duress is analysed as a defence rather than absence of actus reus.",
        whyWrong: [
          "Duress does not remove actus reus; it is a defence.",
          "—",
          "Threats do not automatically remove liability; they may found a defence if requirements are met.",
          "S does not become principal merely because he is involved under threat."
        ]
      }
    },
    {
      topic: "Procuring / innocent agent concept",
      q: "S secretly spikes P’s drink causing P to become aggressive and punch V. S wanted V harmed. Best?",
      choices: [
        "S is not liable because P did the act",
        "S may be liable as one who procures/causes the offence (using P as an innocent/non-culpable agent idea)",
        "S is liable only for administering a substance, not violence",
        "S is liable only if P intended harm"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Where S causes P to perform the actus reus while P lacks the relevant culpability (or is manipulated), S may be treated as the true instigator via procuring/innocent agent principles.",
        whyWrong: [
          "Someone can be liable even if another physically performs the act, especially where the other is used as an innocent agent.",
          "—",
          "S’s liability is not necessarily limited to the spiking; it depends on causation/procuring of the violence.",
          "P’s lack of intent can support the ‘innocent agent’ analysis rather than defeating S’s liability."
        ]
      }
    },
    {
      topic: "SCA 2007 — belief one of a number of offences",
      q: "S gives P a tool believing P will use it either for burglary or criminal damage, not sure which. Which label best fits?",
      choices: [
        "s44 (intent)",
        "s45 (belief offence will be committed)",
        "s46 (belief that one of a number of offences will be committed)",
        "No offence because uncertainty prevents liability"
      ],
      correct: 2,
      explain: {
        whyRight:
          "This is the classic ‘one of a number’ scenario: S believes P will commit one of several possible offences and provides assistance accordingly.",
        whyWrong: [
          "s44 is intention-based; the stem is framed as belief about one of several outcomes.",
          "s45 is belief a particular offence will be committed; here S is unsure which of two.",
          "—",
          "Uncertainty does not necessarily prevent liability; the statute is designed to address this scenario."
        ]
      }
    },
    {
      topic: "Withdrawal — renewed encouragement",
      q: "S previously encouraged P to rob. On the day, S tells P “Don’t do it” but then turns up at the scene to watch and cheer. Best?",
      choices: [
        "Withdrawal is effective because he said “don’t do it”",
        "Presence and cheering can revive encouragement; withdrawal likely ineffective",
        "Withdrawal is effective unless S touches anyone",
        "S can’t be liable because he said the right words"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Turning up and cheering is fresh encouragement (or evidence of it) and undermines any claimed withdrawal; effective withdrawal must be clear and consistent.",
        whyWrong: [
          "Words alone do not guarantee effective withdrawal, especially if later conduct encourages the offence.",
          "—",
          "Physical contact is not the measure of encouragement.",
          "Saying the ‘right words’ is not enough if actions contradict them."
        ]
      }
    },
    {
      topic: "Knowledge of essential matters",
      q: "S drives P to a location, knowing P will “do a job” but not knowing it’s a robbery. P robs a shop. Best?",
      choices: [
        "S liable because he helped with transport",
        "S not liable if he lacked knowledge of the essential nature of the crime and did not intend to assist that offence",
        "S liable because he was reckless",
        "S is principal as driver"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Secondary liability generally requires intent to assist/encourage the offence (or belief under the statutory scheme). Mere vague suspicion (‘a job’) may be insufficient without knowledge/belief about the essential nature of the offence.",
        whyWrong: [
          "Transport can be assistance, but without the requisite mental element it is not enough.",
          "—",
          "Recklessness is not the general test for accessorial liability post-Jogee (though statutory offences have their own mental elements).",
          "Driving does not make S a principal unless S commits the actus reus (or uses an innocent agent analysis)."
        ]
      }
    },
    {
      topic: "Timing — prior assistance",
      q: "S gives P a weapon days earlier. P commits offence later. Is timing a bar?",
      choices: [
        "Yes—assistance must be simultaneous",
        "No—assistance can be prior, as long as it assists the offence",
        "Yes—only help during offence counts",
        "Only encouragement counts, not assistance"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Assistance can be provided before the offence; it does not need to be simultaneous, so long as it assists/encourages and the mental element is met.",
        whyWrong: [
          "Simultaneity is not required.",
          "—",
          "Help can be before the offence.",
          "Assistance is a recognised basis for secondary liability."
        ]
      }
    },
    {
      topic: "Need for a principal offence + SCA 2007",
      q: "P accidentally knocks V, causing injury (no MR). S had encouraged P to “hit V.” Best?",
      choices: [
        "S is always liable regardless of principal’s fault",
        "Secondary liability generally requires a principal offence; if P commits no offence, S usually can’t be secondary (but SCA 2007 may still apply)",
        "S becomes principal automatically",
        "S is not liable in any way"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Traditional secondary liability is parasitic on a principal offence. If P commits no offence due to lack of MR, S may not be liable as an accessory to that offence, but SCA 2007 can criminalise encouragement/assistance even if the offence is not completed (depending on the section and any defences).",
        whyWrong: [
          "Accessory liability is not automatic if there is no principal offence.",
          "—",
          "S does not become principal automatically.",
          "S may still face liability under the statutory encouragement/assistance offences."
        ]
      }
    },
    {
      topic: "SCA 2007 — offence not committed",
      q: "S encourages P to assault V. P ignores and walks away. Liability?",
      choices: [
        "None, because no offence occurred",
        "S may still be liable under SCA 2007 for encouraging/assisting (even if offence not committed), subject to statutory defences",
        "S is principal to assault",
        "S liable only if V heard it"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Under SCA 2007, encouragement/assistance can be criminal even where the anticipated offence is not ultimately committed, provided the statutory elements are met and no defence applies.",
        whyWrong: [
          "Not necessarily: the statutory scheme can still capture the conduct.",
          "—",
          "S did not commit the actus reus as principal.",
          "V hearing it is not a strict requirement; what matters is encouragement/assistance and the statutory elements."
        ]
      }
    },
    {
      topic: "Assistance — lookout role",
      q: "S agrees to act as lookout and attends the scene but does nothing else. P commits burglary. Best?",
      choices: [
        "S not liable because he didn’t move",
        "S liable because attendance as lookout is assistance/encouragement",
        "S liable only if he warns P of police",
        "S liable only if he shares the proceeds"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Acting as a lookout is classic assistance: it provides practical support, even if S never has to shout a warning. The agreement and attendance can also encourage the principal.",
        whyWrong: [
          "Physical movement is irrelevant; the role itself can assist.",
          "—",
          "Warning is not necessary if the role itself assists.",
          "Sharing proceeds is not required for liability."
        ]
      }
    },
    {
      topic: "Scope — essentials not labels",
      q: "S encourages P to use “serious violence” to cause GBH. P commits s18 GBH (with intent). Best?",
      choices: [
        "S not liable because intent must be identical",
        "S may be liable if he intended to assist/encourage that kind of offence (serious violence/GBH)",
        "S liable only if he said “s18”",
        "S liable only if he foresaw s18"
      ],
      correct: 1,
      explain: {
        whyRight:
          "S does not need to use legal labels. If S intended to assist/encourage serious violence causing GBH (the essential matters), that can suffice for liability for the offence committed within that scope.",
        whyWrong: [
          "The law does not require identical phrasing; it requires intent as to the essential matters.",
          "—",
          "Using the statutory label is not required.",
          "Foresight alone is not sufficient post-Jogee."
        ]
      }
    },
    {
      topic: "Procuring by deception — innocent agent",
      q: "S lies to P: “That bag is yours, take it.” P takes V’s bag believing it’s his. Best?",
      choices: [
        "No theft because P is innocent",
        "S may be liable as principal via innocent agent/procuring (P lacks dishonesty)",
        "Only P is liable because he took it",
        "Both are automatically liable for robbery"
      ],
      correct: 1,
      explain: {
        whyRight:
          "If P lacks the mens rea for theft (e.g., dishonesty) because of S’s deception, S may be liable as the true offender by procuring/using an innocent agent.",
        whyWrong: [
          "P’s innocence does not necessarily mean nobody is liable.",
          "—",
          "If P lacks mens rea, P may not be guilty; S may be.",
          "Robbery is theft with force; not applicable on these facts and not ‘automatic’."
        ]
      }
    },
    {
      topic: "Withdrawal — last minute",
      q: "S is part of a group going to attack V. At the doorstep, S says “I’m out,” and walks away. The rest attack immediately. Best?",
      choices: [
        "Always effective withdrawal",
        "May be ineffective if too late / not clearly communicated / no reasonable steps given prior encouragement",
        "Always ineffective once you arrive",
        "Effective only if S physically restrains the others"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Withdrawal is fact-sensitive. A last-minute statement may be too late or may require more (clear communication and, depending on prior contribution, reasonable steps to undo/neutralise assistance).",
        whyWrong: [
          "Not always; it depends on timing and prior contribution.",
          "—",
          "Arrival does not make withdrawal automatically impossible.",
          "Physical restraint is not the only way to withdraw."
        ]
      }
    },
    {
      topic: "Assist vs encourage (classification)",
      q: "Which is the clearest example of “encouraging” rather than “assisting”?",
      choices: [
        "Giving P a ladder to climb into a window",
        "Driving P to the scene",
        "Shouting “Do it!” while P hesitates",
        "Acting as lookout"
      ],
      correct: 2,
      explain: {
        whyRight:
          "Words intended to spur the principal on are classic encouragement (as opposed to practical help).",
        whyWrong: [
          "This is practical assistance (equipment).",
          "This is practical assistance (transport).",
          "—",
          "This is practical assistance (lookout role)."
        ]
      }
    }
  ];

window.quizData = {
  title: "SQE1 Criminal Law — Parties to a Crime Quiz",
  subtitle: "Encouragement, assistance, withdrawal, scope, SCA 2007, and joint principals.",
  questions: originalQuestions
};
  
