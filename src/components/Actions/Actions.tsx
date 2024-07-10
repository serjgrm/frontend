import './Actions.scss';
import cn from 'classnames';
import { FC } from 'react';
import { CustomLink } from '../../ui/CustomLink/CustomLink';
import { useAppDispatch } from '@/store/hooks';
import { setAuthModalState } from '@/store/slices/authModalSlice';
import { MyPageButton } from '../MyPageButton';

interface Props {
  classNames?: string;
}

export const Actions: FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'actions'
  );
  const token = localStorage.getItem('token');
  const dispatch = useAppDispatch();

  const openAuthModal = () => {
    dispatch(setAuthModalState(true))
  }

  return (
    <div className={className}>
      <div className="actions__wrapper">
        <button
          className="actions__link actions__link--primary custom-link custom-link--primary"
          // isPrimary={true}
          // to={"#Організувати-збір"}
        >
          Організувати збір
        </button>
        {token 
          ? (
            <CustomLink
              className="actions__link"
              to={"frontend/my-page"}
            >
              <MyPageButton />
            </CustomLink>
          ) : (
            <button
              className="actions__link custom-link"
              // to={"frontend/my-page"}
              onClick={openAuthModal}
            >
              Увійти
            </button>
          )
        }
      </div>
    </div>
  );  
};
