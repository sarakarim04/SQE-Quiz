const originalQuestions = [
    {
      topic: "Attempt — more than merely preparatory",
      q: "D plans to rob a shop. He buys a mask and gloves and walks towards the shop but is arrested 200 metres away. Is D guilty of attempted robbery?",
      choices: [
        "Yes, because he intended to rob the shop",
        "No, because his acts are still merely preparatory",
        "Yes, because buying equipment is enough for an attempt",
        "No, because robbery is a strict liability offence"
      ],
      correct: 1,
      explain: {
        whyRight:
          "For an attempt under the Criminal Attempts Act 1981, D must do an act that is more than merely preparatory to the commission of the offence. Buying items and walking towards the scene is typically still preparation rather than execution.",
        whyWrong: [
          "Intention alone is not enough; D must also cross the actus reus threshold for an attempt.",
          "—",
          "Buying equipment is classic preparation and usually not enough by itself to be 'more than merely preparatory'.",
          "Robbery is not a strict liability offence, and strict liability is irrelevant to this conclusion."
        ]
      }
    },
    {
      topic: "Attempt — more than merely preparatory (execution stage)",
      q: "D enters V’s car, points a loaded gun at V and demands money. Before V hands anything over, V drives off. What is D’s best liability?",
      choices: [
        "No offence because theft was not completed",
        "Attempted robbery",
        "No inchoate liability because D did not take any property",
        "Conspiracy to rob"
      ],
      correct: 1,
      explain: {
        whyRight:
          "D has moved beyond preparation into the execution of the robbery. Completion is not required for attempt; it is enough that D has done an act more than merely preparatory with the requisite mens rea.",
        whyWrong: [
          "Robbery does not need to be completed for attempted robbery to arise.",
          "—",
          "Attempt does not require the property to be taken; that would be completion.",
          "Conspiracy requires an agreement with another person; none is stated."
        ]
      }
    },
    {
      topic: "Attempt — identifying the threshold",
      q: "Which of the following is MOST likely to be an act 'more than merely preparatory' to burglary?",
      choices: [
        "Buying a crowbar to use in a burglary",
        "Driving past the target house twice to check for lights",
        "Trying the door lock with tools at the target house",
        "Writing down the address of the target house"
      ],
      correct: 2,
      explain: {
        whyRight:
          "Trying the lock with tools at the scene usually amounts to moving from preparation to execution, and is commonly treated as more than merely preparatory.",
        whyWrong: [
          "Buying tools is preparation and usually not enough on its own.",
          "Reconnaissance (driving past) is preparation, not execution.",
          "—",
          "Writing down details is purely preparatory."
        ]
      }
    },
    {
      topic: "Attempt — impossibility (facts as believed)",
      q: "D buys a phone believing it is stolen, intending to commit handling stolen goods. The phone is not in fact stolen. Is D guilty of an attempt?",
      choices: [
        "No, because the phone was not stolen",
        "Yes, because impossibility does not prevent attempt liability",
        "No, because handling requires the goods to be stolen, so attempt is impossible",
        "Yes, but only if the seller lied to D"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Under the Criminal Attempts Act 1981, D may be guilty of attempt even where commission is impossible on the actual facts, provided D intends the offence on the facts as he believes them (impossibility is not a bar).",
        whyWrong: [
          "The actual fact the phone is not stolen does not automatically prevent attempt liability.",
          "—",
          "Attempt liability can still arise even if completion is impossible on the true facts.",
          "A lie by the seller is not required; D’s own belief can be enough."
        ]
      }
    },
    {
      topic: "Attempt — absence of property (empty pocket)",
      q: "D tries to pickpocket V by putting his hand into V’s pocket intending to steal V’s wallet, but the pocket is empty. Is D guilty of attempted theft?",
      choices: [
        "No, because there was nothing to steal",
        "Yes, because theft can be attempted even if the pocket is empty",
        "No, because appropriation requires property, so attempt cannot apply",
        "Yes, but only if V noticed and felt threatened"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Attempt focuses on D’s intention and whether he has done an act more than merely preparatory. The absence of property does not prevent attempted theft if D is already executing the theft he intends.",
        whyWrong: [
          "An empty pocket does not prevent attempt liability if D has begun execution with intent.",
          "—",
          "While appropriation requires property for the completed offence, attempt can still apply where the object is missing.",
          "V’s awareness is irrelevant to whether D attempted theft."
        ]
      }
    },
    {
      topic: "Attempt — mens rea (what must be intended)",
      q: "Which statement best reflects the mens rea for attempt?",
      choices: [
        "Attempt requires only recklessness as to the full offence",
        "Attempt generally requires intention to commit the full offence, though circumstance elements are usually satisfied by intention/knowledge/belief as required by the offence",
        "Attempt requires negligence if the offence is serious",
        "Attempt requires no mens rea if the completed offence is strict liability"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Attempt usually requires an intention to commit the offence. For circumstance elements, the required mental state typically tracks the completed offence (often knowledge or belief rather than intention).",
        whyWrong: [
          "Recklessness is not generally enough for attempt.",
          "—",
          "Negligence is not the mens rea for attempt.",
          "Strict liability in the completed offence does not mean attempts have no mens rea across the board."
        ]
      }
    },
    {
      topic: "Attempted murder — mens rea",
      q: "Which mental element is required for attempted murder?",
      choices: [
        "Intention to cause serious injury (GBH) is enough",
        "Recklessness as to death is enough",
        "Intention to kill is required",
        "Negligence as to death is enough"
      ],
      correct: 2,
      explain: {
        whyRight:
          "Attempted murder requires an intention to kill. Intention to cause GBH (which can be enough for murder) is not sufficient for attempted murder.",
        whyWrong: [
          "For attempted murder, intention to cause GBH is not sufficient; intention to kill is needed.",
          "Recklessness as to death is not enough for attempted murder.",
          "—",
          "Negligence is not enough."
        ]
      }
    },
    {
      topic: "Attempt — abandonment",
      q: "D starts to break a window to burgle a house but then changes his mind and walks away before entering. Which is most accurate?",
      choices: [
        "D cannot be guilty because he abandoned the plan",
        "D may still be guilty of attempt if breaking the window is more than merely preparatory and he had the required intent",
        "D cannot be guilty because burglary requires entry",
        "D can be guilty only if he is caught inside the property"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Once D has done an act more than merely preparatory with intent, the offence of attempt can be complete. A later change of mind does not undo attempt liability.",
        whyWrong: [
          "Abandonment is not a general defence once the attempt threshold has been crossed.",
          "—",
          "Completion is not required for attempt; entry is for the full burglary offence.",
          "Being inside is not required for attempt."
        ]
      }
    },
    {
      topic: "Conspiracy — when complete",
      q: "P and S agree to burgle a house next week but do nothing else. Which is correct?",
      choices: [
        "No offence is committed until they arrive at the house",
        "Conspiracy is complete at the point of agreement",
        "This can only be attempted burglary",
        "There is no offence unless the burglary succeeds"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Conspiracy (under the Criminal Law Act 1977) is complete once there is an agreement to pursue a course of conduct that will involve commission of an offence. No further act is required.",
        whyWrong: [
          "Unlike attempt, conspiracy does not require steps towards commission beyond agreement.",
          "—",
          "Attempt requires an act more than merely preparatory; mere agreement is conspiracy territory.",
          "Conspiracy does not depend on completion."
        ]
      }
    },
    {
      topic: "Conspiracy — knowledge of criminal circumstances",
      q: "D agrees with P to import 'herbal medicine', believing it is legal. It is actually a controlled drug, but D does not know that. Best analysis?",
      choices: [
        "D is guilty of conspiracy regardless of what he believed",
        "D is not guilty of conspiracy if he lacked the intent/knowledge as to the circumstances making the conduct criminal",
        "D is guilty of attempted importation because he agreed",
        "D is guilty if he should have known it was illegal"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Conspiracy requires that D intends to play a part in the agreed course of conduct and has the necessary mental element as to the facts/circumstances that make it criminal. A mere 'should have known' standard is not enough.",
        whyWrong: [
          "Conspiracy is not absolute; it requires the requisite mens rea.",
          "—",
          "Attempt requires an act more than merely preparatory; agreement alone is conspiracy, not attempt.",
          "Negligence ('should have known') is not the general test for conspiracy."
        ]
      }
    },
    {
      topic: "Conspiracy — conditional agreements",
      q: "P and S agree: 'If we get a chance, we’ll rob that tourist.' Is that capable of being a conspiracy?",
      choices: [
        "No, because a conspiracy cannot be conditional",
        "Yes, because a conditional agreement can still amount to conspiracy",
        "No, because they did not set a specific date",
        "Yes, but only if they later take substantial steps"
      ],
      correct: 1,
      explain: {
        whyRight:
          "A conspiracy can exist even if the agreement is conditional (e.g., dependent on an opportunity), provided there is a true agreement to pursue the criminal course of conduct if the condition arises.",
        whyWrong: [
          "Conditionality does not automatically prevent an agreement being a conspiracy.",
          "—",
          "A specific date is not required.",
          "Conspiracy does not require steps beyond agreement (though later steps may evidence the agreement)."
        ]
      }
    },
    {
      topic: "SCA 2007 — s44 (intentional encouragement/assistance)",
      q: "S texts P: 'Burn down the shop tonight.' S intends P to do it. Which section best fits?",
      choices: [
        "s44 (intending to encourage/assist)",
        "s45 only (belief that offence will be committed)",
        "s46 only (belief one of a number will be committed)",
        "No offence unless the shop is actually burned"
      ],
      correct: 0,
      explain: {
        whyRight:
          "s44 covers doing an act capable of encouraging/assisting an offence with intent to encourage/assist its commission.",
        whyWrong: [
          "—",
          "s45 is framed around belief rather than intention; intention is the clearest fit on these facts.",
          "s46 concerns belief that one of a number of offences will be committed.",
          "The SCA 2007 offences can apply even if the principal offence is not ultimately committed (subject to statutory elements/defences)."
        ]
      }
    },
    {
      topic: "SCA 2007 — s45 (belief offence will be committed)",
      q: "S provides P a lock-pick believing P will definitely burgle tonight, and believing the lock-pick will help. Which section best fits?",
      choices: [
        "s44 only",
        "s45",
        "s46",
        "No offence because supplying tools is lawful"
      ],
      correct: 1,
      explain: {
        whyRight:
          "s45 is committed where D does an act capable of encouraging/assisting, believing the offence will be committed and that his act will encourage/assist it.",
        whyWrong: [
          "s44 is intention-based; these facts are framed around belief that the offence will occur.",
          "—",
          "s46 is where D believes one of a number of offences will be committed.",
          "A lawful act can still be an offence under SCA 2007 if done with the relevant mens rea."
        ]
      }
    },
    {
      topic: "SCA 2007 — s46 (one of a number of offences)",
      q: "S gives P a weapon believing P will commit either a robbery or a burglary, but S is unsure which. Which section best fits?",
      choices: [
        "s44",
        "s45",
        "s46",
        "No offence because S is uncertain which offence will occur"
      ],
      correct: 2,
      explain: {
        whyRight:
          "s46 covers doing an act capable of encouraging/assisting, believing that one of a number of offences will be committed and that the act will encourage/assist whichever occurs.",
        whyWrong: [
          "s44 is intention to encourage/assist a particular offence (or type) and is not the best match to 'one of a number'.",
          "s45 is belief that a particular offence will be committed, not uncertainty between multiple.",
          "—",
          "Uncertainty between a number of offences is exactly what s46 addresses."
        ]
      }
    },
    {
      topic: "SCA 2007 — offence not committed",
      q: "S encourages P to commit arson. P refuses and does nothing. Which is most accurate?",
      choices: [
        "S cannot be liable because the arson did not happen",
        "S may still be liable under the SCA 2007 for encouraging/assisting, even if the offence is not committed (subject to any statutory defences)",
        "S is automatically guilty of conspiracy",
        "S is automatically guilty of attempt"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Under the SCA 2007, encouraging/assisting offences can be committed even if the principal offence is not ultimately carried out, provided the elements are met and no statutory defence applies.",
        whyWrong: [
          "Completion of the principal offence is not always required for SCA 2007 liability.",
          "—",
          "Conspiracy requires an agreement; encouragement alone is not necessarily an agreement.",
          "Attempt concerns D attempting the offence himself, not encouraging another."
        ]
      }
    },
    {
      topic: "Attempt vs conspiracy — key difference",
      q: "Which statement is correct?",
      choices: [
        "Attempt is complete at the point of agreement",
        "Conspiracy requires an act more than merely preparatory",
        "Conspiracy is complete at agreement; attempt requires an act more than merely preparatory",
        "SCA 2007 requires the principal offence to be completed"
      ],
      correct: 2,
      explain: {
        whyRight:
          "Conspiracy is complete once there is an agreement. Attempt requires D to go beyond mere preparation by doing an act more than merely preparatory.",
        whyWrong: [
          "That describes conspiracy, not attempt.",
          "That describes attempt, not conspiracy.",
          "—",
          "SCA 2007 can apply even if the principal offence is not completed (depending on elements/defences)."
        ]
      }
    }
  ];

window.quizData = {
  title: "SQE1 Criminal Law — Inchoate Offences Quiz",
  subtitle: "Attempt, conspiracy, and encouragement/assistance (SCA 2007).",
  questions: originalQuestions
};
  
