import supabaseClient from "@/utils/supabaseClient";
import { RealtimeChannel, SupabaseClient } from "@supabase/supabase-js";
import ChatMessage, { IChatMessage } from "../models/chat_message";

abstract class ChatMesssageRepository {
  messages: ChatMessage[] = [];
  abstract readonly sessionId: string;
  abstract fetchMessages(offset?: number | 30): Promise<ChatMessage[]>;
  abstract createMessage(msg: ChatMessage): Promise<void>;
}

/**
 * Example usage
 ```typescript
    var _repo =  new MessageRepository("sessionId",(newMessage){
        /// do with new message arrived
        /// setMessages([...messages,newMessage]);
    })
 ```
 */
export default class MessageRepository implements ChatMesssageRepository {
  private supabase: SupabaseClient;
  sessionId: string;
  messages: ChatMessage[];
  private channel: RealtimeChannel;
  /**
   * @param {string} sessionId - session id of the message, in which the message has been flown
   * @param {(msg: ChatMessage) => void} callback - The void callback when a new message is recieved.
   */
  constructor(sessionId: string, callback: (msgs: ChatMessage) => void) {
    this.messages = [];
    this.sessionId = sessionId;
    this.supabase = supabaseClient();
    this.channel = this.supabase
      .channel(`message-${this.sessionId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "chat_messages",
          filter: `sessionId=eq.${this.sessionId}`,
        },
        (payload) => {
          // console.log(payload);
          callback(new ChatMessage(payload.new as IChatMessage));
        }
      )
      .subscribe(() => {
        // console.log(`Subscribed to ${sessionId}`);
      });
  }

  async fetchMessages(_offset?: number | 30): Promise<ChatMessage[]> {
    const { data, error } = await this.supabase
      .from("chat_messages")
      .select("*")
      .eq("sessionId", this.sessionId)
      .order("createdAt");
    if (data) {
      return data.map((e) => new ChatMessage(e));
    } else {
      throw error;
    }
  }

  async createMessage(msg: ChatMessage): Promise<void> {
    await this.supabase.from("chat_messages").insert(msg);
  }

  async dispose() {
    await this.supabase.removeChannel(this.channel);
    // console.log(`channel ${this.sessionId}`);
  }
}
