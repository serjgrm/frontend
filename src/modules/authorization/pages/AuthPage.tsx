import {FC, useState} from 'react';
import './AuthPage.scss';

import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import {CurrentPage} from '../types/CurrentPage.ts';

interface Props {
  closeModal: () => void;
}

export const AuthPage: FC<Props> = ({ closeModal }) => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.REGISTRATION_PAGE);
  
  return (
    <div
      className="auth-page-modal"
    >
      {currentPage === CurrentPage.REGISTRATION_PAGE && (
        <RegistrationPage
          changePage={setCurrentPage}
          closeModal={closeModal}
        />
      )}
      
      {currentPage === CurrentPage.LOGIN_PAGE && (
        <LoginPage
          changePage={setCurrentPage}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
