"use client"
import Image from "next/image";
import { useState } from "react";
import logo1 from "@/public/logo1.png";
import logo2 from "@/public/rex-2.png";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (<div>
        <div className="hidden xl:block ml-60 ">
            <ul className="flex  w-auto p-4 space-x-7  ">
                <li
                    onClick={() => handleClick(0)}
                    className={` text-white font-extrabold text-lg  pb-0 cursor-pointer border-b-4 ${activeIndex === 0 ? 'border-orange-500 font-extrabold' : 'border-transparent'}`}
                >
                    Personas
                </li>
                <li
                    onClick={() => handleClick(1)}
                    className={` text-white font-extrabold text-lg  pb-0 cursor-pointer border-b-4 ${activeIndex === 1 ? 'border-orange-500 font-extrabold' : 'border-transparent'}`}
                >
                    Empresas
                </li>
            </ul>
        </div>
        <div className="flex justify-center">
            <nav className="bg-transparent p-4 relative xl:w-[78%]" id='inicio'>
                <div className="flex justify-between items-center">
                    {/* Imagen a la izquierda */}
                    <div className="flex-shrink-0 xl:ml-20 md:hidden">
                        <Image src={logo1} alt="logo1" height={35} className="xl:w-20" />
                    </div>
                    <div className="flex-shrink-0 hidden md:block">
                        <div className="flex justify-start items-start ml-0">
                            <Image src={logo2} alt="logo1" height={35} className="xl:w-50 w-40" />
                        </div>
                    </div>

                    {/* Botones centrados */}
                    <div>
                        <div className=" flex space-x-4 ">
                            <div className="hidden xl:block">
                                <div className="flex justify-center space-x-10 text-white font-bold text-xl   ">
                                    <p>Nosotros</p>
                                    <p>Blog</p>
                                    <div>
                                        <div className="flex justify-between space-x-4" onClick={toggleServices}>
                                            <p>Servicios</p>
                                            <FontAwesomeIcon icon={isServicesOpen ? faChevronUp : faChevronDown} className="pr-8 pt-1 text-orange-500 border-r-4 border-gray-500 hidden md:block    " />
                                        </div>
                                        <ul className={`  font-semibold  bg-[#eff2ff] text-[#000096] text-lg ${isServicesOpen ? 'block' : 'hidden'}`}>
                                            <li>Factoring</li>
                                            <li>visa</li>
                                            <li>Empresas</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button className="text-black md:text-white md:font-extrabold md:text-xl px-4 py-2 font-bold">Iniciar sesión</button>
                            <button className="text-white bg-[#0024b3] px-4 py-2 rounded-xl font-semibold md:text-xl md:font-extrabold">Registrate</button>
                            <div className="xl:hidden">
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="text-[#0024b3] text-2xl md:text-white"
                                >
                                    &#9776; {/* Icono de menú hamburguesa */}
                                </button>

                            </div>
                        </div>

                        {/* Menú hamburguesa a la derecha (solo móvil) */}
                    </div>
                </div>

                {/* Menú Mobile */}
                <div
                    className={`fixed top-0 right-0 h-full bg-white shadow-lg w-full transform transition-transform duration-300 ease-in-out z-50 ${open ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex justify-between p-4 items-center">
                        <div className="flex items-center">
                            <button
                                onClick={() => setOpen(false)}
                                className="text-black text-2xl p-2 font-semibold"
                            >
                                &#x2715; {/* Icono de cierre */}
                            </button>

                            {/* Asegúrate de especificar tanto el ancho como la altura */}
                            <Image src={logo1} alt="logo1" height={38} width={38} className="object-contain" />
                        </div>

                        <div className="flex space-x-4">
                            <button className="text-black px-4 py-2 font-bold">Iniciar sesión</button>
                            <button className="text-white bg-[#0032ff] px-4 py-2 rounded-xl">Registrate</button>
                        </div>
                    </div>
                    <div>
                        <ul className="flex justify-around w-full p-4 bg-[#eff2ff] ">
                            <li
                                onClick={() => handleClick(0)}
                                className={` text-[#000096] font-semibold text-lg  pb-0 cursor-pointer border-b-4 ${activeIndex === 0 ? 'border-orange-500 font-extrabold' : 'border-transparent'}`}
                            >
                                Personas
                            </li>
                            <li
                                onClick={() => handleClick(1)}
                                className={` text-[#000096] font-semibold text-lg  pb-0 cursor-pointer border-b-4 ${activeIndex === 1 ? 'border-orange-500 font-extrabold' : 'border-transparent'}`}
                            >
                                Empresas
                            </li>
                        </ul>
                    </div>

                    <p className="block my-2 font-semibold text-[#000096] text-lg ml-4 ">Nosotros</p>
                    <p className="border-b border-gray-300 last:border-b-0"></p>
                    <p className="block my-2 font-semibold text-[#000096] text-lg ml-4">Blog</p>
                    <p className="border-b border-gray-300 last:border-b-0"></p>
                    <div >
                        <div className="flex justify-between" onClick={toggleServices}>
                            <p

                                className="font-semibold text-[#000096] text-lg cursor-pointer ml-4 py-2"
                            >
                                Servicios
                            </p>
                            <FontAwesomeIcon icon={isServicesOpen ? faChevronUp : faChevronDown} className="pr-8 pt-1 text-orange-500" />
                        </div>
                        <p className="border-b border-gray-300 last:border-b-0 "></p>

                        <ul
                            className={`  font-semibold  bg-[#eff2ff] text-[#000096] text-lg ${isServicesOpen ? 'block' : 'hidden'}`}
                        >
                            <li className="pl-8 py-2">Tipo de cambio</li>
                            <p className="border-b border-gray-300 last:border-b-0"></p>
                            <li className="pl-8 py-2">Rextie Factoring</li>
                            <p className="border-b border-gray-300 last:border-b-0"></p>
                            <li className="pl-8 py-2">Confirming</li>
                            <p className="border-b border-gray-300 last:border-b-0"></p>
                            <li className="pl-8 py-2">TRextie Business</li>
                            <p className="border-b border-gray-300 last:border-b-0"></p>
                            <li className="pl-8 py-2 flex items-center">
                                Visa
                                <span className="bg-orange-400 text-white text-xs font-semibold rounded-full px-2 py-1 ml-2">Nuevo</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    );
};

export default Navbar;