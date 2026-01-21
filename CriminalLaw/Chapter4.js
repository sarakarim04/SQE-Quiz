(() => {
    const questions = [
  {
    topic: "Self-defence — honest belief (necessity)",
    q: "D mistakenly believes V is about to stab him (V is actually holding a phone). D punches V once to stop the perceived attack. Which is most accurate?",
    choices: [
      "Self-defence fails because D was mistaken",
      "Self-defence may apply if D honestly believed force was necessary and the force was reasonable in those circumstances",
      "Self-defence applies automatically if D was scared",
      "Self-defence requires V to actually be attacking"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Self-defence requires (1) an honest belief that force is necessary (subjective) and (2) that the force used is reasonable in the circumstances as D believed them to be. A mistake can still support the defence if honestly held.",
      whyWrong: [
        "A mistaken belief does not automatically defeat self-defence if it was honestly held.",
        "—",
        "Fear alone is not enough; the belief must make force necessary and the response must be reasonable.",
        "V does not need to be actually attacking if D honestly believed an attack was imminent."
      ]
    }
  },
  {
    topic: "Self-defence — excessive force (proportionality)",
    q: "V slaps D once. D responds by repeatedly striking V with a metal bar causing serious injury. Best analysis?",
    choices: [
      "Self-defence succeeds because V started it",
      "Self-defence fails if the force used is excessive",
      "Self-defence succeeds if D did not retreat",
      "Self-defence succeeds if D was angry"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Even if D honestly believed force was necessary, the force must be reasonable/proportionate in the circumstances as believed. Excessive force defeats self-defence.",
      whyWrong: [
        "Being attacked first does not permit unlimited retaliation; force must still be reasonable.",
        "—",
        "There is no strict duty to retreat; retreat is only evidence, and in any event it does not justify excessive force.",
        "Anger is irrelevant; the test is necessity and reasonable force."
      ]
    }
  },
  {
    topic: "Self-defence — preventing crime (CLA 1967 s3)",
    q: "D tackles P who has just snatched V’s handbag and is running away. D uses only enough force to stop P escaping. Which is most accurate?",
    choices: [
      "No defence exists for preventing crime",
      "D may rely on prevention of crime; force must be reasonable",
      "D may use any force necessary, even if disproportionate",
      "D must first warn P before using force"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under Criminal Law Act 1967 s3 and the common law, reasonable force may be used to prevent crime or effect/assist lawful arrest. The key limit is reasonableness.",
      whyWrong: [
        "The law recognises reasonable force to prevent crime.",
        "—",
        "Force must be reasonable; disproportionate force is not justified.",
        "A warning is not a legal prerequisite (though it may be relevant to reasonableness)."
      ]
    }
  },
  {
    topic: "Self-defence — no duty to retreat (evidential only)",
    q: "V approaches D aggressively. D could retreat safely but instead stands his ground and uses reasonable force to defend himself. Best statement?",
    choices: [
      "Self-defence fails automatically because D did not retreat",
      "There is no duty to retreat; failure to retreat is evidence when assessing reasonableness",
      "D must always retreat if possible",
      "Retreat is required only when defending property"
    ],
    correct: 1,
    explain: {
      whyRight:
        "There is no strict duty to retreat. Whether D retreated (or not) is relevant evidence in deciding whether the force used was reasonable.",
      whyWrong: [
        "Failure to retreat does not automatically defeat self-defence.",
        "—",
        "The law does not impose an absolute duty to retreat.",
        "There is no special retreat rule limited to property defence."
      ]
    }
  },
  {
    topic: "Self-defence — pre-emptive force",
    q: "D sees V raise a bottle as if to strike and honestly believes an attack is imminent. D hits V first with a single punch. Best analysis?",
    choices: [
      "Self-defence fails because D struck first",
      "Self-defence can apply if force was necessary and reasonable in circumstances as D believed them",
      "Self-defence requires D to wait to be hit",
      "Self-defence applies only where V has a weapon"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Self-defence may include pre-emptive force if D honestly believed it was necessary and the response was reasonable in the circumstances as believed.",
      whyWrong: [
        "Striking first does not automatically defeat the defence.",
        "—",
        "D does not have to wait to be struck if an imminent attack is honestly believed.",
        "A weapon is not required; the issue is necessity and reasonable force."
      ]
    }
  },
  {
    topic: "Self-defence — defence of another",
    q: "D sees P attacking D’s friend with fists. D intervenes and uses reasonable force to stop the attack. Which is most accurate?",
    choices: [
      "Self-defence only applies to defending yourself, not others",
      "Defence may apply to protect another if D honestly believed force was necessary and it was reasonable",
      "D must be related to the person he defends",
      "D is liable unless the friend asks for help first"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The defence extends to defence of another. The same test applies: honest belief in necessity + reasonable force in the circumstances as believed.",
      whyWrong: [
        "The defence can apply to protection of others.",
        "—",
        "No family relationship is required.",
        "A request for help is not required; necessity and reasonableness are."
      ]
    }
  },
  {
    topic: "Intoxication — voluntary intoxication + basic intent",
    q: "D voluntarily gets drunk and punches V (battery). D says he did not foresee harm because he was drunk. Best analysis?",
    choices: [
      "Defence succeeds because D lacked mens rea",
      "Defence fails because battery is basic intent and voluntary intoxication is no defence",
      "Defence succeeds if D was extremely drunk",
      "Defence succeeds if D later regrets it"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Voluntary intoxication is generally no defence to basic intent offences (where recklessness suffices), such as battery/assault.",
      whyWrong: [
        "Voluntary intoxication does not usually negate mens rea for basic intent offences.",
        "—",
        "Degree of drunkenness does not create a defence to basic intent in this way.",
        "Regret is irrelevant to liability."
      ]
    }
  },
  {
    topic: "Intoxication — voluntary intoxication + specific intent",
    q: "D voluntarily gets drunk and is charged with a specific intent offence requiring intention. Which is most accurate?",
    choices: [
      "Voluntary intoxication is never relevant to mens rea",
      "Voluntary intoxication may prevent formation of the required intent for specific intent offences",
      "Voluntary intoxication always provides a complete defence",
      "Voluntary intoxication converts all offences into strict liability"
    ],
    correct: 1,
    explain: {
      whyRight:
        "For specific intent offences, voluntary intoxication can negate the required intent if D genuinely did not form it. However, D may still be convicted of a basic intent alternative if proved.",
      whyWrong: [
        "Voluntary intoxication can be relevant to whether D formed specific intent.",
        "—",
        "It is not an automatic complete defence; it depends on whether the intent was actually formed.",
        "Intoxication does not change the legal nature of offences into strict liability."
      ]
    }
  },
  {
    topic: "Intoxication — involuntary intoxication (spiking)",
    q: "D’s drink is spiked without his knowledge. D then assaults V. Which is most accurate?",
    choices: [
      "Involuntary intoxication always excuses D",
      "Defence may apply if D lacked mens rea; if D still formed mens rea, defence fails",
      "Involuntary intoxication is never a defence to violence",
      "Defence applies only if D reports the spiking immediately"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Involuntary intoxication can provide a defence if it prevents D forming the required mens rea. If D nevertheless forms mens rea, the defence will not succeed.",
      whyWrong: [
        "It is not automatic; the key is whether mens rea was present.",
        "—",
        "It can apply to violence if mens rea is absent (fact-sensitive).",
        "Reporting is not a legal requirement for the defence."
      ]
    }
  },
  {
    topic: "Intoxication — involuntary intoxication but mens rea formed",
    q: "D is unknowingly spiked but still forms an intention to seriously injure V and attacks him. Defence?",
    choices: [
      "Defence succeeds because D was spiked",
      "Defence fails if D actually formed the required mens rea despite intoxication",
      "Defence succeeds if D later blacks out",
      "Defence succeeds because intoxication removes actus reus"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Even with involuntary intoxication, if D formed the mens rea required for the offence, intoxication does not excuse him.",
      whyWrong: [
        "Spiking is not an automatic excuse; mens rea is decisive.",
        "—",
        "A later blackout does not negate mens rea already formed at the time of the offence.",
        "Intoxication does not remove actus reus; it concerns mens rea analysis."
      ]
    }
  },
  {
    topic: "Intoxication — basic intent alternative (ladder)",
    q: "D is voluntarily intoxicated and charged with a specific intent offence, but the jury doubts he formed the specific intent. Which outcome is most likely?",
    choices: [
      "Acquittal of all offences automatically",
      "Possible conviction of a basic intent alternative if its elements are proved",
      "Conviction of the specific intent offence regardless of intent",
      "Only a civil penalty is possible"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Voluntary intoxication may negate specific intent, but D may still be convicted of a basic intent alternative offence if proved on the facts.",
      whyWrong: [
        "Negating specific intent does not necessarily eliminate liability for basic intent alternatives.",
        "—",
        "Specific intent still must be proved; intoxication does not guarantee conviction.",
        "Criminal liability does not convert to a civil penalty here."
      ]
    }
  },
  {
    topic: "Insanity — M’Naghten core elements",
    q: "Which best states the M’Naghten rules for insanity?",
    choices: [
      "Any diagnosed mental illness is enough",
      "Defect of reason from a disease of the mind causing D not to know the nature/quality of the act or that it was wrong",
      "Extreme stress automatically proves insanity",
      "Insanity applies whenever D acts irrationally"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Insanity requires a defect of reason arising from a disease of the mind, leading to lack of knowledge of the nature/quality of the act or that it was wrong.",
      whyWrong: [
        "Diagnosis alone is not the legal test.",
        "—",
        "Stress is not automatically ‘disease of the mind’ nor does it prove the M’Naghten criteria.",
        "Irrationality alone is not the legal standard."
      ]
    }
  },
  {
    topic: "Insanity — burden and standard",
    q: "Who bears the legal burden of proof for insanity, and to what standard?",
    choices: [
      "Prosecution, beyond reasonable doubt",
      "Defendant, on the balance of probabilities",
      "Judge, beyond reasonable doubt",
      "Jury, on the balance of probabilities"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Insanity places a legal burden on the defendant, typically proved on the balance of probabilities.",
      whyWrong: [
        "For insanity, the defendant (not the prosecution) bears the legal burden.",
        "—",
        "The judge does not bear the burden of proof.",
        "The jury decides facts, but the burden lies on the defendant, not the jury."
      ]
    }
  },
  {
    topic: "Insanity — meaning of 'wrong'",
    q: "Under the M’Naghten rules, 'wrong' generally means:",
    choices: [
      "Morally wrong only",
      "Legally wrong (i.e., contrary to law)",
      "Socially unpopular",
      "Financially harmful"
    ],
    correct: 1,
    explain: {
      whyRight:
        "The orthodox approach is that 'wrong' in M’Naghten refers to legal wrongness (knowing the act is contrary to law).",
      whyWrong: [
        "The test is not limited to moral wrongness as the default exam approach.",
        "—",
        "Social popularity is irrelevant.",
        "Financial impact is irrelevant."
      ]
    }
  },
  {
    topic: "Automatism — requirement of total loss of control",
    q: "For automatism, D must show:",
    choices: [
      "Partial loss of control",
      "Complete loss of voluntary control",
      "Any strong emotion",
      "That he was tired"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Automatism requires a complete loss of voluntary control. Mere impairment or reduced control is insufficient.",
      whyWrong: [
        "Partial loss is not enough for automatism.",
        "—",
        "Emotion is not the test.",
        "Tiredness alone is not automatism."
      ]
    }
  },
  {
    topic: "Automatism vs insanity — internal factor (epilepsy-type)",
    q: "D has an epileptic seizure and punches V while unconscious. Best classification?",
    choices: [
      "Sane automatism because it is an external factor",
      "Likely insanity because it is an internal condition affecting the mind",
      "Duress of circumstances",
      "Self-defence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Internal causes (like epilepsy) are generally treated as 'disease of the mind' for M’Naghten, pointing to insanity rather than sane automatism.",
      whyWrong: [
        "Sane automatism is usually linked to external factors.",
        "—",
        "Duress does not fit these facts.",
        "Self-defence does not fit these facts."
      ]
    }
  },
  {
    topic: "Automatism — external factor (swarm of bees example)",
    q: "D is attacked by a swarm of bees while driving, panics and loses control, hitting V. Best analysis?",
    choices: [
      "Insanity because he lost control",
      "Sane automatism may apply if there was a complete loss of voluntary control due to an external factor",
      "Duress by threats",
      "Voluntary intoxication"
    ],
    correct: 1,
    explain: {
      whyRight:
        "An external factor causing a complete loss of voluntary control can support sane automatism, leading to acquittal if proved.",
      whyWrong: [
        "Insanity generally concerns internal conditions rather than external triggers.",
        "—",
        "No threats are involved.",
        "No intoxication is involved."
      ]
    }
  },
  {
    topic: "Automatism — prior fault",
    q: "D fails to follow medical advice (e.g., skips food after insulin) and then enters a state of automatism and assaults V. Best statement?",
    choices: [
      "Automatism always succeeds if control is lost",
      "Automatism may fail if D was at fault in bringing about the state",
      "Automatism becomes self-defence",
      "Automatism is only relevant to sentencing"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If D is at fault in causing the automatism (e.g., ignoring clear medical instructions), the defence may be unavailable.",
      whyWrong: [
        "Loss of control is necessary but not always sufficient if there is prior fault.",
        "—",
        "Self-defence is a different doctrine.",
        "Automatism concerns liability, not merely sentencing."
      ]
    }
  },
  {
    topic: "Duress — basic threshold (death/serious injury)",
    q: "Which threat is generally sufficient to found duress?",
    choices: [
      "Threat to damage D’s car",
      "Threat of death or serious injury",
      "Threat to expose embarrassing information",
      "Threat to boycott D’s business"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Duress generally requires threats of death or serious injury (to D or someone close).",
      whyWrong: [
        "Property damage alone is usually insufficient.",
        "—",
        "Embarrassment is insufficient.",
        "Economic pressure is insufficient."
      ]
    }
  },
  {
    topic: "Duress — murder bar",
    q: "D kills V because P threatens to kill D if D refuses. Which is correct?",
    choices: [
      "Duress is a defence to murder",
      "Duress is not a defence to murder",
      "Duress always applies if the threat is serious enough",
      "Duress applies only if V is a stranger to D"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Duress is not available as a defence to murder (and is generally not available to attempted murder).",
      whyWrong: [
        "The law does not permit duress as a defence to murder.",
        "—",
        "No matter how serious, duress does not excuse murder.",
        "The relationship to V is irrelevant to the rule."
      ]
    }
  },
  {
    topic: "Duress — reasonable avenue of escape",
    q: "D is threatened with serious harm unless he commits a burglary tomorrow. D has a safe chance to go to police tonight but does not. Best analysis?",
    choices: [
      "Duress likely fails because D had a reasonable avenue of escape/protection",
      "Duress succeeds because the threat was serious",
      "Duress succeeds if D was frightened",
      "Duress applies only if burglary is completed"
    ],
    correct: 0,
    explain: {
      whyRight:
        "A key requirement is that the threat is imminent/inescapable; if D had a safe opportunity to seek protection (e.g., police) but did not, duress usually fails.",
      whyWrong: [
        "—",
        "Seriousness alone is not enough if there was a safe avenue of escape.",
        "Fear alone is not enough; the legal requirements must be met.",
        "Duress concerns liability regardless of completion."
      ]
    }
  },
  {
    topic: "Duress — immediacy/inescapability",
    q: "P threatens D: 'Rob a bank next month or I’ll seriously injure you.' There is no surveillance and D can seek help. Best statement?",
    choices: [
      "Duress likely fails due to lack of immediacy/inescapability",
      "Duress succeeds because the threat is serious",
      "Duress succeeds if D feels pressured",
      "Duress succeeds only if D is a first-time offender"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Duress generally requires imminent/inescapable threats with no safe avenue of escape; a threat for 'next month' typically allows time to seek protection.",
      whyWrong: [
        "—",
        "Serious threats do not suffice if D can safely escape/seek help.",
        "Pressure is not the test; imminence and escape are central.",
        "Prior record is not the legal criterion."
      ]
    }
  },
  {
    topic: "Duress — voluntary association limitation",
    q: "D voluntarily joins a violent gang knowing members are coerced into crimes. Later D is threatened into committing robbery. Best analysis?",
    choices: [
      "Duress automatically succeeds because threats were made",
      "Duress may be unavailable if D voluntarily associated and foresaw risk of coercion",
      "Duress succeeds because robbery is non-fatal",
      "Duress succeeds if D later regrets joining"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Duress can be barred where D voluntarily associates with criminals and foresaw (or ought to have foreseen) the risk of being subjected to coercion.",
      whyWrong: [
        "Duress is not automatic; limitations apply.",
        "—",
        "Whether the offence is non-fatal does not remove the voluntary association bar.",
        "Regret is irrelevant to the legal test."
      ]
    }
  },
  {
    topic: "Duress — reasonable firmness (objective limb)",
    q: "Which statement best reflects the 'reasonable firmness' element in duress?",
    choices: [
      "Only D’s subjective fear matters",
      "A sober person of reasonable firmness might have acted similarly",
      "D’s personal timidity always lowers the standard",
      "Only the victim’s conduct matters"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Duress uses a mixed test: D must respond as a person of reasonable firmness might, given the circumstances as D believed them to be.",
      whyWrong: [
        "Duress is not purely subjective; there is an objective element.",
        "—",
        "Personal cowardice does not automatically reduce the standard.",
        "The focus is on threats to D and D’s response, not the victim’s conduct."
      ]
    }
  },
  {
    topic: "Duress of circumstances — basic concept",
    q: "D drives dangerously because he believes his passenger will die unless rushed to hospital immediately. Best analysis?",
    choices: [
      "Only duress by threats can ever apply",
      "Duress of circumstances may apply if D reasonably believed death/serious injury was imminent and he acted proportionately",
      "Self-defence is the only available defence",
      "No defence exists for any driving offences"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Duress of circumstances can apply where D reasonably believes death/serious injury is imminent and the response is proportionate, depending on the offence and facts.",
      whyWrong: [
        "The law recognises duress of circumstances in appropriate cases.",
        "—",
        "Self-defence concerns unlawful attacks, not emergency pressure situations.",
        "Some defences can apply in driving contexts, depending on the case."
      ]
    }
  },
  {
    topic: "Consent — general limits (ABH and above)",
    q: "V consents to being punched hard 'for fun' and suffers ABH. Best statement?",
    choices: [
      "Consent is always a defence to ABH",
      "Consent is generally not valid for ABH unless within a recognised exception",
      "Consent is valid if both are adults",
      "Consent is valid if the injury heals quickly"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Consent generally does not excuse ABH or more serious injury unless the activity falls within a recognised exception (e.g., properly conducted sport, surgery).",
      whyWrong: [
        "Consent is not always valid for ABH.",
        "—",
        "Adulthood alone does not make consent effective for ABH.",
        "Healing speed is irrelevant to the legal rule."
      ]
    }
  },
  {
    topic: "Consent — recognised exception (sport)",
    q: "During a regulated boxing match under the rules, D punches V causing ABH. Best analysis?",
    choices: [
      "No offence because consent within recognised sporting exception (assuming within rules)",
      "Offence is always made out regardless of consent",
      "Consent applies only to battery, not ABH",
      "Consent applies only if V wins the match"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Properly conducted sport is a recognised exception: participants consent to the normal risks within the rules, which can negate liability.",
      whyWrong: [
        "—",
        "Consent can be relevant in recognised categories like sport.",
        "Consent can apply beyond battery in recognised exceptions.",
        "Winning is irrelevant."
      ]
    }
  },
  {
    topic: "Consent — fraud vitiating consent (nature/purpose)",
    q: "D tells V he is performing a medical procedure, but it is actually done for D’s sexual gratification. V 'consents'. Best statement?",
    choices: [
      "Consent is valid because V said yes",
      "Consent may be vitiated by fraud as to the nature or purpose of the act",
      "Consent is always valid in private",
      "Consent is invalid only if money changes hands"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Consent can be vitiated where there is deception about the nature or purpose of the act, meaning consent is not real consent to that act.",
      whyWrong: [
        "A verbal 'yes' is not enough if consent is vitiated by deception about the act itself.",
        "—",
        "Privacy does not validate vitiated consent.",
        "Payment is irrelevant to whether consent is real."
      ]
    }
  },
  {
    topic: "Consent — serious harm outside exceptions",
    q: "V agrees to be stabbed as part of an 'exciting ritual' and suffers a wound. Best analysis?",
    choices: [
      "Consent is valid if freely given",
      "Consent is generally invalid for serious harm outside recognised exceptions",
      "Consent is valid if V is over 18",
      "Consent is valid if D is careful"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Consent generally cannot legitimise serious harm (wounding/GBH) unless within recognised exceptions (e.g., surgery, properly conducted sport).",
      whyWrong: [
        "Free agreement does not automatically validate consent to serious harm.",
        "—",
        "Age does not make consent effective for serious harm.",
        "Care does not make an unlawful wounding consensual in law."
      ]
    }
  },
  {
    topic: "Self-defence — mistake caused by voluntary intoxication",
    q: "D is voluntarily drunk and mistakenly believes V is attacking him. D uses force against V. Best statement?",
    choices: [
      "Any honest mistake supports self-defence, even if caused by voluntary intoxication",
      "A mistake caused by voluntary intoxication may prevent reliance on self-defence (fact-sensitive)",
      "Self-defence always succeeds if D was intoxicated",
      "Intoxication replaces the need to consider self-defence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where D’s mistake as to necessity is caused by voluntary intoxication, the law treats this restrictively; D may not be able to rely on the mistaken belief (depending on the context/offence).",
      whyWrong: [
        "An intoxication-induced mistake is not treated the same as a sober mistaken belief.",
        "—",
        "Intoxication does not guarantee self-defence.",
        "Intoxication is not a standalone substitute for self-defence analysis."
      ]
    }
  },
  {
    topic: "Self-defence — defence of property",
    q: "D sees V attempting to smash D’s shop window at night. D uses reasonable force to stop V. Best analysis?",
    choices: [
      "Self-defence cannot apply to property",
      "Defence may apply to protect property / prevent crime if force is honestly believed necessary and reasonable",
      "D may use any force he wishes because it is his property",
      "D must wait until the window is actually broken"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Reasonable force may be used to protect property and/or prevent crime, subject to necessity (honest belief) and proportionality.",
      whyWrong: [
        "The defence can extend to defence of property/prevention of crime.",
        "—",
        "Force must be reasonable; there is no unlimited right.",
        "D does not need to wait for damage if he honestly believes force is necessary to prevent it."
      ]
    }
  },
  {
    topic: "Duress — threat to third party",
    q: "P threatens to seriously injure D’s child unless D commits a burglary. Best statement?",
    choices: [
      "Duress only applies to threats against D personally",
      "Duress can apply to threats against someone close to D (subject to other requirements)",
      "Duress automatically succeeds whenever a child is threatened",
      "Duress is unavailable for burglary"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Duress may be based on threats to D or to someone for whom D reasonably feels responsible/close, provided the other requirements (immediacy, no escape, reasonable firmness, etc.) are satisfied.",
      whyWrong: [
        "Threats can extend to others close to D.",
        "—",
        "It is not automatic; all elements must be met and bars may apply.",
        "Duress can be available for burglary (it is barred for murder and generally attempted murder)."
      ]
    }
  },
  {
    topic: "Insanity — 'nature and quality' limb",
    q: "D, suffering a disease of the mind, believes he is squeezing a lemon when he is actually strangling V. Which limb is most directly engaged?",
    choices: [
      "Not knowing the nature and quality of the act",
      "Not knowing the act was legally wrong",
      "Duress of circumstances",
      "Self-defence"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Believing the act is something entirely different engages the 'nature and quality' limb: D did not understand what he was physically doing.",
      whyWrong: [
        "—",
        "This is a different limb: knowing what you are doing but not that it is wrong.",
        "Duress does not apply on these facts.",
        "Self-defence does not apply on these facts."
      ]
    }
  },
  {
    topic: "Automatism — not just impaired control",
    q: "D becomes angry and 'loses it', acting impulsively but still aware of his actions. He claims automatism. Best analysis?",
    choices: [
      "Automatism applies whenever D acts impulsively",
      "Automatism requires complete loss of voluntary control; mere impulsivity is not enough",
      "Automatism is the same as diminished responsibility",
      "Automatism applies only if D later cannot remember"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Automatism requires total loss of voluntary control. Acting impulsively or with reduced self-control is not automatism.",
      whyWrong: [
        "Impulsivity is not the legal test.",
        "—",
        "Diminished responsibility is a partial defence to murder, not automatism.",
        "Amnesia alone does not prove automatism."
      ]
    }
  },
  {
    topic: "Consent — horseplay / rough play (limit)",
    q: "Two friends engage in rough horseplay. D causes V an injury amounting to ABH. Best statement?",
    choices: [
      "Consent always applies to horseplay causing ABH",
      "Consent may apply only in limited circumstances; serious injury can take it outside recognised exceptions",
      "Consent never applies between friends",
      "Consent applies only if the activity was filmed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Horseplay can sometimes fall within recognised exceptions, but it is fact-sensitive and serious injuries may make consent ineffective.",
      whyWrong: [
        "Consent is not automatic; it depends on the facts and the level of harm.",
        "—",
        "Friendship does not automatically exclude consent analysis.",
        "Filming is irrelevant."
      ]
    }
  },
  {
    topic: "Quick identifier — defence unavailable to murder",
    q: "Which general defence is not available to murder?",
    choices: [
      "Self-defence",
      "Duress",
      "Insanity",
      "Automatism"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Duress is not a defence to murder (and is generally not available to attempted murder).",
      whyWrong: [
        "Self-defence can apply if the requirements are met.",
        "—",
        "Insanity can apply if M’Naghten is satisfied.",
        "Automatism (where applicable) can lead to acquittal."
      ]
    }
  }
];

window.quizData = {
    title: "SQE1 Criminal Law — Defences Quiz",
    subtitle: "Self-defence, intoxication, insanity, automatism, duress, and consent.",
    questions: questions
  };
})();
  
