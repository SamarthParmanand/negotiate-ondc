import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Skeleton,
  Image,
  Chip,
} from "@nextui-org/react";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";
import { type Product } from "../models/product_model";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="m-3 bg-gray-100">
      <CardHeader className="justify-center">
        <Image
          src={product.primary_image}
          alt="random image"
          height={300}
          width={300}
        />
      </CardHeader>
      <CardBody className="px-6">
        <p className="text-xl font-semibold">{product.title}</p>
        <p className="py-4">{product.description}</p>
      </CardBody>
      <CardFooter className="px-5 flex flex-col">
        <div className="flex">
          <Chip className="m-1 ">₹{product.selling_price}</Chip>
          <Chip className="m-1 ">{product.industry}</Chip>
          <Chip className="m-1 ">Stock: {product.stock}</Chip>
        </div>
        <Link
          href={`/catalog/${product.id}`}
          className="text-sm bg-gray-100 flex justify-start items-center my-3"
        >
          <p>View Details</p>
          <TfiArrowTopRight className="translate-y-0.5 mx-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}

export function SkeletonCard() {
  return (
    <Card className="m-3 bg-gray-100">
      <CardHeader className="justify-center">
        <Skeleton className="rounded-xl h-[300px] w-[300px]" />
      </CardHeader>
      <CardBody className="px-6">
        <Skeleton className="rounded-xl py-4 my-1.5" />
        <Skeleton className="rounded-xl py-4 my-1.5" />
      </CardBody>
      <CardFooter className="px-5 flex flex-col">
        <div className="flex m-2 rounded">
          <Skeleton className="m-1 w-20 h-6 rounded-full" />
          <Skeleton className="m-1 w-20 h-6 rounded-full" />
          <Skeleton className="m-1 w-20 h-6 rounded-full" />
        </div>
        <Skeleton className="w-full h-10 rounded-xl"></Skeleton>
      </CardFooter>
    </Card>
  );
}
