interface MiniCard2Props {
    imgSrc?: string
    text: string
}

export default function Minicard2({ imgSrc, text }: MiniCard2Props){
    return(
        <article className="bg-white rounded-xl px-4 md:px-4 lg:px-6 py-3 md:py-3 lg:py-4 flex flex-row items-center gap-3 lg:gap-4 w-full shadow-[-4px_4px_10px_6px_rgba(0,0,0,0.25)] ">
            <img src={imgSrc} alt="" loading="lazy" decoding="async" width={40} height={40} className="w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 shrink-0" />
            <p className="font-parag italic font-bold text-sm md:text-sm lg:text-base leading-snug lg:leading-normal text-left">{text}</p>
        </article>
    )
}
