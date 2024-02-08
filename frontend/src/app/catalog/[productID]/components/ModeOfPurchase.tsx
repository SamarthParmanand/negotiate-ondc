"use client";

import { Tabs, Tab, Button, Skeleton } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";
import authState from "@/app/store/auth";
import ChatSession from "@/app/chat/models/chat_session";
import { SessionRepository } from "@/app/chat/repositories/chat_session_repository";
import { ProductModel } from "../../models/product_model";
import { v4 as uuidv4 } from "uuid";

export function SkeletonMOP() {
  return <Skeleton className="h-60 w-full rounded-xl my-4" />;
}

export default function ModeOfPurchase({
  product,
}: {
  product: ProductModel | null;
}) {
  const userState = useSnapshot(authState);
  const router = useRouter();
  const repo = new SessionRepository();
  const createSession = () => {
    const session: ChatSession = {
      id: uuidv4(),
      sellerId: product?.sellerId!,
      buyerId: userState.user?.id!,
      createdAt: new Date(),
      productId: product?.id!,
      category: product?.sub_category!,
    };
    repo.createSession(session);
    router.push("/chat");
  };

  if (!product) return <SkeletonMOP />;

  return (
    <div className="my-4">
      <p className="">Mode of Purchase:</p>
      <Tabs
        classNames={{
          tabList: "gap-3 w-full relative bg-gray-200",
          cursor: "w-full bg-gray-300",
          tab: "max-w-fit px-0 h-12",
        }}
        variant="solid"
      >
        <Tab
          title="B2B"
          className="bg-gray-200 px-8 border border-gray-300 rounded-xl my-1"
        >
          <div>Minimum Order Quantity: {product?.min_order_quantity}</div>
          <div>some more info regarding b2b</div>
          <div>some more info regarding b2b</div>
          <div>some more info regarding b2b</div>
          <Button className="my-2 bg-gray-300" onClick={createSession}>
            This will create a session with buyer and seller to negotiate
          </Button>
        </Tab>
        <Tab
          title="B2C"
          className="bg-gray-200 px-8 border border-gray-300 rounded-xl my-1"
        >
          <div>Minimum Bulk Order: {product?.min_bulk_order}</div>
          <div>some more info regarding b2c</div>
          <div>some more info regarding b2c</div>
          <div>some more info regarding b2c</div>
          <Button className="my-2 bg-gray-300" onClick={createSession}>
            my-2 This will create a session with buyer and seller to negotiate
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
}
