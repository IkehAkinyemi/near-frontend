import { PersistentVector } from "near-sdk-as";

type AccountId = string;
type Timestamp = u64

@nearBindgen
export class Message {
  description: string;
  createAt: Timestamp;
  
  constructor(public ID: AccountId, description: string, time: u64 ) {
    this.description = description;
    this.createAt = time;
  }
}

export const messages = new PersistentVector<Message>("message");