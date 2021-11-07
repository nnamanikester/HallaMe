export type Contact = {
  id: string;
  name: string;
  phone: string;
  image?: string;
};

export type Recent = {
  id: string;
  name?: string;
  phone: string;
  image?: string;
  timestamp: number;
  type: 'INCOMING' | 'OUTGOING';
  status: 'MISSED' | 'ANSWERED';
  mode: 'VOICE' | 'VIDEO' | 'MAIL';
  count?: number;
};

export type Message = {
  id: string;
  name?: string;
  phone: string;
  image?: string;
  lastMessage?: string;
  timestamp: number;
};

export type VoiceMail = {
  id: string;
  name?: string;
  phone: string;
  image?: string;
  voiceMessage: string;
  duration: number;
  timestamp: number;
};
