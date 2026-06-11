const phoneDisplay = "327 734 4161"
const phoneHref = "tel:+393277344161"

export default function Navbar (){
    return(
        <header className="sticky top-0 z-40 w-full h-15 flex items-center bg-white backdrop-blur drop-shadow shadow-md">
            <div className="ml-[5%]">
                <img src="/logo.svg" alt="Cicala Riparazioni" width={60} height={60} decoding="async" className="h-15 w-15" />
            </div>

            <div className="font-titles flex gap-1 ml-0 md:ml-5 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                <p className="text-[#1C398E] text-xl sm:text-2xl md:text-3xl">Cicala</p>
                <p className="text-[#1B61FD] text-xl sm:text-2xl md:text-3xl">Riparazioni</p>
            </div>

            <a
                href={phoneHref}
                aria-label={`Chiama ${phoneDisplay}`}
                className="flex gap-2 md:gap-3 ml-auto mr-[5%] items-center group transition-transform duration-200 hover:-translate-y-0.5"
            >
                <img src="/phone.svg" alt="phone" width={32} height={32} className="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                <span className="hidden md:block font-titles text-3xl text-[#1B61FD] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1C398E] after:to-[#1B61FD] after:transition-all after:duration-300 group-hover:after:w-full">
                    {phoneDisplay}
                </span>
            </a>
        </header>
    )
}
