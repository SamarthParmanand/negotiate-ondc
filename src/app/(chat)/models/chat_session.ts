// Define the interface for the ChatSession
export interface IChatSession {
    id : string;
    buyerId: string;
    sellerId: string;
    createdAt: string;
    productId: string;
    category: string;
  }
  
  // Implement the ChatSession class based on the interface
export default  class ChatSession {
    buyerId: string;  
    id:string;
    sellerId: string;
    createdAt: Date;
    productId: string;
    category: string;
  
    // Constructor to initialize the ChatSession object
    constructor(chatSessionData: IChatSession) {
      this.buyerId = chatSessionData.buyerId;
      this.sellerId = chatSessionData.sellerId;
      this.createdAt = new Date(chatSessionData.createdAt);
      this.productId = chatSessionData.productId;
      this.category = chatSessionData.category;
      this.id = chatSessionData.id;
    }
  }
  