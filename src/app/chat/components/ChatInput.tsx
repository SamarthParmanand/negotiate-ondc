"use client";

import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import MessageRepository from "../repositories/chat_message_repository";
import ChatMessage, { IChatMessage } from "../models/chat_message";

export default function ChatInput({
  sessionId,
}: {
  sessionId: string | undefined;
}) {
  const [message, setMessage] = useState("");
  const msg = new MessageRepository(sessionId!, (msg) => {
    console.log("received");
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMessage: IChatMessage = {
      message: message,
      id: "",
      sessionId: sessionId!,
      createdAt: new Date().toISOString(),
      metadata: null,
      author: "",
    };

    await msg.createMessage(new ChatMessage(newMessage));

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
      <Button type="submit" className="h-14 w-40 mx-2 bg-neutral-200">
        Send
      </Button>
    </form>
  );
}
