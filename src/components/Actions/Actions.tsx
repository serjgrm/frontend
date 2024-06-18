import './Actions.scss';
import cn from 'classnames';
import { FC } from 'react';
import { CustomLink } from '../../ui/CustomLink/CustomLink';
import { useAppDispatch } from '@/store/hooks';
import { setAuthModalState } from '@/store/slices/authModalSlice';

interface Props {
  classNames?: string;
}

export const Actions: FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'actions'
  );

  const dispatch = useAppDispatch();

  const openAuthModal = () => {
    dispatch(setAuthModalState(true))
  }

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
          className="actions__link"
          to={"frontend"}
          onClick={openAuthModal}
        >
          Увійти
        </CustomLink>
      </div>
    </div>
  );
};
