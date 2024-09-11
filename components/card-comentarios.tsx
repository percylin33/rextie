"use client"
import { useState } from "react";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cards = [
  {
    title: "Chanel Ramos",
    description: "“Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y me permitió ahorrar tiempo. Es la mejor app que he usado”.",
    descriptionMovil: "“Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y ahorré tiempo. La mejor que he usado”.",
    imageUrl: "/images/card1.jpg",
  },
  {
    title: "Grecia Retamozo",
    description: "“La mejor casa de cambio online, siempre se preocupan porque sea un servicio bueno y honesto. Me llaman incluso cuando pasó algún error y lo solucionan rápido”.",
    descriptionMovil: "“Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y ahorré tiempo. La mejor que he usado”.",
    imageUrl: "/images/card2.jpg",
  },
  {
    title: "Jorge Suarez",
    description: "“Hasta el momento estoy muy contento con el servicio brindado por Rextie. Nunca tuve problemas con la app, es de mucha ayuda. La recomiendo”.",
    descriptionMovil: "“Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y ahorré tiempo. La mejor que he usado”.",
    imageUrl: "/images/card3.jpg",
  },
  {
    title: "Reni Ravina",
    description: "“Rextie tiene una muy buena app, sencilla de usar y con muy buenos precios de venta y compra del dólar. Es la mejor casa de cambio online”.",
    descriptionMovil: "“Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y ahorré tiempo. La mejor que he usado”.",
    imageUrl: "/images/card4.jpg",
  },
];

const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Contenedor principal que incluye las flechas y la carta */}
      <div className="relative flex items-center justify-between w-full">
        {/* Flecha izquierda solo visible en móviles */}
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          onClick={handlePrevClick}
          className="lg:hidden text-4xl px-4 py-2 absolute left-0 z-10 text-[#0032ff]"
        />

        {/* Contenedor de las cartas */}
        <div className="flex w-full overflow-x-auto lg:overflow-visible justify-center ">
          {/* Vista en móvil (solo una carta a la vez con scroll) */}
          <div className="lg:hidden max-w-[250px] bg-[#eff2ff] border border-[#828fc4] rounded-xl">
            <div className="pt-20 px-4">
              <p className="font-semibold m-4 text-center text-sm mb-10">
                {cards[currentIndex].descriptionMovil}
              </p>
              <h3 className="text-lg font-bold mt-2 text-center py-4">
                {cards[currentIndex].title}
              </h3>
            </div>
          </div>

          {/* Vista en desktop (todas las cartas en fila) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 w-[80%]">
            {cards.map((card, index) => (
              <div
                key={index}
                className="border p-6 bg-[#eff2ff] border-[#828fc4] rounded flex flex-col justify-center items-center h-full lg:h-[500px]"
              >
                <p className="mb-4 xl:text-2xl sm:text-lg font-semibold text-gray-600 flex-grow flex items-center justify-center">
                  {card.description}
                </p>
                <h3 className="text-lg font-bold mt-2 self-end">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Flecha derecha solo visible en móviles */}
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          onClick={handleNextClick}
          className="lg:hidden text-4xl px-4 py-2 absolute right-0 z-10 text-[#0032ff]"
        />
      </div>
    </div>
  );
};

export default CardCarousel;
