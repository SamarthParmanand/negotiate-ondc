import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
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
          src="https://picsum.photos/300/300"
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
