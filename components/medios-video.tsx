"use client";
import { useState } from 'react';
import equipo from "@/public/equipo.png";
import Image from 'next/image';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MediosVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true); // Cambia el estado a true cuando se hace clic
  };

  return (
    <div className="video-container ">
      {!isPlaying ? (
        // Imagen estática o miniatura
        <div className="video-thumbnail" onClick={handleVideoClick}>
          {/* Imagen del video */}
          <Image
            src={equipo}
            alt="YouTube Thumbnail"
            className="cursor-pointer object-cover rounded-xl"
            fill
          />
          {/* Overlay oscuro */}
          <div className="overlay rounded-xl"></div>
          {/* Botón de reproducción anaranjado y redondo */}
          <div className="play-button">
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </div>
      ) : (
        // Reproducción del video una vez que se hace clic
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/j3s5nfNl12Q?autoplay=1" // URL embebida de YouTube
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <style jsx>{`
        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
        .video-thumbnail {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* Mantiene una relación de aspecto de 16:9 */
          cursor: pointer;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Oscurece la imagen con un fondo negro semitransparente */
          z-index: 1;
        }
        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #ff6e00; /* Fondo anaranjado */
          color: white; /* Texto en blanco */
          font-size: 48px;
          border: 3px solid white; /* Borde blanco */
          border-radius: 50%; /* Borde completamente redondo */
          width: 80px;
          height: 80px;
          z-index: 2; /* Para asegurarse de que el botón esté encima del overlay */
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Sombra opcional para dar relieve */
        }
        .play-button svg {
          color: white; /* Color del icono */
        }
        .play-button:hover {
          background-color: darkorange; /* Color más oscuro al hacer hover */
        }
      `}</style>
    </div>
  );
}

export default MediosVideo;