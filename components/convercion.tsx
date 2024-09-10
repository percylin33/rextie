"use client"
import { faTrophy, faRotate, faPiggyBank } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from 'react';
import peru from "@/public/peru.png"
import eeuu from "@/public/estados-unidos.png"



const Convercion = () => {
    const [selected, setSelected] = useState<null | string>('compra');
    const [intercambiado, setIntercambiado] = useState(false);



    // Valores condicionales para "Enviar" y "Recibir"
    const enviar = intercambiado
        ? { bandera: eeuu, moneda: 'USD', monto: '$ 1,200.00' }
        : { bandera: peru, moneda: 'PEM', monto: '$ 3,801.50' };

    const recibir = intercambiado
        ? { bandera: peru, moneda: 'PEM', monto: '$ 3,801.50' }
        : { bandera: eeuu, moneda: 'USD', monto: '$ 1,200.00' };





    const handleIntercambio = () => {
        setIntercambiado(!intercambiado);
    };
    const handleClick = (type: string) => {
        setSelected(type); // Cambia el estado al tipo seleccionado
    };
    return (
        <div>
        <div className='bg-[#040438] rounded-xl m-8 mb-2 pb-1'>
            <div className='flex justify-center py-4'>
                <FontAwesomeIcon icon={faTrophy} className='text-white' />
                <span className='text-white text-sm font-semibold pl-4'>
                    Cambia al instante con todos los bancos en Perú
                </span>
            </div>

            <div className='bg-white m-2 rounded-xl p-4'>
                <div className='flex justify-between mx-1 bg-[#eff2ff] rounded-xl p-1'>
                    <p
                        onClick={() => handleClick('compra')}
                        className={`font-bold p-3 rounded-xl text-sm cursor-pointer ${selected === 'compra' ? 'bg-white' : 'text-black'}`}
                    >
                        Compra S/ 3,000.15
                    </p>
                    <p
                        onClick={() => handleClick('venta')}
                        className={`font-bold p-3 rounded-xl text-sm cursor-pointer ${selected === 'venta' ? 'bg-white' : 'text-black'}`}
                    >
                        Venta S/ 3,801.50
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg relative">
                    {/* Div de Enviar */}
                    <div className="flex justify-between p-3 py-2 bg-white rounded-xl border-2 border-[#0024b3] w-full text-center">
                        <div>
                            <h3 className="font-semibold text-lg text-[#000f49]">Enviar</h3>
                            <div className="flex">
                                <Image src={enviar.bandera} alt="bandera" width={20} className="rounded-xl text-[#000f49]" />
                                <span className="text-[#000f49] font-bold ml-1">{enviar.moneda}</span>
                            </div>
                        </div>
                        <p className="text-[#000f49] mt-6 font-bold">{enviar.monto}</p>
                    </div>

                    {/* Icono de intercambio (posicionado en el centro) */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 cursor-pointer bg-[#0024b3] rounded-full p-2 shadow-lg"
                        onClick={handleIntercambio}
                    >
                        <FontAwesomeIcon icon={faRotate} className="text-white text-2xl hover:rotate-180 transition-transform duration-300 ease-in-out" />
                    </div>

                    {/* Div de Recibir */}
                    <div className="flex justify-between mt-2 p-3 py-2 bg-white rounded-xl border-2 border-[#0024b3] w-full text-center">
                        <div>
                            <h3 className="font-semibold text-lg text-[#000f49]">Recibir</h3>
                            <div className="flex">
                                <Image src={recibir.bandera} alt="bandera" width={20} className="rounded-xl text-[#000f49]" />
                                <span className="text-[#000f49] font-bold ml-1">{recibir.moneda}</span>
                            </div>
                        </div>
                        <p className="text-[#000f49] mt-6 font-bold">{recibir.monto}</p>
                    </div>
                </div>
                <p className="text-[#0094b3] text-center font-bold text-sm">Usar un cupóno código</p>
                <div className="flex justify-center py-4">

                    <span className="text-[#000f49] text-center font-bold text-sm">Ahorro promedio*</span>
                    <FontAwesomeIcon icon={faPiggyBank} className=" h-5 mx-2"/>
                    <span className="text-[#000f49] text-center font-bold text-sm">S/ 28.03</span>
                </div>
                <button className="bg-[#0024b3] text-white w-full rounded-xl py-4 font-bold">Iniciar seción</button>
            </div>
        </div>
        <p className="text-[#000f49] text-center font-semibold text-xs">(*)Cálculo respecto al tipo de cambio publicado por entidades bancarias.</p>
        </div>
    );
}

export default Convercion