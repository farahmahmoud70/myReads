import {
  GET_ALL_BOOKS,
  GET_ALL_BOOKS_SUCCESS,
  GET_ALL_BOOKS_FAILURE,
} from '../actionTypes';

import {
  GetAllBooks,
  GetAllBooksSuccess,
  GetAllBooksSuccessPayload,
  GetAllBooksFailure,
  GetAllBooksFailurePayload,
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
