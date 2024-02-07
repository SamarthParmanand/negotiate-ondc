"use client";

import React, { useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import CatalogRepository from "./repositories/product_repository";
import { ProductModel } from "./models/product_model";
import ProductCard from "./components/ProductCard";

export default function Page() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const repo = new CatalogRepository();

  useEffect(() => {
    repo.fetchProducts().then(setProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    repo.fetchProducts(searchTerm).then(setProducts);
  };

  return (
    <div className="mx-[10%] bg-gray-200">
      <div className="flex items-center">
        <Input
          placeholder="Search for products..."
          className="my-3 mx-1"
          size="sm"
          style={{}}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Button className="mx-1 h-12" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className="grid grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
