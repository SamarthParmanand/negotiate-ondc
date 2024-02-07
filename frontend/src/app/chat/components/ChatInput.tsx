"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatMessage, { IChatMessage } from "../models/chat_message";
import MessageRepository from "../repositories/chat_message_repository";
import { useSnapshot } from "valtio";
import authState from "@/app/store/auth";

export default function ChatInput({
  repo,
}: {
  repo: MessageRepository | null;
}) {
  const [message, setMessage] = useState("");
  const userState = useSnapshot(authState);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMessage: IChatMessage = {
      message: message,
      id: uuidv4(),
      sessionId: repo?.sessionId ?? "",
      createdAt: new Date().toISOString(),
      metadata: null,
      author: userState.user?.id!,
    };
    if (message != "") {
      await repo?.createMessage(new ChatMessage(newMessage));
    }

    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center my-2 self-end">
      <Input
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mx-2"
      />
      <Button type="submit" className="h-14 w-40 mx-2 bg-gray-300">
        Send
      </Button>
    </form>
  );
}
