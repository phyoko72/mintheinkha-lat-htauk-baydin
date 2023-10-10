import Link from "next/link"

export default function BackBtn() {
    return (
        <Link
            href={"/"}
            className=" bg-baydin text-white px-2 py-1 rounded-xl text-sm"
        >
            နောက်သို့
        </Link>
    )
}
