// Libs
import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

// Types & Interfaces
import { GET_ALL_BOOKS, UPDATE_BOOK } from '../actionTypes';
import { IBook } from '../../types/commonTypes';

// Actions
import {
  getAllBooksFailure,
  getAllBooksSuccess,
  updateBookFailure,
  updateBookSuccess,
} from './booksActions';
import { BookShelf, UpdateBook, UpdateBookPayload } from './booksTypes';

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

const updateBook = (payload: UpdateBookPayload) =>
  axios.put<IBook>(
    `${booksApi}/books/${payload.id}`,
    { shelf: payload.shelf },
    { headers }
  );

/*
  Worker Saga: Fired on UPDATE_BOOK action
*/
function* updateBookSaga({ payload }: UpdateBook) {
  try {
    const response: AxiosResponse<{ shelf: BookShelf }> = yield call(() =>
      updateBook(payload)
    );
    console.log(response);
    yield put(
      updateBookSuccess({
        data: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      updateBookFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `GET_ALL_BOOKS, UPDATE_BOOK` action.
*/
function* booksSaga() {
  yield all([
    takeLatest(GET_ALL_BOOKS, getAllBooksSaga),
    takeLatest(UPDATE_BOOK, updateBookSaga),
  ]);
}

export default booksSaga;
