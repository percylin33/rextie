import Descripcion from "./descripcion"
import MediosVideo from "./medios-video"


const Medios = () => {
  return (
    <div className="mt-12">
      <div className="mb-4">
        <h2 className="text-center text-3xl font-extrabold text-[#0032ff] ">Rextie en los medios</h2>
      </div>
      <div>
        <p className="text-xs text-center font-semibold">Encuentra artículos y noticias en medios que hablan de nuetra casa de cambio online. </p>
      </div>
      <div className="lg:flex lg:space-x-6 lg:justify-center lg:w-[70%] lg:mx-auto mx-4">
        {/* Ajustamos el diseño de MediosVideo */}
        <div className="mt-4 px-4 lg:w-1/2 lg:flex-shrink-0">
          <MediosVideo />
        </div>
        {/* Ajustamos el diseño de Descripcion */}
        <div className="lg:w-1/2 lg:flex-shrink-0">
          <Descripcion />
        </div>
      </div>

    </div>
  )
}

export default Medios