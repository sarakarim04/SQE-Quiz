(() => {
  const questions = [
  {
    topic: "Homicide — murder: mens rea (GBH intent)",
    q: "D hits V intending to cause serious injury (GBH). V dies. What is the best statement about murder mens rea?",
    choices: [
      "Murder requires intention to kill only",
      "Intention to cause GBH can be sufficient for murder",
      "Murder mens rea is recklessness as to death",
      "Murder mens rea requires premeditation"
    ],
    correct: 1,
    explain: {
      whyRight:
        "For murder, 'malice aforethought' is satisfied by an intention to kill or an intention to cause grievous bodily harm (GBH). If D intended GBH and unlawfully caused death, the mens rea for murder is satisfied.",
      whyWrong: [
        "The mens rea is not limited to intent to kill; intent to cause GBH can also suffice.",
        "—",
        "Recklessness alone is insufficient for murder.",
        "Premeditation is not a legal element of murder."
      ]
    }
  },
  {
    topic: "Homicide — intention: oblique intention (virtual certainty)",
    q: "D sets fire to a house to frighten V. D foresees death as a virtual certainty and continues. V dies. Best mens rea analysis?",
    choices: [
      "No murder because D’s aim was only to frighten",
      "Oblique intention may be found because death was a virtual certainty and appreciated",
      "Only manslaughter because D did not desire death",
      "No liability because V chose to stay inside"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A jury may find oblique intention where death/serious harm is a virtual certainty from D’s act and D appreciates that. Purpose to frighten does not prevent an intention finding if the virtual certainty threshold is met.",
      whyWrong: [
        "Purpose is relevant but not decisive if the virtual certainty + appreciation test is met.",
        "—",
        "Desire is not required; intention may be inferred from virtual certainty + appreciation.",
        "Victim choice does not automatically break causation or negate intention."
      ]
    }
  },
  {
    topic: "Homicide — voluntary manslaughter: definition",
    q: "Which best describes voluntary manslaughter?",
    choices: [
      "Killing with negligence only",
      "Murder reduced by a partial defence",
      "Any killing during a fight",
      "Assisted suicide"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Voluntary manslaughter is where the actus reus and mens rea of murder are proved but liability is reduced by a partial defence (e.g., loss of control, diminished responsibility, suicide pact).",
      whyWrong: [
        "Negligence-only killings are involuntary manslaughter (gross negligence), not voluntary manslaughter.",
        "—",
        "A fight does not automatically reduce murder; a partial defence must be made out.",
        "Assisted suicide is a different offence framework and not the definition of voluntary manslaughter."
      ]
    }
  },
  {
    topic: "Homicide — loss of control: requirements",
    q: "D kills V with intent to kill and claims loss of control. Which is required for the defence?",
    choices: [
      "The loss of control must be sudden",
      "There must be a qualifying trigger plus the objective test satisfied",
      "Any anger is enough",
      "Infidelity always triggers the defence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Loss of control requires proof of (1) loss of self-control, (2) a qualifying trigger (fear of serious violence and/or extremely grave things said/done causing justifiable sense of being seriously wronged), and (3) the objective test.",
      whyWrong: [
        "The law no longer requires the loss of control to be sudden (though timing is evidentially relevant).",
        "—",
        "Anger alone does not satisfy the statutory conditions.",
        "Sexual infidelity is excluded as a qualifying trigger by itself."
      ]
    }
  },
  {
    topic: "Homicide — loss of control: revenge exclusion",
    q: "D kills V after planning it for days to get revenge for an insult. D says he ‘lost control’ at the moment. Best?",
    choices: [
      "Loss of control applies if D felt strong emotion",
      "Loss of control likely fails because revenge is excluded",
      "Loss of control automatically applies if V insulted D",
      "Loss of control applies only if V used violence first"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A considered desire for revenge is a statutory bar to loss of control. Evidence of planning and revenge motive usually defeats the defence.",
      whyWrong: [
        "Strong emotion does not overcome the statutory exclusion for revenge.",
        "—",
        "An insult alone does not automatically create a qualifying trigger or satisfy the objective test.",
        "The defence is not limited to cases where V used violence first; it depends on the statutory triggers."
      ]
    }
  },
  {
    topic: "Homicide — diminished responsibility: elements",
    q: "D has severe depression and kills V. Which best captures diminished responsibility?",
    choices: [
      "Any mental illness automatically reduces murder",
      "Abnormality from a recognised condition + substantial impairment + explanation for killing",
      "D must be totally incapable of self-control",
      "It applies only if D is psychotic"
    ],
    correct: 1,
    explain: {
      whyRight:
        "D must show an abnormality of mental functioning from a recognised medical condition that substantially impaired specified capacities and provides an explanation for the killing.",
      whyWrong: [
        "A diagnosis alone is not enough; all statutory elements must be proved.",
        "—",
        "‘Substantial’ impairment is required, not total incapacity.",
        "The defence is not limited to psychosis; many recognised conditions may qualify."
      ]
    }
  },
  {
    topic: "Homicide — diminished responsibility: alcohol dependence syndrome",
    q: "D is intoxicated and kills V. D relies on diminished responsibility due to alcohol dependence syndrome (ADS). Best general approach?",
    choices: [
      "Intoxication can never be relevant to diminished responsibility",
      "If ADS is a recognised condition and substantially impairs capacities, the defence may apply (fact-sensitive)",
      "Voluntary intoxication always gives diminished responsibility",
      "Diminished responsibility is unavailable if any alcohol was consumed"
    ],
    correct: 1,
    explain: {
      whyRight:
        "If ADS (or another recognised condition) substantially impairs the relevant capacities and explains the killing, diminished responsibility may apply; the analysis is fact-sensitive and not automatic.",
      whyWrong: [
        "Intoxication can be relevant in the overall factual matrix; the key is the recognised condition and substantial impairment.",
        "—",
        "Voluntary intoxication alone does not automatically satisfy the statutory test.",
        "Consumption of alcohol does not automatically bar the defence; it depends on the medical condition and impairment."
      ]
    }
  },
  {
    topic: "Homicide — unlawful act manslaughter: dangerousness test",
    q: "Unlawful act manslaughter requires the unlawful act to be ‘dangerous’. What test is used?",
    choices: [
      "D must foresee a risk of death",
      "A sober and reasonable person would recognise a risk of some harm",
      "Any unlawful act is automatically dangerous",
      "The victim must be particularly vulnerable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Dangerousness is assessed objectively: would a sober and reasonable person recognise that the unlawful act carries a risk of some physical harm?",
      whyWrong: [
        "Foreseeing a risk of death is not required for unlawful act manslaughter.",
        "—",
        "Not every unlawful act is ‘dangerous’ in the required objective sense.",
        "Victim vulnerability is not the dangerousness test (though it can matter in causation/thin skull contexts)."
      ]
    }
  },
  {
    topic: "Homicide — unlawful act manslaughter: foresight of death not required",
    q: "D commits a minor assault. V falls awkwardly, hits their head and dies. D did not foresee serious harm. Liability?",
    choices: [
      "No manslaughter because death was unforeseeable",
      "Unlawful act manslaughter may apply if the assault was dangerous and caused death",
      "Murder because any unlawful act causing death is murder",
      "Gross negligence manslaughter only"
    ],
    correct: 1,
    explain: {
      whyRight:
        "For unlawful act manslaughter, D need not foresee death; the prosecution must prove a dangerous unlawful act (risk of some harm) that caused death, plus D’s mens rea for the underlying act.",
      whyWrong: [
        "Foreseeability of death is not required for unlawful act manslaughter.",
        "—",
        "Murder requires intent to kill or cause GBH, not merely any unlawful act causing death.",
        "Gross negligence manslaughter is a different route requiring a duty of care and gross breach."
      ]
    }
  },
  {
    topic: "Homicide — UAM vs GNM: key distinction",
    q: "Which is a key distinction between unlawful act manslaughter (UAM) and gross negligence manslaughter (GNM)?",
    choices: [
      "UAM requires a duty of care; GNM does not",
      "GNM requires duty of care and gross breach; UAM requires an unlawful act",
      "Both require intention to kill",
      "Both require D to foresee death"
    ],
    correct: 1,
    explain: {
      whyRight:
        "GNM is negligence-based and requires duty of care, breach, causation, risk of death, and grossness. UAM requires a complete unlawful act that is objectively dangerous and causes death.",
      whyWrong: [
        "This reverses the correct position: duty of care is central to GNM, not UAM.",
        "—",
        "Neither UAM nor GNM requires intent to kill.",
        "Neither requires D to foresee death (GNM focuses on objective foreseeability of risk of death; UAM uses objective dangerousness)."
      ]
    }
  },
  {
    topic: "Homicide — gross negligence manslaughter: risk threshold",
    q: "In gross negligence manslaughter, the risk that must be foreseeable is:",
    choices: [
      "Risk of any harm",
      "Risk of serious harm",
      "Risk of death",
      "Risk of property damage"
    ],
    correct: 2,
    explain: {
      whyRight:
        "Gross negligence manslaughter requires that, at the time of the breach, it was reasonably foreseeable that the breach created a risk of death.",
      whyWrong: [
        "Risk of ‘any harm’ is too low for gross negligence manslaughter.",
        "Risk of serious harm is generally insufficient; the focus is risk of death.",
        "—",
        "Property damage is irrelevant."
      ]
    }
  },
  {
    topic: "Homicide — gross negligence manslaughter: grossness",
    q: "D is a doctor who makes a very serious mistake during surgery causing death. Which issue is most directly relevant to gross negligence manslaughter?",
    choices: [
      "Whether D intended death",
      "Whether the negligence was gross enough to be criminal",
      "Whether V consented to surgery",
      "Whether the mistake was common"
    ],
    correct: 1,
    explain: {
      whyRight:
        "In GNM the key question is whether the breach of duty was so bad, in all the circumstances, as to amount to criminal (‘gross’) negligence.",
      whyWrong: [
        "GNM does not require intention to kill.",
        "—",
        "Consent may matter to other issues, but GNM turns on duty, breach, causation, risk of death, and grossness.",
        "How common the mistake is does not determine whether the negligence is gross."
      ]
    }
  },
  {
    topic: "Homicide — causation: victim escape reaction",
    q: "D threatens V with serious violence. V runs into the road to escape and is hit by a car and dies. Best statement?",
    choices: [
      "Causation always breaks due to the victim’s choice",
      "Causation may remain if the victim’s reaction was reasonably foreseeable",
      "Murder cannot apply if the victim runs away",
      "Manslaughter cannot apply if a car caused death"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Victim actions will not break causation if they are a reasonably foreseeable response to D’s conduct; D can remain an operating and substantial cause.",
      whyWrong: [
        "Victim choice does not automatically break causation; it depends on foreseeability and independence.",
        "—",
        "Victim flight does not automatically negate murder if AR/MR and causation are established.",
        "An intervening car does not automatically remove liability if causation remains intact."
      ]
    }
  },
  {
    topic: "Homicide — murder: elements",
    q: "For murder, the prosecution must prove:",
    choices: [
      "Unlawful killing + intention to kill or cause GBH",
      "Any unlawful act causing death",
      "Duty of care + gross breach",
      "Agreement to kill"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Murder is the unlawful killing of a human being under the Queen’s peace with malice aforethought, i.e., intent to kill or intent to cause GBH.",
      whyWrong: [
        "—",
        "This describes unlawful act manslaughter, not murder.",
        "This describes gross negligence manslaughter, not murder.",
        "Agreement to kill relates to conspiracy, not the definition of murder."
      ]
    }
  },
  {
    topic: "Homicide — partial defences: identify",
    q: "Which is a partial defence to murder (reduces to manslaughter)?",
    choices: [
      "Duress",
      "Diminished responsibility",
      "Mistake",
      "Necessity (general)"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Diminished responsibility is a statutory partial defence that reduces murder to manslaughter if its elements are proved.",
      whyWrong: [
        "Duress is not a defence to murder.",
        "—",
        "Mistake is not a partial defence to murder (though it may be relevant to mens rea in some contexts).",
        "‘Necessity’ is not a standard partial defence to murder in the way diminished responsibility/loss of control/suicide pact are."
      ]
    }
  },
  {
    topic: "Homicide — self-defence: complete defence",
    q: "D kills V believing V is about to kill him, and the force used is proportionate. Best?",
    choices: [
      "Self-defence can be a complete defence to murder",
      "Self-defence reduces murder to manslaughter only",
      "Self-defence is never available in homicide",
      "Self-defence requires retreat"
    ],
    correct: 0,
    explain: {
      whyRight:
        "If D honestly believed force was necessary and used reasonable force in the circumstances as believed, self-defence is a complete defence (including to murder).",
      whyWrong: [
        "—",
        "Self-defence is not merely partial; it is complete when made out.",
        "Self-defence is available in homicide cases if the requirements are satisfied.",
        "There is no absolute duty to retreat; retreat is evidence relevant to reasonableness."
      ]
    }
  },
  {
    topic: "Homicide — loss of control: fear trigger",
    q: "D kills V and argues he lost control due to fear of serious violence from V. Which defence is most directly engaged?",
    choices: [
      "Loss of control (fear trigger)",
      "Diminished responsibility only",
      "Suicide pact",
      "Duress"
    ],
    correct: 0,
    explain: {
      whyRight:
        "Fear of serious violence can be a qualifying trigger for loss of control under the statutory scheme, potentially reducing murder to manslaughter.",
      whyWrong: [
        "—",
        "Diminished responsibility is a different partial defence requiring a recognised condition and substantial impairment.",
        "Suicide pact is a different partial defence with specific requirements.",
        "Duress is generally not available as a defence to murder."
      ]
    }
  },
  {
    topic: "Homicide — loss of control: structure",
    q: "Which statement about loss of control is most accurate?",
    choices: [
      "It applies whenever D is jealous",
      "It requires a qualifying trigger and an objective test",
      "It applies only if V provoked D intentionally",
      "It is identical to the old provocation defence"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Loss of control is statutory and requires (i) loss of self-control, (ii) a qualifying trigger, and (iii) the objective test for how a person of normal tolerance and self-restraint might react.",
      whyWrong: [
        "Jealousy does not automatically satisfy the statutory requirements.",
        "—",
        "The victim’s intentional provocation is not required; focus is on the statutory triggers and objective test.",
        "It replaced provocation but is not identical; the statutory requirements differ."
      ]
    }
  },
  {
    topic: "Homicide — involuntary manslaughter: robbery death",
    q: "D kills V during an armed robbery. D did not intend to kill or cause GBH, but did intend the robbery. Most likely homicide (if causation proved)?",
    choices: [
      "Murder automatically",
      "Unlawful act manslaughter may be available if the underlying unlawful act is dangerous",
      "No homicide offence possible",
      "Only voluntary manslaughter"
    ],
    correct: 1,
    explain: {
      whyRight:
        "A dangerous unlawful act (such as a violent robbery) that causes death can found unlawful act manslaughter without proof of intent to kill or cause GBH.",
      whyWrong: [
        "Murder requires intent to kill or cause GBH; robbery intent alone is not enough.",
        "—",
        "A homicide offence can still be made out via involuntary manslaughter routes.",
        "Voluntary manslaughter requires murder plus a partial defence; that’s not the best fit here."
      ]
    }
  },
  {
    topic: "Homicide — gross negligence manslaughter: neglect by carer",
    q: "D owes V a duty of care as a carer. D grossly neglects V, who dies. Best fit?",
    choices: [
      "Unlawful act manslaughter",
      "Gross negligence manslaughter",
      "Murder (GBH intent implied)",
      "Attempted murder"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where death results from a gross breach of a duty of care, with an objectively foreseeable risk of death, gross negligence manslaughter is the appropriate analysis.",
      whyWrong: [
        "UAM requires a complete unlawful act that is objectively dangerous, not mere negligent omission/breach.",
        "—",
        "Murder requires intent to kill or cause GBH, not merely gross neglect.",
        "Attempted murder is impossible because V died, and it also requires intent to kill."
      ]
    }
  },
  {
    topic: "Homicide — unlawful act manslaughter: unlawful act requirement",
    q: "In unlawful act manslaughter, the ‘unlawful act’ must be:",
    choices: [
      "A tort",
      "A complete criminal offence",
      "A breach of contract",
      "Any immoral act"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Unlawful act manslaughter requires a complete underlying criminal offence (the ‘unlawful act’) that is objectively dangerous and causes death.",
      whyWrong: [
        "A tort is a civil wrong and is not sufficient by itself for UAM.",
        "—",
        "A breach of contract is not a criminal offence by itself.",
        "Immorality is not the legal test."
      ]
    }
  },
  {
    topic: "Homicide — causation: thin skull in manslaughter",
    q: "D punches V (a dangerous unlawful act). V dies partly because of a rare condition. Best?",
    choices: [
      "D escapes liability because death was unforeseeable",
      "Thin skull rule means D takes V as found; causation may still be satisfied",
      "The condition always breaks causation",
      "Unlawful act manslaughter requires foresight of death so no liability"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Under the thin skull principle, D takes V as found. Victim vulnerability does not usually break causation; if D’s act remains an operating and substantial cause, liability can follow.",
      whyWrong: [
        "Unforeseeability of the extent of harm does not automatically defeat causation.",
        "—",
        "Victim vulnerability does not automatically break the chain of causation.",
        "UAM does not require foresight of death."
      ]
    }
  },
  {
    topic: "Homicide — suicide pact: effect",
    q: "Which best describes suicide pact as a partial defence?",
    choices: [
      "It applies when D kills V believing V wanted to die",
      "It reduces murder to manslaughter where D kills pursuant to a genuine suicide pact",
      "It is a complete defence",
      "It applies to attempted murder only"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Where the statutory requirements for a genuine suicide pact are met, it operates as a partial defence, reducing murder to manslaughter.",
      whyWrong: [
        "A mere belief that V wanted to die is not the legal test; the pact requirements must be satisfied.",
        "—",
        "It is partial, not complete.",
        "It is not confined to attempted murder; it addresses liability where death occurs."
      ]
    }
  },
  {
    topic: "Homicide — diminished responsibility: burden of proof",
    q: "D kills V and argues diminished responsibility. Who bears the legal burden?",
    choices: [
      "Prosecution beyond reasonable doubt",
      "Defendant on balance of probabilities",
      "Defendant beyond reasonable doubt",
      "Judge on balance of probabilities"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Diminished responsibility places a legal burden on the defendant to prove the elements on the balance of probabilities.",
      whyWrong: [
        "The prosecution does not bear the legal burden for diminished responsibility.",
        "—",
        "The standard is not beyond reasonable doubt for the defendant.",
        "The burden is on the defendant, not the judge."
      ]
    }
  },
  {
    topic: "Homicide — loss of control: burden of proof",
    q: "D kills V and claims loss of control. Once properly raised, who must disprove it?",
    choices: [
      "Defendant on balance of probabilities",
      "Prosecution beyond reasonable doubt",
      "Prosecution on balance of probabilities",
      "Defendant beyond reasonable doubt"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Loss of control is generally treated as requiring an evidential burden on D; once raised, the prosecution must disprove it beyond reasonable doubt.",
      whyWrong: [
        "Loss of control is not generally a legal-burden-on-D defence like diminished responsibility.",
        "—",
        "The prosecution standard is beyond reasonable doubt, not balance of probabilities.",
        "The defendant does not have to disprove the prosecution case beyond reasonable doubt."
      ]
    }
  },
  {
    topic: "Homicide — attempted murder vs s18: intent to kill",
    q: "D attacks V intending to cause GBH. V survives. Best offence selection?",
    choices: [
      "Murder",
      "Attempted murder automatically",
      "No offence because no death",
      "Likely s18 GBH; attempted murder only if intent to kill is proved"
    ],
    correct: 3,
    explain: {
      whyRight:
        "Attempted murder requires intent to kill. Intent to cause GBH supports s18 (if intent to cause GBH is proved) but does not automatically establish attempted murder.",
      whyWrong: [
        "Murder requires death.",
        "Attempted murder is not automatic; it requires proof of intent to kill.",
        "There can be serious non-fatal offences even without death.",
        "—"
      ]
    }
  },
  {
    topic: "Homicide — oblique intention: threshold",
    q: "For murder, ‘intention’ includes oblique intention when:",
    choices: [
      "Death is possible and D is reckless",
      "Death is a virtual certainty and D appreciates that",
      "Death is likely and D should have known",
      "Death occurs and D is morally blameworthy"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Oblique intention may be found where death/GBH is a virtual certainty from D’s act and D appreciates that fact.",
      whyWrong: [
        "Possibility + recklessness is too low for intention.",
        "—",
        "Likelihood/‘should have known’ is not the intention test.",
        "Moral blameworthiness is not the legal test for intention."
      ]
    }
  },
  {
    topic: "Homicide — UAM: unlawful act not dangerous",
    q: "D commits an unlawful act that is not objectively dangerous (no risk of harm). V unexpectedly dies. Unlawful act manslaughter?",
    choices: [
      "Yes, any unlawful act causing death is enough",
      "No, because the unlawful act must be objectively dangerous",
      "Yes, if D was careless",
      "Yes, if V was vulnerable"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Unlawful act manslaughter requires the underlying unlawful act to be objectively dangerous (a sober and reasonable person would recognise a risk of some harm).",
      whyWrong: [
        "Dangerousness is required; causation alone is not enough.",
        "—",
        "Carelessness is not the UAM test; UAM is not negligence-based.",
        "Victim vulnerability does not replace the dangerousness requirement."
      ]
    }
  },
  {
    topic: "Homicide — GNM: grossness requirement",
    q: "D owes V a duty of care. D breaches it and causes death, but the breach is not ‘gross’. Best?",
    choices: [
      "Gross negligence manslaughter still applies because death occurred",
      "GNM requires grossness; without it, GNM fails",
      "Murder applies instead",
      "UAM applies automatically"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Gross negligence manslaughter requires the negligence to be so bad as to amount to a criminal act (‘gross’). Without grossness, GNM is not made out.",
      whyWrong: [
        "Death alone does not make negligence criminally gross.",
        "—",
        "Murder requires intent to kill or cause GBH, not mere negligence.",
        "UAM requires a complete unlawful act and objective dangerousness, not mere breach of duty."
      ]
    }
  },
  {
    topic: "Homicide — mens rea mapping",
    q: "Which combination correctly matches offence → key mens rea?",
    choices: [
      "Murder → recklessness as to death",
      "Murder → intent to kill or cause GBH",
      "UAM → intent to kill",
      "GNM → intent to cause harm"
    ],
    correct: 1,
    explain: {
      whyRight:
        "Murder requires intent to kill or intent to cause GBH (malice aforethought).",
      whyWrong: [
        "Recklessness as to death is insufficient for murder.",
        "—",
        "Unlawful act manslaughter does not require intent to kill; it requires mens rea for the underlying unlawful act.",
        "Gross negligence manslaughter is negligence-based, not intent-based."
      ]
    }
  }
];
  

window.quizData = {
    title: "SQE1 Criminal Law — Non-fatal Offences",
    subtitle: "Assault, battery, ABH, GBH, and related offences.",
    questions: questions
  };
})();
  
