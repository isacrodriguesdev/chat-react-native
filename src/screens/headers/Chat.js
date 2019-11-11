import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
// # services
// # utils
import AsyncStorage from '@react-native-community/async-storage';
// # styles
import style from './style';
// # components
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
// # actions

export default (props) => {

  const [user, setUser] = useState({
    name: "Sandra de Mello",
    photoUrl: "https://i.pinimg.com/originals/9c/1f/42/9c1f425a3745f63bd0bbb48f160ebf7a.jpg",
  });

  return (
    <View style={style.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>

        <TouchableOpacity style={{ marginRight: 7 }}>
          <Image source={{ uri: "https://cdn0.iconfinder.com/data/icons/whatsapp-10/512/145_Camera_Image_Photo_Basic-512.png" }}
            style={{ width: 30, height: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.defaultArea}>
          <FontAwesome name="ellipsis-v" style={styles.icon} />
        </TouchableOpacity>

      </View>

      <View style={styles.user}>
        <TouchableOpacity>
          <Image resizeMode="cover" source={{ uri: user.photoUrl }} style={styles.userPhoto} />
        </TouchableOpacity>
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userStatus}>{true ? "Online" : "...digitando"}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultArea: {
    height: style.container.height,
    alignItems: "center",
    flexDirection: "row",
    padding: 10
  },
  icon: {
    color: "white",
    fontSize: 20
  },
  user: {
    flexDirection: "row",
    alignItems: "center"
  },
  userPhoto: {
    height: 44,
    width: 44,
    marginRight: 10,
    borderRadius: 50,
  },
  userName: {
    color: "white",
    fontSize: 18,
    fontFamily: "Ubuntu-Regular"
  },
  userStatus: {
    color: "rgb(220,220,220)",
    fontSize: 16,
    fontFamily: "Ubuntu-Regular"
  }
});