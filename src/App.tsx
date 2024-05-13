import './styles/main.scss';

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Header } from '@/components/Header';
import { Footer } from '@components/Footer';
import { AuthPage } from '@modules/authorization/pages/AuthPage.tsx';
import { HomePage } from "@/pages/HomePage";
import { FundsPage } from '@pages/FundsPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setModalState } from './store/slices/modalSlice';

function App() {
  // const [token, setToken] = useState<string>(localStorage.getItem('token') || '');

  const [openedAuthModalWin, setOpenedAuthModalWin] = useState<boolean>(false);
  const modalState = useAppSelector(data => data.modalState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  // function openAuthModalWin() {
  //   setOpenedAuthModalWin(true)
  // }
  
  function closeAuthModalWin() {
    setOpenedAuthModalWin(false)
  }
  
  useEffect(() => {
    const htmlElement = document.querySelector('html');

    if (modalState && htmlElement) {
      htmlElement.style.overflow = 'hidden';
      htmlElement.style.backgroundColor = 'rgba(219, 233, 254, 0.8)';
    } else if (htmlElement) {
      htmlElement.style.overflow = '';
      htmlElement.style.backgroundColor = '';
    }
  }, [modalState]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const { hash } = location;

    if (hash === '#top-volunteers') {
      navigate('/frontend');
    
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
          dispatch(setModalState(false))
        }
      }, 0);
    }
  }, [location, navigate, dispatch]);

  return (
    <div className='page'>
      <Header classNames='page__header'/>

      <main className="page__main main">
        <div className="container">
          <Routes>
            <Route path="frontend/" element={<HomePage classNames='page__home-page'/>} />
            <Route path="frontend/funds-page" element={<FundsPage classNames='page__funds-page'/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {openedAuthModalWin && <AuthPage closeModal={closeAuthModalWin}/>}
        </div>
      </main>

      <Footer classNames='page__footer'/>
    </div>
  )
}

export default App;
