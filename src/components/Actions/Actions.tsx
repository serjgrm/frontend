import './Actions.scss';
import cn from 'classnames';
import { FC } from 'react';
import { CustomLink } from '../../ui/CustomLink/CustomLink';

interface Props {
  classNames?: string;
}

export const Actions: FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'actions'
  );

  return (
    <div className={className}>
      <div className="actions__wrapper">
        <CustomLink
          classNames="actions__link"
          isPrimary={true}
          to={"#Організувати-збір"}
        >
          Організувати збір
        </CustomLink>
        <CustomLink
          classNames="actions__link"
          to={"#Увійти"}
        >
          Увійти
        </CustomLink>
      </div>
    </div>
  );
};
