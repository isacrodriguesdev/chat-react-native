import { all, put, takeLatest, call, takeEvery, fork } from 'redux-saga/effects';

import { watchGetAllMessages, watchGetMessages } from '../sagas/messenger/index';

export default function* () {

  yield all([
    fork(watchGetAllMessages),
    fork(watchGetMessages)
  ]);
}

