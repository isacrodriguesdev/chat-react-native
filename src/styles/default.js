import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

export default StyleSheet.create({
  container: {}
});

export const primaryColorOpacity = (opacity) => {
  return `rgba(112, 219, 112,${opacity.toString()})`;
};
export const secundaryColorOpacity = (opacity) => {
  return `rgba(50,40,75,${opacity.toString()})`;
};

export const primaryColor = "rgb(112, 219, 112)";
export const secundaryColor = "rgb(50,40,75)";
export const primaryFont = "Nunito-Regular";

export const font = {
  MontserratMedium: "Montserrat-Light",
  MontserratMedium: "Montserrat-Medium",
  MontserratRegular: "Montserrat-Regular",

  NunitoLight: "Nunito-Light",
  NunitoRegular: "Nunito-Regular",
  NunitoSemiBold: "Nunito-SemiBold",

  OpenSansLight: "OpenSans-Light",
  OpenSansRegular: "OpenSans-Regular",
  OpenSansSemiBold: "OpenSans-SemiBold",

  RobotoLight: "Roboto-Light",
  RobotoMedium: "Roboto-Medium",
  RobotoRegular: "Roboto-Regular",

  UbuntuLight: "Ubuntu-Light",
  UbuntuMedium: "Ubuntu-Medium",
  UbuntuRegular: "Ubuntu-Regular",
};