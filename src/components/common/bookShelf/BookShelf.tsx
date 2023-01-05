// Types & Interfaces
import { Props } from './BookShelfTypes';
import { IBook } from '../../../types/commonTypes';

// UI & Components
import BookCard from '../bookCard/BookCard';
import { BookCardsCtr, BookShelfCtr, BookShelfHeader } from './BookShelfStyles';

const BookShelf = ({ header, books }: Props) => {
  return (
    <BookShelfCtr>
      <BookShelfHeader>{header}</BookShelfHeader>
      <BookCardsCtr>
        {books.map((book: IBook) => (
          <BookCard book={book} key={book.id} />
        ))}
      </BookCardsCtr>
    </BookShelfCtr>
  );
};
export default BookShelf;
