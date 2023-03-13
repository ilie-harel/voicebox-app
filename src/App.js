import './App.css';
import Main from "../src/Components/Main/Main"
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WelcomeComponentMobile from './Components/WelcomeComponentMobile/WelcomeComponentMobile';
import { useEffect, useState } from 'react';

function App() {
  const authSlice = useSelector((state) => state.auth);
  const [notAllowed, setNotAllowed] = useState(false)

  useEffect(() => {
    const isSafari = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /safari/i.test(userAgent);
    }
  
    const isMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /android|webos|iphone|ipad|ipod|blackberry|windows phone|iemobile|tablet|mobile/i.test(userAgent);
    }
  
    if (isSafari() && isMobile()) {
      setNotAllowed(true);
    }
  }, [])
  
  return (
    <div className="App">
      {notAllowed ? (
        <WelcomeComponentMobile />
      ) : (
        // Render the Main or LandingPage component for other users
        <Routes>
          {authSlice ? (
            <Route path='*' element={<Main />}></Route>
          ) : (
            <Route path='*' element={<LandingPage />}></Route>
          )}
        </Routes>
      )}
    </div>
  );
}

export default App;
