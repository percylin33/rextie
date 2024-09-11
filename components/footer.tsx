'use client'
import { useState } from "react";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faYoutube, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import libro from "@/public/libro.jpg"
import rex from "@/public/rex.png"

const Footer = () => {
    // Definimos un estado con las listas posibles
    const [openLists, setOpenLists] = useState<{
        services: boolean;
        resources: boolean;
        support: boolean;
    }>({
        services: false,
        resources: false,
        support: false
    });

    // Cambiamos el tipo de listName a un tipo unión que coincida con las claves de openLists
    const toggleList = (listName: 'services' | 'resources' | 'support') => {
        setOpenLists(prevState => ({
            ...prevState,
            [listName]: !prevState[listName] // Alterna solo la lista específica
        }));
    };

    return (
        <footer className="bg-white">
            <div className="container mx-auto p-6">
                {/* En desktop, se muestran las listas completas, en móvil, listas desplegables */}
                <div className="md:flex md:justify-around space-y-4 md:space-y-0">
                    {/* Lista 1 - Servicios */}
                    <div className="md:flex-1 border-b border-gray-700 md:border-none">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => toggleList('services')}
                                className="md:hidden w-full text-left text-lg font-extrabold py-4"
                            >
                                Servicios {/* Título de la lista */}
                            </button>
                            <FontAwesomeIcon
                                icon={openLists.services ? faChevronUp : faChevronDown}
                                className="pr-8 pt-1 text-blue-800 md:hidden"
                            />
                        </div>
                        <ul className={`mb-8 md:block ${openLists.services ? 'block' : 'hidden'}`}>
                            <li className="py-1"><a href="#">Enlace 1</a></li>
                            <li className="py-1"><a href="#">Enlace 2</a></li>
                            <li className="py-1"><a href="#">Enlace 3</a></li>
                        </ul>
                    </div>

                    {/* Lista 2 - Recursos */}
                    <div className="md:flex-1 border-b border-gray-700 md:border-none">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => toggleList('resources')}
                                className="md:hidden w-full text-left text-lg font-extrabold py-4"
                            >
                                Recursos{/* Título de la lista */}
                            </button>
                            <FontAwesomeIcon
                                icon={openLists.resources ? faChevronUp : faChevronDown}
                                className="pr-8 pt-1 text-blue-800 md:hidden"
                            />
                        </div>
                        <ul className={`md:block ${openLists.resources ? 'block' : 'hidden'}`}>
                            <li className="py-1"><a href="#">Enlace 4</a></li>
                            <li className="py-1"><a href="#">Enlace 5</a></li>
                            <li className="py-1"><a href="#">Enlace 6</a></li>
                        </ul>
                    </div>

                    {/* Lista 3 - Soporte */}
                    <div className="md:flex-1 border-b border-gray-700 md:border-none">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => toggleList('support')}
                                className="md:hidden w-full text-left text-lg font-extrabold py-4"
                            >
                                Soporte{/* Título de la lista */}
                            </button>
                            <FontAwesomeIcon
                                icon={openLists.support ? faChevronUp : faChevronDown}
                                className="pr-8 pt-1 text-blue-800 md:hidden"
                            />
                        </div>
                        <ul className={`mb-8 md:block ${openLists.support ? 'block' : 'hidden'}`}>
                            <li className="py-1"><a href="#">Enlace 7</a></li>
                            <li className="py-1"><a href="#">Enlace 8</a></li>
                            <li className="py-1"><a href="#">Enlace 9</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-center mb-6">Contacto</p>
                        <div>
                            <p className="text-[#0032ff] font-extrabold text-center text-xs">info@rextie.com</p>
                            <p className="text-center text-xs text-gray-400 py-2 font-bold">T.01 700 3301</p>
                            <p className="text-center text-xs text-gray-400 font-bold">C.963 893 793</p>
                        </div>
                        <div className="mt-6">
                            <p className="text-center text-xs text-gray-400 font-bold">Lunes a Viernes:</p>
                            <p className="text-center text-xs text-gray-400 font-bold">8:00 am. - 8:00 pm.</p>
                        </div>
                        <div className="mt-6">
                            <p className="text-center text-xs text-gray-400 font-bold">Sábados:</p>
                            <p className="text-center text-xs text-gray-400 font-bold">9:00 am. - 3:00 pm.</p>
                        </div>
                        <div className="mt-6">
                            <p className="text-center text-xs text-gray-400 font-bold">Av. José Gálvez</p>
                            <p className="text-center text-xs text-gray-400 font-bold">Brrenechea 566, Of. 101,</p>
                            <p className="text-center text-xs text-gray-400 font-bold">Urb.Corpac, San Isidro, Lima.</p>
                        </div>
                        <div className="flex justify-center my-8 border-b border-t border-gray-300 py-4">
                            <Image src={libro} alt="libro" height={50} />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center space-x-6">
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-[#707e9b]" />
                            <FontAwesomeIcon icon={faFacebookF} className="text-[#707e9b]" />
                            <FontAwesomeIcon icon={faYoutube} className="text-[#707e9b]" />
                            <FontAwesomeIcon icon={faTiktok} className="text-[#707e9b]" />
                            <FontAwesomeIcon icon={faInstagram} className="text-white bg-gray-500" />
                        </div>
                        <div className="flex justify-center mt-5">
                            <div className="mr-2">
                                <Image src={rex} alt="rex" height={43} />
                            </div>
                            <div className="border-l-2 border-gray-300 pl-2">
                                <p className="text-xs text-gray-500 font-semibold">Rextie S.A.C.</p>
                                <p className="text-xs text-gray-500 font-extrabold">RUC 20601030013</p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            <div className="bg-[#000096]">
                    <p className="text-white text-xs text-center font-bold p-4">©2024 Rextie: La casa de cambio online, Líder del Perú. Todos los derechos reservados.</p>
                </div>
                <p className="text-center text-xs font-bold text-gray-400">3.12.14</p>
        </footer>
    );
}

export default Footer;