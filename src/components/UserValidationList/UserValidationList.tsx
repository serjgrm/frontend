import './UserValidationList.scss';
import cn from 'classnames';
// import users from '../../data-imitation/users.json';

import { FC } from 'react';
import { UserValidationItem } from '../UserValidationItem';
import { User } from '@/types/User';

interface Props {
  classNames?: string;
  visibleUsers: User[] | [];
}

export const UserValidationList: FC<Props> = ({ 
  classNames,
  visibleUsers,
}) => {
  const className = cn(
    classNames,
    'user-validation-list'
  );

  return (
    <div className={className}>
      {visibleUsers.map(({ fullName, email, verified, id }) => {
        return <UserValidationItem 
          fullName={fullName} 
          email={email} 
          verified={verified}
          key={id}
        />
      })}
    </div>    
  );
};
