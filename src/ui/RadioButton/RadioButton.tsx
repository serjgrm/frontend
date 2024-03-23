import {FC} from 'react';
import './RadioButton.scss';
import classNames from "classnames";

interface Props {
  disabled?: boolean;
  active: boolean;
  setActive: () => void;
}

export const RadioButton: FC<Props> = ({ active, setActive, disabled = false}) => {
  const classes = classNames(
    'radiobutton__icon',
    {'radiobutton__icon--active': active}
  )
  
  return (
    <button
      className="radiobutton"
      onClick={setActive}
      disabled={disabled}
    >
      <div className={classes}></div>
    </button>
  );
};
