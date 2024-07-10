import { FC } from 'react';
import cn from "classnames";
import './FilterButton.scss';
import { FilterFunds } from '@/types/FilterFunds';

interface Props {
  children: string;
  callback?: () => void;
  isPrimary?: boolean;
  disabled?: boolean;
  classNames?: string;
  currentFilter?: FilterFunds;
  buttonFilter?: FilterFunds; 
}

export const FilterButton: FC<Props> = ({ 
  children, 
  callback, 
  disabled = false,
  classNames,
  currentFilter,
  buttonFilter
}) => {
  const className = cn(
    classNames,
    'filter-button',
    { 'filter-button--active': currentFilter === buttonFilter }
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
