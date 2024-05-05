import { ReactNode } from 'react';
import './NavigationTitle.scss';
import cn from 'classnames';
import { ArrowBack } from '@/svg/ArrowBack';
import { Link } from 'react-router-dom';

interface Props {
  classNames?: string;
  children: ReactNode;
  url: string;
}

export const NavigationTitle: React.FC<Props> = ({ classNames, children, url }) => {
  const className = cn(
    classNames,
    'navigation-title'
  )

  return (
    <div className={className}>
      <Link
        to={url}
        className="navigation-title__link"
      >
        <ArrowBack size={32}/>
      </Link>
      
      <h3 className='navigation-title__title'>
        {children}
      </h3>
    </div>
  );
};
