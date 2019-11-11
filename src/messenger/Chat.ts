import AsyncStorage from "@react-native-community/async-storage";
import decode from 'jwt-decode';

export type Identity = {
  to: string,
  from: string
}

class Chat {

  public static async identity(): Promise<Identity> {

    let token: any = await AsyncStorage.getItem("token");
    let chat: any = await AsyncStorage.getItem("chat");

    let to: any = decode(token);
    let from: any = JSON.parse(chat);

    return {
      to: to.id,
      from: from._id
    };
  }
}

export default Chat
