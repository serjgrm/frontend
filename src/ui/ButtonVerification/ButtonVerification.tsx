import './ButtonVerification.scss';
import cn from 'classnames';
import { FC } from 'react';


interface Props {
  classNames?: string;
  isPrimary?: boolean;
  callback: () => void;
  children: React.ReactNode;
}

export const ButtonVerification: FC<Props> = ({ 
  classNames,
  callback,
  isPrimary = false,
  children,
}) => {
  const className = cn(
    classNames,
    'button-verification',
    {'button-verification--primary': isPrimary},
    {'button-verification--secondary': !isPrimary},
  );

  return (
    <button 
      className={className}
      onClick={callback}
    >
      {children}
    </button>
  );
};
