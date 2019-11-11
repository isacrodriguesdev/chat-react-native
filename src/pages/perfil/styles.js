import { StyleSheet, Dimensions } from 'react-native';
import * as stylesDefault from '../../styles/default';

const screen = Dimensions.get('window');

const defaultPadding = 20;
const defaultMarginRight = 8;
const defaultIconColor = "rgb(180,180,180)";

export default StyleSheet.create({
  // default group
  icon: {
    fontSize: 21,
    marginRight: defaultMarginRight,
    color: defaultIconColor
  },
  text: {
    fontFamily: stylesDefault.font.NunitoRegular
  },
  dataContainer: {
    backgroundColor: "white",
    marginBottom: 11,
    padding: defaultPadding,
    elevation: 1,
    width: "100%",
  },

  container: {
    backgroundColor: "rgb(245,245,245)"
  },
  topContainer: {
    backgroundColor: stylesDefault.primaryColorOpacity(0.70),
    paddingVertical: 20,
    width: "100%",
    padding: defaultPadding,
    alignItems: "center",
  },
  // top 
  imageData: {
  },
  // name
  nameContainer: {
    marginTop: 7
  },
  nameData: {

  },
  name: {
    fontSize: 18,
    color: "rgb(255,255,255)",
    fontFamily: stylesDefault.font.UbuntuRegular
  },
  // photo
  photo: {
    width: screen.width / 5.5,
    height: screen.width / 5.5,
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 2
  },
  // desc
  descriptionData: {
    flexDirection: "row",
  },
  descriptionText: {
    flex: 1, 
    flexWrap: 'wrap',
    fontSize: 15,
    fontFamily: stylesDefault.font.NunitoRegular,
    color: "rgb(40,40,40)"
  },
  // phone number
  phoneNumberData: {
    flexDirection: "row",
    alignItems: "center",
  },
  phoneNumberText: {
    fontFamily: stylesDefault.font.MontserratMedium,
    letterSpacing: 0.5,
    color: "rgb(40,40,40)"
  }
});