import { StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/default';

export default StyleSheet.create({
  container: {
    zIndex: 99,
    elevation: 2,
    height: 50,
    width: "100%",
    backgroundColor: primaryColor,
    paddingHorizontal: 10,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between"
  }
});