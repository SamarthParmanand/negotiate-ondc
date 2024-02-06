"use client";

import { Button } from "@nextui-org/react";
import ChatSession from "../models/chat_session";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function Inbox({
  sessions,
  setSession,
}: {
  sessions: ChatSession[];
  setSession: (session: ChatSession) => void;
}) {
  const handleSessionChange = (session: ChatSession) => {
    setSession(session);
  };

  return (
    <div className="col-span-2 h-full ">
      <p className="text-3xl font-bold m-3">Inbox</p>
      {sessions.map((session) => {
        return (
          <div key={session.id} className="px-2 my-2">
            <Button
              className="bg-gray-300 w-full h-max my-1 py-2 text-left flex flex-col items-start"
              onClick={() => handleSessionChange(session)}
            >
              <p className="text-lg font-bold">{session.buyerId}</p>
              <p>{session.id}</p>
            </Button>
          </div>
        );
      })}
      <Link
        href="/"
        className="flex items-center h-12 w-40 mx-auto border-2 border-neutral-300 justify-center "
      >
        <BiLeftArrowAlt className="h-5 w-7" /> Go Back{" "}
      </Link>
    </div>
  );
}
