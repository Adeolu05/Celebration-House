export interface ServiceTime {
  day: string;
  title: string;
  time: string;
  icon: 'sun' | 'book' | 'prayer';
}

export interface Ministry {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location?: string;
  description: string;
  image: string;
  type: 'service' | 'conference' | 'youth' | 'thanksgiving';
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'audio' | 'pdf';
  meta: string;
  thumbnail?: string;
}

export interface BankAccount {
  name: string;
  bank: string;
  number: string;
  accountName: string;
  icon: 'heart' | 'building' | 'globe';
}