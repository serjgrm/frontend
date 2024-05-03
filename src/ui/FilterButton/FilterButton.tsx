import { FC } from 'react';
import cn from "classnames";
import './FilterButton.scss';

interface Props {
  children: string;
  callback?: () => void;
  isPrimary?: boolean;
  disabled?: boolean;
  classNames?: string;
}

export const FilterButton: FC<Props> = ({ 
  children, 
  callback, 
  disabled = false,
  classNames,
}) => {
  const className = cn(
    classNames,
    'filter-button',
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
