"use client";

import { Button } from "@nextui-org/react";
import { useSnapshot } from "valtio";
import { SessionRepository } from "../chat/repositories/chat_session_repository";
import authState from "../store/auth";
import CatalogRepository from "./repositories/product_repository";

export default function Page() {
  const repo = new SessionRepository();
  const userState = useSnapshot(authState);
  const catalogRepo = new CatalogRepository();
  const handleCreateSession = () => {
    // const session = new ChatSession({
    //   buyerId: userState.user?.id!,
    //   sellerId: "d53cb05f-a4ff-46d1-8b65-3311ebaea291",
    //   productId: uuidv4(),
    //   category: "taha",
    //   id: uuidv4(),
    //   createdAt: new Date().toISOString(),
    // });
    // repo.createSession(session);
    catalogRepo.fetchProducts("phone").then(console.log);
  };

  return (
    <div className="grid grid-cols-3">
      <Button
        onClick={handleCreateSession}
        className="rounded-full h-40 w-40 border-2 border-purple-300 m-2"
      >
        product one
      </Button>
      <Button
        onClick={handleCreateSession}
        className="rounded-full h-40 w-40 border-2 border-purple-300 m-2"
      >
        product two
      </Button>
      <Button
        onClick={handleCreateSession}
        className="rounded-full h-40 w-40 border-2 border-purple-300 m-2"
      >
        one
      </Button>
      <Button
        onClick={handleCreateSession}
        className="rounded-full h-40 w-40 border-2 border-purple-300 m-2"
      >
        one
      </Button>
      <Button
        onClick={handleCreateSession}
        className="rounded-full h-40 w-40 border-2 border-purple-300 m-2"
      >
        one
      </Button>
      <Button
        onClick={handleCreateSession}
        className="rounded-full h-40 w-40 border-2 border-purple-300 m-2"
      >
        one
      </Button>
      <Button
        onClick={handleCreateSession}
        className="rounded-full h-40 w-40 border-2 border-purple-300 m-2"
      >
        one
      </Button>
      <Button
        onClick={handleCreateSession}
        className="rounded-full h-40 w-40 border-2 border-purple-300 m-2"
      >
        one
      </Button>
      <Button
        onClick={handleCreateSession}
        className="rounded-full h-40 w-40 border-2 border-purple-300 m-2"
      >
        one
      </Button>
    </div>
  );
}
