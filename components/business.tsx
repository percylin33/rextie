import TablaCambio from "./tabla-cambio"


const Business = () => {
    return (
        <div className="mt-10">
            <div className="md:my-5">
                <div className="flex justify-center lg:hidden">
                    <span className=" rounded-full bg-[#00c8ff] w-4 h-4 items-center inline-block mr-2"></span>
                    <p className="font-extrabold text-sm text-[#0032ff]">RECTIE BUSINESS</p>
                </div>
                <h2 className="lg:hidden font-extrabold text-3xl text-[#0032ff] text-center">Tenemos un tipo de cambio exclusivo</h2>

                {/* Contenedor principal con disposición condicional en pantalla grande */}
                <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start">
                    {/* Tabla a la izquierda */}
                    <div className="lg:w-1/2">
                        <TablaCambio />
                    </div>

                    {/* Texto y botones a la derecha */}
                    <div className="lg:w-1/2">
                        <div className="flex justify-center lg:block hidden">
                            <span className=" rounded-full bg-[#00c8ff] w-4 h-4 items-center inline-block mr-2"></span>
                            <span className="font-extrabold text-sm text-[#0032ff]">RECTIE BUSINESS</span>
                        </div>
                        <h2 className="hidden lg:block font-extrabold text-3xl text-[#0032ff] ">Tenemos un tipo de cambio exclusivo</h2>
                        <div className="m-6 p-6 lg:pl-0 lg:ml-0">
                            <p className="font-semibold text-sm text-center lg:text-left">
                                Cambia tus dólares a soles de forma segura, rápida y confiable con nuestra casa de cambio online.
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-start my-4">
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