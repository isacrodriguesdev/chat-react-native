import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
// # services
import axios from 'axios';
import firebase from 'react-native-firebase';
// # styles
// # utils
import AsyncStorage from '@react-native-community/async-storage';
// # components
import Modal from 'react-native-modal';
import styles from '../../welcome/modals/styles';
import Button from '../../../components/button/Button';
// # actions

export default (props) => {

  const [code, setCode] = useState("");
  const [close, setClose] = useState(false);

  const handleCodeInput = (codeText) => {

    if (codeText.length === 7) {
      return;
    }
    else {
      setCode(codeText);
    }
  };

  const login = () => {

    props.confirmation.confirm(code)
      .then(() => {

        const credential = firebase.auth.PhoneAuthProvider.credential(props.confirmation.verificationId, code);

        axios.post("/login", { phoneNumber: props.phoneNumber })
          .then(async ({ data }) => {

            await AsyncStorage.setItem("token", data.token);
            await firebase.auth().signInWithCredential(credential);
            setClose(true);
            props.navigation.navigate("Medium");

          }).catch(error => {
            console.error(error);
          })
      })
      .catch(error => console.log(error));
  };

  return (
    <Modal
      isVisible={props.show || close}
      swipeDirection="left"
      onSwipeComplete={() => props.closeModal()}>

      <View style={styles.container}>

        <View>
          <Text style={styles.messageConfirmCode}>
            Confirme seu número de telefone, você recebera uma mensagem em SMS a qualquer momento com seu código
          </Text>
        </View>

        <View style={{ paddingHorizontal: 50 }}>
          <View style={styles.dataInputBox}>
            <TextInput
              placeholder="#code"
              placeholderTextColor="rgb(200,200,200)"
              keyboardType="numeric"
              value={code}
              onChangeText={(codeText) => handleCodeInput(codeText.toString())}
              style={styles.inputCode}
            />
          </View>
        </View>

        <Button text="Confirmar" onPress={() => login()} />

      </View>

    </Modal>
  );
};