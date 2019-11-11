import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated, Dimensions, TextInput } from 'react-native';
// # services
// # utils
// # styles
import style from './style';
import {font} from '../../styles/default';
// # components
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
// # actions

const screen = Dimensions.get("screen");

export default (props) => {

  const [inputText, setInputText] = useState("");

  const [ valueAnimationLeft ] = useState(new Animated.Value(screen.width));

  const openSearch = Animated.timing(valueAnimationLeft, {
    toValue: 0,
    duration: 500,
  });

  const closeSearch = Animated.timing(valueAnimationLeft, {
    toValue: screen.width,
    duration: 300,
  });

  const {navigate} = props.navigation;

  return (
    <>

      <Animated.View style={[style.container, { left: 0 }]}>
        <View style={styles.defaultArea}>

          <TouchableOpacity style={{ padding: 5 }}
            onPress={() => openSearch.start()}>
            <MaterialIcon name="search" style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={{ padding: 5 }} onPress={() => navigate("Perfil")}>
            <MaterialIcon name="account-circle" style={styles.icon} />
          
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.title}>Mychat</Text>
        </View>
      </Animated.View>

      {/* <<<<<< SEARCH >>>>>> */}

      <Animated.View style={[styles.search,{ 
          height: style.container.height, 
          width: style.container.width,
          left: valueAnimationLeft
        }]}>

        <View style={styles.inputContainer}>

          <TouchableOpacity onPress={() => closeSearch.start()} style={{padding:5}}>
            <FontAwesome name="arrow-left" size={18} color="rgb(80,80,80)" />
          </TouchableOpacity>

          <TextInput
            placeholder="Pesquisar contatos"
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            style={styles.input}
           />
        </View>

      </Animated.View>

    </>
  );
};

const styles = StyleSheet.create({
  defaultArea: {
    height: style.container.height,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    color: "white",
    fontSize: 25
  },
  title: {
    color: "white",
    fontSize: 22,
  },
  // search
  search: {
    position: "absolute",
    //alignItems: "center",
    justifyContent: "center",
    zIndex: 200,
    backgroundColor: "white",
    top: 0,
    elevation: 3,
    paddingHorizontal: 20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    fontFamily: font.NunitoRegular,
    color: "rgb(80,80,80)",
    marginLeft: 20
  }
});