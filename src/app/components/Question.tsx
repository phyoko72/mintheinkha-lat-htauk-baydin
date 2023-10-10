import Link from "next/link"

export default function Question({question}: {question: QuestionType}) {
    return (
        <Link
            href={`/questions/${question.questionNo}`}
            className=" cursor-pointer"
        >
            <div className=" my-5 border border-gray-500 p-2 rounded hover:border-gray-950">
                <p>
                    <span className="text-sm">({question.questionNo})</span>{" "}
                    <span className=" text-sm">{question.questionName}</span>
                </p>
            </div>
        </Link>
    )
}
