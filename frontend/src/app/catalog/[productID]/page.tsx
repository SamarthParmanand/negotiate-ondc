"use client";

import CatalogRepository from "../repositories/product_repository";
import { ProductModel } from "../models/product_model";
import { useEffect, useState } from "react";
import {
  Button,
  Accordion,
  AccordionItem,
  Chip,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { FaCaretLeft } from "react-icons/fa";
export default function Page({ params }: { params: { productID: string } }) {
  const repo = new CatalogRepository();
  const [product, setProduct] = useState<ProductModel>({} as ProductModel);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    repo.fetchProductById(params.productID).then(setProduct);
  });

  return (
    <div className="grid grid-cols-2 bg-gray-200">
      <div className="h-screen bg-gray-300">product images here</div>
      <div className="h-screen flex flex-col py-[15%] px-[15%]">
        <div>
          <p className="text-4xl font-bold my-1">{product.title}</p>
          <p className="text-2xl font-semibold mb-4">{product.supplier_info}</p>
          <p className="text-2xl font-semibold my-4">
            ₹{product.selling_price}
          </p>
        </div>
        <div className="my-4">
          <p className="text-xl ">{product.description}</p>
          <div className="flex mt-2 mb-4 gap-2">
            <Chip>{product.industry}</Chip>
            <Chip>{product.sub_category}</Chip>
          </div>
          <p className="text-xl">Available Stock: {product.stock}</p>
          {product.color_variants && <p>Available Colors: </p>}
          {product.color_variants?.map((color) => (
            <Button
              key={color}
              name={color}
              className={`bg-${color}-500 rounded-full h-8 w-8`}
            />
          ))}
        </div>
        <div className="my-4">
          <p className="">Mode of Purchase:</p>
          <Tabs
            classNames={{
              tabList: "gap-3 w-full relative  bg-gray-200",
              cursor: "w-full bg-gray-300",
              tab: "max-w-fit px-0 h-12",
            }}
            variant="solid"
          >
            <Tab
              title="B2C"
              className="bg-gray-200 px-8 border border-gray-300 rounded-xl my-1"
            >
              <div>Minimum Order Quantity: {product.min_order_quantity}</div>
              <Button>
                This will create a session with buyer and seller to negotiate
              </Button>
            </Tab>
            <Tab
              title="B2B"
              className="bg-gray-200 px-8 border border-gray-300 rounded-xl my-1"
            >
              <div>Minimum Bulk Order: {product.min_bulk_order}</div>
              <Button>
                This will create a session with buyer and seller to negotiate
              </Button>
            </Tab>
          </Tabs>
        </div>
        <div className="my-4">
          <p className="text-xl my-2">Misc. Info:</p>
          <Accordion className="bg-gray-200" variant="shadow">
            <AccordionItem
              indicator={<FaCaretLeft />}
              title="Terms and Conditions"
            >
              {product.terms_and_conditions}
            </AccordionItem>
            <AccordionItem indicator={<FaCaretLeft />} title="Handling">
              {product.handling}
            </AccordionItem>
            <AccordionItem
              indicator={<FaCaretLeft />}
              title="Manufacturing Information"
            >
              {product.manufacturing_info}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
