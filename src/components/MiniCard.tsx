import type { LucideIcon } from "lucide-react"

interface MiniCardProps {
    Icon?: LucideIcon
    imgSrc?: string
    title: string
    text: string
}

export default function Minicard({ Icon, imgSrc, title, text }: MiniCardProps){
    return(
        <article className="bg-white rounded-xl p-5 md:p-4 lg:p-6 flex flex-col gap-3 md:gap-3 lg:gap-4 w-full shadow-[-4px_4px_10px_6px_rgba(0,0,0,0.25)]">            
            {Icon ? <Icon color="#1B61FD" className="w-9 h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 mx-auto"/> : <img src={imgSrc} alt="" loading="lazy" decoding="async" width={40} height={40} className="w-9 h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 mx-auto" />}
            <h3 className="text-[#1B61FD] font-titles text-base md:text-base lg:text-lg text-center leading-tight md:min-h-[40px] lg:min-h-0 flex items-center justify-center">{title}</h3>
            <p className="font-parag text-gray-700 text-sm md:text-xs lg:text-sm leading-relaxed md:leading-5 lg:leading-normal text-left">{text}</p>
        </article>
    )
}
