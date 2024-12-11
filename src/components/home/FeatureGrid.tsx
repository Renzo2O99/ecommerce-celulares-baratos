import { BiWorld } from "react-icons/bi"
import { FaHammer } from "react-icons/fa6"
import { HiReceiptRefund } from "react-icons/hi"
import { MdLocalShipping } from "react-icons/md"

export const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5">
      <div className="flex gap-6 items-center">
        <MdLocalShipping size={40} className="text-slate-600" />

        <div className="space-y-1">
          <p className="font-semibold">Envío Gratis</p>

          <p className="text-sm">En todos nuestros productos</p>
        </div>
      </div>
      
      <div className="flex gap-6 items-center">
        <HiReceiptRefund size={40} className="text-slate-600" />

        <div className="space-y-1">
          <p className="font-semibold">Botón de arrepentimiento</p>

          <p className="text-sm">Puedes devolverlo en un periodo de 72 horas</p>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <FaHammer size={40} className="text-slate-600" />

        <div className="space-y-1">
          <p className="font-semibold">Soporte 24/7</p>

          <p className="text-sm">Nuestro soporte técnico puede resolver cualquier consulta</p>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <BiWorld size={40} className="text-slate-600" />

        <div className="space-y-1">
          <p className="font-semibold">Seguridad garantizada</p>

          <p className="text-sm">Nuestra empresa garantiza la seguridad de tus datos y compras</p>
        </div>
      </div>
    </div>
  )
}