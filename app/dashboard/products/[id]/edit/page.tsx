import { notFound } from "next/navigation";
import { ProductForm } from "../../components/ProductForm";
import { getProductById } from "@/services/products-service";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // id para la URL del producto a editar
  const product = await getProductById(Number(id));  // busca en Supabase un producto con el id correspondiente
  if (!product) notFound(); //En caso de no encontrar un producto con esa id regresara un error

  return( 
    <ProductForm 
      Product={product} 
    />
  );
}