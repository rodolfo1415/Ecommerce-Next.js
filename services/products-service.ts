//	products-services.ts

import { Product } from "@/app/api/products/data";
//	mplementar las funciones para
//consumir los endpoints de api/products
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


function getApiUrl(path: string): string {
	if (!API_BASE_URL){
		throw new Error("Falta ruta base de la API")
	}

	return `${API_BASE_URL.replace(/\/$/, "")}${path}`; 
}

export async function getAllProducts(): Promise<Product[]> {
	const response = await fetch(getApiUrl("/products"), {
		cache: "no-store", method: "GET",
	});
	
	if (!response.ok) {
		throw new Error(
			`Error al obtener productos: ${response.status}`
		);
	}

	//	retornar array con la lista de productos
	const data = await response.json();
	return data.Products as Product[];
}

//leer un producto por id

export async function getProductById(id: number): Promise<Product | null> {
	//localhost:3000/api/products/id:
	const response = await fetch(getApiUrl(`/products/${id}`), {
		cache: "no-store", method: "GET",
	});
	
    if (!response.ok) {
        //si no existe el producto, regresamos null
        if (response.status === 404) return null;
        throw new Error(`Error al obtener el producto ${id}: ${response.status}`);
    }

	const data = await response.json();
	return data as Product;
}


//


//Busacr por criterio

export async function searchProduct(q: string): Promise<Product[]> {
	const response = await fetch(getApiUrl(`/products/search?q=${encodeURIComponent(q)}`), {
    cache: "no-store", method: "GET",
});
	
    if (!response.ok) {
        throw new Error(`Error al buscar producto ${q}: ${response.status}`);
    }

	const data = await response.json();
	return (data.results ?? []) as Product[];
}

//crear un producto nuevo
export async function saveProduct(product: Omit<Product, "id">): Promise<Product> {
    //localhost:3000/api/products
    const response = await fetch(getApiUrl("/products"), {
        method: "POST",
		 //El body hace que los datos que se envían al servidor. Solo se manda en POST y PUT.
        //JSON.stringify convierte el objeto product a texto JSON, porque fetch
        //no puede enviar objetos directamente
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        throw new Error(`Error al crear el producto: ${response.status}`);
    }

    const data = await response.json();
    return data as Product;
}

//actualizar un producto por id
export async function updateProduct(id: number, product: Partial<Product>): Promise<Product> {
    //localhost:3000/api/products/id
    const response = await fetch(getApiUrl(`/products/${id}`), {
        method: "PUT",
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        throw new Error(`Error al actualizar el producto: ${response.status}`);
    }

    const data = await response.json();
    return data as Product;
}
