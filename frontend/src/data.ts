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
      word: 'die Arbeitsvergütung',
      translate: 'оплата труда'
    },
    {
      word: 'vergüten',
      translate: 'возмещать, оплачивать'
    }
  ],
    sentences: [
      "Er verlangt umgehende Vergütung",
      "Für diese Arbeit gibt es keine Vergütung",
      "Du kriegst 10 % von dem, was ich kriege plus Vergütung der Studiozeit",
      'Wir müssen über meine Vergütung sprechen',
      'Und was jetzt die Vergütung betrifft...'
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
      'Eine Buchmesse informiert über den jeweiligen Buchmarkt',
      'Bevor etwas passiert, müssen wir natürlich unsere jeweiligen Regierungen konsultieren.'
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
      word: 'mit fühlen MIT',
      translate: 'сопереживать, сострадать'
    },
    {
      word: 'das Mitfühlen',
      translate: 'сопереживание, сострадание'
    }
  ],
    sentences: [
      "Ich fühle mit euch mit",
      "Er fühlte mit ihr mit , als sie sich der Prüfung stellen musste.",
      "Der Film ist richtig gut gemacht, ein Film, bei dem man mit dem Helden mitfiebern und mitfühlen kann",
      'Es war, als ob ich alles, was Sie erlebten, mitfühlen konnte.',
      'Da können Sie nicht mit allen mitfühlen und nichts tun.'
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
      word: 'das Ablenkungsmanöver',
      translate: 'отвлекающий маневр'
    },
    {
      word: 'die Ablenkung',
      translate: 'отвлечение'
    }
  ],
    sentences: [
      "Ich war abgelenkt",
      "Du bist echt leicht abzulenken",
      "Ich werde versuchen, ihn abzulenken",
      'Bitte lenkt mich nicht von meiner Arbeit ab',
      'Vielleicht können wir die anderen auch ablenken.'
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
      word: 'das Vorkommen',
      translate: 'месторождение, залежь'
    },
  ],
    sentences: [
      "Aber ich verspreche dir, das wird nicht mehr vorkommen.",
      "Rufen Sie mich an, sollte es noch mal vorkommen...",
      "Es kann vorkommen, dass Feinde gemeinsame Interessen haben",
      'Was kommt vor ?',
      'Das kann manchmal vorkommen.',
      'Das ist schon vorgekommen.'
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
    cognate_words: [
  ],
    sentences: [
      "Mit manchen Entscheidungen kann man sich abfinden bis zum nächsten Tageslicht.",
      "Romeo liebte Julia mehr, als er sich dessen bewusst war, und er konnte sich nicht mit dem Gedanken abfinden, sie verloren zu haben.",
      "Aber du konntest dich nicht einfach abfinden.",
      'Du musst dich einfach damit abfinden',
      'Ich habe mich schon vor langem damit abgefunden'
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
        word: 'die Entspannung',
        translate: 'расслабление, отдых'
      },
    ],
    sentences: [
      'Ich entspanne mich',
      'Die Atmosphäre entspannte sich',
      'Er entspannt sich zu Hause',
      'Versuchen Sie, sich zu entspannen, konzentrieren Sie sich auf Ihre Atmung',
      'Wie gesagt, ich möchte nur entspannen'
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
    cognate_words: [
    ],
      sentences: [
        "Die sozialen Gepflogenheiten variieren von Land zu Land",
        "Die gesellschaftlichen Gepflogenheiten formen unser Verhalten",
        "Ich kenne die örtlichen Gepflogenheiten nicht",
        'Parties gehören nicht zu meinen Gepflogenheiten',
        'Das liegt daran, dass wir nach dem Zweiten Weltkrieg unsere landwirtschaftlichen Gepflogenheiten geändert haben.'
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
    cognate_words: [
    ],
      sentences: [
        "Man gewöhnt sich daran",
        "Langsam gewöhne ich mich daran",
        "An alles Gute auf dieser Welt muss man sich gewöhnen",
        'Katrina hatte kaum Zeit, sich an unsere Welt zu gewöhnen.',
        'Du wärst überrascht, woran man sich gewöhnen kann, Caitlin'
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
        word: 'ab stehen',
        translate: 'дистанцироваться, торчать, отказываеться'
      },
    ],
    sentences: [
      'Er hat von der Politik Abstand genommen',
      'Alle müssen Abstand zueinander halten',
      'Ich denke, das ist ein guter Abstand',
      'Los geht"s, fünf Meter Abstand',
      'Halte Abstand und melde dich alle 15 Minuten'
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
        word: 'die Einhaltung',
        translate: 'соблюдение'
      },
    ],
    sentences: [
      'Verträge sind einzuhalten',
      'Wir sind zuversichtlich, diesem Monat den Zahlungsplan einhalten zu können',
      'Ja, aber ich muss die Abmachung einhalten',
      'Ich habe meine Versprechen immer eingehalten',
      'Ich bin mir nicht sicher, ob ich dieses Versprechen einhalten kann, so, wie Du angezogen bist'
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
    cognate_words: [
    ],
      sentences: [
        "Du musst mich unverzüglich anrufen",
        "Die Krankmeldung beim Arbeitgeber ist unverzüglich vorzunehmen",
        "Also entschied er, sich unverzüglich auf die Reise zu begeben",
        'Wir müssen die Stadt unverzüglich verlassen',
        'Das Urteil soll unverzüglich vollstreckt werden'
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
        word: 'vorrangig',
        translate: 'первостепенный, приоритетный'
      },
      {
        word: 'die Vorrangigkeit',
        translate: 'Приоритет'
      },
    ],
    sentences: [
      'Ich gebe meiner Gesundheit den Vorrang',
      'Das ist sehr wichtig und hat Vorrang , vor allem anderen',
      'Wenn das Gesetz nicht gerecht ist, hat die Gerechtigkeit Vorrang vor dem Gesetz.',
      'Ich dachte er hätte keinen Vorrang für dich',
      'Entschuldigung, aber das hier hat Vorrang'
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
        word: 'die Erholung',
        translate: 'отдых, передышка'
      },
      {
        word: 'erholsam',
        translate: 'расслабляющий'
      },
    ],
    sentences: [
      'Er erholte sich',
      'Du hast dich gut erholt',
      'Du musst dich jetzt nur noch erholen',
      'Ich glaube, sie wird sich vollständig erholen',
      'Ich wusste, es wird schlimm, aber davon werde ich mich nie erholen.'
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
            word: 'die Einsparungsmaßnahme',
            translate: 'экономическая мера, мероприятие по сокращению расходов'
          },
          {
            word: 'ein sparen',
            translate: 'сэкономить, экономить'
          },
        ],
        sentences: [
          'Ich war Einsparung bis zu einen Hamster kaufen',
          'Die Menschen in Griechenland können keine weiteren Einsparungen mehr vertragen',
          'So forciert der Staat durch die Einsparung bei den öffentlichen Bibliotheken eine Indolenz seiner Bürger',
          'In den meisten deutschen Haushalten ist die Einsparung von viel Energie und somit von viel Geld mit wenig Aufwand möglich',
          'Angesichts der beabsichtigten Einsparungen regte sich Widerspruch im Betriebsrat'
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
        cognate_words: [
        ],
          sentences: [
            "Der Verstand ist das nächstliegende Werkzeug, mit dem der Mensch rechnen kann",
            "Bitte begeben Sie sich zum nächstliegenden Ausgang.",
            "Also lass uns ein wenig plaudern, darüber, wo das nächstliegende Rebellencamp ist.",
            'Er müsste uns auf der nãchstliegenden Etage rauslassen',
            'Der nächstliegende Ort, an dem wir eben angehalten haben?'
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
            word: 'die Einsetzung',
            translate: 'ввод, назначение'
          },
          {
            word: 'ein setzen',
            translate: 'установить, вставить, применить'
          },
        ],
        sentences: [
          'Ziel ist der allseits einsetzbare Handwerker',
          'Ist das für dich einsetzbar',
          'Es mag auch sein, dass der Trenchcoat ein Klassiker ist, der, wenn man ihn tragen kann, ein überall einsetzbares Kleidungsstück ist',
          'Wir beginnen mit der Behandlung, sobald sie einsetzbar ist.',
          'Hättest du das getan, wüsstest du, dass er nur befristet einsetzbar ist'
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
            word: 'die Gegenseitigkeit',
            translate: 'взаимность'
          },
        ],
        sentences: [
          'Freundschaft erfordert gegenseitiges Vertraue',
          'Wir stellten uns gegenseitig vor',
          'Gegenseitiges Verständnis hilft, Gegensätze zu überwinden',
          'Wir sollten versuchen, uns gegenseitig zu verstehen',
          'Ich denke, wir können uns gegenseitig helfen.'
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
            word: 'die Anspruchslosigkeit',
            translate: 'неприхотливость'
          },
          {
            word: 'der Anspruch',
            translate: 'претензия, требование, притязание'
          },
        ],
        sentences: [
          'Du bist lieb und ehrlich und offen, und dabei völlig anspruchslos.',
          'Ich glaube, Sie suchen den Begriff "anspruchslos"',
          'Weil du zu anspruchslos bist.',
          'Azaleen sind anspruchslose Zimmerpflanzen',
          'Tom lebt anspruchslos und bescheiden.'
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
            word: 'vermitteln',
            translate: 'сообщать, ознакамливать, передавать'
          },
          {
            word: 'vermittels',
            translate: 'посредством, при помощи'
          },
          {
            word: 'die Vermittlung',
            translate: 'посредничество, содействие'
          },
        ],
        sentences: [
          'Außerdem bin ich unglaublich gut vermittelbar',
          'Hoffer geht davon aus, dass die Wirklichkeit nicht durch Sprache vermittelbar ist',
          'Das macht ihn besser vermittelbar',
          'So wie die Dinge stehen, wird die Wahl des einen Kandidaten wohl leichter vermittelbar sein als die andere',
          'Und wenn wie hier die Arbeitslosigkeit insbesondere unter Jugendlichen hoch ist, steigt die Gefahr, dass diese langfristig nicht mehr vermittelbar sind'
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
        cognate_words: [
          
        ],
        sentences: [
          'Was ist hinterher passiert?',
          'Der Dieb lief weg und der Polizist hinterher',
          'Er aß zwei Spiegeleier und hinterher noch ein Müsli',
          'Das schwierigste ist, hinterher alles aufzuwischen',
          'Ich war gestern auch da und sah was hinterher passierte.'
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
        cognate_words: [
          
        ],
        sentences: [
          'Ich wollte es nur im Vornherein klarstellen.',
          'Sie müssen die Banken im vornherein ausspionieren',
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
            word: 'der Ehrgeiz',
            translate: 'тщеславие, честолюбие, самолю́бие'
          },
          {
            word: 'der Ehrgeizling',
            translate: 'карьерист'
          },
        ],
        sentences: [
          'Das ist ein ehrgeiziges , aber realistisches Ziel.',
          'Er ist ehrgeizig',
          'Tom war nie ehrgeizig',
          'Wie schlau du bist, wie toll, wie witzig, wie ehrgeizig',
          'Ich bin genauso ehrgeizig wie Sie.'
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
        cognate_words: [
          
        ],
        sentences: [
          'Nicht näher bestimmbarer Fehler in der E-Mail-Adresse',
          'Es geht tatsächlich um eine zeitlich sehr genau bestimmbare Sache.',
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
            cognate_words: [
          
            ],
            sentences: [
              'Sansa Stark ist eine bessere Belohnung als du je erhoffen konntest.',
              'Einen neuen Planeten aufzunehmen, ist die schönste Aufgabe, die sich ein Admiral erhoffen kann.',
              'Das Beste, was du dir erhoffen kannst, ist, dass er ein Albtraum ist.',
              'Tom erhoffte sich einen Kuss',
              'Was hast du dir zu sehen erhofft',
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
                word: 'das Erleben',
                translate: 'опыт, испытание'
              },
              {
                word: 'der Erlebensfall',
                translate: 'жизненный случай'
              },
            ],
            sentences: [
              'Dabei erleben sie Abenteuer',
              'Ich möchte keine weiteren Überraschungen erleben',
              'Ich habe schon sehr viel erlebt',
              'Zu schade, dass Sie das nicht erleben werden.',
              'Aber selbst wenn die Dämonen gewinnen, du wirst es nicht mehr erleben'
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
                word: 'erwähnenswert',
                translate: 'достойный упоминания, заслуживающий внимание'
              },
            ],
            sentences: [
              'Ich wusste, dass ich vergessen hatte, etwas zu erwähnen...',
              'Ich werde nicht erwähnen, dass wir gesprochen haben.',
              'Ich sollte das mit der Nacht erwähnen...',
              'Da gibt es etwas, das ich vergessen habe zu erwähnen.',
              'Gut, dass Sie sie erwähnen.'
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
                word: 'die Faszination',
                translate: 'обаяние, восхище́ние'
              },
              {
                word: 'das Faszinosum',
                translate: 'очарование, привлекательность'
              },
            ],
            sentences: [
              'Mathematik fasziniert mich',
              'Bücher faszinieren mich',
              'Ich bin von Katzen fasziniert',
              'Die Geschichten über das schnellere Leben faszinieren sie.',
              'Ich gebe zu, Sie faszinieren mich'
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
            cognate_words: [
          
            ],
            sentences: [
              'Wir möchten Sie nicht scheitern sehen, Eldritch',
              'Eine Gruppe ohne Einsatzbereitschaft wird scheitern.',
              'Diese Übung sollte Sie scheitern lassen.',
              'Es macht nichts, wenn Sie scheitern.',
              
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
                word: 'spürbar',
                translate: 'заметный, чувствительный'
              },
            ],
            sentences: [
              'Ich kann einfach spüren, dass Sie etwas bedrückt',
              'Wir nahmen Drogen, um nichts zu spüren',
              'Ich kann seine Kraft noch spüren.',
              'Ich denke, ich beginne etwas zu spüren',
              'Spürst du es?'
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
            cognate_words: [
            ],
            sentences: [
              'Möchtest du, dass ich mich für dich umhöre?',
              'Ich habe mich nach Tom umgehört',
              'Ja, ich werde mich mal umhören',
              'Vielleicht sollt ich doch nach Denver fahren und mich umhören.',
              'Kann er sich nicht mal umhören?'
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
            cognate_words: [
            ],
            sentences: [
              'Booth sagt, dass wir vorankommen müssen',
              'Wir alle müssen vorankommen, Will.',
              'Und ich dachte, wir würden vorankommen!',
              'Wir kamen rasch voran',
              'Nicht alle guten Menschen werden vorankommen'
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
                word: 'die Zwinge',
                translate: 'тиски'
              },
            ],
            sentences: [
              'Ich werde dazu gezwungen',
              'Ich zwinge sie nicht',
              'Warum zwingst du mich dazu?',
              'Ihr könnt mich zwingen, zu bleiben...',
              'Eigentlich wollte ich dich zwingen deinen Bruder zu töten.'
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
                word: 'die Frustration',
                translate: 'раздражение, чувство неудовлетворённости'
              },
            ],
            sentences: [
              'Sie wurden schön langsam frustriert',
              'Du bist über deine Arbeit frustriert',
              'Warum sollte mich das frustrieren?',
              'Ich weiß, und es tut mir leid, Sie zu frustrieren.',
              'Ich sah keinen Grund, Sie zu frustrieren...'
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
                    word: 'angelegentlich',
                    translate: 'время от времени, по случаю'
                  },
                ],
                sentences: [
                  'Stecke deine Nase nicht in fremde Angelegenheiten',
                  'Wir diskutierten die Angelegenheit',
                  'Das ist eine abgeschlossene Angelegenheit',
                  'Die Angelegenheit erfordert einen kühlen Kopf.',
                  'Was Sie damit machen ist Ihre Angelegenheit.'
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
                    word: 'berechtigen',
                    translate: 'давать право, давать основание'
                  },
                  {
                    word: 'die Berechtigung',
                    translate: 'право, обоснованность'
                  },
                  {
                    word: 'berechtigterweise',
                    translate: 'обоснованно, справедливо'
                  },
                ],
                sentences: [
                  'Das ist berechtigt',
                  'Das ist eine berechtigte Frage',
                  'Ich akzeptiere Kritik, wenn sie berechtigt ist',
                  'Es gibt keinen berechtigten Grund für dich, so zu denken.',
                  'Nur Klubmitglieder sind berechtigt, diesen Raum zu nutzen.'
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
                    word: 'auswertbar',
                    translate: 'поддающийся анализу'
                  },
                  {
                    word: 'die Auswertbarkeit',
                    translate: 'анализируемость, оцениваемость'
                  },
                  {
                    word: 'die Auswertung',
                    translate: 'анализ, оценка'
                  },
                ],
                sentences: [
                  'Kannst du die Statistik auswerten ?',
                  'Wir haben die Umfrage ausgewertet',
                  'Er wertet das Experiment noch aus',
                  'Bevor wir also noch einen Schritt gehen, lass mich das Angebot auswerten.',
                  'Als du mir gesagt hast, du hättest zuerst meine Ideen auswerten sollen, da hast du nicht gesagt, dass sie gut seien.'
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
                cognate_words: [
                  
                ],
                sentences: [
                  'Keiner nimmt uns ernst',
                  'Ich nehme meine Arbeit ernst',
                  'Tom nimmt sein Studium nicht ernst',
                  'Ich glaube nicht, dass Sie das wirklich ernstnehmen.',
                  'Wenn ich ihm gegenüber Ihren Namen erwähne, wird er mich nicht ernstnehmen.'
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
                    word: 'der Beleg',
                    translate: 'свидетельство, доказательство'
                  },
                ],
                sentences: [
                  'Er belegte leider nur den vierten Platz.',
                  'Alle Zimmer sind belegt',
                  'Er hat seinen Anspruch nicht belegt',
                  'Und deshalb müssen wir jetzt ein paar stichhaltige Beweise finden, um es zu belegen.',
                  'Also brauchten wir Theorien über diese Ziele, die wir belegen oder widerlegen konnten.'
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
                    word: 'annehmbar',
                    translate: 'приемлимый, допустимый'
                  },
                  {
                    word: 'annehmlich',
                    translate: 'удобный'
                  },
                  {
                    word: 'die Annehmlichkeit',
                    translate: 'удобства'
                  },
                  {
                    word: 'die Annahme',
                    translate: 'предположение, допущение'
                  },
                ],
                sentences: [
                  'Deine Entschuldigung ist angenommen',
                  'Wir nehmen kein Trinkgeld an',
                  'Wir können nur annehmen, dass sie hinter dem Angriff stecken.',
                  'In Ordnung, lass uns annehmen, dass wir die Handschellen aufbekommen.',
                  'Ich muss annehmen, dass Sie hier sind, weil Sie wieder zurück wollen.'
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
                cognate_words: [
                  
                ],
                sentences: [
                  'Im Notfall kann das Schiff bis zu 500 Personen aufnehmen',
                  'Antoine hat einen Cousin, der uns aufnehmen würde',
                  'Der Kellner nimmt die Bestellung auf',
                  'Der Bus hielt, um Fahrgäste aufzunehmen',
                  'Ich habe einen Kredit aufgenommen '
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
                    word: 'das Benehmen',
                    translate: 'поведение'
                  },
                 
                ],
                sentences: [
                  'Versuchen wir doch, uns wie Erwachsene zu benehmen',
                  'Ich will mich auch nicht ständig wie ein Pennäler benehmen.',
                  'Ich muss mich wie immer benehmen',
                  'Ich frag nur, weil sich die Frauen komisch benehmen',
                  'Sie benehmen sich nicht wie Männer in einer Führungsposition.'
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
                    word: 'benehmen sich',
                    translate: 'вести себя'
                  },
                 
                ],
                sentences: [
                  'Ich entschuldige mich für mein schlechtes Benehmen vorhin.',
                  'Es kommt Ihnen wohl komisch vor, aber es ist kein militärisches Benehmen.',
                  'Fünf Monate, und man kriegt nicht mal Urlaub für gutes Benehmen.',
                  'Ich missbillige sein Benehmen',
                  'Dein Benehmen ist unerträglich.'
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
                    word: 'zerbrechlich',
                    translate: 'хрупкий, ломкий'
                  },
                 
                ],
                sentences: [
                  'Mein Spielzeug ist zerbrochen',
                  'Es ist eine Sache eher zerbrochen als gebaut.',
                  'Keiner von denen wird uns zerbrechen',
                  'Ich könnte dich ganz leicht zerbrechen.',
                  'Einige Tasten des Klaviers sind zerbrochen '
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
                    cognate_words: [

                     
                    ],
                    sentences: [
                      'Ich kann meinen Traum nicht wiedergeben',
                      'Das neue Radio kann die Musik besser wiedergeben als das alte',
                      'Unglaublich, dass Sie mir meinen Job wiedergeben.',
                      'Sie werden mir mein altes Leben nicht wiedergeben.',
                      'Ich werde ihm die Bücher wiedergeben'
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
                        word: 'auffallend',
                        translate: 'бросающийся в глаза, заметный'
                      },
                     
                    ],
                    sentences: [
                      'Es ist allen aufgefallen',
                      'Das fiel mir auch auf ',
                      'Wenn du nicht auffallen möchtest, versteh ich das',
                      'Ich meine, wir werden auffallen.',
                      'Alles klar? Deiner Frau wird ein kleiner Anruf nicht auffallen. '
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
                        word: 'der Anfall',
                        translate: 'припадок, нападе́ние'
                      },
                     
                    ],
                    sentences: [
                      'Komm, ich werde dich schon nicht anfallen, guck es dir einfach an.',
                      'Fünf Dollar werden nicht mal deine Zinsen bezahlen, die dir anfallen. ',
                      'Und es wird eine monatliche Hausgebühr anfallen.',
                      
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
                        word: 'der Einfall',
                        translate: 'иде́я, внеза́пная мысль'
                      },
                      {
                        word: 'einfallslos',
                        translate: 'безидейный'
                      },
                      {
                        word: 'die Einfallslosigkeit',
                        translate: 'безидейность'
                      },
                      {
                        word: 'einfallsreich',
                        translate: 'находчивый'
                      },
                     
                    ],
                    sentences: [
                      'Es wird gleich einfallen',
                      'Ich denke uns wird da schon etwas einfallen.',
                      'Da fiel ihnen Tom ein',
                      'Fällt dir was dazu ein',
                      'Mir fällt die Geheimzahl nicht ein',
                      
                    ],
                  },
                //   {
                //     language: "ger",
                //     word: "an schließen",
                //     forms: ["schließt an", "schloss an", "hat angeschlossen"],
                //     type: "verb",
                //     variantA: "передавать, передать",
                //     variantB: "закрывать, прикрывать",
                //     variantC: "присоеденять, подключать",
                //     variantD: "отключать, отсоединять",
                //     correctAnswer: "присоеденять, подключать",
                //   },
                //   {
                //     language: "ger",
                //     word: "entdecken",
                //     forms: ["entdeckt", "entdeckte", "hat entdeckt"],
                //     type: "verb",
                //     variantA: "обнаруживать, обнаружить",
                //     variantB: "закрывать, прикрывать",
                //     variantC: "накрывать, накрыть",
                //     variantD: "изучать, исследовать",
                //     correctAnswer: "обнаруживать, обнаружить",
                //   },
                //   {
                //     language: "ger",
                //     word: "bereuen",
                //     forms: ["bereut", "bereute", "hat bereut"],
                //     type: "verb",
                //     variantA: "печалиться, горевать",
                //     variantB: "сожалеть, жалеть",
                //     variantC: "обнаруживать, открывать",
                //     variantD: "заботиться, беспокоиться",
                //     correctAnswer: "сожалеть, жалеть",
                //   },
                //   {
                //     language: "ger",
                //     word: "beseitigen",
                //     forms: ["beseitigt", "beseitigt", "hat beseitigt"],
                //     type: "verb",
                //     variantA: "владеть, овладевать",
                //     variantB: "занимать место, быть занятым",
                //     variantC: "обнаруживать, открывать",
                //     variantD: "устранять, исправлять, удалить",
                //     correctAnswer: "устранять, исправлять, удалить",
                //   },
                //   {
                //     language: "ger",
                //     word: "bewerten",
                //     forms: ["bewertet", "bewertete", "hat bewertet"],
                //     type: "verb",
                //     variantA: "рекламировать что-то",
                //     variantB: "занимать место, быть занятым",
                //     variantC: "оценивать, расценивать, исчислять стоимость",
                //     variantD: "жаловаться, обжаловать",
                //     correctAnswer: "оценивать, расценивать, исчислять стоимость",
                //   },
                //   {
                //     language: "ger",
                //     word: "erwerben",
                //     forms: ["erwirbt", "erwarb", "hat erworben"],
                //     type: "verb",
                //     variantA: "узнавать, обнаруживать",
                //     variantB: "приобретать, зарабатывать",
                //     variantC: "оценивать, расценивать, исчислять стоимость",
                //     variantD: "жаловаться, обжаловать",
                //     correctAnswer: "приобретать, зарабатывать",
                //   },

//   {
//     language: "ger",
//     word: "der Verband",
//     forms: ["die Verbände"],
//     type: "nomen",
//     variantA: "объединение, повязка",
//     variantB: "уточнение",
//     variantC: "выполнение, поручение",
//     variantD: "одобрение, подготовка",
//     correctAnswer: "объединение, повязка",
//   },
//   {
//     language: "ger",
//     word: "die Ausstellung",
//     forms: ["die Ausstellungen"],
//     type: "nomen",
//     variantA: "представление",
//     variantB: "объявление",
//     variantC: "выставка",
//     variantD: "поручение",
//     correctAnswer: "выставка",
//   },
//   {
//     language: "ger",
//     word: "aus denken SICH",
//     forms: ["denkt aus", "dachte aus", "hat ausgedacht"],
//     type: "verb",
//     variantA: "передумать",
//     variantB: "выдумывать, придумывать",
//     variantC: "усматривать, рассматривать",
//     variantD: "заявлять, ходатайствовать",
//     correctAnswer: "выдумывать, придумывать",
//   },
//   {
//     language: "ger",
//     word: "befürchten",
//     forms: ["befürchtet", "befürchtete", "hat befürchtet"],
//     type: "verb",
//     variantA: "игнорировать, незамечать",
//     variantB: "выдумывать, придумывать",
//     variantC: "усматривать, рассматривать",
//     variantD: "опасаться, бояться",
//     correctAnswer: "опасаться, бояться",
//   },
//   {
//     language: "ger",
//     word: "bei·tragen",
//     forms: ["trägt bei", "trug bei", "hat beigetragen"],
//     type: "verb",
//     variantA: "использовать, пользоваться",
//     variantB: "вносить вклад, содействовать",
//     variantC: "высчитывать, исчислять",
//     variantD: "рассчитывать, надеяться",
//     correctAnswer: "вносить вклад, содействовать",
//   },
//   {
//     language: "ger",
//     word: "instand setzen",
//     forms: ["setzt instand", "setzte instand", "hat instandgesetzt"],
//     type: "verb",
//     variantA: "ремонтировать, приводить в порядок",
//     variantB: "углубляться, вдаваться в детали",
//     variantC: "достигать, двигаться",
//     variantD: "служить, прислуживать",
//     correctAnswer: "ремонтировать, приводить в порядок",
//   },
//   {
//     language: "ger",
//     word: "verfügen",
//     forms: ["verfügt", "verfügte", "hat verfügt"],
//     type: "verb",
//     variantA: "употреблять, применять",
//     variantB: "менять, обменивать",
//     variantC: "постигать, настичь",
//     variantD: "располагать, обладать",
//     correctAnswer: "располагать, обладать",
//   },
//   {
//     language: "ger",
//     word: "auf·bewahren",
//     forms: ["bewahrt auf", "bewahrte auf", "hat aufbewahrt"],
//     type: "verb",
//     variantA: "охранять, оберегать",
//     variantB: "хранить, иметь на хранение",
//     variantC: "остерегаться, бояться",
//     variantD: "надеяться, вверовать",
//     correctAnswer: "хранить, иметь на хранение",
//   },
//   {
//     language: "ger",
//     word: "betreffen",
//     forms: ["betrifft", "betraf", "hat betroffen"],
//     type: "verb",
//     variantA: "воодушевлять, мотивировать",
//     variantB: "понимать, постигать",
//     variantC: "встречаться, встретиться",
//     variantD: "иметь отношение, затрагивать",
//     correctAnswer: "иметь отношение, затрагивать",
//   },
//   {
//     language: "ger",
//     word: "beziehen SICH AUF",
//     forms: ["bezieht ", "bezog ", "hat bezogen"],
//     type: "verb",
//     variantA: "воспитывать, испытывать",
//     variantB: "бронировать, заказывать",
//     variantC: "граничить, соседствовать",
//     variantD: "иметь в виду, получать",
//     correctAnswer: "иметь в виду, получать",
//   },
//   {
//     language: "ger",
//     word: "die Mitteilung",
//     forms: ["die Mitteilungen"],
//     type: "nomen",
//     variantA: "сообщение, извищение",
//     variantB: "объявление, оглошение",
//     variantC: "заявление",
//     variantD: "пояснение, объяснительная",
//     correctAnswer: "сообщение, извищение",
//   },
//   {
//     language: "ger",
//     word: "betrachten",
//     forms: ["betrachtet ", "betrachtete ", "hat betrachtet"],
//     type: "verb",
//     variantA: "склоняться, полагать",
//     variantB: "испугаться, бояться",
//     variantC: "рассматривать, смотреть",
//     variantD: "разрушать, ломать",
//     correctAnswer: "рассматривать, смотреть",
//   },
//   {
//     language: "ger",
//     word: "der Anhang",
//     forms: ["die Anhänge"],
//     type: "nomen",
//     variantA: "приказ, распоряжение",
//     variantB: "объявление, оглошение",
//     variantC: "приложение, дополнение",
//     variantD: "заявление, заявка",
//     correctAnswer: "приложение, дополнение",
//   },
//   {
//     language: "ger",
//     word: "die Zuständigkeit",
//     forms: ["die Zuständigkeiten"],
//     type: "nomen",
//     variantA: "дополнение, добавление",
//     variantB: "управление, администрация, ",
//     variantC: "ответсвенность, обязательства",
//     variantD: "компетенция, круг полномочий",
//     correctAnswer: "компетенция, круг полномочий",
//   },
//   {
//     language: "ger",
//     word: "der Schalter",
//     forms: ["die Schalter"],
//     type: "nomen",
//     variantA: "свидетель, очевидец",
//     variantB: "переключатель, стойка",
//     variantC: "актер, артист",
//     variantD: "обвинитель, прокурор",
//     correctAnswer: "переключатель, стойка",
//   },
//   {
//     language: "ger",
//     word: "die Bezeichnung",
//     forms: ["die Bezeichnungen"],
//     type: "nomen",
//     variantA: "уточнение, дополнение",
//     variantB: "управление, администрация",
//     variantC: "наименование, название",
//     variantD: "оплата, уплата",
//     correctAnswer: "наименование, название",
//   },
//   {
//     language: "ger",
//     word: "verlaufen",
//     forms: ["verläuft ", "verlief", "hat verlaufen"],
//     type: "verb",
//     variantA: "склоняться, полагать",
//     variantB: "заблуждаться, теряться",
//     variantC: "находить, обнаруживать",
//     variantD: "оставлять, приостанавливать",
//     correctAnswer: "заблуждаться, теряться",
//   },
//   {
//     language: "ger",
//     word: "der Rohstoff",
//     forms: ["die Rohstoffe"],
//     type: "nomen",
//     variantA: "ткань",
//     variantB: "кастрюля, кувшин",
//     variantC: "добыча, доход",
//     variantD: "сырье, материал",
//     correctAnswer: "сырье, материал",
//   },
//   {
//     language: "ger",
//     word: "das Kennzeichen",
//     forms: ["die Kennzeichen"],
//     type: "nomen",
//     variantA: "показатель, уровень",
//     variantB: "условие, причина",
//     variantC: "черта, регистрационный номер",
//     variantD: "обозначение, пометка",
//     correctAnswer: "черта, регистрационный номер",
//   },
//   {
//     language: "ger",
//     word: "der Gegenstand",
//     forms: ["die Gegenstände"],
//     type: "nomen",
//     variantA: "объект, предмет",
//     variantB: "случай, случайность",
//     variantC: "противоположность, противопоставление",
//     variantD: "обозначение, метка",
//     correctAnswer: "объект, предмет",
//   },
//   {
//     language: "ger",
//     word: "weiter·leiten",
//     forms: ["leitet weiter", "leitete weiter", "hat weitergeleitet"],
//     type: "verb",
//     variantA: "обучать, руководить",
//     variantB: "заблуждаться, теряться",
//     variantC: "передавать, перенаправлять",
//     variantD: "перемищаться, передвигаться",
//     correctAnswer: "передавать, перенаправлять",
//   },
//   {
//     language: "ger",
//     word: "verhandeln MIT",
//     forms: ["leitet weiter", "leitete weiter", "hat weitergeleitet"],
//     type: "verb",
//     variantA: "договориваться",
//     variantB: "уступать, теряться преимущество",
//     variantC: "относиться, иметь отношение",
//     variantD: "задумывать, выдвигать идею",
//     correctAnswer: "договориваться",
//   },
//   {
//     language: "ger",
//     word: "ab·wechseln SICH",
//     forms: ["wechselt ab", "wechselte ab", "hat abgewechselt"],
//     type: "verb",
//     variantA: "испытывать, ощущать",
//     variantB: "переходить, проходить",
//     variantC: "заманивать, приманивать",
//     variantD: "заменять кого-то, чередовать",
//     correctAnswer: "заменять кого-то, чередовать",
//   },
//   {
//     language: "ger",
//     word: "erbringen",
//     forms: ["erbringt", "erbrachte", "hat erbracht"],
//     type: "verb",
//     variantA: "доносить, рассказывать",
//     variantB: "производить эффект, приносить результат",
//     variantC: "завести, заводить",
//     variantD: "пережить, переживать",
//     correctAnswer: "производить эффект, приносить результат",
//   },
//   {
//     language: "ger",
//     word: "der Rundgang",
//     forms: ["die Rundgänge"],
//     type: "nomen",
//     variantA: "объект",
//     variantB: "происшествие",
//     variantC: "деталь, кольцо",
//     variantD: "обход, экскурсия",
//     correctAnswer: "обход, экскурсия",
//   },
//   {
//     language: "ger",
//     word: "beantworten",
//     forms: ["beantworten", "beantwortete", "hat beantwortet"],
//     type: "verb",
//     variantA: "доносить, рассказывать",
//     variantB: "отвечать, реагировать",
//     variantC: "заводить разговор, беседовать",
//     variantD: "перебивать, препинать",
//     correctAnswer: "отвечать, реагировать",
//   },
//   {
//     language: "ger",
//     word: "berücksichtigen",
//     forms: ["berücksichtigt", "berücksichtigte", "hat berücksichtigt"],
//     type: "verb",
//     variantA: "возвышать",
//     variantB: "уточнять, пояснять",
//     variantC: "страховать, перестраховывать",
//     variantD: "принимать во внимание, учитывать",
//     correctAnswer: "принимать во внимание, учитывать",
//   },
//   {
//     language: "ger",
//     word: "zu gehen AUF",
//     forms: ["geht zu", "ging zu", "ist zugegangen"],
//     type: "verb",
//     variantA: "идти на встречу, спешить",
//     variantB: "повышать, возвышать",
//     variantC: "улучшать, улучшить",
//     variantD: "присоеденять, добавлять",
//     correctAnswer: "идти на встречу, спешить",
//   },
//   {
//     language: "ger",
//     word: "verfassen",
//     forms: ["verfasst", "verfasste", "hat verfasst"],
//     type: "verb",
//     variantA: "удаляться, отходить",
//     variantB: "покидать, оставлять",
//     variantC: "сочинять, составлять",
//     variantD: "обходить, обойти",
//     correctAnswer: "сочинять, составлять",
//   },
//   {
//     language: "ger",
//     word: "die Anweisung",
//     forms: ["die Anweisungen"],
//     type: "nomen",
//     variantA: "метод, способ",
//     variantB: "заявление, исполнение",
//     variantC: "ходотайство",
//     variantD: "инструкция, распоряжение",
//     correctAnswer: "инструкция, распоряжение",
//   },
//   {
//     language: "ger",
//     word: "eigenhändig",
//     forms: ["-"],
//     type: "adv",
//     variantA: "сподручный",
//     variantB: "собственноручный",
//     variantC: "ручной",
//     variantD: "забытый",
//     correctAnswer: "собственноручный",
//   },
//   {
//     language: "ger",
//     word: "die Annahme",
//     forms: ["die Annahmen"],
//     type: "nomen",
//     variantA: "идея, предложение",
//     variantB: "заявление, исполнение",
//     variantC: "предположение, допущение",
//     variantD: "обман, неправда",
//     correctAnswer: "предположение, допущение",
//   },
//   {
//     language: "ger",
//     word: "die Einrichtung",
//     forms: ["die Einrichtungen"],
//     type: "nomen",
//     variantA: "направление",
//     variantB: "приспособление",
//     variantC: "предположение, допущение",
//     variantD: "обустройство, оборудование",
//     correctAnswer: "обустройство, оборудование",
//   },
//   {
//     language: "ger",
//     word: "an·halten SICH AN",
//     forms: ["hält an", "hielt an", "hat angehalten"],
//     type: "verb",
//     variantA: "останавливать, предписывать",
//     variantB: "оставлять себе, сберегать",
//     variantC: "сочинять, составлять",
//     variantD: "предпринимать, действовать",
//     correctAnswer: "останавливать, предписывать",
//   },
//   {
//     language: "ger",
//     word: "auf·füllen",
//     forms: ["füllt auf", "füllte auf", "hat aufgefühllt"],
//     type: "verb",
//     variantA: "уводить, провожать",
//     variantB: "запоминать, помнить",
//     variantC: "исключать, выключать",
//     variantD: "наполнять, доливать",
//     correctAnswer: "наполнять, доливать",
//   },
//   {
//     language: "ger",
//     word: "der Versuch",
//     forms: ["die Versuche"],
//     type: "nomen",
//     variantA: "направление",
//     variantB: "способ",
//     variantC: "попытка",
//     variantD: "задача",
//     correctAnswer: "попытка",
//   },
//   {
//     language: "ger",
//     word: "aus·fallen",
//     forms: ["fällt aus", "fiel aus", "ist ausgefallen"],
//     type: "verb",
//     variantA: "уходить, уводить",
//     variantB: "выходить из строя, отменять",
//     variantC: "препятствовать, заграждать",
//     variantD: "выпускать, терять",
//     correctAnswer: "выходить из строя, отменять",
//   },
//   {
//     language: "ger",
//     word: "einig",
//     forms: ["-"],
//     type: "adv",
//     variantA: "согласный",
//     variantB: "единый",
//     variantC: "находчивый",
//     variantD: "забытый",
//     correctAnswer: "согласный",
//   },
//   {
//     language: "ger",
//     word: "herum·sprechen SICH",
//     forms: ["spricht herum", "sprach herum", "hat herumgesprochen"],
//     type: "verb",
//     variantA: "обознаться",
//     variantB: "осведомляться",
//     variantC: "расспускать",
//     variantD: "распространяться",
//     correctAnswer: "распространяться",
//   },
//   {
//     language: "ger",
//     word: "zu·kommen AUF",
//     forms: ["kommt zu", "kam zu", "ist zugekommen"],
//     type: "verb",
//     variantA: "отходить, уходить",
//     variantB: "затихать, тушить",
//     variantC: "приближаться, подходить",
//     variantD: "избавляться, отказаться",
//     correctAnswer: "приближаться, подходить",
//   },
//   {
//     language: "ger",
//     word: "liegen",
//     forms: ["liegt", "lag", "ist gelegen"],
//     type: "verb",
//     variantA: "лежать, лежать в основе",
//     variantB: "засыпать, ложиться спать",
//     variantC: "приближаться, подходить",
//     variantD: "отходить, отступать",
//     correctAnswer: "лежать, лежать в основе",
//   },
//   {
//     language: "ger",
//     word: "mit·machen BEI",
//     forms: ["macht mit", "machte mit", "hat mitgemacht"],
//     type: "verb",
//     variantA: "делать вместе, делать заодно",
//     variantB: "содействовать, помогать",
//     variantC: "улыбать, улыбнуться",
//     variantD: "участвовать, принимать участие",
//     correctAnswer: "участвовать, принимать участие",
//   },
//   {
//     language: "ger",
//     word: "hauptsächlich",
//     forms: ["-"],
//     type: "adv",
//     variantA: "важный, принципиальный",
//     variantB: "единый, неповторимый",
//     variantC: "основной, главный",
//     variantD: "очередной, следующий",
//     correctAnswer: "основной, главный",
//   },
//   {
//     language: "ger",
//     word: "indem",
//     forms: ["-"],
//     type: "adv",
//     variantA: "между тем, тем",
//     variantB: "путем, посредством",
//     variantC: "по причине, из-за",
//     variantD: "вопреки, против",
//     correctAnswer: "путем, посредством",
//   },
//   {
//     language: "ger",
//     word: "anwesend",
//     forms: ["-"],
//     type: "adj",
//     variantA: "присутсвующий",
//     variantB: "отсылаемый",
//     variantC: "отсутсвующий",
//     variantD: "высылаемый",
//     correctAnswer: "присутсвующий",
//   },
//   {
//     language: "ger",
//     word: "übrig",
//     forms: ["-"],
//     type: "adj",
//     variantA: "привычный",
//     variantB: "запасной, запасные",
//     variantC: "побочный",
//     variantD: "оставшийся, остальной",
//     correctAnswer: "оставшийся, остальной",
//   },
//   {
//     language: "ger",
//     word: "zeitweise",
//     forms: ["-"],
//     type: "adv",
//     variantA: "измеримый",
//     variantB: "временно",
//     variantC: "недостаточный",
//     variantD: "постоянно",
//     correctAnswer: "временно",
//   },
//   {
//     language: "ger",
//     word: "jeweils",
//     forms: ["-"],
//     type: "adv",
//     variantA: "соответсвующий",
//     variantB: "постепенно, последовательно",
//     variantC: "в каждом случае",
//     variantD: "постоянно, всегда",
//     correctAnswer: "в каждом случае",
//   },
//   {
//     language: "ger",
//     word: "die Zusammenfassung",
//     forms: ["die Zusammenfassungen"],
//     type: "nomen",
//     variantA: "совместная работа",
//     variantB: "вывод, краткое содержание",
//     variantC: "инструктаж, инструкция",
//     variantD: "совместная продукция",
//     correctAnswer: "вывод, краткое содержание",
//   },
//   {
//     language: "ger",
//     word: "fordern",
//     forms: ["fordert", "forderte", "hat gefordert"],
//     type: "verb",
//     variantA: "заниматься",
//     variantB: "следовать",
//     variantC: "требовать",
//     variantD: "пытаться",
//     correctAnswer: "требовать",
//   },
//   {
//     language: "ger",
//     word: "durch·führen",
//     forms: ["führt durch", "führte durch", "hat durchgeführt"],
//     type: "verb",
//     variantA: "осуществлять, проводить в жизнь",
//     variantB: "следовать, идти через",
//     variantC: "возмущаться, противиться",
//     variantD: "ехать, ехать через",
//     correctAnswer: "осуществлять, проводить в жизнь",
//   },
//   {
//     language: "ger",
//     word: "aus·üben",
//     forms: ["übt aus", "übte aus", "hat ausgeübt"],
//     type: "verb",
//     variantA: "упражняться, учиться",
//     variantB: "тренироваться, проводить тренировку",
//     variantC: "совершать, заниматься",
//     variantD: "обучаться, учиться",
//     correctAnswer: "совершать, заниматься",
//   },
//   {
//     language: "ger",
//     word: "erfüllen",
//     forms: ["erfüllt", "erfullte", "hat erfüllt"],
//     type: "verb",
//     variantA: "чувствовать, почувствовать",
//     variantB: "тренироваться, проводить тренировку",
//     variantC: "совершать, заниматься",
//     variantD: "исполнять, выполнять",
//     correctAnswer: "исполнять, выполнять",
//   },
//   {
//     language: "ger",
//     word: "verärgern",
//     forms: ["verärgert", "verärgerte", "hat verärgert"],
//     type: "verb",
//     variantA: "побеспокоить",
//     variantB: "разозлить",
//     variantC: "успокаивать",
//     variantD: "жаловаться",
//     correctAnswer: "разозлить",
//   },
//   {
//     language: "ger",
//     word: "aus·kennen",
//     forms: ["kennt aus", "kannte aus", "hat ausgekannt"],
//     type: "verb",
//     variantA: "разбираться в чем-либо",
//     variantB: "узнавать кого-то",
//     variantC: "преграждать кому-то путь",
//     variantD: "неузнавать кого-то",
//     correctAnswer: "разбираться в чем-либо",
//   },
//   {
//     language: "ger",
//     word: "ein·lenken ",
//     forms: ["lenkt ein", "lenkte ein", "ist eingelenkt"],
//     type: "verb",
//     variantA: "забирать",
//     variantB: "узнавать кого-то",
//     variantC: "преграждать кому-то путь",
//     variantD: "уступать",
//     correctAnswer: "уступать",
//   },
//   {
//     language: "ger",
//     word: "ein·wenden",
//     forms: ["wendet ein", "wandte ein", "hat eingewandt"],
//     type: "verb",
//     variantA: "нуждаться",
//     variantB: "присутвовать",
//     variantC: "возражать",
//     variantD: "уступать",
//     correctAnswer: "возражать",
//   },
//   {
//     language: "ger",
//     word: "meistern",
//     forms: ["meistert", "meisterte", "hat gemeistert"],
//     type: "verb",
//     variantA: "присуждать, присудить",
//     variantB: "мастерить",
//     variantC: "главенствовать",
//     variantD: "осваивать, овладевать",
//     correctAnswer: "осваивать, овладевать",
//   },
//   {
//     language: "ger",
//     word: "bewahren",
//     forms: ["bewahrt", "bewahrte", "hat bewahrt"],
//     type: "verb",
//     variantA: "оценивать",
//     variantB: "осуждать, недопольствовать",
//     variantC: "сохранять, сберегать",
//     variantD: "осваивать, овладевать",
//     correctAnswer: "сохранять, сберегать",
//   },
//   {
//     language: "ger",
//     word: "nach·haken",
//     forms: ["hakt nach", "hakte nach", "hat nachgehackt"],
//     type: "verb",
//     variantA: "оценивать",
//     variantB: "осуждать, недопольствовать",
//     variantC: "сохранять, сберегать",
//     variantD: "осваивать, овладевать",
//     correctAnswer: "сохранять, сберегать",
//   },
//   {
//     language: "ger",
//     word: "bewältigen",
//     forms: ["bewältigt", "bewältigte", "hat bewältigt"],
//     type: "verb",
//     variantA: "оценивать, ценить",
//     variantB: "преодолевать, справляться",
//     variantC: "сохранять, сберегать",
//     variantD: "охранять, защищать",
//     correctAnswer: "преодолевать, справляться",
//   },
//   {
//     language: "ger",
//     word: "an·wenden SICH",
//     forms: ["wendet an", "wandte an", "hat angewendet"],
//     type: "verb",
//     variantA: "обращаться к, применять",
//     variantB: "преодоливать, справляться",
//     variantC: "менять, изменять",
//     variantD: "недопускать, устранять",
//     correctAnswer: "преодоливать, справляться",
//   },
//   {
//     language: "ger",
//     word: "ansonsten",
//     forms: ["-"],
//     type: "adv",
//     variantA: "необычно",
//     variantB: "однажды",
//     variantC: "в каждом случае",
//     variantD: "в ином случае",
//     correctAnswer: "в ином случае",
//   },
//   {
//     language: "ger",
//     word: "ubrigens",
//     forms: ["-"],
//     type: "adv",
//     variantA: "привычно",
//     variantB: "вероятно",
//     variantC: "отдельно",
//     variantD: "кстати",
//     correctAnswer: "кстати",
//   },
//   {
//     language: "ger",
//     word: "erweisen",
//     forms: ["erweist", "erwies", "hat erwiesen"],
//     type: "verb",
//     variantA: "стесняться",
//     variantB: "доказывать",
//     variantC: "меняться",
//     variantD: "устранять",
//     correctAnswer: "доказывать",
//   },
//   {
//     language: "ger",
//     word: "wirken",
//     forms: ["wirkt", "wirkte", "hat gewirkt"],
//     type: "verb",
//     variantA: "производить, насчитывать, общитывать",
//     variantB: "доказывать, обвинять, употреблять",
//     variantC: "влиять, действовать, выглядеть",
//     variantD: "совершать, выполнять, исполнять",
//     correctAnswer: "влиять, действовать, выглядеть",
//   },
//   {
//     language: "ger",
//     word: "an geben",
//     forms: ["gibt an", "gab an", "hat angegeben"],
//     type: "verb",
//     variantA: "указывать, заявлять, хвастаться",
//     variantB: "отказываться, отказаться",
//     variantC: "менять, изменять, поменять",
//     variantD: "сдаваться",
//     correctAnswer: "указывать, заявлять, хвастаться",
//   },
//   {
//     language: "ger",
//     word: "aus geben",
//     forms: ["gibt aus", "gab aus", "hat ausgegeben"],
//     type: "verb",
//     variantA: "указывать, хвастаться",
//     variantB: "отказываться, отказаться",
//     variantC: "расходывать, тратить",
//     variantD: "сдаваться",
//     correctAnswer: "расходывать, тратить",
//   },
//   {
//     language: "ger",
//     word: "auf geben",
//     forms: ["gibt auf", "gab auf", "hat aufgegeben"],
//     type: "verb",
//     variantA: "указывать, хвастаться, сообщать",
//     variantB: "отказываться, отказаться, лишаться",
//     variantC: "расходывать, тратить, выплачивать",
//     variantD: "прекращать, бросать, сдаваться",
//     correctAnswer: "прекращать, бросать, сдаваться",
//   },
//   {
//     language: "ger",
//     word: "zu geben",
//     forms: ["gibt zu", "gab zu", "hat zugegeben"],
//     type: "verb",
//     variantA: "указывать, хвастаться",
//     variantB: "прекращать, сдаваться",
//     variantC: "признавать, соглашаться",
//     variantD: "расходывать, тратить",
//     correctAnswer: "признавать, соглашаться",
//   },
//   {
//     language: "ger",
//     word: "ein geben",
//     forms: ["gibt ein", "gab ein", "hat eingegeben"],
//     type: "verb",
//     variantA: "указывать, хвастаться",
//     variantB: "прекращать, сдаваться",
//     variantC: "признавать, соглашаться",
//     variantD: "вводить, давать",
//     correctAnswer: "вводить, давать",
//   },
//   {
//     language: "ger",
//     word: "übergeben",
//     forms: ["übergibt", "übergab", "hat übergegeben"],
//     type: "verb",
//     variantA: "передавать, перепоручать",
//     variantB: "прекращать, сдаваться",
//     variantC: "признавать, соглашаться",
//     variantD: "вводить, давать",
//     correctAnswer: "передавать, перепоручать",
//   },
//   {
//     language: "ger",
//     word: "begeben",
//     forms: ["begibt", "begab", "hat begeben"],
//     type: "verb",
//     variantA: "отправляться, направляться",
//     variantB: "прекращать, сдаваться",
//     variantC: "признавать, соглашаться",
//     variantD: "вводить, давать",
//     correctAnswer: "отправляться, направляться",
//   },
//   {
//     language: "ger",
//     word: "vergeben",
//     forms: ["vergibt", "vergab", "hat vergeben"],
//     type: "verb",
//     variantA: "отправляться, направляться",
//     variantB: "прекращать, сдаваться",
//     variantC: "прощать, предоставлять",
//     variantD: "вводить, давать",
//     correctAnswer: "прощать, предоставлять",
//   },
//   {
//     language: "ger",
//     word: "vorrätig",
//     forms: ["-"],
//     type: "adv",
//     variantA: "привычно, обычно",
//     variantB: "вероятно, возможно",
//     variantC: "доступно, в наличии",
//     variantD: "кстати, причем",
//     correctAnswer: "доступно, в наличии",
//   },
//   {
//     language: "ger",
//     word: "demnächst",
//     forms: ["-"],
//     type: "adv",
//     variantA: "случайно, неожиданно",
//     variantB: "вероятно, возможно",
//     variantC: "после этого",
//     variantD: "вскоре, скоро",
//     correctAnswer: "вскоре, скоро",
//   },
//   
//   {
//     language: "ger",
//     word: "ähnlich",
//     forms: ["ähnlicher, am ähnlichsten"],
//     type: "adj",
//     variantA: "обычный, обыкновенный",
//     variantB: "безопасный, неопасный",
//     variantC: "схожий, подобный",
//     variantD: "скорый, быстрый",
//     correctAnswer: "схожий, подобный",
//   },
//   {
//     language: "ger",
//     word: "verschwinden",
//     forms: ["verschwindet", "verschwand", "ist verschwunden"],
//     type: "verb",
//     variantA: "обидеться, быть обиженным",
//     variantB: "исчезать, скрываться",
//     variantC: "загрязнять, испачкать",
//     variantD: "обидеть, обижать",
//     correctAnswer: "исчезать, скрываться",
//   },
//   {
//     language: "ger",
//     word: "der Engpass",
//     forms: ["die Engpässe"],
//     type: "nome",
//     variantA: "недостача, дефицит",
//     variantB: "документ, паспорт",
//     variantC: "вложение, приложение",
//     variantD: "оболочка, контур",
//     correctAnswer: "недостача, дефицит",
//   },
//   {
//     language: "ger",
//     word: "fällig",
//     forms: ["-"],
//     type: "adv",
//     variantA: "просроченный",
//     variantB: "упавший",
//     variantC: "подлежащий исполнению",
//     variantD: "потраченный",
//     correctAnswer: "подлежащий исполнению",
//   },
//   {
//     language: "ger",
//     word: "die Feststellung",
//     forms: ["die Feststellungen"],
//     type: "nome",
//     variantA: "представление",
//     variantB: "заключение",
//     variantC: "напоминание",
//     variantD: "поручение",
//     correctAnswer: "заключение",
//   },
//   {
//     language: "ger",
//     word: "unverbindlich",
//     forms: ["unverbindlicher, am unverbindlichsten"],
//     type: "adj",
//     variantA: "негарантированный, необязательный",
//     variantB: "спонтанный",
//     variantC: "целенаправленный",
//     variantD: "обязательный, необходимый",
//     correctAnswer: "негарантированный, необязательный",
//   },
//   {
//     language: "ger",
//     word: "zurück·treten VON",
//     forms: ["tritt züruck", "tratt züruck", "hat zurückgetreten"],
//     type: "verb",
//     variantA: "пройти, пересечь",
//     variantB: "переступить, перешагнуть",
//     variantC: "нарушать, несоблюдать",
//     variantD: "уйти в отставку, отказаться от",
//     correctAnswer: "уйти в отставку, отказаться от",
//   },
//   {
//     language: "ger",
//     word: "gezwungen",
//     forms: ["gezwungener, am gezwungensten"],
//     type: "adj",
//     variantA: "раздражительный, нервный",
//     variantB: "принужденный",
//     variantC: "целенаправленный",
//     variantD: "обязательный",
//     correctAnswer: "принужденный",
//   },
//   {
//     language: "ger",
//     word: "die Bemühung",
//     forms: ["die Bemühungen"],
//     type: "nomen",
//     variantA: "забота, внимание",
//     variantB: "концентрация",
//     variantC: "исполнительность, ответсвенность",
//     variantD: "старания, усилия",
//     correctAnswer: "старания, усилия",
//   },
//   {
//     language: "ger",
//     word: "unterbreiten",
//     forms: ["unterbreitet", "unterbreitete", "hat unterbreitet"],
//     type: "verb",
//     variantA: "пройти, пересечь",
//     variantB: "вынести на расмотрение, предложить",
//     variantC: "нарушать, несоблюдать",
//     variantD: "подготовиться, приготовиться",
//     correctAnswer: "вынести на расмотрение, предложить",
//   },
//   {
//     language: "ger",
//     word: "die Auflösung",
//     forms: ["die Auflösungen"],
//     type: "nome",
//     variantA: "разрешение, роспуск",
//     variantB: "понятие, определение",
//     variantC: "исполнительность, ответсвенность",
//     variantD: "старания, усилия",
//     correctAnswer: "разрешение, роспуск",
//   },
//   {
//     language: "ger",
//     word: "definieren",
//     forms: ["definiert", "definierte", "hat definiert"],
//     type: "verb",
//     variantA: "просить, умолять",
//     variantB: "вынести на расмотрение, предложить",
//     variantC: "давать определение, определять",
//     variantD: "подготовиться, приготовиться",
//     correctAnswer: "давать определение, определять",
//   },
//   {
//     language: "ger",
//     word: "gestehen",
//     forms: ["gesteht", "gestand", "hat gestanden"],
//     type: "verb",
//     variantA: "просить, умолять",
//     variantB: "простить, прощать",
//     variantC: "убедить, убеждать",
//     variantD: "признаваться, признавать",
//     correctAnswer: "признаваться, признавать",
//   },
//   {
//     language: "ger",
//     word: "flehen UM",
//     forms: ["fleht", "flehte", "hat gefleht"],
//     type: "verb",
//     variantA: "просить, умолять",
//     variantB: "простить, прощать",
//     variantC: "убедить, убеждать",
//     variantD: "улетать, убывать",
//     correctAnswer: "просить, умолять",
//   },
//   {
//     language: "ger",
//     word: "hinterlassen",
//     forms: ["hinterlässt", "hinterließ", "hat hinterlassen"],
//     type: "verb",
//     variantA: "оставлять, покидать (место)",
//     variantB: "простить, прощать",
//     variantC: "оставлять, покидать (человека)",
//     variantD: "улетать, убывать",
//     correctAnswer: "оставлять, покидать (человека)",
//   },
//   {
//     language: "ger",
//     word: "verlassen",
//     forms: ["verlässt", "verließ", "hat verlassen"],
//     type: "verb",
//     variantA: "оставлять, покидать (место)",
//     variantB: "простить, прощать",
//     variantC: "оставлять, покидать (человека)",
//     variantD: "улетать, убывать",
//     correctAnswer: "оставлять, покидать (место)",
//   },
//   {
//     language: "ger",
//     word: "veranlassen",
//     forms: ["veranlasst", "veranlasste", "hat veranlasst"],
//     type: "verb",
//     variantA: "оставлять, покидать (место)",
//     variantB: "побуждать, побудить",
//     variantC: "оставлять, покидать (человека)",
//     variantD: "забывать, забыть",
//     correctAnswer: "побуждать, побудить",
//   },
//   {
//     language: "ger",
//     word: "bezugnehmend",
//     forms: ["-"],
//     type: "adv",
//     variantA: "раздражительный, нервный",
//     variantB: "принужденный, обязанный",
//     variantC: "ссылающийся, касающийся",
//     variantD: "превосходный",
//     correctAnswer: "ссылающийся, касающийся",
//   },
//   {
//     language: "ger",
//     word: "anliegend",
//     forms: ["-"],
//     type: "adv",
//     variantA: "прилагаемый, приложенный",
//     variantB: "принужденный, обязанный",
//     variantC: "ссылающийся, касающийся",
//     variantD: "прилегающий, примыкающий",
//     correctAnswer: "прилегающий, примыкающий",
//   },
//   {
//     language: "ger",
//     word: "beiliegend",
//     forms: ["-"],
//     type: "adv",
//     variantA: "прилагаемый, приложенный",
//     variantB: "принужденный, обязанный",
//     variantC: "ссылающийся, касающийся",
//     variantD: "прилегающий, примыкающий",
//     correctAnswer: "прилагаемый, приложенный",
//   },
//   {
//     language: "ger",
//     word: "hervorragend",
//     forms: ["-"],
//     type: "adv",
//     variantA: "впереди идущий, ведущий",
//     variantB: "принужденный, обязанный",
//     variantC: "выдающийся, замечательный",
//     variantD: "близкий, приятный",
//     correctAnswer: "выдающийся, замечательный",
//   },
//   {
//     language: "ger",
//     word: "gesamt",
//     forms: ["-"],
//     type: "adv",
//     variantA: "весь",
//     variantB: "вовсе",
//     variantC: "всем",
//     variantD: "вместе",
//     correctAnswer: "весь",
//   },
//   {
//     language: "ger",
//     word: "begleichen",
//     forms: ["begleicht", "beglich", "hat begleichen"],
//     type: "verb",
//     variantA: "сравнивать",
//     variantB: "оплачивать",
//     variantC: "уравнивать",
//     variantD: "убирать",
//     correctAnswer: "оплачивать",
//   },
//   {
//     language: "ger",
//     word: "gelegen",
//     forms: ["gelegener, am gelegensten"],
//     type: "adj",
//     variantA: "равный, одинаковый",
//     variantB: "более удобный, более подходящий",
//     variantC: "целенаправленный, целеустремленный",
//     variantD: "воспитанный, образованный",
//     correctAnswer: "более удобный, более подходящий",
//   },
//   {
//     language: "ger",
//     word: "die Vorlage",
//     forms: ["die Vorlagen"],
//     type: "nomen",
//     variantA: "проект, образец, шаблон",
//     variantB: "убеждение, верования",
//     variantC: "сомнения, неуверенность",
//     variantD: "старания, усилия",
//     correctAnswer: "проект, образец, шаблон",
//   },
//   {
//     language: "ger",
//     word: "die Bedingung",
//     forms: ["die Bedingungen"],
//     type: "nomen",
//     variantA: "условия",
//     variantB: "убеждение, верования",
//     variantC: "сомнения, неуверенность",
//     variantD: "старания, усилия",
//     correctAnswer: "условия",
//   },
//   {
//     language: "ger",
//     word: "empfangen",
//     forms: ["empfängt", "empfing", "hat empfangen"],
//     type: "verb",
//     variantA: "воспринимать, размышлять",
//     variantB: "принимать (человек), встречать",
//     variantC: "влиять, убеждать",
//     variantD: "убирать",
//     correctAnswer: "принимать (человек), встречать",
//   },
//   {
//     language: "ger",
//     word: "beabsichtigen",
//     forms: ["beabsichtigt", "beabsichtigte", "hat beabsichtigt"],
//     type: "verb",
//     variantA: "проверять, перепроверять",
//     variantB: "принимать (человек), встречать",
//     variantC: "намереваться, собираться",
//     variantD: "посещать (человек)",
//     correctAnswer: "намереваться, собираться",
//   },
//   {
//     language: "ger",
//     word: "verhindern",
//     forms: ["verhindert", "verhinderte", "hat verhindert"],
//     type: "verb",
//     variantA: "проверять, перепроверять",
//     variantB: "предотвращать, препятствовать, помешать",
//     variantC: "намереваться, собираться что-то сделать",
//     variantD: "выполнить, исполнить, осуществить",
//     correctAnswer: "предотвращать, препятствовать, помешать",
//   },
//   {
//     language: "ger",
//     word: "diesbezüglich",
//     forms: ["-"],
//     type: "adv",
//     variantA: "относительно этого, об этом",
//     variantB: "потому что",
//     variantC: "вопреки тому",
//     variantD: "в понимании",
//     correctAnswer: "относительно этого, об этом",
//   },
//   {
//     language: "ger",
//     word: "die Panne",
//     forms: ["die Pannen"],
//     type: "nomen",
//     variantA: "условия, обстоятельство",
//     variantB: "убеждение, верования",
//     variantC: "сомнения, неуверенность",
//     variantD: "авария, поломка, неисправность",
//     correctAnswer: "авария, поломка, неисправность",
//   },
//   {
//     language: "ger",
//     word: "die Pannendienst",
//     forms: ["die Pannendienste"],
//     type: "nomen",
//     variantA: "условие, обстоятельство",
//     variantB: "аварийная служба, техпомощь",
//     variantC: "сомнения, неуверенность",
//     variantD: "авария, поломка, неисправность",
//     correctAnswer: "аварийная служба, техпомощь",
//   },
//   {
//     language: "ger",
//     word: "berühren",
//     forms: ["berührt", "berührte", "hat berührt"],
//     type: "verb",
//     variantA: "прикоснуться к чему-то",
//     variantB: "предотвращать, препятствовать, помешать",
//     variantC: "намереваться, собираться что-то сделать",
//     variantD: "сталкнуться с ситуацией, соприкоснуться",
//     correctAnswer: "сталкнуться с ситуацией, соприкоснуться",
//   },
//   {
//     language: "ger",
//     word: "anfassen",
//     forms: ["fasst an", "fasste an", "hat angefasst"],
//     type: "verb",
//     variantA: "прикоснуться к чему-то",
//     variantB: "предотвращать, препятствовать, помешать",
//     variantC: "намереваться, собираться что-то сделать",
//     variantD: "сталкнуться с ситуацией, соприкоснуться",
//     correctAnswer: "прикоснуться к чему-то",
//   },
//   {
//     language: "ger",
//     word: "ein·setzen",
//     forms: ["setzt ein", "setzte ein", "hat eingesetzt"],
//     type: "verb",
//     variantA: "принять, принять к сведенью",
//     variantB: "казаться, случаться",
//     variantC: "войти, входить",
//     variantD: "установить, вставить",
//     correctAnswer: "установить, вставить",
//   },
//   {
//     language: "ger",
//     word: "zurück·setzen",
//     forms: ["setzt zurück", "setzte zurück", "hat zurückgesetzt"],
//     type: "verb",
//     variantA: "принять, принять к сведенью",
//     variantB: "вернуться, возвращаться",
//     variantC: "поставить обратно, ставить обратно",
//     variantD: "установить, вставить",
//     correctAnswer: "поставить обратно, ставить обратно",
//   },
//   {
//     language: "ger",
//     word: "aus·werfen",
//     forms: ["wirft aus", "warf aus", "hat ausgeworfen"],
//     type: "verb",
//     variantA: "принимать, исполнять",
//     variantB: "выбрасывать, выкидывать",
//     variantC: "осуществлять, реализовать",
//     variantD: "поменять, сменить",
//     correctAnswer: "выбрасывать, выкидывать",
//   },
//   {
//     language: "ger",
//     word: "auf·werfen",
//     forms: ["wirft auf", "warf auf", "hat aufgeworfen"],
//     type: "verb",
//     variantA: "принимать, исполнять",
//     variantB: "выбрасывать, выкидывать",
//     variantC: "добавлять, увеличивать",
//     variantD: "поднимать вопрос, копать, насыпать",
//     correctAnswer: "поднимать вопрос, копать, насыпать",
//   },
//   {
//     language: "ger",
//     word: "aus·rüsten MIT",
//     forms: ["rüstet aus", "rüstete aus", "hat ausgerüstet"],
//     type: "verb",
//     variantA: "снабжать, обеспечивать",
//     variantB: "окрашивать, красить",
//     variantC: "откидывать, выкидывать",
//     variantD: "отказываться от заявления",
//     correctAnswer: "снабжать, обеспечивать",
//   },
//   {
//     language: "ger",
//     word: "versiert",
//     forms: ["versierter, am versiertesten"],
//     type: "adj",
//     variantA: "равнодушный, безметяженый",
//     variantB: "квалифицированный, опытный",
//     variantC: "целенаправленный, целеустремленный",
//     variantD: "бесполезный, напрасный",
//     correctAnswer: "квалифицированный, опытный",
//   },
//   {
//     language: "ger",
//     word: "ausführlich",
//     forms: ["ausführlicher, am ausführlichsten"],
//     type: "adj",
//     variantA: "подробный, детальный",
//     variantB: "квалифицированный, опытный",
//     variantC: "целенаправленный, целеустремленный",
//     variantD: "бесполезный, напрасный",
//     correctAnswer: "подробный, детальный",
//   },
//   {
//     language: "ger",
//     word: "wieder·geben",
//     forms: ["gibt wieder", "gab wieder", "hat wiedergegeben"],
//     type: "verb",
//     variantA: "передавать, переносить",
//     variantB: "излагать, возвращать, воспроизводить",
//     variantC: "откидывать, выкидывать, откладывать",
//     variantD: "воспользоваться, организовывать",
//     correctAnswer: "излагать, возвращать, воспроизводить",
//   },
//  
//   {
//     language: "ger",
//     word: "ermitteln",
//     forms: ["ermittelt", "ermittelte", "hat ermittelt"],
//     type: "verb",
//     variantA: "узнавать, разузнавать, выясняять",
//     variantB: "приобретать, зарабатывать",
//     variantC: "сообщать, указывать",
//     variantD: "происходить, возникать",
//     correctAnswer: "узнавать, разузнавать, выясняять",
//   },
//   {
//     language: "ger",
//     word: "erkennen",
//     forms: ["erkennt", "erkannte", "hat erkannt"],
//     type: "verb",
//     variantA: "контролировать, обеспечивать",
//     variantB: "приобретать, зарабатывать",
//     variantC: "обнаружить, узнавать, распознать",
//     variantD: "знакомить, знакомиться",
//     correctAnswer: "обнаружить, узнавать, распознать",
//   },
//   {
//     language: "ger",
//     word: "der Zufall",
//     forms: ["die Zufälle"],
//     type: "nomen",
//     variantA: "сбережения, накопления",
//     variantB: "волнение",
//     variantC: "вознаграждение",
//     variantD: "случайность",
//     correctAnswer: "случайность",
//   },
//   {
//     language: "ger",
//     word: "der Zufall",
//     forms: ["die Zufälle"],
//     type: "nomen",
//     variantA: "сбережения, накопления",
//     variantB: "волнение",
//     variantC: "вознаграждение",
//     variantD: "случайность",
//     correctAnswer: "случайность",
//   },
//   {
//     language: "ger",
//     word: "die Fertigkeit",
//     forms: ["die Fertigkeiten"],
//     type: "nomen",
//     variantA: "сбережения, накопления, доходы",
//     variantB: "навык, умение, способность",
//     variantC: "волнения, сомнения, переживание",
//     variantD: "случайность, вымысел",
//     correctAnswer: "навык, умение, способность",
//   },
//   {
//     language: "ger",
//     word: "die Auswirkung",
//     forms: ["die Auswirkungут"],
//     type: "nomen",
//     variantA: "сбережения, накопления, доходы",
//     variantB: "навык, умение, способность",
//     variantC: "волнения, сомнения, переживание",
//     variantD: "влияние, воздействие, действие",
//     correctAnswer: "влияние, воздействие, действие",
//   },
//   {
//     language: "ger",
//     word: "ausnahmsweise",
//     forms: ["-"],
//     type: "adv",
//     variantA: "соответственно, соответствующий",
//     variantB: "текущий, прежний",
//     variantC: "каждый раз, в каждом случае",
//     variantD: "исключительно, по исключению",
//     correctAnswer: "исключительно, по исключению",
//   },
//   {
//     language: "ger",
//     word: "geringfügig",
//     forms: ["geringfügiger", "am geringfügigsten"],
//     type: "adv",
//     variantA: "раздраженный, гневный",
//     variantB: "мнительный, сомнительный",
//     variantC: "незначительный, несущественный",
//     variantD: "завистливый, завидующий",
//     correctAnswer: "незначительный, несущественный",
//   },
//   {
//     language: "ger",
//     word: "auf regen ÜBER",
//     forms: ["regt auf", "regte auf", "hat aufgeregt"],
//     type: "verb",
//     variantA: "сожалеть, жалеть",
//     variantB: "волноваться, переживать",
//     variantC: "жаловаться, негодовать",
//     variantD: "заимствовать, позычать",
//     correctAnswer: "волноваться, переживать",
//   },
//   {
//     language: "ger",
//     word: "bemerken",
//     forms: ["bemerkt", "bemerkte", "hat bemerkt"],
//     type: "verb",
//     variantA: "сожалеть, жалеть",
//     variantB: "волноваться, переживать",
//     variantC: "жаловаться, негодовать",
//     variantD: "замечать, заметить",
//     correctAnswer: "замечать, заметить",
//   },
//   {
//     language: "ger",
//     word: "heraus finden",
//     forms: ["findet heraus", "fand heraus", "hat herausgefunden"],
//     type: "verb",
//     variantA: "искать, ввести поиск",
//     variantB: "уведомлять, сообщать",
//     variantC: "выяснять, разобраться",
//     variantD: "замечать, заметить",
//     correctAnswer: "выяснять, разобраться",
//   },
//   {
//     language: "ger",
//     word: "auf bauen",
//     forms: ["baut auf", "baute auf", "hat aufgebaut"],
//     type: "verb",
//     variantA: "сооружать, строить, создавать",
//     variantB: "уведомлять, сообщать",
//     variantC: "разрушать, ломать, рушить",
//     variantD: "делиться, угощать",
//     correctAnswer: "сооружать, строить, создавать",
//   },
//   {
//     language: "ger",
//     word: "überreden ZU",
//     forms: ["überredet", "überredete", "hat überredet"],
//     type: "verb",
//     variantA: "разговаривать, болтать",
//     variantB: "переубедить, убеждать, переубеждать",
//     variantC: "переходить черту, заходить за границу",
//     variantD: "хвалиться, преувеличивать",
//     correctAnswer: "переубедить, убеждать, переубеждать",
//   },
//   {
//     language: "ger",
//     word: "erleichtern",
//     forms: ["erleichtert", "erleichterte", "hat erleichtert"],
//     type: "verb",
//     variantA: "похудеть, худеть",
//     variantB: "переубедить, убеждать, переубеждать",
//     variantC: "волноваться, беспокоиться, тревожиться",
//     variantD: "облегчить, облегчать, приносить облегчение",
//     correctAnswer: "облегчить, облегчать, приносить облегчение",
//   },
//   {
//     language: "ger",
//     word: "zu lassen",
//     forms: ["lässt zu", "ließ zu", "hat zugelassen"],
//     type: "verb",
//     variantA: "оставлять, покидать",
//     variantB: "разрешать, позволять",
//     variantC: "уходить, убывать",
//     variantD: "отказываться, отклонять",
//     correctAnswer: "разрешать, позволять",
//   },
//   {
//     language: "ger",
//     word: "überein stimmen MIT",
//     forms: ["stimmt überein", "stimmte überein", "hat übereingestimmt"],
//     type: "verb",
//     variantA: "соответствовать, совпадать, согласовываться",
//     variantB: "переубеждать, убеждать, переубедить",
//     variantC: "договориваться, соглашаться",
//     variantD: "переложить, перепоручить, передавать",
//     correctAnswer: "соответствовать, совпадать, согласовываться",
//   },
//   {
//     language: "ger",
//     word: "unvollständig",
//     forms: ["unvollständiger", "am unvollständigsten"],
//     type: "adv",
//     variantA: "досрочный",
//     variantB: "неполный",
//     variantC: "срочный",
//     variantD: "сомнительный",
//     correctAnswer: "неполный",
//   },
//   {
//     language: "ger",
//     word: "bedeutend",
//     forms: ["bedeutender", "am bedeutendsten"],
//     type: "adv",
//     variantA: "доволно",
//     variantB: "неполно",
//     variantC: "значительно",
//     variantD: "прозрачно",
//     correctAnswer: "значительно",
//   },
//   {
//     language: "ger",
//     word: "erheblich",
//     forms: ["-"],
//     type: "adv",
//     variantA: "пустой",
//     variantB: "пережитый",
//     variantC: "прошлый",
//     variantD: "значительный",
//     correctAnswer: "значительный",
//   },
//   {
//     language: "ger",
//     word: "jedoch",
//     forms: ["-"],
//     type: "adv",
//     variantA: "тем более",
//     variantB: "также",
//     variantC: "иначе",
//     variantD: "тем не менее",
//     correctAnswer: "тем не менее",
//   },
//   {
//     language: "ger",
//     word: "die Haltbarkeit",
//     forms: ["die Haltbarkeiten"],
//     type: "nomen",
//     variantA: "старания, умения, навык",
//     variantB: "годность, пригодность, добротность",
//     variantC: "черта, характеристика, квалификация",
//     variantD: "достоинство, превосходство",
//     correctAnswer: "годность, пригодность, добротность",
//   },
//   {
//     language: "ger",
//     word: "die Faustregel",
//     forms: ["die Faustregeln"],
//     type: "nomen",
//     variantA: "ненужное правило",
//     variantB: "прилавок, полка",
//     variantC: "поклажа, кладь",
//     variantD: "общее правило",
//     correctAnswer: "общее правило",
//   },
//   {
//     language: "ger",
//     word: "das Fazit",
//     forms: ["die Fazits"],
//     type: "nomen",
//     variantA: "запрет, табу",
//     variantB: "прилавок, полка",
//     variantC: "итог, сумма",
//     variantD: "отказ, отмена",
//     correctAnswer: "итог, сумма",
//   },
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
//   {
//     language: "ger",
//     word: "die Fülle",
//     forms: ["die Füllen"],
//     type: "nomen",
//     variantA: "предчувствие, ощущение",
//     variantB: "чувство, тревога",
//     variantC: "изобилие, избыток",
//     variantD: "сомнения, сметения",
//     correctAnswer: "изобилие, избыток",
//   },
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
//   {
//     language: "ger",
//     word: "adäquat",
//     forms: ["adäquater", "am adäquatesten"],
//     type: "adj",
//     variantA: "непредсказуемый",
//     variantB: "спонтанный",
//     variantC: "целенаправленный",
//     variantD: "адекватный",
//     correctAnswer: "адекватный",
//   },
//   {
//     language: "ger",
//     word: "gering",
//     forms: ["geringer", "am geringsten"],
//     type: "adj",
//     variantA: "непредсказуемый",
//     variantB: "небольшой, незначительный",
//     variantC: "огромный, значительный",
//     variantD: "непредсказуемый",
//     correctAnswer: "небольшой, незначительный",
//   },
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

//     word: "besitzen",

//     forms: ["besitzt", "besaß", "hat besessen"],

//     type: "verb",

//     variantA: "возращаться",

//     variantB: "добиваться успеха",

//     variantC: "владеть, обладать ",

//     variantD: "занимать, быть занятым",

//     correctAnswer: "владеть, обладать",
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
