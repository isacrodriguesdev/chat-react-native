export default class MessagesSchema {

  static schema = {
    name: "Messages",
    primaryKey: "id",
    properties: {
      id: { type: "string", indexed: true },
      to: "string",
      from: "string",
      text: "string",
      timestamp: "int",
      //received: { type: "bool" }
    }
  };
};