import type { LucideIcon } from "lucide-react"

interface MiniCardProps {
    Icon?: LucideIcon
    imgSrc?: string
    title: string
    text: string
}

export default function Minicard({ Icon, imgSrc, title, text }: MiniCardProps){
    return(
        <article className="group bg-white border border-transparent rounded-xl p-5 md:p-4 lg:p-6 flex flex-col gap-3 md:gap-3 lg:gap-4 w-full shadow-[-4px_4px_10px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#1B61FD]/30 hover:shadow-[-6px_8px_16px_6px_rgba(27,97,253,0.20)]">            
            {Icon ? <Icon color="#1B61FD" className="w-9 h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 mx-auto transition-transform duration-300 ease-out group-hover:scale-110"/> : <img src={imgSrc} alt="" loading="lazy" decoding="async" width={40} height={40} className="w-9 h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 mx-auto transition-transform duration-300 ease-out group-hover:scale-110" />}
            <h3 className="text-[#1B61FD] font-titles text-base md:text-base lg:text-lg text-center leading-tight md:min-h-[40px] lg:min-h-0 flex items-center justify-center transition-colors duration-300 group-hover:text-[#162556]">{title}</h3>
            <p className="font-parag text-gray-700 text-sm md:text-xs lg:text-sm leading-relaxed md:leading-5 lg:leading-normal text-left">{text}</p>
        </article>
    )
}
