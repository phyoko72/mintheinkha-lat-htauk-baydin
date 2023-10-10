import Question from "./Question"

export default function QuestionsGroup({
    questions,
}: {
    questions: QuestionType[]
}) {
    return (
        <div className="mb-2 h-[60vh] overflow-y-auto ">
            {questions.map((q) => (
                <Question key={q.questionNo} question={q} />
            ))}
        </div>
    )
}
