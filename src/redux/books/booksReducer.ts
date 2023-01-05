import {
  GET_ALL_BOOKS,
  GET_ALL_BOOKS_SUCCESS,
  GET_ALL_BOOKS_FAILURE,
} from '../actionTypes';

import { BooksActions, BooksState } from './booksTypes';

const initialState: BooksState = {
  pending: false,
  books: [],
  error: null,
};

export default (state = initialState, action: BooksActions) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        pending: false,
        books: action.payload.books,
        error: null,
      };
    case GET_ALL_BOOKS_FAILURE:
      return {
        ...state,
        pending: false,
        books: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
