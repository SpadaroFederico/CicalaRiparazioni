import {Phone} from "lucide-react"

export default function Navbar (){
    return(
        <div className={"w-full h-15 flex items-center drop-shadow shadow-md"}>
            <div className="ml-[3%]">
                <img src="/logo.svg" alt="Cicala Riparazioni" className="h-15 w-15" />
            </div>
            <div className="font-titles flex gap-1 ml-5">
                <h1 className="text-[#1C398E] text-3xl">Cicala</h1>
                <h1 className="text-[#1B61FD] text-3xl">Riparazioni</h1>
            </div>
            <div className="flex gap-3 ml-auto mr-[5%]">
                <div>
                    <Phone size={30} color="#1B61FD" />
                </div>
                <div>
                    <h1 className="font-titles text-3xl text-[#1B61FD]">312 123 4567</h1>
                </div>
            </div>
        </div>
    )
}