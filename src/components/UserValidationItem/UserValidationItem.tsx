import './UserValidationItem.scss';
import cn from 'classnames';
import { FC } from 'react';
import { ButtonVerification } from '@/ui/ButtonVerification/ButtonVerification';
import { CustomLink } from '@/ui/CustomLink';
import { Tick } from '@/svg/Tick/Tick';
import { Cross } from '@/svg/Cross/Cross';

interface Props {
  classNames?: string,
  fullName: string,
  email: string,
  verified: boolean
}

export const UserValidationItem: FC<Props> = ({ 
  classNames,
  fullName,
  email,
  verified,
}) => {
  const className = cn(
    classNames,
    'user-validation-item'
  );

  const callback = () => {
    return 'callback'
  }

  return (
    <div className={className}>
      <div className="user-validation-item__data">
        <CustomLink classNames='user-validation-item__name' to='#users-page'>{fullName}</CustomLink>
        <p className='user-validation-item__email'>{email}</p>
      </div>
      
      <div className="user-validation-item__actions">
        <ButtonVerification
         isPrimary={!verified}
         callback={callback} 
        >
          <Tick isPrimary={!verified} />
        </ButtonVerification>

        <ButtonVerification
         isPrimary={verified}
         callback={callback} 
        >
          <Cross isPrimary={verified} />
        </ButtonVerification>
      </div>
    </div>
  );
};
