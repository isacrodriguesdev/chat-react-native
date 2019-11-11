import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';
import api from './src/services/api';

axios.defaults.baseURL = api.uri;

AppRegistry.registerComponent(appName, () => App);
