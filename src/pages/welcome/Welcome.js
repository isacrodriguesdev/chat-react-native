import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Keyboard } from 'react-native';
// # services
import firebase from 'react-native-firebase';
// # styles
import styles from './styles';
// # utils
// # components
import ConfirmNumber from './modals/ConfirmNumber';
import Button from '../../components/button/Button';
// # actions

export default (props) => {

  const { navigate } = props.navigation;

  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+55 62 994869896");
  const [errorNumber, setErrorNumber] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  

  function authNumber() {

    setPhoneNumber(phoneNumber.replace(/\s/g, ''));
    setPhoneNumber(phoneNumber.replace(/-/g, ''));

    firebase.auth().signInWithPhoneNumber(phoneNumber, true)
      .then((confirmationResult) => {
        setConfirmation(confirmationResult);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>

        <View style={styles.welcome}>
          <Text style={styles.welcomeText1}>
            Bem-vindo ao chat
          </Text>
          <Text style={styles.welcomeText2}>
            Por favor insira seu número de telefone para entrar na sua conta
          </Text>
        </View>

        <View style={{ position: "absolute", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber}
              placeholder="+55 Número do telefone"
              textContentType="telephoneNumber"
              keyboardType="number-pad"
              placeholderTextColor="rgb(200,200,200)"
              style={styles.inputNumber}
            />
          </View>

          <Button text="Continuar"
            onPress={() => {
              authNumber();
              setShowModal(true);
            }} />

        </View>

      </View>

      <ConfirmNumber
        confirmation={confirmation}
        show={showModal}
        closeModal={() => setShowModal(false)}
        navigation={props.navigation}
        phoneNumber={phoneNumber}
      />

    </View>
  );
};