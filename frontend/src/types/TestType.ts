
type TestType = {
    language:string,
    word: string,
    forms: string[],
    type:string,
    variantA: string,
    variantB: string,
    variantC: string,
    variantD: string,
    correctAnswer: string,
    cognate_words?: {
        word: string,
        translate: string
    }[],
    sentences?: string[],
}

export default TestType

