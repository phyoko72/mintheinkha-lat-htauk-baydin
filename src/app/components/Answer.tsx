import data from "@/data/MinTheinKha.LatHtaukBayDin.json"
import BackBtn from "./BackBtn"
import {notFound} from "next/navigation"
export default function Answer({
    questionId,
    answerId,
}: {
    questionId: string
    answerId: number
}) {
    const result = data.answers.find(
        (answer) =>
            answer.questionNo === Number(questionId) &&
            answer.answerNo === answerId
    )

    if (!result) notFound()

    return (
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className=" bg-white text-black w-4/5 md:w-1/2 h-[300px] flex justify-center items-center">
                <div className=" text-center p-3">
                    <h2 className=" mb-8">{result.answerResult}</h2>
                    <BackBtn />
                </div>
            </div>
        </div>
    )
}
