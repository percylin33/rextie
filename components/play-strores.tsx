import { NextPage } from 'next'
import Image from 'next/image'
import logo from "@/public/logo-b.jpg"
import star from "@/public/icons/icon-start.jpg"
import appStore from "@/public/icons/app-store.jpg"
import play from "@/public/icons/pay-store.jpg"
import gallery from "@/public/icons/gallery.png"
import celu from "@/public/celu.png"

interface Props { }

const Playtrores: NextPage<Props> = ({ }) => {
    return (
        <div className='flex justify-center mt-10'>
    <div className='my-10 bg-[#eff2ff] p-4 mx-4 rounded max-w-full lg:min-w-[600px] lg:p-6 lg:pr-60 relative '>
        <div className='flex justify-center p-4'>
            <div>
                <div className='flex justify-center space-x-4'>
                    <div>
                        <Image src={logo} alt='logo' width={60} className="object-contain" />
                    </div>
                    <div>
                        <div className='flex'>
                            <Image src={star} alt='start' width={23} className="object-contain" />
                            <p className='text-3xl font-extrabold text-gray-700'>4.8</p>
                        </div>
                        <div>
                            <span className='font-semibold'>Rextie en App Store</span>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='w-auto text-center font-extrabold text-gray-700'>¡Cambia dinero desde cualquier lugar!</p>
                </div>
                <div className='flex flex-wrap justify-between mt-4 lg:min-w-[360px] '>
                    <div className='flex-1 flex justify-center mb-2  lg:mb-0'>
                        <Image src={appStore} alt='appStore' className='h-6 w-15 rounded object-contain lg:h-10' />
                    </div>
                    <div className='flex-1 flex justify-center mb-2 lg:mb-0'>
                        <Image src={play} alt='play' className='h-6 w-13 rounded object-contain lg:h-10 ' />
                    </div>
                    <div className='flex-1 flex justify-center mb-2 lg:mb-0'>
                        <Image src={gallery} alt='gallery' className='h-6 w- rounded object-contain  lg:h-10' />
                    </div>
                </div>
            </div>
            {/* Ajustar la imagen del celular */}
            <div className='lg:block hidden justify-center items-center lg:absolute lg:right-[0px] lg:top-[-40px]'>
                <Image src={celu} alt='celulart' height={400} className='lg:h-80 lg:w-auto' />
            </div>
        </div>
    </div>
</div>
    )
}

export default Playtrores;