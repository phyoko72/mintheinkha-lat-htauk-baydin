import Image from "next/image"

export default function Title() {
    return (
        <div className=" text-center">
            <Image
                src={"/mtk.png"}
                width={80}
                height={80}
                className=" rounded-[100%] inline-block my-5"
                alt="sir-min-thein-kha"
            />
            <h1 className=" text-2xl font-semibold mb-5">လက်ထောက်ဗေဒင်</h1>
        </div>
    )
}
