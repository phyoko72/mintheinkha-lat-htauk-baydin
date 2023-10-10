import Link from "next/link"

export default function NotFound() {
    return (
        <div className=" w-full h-[60vh] flex justify-center items-center">
            <div className=" text-center">
                <h1 className=" text-xl font-semibold">404 | Not Found</h1>
                <p className=" mt-3">
                    Go to
                    <Link
                        href={"/"}
                        className=" ms-1 underline underline-offset-2"
                    >
                        Home
                    </Link>
                </p>
            </div>
        </div>
    )
}
