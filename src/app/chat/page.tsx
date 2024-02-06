"use client";

import MessageRepository from "./repositories/chat_message_repository";
import ChatInterface from "./components/ChatInterface";
import Inbox from "./components/Inbox";
import supabaseClient from "@/utils/supabaseClient";
import { useEffect, useState } from "react";
import ChatSession from "./models/chat_session";
import { SessionRepository } from "./repositories/chat_session_repository";
import ChatMessage from "./models/chat_message";

export default function Page() {
  const supabase = supabaseClient();
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSession, setActiveSession] = useState<ChatSession | undefined>(
    undefined
  );
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSessionChange = (session: ChatSession) => {
    setActiveSession(session);
  };

  useEffect(() => {
    const repo = new SessionRepository();
    repo.fetchSessions().then((data) => {
      console.log(sessions);
      setSessions(data);
    });
    const fetchMsgs = async () => {
      const userid = (await supabase.auth.getUser()).data.user?.id;
      const msg = new MessageRepository(
        "af921033-6d0a-498b-b113-f7924ef1f3b9",
        (msg) => {
          console.log(msg);
        }
      );
      msg.fetchMessages().then((messages) => {
        console.log(messages);
      });
    };
    fetchMsgs();
  }, []);

  return (
    <div className="h-screen w-full grid grid-cols-5 px-[10%] py-[5%]">
      <Inbox sessions={sessions} setSession={handleSessionChange} />
      <ChatInterface session={activeSession} messages={messages} />
    </div>
  );
}
