import {
  GET_ALL_BOOKS,
  GET_ALL_BOOKS_SUCCESS,
  GET_ALL_BOOKS_FAILURE,
  UPDATE_BOOK_FAILURE,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK,
} from '../actionTypes';

import {
  GetAllBooks,
  GetAllBooksSuccess,
  GetAllBooksSuccessPayload,
  GetAllBooksFailure,
  GetAllBooksFailurePayload,
  UpdateBookFailurePayload,
  UpdateBookFailure,
  UpdateBookSuccess,
  UpdateBookSuccessPayload,
  UpdateBook,
  UpdateBookPayload,
} from './booksTypes';

export const getAllBooks = (): GetAllBooks => ({
  type: GET_ALL_BOOKS,
});

export const getAllBooksSuccess = (
  payload: GetAllBooksSuccessPayload
): GetAllBooksSuccess => {
  return {
    type: GET_ALL_BOOKS_SUCCESS,
    payload,
  };
};

export const getAllBooksFailure = (
  payload: GetAllBooksFailurePayload
): GetAllBooksFailure => ({
  type: GET_ALL_BOOKS_FAILURE,
  payload,
});

export const updateBook = (payload: UpdateBookPayload): UpdateBook => ({
  type: UPDATE_BOOK,
  payload,
});

export const updateBookSuccess = (
  payload: UpdateBookSuccessPayload
): UpdateBookSuccess => {
  return {
    type: UPDATE_BOOK_SUCCESS,
    payload,
  };
};

export const updateBookFailure = (
  payload: UpdateBookFailurePayload
): UpdateBookFailure => ({
  type: UPDATE_BOOK_FAILURE,
  payload,
});
