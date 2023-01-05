import { IOption } from '../../../types/commonTypes';

export interface Props {
  currShelf: string;
  options: IOption[];
  onOptionChange(value: string): void;
}
