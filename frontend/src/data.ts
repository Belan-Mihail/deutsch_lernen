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
]

export default GermanWordsTest;