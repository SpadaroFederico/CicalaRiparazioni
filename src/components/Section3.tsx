const contacts = [
    {
        href: "https://wa.me/393277344161",
        imgSrc: "/ContactIcons/ws.svg",
        alt: "WhatsApp",
        label: "Whatsapp",
    },
    {
        href: "mailto:cicalariparazioni@gmail.com",
        imgSrc: "/ContactIcons/email.svg",
        alt: "Email",
        label: "Email",
    },
    {
        href: "https://www.instagram.com/cc_riparazioni",
        imgSrc: "/ContactIcons/ig.svg",
        alt: "Instagram",
        label: "Instagram",
    },
]

export default function Section3(){
    return(
        <section className='bg-[#CCD9E3]'>
            <div className="pt-[8%] md:pt-[5%] lg:pt-[4%] pl-[5%] w-full md:w-[45%] lg:w-[30%]">
                <h2 className="font-titles text-[#162556] text-2xl md:text-[26px] lg:text-3xl">Contattaci</h2>
                <hr className="border-[#1B61FD] mt-3 border-3 w-[42%] md:w-[50%] lg:w-[60%]"/>
            </div>
           <div className='grid grid-cols-1 sm:grid-cols-3 lg:flex gap-5 md:gap-7 lg:justify-between px-[5%] pt-[8%] md:pt-[5%] pb-[7%] md:pb-[4%] lg:pb-[3%]'>
                {contacts.map((contact) => (
                    <a
                        key={contact.label}
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                        aria-label={contact.label}
                        className='flex items-center gap-4 md:gap-5 w-fit hover:opacity-80 transition-opacity'
                    >
                        <img src={contact.imgSrc} alt="" loading="lazy" decoding="async" width={36} height={36} className="w-8 h-8 md:w-9 md:h-9 lg:w-auto lg:h-auto" />
                        <p className='font-parag text-lg md:text-[19px] lg:text-xl'>{contact.label}</p>
                    </a>
                ))}
            </div>
        </section>
    )
}
