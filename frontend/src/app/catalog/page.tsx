"use client";

import React, { useEffect } from "react";
import { SessionRepository } from "../chat/repositories/chat_session_repository";
import ChatSession from "../chat/models/chat_session";
import { useSnapshot } from "valtio";
import authState from "../store/auth";
import { v4 as uuidv4 } from "uuid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@nextui-org/react";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";
// import Image from "next/image";

export default function Page() {
  const repo = new SessionRepository();
  const userState = useSnapshot(authState);

  useEffect(() => {
    console.log("eff");
  }, []);

  const handleCreateSession = () => {
    const session = new ChatSession({
      buyerId: userState.user?.id!,
      sellerId: "d53cb05f-a4ff-46d1-8b65-3311ebaea291",
      productId: uuidv4(),
      category: "taha",
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    });
    repo.createSession(session);
  };

  return (
    <div className="grid grid-cols-3 mx-[10%]">
      <Card className="m-3 ">
        <CardHeader className="justify-center">
          <Image
            src="https://picsum.photos/300/300"
            alt="random image"
            height={300}
            width={300}
          />
        </CardHeader>
        <CardBody className="mx-4">
          <p className="text-xl font-semibold">name of product</p>
          <p>a few more details</p>
          <p>a few more details</p>
          <p>a few more details</p>
        </CardBody>
        <CardFooter className="mx-4">
          <Button
            as={Link}
            href="/catalog/product"
            className="text-black flex justify-start items-center"
          >
            <p>View Details</p>
            <TfiArrowTopRight className="mt-1 mx-1" />
          </Button>
        </CardFooter>
      </Card>
      <Card className="m-3">
        <CardHeader className="justify-center">
          <Image
            src="https://picsum.photos/300/300"
            alt="random image"
            height={300}
            width={300}
          />
        </CardHeader>
        <CardBody className="mx-4">
          <p className="text-xl font-semibold">name of product</p>
          <p>a few more details</p>
          <p>a few more details</p>
          <p>a few more details</p>
        </CardBody>
        <CardFooter className="mx-4">
          <Button
            as={Link}
            href="/catalog/product"
            className="text-black flex justify-start items-center"
          >
            <p>View Details</p>
            <TfiArrowTopRight className="mt-1 mx-1" />
          </Button>
        </CardFooter>
      </Card>
      <Card className="m-3">
        <CardHeader className="justify-center">
          <Image
            src="https://picsum.photos/300/300"
            alt="random image"
            height={300}
            width={300}
          />
        </CardHeader>
        <CardBody className="mx-4">
          <p className="text-xl font-semibold">name of product</p>
          <p>a few more details</p>
          <p>a few more details</p>
          <p>a few more details</p>
        </CardBody>
        <CardFooter className="mx-4">
          <Button
            as={Link}
            href="/catalog/product"
            className="text-black flex justify-start items-center"
          >
            <p>View Details</p>
            <TfiArrowTopRight className="mt-1 mx-1" />
          </Button>
        </CardFooter>
      </Card>
      <Card className="m-3">
        <CardHeader className="justify-center">
          <Image
            src="https://picsum.photos/300/300"
            alt="random image"
            height={300}
            width={300}
          />
        </CardHeader>
        <CardBody className="mx-4">
          <p className="text-xl font-semibold">name of product</p>
          <p>a few more details</p>
          <p>a few more details</p>
          <p>a few more details</p>
        </CardBody>
        <CardFooter className="mx-4">
          <Button
            as={Link}
            href="/catalog/product"
            className="text-black flex justify-start items-center"
          >
            <p>View Details</p>
            <TfiArrowTopRight className="mt-1 mx-1" />
          </Button>
        </CardFooter>
      </Card>
      <Card className="m-3">
        <CardHeader className="justify-center">
          <Image
            src="https://picsum.photos/300/300"
            alt="random image"
            height={300}
            width={300}
          />
        </CardHeader>
        <CardBody className="mx-4">
          <p className="text-xl font-semibold">name of product</p>
          <p>a few more details</p>
          <p>a few more details</p>
          <p>a few more details</p>
        </CardBody>
        <CardFooter className="mx-4">
          <Button
            as={Link}
            href="/catalog/product"
            className="text-black flex justify-start items-center"
          >
            <p>View Details</p>
            <TfiArrowTopRight className="mt-1 mx-1" />
          </Button>
        </CardFooter>
      </Card>
      <Card className="m-3">
        <CardHeader className="justify-center">
          <Image
            src="https://picsum.photos/300/300"
            alt="random image"
            height={300}
            width={300}
          />
        </CardHeader>
        <CardBody className="mx-4">
          <p className="text-xl font-semibold">name of product</p>
          <p>a few more details</p>
          <p>a few more details</p>
          <p>a few more details</p>
        </CardBody>
        <CardFooter className="mx-4">
          <Button
            href="/catalog/product"
            className="text-black flex justify-start items-center"
          >
            <p>View Details</p>
            <TfiArrowTopRight className="mt-1 mx-1" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
