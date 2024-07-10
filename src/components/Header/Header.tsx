import './Header.scss';
import cn from 'classnames';
import { FC } from 'react';
import { Logo } from '@/ui/Logo';
import { Nav } from '../Nav';
import { Actions } from '../Actions';
import { Burger } from '@/ui/Burger';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setMobileModalState } from '@/store/slices/mobileModalSlice';

interface Props {
  classNames?: string;
}

export const Header: FC<Props> = ({ classNames, }) => {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector(data => data.mobileModal);

  const className = cn(
    classNames,
    'header'
  );

  const handleHeaderModal = () => {
    if (!modalState) {
      dispatch(setMobileModalState(true))
    } else {
      dispatch(setMobileModalState(false))
    }
  }

  return (
    <>
      <div className="container">
        <header className={className}>
          <Logo classNames="header__logo"/>

          <div className={cn(
            "header__links",
            { "header__links--active": modalState }
          )}>
            <Nav classNames='header__nav' />

            <Actions classNames='header__actions'/>
          </div>

          <Burger
            modalState={modalState} 
            callback={handleHeaderModal}
            classNames='header__burger'
          />
        </header>
      </div>
      <hr className="hr" />
    </>
  );
};
