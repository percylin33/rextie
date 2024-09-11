"use client"
import { NextPage } from 'next'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/navigation';

interface Props {}


const ButtonInicio: NextPage<Props> = ({}) => {
    const router = useRouter()
  return (
    <div className="flex items-center justify-center my-8">
      {/* Líneas del separador */}
      <div className="flex-grow border-t border-2 ml-4 border-[#0032ff] "></div>
      
      {/* Círculo con el icono */}
      <button onClick={() => router.push("/#inicio")} className="p-3 bg-[#0032ff] rounded-full border border-gray-300 cursor-pointer ">
        <FontAwesomeIcon icon={faChevronUp} className="text-white text-xl" />
      </button>

      {/* Líneas del separador */}
      <div className="flex-grow border-t border-2 mr-4 border-[#0032ff]"></div>
    </div>
  )
}

export default ButtonInicio;