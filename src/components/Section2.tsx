import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Minicard2 from './Minicard2'

const images = [
    "/ImgNewFormat/IMG1.webp",
    "/ImgNewFormat/IMG2.webp",
    "/ImgNewFormat/IMG3.webp",
    "/ImgNewFormat/IMG4.webp",
    "/ImgNewFormat/IMG5.webp",
    "/ImgNewFormat/IMG6.webp",
    "/ImgNewFormat/IMG7.webp",
]

const getVisibleCount = () => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
}

export default function Section2(){

    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [visibleCount, setVisibleCount] = useState(getVisibleCount)

    const maxIndex = Math.max(images.length - visibleCount, 0)

    useEffect(() => {
        const updateVisibleCount = () => setVisibleCount(getVisibleCount())

        updateVisibleCount()
        window.addEventListener("resize", updateVisibleCount)

        return () => window.removeEventListener("resize", updateVisibleCount)
    }, [])

    useEffect(() => {
        setCurrent((value) => Math.min(value, maxIndex))
    }, [maxIndex])

    const prev = () => setCurrent((value) => value === 0 ? maxIndex : value - 1)
    const next = () => setCurrent((value) => value >= maxIndex ? 0 : value + 1)

    return(
        <section className='bg-[#CCD9E3]'>
            <div className="pt-[8%] md:pt-[5%] lg:pt-[4%] pl-[5%] w-full md:w-[45%] lg:w-[30%]">
                <h2 className="font-titles text-[#162556] text-2xl md:text-[26px] lg:text-3xl">I nostri lavori</h2>
                <hr className="border-[#1B61FD] mt-3 border-3 w-[42%] md:w-[50%] lg:w-[60%]"/>
            </div>

            <div className="px-[5%] py-6 md:py-7 lg:py-8 flex items-center gap-2 md:gap-3 lg:gap-4">
                <button onClick={prev} className="z-10 bg-white rounded-full p-2 shadow-md shrink-0" aria-label="Lavoro precedente">
                    <ChevronLeft color="#1B61FD" className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-3 w-full">
                    {Array.from({ length: visibleCount }, (_, offset) => {
                        const imageIndex = current + offset

                        return (
                            <img 
                                key={imageIndex}
                                src={images[imageIndex]}
                                alt={`Lavoro di saldatura e riparazione industriale ${imageIndex + 1}`}
                                loading="lazy"
                                decoding="async"
                                width={640}
                                height={420}
                                className="w-full lg:w-1/3 h-56 md:h-52 lg:h-48 object-cover rounded-lg cursor-pointer hover:opacity-90"
                                onClick={() => setSelected(images[imageIndex])}
                            />
                        )
                    })}
                </div>
                <button onClick={next} className="z-10 bg-white rounded-full p-2 shadow-md shrink-0" aria-label="Lavoro successivo">
                    <ChevronRight color="#1B61FD" className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>

            {selected && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
                    <div className="relative" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setSelected(null)} className="absolute -top-4 -right-4 bg-white rounded-full p-1" aria-label="Chiudi anteprima">
                            <X size={20} color="#1B61FD" />
                        </button>
                        <img src={selected} alt="Anteprima lavoro" decoding="async" className="max-w-[90vw] md:max-w-[80vw] max-h-[80vh] rounded-xl object-contain" />
                    </div>
                </div>
            )}
            <hr className="border-[#1B61FD] mt-3 border-3 w-[45%] md:w-[35%] lg:w-[30%] mx-auto"/>
            <div className="flex flex-col md:flex-row ml-[5%] mr-[5%] lg:mr-0 mt-[8%] md:mt-[6%] lg:mt-[5%] pb-[8%] md:pb-[6%] lg:pb-[5%] items-stretch md:items-center gap-6 md:gap-0">
                <div className="w-full md:w-[43%] lg:w-[40%] md:mr-[5%] lg:mr-[5%]">
                    <p className="font-parag text-sm md:text-base lg:text-lg leading-relaxed md:leading-7 lg:leading-normal text-left">I lavori che eseguiamo spaziano da interventi di emergenza a lavorazioni pianificate, su commessa privata o industriale. Operiamo principalmente a Grottaglie e in tutta la provincia di Taranto e Brindisi, portando la nostra esperienza direttamente sul posto. Ogni situazione è diversa e richiede una soluzione su misura: dalla saldatura di precisione alla carpenteria metallica, dalla manutenzione di macchinari agricoli alla riparazione di attrezzature industriali. Ogni intervento viene affrontato con massima cura e attenzione al dettaglio, garantendo sempre un risultato preciso e duraturo, a prezzi competitivi.</p>
                </div>
                <div className="flex flex-col gap-3 md:gap-4 w-full md:w-[52%] lg:w-[50%]">
                    <Minicard2 imgSrc="/target.svg" text="Lavorazioni eseguite con cura e precisione in ogni dettaglio" />
                    <Minicard2 imgSrc="/clock.svg" text="Interventi rapidi per ridurre al minimo i tempi di fermo" />
                    <Minicard2 imgSrc="/euro.svg" text="Prezzi competitivi senza rinunciare alla qualità" />
                </div>
            </div>
        </section>
    )
}
