import React from "react";
import ChatMessage from "../models/chat_message";

export default function ChatMessageComponent({
  message,
}: {
  message: ChatMessage;
}) {
  return (
    <div className="flex flex-col items-start space-x-4 my-2">
      <div className="flex items-center w-full justify-between px-4">
        <p className="text-lg font-semibold">{message.author}</p>
        <p className="text-sm text-gray-500">
          {new Date(message.createdAt).toLocaleString()}
        </p>
      </div>
      <p>{message.message}</p>
    </div>
  );
}
