import './App.css';
import Main from "../src/Components/Main/Main"
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WelcomeComponentMobile from './Components/WelcomeComponentMobile/WelcomeComponentMobile';
import { useEffect, useState } from 'react';

function App() {
  const authSlice = useSelector((state) => state.auth);
  // const overlaySelector = useSelector((state) => state.overlay);
  // const smallScreen = window.matchMedia("(max-width: 768px)").matches;
  const [notComputer, setNotComputer] = useState(false)

  useEffect(() => {
    const isMobileSafari = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /safari/i.test(userAgent) && /mobile|iphone|ipad|ipod/i.test(userAgent);
    }
  
    setNotComputer(isMobileSafari());
  }, [])
  
  return (
    <div className="App">
      {notComputer ?
        <>
          <WelcomeComponentMobile />
        </>
        :
        <Routes>
          {
            authSlice ?
              <Route path='*' element={<Main />}></Route>
              :
              <Route path='*' element={<LandingPage />}></Route>
          }
        </Routes>
      } 

    </div>
  );
}

export default App;
