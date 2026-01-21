(() => {
  const questions = [
    {
      "topic": "Right to legal advice + custody officer role",
      "q": "Amir, 19, is arrested on suspicion of burglary and taken to a police station. The custody officer authorises detention and asks Amir whether he wants a solicitor. Amir says he 'just wants to get it over with' and declines. As Amir’s solicitor (later contacted by his family), what is the best advice about the police station process?",
      "choices": [
        "Amir cannot access legal advice now because he refused it once",
        "Amir can request free legal advice at any time during detention and before interview",
        "Amir must wait until charge to get legal advice",
        "Only a privately paid solicitor can attend at the police station",
        "Legal advice is only available if the custody officer thinks it is necessary"
      ],
      "correct": 1
    },
    {
      "topic": "Vulnerability + appropriate adult",
      "q": "Leila, 16, is arrested for alleged assault. At the station she appears frightened, struggles to understand questions, and keeps looking to her older friend for answers. Officers want to start the interview immediately. What is the most appropriate step to protect Leila’s position before any interview?",
      "choices": [
        "Proceed with interview because Leila is over 15 so no additional safeguards apply",
        "Insist that an appropriate adult is arranged and legal advice is taken before interview",
        "Allow the friend to sit in as a substitute for an appropriate adult",
        "Advise Leila to answer all questions fully to avoid detention being extended",
        "Tell police that interviews are unlawful for anyone under 18"
      ],
      "correct": 1
    },
    {
      "topic": "Silence + adverse inferences (strategy)",
      "q": "Omar is interviewed about possession of drugs found in a shared flat. He says to you privately: 'They’re not mine but I don’t want to say anything.' Police have partial CCTV and another occupant blaming Omar. Which advice best reflects interview strategy and risks?",
      "choices": [
        "A no-comment interview can never harm Omar at trial",
        "A prepared statement followed by no-comment answers may sometimes be appropriate, but silence can carry risk depending on circumstances",
        "Omar must always answer police questions or he will be charged automatically",
        "The solicitor should answer questions on Omar’s behalf",
        "Omar should admit possession because the police already have some evidence"
      ],
      "correct": 1
    },
    {
      "topic": "Detention reviews + extensions",
      "q": "Sana is detained at 6:00 pm for fraud. She has not been interviewed by 11:30 pm. The custody officer says: 'We’ll keep you overnight and interview tomorrow.' What is the best advice about custody time management and safeguards?",
      "choices": [
        "Detention can continue indefinitely provided the investigation is ongoing",
        "There are required reviews of detention and Sana can make representations; police must justify continued detention and act diligently",
        "Police may only interview during daylight hours, so overnight delay is always lawful",
        "Sana must be charged within 6 hours or released",
        "Once detained for fraud, bail is not available until charge"
      ],
      "correct": 1
    },
    {
      "topic": "Presumption of bail + grounds to refuse",
      "q": "D is charged with assault occasioning ABH. He has one previous conviction and failed to attend court once two years ago. The prosecution oppose bail. What is the best statement of the starting point and analysis?",
      "choices": [
        "Bail is never granted for violent offences",
        "There is a starting presumption in favour of bail, but it may be refused if statutory risks (e.g., FTA, reoffending, interference) justify it",
        "Bail must be refused if the prosecution object",
        "Bail is automatic unless the defendant has more than 3 convictions",
        "Bail depends only on whether the defendant has a job"
      ],
      "correct": 1
    },
    {
      "topic": "Bail conditions as risk management",
      "q": "Maya is charged with shop theft. She has missed one previous court date due to hospital admission. She lives locally with her sister. Prosecution say she might not attend. Which bail condition package best targets the risk alleged?",
      "choices": [
        "No conditions—conditions are only available for indictable offences",
        "Residence at sister’s address + reporting condition to a police station",
        "Curfew + electronic tag (always mandatory for theft)",
        "A condition not to contact 'anyone' (without identifying who/why)",
        "A condition requiring daily attendance at court"
      ],
      "correct": 1
    },
    {
      "topic": "Bail vs remand in custody (proportionality)",
      "q": "Kieran is charged with non-fatal assault. The offence is either-way. The likely sentence if convicted is a community order. Prosecution seek remand in custody citing 'public confidence'. What is the best defence submission point?",
      "choices": [
        "Remand is always appropriate for either-way offences",
        "Remand must be proportionate; if likely sentence is non-custodial, custody on remand needs strong justification",
        "Public confidence is the only legal test for remand",
        "The court cannot grant bail for assault offences",
        "The court must remand if the complainant asks"
      ],
      "correct": 1
    },
    {
      "topic": "Variation and breach of bail conditions",
      "q": "Alia is on court bail with a curfew 8pm–6am. She starts a night-shift job and cannot comply. She has complied for 3 weeks and has no breaches. What is the best next step?",
      "choices": [
        "Do nothing—conditions cannot be changed once imposed",
        "Apply to vary bail conditions, proposing an alternative condition set that manages risk",
        "Advise Alia to breach the curfew and explain later",
        "Apply to dismiss the charge",
        "Ask the police to remove the condition informally without the court"
      ],
      "correct": 1
    },
    {
      "topic": "Plea + allocation early steps",
      "q": "D attends the first hearing in the magistrates’ court for an either-way offence of low-level fraud. The charge is read, and the legal adviser asks for plea. What is the usual correct sequence at this stage?",
      "choices": [
        "Sentence first, then take plea",
        "Take plea; if not guilty, move to allocation and case management",
        "Allocate venue first, then take plea",
        "Send to Crown Court automatically because it’s either-way",
        "Hold a trial immediately on the first appearance"
      ],
      "correct": 1
    },
    {
      "topic": "Legal aid / representation order (practical)",
      "q": "D is unrepresented at first appearance and says he cannot afford a lawyer. The case is either-way and the court is considering remand. What is the best immediate action in court?",
      "choices": [
        "Proceed without representation because legal aid is only for Crown Court trials",
        "Seek an adjournment where necessary and apply for a representation order, especially given liberty at stake",
        "Tell D to represent himself because first hearings are 'administrative'",
        "Ask prosecution to advise D",
        "Request the case be stayed for abuse of process"
      ],
      "correct": 1
    },
    {
      "topic": "Summary-only: plea and sentence timing",
      "q": "D pleads guilty at first appearance to a summary-only offence. The court has limited information about D’s means and personal circumstances. What is the most appropriate approach?",
      "choices": [
        "Sentence must be immediate in every guilty plea",
        "The court can adjourn for reports/means information before sentence if needed",
        "The case must be sent to the Crown Court for sentence",
        "The defendant must be remanded in custody until sentence",
        "The court must impose a custodial sentence because D pleaded guilty"
      ],
      "correct": 1
    },
    {
      "topic": "Case management directions at first hearing",
      "q": "D pleads not guilty to a summary-only assault. The court lists a trial date and asks about witnesses and disclosure issues. Which is the best focus for the defence at this stage?",
      "choices": [
        "Argue mitigation in detail",
        "Identify key issues, witness availability, disclosure needs, and seek appropriate directions",
        "Refuse to engage until the day of trial",
        "Demand jury trial",
        "Ask to be sentenced immediately"
      ],
      "correct": 1
    },
    {
      "topic": "Either-way: allocation decision",
      "q": "D is charged with an either-way offence. The magistrates consider their sentencing powers and the seriousness. D wants Crown Court because he thinks he has a better chance with a jury. Which statement best reflects the allocation process?",
      "choices": [
        "The defendant always chooses venue for either-way offences",
        "The court decides whether it is suitable for summary trial; if it is, the defendant may still elect Crown Court trial",
        "The prosecution always decides venue",
        "Either-way offences must always go to Crown Court",
        "Either-way offences must always stay in magistrates’ court"
      ],
      "correct": 1
    },
    {
      "topic": "Plea before venue consequences",
      "q": "At plea before venue, D indicates a guilty plea for an either-way offence. The bench considers whether they have sufficient sentencing powers. What is the correct next step?",
      "choices": [
        "Allocate for trial in Crown Court because all guilty pleas must go there",
        "Proceed to sentence in the magistrates’ court if powers are sufficient; otherwise commit to Crown Court for sentence",
        "Hold a jury trial to confirm guilt",
        "Dismiss the case because D pleaded guilty",
        "Adjourn indefinitely because venue cannot be decided after a guilty plea"
      ],
      "correct": 1
    },
    {
      "topic": "Indictable-only: sending",
      "q": "D appears in the magistrates’ court charged with robbery (indictable-only). The prosecutor says the magistrates should 'allocate it' for trial. What is the correct position?",
      "choices": [
        "Magistrates allocate indictable-only offences between magistrates and Crown Court",
        "Indictable-only offences are sent to the Crown Court; there is no allocation for trial in the magistrates’ court",
        "The defendant may choose summary trial",
        "The magistrates can try it if D consents",
        "The magistrates must hold a full trial first and then send if convicted"
      ],
      "correct": 1
    },
    {
      "topic": "Allocation factors (seriousness + powers)",
      "q": "D is charged with either-way assault. The prosecution say the case involves significant injury and previous similar offending. The defence says it’s suitable for summary trial. Which is the best factor the bench should prioritise in allocation?",
      "choices": [
        "Which court has a shorter waiting list only",
        "Seriousness and whether magistrates’ sentencing powers are likely to be sufficient, considering guideline approach",
        "Whether the defendant is employed",
        "Whether the complainant prefers Crown Court",
        "Whether the police recommend Crown Court"
      ],
      "correct": 1
    },
    {
      "topic": "Overriding objective + early identification of issues",
      "q": "D pleads not guilty. There is CCTV, 4 civilian witnesses, and a dispute about identification. The court asks for the 'real issues' and a trial estimate. What is the best defence approach?",
      "choices": [
        "Say nothing to avoid helping the prosecution",
        "Identify the live issues (e.g., ID), agree non-issues where possible, and give a realistic estimate to support effective management",
        "Ask for a trial date without discussing issues",
        "Demand disclosure of everything immediately with no specificity",
        "Apply to dismiss because there are too many witnesses"
      ],
      "correct": 1
    },
    {
      "topic": "Disclosure: defence statement strategy",
      "q": "In the Crown Court, the prosecution serve initial disclosure. D says his defence is alibi, but he hasn’t provided details. The judge raises defence disclosure obligations. What is the best next step?",
      "choices": [
        "Refuse to give any defence details because it breaches privilege",
        "Serve an appropriate defence statement setting out the nature of the defence and relevant issues, so disclosure can be targeted",
        "Wait until closing speeches to reveal the alibi",
        "Apply for jury discharge",
        "Ask the police to investigate the alibi without telling the prosecution"
      ],
      "correct": 1
    },
    {
      "topic": "Bad character / hearsay notice (timing)",
      "q": "The prosecution indicate they will apply to adduce D’s previous convictions and a hearsay statement. Trial is in 3 weeks and no notice has been served. What is the best defence response?",
      "choices": [
        "Do nothing; late applications must always be allowed",
        "Object and emphasise procedural compliance and prejudice; seek exclusion/adjournment directions as appropriate",
        "Concede admissibility because trial is close",
        "Ask for immediate sentencing",
        "Apply for judicial review"
      ],
      "correct": 1
    },
    {
      "topic": "Pre-trial admissibility rulings",
      "q": "A key issue is whether a confession is admissible. The judge proposes dealing with it at a pre-trial hearing rather than mid-trial. Why is that generally advantageous?",
      "choices": [
        "It prevents the defence from cross-examining",
        "It avoids disrupting the trial and reduces jury prejudice risk by resolving admissibility in advance",
        "It guarantees acquittal",
        "It means evidence rules do not apply",
        "It allows the prosecution to change the charge"
      ],
      "correct": 1
    },
    {
      "topic": "PACE s76 vs s78 (confession challenge)",
      "q": "D alleges police threatened him during interview and he confessed. The prosecution want to rely on the confession. What is the best primary legal route to challenge admissibility?",
      "choices": [
        "Hearsay gateway: unavailable witness",
        "PACE s76 challenge (confessions), with s78 fairness as a possible additional argument",
        "Bad character exclusion under CJA 2003 s101",
        "Judicial review of the charging decision",
        "Civil injunction"
      ],
      "correct": 1
    },
    {
      "topic": "Hearsay gateway: unavailable witness",
      "q": "A witness gave a signed statement identifying D but has since died. The prosecution apply to read the statement at trial to prove the truth of what it says. Which framework is most directly relevant?",
      "choices": [
        "CJA 2003 hearsay gateways (e.g., unavailable witness route), subject to fairness controls",
        "PACE s76",
        "CJA 2003 s101 defendant bad character only",
        "The Civil Evidence Act 1995 only",
        "CPR Part 32"
      ],
      "correct": 0
    },
    {
      "topic": "Defendant bad character: gateway logic",
      "q": "D is on trial for burglary and says in evidence: 'I’ve never stolen anything in my life.' The prosecution seek to adduce two previous theft convictions. What is the strongest basis for admissibility?",
      "choices": [
        "No basis exists because previous convictions are always excluded",
        "Correcting a false impression / relevant gateway to put character in issue, subject to fairness",
        "Hearsay interests of justice gateway",
        "Confession admissibility rules",
        "Judicial notice"
      ],
      "correct": 1
    },
    {
      "topic": "PACE s78 discretionary exclusion (non-confession evidence)",
      "q": "Police obtain CCTV by entering premises without authority and ignoring clear procedural safeguards. The footage is highly incriminating. What is the best defence argument for exclusion?",
      "choices": [
        "Exclude automatically because any illegality makes evidence inadmissible",
        "Apply under PACE s78 that admitting the evidence would adversely affect fairness so it ought not be admitted",
        "Apply under PACE s76 oppression ground",
        "Apply under CJA 2003 s114 hearsay",
        "Apply for a civil damages claim"
      ],
      "correct": 1
    },
    {
      "topic": "No case to answer (Galbraith) timing and test",
      "q": "At a Crown Court trial, after the prosecution closes its case, the evidence against D is a single eyewitness who contradicts themselves and no other supporting evidence. What is the correct defence procedural step?",
      "choices": [
        "Make a no case to answer submission; the judge applies the Galbraith sufficiency approach",
        "Ask the jury to acquit without judicial input",
        "Apply for bail",
        "Apply for a sentencing hearing immediately",
        "Appeal to the High Court by case stated"
      ],
      "correct": 0
    },
    {
      "topic": "Magistrates’ trial: who decides",
      "q": "D is tried for a summary offence in the magistrates’ court. After evidence and submissions, the court retires briefly. Who gives the verdict and on what basis?",
      "choices": [
        "A jury gives the verdict based on majority vote",
        "The bench (magistrates or District Judge) determines facts and law and returns the verdict",
        "The prosecution decides the verdict",
        "The police decide the verdict",
        "The legal adviser decides the verdict alone"
      ],
      "correct": 1
    },
    {
      "topic": "Crown Court: judge vs jury roles",
      "q": "During a Crown Court trial, a dispute arises about whether hearsay is admissible. The jury is present and the prosecutor begins to explain the hearsay statement. What is the best procedural response?",
      "choices": [
        "Let the prosecutor continue; the jury decides admissibility",
        "Ask the judge to hear the admissibility argument in the jury’s absence before the jury hears the material",
        "Ask for immediate verdict",
        "Ask the judge to ask the victim whether to admit it",
        "Do nothing because evidence issues cannot be raised mid-trial"
      ],
      "correct": 1
    },
    {
      "topic": "Majority verdict basics",
      "q": "In a Crown Court trial with 12 jurors, after deliberating for a sufficient time, the judge indicates a majority verdict may be accepted if required. Which majority outcome is recognised in that situation?",
      "choices": [
        "8–4",
        "9–3",
        "10–2",
        "7–5",
        "6–6"
      ],
      "correct": 2
    },
    {
      "topic": "Custody threshold",
      "q": "D is convicted of an either-way offence. The guideline starting point is a high-level community order. The prosecutor asks for immediate custody to 'send a message'. What is the correct custody threshold principle?",
      "choices": [
        "Custody is appropriate whenever the offence is imprisonable",
        "Custody requires that the offence is so serious that neither a fine alone nor a community sentence can be justified",
        "Custody is automatic for either-way offences",
        "Custody is required if the victim requests it",
        "Custody is required if D has any previous conviction"
      ],
      "correct": 1
    },
    {
      "topic": "Guilty plea credit (timing)",
      "q": "D indicates a guilty plea at the first stage of proceedings. There is no basis to reduce credit due to circumstances. What is the usual maximum reduction?",
      "choices": [
        "1/2",
        "1/3",
        "1/4",
        "1/10",
        "No reduction"
      ],
      "correct": 1
    },
    {
      "topic": "Totality principle (multiple offences)",
      "q": "D is sentenced for three separate thefts committed weeks apart. Each offence alone would justify a community order. The judge considers consecutive sentences that would become excessive overall. Which principle is the judge applying?",
      "choices": [
        "Hearsay rule",
        "Totality—overall sentence must be just and proportionate; concurrency/consecutivity used to reflect overall criminality",
        "Double jeopardy",
        "Judicial review",
        "Oppression test"
      ],
      "correct": 1
    },
    {
      "topic": "Compensation order duty",
      "q": "D is convicted of criminal damage to a shop window costing £1,200 to repair. The court is considering a fine but does not mention compensation. What is the best submission?",
      "choices": [
        "Compensation is not available for property offences",
        "The court must consider compensation where loss/damage resulted; if it does not make an order it should give reasons",
        "Compensation can only be ordered if the victim starts a civil claim",
        "Compensation is only available in the Crown Court",
        "A compensation order replaces conviction"
      ],
      "correct": 1
    },
    {
      "topic": "Magistrates → Crown Court appeal (scope)",
      "q": "D pleaded NOT guilty in the magistrates’ court and was convicted after trial. D says: 'They got it wrong on the facts and I want another go.' What is the most appropriate appeal route?",
      "choices": [
        "Appeal to the Crown Court by way of rehearing against conviction and/or sentence",
        "Appeal to the High Court by case stated because it re-hears the facts",
        "Appeal straight to the Supreme Court",
        "Judicial review is the default",
        "No appeal is possible after a trial"
      ],
      "correct": 0
    },
    {
      "topic": "Magistrates → Crown Court time limit",
      "q": "D wants to appeal a magistrates’ court sentence imposed today. What is the usual time limit for the notice of appeal to the Crown Court?",
      "choices": [
        "7 days",
        "14 days",
        "21 days",
        "28 days",
        "3 months"
      ],
      "correct": 2
    },
    {
      "topic": "Case stated (law/jurisdiction)",
      "q": "D accepts the facts found by the magistrates but says the bench applied the wrong legal test (error of law). Which route best targets that issue?",
      "choices": [
        "Crown Court rehearing only",
        "High Court appeal by way of case stated (error of law/jurisdiction)",
        "Jury reconsideration",
        "Civil appeal under CPR Part 52",
        "No remedy exists"
      ],
      "correct": 1
    },
    {
      "topic": "Crown Court → Court of Appeal (unsafe conviction + leave/time)",
      "q": "D is convicted after trial in the Crown Court. D wants to appeal conviction arguing the conviction is unsafe. D asks how quickly this must be done and whether permission is needed. Which is the best answer?",
      "choices": [
        "No time limit and no permission needed",
        "Notice is generally within 28 days and leave is usually required unless the trial judge certifies the case fit for appeal",
        "Notice is within 21 days and no leave is ever required",
        "Notice is within 6 months and the jury grants permission",
        "Appeals go first to the Crown Court"
      ],
      "correct": 1
    },
    {
      "topic": "Youth Court access + press",
      "q": "A 15-year-old is due to appear in the Youth Court. The defendant’s neighbour wants to sit in 'to support the family'. A local journalist also attends. Who can normally be present?",
      "choices": [
        "Both neighbour and journalist, because all criminal courts are open to the public",
        "Neighbour only, because press are excluded in Youth Court",
        "Journalist may attend as bona fide press; general public (like the neighbour) are normally excluded",
        "Neither can attend under any circumstances",
        "Both can attend only if the child consents"
      ],
      "correct": 2
    },
    {
      "topic": "Reporting restrictions (s49) identifying details",
      "q": "A 16-year-old is charged in the Youth Court. A blogger wants to publish the defendant’s name and a photo, saying: 'The public should know.' What is the correct position?",
      "choices": [
        "It is always lawful because it is 'in the public interest'",
        "It is generally restricted: identifying details (name/photo/school/address) must not be published due to Youth Court reporting restrictions",
        "It is lawful if the defendant is convicted",
        "It is lawful if the prosecutor agrees",
        "It is lawful if the blogger avoids mentioning the offence"
      ],
      "correct": 1
    },
    {
      "topic": "Appropriate adult / participation",
      "q": "Kai, 14, struggles to follow proceedings and answers 'yes' to everything. The court is about to take his plea. What is the best action for defence to ensure effective participation?",
      "choices": [
        "Say nothing; the court must proceed at adult pace",
        "Request adjustments and ensure safeguards (e.g., appropriate adult involvement where required, simplified explanations, possible ground rules)",
        "Ask the court to convict immediately to finish quickly",
        "Ask for a jury",
        "Ask the press to leave (this automatically improves participation)"
      ],
      "correct": 1
    },
    {
      "topic": "Youth remand (last resort)",
      "q": "A 13-year-old is charged with repeated low-level theft. The prosecution apply for remand in youth detention accommodation because the child has breached bail twice. Which statement is most accurate?",
      "choices": [
        "Youth detention accommodation is automatic if bail is breached",
        "Custodial remand for a child requires strict statutory conditions and is a last resort; court must be satisfied conditions are met and give clear reasons",
        "Children cannot be remanded at all",
        "Only the police can decide youth remand",
        "Remand depends solely on the victim’s view"
      ],
      "correct": 1
    },
    {
      "topic": "Defence costs order after acquittal (overview)",
      "q": "D is prosecuted in the magistrates’ court, pleads not guilty, and is acquitted after trial. D paid privately for representation and asks if they can recover legal costs. Which is the best general advice?",
      "choices": [
        "Costs are never recoverable in criminal cases",
        "A defence costs order may be available, but recovery is typically at legal aid rates and subject to the costs regime",
        "D will automatically recover full private fees from the CPS",
        "Only Crown Court acquittals attract costs recovery",
        "Costs are decided by the jury"
      ],
      "correct": 1
    },
    {
      "topic": "Wasted costs (who it targets)",
      "q": "During a trial, the defence solicitor repeatedly fails to comply with directions, causing adjournments and additional expense. The judge considers a costs sanction. What type of costs order is most relevant against the legal representative personally?",
      "choices": [
        "A compensation order against the victim",
        "A wasted costs order against the legal representative",
        "A fine against the prosecution witness",
        "A binding over order against the jury",
        "A confiscation order"
      ],
      "correct": 1
    },
    {
      "topic": "Private vs legal aid representation (practical decision)",
      "q": "D faces an either-way offence with real custody risk. D is on a low income and asks whether to instruct privately or apply for legal aid. Which is the best advice in principle?",
      "choices": [
        "Legal aid is only for murder cases",
        "Consider applying for a representation order; eligibility depends on interests of justice and means, and custody risk strongly supports the application",
        "Private funding is always required for magistrates’ court work",
        "Legal aid, if granted, can be used only for appeals",
        "D should represent themselves to appear remorseful"
      ],
      "correct": 1
    },
    {
      "topic": "Prosecution costs after conviction (risk warning)",
      "q": "D is convicted in the magistrates’ court after a contested trial. D has limited means. D asks if there are financial consequences beyond sentence. What is the most accurate general warning?",
      "choices": [
        "There can never be a prosecution costs order against a convicted defendant",
        "The court can order the defendant to pay prosecution costs (often means-tested/assessed), alongside other financial orders",
        "Only the Crown Court can award prosecution costs",
        "Costs are only ordered if the defendant was rude",
        "If D has limited means, costs must be set at £0 automatically"
      ],
      "correct": 1
    },
    {
      "topic": "Appeal costs risk (practical)",
      "q": "D appeals from the magistrates’ court to the Crown Court against sentence. The appeal fails and the Crown Court considers costs. Which is the best advice before lodging the appeal?",
      "choices": [
        "There is no costs risk on appeal",
        "Warn D there can be adverse costs consequences if the appeal fails, as well as a risk the sentence may be increased (within powers)",
        "Appealing automatically reduces the sentence",
        "Appeals are heard without any paperwork",
        "The Crown Court cannot change the magistrates’ sentence in any way"
      ],
      "correct": 1
    }
  ];

  window.quizData = {
    title: "SQE1 Criminal Practice | Final 45",
    subtitle: "Mixed review across criminal practice topics.",
    questions: questions
  };
})();
