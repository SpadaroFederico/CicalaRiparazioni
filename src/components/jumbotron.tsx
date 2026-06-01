export default function Jumbotron(){
    return(
        <div style={{backgroundImage: "url('/jumbo.webp')"}} className="w-full h-105 bg-cover bg-[center_30%] flex flex-col p-[5%] pt-[8%]">
            <h1 className="text-white font-titles text-5xl mb-[1%]">
                Saldature e 
            </h1>

            <h1 className="text-[#1B61FD] font-titles text-5xl mb-[3%]">
                riparazioni industriali 
            </h1>

            <p className="text-white font-parag">
                Specializzati in manutenzioni e riparazioni industriali, <br/>
                carpenteria metallica e saldature di precisione, <br/>
                direttamente sul posto. <br/>
                Esperienza e affidabilità al tuo servizio.<br/>
            </p>
        </div>
    )
}