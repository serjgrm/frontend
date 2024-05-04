import { ReactNode } from 'react';
import './PaginationItem.scss';
import cn from "classnames";

interface Props {
  classNames?: string;
  callBack?: () => void;
  children: ReactNode;
  currentPage?: number;
}

export const PaginationItem: React.FC<Props> = ({ 
  classNames,
  callBack, 
  children, 
  currentPage 
}) => {
  const className = cn(
    classNames,
    'pagination-item',
    {'pagination-item--active': children === currentPage}
  )

  return (
    <button onClick={callBack} className={className}>{children}</button>
  );
};