import BackBtn from "@/app/components/BackBtn"
import Numbers from "@/app/components/Numbers"
import data from "@/data/MinTheinKha.LatHtaukBayDin.json"
import {notFound} from "next/navigation"
export default function ChooseNumberPage({
    params: {questionId},
}: {
    params: {questionId: string}
}) {
    const question = data.questions.find(
        (q) => q.questionNo === Number(questionId)
    )

    if (!question) notFound()
    return (
        <div>
            <div className="text-center mt-3 mb-5">
                <h1 className=" text-base my-4">{question.questionName} </h1>
                <BackBtn />
            </div>
            <Numbers questionId={questionId} />
        </div>
    )
}
