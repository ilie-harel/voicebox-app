import './App.css';
import Main from "../src/Components/Main/Main"
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WelcomeComponentMobile from './Components/WelcomeComponentMobile/WelcomeComponentMobile';
import { useEffect, useState } from 'react';
import { detect } from 'detect-browser'

const browser = detect();

function App() {
  const authSlice = useSelector((state) => state.auth);
  const [notAllowed, setNotAllowed] = useState(false);
 
  useEffect(() => {
    const isMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /android|webos|iphone|ipad|ipod|blackberry|windows phone|iemobile|tablet|mobile/i.test(userAgent);
    };

    if (browser.name !== 'chrome' || isMobile()) {
      setNotAllowed(true);
    }

  }, []);

  return (
    <div className="App">
      {notAllowed ? (
        <WelcomeComponentMobile />
      ) : (
        <Routes>
          {authSlice ? (
            <Route path="*" element={<Main />} />
          ) : (
            <Route path="*" element={<LandingPage />} />
          )}
        </Routes>
      )}
    </div>
  );
}


export default App;
