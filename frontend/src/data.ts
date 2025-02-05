import TestType from "./types/TestType";

const GermanWordsTest: TestType[] = [
  {
    language: "ger",
    word: "vorwärts kommen",
    forms: ["kommt vorwärts", "kam vorwärts", "ist vorwärtsgekommen"],
    type: "verb",
    variantA: "возращаться",
    variantB: "добиваться успеха",
    variantC: "владеть, обладать",
    variantD: "исходить из",
    correctAnswer: "добиваться успеха",
    cognate_words: [],
    sentences: [
      "Wir wollen alle vorwärtskommen",
      "Ich komme mit meiner Arbeit nicht vorwärts",
      "Mit dieser eingeschränkten Denkweise kommt das Projekt nicht vorwärts",
      "Wie ist es dann möglich, dass sogar diese Menschen scheinbar vorwärtskommen?",
      "Alles nur um den Fall nicht vorwärtskommen zu lassen.",
    ],
  },
  {
    language: "ger",
    word: "die Vergütung",
    forms: ["die Vergütungen"],
    type: "nomen",
    variantA: "сбережения, накопления",
    variantB: "волнение, переживания",
    variantC: "вознаграждение, компенсация",
    variantD: "достоинство",
    correctAnswer: "вознаграждение, компенсация",
    cognate_words: [
      {
        word: "die Arbeitsvergütung",
        translate: "оплата труда",
      },
      {
        word: "vergüten",
        translate: "возмещать, оплачивать",
      },
    ],
    sentences: [
      "Er verlangt umgehende Vergütung",
      "Für diese Arbeit gibt es keine Vergütung",
      "Du kriegst 10 % von dem, was ich kriege plus Vergütung der Studiozeit",
      "Wir müssen über meine Vergütung sprechen",
      "Und was jetzt die Vergütung betrifft...",
    ],
  },
  {
    language: "ger",
    word: "jeweilig",
    forms: ["-"],
    type: "adv",
    variantA: "соответственно, соответствующий",
    variantB: "текущий, прежний",
    variantC: "каждый раз, в каждом случае",
    variantD: "пережитый, прожитый",
    correctAnswer: "соответственно, соответствующий",
    cognate_words: [],
    sentences: [
      "Alles hängt von der jeweiligen Situation ab",
      "Die Pressesprecher der jeweiligen Behörde gaben eine Pressekonferenz.",
      "Ein Stimmungswandel vor den Wahlen kann das jeweilige Ergebnis deutlich beeinflussen",
      "Eine Buchmesse informiert über den jeweiligen Buchmarkt",
      "Bevor etwas passiert, müssen wir natürlich unsere jeweiligen Regierungen konsultieren.",
    ],
  },
  {
    language: "ger",
    word: "mitfühlend",
    forms: ["mitfühlender", "am mitfühlendsten"],
    type: "adv",
    variantA: "раздраженный",
    variantB: "мнительный",
    variantC: "гневный",
    variantD: "сострадающий",
    correctAnswer: "сострадающий",
    cognate_words: [
      {
        word: "mit fühlen MIT",
        translate: "сопереживать, сострадать",
      },
      {
        word: "das Mitfühlen",
        translate: "сопереживание, сострадание",
      },
    ],
    sentences: [
      "Ich fühle mit euch mit",
      "Er fühlte mit ihr mit , als sie sich der Prüfung stellen musste.",
      "Der Film ist richtig gut gemacht, ein Film, bei dem man mit dem Helden mitfiebern und mitfühlen kann",
      "Es war, als ob ich alles, was Sie erlebten, mitfühlen konnte.",
      "Da können Sie nicht mit allen mitfühlen und nichts tun.",
    ],
  },
  {
    language: "ger",
    word: "ab lenken SICH VON",
    forms: ["lenkt ab", "lenkte ab", "hat abgelenkt"],
    type: "verb",
    variantA: "обходить, объездать",
    variantB: "устранять, завершать",
    variantC: "отказываться, отказывать",
    variantD: "отвлекать",
    correctAnswer: "отвлекать",
    cognate_words: [
      {
        word: "das Ablenkungsmanöver",
        translate: "отвлекающий маневр",
      },
      {
        word: "die Ablenkung",
        translate: "отвлечение",
      },
    ],
    sentences: [
      "Ich war abgelenkt",
      "Du bist echt leicht abzulenken",
      "Ich werde versuchen, ihn abzulenken",
      "Bitte lenkt mich nicht von meiner Arbeit ab",
      "Vielleicht können wir die anderen auch ablenken.",
    ],
  },
  {
    language: "ger",
    word: "vor kommen",
    forms: ["kommt vor", "kam vor", "ist vorgekommen"],
    type: "verb",
    variantA: "случаться, происходить",
    variantB: "возвращать, возвращаться",
    variantC: "выходить, отходить",
    variantD: "исходить от, пологаться",
    correctAnswer: "случаться, происходить",
    cognate_words: [
      {
        word: "das Vorkommen",
        translate: "месторождение, залежь",
      },
    ],
    sentences: [
      "Aber ich verspreche dir, das wird nicht mehr vorkommen.",
      "Rufen Sie mich an, sollte es noch mal vorkommen...",
      "Es kann vorkommen, dass Feinde gemeinsame Interessen haben",
      "Was kommt vor ?",
      "Das kann manchmal vorkommen.",
      "Das ist schon vorgekommen.",
    ],
  },
  {
    language: "ger",
    word: "ab finden SICH MIT",
    forms: ["findet ab", "fand ab", "hat abgefunden"],
    type: "verb",
    variantA: "отвлекаться",
    variantB: "обнаруживать",
    variantC: "смириться",
    variantD: "устраиваться",
    correctAnswer: "смириться",
    cognate_words: [],
    sentences: [
      "Mit manchen Entscheidungen kann man sich abfinden bis zum nächsten Tageslicht.",
      "Romeo liebte Julia mehr, als er sich dessen bewusst war, und er konnte sich nicht mit dem Gedanken abfinden, sie verloren zu haben.",
      "Aber du konntest dich nicht einfach abfinden.",
      "Du musst dich einfach damit abfinden",
      "Ich habe mich schon vor langem damit abgefunden",
    ],
  },
  {
    language: "ger",
    word: "entspannen SICH MIT",
    forms: ["entspannt", "entspannte", "hat entspannt"],
    type: "verb",
    variantA: "заботиться, проявлять заботу",
    variantB: "улыбаться, радоваться",
    variantC: "негодовать, расстраиваться",
    variantD: "расслабляться, отдыхать",
    correctAnswer: "расслабляться, отдыхать",
    cognate_words: [
      {
        word: "die Entspannung",
        translate: "расслабление, отдых",
      },
    ],
    sentences: [
      "Ich entspanne mich",
      "Die Atmosphäre entspannte sich",
      "Er entspannt sich zu Hause",
      "Versuchen Sie, sich zu entspannen, konzentrieren Sie sich auf Ihre Atmung",
      "Wie gesagt, ich möchte nur entspannen",
    ],
  },
  {
    language: "ger",
    word: "die Gepflogenheit",
    forms: ["die Gepflogenheiten"],
    type: "nomen",
    variantA: "традиция, обычай",
    variantB: "силуэт",
    variantC: "смирение, успокоение",
    variantD: "усталость, бессоница",
    correctAnswer: "традиция, обычай",
    cognate_words: [],
    sentences: [
      "Die sozialen Gepflogenheiten variieren von Land zu Land",
      "Die gesellschaftlichen Gepflogenheiten formen unser Verhalten",
      "Ich kenne die örtlichen Gepflogenheiten nicht",
      "Parties gehören nicht zu meinen Gepflogenheiten",
      "Das liegt daran, dass wir nach dem Zweiten Weltkrieg unsere landwirtschaftlichen Gepflogenheiten geändert haben.",
    ],
  },
  {
    language: "ger",
    word: "gewöhnen sich AN",
    forms: ["gewöhnt", "gewöhnte", "hat gewöhnt"],
    type: "verb",
    variantA: "удовлетворять, устраивать",
    variantB: "свыкнуться, осваиваться",
    variantC: "негодовать, расстраиваться",
    variantD: "раздражаться, нервничать",
    correctAnswer: "свыкнуться, осваиваться",
    cognate_words: [],
    sentences: [
      "Man gewöhnt sich daran",
      "Langsam gewöhne ich mich daran",
      "An alles Gute auf dieser Welt muss man sich gewöhnen",
      "Katrina hatte kaum Zeit, sich an unsere Welt zu gewöhnen.",
      "Du wärst überrascht, woran man sich gewöhnen kann, Caitlin",
    ],
  },
  {
    language: "ger",
    word: "der Abstand",
    forms: ["die Abstände"],
    type: "nomen",
    variantA: "традиция, обычай",
    variantB: "успех, гармония",
    variantC: "интервал, дистанция",
    variantD: "процесс, действие",
    correctAnswer: "интервал, дистанция",
    cognate_words: [
      {
        word: "ab stehen",
        translate: "дистанцироваться, торчать, отказываеться",
      },
    ],
    sentences: [
      "Er hat von der Politik Abstand genommen",
      "Alle müssen Abstand zueinander halten",
      "Ich denke, das ist ein guter Abstand",
      'Los geht"s, fünf Meter Abstand',
      "Halte Abstand und melde dich alle 15 Minuten",
    ],
  },
  {
    language: "ger",
    word: "ein halten",
    forms: ["hält ein", "hielt ein", "hat eingehalten"],
    type: "verb",
    variantA: "получать, сохранять",
    variantB: "включать в себя, содержать",
    variantC: "приводить в соответсвиие, упорядочивать",
    variantD: "соблюдать, придерживаться",
    correctAnswer: "соблюдать, придерживаться",
    cognate_words: [
      {
        word: "die Einhaltung",
        translate: "соблюдение",
      },
    ],
    sentences: [
      "Verträge sind einzuhalten",
      "Wir sind zuversichtlich, diesem Monat den Zahlungsplan einhalten zu können",
      "Ja, aber ich muss die Abmachung einhalten",
      "Ich habe meine Versprechen immer eingehalten",
      "Ich bin mir nicht sicher, ob ich dieses Versprechen einhalten kann, so, wie Du angezogen bist",
    ],
  },
  {
    language: "ger",
    word: "unverzüglich",
    forms: ["unverzüglicher", "am unverzüglichsten"],
    type: "adv",
    variantA: "немедленно, срочно",
    variantB: "грубый, жестокий",
    variantC: "отважный, решительный",
    variantD: "находчивый, ловкий",
    correctAnswer: "немедленно, срочно",
    cognate_words: [],
    sentences: [
      "Du musst mich unverzüglich anrufen",
      "Die Krankmeldung beim Arbeitgeber ist unverzüglich vorzunehmen",
      "Also entschied er, sich unverzüglich auf die Reise zu begeben",
      "Wir müssen die Stadt unverzüglich verlassen",
      "Das Urteil soll unverzüglich vollstreckt werden",
    ],
  },
  {
    language: "ger",
    word: "der Vorrang",
    forms: ["die Vorrang"],
    type: "nomen",
    variantA: "традиция",
    variantB: "преимущество",
    variantC: "преграда",
    variantD: "одобрение",
    correctAnswer: "преимущество",
    cognate_words: [
      {
        word: "vorrangig",
        translate: "первостепенный, приоритетный",
      },
      {
        word: "die Vorrangigkeit",
        translate: "Приоритет",
      },
    ],
    sentences: [
      "Ich gebe meiner Gesundheit den Vorrang",
      "Das ist sehr wichtig und hat Vorrang , vor allem anderen",
      "Wenn das Gesetz nicht gerecht ist, hat die Gerechtigkeit Vorrang vor dem Gesetz.",
      "Ich dachte er hätte keinen Vorrang für dich",
      "Entschuldigung, aber das hier hat Vorrang",
    ],
  },
  {
    language: "ger",
    word: "erholen SICH",
    forms: ["erholt", "erholte", "hat erholt"],
    type: "verb",
    variantA: "выздоравливать, поправляться",
    variantB: "обижаться, обижать",
    variantC: "повышать, увеличивать",
    variantD: "сдерживаться, останавливаться ",
    correctAnswer: "выздоравливать, поправляться",
    cognate_words: [
      {
        word: "die Erholung",
        translate: "отдых, передышка",
      },
      {
        word: "erholsam",
        translate: "расслабляющий",
      },
    ],
    sentences: [
      "Er erholte sich",
      "Du hast dich gut erholt",
      "Du musst dich jetzt nur noch erholen",
      "Ich glaube, sie wird sich vollständig erholen",
      "Ich wusste, es wird schlimm, aber davon werde ich mich nie erholen.",
    ],
  },
  {
    language: "ger",
    word: "die Einsparung",
    forms: ["die Einsparungen"],
    type: "nomen",
    variantA: "замена, подмена",
    variantB: "расход, издержки",
    variantC: "компенсация, возмещение",
    variantD: "сокращение, экономия",
    correctAnswer: "сокращение, экономия",
    cognate_words: [
      {
        word: "die Einsparungsmaßnahme",
        translate: "экономическая мера, мероприятие по сокращению расходов",
      },
      {
        word: "ein sparen",
        translate: "сэкономить, экономить",
      },
    ],
    sentences: [
      "Ich war Einsparung bis zu einen Hamster kaufen",
      "Die Menschen in Griechenland können keine weiteren Einsparungen mehr vertragen",
      "So forciert der Staat durch die Einsparung bei den öffentlichen Bibliotheken eine Indolenz seiner Bürger",
      "In den meisten deutschen Haushalten ist die Einsparung von viel Energie und somit von viel Geld mit wenig Aufwand möglich",
      "Angesichts der beabsichtigten Einsparungen regte sich Widerspruch im Betriebsrat",
    ],
  },
  {
    language: "ger",
    word: "nächstliegend",
    forms: ["-"],
    type: "adv",
    variantA: "ближайщий, близе всего расположенный",
    variantB: "подразумивающийся, обсуждающийся",
    variantC: "в следующий раз, следующий",
    variantD: "пережитый, прожитый",
    correctAnswer: "ближайщий, близе всего расположенный",
    cognate_words: [],
    sentences: [
      "Der Verstand ist das nächstliegende Werkzeug, mit dem der Mensch rechnen kann",
      "Bitte begeben Sie sich zum nächstliegenden Ausgang.",
      "Also lass uns ein wenig plaudern, darüber, wo das nächstliegende Rebellencamp ist.",
      "Er müsste uns auf der nãchstliegenden Etage rauslassen",
      "Der nächstliegende Ort, an dem wir eben angehalten haben?",
    ],
  },
  {
    language: "ger",
    word: "einsetzbar",
    forms: ["-"],
    type: "adv",
    variantA: "мнительный",
    variantB: "платежный",
    variantC: "применимый",
    variantD: "заменимый",
    correctAnswer: "применимый",
    cognate_words: [
      {
        word: "die Einsetzung",
        translate: "ввод, назначение",
      },
      {
        word: "ein setzen",
        translate: "установить, вставить, применить",
      },
    ],
    sentences: [
      "Ziel ist der allseits einsetzbare Handwerker",
      "Ist das für dich einsetzbar",
      "Es mag auch sein, dass der Trenchcoat ein Klassiker ist, der, wenn man ihn tragen kann, ein überall einsetzbares Kleidungsstück ist",
      "Wir beginnen mit der Behandlung, sobald sie einsetzbar ist.",
      "Hättest du das getan, wüsstest du, dass er nur befristet einsetzbar ist",
    ],
  },
  {
    language: "ger",
    word: "gegenseitig",
    forms: ["-"],
    type: "adv",
    variantA: "отвратительный",
    variantB: "взаимный",
    variantC: "законный",
    variantD: "должный",
    correctAnswer: "взаимный",
    cognate_words: [
      {
        word: "die Gegenseitigkeit",
        translate: "взаимность",
      },
    ],
    sentences: [
      "Freundschaft erfordert gegenseitiges Vertraue",
      "Wir stellten uns gegenseitig vor",
      "Gegenseitiges Verständnis hilft, Gegensätze zu überwinden",
      "Wir sollten versuchen, uns gegenseitig zu verstehen",
      "Ich denke, wir können uns gegenseitig helfen.",
    ],
  },
  {
    language: "ger",
    word: "anspruchslos",
    forms: ["-"],
    type: "adv",
    variantA: "отвратительный, некрасивый, отвратный",
    variantB: "взаимный, уважительный, благодарный",
    variantC: "весомый, значимый",
    variantD: "беспритязательный, скромный, неприхотливый",
    correctAnswer: "беспритязательный, скромный, неприхотливый",
    cognate_words: [
      {
        word: "die Anspruchslosigkeit",
        translate: "неприхотливость",
      },
      {
        word: "der Anspruch",
        translate: "претензия, требование, притязание",
      },
    ],
    sentences: [
      "Du bist lieb und ehrlich und offen, und dabei völlig anspruchslos.",
      'Ich glaube, Sie suchen den Begriff "anspruchslos"',
      "Weil du zu anspruchslos bist.",
      "Azaleen sind anspruchslose Zimmerpflanzen",
      "Tom lebt anspruchslos und bescheiden.",
    ],
  },
  {
    language: "ger",
    word: "vermittelbar",
    forms: ["-"],
    type: "adv",
    variantA: "передаваемый, посреднический",
    variantB: "представительный, внешний",
    variantC: "весомый, значимый",
    variantD: "беспритязательный, скромный, неприхотливый",
    correctAnswer: "передаваемый, посреднический",
    cognate_words: [
      {
        word: "vermitteln",
        translate: "сообщать, ознакамливать, передавать",
      },
      {
        word: "vermittels",
        translate: "посредством, при помощи",
      },
      {
        word: "die Vermittlung",
        translate: "посредничество, содействие",
      },
    ],
    sentences: [
      "Außerdem bin ich unglaublich gut vermittelbar",
      "Hoffer geht davon aus, dass die Wirklichkeit nicht durch Sprache vermittelbar ist",
      "Das macht ihn besser vermittelbar",
      "So wie die Dinge stehen, wird die Wahl des einen Kandidaten wohl leichter vermittelbar sein als die andere",
      "Und wenn wie hier die Arbeitslosigkeit insbesondere unter Jugendlichen hoch ist, steigt die Gefahr, dass diese langfristig nicht mehr vermittelbar sind",
    ],
  },
  {
    language: "ger",
    word: "hinterher",
    forms: ["-"],
    type: "adv",
    variantA: "сразу, как только",
    variantB: "основополагающийся",
    variantC: "позади, после",
    variantD: "перед тем как, до того как",
    correctAnswer: "позади, после",
    cognate_words: [],
    sentences: [
      "Was ist hinterher passiert?",
      "Der Dieb lief weg und der Polizist hinterher",
      "Er aß zwei Spiegeleier und hinterher noch ein Müsli",
      "Das schwierigste ist, hinterher alles aufzuwischen",
      "Ich war gestern auch da und sah was hinterher passierte.",
    ],
  },
  {
    language: "ger",
    word: "vornherein",
    forms: ["-"],
    type: "adv",
    variantA: "сразу, с самого начала",
    variantB: "лежащий в основе",
    variantC: "позади, после",
    variantD: "после того как, следом за",
    correctAnswer: "сразу, с самого начала",
    cognate_words: [],
    sentences: [
      "Ich wollte es nur im Vornherein klarstellen.",
      "Sie müssen die Banken im vornherein ausspionieren",
    ],
  },
  {
    language: "ger",
    word: "ehrgeizig",
    forms: ["ehrgeiziger", "am ehrgeizigsten"],
    type: "adj",
    variantA: "честолюбивый, амбициозный",
    variantB: "мнительный, сомнительный",
    variantC: "гневный, раздраженный",
    variantD: "беспритязательный, скромный",
    correctAnswer: "честолюбивый, амбициозный",
    cognate_words: [
      {
        word: "der Ehrgeiz",
        translate: "тщеславие, честолюбие, самолю́бие",
      },
      {
        word: "der Ehrgeizling",
        translate: "карьерист",
      },
    ],
    sentences: [
      "Das ist ein ehrgeiziges , aber realistisches Ziel.",
      "Er ist ehrgeizig",
      "Tom war nie ehrgeizig",
      "Wie schlau du bist, wie toll, wie witzig, wie ehrgeizig",
      "Ich bin genauso ehrgeizig wie Sie.",
    ],
  },
  {
    language: "ger",
    word: "bestimmbar",
    forms: ["bestimmbarer", "am bestimmbarsten"],
    type: "adj",
    variantA: "неопределенный, неоконченный",
    variantB: "определимый, окончательный, решительный",
    variantC: "несогласный, противоречащий",
    variantD: "переходной, переходящий",
    correctAnswer: "определимый, окончательный, решительный",
    cognate_words: [],
    sentences: [
      "Nicht näher bestimmbarer Fehler in der E-Mail-Adresse",
      "Es geht tatsächlich um eine zeitlich sehr genau bestimmbare Sache.",
    ],
  },
  {
    language: "ger",
    word: "erhoffen",
    forms: ["erhofft", "erhoffte", "hat erhofft"],
    type: "verb",
    variantA: "переживать, сомневаться",
    variantB: "ожидать, надеяться",
    variantC: "осуществлять, реализировать",
    variantD: "добиваться успеха, достигать цели",
    correctAnswer: "ожидать, надеяться",
    cognate_words: [],
    sentences: [
      "Sansa Stark ist eine bessere Belohnung als du je erhoffen konntest.",
      "Einen neuen Planeten aufzunehmen, ist die schönste Aufgabe, die sich ein Admiral erhoffen kann.",
      "Das Beste, was du dir erhoffen kannst, ist, dass er ein Albtraum ist.",
      "Tom erhoffte sich einen Kuss",
      "Was hast du dir zu sehen erhofft",
    ],
  },
  {
    language: "ger",
    word: "erleben",
    forms: ["erlebt", "erlebte", "hat erlebt"],
    type: "verb",
    variantA: "пережить, испытывать, увидеть",
    variantB: "ожидать, надеяться",
    variantC: "окончить, произойти",
    variantD: "добиваться успеха, достигать цели",
    correctAnswer: "пережить, испытывать, увидеть",
    cognate_words: [
      {
        word: "das Erleben",
        translate: "опыт, испытание",
      },
      {
        word: "der Erlebensfall",
        translate: "жизненный случай",
      },
    ],
    sentences: [
      "Dabei erleben sie Abenteuer",
      "Ich möchte keine weiteren Überraschungen erleben",
      "Ich habe schon sehr viel erlebt",
      "Zu schade, dass Sie das nicht erleben werden.",
      "Aber selbst wenn die Dämonen gewinnen, du wirst es nicht mehr erleben",
    ],
  },
  {
    language: "ger",
    word: "erwähnen",
    forms: ["erwähnt", "erwähnte", "hat erwähnt"],
    type: "verb",
    variantA: "испытывать, переживать",
    variantB: "упоминать, касаться",
    variantC: "вспомнить, вспоминать",
    variantD: "сохранять, оберегать",
    correctAnswer: "упоминать, касаться",
    cognate_words: [
      {
        word: "erwähnenswert",
        translate: "достойный упоминания, заслуживающий внимание",
      },
    ],
    sentences: [
      "Ich wusste, dass ich vergessen hatte, etwas zu erwähnen...",
      "Ich werde nicht erwähnen, dass wir gesprochen haben.",
      "Ich sollte das mit der Nacht erwähnen...",
      "Da gibt es etwas, das ich vergessen habe zu erwähnen.",
      "Gut, dass Sie sie erwähnen.",
    ],
  },
  {
    language: "ger",
    word: "faszinieren",
    forms: ["fasziniert", "faszinierte", "hat fasziniert"],
    type: "verb",
    variantA: "испытывать, переживать",
    variantB: "упоминать, касаться",
    variantC: "разачаровываться, разачароваться",
    variantD: "очаровывать, завораживать",
    correctAnswer: "очаровывать, завораживать",
    cognate_words: [
      {
        word: "die Faszination",
        translate: "обаяние, восхище́ние",
      },
      {
        word: "das Faszinosum",
        translate: "очарование, привлекательность",
      },
    ],
    sentences: [
      "Mathematik fasziniert mich",
      "Bücher faszinieren mich",
      "Ich bin von Katzen fasziniert",
      "Die Geschichten über das schnellere Leben faszinieren sie.",
      "Ich gebe zu, Sie faszinieren mich",
    ],
  },
  {
    language: "ger",
    word: "scheiten",
    forms: ["scheitet", "scheitete", "hat gescheitet"],
    type: "verb",
    variantA: "казаться, случаться",
    variantB: "упоминать, касаться",
    variantC: "потерпеть неудачу, обломиться, провалиться",
    variantD: "кивать, шатать",
    correctAnswer: "потерпеть неудачу, обломиться, провалиться",
    cognate_words: [],
    sentences: [
      "Wir möchten Sie nicht scheitern sehen, Eldritch",
      "Eine Gruppe ohne Einsatzbereitschaft wird scheitern.",
      "Diese Übung sollte Sie scheitern lassen.",
      "Es macht nichts, wenn Sie scheitern.",
    ],
  },
  {
    language: "ger",
    word: "spüren",
    forms: ["spürt", "spürte", "hat gespürt"],
    type: "verb",
    variantA: "сэкономить, сберегать",
    variantB: "почувствовать, чувствовать, ощущать",
    variantC: "потерпеть неудачу, обломиться, провалиться",
    variantD: "мыть, помыть",
    correctAnswer: "почувствовать, чувствовать, ощущать",
    cognate_words: [
      {
        word: "spürbar",
        translate: "заметный, чувствительный",
      },
    ],
    sentences: [
      "Ich kann einfach spüren, dass Sie etwas bedrückt",
      "Wir nahmen Drogen, um nichts zu spüren",
      "Ich kann seine Kraft noch spüren.",
      "Ich denke, ich beginne etwas zu spüren",
      "Spürst du es?",
    ],
  },
  {
    language: "ger",
    word: "um hören SICH",
    forms: ["hört um", "hörte um", "hat umgehört"],
    type: "verb",
    variantA: "расспрашивать, расспросить, слушать друг друга",
    variantB: "почувствовать, чувствовать, ощущать",
    variantC: "завладевать, забирать у кого-то",
    variantD: "оканчивать, заканчивать, завершать",
    correctAnswer: "расспрашивать, расспросить, слушать друг друга",
    cognate_words: [],
    sentences: [
      "Möchtest du, dass ich mich für dich umhöre?",
      "Ich habe mich nach Tom umgehört",
      "Ja, ich werde mich mal umhören",
      "Vielleicht sollt ich doch nach Denver fahren und mich umhören.",
      "Kann er sich nicht mal umhören?",
    ],
  },
  {
    language: "ger",
    word: "voran kommen",
    forms: ["kommt voran", "kam voran", "ist vorangekommen"],
    type: "verb",
    variantA: "приближаться к, подходить",
    variantB: "приезжать, прибывать",
    variantC: "усовершетсвовать, улучшать",
    variantD: "продвигаться вперёд, продвинуться вперёд",
    correctAnswer: "продвигаться вперёд, продвинуться вперёд",
    cognate_words: [],
    sentences: [
      "Booth sagt, dass wir vorankommen müssen",
      "Wir alle müssen vorankommen, Will.",
      "Und ich dachte, wir würden vorankommen!",
      "Wir kamen rasch voran",
      "Nicht alle guten Menschen werden vorankommen",
    ],
  },
  {
    language: "ger",
    word: "zwingen ZU",
    forms: ["zwingt", "zwang", "hat gezwungen"],
    type: "verb",
    variantA: "сближаться, приближаться",
    variantB: "вынудить, заставлять, принуждать",
    variantC: "усовершетсвовать, улучшать",
    variantD: "осуждать, корить, ругать",
    correctAnswer: "вынудить, заставлять, принуждать",
    cognate_words: [
      {
        word: "die Zwinge",
        translate: "тиски",
      },
    ],
    sentences: [
      "Ich werde dazu gezwungen",
      "Ich zwinge sie nicht",
      "Warum zwingst du mich dazu?",
      "Ihr könnt mich zwingen, zu bleiben...",
      "Eigentlich wollte ich dich zwingen deinen Bruder zu töten.",
    ],
  },
  {
    language: "ger",
    word: "frustrieren",
    forms: ["frustriert", "frustrierte", "hat frustriert"],
    type: "verb",
    variantA: "восхищаться, радоваться",
    variantB: "вынудить, заставлять, принуждать",
    variantC: "расстраиваться, вводить в заблуждение",
    variantD: "осуждать, корить, ругать",
    correctAnswer: "расстраиваться, вводить в заблуждение",
    cognate_words: [
      {
        word: "die Frustration",
        translate: "раздражение, чувство неудовлетворённости",
      },
    ],
    sentences: [
      "Sie wurden schön langsam frustriert",
      "Du bist über deine Arbeit frustriert",
      "Warum sollte mich das frustrieren?",
      "Ich weiß, und es tut mir leid, Sie zu frustrieren.",
      "Ich sah keinen Grund, Sie zu frustrieren...",
    ],
  },

  {
    language: "ger",
    word: "die Angelegenheit",
    forms: ["die Angelegenheiten"],
    type: "nomen",
    variantA: "возможность, шанс",
    variantB: "дело, вопрос",
    variantC: "случай, происшествие",
    variantD: "объект, ресурс",
    correctAnswer: "дело, вопрос",
    cognate_words: [
      {
        word: "angelegentlich",
        translate: "время от времени, по случаю",
      },
    ],
    sentences: [
      "Stecke deine Nase nicht in fremde Angelegenheiten",
      "Wir diskutierten die Angelegenheit",
      "Das ist eine abgeschlossene Angelegenheit",
      "Die Angelegenheit erfordert einen kühlen Kopf.",
      "Was Sie damit machen ist Ihre Angelegenheit.",
    ],
  },
  {
    language: "ger",
    word: "berechtigt",
    forms: ["berechtigter", "am berechtigtsten"],
    type: "adv",
    variantA: "отрегулированный, настроеный",
    variantB: "мнительный, робкий",
    variantC: "обоснованный, справедливый",
    variantD: "опасный",
    correctAnswer: "обоснованный, справедливый",
    cognate_words: [
      {
        word: "berechtigen",
        translate: "давать право, давать основание",
      },
      {
        word: "die Berechtigung",
        translate: "право, обоснованность",
      },
      {
        word: "berechtigterweise",
        translate: "обоснованно, справедливо",
      },
    ],
    sentences: [
      "Das ist berechtigt",
      "Das ist eine berechtigte Frage",
      "Ich akzeptiere Kritik, wenn sie berechtigt ist",
      "Es gibt keinen berechtigten Grund für dich, so zu denken.",
      "Nur Klubmitglieder sind berechtigt, diesen Raum zu nutzen.",
    ],
  },

  {
    language: "ger",
    word: "aus werten",
    forms: ["wertet aus", "wertete aus", "hat ausgewertet"],
    type: "verb",
    variantA: "отправляться, направляться",
    variantB: "прекращать, сдаваться",
    variantC: "отказываться, избавляться",
    variantD: "анализировать, оценивать",
    correctAnswer: "анализировать, оценивать",
    cognate_words: [
      {
        word: "auswertbar",
        translate: "поддающийся анализу",
      },
      {
        word: "die Auswertbarkeit",
        translate: "анализируемость, оцениваемость",
      },
      {
        word: "die Auswertung",
        translate: "анализ, оценка",
      },
    ],
    sentences: [
      "Kannst du die Statistik auswerten ?",
      "Wir haben die Umfrage ausgewertet",
      "Er wertet das Experiment noch aus",
      "Bevor wir also noch einen Schritt gehen, lass mich das Angebot auswerten.",
      "Als du mir gesagt hast, du hättest zuerst meine Ideen auswerten sollen, da hast du nicht gesagt, dass sie gut seien.",
    ],
  },
  {
    language: "ger",
    word: "ernst nehmen",
    forms: ["nimmt ernst", "nahm ernst", "hat ernst genommen"],
    type: "verb",
    variantA: "брать впервые",
    variantB: "прекращать",
    variantC: "воспринимать всерьез",
    variantD: "анализировать",
    correctAnswer: "воспринимать всерьез",
    cognate_words: [],
    sentences: [
      "Keiner nimmt uns ernst",
      "Ich nehme meine Arbeit ernst",
      "Tom nimmt sein Studium nicht ernst",
      "Ich glaube nicht, dass Sie das wirklich ernstnehmen.",
      "Wenn ich ihm gegenüber Ihren Namen erwähne, wird er mich nicht ernstnehmen.",
    ],
  },
  {
    language: "ger",
    word: "belegen",
    forms: ["belegt", "belegte", "hat belegt"],
    type: "verb",
    variantA: "переживать",
    variantB: "прекращать",
    variantC: "занимать, доказывать",
    variantD: "откладывать, сомневаться",
    correctAnswer: "занимать, доказывать",
    cognate_words: [
      {
        word: "der Beleg",
        translate: "свидетельство, доказательство",
      },
    ],
    sentences: [
      "Er belegte leider nur den vierten Platz.",
      "Alle Zimmer sind belegt",
      "Er hat seinen Anspruch nicht belegt",
      "Und deshalb müssen wir jetzt ein paar stichhaltige Beweise finden, um es zu belegen.",
      "Also brauchten wir Theorien über diese Ziele, die wir belegen oder widerlegen konnten.",
    ],
  },
  {
    language: "ger",
    word: "an nehmen",
    forms: ["nimmt an", "nahm an", "hat angenommen"],
    type: "verb",
    variantA: "соглашаться, одобрять",
    variantB: "отказывать, отклонять",
    variantC: "принимать, предполагать",
    variantD: "откладывать, сомневаться",
    correctAnswer: "принимать, предполагать",
    cognate_words: [
      {
        word: "annehmbar",
        translate: "приемлимый, допустимый",
      },
      {
        word: "annehmlich",
        translate: "удобный",
      },
      {
        word: "die Annehmlichkeit",
        translate: "удобства",
      },
      {
        word: "die Annahme",
        translate: "предположение, допущение",
      },
    ],
    sentences: [
      "Deine Entschuldigung ist angenommen",
      "Wir nehmen kein Trinkgeld an",
      "Wir können nur annehmen, dass sie hinter dem Angriff stecken.",
      "In Ordnung, lass uns annehmen, dass wir die Handschellen aufbekommen.",
      "Ich muss annehmen, dass Sie hier sind, weil Sie wieder zurück wollen.",
    ],
  },
  {
    language: "ger",
    word: "auf nehmen",
    forms: ["nimmt auf", "nahm auf", "hat aufgenommen"],
    type: "verb",
    variantA: "соглашаться, одобрять, склоняться",
    variantB: "отказывать, отклонять",
    variantC: "принимать, предполагать, предвидеть",
    variantD: "принимать, брать, записывать",
    correctAnswer: "принимать, брать, записывать",
    cognate_words: [],
    sentences: [
      "Im Notfall kann das Schiff bis zu 500 Personen aufnehmen",
      "Antoine hat einen Cousin, der uns aufnehmen würde",
      "Der Kellner nimmt die Bestellung auf",
      "Der Bus hielt, um Fahrgäste aufzunehmen",
      "Ich habe einen Kredit aufgenommen ",
    ],
  },
  {
    language: "ger",
    word: "benehmen SICH",
    forms: ["benimmt", "benahm", "hat benommen"],
    type: "verb",
    variantA: "соглашаться, одобрять, склоняться",
    variantB: "вести себя",
    variantC: "принимать, предполагать, предвидеть",
    variantD: "включать в себя, получать, начинать",
    correctAnswer: "вести себя",
    cognate_words: [
      {
        word: "das Benehmen",
        translate: "поведение",
      },
    ],
    sentences: [
      "Versuchen wir doch, uns wie Erwachsene zu benehmen",
      "Ich will mich auch nicht ständig wie ein Pennäler benehmen.",
      "Ich muss mich wie immer benehmen",
      "Ich frag nur, weil sich die Frauen komisch benehmen",
      "Sie benehmen sich nicht wie Männer in einer Führungsposition.",
    ],
  },
  {
    language: "ger",
    word: "das Benehmen",
    forms: ["die Benehmen"],
    type: "nome",
    variantA: "одобрение",
    variantB: "согласие",
    variantC: "поведение",
    variantD: "заявление",
    correctAnswer: "поведение",
    cognate_words: [
      {
        word: "benehmen sich",
        translate: "вести себя",
      },
    ],
    sentences: [
      "Ich entschuldige mich für mein schlechtes Benehmen vorhin.",
      "Es kommt Ihnen wohl komisch vor, aber es ist kein militärisches Benehmen.",
      "Fünf Monate, und man kriegt nicht mal Urlaub für gutes Benehmen.",
      "Ich missbillige sein Benehmen",
      "Dein Benehmen ist unerträglich.",
    ],
  },
  {
    language: "ger",
    word: "zebrechen",
    forms: ["zebricht", "zebrach", "ist zerbrochen"],
    type: "verb",
    variantA: "столкнуться, спотыкаться",
    variantB: "ранить, пораниться",
    variantC: "нарушать, несоблюдать",
    variantD: "разбивать, ломать",
    correctAnswer: "разбивать, ломать",
    cognate_words: [
      {
        word: "zerbrechlich",
        translate: "хрупкий, ломкий",
      },
    ],
    sentences: [
      "Mein Spielzeug ist zerbrochen",
      "Es ist eine Sache eher zerbrochen als gebaut.",
      "Keiner von denen wird uns zerbrechen",
      "Ich könnte dich ganz leicht zerbrechen.",
      "Einige Tasten des Klaviers sind zerbrochen ",
    ],
  },

  {
    language: "ger",
    word: "wieder geben",
    forms: ["gibt wieder", "gab wieder", "hat wiedergegeben"],
    type: "verb",
    variantA: "передавать, переносить",
    variantB: "излагать, возвращать, воспроизводить",
    variantC: "откидывать, выкидывать, откладывать",
    variantD: "воспользоваться, организовывать",
    correctAnswer: "излагать, возвращать, воспроизводить",
    cognate_words: [],
    sentences: [
      "Ich kann meinen Traum nicht wiedergeben",
      "Das neue Radio kann die Musik besser wiedergeben als das alte",
      "Unglaublich, dass Sie mir meinen Job wiedergeben.",
      "Sie werden mir mein altes Leben nicht wiedergeben.",
      "Ich werde ihm die Bücher wiedergeben",
    ],
  },
  {
    language: "ger",
    word: "auf fallen",
    forms: ["fällt auf", "fiel auf", "ist aufgefallen"],
    type: "verb",
    variantA: "выходить из строя, ломаться",
    variantB: "производить впечатление, впечетлять",
    variantC: "откидывать, выкидывать, откладывать",
    variantD: "броситься в глаза, привлечь внимание",
    correctAnswer: "броситься в глаза, привлечь внимание",
    cognate_words: [
      {
        word: "auffallend",
        translate: "бросающийся в глаза, заметный",
      },
    ],
    sentences: [
      "Es ist allen aufgefallen",
      "Das fiel mir auch auf ",
      "Wenn du nicht auffallen möchtest, versteh ich das",
      "Ich meine, wir werden auffallen.",
      "Alles klar? Deiner Frau wird ein kleiner Anruf nicht auffallen. ",
    ],
  },
  {
    language: "ger",
    word: "an fallen",
    forms: ["fällt an", "fiel an", "ist angefallen"],
    type: "verb",
    variantA: "выходить из строя, ломаться",
    variantB: "производить впечатление, впечетлять",
    variantC: "накапливаться, возникать, нападать",
    variantD: "броситься в глаза, привлечь внимание",
    correctAnswer: "накапливаться, возникать, нападать",
    cognate_words: [
      {
        word: "der Anfall",
        translate: "припадок, нападе́ние",
      },
    ],
    sentences: [
      "Komm, ich werde dich schon nicht anfallen, guck es dir einfach an.",
      "Fünf Dollar werden nicht mal deine Zinsen bezahlen, die dir anfallen. ",
      "Und es wird eine monatliche Hausgebühr anfallen.",
    ],
  },
  {
    language: "ger",
    word: "ein fallen",
    forms: ["fällt ein", "fiel ein", "ist eingefallen"],
    type: "verb",
    variantA: "выходить из строя, ломаться",
    variantB: "озарять, осенять, приходить на ум",
    variantC: "накапливаться, возникать, нападать",
    variantD: "броситься в глаза, привлечь внимание",
    correctAnswer: "озарять, осенять, приходить на ум",
    cognate_words: [
      {
        word: "der Einfall",
        translate: "иде́я, внеза́пная мысль",
      },
      {
        word: "einfallslos",
        translate: "безидейный",
      },
      {
        word: "die Einfallslosigkeit",
        translate: "безидейность",
      },
      {
        word: "einfallsreich",
        translate: "находчивый",
      },
    ],
    sentences: [
      "Es wird gleich einfallen",
      "Ich denke uns wird da schon etwas einfallen.",
      "Da fiel ihnen Tom ein",
      "Fällt dir was dazu ein",
      "Mir fällt die Geheimzahl nicht ein",
    ],
  },
  {
    language: "ger",
    word: "an schließen SICH",
    forms: ["schließt an", "schloss an", "hat angeschlossen"],
    type: "verb",
    variantA: "передавать, передать",
    variantB: "закрывать, прикрывать",
    variantC: "присоеденять, подключать",
    variantD: "отключать, отсоединять",
    correctAnswer: "присоеденять, подключать",
    cognate_words: [],
    sentences: [
      "Wir sollen uns dem Streik anschließen.",
      "Ich wollte dich fragen, ob du dich uns anschließen willst",
      "Kann ich mich anschließen ?",
      "Ich denke daran, mich ihnen anzuschließen",
      "An die Bibliothek schließt sich ein Vorraum an",
    ],
  },
  {
    language: "ger",
    word: "entdecken",
    forms: ["entdeckt", "entdeckte", "hat entdeckt"],
    type: "verb",
    variantA: "обнаруживать, обнаружить",
    variantB: "закрывать, прикрывать",
    variantC: "накрывать, накрыть",
    variantD: "изучать, исследовать",
    correctAnswer: "обнаруживать, обнаружить",
    cognate_words: [
      {
        word: "der Entdecker",
        translate: "исследователь, первооткрыватель",
      },
      {
        word: "entdeckerisch",
        translate: "исследовательский",
      },
      {
        word: "die Entdeckerfreude",
        translate: "радость от открытия",
      },
    ],
    sentences: [
      "Sie entdeckten uns.",
      "Und hoffentlich können wir das nutzen, um noch mehr Wahrheit und mehr Schönheit zu entdecken.",
      "Ich sag ja, in Brooklyn gibt es tolle Sachen zu entdecken.",
      "Die allgemeinen Grundsätze der Natur entdecken und dann diese Analogien verwenden, wenn sie von Vorteil sind.",
      "Dort wurde Gold entdeckt",
    ],
  },
  {
    language: "ger",
    word: "bereuen",
    forms: ["bereut", "bereute", "hat bereut"],
    type: "verb",
    variantA: "печалиться, горевать",
    variantB: "сожалеть, жалеть",
    variantC: "обнаруживать, открывать",
    variantD: "заботиться, беспокоиться",
    correctAnswer: "сожалеть, жалеть",
    cognate_words: [],
    sentences: [
      "Ich bereue das",
      'Ich kenne nicht die Bedeutung des Wortes "bereuen".',
      "Wenn Sie das tun, werden Sie es garantiert bereuen.",
      "Lass es mich bitte nicht bereuen.",
      "Er bereute seine Entscheidung nicht.",
    ],
  },
  {
    language: "ger",
    word: "beseitigen",
    forms: ["beseitigt", "beseitigt", "hat beseitigt"],
    type: "verb",
    variantA: "владеть, овладевать",
    variantB: "занимать место, быть занятым",
    variantC: "обнаруживать, открывать",
    variantD: "устранять, исправлять, удалить",
    correctAnswer: "устранять, исправлять, удалить",
    cognate_words: [
      {
        word: "die Beseitigung",
        translate: "устранение, ликвидация, уничтоже́ние",
      },
      {
        word: "die Abfallbeseitigung",
        translate: "удале́ние отхо́дов, уничтоже́ние отхо́дов",
      },
    ],
    sentences: [
      "Er beseitigte den Müll.",
      "Der Programmierer beseitigte den Fehler.",
      "Tom könnte einen Teil meiner Zweifel beseitigen",
      "Es war natürlich schon immer ein Teil des Plans, Sie zu beseitigen.",
      "Sie taten Ihr Bestes, alle Spuren zu beseitigen",
    ],
  },
  {
    language: "ger",
    word: "bewerten",
    forms: ["bewertet", "bewertete", "hat bewertet"],
    type: "verb",
    variantA: "рекламировать что-то",
    variantB: "занимать место, быть занятым",
    variantC: "оценивать, расценивать, исчислять стоимость",
    variantD: "жаловаться, обжаловать",
    correctAnswer: "оценивать, расценивать, исчислять стоимость",
    cognate_words: [
      {
        word: "die Bewertung",
        translate: "оценка, оценивание",
      },
      {
        word: "das Bewertungsschema",
        translate: "система оценивания",
      },
      {
        word: "bewertbar",
        translate: "подлежащий оценке",
      },
      {
        word: "der Bewerber",
        translate: "заяви́тель, кандида́т, претенде́нт",
      },
    ],
    sentences: [
      "Tom wurde bewertet",
      "Die Jury bewertet die Sänger.",
      "Die Lehrerin war sehr gerecht, als sie unsere Prüfungen bewertete",
      "Ich werde euch bewerten, einzeln und als Team.",
      "Wir bewerteten die Leistungen des Herrn Bleibein damals zu schlecht, weshalb er unser Unternehmen verließ.",
    ],
  },
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  {
    language: "ger",
    word: "entnehmen",
    forms: ["entnimmt", "entnahm", "hat entnommen"],
    type: "verb",
    variantA: "делать вывод, брать из",
    variantB: "занимать место, быть занятым",
    variantC: "оценивать, расценивать, исчислять стоимость",
    variantD: "жаловаться, обжаловать",
    correctAnswer: "делать вывод, брать из",
    cognate_words: [],
    sentences: [
      "Wo hast du das entnommen ?",
      "Was hast du der Nachricht entnommen ?",
      "Die Beispiele entnahm ich den Werken der besten Autoren",
      "Die Einzelheiten entnehmen Sie bitte der Broschüre",
      "Der Chirurg entnahm das falsche Organ",
    ],
  },
  {
    language: "ger",
    word: "der Knoten",
    forms: ["die Knoten"],
    type: "nomen",
    variantA: "одобрение",
    variantB: "участие",
    variantC: "узел",
    variantD: "часть, отдел",
    correctAnswer: "узел",
    cognate_words: [],
    sentences: [
      "Mit nur einer Hand lässt sich kein Knoten knüpfen. ",
      "Klarerweise dominiert jeder Knoten sich selbst.",
      "Sonst hatte ich dort immer einen Knoten, und jetzt ist er weg.",
      "Richtung Süden, Südwest bei 50 Knoten.",
      "Besser, wir bleiben bei 5 Knoten, falls Wetter aufzieht",
    ],
  },
  {
    language: "ger",
    word: "die Kante",
    forms: ["die Kanten"],
    type: "nomen",
    variantA: "одобрение",
    variantB: "край",
    variantC: "узел",
    variantD: "часть, отдел",
    correctAnswer: "край",
    cognate_words: [],
    sentences: [
      "Sie hat eine scharfe Kante, da, wo sie gesprungen ist.",
      "Um das zu finden, was den Jungen über die Kante gestoßen hat.",
      "Okay, rutsch rüber an die Kante.",
      "Geh bitte von der Kante weg.",
      "Ich habe mir an der Kante den Fuß gestoßen.",
    ],
  },
  {
    language: "ger",
    word: "der Zugang",
    forms: ["die Zugänge"],
    type: "nomen",
    variantA: "одобрение, согласование",
    variantB: "край, грань, кант",
    variantC: "доступ, поступление, вход",
    variantD: "часть, отдел, отделение",
    correctAnswer: "доступ, поступление, вход",
    cognate_words: [],
    sentences: [
      "Studenten haben Zugang zur Bibliothek",
      "Eine Brücke gewährt einen Zugang zur Insel",
      "Die Polizei kontrollierte gestern alle Zugänge zum Stadtpark.",
      "Zusammen hatten sie Kompetenzen und Zugang.",
      "Der Zugang wird durch ein Gitter versperrt.",
    ],
  },
  {
    language: "ger",
    word: "ab rechnen",
    forms: ["rechnet ab", "rechnete ab", "hat abgerechnet"],
    type: "verb",
    variantA: "делать вывод, брать из",
    variantB: "рассчитывать, расчитаться",
    variantC: "оценивать, расценивать, исчислять стоимость",
    variantD: "жаловаться, обжаловать",
    correctAnswer: "рассчитывать, расчитаться",
    cognate_words: [],
    sentences: [
      "Sawyer sagte mir, ich könnte abrechnen, wenn ich ihm helfe, die Waffen zu klauen.",
      "Ich sollte wohl mit dem Caterer und den Weinhändlern abrechnen.",
      "Zudem müssten sie ihre Ausgaben öffentlich abrechnen.",
      "Ich habe mit ihm abgerechnet",
      "Mit mehreren Kunden muss ich noch abrechnen , da noch Zahlungen offen sind.",
    ],
  },
  {
    language: "ger",
    word: "auf fordern",
    forms: ["fordert auf", "forderte auf", "hat aufgefordert"],
    type: "verb",
    variantA: "призывать, требовать, просить",
    variantB: "наблюдать, смотреть, глядеть",
    variantC: "оценивать, расценивать, исчислять стоимость",
    variantD: "жаловаться, обжаловать",
    correctAnswer: "призывать, требовать, просить",
    cognate_words: [],
    sentences: [
      "Hast du Tom dazu aufgefordert ? ",
      "Ich bin aufgefordert , fleißig zu lernen.",
      "Ich forderte Tom auf , Gitarre zu spielen",
      "Und ich fordere Sie auf, diese Aufnahme sofort zu löschen.",
      "Bitte, fordert sie auf, uns wie Menschen behandeln.",
    ],
  },
  {
    language: "ger",
    word: "das Maß",
    forms: ["die Maße"],
    type: "nomen",
    variantA: "восхищение, поощрение",
    variantB: "мера, единица измирения",
    variantC: "доступ, поступление, вход",
    variantD: "часть, отдел, отделение",
    correctAnswer: "мера, единица измирения",
    cognate_words: [],
    sentences: [
      "Er kennt Maß und Ziel.",
      "Geld ist das Maß des Wertes",
      "Maß und Ziel ist das beste Spiel",
      "Wir können Entropie definieren als Maß der Unordnung innerhalb eines Systems.",
      "Wir müssen zurück auf ein Maß, das uns entspricht.",
    ],
  },
  {
    language: "ger",
    word: "das Ereignis",
    forms: ["die Ereignisse"],
    type: "nomen",
    variantA: "восхищение, поощрение",
    variantB: "мера, единица измирения",
    variantC: "событие, происшествие",
    variantD: "часть, отдел, отделение",
    correctAnswer: "событие, происшествие",
    cognate_words: [],
    sentences: [
      "Stille ist ein Ereignis",
      "Die Ereignisse wiederholen sich",
      "Das ist ein seltenes Ereignis",
      "Das Ereignis hat ihn berühmt gemacht.",
      "Die richtige Abfolge der Ereignisse ist wichtig.",
    ],
  },
  {
    language: "ger",
    word: "der Sachverhalt",
    forms: ["die Sachverhalte"],
    type: "nomen",
    variantA: "восхищение, поощрение",
    variantB: "мера, единица измирения",
    variantC: "событие, происшествие",
    variantD: "положение дел, расклад",
    correctAnswer: "положение дел, расклад",
    cognate_words: [],
    sentences: [
      "Das ist kein guter Sachverhalt",
      "Findest du diesen Sachverhalt witzig?",
      "Ich dachte nur, dass Sie vielleicht den gesamten Sachverhalt haben möchten.",
      "Ich will nur den Sachverhalt verstehen.",
      "Wir äußern uns erst nach gründlicher Prüfung des Sachverhaltes",
    ],
  },
  {
    language: "ger",
    word: "übermitteln",
    forms: ["übermittelt", "übermittelte", "hat übermittelt"],
    type: "verb",
    variantA: "принимать, решать",
    variantB: "перенимать, брать на себя",
    variantC: "оценивать, расценивать, исчислять стоимость",
    variantD: "пересылать, передавать",
    correctAnswer: "пересылать, передавать",
    cognate_words: [],
    sentences: [
      "Ich übermittle ihm meine Akten",
      "Ich bin mir sicher, dass diese Information schriftlich übermittelt werden kann",
      "Ihre Daten wurden erfolgreich übermittelt",
      "Hast du Tom meine Nachricht übermittelt ",
      "Mein Vater lässt sein Beileid übermitteln.",
    ],
  },
  {
    language: "ger",
    word: "verfehlen",
    forms: ["verfehlt", "verfehlte", "hat verfehlt"],
    type: "verb",
    variantA: "исправлять, переделывать, перестраивать",
    variantB: "перенимать, брать на себя, добавлять себе",
    variantC: "не попадать,, промахнуться, опаздывать",
    variantD: "пересылать, передавать",
    correctAnswer: "не попадать,, промахнуться, опаздывать",
    cognate_words: [],
    sentences: [
      "Fast hätten wir uns verfehlt",
      "Ich finde die Konzeption des Bildes verfehlt",
      "Jedes Mal, wenn ich Schießen übe, verfehle ich das Ziel",
      "Und wenn ich mein Herz verfehle?",
      "Und egal, ob ich verfehlt oder du dich bewegt hast...",
    ],
  },
  {
    language: "ger",
    word: "die Zusammenführung",
    forms: ["die Zusammenführungen"],
    type: "nomen",
    variantA: "совместная награда, мовместная выплата",
    variantB: "соединение, объединение",
    variantC: "совместимость",
    variantD: "сокращение, уменьшкние",
    correctAnswer: "соединение, объединение",
    cognate_words: [],
    sentences: [
      "Seit der Deutschen Wiedervereinigung besteht eine wichtige Aufgabe in der Zusammenführung bisher getrennter Sammlungen.",
      "Neuere Datei statt Zusammenführung auswählen (unsicher)",
      "Dateikodierung für Zusammenführung und Speichern:",
      "Drei Generationen einer Familie, was für eine schöne Zusammenführung.",
    ],
  },
  {
    language: "ger",
    word: "die Annotation",
    forms: ["die Annotationen"],
    type: "nomen",
    variantA: "восхищение, поощрение",
    variantB: "правка, исправление",
    variantC: "почерк, шрифт",
    variantD: "аннотация, запись",
    correctAnswer: "аннотация, запись",
    cognate_words: [],
    sentences: [
      "Cover-Versionen Originaltext, um ca. ein Drittel gekürzt, mit Annotationen und Zusatzmaterial",
    ],
  },
  {
    language: "ger",
    word: "die Aussagekraft",
    forms: ["die Aussagekraft"],
    type: "nomen",
    variantA: "восхищение, поощрение",
    variantB: "рабочие, работники, персонал",
    variantC: "расход, растрата",
    variantD: "достове́рность, зна́чимость,",
    correctAnswer: "достове́рность, зна́чимость,",
    cognate_words: [],
    sentences: [
      "Ich fürchte, eine solche Überarbeitung könnte die Authentizität und Aussagekraft beeinträchtigen",
      "Die Aussagekraft dieses Tests ist beschränkt.",
      "Und er senkte den Mittelwert ab und zerstörte mir damit die statistische Aussagekraft des Tests.",
      "Und sollte es sie wirklich geben, hat sie heute ebenso wenig Aussagekraft wie vor 18 Jahren",
      "Dies führte zu deutlicher Kritik und Zweifeln an der Aussagekraft der Studie.",
    ],
  },
  {
    language: "ger",

    word: "besitzen",

    forms: ["besitzt", "besaß", "hat besessen"],

    type: "verb",

    variantA: "возращаться",

    variantB: "добиваться успеха",

    variantC: "владеть, обладать ",

    variantD: "занимать, быть занятым",

    correctAnswer: "владеть, обладать",
    cognate_words: [],
    sentences: [
      "Algerien besitzt Öl.",
      "Besaß ich eine Chance?",
      "Alles, was er unterschrieben, alles, was er besessen hat.",
      "Wie fühlt es sich an... alles zu verlieren, was man jemals besessen hat.",
      "Olivier besitzt einen Club namens Neolution.",
    ],
  },
  {
    language: "ger",
    word: "erfolgen",
    forms: ["erfolgt ", "erfolgte", "ist erfolgt"],
    type: "verb",
    variantA: "происходить, состояться, следовать",
    variantB: "перенимать, брать на себя, добавлять себе",
    variantC: "убеждать, заставлять",
    variantD: "принимать, перенимать, занимать",
    correctAnswer: "происходить, состояться, следовать",
    cognate_words: [],
    sentences: [
      "Die Kommunikation erfolgte über Internet.",
      "Die Einführung des neuen Produktes erfolgte weltweit",
      "Bislang ist keine Zahlung erfolgt ",
      "Der Kontakt zum Human Project erfolgt über Spiegel.",
      "Hier erfolgt auch die Verarbeitung zu Säften, Obst- und Gemüsekonserven",
    ],
  },
  {
    language: "ger",
    word: "die Verknüpfung",
    forms: ["die Verknüpfungen"],
    type: "nomen",
    variantA: "ссылка, связь",
    variantB: "перебой, поломка, проблема",
    variantC: "практика, опыт",
    variantD: "достове́рность, зна́чимость,",
    correctAnswer: "ссылка, связь",
    cognate_words: [],
    sentences: [
      "Wählen Sie den Bereich in der Datei, den Sie als Verknüpfung einfügen möchten.",
      "Die ausgewählte Grafikdatei wird als Verknüpfung eingefügt.",
      "Sie sollten einige Verknüpfung hinzufügen mehr",
      "Die Verknüpfung der Seile hatte sich gelöst. ",
      "Die Verknüpfung seines Namens mit der Firma war allen bekannt.",
    ],
  },
  {
    language: "ger",
    word: "die Übergabe",
    forms: ["die Übergaben"],
    type: "nomen",
    variantA: "ссылка, связь",
    variantB: "передача, делегирование",
    variantC: "доход, прибыль",
    variantD: "расходы, затраты",
    correctAnswer: "передача, делегирование",
    cognate_words: [],
    sentences: [
      "In den frühen Jahren des Vereins kommt es auch noch zur Übergabe von Hilfspaketen und Weihnachtsgeschenken aus unterschiedlichen Quellen",
      "Der Assistenzarzt vollzieht keine hinreichende Übergabe an die Ärztin im Nachtdienst.",
      "Ich organisiere die Übergabe des Sticks.",
      "Deshalb möchte ich, dass du und Josh bei der Übergabe dabei seid.",
      "Tanner trifft in Kürze in der US-Botschaft in London ein, wo die Übergabe stattfindet.",
    ],
  },
  {
    language: "ger",
    word: "fügen",
    forms: ["fügt", "fügte", "hat gefügt"],
    type: "verb",
    variantA: "добавлять",
    variantB: "следовать",
    variantC: "убеждать, заставлять",
    variantD: "принимать, перенимать, занимать",
    correctAnswer: "добавлять",
    cognate_words: [],
    sentences: [
      "Henry fügt meiner Krone Diamanten hinzu, um genauso zu glänzen wie ich, sagt er.",
      "Bitte füge keine Kommentare dazu",
      "Mir genügt, wie Gott es fügt",
      "Diese Worte muss man dann noch in der richtigen Folge zu einem Satz fügen",
      "Dieser Befehl fügt einen neuen Kommentar parallel zum Kommentar ein, auf den Sie antworten wollen.",
    ],
  },
  {
    language: "ger",
    word: "der Zustand",
    forms: ["die Zustände"],
    type: "nomen",
    variantA: "ссылка, связь",
    variantB: "состояние, положение",
    variantC: "доход, прибыль",
    variantD: "расходы, затраты",
    correctAnswer: "состояние, положение",
    cognate_words: [],
    sentences: [
      "Spiderman Ausgabe 129 in perfektem Zustand",
      "Männliches Opfer mit Schusswunde, in kritischem Zustand.",
      "Er kann nichts gegen meinen Zustand tun.",
      "In meinem Zustand ist das normal.",
      "Sie werden den ursprünglichen Zustand wiederherstellen.",
    ],
  },
  {
    language: "ger",
    word: "die Fülle",
    forms: ["die Füllen"],
    type: "nomen",
    variantA: "предчувствие, ощущение",
    variantB: "чувство, тревога",
    variantC: "изобилие, избыток",
    variantD: "сомнения, сметения",
    correctAnswer: "изобилие, избыток",
    cognate_words: [],
    sentences: [
      "Die Polizei erhielt eine Fülle an Hinweisen.",
      "Er hat Geld in Hülle und Fülle",
      "Früchte Früchte bedeuten Fruchtbarkeit, Fülle und im übertragenen Sinn Reichtum und Wohlstand.",
      "Ein Fülle vom Seltsamen, Unheimlichen, Bizarren, Ungewöhnlichen!",
      "Ich habe es im vergangenen Jahr kaum gesehen, vor allem nicht in solcher Fülle.",
    ],
  },
  {
    language: "ger",
    word: "verstärken",
    forms: ["verstärkt", "verstärkte", "hat verstärkt"],
    type: "verb",
    variantA: "добавлять, прибавлять",
    variantB: "усилить, укрепить",
    variantC: "убеждать, заставлять",
    variantD: "принимать, перенимать, занимать",
    correctAnswer: "усилить, укрепить",
    cognate_words: [],
    sentences: [
      "Die Anstrengungen sollten verstärkt werden",
      "Durch den Tod wird das Leben verstärkt",
      "Lautsprecher verstärken die Stimme, aber nicht die Argumente",
      "Das hat die Wut noch verstärkt",
      "Um sicher zu gehen, wurden die Ketten durch meine Leibgarde verstärkt.",
    ],
  },
  {
    language: "ger",
    word: "rückgängig",
    forms: ["-"],
    type: "adv",
    variantA: "приходящий, подходящий",
    variantB: "встречный",
    variantC: "возвратный",
    variantD: "обратный, попятный",
    correctAnswer: "обратный, попятный",
    cognate_words: [],
    sentences: [
      "Die Lösung des Arbeitsverhältnisses wurde rückgängig gemacht.",
      "Ich mache nichts rückgängig",
      "Hast du unsere Tischbestellung rückgängig gemacht? ",
      "Wir machen rückgängig, was Muirfield getan hat.",
      "Ich muss wissen, ob du möchtest, dass ich es rückgängig mache",
    ],
  },
  {
    language: "ger",
    word: "inhaltlich",
    forms: ["-"],
    type: "adv",
    variantA: "содержательный",
    variantB: "тягучий",
    variantC: "возвратный",
    variantD: "обратный",
    correctAnswer: "содержательный",
    cognate_words: [],
    sentences: [
      "Der Satz ist grammatisch richtig, inhaltlich aber fragwürdig. ",
      "Vor einer inhaltlichen Auseinandersetzung bedarf es einer begrifflichen Distinktion",
      "Was ist der inhaltliche Unterschied von Religion und einer Kulturgemeinschaft?",
      "Vor allem verbietet ihm das die funktionale Spezifität seiner Rolle, die es ihm erlaubt, die Beziehung auf einen bestimmten inhaltlichen Bereich zu beschränken.",
      "Orlowskyjs Bilder sind sowohl geographisch (von Finnland bis zur Krim) als auch inhaltlich (Tageszeit, Wetter, Jahreszeit etc.) sehr vielfältig.",
    ],
  },
  {
    language: "ger",
    word: "dadurch",
    forms: ["-"],
    type: "adv",
    variantA: "таким образом, вследствие этого",
    variantB: "наперекор, вопреки",
    variantC: "впротивовес",
    variantD: "противоположно тому",
    correctAnswer: "таким образом, вследствие этого",
    cognate_words: [],
    sentences: [
      "Und dadurch hast du Flashpoint erschaffen.",
      "Die Bilanz verbessert sich dadurch um 500 Millionen $  ",
      "Weil unsere Hochzeit dadurch etwas Besonderes ist.",
      "Und dadurch weiß er jetzt genauso viel wie wir.",
      "Nur mein Aussehen wird sich dadurch verändern.",
    ],
  },
  {
    language: "ger",
    word: "ein führen",
    forms: ["verstärkt", "verstärkte", "hat verstärkt"],
    type: "verb",
    variantA: "добавлять, прибавлять",
    variantB: "усилить, укрепить",
    variantC: "убеждать, заставлять",
    variantD: "ввести, вводить",
    correctAnswer: "ввести, вводить",
    cognate_words: [],
    sentences: [
      "Ich schätze, man kann sie jederzeit wieder einführen, wenn nötig.",
      "Wir haben flexible mikroskopische Sonden, die wir in den Körper einführen können.",
      "Eine neue Steuer wurde eingeführt ",
      "Man muss eine gewisse Unterscheidung einführen ",
      "Willst du vielleicht eine neue Sitte einführen?",
    ],
  },
  {
    language: "ger",
    word: "erwerben",
    forms: ["erwarb", "hat erworben", "erwirbt"],
    type: "verb",
    variantA: "приобретать, получать",
    variantB: "выбирать, решать",
    variantC: "отдавать, передавать",
    variantD: "платить, расходовать",
    correctAnswer: "приобретать, получать",
    cognate_words: [],
    sentences: [
      "Er hat ein neues Auto erworben.",
      "Sie haben viele wertvolle Erfahrungen im Ausland erworben.",
      "Wir haben gestern ein altes Buch erworben.",
      "Das Unternehmen hat kürzlich eine neue Firma erworben.",
      "Erwerb von Fähigkeiten ist in dieser Branche wichtig."
    ]
  },
  {
    language: "ger",
    word: "der Verband",
    forms: ["Verbandes", "Verbände", "verbunden"],
    type: "noun",
    variantA: "союз, объединение",
    variantB: "повязка, бинт",
    variantC: "место, область",
    variantD: "партия, партия людей",
    correctAnswer: "союз, объединение",
    cognate_words: [],
    sentences: [
      "Der Verband der Ärzte hat eine neue Regelung beschlossen.",
      "Dieser Verband hilft allen, die in Not geraten sind.",
      "Das Rote Kreuz ist ein internationaler Verband.",
      "Er hat sich den Arm verletzt und muss einen Verband anlegen.",
      "Der Verband hat sich für die Rechte der Arbeiter eingesetzt."
    ]
  },
  {
    language: "ger",
    word: "die Ausstellung",
    forms: ["Ausstellungen", "Ausstellung", "ausgestellt"],
    type: "noun",
    variantA: "выставка, экспозиция",
    variantB: "презентация, представление",
    variantC: "опыт, проверка",
    variantD: "собрание, встреча",
    correctAnswer: "выставка, экспозиция",
    cognate_words: [],
    sentences: [
      "Die Ausstellung im Museum ist sehr beeindruckend.",
      "Diese Ausstellung zeigt Werke von berühmten Künstlern.",
      "Ich habe die Ausstellung von moderner Kunst besucht.",
      "Die Ausstellung wird bis Ende des Monats dauern.",
      "Wir haben Tickets für die neue Ausstellung gekauft."
    ]
  },
  {
    language: "ger",
    word: "aus denken SICH",
    forms: ["dachte aus", "hat ausgedacht", "denkt aus"],
    type: "verb",
    variantA: "придумывать, выдумывать",
    variantB: "задумываться, размышлять",
    variantC: "запоминать, запечатлевать",
    variantD: "раздеваться, снимать одежду",
    correctAnswer: "придумывать, выдумывать",
    cognate_words: [],
    sentences: [
      "Er hat sich eine gute Idee ausgedacht.",
      "Sie dachte lange über die Situation nach und hat eine Lösung ausgedacht.",
      "Ich muss mir noch etwas ausdenken, um das Problem zu lösen.",
      "Die Kinder dachten sich neue Spiele aus.",
      "Er kann schnell neue Konzepte ausdenken."
    ]
  },
  {
    language: "ger",
    word: "befürchten",
    forms: ["befürchtete", "hat befürchtet"],
    type: "verb",
    variantA: "бояться, опасаться",
    variantB: "восхищаться, любить",
    variantC: "праздновать, отмечать",
    variantD: "хвастаться, гордиться",
    correctAnswer: "бояться, опасаться",
    cognate_words: [],
    sentences: [
      "Ich befürchte, dass wir den Zug verpassen werden.",
      "Sie befürchtet, dass das Wetter schlecht wird.",
      "Er hat Angst und befürchtet das Schlimmste.",
      "Die Eltern befürchten, dass ihre Kinder krank werden.",
      "Ich befürchte, dass wir keine Lösung finden werden."
    ]
  },
  {
    language: "ger",
    word: "bei·tragen",
    forms: ["trug bei", "hat beigetragen"],
    type: "verb",
    variantA: "вносить вклад",
    variantB: "заниматься, работать",
    variantC: "привозить, доставлять",
    variantD: "поглощать, съедать",
    correctAnswer: "вносить вклад",
    cognate_words: [],
    sentences: [
      "Jeder kann seinen Beitrag zur Verbesserung leisten.",
      "Er hat viel zur Entwicklung des Projekts beigetragen.",
      "Wir müssen zusammenarbeiten, um das Ziel zu erreichen und beizutragen.",
      "Der Künstler hat mit seinen Arbeiten zum Erfolg der Ausstellung beigetragen.",
      "Viele Freiwillige tragen zur Hilfe der Bedürftigen bei."
    ]
  },
  {
    language: "ger",
    word: "instand setzen",
    forms: ["setzte instand", "hat instand gesetzt"],
    type: "verb",
    variantA: "ремонтировать, восстанавливать",
    variantB: "выключать, отключать",
    variantC: "устанавливать, монтировать",
    variantD: "подключать, подключать",
    correctAnswer: "ремонтировать, восстанавливать",
    cognate_words: [],
    sentences: [
      "Der Techniker hat die Maschine instand gesetzt.",
      "Wir müssen das Auto instand setzen, bevor wir fahren können.",
      "Die Brücke wurde instand gesetzt und ist jetzt wieder sicher.",
      "Er hat sein Haus instand gesetzt, nachdem es beschädigt wurde.",
      "Die Schule wurde nach dem Brand schnell instand gesetzt."
    ]
  },
  {
    language: "ger",
    word: "verfügen",
    forms: ["verfügte", "hat verfügt"],
    type: "verb",
    variantA: "располагать, иметь в распоряжении",
    variantB: "контролировать, управлять",
    variantC: "принимать, одобрять",
    variantD: "всегда быть доступным",
    correctAnswer: "располагать, иметь в распоряжении",
    cognate_words: [],
    sentences: [
      "Er verfügt über viele Ressourcen.",
      "Ich verfüge nicht über genug Informationen, um eine Entscheidung zu treffen.",
      "Das Unternehmen verfügt über moderne Technologie.",
      "Sie verfügt über umfangreiche Kenntnisse im Bereich Marketing.",
      "Die Schule verfügt über alle notwendigen Materialien für den Unterricht."
    ]
  },
  {
    language: "ger",
    word: "auf·bewahren",
    forms: ["bewahrte auf", "hat aufbewahrt"],
    type: "verb",
    variantA: "хранить, сохранять",
    variantB: "выкидывать, избавляться",
    variantC: "делать, производить",
    variantD: "изучать, анализировать",
    correctAnswer: "хранить, сохранять",
    cognate_words: [],
    sentences: [
      "Ich bewahre meine alten Briefe in einer Schublade auf.",
      "Du solltest das wichtige Dokument aufbewahren.",
      "Sie hat ihre Erinnerungen in einem Fotoalbum aufbewahrt.",
      "Wir müssen diese Informationen aufbewahren, bis wir sie brauchen.",
      "Er bewahrt seine Bücher sorgfältig auf."
    ]
  },
  {
    language: "ger",
    word: "betreffen",
    forms: ["betrifft", "betraf", "hat betroffen"],
    type: "verb",
    variantA: "касаться, затрагивать",
    variantB: "помогать, поддерживать",
    variantC: "применять, использовать",
    variantD: "проверять, тестировать",
    correctAnswer: "касаться, затрагивать",
    cognate_words: [],
    sentences: [
      "Diese Regelung betrifft alle Mitarbeiter.",
      "Die neuen Vorschriften betreffen nicht nur die Angestellten, sondern auch die Kunden.",
      "Es betrifft auch uns, wenn diese Änderungen eingeführt werden.",
      "Das Thema, das wir besprechen, betrifft viele Menschen.",
      "Dieser Vorfall betrifft alle Abteilungen im Unternehmen."
    ]
  },
{
  language: "ger",
  word: "beziehen SICH AUF",
  forms: ["bezog sich auf", "hat sich auf bezogen"],
  type: "verb",
  variantA: "ссылаться на, опираться на",
  variantB: "следить за, наблюдать за",
  variantC: "быть заинтересованным в",
  variantD: "игнорировать, избегать",
  correctAnswer: "ссылаться на, опираться на",
  cognate_words: [],
  sentences: [
    "Die Theorie bezieht sich auf ein altes Experiment.",
    "Er bezieht sich auf die neuesten Forschungsergebnisse.",
    "In seiner Antwort bezieht er sich auf den Artikel von gestern.",
    "Das Beispiel bezieht sich auf ein konkretes Problem.",
    "Die Entscheidung bezieht sich auf alle betroffenen Mitarbeiter."
  ]
},
{
  language: "ger",
  word: "die Mitteilung",
  forms: [],
  type: "noun",
  variantA: "сообщение, уведомление",
  variantB: "письмо, статья",
  variantC: "пожар, катастрофа",
  variantD: "совещание, обсуждение",
  correctAnswer: "сообщение, уведомление",
  cognate_words: [],
  sentences: [
    "Er hat mir eine Mitteilung über den Termin geschickt.",
    "Die Mitteilung wurde gestern verschickt.",
    "Die Mitteilung an die Mitarbeiter war wichtig.",
    "Ich habe die Mitteilung gestern erhalten.",
    "Die Mitteilung enthält alle wichtigen Informationen."
  ]
},
{
  language: "ger",
  word: "betrachten",
  forms: ["betrachtete", "hat betrachtet"],
  type: "verb",
  variantA: "рассматривать, смотреть",
  variantB: "изменять, модифицировать",
  variantC: "планировать, организовывать",
  variantD: "не замечать, игнорировать",
  correctAnswer: "рассматривать, смотреть",
  cognate_words: [],
  sentences: [
    "Ich habe das Bild lange betrachtet.",
    "Wir sollten das Problem aus verschiedenen Perspektiven betrachten.",
    "Er betrachtete die Landschaft und dachte nach.",
    "Sie betrachteten das Gebäude aus der Nähe.",
    "Betrachten Sie bitte alle Optionen, bevor Sie eine Entscheidung treffen."
  ]
},
{
  language: "ger",
  word: "der Anhang",
  forms: [],
  type: "noun",
  variantA: "приложение, приложение к письму",
  variantB: "ссылка, источник",
  variantC: "вложение, документ",
  variantD: "публикация, отчет",
  correctAnswer: "приложение, приложение к письму",
  cognate_words: [],
  sentences: [
    "Ich habe den Anhang zur E-Mail hinzugefügt.",
    "Der Anhang enthält wichtige Dokumente.",
    "Hast du den Anhang der Nachricht gesehen?",
    "Im Anhang findest du die Dateien, die du benötigst.",
    "Bitte öffne den Anhang, um weitere Details zu sehen."
  ]
},
{
  language: "ger",
  word: "die Zuständigkeit",
  forms: [],
  type: "noun",
  variantA: "компетенция, ответственность",
  variantB: "задание, поручение",
  variantC: "компетенция, знание",
  variantD: "случай, происшествие",
  correctAnswer: "компетенция, ответственность",
  cognate_words: [],
  sentences: [
    "Die Zuständigkeit für dieses Projekt liegt bei der Marketingabteilung.",
    "Er ist für die Zuständigkeit in der Personalabteilung verantwortlich.",
    "Wir müssen klären, wer für die Zuständigkeit dieses Falls verantwortlich ist.",
    "Ihre Zuständigkeit umfasst alle Fragen der Qualitätssicherung.",
    "Die Zuständigkeit für die Bearbeitung der Anfragen wurde dem Team übertragen."
  ]
},
{
  language: "ger",
  word: "der Schalter",
  forms: [],
  type: "noun",
  variantA: "переключатель, оконечный пункт",
  variantB: "окно, касса",
  variantC: "пункт приема, полка",
  variantD: "компьютер, монитор",
  correctAnswer: "окно, касса",
  cognate_words: [],
  sentences: [
    "Ich habe die Tickets am Schalter abgeholt.",
    "Bitte gehen Sie zum Schalter, um Ihr Gepäck abzugeben.",
    "Der Schalter für die Bankgeschäfte ist rechts.",
    "Er stand lange am Schalter, um Hilfe zu bekommen.",
    "Der Schalter für den Kundenservice ist geöffnet."
  ]
},
{
  language: "ger",
  word: "die Bezeichnung",
  forms: [],
  type: "noun",
  variantA: "обозначение, наименование",
  variantB: "описание, характеристика",
  variantC: "постановление, заявление",
  variantD: "предложение, запрос",
  correctAnswer: "обозначение, наименование",
  cognate_words: [],
  sentences: [
    "Die Bezeichnung des Produkts steht auf der Verpackung.",
    "Der Professor erklärte die Bezeichnung der Begriffe.",
    "Die genaue Bezeichnung für das Gerät lautet 'Multifunktionsdrucker'.",
    "Könnten Sie bitte die richtige Bezeichnung angeben?",
    "Die Bezeichnung der Krankheit wurde kürzlich geändert."
  ]
},
{
  language: "ger",
  word: "verlaufen",
  forms: ["verlief", "ist verlaufen"],
  type: "verb",
  variantA: "протекать, проходить",
  variantB: "бежать, двигаться",
  variantC: "исчезать, пропадать",
  variantD: "заниматься, увлекаться",
  correctAnswer: "протекать, проходить",
  cognate_words: [],
  sentences: [
    "Die Veranstaltung verlief ohne Zwischenfälle.",
    "Wie ist das Gespräch verlaufen?",
    "Der Tag ist sehr schnell verlaufen.",
    "Das Gespräch verlief in eine unerwartete Richtung.",
    "Die Zeit ist schnell verlaufen."
  ]
},
{
  language: "ger",
  word: "der Rohstoff",
  forms: [],
  type: "noun",
  variantA: "сырьё, материалы",
  variantB: "техника, оборудование",
  variantC: "услуга, помощь",
  variantD: "продукция, товары",
  correctAnswer: "сырьё, материалы",
  cognate_words: [],
  sentences: [
    "Eisen ist ein wichtiger Rohstoff für die Industrie.",
    "Die Fabrik benötigt mehr Rohstoffe, um die Produktion zu steigern.",
    "Rohstoffe wie Öl sind für die Wirtschaft von großer Bedeutung.",
    "Es gibt einen Mangel an Rohstoffen in vielen Ländern.",
    "Der Abbau von Rohstoffen verursacht oft Umweltprobleme."
  ]
},
{
  language: "ger",
  word: "das Kennzeichen",
  forms: [],
  type: "noun",
  variantA: "знак, отличительный признак",
  variantB: "признак, свойство",
  variantC: "функция, задача",
  variantD: "документ, справка",
  correctAnswer: "знак, отличительный признак",
  cognate_words: [],
  sentences: [
    "Das Kennzeichen des Fahrzeugs ist schwer zu lesen.",
    "Jedes Land hat ein eigenes Kennzeichen für Autos.",
    "Das Kennzeichen auf dem Schild ist sehr auffällig.",
    "Der Name des Unternehmens ist das wichtigste Kennzeichen seines Markenzeichens.",
    "Sie trugen ein Kennzeichen, das ihren Status anzeigt."
  ]
},
{
  language: "ger",
  word: "der Gegenstand",
  forms: [],
  type: "noun",
  variantA: "предмет, вещь",
  variantB: "цель, задача",
  variantC: "контекст, ситуация",
  variantD: "обсуждение, спор",
  correctAnswer: "предмет, вещь",
  cognate_words: [],
  sentences: [
    "Der Gegenstand des Gesprächs war sehr wichtig.",
    "Er sammelte alte Gegenstände aus der Geschichte.",
    "Der Gegenstand wurde auf dem Tisch liegen gelassen.",
    "Welcher Gegenstand interessiert dich am meisten?",
    "Die Bedeutung des Gegenstandes wurde nicht vollständig erklärt."
  ]
},

// Для слова "weiter·leiten"
{
  language: "ger",
  word: "weiter·leiten",
  forms: ["leitete weiter", "hat weitergeleitet"],
  type: "verb",
  variantA: "пересылать, передавать дальше",
  variantB: "задерживать, останавливаться",
  variantC: "планировать, организовывать",
  variantD: "изменять, модифицировать",
  correctAnswer: "пересылать, передавать дальше",
  cognate_words: [],
  sentences: [
    "Ich werde die Anfrage an die zuständige Abteilung weiterleiten.",
    "Bitte leiten Sie die E-Mail an den Kunden weiter.",
    "Das Dokument wurde an den nächsten Mitarbeiter weitergeleitet.",
    "Wir müssen diese Information schnell weiterleiten.",
    "Er hat die Nachricht weitergeleitet, als er sie erhalten hat."
  ]
},

// Для слова "verhandeln MIT"
{
  language: "ger",
  word: "verhandeln MIT",
  forms: ["verhandelte mit", "hat mit verhandelt"],
  type: "verb",
  variantA: "вести переговоры с, обсуждать с",
  variantB: "запрещать, ограничивать",
  variantC: "соглашаться, утверждать",
  variantD: "обсуждать, анализировать",
  correctAnswer: "вести переговоры с, обсуждать с",
  cognate_words: [],
  sentences: [
    "Wir müssen mit dem Lieferanten verhandeln, um einen besseren Preis zu bekommen.",
    "Sie verhandeln mit verschiedenen Parteien über den Vertrag.",
    "Das Unternehmen verhandelt mit den Gewerkschaften über neue Arbeitsbedingungen.",
    "Er verhandelte mit dem Kunden über die Geschäftsbedingungen.",
    "Wir haben gestern mit den Partnern erfolgreich verhandelt."
  ]
},

// Для слова "ab·wechseln SICH"
{
  language: "ger",
  word: "ab·wechseln SICH",
  forms: ["wechselte sich ab", "hat sich abgewechselt"],
  type: "verb",
  variantA: "меняться, чередоваться",
  variantB: "обсуждать, изменять",
  variantC: "работать, трудиться",
  variantD: "делать перерыв, останавливаться",
  correctAnswer: "меняться, чередоваться",
  cognate_words: [],
  sentences: [
    "Wir haben uns während der langen Reise abgewechselt.",
    "Die Kollegen wechseln sich bei der Arbeit im Schichtdienst ab.",
    "Er wechselt sich mit seiner Freundin beim Kochen ab.",
    "Sie wechselten sich bei der Pflege der Pflanzen ab.",
    "Die Teilnehmer wechselten sich während des Spiels ab."
  ]
},

// Для слова "erbringen"
{
  language: "ger",
  word: "erbringen",
  forms: ["erbrachte", "hat erbracht"],
  type: "verb",
  variantA: "предоставлять, достигать",
  variantB: "осуществлять, делать",
  variantC: "запрещать, ограничивать",
  variantD: "доставлять, находить",
  correctAnswer: "предоставлять, достигать",
  cognate_words: [],
  sentences: [
    "Das Unternehmen hat hervorragende Ergebnisse erbracht.",
    "Er hat in seinem Bericht wertvolle Informationen erbracht.",
    "Die Forschung hat neue Erkenntnisse erbracht.",
    "Sie hat großartige Leistungen im Studium erbracht.",
    "Das Team hat alle Anforderungen erfolgreich erbracht."
  ]
},

// Для слова "der Rundgang"
{
  language: "ger",
  word: "der Rundgang",
  forms: [],
  type: "noun",
  variantA: "экскурсия, обход",
  variantB: "обсуждение, встреча",
  variantC: "расследование, проверка",
  variantD: "прогулка, поездка",
  correctAnswer: "экскурсия, обход",
  cognate_words: [],
  sentences: [
    "Der Rundgang durch das Museum war sehr informativ.",
    "Am Ende des Rundgangs konnten die Besucher Fragen stellen.",
    "Wir haben einen Rundgang durch die Stadt gemacht.",
    "Der Rundgang führte uns durch den historischen Teil der Stadt.",
    "Die Führung begann mit einem kurzen Rundgang durch das Gebäude."
  ]
},

// Для слова "beantworten"
{
  language: "ger",
  word: "beantworten",
  forms: ["beantwortete", "hat beantwortet"],
  type: "verb",
  variantA: "отвечать на",
  variantB: "пропускать, игнорировать",
  variantC: "выражать, сообщать",
  variantD: "проверять, анализировать",
  correctAnswer: "отвечать на",
  cognate_words: [],
  sentences: [
    "Er hat alle Fragen der Teilnehmer beantwortet.",
    "Ich muss noch auf die E-Mail antworten.",
    "Kannst du die Frage bitte beantworten?",
    "Die Lehrerin beantwortete alle Fragen der Schüler.",
    "Ich habe meine Anfrage bereits beantwortet."
  ]
},

// Для слова "berücksichtigen"
{
  language: "ger",
  word: "berücksichtigen",
  forms: ["berücksichtigte", "hat berücksichtigt"],
  type: "verb",
  variantA: "учитывать, принимать во внимание",
  variantB: "игнорировать, забывать",
  variantC: "изучать, анализировать",
  variantD: "планировать, разрабатывать",
  correctAnswer: "учитывать, принимать во внимание",
  cognate_words: [],
  sentences: [
    "Wir müssen alle Aspekte des Projekts berücksichtigen.",
    "Er berücksichtigte alle Vorschläge der Kollegen.",
    "Die Umweltbedingungen wurden bei der Planung berücksichtigt.",
    "Kannst du bitte meine Meinung berücksichtigen?",
    "Ich werde deine Hinweise bei der Entscheidung berücksichtigen."
  ]
},

// Для слова "zu gehen AUF"
{
  language: "ger",
  word: "zu gehen AUF",
  forms: ["ging auf", "ist auf gegangen"],
  type: "verb",
  variantA: "обращать внимание на, подходить к",
  variantB: "отклонять, избегать",
  variantC: "обсуждать, анализировать",
  variantD: "игнорировать, пропускать",
  correctAnswer: "обращать внимание на, подходить к",
  cognate_words: [],
  sentences: [
    "Wir müssen jetzt auf die aktuellen Fragen eingehen.",
    "Sie ging auf die Vorschläge des Teams ein.",
    "Er ging auf die Beschwerden der Kunden ein.",
    "Die Diskussion ging auf wichtige Themen ein.",
    "Die Lehrerin ging auf die Fragen der Schüler ein."
  ]
},

// Для слова "verfassen"
{
  language: "ger",
  word: "verfassen",
  forms: ["verfasste", "hat verfasst"],
  type: "verb",
  variantA: "составлять, писать",
  variantB: "изменять, редактировать",
  variantC: "анализировать, проверять",
  variantD: "публиковать, выпускать",
  correctAnswer: "составлять, писать",
  cognate_words: [],
  sentences: [
    "Er hat einen Artikel für die Zeitschrift verfasst.",
    "Die Studentin verfasste eine Dissertation über das Thema.",
    "Sie verfasste einen Brief an den Chef.",
    "Der Autor hat einen neuen Roman verfasst.",
    "Ich habe den Bericht gestern verfasst."
  ]
},

// Для слова "die Anweisung"
{
  language: "ger",
  word: "die Anweisung",
  forms: [],
  type: "noun",
  variantA: "инструкция, указание",
  variantB: "предложение, запрос",
  variantC: "замечание, комментарий",
  variantD: "пожелание, пожелание",
  correctAnswer: "инструкция, указание",
  cognate_words: [],
  sentences: [
    "Die Anweisung wurde klar und deutlich formuliert.",
    "Bitte befolgen Sie die Anweisung des Lehrers.",
    "Ich habe die Anweisung zur Durchführung des Tests erhalten.",
    "Die Anweisung für den neuen Prozess wurde veröffentlicht.",
    "Er gab uns eine genaue Anweisung, was zu tun ist."
  ]
},

// Для слова "eigenhändig"
{
  language: "ger",
  word: "eigenhändig",
  forms: [],
  type: "adjective",
  variantA: "собственноручно",
  variantB: "механически, автоматически",
  variantC: "профессионально, экспертно",
  variantD: "намеренно, преднамеренно",
  correctAnswer: "собственноручно",
  cognate_words: [],
  sentences: [
    "Er unterschrieb das Dokument eigenhändig.",
    "Die Arbeit wurde eigenhändig erledigt.",
    "Sie hat die Formulare eigenhändig ausgefüllt.",
    "Er hat eigenhändig alle notwendigen Unterschriften gesammelt.",
    "Der Brief wurde eigenhändig verfasst."
  ]
},

// Для слова "die Annahme"
{
  language: "ger",
  word: "die Annahme",
  forms: [],
  type: "noun",
  variantA: "предположение, принятие",
  variantB: "пожертвование, дар",
  variantC: "решение, положение",
  variantD: "совещание, обсуждение",
  correctAnswer: "предположение, принятие",
  cognate_words: [],
  sentences: [
    "Die Annahme war, dass die Lieferung rechtzeitig ankommt.",
    "Er stellte die Annahme auf, dass das Projekt pünktlich abgeschlossen wird.",
    "Die Annahme wurde später widerlegt.",
    "Es ist eine Annahme, dass der Fehler durch einen technischen Defekt verursacht wurde.",
    "Die Annahme, dass der Fehler auf menschliches Versagen zurückzuführen ist, war falsch."
  ]
},
// Для слова "die Einrichtung"
{
  language: "ger",
  word: "die Einrichtung",
  forms: ["die Einrichtungen"],
  type: "nomen",
  variantA: "учреждение, организация",
  variantB: "оборудование, меблировка",
  variantC: "пожертвование, дар",
  variantD: "помощь, консультация",
  correctAnswer: "учреждение, организация",
  cognate_words: [],
  sentences: [
    "Die Einrichtung ist sehr modern und gut ausgestattet.",
    "Ich habe die Einrichtung der neuen Wohnung geplant.",
    "Die Einrichtungen des Hauses wurden kürzlich renoviert.",
    "Er arbeitet in einer sozialen Einrichtung.",
    "Die Einrichtung des Projekts wurde gut organisiert."
  ]
},

// Для слова "an·halten SICH AN"
{
  language: "ger",
  word: "an·halten SICH AN",
  forms: ["hielt sich an", "hat sich an gehalten"],
  type: "verb",
  variantA: "следовать, придерживаться",
  variantB: "прекращать, завершать",
  variantC: "планировать, организовывать",
  variantD: "нарушать, отклоняться",
  correctAnswer: "следовать, придерживаться",
  cognate_words: [],
  sentences: [
    "Wir müssen uns an die Regeln halten.",
    "Er hielt sich an den Plan und erreichte sein Ziel.",
    "Die Schüler müssen sich an die Vorschriften halten.",
    "Es ist wichtig, sich an die Vereinbarungen zu halten.",
    "Die Mitarbeiter hielten sich an die festgelegten Arbeitszeiten."
  ]
},

// Для слова "auf·füllen"
{
  language: "ger",
  word: "auf·füllen",
  forms: ["füllte auf", "hat aufgefüllt"],
  type: "verb",
  variantA: "заполнять, наполнять",
  variantB: "проверять, исправлять",
  variantC: "увеличивать, расширять",
  variantD: "уменьшать, сжимать",
  correctAnswer: "заполнять, наполнять",
  cognate_words: [],
  sentences: [
    "Er musste den Tank auffüllen, bevor er weiterfahren konnte.",
    "Die Kellnerin füllte das Glas mit Wasser auf.",
    "Bitte fülle das Formular aus.",
    "Ich muss das Konto auffüllen.",
    "Das Team füllte das Formular mit den entsprechenden Angaben auf."
  ]
},
// Для слова "der Versuch"
{
  language: "ger",
  word: "der Versuch",
  forms: ["die Versuche"],
  type: "nomen",
  variantA: "действие, поступок",
  variantB: "мнение, взгляд",
  variantC: "попытка, проба",
  variantD: "поход, прогулка",
  correctAnswer: "попытка, проба",
  cognate_words: [],
  sentences: [
    "Der Versuch, das Problem zu lösen, war erfolglos.",
    "Wir haben einen weiteren Versuch unternommen.",
    "Der Versuch, den Fehler zu beheben, ist gescheitert.",
    "Es war ein riskanter Versuch, aber es hat funktioniert.",
    "Er machte einen Versuch, den Rekord zu brechen."
  ]
},

// Для слова "aus·fallen"
{
  language: "ger",
  word: "aus·fallen",
  forms: ["fiel aus", "ist ausgefallen"],
  type: "verb",
  variantA: "присоеденяться, участвовать",
  variantB: "выходить из строя, отменяться",
  variantC: "находиться, быть",
  variantD: "проводить, организовывать",
  correctAnswer: "выходить из строя, отменяться",
  cognate_words: [],
  sentences: [
    "Die Veranstaltung ist aufgrund des Wetters ausgefallen.",
    "Der Zug fällt wegen technischer Probleme aus.",
    "Der Flug ist wegen eines Sturms ausgefallen.",
    "Der Unterricht fällt heute aus.",
    "Leider ist das Konzert ausgefallen."
  ]
},

{
  language: "ger",
  word: "einig",
  forms: ["einiger"],
  type: "adjektiv",
  variantA: "единый, согласованный",
  variantB: "удивительный, замечательный",
  variantC: "длинный, продолжительный",
  variantD: "раздельный, отдельный",
  correctAnswer: "единый, согласованный",
  cognate_words: [],
  sentences: [
    "Wir sind uns in dieser Frage einig.",
    "Die Gruppe war sich einig über die Entscheidung.",
    "Die Meinungen waren nicht einig.",
    "Wir haben uns einig auf das Datum geeinigt.",
    "Die Familie war sich einig, dass sie zusammenreisen sollte."
  ]
},

{
  language: "ger",
  word: "herum·sprechen SICH",
  forms: ["sprach sich herum", "hat sich herumgesprochen"],
  type: "verb",
  variantA: "скрывать, прятаться",
  variantB: "обсуждать, разговаривать",
  variantC: "принимать участие, участвовать",
  variantD: "распространяться, ходить слухи",
  correctAnswer: "распространяться, ходить слухи",
  cognate_words: [],
  sentences: [
    "Es hat sich schnell herumgesprochen, dass er gewonnen hat.",
    "Die Neuigkeit sprach sich in der ganzen Stadt herum.",
    "Gerüchte über die Veranstaltung haben sich überall herumgesprochen.",
    "Es wird sich bestimmt noch herumsprechen, dass er gegangen ist.",
    "Die Nachricht hat sich wie ein Lauffeuer herumgesprochen."
  ]
},
{
  language: "ger",
  word: "zu·kommen AUF",
  forms: ["kam zu", "ist zugekommen"],
  type: "verb",
  variantA: "зависеть от чего-то",
  variantB: "приближаться, подходить",
  variantC: "завоевывать, привлекать",
  variantD: "поглощать, захватывать",
  correctAnswer: "зависеть от чего-то",
  cognate_words: [],
  sentences: [
    "Es kommt darauf an, wie du dich vorbereitest.",
    "Die Entscheidung kommt auf deine Fähigkeiten an.",
    "Alles kommt darauf an, wie du es angehst.",
    "Es kommt auf den richtigen Zeitpunkt an.",
    "Alles kommt auf deine Erfahrung an."
  ]
},
// Для слова "liegen"
{
  language: "ger",
  word: "liegen",
  forms: ["lag", "hat gelegen"],
  type: "verb",
  variantA: "лежать, находиться",
  variantB: "стоять, быть",
  variantC: "летать, путешествовать",
  variantD: "плавать, двигаться",
  correctAnswer: "лежать, находиться",
  cognate_words: [],
  sentences: [
    "Die Bücher liegen auf dem Tisch.",
    "Er lag auf dem Sofa und las ein Buch.",
    "Das Problem liegt in der Lösung des Konflikts.",
    "Sie liegt im Bett und schläft.",
    "Der Hund liegt am Fenster."
  ]
},

// Для слова "mit·machen BEI"
{
  language: "ger",
  word: "mit·machen BEI",
  forms: ["machte mit", "hat mitgemacht"],
  type: "verb",
  variantA: "участвовать в чем-то",
  variantB: "помогать в чем-то",
  variantC: "обсуждать с кем-то",
  variantD: "избегать чего-то",
  correctAnswer: "участвовать в чем-то",
  cognate_words: [],
  sentences: [
    "Er hat bei dem Projekt mitgemacht.",
    "Wir möchten alle bei der Veranstaltung mitmachen.",
    "Kannst du bei der Besprechung mitmachen?",
    "Ich werde bei der Umfrage mitmachen.",
    "Alle Schüler sollten bei der Sportaktivität mitmachen."
  ]
},

// Для слова "hauptsächlich"
{
  language: "ger",
  word: "hauptsächlich",
  forms: [],
  type: "adjektiv",
  variantA: "основной, главный",
  variantB: "неважный, второстепенный",
  variantC: "редкий, необычный",
  variantD: "постоянный, стабильный",
  correctAnswer: "основной, главный",
  cognate_words: [],
  sentences: [
    "Das Thema war hauptsächlich die Umwelt.",
    "Hauptsächlich arbeiten wir mit internationalen Partnern.",
    "Der Vortrag behandelt hauptsächlich wirtschaftliche Themen.",
    "Wir sind hauptsächlich in der Softwareentwicklung tätig.",
    "Das Problem liegt hauptsächlich in der Kommunikation."
  ]
},

// Для слова "indem"
{
  language: "ger",
  word: "indem",
  forms: [],
  type: "konjunktion",
  variantA: "поскольку",
  variantB: "так как",
  variantC: "тем самым, что",
  variantD: "в то время как",
  correctAnswer: "тем самым, что",
  cognate_words: [],
  sentences: [
    "Er hat es geschafft, indem er hart gearbeitet hat.",
    "Sie hilft mir, indem sie immer zuhört.",
    "Er löst das Problem, indem er eine neue Methode anwendet.",
    "Ich habe den Fehler korrigiert, indem ich die Anweisungen befolgt habe.",
    "Wir haben uns verbessert, indem wir effizienter gearbeitet haben."
  ]
},

// Для слова "anwesend"
{
  language: "ger",
  word: "anwesend",
  forms: [],
  type: "adjektiv",
  variantA: "отсраненный",
  variantB: "отсутствующий",
  variantC: "присутствующий",
  variantD: "запрещенный",
  correctAnswer: "присутствующий",
  cognate_words: [],
  sentences: [
    "Alle Mitarbeiter sind heute anwesend.",
    "Er war nicht anwesend bei der Besprechung.",
    "Die wichtigsten Personen waren anwesend.",
    "Ich werde anwesend sein, wenn es notwendig ist.",
    "Bist du heute anwesend bei der Veranstaltung?"
  ]
},

// Для слова "übrig"
{
  language: "ger",
  word: "übrig",
  forms: [],
  type: "adjektiv",
  variantA: "остальной, оставшийся",
  variantB: "запрещенный",
  variantC: "удивительный",
  variantD: "конфликтный",
  correctAnswer: "остальной, оставшийся",
  cognate_words: [],
  sentences: [
    "Haben wir noch etwas übrig?",
    "Es gibt noch übrig gebliebene Plätze im Kurs.",
    "Der Kuchen war übrig, also haben wir ihn gegessen.",
    "Es bleibt nichts übrig, nachdem alle genommen haben.",
    "Die übrig gebliebenen Aufgaben müssen morgen erledigt werden."
  ]
},
// Для слова "zeitweise"
{
  language: "ger",
  word: "zeitweise",
  forms: [],
  type: "adverb",
  variantA: "нечасто",
  variantB: "постоянно",
  variantC: "несколько раз",
  variantD: "временно",
  correctAnswer: "временно",
  cognate_words: [],
  sentences: [
    "Er arbeitet zeitweise von zu Hause.",
    "Die Lösung ist nur zeitweise verfügbar.",
    "Es gab zeitweise Probleme mit dem System.",
    "Wir sind zeitweise im Ausland tätig.",
    "Der Kurs ist zeitweise geschlossen."
  ]
},

// Для слова "jeweils"
{
  language: "ger",
  word: "jeweils",
  forms: [],
  type: "adverb",
  variantA: "каждый раз",
  variantB: "раз в год",
  variantC: "по мере надобности",
  variantD: "непрерывно",
  correctAnswer: "каждый раз",
  cognate_words: [],
  sentences: [
    "Die Preise ändern sich jeweils am ersten des Monats.",
    "Jeweils nach dem Essen gibt es eine Pause.",
    "Die Mitarbeiter erhalten jeweils eine Aufgabe.",
    "Jeweils im Januar wird das neue Programm eingeführt.",
    "Wir haben jeweils einen Tag frei."
  ]
},

// Для слова "die Zusammenfassung"
{
  language: "ger",
  word: "die Zusammenfassung",
  forms: ["die Zusammenfassungen"],
  type: "nomen",
  variantA: "объяснение, разъяснение",
  variantB: "сводка, резюме",
  variantC: "рекомендация",
  variantD: "решение",
  correctAnswer: "сводка, резюме",
  cognate_words: [
    {
      word: "zusammenfassen",
      translate: "собирать, суммировать"
    }
  ],
  sentences: [
    "Am Ende des Berichts gibt es eine Zusammenfassung.",
    "Bitte gib mir eine kurze Zusammenfassung des Textes.",
    "Die Zusammenfassung der Ergebnisse ist sehr wichtig.",
    "In der Zusammenfassung werden die wichtigsten Punkte wiederholt.",
    "Die Zusammenfassung des Buches war sehr hilfreich."
  ]
},

// Для слова "fordern"
{
  language: "ger",
  word: "fordern",
  forms: ["forderte", "hat gefordert"],
  type: "verb",
  variantA: "предупреждать, склонять",
  variantB: "позволять, одобрять",
  variantC: "требовать, просить",
  variantD: "отвечать",
  correctAnswer: "требовать, просить",
  cognate_words: [],
  sentences: [
    "Der Lehrer fordert von den Schülern eine schnelle Antwort.",
    "Die Regierung fordert Änderungen im Gesetz.",
    "Er fordert mehr Zeit für die Aufgabe.",
    "Sie fordert eine Entschuldigung von ihm.",
    "Wir sollten die Unterstützung aller fordern."
  ]
},

// Для слова "durch·führen"
{
  language: "ger",
  word: "durch·führen",
  forms: ["führte durch", "hat durchgeführt"],
  type: "verb",
  variantA: "проводить, осуществлять",
  variantB: "считать, полагать",
  variantC: "создавать",
  variantD: "отказаться",
  correctAnswer: "проводить, осуществлять",
  cognate_words: [],
  sentences: [
    "Wir müssen das Projekt schnell durchführen.",
    "Das Team führt die Umfrage durch.",
    "Er hat die Forschung erfolgreich durchgeführt.",
    "Die Polizei führt eine Untersuchung durch.",
    "Das Unternehmen führt Schulungen durch."
  ]
},

// Для слова "aus·üben"
{
  language: "ger",
  word: "aus·üben",
  forms: ["übte aus", "hat ausgeübt"],
  type: "verb",
  variantA: "осуществлять, выполнять",
  variantB: "сдавать, отпустить",
  variantC: "отрицать",
  variantD: "тренироваться",
  correctAnswer: "осуществлять, выполнять",
  cognate_words: [],
  sentences: [
    "Er übt eine schwierige Tätigkeit aus.",
    "Sie übt ihre Rechte als Bürgerin aus.",
    "Ich habe eine neue Rolle in der Firma ausgeübt.",
    "Er übt die Tätigkeit des Lehrers aus.",
    "Die Politikerin übt einen wichtigen Einfluss aus."
  ]
},

// Для слова "erfüllen"
{
  language: "ger",
  word: "erfüllen",
  forms: ["erfüllte", "hat erfüllt"],
  type: "verb",
  variantA: "заполнить, наполнять",
  variantB: "отклонять",
  variantC: "подавать",
  variantD: "выполнять, исполнять",
  correctAnswer: "выполнять, исполнять",
  cognate_words: [],
  sentences: [
    "Er hat alle Anforderungen erfüllt.",
    "Sie erfüllt ihre Aufgaben immer zuverlässig.",
    "Die Anforderungen wurden von allen erfüllt.",
    "Ich habe meinen Traum endlich erfüllt.",
    "Erfüllt deinen Teil der Vereinbarung."
  ]
},
// Для слова "verärgern"
{
  language: "ger",
  word: "verärgern",
  forms: ["verärgerte", "hat verärgert"],
  type: "verb",
  variantA: "успокаивать",
  variantB: "раздражать, злить",
  variantC: "вдохновлять",
  variantD: "поощрять",
  correctAnswer: "раздражать, злить",
  cognate_words: [],
  sentences: [
    "Das ständige Warten verärgert mich.",
    "Seine ständigen Fragen verärgern die anderen.",
    "Sie hat ihn mit ihrer Antwort verärgert.",
    "Es verärgert mich, wenn man mich unterbricht.",
    "Der Kommentar verärgerte alle im Raum."
  ]
},

// Для слова "aus·kennen"
{
  language: "ger",
  word: "aus·kennen",
  forms: ["kannte aus", "hat ausgekannt"],
  type: "verb",
  variantA: "догадываться, подозревать",
  variantB: "игнорировать",
  variantC: "знать, разбираться в чем-то",
  variantD: "переводить",
  correctAnswer: "знать, разбираться в чем-то",
  cognate_words: [],
  sentences: [
    "Er kennt sich sehr gut in diesem Bereich aus.",
    "Sie kennt sich mit der Technik hervorragend aus.",
    "Ich kenne mich mit diesen Themen nicht aus.",
    "Er kennt sich gut mit Computern aus.",
    "Bist du sicher, dass du dich hier auskennst?"
  ]
},

// Для слова "ein·lenken"
{
  language: "ger",
  word: "ein·lenken",
  forms: ["lenkte ein", "hat eingelenkt"],
  type: "verb",
  variantA: "настаивать",
  variantB: "поменять мнение, уступать",
  variantC: "поддерживать",
  variantD: "отвергать",
  correctAnswer: "поменять мнение, уступать",
  cognate_words: [],
  sentences: [
    "Er lenkte ein und stimmte zu.",
    "Nach langem Überlegen lenkte er ein.",
    "Sie musste einlenken und ihre Meinung ändern.",
    "Er wollte nicht einlenken, aber sie überzeugte ihn.",
    "Ich hoffe, sie wird einlenken und den Vorschlag akzeptieren."
  ]
},

// Для слова "ein·wenden"
{
  language: "ger",
  word: "ein·wenden",
  forms: ["wendete ein", "hat eingewendet"],
  type: "verb",
  variantA: "отклонять",
  variantB: "соглашаться",
  variantC: "обсуждать",
  variantD: "возражать",
  correctAnswer: "возражать",
  cognate_words: [],
  sentences: [
    "Er wendete ein, dass der Plan nicht durchführbar ist.",
    "Sie wollte einwenden, aber er ließ sie nicht ausreden.",
    "Ich habe nichts dagegen, aber es gibt ein paar Einwände.",
    "Er hat einige Einwände gegen die Idee.",
    "Wenn du Einwände hast, solltest du sie jetzt äußern."
  ]
},

// Для слова "meistern"
{
  language: "ger",
  word: "meistern",
  forms: ["meisterte", "hat gemeistert"],
  type: "verb",
  variantA: "поправлять, настраивать",
  variantB: "уходить",
  variantC: "покорять, справляться",
  variantD: "отклонять",
  correctAnswer: "покорять, справляться",
  cognate_words: [],
  sentences: [
    "Er hat die schwierige Prüfung erfolgreich gemeistert.",
    "Sie meisterte alle Herausforderungen mit Bravour.",
    "Er hat das Problem schnell gemeistert.",
    "Sie hat ihre Ängste endlich gemeistert.",
    "Wir müssen lernen, schwierige Situationen zu meistern."
  ]
},

// Для слова "bewahren"
{
  language: "ger",
  word: "bewahren",
  forms: ["bewahrte", "hat bewahrt"],
  type: "verb",
  variantA: "терять, утрачать",
  variantB: "сохранять, беречь",
  variantC: "удалять",
  variantD: "восстанавливать",
  correctAnswer: "сохранять, беречь",
  cognate_words: [],
  sentences: [
    "Er bewahrte das Geheimnis für sich.",
    "Wir müssen die Umwelt bewahren.",
    "Sie bewahrte ihre Ruhe in der schwierigen Situation.",
    "Es ist wichtig, historische Gebäude zu bewahren.",
    "Er hat das Buch gut bewahrt."
  ]
},

// Для слова "nach·haken"
{
  language: "ger",
  word: "nach·haken",
  forms: ["hakte nach", "hat nachgehakt"],
  type: "verb",
  variantA: "выяснять, задавать вопросы",
  variantB: "закрывать",
  variantC: "откладывать",
  variantD: "согласовывать",
  correctAnswer: "выяснять, задавать вопросы",
  cognate_words: [],
  sentences: [
    "Er hakte nach, um mehr Informationen zu erhalten.",
    "Sie hakte bei ihm nach, aber er gab keine Antwort.",
    "Ich werde nachhaken, ob der Termin bestätigt wurde.",
    "Er hat bei den Kollegen nachgehakt.",
    "Wir müssen nachhaken, um die Details zu klären."
  ]
},
// Для слова "bewältigen"
{
  language: "ger",
  word: "bewältigen",
  forms: ["bewältigte", "hat bewältigt"],
  type: "verb",
  variantA: "управляться, справляться с чем-то",
  variantB: "уступать",
  variantC: "создавать",
  variantD: "отклонять",
  correctAnswer: "управляться, справляться с чем-то",
  cognate_words: [],
  sentences: [
    "Er hat die Herausforderung erfolgreich bewältigt.",
    "Wir müssen dieses Problem schnell bewältigen.",
    "Sie hat die schwierige Aufgabe bewältigt.",
    "Es fällt mir schwer, diese Aufgabe zu bewältigen.",
    "Nach vielen Versuchen hat er das Problem endlich bewältigt."
  ]
},

// Для слова "an·wenden SICH"
{
  language: "ger",
  word: "an·wenden SICH",
  forms: ["wandte an", "hat angewandt"],
  type: "verb",
  variantA: "создавать",
  variantB: "обращаться, применять что-то",
  variantC: "отвергать",
  variantD: "закрывать",
  correctAnswer: "обращаться, применять что-то",
  cognate_words: [],
  sentences: [
    "Er hat sich an den Professor gewandt, um Hilfe zu erhalten.",
    "Wir sollten uns an den Plan halten.",
    "Kannst du dich an die Regeln wenden?",
    "Sie wendete sich an das Team für eine Lösung.",
    "Er wandte sich an den Kundendienst."
  ]
},

// Для слова "ansonsten"
{
  language: "ger",
  word: "ansonsten",
  forms: [],
  type: "adverb",
  variantA: "поэтому",
  variantB: "в противном случае",
  variantC: "более того",
  variantD: "например",
  correctAnswer: "в противном случае",
  cognate_words: [],
  sentences: [
    "Wir müssen uns beeilen, ansonsten verpassen wir den Zug.",
    "Es regnet, ansonsten könnten wir draußen spielen.",
    "Du kannst gehen, ansonsten bleibst du hier.",
    "Er ist sehr beschäftigt, ansonsten ist er freundlich.",
    "Ich habe keine Zeit, ansonsten würde ich helfen."
  ]
},

// Для слова "übrigens"
{
  language: "ger",
  word: "übrigens",
  forms: [],
  type: "adverb",
  variantA: "например",
  variantB: "кстати, между прочим",
  variantC: "поэтому",
  variantD: "однако",
  correctAnswer: "кстати, между прочим",
  cognate_words: [],
  sentences: [
    "Übrigens, ich habe das Buch gefunden.",
    "Übrigens, hast du das Meeting verschoben?",
    "Er hat übrigens eine sehr gute Idee.",
    "Übrigens, sie kommen morgen zur Party.",
    "Ich wollte dir übrigens noch danken."
  ]
},

// Для слова "erweisen"
{
  language: "ger",
  word: "erweisen",
  forms: ["erwies", "hat erwiesen"],
  type: "verb",
  variantA: "создавать",
  variantB: "терять",
  variantC: "доказывать, оказывать",
  variantD: "отклонять",
  correctAnswer: "доказывать, оказывать",
  cognate_words: [],
  sentences: [
    "Er hat sich als sehr zuverlässig erwiesen.",
    "Diese Strategie hat sich als sehr erfolgreich erwiesen.",
    "Er wies seine Unschuld nach.",
    "Das hat sich als eine gute Entscheidung erwiesen.",
    "Seine Fähigkeiten haben sich schnell erwiesen."
  ]
},

// Для слова "wirken"
{
  language: "ger",
  word: "wirken",
  forms: ["wirkte", "hat gewirkt"],
  type: "verb",
  variantA: "выглядеть",
  variantB: "помогать",
  variantC: "действовать, оказывать влияние",
  variantD: "восстанавливать",
  correctAnswer: "действовать, оказывать влияние",
  cognate_words: [],
  sentences: [
    "Das Medikament hat schnell gewirkt.",
    "Seine Worte haben einen großen Einfluss auf mich gewirkt.",
    "Wie wirkt sich die Änderung auf das Ergebnis aus?",
    "Der Film hat einen starken Eindruck auf mich gewirkt.",
    "Es hat so gewirkt, als ob sie traurig war."
  ]
},

// Для фразы "an geben"
{
  language: "ger",
  word: "an geben",
  forms: ["gab an", "hat angegeben"],
  type: "verb",
  variantA: "забирать",
  variantB: "проверять",
  variantC: "собирать",
  variantD: "указывать, сообщать",
  correctAnswer: "указывать, сообщать",
  cognate_words: [],
  sentences: [
    "Er gab an, dass er morgen verfügbar ist.",
    "Kannst du mir deine Adresse angeben?",
    "Sie gab die Anzahl der Teilnehmer an.",
    "Er hat seine Kontaktdaten angegeben.",
    "Bitte geben Sie Ihren Namen an."
  ]
},

// Для фразы "aus geben"
{
  language: "ger",
  word: "aus geben",
  forms: ["gab aus", "hat ausgegeben"],
  type: "verb",
  variantA: "покупать",
  variantB: "копить",
  variantC: "экономить",
  variantD: "тратить деньги, расходовать",
  correctAnswer: "тратить деньги, расходовать",
  cognate_words: [],
  sentences: [
    "Er gab viel Geld für das Auto aus.",
    "Ich habe das Geld für den Urlaub ausgegeben.",
    "Sie gibt ihr ganzes Geld für Kleidung aus.",
    "Wir haben zu viel für den Abend ausgegeben.",
    "Er gab alles aus, was er hatte."
  ]
},

// Для фразы "auf geben"
{
  language: "ger",
  word: "auf geben",
  forms: ["gab auf", "hat aufgegeben"],
  type: "verb",
  variantA: "сдаваться, прекращать",
  variantB: "начинать",
  variantC: "достига́ть",
  variantD: "продолжать",
  correctAnswer: "сдаваться, прекращать",
  cognate_words: [],
  sentences: [
    "Er gab auf, als es zu schwierig wurde.",
    "Sie hat ihre Träume aufgegeben.",
    "Wir dürfen nicht aufgeben, auch wenn es schwer ist.",
    "Er gab nach und hörte auf zu kämpfen.",
    "Es было schwer, aber er gab nie auf."
  ]
},

// Для фразы "zu geben"
{
  language: "ger",
  word: "zu geben",
  forms: ["gab zu", "hat zugegeben"],
  type: "verb",
  variantA: "критиковать",
  variantB: "избегать",
  variantC: "предсказывать",
  variantD: "признавать, допускать",
  correctAnswer: "признавать, допускать",
  cognate_words: [],
  sentences: [
    "Er gab zu, dass er einen Fehler gemacht hatte.",
    "Ich gebe zu, dass ich manchmal ungeduldig bin.",
    "Sie gab zu, dass sie den Brief verloren hatte.",
    "Du solltest zu deinen Fehlern stehen und sie zugeben.",
    "Er gab zu, dass er die Aufgabe nicht erledigt hatte."
  ]
},

// Для фразы "ein geben"
{
  language: "ger",
  word: "ein geben",
  forms: ["gab ein", "hat eingegeben"],
  type: "verb",
  variantA: "принимать",
  variantB: "объявлять",
  variantC: "запрещать",
  variantD: "вводить, подавать",
  correctAnswer: "вводить, подавать",
  cognate_words: [],
  sentences: [
    "Er gab den Code in das System ein.",
    "Ich habe die Daten falsch eingegeben.",
    "Sie gab ihre Antwort ein.",
    "Bitte geben Sie die erforderlichen Informationen ein.",
    "Er gab das Passwort ein und meldete sich an."
  ]
},

// Для слова "übergeben"
{
  language: "ger",
  word: "übergeben",
  forms: ["übergab", "hat übergeben"],
  type: "verb",
  variantA: "брать",
  variantB: "создавать",
  variantC: "передавать, вручать",
  variantD: "забывать",
  correctAnswer: "передавать, вручать",
  cognate_words: [],
  sentences: [
    "Er übergab das Paket dem Kurier.",
    "Sie übergab ihm das Dokument.",
    "Er hat die Verantwortung an seine Kollegen übergeben.",
    "Ich werde dir die Schlüssel später übergeben.",
    "Wir müssen dir diese Aufgabe übergeben."
  ]
},

// Для слова "begeben"
{
  language: "ger",
  word: "begeben",
  forms: ["begab sich", "hat sich begeben"],
  type: "verb",
  variantA: "принимать участие, направляться",
  variantB: "принимать",
  variantC: "заботиться",
  variantD: "откладывать",
  correctAnswer: "принимать участие, направляться",
  cognate_words: [],
  sentences: [
    "Er begab sich in den Park.",
    "Wir begaben uns auf eine Reise.",
    "Sie begaben sich zur Besprechung.",
    "Ich werde mich bald zu dir begeben.",
    "Er begab sich zum Ausgang."
  ]
},

// Для слова "vergeben"
{
  language: "ger",
  word: "vergeben",
  forms: ["vergab", "hat vergeben"],
  type: "verb",
  variantA: "поддерживать",
  variantB: "прощать, давать",
  variantC: "забирать",
  variantD: "отказывать",
  correctAnswer: "прощать, давать",
  cognate_words: [],
  sentences: [
    "Er vergab ihr seinen Fehler.",
    "Sie vergab ihm seinen Fehler.",
    "Ich werde dir den Platz vergeben.",
    "Er hat mir vergeben und wir sind wieder Freunde.",
    "Es ist schwer, zu vergeben, aber ich versuche es."
  ]
},
// Для слова "vorrätig"
{
  language: "ger",
  word: "vorrätig",
  forms: [],
  type: "adjective",
  variantA: "отсутствующий на складе",
  variantB: "в наличии",
  variantC: "недоступный",
  variantD: "временно недоступный",
  correctAnswer: "в наличии",
  cognate_words: [],
  sentences: [
    "Das Produkt ist momentan nicht vorrätig.",
    "Wir haben keine vorrätigen Artikel in dieser Farbe.",
    "Das Produkt ist vorrätig und kann sofort geliefert werden.",
    "Ist dieses Buch noch vorrätig?",
    "Bitte prüfen Sie, ob das Produkt vorrätig ist."
  ]
},

// Для слова "demnächst"
{
  language: "ger",
  word: "demnächst",
  forms: [],
  type: "adverb",
  variantA: "скоро",
  variantB: "всегда",
  variantC: "редко",
  variantD: "временно",
  correctAnswer: "скоро",
  cognate_words: [],
  sentences: [
    "Die Lieferung erfolgt demnächst.",
    "Demnächst gibt es ein Treffen.",
    "Das Konzert findet demnächst statt.",
    "Wir werden demnächst mit den Renovierungsarbeiten beginnen.",
    "Demnächst werden neue Produkte verfügbar sein."
  ]
},

// Для слова "ähnlich"
{
  language: "ger",
  word: "ähnlich",
  forms: [],
  type: "adjective",
  variantA: "разный",
  variantB: "похожий",
  variantC: "уникальный",
  variantD: "одинаковый",
  correctAnswer: "похожий",
  cognate_words: [],
  sentences: [
    "Sie trägt heute ein ähnliches Kleid wie gestern.",
    "Die beiden Filme sind sich sehr ähnlich.",
    "Er sieht seiner Schwester ziemlich ähnlich.",
    "Wir haben ähnliche Vorlieben.",
    "Der Stil dieses Gemäldes ist sehr ähnlich dem von Picasso."
  ]
},

// Для слова "verschwinden"
{
  language: "ger",
  word: "verschwinden",
  forms: ["verschwand", "ist verschwunden"],
  type: "verb",
  variantA: "появляться",
  variantB: "исчезать",
  variantC: "находить",
  variantD: "возвращаться",
  correctAnswer: "исчезать",
  cognate_words: [],
  sentences: [
    "Er verschwand nach der Besprechung.",
    "Die Wolken verschwanden langsam.",
    "Das Geld ist plötzlich verschwunden.",
    "Sie sind alle verschwunden, ohne ein Wort zu sagen.",
    "Der Zug ist kurz vor der Abfahrt verschwunden."
  ]
},

// Для слова "der Engpass"
{
  language: "ger",
  word: "der Engpass",
  forms: ["die Engpässe"],
  type: "noun",
  variantA: "проблема, трудность",
  variantB: "переменная, выбор",
  variantC: "узкое место, дефицит",
  variantD: "переизбыток",
  correctAnswer: "узкое место, дефицит",
  cognate_words: [],
  sentences: [
    "Der Engpass betrifft die Lieferungen.",
    "Wir haben einen Engpass in der Produktion festgestellt.",
    "Der Engpass im System muss schnell behoben werden.",
    "Während des Engpasses gab es Verzögerungen.",
    "Wir müssen den Engpass überwinden, um effizient zu arbeiten."
  ]
},

// Для слова "fällig"
{
  language: "ger",
  word: "fällig",
  forms: [],
  type: "adjective",
  variantA: "запланированный",
  variantB: "необходимый",
  variantC: "поздний",
  variantD: "срок наступил, нужно выполнить",
  correctAnswer: "срок наступил, нужно выполнить",
  cognate_words: [],
  sentences: [
    "Die Zahlung ist heute fällig.",
    "Ihre Steuerrückzahlung ist fällig.",
    "Der Bericht ist fällig bis Ende des Monats.",
    "Die Rechnung ist fällig und muss bezahlt werden.",
    "Der Beitrag ist fällig, also zahl bitte."
  ]
},

// Для слова "die Feststellung"
{
  language: "ger",
  word: "die Feststellung",
  forms: ["die Feststellungen"],
  type: "noun",
  variantA: "проверка, исследование",
  variantB: "констатация, утверждение",
  variantC: "успех, победа",
  variantD: "предсказание",
  correctAnswer: "констатация, утверждение",
  cognate_words: [],
  sentences: [
    "Die Feststellung des Problems dauert noch an.",
    "Er hat die Feststellung gemacht, dass die Daten unvollständig sind.",
    "Die Feststellung der Ursache des Fehlers ist wichtig.",
    "Mit dieser Feststellung sind wir einen Schritt weiter.",
    "Die Feststellung wurde nach der Untersuchung gemacht."
  ]
},

// Для слова "unverbindlich"
{
  language: "ger",
  word: "unverbindlich",
  forms: [],
  type: "adjective",
  variantA: "необязательный",
  variantB: "формальный",
  variantC: "срочный",
  variantD: "важный",
  correctAnswer: "необязательный",
  cognate_words: [],
  sentences: [
    "Das Angebot ist unverbindlich.",
    "Wir bieten unverbindliche Beratung an.",
    "Die Einladung ist unverbindlich und kann jederzeit geändert werden.",
    "Er gab eine unverbindliche Zusage.",
    "Es war ein unverbindliches Treffen, ohne feste Vereinbarungen."
  ]
},

// Для фразы "zurück·treten VON"
{
  language: "ger",
  word: "zurück·treten VON",
  forms: ["trat zurück", "ist zurückgetreten"],
  type: "verb",
  variantA: "отказываться, отменять",
  variantB: "поглощать, захватывать",
  variantC: "принимать участие",
  variantD: "не согласиться, отказаться от чего-то",
  correctAnswer: "не согласиться, отказаться от чего-то",
  cognate_words: [],
  sentences: [
    "Er trat von seinem Amt zurück.",
    "Sie trat von der Position zurück.",
    "Er hat seine Entscheidung zurückgenommen.",
    "Wir müssen von diesem Angebot zurücktreten.",
    "Er hat das Angebot zurückgewiesen."
  ]
},

// Для слова "gezwungen"
{
  language: "ger",
  word: "gezwungen",
  forms: [],
  type: "adjective",
  variantA: "спокойный",
  variantB: "принудительный",
  variantC: "веселый",
  variantD: "сильный",
  correctAnswer: "принудительный",
  cognate_words: [],
  sentences: [
    "Er fühlte sich gezwungen, eine Entscheidung zu treffen.",
    "Ich war gezwungen, das Angebot anzunehmen.",
    "Sie wurde gezwungen, ihre Meinung zu ändern.",
    "Er fühlte sich gezwungen, zu arbeiten.",
    "Wir haben ihn gezwungen, zurückzukommen."
  ]
},
// Для слова "die Bemühung"
{
  language: "ger",
  word: "die Bemühung",
  forms: ["die Bemühungen"],
  type: "noun",
  variantA: "проблема, трудность",
  variantB: "неудача",
  variantC: "пожертвование",
  variantD: "усилия, старания",
  correctAnswer: "усилия, старания",
  cognate_words: [],
  sentences: [
    "Seine Bemühungen wurden nicht belohnt.",
    "Sie zeigte große Bemühungen, das Problem zu lösen.",
    "Die Bemühungen des Teams führten zum Erfolg.",
    "Ich schätze deine Bemühungen, das zu erklären.",
    "Er zeigte keine Bemühungen, sich zu verbessern."
  ]
},

// Для слова "unterbreiten"
{
  language: "ger",
  word: "unterbreiten",
  forms: ["unterbrach", "hat unterbrochen"],
  type: "verb",
  variantA: "объяснять",
  variantB: "предлагать, представлять",
  variantC: "вспоминать",
  variantD: "принимать участие",
  correctAnswer: "предлагать, представлять",
  cognate_words: [],
  sentences: [
    "Er unterbreitete ein interessantes Angebot.",
    "Wir möchten Ihnen ein neues Konzept unterbreiten.",
    "Die Firma unterbrach das Gespräch, um ein Angebot zu unterbreiten.",
    "Er unterbrach die Sitzung, um einen Vorschlag zu unterbreiten.",
    "Ich werde Ihnen ein detailliertes Angebot unterbreiten."
  ]
},

// Для слова "die Auflösung"
{
  language: "ger",
  word: "die Auflösung",
  forms: ["die Auflösungen"],
  type: "noun",
  variantA: "решение, выбор",
  variantB: "объяснение",
  variantC: "развитие",
  variantD: "прекращение, растворение",
  correctAnswer: "прекращение, растворение",
  cognate_words: [],
  sentences: [
    "Die Auflösung der Firma war unvermeidlich.",
    "Die Auflösung des Rätsels dauerte nicht lange.",
    "Die Auflösung des Projekts wurde beschlossen.",
    "Die Auflösung des Konflikts wurde schnell erreicht.",
    "Wir müssen eine Auflösung für das Problem finden."
  ]
},

// Для слова "definieren"
{
  language: "ger",
  word: "definieren",
  forms: ["definierte", "hat definiert"],
  type: "verb",
  variantA: "объяснять",
  variantB: "устанавливать границы",
  variantC: "определять, устанавливать",
  variantD: "рассматривать",
  correctAnswer: "определять, устанавливать",
  cognate_words: [],
  sentences: [
    "Kannst du diesen Begriff bitte definieren?",
    "Wir müssen klare Ziele definieren.",
    "Er definierte seine Haltung zu diesem Thema.",
    "Das Ziel ist es, den Begriff präzise zu definieren.",
    "Wie definieren wir den Erfolg in diesem Fall?"
  ]
},

// Для слова "gestehen"
{
  language: "ger",
  word: "gestehen",
  forms: ["gestand", "hat gestanden"],
  type: "verb",
  variantA: "заслужить",
  variantB: "признавать",
  variantC: "пытаться",
  variantD: "отказываться",
  correctAnswer: "признавать",
  cognate_words: [],
  sentences: [
    "Er gestand seine Fehler.",
    "Sie gestand, dass sie die Wahrheit wusste.",
    "Er hat seine Tat gestanden.",
    "Ich gestehe, dass ich es nicht erwartet hatte.",
    "Er wollte nicht gestehen, dass er schuld war."
  ]
},

// Для фразы "flehen UM"
{
  language: "ger",
  word: "flehen UM",
  forms: ["flehte", "hat gefleht"],
  type: "verb",
  variantA: "спорить",
  variantB: "приглашать",
  variantC: "пожертвовать",
  variantD: "молить, просить",
  correctAnswer: "молить, просить",
  cognate_words: [],
  sentences: [
    "Er flehte um Hilfe.",
    "Sie flehte um Vergebung.",
    "Ich flehte ihn, zu bleiben.",
    "Sie flehte um eine zweite Chance.",
    "Er flehte um Gnade."
  ]
},

// Для слова "hinterlassen"
{
  language: "ger",
  word: "hinterlassen",
  forms: ["hinterließ", "hat hinterlassen"],
  type: "verb",
  variantA: "цепляться, держаться",
  variantB: "следовать",
  variantC: "оставлять, оставлять после себя",
  variantD: "находить",
  correctAnswer: "оставлять, оставлять после себя",
  cognate_words: [],
  sentences: [
    "Er hat ein großes Erbe hinterlassen.",
    "Sie hinterließ eine Nachricht für mich.",
    "Die Wissenschaftler haben wertvolle Erkenntnisse hinterlassen.",
    "Was hast du mir hinterlassen?",
    "Er hinterließ den Raum in Unordnung."
  ]
},

// Для слова "verlassen"
{
  language: "ger",
  word: "verlassen",
  forms: ["verließ", "hat verlassen"],
  type: "verb",
  variantA: "убавлять, уменьшать",
  variantB: "приходить",
  variantC: "доставать",
  variantD: "покидать, оставлять",
  correctAnswer: "покидать, оставлять",
  cognate_words: [],
  sentences: [
    "Er verließ das Büro früh.",
    "Sie hat ihre Familie verlassen.",
    "Der Zug hat den Bahnhof verlassen.",
    "Ich musste das Hotel verlassen.",
    "Er verließ die Stadt nach der Besprechung."
  ]
},
{
  language: "ger",
  word: "veranlassen",
  forms: ["veranlasste", "hat veranlasst"],
  type: "verb",
  variantA: "устанавливать",
  variantB: "погашать",
  variantC: "замечать",
  variantD: "поручать, вызывать",
  correctAnswer: "поручать, вызывать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Der Direktor hat eine Untersuchung veranlasst.",
    "Er veranlasste die Änderungen sofort.",
    "Ich werde alles veranlassen, damit das funktioniert.",
    "Die Regierung hat Maßnahmen veranlasst.",
    "Er veranlasste eine Besprechung."
  ]
},

// Для слова "bezugnehmend"
{
  language: "ger",
  word: "bezugnehmend",
  forms: [],
  type: "adjective",
  variantA: "в связи с",
  variantB: "передаваемый",
  variantC: "интересующий",
  variantD: "применяющийся",
  correctAnswer: "в связи с", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Bezugnehmend auf Ihre Anfrage, hier die Antwort.",
    "Bezugnehmend auf die Besprechung, müssen wir что-то делать.",
    "Bezugnehmend на den Artikel, möchte ich свою мнение выразить.",
    "Bezugnehmend auf die E-Mail, die Sie gesendet haben, hier die Details.",
    "Bezugnehmend auf das Gespräch gestern, hier mein Vorschlag."
  ]
},

// Для слова "anliegend"
{
  language: "ger",
  word: "anliegend",
  forms: [],
  type: "adjective",
  variantA: "неприкасаемый",
  variantB: "прикладываемый",
  variantC: "непреложный",
  variantD: "выполняющийся",
  correctAnswer: "прикладываемый", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Anliegend sende ich Ihnen den Vertrag.",
    "Die anliegende Vorschrift ist sehr wichtig.",
    "Ich sende Ihnen die anliegende Datei.",
    "Die anliegende Anfrage muss noch bearbeitet werden.",
    "Der Bericht ist anliegend beigefügt."
  ]
},

// Для слова "beiliegend"
{
  language: "ger",
  word: "beiliegend",
  forms: [],
  type: "adjective",
  variantA: "информативный",
  variantB: "относящийся",
  variantC: "прилагаемый",
  variantD: "заключающийся",
  correctAnswer: "прилагаемый", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Beiliegend finden Sie alle notwendigen Dokumente.",
    "Die beiliegende Broschüre enthält weitere Informationen.",
    "Beiliegend sende ich Ihnen den Vertrag.",
    "Bitte beachten Sie die beiliegenden Unterlagen.",
    "Die beiliegende Datei muss überprüft werden."
  ]
},

// Для слова "hervorragend"
{
  language: "ger",
  word: "hervorragend",
  forms: [],
  type: "adjective",
  variantA: "неприметный",
  variantB: "обычный",
  variantC: "незначительный",
  variantD: "выдающийся, превосходный",
  correctAnswer: "выдающийся, превосходный", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Das war eine hervorragende Präsentation!",
    "Sie hat eine hervorragende Leistung erbracht.",
    "Die Qualität dieses Produkts ist hervorragend.",
    "Er hat hervorragende Arbeit geleistet.",
    "Wir haben einen hervorragenden Service erhalten."
  ]
},

// Для слова "gesamt"
{
  language: "ger",
  word: "gesamt",
  forms: [],
  type: "adjective",
  variantA: "частичный",
  variantB: "отдельный",
  variantC: "всего, общий",
  variantD: "неполный",
  correctAnswer: "всего, общий", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Die gesamten Kosten werden später berechnet.",
    "Die Gesamtzahl der Teilnehmer ist hoch.",
    "Wir haben die gesamt gesammelten Daten ausgewertet.",
    "Der gesamt Umfang des Projekts ist noch nicht festgelegt.",
    "Die Gesamtbewertung der Veranstaltung war positiv."
  ]
},

// Для слова "begleichen"
{
  language: "ger",
  word: "begleichen",
  forms: ["beglich", "hat beglichen"],
  type: "verb",
  variantA: "откладывать",
  variantB: "забывать",
  variantC: "погашать, урегулировать",
  variantD: "понижать",
  correctAnswer: "погашать, урегулировать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Er beglich seine Schulden pünktlich.",
    "Ich habe die Rechnung bereits beglichen.",
    "Es bleibt noch einiges zu begleichen.",
    "Er beglich alle offenen Fragen.",
    "Ich möchte die Kosten beglichen wissen."
  ]
},

// Для слова "gelegen"
{
  language: "ger",
  word: "gelegen",
  forms: [],
  type: "adjective",
  variantA: "закрытый",
  variantB: "поразительный",
  variantC: "расположенный",
  variantD: "приобретенный",
  correctAnswer: "расположенный", 
  cognate_words: [],
  sentences: [
    "Das Hotel ist sehr günstig gelegen.",
    "Die Stadt ist landschaftlich sehr schön gelegen.",
    "Unsere Wohnung ist sehr zentral gelegen.",
    "Der Laden ist neben dem Bahnhof gelegen.",
    "Das Restaurant ist am See gelegen."
  ]
},
{
  language: "ger",
  word: "die Vorlage",
  forms: ["die Vorlagen"],
  type: "nomen",
  variantA: "структура, план",
  variantB: "предложение",
  variantC: "рекомендация",
  variantD: "шаблон, образец",
  correctAnswer: "шаблон, образец", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Bitte beachten Sie die Vorlage für den Bericht.",
    "Die Vorlage für die Präsentation ist sehr nützlich.",
    "Er hat seine Arbeit nach einer Vorlage erstellt.",
    "Sie haben mir eine Vorlage zur Verfügung gestellt.",
    "Die Vorlage für das Formular muss noch bearbeitet werden."
  ]
},

// Для слова "die Bedingung"
{
  language: "ger",
  word: "die Bedingung",
  forms: ["die Bedingungen"],
  type: "nomen",
  variantA: "требование",
  variantB: "конкурс",
  variantC: "условие",
  variantD: "соглашение",
  correctAnswer: "условие", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Die Bedingung für den Vertrag ist akzeptabel.",
    "Wir müssen die Bedingung dieser Vereinbarung erfüllen.",
    "Er hat die Bedingungen des Angebots akzeptiert.",
    "Eine der Bedingungen war die pünktliche Lieferung.",
    "Die Bedingungen sind klar und verständlich."
  ]
},

// Для слова "empfangen"
{
  language: "ger",
  word: "empfangen",
  forms: ["empfing", "hat empfangen"],
  type: "verb",
  variantA: "ловить, хватать",
  variantB: "отправлять",
  variantC: "получать, принимать",
  variantD: "забывать",
  correctAnswer: "получать, принимать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Ich habe Ihre Nachricht empfangen.",
    "Er empfing uns am Flughafen.",
    "Wir haben das Paket gestern empfangen.",
    "Sie haben das Geschenk mit Freude empfangen.",
    "Der Chef empfing die Gäste herzlich."
  ]
},

// Для слова "beabsichtigen"
{
  language: "ger",
  word: "beabsichtigen",
  forms: ["beabsichtigte", "hat beabsichtigt"],
  type: "verb",
  variantA: "оступаться, теряться",
  variantB: "избегать",
  variantC: "намереваться, планировать",
  variantD: "обсуждать",
  correctAnswer: "намереваться, планировать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Er beabsichtigt, nächsten Monat zu reisen.",
    "Wir beabsichtigen, die Arbeit bald abzuschließen.",
    "Sie beabsichtigte, den Vertrag zu unterschreiben.",
    "Ich habe beabsichtigt, dieses Projekt zu leiten.",
    "Die Firma beabsichtigt, neue Produkte zu lancieren."
  ]
},

// Для слова "verhindern"
{
  language: "ger",
  word: "verhindern",
  forms: ["verhinderte", "hat verhindert"],
  type: "verb",
  variantA: "обсуждать",
  variantB: "определять",
  variantC: "предотвращать",
  variantD: "согласовывать",
  correctAnswer: "предотвращать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Wir müssen alles tun, um die Krise zu verhindern.",
    "Er hat das Experiment verhindert.",
    "Die Maßnahmen werden dazu beitragen, den Schaden zu verhindern.",
    "Wir haben versucht, die Verzögerung zu verhindern.",
    "Das neue Gesetz soll Umweltschäden verhindern."
  ]
},

// Для слова "diesbezüglich"
{
  language: "ger",
  word: "diesbezüglich",
  forms: [],
  type: "adjective",
  variantA: "постоянный",
  variantB: "важный",
  variantC: "по этому поводу",
  variantD: "мнимый",
  correctAnswer: "по этому поводу", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Diesbezüglich gibt es keine weiteren Informationen.",
    "Wir haben diesbezüglich noch keine Entscheidung getroffen.",
    "Er hat diesbezüglich seine Meinung geäußert.",
    "Es gibt diesbezüglich keine Veränderungen.",
    "Ich werde diesbezüglich noch mit ihm sprechen."
  ]
},

// Для слова "die Panne"
{
  language: "ger",
  word: "die Panne",
  forms: ["die Pannen"],
  type: "nomen",
  variantA: "кастрюля, сковорода",
  variantB: "дорога",
  variantC: "неполадка, сбой",
  variantD: "решение",
  correctAnswer: "неполадка, сбой", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Wir hatten eine Panne auf dem Weg nach Hause.",
    "Die Panne wurde schnell behoben.",
    "Das Auto hat eine Panne.",
    "Es gab eine Panne im System.",
    "Der Techniker konnte die Panne rechtzeitig reparieren."
  ]
},

// Для слова "die Pannendienst"
{
  language: "ger",
  word: "die Pannendienst",
  forms: ["die Pannendienste"],
  type: "nomen",
  variantA: "жилищный отдел",
  variantB: "интернет-услуга",
  variantC: "государственная служба",
  variantD: "служба по устранению неисправностей",
  correctAnswer: "служба по устранению неисправностей", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Der Pannendienst kam schnell, um uns zu helfen.",
    "Wir riefen den Pannendienst an, als das Auto stehen blieb.",
    "Die Pannendienst-Nummer war auf dem Ausweis.",
    "Der Pannendienst hilft bei Autopannen auf der Straße.",
    "Ich habe den Pannendienst kontaktiert, um das Problem zu beheben."
  ]
},

// Для слова "berühren"
{
  language: "ger",
  word: "berühren",
  forms: ["berührte", "hat berührt"],
  type: "verb",
  variantA: "касаться, трогать",
  variantB: "увеличивать",
  variantC: "поглощать",
  variantD: "удалять",
  correctAnswer: "касаться, трогать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Er hat meine Hand berührt.",
    "Sie hat das Thema sehr sensibel berührt.",
    "Ich möchte dieses Thema nicht weiter berühren.",
    "Das Bild berührte ihn tief.",
    "Er hat das Gesicht vorsichtig berührt."
  ]
},

// Для слова "anfassen"
{
  language: "ger",
  word: "anfassen",
  forms: ["fasste an", "hat angefasst"],
  type: "verb",
  variantA: "удалять",
  variantB: "прикасаться, трогать",
  variantC: "рассматривать",
  variantD: "обсуждать",
  correctAnswer: "прикасаться, трогать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Sie hat das Buch angefasst.",
    "Er hat sie am Arm angefasst.",
    "Bitte fass das nicht an.",
    "Er hat das Problem sofort angefasst.",
    "Ich möchte diese Angelegenheit näher anfassen."
  ]
},
{
  language: "ger",
  word: "ein·setzen",
  forms: ["setzte ein", "hat eingesetzt"],
  type: "verb",
  variantA: "вставлять, устанавливать",
  variantB: "отменять",
  variantC: "спрашивать",
  variantD: "применять",
  correctAnswer: "применять", // Верный вариант D
  cognate_words: [],
  sentences: [
    "Er hat die Strategie erfolgreich eingesetzt.",
    "Wir setzen neue Technologien ein, um die Effizienz zu verbessern.",
    "Sie hat ihre Erfahrung im Projekt eingesetzt.",
    "Der Trainer setzte den Spieler in der letzten Minute ein.",
    "Es ist wichtig, moderne Methoden einzusetzen."
  ]
},

// Для слова "zurück·setzen"
{
  language: "ger",
  word: "zurück·setzen",
  forms: ["setzte zurück", "hat zurückgesetzt"],
  type: "verb",
  variantA: "передвигать, переустанавливать",
  variantB: "возвращать, сбрасывать",
  variantC: "пересматривать",
  variantD: "выставлять",
  correctAnswer: "возвращать, сбрасывать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Sie hat das System zurückgesetzt, um Fehler zu beheben.",
    "Ich musste die Einstellungen zurücksetzen, um das Problem zu lösen.",
    "Der Fehler trat nach dem Zurücksetzen des Programms auf.",
    "Kannst du den Wert bitte zurücksetzen?",
    "Das Zurücksetzen des Passworts dauerte nur wenige Minuten."
  ]
},

// Для слова "aus·werfen"
{
  language: "ger",
  word: "aus·werfen",
  forms: ["warf aus", "hat ausgeworfen"],
  type: "verb",
  variantA: "передавать, перенаправлять",
  variantB: "вводить",
  variantC: "выбрасывать, вытаскивать",
  variantD: "запускать",
  correctAnswer: "выбрасывать, вытаскивать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Das System hat einen Fehler ausgeworfen.",
    "Er hat den Ball weit aus dem Spielfeld geworfen.",
    "Der Computer hat eine Fehlermeldung ausgeworfen.",
    "Sie musste den defekten Artikel auswerfen.",
    "Er hat das ungenutzte Gerät aus dem Raum geworfen."
  ]
},

// Для слова "auf·werfen"
{
  language: "ger",
  word: "auf·werfen",
  forms: ["warf auf", "hat aufgeworfen"],
  type: "verb",
  variantA: "поглащать, цеплять",
  variantB: "поднимать, ставить (вопрос)",
  variantC: "закрывать",
  variantD: "менять",
  correctAnswer: "поднимать, ставить (вопрос)", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Er hat eine interessante Frage aufgeworfen.",
    "Das Thema wurde während des Meetings aufgeworfen.",
    "Die Diskussion hat mehrere Probleme aufgeworfen.",
    "Dieser Punkt sollte noch einmal aufgeworfen werden.",
    "Die aufgeworfene Frage ist von großer Bedeutung."
  ]
},

// Для слова "aus·rüsten MIT"
{
  language: "ger",
  word: "aus·rüsten MIT",
  forms: ["rüstete aus", "hat ausgerüstet"],
  type: "verb",
  variantA: "вводить",
  variantB: "покупать",
  variantC: "ремонтировать",
  variantD: "оснащать чем-либо",
  correctAnswer: "оснащать чем-либо", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Die Expedition wurde mit den neuesten Geräten ausgerüstet.",
    "Das Team wurde mit Schutzkleidung ausgerüstet.",
    "Sie haben uns mit allem ausgestattet, was wir brauchen.",
    "Der Club wurde mit neuen Computern ausgerüstet.",
    "Die Firma rüstet ihre Mitarbeiter mit modernen Werkzeugen aus."
  ]
},

// Для слова "versiert"
{
  language: "ger",
  word: "versiert",
  forms: [],
  type: "adjective",
  variantA: "новый, неопытный",
  variantB: "молодой",
  variantC: "опытный, квалифицированный",
  variantD: "мудрый",
  correctAnswer: "опытный, квалифицированный", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Er ist in diesem Bereich sehr versiert.",
    "Sie ist eine versierte Fachkraft.",
    "Er ist ein versierter Ingenieur.",
    "Ich vertraue einem versierten Arzt.",
    "Ihre versierte Arbeit wird immer geschätzt."
  ]
},

// Для слова "ausführlich"
{
  language: "ger",
  word: "ausführlich",
  forms: [],
  type: "adjective",
  variantA: "неконкретный",
  variantB: "трудный",
  variantC: "быстрый",
  variantD: "подробный",
  correctAnswer: "подробный", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Er gab eine ausführliche Erklärung.",
    "Das Bericht war sehr ausführlich und informativ.",
    "Wir haben eine ausführliche Besprechung geführt.",
    "Die Anweisungen waren ausführlich und klar.",
    "Der Bericht wurde ausführlich besprochen."
  ]
},

// Для слова "wieder·geben"
{
  language: "ger",
  word: "wieder·geben",
  forms: ["gab wieder", "hat wiedergegeben"],
  type: "verb",
  variantA: "отказывать, отменять",
  variantB: "покупать",
  variantC: "рассматривать",
  variantD: "пересказывать, воспроизводить",
  correctAnswer: "пересказывать, воспроизводить", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Er konnte die Geschichte sehr gut wiedergeben.",
    "Das Bild gibt die Szene sehr gut wieder.",
    "Er hat das gesprochene Wort genau wiedergegeben.",
    "Kannst du das bitte wiedergeben?",
    "Das Buch gibt die Ereignisse detailliert wieder."
  ]
},

// Для слова "ermitteln"
{
  language: "ger",
  word: "ermitteln",
  forms: ["ermittelte", "hat ermittelt"],
  type: "verb",
  variantA: "доказывать",
  variantB: "заключать",
  variantC: "выяснять, расследовать",
  variantD: "разрешать",
  correctAnswer: "выяснять, расследовать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Die Polizei ermittelt in diesem Fall.",
    "Er hat die Ursache des Problems ermittelt.",
    "Wir müssen noch einige Details ermitteln.",
    "Die Ermittlungen dauern noch an.",
    "Die Ursache des Unfalls konnte ermittelt werden."
  ]
},

{
  language: "ger",
  word: "erkennen",
  forms: ["erkannte", "hat erkannt"],
  type: "verb",
  variantA: "понимать, осознавать",
  variantB: "видеть, замечать",
  variantC: "спорить",
  variantD: "игнорировать",
  correctAnswer: "понимать, осознавать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Er erkannte sofort, dass etwas nicht stimmte.",
    "Ich konnte den Fehler schnell erkennen.",
    "Sie hat ihn nach Jahren wieder erkannt.",
    "Es ist wichtig, Probleme rechtzeitig zu erkennen.",
    "Er kann gute Möglichkeiten erkennen."
  ]
},

// Для слова "der Zufall"
{
  language: "ger",
  word: "der Zufall",
  forms: ["die Zufälle"],
  type: "noun",
  variantA: "ошибка, провал",
  variantB: "результат",
  variantC: "награда",
  variantD: "лучайность, совпадение",
  correctAnswer: "случайность, совпадение", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Es war ein reiner Zufall, dass wir uns getroffen haben.",
    "Durch Zufall habe ich das alte Buch gefunden.",
    "Der Zufall hat uns zusammengebracht.",
    "Manchmal sind die besten Dinge im Leben Zufall.",
    "Es war kein Zufall, dass sie den Wettbewerb gewonnen hat."
  ]
},

// Для слова "die Fertigkeit"
{
  language: "ger",
  word: "die Fertigkeit",
  forms: ["die Fertigkeiten"],
  type: "noun",
  variantA: "черта, характер",
  variantB: "недостаток",
  variantC: "умение, навык",
  variantD: "вмешательство",
  correctAnswer: "умение, навык", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Mit dieser Fertigkeit kannst du viele Probleme lösen.",
    "Sie hat ihre Fertigkeiten im Bereich Technologie verbessert.",
    "Er hat die Fertigkeit, gut zu kommunizieren.",
    "Er besitzt ausgezeichnete Fertigkeiten in der Mathematik.",
    "Fertigkeiten kann man durch Übung verbessern."
  ]
},

// Для слова "die Auswirkung"
{
  language: "ger",
  word: "die Auswirkung",
  forms: ["die Auswirkungen"],
  type: "noun",
  variantA: "реакция, эффект",
  variantB: "предсказание",
  variantC: "воздействие, влияние",
  variantD: "затруднение",
  correctAnswer: "воздействие, влияние", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Die Auswirkungen des neuen Gesetzes waren spürbar.",
    "Die Auswirkung des Klimawandels ist weltweit zu spüren.",
    "Das hatte gravierende Auswirkungen auf die Wirtschaft.",
    "Die langfristigen Auswirkungen müssen noch untersucht werden.",
    "Das Projekt hatte positive Auswirkungen auf die Region."
  ]
},

// Для слова "ausnahmsweise"
{
  language: "ger",
  word: "ausnahmsweise",
  forms: [],
  type: "adverb",
  variantA: "планово",
  variantB: "постоянно",
  variantC: "неожиданно",
  variantD: "исключительно",
  correctAnswer: "исключительно", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Ausnahmsweise können wir heute länger arbeiten.",
    "Er hat ausnahmsweise zugestimmt, weil es wichtig war.",
    "Wir können ausnahmsweise eine Pause machen.",
    "Ausnahmsweise habe ich mir Zeit genommen, um zu helfen.",
    "Das war ausnahmsweise der Fall."
  ]
},

// Для слова "geringfügig"
{
  language: "ger",
  word: "geringfügig",
  forms: [],
  type: "adjective",
  variantA: "большой",
  variantB: "важный",
  variantC: "незначительный",
  variantD: "трудный",
  correctAnswer: "незначительный", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Der Unterschied ist nur geringfügig.",
    "Es gab nur eine geringfügige Änderung.",
    "Die Unterschiede sind geringfügig und nicht relevant.",
    "Der Preisunterschied ist geringfügig.",
    "Der Aufwand war nur geringfügig."
  ]
},

// Для фразы "auf regen ÜBER"
{
  language: "ger",
  word: "auf·regen ÜBER",
  forms: ["regte auf", "hat aufgeregt"],
  type: "verb",
  variantA: "успокаивать, сбавлять",
  variantB: "волновать, раздражать",
  variantC: "развлекать",
  variantD: "показывать",
  correctAnswer: "волновать, раздражать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Das Thema hat ihn sehr aufgeregt.",
    "Er regte sich über die Nachricht sehr auf.",
    "Solche Dinge können jemanden leicht aufregen.",
    "Das Wetter regte ihn jedes Mal auf.",
    "Lass dich nicht so leicht aufregen!"
  ]
},

// Для слова "bemerken"
{
  language: "ger",
  word: "bemerken",
  forms: ["bemerkte", "hat bemerkt"],
  type: "verb",
  variantA: "удивляться",
  variantB: "замечать",
  variantC: "предположить",
  variantD: "решать",
  correctAnswer: "замечать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Ich habe nicht bemerkt, dass du schon gegangen bist.",
    "Er bemerkte das kleine Detail sofort.",
    "Sie bemerkte die Veränderung in seiner Stimme.",
    "Hast du etwas Ungewöhnliches bemerkt?",
    "Ich habe den Fehler erst nach einer Weile bemerkt."
  ]
},

// Для слова "heraus finden"
{
  language: "ger",
  word: "heraus·finden",
  forms: ["fand heraus", "hat herausgefunden"],
  type: "verb",
  variantA: "разызскивать, искать",
  variantB: "обсуждать",
  variantC: "спрашивать",
  variantD: "выяснять, находить",
  correctAnswer: "выяснять, находить", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Ich habe es endlich herausgefunden.",
    "Er fand heraus, dass sie gelogen hatte.",
    "Sie musste herausfinden, wie es funktioniert.",
    "Ich versuche, die Ursache des Problems herauszufinden.",
    "Wir müssen herausfinden, was genau passiert ist."
  ]
},

// Для слова "auf bauen"
{
  language: "ger",
  word: "auf·bauen",
  forms: ["baute auf", "hat aufgebaut"],
  type: "verb",
  variantA: "покрывать, накрывать",
  variantB: "строить, развивать",
  variantC: "анализировать",
  variantD: "проверять",
  correctAnswer: "строить, развивать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Wir bauen das Geschäft langsam auf.",
    "Er hat ein starkes Team aufgebaut.",
    "Sie müssen Vertrauen aufbauen, um eine gute Beziehung zu haben.",
    "Ich baue meine Karriere weiter auf.",
    "Er hat viele neue Ideen aufgebaut."
  ]
},

// Для слова "überreden ZU"
{
  language: "ger",
  word: "über·reden ZU",
  forms: ["überredete", "hat überredet"],
  type: "verb",
  variantA: "просить",
  variantB: "уговаривать",
  variantC: "наставлять",
  variantD: "отговаривать",
  correctAnswer: "уговаривать", // Верный вариант A
  cognate_words: [],
  sentences: [
    "Er hat sie überredet, mit ihm zu kommen.",
    "Sie überredete ihn, die Entscheidung zu ändern.",
    "Kannst du ihn vielleicht überreden, das zu tun?",
    "Sie konnte ihn nicht überreden, das Angebot anzunehmen.",
    "Er hat mich überredet, mehr Zeit zu investieren."
  ]
},
{
  "language": "ger",
  "word": "das Fazit",
  "forms": [],
  "type": "noun",
  "variantA": "резюме",
  "variantB": "пункт",
  "variantC": "вывод",
  "variantD": "перерыв",
  "correctAnswer": "вывод",
  "cognate_words": [],
  "sentences": [
    "Das Fazit der Untersuchung ist eindeutig.",
    "Am Ende des Projekts haben wir ein positives Fazit gezogen.",
    "Das Fazit des Gesprächs war, dass wir zusammenarbeiten sollten.",
    "Das Fazit dieser Analyse zeigt, dass mehr Investitionen nötig sind.",
    "Ich stimme dem Fazit des Berichts zu."
  ]
},
{
  "language": "ger",
  "word": "die Faustregel",
  "forms": [],
  "type": "noun",
  "variantA": "основное правило",
  "variantB": "сложное правило",
  "variantC": "указание",
  "variantD": "исключение",
  "correctAnswer": "основное правило",
  "cognate_words": [],
  "sentences": [
    "Eine Faustregel besagt, dass man täglich mindestens acht Stunden schlafen sollte.",
    "Die Faustregel ist einfach: je mehr man übt, desto besser wird man.",
    "Es gibt eine Faustregel, dass man keine Entscheidungen unter Druck treffen sollte.",
    "Die Faustregel bei der Arbeit lautet: 'Qualität vor Quantität.'",
    "Er befolgte immer die Faustregel, weniger zu essen und mehr zu bewegen."
  ]
},
{
  "language": "ger",
  "word": "die Haltbarkeit",
  "forms": [],
  "type": "noun",
  "variantA": "долговечность",
  "variantB": "непрочность",
  "variantC": "срок годности",
  "variantD": "порча",
  "correctAnswer": "срок годности",
  "cognate_words": [],
  "sentences": [
    "Die Haltbarkeit des Produkts ist auf der Verpackung angegeben.",
    "Längerer Kontakt kann die Haltbarkeit beeinträchtigen.",
    "Wir sollten die Haltbarkeit des Lebensmittels überprüfen.",
    "Die Haltbarkeit des Materials ist außergewöhnlich hoch.",
    "Die Haltbarkeit von frischen Produkten ist begrenzt."
  ]
},
{
  "language": "ger",
  "word": "jedoch",
  "forms": [],
  "type": "conjunction",
  "variantA": "тем не менее",
  "variantB": "поскольку",
  "variantC": "если",
  "variantD": "потому что",
  "correctAnswer": "тем не менее",
  "cognate_words": [],
  "sentences": [
    "Er wollte gehen, jedoch war es zu spät.",
    "Es regnete, jedoch ging er spazieren.",
    "Sie hat es nicht geschafft, jedoch versuchte sie es erneut.",
    "Ich habe Hunger, jedoch keine Lust zu essen.",
    "Er ist ein guter Arzt, jedoch fehlt ihm Erfahrung."
  ]
},
{
  "language": "ger",
  "word": "erheblich",
  "forms": [],
  "type": "adjective",
  "variantA": "незначительный",
  "variantB": "существенный",
  "variantC": "малый",
  "variantD": "незначительный",
  "correctAnswer": "существенный",
  "cognate_words": [],
  "sentences": [
    "Die Kosten sind erheblich gestiegen.",
    "Es gab erhebliche Verzögerungen im Projekt.",
    "Er hat erheblich zur Verbesserung beigetragen.",
    "Die Unterschiede sind nicht erheblich.",
    "Er hat erhebliche Fortschritte gemacht."
  ]
},
{
  "language": "ger",
  "word": "bedeutend",
  "forms": [],
  "type": "adjective",
  "variantA": "значимый",
  "variantB": "незначительный",
  "variantC": "неважный",
  "variantD": "малозначимый",
  "correctAnswer": "значимый",
  "cognate_words": [],
  "sentences": [
    "Er ist eine bedeutende Persönlichkeit in der Wissenschaft.",
    "Das war eine bedeutende Entdeckung.",
    "Dieses Ereignis hat eine bedeutende Auswirkung auf die Gesellschaft.",
    "Die Bedeutung dieses Gesetzes ist sehr bedeutend.",
    "Bedeutende Veränderungen stehen bevor."
  ]
},
{
  "language": "ger",
  "word": "unvollständig",
  "forms": [],
  "type": "adjective",
  "variantA": "неполный",
  "variantB": "полный",
  "variantC": "точный",
  "variantD": "ясный",
  "correctAnswer": "неполный",
  "cognate_words": [],
  "sentences": [
    "Der Bericht ist noch unvollständig.",
    "Ich habe nur unvollständige Informationen erhalten.",
    "Der Antrag war unvollständig ausgefüllt.",
    "Das Formular war unvollständig und wurde abgelehnt.",
    "Unvollständige Daten können zu Fehlern führen."
  ]
},
{
  "language": "ger",
  "word": "übereinstimmen MIT",
  "forms": ["stimmt überein", "stimmte überein", "hat übereingestimmt"],
  "type": "verb",
  "variantA": "согласовывать",
  "variantB": "не совпадать",
  "variantC": "совпадать",
  "variantD": "мешать",
  "correctAnswer": "совпадать",
  "cognate_words": [],
  "sentences": [
    "Unsere Meinungen stimmen überein.",
    "Die Daten stimmen mit den Ergebnissen überein.",
    "Das Ergebnis stimmt nicht mit meinen Erwartungen überein.",
    "Ihre Ansichten stimmen mit den aktuellen Trends überein.",
    "Die Aussagen stimmen größtenteils überein."
  ]
},
{
  "language": "ger",
  "word": "zu lassen",
  "forms": ["lässt zu", "ließ zu", "hat zugelassen"],
  "type": "verb",
  "variantA": "предоставлять",
  "variantB": "отпускать",
  "variantC": "позволять",
  "variantD": "запрещать",
  "correctAnswer": "позволять",
  "cognate_words": [],
  "sentences": [
    "Er lässt das nicht zu.",
    "Ich lasse dich entscheiden.",
    "Sie hat es nicht zugelassen, dass wir sie stören.",
    "Lass es zu, wenn du dich wohlfühlst.",
    "Es lässt sich nicht vermeiden."
  ]
},
{
  "language": "ger",
  "word": "erleichtern",
  "forms": ["erleichtert", "erleichterte", "hat erleichtert"],
  "type": "verb",
  "variantA": "усложнять",
  "variantB": "облегчать",
  "variantC": "путать",
  "variantD": "ускорять",
  "correctAnswer": "облегчать",
  "cognate_words": [
    {
      "word": "die Erleichterung",
      "translate": "облегчение"
    }
  ],
  "sentences": [
    "Diese Maßnahme wird den Prozess erleichtern.",
    "Er hat das Leben der Menschen durch seine Arbeit erleichtert.",
    "Das neue System soll den Arbeitsaufwand erleichtern.",
    "Es erleichtert mir, wenn du mir hilfst.",
    "Die neue Technologie hat viele Prozesse erleichtert."
  ]
},









  //   {
  //     language: "ger",
  //     word: "die Flucht",
  //     forms: ["die Fluchten"],
  //     type: "nomen",
  //     variantA: "лазейка, ниша",
  //     variantB: "побег, бегство",
  //     variantC: "итог, сумма",
  //     variantD: "ложь, неправда",
  //     correctAnswer: "побег, бегство",
  //   },
  //   {
  //     language: "ger",
  //     word: "die Forderung",
  //     forms: ["die Forderungen"],
  //     type: "nomen",
  //     variantA: "требование, претензия",
  //     variantB: "помощь, услуга",
  //     variantC: "услуга (коммерс), работа",
  //     variantD: "угроза, опасность",
  //     correctAnswer: "требование, претензия",
  //   },
  //
  //   {
  //     language: "ger",
  //     word: "der Mut",
  //     forms: ["-"],
  //     type: "nomen",
  //     variantA: "предчувствие, ощущение",
  //     variantB: "падение, упадок",
  //     variantC: "мужество, отвага",
  //     variantD: "сомнения, сметения",
  //     correctAnswer: "мужество, отвага",
  //   },
  //   {
  //     language: "ger",
  //     word: "der Umstand",
  //     forms: ["die Umstände"],
  //     type: "nomen",
  //     variantA: "обстоятельство",
  //     variantB: "упадок",
  //     variantC: "происшествие",
  //     variantD: "недоверие",
  //     correctAnswer: "мужество, отвага",
  //   },
  //   {
  //     language: "ger",
  //     word: "die Rücksicht",
  //     forms: ["die Rücksichten"],
  //     type: "nomen",
  //     variantA: "обстоятельство, случаи",
  //     variantB: "возврат, возвращение",
  //     variantC: "бодрость, радость",
  //     variantD: "внимание, уважение",
  //     correctAnswer: "внимание, уважение",
  //   },
  //   {
  //     language: "ger",
  //     word: "die Unterstützung",
  //     forms: ["die Unterstützungen"],
  //     type: "nomen",
  //     variantA: "охрана, сбережние",
  //     variantB: "по́мощь, подде́ржка, посо́бие",
  //     variantC: "бодрость, радость",
  //     variantD: "содействие, взаимная работа",
  //     correctAnswer: "по́мощь, подде́ржка, посо́бие",
  //   },
  //  
  //   
  //   {
  //     language: "ger",
  //     word: "zielstrebig",
  //     forms: ["zielstrebiger", "am zielstrebigsten"],
  //     type: "adj",
  //     variantA: "целеустремленный",
  //     variantB: "постижимый, досягаемый",
  //     variantC: "огромный, значительный",
  //     variantD: "недосягаемый, недостижимый",
  //     correctAnswer: "целеустремленный",
  //   },
  //   {
  //     language: "ger",
  //     word: "verhältnismäßig",
  //     forms: ["-"],
  //     type: "adv",
  //     variantA: "постепенно, последовательно",
  //     variantB: "ложный, неправдиво",
  //     variantC: "важно, ценно",
  //     variantD: "относительно, сравнительно",
  //     correctAnswer: "относительно, сравнительно",
  //   },
  //   {
  //     language: "ger",
  //     word: "zielgerichtet",
  //     forms: ["-"],
  //     type: "adv",
  //     variantA: "целеустремленный, целенаправленный",
  //     variantB: "несправедливый, незаконный",
  //     variantC: "справедливый, законный",
  //     variantD: "относительно, сравнительно",
  //     correctAnswer: "целеустремленный, целенаправленный",
  //   },
  //   {
  //     language: "ger",
  //     word: "auf lösen",
  //     forms: ["löst auf", "löste auf", "hat aufgelöst"],
  //     type: "verb",
  //     variantA: "соответствовать, совпадать, согласовываться",
  //     variantB: "видеть, глядеть",
  //     variantC: "находить решение, решать",
  //     variantD: "разрешать (проблему), распускать",
  //     correctAnswer: "разрешать (проблему), распускать",
  //   },
  //   {
  //     language: "ger",
  //     word: "ergreifen",
  //     forms: ["ergreift", "ergreiff", "hat ergreifen"],
  //     type: "verb",
  //     variantA: "соответствовать, совпадать, согласовываться",
  //     variantB: "брать за что-то, воспользоваться, взять, схватить",
  //     variantC: "находить решение, решать_ приность решение",
  //     variantD: "разрешать (проблему), распускать",
  //     correctAnswer: "разрешать (проблему), распускать",
  //   },
  //   {
  //     language: "ger",
  //     word: "an packen ",
  //     forms: ["packt an", "packte an", "hat angepackt"],
  //     type: "verb",
  //     variantA: "запаковывать, заворачивать",
  //     variantB: "комплектовать, укомплектовывать",
  //     variantC: "хватать, приступать, приниматься",
  //     variantD: "разрешать (проблему), распускать",
  //     correctAnswer: "хватать, приступать, приниматься",
  //   },
  //   {
  //     language: "ger",
  //     word: "an packen",
  //     forms: ["packt an", "packte an", "hat angepackt"],
  //     type: "verb",
  //     variantA: "запаковывать, заворачивать",
  //     variantB: "комплектовать, укомплектовывать",
  //     variantC: "хватать, приступать, приниматься",
  //     variantD: "разрешать (проблему), распускать",
  //     correctAnswer: "хватать, приступать, приниматься",
  //   },
  //   {
  //     language: "ger",
  //     word: "aus bleiben",
  //     forms: ["bleibt aus", "blieb aus", "ist ausgeblieben"],
  //     type: "verb",
  //     variantA: "устаревать, устареть",
  //     variantB: "выйти наружу, проявиться",
  //     variantC: "оставаться, оставлять, оставить",
  //     variantD: "не случиться, отсутствовать, не наступить",
  //     correctAnswer: "не случиться, отсутствовать, не наступить",
  //   },
  //   {
  //     language: "ger",
  //     word: "durch starten",
  //     forms: ["startet durch", "startete durch", "ist durchgestartet"],
  //     type: "verb",
  //     variantA: "начинать действовать, браться за дело",
  //     variantB: "выйти наружу, проявиться",
  //     variantC: "осуществлять, реализировать",
  //     variantD: "случиться, произойти, наступить",
  //     correctAnswer: "начинать действовать, браться за дело",
  //   },
  //

  //   {
  //     language: "ger",
  //     word: "aus suchen",
  //     forms: ["sucht aus", "suchte aus", "hat ausgesucht"],
  //     type: "verb",
  //     variantA: "искать",
  //     variantB: "подходить, прибывать",
  //     variantC: "расстраиваться, вводить в заблуждение",
  //     variantD: "выбирать, отбирать, подыскивать",
  //     correctAnswer: "выбирать, отбирать, подыскивать",
  //   },
  //   {
  //     language: "ger",
  //     word: "handeln UM!",
  //     forms: ["handelt", "handelte", "hat gehandelt"],
  //     type: "verb",
  //     variantA: "вести́ перегово́ры, догова́риваться",
  //     variantB: "общаться, разговаривать",
  //     variantC: "соблюдать, вести себя",
  //     variantD: "сохранять, сберегать",
  //     correctAnswer: "вести́ перегово́ры, догова́риваться",
  //   },
  //   {
  //     language: "ger",
  //     word: "nach rechnen",
  //     forms: ["rechnet nach", "rechnete nach", "hat nachgerechnet"],
  //     type: "verb",
  //     variantA: "учитывать",
  //     variantB: "считать, считаться",
  //     variantC: "пересчитывать",
  //     variantD: "сосчитать",
  //     correctAnswer: "пересчитывать",
  //   },
  //   {
  //     language: "ger",
  //     word: "weiter kommen",
  //     forms: ["kommt weiter", "kam weiter", "ist weitergekommen"],
  //     type: "verb",
  //     variantA: "приходить",
  //     variantB: "двигаться вперёд",
  //     variantC: "переходить к",
  //     variantD: "переходить",
  //     correctAnswer: "двигаться вперёд",
  //   },
  //   {
  //     language: "ger",
  //     word: "ein schränken",
  //     forms: ["schränkt ein", "schränkte ein", " hat eingeschränkt"],
  //     type: "verb",
  //     variantA: "оценивать, назначать цену",
  //     variantB: "сокрощать, ограничивать",
  //     variantC: "ценить, дорожить",
  //     variantD: "жаловаться, злиться",
  //     correctAnswer: "сокрощать, ограничивать",
  //   },
  //   {
  //     language: "ger",
  //     word: "unterschätzen",
  //     forms: ["unterschätzt", "unterschätzte", "hat unterschätzt"],
  //     type: "verb",
  //     variantA: "оценивать, назначать цену",
  //     variantB: "сокрощать, ограничивать",
  //     variantC: "ценить, дорожить",
  //     variantD: "недооценивать, преуменьшать, занижать",
  //     correctAnswer: "недооценивать, преуменьшать, занижать",
  //   },
  //   {
  //     language: "ger",
  //     word: "ein sparen",
  //     forms: ["spart ein", "sparte ein", "hat eingespart"],
  //     type: "verb",
  //     variantA: "экономить деньги, копить",
  //     variantB: "сокрощать, ограничивать",
  //     variantC: "сэкономить что-то (не деньги)",
  //     variantD: "недооценивать, преуменьшать, занижать",
  //     correctAnswer: "сэкономить что-то (не деньги)",
  //   },
  //   {
  //     language: "ger",
  //     word: "an ordnen",
  //     forms: ["ordnet an", "ordnete an ", "hat angeordnet"],
  //     type: "verb",
  //     variantA: "расставлять, упорядочивать, приказывать",
  //     variantB: "выбирать, делать выбор",
  //     variantC: "вляить, оказывать воздействие, оказывать вляиние",
  //     variantD: "заявлять, сообщать, передавать",
  //     correctAnswer: "расставлять, упорядочивать, приказывать",
  //   },
  //   {
  //     language: "ger",
  //     word: "an ordnen",
  //     forms: ["ordnet an", "ordnete an", "hat angeordnet"],
  //     type: "verb",
  //     variantA: "расставлять, упорядочивать, приказывать",
  //     variantB: "выбирать, делать выбор",
  //     variantC: "влиять, оказывать воздействие, оказывать вляиние",
  //     variantD: "заявлять, сообщать, передавать",
  //     correctAnswer: "расставлять, упорядочивать, приказывать",
  //   },
  //   {
  //     language: "ger",
  //     word: "ein·setzen",
  //     forms: ["setzt ein", "setzte ein", "hat eingesetzt"],
  //     type: "verb",
  //     variantA: "расставлять, упорядочивать, приказывать",
  //     variantB: "выбирать, делать выбор",
  //     variantC: "назначать, вставлять, применять",
  //     variantD: "заявлять, сообщать, передавать",
  //     correctAnswer: "назначать, вставлять, применять",
  //   },
  //   {
  //     language: "ger",
  //     word: "vermitteln",
  //     forms: ["vermittelt", "vermittelte", "hat vermittelt"],
  //     type: "verb",
  //     variantA: "сообщать, ознакамливать, передавать",
  //     variantB: "представлять, защищать",
  //     variantC: "назначать, вставлять, применять",
  //     variantD: "обсуждать, договариваться об",
  //     correctAnswer: "сообщать, ознакамливать, передавать",
  //   },
  //   {
  //     language: "ger",
  //     word: "überlasten MIT",
  //     forms: ["überlastet", "überlastete", "hat überlastet"],
  //     type: "verb",
  //     variantA: "сообщать, ознакамливать, передавать",
  //     variantB: "перегружать, заваливать",
  //     variantC: "успокоиться, смириться с",
  //     variantD: "переговорить, отговаривать",
  //     correctAnswer: "перегружать, заваливать",
  //   },
  //   {
  //     language: "ger",
  //     word: "bestimmen",
  //     forms: ["bestimmt", "bestimmte", "hat bestimmt"],
  //     type: "verb",
  //     variantA: "согласовывать, согласовать",
  //     variantB: "быть довольный, удовлетвориться",
  //     variantC: "состоять, включать в себя",
  //     variantD: "определять, устанавливать, назначать",
  //     correctAnswer: "определять, устанавливать, назначать",
  //   },
  //   {
  //     language: "ger",
  //     word: "die Überlast",
  //     forms: ["die Überlasten"],
  //     type: "nomen",
  //     variantA: "перегруз, балласт",
  //     variantB: "волнение, тревога",
  //     variantC: "вознаграждение, компенсация",
  //     variantD: "вдохновление, стремление",
  //     correctAnswer: "перегруз, балласт",
  //   },
  //   {
  //     language: "ger",
  //     word: "die Einsetzung",
  //     forms: ["die Einsetzungen"],
  //     type: "nomen",
  //     variantA: "ремонт, замена",
  //     variantB: "замещение, подмена",
  //     variantC: "вставка, назначение на должность, приминение в действие",
  //     variantD: "вдохновление, стремление",
  //     correctAnswer: "вставка, назначение на должность, приминение в действие",
  //   },
  //   {
  //     language: "ger",
  //     word: "der Aufwand",
  //     forms: [""],
  //     type: "nomen",
  //     variantA: "ремонт, замена",
  //     variantB: "замещение, подмена",
  //     variantC: "расходы, затраты, издержки",
  //     variantD: "намерение, цель, предназначение",
  //     correctAnswer: "расходы, затраты, издержки",
  //   },
  //   {
  //     language: "ger",
  //     word: "die Bestimmung",
  //     forms: ["die Bestimmungen"],
  //     type: "nomen",
  //     variantA: "предписание, предназначение, положение",
  //     variantB: "согласие, подтверждение",
  //     variantC: "вставка, назначение на должность, приминение в действие",
  //     variantD: "голосование, выборы",
  //     correctAnswer: "предписание, предназначение, положение",
  //   },
  //   {
  //     language: "ger",
  //     word: "der Zeitausgleich",
  //     forms: ["die Zeitausgleiche"],
  //     type: "nomen",
  //     variantA: "своевременность",
  //     variantB: "временное согласие",
  //     variantC: "временные полномочие",
  //     variantD: "компенсация в виде времение (отгул)",
  //     correctAnswer: "компенсация в виде времение (отгул)",
  //   },
  //   {
  //     language: "ger",
  //     word: "der Durchhänger",
  //     forms: ["die Durchhänger"],
  //     type: "nomen",
  //     variantA: "стремление, стимул",
  //     variantB: "подавленное настроение, упадок сил",
  //     variantC: "превосходство",
  //     variantD: "осуществление, выполнение",
  //     correctAnswer: "подавленное настроение, упадок сил",
  //   },
  //   {
  //     language: "ger",
  //     word: "die Versuchung",
  //     forms: ["die Versuchungen"],
  //     type: "nomen",
  //     variantA: "стремление, стимул",
  //     variantB: "искушение, искушение, соблазн",
  //     variantC: "поиск, расследование",
  //     variantD: "попытка, проба",
  //     correctAnswer: "искушение, искушение, соблазн",
  //   },
  //   {
  //     language: "ger",
  //     word: "die Vermittlung",
  //     forms: ["die Vermittlungen"],
  //     type: "nomen",
  //     variantA: "стремление, стимул",
  //     variantB: "посредничество, содействие",
  //     variantC: "поиск, расследование",
  //     variantD: "попытка, проба",
  //     correctAnswer: "посредничество, содействие",
  //   },
  //   {
  //     language: "ger",
  //     word: "die Bestimmtheit",
  //     forms: ["-"],
  //     type: "nomen",
  //     variantA: "стремление, стимул",
  //     variantB: "посредничество, содействие, помощь",
  //     variantC: "согласование, согласие, соласованность",
  //     variantD: "определённость, решительность, уверенность",
  //     correctAnswer: "определённость, решительность, уверенность",
  //   },
  //   {
  //     language: "ger",
  //     word: "der Vermittler",
  //     forms: ["die Vermittler"],
  //     type: "nomen",
  //     variantA: "менеджер, торговый представитель",
  //     variantB: "посредник, агент",
  //     variantC: "обвинитель, прокурор",
  //     variantD: "работник офиса, клерк",
  //     correctAnswer: "посредник, агент",
  //   },
  //   {
  //     language: "ger",
  //     word: "der Ausgleich",
  //     forms: ["die Ausgleiche"],
  //     type: "nomen",
  //     variantA: "полномочия, компетенция",
  //     variantB: "посредничество, услуги",
  //     variantC: "уравнивание, компенсация, возмещение",
  //     variantD: "возвращение, возврат",
  //     correctAnswer: "уравнивание, компенсация, возмещение",
  //   },
  //
  //   {
  //     language: "ger",

  //     word: "gelangen",

  //     forms: ["gelangt", "gelangte", "ist gelangt"],

  //     type: "verb",

  //     variantA: "возращаться",

  //     variantB: "добиваться успеха",

  //     variantC: "владеть, обладать",

  //     variantD: "достигать, добираться",

  //     correctAnswer: "достигать, добираться",
  //   },

  //   {
  //     language: "ger",

  //     word: "forschen",

  //     forms: ["forscht", "forschte", "hat geforscht"],

  //     type: "verb",

  //     variantA: "вести, заводить",

  //     variantB: "следовать, просдедовать",

  //     variantC: "изучать, исследовать",

  //     variantD: "исходить из, возникать",

  //     correctAnswer: "изучать, исследовать",
  //   },

  //   {
  //     language: "ger",

  //     word: "errichten",

  //     forms: ["errichtet", "errichtete", "hat errichtet"],

  //     type: "verb",

  //     variantA: "возводить, сооружать",

  //     variantB: "включать, состоять",

  //     variantC: "владеть, обладать",

  //     variantD: "казаться, выглядеть",

  //     correctAnswer: "возводить, сооружать",
  //   },

  //   {
  //     language: "ger",

  //     word: "blühen",

  //     forms: ["blüht", "blühte", "hat geblüht"],

  //     type: "verb",

  //     variantA: "раниться, пораниться",

  //     variantB: "добиваться успеха",

  //     variantC: "развиваться, улучшаться",

  //     variantD: "цвести, процветать",

  //     correctAnswer: "цвести, процветать",
  //   },

  //   {
  //     language: "ger",

  //     word: "tatsächlich",

  //     forms: ["-"],

  //     type: "adv",

  //     variantA: "текущий, настоящий",

  //     variantB: "занятой, занятый",

  //     variantC: "фактический, действительный",

  //     variantD: "своевременный, верный",

  //     correctAnswer: "фактический, действительный",
  //   },

  //   {
  //     language: "ger",

  //     word: "würdig",

  //     forms: ["würdiger", "am würdigsten"],

  //     type: "adj",

  //     variantA: "достойный, уважаемый",

  //     variantB: "странный, необычный",

  //     variantC: "дикий, некультурный",

  //     variantD: "процветающий, успешный, удачный",

  //     correctAnswer: "достойный, уважаемый",
  //   },

  //   {
  //     language: "ger",

  //     word: "verleihen",

  //     forms: ["verleiht", "verlieh", "hat verlieh"],

  //     type: "verb",

  //     variantA: "раниться, пораниться",

  //     variantB: "присуждать, награждать",

  //     variantC: "теряться, заблуждаться",

  //     variantD: "проигрывать, уступать",

  //     correctAnswer: "присуждать, награждать",
  //   },

  //   {
  //     language: "ger",

  //     word: "erstrecken",

  //     forms: ["erstreckt", "erstreckte", "hat erstreckt"],

  //     type: "verb",

  //     variantA: "открывать, обнаруживать",

  //     variantB: "распространяться",

  //     variantC: "теряться, заблуждаться",

  //     variantD: "огораживать, заграждать",

  //     correctAnswer: "распространяться",
  //   },

  //   {
  //     language: "ger",

  //     word: "das Merkmal",

  //     forms: ["die Merkmale"],

  //     type: "nomen",

  //     variantA: "знак, награда",

  //     variantB: "случайность, совпадение",

  //     variantC: "премия, вознаграждение",

  //     variantD: "примета, отличительная черта",

  //     correctAnswer: "примета, отличительная черта",
  //   },

  //   {
  //     language: "ger",

  //     word: "das Aussehen",

  //     forms: ["die Aussehen"],

  //     type: "nomen",

  //     variantA: "внешний вид, наружность",

  //     variantB: "оскорбление, обвинение",

  //     variantC: "ошибка, промах",

  //     variantD: "допущение, предположение",

  //     correctAnswer: "внешний вид, наружность",
  //   },

  //   {
  //     language: "ger",

  //     word: "das Gebiet",

  //     forms: ["die Gebiete"],

  //     type: "nomen",

  //     variantA: "просьба, прощение",

  //     variantB: "область, отрасль, сфера",

  //     variantC: "обида, огорчение, неприятность",

  //     variantD: "допущение, предположение, предлог",

  //     correctAnswer: "область, отрасль, сфера",
  //   },

  //   {
  //     language: "ger",

  //     word: "nieder lassen",

  //     forms: ["lässt nieder", "ließ nieder", "hat niedergelassen"],

  //     type: "verb",

  //     variantA: "обосноваться, садиться",

  //     variantB: "терять, пропускать",

  //     variantC: "теряться, заблуждаться",

  //     variantD: "отказывать, запрещать",

  //     correctAnswer: "обосноваться, садиться",
  //   },

  //   {
  //     language: "ger",

  //     word: "winzig",

  //     forms: ["winziger", "am winzigsten"],

  //     type: "adj",

  //     variantA: "достойный, уважаемый",

  //     variantB: "странный, необычный",

  //     variantC: "крохотный, миниатюрный",

  //     variantD: "процветающий, успешный, удачный",

  //     correctAnswer: "крохотный, миниатюрный",
  //   },

  //   {
  //     language: "ger",

  //     word: "der Lebensunterhalt",

  //     forms: ["die Lebensunterhalt"],

  //     type: "nomen",

  //     variantA: "содержание, воспитание",

  //     variantB: "средство к жизни",

  //     variantC: "жизненное решение",

  //     variantD: "жизнеобеспечение",

  //     correctAnswer: "средство к жизни",
  //   },
];

export default GermanWordsTest;

// die Einstellung
// Einstellung · Einstellungen

// Русский отношение к чему-то, установка, настройка

// die Erholung
// Erholung · -

// Русский отдых, Возврат, о́тдых, переды́шка,

// der Erholungsaufenthalt
// Erholungsaufenthalt(e)s · Erholungsaufenthalte

// Русский курортный отдых, оздоровительный отдых,

// die Fachkenntnis
// Fachkenntnis · Fachkenntnisse⁰

// Русский зна́ние предме́та, специа́льные зна́ния

// das Fach
// Fach(e)s · Fächer

// Русский отрасль, часть, полка, предмет, специальность,

// die Fachkraft
// Fachkraft · Fachkräfte

// Русский специалист, специали́ст,квалифици́рованный рабо́тник

// der Rechtsanspruch
// Rechtsanspruch(e)s · Rechtsansprüche

// Русский законное притязание, правово́е притяза́ние

// die Verjährung
// Verjährung · Verjährungen

// Русский давность, да́вность

// die Verjährungsfrist
// Verjährungsfrist · Verjährungsfristen

// Русский срок да́вности

// das Auskommen
// Auskommens · -

// Русский средства к существованию, жить совместно, возникнове́ние, дохо́д,

// ein·stellen
// stellt ein · stellte ein · hat eingestellt

// Русский принять на работу, нанимать, настроить, настроиться,

// angewiesen sein AUF

// ist · war · ist gewesen

// Русский быть зависимым от

// verjähren
// verjährt · verjährte · ist verjährt

// Русский терять, срок исковой давности

// aus·kommen
// kommt/kömmt⁷ aus · kam aus · ist ausgekommen

// ⁷ Устаревшее

// Русский обходиться, ладить, находить общий язык

// verjährt устративший силу из-за давности

// einstellig
// einstellig · - · -

// Русский однозначный, одноразрядный

// einstellbar регулируемый

// konfliktär
// konfliktär · - · -

// Русский противоречивый, конфликтный

// angewiesen
// angewiesen · - · -

// Русский зависящий

// konfliktfähig   конфликтный

// konfliktfrei
// konfliktfrei

// erholungsbedürftig  нуждающийся в отдыхе

// erholsam
// erholsam · erholsamer · am erholsamsten

// Русский расслабляющий

// fachkundig
// fachkundig · fachkundiger · am fachkundigsten

// Русский квалифицированный, профессиональный, компетентный

//
