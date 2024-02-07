"use client";

import CatalogRepository from "../repositories/product_repository";
import { ProductModel } from "../models/product_model";
import { useEffect } from "react";

export default function Page({ params }: { params: { productID: string } }) {
  const repo = new CatalogRepository();

  useEffect(() => {
    repo.fetchProducts(params.productID).then(console.log);
  });

  return <div>{params.productID}</div>;
}
