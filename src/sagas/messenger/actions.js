import { getRealm } from '../../services/realm';

export async function getAllMessages() {

  const messages = [];

  await getRealm()
    .then(realm => {

      realm.objects("Messages")
        .forEach((message) => {

          messages.push(message);
        });
    });

  return messages;
}

export async function getMessages({to, from}) {

  const messages = [];
  console.log({to, from})

  await getRealm()
    .then(realm => {

      realm.objects("Messages")
        //.filtered(`to == "${to}"`)
        .filtered(`to == "${to}" && from == "${from}"`)
        .forEach((message) => {

          messages.push(message);
        });
    });

  return messages;
}

export const Creators = {

  getAllMessages: function () {
    return {
      type: "ASYNC_UPDATED_MESSAGES",
    }
  },
  getMessages: function () {
    return {
      type: "ASYNC_GETED_MESSAGES",
    }
  },
}