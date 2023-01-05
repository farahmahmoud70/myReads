// Constants
import {
  CURRENTLY_READING,
  READ,
  WANT_TO_READ,
} from '../../../constants/books';

// Types & Interfaces
import { IOption } from '../../../types/commonTypes';
import { Props } from './BookCardTypes';

// UI & components
import QuickMenu from '../quickMenu/QuickMenu';
import {
  BookCardCtr,
  BookCtr,
  BookDetails,
  BookDetailsCtr,
  BookImg,
} from './BookCardStyles';

const BookCard = ({ book }: Props) => {
  const bookOptions = (): IOption[] => {
    return [
      { value: 'none', title: 'Move to...', disabled: true },
      { value: CURRENTLY_READING, title: 'Currently Reading', disabled: true },
      { value: WANT_TO_READ, title: 'Want To Read', disabled: true },
      { value: READ, title: 'Read', disabled: true },
    ];
  };

  const onOptionChange = (value: string): void => {
    console.log(value);
  };

  return (
    <BookCardCtr>
      <BookImg
        src={book.imageLinks?.thumbnail ?? book.imageLinks?.smallThumbnail}
        alt={book.title}
      />
      <BookCtr>
        <BookDetailsCtr>
          <BookDetails title={book.title} fontWeight={'bold'}>
            {book.title}
          </BookDetails>
          {book.authors.map((auth) => (
            <BookDetails color={'gray'} title={auth} key={`${book.id}_${auth}`}>
              {auth}
            </BookDetails>
          ))}
        </BookDetailsCtr>
        <QuickMenu
          currShelf={book.shelf}
          options={bookOptions()}
          onOptionChange={onOptionChange}
        ></QuickMenu>
      </BookCtr>
    </BookCardCtr>
  );
};
export default BookCard;
