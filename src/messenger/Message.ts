import decode from 'jwt-decode';
import { MD5 } from 'crypto-js';
import AsyncStorage from "@react-native-community/async-storage";
import { socket } from "../services/socket";
import { getRealm } from '../services/realm';
import Chat from './Chat';

export interface BaseMessage {
  type: string,
  text: string,
  image?: string,
};

class Message {

  private message: BaseMessage;

  constructor(message: BaseMessage) {

    const timestamp = Date.now();
    const id = MD5(timestamp.toString()).toString();

    const finalMessage: BaseMessage = {
      type: message.type,
      text: message.text,
      image: message.image,
    }

    if (!finalMessage.image)
      delete message.image;

    this.message = finalMessage;
  };

  async send(connectionId: string) {

    if (!connectionId.trim()) {
      console.log("connectionId não encontrado.")
      // se o socket retornar falha de envio
      // peque a mensagem e adiciona no realm como received: false
    }

    const timestamp = Date.now();
    const id = MD5(timestamp.toString()).toString();

    const data = await Chat.identity();

    const message = {
      ...this.message,
      id: id,
      timestamp: timestamp,
      to: data.to,
      from: data.from,
    };

    socket.emit("send message", {
      message,
      connectionId
    })

    getRealm().then(realm => {

      realm.write(() => {
        realm.create("Messages", message);
      });
    }).catch(error => {
      console.log("realm", error)
    })

  }

  async getToFrom() {

    let token: any = await AsyncStorage.getItem("token")
    let chat: any = await AsyncStorage.getItem("chat")
    console.log(token)

    let to: any = decode(token);
    let from: any = JSON.parse(chat);

    return { to: to.id, from: from._id }
  }

};

export default Message;