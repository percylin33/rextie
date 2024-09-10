import { NextPage } from 'next'
import Image from 'next/image'
import visa from "@/public/visa-removebg-preview.png"
import rpp from "@/public/rpp.png"
import citi from "@/public/city.png"

interface Props {}

const Presentacion: NextPage<Props> = ({}) => {
  return (
    <div>
        <h1 className=' font-extrabold text-4xl text-center text-[#181861] pb-2 mx-4'>La casa de cambio online lider del Perú</h1>
        <p className='text-[#1a1a68] font-semibold text-md text-center py-4 mx-4'>Celebramos un nuevo récord: 6 mil millones de dólares cambiados para nuestros clientes</p>
        <div className='flex justify-around my-6'>
            <div>
                <div className='flex justify-center space-x-4'>
                    <Image src= {citi} alt='visa' width={40} />
                    <Image src= {rpp} alt='visa' width={40} />
                </div>
                <span className='text-[#000096] font-semibold text-xs'>Invercionistas estratégicos</span>
            </div>
            <div>
                <div className='flex justify-center py-2'>
                    <Image src= {visa} alt='visa' width={55} />
                </div>
                <span className='text-[#000096] font-semibold text-xs'>Aliado Estrategico</span>
            </div>
        </div>
    </div>
  )
}

export default Presentacion