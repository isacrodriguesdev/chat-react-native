import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 20,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 3,
    alignItems: "center"
  },
  dataInputBox: {
    //elevation: 2,
    paddingVertical: 0,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 2,
    borderBottomColor: "rgb(153, 102, 255)",
    borderBottomWidth: 2
    //borderColor: "black",
  },
  inputCode: {
    paddingHorizontal: 20,
    fontSize: 20,
    textAlign: "center",
    color: "rgb(80,80,80)",
    fontFamily: "Nunito-SemiBold",
  },
  messageConfirmCode: {
    textAlign: "center",
    fontFamily: "Nunito-SemiBold",
    color: "rgb(80,80,80)",
    marginBottom: 15,
    fontSize: 15
  },
  buttonConfirm: {
    width: screen.width / 1.8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    //backgroundColor: "rgb(113, 89, 193)",
    backgroundColor: "rgba(50,40,75,0.95)",
    borderRadius: 4,
    paddingVertical: 10,
    elevation: 2
  },
  buttonTextConfirm: {
    color: "rgb(245,245,245)",
    fontSize: 16,
    fontFamily: "Nunito-SemiBold",
    textTransform: "uppercase"
  }
});