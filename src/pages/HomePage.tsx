import { FeatureGrid } from "../components/home"
import { Brands, ProductGrid } from "../components/home/Product"
import { popularSmartPhones, recentSmartPhones } from "../data/initialData"
import { prepareProducts } from "../helpers"

export const HomePage = () => {
  const preparedPopularProducts = prepareProducts(popularSmartPhones);
  const preparedRecentProducts = prepareProducts(recentSmartPhones);
  return (
    <div>
      <FeatureGrid />

      <ProductGrid title={"Nuevos Productos"} products={preparedRecentProducts} />

      <ProductGrid title={"Productos Populares"} products={preparedPopularProducts} />

      <Brands />
    </div>
  )
}