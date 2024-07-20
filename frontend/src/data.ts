

const GermanWordsTest = [
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
        forms: [],
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
    }
]

export default GermanWordsTest;