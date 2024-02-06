import supabaseClient from "@/utils/supabaseClient";
import ChatInput from "./ChatInput";
import ChatMessage, { IChatMessage } from "../models/chat_message";
import ChatSession from "../models/chat_session";
import ChatMessageComponent from "./ChatMessageComponent";

export default function ChatInterface({
  session,
  messages,
}: {
  session: ChatSession | null;
  messages: ChatMessage[];
}) {
  const supabase = supabaseClient();
  console.log(messages);

  return (
    <div className="col-span-4 w-full grid">
      <p className="m-3 text-3xl font-bold">senter -user details</p>
      <div className="flex flex-col overflow-scroll h-[43rem]">
        {messages.map((message) => {
          return <ChatMessageComponent key={message.id} message={message} />;
        })}
      </div>
      <ChatInput sessionId={session?.id ?? ""} />
    </div>
  );
}
