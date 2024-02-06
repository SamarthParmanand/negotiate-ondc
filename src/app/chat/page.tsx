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
  const [activeRepo, setActiveRepo] = useState<MessageRepository | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const fetchSessions = async () => {
      console.log("called");
      const repo = new SessionRepository();
      const data = await repo.fetchSessions();
      setSessions(data);
      setActiveRepo(new MessageRepository(data[0].id,callback))
    };

    fetchSessions();
  }, []);

  function callback(msg:ChatMessage){};

  const handleSessionChange = (session: ChatSession) => {
    setActiveRepo(new MessageRepository(session.id,callback));
  };

  useEffect(() => {
    let repo:MessageRepository|undefined;
    if (activeRepo) {
      
      fetchMsgs();
    }
    return ()=>{
    if(repo){
      repo.dispose();
    }
    }
  }, [activeRepo]);

  const fetchMsgs = async () => {
   
    const messages = await activeRepo?.fetchMessages();
   if(messages){
    setMessages(messages);
   }
  };

  return (
    <div className="h-screen w-full grid grid-cols-5 px-[10%] py-[5%]">
      <Inbox sessions={sessions} setSession={handleSessionChange} />
      <ChatInterface repo={activeRepo} messages={messages} />
    </div>
  );
}
