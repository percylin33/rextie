import {faStar} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Bancos = () => {
  return (
  <div>
    <h1 className="text-center mt-8 font-extrabold text-2xl text-[#181861]">Cambia al instante con todos los bancos en Perú</h1>
    <div>
        <div>
            <div className="rounded-t-xl bg-[#040438] mx-2 flex justify-center">
                <FontAwesomeIcon icon={faStar} className="text-white"/>
                <p className="text-white text-center font-semibold text-sm">Nuevo beneficio</p>
            </div>
            <div className="rounded-b-xl  border-2 mx-2 flex flex-col">
                <p className="text-center text-[#181861] font-semibold text-sm my-4">Tranferencias interbancarias</p>
                <div className="md:flex justify-center space-x-4">
                    <div className=" flex justify-center flex-col">
                        <span className="font-extrabold text-center text-[#181861] text-xl">30 min.</span>
                        <span className="block text-center text-sm text-zinc-500 font-semibold">Lima</span>
                    </div>
                    <div className=" flex justify-center flex-col">
                        <span className="font-extrabold text-center text-[#181861] text-xl">24 horas</span>
                        <span className="block text-center text-sm text-zinc-500 font-semibold">Provincias</span>
                    </div>
                </div>
                <div>
                    {/* <Image src={} alt="" />
                    <Image src={} alt="" />
                    <Image src={} alt="" />
                    <Image src={} alt="" /> */}
                </div>
                <div>

                </div>
            </div>
        </div>
        <div></div>
    </div>
  </div>)
}

export default Bancos