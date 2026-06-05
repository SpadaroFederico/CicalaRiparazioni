import Minicard from './MiniCard'
import { Wrench, Hammer } from "lucide-react"

export default function Section1(){
    return(
        <section className='bg-[#CCD9E3]'>
            <div className="pt-[8%] md:pt-[5%] lg:pt-[4%] pl-[5%] w-full md:w-[45%] lg:w-[30%]">
                <h2 className="font-titles text-[#162556] text-2xl md:text-[26px] lg:text-3xl">Di cosa ci occupiamo</h2>
                <hr className="border-[#1B61FD] mt-3 border-3 w-[42%] md:w-[50%] lg:w-[60%]"/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:flex lg:justify-between px-[5%] pt-[8%] md:pt-[5%] pb-[7%] md:pb-[4%] lg:pb-[3%] gap-6 md:gap-5 lg:gap-8'>
                <Minicard Icon={Wrench} title="Manutenzioni e riparazioni" text="Interventi rapidi e risolutivi su macchinari, attrezzature e mezzi agricoli." />
                <Minicard Icon={Hammer} title="Carpenteria metallica" text="Strutture e componenti in metallo realizzati su misura in base alle esigenze." />
                <Minicard imgSrc="/welding.svg" title="Saldature di precisione" text="Saldature su qualsiasi tipo di metallo, anche in condizioni e spazi difficili." />
            </div>
        </section>
    )
}
