import { FC, ReactNode } from 'react';
import { LinkProps, Link } from "react-router-dom";
import './CustomLink.scss';
import cn from "classnames";

interface Props extends LinkProps {
  children: ReactNode;
  classNames?: string;
  isPrimary?: boolean;
  disabled?: boolean;
}

export const CustomLink: FC<Props> = ({ 
  children, 
  isPrimary = false, 
  classNames, 
  disabled = false, 
  ...rest
}) => {
  const className = cn(
    classNames,
    'custom-link',
    { 'custom-link--primary': isPrimary },
    { 'custom-link--disabled': disabled },
  )
  
  return (
    <Link
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
};