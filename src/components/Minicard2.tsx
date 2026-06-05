interface MiniCard2Props {
    imgSrc?: string
    text: string
}

export default function Minicard2({ imgSrc, text }: MiniCard2Props){
    return(
        <article className="group bg-white border border-transparent rounded-xl px-4 md:px-4 lg:px-6 py-3 md:py-3 lg:py-4 flex flex-row items-center gap-3 lg:gap-4 w-full shadow-[-4px_4px_10px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#1B61FD]/30 hover:shadow-[-6px_8px_16px_6px_rgba(27,97,253,0.20)]">
            <img src={imgSrc} alt="" loading="lazy" decoding="async" width={40} height={40} className="w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110" />
            <p className="font-parag italic font-bold text-sm md:text-sm lg:text-base leading-snug lg:leading-normal text-left transition-colors duration-300 group-hover:text-[#162556]">{text}</p>
        </article>
    )
}
