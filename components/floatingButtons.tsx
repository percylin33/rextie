"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center space-y-4 z-50">
      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/123456789" // Cambia el número al tuyo
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-1 border-4 border-white rounded-full shadow-2xl hover:bg-green-600 transition duration-300"
        aria-label="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
      </a>

      {/* Botón de Chatbot */}
      <button
        onClick={() => alert("Chatbot activado")} // Aquí puedes integrar tu chatbot
        className="bg-[#1a2ced] text-white p-4 border-4 rounded-tr-xl border-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        aria-label="Chatbot"
      >
        <FontAwesomeIcon icon={faMessage} size="1x" />
      </button>
    </div>
  );
};

export default FloatingButtons;