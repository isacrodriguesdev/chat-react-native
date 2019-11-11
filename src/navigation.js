import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Verification
import MediumPage from './pages/medium/Medium';
// # headers
import HomeHeader from './screens/headers/Home'
import ChatHeader from './screens/headers/Chat'
// # screens
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import PerfilScreen from './screens/PerfilScreen';

const root = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  },
  Medium: {
    screen: MediumPage,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: (props) => <HomeHeader {...props} />
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      gesturesEnabled: true,
      header: (props) => <ChatHeader {...props} />
    }
  },
  Perfil: {
    screen: PerfilScreen,
    navigationOptions: {
      gesturesEnabled: true,
      header: null
    }
  }
}, {initialRouteName: "Medium"});

export default createAppContainer(root);