import TestType from "./types/TestType";


const GermanWordsTest:TestType[] = [
    {
        language: 'ger',
        word: 'vorwärtskommen',
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
        word: 'ablenken sich von',
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
        word: 'vorkommen',
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
        word: 'abfinden sich mit',
        forms: ['findet ab', 'fand ab', 'hat abgefunden'],
        type: 'verb',
        variantA: 'отвлекаться',
        variantB: 'обнаруживать',
        variantC: 'смириться',
        variantD: 'устраиваться',
        correctAnswer: 'смириться'
    },
]

export default GermanWordsTest;