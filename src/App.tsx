// Libs
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// Redux Actions
import { getAllBooks } from './redux/books/booksActions';

// Redux Selectors
import {
  getCurrReadingBooksSelector,
  getReadBooksSelector,
  getWantToReadBooksSelector,
} from './redux/books/booksSelectors';

// UI & Components
import BookShelf from './components/common/bookShelf/BookShelf';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const dispatch = useDispatch();

  const currReadingBooks = useSelector(getCurrReadingBooksSelector);
  const wantToReadBooks = useSelector(getWantToReadBooksSelector);
  const readBooks = useSelector(getReadBooksSelector);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <Container>
      <BookShelf books={currReadingBooks} header={'Currently reading'} />
      <BookShelf books={wantToReadBooks} header={'Want to read'} />
      <BookShelf books={readBooks} header={'Read'} />
    </Container>
  );
};

export default App;
