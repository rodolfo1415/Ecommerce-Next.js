import { Products } from "../data";
import { searchProduct } from "../dataSource";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") ?? "";

    const results = await searchProduct(q);
    console.log("q:", q, "| resultados:", results.length);
    return Response.json({ total: results.length, results });
  } catch (error) {
    console.error("Error al buscar productos:", error);
    return Response.json({ error: true, message: "Error del servidor" }, { status: 500 });
  }
}