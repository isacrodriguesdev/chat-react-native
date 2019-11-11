import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("window");

const messageData = {
  width: "100%",
  marginVertical: 4
};
const messageDataText = {
  borderRadius: 6,
  paddingHorizontal: 7,
  paddingVertical: 5,
  maxWidth: screen.width / 1.33
};
const messageText = {
  fontSize: 17,
  fontFamily: "Nunito-Regular",
};
const messageTextTimestamp = {
  fontSize: 12,
  fontFamily: "Nunito-Regular",
};

export default StyleSheet.create({
  container: {
    height: "100%",
  },
  inputBox: {
    bottom: 0,
    paddingTop: 2,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"

  },
  dataInputBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 12,
    height: "92%",
    backgroundColor: "white",
    paddingHorizontal: 22,
    borderRadius: 50
  },
  dataInputEntry: {
    fontSize: 17,
    fontFamily: "Ubuntu-Regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    borderRadius: 50
  },
  // messages output


  messageContent: {
  },
  messageDataOutput: {
    ...messageData,
    alignItems: "flex-start",
  },
  messageDataTextOutput: {
    backgroundColor: "white",
    ...messageDataText
  },
  messageTextOutput: {
    color: "black",
    ...messageText
  },
  messageTextTimestampOutput: {
    color: "rgb(150,150,150)",
    ...messageTextTimestamp
  },
  // messages input


  messageDataInput: {
    ...messageData,
    alignItems: "flex-end",
  },
  messageDataTextInput: {
    backgroundColor: "rgb(153, 102, 255)",
    ...messageDataText
  },
  messageTextInput: {
    color: "white",
    ...messageText
  },
  messageTextTimestampInput: {
    color: "rgb(220,220,220)",
    ...messageTextTimestamp
  },
});