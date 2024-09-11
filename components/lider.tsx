import Image from "next/image"
import money from "@/public/icons/icon-money.png"
import user from "@/public/icons/icon-user.png"
import ping from "@/public/icons/icon-ping.png"


const Lider = () => {
    return (
        <div className="mt-8">
            <p className="text-[#0032ff] text-2xl font-extrabold text-center">Somos la casa de cambio online líder del Perú</p>
            <div className="p-4">
                <div className="flex overflow-x-auto scrollbar-hidden space-x-4">
                    <div className="min-w-[150px]  shadow-lg rounded p-4 pb-8 bg-[#eff2ff]">
                        <div className=" flex justify-center my-3">
                        <Image src={money} alt="maney" width={52} />

                        </div>
                        <p className="text-center font-bold text-[#0032ff] text-md">+6 mil millones</p>
                        <p className="text-[#0032ff] font-semibold text-center">de dólares negociados</p>
                    </div>
                    <div className="min-w-[150px]  shadow-lg rounded p-4 pb-8 bg-[#eff2ff]">
                        <div className=" flex justify-center my-3">
                        <Image src={user} alt="maney" width={52} />

                        </div>
                        <p className="text-center font-bold text-[#0032ff] text-md">+200 mil clientes</p>
                        <p className="text-[#0032ff] font-semibold text-center">confían en mosotros</p>
                    </div>
                    <div className="min-w-[150px]  shadow-lg rounded p-4 pb-8 bg-[#eff2ff]">
                        <div className=" flex justify-center my-3">
                        <Image src={ping} alt="maney" width={60} />

                        </div>
                        <p className="text-center font-bold text-[#0032ff] text-md">+6 mil millones</p>
                        <p className="text-[#0032ff] font-semibold text-center">de dólares negociados</p>
                    </div>
                </div>
                <div className="m-4">
                <p className=" text-center mx-4 text-xs">¡Tenemos el más alto volumen de dólares cambiados! Las personas consideran a Rextie como la casa de cambio online más confiable.</p>

                </div>
            </div>
        </div>
    )
}

export default Lider