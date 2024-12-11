import { CardProduct } from "../../product/CardProductComponent"
import { ProductGridProps } from "./ProductGrid.interface"

export const ProductGrid = ({title, products}: ProductGridProps) => {
  return (
    <div className="my-32">
      <h2 className="mb-8 text-3xl font-semibold text-center md:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(product => (
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
    </div>
  )
}