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
        variantC: 'семейный, домашний',
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
        forms: ['bezieht ', 'bezog ', 'hat bezogen'],
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
]

export default GermanWordsTest;