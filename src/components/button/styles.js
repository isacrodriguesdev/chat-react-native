import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

export default StyleSheet.create({
  button: {
    width: screen.width / 1.8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "rgba(50,40,75,0.95)",
    borderRadius: 4,
    paddingVertical: 10,
    elevation: 2
  },
  buttonText: {
    color: "rgb(245,245,245)",
    fontSize: 16,
    fontFamily: "Nunito-SemiBold",
    textTransform: "uppercase"
  }
});
