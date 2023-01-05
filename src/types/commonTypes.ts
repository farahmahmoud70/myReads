export interface IBook {
  id: string;
  title: string;
  authors: string[];
  imageLinks: { [name: string]: string };
  shelf: string;
}

export interface IOption {
  value: string;
  title: string;
  disabled?: boolean;
}
