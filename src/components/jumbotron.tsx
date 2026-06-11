import { useEffect, useState } from "react"

export default function Jumbotron(){
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    return(
        <section className="relative w-full h-auto overflow-hidden flex flex-col justify-start p-[5%] pt-[10%] pb-[14%] md:pt-[5%] md:pb-[8%] lg:pt-[6%] lg:pb-0 lg:h-105">
            <img
                src="/jumbo.webp"
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width={1920}
                height={720}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: isMobile ? "75% center" : "center 35%" }}
            />

            <div className="relative z-10">
                <h1 className="font-titles text-4xl md:text-[44px] lg:text-5xl leading-tight mb-5 md:mb-[3%]">
                    <span className="block text-white mb-1 md:mb-[1%]">Saldature e</span>
                    <span className="block text-[#1B61FD]">riparazioni industriali</span>
                </h1>

                <p className="text-white font-parag text-sm md:text-[15px] lg:text-base leading-relaxed lg:leading-normal max-w-[92%] md:max-w-[55%] lg:max-w-none">
                    Specializzati in manutenzioni e riparazioni industriali, <br/>
                    carpenteria metallica e saldature di precisione, <br/>
                    direttamente sul posto. <br/>
                    Esperienza e affidabilità al tuo servizio.
                </p>
            </div>
        </section>
    )
}