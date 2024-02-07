"use client";

import ChatInput from "./ChatInput";
import ChatMessage from "../models/chat_message";
import MessageBubble from "./MessageBubble";
import MessageRepository from "../repositories/chat_message_repository";
import { useEffect, useRef } from "react";

export default function ChatInterface({
  repo,
  messages,
}: {
  repo: MessageRepository | null;
  messages: ChatMessage[];
}) {
  const sendPrev = (message: ChatMessage, index: number) => {
    return index === 0 ? null : message;
  };
  const chatRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    console.log("recieved");
    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="col-span-4 w-full grid mx-2 scroll">
      <p className="m-3 text-3xl font-bold">senter -user details</p>
      <div className="flex flex-col overflow-scroll h-[43rem]">
        {messages.length > 0 ? (
          messages.map((message, index) => {
            return (
              <MessageBubble
                key={message.id}
                message={message}
                prev={sendPrev(messages[index - 1], index)}
              />
            );
          })
        ) : (
          <div className="text-3xl flex items-center justify-center h-full w-full">
            No Messages
          </div>
        )}
        <span ref={chatRef} />
      </div>
      <ChatInput repo={repo} />
    </div>
  );
}
