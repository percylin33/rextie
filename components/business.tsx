import TablaCambio from "./tabla-cambio"


const Business = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-center">
                <span className="rounded-full bg-[#00c8ff] w-4 h-4 items-center inline-block mr-2"></span>
                <p className="font-extrabold text-sm text-[#0032ff]">RECTIE BUSINESS</p>
            </div>
            <h2 className="font-extrabold text-3xl text-[#0032ff] text-center">Tenemos un tipo de cambio exclusivo</h2>
            <TablaCambio />
            <div className="m-6 p-6">
                <p className="font-semibold text-sm text-center"> Cambia tus dólares a soles de forma segura, rápida y confiable con nuestra casa de cambio online. </p>
            </div>
            <div className="flex justify-center my-4">
                <button className="p-2 bg-[#0032ff] rounded text-white font-semibold">Conocer más</button>

            </div>
            <div className="bg-[#0032ff] text-center p-4">
                <p className="text-center text-white font-extrabold text-xl">Cambia tu dinero rápido y seguro</p>
                <button className="p-2 mt-4 bg-white rounded text-[#0032ff] font-extrabold mx-auto">Cambia aquí</button>
            </div>
        </div>
    )
}

export default Business