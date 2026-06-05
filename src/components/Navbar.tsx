const phoneDisplay = "312 123 4567"
const phoneHref = "tel:+393121234567"

export default function Navbar (){
    return(
        <header className="relative w-full h-15 flex items-center drop-shadow shadow-md">
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
                className="flex gap-3 ml-auto mr-[5%] items-center"
            >
                <img src="/phone" alt="phone" />
                <span className="hidden md:block font-titles text-3xl text-[#1B61FD]">{phoneDisplay}</span>
            </a>
        </header>
    )
}
