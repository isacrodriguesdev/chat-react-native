import {StyleSheet, Dimensions} from 'react-native';
import {font} from '../../styles/default'

const screen = Dimensions.get("window");

export default StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
  },
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center"
  },
  welcome: {
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 100,
    width: "100%",
    paddingHorizontal: 20
  },
  welcomeText1: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: font.NunitoRegular,
    color: "rgb(40,40,40)"
  },
  welcomeText2: {
    textAlign: "center",
    fontFamily: font.NunitoRegular,
    color: "rgb(80,80,80)"
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 2,
    paddingHorizontal: 10,
    width: screen.width / 1.15,
    elevation: 3

  },
  inputNumber: {
    fontFamily: font.NunitoRegular,
    fontSize: 17,
    color: "rgb(60,60,60)",
  },
});