// Define the interface for the ChatMessage
export interface IChatMessage {
    message: string;
    sessionId: string;
    id :string;
    createdAt: string;
    metadata: Object|null; // You can replace 'any' with a specific type for metadata if needed
    author: string; // "buyer|seller id"
  }
  
  // Implement the ChatMessage class based on the interface
export default class ChatMessage {
    message: string;
    sessionId: string;
    createdAt: Date;
    metadata: Object|null;
    author: string;
    id:string;
    // Constructor to initialize the ChatMessage object
    constructor(chatMessageData: IChatMessage) {
      this.message = chatMessageData.message;
      this.id = chatMessageData.id;
      this.sessionId = chatMessageData.sessionId;

      this.createdAt = new Date( chatMessageData.createdAt);
      this.metadata = chatMessageData.metadata;
      this.author = chatMessageData.author;
    }
  }