"use client";

import CatalogRepository from "../repositories/product_repository";
import { ProductModel } from "../models/product_model";
import { useEffect, useState } from "react";
import { Button, Chip, Tabs, Tab, Spinner } from "@nextui-org/react";
import ProductSwiper from "./components/ProductSwiper";
import Misc from "./components/Misc";
import ModeOfPurchase from "./components/ModeOfPurchase";

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
        <div>
          <p className="text-4xl font-bold my-1">{product?.title}</p>
          <p className="text-2xl font-semibold mb-4">
            {product?.supplier_info}
          </p>
          <p className="text-2xl font-semibold my-4">
            ₹{product?.selling_price}
          </p>
        </div>
        <div className="my-4">
          <div className="text-xl mb-3">
            {product?.description}{" "}
            <Chip className="mx-1">{product?.industry}</Chip>
            <Chip className="mx-1">{product?.sub_category}</Chip>
          </div>
          <p className="text-xl">Available Stock: {product?.stock}</p>
          {product?.color_variants && <p>Available Colors: </p>}
          {product?.color_variants?.map((color) => (
            <Button
              key={color}
              name={color}
              className={`bg-${color}-500 rounded-full h-8 w-8`}
            />
          ))}
        </div>
        <ModeOfPurchase product={product} />
        <Misc product={product} />
      </div>
    </div>
  );
}
