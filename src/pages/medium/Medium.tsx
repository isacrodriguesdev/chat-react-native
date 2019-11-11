import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationScreenProp, NavigationEventPayload } from 'react-navigation';
// # services
import firebase from 'react-native-firebase';
// # utils
import AsyncStorage from '@react-native-community/async-storage';
// # styles
// # components
// # actions

type Props = {
  navigation: NavigationScreenProp<any>
};

export default function (props: Props) {

  const verifyAuthentication = () => {

    return new Promise(async (resolve, reject) => {

      const token = await AsyncStorage.getItem("token");
      const currentUser = firebase.auth().currentUser;

      if (!token || !currentUser)
        reject({
          message: "Not authorization",
          code: 401
        });
      else
        resolve({ token });

    });
  };

  useEffect(() => {

    const willFocus = props.navigation.addListener("didFocus", () => {

      console.log("MEDIUM FOCUS");

      verifyAuthentication()
      .then((data: any) => {

        props.navigation.navigate("Home", { token: data.token });

      }).catch(() => {

        AsyncStorage.clear();
        firebase.auth().signOut();
        props.navigation.navigate("Welcome");

      });
    });

  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, color: "white" }}onPress={() => 
      props.navigation.navigate("Home")}>
        Carregado...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(112, 219, 112)",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});