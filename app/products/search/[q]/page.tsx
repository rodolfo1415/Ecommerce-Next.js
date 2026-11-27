/*
Se recive el query de busqueda 
y se manda a buscar al backend

/products/search?query=criterio-busqueda
*/

import { searchProduct } from "@/services/products-service";
import { ProductSearch } from "./productQueryCard";

export default async function SearchProductPage({
  params,
}: {
  params: Promise<{ q: string }>
}) {
    const { q } = await params;
    console.log("Buscando: ", q);

    //Buscar al Backend

    const products = await searchProduct(q);

    if (!products?.length) {
      return(
        <div>
          <p>
            No se encontro ningún producto
          </p>
        </div>
      )
    }

  return (
    <div className="flex flex-wrap gap-4">
      {products.map((Product) => (
        <ProductSearch 
        key={Product.id} 
        Product={Product} 
        />
      ))}
    </div>
  );
}
