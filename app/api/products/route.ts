//TS JavaScript tipado
//----> POO

import { Products } from "./data";
import { getAllProducts, saveProduct } from "./dataSource";
//Vamos a implementar el recurso llamado products: CRUD - API REST

//Declarar el tipo product con interface o con type

//endpoints
//endpoint para acceder a una recurso, se define por un tipo de petición
// GET, POST, PUT, PATCH, DELETE

//ejemplo de primer end point


export async function GET() {
  try {
    const products = await getAllProducts();
    return Response.json({ Products: products });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return Response.json({ error: true, message: "Error del servidor" }, { status: 500 });
  }
}
// endpoint para agregar un producto
//POST


export async function POST(request: Request) {
  try {
    const { name, description, brand, images, cover, price, currency, stock, rating, sold } =
      await request.json();

    const nuevo = await saveProduct({
      name, description, brand, images, cover, price, currency, stock, rating, sold,
    });

    return Response.json(nuevo, { status: 201 });
  } catch (error) {
    console.error("Error al guardar el producto:", error);
    return Response.json({ error: true, message: "Error del servidor" }, { status: 500 });
  }
}

