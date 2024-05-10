import './styles/main.scss';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { AuthPage } from '@modules/authorization/pages/AuthPage.tsx';
import { HomePage } from "@/pages/HomePage";
import { FundsPage } from '@pages/FundsPage';
import { NotFoundPage } from '@pages/NotFoundPage';

function App() {
  // const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [openedAuthModalWin, setOpenedAuthModalWin] = useState<boolean>(false);
  
  // function openAuthModalWin() {
  //   setOpenedAuthModalWin(true)
  // }
  
  function closeAuthModalWin() {
    setOpenedAuthModalWin(false)
  }
  
  return (
    <div className='page'>
      <Router>
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
      </Router>
    </div>
  )
}

export default App;
