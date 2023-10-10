import {ReactNode} from "react"
import Title from "./Title"

export default function Layout({children}: {children: ReactNode}) {
    return (
        <>
            <main className=" w-full min-h-screen p-1 lg:p-3 relative select-none">
                <div className=" w-[92%] md:w-4/5 lg:w-1/2 m-auto">
                    <Title />
                    {children}
                </div>
            </main>
        </>
    )
}
