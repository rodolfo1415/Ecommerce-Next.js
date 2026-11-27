import { Product } from "@/app/api/products/data";
import { ProductForm } from "../components/ProductForm";


export default function NewProductPage() {
    
    
        const product: Product = {
            id: 0,
            name: "",
            description: "",
            brand: "",
            cover: "",
            rating: 0,
            images: [],
            price: 0,
            currency: "MXN",
            stock: 0,
            sold: 0,
        }

       return(
        <ProductForm
         Product={product}
         />
    );
}