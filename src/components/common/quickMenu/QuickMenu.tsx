// Libs
import { ChangeEvent, useState } from 'react';

// Types & Interfaces
import { IOption } from '../../../types/commonTypes';

// UI & Components
import { ReactComponent as DownArrow } from '../../../styles/images/arrow-down.svg';
import { ReactComponent as UpArrow } from '../../../styles/images/arrow-up.svg';
import { QuickMenuBtn, QuickMenuCtr } from './QuickMenuStyles';
import { Props } from './QuickMenuTypes';

const QuickMenu = ({ currShelf, options, onOptionChange }: Props) => {
  const [quickMenuToggle, setQuickMenuToggle] = useState(false);

  const onQuickMenuBtn = () => {
    setQuickMenuToggle((quickMenuToggle) => !quickMenuToggle);
  };

  const onOptionChangeHandle = (e: ChangeEvent<HTMLSelectElement>): void => {
    onOptionChange(e.target.value);
  };

  return (
    <QuickMenuCtr>
      <QuickMenuBtn onClick={onQuickMenuBtn}>
        {!quickMenuToggle ? (
          <DownArrow color="white" />
        ) : (
          <UpArrow color="white" />
        )}
      </QuickMenuBtn>
      <select value={currShelf} onChange={onOptionChangeHandle}>
        {options.map((option: IOption) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </QuickMenuCtr>
  );
};
export default QuickMenu;
