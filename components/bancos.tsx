import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banbif from "@/public/banbif.jpg"
import pichi from "@/public/pichi.jpg"
import inter from "@/public/inter.jpg"
import bcp from "@/public/bcp.png"
import mibanco from "@/public/mibanco.png"
import comercio from "@/public/comercio.png"
import bbva from "@/public/bbva.png"
import sco from "@/public/sco.png"
import Image from "next/image";


const Bancos = () => {
    return (
        <div>
            <h1 className="text-center mt-8 mb-4 font-extrabold text-2xl text-[#181861] md:text-4xl">Cambia al instante con todos los bancos en Perú</h1>
            <div>
                <div className="lg:flex flex-row-reverse justify-center" >
                    <div className="lg:w-[600px]">
                        <div className="rounded-t-xl bg-[#040438] mx-2 flex justify-center ">
                            <FontAwesomeIcon icon={faStar} className="text-white" />
                            <p className="text-white text-center font-semibold text-sm">Nuevo beneficio</p>
                        </div>
                        <div className="rounded-b-xl  border-2 mx-2 flex flex-col p-2">
                            <p className="text-center text-[#181861] font-semibold text-sm my-4">Tranferencias interbancarias</p>
                            <div className="md:flex justify-center space-x-4">
                                <div className=" flex justify-center flex-col">
                                    <span className="font-extrabold text-center text-[#181861] text-xl md:text-2xl">30 min.</span>
                                    <span className="block text-center text-sm text-zinc-500 font-semibold ">Lima</span>
                                </div>
                                <div className=" flex justify-center flex-col">
                                    <span className="font-extrabold text-center text-[#181861] text-xl md:text-2xl">24 horas</span>
                                    <span className="block text-center text-sm text-zinc-500 font-semibold">Provincias</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:grid-cols-1 place-items-center mt-6">
                                <Image src={bbva} height={25} className="" alt="bbva" />
                                <Image src={sco} height={20} alt="escotiabank" />
                                <Image src={comercio} height={20} alt="comercio" />
                                <Image src={mibanco} height={20} alt="mibanco" />
                            </div>
                            <div className="justify-center my-6">
                                <p className="text-center text-sm text-[#0031f7] font-semibold underline">Ver bancos disponibles</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl  border-2 mx-2 flex flex-col mt-2 p-2 md:mt-6 md:p-4 lg:w-[600px]">
                        <div className="md:flex justify-center space-x-4">
                            <div className=" flex justify-center flex-col lg:py-6">
                                <span className="font-extrabold text-center text-[#181861] text-xl md:text-2xl">15 min.</span>
                                <p className="text-center text-[#181861] font-semibold text-sm ">Transferencias inmediatas a todo el Perú</p>
                            </div>


                        </div>
                        <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:grid-cols-1 place-items-center mt-5">
                            <Image src={bcp} height={20} alt="bcp" />
                            <Image src={inter} height={20} alt="inter" />
                            <Image src={pichi} height={20} alt="pichi" />
                            <Image src={banbif} height={20} alt="banbif" />
                        </div>
                        <div>
                            <a href="Ver bancos disponibles"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Bancos