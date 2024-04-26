import {FC, ReactNode} from 'react';
import {LinkProps, NavLink} from "react-router-dom";
import cn from "classnames";

interface Props extends LinkProps {
  children: ReactNode;
  classNames?: string;
}

export const CustomLink: FC<Props> = ({ children, classNames, ...rest }) => {
  const className = cn(
    'custom-link',
    classNames,
    { 'custom-link--disabled': 0 },
  )
  
  return (
    <NavLink
      className={className}
      {...rest}
    >
      {children}
    </NavLink>
  );
};
