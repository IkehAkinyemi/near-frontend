import { Context } from "near-sdk-core";
import { messages } from "./models";
import { Message } from "./models";

const MESSAGE_LIMIT = 15;

function addMessage(text: string) {
  const message = new Message(Context.sender, text, Context.blockTimestamp);

  messages.push(message);
}

function retrieveMessages() {
  const numMessage = min()
}