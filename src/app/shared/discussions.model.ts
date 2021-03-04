export interface Discussions {
  discussionId: string;
  messages: Message[];
  participants: Participants;
  latestTime: string;
}

export interface Message {
  messageId: string;
  message: string;
  delivered: boolean;
  notified: boolean;
  stickers: {};
  recipientId: string;
  senderId: string;
  sendTime: string;
}

export interface Participants {
  [k: string]: Hhbr13E9E7753A5F857704Fdbd86D8C79B23;
}

export interface Hhbr13E9E7753A5F857704Fdbd86D8C79B23 {
  uniqueId: string;
  name: string;
  figureString: string;
  motto: string;
}
