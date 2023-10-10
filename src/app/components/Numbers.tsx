"use client"
import data from "@/data/MinTheinKha.LatHtaukBayDin.json"
import Answer from "./Answer"
import {useState} from "react"
export default function Numbers({questionId}: {questionId: string}) {
    const [selectedNum, setSelectedNum] = useState<number | null>(null)
    const mmToEng = (x: string): number => {
        switch (x) {
            case "၁":
                return 1
            case "၂":
                return 2
            case "၃":
                return 3
            case "၄":
                return 4
            case "၅":
                return 5
            case "၆":
                return 6
            case "၇":
                return 7
            case "၈":
                return 8
            case "၉":
                return 9
            case "၁၀":
                return 10
            default:
                return 0
        }
    }

    const handleSelectedNum: (x: string) => void = (x) => {
        setSelectedNum(mmToEng(x))
    }

    return (
        <div className=" max-h-[70vh] overflow-y-auto flex flex-wrap gap-1 lg:gap-2 justify-center">
            {data.numberList.map((num, index) => (
                <div
                    key={index}
                    onClick={() => handleSelectedNum(num)}
                    className=" border w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] flex justify-center items-center cursor-pointer bg-baydin text-white"
                >
                    <span>{num}</span>
                </div>
            ))}

            {selectedNum && (
                <Answer questionId={questionId} answerId={selectedNum} />
            )}
        </div>
    )
}
