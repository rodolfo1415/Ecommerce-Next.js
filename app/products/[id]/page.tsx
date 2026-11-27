
import { notFound } from "next/navigation";
import { ProductCardInfo } from "./ProductDetail";
import { getProductById } from "@/services/products-service";

export default async function ProductId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //leer el parámetro: id
  const { id } = await params;
  const ProductID = Number(id);

  //si el id no es un número válido
  if (!ProductID) {
    return notFound();
  }

  //consumir el id
  const Product = await getProductById(ProductID);

  //si el producto no existe
  if (!Product) {
    return notFound();
  }
  
  return <ProductCardInfo Product={Product} />;
}