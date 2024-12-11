import { CardProduct } from "../components/product/CardProductComponent";
import { ContainerFilter } from "../components/product/ContainerFilterComponent";
import { allSmartPhones } from "../data/initialData"
import { prepareProducts } from "../helpers"

export const SmarthPhonesPage = () => {
  const preparedProducts = prepareProducts(allSmartPhones);

  return (
    <>
      <h1 className="mb-12 text-5xl font-semibold text-center">
        Teléfonos
      </h1>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {/* Filtros */}
        <ContainerFilter />

        <div className="flex flex-col col-span-2 gap-12 lg:col-span-3 xl:col-span-4">
          <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4">
            {preparedProducts.map(product => (
              <CardProduct
              key={product.id}
              slug={product.slug} 
              name={product.name} 
              price={product.price} 
              colors={product.colors} 
              image={product.images[0]} 
              variants={product.variants} />
            ))}
          </div>

          {/* TODO: Paginación */}
        </div>
      </div>
    </>
  )
}