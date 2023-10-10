type QuestionType = {
    questionName: string
    questionNo: number
}

type NumberListType = string[]

type AnswerType = {
    answerNo: number
    answerResult: string
    questionNo: number
}

type PaginateType = (x: number) => void
