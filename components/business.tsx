import TablaCambio from "./tabla-cambio"


const Business = () => {
    return (
        <div className="mt-10">
            <div className="md:my-5">
                <div className="flex justify-center xl:hidden">
                    <span className=" rounded-full bg-[#00c8ff] w-4 h-4 items-center inline-block mr-2"></span>
                    <p className="font-extrabold text-sm text-[#0032ff]">RECTIE BUSINESS</p>
                </div>
                <h2 className="xl:hidden font-extrabold text-3xl text-[#0032ff] text-center">Tenemos un tipo de cambio exclusivo</h2>

                {/* Contenedor principal con disposición condicional en pantalla grande */}
                <div className="flex flex-col xl:flex-row xl:space-x-8 items-center xl:items-start">
                    {/* Tabla a la izquierda */}
                    <div className="xl:w-1/2">
                        <TablaCambio />
                    </div>

                    {/* Texto y botones a la derecha */}
                    <div className="xl:w-[40%]">
                        <div className=" xl:block hidden">
                            <div className="flex justify-start">
                            <span className=" rounded-full bg-[#00c8ff] w-4 h-4 items-center inline-block mr-2"></span>
                            <span className="font-extrabold text-sm text-[#0032ff]">RECTIE BUSINESS</span>

                            </div>
                        </div>
                        <h2 className="hidden xl:block font-extrabold text-3xl text-[#0032ff] ">Tenemos un tipo de cambio exclusivo</h2>
                        <div className="m-6 p-6 lg:pl-0 lg:ml-0" >
                            <p className="font-semibold text-sm text-center xl:text-left lg:text-base">
                                Cambia tus dólares a soles de forma segura, rápida y confiable con nuestra casa de cambio online.
                            </p>
                        </div>
                        <div className="flex justify-center xl:justify-start my-4">
                            <button className="p-2 bg-[#0032ff] rounded text-white font-semibold">
                                Conocer más
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sección inferior */}
                <div className="bg-[#0032ff] text-center p-4 mt-8">
                    <p className="text-center text-white font-extrabold text-xl">Cambia tu dinero rápido y seguro</p>
                    <button className="p-2 mt-4 bg-white rounded text-[#0032ff] font-extrabold mx-auto">
                        Cambia aquí
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Business