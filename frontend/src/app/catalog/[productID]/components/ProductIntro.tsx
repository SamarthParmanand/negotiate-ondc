import { ProductModel } from "../../models/product_model";
import { Button, Chip, Skeleton } from "@nextui-org/react";

export function SkeletonIntro() {
  return (
    <>
      <Skeleton className="w-full h-60 rounded-xl my-4" />
    </>
  );
}

export default function ProductIntro({
  product,
}: {
  product: ProductModel | null;
}) {
  if (!product) return <SkeletonIntro />;

  return (
    <>
      <div>
        <p className="text-4xl font-bold my-1">{product?.title}</p>
        <p className="text-2xl font-semibold mb-4">{product?.supplier_info}</p>
        <p className="text-2xl font-semibold my-4">₹{product?.selling_price}</p>
      </div>
      <div className="my-4">
        <div className="text-xl mb-3">
          {product?.description}{" "}
          <Chip className="mx-1 bg-gray-300">{product?.industry}</Chip>
          <Chip className="mx-1 bg-gray-300">{product?.sub_category}</Chip>
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
    </>
  );
}
