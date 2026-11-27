import { Suspense } from "react";
import { ProductCard } from "./ProductCard";
import { SearchBar } from "./SearchBar";
import { getAllProducts, searchProduct } from "@/services/products-service";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const products = q ? await searchProduct(q) : await getAllProducts();

  return (
    <section className="flex flex-col gap-6">
      <Suspense>
        <SearchBar />
      </Suspense>

      {products.length === 0 ? (
        <p>No se encontraron productos para "{q}".</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((Product) => (
            <ProductCard key={Product.id} Product={Product} />
          ))}
        </div>
      )}
    </section>
  );
}

