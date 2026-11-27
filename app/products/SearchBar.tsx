
"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@heroui/react";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const [value, setValue] = useState(q);

  useEffect(() => {
    setValue(q);
  }, [q]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = value.trim();
    router.push(
      text ? `/products/search?q=${encodeURIComponent(text)}` : "/products"
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <Input
        type="search"
        placeholder="Buscar por nombre o marca..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Buscar productos"
      />
    </form>
  );
}