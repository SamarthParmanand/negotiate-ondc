"use client";

import React from "react";
import ChatMessage from "../models/chat_message";
import { useSnapshot } from "valtio";
import authState from "@/app/store/auth";
import { Avatar } from "@nextui-org/react";

export default function MessageBubble({
  message,
  prev,
}: {
  message: ChatMessage;
  prev: ChatMessage | null;
}) {
  const userState = useSnapshot(authState);
  const isSender = message.author == userState.user?.id;
  const isPrevAuthorSame = message.author == prev?.author;
  const dayDiff = message.createdAt.getDate() !== prev?.createdAt.getDate();

  function formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${
      year % 100
    }`;
  }

  function dateToString(date1: Date, date2?: Date): string {
    if (!date2) {
      return formatDate(date1);
    }

    date2.setDate(date2.getDate() - 1);

    if (date1.toDateString() === date2.toDateString()) {
      return "YESTERDAY";
    } else if (date1.toDateString() === new Date().toDateString()) {
      return "TODAY";
    } else {
      return formatDate(date1);
    }
  }

  return (
    <>
      {dayDiff && (
        <span className="text-sm text-center bg-gray-300 my-2">
          {dateToString(message.createdAt, prev?.createdAt!)}
        </span>
      )}
      <div
        className={`flex ${
          isSender ? "justify-end" : ""
        } items-start space-x-4 mt-2`}
      >
        {!isSender && (
          <div className="flex items-center">
            <Avatar src={userState.user?.user_metadata?.avatar_url} />
          </div>
        )}
        <div
          className={`p-3 rounded-lg  text-gray-700 ${
            isSender ? "bg-gray-300" : "bg-white"
          }`}
        >
          <p className="text-sm">{message.message}</p>
          <p className={`text-xs text-gray-500 mt-1`}>
            {new Date(message.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
}
