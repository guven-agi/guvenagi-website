import Image from "next/image";

type ProjectIconProps = {
    className?: string,
    size?: number
}

export default function ProjectIcon({ className }: ProjectIconProps = {className: "", size: 12}) {
    return <div className={`bg-purple-500 w-28 h-28 rounded-full flex justify-center items-center pt-2 ${className ?? ""}`}>
        <Image alt="guven ağı icon" src={"/guven_agi_logo.png"} width={70} height={70} />
    </div>
}