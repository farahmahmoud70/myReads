import {
  GET_ALL_BOOKS,
  GET_ALL_BOOKS_SUCCESS,
  GET_ALL_BOOKS_FAILURE,
  UPDATE_BOOK,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
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

    case UPDATE_BOOK:
      return {
        ...state,
        pending: true,
      };
    case UPDATE_BOOK_SUCCESS:
      return {
        ...state,
        pending: false,
        books: [
          ...state.books.map((book) => {
            if (book.id === action.payload.book.id) {
              return { ...book, ...action.payload.book };
            } else return book;
          }),
        ],
        error: null,
      };
    case UPDATE_BOOK_FAILURE:
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
