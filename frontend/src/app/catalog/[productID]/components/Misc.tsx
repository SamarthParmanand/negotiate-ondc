import { Accordion, AccordionItem, Skeleton } from "@nextui-org/react";
import { FaCaretLeft } from "react-icons/fa";
import { ProductModel } from "../../models/product_model";

export function SkeletonMisc() {
  return <Skeleton className="h-60 w-full rounded-xl my-4" />;
}

export default function Misc({ product }: { product: ProductModel | null }) {
  if (!product) return <SkeletonMisc />;

  return (
    <div className="my-4">
      <p className="my-2">Misc. Info:</p>
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
