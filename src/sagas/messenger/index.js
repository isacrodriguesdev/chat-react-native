import decode from 'jwt-decode';
import { put, call, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { getAllMessages, getMessages } from './actions';

function* asyncGetAllMessages(action) {

  let messages = yield call(getAllMessages);

  yield put({
    type: 'GETED_ALL_MESSAGES',
    payload: messages
  });
}

function* asyncGetMessages() {

  let token = yield call(() => AsyncStorage.getItem("token"));
  let chat = yield call(() => AsyncStorage.getItem("chat"));

  let to = yield decode(token).id;
  let from = yield JSON.parse(chat)._id;

  //console.log("saga", { to, from })

  let messages = yield call(getMessages, { to, from });

  yield put({
    type: 'GETED_MESSAGES',
    payload: messages
  });
}

export function* watchGetAllMessages() {
  yield takeEvery("ASYNC_GETED_ALL_MESSAGES", asyncGetAllMessages)
}

export function* watchGetMessages() {
  yield takeEvery("ASYNC_GETED_MESSAGES", asyncGetMessages)
}

