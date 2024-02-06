"use client";

import supabaseClient from "@/utils/supabaseClient";
import { useEffect, useState } from "react";
import ChatInterface from "./components/ChatInterface";
import Inbox from "./components/Inbox";
import ChatMessage from "./models/chat_message";
import ChatSession from "./models/chat_session";
import MessageRepository from "./repositories/chat_message_repository";
import { SessionRepository } from "./repositories/chat_session_repository";

export default function Page() {
  const supabase = supabaseClient();
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSession, setActiveSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const repo = new SessionRepository();
      const data = await repo.fetchSessions();
      setSessions(data);
      setActiveSession(data[0]);
    };

    fetchSessions();
  }, []);

  const handleSessionChange = (session: ChatSession) => {
    setActiveSession(session);
  };

  useEffect(() => {
    console.log(activeSession);
    if (activeSession) {
      fetchMsgs(activeSession.id);
    }
  }, [activeSession]);

  const fetchMsgs = async (sessionId: string) => {
    const repo = new MessageRepository(sessionId, (msg) => {
      setMessages((prevMessages) => [msg, ...prevMessages]);
    });
    const messages = await repo.fetchMessages();
    setMessages(messages);
  };

  return (
    <div className="h-screen w-full grid grid-cols-6 px-1 md:px-[10%] py-[2%] bg-gray-200 overflow-scroll">
      <Inbox sessions={sessions} setSession={handleSessionChange} />
      <ChatInterface session={activeSession} messages={messages} />
    </div>
  );
}
