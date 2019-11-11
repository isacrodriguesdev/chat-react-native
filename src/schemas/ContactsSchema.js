export default class ContactsSchema {

  static schema = {
    name: "Contacts",
    primaryKey: "id",
    properties: {
      id: { type: "int", indexed: true },
      name: { type: "string" },
      photoUrl: { type: "string" },
      phoneNumber: { type: "string" },
      status: "string"
    }
  }

}