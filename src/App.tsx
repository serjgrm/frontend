import './styles/main.scss';

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import { Header } from '@/components/Header';
import { Footer } from '@components/Footer';
import { AuthModal } from '@/modules/authorization/modals/AuthModal';
import { HomePage } from "@/pages/HomePage";
import { FundsPage } from '@pages/FundsPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setMobileModalState } from './store/slices/mobileModalSlice';

function App() {
  // const [token, setToken] = useState<string>(localStorage.getItem('token') || '');

  const openedMobileModal = useAppSelector(data => data.mobileModal);
  const openedAuthModal = useAppSelector(data => data.authModal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const htmlElement = document.querySelector('html');

    if ((openedMobileModal && htmlElement) || (openedAuthModal && htmlElement)) {
      htmlElement.style.overflow = 'hidden';
      htmlElement.style.backgroundColor = 'rgba(219, 233, 254, 0.8)';
    } else if (htmlElement) {
      htmlElement.style.overflow = '';
      htmlElement.style.backgroundColor = '';
    }

    if (openedAuthModal) {
      dispatch(setMobileModalState(false))
    }
  }, [openedMobileModal, openedAuthModal, dispatch]);

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
          dispatch(setMobileModalState(false))
        }
      }, 0);
    }
  }, [location, navigate, dispatch]);

  return (
    <div className='page'>
      <Header classNames='page__header' />

      <main className="page__main main">
        <div className="container">
          <Routes>
            <Route path="frontend/" element={<HomePage classNames='page__home-page'/>} />
            <Route path="frontend/funds-page" element={<FundsPage classNames='page__funds-page'/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {openedAuthModal && <AuthModal />}
        </div>
      </main>

      <Footer classNames='page__footer'/>
    </div>
  )
}

export default App;