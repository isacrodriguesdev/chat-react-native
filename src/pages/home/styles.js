import { StyleSheet } from 'react-native';
import { font } from '../../styles/default';

export default StyleSheet.create({
  container: {
    backgroundColor: "rgb(252,252,252)",
  },
  contact: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10
  },
  photo: {
    height: 52,
    width: 52,
    borderRadius: 15,
  },
  name: {
    fontSize: 18,
    color: "rgb(10,10,10)",
    fontFamily: "Nunito-Regular"
  },
  subText: {
    fontSize: 13,
    color: "rgb(90,90,90)",
    fontFamily: font.NunitoSemiBold
  }
});