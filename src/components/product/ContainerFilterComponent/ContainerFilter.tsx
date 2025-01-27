import { Separator } from "../../shared/SeparatorComponent"
import { availableBrands } from "./ContainerFilter.data"

export const ContainerFilter = () => {
  return (
    <div className="col-span-2 p-5 rounded-lg border border-slate-200 h-fit lg:col-span-1">
      <h3 className="mb-4 text-xl font-semibold">
        Filtros
      </h3> 

      <Separator />
      
      {/* Separador */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-medium text-black">
          Marcas
        </h3>

        <div className="flex flex-col gap-2">
          {availableBrands.map(brand => (
            <label key={brand} className="inline-flex items-center">
              <input type="checkbox" className="text-black border-black focus:ring-black accent-black" />

              <span className="ml-2 text-sm text-black cursor-pointer">
                {brand}
              </span>
            </label>
          )
          )}
        </div>
      </div>
    </div>

  )
}