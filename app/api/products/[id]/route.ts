// api/products/:id
//El parametro se llama id

import { error } from "console";
import { Products } from "../data";
import { getProductById, updateProduct } from "../dataSource";



interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}
// Endpoint para leer un producto por ID
export async function GET(request: Request, { params }: RouteParams) {
  const { id } = await params;
  const ProductId = Number(id);

  // Si no hay id o no es un número, la URL está mal
  if (!id || Number.isNaN(ProductId)) {
    return Response.json(
      { error: true, message: "URL Incorrecta" },
      { status: 400 }
    );
  }
  
    const producto = await getProductById(ProductId);

    if (!producto) {
      return Response.json(
        { error: true, message: "Producto no existe" },
        { status: 404 }
    );
  }
  return Response.json (
	producto
  );
}

let data = Products;
//Actualizar un producto
// api/products/:id

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const update = await updateProduct(Number(id), body);
    return Response.json(update);
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    return Response.json({ error: true, message: "Error del servidor" }, { status: 500 });
  }
}


//Eliminar un producto por id
export async function DELETE(
	request: Request,
	{ params }: RouteParams
) {
	const { id } = await params;

	const product = data.find( p => p.id === Number(id));

	if(!product){
		return Response.json({
			error: true,
			message: "Producto no existe"
		}, {
			status: 404
		});
	}

	//Eliminar el producto
	const deleteProduct = data.splice(Number(id));

	return Response.json({
		status: "Succes",
		message: "Producto eliminado",
		product: deleteProduct,
	});
}


//Buscar un producto por 

