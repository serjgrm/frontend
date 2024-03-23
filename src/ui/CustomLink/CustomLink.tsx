import {FC, ReactNode} from 'react';
import './CustomLink.scss';
import {LinkProps, NavLink} from "react-router-dom";
import classNames from "classnames";

interface Props extends LinkProps {
  children: ReactNode;
  isPrimary?: boolean;
}

export const CustomLink: FC<Props> = ({ children, isPrimary = false, ...rest }) => {
  const className = classNames(
    'custom-link',
    { 'custom-link--primary': isPrimary },
    { 'custom-link--disabled': 0 },
  )
  
  return (
    
    <NavLink
      className={
        ({ isActive }) => {
          return (isActive ? 'custom-link--active ' : '') + className
        }
      }
      {...rest}
    >
      {children}
    </NavLink>
  );
};
