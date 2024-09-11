import { NextPage } from 'next'
import Image from 'next/image'
import logo from "@/public/logo-b.jpg"
import star from "@/public/icons/icon-start.jpg"
import appStore from "@/public/icons/app-store.jpg"
import play from "@/public/icons/pay-store.jpg"
import gallery from "@/public/icons/gallery.png"

interface Props { }

const Playtrores: NextPage<Props> = ({ }) => {
    return (
        <div className='flex justify-center mt-10'>
            <div className='my-10 bg-[#eff2ff] p-4 mx-4 rounded min-w-[400px] lg:min-w-[600px] lg:p-6'>
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
                <div className='flex min-w-[280px] space-x-2 mt-4 lg:min-w-[360px] md:justify-around'>
                    <Image src={appStore} alt='appStore' className='h-6 w-15 rounded object-contain lg:h-8 lg:w-20' />
                    <Image src={play} alt='play' className='h-6 w-13 rounded object-contain lg:h-8 lg:w-16' />
                    <Image src={gallery} alt='gallery' className='h-6 w-15 rounded object-contain lg:h-8 lg:w-20' />
                </div>
            </div>
        </div>
    )
}

export default Playtrores;