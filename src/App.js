import './App.css';
import Main from "../src/Components/Main/Main"
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toastsFunctions } from './helpers/toastsFunctions';
import WelcomeComponentMobile from './Components/WelcomeComponentMobile/WelcomeComponentMobile';

function App() {
  const authSlice = useSelector((state) => state.auth);
  const overlaySelector = useSelector((state) => state.overlay);
  const smallScreen = window.matchMedia("(max-width: 768px)").matches;


  return (
    <div className="App">
      {smallScreen ?
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
