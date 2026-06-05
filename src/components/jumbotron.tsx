export default function Jumbotron(){
    return(
        <section className="relative w-full min-h-[320px] md:min-h-[380px] lg:h-105 lg:min-h-0 overflow-hidden flex flex-col p-[5%] pt-[12%] md:pt-[8%] lg:pt-[6%]">
            <img
                src="/jumbo.webp"
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width={1920}
                height={720}
                className="absolute inset-0 h-full w-full object-cover object-[center_35%] lg:object-[center_30%]"
            />

            <div className="relative z-10">
                <h1 className="font-titles text-4xl md:text-[44px] lg:text-5xl leading-tight mb-5 md:mb-[3%]">
                    <span className="block text-white mb-1 md:mb-[1%]">Saldature e</span>
                    <span className="block text-[#1B61FD]">riparazioni industriali</span>
                </h1>

                <p className="text-white font-parag text-sm md:text-[15px] lg:text-base leading-relaxed lg:leading-normal max-w-[92%] md:max-w-[70%] lg:max-w-none">
                    Specializzati in manutenzioni e riparazioni industriali, <br className="hidden sm:block"/>
                    carpenteria metallica e saldature di precisione, <br className="hidden sm:block"/>
                    direttamente sul posto. <br className="hidden sm:block"/>
                    Esperienza e affidabilità al tuo servizio.<br/>
                </p>
            </div>
        </section>
    )
}
