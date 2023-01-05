import { IBook } from '../../types/commonTypes';
import {
  GET_BOOK,
  GET_ALL_BOOKS,
  GET_ALL_BOOKS_SUCCESS,
  GET_ALL_BOOKS_FAILURE,
  UPDATE_BOOK,
  SEARCH_FOR_BOOKS,
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

export type BooksActions =
  | GetAllBooks
  | GetAllBooksSuccess
  | GetAllBooksFailure;
