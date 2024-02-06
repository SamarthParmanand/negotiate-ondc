"use client";

import { Button } from "@nextui-org/react";
import ChatSession from "../models/chat_session";

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
    <div className="col-span-1 h-full border border-violet-300">
      <p className="text-3xl text-center font-bold my-3">Inbox</p>
      {sessions.map((session) => {
        return (
          <div key={session.id} className="px-2 my-2">
            <Button
              className="bg-neutral-200 w-full h-max my-1 py-2 text-left flex flex-col items-start"
              onClick={() => handleSessionChange(session)}
            >
              <p className="text-lg font-bold">{session.buyerId}</p>
              <p>{session.id}</p>
            </Button>
          </div>
        );
      })}
    </div>
  );
}
