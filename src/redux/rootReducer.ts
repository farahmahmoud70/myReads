import { combineReducers } from 'redux';

import booksReducer from './books/booksReducer';

const rootReducer = combineReducers({
  books: booksReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
