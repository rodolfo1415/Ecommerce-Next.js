"use client";
import type { Product } from "@/app/api/products/data";
import { Card } from "@heroui/react";
import { Button } from "@heroui/react";

interface Props {
    Product: Product; 
}

export function ProductCardInfo({
    Product,
}: Props) {
    return(
    <Card className="w-full h-160 md:flex-row">
      <div className="flex flex-col">
       <div className="relative h-140 w-full shrink-0 overflow-hidden rounded-2xl sm:h-[480px] sm:w-[480px]">
        <img
          alt="Cherries"
          className="pointer-events-none absolute inset-0 h-full w-full scale-100 object-cover flex flex-col"
          src={Product.cover}
         />
         </div>
         <div className="mt-3 flex gap-2.5">
          <img
           className="w-28 h-28 rounded-xl"
           src={Product.images[0]}
           alt={Product.name}
          />
          <img
           className="w-28 h-28 rounded-xl"
           src={Product.images[1]}
           alt={Product.name}
          />
          <img
           className="w-28 h-28 rounded-xl"
           src={Product.images[2]}
           alt={Product.name}
          />
          <img
           className="w-28 h-28 rounded-xl"
           src={Product.images[3]}
           alt={Product.name}
          />
          </div>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pe-8 text-4xl">{Product.name}</Card.Title>
          <p className="mt-2">⭐{Product.rating} {Product.sold} Unidades vendidas</p>
          <p className="text-green-300 mt-2">${Product.price} {Product.currency}</p>
          <Card.Description className="mt-2">
            {Product.description}
          </Card.Description>
          <h1 className="text-xl mt-2">Variante</h1>
          <p className="text-xs">Equipación</p>
          <div className="flex gap-4 w-20 h-20">
           <img
            className="rounded-xl"
            src={Product.images[0]}
            alt={Product.name}
            />
            <img
             className="rounded-xl"
             src={Product.images[4]}
             alt={Product.name}
            />
           </div>
           <h1 className="text-xl mt-3">Cantidad</h1>
           <div className="w-6 h-6 bg-gray-800 text-center border-white border-1 rounded-sm">
            <p className="pb-2">1</p>
           </div>
           <span>Stock: {Product.stock}</span>

        </Card.Header>
        <Card.Footer className="flex w-full flex-col items-start sm:flex-row sm:items-center">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground"></span>
            <span className="text-xs text-muted"></span>
          </div>
          <Button className="w-full sm:w-auto">Comprar</Button>
          <Button className="w-full sm:w-auto bg-gray-700 ml-4">Agregar al carrito</Button>
        </Card.Footer>
      </div>
    </Card>
    )
}