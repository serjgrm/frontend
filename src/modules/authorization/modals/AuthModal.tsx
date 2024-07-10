import { FC, useState } from 'react';
import './AuthModal.scss';

import RegistrationModalContent from './RegistrationModalContent.tsx';
import LoginModalContent from './LoginModalContent.tsx';
import { CurrentPage } from '@/types/CurrentPage.ts';
import { useAppDispatch } from '@/store/hooks.ts';
import { setAuthModalState } from '@/store/slices/authModalSlice.ts';

export const AuthModal: FC = () => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.LOGIN_PAGE);
  const dispatch = useAppDispatch();

  function closeAuthModal() {
    dispatch(setAuthModalState(false))
  }

  return (
    <div
      className="auth-modal"
    >
      {currentPage === CurrentPage.REGISTRATION_PAGE && (
        <RegistrationModalContent
          changePage={setCurrentPage}
          closeModal={closeAuthModal}
        />
      )}
      
      {currentPage === CurrentPage.LOGIN_PAGE && (
        <LoginModalContent
          changePage={setCurrentPage}
          closeModal={closeAuthModal}
        />
      )}
    </div>
  );
}
