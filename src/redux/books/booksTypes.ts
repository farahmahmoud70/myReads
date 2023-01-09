import { IBook } from '../../types/commonTypes';
import {
  GET_BOOK,
  GET_ALL_BOOKS,
  GET_ALL_BOOKS_SUCCESS,
  GET_ALL_BOOKS_FAILURE,
  UPDATE_BOOK,
  SEARCH_FOR_BOOKS,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
} from '../actionTypes';

export interface BooksState {
  pending: boolean;
  books: IBook[];
  error: string | null;
}

export interface GetAllBooks {
  type: typeof GET_ALL_BOOKS;
}

export interface GetAllBooksSuccessPayload {
  books: IBook[];
}

export interface GetAllBooksFailurePayload {
  error: string;
}

export type GetAllBooksSuccess = {
  type: typeof GET_ALL_BOOKS_SUCCESS;
  payload: GetAllBooksSuccessPayload;
};

export type GetAllBooksFailure = {
  type: typeof GET_ALL_BOOKS_FAILURE;
  payload: GetAllBooksFailurePayload;
};

export interface UpdateBookPayload {
  id: string;
  shelf: string;
}

export interface UpdateBook {
  type: typeof UPDATE_BOOK;
  payload: UpdateBookPayload;
}

export interface BookShelf {
  [name: string]: string[];
}

export interface UpdateBookSuccessPayload {
  data: { [name: string]: string[] };
}

export interface UpdateBookFailurePayload {
  error: string;
}

export type UpdateBookSuccess = {
  type: typeof UPDATE_BOOK_SUCCESS;
  payload: UpdateBookSuccessPayload;
};

export type UpdateBookFailure = {
  type: typeof UPDATE_BOOK_FAILURE;
  payload: UpdateBookFailurePayload;
};

export type BooksActions =
  | GetAllBooks
  | GetAllBooksSuccess
  | GetAllBooksFailure
  | UpdateBook
  | UpdateBookSuccess
  | UpdateBookFailure;
