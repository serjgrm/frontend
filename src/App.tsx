// import {useState} from 'react';
import './App.css';
import {Header} from "@components/Header";
import {Footer} from "@components/Footer";

function App() {
  // const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
 
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;
