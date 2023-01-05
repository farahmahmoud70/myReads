import { all, fork } from 'redux-saga/effects';

import booksSaga from './books/booksSaga';

export function* rootSaga() {
  yield all([fork(booksSaga)]);
}
