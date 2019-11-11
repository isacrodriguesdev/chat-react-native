import React from 'react';
import { View, ImageBackground, TextInput, TouchableOpacity, FlatList, Text, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// # images
const background = require('../../assets/images/bgchat.jpg');
// # services
import Message from '../../messenger/Message';
// # utils
import { NavigationScreenProp } from 'react-navigation';
// # styles
import styles from './styles';
// # components
// # actions
import { Creators as messages } from '../../sagas/messenger/actions';
const getMessages = messages.getMessages;

const actions = { getMessages };

type Props = {
  getMessages: () => {},
  messages: object[],
  navigation: NavigationScreenProp<any>,
}

class Chat extends React.Component<Props> {

  initialState = {
    messageText: "",
    messages: [],
    contact: { id: "" },
    disable: true,
  }

  state = { ...this.initialState };

  componentDidMount() {

    this.props.getMessages();
  }

  async sendMessage() {

    const message = new Message({
      type: "text",
      text: this.state.messageText,
    });

    // adicione um retorno no send para indicar que a menssagem foi recebida
    // para depois limpar o input 
    await message.send("vNXf26COut8554PTAAAD");
    this.setState({messageText: ""})
    this.props.getMessages();
  }

  handleText(text: string) {

    this.setState({ messageText: text });
  }

  onHandleText() {

    if (!!this.state.messageText.trim()) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }

  }

  Output({ text, date }: any) {
    return (
      <View style={styles.messageDataOutput}>
        <View style={styles.messageDataTextOutput}>

          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.messageTextOutput}>{text}</Text>
            <Text style={[styles.messageTextTimestampOutput]}>{date}</Text>
          </View>

        </View>
      </View>
    );
  };

  Input({ text }: any) {
    return (
      <View style={styles.messageDataInput}>

        <View style={styles.messageDataTextInput}>

          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.messageTextInput}>{text}</Text>
            <Text style={[styles.messageTextTimestampInput]}>
              {"0:00"}
            </Text>
          </View>

        </View>

      </View>
    );
  };

  InputOrOutput(message: any) {
    return message.to == 0 ? this.Output(message) : this.Input(message);
  };

  InputBox() {
    return (
      <View style={styles.dataInputBox}>
        <TextInput
          style={styles.dataInputEntry}
          placeholder="Envie uma messagem"
          returnKeyType="done"
          onChangeText={(text) => this.handleText(text)}
          onChange={() => this.onHandleText()}
          value={this.state.messageText}
          multiline={true}
          scrollEnabled={true}
        />
        <TouchableOpacity onPress={() => this.sendMessage()} disabled={this.state.disable}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {

    return (
      <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <ScrollView style={styles.messageContent}>
            {
              this.props.messages.length > 0 &&
              <FlatList
                data={this.props.messages}
                renderItem={({ item }) => this.InputOrOutput(item)}
                keyExtractor={({ id }: any) => id.toString()}
                inverted={false}
                style={{ padding: 20 }}
              />
            }
          </ScrollView>

          <View style={styles.inputBox}>
            {this.InputBox()}
          </View>

        </View>
      </ImageBackground>
    );
  };
};

const mapStateToProps = (state: any) => {
  return {
    messages: state.messenger.messages
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
