import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaCaretLeft } from "react-icons/fa";
import { ProductModel } from "../../models/product_model";

export default function Misc({ product }: { product: ProductModel | null }) {
  return (
    <div className="my-4">
      <p className="text-lg my-2">Misc. Info:</p>
      <Accordion className="bg-gray-200" variant="shadow" isCompact>
        <AccordionItem indicator={<FaCaretLeft />} title="Terms and Conditions">
          {product?.terms_and_conditions}
        </AccordionItem>
        <AccordionItem indicator={<FaCaretLeft />} title="Handling">
          {product?.handling}
        </AccordionItem>
        <AccordionItem
          indicator={<FaCaretLeft />}
          title="Manufacturing Information"
        >
          {product?.manufacturing_info}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
