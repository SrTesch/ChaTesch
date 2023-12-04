interface Message {
    id: number;
    text?: string;
    sender_user: string;
    receiver_user: string;
    image?: string;
    message_dt: Date;
}
  
export { Message };
  