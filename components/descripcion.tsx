'use client';
import { useState } from 'react';
import Image from 'next/image';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import forbes from "@/public/forbes.png"
import nasdaq from "@/public/nasdaq.jpg"
import gestion from "@/public/gestion.png"

const images = [
  { src: forbes, description: '"Citi ha realizado una inversión estratégica en Rextie. Se trata de la primera inversión del banco en tecnologia financiera en América Latina Con este capital, la fintech espera acumular 7.000 millones de dólares transaccionados en la plataforma hacia el 2024".' },
  { src: gestion, description: '"Nuestro CEO, Mateu Batie, comparte sus conocimientos sobre los desafios y oportunidades en el mercado de las fintech en Perú. Desde regulaciones hasta obstáculos operativos, este articulo arroja luz sobre el panorama financiero actual".' },
  { src: nasdaq, description: '"La inversión y ta integración de la tecnologia FX de vanguardia de Citi, CitiFX Pulse e Instant Payments, impulsarán la expansión de Rextie, al tiempo que brindarán a sus clientes un servicio mas rápido y tipos de cambio de divisas más competitivos".' },
];

const Descripcion: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6">
      {/* Botones de navegación */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/4 transform -translate-y-1/2 p-2 bg-[#eff2ff] rounded-full shadow-md "
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-[#0032ff]" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/4 transform -translate-y-1/2 p-2 bg-[#eff2ff] rounded-full shadow-md "
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-[#0032ff]" />
      </button>

      {/* Contenedor de imágenes */}
      <div className="flex justify-center space-x-10 m-4 ">
        {images.map((image, index) => (
          <div key={index} className={`relative transition-opacity duration-300 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-30'}`}>
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              
              height={22}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Descripción */}
      <div className=" mt-4 text-lg font-semibold ">
        <p className='text-xs text-left mx-10'>{images[currentIndex].description}</p>
      <p className='cursor-pointer text-[#0032ff] mx-10 text-xs font-extrabold'>Ver noticia</p>
      </div>
    </div>
  );
};

export default Descripcion;
