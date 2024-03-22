import {FC} from 'react';
import classNames from "classnames";
import './Button.scss';

interface Props {
  children: string;
  callback: () => void;
  isPrimary?: boolean;
  disabled?: boolean;
}

export const Button: FC<Props> = ({ children, callback, isPrimary = false, disabled = false }) => {
  const classes = classNames(
    'button',
    {'button--is-primary': isPrimary},
  )
  
  return (
    <button
      className={classes}
      onClick={callback}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
