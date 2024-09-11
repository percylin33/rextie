'use client';
import Image from 'next/image';
import adex from '@/public/carrusel/adex.jpg';
import asep from '@/public/carrusel/asep.jpg';
import ccl from '@/public/carrusel/ccl.jpg';
import filte from '@/public/carrusel/filte.jpg';
import scale from '@/public/carrusel/scale.jpg';
import somos from '@/public/carrusel/somos.jpg';
import visa from '@/public/carrusel/visa-blanco.png';
import ui from '@/public/carrusel/ui.jpg';
import seed from '@/public/carrusel/seed.jpg';
import mini from '@/public/carrusel/mini.jpg';
import start from '@/public/carrusel/start.jpg';
import up from '@/public/carrusel/up.jpg';

const images = [somos, adex, asep, ccl, filte, scale, visa, ui, seed, mini, start, up];

const ContinuousCarousel: React.FC = () => {
    return (
        <div className="overflow-hidden w-full relative bg-[#0032ff] p-2 h-[80px] md:h-[150px]">
            <div className="flex w-full h-full">
                <div className="flex flex-nowrap animate-marquee space-x-4">
                    {images.concat(images).map((src, index) => (
                        <div key={index} className="flex-shrink-0 h-full flex items-center justify-center" style={{ width: '200px' }}>
                            <Image
                                src={src}
                                alt={`Image ${index + 1}`}
                                height={120}
                                width={200}
                                className="rounded-lg object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .animate-marquee {
                    display: flex;
                    flex-wrap: nowrap;
                    width: ${images.length * 200}px; /* Asegúrate de que el ancho sea suficiente para las imágenes */
                    animation: marquee 12s linear infinite; /* Ajusta la duración para una animación fluida */
                }
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-${images.length * 200}px); /* Desplaza el ancho completo de las imágenes */
                    }
                }
                @media (max-width: 768px) {
                    .animate-marquee {
                        animation: marquee 35s linear infinite; /* Aumenta la velocidad en pantallas pequeñas si es necesario */
                    }
                }
            `}</style>
        </div>
    );
};

export default ContinuousCarousel;