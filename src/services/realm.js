import Realm from 'realm';

import MessagesSchema from '../schemas/MessagesSchema';
import ContactsSchema from '../schemas/ContactsSchema';

export const getRealm = () => {

  return Realm.open({
    schema: [MessagesSchema, ContactsSchema]
  });
}