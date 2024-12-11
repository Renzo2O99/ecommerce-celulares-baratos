import { Link } from "react-router-dom"
import { CardProductProps } from "./CardProduct.interface"
import { FiPlus } from "react-icons/fi"
import { useState } from "react"
import { formatPrice } from "../../../helpers"

export const CardProduct = ({image, name, price, slug, colors, variants}: CardProductProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeColor, setActiveColor] = useState<{name: string; color: string}>(colors[0]);
  
  // Identificar la variante seleccionada según el color activo.
  const selectedVariant = variants.find(variant => variant.color === activeColor.color);

  const stock = selectedVariant?.stock || 0;
  
  return (
    <div className="flex relative flex-col gap-6">
      <Link to={`/telefonos/${slug}`} className="flex overflow-hidden relative group">
        <div className="flex h-[350px] w-full items-center justify-center py-2 lg:h-[250px]">
          <img className="object-contain w-full h-full" src={image} alt={name} />
        </div>

        <button className="absolute bottom-0 py-3 w-full bg-white border border-slate-200 rounded-3xl flex items-center justify-center gap-1 text-sm font-medium hover:bg-stone-100 translate-y-[100%] transition-all duration-300 group-hover:translate-y-0">
          <FiPlus /> Añadir
        </button>
      </Link>

      <div className="flex flex-col gap-1 items-center">
        <p className="text-[15px] font-medium">{name}</p>
        <p className="text-[15px] font-medium">{formatPrice(price)}</p>

        <div className="flex gap-3">
          {colors.map(color => (
            <span key={color.color} className={"grid place-items-center w-5 h-5 rounded-full cursor-pointer"}>
              <span style={{ backgroundColor: color.color }} className="w-[14px] h-[14px] rounded-full" />
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-2 left-2">
        {stock === 0 && (
          <span>Agotado</span>
        )}
      </div>
    </div>
  )
}