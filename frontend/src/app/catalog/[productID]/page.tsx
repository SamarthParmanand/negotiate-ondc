"use client";

import CatalogRepository from "../repositories/product_repository";
import { ProductModel } from "../models/product_model";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import ProductSwiper from "./components/ProductSwiper";
import Misc from "./components/Misc";
import ModeOfPurchase from "./components/ModeOfPurchase";
import ProductIntro from "./components/ProductIntro";

export default function Page({ params }: { params: { productID: string } }) {
  const repo = new CatalogRepository();
  const [product, setProduct] = useState<ProductModel | null>(null);
  const [images, setImages] = useState<string[]>([] as string[]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    repo.fetchProductById(params.productID).then((product) => {
      setProduct(product);
      setImages(product?.images);
    });
  });

  if (!product) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spinner
          label="Loading Product"
          labelColor="foreground"
          color="current"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 bg-gray-200">
      <div className="h-screen bg-gray-300 py-[10%] px-[15%]">
        <ProductSwiper images={images} />
      </div>
      <div className="h-screen flex flex-col py-[15%] px-[15%] overflow-scroll">
        <ProductIntro product={product} />
        <ModeOfPurchase product={product} />
        <Misc product={product} />
      </div>
    </div>
  );
}
