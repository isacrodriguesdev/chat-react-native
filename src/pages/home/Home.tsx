import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, GestureResponderEvent, Keyboard } from 'react-native';
// # services
import { socket } from '../../services/socket';
import { getRealm } from '../../services/realm';
// # utils
import AsyncStorage from '@react-native-community/async-storage';
import Phone from '../../messenger/Phone';
// # styles
import styles from './styles';
// # components
// # actions
import { Creators as messenger } from '../../sagas/messenger/actions';

type Contact = {
  id: string,
  name: string,
  phoneNumber: string,
  connectionId: string,
  photoUrl: string,
  description: number
}

export default (props: any) => {

  const dispatch = useDispatch();

  const [contacts, setContacts]: any[] = useState([]);

  const getAllContacts = () => {

    Phone.getContacts()
      .then((phoneNumbers: string[]) => {

        socket.emit("send contacts", phoneNumbers)
          .on("receive contacts", (contactList: any) => {

            setContacts(contactList);
          });
      });
  }

  useEffect(() => {

    const token = props.navigation.getParam("token");

    getRealm().then(realm => {
      realm.write(() => {
        realm.deleteAll()
      })
    })

    socket.emit("join", { token, name: "Native" })

    socket.on("receive message", async (message: any) => {

      console.log(message)

        message.id = message.id.toString();
        const realm = await getRealm();

        realm.write(() => {
          realm.create("Messages", message);
        });

      })

    getAllContacts();
    dispatch(messenger.getAllMessages());

  }, []);


  const openChat = async (event: GestureResponderEvent, contact: Contact) => {

    event.stopPropagation();

    await AsyncStorage.setItem("chat", JSON.stringify(contact))
    props.navigation.navigate("Chat", { chat: contact });


  };

  const actions = () => {

    return (
      <View style={{}}>

      </View>
    );
  };

  const ContactItem = (contact: Contact) => {

    return (
      <TouchableOpacity
        onPress={(event) => openChat(event, contact)}>

        <View style={styles.contact}>
          <Image source={{ uri: contact.photoUrl }}
            resizeMode="cover" style={styles.photo}
          />
          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={styles.name}>{contact.name}</Text>
            <Text style={styles.subText}>
              {contact.connectionId ? "on-line" : "off-line"}
            </Text>
          </View>
        </View>

      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {
        contacts.length >= 1 ?
          <FlatList style={{ padding: 20 }}
            data={contacts}
            renderItem={({ item }) => ContactItem(item)}
            keyExtractor={(item: any) => item._id}
          />
          : <View style={{ padding: 20, alignItems: "center" }}>
            <Text>Sem contatos</Text>
          </View>
      }
    </ScrollView>
  );
};