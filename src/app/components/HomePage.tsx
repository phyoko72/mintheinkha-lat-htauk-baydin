"use client"
import data from "@/data/MinTheinKha.LatHtaukBayDin.json"
import {ChangeEvent, useState, useEffect} from "react"
import NotFound from "./NotFound"
import QuestionsGroup from "./QuestionsGroup"
export default function Home() {
    const [text, setText] = useState("")

    const [askedQuestion, setAskedQuestion] = useState<QuestionType[] | null>(
        null
    )

    const [notFound, setNotFound] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNotFound(false)
        setAskedQuestion(null)
        setText(e.target.value.trim())
    }

    const filtering = (x: string): void => {
        const filteredQuestions = data.questions.filter((q) =>
            q.questionName.includes(x)
        )
        if (filteredQuestions.length === 0) return setNotFound(true)

        setAskedQuestion(filteredQuestions)
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (text) filtering(text)
        }, 900)

        return () => clearTimeout(timeOut)
    }, [text])

    return (
        <>
            <input
                type="text"
                name="search"
                placeholder="ရှာဖွေရန်"
                value={text}
                className=" bg-transparent border border-gray-800 rounded w-full p-2"
                autoFocus
                onChange={handleChange}
            />

            {notFound && <NotFound />}

            {askedQuestion && (
                <>
                    <QuestionsGroup questions={askedQuestion} />
                </>
            )}

            {text.length === 0 && !notFound && !askedQuestion && (
                <QuestionsGroup questions={data.questions} />
            )}
        </>
    )
}
