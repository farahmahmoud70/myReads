import { createSelector } from 'reselect';

import { CURRENTLY_READING, READ, WANT_TO_READ } from '../../constants/books';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.books.pending;

const getBooks = (state: AppState) => state.books.books;

const getError = (state: AppState) => state.books.error;

export const getCurrReadingBooksSelector = createSelector(getBooks, (books) =>
  books.filter((b) => b.shelf === CURRENTLY_READING)
);
export const getWantToReadBooksSelector = createSelector(getBooks, (books) =>
  books?.filter((b) => b.shelf === WANT_TO_READ)
);
export const getReadBooksSelector = createSelector(getBooks, (books) =>
  books?.filter((b) => b.shelf === READ)
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
