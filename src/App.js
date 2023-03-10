import './App.css';
import Main from "../src/Components/Main/Main"
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WelcomeComponentMobile from './Components/WelcomeComponentMobile/WelcomeComponentMobile';
import { useEffect, useState } from 'react';

function App() {
  const authSlice = useSelector((state) => state.auth);
  const [notAllowed, setNotAllowed] = useState(false);

  useEffect(() => {
    // const isSafari = () => {
    //   const userAgent = navigator.userAgent.toLowerCase();
    //   const vendor = navigator.vendor.toLowerCase();
    //   return vendor.includes('apple') && userAgent.includes('safari');
    // };

    
    const isSafariT = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const vendor = navigator.vendor.toLowerCase();
      console.log('s',vendor.includes('apple') && /safari/i.test(userAgent) && !/chrome/i.test(userAgent));
      return vendor.includes('apple') && /safari/i.test(userAgent) && !/chrome/i.test(userAgent);
    };

    const isMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /android|webos|iphone|ipad|ipod|blackberry|windows phone|iemobile|tablet|mobile/i.test(userAgent);
    };

    if (isSafariT() || isMobile()) {
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
