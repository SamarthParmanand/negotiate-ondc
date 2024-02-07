"use client";

import { useEffect, useState } from "react";
import ChatInterface from "./components/ChatInterface";
import Inbox from "./components/Inbox";
import ChatMessage from "./models/chat_message";
import ChatSession from "./models/chat_session";
import MessageRepository from "./repositories/chat_message_repository";
import { SessionRepository } from "./repositories/chat_session_repository";

export default function Page() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeRepo, setActiveRepo] = useState<MessageRepository | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const repo = new SessionRepository();
      const data = await repo.fetchSessions();
      setSessions(data);
      if (data.length > 0) {
        setActiveRepo(new MessageRepository(data[0].id, callback));
      }
    };

    fetchSessions();
  }, []);

  function callback(msg: ChatMessage) {
    setMessages((previous) => [...previous, msg]);
  }

  const handleSessionChange = (session: ChatSession) => {
    setActiveRepo(new MessageRepository(session.id, callback));
  };

  useEffect(() => {
    let repo: MessageRepository | undefined;
    if (activeRepo) {
      fetchMsgs();
    }
    return () => {
      if (repo) {
        repo.dispose();
      }
    };
  }, [activeRepo]);

  const fetchMsgs = async () => {
    const messages = await activeRepo?.fetchMessages();
    if (messages) {
      setMessages(messages);
    }
  };

  return (
    <div className="h-screen w-full grid grid-cols-6 px-1 md:px-[10%] py-[2%] bg-gray-200 overflow-scroll">
      <Inbox sessions={sessions} setSession={handleSessionChange} />
      <ChatInterface repo={activeRepo} messages={messages} />
    </div>
  );
}
