import io from 'socket.io-client';
import api from './api';

export const socket = io.connect(api.uri);

export const sockets = {
  home: io.connect(api.uri + "/home"),
  chat: io.connect(api.uri + "/chat")
}