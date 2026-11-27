
"use client";
import type { Product } from "@/app/api/products/data";
import { Card } from "@heroui/react";
import { Button } from "@heroui/react";
import Link from "next/link";

interface Props {
    Product: Product; 
}

export function ProductSearch({
    Product,
}: Props) {
    return (
      <Card className="w-[400px] h-[600px] gap-2">
        <img
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square w-380 rounded-2xl object-cover select-none mb-3"
          loading="lazy"
          src={Product.cover}
        />
        <Card.Header>
          <Card.Title className="text-3xl mb-3">{Product.name}</Card.Title>
          <p className="text-green-300 mb-3">${Product.price} {Product.currency}</p>
          <Card.Description className="text-ml">{Product.description}</Card.Description>
        </Card.Header>
        <Card.Footer className="flex gap-3 mt-1">
          <span className="text-sm">⭐{Product.rating}</span>
          <span className="text-sm"> {Product.sold} Unidades vendidas</span>
        </Card.Footer>
      </Card>
    )
}