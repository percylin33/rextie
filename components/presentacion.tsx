import { NextPage } from 'next'
import Image from 'next/image'
import visa from "@/public/visa-removebg-preview.png"
import rpp from "@/public/rpp.png"
import citi from "@/public/city.png"

interface Props { }

const Presentacion: NextPage<Props> = ({ }) => {
    return (
        <div className='xl:w-[40%] pt-2'>
            <h1 className=' font-extrabold text-4xl md:text-5xl text-center xl:text-left text-[#181861] pb-2 mx-4 '>La casa de cambio online lider del Perú</h1>
            <p className='text-[#1a1a68] font-semibold text-md text-center py-4 mx-4 xl:text-left'>Celebramos un nuevo récord: 6 mil millones de dólares cambiados para nuestros clientes</p>
            <div className='flex justify-center xl:justify-start space-x-8 my-6'>
                <div className='md:flex md:space-x-4'>
                    <div className='flex justify-center py-2 space-x-4'>
                        <Image src={visa} alt='visa' width={85} />
                    </div>
                    <div className='md:mt-4 flex space-x-2 md:space-x-0 md:flex-col'>

                        <p className='text-[#000096] font-semibold text-xs'>Aliado </p>
                        <p className='text-[#000096] font-semibold text-xs'> Estrategico</p>
                    </div>
                </div>
                <div className='md:flex md:space-x-4'>
                    <div className='flex justify-center space-x-4'>
                        <Image src={citi} alt='visa' width={50} />
                        <Image src={rpp} alt='visa' width={50} />
                    </div>
                    <div className='md:mt-4 flex space-x-2 md:space-x-0 md:flex-col'>
                        <p className='text-[#000096] font-semibold text-xs'>Invercionistas</p>
                        <p className='text-[#000096] font-semibold text-xs'>estratégicos</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentacion