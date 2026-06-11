import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Minicard2 from './Minicard2'

const slides = [
    {
        src: "/ImgNewFormat/IMG1.webp",
        alt: "Benna da scavo ricostruita con fondo in Hardox e denti nuovi",
        desc: "Ricostruzione e rinforzo di benne da roccia: sostituzione del fondo con lamiera Hardox e montaggio denti nuovi per ripristinare la piena efficienza operativa"
    },
    {
        src: "/ImgNewFormat/IMG2.webp",
        alt: "Mini escavatore Sany con benne in revisione in officina",
        desc: "Manutenzione e revisione di benne per escavatori: interventi su struttura e componenti operativi per ripristinare le condizioni originali di lavoro"
    },
    {
        src: "/ImgNewFormat/IMG3.webp",
        alt: "Manutenzione rotori trituratori industriali",
        desc: "Manutenzioni su rotori di trituratori industriali: sostituzione e riposizionamento degli elementi di taglio per garantire continuità operativa e prestazioni costanti"
    },
    {
        src: "/ImgNewFormat/IMG4.webp",
        alt: "Lame e sottolame in Hardox costruite su misura",
        desc: "Costruzione di lame e sottolame in Hardox di qualsiasi misura e tipologia, realizzate in base alle specifiche della macchina operatrice"
    },
    {
        src: "/ImgNewFormat/IMG5.webp",
        alt: "Rifacimento generale benne e pale da scavo",
        desc: "Rifacimenti generali su benne e pale di qualsiasi misura: sostituzione e rinforzo dei componenti strutturali più sollecitati per restituire piena operatività"
    },
    {
        src: "/ImgNewFormat/IMG6.webp",
        alt: "Manutenzione frantuma sassi e frangiroccia",
        desc: "Manutenzione su frantuma sassi e frangiroccia: sostituzione degli organi di frantumazione e riparazione delle lesioni strutturali per prevenire ulteriori danni nel tempo"
    },
    {
        src: "/ImgNewFormat/IMG7.webp",
        alt: "Ripristino con riporti anti usura su macchine da demolizione",
        desc: "Interventi di ripristino con riporti anti usura su macchine da demolizione: applicazione di materiali speciali sulle zone critiche per prolungare la vita utile"
    },
    {
        src: "/ImgNewFormat/IMG8.webp",
        alt: "Saldature certificate per conto terzi",
        desc: "Saldature con rilascio di certificazione per conto terzi, eseguite da personale qualificato anche in assenza di corrente di rete e in spazi difficili"
    },
    {
        src: "/ImgNewFormat/IMG9.webp",
        alt: "Furgone operativo attrezzato per interventi in cantiere",
        desc: "Interventi direttamente in cantiere con furgone attrezzato: raggiungiamo clienti e aziende portando la nostra officina direttamente sul posto"
    },
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

    const maxIndex = Math.max(slides.length - visibleCount, 0)

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 w-full items-stretch">
                    {Array.from({ length: visibleCount }, (_, offset) => {
                        const idx = current + offset
                        const slide = slides[idx]

                        return (
                            <div
                                key={idx}
                                className="w-full lg:w-1/3 flex flex-col rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_28px_rgba(27,97,253,0.22)] transition-shadow duration-300"
                            >
                                {/* immagine */}
                                <div className="relative overflow-hidden shrink-0">
                                    <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        loading="lazy"
                                        decoding="async"
                                        width={640}
                                        height={420}
                                        className="w-full h-52 md:h-48 lg:h-44 object-cover cursor-pointer hover:scale-[1.03] transition-transform duration-500"
                                        onClick={() => setSelected(slide.src)}
                                    />
                                    {/* gradiente bottom sull'immagine per raccordare col bianco */}
                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                                </div>

                                {/* box descrizione */}
                                <div className="bg-white flex-1 flex flex-col px-4 pt-3 pb-4 gap-2">
                                    {/* accento colorato */}
                                    <div className="w-8 h-[2.5px] bg-[#1B61FD] rounded-full" />
                                    <p className="font-parag text-[11.5px] md:text-[11px] lg:text-[12px] text-[#1C2B4A] leading-[1.6] tracking-[0.01em]">
                                        {slide.desc}
                                    </p>
                                </div>
                            </div>
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
