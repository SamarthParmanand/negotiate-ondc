import React from "react";
import ChatMessage from "../models/chat_message";

export default function ChatMessageComponent({
  message,
}: {
  message: ChatMessage;
}) {
  return (
    <div className="flex flex-col items-start space-x-2 my-2">
      <div className="flex items-center w-full justify-between px-2">
        <h3 className="text-lg font-semibold">{message.author}</h3>
        <p className="text-sm text-gray-500">
          {new Date(message.createdAt).toLocaleString()}
        </p>
      </div>
      <p>{message.message}</p>
    </div>
  );
}
