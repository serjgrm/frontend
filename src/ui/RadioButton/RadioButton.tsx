import {FC} from 'react';
import './RadioButton.scss';
import cn from "classnames";

interface Props {
  disabled?: boolean;
  active: boolean;
  setActive: () => void;
  classNames?: string;
}

export const RadioButton: FC<Props> = ({ 
  active, 
  setActive,
  disabled = false,
  classNames
}) => {
  const className = cn(
    classNames,
    'radiobutton__icon',
    {'radiobutton__icon--active': active}
  )
  
  return (
    <button
      className="radiobutton"
      onClick={setActive}
      disabled={disabled}
    >
      <div className={className}></div>
    </button>
  );
};
