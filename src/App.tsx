import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import './App.css';
import './styles/main.scss';

import {Header} from '@components/Header';
import {Footer} from '@components/Footer';
import AuthPage from '@modules/authorization/pages/AuthPage.tsx';
import {MainPage} from "@pages/MainPage";

function App() {
  // const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [openedAuthModalWin, setOpenedAuthModalWin] = useState<boolean>(false);
  
  function openAuthModalWin() {
    setOpenedAuthModalWin(true)
  }
  
  function closeAuthModalWin() {
    setOpenedAuthModalWin(false)
  }
 
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <main className="main">
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
            
            {openedAuthModalWin && <AuthPage closeModal={closeAuthModalWin}/>}
          </main>
        </div>
      {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App;
