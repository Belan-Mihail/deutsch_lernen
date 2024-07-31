import TestType from "./types/TestType";


const GermanWordsTest:TestType[] = [
    {
        language: 'ger',
        word: 'vorwärts kommen',
        forms: ['kommt vorwärts', 'kam vorwärts', 'ist vorwärtsgekommen'],
        type: 'verb',
        variantA: 'возращаться',
        variantB: 'добиваться успеха',
        variantC: 'владеть, обладать',
        variantD: 'исходить из',
        correctAnswer: 'добиваться успеха'
        
    },
    {
        language: 'ger',
        word: 'die Vergütung',
        forms: ['die Vergütungen'],
        type: 'nomen',
        variantA: 'сбережения, накопления',
        variantB: 'волнение',
        variantC: 'вознаграждение',
        variantD: 'достоинство',
        correctAnswer: 'вознаграждение'
    },
    {
        language: 'ger',
        word: 'jeweilig',
        forms: ['-'],
        type: 'adv',
        variantA: 'соответственно, соответствующий',
        variantB: 'текущий, прежний',
        variantC: 'каждый раз, в каждом случае',
        variantD: 'пережитый, прожитый',
        correctAnswer: 'соответственно, соответствующий'
    },
    {
        language: 'ger',
        word: 'mitfühlend',
        forms: ['mitfühlender', 'am mitfühlendsten'],
        type: 'adv',
        variantA: 'раздраженный',
        variantB: 'мнительный',
        variantC: 'гневный',
        variantD: 'сострадающий',
        correctAnswer: 'сострадающий'
    },
    {
        language: 'ger',
        word: 'ab lenken SICH VON',
        forms: ['lenkt ab', 'lenkte ab', 'hat abgelenkt'],
        type: 'verb',
        variantA: 'обходить, объездать',
        variantB: 'устранять, завершать',
        variantC: 'отказываться, отказывать',
        variantD: 'отвлекать, отклонять',
        correctAnswer: 'отвлекать, отклонять'
    },
    {
        language: 'ger',
        word: 'vor kommen',
        forms: ['kommt vor', 'kam vor', 'ist vorgekommen'],
        type: 'verb',
        variantA: 'казаться, случаться',
        variantB: 'возвращать, возвращаться',
        variantC: 'выходить, отходить',
        variantD: 'исходить от, пологаться',
        correctAnswer: 'казаться, случаться'
    },
    {
        language: 'ger',
        word: 'ab finden SICH MIT',
        forms: ['findet ab', 'fand ab', 'hat abgefunden'],
        type: 'verb',
        variantA: 'отвлекаться',
        variantB: 'обнаруживать',
        variantC: 'смириться',
        variantD: 'устраиваться',
        correctAnswer: 'смириться'
    },
    {
        language: 'ger',
        word: 'entspannen SICH MIT',
        forms: ['entspannt', 'entspannte', 'hat entspannt'],
        type: 'verb',
        variantA: 'заботиться, проявлять заботу',
        variantB: 'улыбаться, радоваться',
        variantC: 'негодовать, расстраиваться',
        variantD: 'расслабляться, отдыхать',
        correctAnswer: 'расслабляться, отдыхать'
    },
    {
        language: 'ger',
        word: 'die Gepflogenheit',
        forms: ['die Gepflogenheiten'],
        type: 'nomen',
        variantA: 'традиция, обычай',
        variantB: 'силуэт',
        variantC: 'смирение, успокоение',
        variantD: 'усталость, бессоница',
        correctAnswer: 'традиция, обычай'
    },
    {
        language: 'ger',
        word: 'gewöhnen sich AN',
        forms: ['gewöhnt', 'gewöhnte', 'hat gewöhnt'],
        type: 'verb',
        variantA: 'удовлетворять, устраивать',
        variantB: 'свыкнуться, осваиваться',
        variantC: 'негодовать, расстраиваться',
        variantD: 'раздражаться, нервничать',
        correctAnswer: 'свыкнуться, осваиваться'
    },
    {
        language: 'ger',
        word: 'der Abstand',
        forms: ['die Abstände'],
        type: 'nomen',
        variantA: 'традиция, обычай',
        variantB: 'успех, гармония',
        variantC: 'интервал, дистанция',
        variantD: 'процесс, действие',
        correctAnswer: 'интервал, дистанция'
    },
    {
        language: 'ger',
        word: 'ein halten',
        forms: ['hält ein', 'hielt ein', 'hat eingehalten'],
        type: 'verb',
        variantA: 'получать, сохранять',
        variantB: 'включать в себя, содержать',
        variantC: 'приводить в соответсвиие, упорядочивать',
        variantD: 'соблюдать, придерживаться',
        correctAnswer: 'соблюдать, придерживаться'
    },
    {
        language: 'ger',
        word: 'unverzüglich',
        forms: ['unverzüglicher', 'am unverzüglichsten'],
        type: 'adv',
        variantA: 'немедленно, срочно',
        variantB: 'грубый, жестокий',
        variantC: 'отважный, решительный',
        variantD: 'находчивый, ловкий',
        correctAnswer: 'немедленно, срочно'
    },
    {
        language: 'ger',
        word: 'der Vorrang',
        forms: ['die Vorrang'],
        type: 'nomen',
        variantA: 'традиция',
        variantB: 'преимущество',
        variantC: 'преграда',
        variantD: 'одобрение',
        correctAnswer: 'преимущество'
    },
    {
        language: 'ger',
        word: 'erholen SICH',
        forms: ['erholt', 'erholte', 'hat erholt'],
        type: 'verb',
        variantA: 'выздоравливать, поправляться',
        variantB: 'обижаться, обижать',
        variantC: 'повышать, увеличивать',
        variantD: 'сдерживаться, останавливаться ',
        correctAnswer: 'выздоравливать, поправляться'
    },
    {
        language: 'ger',
        word: 'der Verband',
        forms: ['die Verbände'],
        type: 'nomen',
        variantA: 'объединение, повязка',
        variantB: 'уточнение',
        variantC: 'выполнение, поручение',
        variantD: 'одобрение, подготовка',
        correctAnswer: 'объединение, повязка'
    },
    {
        language: 'ger',
        word: 'die Ausstellung',
        forms: ['die Ausstellungen'],
        type: 'nomen',
        variantA: 'представление',
        variantB: 'объявление',
        variantC: 'выставка',
        variantD: 'поручение',
        correctAnswer: 'выставка'
    },
    {
        language: 'ger',
        word: 'aus denken SICH',
        forms: ['denkt aus', 'dachte aus', 'hat ausgedacht'],
        type: 'verb',
        variantA: 'передумать',
        variantB: 'выдумывать, придумывать',
        variantC: 'усматривать, рассматривать',
        variantD: 'заявлять, ходатайствовать',
        correctAnswer: 'выдумывать, придумывать'
    },
    {
        language: 'ger',
        word: 'befürchten',
        forms: ['befürchtet', 'befürchtete', 'hat befürchtet'],
        type: 'verb',
        variantA: 'игнорировать, незамечать',
        variantB: 'выдумывать, придумывать',
        variantC: 'усматривать, рассматривать',
        variantD: 'опасаться, бояться',
        correctAnswer: 'опасаться, бояться'
    },
    {
        language: 'ger',
        word: 'bei·tragen',
        forms: ['trägt bei', 'trug bei', 'hat beigetragen'],
        type: 'verb',
        variantA: 'использовать, пользоваться',
        variantB: 'вносить вклад, содействовать',
        variantC: 'высчитывать, исчислять',
        variantD: 'рассчитывать, надеяться',
        correctAnswer: 'вносить вклад, содействовать'
    },
    {
        language: 'ger',
        word: 'instand setzen',
        forms: ['setzt instand', 'setzte instand', 'hat instandgesetzt'],
        type: 'verb',
        variantA: 'ремонтировать, приводить в порядок',
        variantB: 'углубляться, вдаваться в детали',
        variantC: 'достигать, двигаться',
        variantD: 'служить, прислуживать',
        correctAnswer: 'ремонтировать, приводить в порядок'
    },
    {
        language: 'ger',
        word: 'verfügen',
        forms: ['verfügt', 'verfügte', 'hat verfügt'],
        type: 'verb',
        variantA: 'употреблять, применять',
        variantB: 'менять, обменивать',
        variantC: 'постигать, настичь',
        variantD: 'располагать, обладать',
        correctAnswer: 'располагать, обладать'
    },
    {
        language: 'ger',
        word: 'auf·bewahren',
        forms: ['bewahrt auf', 'bewahrte auf', 'hat aufbewahrt'],
        type: 'verb',
        variantA: 'охранять, оберегать',
        variantB: 'хранить, иметь на хранение',
        variantC: 'остерегаться, бояться',
        variantD: 'надеяться, вверовать',
        correctAnswer: 'хранить, иметь на хранение'
    },
    {
        language: 'ger',
        word: 'betreffen',
        forms: ['betrifft', 'betraf', 'hat betroffen'],
        type: 'verb',
        variantA: 'воодушевлять, мотивировать',
        variantB: 'понимать, постигать',
        variantC: 'встречаться, встретиться',
        variantD: 'иметь отношение, затрагивать',
        correctAnswer: 'иметь отношение, затрагивать'
    },
    {
        language: 'ger',
        word: 'beziehen SICH AUF',
        forms: ['bezieht ', 'bezog ', 'hat bezogen'],
        type: 'verb',
        variantA: 'воспитывать, испытывать',
        variantB: 'бронировать, заказывать',
        variantC: 'граничить, соседствовать',
        variantD: 'иметь в виду, получать',
        correctAnswer: 'иметь в виду, получать'
    },
    {
        language: 'ger',
        word: 'die Mitteilung',
        forms: ['die Mitteilungen'],
        type: 'nomen',
        variantA: 'сообщение, извищение',
        variantB: 'объявление, оглошение',
        variantC: 'заявление',
        variantD: 'пояснение, объяснительная',
        correctAnswer: 'сообщение, извищение'
    },
    {
        language: 'ger',
        word: 'betrachten',
        forms: ['betrachtet ', 'betrachtete ', 'hat betrachtet'],
        type: 'verb',
        variantA: 'склоняться, полагать',
        variantB: 'испугаться, бояться',
        variantC: 'рассматривать, смотреть',
        variantD: 'разрушать, ломать',
        correctAnswer: 'рассматривать, смотреть'
    },
    {
        language: 'ger',
        word: 'der Anhang',
        forms: ['die Anhänge'],
        type: 'nomen',
        variantA: 'приказ, распоряжение',
        variantB: 'объявление, оглошение',
        variantC: 'приложение, дополнение',
        variantD: 'заявление, заявка',
        correctAnswer: 'приложение, дополнение'
    },
    {
        language: 'ger',
        word: 'die Zuständigkeit',
        forms: ['die Zuständigkeiten'],
        type: 'nomen',
        variantA: 'дополнение, добавление',
        variantB: 'управление, администрация, ',
        variantC: 'ответсвенность, обязательства',
        variantD: 'компетенция, круг полномочий',
        correctAnswer: 'компетенция, круг полномочий'
    },
    {
        language: 'ger',
        word: 'der Schalter',
        forms: ['die Schalter'],
        type: 'nomen',
        variantA: 'свидетель, очевидец',
        variantB: 'переключатель, стойка',
        variantC: 'актер, артист',
        variantD: 'обвинитель, прокурор',
        correctAnswer: 'переключатель, стойка'
    },
    {
        language: 'ger',
        word: 'die Bezeichnung',
        forms: ['die Bezeichnungen'],
        type: 'nomen',
        variantA: 'уточнение, дополнение',
        variantB: 'управление, администрация',
        variantC: 'наименование, название',
        variantD: 'оплата, уплата',
        correctAnswer: 'наименование, название'
    },
    {
        language: 'ger',
        word: 'verlaufen',
        forms: ['verläuft ', 'verlief', 'hat verlaufen'],
        type: 'verb',
        variantA: 'склоняться, полагать',
        variantB: 'заблуждаться, теряться',
        variantC: 'находить, обнаруживать',
        variantD: 'оставлять, приостанавливать',
        correctAnswer: 'заблуждаться, теряться'
    },
    {
        language: 'ger',
        word: 'der Rohstoff',
        forms: ['die Rohstoffe'],
        type: 'nomen',
        variantA: 'ткань',
        variantB: 'кастрюля, кувшин',
        variantC: 'добыча, доход',
        variantD: 'сырье, материал',
        correctAnswer: 'сырье, материал'
    },
    {
        language: 'ger',
        word: 'das Kennzeichen',
        forms: ['die Kennzeichen'],
        type: 'nomen',
        variantA: 'показатель, уровень',
        variantB: 'условие, причина',
        variantC: 'черта, регистрационный номер',
        variantD: 'обозначение, пометка',
        correctAnswer: 'черта, регистрационный номер'
    },
    {
        language: 'ger',
        word: 'der Gegenstand',
        forms: ['die Gegenstände'],
        type: 'nomen',
        variantA: 'объект, предмет',
        variantB: 'случай, случайность',
        variantC: 'противоположность, противопоставление',
        variantD: 'обозначение, метка',
        correctAnswer: 'объект, предмет'
    },
    {
        language: 'ger',
        word: 'weiter·leiten',
        forms: ['leitet weiter', 'leitete weiter', 'hat weitergeleitet'],
        type: 'verb',
        variantA: 'обучать, руководить',
        variantB: 'заблуждаться, теряться',
        variantC: 'передавать, перенаправлять',
        variantD: 'перемищаться, передвигаться',
        correctAnswer: 'передавать, перенаправлять'
    },
    {
        language: 'ger',
        word: 'verhandeln MIT',
        forms: ['leitet weiter', 'leitete weiter', 'hat weitergeleitet'],
        type: 'verb',
        variantA: 'договориваться',
        variantB: 'уступать, теряться преимущество',
        variantC: 'относиться, иметь отношение',
        variantD: 'задумывать, выдвигать идею',
        correctAnswer: 'договориваться'
    },
    {
        language: 'ger',
        word: 'ab·wechseln SICH',
        forms: ['wechselt ab', 'wechselte ab', 'hat abgewechselt'],
        type: 'verb',
        variantA: 'испытывать, ощущать',
        variantB: 'переходить, проходить',
        variantC: 'заманивать, приманивать',
        variantD: 'заменять кого-то, чередовать',
        correctAnswer: 'заменять кого-то, чередовать'
    },
    {
        language: 'ger',
        word: 'erbringen',
        forms: ['erbringt', 'erbrachte', 'hat erbracht'],
        type: 'verb',
        variantA: 'доносить, рассказывать',
        variantB: 'производить эффект, приносить результат',
        variantC: 'завести, заводить',
        variantD: 'пережить, переживать',
        correctAnswer: 'производить эффект, приносить результат'
    },
    {
        language: 'ger',
        word: 'der Rundgang',
        forms: ['die Rundgänge'],
        type: 'nomen',
        variantA: 'объект',
        variantB: 'происшествие',
        variantC: 'деталь, кольцо',
        variantD: 'обход, экскурсия',
        correctAnswer: 'обход, экскурсия'
    },
    {
        language: 'ger',
        word: 'beantworten',
        forms: ['beantworten', 'beantwortete', 'hat beantwortet'],
        type: 'verb',
        variantA: 'доносить, рассказывать',
        variantB: 'отвечать, реагировать',
        variantC: 'заводить разговор, беседовать',
        variantD: 'перебивать, препинать',
        correctAnswer: 'отвечать, реагировать'
    },
    {
        language: 'ger',
        word: 'berücksichtigen',
        forms: ['berücksichtigt', 'berücksichtigte', 'hat berücksichtigt'],
        type: 'verb',
        variantA: 'возвышать',
        variantB: 'уточнять, пояснять',
        variantC: 'страховать, перестраховывать',
        variantD: 'принимать во внимание, учитывать',
        correctAnswer: 'принимать во внимание, учитывать'
    },
    {
        language: 'ger',
        word: 'zu gehen AUF',
        forms: ['geht zu', 'ging zu', 'ist zugegangen'],
        type: 'verb',
        variantA: 'идти на встречу, спешить',
        variantB: 'повышать, возвышать',
        variantC: 'улучшать, улучшить',
        variantD: 'присоеденять, добавлять',
        correctAnswer: 'идти на встречу, спешить'
    },
    {
        language: 'ger',
        word: 'verfassen',
        forms: ['verfasst', 'verfasste', 'hat verfasst'],
        type: 'verb',
        variantA: 'удаляться, отходить',
        variantB: 'покидать, оставлять',
        variantC: 'сочинять, составлять',
        variantD: 'обходить, обойти',
        correctAnswer: 'сочинять, составлять'
    },
    {
        language: 'ger',
        word: 'die Anweisung',
        forms: ['die Anweisungen'],
        type: 'nomen',
        variantA: 'метод, способ',
        variantB: 'заявление, исполнение',
        variantC: 'ходотайство',
        variantD: 'инструкция, распоряжение',
        correctAnswer: 'инструкция, распоряжение'
    },
    {
        language: 'ger',
        word: 'eigenhändig',
        forms: ['-'],
        type: 'adv',
        variantA: 'сподручный',
        variantB: 'собственноручный',
        variantC: 'ручной',
        variantD: 'забытый',
        correctAnswer: 'собственноручный'
    },
    {
        language: 'ger',
        word: 'die Annahme',
        forms: ['die Annahmen'],
        type: 'nomen',
        variantA: 'идея, предложение',
        variantB: 'заявление, исполнение',
        variantC: 'предположение, допущение',
        variantD: 'обман, неправда',
        correctAnswer: 'предположение, допущение'
    },
    {
        language: 'ger',
        word: 'die Einrichtung',
        forms: ['die Einrichtungen'],
        type: 'nomen',
        variantA: 'направление',
        variantB: 'приспособление',
        variantC: 'предположение, допущение',
        variantD: 'обустройство, оборудование',
        correctAnswer: 'обустройство, оборудование'
    },
    {
        language: 'ger',
        word: 'an·halten SICH AN',
        forms: ['hält an', 'hielt an', 'hat angehalten'],
        type: 'verb',
        variantA: 'останавливать, предписывать',
        variantB: 'оставлять себе, сберегать',
        variantC: 'сочинять, составлять',
        variantD: 'предпринимать, действовать',
        correctAnswer: 'останавливать, предписывать'
    },
    {
        language: 'ger',
        word: 'auf·füllen',
        forms: ['füllt auf', 'füllte auf', 'hat aufgefühllt'],
        type: 'verb',
        variantA: 'уводить, провожать',
        variantB: 'запоминать, помнить',
        variantC: 'исключать, выключать',
        variantD: 'наполнять, доливать',
        correctAnswer: 'наполнять, доливать'
    },
    {
        language: 'ger',
        word: 'der Versuch',
        forms: ['die Versuche'],
        type: 'nomen',
        variantA: 'направление',
        variantB: 'способ',
        variantC: 'попытка',
        variantD: 'задача',
        correctAnswer: 'попытка'
    },
    {
        language: 'ger',
        word: 'aus·fallen',
        forms: ['fällt aus', 'fiel aus', 'ist ausgefallen'],
        type: 'verb',
        variantA: 'уходить, уводить',
        variantB: 'выходить из строя, отменять',
        variantC: 'препятствовать, заграждать',
        variantD: 'выпускать, терять',
        correctAnswer: 'выходить из строя, отменять'
    },
    {
        language: 'ger',
        word: 'einig',
        forms: ['-'],
        type: 'adv',
        variantA: 'согласный',
        variantB: 'единый',
        variantC: 'находчивый',
        variantD: 'забытый',
        correctAnswer: 'согласный'
    },
    {
        language: 'ger',
        word: 'herum·sprechen SICH',
        forms: ['spricht herum', 'sprach herum', 'hat herumgesprochen'],
        type: 'verb',
        variantA: 'обознаться',
        variantB: 'осведомляться',
        variantC: 'расспускать',
        variantD: 'распространяться',
        correctAnswer: 'распространяться'
    },
    {
        language: 'ger',
        word: 'zu·kommen AUF',
        forms: ['kommt zu', 'kam zu', 'ist zugekommen'],
        type: 'verb',
        variantA: 'отходить, уходить',
        variantB: 'затихать, тушить',
        variantC: 'приближаться, подходить',
        variantD: 'избавляться, отказаться',
        correctAnswer: 'приближаться, подходить'
    },
    {
        language: 'ger',
        word: 'liegen',
        forms: ['liegt', 'lag', 'ist gelegen'],
        type: 'verb',
        variantA: 'лежать, лежать в основе',
        variantB: 'засыпать, ложиться спать',
        variantC: 'приближаться, подходить',
        variantD: 'отходить, отступать',
        correctAnswer: 'лежать, лежать в основе'
    },
    {
        language: 'ger',
        word: 'mit·machen BEI',
        forms: ['macht mit', 'machte mit', 'hat mitgemacht'],
        type: 'verb',
        variantA: 'делать вместе, делать заодно',
        variantB: 'содействовать, помогать',
        variantC: 'улыбать, улыбнуться',
        variantD: 'участвовать, принимать участие',
        correctAnswer: 'участвовать, принимать участие'
    },
    {
        language: 'ger',
        word: 'hauptsächlich',
        forms: ['-'],
        type: 'adv',
        variantA: 'важный, принципиальный',
        variantB: 'единый, неповторимый',
        variantC: 'основной, главный',
        variantD: 'очередной, следующий',
        correctAnswer: 'основной, главный'
    },
    {
        language: 'ger',
        word: 'indem',
        forms: ['-'],
        type: 'adv',
        variantA: 'между тем, тем',
        variantB: 'путем, посредством',
        variantC: 'по причине, из-за',
        variantD: 'вопреки, против',
        correctAnswer: 'путем, посредством'
    },
    {
        language: 'ger',
        word: 'anwesend',
        forms: ['-'],
        type: 'adj',
        variantA: 'присутсвующий',
        variantB: 'отсылаемый',
        variantC: 'отсутсвующий',
        variantD: 'высылаемый',
        correctAnswer: 'присутсвующий'
    },
    {
        language: 'ger',
        word: 'übrig',
        forms: ['-'],
        type: 'adj',
        variantA: 'привычный',
        variantB: 'запасной, запасные',
        variantC: 'побочный',
        variantD: 'оставшийся, остальной',
        correctAnswer: 'оставшийся, остальной'
    },
    {
        language: 'ger',
        word: 'zeitweise',
        forms: ['-'],
        type: 'adv',
        variantA: 'измеримый',
        variantB: 'временно',
        variantC: 'недостаточный',
        variantD: 'постоянно',
        correctAnswer: 'временно'
    },
    {
        language: 'ger',
        word: 'jeweils',
        forms: ['-'],
        type: 'adv',
        variantA: 'соответсвующий',
        variantB: 'постепенно, последовательно',
        variantC: 'в каждом случае',
        variantD: 'постоянно, всегда',
        correctAnswer: 'в каждом случае'
    },
    {
        language: 'ger',
        word: 'die Zusammenfassung',
        forms: ['die Zusammenfassungen'],
        type: 'nomen',
        variantA: 'совместная работа',
        variantB: 'вывод, краткое содержание',
        variantC: 'инструктаж, инструкция',
        variantD: 'совместная продукция',
        correctAnswer: 'вывод, краткое содержание'
    },
    {
        language: 'ger',
        word: 'fordern',
        forms: ['fordert', 'forderte', 'hat gefordert'],
        type: 'verb',
        variantA: 'заниматься',
        variantB: 'следовать',
        variantC: 'требовать',
        variantD: 'пытаться',
        correctAnswer: 'требовать'
    },
    {
        language: 'ger',
        word: 'durch·führen',
        forms: ['führt durch', 'führte durch', 'hat durchgeführt'],
        type: 'verb',
        variantA: 'осуществлять, проводить в жизнь',
        variantB: 'следовать, идти через',
        variantC: 'возмущаться, противиться',
        variantD: 'ехать, ехать через',
        correctAnswer: 'осуществлять, проводить в жизнь'
    },
    {
        language: 'ger',
        word: 'aus·üben',
        forms: ['übt aus', 'übte aus', 'hat ausgeübt'],
        type: 'verb',
        variantA: 'упражняться, учиться',
        variantB: 'тренироваться, проводить тренировку',
        variantC: 'совершать, заниматься',
        variantD: 'обучаться, учиться',
        correctAnswer: 'совершать, заниматься'
    },
    {
        language: 'ger',
        word: 'erfüllen',
        forms: ['erfüllt', 'erfullte', 'hat erfüllt'],
        type: 'verb',
        variantA: 'чувствовать, почувствовать',
        variantB: 'тренироваться, проводить тренировку',
        variantC: 'совершать, заниматься',
        variantD: 'исполнять, выполнять',
        correctAnswer: 'исполнять, выполнять'
    },
    {
        language: 'ger',
        word: 'verärgern',
        forms: ['verärgert', 'verärgerte', 'hat verärgert'],
        type: 'verb',
        variantA: 'побеспокоить',
        variantB: 'разозлить',
        variantC: 'успокаивать',
        variantD: 'жаловаться',
        correctAnswer: 'разозлить'
    },
    {
        language: 'ger',
        word: 'aus·kennen',
        forms: ['kennt aus', 'kannte aus', 'hat ausgekannt'],
        type: 'verb',
        variantA: 'разбираться в чем-либо',
        variantB: 'узнавать кого-то',
        variantC: 'преграждать кому-то путь',
        variantD: 'неузнавать кого-то',
        correctAnswer: 'разбираться в чем-либо'
    },
    {
        language: 'ger',
        word: 'ein·lenken ',
        forms: ['lenkt ein', 'lenkte ein', 'ist eingelenkt'],
        type: 'verb',
        variantA: 'забирать',
        variantB: 'узнавать кого-то',
        variantC: 'преграждать кому-то путь',
        variantD: 'уступать',
        correctAnswer: 'уступать'
    },
    {
        language: 'ger',
        word: 'ein·wenden',
        forms: ['wendet ein', 'wandte ein', 'hat eingewandt'],
        type: 'verb',
        variantA: 'нуждаться',
        variantB: 'присутвовать',
        variantC: 'возражать',
        variantD: 'уступать',
        correctAnswer: 'возражать'
    },
    {
        language: 'ger',
        word: 'meistern',
        forms: ['meistert', 'meisterte', 'hat gemeistert'],
        type: 'verb',
        variantA: 'присуждать, присудить',
        variantB: 'мастерить',
        variantC: 'главенствовать',
        variantD: 'осваивать, овладевать',
        correctAnswer: 'осваивать, овладевать'
    },
    {
        language: 'ger',
        word: 'bewahren',
        forms: ['bewahrt', 'bewahrte', 'hat bewahrt'],
        type: 'verb',
        variantA: 'оценивать',
        variantB: 'осуждать, недопольствовать',
        variantC: 'сохранять, сберегать',
        variantD: 'осваивать, овладевать',
        correctAnswer: 'сохранять, сберегать'
    },
    {
        language: 'ger',
        word: 'nach·haken',
        forms: ['hakt nach', 'hakte nach', 'hat nachgehackt'],
        type: 'verb',
        variantA: 'оценивать',
        variantB: 'осуждать, недопольствовать',
        variantC: 'сохранять, сберегать',
        variantD: 'осваивать, овладевать',
        correctAnswer: 'сохранять, сберегать'
    },
    {
        language: 'ger',
        word: 'bewältigen',
        forms: ['bewältigt', 'bewältigte', 'hat bewältigt'],
        type: 'verb',
        variantA: 'оценивать, ценить',
        variantB: 'преодолевать, справляться',
        variantC: 'сохранять, сберегать',
        variantD: 'охранять, защищать',
        correctAnswer: 'преодолевать, справляться'
    },
    {
        language: 'ger',
        word: 'an·wenden SICH',
        forms: ['wendet an', 'wandte an', 'hat angewendet'],
        type: 'verb',
        variantA: 'обращаться к, применять',
        variantB: 'преодоливать, справляться',
        variantC: 'менять, изменять',
        variantD: 'недопускать, устранять',
        correctAnswer: 'преодоливать, справляться'
    },
    {
        language: 'ger',
        word: 'ansonsten',
        forms: ['-'],
        type: 'adv',
        variantA: 'необычно',
        variantB: 'однажды',
        variantC: 'в каждом случае',
        variantD: 'в ином случае',
        correctAnswer: 'в ином случае'
    },
    {
        language: 'ger',
        word: 'ubrigens',
        forms: ['-'],
        type: 'adv',
        variantA: 'привычно',
        variantB: 'вероятно',
        variantC: 'отдельно',
        variantD: 'кстати',
        correctAnswer: 'кстати'
    },
    {
        language: 'ger',
        word: 'erweisen',
        forms: ['erweist', 'erwies', 'hat erwiesen'],
        type: 'verb',
        variantA: 'стесняться',
        variantB: 'доказывать',
        variantC: 'меняться',
        variantD: 'устранять',
        correctAnswer: 'доказывать'
    },
    {
        language: 'ger',
        word: 'wirken',
        forms: ['wirkt', 'wirkte', 'hat gewirkt'],
        type: 'verb',
        variantA: 'производить, насчитывать, общитывать',
        variantB: 'доказывать, обвинять, употреблять',
        variantC: 'влиять, действовать, выглядеть',
        variantD: 'совершать, выполнять, исполнять',
        correctAnswer: 'влиять, действовать, выглядеть'
    },
    {
        language: 'ger',
        word: 'an geben',
        forms: ['gibt an', 'gab an', 'hat angegeben'],
        type: 'verb',
        variantA: 'указывать, заявлять, хвастаться',
        variantB: 'отказываться, отказаться',
        variantC: 'менять, изменять, поменять',
        variantD: 'сдаваться',
        correctAnswer: 'указывать, заявлять, хвастаться'
    },
    {
        language: 'ger',
        word: 'aus geben',
        forms: ['gibt aus', 'gab aus', 'hat ausgegeben'],
        type: 'verb',
        variantA: 'указывать, хвастаться',
        variantB: 'отказываться, отказаться',
        variantC: 'расходывать, тратить',
        variantD: 'сдаваться',
        correctAnswer: 'расходывать, тратить'
    },
    {
        language: 'ger',
        word: 'auf geben',
        forms: ['gibt auf', 'gab auf', 'hat aufgegeben'],
        type: 'verb',
        variantA: 'указывать, хвастаться, сообщать',
        variantB: 'отказываться, отказаться, лишаться',
        variantC: 'расходывать, тратить, выплачивать',
        variantD: 'прекращать, бросать, сдаваться',
        correctAnswer: 'прекращать, бросать, сдаваться'
    },
    {
        language: 'ger',
        word: 'zu geben',
        forms: ['gibt zu', 'gab zu', 'hat zugegeben'],
        type: 'verb',
        variantA: 'указывать, хвастаться',
        variantB: 'прекращать, сдаваться',
        variantC: 'признавать, соглашаться',
        variantD: 'расходывать, тратить',
        correctAnswer: 'признавать, соглашаться'
    },
    {
        language: 'ger',
        word: 'ein geben',
        forms: ['gibt ein', 'gab ein', 'hat eingegeben'],
        type: 'verb',
        variantA: 'указывать, хвастаться',
        variantB: 'прекращать, сдаваться',
        variantC: 'признавать, соглашаться',
        variantD: 'вводить, давать',
        correctAnswer: 'вводить, давать'
    },
    {
        language: 'ger',
        word: 'übergeben',
        forms: ['übergibt', 'übergab', 'hat übergegeben'],
        type: 'verb',
        variantA: 'передавать, перепоручать',
        variantB: 'прекращать, сдаваться',
        variantC: 'признавать, соглашаться',
        variantD: 'вводить, давать',
        correctAnswer: 'передавать, перепоручать'
    },
    {
        language: 'ger',
        word: 'begeben',
        forms: ['begibt', 'begab', 'hat begeben'],
        type: 'verb',
        variantA: 'отправляться, направляться',
        variantB: 'прекращать, сдаваться',
        variantC: 'признавать, соглашаться',
        variantD: 'вводить, давать',
        correctAnswer: 'отправляться, направляться'
    },
    {
        language: 'ger',
        word: 'vergeben',
        forms: ['vergibt', 'vergab', 'hat vergeben'],
        type: 'verb',
        variantA: 'отправляться, направляться',
        variantB: 'прекращать, сдаваться',
        variantC: 'прощать, предоставлять',
        variantD: 'вводить, давать',
        correctAnswer: 'прощать, предоставлять'
    },
    {
        language: 'ger',
        word: 'vorrätig',
        forms: ['-'],
        type: 'adv',
        variantA: 'привычно, обычно',
        variantB: 'вероятно, возможно',
        variantC: 'доступно, в наличии',
        variantD: 'кстати, причем',
        correctAnswer: 'доступно, в наличии'
    },
    {
        language: 'ger',
        word: 'demnächst',
        forms: ['-'],
        type: 'adv',
        variantA: 'случайно, неожиданно',
        variantB: 'вероятно, возможно',
        variantC: 'после этого',
        variantD: 'вскоре, скоро',
        correctAnswer: 'вскоре, скоро'
    },
    {
        language: 'ger',
        word: 'die Angelegenheit',
        forms: ['die Angelegenheiten'],
        type: 'nomen',
        variantA: 'возможность, шанс',
        variantB: 'дело, вопрос',
        variantC: 'случай, происшествие',
        variantD: 'объект, ресурс',
        correctAnswer: 'дело, вопрос'
    },
    {
        language: 'ger',
        word: 'berechtigt',
        forms: ['berechtigter', 'am berechtigtsten'],
        type: 'adv',
        variantA: 'отрегулированный, настроеный',
        variantB: 'мнительный, робкий',
        variantC: 'справедливый, законный',
        variantD: 'опасный',
        correctAnswer: 'справедливый, законный'
    },
    {
        language: 'ger',
        word: 'aus·werten',
        forms: ['wertet aus', 'wertete aus', 'hat ausgewertet'],
        type: 'verb',
        variantA: 'отправляться, направляться',
        variantB: 'прекращать, сдаваться',
        variantC: 'отказываться, избавляться',
        variantD: 'анализировать, оценивать',
        correctAnswer: 'анализировать, оценивать'
    },
    {
        language: 'ger',
        word: 'ernst nehmen',
        forms: ['nimmt ernst', 'nahm ernst', 'hat ernst genommen'],
        type: 'verb',
        variantA: 'брать впервые',
        variantB: 'прекращать',
        variantC: 'воспринимать всерьез',
        variantD: 'анализировать',
        correctAnswer: 'воспринимать всерьез'
    },
    {
        language: 'ger',
        word: 'belegen',
        forms: ['belegt', 'belegte', 'hat belegt'],
        type: 'verb',
        variantA: 'переживать',
        variantB: 'прекращать',
        variantC: 'занимать, доказывать',
        variantD: 'откладывать, сомневаться',
        correctAnswer: 'занимать, доказывать'
    },
    {
        language: 'ger',
        word: 'an nehmen',
        forms: ['nimmt an', 'nahm an', 'hat angenommen'],
        type: 'verb',
        variantA: 'соглашаться, одобрять',
        variantB: 'отказывать, отклонять',
        variantC: 'принимать, предполагать',
        variantD: 'откладывать, сомневаться',
        correctAnswer: 'принимать, предполагать'
    },
    {
        language: 'ger',
        word: 'auf nehmen',
        forms: ['nimmt auf', 'nahm auf', 'hat aufgenommen'],
        type: 'verb',
        variantA: 'соглашаться, одобрять, склоняться',
        variantB: 'отказывать, отклонять',
        variantC: 'принимать, предполагать, предвидеть',
        variantD: 'включать в себя, получать, начинать',
        correctAnswer: 'включать в себя, получать, начинать'
    },
    {
        language: 'ger',
        word: 'benehmen SICH',
        forms: ['benimmt', 'benahm', 'hat benommen'],
        type: 'verb',
        variantA: 'соглашаться, одобрять, склоняться',
        variantB: 'вести себя',
        variantC: 'принимать, предполагать, предвидеть',
        variantD: 'включать в себя, получать, начинать',
        correctAnswer: 'вести себя'
    },
    {
        language: 'ger',
        word: 'das Benehmen',
        forms: ['die Benehmen'],
        type: 'nome',
        variantA: 'одобрение',
        variantB: 'согласие',
        variantC: 'поведение',
        variantD: 'заявление',
        correctAnswer: 'поведение'
    },
    {
        language: 'ger',
        word: 'zebrechen',
        forms: ['zebricht', 'zebrach', 'ist zerbrochen'],
        type: 'verb',
        variantA: 'столкнуться, спотыкаться',
        variantB: 'ранить, пораниться',
        variantC: 'нарушать, несоблюдать',
        variantD: 'разбивать, ломать',
        correctAnswer: 'разбивать, ломать'
    },
    {
        language: 'ger',
        word: 'ähnlich',
        forms: ['ähnlicher, am ähnlichsten'],
        type: 'adj',
        variantA: 'обычный, обыкновенный',
        variantB: 'безопасный, неопасный',
        variantC: 'схожий, подобный',
        variantD: 'скорый, быстрый',
        correctAnswer: 'схожий, подобный'
    },
    {
        language: 'ger',
        word: 'verschwinden',
        forms: ['verschwindet', 'verschwand', 'ist verschwunden'],
        type: 'verb',
        variantA: 'обидеться, быть обиженным',
        variantB: 'исчезать, скрываться',
        variantC: 'загрязнять, испачкать',
        variantD: 'обидеть, обижать',
        correctAnswer: 'исчезать, скрываться'
    },
    {
        language: 'ger',
        word: 'der Engpass',
        forms: ['die Engpässe'],
        type: 'nome',
        variantA: 'недостача, дефицит',
        variantB: 'документ, паспорт',
        variantC: 'вложение, приложение',
        variantD: 'оболочка, контур',
        correctAnswer: 'недостача, дефицит'
    },
    {
        language: 'ger',
        word: 'fällig',
        forms: ['-'],
        type: 'adv',
        variantA: 'просроченный',
        variantB: 'упавший',
        variantC: 'подлежащий исполнению',
        variantD: 'потраченный',
        correctAnswer: 'подлежащий исполнению'
    },
    {
        language: 'ger',
        word: 'die Feststellung',
        forms: ['die Feststellungen'],
        type: 'nome',
        variantA: 'представление',
        variantB: 'заключение',
        variantC: 'напоминание',
        variantD: 'поручение',
        correctAnswer: 'заключение'
    },
    {
        language: 'ger',
        word: 'unverbindlich',
        forms: ['unverbindlicher, am unverbindlichsten'],
        type: 'adj',
        variantA: 'негарантированный, необязательный',
        variantB: 'спонтанный',
        variantC: 'целенаправленный',
        variantD: 'обязательный, необходимый',
        correctAnswer: 'негарантированный, необязательный'
    },
    {
        language: 'ger',
        word: 'zurück·treten VON',
        forms: ['tritt züruck', 'tratt züruck', 'hat zurückgetreten'],
        type: 'verb',
        variantA: 'пройти, пересечь',
        variantB: 'переступить, перешагнуть',
        variantC: 'нарушать, несоблюдать',
        variantD: 'уйти в отставку, отказаться от',
        correctAnswer: 'уйти в отставку, отказаться от'
    },
    {
        language: 'ger',
        word: 'gezwungen',
        forms: ['gezwungener, am gezwungensten'],
        type: 'adj',
        variantA: 'раздражительный, нервный',
        variantB: 'принужденный',
        variantC: 'целенаправленный',
        variantD: 'обязательный',
        correctAnswer: 'принужденный'
    },
    {
        language: 'ger',
        word: 'die Bemühung',
        forms: ['die Bemühungen'],
        type: 'nomen',
        variantA: 'забота, внимание',
        variantB: 'концентрация',
        variantC: 'исполнительность, ответсвенность',
        variantD: 'старания, усилия',
        correctAnswer: 'старания, усилия'
    },
    {
        language: 'ger',
        word: 'unterbreiten',
        forms: ['unterbreitet', 'unterbreitete', 'hat unterbreitet'],
        type: 'verb',
        variantA: 'пройти, пересечь',
        variantB: 'вынести на расмотрение, предложить',
        variantC: 'нарушать, несоблюдать',
        variantD: 'подготовиться, приготовиться',
        correctAnswer: 'вынести на расмотрение, предложить'
    },
    {
        language: 'ger',
        word: 'die Auflösung',
        forms: ['die Auflösungen'],
        type: 'nome',
        variantA: 'разрешение, роспуск',
        variantB: 'понятие, определение',
        variantC: 'исполнительность, ответсвенность',
        variantD: 'старания, усилия',
        correctAnswer: 'разрешение, роспуск'
    },
    {
        language: 'ger',
        word: 'definieren',
        forms: ['definiert', 'definierte', 'hat definiert'],
        type: 'verb',
        variantA: 'просить, умолять',
        variantB: 'вынести на расмотрение, предложить',
        variantC: 'давать определение, определять',
        variantD: 'подготовиться, приготовиться',
        correctAnswer: 'давать определение, определять'
    },
    {
        language: 'ger',
        word: 'gestehen',
        forms: ['gesteht', 'gestand', 'hat gestanden'],
        type: 'verb',
        variantA: 'просить, умолять',
        variantB: 'простить, прощать',
        variantC: 'убедить, убеждать',
        variantD: 'признаваться, признавать',
        correctAnswer: 'признаваться, признавать'
    },
    {
        language: 'ger',
        word: 'flehen UM',
        forms: ['fleht', 'flehte', 'hat gefleht'],
        type: 'verb',
        variantA: 'просить, умолять',
        variantB: 'простить, прощать',
        variantC: 'убедить, убеждать',
        variantD: 'улетать, убывать',
        correctAnswer: 'просить, умолять'
    },
    {
        language: 'ger',
        word: 'hinterlassen',
        forms: ['hinterlässt', 'hinterließ', 'hat hinterlassen'],
        type: 'verb',
        variantA: 'оставлять, покидать (место)',
        variantB: 'простить, прощать',
        variantC: 'оставлять, покидать (человека)',
        variantD: 'улетать, убывать',
        correctAnswer: 'оставлять, покидать (человека)'
    },
    {
        language: 'ger',
        word: 'verlassen',
        forms: ['verlässt', 'verließ', 'hat verlassen'],
        type: 'verb',
        variantA: 'оставлять, покидать (место)',
        variantB: 'простить, прощать',
        variantC: 'оставлять, покидать (человека)',
        variantD: 'улетать, убывать',
        correctAnswer: 'оставлять, покидать (место)'
    },
    {
        language: 'ger',
        word: 'veranlassen',
        forms: ['veranlasst', 'veranlasste', 'hat veranlasst'],
        type: 'verb',
        variantA: 'оставлять, покидать (место)',
        variantB: 'побуждать, побудить',
        variantC: 'оставлять, покидать (человека)',
        variantD: 'забывать, забыть',
        correctAnswer: 'побуждать, побудить'
    },
    {
        language: 'ger',
        word: 'bezugnehmend',
        forms: ['-'],
        type: 'adv',
        variantA: 'раздражительный, нервный',
        variantB: 'принужденный, обязанный',
        variantC: 'ссылающийся, касающийся',
        variantD: 'превосходный',
        correctAnswer: 'ссылающийся, касающийся'
    },
    {
        language: 'ger',
        word: 'anliegend',
        forms: ['-'],
        type: 'adv',
        variantA: 'прилагаемый, приложенный',
        variantB: 'принужденный, обязанный',
        variantC: 'ссылающийся, касающийся',
        variantD: 'прилегающий, примыкающий',
        correctAnswer: 'прилегающий, примыкающий'
    },
    {
        language: 'ger',
        word: 'beiliegend',
        forms: ['-'],
        type: 'adv',
        variantA: 'прилагаемый, приложенный',
        variantB: 'принужденный, обязанный',
        variantC: 'ссылающийся, касающийся',
        variantD: 'прилегающий, примыкающий',
        correctAnswer: 'прилагаемый, приложенный'
    },
    {
        language: 'ger',
        word: 'hervorragend',
        forms: ['-'],
        type: 'adv',
        variantA: 'впереди идущий, ведущий',
        variantB: 'принужденный, обязанный',
        variantC: 'выдающийся, замечательный',
        variantD: 'близкий, приятный',
        correctAnswer: 'выдающийся, замечательный'
    },
    {
        language: 'ger',
        word: 'gesamt',
        forms: ['-'],
        type: 'adv',
        variantA: 'весь',
        variantB: 'вовсе',
        variantC: 'всем',
        variantD: 'вместе',
        correctAnswer: 'весь'
    },
    {
        language: 'ger',
        word: 'begleichen',
        forms: ['begleicht', 'beglich', 'hat begleichen'],
        type: 'verb',
        variantA: 'сравнивать',
        variantB: 'оплачивать',
        variantC: 'уравнивать',
        variantD: 'убирать',
        correctAnswer: 'оплачивать'
    },
    {
        language: 'ger',
        word: 'gelegen',
        forms: ['gelegener, am gelegensten'],
        type: 'adj',
        variantA: 'равный, одинаковый',
        variantB: 'более удобный, более подходящий',
        variantC: 'целенаправленный, целеустремленный',
        variantD: 'воспитанный, образованный',
        correctAnswer: 'более удобный, более подходящий'
    },
    {
        language: 'ger',
        word: 'die Vorlage',
        forms: ['die Vorlagen'],
        type: 'nomen',
        variantA: 'проект, образец, шаблон',
        variantB: 'убеждение, верования',
        variantC: 'сомнения, неуверенность',
        variantD: 'старания, усилия',
        correctAnswer: 'проект, образец, шаблон'
    },
    {
        language: 'ger',
        word: 'die Bedingung',
        forms: ['die Bedingungen'],
        type: 'nomen',
        variantA: 'условия',
        variantB: 'убеждение, верования',
        variantC: 'сомнения, неуверенность',
        variantD: 'старания, усилия',
        correctAnswer: 'условия'
    },
    {
        language: 'ger',
        word: 'empfangen',
        forms: ['empfängt', 'empfing', 'hat empfangen'],
        type: 'verb',
        variantA: 'воспринимать, размышлять',
        variantB: 'принимать (человек), встречать',
        variantC: 'влиять, убеждать',
        variantD: 'убирать',
        correctAnswer: 'принимать (человек), встречать'
    },
    {
        language: 'ger',
        word: 'beabsichtigen',
        forms: ['beabsichtigt', 'beabsichtigte', 'hat beabsichtigt'],
        type: 'verb',
        variantA: 'проверять, перепроверять',
        variantB: 'принимать (человек), встречать',
        variantC: 'намереваться, собираться',
        variantD: 'посещать (человек)',
        correctAnswer: 'намереваться, собираться'
    },
    {
        language: 'ger',
        word: 'verhindern',
        forms: ['verhindert', 'verhinderte', 'hat verhindert'],
        type: 'verb',
        variantA: 'проверять, перепроверять',
        variantB: 'предотвращать, препятствовать, помешать',
        variantC: 'намереваться, собираться что-то сделать',
        variantD: 'выполнить, исполнить, осуществить',
        correctAnswer: 'предотвращать, препятствовать, помешать'
    },
    {
        language: 'ger',
        word: 'diesbezüglich',
        forms: ['-'],
        type: 'adv',
        variantA: 'относительно этого, об этом',
        variantB: 'потому что',
        variantC: 'вопреки тому',
        variantD: 'в понимании',
        correctAnswer: 'относительно этого, об этом'
    },
    {
        language: 'ger',
        word: 'die Panne',
        forms: ['die Pannen'],
        type: 'nomen',
        variantA: 'условия, обстоятельство',
        variantB: 'убеждение, верования',
        variantC: 'сомнения, неуверенность',
        variantD: 'авария, поломка, неисправность',
        correctAnswer: 'авария, поломка, неисправность'
    },
    {
        language: 'ger',
        word: 'die Pannendienst',
        forms: ['die Pannendienste'],
        type: 'nomen',
        variantA: 'условие, обстоятельство',
        variantB: 'аварийная служба, техпомощь',
        variantC: 'сомнения, неуверенность',
        variantD: 'авария, поломка, неисправность',
        correctAnswer: 'аварийная служба, техпомощь'
    },
    {
        language: 'ger',
        word: 'berühren',
        forms: ['berührt', 'berührte', 'hat berührt'],
        type: 'verb',
        variantA: 'прикоснуться к чему-то',
        variantB: 'предотвращать, препятствовать, помешать',
        variantC: 'намереваться, собираться что-то сделать',
        variantD: 'сталкнуться с ситуацией, соприкоснуться',
        correctAnswer: 'сталкнуться с ситуацией, соприкоснуться'
    },
    {
        language: 'ger',
        word: 'anfassen',
        forms: ['fasst an', 'fasste an', 'hat angefasst'],
        type: 'verb',
        variantA: 'прикоснуться к чему-то',
        variantB: 'предотвращать, препятствовать, помешать',
        variantC: 'намереваться, собираться что-то сделать',
        variantD: 'сталкнуться с ситуацией, соприкоснуться',
        correctAnswer: 'прикоснуться к чему-то'
    },
    {
        language: 'ger',
        word: 'ein·setzen',
        forms: ['setzt ein', 'setzte ein', 'hat eingesetzt'],
        type: 'verb',
        variantA: 'принять, принять к сведенью',
        variantB: 'казаться, случаться',
        variantC: 'войти, входить',
        variantD: 'установить, вставить',
        correctAnswer: 'установить, вставить'
    },
    {
        language: 'ger',
        word: 'zurück·setzen',
        forms: ['setzt zurück', 'setzte zurück', 'hat zurückgesetzt'],
        type: 'verb',
        variantA: 'принять, принять к сведенью',
        variantB: 'вернуться, возвращаться',
        variantC: 'поставить обратно, ставить обратно',
        variantD: 'установить, вставить',
        correctAnswer: 'поставить обратно, ставить обратно'
    },
    {
        language: 'ger',
        word: 'aus·werfen',
        forms: ['wirft aus', 'warf aus', 'hat ausgeworfen'],
        type: 'verb',
        variantA: 'принимать, исполнять',
        variantB: 'выбрасывать, выкидывать',
        variantC: 'осуществлять, реализовать',
        variantD: 'поменять, сменить',
        correctAnswer: 'выбрасывать, выкидывать'
    },
    {
        language: 'ger',
        word: 'auf·werfen',
        forms: ['wirft auf', 'warf auf', 'hat aufgeworfen'],
        type: 'verb',
        variantA: 'принимать, исполнять',
        variantB: 'выбрасывать, выкидывать',
        variantC: 'добавлять, увеличивать',
        variantD: 'поднимать вопрос, копать, насыпать',
        correctAnswer: 'поднимать вопрос, копать, насыпать'
    },
    {
        language: 'ger',
        word: 'aus·rüsten MIT',
        forms: ['rüstet aus', 'rüstete aus', 'hat ausgerüstet'],
        type: 'verb',
        variantA: 'снабжать, обеспечивать',
        variantB: 'окрашивать, красить',
        variantC: 'откидывать, выкидывать',
        variantD: 'отказываться от заявления',
        correctAnswer: 'снабжать, обеспечивать'
    },
    {
        language: 'ger',
        word: 'versiert',
        forms: ['versierter, am versiertesten'],
        type: 'adj',
        variantA: 'равнодушный, безметяженый',
        variantB: 'квалифицированный, опытный',
        variantC: 'целенаправленный, целеустремленный',
        variantD: 'бесполезный, напрасный',
        correctAnswer: 'квалифицированный, опытный'
    },
    {
        language: 'ger',
        word: 'ausführlich',
        forms: ['ausführlicher, am ausführlichsten'],
        type: 'adj',
        variantA: 'подробный, детальный',
        variantB: 'квалифицированный, опытный',
        variantC: 'целенаправленный, целеустремленный',
        variantD: 'бесполезный, напрасный',
        correctAnswer: 'подробный, детальный'
    },
    {
        language: 'ger',
        word: 'wieder·geben',
        forms: ['gibt wieder', 'gab wieder', 'hat wiedergegeben'],
        type: 'verb',
        variantA: 'передавать, переносить',
        variantB: 'излагать, возвращать, воспроизводить',
        variantC: 'откидывать, выкидывать, откладывать',
        variantD: 'воспользоваться, организовывать',
        correctAnswer: 'излагать, возвращать, воспроизводить'
    },
    {
        language: 'ger',
        word: 'wieder geben',
        forms: ['gibt wieder', 'gab wieder', 'hat wiedergegeben'],
        type: 'verb',
        variantA: 'передавать, переносить',
        variantB: 'излагать, возвращать, воспроизводить',
        variantC: 'откидывать, выкидывать, откладывать',
        variantD: 'воспользоваться, организовывать',
        correctAnswer: 'излагать, возвращать, воспроизводить'
    },
    {
        language: 'ger',
        word: 'auf fallen',
        forms: ['fällt auf', 'fiel auf', 'ist aufgefallen'],
        type: 'verb',
        variantA: 'выходить из строя, ломаться',
        variantB: 'производить впечатление, впечетлять',
        variantC: 'откидывать, выкидывать, откладывать',
        variantD: 'броситься в глаза, привлечь внимание',
        correctAnswer: 'броситься в глаза, привлечь внимание'
    },
    {
        language: 'ger',
        word: 'an fallen',
        forms: ['fällt an', 'fiel an', 'ist angefallen'],
        type: 'verb',
        variantA: 'выходить из строя, ломаться',
        variantB: 'производить впечатление, впечетлять',
        variantC: 'накапливаться, возникать, нападать',
        variantD: 'броситься в глаза, привлечь внимание',
        correctAnswer: 'накапливаться, возникать, нападать'
    },
    {
        language: 'ger',
        word: 'ein fallen',
        forms: ['fällt ein', 'fiel ein', 'ist eingefallen'],
        type: 'verb',
        variantA: 'выходить из строя, ломаться',
        variantB: 'озарять, осенять, приходить на ум',
        variantC: 'накапливаться, возникать, нападать',
        variantD: 'броситься в глаза, привлечь внимание',
        correctAnswer: 'озарять, осенять, приходить на ум'
    },
    {
        language: 'ger',
        word: 'an schließen',
        forms: ['schließt an', 'schloss an', 'hat angeschlossen'],
        type: 'verb',
        variantA: 'передавать, передать',
        variantB: 'закрывать, прикрывать',
        variantC: 'присоеденять, подключать',
        variantD: 'отключать, отсоединять',
        correctAnswer: 'присоеденять, подключать'
    },
    {
        language: 'ger',
        word: 'entdecken',
        forms: ['entdeckt', 'entdeckte', 'hat entdeckt'],
        type: 'verb',
        variantA: 'обнаруживать, обнаружить',
        variantB: 'закрывать, прикрывать',
        variantC: 'накрывать, накрыть',
        variantD: 'изучать, исследовать',
        correctAnswer: 'обнаруживать, обнаружить'
    },
    {
        language: 'ger',
        word: 'bereuen',
        forms: ['bereut', 'bereute', 'hat bereut'],
        type: 'verb',
        variantA: 'печалиться, горевать',
        variantB: 'сожалеть, жалеть',
        variantC: 'обнаруживать, открывать',
        variantD: 'заботиться, беспокоиться',
        correctAnswer: 'сожалеть, жалеть'
    },
    {
        language: 'ger',
        word: 'beseitigen',
        forms: ['beseitigt', 'beseitigt', 'hat beseitigt'],
        type: 'verb',
        variantA: 'владеть, овладевать',
        variantB: 'занимать место, быть занятым',
        variantC: 'обнаруживать, открывать',
        variantD: 'устранять, исправлять, удалить',
        correctAnswer: 'устранять, исправлять, удалить'
    },
    {
        language: 'ger',
        word: 'bewerten',
        forms: ['bewertet', 'bewertete', 'hat bewertet'],
        type: 'verb',
        variantA: 'рекламировать что-то',
        variantB: 'занимать место, быть занятым',
        variantC: 'оценивать, расценивать, исчислять стоимость',
        variantD: 'жаловаться, обжаловать',
        correctAnswer: 'оценивать, расценивать, исчислять стоимость'
    },
    {
        language: 'ger',
        word: 'erwerben',
        forms: ['erwirbt', 'erwarb', 'hat erworben'],
        type: 'verb',
        variantA: 'узнавать, обнаруживать',
        variantB: 'приобретать, зарабатывать',
        variantC: 'оценивать, расценивать, исчислять стоимость',
        variantD: 'жаловаться, обжаловать',
        correctAnswer: 'приобретать, зарабатывать'
    },
    {
        language: 'ger',
        word: 'ermitteln',
        forms: ['ermittelt', 'ermittelte', 'hat ermittelt'],
        type: 'verb',
        variantA: 'узнавать, разузнавать, выясняять',
        variantB: 'приобретать, зарабатывать',
        variantC: 'сообщать, указывать',
        variantD: 'происходить, возникать',
        correctAnswer: 'узнавать, разузнавать, выясняять'
    },
    {
        language: 'ger',
        word: 'erkennen',
        forms: ['erkennt', 'erkannte', 'hat erkannt'],
        type: 'verb',
        variantA: 'контролировать, обеспечивать',
        variantB: 'приобретать, зарабатывать',
        variantC: 'обнаружить, узнавать, распознать',
        variantD: 'знакомить, знакомиться',
        correctAnswer: 'обнаружить, узнавать, распознать'
    },
    {
        language: 'ger',
        word: 'der Zufall',
        forms: ['die Zufälle'],
        type: 'nomen',
        variantA: 'сбережения, накопления',
        variantB: 'волнение',
        variantC: 'вознаграждение',
        variantD: 'случайность',
        correctAnswer: 'случайность'
    },
    {
        language: 'ger',
        word: 'der Zufall',
        forms: ['die Zufälle'],
        type: 'nomen',
        variantA: 'сбережения, накопления',
        variantB: 'волнение',
        variantC: 'вознаграждение',
        variantD: 'случайность',
        correctAnswer: 'случайность'
    },
    {
        language: 'ger',
        word: 'die Fertigkeit',
        forms: ['die Fertigkeiten'],
        type: 'nomen',
        variantA: 'сбережения, накопления, доходы',
        variantB: 'навык, умение, способность',
        variantC: 'волнения, сомнения, переживание',
        variantD: 'случайность, вымысел',
        correctAnswer: 'навык, умение, способность'
    },
    {
        language: 'ger',
        word: 'die Auswirkung',
        forms: ['die Auswirkungут'],
        type: 'nomen',
        variantA: 'сбережения, накопления, доходы',
        variantB: 'навык, умение, способность',
        variantC: 'волнения, сомнения, переживание',
        variantD: 'влияние, воздействие, действие',
        correctAnswer: 'влияние, воздействие, действие'
    },
    {
        language: 'ger',
        word: 'ausnahmsweise',
        forms: ['-'],
        type: 'adv',
        variantA: 'соответственно, соответствующий',
        variantB: 'текущий, прежний',
        variantC: 'каждый раз, в каждом случае',
        variantD: 'исключительно, по исключению',
        correctAnswer: 'исключительно, по исключению'
    },
    {
        language: 'ger',
        word: 'geringfügig',
        forms: ['geringfügiger', 'am geringfügigsten'],
        type: 'adv',
        variantA: 'раздраженный, гневный',
        variantB: 'мнительный, сомнительный',
        variantC: 'незначительный, несущественный',
        variantD: 'завистливый, завидующий',
        correctAnswer: 'незначительный, несущественный'
    },
    {
        language: 'ger',
        word: 'auf regen ÜBER',
        forms: ['regt auf', 'regte auf', 'hat aufgeregt'],
        type: 'verb',
        variantA: 'сожалеть, жалеть',
        variantB: 'волноваться, переживать',
        variantC: 'жаловаться, негодовать',
        variantD: 'заимствовать, позычать',
        correctAnswer: 'волноваться, переживать'
    },
    {
        language: 'ger',
        word: 'bemerken',
        forms: ['bemerkt', 'bemerkte', 'hat bemerkt'],
        type: 'verb',
        variantA: 'сожалеть, жалеть',
        variantB: 'волноваться, переживать',
        variantC: 'жаловаться, негодовать',
        variantD: 'замечать, заметить',
        correctAnswer: 'замечать, заметить'
    },
    {
        language: 'ger',
        word: 'heraus finden',
        forms: ['findet heraus', 'fand heraus', 'hat herausgefunden'],
        type: 'verb',
        variantA: 'искать, ввести поиск',
        variantB: 'уведомлять, сообщать',
        variantC: 'выяснять, разобраться',
        variantD: 'замечать, заметить',
        correctAnswer: 'выяснять, разобраться'
    },
    {
        language: 'ger',
        word: 'auf bauen',
        forms: ['baut auf', 'baute auf', 'hat aufgebaut'],
        type: 'verb',
        variantA: 'сооружать, строить, создавать',
        variantB: 'уведомлять, сообщать',
        variantC: 'разрушать, ломать, рушить',
        variantD: 'делиться, угощать',
        correctAnswer: 'сооружать, строить, создавать'
    },
    {
        language: 'ger',
        word: 'überreden ZU',
        forms: ['überredet', 'überredete', 'hat überredet'],
        type: 'verb',
        variantA: 'разговаривать, болтать',
        variantB: 'переубедить, убеждать, переубеждать',
        variantC: 'переходить черту, заходить за границу',
        variantD: 'хвалиться, преувеличивать',
        correctAnswer: 'переубедить, убеждать, переубеждать'
    },
    {
        language: 'ger',
        word: 'erleichtern',
        forms: ['erleichtert', 'erleichterte', 'hat erleichtert'],
        type: 'verb',
        variantA: 'похудеть, худеть',
        variantB: 'переубедить, убеждать, переубеждать',
        variantC: 'волноваться, беспокоиться, тревожиться',
        variantD: 'облегчить, облегчать, приносить облегчение',
        correctAnswer: 'облегчить, облегчать, приносить облегчение'
    },
    {
        language: 'ger',
        word: 'zu lassen',
        forms: ['lässt zu', 'ließ zu', 'hat zugelassen'],
        type: 'verb',
        variantA: 'оставлять, покидать',
        variantB: 'разрешать, позволять',
        variantC: 'уходить, убывать',
        variantD: 'отказываться, отклонять',
        correctAnswer: 'разрешать, позволять'
    },
    {
        language: 'ger',
        word: 'überein stimmen MIT',
        forms: ['stimmt überein', 'stimmte überein', 'hat übereingestimmt'],
        type: 'verb',
        variantA: 'соответствовать, совпадать, согласовываться',
        variantB: 'переубеждать, убеждать, переубедить',
        variantC: 'договориваться, соглашаться',
        variantD: 'переложить, перепоручить, передавать',
        correctAnswer: 'соответствовать, совпадать, согласовываться'
    },
    {
        language: 'ger',
        word: 'unvollständig',
        forms: ['unvollständiger', 'am unvollständigsten'],
        type: 'adv',
        variantA: 'досрочный',
        variantB: 'неполный',
        variantC: 'срочный',
        variantD: 'сомнительный',
        correctAnswer: 'неполный'
    },
    {
        language: 'ger',
        word: 'bedeutend',
        forms: ['bedeutender', 'am bedeutendsten'],
        type: 'adv',
        variantA: 'доволно',
        variantB: 'неполно',
        variantC: 'значительно',
        variantD: 'прозрачно',
        correctAnswer: 'значительно'
    },
    {
        language: 'ger',
        word: 'erheblich',
        forms: ['-'],
        type: 'adv',
        variantA: 'пустой',
        variantB: 'пережитый',
        variantC: 'прошлый',
        variantD: 'значительный',
        correctAnswer: 'значительный'
    },
    {
        language: 'ger',
        word: 'jedoch',
        forms: ['-'],
        type: 'adv',
        variantA: 'тем более',
        variantB: 'также',
        variantC: 'иначе',
        variantD: 'тем не менее',
        correctAnswer: 'тем не менее'
    },
    {
        language: 'ger',
        word: 'die Haltbarkeit',
        forms: ['die Haltbarkeiten'],
        type: 'nomen',
        variantA: 'старания, умения, навык',
        variantB: 'годность, пригодность, добротность',
        variantC: 'черта, характеристика, квалификация',
        variantD: 'достоинство, превосходство',
        correctAnswer: 'годность, пригодность, добротность'
    },
    {
        language: 'ger',
        word: 'die Faustregel',
        forms: ['die Faustregeln'],
        type: 'nomen',
        variantA: 'ненужное правило',
        variantB: 'прилавок, полка',
        variantC: 'поклажа, кладь',
        variantD: 'общее правило',
        correctAnswer: 'общее правило'
    },
    {
        language: 'ger',
        word: 'das Fazit',
        forms: ['die Fazits'],
        type: 'nomen',
        variantA: 'запрет, табу',
        variantB: 'прилавок, полка',
        variantC: 'итог, сумма',
        variantD: 'отказ, отмена',
        correctAnswer: 'итог, сумма'
    },
    {
        language: 'ger',
        word: 'die Flucht',
        forms: ['die Fluchten'],
        type: 'nomen',
        variantA: 'лазейка, ниша',
        variantB: 'побег, бегство',
        variantC: 'итог, сумма',
        variantD: 'ложь, неправда',
        correctAnswer: 'побег, бегство'
    },
    {
        language: 'ger',
        word: 'die Forderung',
        forms: ['die Forderungen'],
        type: 'nomen',
        variantA: 'требование, претензия',
        variantB: 'помощь, услуга',
        variantC: 'услуга (коммерс), работа',
        variantD: 'угроза, опасность',
        correctAnswer: 'требование, претензия'
    },
    {
        language: 'ger',
        word: 'die Fülle',
        forms: ['die Füllen'],
        type: 'nomen',
        variantA: 'предчувствие, ощущение',
        variantB: 'чувство, тревога',
        variantC: 'изобилие, избыток',
        variantD: 'сомнения, сметения',
        correctAnswer: 'изобилие, избыток'
    },
    {
        language: 'ger',
        word: 'der Mut',
        forms: ['-'],
        type: 'nomen',
        variantA: 'предчувствие, ощущение',
        variantB: 'падение, упадок',
        variantC: 'мужество, отвага',
        variantD: 'сомнения, сметения',
        correctAnswer: 'мужество, отвага'
    },
    {
        language: 'ger',
        word: 'der Umstand',
        forms: ['die Umstände'],
        type: 'nomen',
        variantA: 'обстоятельство',
        variantB: 'упадок',
        variantC: 'происшествие',
        variantD: 'недоверие',
        correctAnswer: 'мужество, отвага'
    },
    {
        language: 'ger',
        word: 'die Rücksicht',
        forms: ['die Rücksichten'],
        type: 'nomen',
        variantA: 'обстоятельство, случаи',
        variantB: 'возврат, возвращение',
        variantC: 'бодрость, радость',
        variantD: 'внимание, уважение',
        correctAnswer: 'внимание, уважение'
    },
    {
        language: 'ger',
        word: 'die Unterstützung',
        forms: ['die Unterstützungen'],
        type: 'nomen',
        variantA: 'охрана, сбережние',
        variantB: 'по́мощь, подде́ржка, посо́бие',
        variantC: 'бодрость, радость',
        variantD: 'содействие, взаимная работа',
        correctAnswer: 'по́мощь, подде́ржка, посо́бие'
    },
    {
        language: 'ger',
        word: 'adäquat',
        forms: ['adäquater', 'am adäquatesten'],
        type: 'adj',
        variantA: 'непредсказуемый',
        variantB: 'спонтанный',
        variantC: 'целенаправленный',
        variantD: 'адекватный',
        correctAnswer: 'адекватный'
    },
    {
        language: 'ger',
        word: 'gering',
        forms: ['geringer', 'am geringsten'],
        type: 'adj',
        variantA: 'непредсказуемый',
        variantB: 'небольшой, незначительный',
        variantC: 'огромный, значительный',
        variantD: 'непредсказуемый',
        correctAnswer: 'небольшой, незначительный'
    },
    {
        language: 'ger',
        word: 'zielstrebig',
        forms: ['zielstrebiger', 'am zielstrebigsten'],
        type: 'adj',
        variantA: 'целеустремленный',
        variantB: 'постижимый, досягаемый',
        variantC: 'огромный, значительный',
        variantD: 'недосягаемый, недостижимый',
        correctAnswer: 'целеустремленный'
    },
    {
        language: 'ger',
        word: 'verhältnismäßig',
        forms: ['-'],
        type: 'adv',
        variantA: 'постепенно, последовательно',
        variantB: 'ложный, неправдиво',
        variantC: 'важно, ценно',
        variantD: 'относительно, сравнительно',
        correctAnswer: 'относительно, сравнительно'
    },
    {
        language: 'ger',
        word: 'zielgerichtet',
        forms: ['-'],
        type: 'adv',
        variantA: 'целеустремленный, целенаправленный',
        variantB: 'несправедливый, незаконный',
        variantC: 'справедливый, законный',
        variantD: 'относительно, сравнительно',
        correctAnswer: 'целеустремленный, целенаправленный'
    },
    
    

]

export default GermanWordsTest;









// zielgerichtet
// zielgerichtet · - · -

// Русский целеустремленный, целенаправленный

// auf·lösen 
// löst auf · löste auf · hat aufgelöst 

// Русский разрешат (проблему) распускать 

// ergreifen 
// ergreift · ergriff · hat ergriffen 

// Русский брать за что-то, воспользоваться, взять, схватить

// an·packen 
// packt an · packte an · hat angepackt 

// Русский хватать, приступать, приниматься

// aus·bleiben 
// bleibt aus · blieb aus · ist ausgeblieben 

// Русский не случиться, отсутствовать, не наступить,

// durch·starten 
// startet durch · startete durch · ist durchgestartet 

// Русский начинать действовать, начать действовать, браться за дело,

// erhoffen 
// erhofft · erhoffte · hat erhofft 

// Русский ожидать, понадеяться, надеяться

// erleben 
// erlebt · erlebte · hat erlebt 

// Русский пережить, испытывать, переживать,

// erwähnen 
// erwähnt · erwähnte · hat erwähnt 

// Русский упоминать, касаться,

// faszinieren 
// fasziniert · faszinierte · hat fasziniert 

// Русский очаровывать, завораживать, привести в восхищение

// scheiten 
// scheitet · scheitete · hat gescheitet 

// Русский потерпеть неудачу, обломиться, провалиться

// spüren 
// spürt · spürte · hat gespürt 

// Русский почувствовать, чувствовать, ощущать

// um·hören IN BEI
// hört um · hörte um · hat umgehört 

// Русский расспрашивать, расспросить, слушать друг друга

// voran·kommen 
// kommt/kömmt⁷ voran · kam voran · ist vorangekommen 

// ⁷ Устаревшее

// Русский продвигаться вперёд, продвинуться вперёд,

// zwingen 
// zwingt · zwang · hat gezwungen 

// Русский вынудить, заставлять, принуждать

// frustrieren 
// frustriert · frustrierte · hat frustriert 

// Русский расстраиваться, вводить в заблуждение,

