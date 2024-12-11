import { Color, Product, VariantsProduct, PreparedProducts } from "../interfaces";

// Función que nos permite formatear el precio de los productos a precios en dólares.
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

// Función que nos permite preparar los productos para la card.
export const prepareProducts = (products: Product[]): PreparedProducts[] => {
  return products.map((product) => {
    // Agrupamos las variantes por su respectivo color.
    const colors = product.variants.reduce((acc: Color[], variant: VariantsProduct) => {
      const existingColor = acc.find(item => item.color === variant.color);

      if (existingColor) {
        // En caso de que exista el color, comparamos los precios y almacenamos el menor.
        existingColor.price = Math.min(existingColor.price, variant.price);
      } 
      else {
        acc.push({
          color: variant.color,
          price: variant.price,
          name: variant.color_name,
        });
      }

      return acc;
    }, []);

    // Obtenemos el precio más bajo de las variantes agrupadas.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const price = Math.min(...colors.map(item => item.price));

    // Devolvemos el producto formateado.
    return {
      id: product.id,
      name: product.name,
      brand: product.brand,
      slug: product.slug,
      features: product.features,
      description: product.description,
      images: product.images,
      created_at: product.created_at,
      price: Math.min(...product.variants.map(v => v.price)), // Precio mínimo de las variantes
      colors,
      variants: product.variants,
    };
  });
};