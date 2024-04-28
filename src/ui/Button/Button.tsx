import {FC} from 'react';
import cn from "classnames";
import './Button.scss';

interface Props {
  children: string;
  callback: () => void;
  isPrimary?: boolean;
  disabled?: boolean;
  classNames?: string;
}

export const Button: FC<Props> = ({ 
  children, 
  callback, 
  isPrimary = false, 
  disabled = false,
  classNames,
}) => {
  const className = cn(
    classNames,
    'button',
    {'button--is-primary': isPrimary},
  )
  
  return (
    <button
      className={className}
      onClick={callback}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
