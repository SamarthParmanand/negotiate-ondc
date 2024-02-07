import ChatInput from "./ChatInput";
import ChatMessage from "../models/chat_message";
import MessageBubble from "./MessageBubble";
import MessageRepository from "../repositories/chat_message_repository";

export default function ChatInterface({
  repo,
  messages,
}: {
  repo: MessageRepository | null;
  messages: ChatMessage[];
}) {
  const sendPrev = (message: ChatMessage, index: number) => {
    return index === 0 ? null : message;
  };

  return (
    <div className="col-span-4 w-full grid mx-2">
      <p className="m-3 text-3xl font-bold">senter -user details</p>
      <div className="flex flex-col overflow-scroll h-[43rem]">
        {messages.map((message, index) => {
          return (
            <MessageBubble
              key={message.id}
              message={message}
              prev={sendPrev(messages[index - 1], index)}
            />
          );
        })}
      </div>
      <ChatInput repo={repo} />
    </div>
  );
}
