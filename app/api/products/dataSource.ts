"use server"
// En este archivo implementaremos la conexión con supabase

import { createClient } from "@/utils/supabase/server";
import { Product } from "./data";
import { cookies } from "next/headers";

export async function getAllProducts(): Promise<Product[]> {
    //Crear el cliente de supabase
    const cookieStore = await cookies();
    const supabase = await createClient(cookieStore);

    const { data, error } = await supabase
    .from("Products")
    .select("*");

    return data as Product[];
}

export async function getProductById(id: number): Promise<Product | null> {
    const cookieStore = await cookies();
    const supabase = await createClient(cookieStore);

    const { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("id", id)
    .single();

    return data as Product | null;
}

export async function searchProduct(q: string): Promise<Product[]> {
    const cookieStore = await cookies();
    const supabase = await createClient(cookieStore);

    const { data, error } = await supabase
    .from("Products")
    .select("*")
    .or(`name.ilike.%${q}%,brand.ilike.%${q}%`);

	return (data ?? []) as Product[]; 
}

export async function saveProduct(
  product: Omit<Product, "id"> //La función de Omit es que algún campo de Product dentro de la etiqueta lo omita o no lo llama
                               //En este caso omite la id porque no es necesario traerla a la hora de crear un producto nuevo
): Promise<Product> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("Products")
    .insert(product)
    .select()
    .single();

  return data as Product;
}

export async function updateProduct(id: number, 
  product: Partial<Product>) { //La función de Partial hace que todos los campos de Product se vuelvan opcionales,
                               //lo que hace que solo cambien los datos editados y no todos los datos
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const { data, error } = await supabase
    .from("Products")
    .update(product)
    .eq("id", id)
    .select()
    .single();

  return data as Product;
}