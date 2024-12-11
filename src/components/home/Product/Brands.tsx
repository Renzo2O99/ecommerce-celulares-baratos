import { brands } from "./data"

export const Brands = () => {
  return (
    <div className="flex flex-col gap-3 items-center pt-16 pb-12">
      <h2 className="text-2xl font-bold">Marcas que disponemos</h2>

      <p className="w-2/3 text-sm text-center md:text-base">
        Tenemos los últimos modelos de teléfonos disponibles de las principales marcas.
      </p>

      <div className="grid grid-cols-3 gap-6 items-center mt-8 md:grid-cols-6">
        {brands.map((brand, index) => (
          <div key={index}>
            <img src={brand.image} alt={brand.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}