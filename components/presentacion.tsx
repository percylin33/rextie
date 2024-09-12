import { NextPage } from 'next'
import Image from 'next/image'
import visa from "@/public/visa-removebg-preview.png"
import rpp from "@/public/rpp.png"
import citi from "@/public/city.png"
import citib from "@/public/icons/city-blanco.png"
import iso from "@/public/icons/iso.png"
import visab from "@/public/carrusel/visa-blanco.png"

interface Props { }

const Presentacion: NextPage<Props> = ({ }) => {
    return (
        <div className='xl:w-[45%] pt-2'>
            <h1 className=' font-extrabold text-4xl text-center xl:text-left text-[#181861] pb-2 mx-4 md:text-white md:text-6xl '>La casa de cambio online lider del Perú</h1>
            <p className='text-[#1a1a68] font-semibold text-md text-center py-4 mx-4 xl:text-left md:text-white md:text-xl'>Celebramos un nuevo récord: 6 mil millones de dólares cambiados para nuestros clientes</p>
            <div className='flex justify-center xl:justify-start space-x-8 my-6'>
                <div className='md:flex md:space-x-4'>
                    <div className='flex justify-center py-2 space-x-4'>
                        <div className=' md:hidden'>

                            <Image src={visa} alt='visa' height={45} />
                        </div>
                        <div className='hidden md:block'>


                            <Image src={visab} alt='visa' height={40} className='py-1' />


                        </div>
                        {/* Imágenes para pantallas menores a md */}

                    </div>
                    <div className='md:mt-4 flex space-x-2 md:space-x-0 md:flex-col'>

                        <p className='text-[#000096] font-semibold text-xs md:text-white'>Aliado </p>
                        <p className='text-[#000096] font-semibold text-xs md:text-white'> Estrategico</p>
                    </div>
                </div>
                <div className='md:flex md:space-x-4'>
                    <div className='flex justify-center '>
                        <div className=' md:hidden'>
                            <Image src={citi} alt='city' width={50} />
                        </div>
                        <div className='hidden md:block '>
                            <Image src={citib} alt='city' height={60} />
                        </div>
                        <Image src={rpp} alt='rpp' width={60} />
                    </div>
                    <div className='md:mt-4 flex space-x-2 md:space-x-0 md:flex-col'>
                        <p className='text-[#000096] font-semibold text-xs md:text-white'>Invercionistas</p>
                        <p className='text-[#000096] font-semibold text-xs md:text-white'>estratégicos</p>

                    </div>
                </div>
            </div>
            <div className='hidden xl:block'>
                <div className='flex justify-start items-center space-x-4 text-white font-bold'>

                    <Image src={iso} alt='iso' width={60} />
                    <p>Certificados con ISO 27001</p>
                </div>
            </div>
        </div>
    )
}

export default Presentacion