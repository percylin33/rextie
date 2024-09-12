import Image from "next/image"
import rex from "@/public/rex-2.png"
import sunat from "@/public/Sunat.png"
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TablaCambio = () => {
    return (
        <div className="flex justify-center mt-4">
        <div>
            <table className="table-auto rounded-2xl m-2 border-separate border-spacing-0 lg:scale-105">
                <thead>
                    <tr className="bg-[#0032ff] text-xs lg:text-sm">
                        <th className="px-2 py-2 rounded-tl-2xl pl-2">
                            <Image src={rex} height={30} alt="rextie" className="lg:w-10 lg:h-auto" />
                        </th>
                        <th className="text-center">
                            <p className="text-white lg:text-md">Compra:</p>
                            <p className="text-white font-extrabold lg:text-md">S/ 3,7985</p>
                        </th>
                        <th className="text-center rounded-tr-2xl">
                            <p className="text-white lg:text-md">Venta:</p>
                            <p className="text-white font-extrabold lg:text-md">S/ 3,7985</p>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-[#f7f8fb]">
                    <tr>
                        <td className="border-t border-gray-300 px-4 py-2">
                            <Image src={sunat} width={100} alt="rextie" className="lg:w-[120px]" />
                        </td>
                        <td className="border-t border-gray-300 px-4 py-2">
                            <p className="font-semibold text-xs text-gray-600 lg:text-sm">S/ 3,7790</p>
                        </td>
                        <td className="border-t border-gray-300 px-4 py-2">
                            <p className="font-semibold text-xs text-gray-600 lg:text-sm">S/ 3,7810</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t border-gray-300 px-4 py-2 rounded-bl-2xl">
                            <FontAwesomeIcon icon={faBuildingColumns} className="text-gray-600 lg:text-lg" />
                            <span className="font-semibold text-xs text-gray-600 ml-2 lg:text-sm">Bancos*</span>
                        </td>
                        <td className="border-t border-gray-300 px-4 py-2">
                            <p className="font-semibold text-xs text-gray-600 lg:text-sm">S/ 3,7420</p>
                        </td>
                        <td className="border-t border-gray-300 px-4 py-2 rounded-br-2xl">
                            <p className="font-semibold text-xs text-gray-600 lg:text-sm">S/ 3,8870</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="text-xs font-semibold pl-2 lg:text-sm">*Precios referenciales</p>
        </div>
    </div>
    )
}

export default TablaCambio