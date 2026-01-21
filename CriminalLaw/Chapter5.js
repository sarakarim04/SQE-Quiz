(() => {
  const questions = [
    {
      topic: "Homicide — murder: mens rea (GBH intent)",
      q: "D punches V intending to cause really serious injury (GBH). V dies from complications. Which statement best reflects the mens rea for murder?",
      choices: [
        "Murder requires intention to kill only",
        "Intention to cause GBH can be sufficient for murder",
        "Recklessness as to death is sufficient for murder",
        "Murder requires planning and premeditation"
      ],
      correct: 1,
      explain: {
        whyRight:
          "For murder, 'malice aforethought' is satisfied by an intention to kill or an intention to cause grievous bodily harm (GBH). If D intended GBH and unlawfully caused V’s death, the mens rea for murder is satisfied.",
        whyWrong: [
          "The mens rea is not limited to intent to kill; intent to cause GBH can also suffice.",
          "—",
          "Recklessness alone is not enough for murder.",
          "Premeditation is not a required element of murder."
        ]
      }
    },
    {
      topic: "Homicide — intention: oblique intention (virtual certainty)",
      q: "D sets fire to a house to frighten the occupants. D realises death is a virtual certainty if he continues, but carries on anyway. V dies. Which is most accurate about intention?",
      choices: [
        "There is no intention because D’s purpose was only to frighten",
        "A jury may find intention because death was a virtual certainty and D appreciated that",
        "Intention exists only if D wanted V to die",
        "Oblique intention requires only that death was foreseeable"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Oblique intention can be found where death (or serious harm) is a virtual certainty from D’s act and D appreciates that. Purpose is relevant, but not decisive if the virtual certainty test is met.",
        whyWrong: [
          "Purpose is not the only route to intention; oblique intention can be found on virtual certainty + appreciation.",
          "—",
          "Desire is not required; appreciation of virtual certainty may suffice.",
          "Foreseeability is not enough; the test is higher than foreseeability."
        ]
      }
    },
    {
      topic: "Homicide — causation: factual causation (but for)",
      q: "D stabs V. Before the stab contributes to death, V is killed instantly by an unrelated falling tree. Which is the best statement on causation for homicide liability for V’s death?",
      choices: [
        "D is a factual cause because he intended to kill",
        "D is not a factual cause because 'but for' D’s act V would have died anyway at that time",
        "D is a factual cause because any contribution, however slight, is enough",
        "D is a factual cause if V had any pre-existing vulnerability"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Factual causation is assessed using the 'but for' test. If V would have died at that time regardless (because of the falling tree), D’s stab is not a factual cause of the death.",
        whyWrong: [
          "Intention does not establish causation.",
          "—",
          "Legal causation has a 'more than minimal' threshold, but factual causation still requires the but-for link first.",
          "Victim vulnerability affects extent of harm (thin skull), not the but-for requirement where death would have occurred anyway."
        ]
      }
    },
    {
      topic: "Homicide — causation: legal causation (operating and substantial)",
      q: "D seriously assaults V. V later dies after complications to which the assault made a significant contribution. Which best describes legal causation?",
      choices: [
        "D must be the sole cause of death",
        "D’s act must be an operating and substantial cause (more than minimal)",
        "D’s act must be the last cause in time",
        "D is not a cause if death occurs days later"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Legal causation requires that D’s conduct is more than a minimal cause—often expressed as an 'operating and substantial' cause. It does not need to be the sole or last cause.",
        whyWrong: [
          "Sole cause is not required.",
          "—",
          "Being the last cause is not required.",
          "A time gap does not automatically break causation; the issue is whether D’s act remained an operating and substantial cause."
        ]
      }
    },
    {
      topic: "Homicide — causation: thin skull rule",
      q: "D assaults V, causing a relatively minor injury. V has a rare condition and dies from complications that an ordinary person would not have suffered. Which is most accurate?",
      choices: [
        "D is not liable because death was unforeseeable",
        "D remains liable if causation is proved; D must take V as found",
        "V’s condition breaks the chain of causation automatically",
        "D is liable only if he knew about V’s condition"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Under the thin skull rule, D takes the victim as found. Unforeseeability of the extent of harm does not automatically negate causation if D’s act caused the death in fact and law.",
        whyWrong: [
          "Foreseeability of the precise outcome is not required for causation in this way.",
          "—",
          "Victim vulnerability does not automatically break the chain of causation.",
          "Knowledge of the condition is not required for the thin skull principle."
        ]
      }
    },
    {
      topic: "Homicide — causation: medical treatment (chain breaking)",
      q: "D stabs V. At hospital, doctors treat V negligently. V dies. Which is most accurate about causation?",
      choices: [
        "Negligent medical treatment always breaks the chain of causation",
        "Causation usually remains unless treatment is so independent and potent that D’s contribution becomes insignificant",
        "Any negligence breaks causation if it was unforeseeable",
        "Causation can never be broken once a wound is inflicted"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Negligent treatment usually does not break causation unless it is so independent and serious that D’s act is no longer an operating and substantial cause of death.",
        whyWrong: [
          "That is too absolute; negligence does not always break the chain.",
          "—",
          "Foreseeability is not the sole test; the focus is on whether D’s act remains operating and substantial.",
          "In exceptional cases, causation can be broken (though rarely)."
        ]
      }
    },
    {
      topic: "Homicide — murder: actus reus (unlawful killing)",
      q: "Which element must be proved for murder actus reus?",
      choices: [
        "An unlawful killing of a human being under the Queen’s peace",
        "Any unlawful act that creates fear",
        "A serious injury regardless of death",
        "A pre-planned attack"
      ],
      correct: 0,
      explain: {
        whyRight:
          "Murder actus reus is the unlawful killing of a human being under the Queen’s peace, with causation proved where relevant.",
        whyWrong: [
          "—",
          "Fear without death is not murder actus reus.",
          "Injury without death is not murder.",
          "Premeditation is not an actus reus element."
        ]
      }
    },
    {
      topic: "Homicide — murder: no requirement of premeditation",
      q: "Which statement is correct about murder?",
      choices: [
        "Murder requires premeditation",
        "Murder requires proof of motive",
        "Murder does not require premeditation; intention can be formed in a moment",
        "Murder requires a weapon"
      ],
      correct: 2,
      explain: {
        whyRight:
          "Murder does not require premeditation. The required intent (to kill or cause GBH) can be formed very quickly.",
        whyWrong: [
          "Premeditation is not required.",
          "Motive is not an element (though it may be evidential).",
          "—",
          "A weapon is not required."
        ]
      }
    },
    {
      topic: "Homicide — attempted murder: intent to kill",
      q: "D attacks V intending to cause GBH but not intending to kill. V survives. Which is most accurate?",
      choices: [
        "D is guilty of attempted murder because intent to cause GBH is enough",
        "Attempted murder requires intent to kill; D may instead be liable for an offence such as s18 GBH",
        "There is no liability because V survived",
        "Attempted murder requires only recklessness as to death"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Attempted murder requires an intention to kill. Intention to cause GBH is not enough for attempted murder, though it may support serious non-fatal offences (e.g., s18 GBH).",
        whyWrong: [
          "Intent to cause GBH is enough for murder, but not for attempted murder.",
          "—",
          "Serious non-fatal offences can still apply even if V survives.",
          "Recklessness is insufficient for attempted murder."
        ]
      }
    },
    {
      topic: "Homicide — voluntary manslaughter: definition",
      q: "Which best describes voluntary manslaughter?",
      choices: [
        "A killing caused by negligence only",
        "Murder reduced by a partial defence",
        "Any killing during a fight",
        "Assisting a suicide"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Voluntary manslaughter is where the actus reus and mens rea of murder are proved, but liability is reduced by a partial defence (e.g., loss of control or diminished responsibility).",
        whyWrong: [
          "Negligence-only killings are typically involuntary manslaughter, not voluntary manslaughter.",
          "—",
          "A fight is not a legal category; you still analyse murder/manslaughter elements.",
          "Assisting suicide is a separate offence."
        ]
      }
    },
    {
      topic: "Homicide — loss of control: structure",
      q: "D kills V and raises loss of control. Which set of requirements best reflects the statutory structure?",
      choices: [
        "Sudden loss of temper + provocation by the victim",
        "Loss of self-control + qualifying trigger + objective test (normal tolerance/self-restraint)",
        "Any strong emotion + genuine regret afterwards",
        "Fear alone, even if unreasonable, is sufficient"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Loss of control requires: (1) loss of self-control, (2) a qualifying trigger (fear of serious violence and/or extremely grave words/acts causing justifiable sense of being seriously wronged), and (3) an objective test based on age/sex and normal tolerance/self-restraint in the circumstances.",
        whyWrong: [
          "The old provocation model is not the modern statutory test; suddenness is not required.",
          "—",
          "Emotion and regret are not the statutory elements.",
          "Fear can be a trigger, but the statutory requirements (including the objective test) still must be met."
        ]
      }
    },
    {
      topic: "Homicide — loss of control: revenge exclusion",
      q: "D kills V after planning the attack for several days as revenge for an insult. D claims he 'lost control' at the moment of killing. Which is most accurate?",
      choices: [
        "Loss of control applies if D felt intense anger at the moment",
        "Loss of control is likely excluded because a considered desire for revenge defeats the defence",
        "Loss of control applies only if V physically attacked D first",
        "Loss of control automatically applies if V seriously insulted D"
      ],
      correct: 1,
      explain: {
        whyRight:
          "A considered desire for revenge is a statutory bar to the loss of control defence. Planning and revenge strongly point away from a qualifying loss of control.",
        whyWrong: [
          "Emotion at the moment is not enough if the killing is motivated by revenge.",
          "—",
          "A prior attack by V is not required; the issue is whether the statutory test is met (and revenge excludes it).",
          "Insults alone do not automatically establish the qualifying trigger or overcome the revenge exclusion."
        ]
      }
    },
    {
      topic: "Homicide — loss of control: fear trigger",
      q: "D kills V after V threatens D with a knife and D genuinely fears serious violence. Which qualifying trigger is most relevant?",
      choices: [
        "Fear of serious violence",
        "Sexual infidelity",
        "Minor insult causing annoyance",
        "A purely financial dispute"
      ],
      correct: 0,
      explain: {
        whyRight:
          "A qualifying trigger includes D’s fear of serious violence from V (or another identified person). If the other elements are met, it may support loss of control.",
        whyWrong: [
          "—",
          "Sexual infidelity is excluded as a qualifying trigger on its own.",
          "Minor insults usually will not meet the statutory threshold of extremely grave conduct and serious wrong.",
          "A financial dispute alone is not a qualifying trigger."
        ]
      }
    },
    {
      topic: "Homicide — loss of control: objective test",
      q: "For the loss of control defence, the objective limb asks whether:",
      choices: [
        "A person of D’s age and sex, with normal tolerance and self-restraint, might have reacted similarly in D’s circumstances",
        "Any reasonable person would have killed in those circumstances",
        "Only a person sharing D’s temperament would have reacted similarly",
        "D’s personal anger level makes the reaction reasonable"
      ],
      correct: 0,
      explain: {
        whyRight:
          "The objective test is based on D’s age and sex and a person with normal tolerance and self-restraint, in the circumstances, might have reacted similarly.",
        whyWrong: [
          "—",
          "The test is not whether killing was objectively 'reasonable' in a general sense; it’s the statutory comparator test.",
          "The comparator is not adjusted to match D’s temperament/short fuse.",
          "Personal anger does not set the standard."
        ]
      }
    },
    {
      topic: "Homicide — diminished responsibility: core elements",
      q: "Which option best states the key elements of diminished responsibility?",
      choices: [
        "Any mental illness diagnosis at the time of killing",
        "Abnormality of mental functioning from a recognised medical condition, substantially impairing relevant abilities, providing an explanation for the killing",
        "Temporary anger and stress that impaired judgment",
        "Voluntary intoxication that reduced inhibitions"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Diminished responsibility requires an abnormality of mental functioning arising from a recognised medical condition which substantially impairs specified mental abilities and provides an explanation (causal contribution) for the killing.",
        whyWrong: [
          "A diagnosis alone is not enough; the statutory elements must be proved.",
          "—",
          "Anger/stress alone usually won’t meet the recognised medical condition + substantial impairment test.",
          "Voluntary intoxication alone is not sufficient; it must tie into a recognised medical condition and substantial impairment."
        ]
      }
    },
    {
      topic: "Homicide — diminished responsibility: 'substantial' impairment",
      q: "In diminished responsibility, 'substantial impairment' is best understood as:",
      choices: [
        "Total incapacity to control actions",
        "More than minimal impairment, even if not total",
        "Any slight impairment",
        "Impairment that is medically proven to be permanent"
      ],
      correct: 1,
      explain: {
        whyRight:
          "'Substantial' generally means more than minimal (but it does not need to be total). It is ultimately a matter for the jury on the facts.",
        whyWrong: [
          "Total impairment is not required.",
          "—",
          "A slight/minimal impairment is not enough.",
          "Permanence is not required."
        ]
      }
    },
    {
      topic: "Homicide — diminished responsibility: causal link ('explanation')",
      q: "For diminished responsibility, D must show the abnormality:",
      choices: [
        "Was the sole cause of the killing",
        "Provided an explanation for the killing (a significant causal contribution)",
        "Was unrelated to the killing but existed at the time",
        "Was caused by V"
      ],
      correct: 1,
      explain: {
        whyRight:
          "D must show the abnormality provides an explanation for the killing (i.e., it contributed to causing D’s conduct). It need not be the sole cause.",
        whyWrong: [
          "Sole causation is not required.",
          "—",
          "A mere coincidence in time is not enough; it must explain the killing.",
          "The condition need not be caused by the victim."
        ]
      }
    },
    {
      topic: "Homicide — suicide pact (partial defence)",
      q: "Which statement best describes the suicide pact partial defence?",
      choices: [
        "It is a complete defence to murder",
        "It reduces murder to manslaughter where D killed pursuant to a genuine suicide pact",
        "It applies to attempted murder only",
        "It applies whenever V consented to death"
      ],
      correct: 1,
      explain: {
        whyRight:
          "A genuine suicide pact can reduce murder to manslaughter if the statutory requirements are met.",
        whyWrong: [
          "It is not a complete defence; it reduces to manslaughter.",
          "—",
          "It is not limited to attempted murder.",
          "Victim consent alone is not the test."
        ]
      }
    },
    {
      topic: "Homicide — unlawful act manslaughter: dangerousness test",
      q: "For unlawful act manslaughter, when is the 'dangerousness' requirement satisfied?",
      choices: [
        "Only if D foresaw a risk of death",
        "If a sober and reasonable person would recognise a risk of some harm from the unlawful act",
        "If the act is unlawful, it is automatically dangerous",
        "Only if the victim actually suffers serious harm"
      ],
      correct: 1,
      explain: {
        whyRight:
          "The 'dangerous' element is objective: a sober and reasonable person must recognise a risk of some harm from the unlawful act. D need not foresee death.",
        whyWrong: [
          "UAM does not require D to foresee death.",
          "—",
          "Not every unlawful act is dangerous; the objective risk of some harm is required.",
          "Serious harm need not actually occur for the act to be 'dangerous'; it’s assessed by objective risk."
        ]
      }
    },
    {
      topic: "Homicide — unlawful act manslaughter: need for a crime",
      q: "Which is correct regarding the 'unlawful act' in unlawful act manslaughter?",
      choices: [
        "It can be a tort (civil wrong) so long as it is dangerous",
        "It must be a complete criminal offence",
        "It can be a breach of contract if it causes death",
        "It can be any immoral act"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Unlawful act manslaughter requires a complete underlying criminal offence. Civil wrongs or immoral conduct alone do not suffice.",
        whyWrong: [
          "A tort is not enough; it must be criminal.",
          "—",
          "Contract breach is not enough; it must be criminal.",
          "Immorality is not a legal test."
        ]
      }
    },
    {
      topic: "Homicide — unlawful act manslaughter: mens rea",
      q: "For unlawful act manslaughter, the prosecution must prove D had:",
      choices: [
        "Intention to kill or cause GBH",
        "Mens rea for the underlying unlawful act (not foresight of death)",
        "Negligence as to death",
        "No mens rea at all (strict liability)"
      ],
      correct: 1,
      explain: {
        whyRight:
          "UAM requires the mens rea for the underlying unlawful act. It does not require intention to kill/GBH or foresight of death.",
        whyWrong: [
          "That is murder mens rea, not UAM.",
          "—",
          "GNM is negligence-based; UAM is based on an unlawful act with its own mens rea.",
          "UAM is not strict liability overall; the underlying offence typically has mens rea."
        ]
      }
    },
    {
      topic: "Homicide — unlawful act manslaughter: omission trap",
      q: "Which scenario is least likely to support unlawful act manslaughter (UAM) because of the 'unlawful act' requirement?",
      choices: [
        "D commits a battery causing V to fall and die",
        "D commits arson and someone dies",
        "D commits an unlawful act of criminal damage and V dies",
        "D fails to act despite owing V a duty of care, and V dies"
      ],
      correct: 3,
      explain: {
        whyRight:
          "UAM requires a positive unlawful act (a criminal offence). Pure omissions (even with a duty) typically point toward gross negligence manslaughter, not UAM.",
        whyWrong: [
          "Battery is an unlawful act that can ground UAM if dangerous and causative.",
          "Arson is an unlawful act and often clearly dangerous.",
          "Criminal damage can be the unlawful act if it is dangerous and causes death.",
          "—"
        ]
      }
    },
    {
      topic: "Homicide — gross negligence manslaughter: core elements",
      q: "Which set of elements best fits gross negligence manslaughter?",
      choices: [
        "Unlawful act + danger + death",
        "Duty of care + breach + causation + foreseeable risk of death + grossness",
        "Intention to cause GBH + death",
        "Agreement to commit an offence + death"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Gross negligence manslaughter requires a duty of care owed to the victim, breach causing death, a foreseeable risk of death, and negligence so gross as to be criminal.",
        whyWrong: [
          "That describes unlawful act manslaughter, not gross negligence manslaughter.",
          "—",
          "That describes murder mens rea (GBH intent), not negligence manslaughter.",
          "That resembles conspiracy concepts and is not the test for gross negligence manslaughter."
        ]
      }
    },
    {
      topic: "Homicide — gross negligence manslaughter: risk threshold",
      q: "For gross negligence manslaughter, what risk must be foreseeable at the time of the breach?",
      choices: [
        "Risk of any harm",
        "Risk of death",
        "Risk of property damage",
        "Risk of embarrassment"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Gross negligence manslaughter requires that a risk of death (not merely injury) was foreseeable from the breach of duty.",
        whyWrong: [
          "Risk of any harm is too low for gross negligence manslaughter.",
          "—",
          "Property damage is not the relevant risk threshold.",
          "Embarrassment is irrelevant."
        ]
      }
    },
    {
      topic: "Homicide — gross negligence manslaughter: duty of care",
      q: "In gross negligence manslaughter, why is 'duty of care' important?",
      choices: [
        "Because it proves intention to kill",
        "Because GNM is based on breach of a duty owed to the victim",
        "Because it replaces the need to prove causation",
        "Because it makes the offence strict liability"
      ],
      correct: 1,
      explain: {
        whyRight:
          "GNM is founded on a duty of care owed to V; the prosecution must prove duty, breach, causation, risk of death and grossness.",
        whyWrong: [
          "Intention is not required for GNM.",
          "—",
          "Causation must still be proved.",
          "GNM is not strict liability; it is negligence-based with a 'gross' threshold."
        ]
      }
    },
    {
      topic: "Homicide — causation: victim refusal of treatment (thin skull)",
      q: "D stabs V. Doctors advise a blood transfusion that would save V, but V refuses for religious reasons and dies. Which is most accurate?",
      choices: [
        "Causation is broken because V refused treatment",
        "Causation is not broken; D takes V as found, including beliefs",
        "Causation is broken only if refusal is unreasonable",
        "No liability because doctors could have saved V"
      ],
      correct: 1,
      explain: {
        whyRight:
          "The thin skull principle means D takes the victim as found, including religious beliefs. Refusal of treatment does not usually break the chain of causation.",
        whyWrong: [
          "Refusal does not automatically break causation.",
          "—",
          "The legal test is not simply 'unreasonable refusal'.",
          "Availability of treatment does not remove causation if D’s act remains an operating and substantial cause."
        ]
      }
    },
    {
      topic: "Homicide — causation: third-party intervention",
      q: "D seriously wounds V. While in hospital, a stranger deliberately shoots V dead. Which is most accurate about D’s liability for V’s death?",
      choices: [
        "D is liable for murder because he started the sequence",
        "The deliberate third-party act is likely a novus actus interveniens breaking causation",
        "Causation can never be broken after a serious wound",
        "D is liable only if he foresaw the shooting"
      ],
      correct: 1,
      explain: {
        whyRight:
          "A free, deliberate and informed act by a third party can be an independent intervening cause that breaks the chain of causation for the death.",
        whyWrong: [
          "Starting a sequence is not enough if a new independent cause intervenes.",
          "—",
          "Causation can be broken in exceptional cases.",
          "Foreseeability may be relevant, but deliberate independent interventions are typically treated as breaking the chain."
        ]
      }
    },
    {
      topic: "Homicide — causation: victim escape reaction",
      q: "D threatens V with serious violence. V runs away and jumps from a low wall to escape, breaks his neck and dies. Which is most accurate?",
      choices: [
        "Causation always breaks if V chooses to run",
        "Causation may remain if V’s reaction was reasonably foreseeable",
        "Causation breaks if V was frightened",
        "D is not liable because the death was accidental"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Victim acts break causation only if they are so disproportionate or unforeseeable that they are 'daft'. If V’s escape response is reasonably foreseeable, causation can remain.",
        whyWrong: [
          "Victim choice does not automatically break causation.",
          "—",
          "Fear does not itself break causation.",
          "Accidental death can still be legally caused by D."
        ]
      }
    },
    {
      topic: "Homicide — partial defences: burdens of proof (loss of control)",
      q: "Once loss of control is properly raised on the evidence, who must disprove it and to what standard?",
      choices: [
        "The defendant must disprove it beyond reasonable doubt",
        "The prosecution must disprove it beyond reasonable doubt",
        "The defendant must prove it on balance of probabilities",
        "The judge decides it without a jury"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Loss of control generally places an evidential burden on D; once raised, the prosecution must disprove it beyond reasonable doubt.",
        whyWrong: [
          "Defendant does not bear the persuasive burden beyond reasonable doubt.",
          "—",
          "Balance of probabilities is not the usual persuasive burden for loss of control.",
          "It is typically a jury issue where tried on indictment."
        ]
      }
    },
    {
      topic: "Homicide — partial defences: burdens of proof (diminished responsibility)",
      q: "Who bears the legal burden for diminished responsibility and to what standard?",
      choices: [
        "Prosecution, beyond reasonable doubt",
        "Defendant, on balance of probabilities",
        "Prosecution, on balance of probabilities",
        "Defendant, beyond reasonable doubt"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Diminished responsibility carries a legal burden on the defendant, who must prove it on the balance of probabilities.",
        whyWrong: [
          "The prosecution does not bear the legal burden for diminished responsibility.",
          "—",
          "This misstates both burden and standard.",
          "Defendant does not have to prove it beyond reasonable doubt."
        ]
      }
    },
    {
      topic: "Homicide — classification: involuntary manslaughter",
      q: "Which is an example of involuntary manslaughter (rather than murder or voluntary manslaughter)?",
      choices: [
        "D kills V with intent to kill",
        "D kills V with intent to cause GBH",
        "D kills V during a dangerous unlawful act without intent to kill or cause GBH",
        "D kills V but is reduced to manslaughter by loss of control"
      ],
      correct: 2,
      explain: {
        whyRight:
          "Involuntary manslaughter covers unlawful killings without the intent to kill or cause GBH, such as unlawful act manslaughter or gross negligence manslaughter.",
        whyWrong: [
          "Intent to kill points to murder (unless a partial defence applies).",
          "Intent to cause GBH is sufficient for murder.",
          "—",
          "That is voluntary manslaughter (murder reduced by a partial defence)."
        ]
      }
    },
    {
      topic: "Homicide — UAM vs GNM: key distinction",
      q: "Which statement best distinguishes unlawful act manslaughter (UAM) from gross negligence manslaughter (GNM)?",
      choices: [
        "UAM requires a duty of care; GNM requires an unlawful act",
        "UAM requires an unlawful act that is objectively dangerous; GNM requires a duty of care and a gross breach",
        "Both require intent to kill",
        "Both require D to foresee death"
      ],
      correct: 1,
      explain: {
        whyRight:
          "UAM is based on a dangerous unlawful act causing death. GNM is based on breach of a duty of care causing death where the negligence is gross and there is a foreseeable risk of death.",
        whyWrong: [
          "This reverses the requirements.",
          "—",
          "Neither requires intent to kill as a general element.",
          "Foreseeability of death is required in GNM (risk of death), but UAM does not require D’s foresight of death."
        ]
      }
    },
    {
      topic: "Homicide — murder: recklessness is not enough",
      q: "D takes a serious risk that V might die but does not intend death or GBH. V dies. Which is most accurate regarding murder?",
      choices: [
        "Murder is proved because recklessness as to death is sufficient",
        "Murder is not proved because intention to kill or cause GBH is required",
        "Murder is proved if the risk was very high",
        "Murder is proved if V’s death was foreseeable"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Murder requires intention to kill or intention to cause GBH. Recklessness as to death, even if extreme, is not sufficient for murder (though other homicide offences may apply).",
        whyWrong: [
          "Recklessness alone is not enough for murder.",
          "—",
          "Degree of risk does not replace the intention requirement for murder.",
          "Foreseeability does not replace intention for murder."
        ]
      }
    },
    {
      topic: "Homicide — UAM: dangerousness is objective",
      q: "For the dangerousness element in unlawful act manslaughter, whose perspective is used?",
      choices: [
        "D’s subjective view at the time",
        "A sober and reasonable person",
        "V’s subjective view",
        "The view of a medical expert only"
      ],
      correct: 1,
      explain: {
        whyRight:
          "Dangerousness in UAM is assessed objectively: would a sober and reasonable person recognise a risk of some harm from the unlawful act?",
        whyWrong: [
          "Subjective belief is not the test for dangerousness in UAM.",
          "—",
          "Victim’s view is not the test.",
          "Medical experts may provide evidence, but they do not define the legal test."
        ]
      }
    }
  ];
  

window.quizData = {
    title: "SQE1 Criminal Law — Homicide Quiz",
    subtitle: "Murder, manslaughter, causation, and partial defences.",
    questions: questions
  };
})();
  
