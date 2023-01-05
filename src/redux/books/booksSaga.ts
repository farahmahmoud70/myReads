// Libs
import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

// Types & Interfaces
import { GET_ALL_BOOKS } from '../actionTypes';
import { IBook } from '../../types/commonTypes';

// Actions
import { getAllBooksFailure, getAllBooksSuccess } from './booksActions';

const booksApi = 'https://reactnd-books-api.udacity.com';
let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

const getAllBooks = () => axios.get<IBook[]>(`${booksApi}/books`, { headers });

/*
  Worker Saga: Fired on GET_ALL_BOOKS action
*/
function* getAllBooksSaga() {
  try {
    const response: AxiosResponse<{ books: IBook[] }> = yield call(getAllBooks);
    yield put(
      getAllBooksSuccess({
        books: response.data.books,
      })
    );
  } catch (e: any) {
    yield put(
      getAllBooksFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `GET_ALL_BOOKS` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(GET_ALL_BOOKS, getAllBooksSaga)]);
}

export default todoSaga;
