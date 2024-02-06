import supabaseClient from "@/utils/supabaseClient";
import { SupabaseClient } from "@supabase/supabase-js";
import ChatSession from "../models/chat_session";

abstract class ChatSessionRepository {
  abstract fetchSessions(): Promise<ChatSession[]>;
  abstract createSession(session: ChatSession): Promise<void>;
}

/**
 * Example usage
 ```typescript
    var _repo =  new SessionRepository();
 ```
 */
export class SessionRepository implements ChatSessionRepository {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = supabaseClient();
  }

  async fetchSessions(): Promise<ChatSession[]> {
    const { data, error } = await this.supabase
      .from("chat_sessions")
      .select("*");
    if (data) {
      return data.map((rawSession) => new ChatSession(rawSession));
    }
    throw error;
  }

  async createSession(session: ChatSession): Promise<void> {
    await this.supabase.from("chat_sessions").insert(session);
  }
}
