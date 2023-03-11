import './App.css';
import Main from "../src/Components/Main/Main"
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WelcomeComponent from './Components/Main/Home/SpeakToText/WelcomeComponent/WelcomeComponent';
import { toastsFunctions } from './helpers/toastsFunctions';

function App() {
  const authSlice = useSelector((state) => state.auth);
  const overlaySelector = useSelector((state) => state.overlay);
  const smallScreen = window.matchMedia("(max-width: 768px)").matches;


  return (
    <div className="App">
      {smallScreen ?
      <>
        <WelcomeComponent />
        {toastsFunctions.toastInfo('Try VoiceBox from your computer')}
      </>
        
        :
        overlaySelector ?
          <div id="overlay"></div>
          : <></>}
      <Routes>
        {
          authSlice ?
            <Route path='*' element={<Main />}></Route>
            :
            <Route path='*' element={<LandingPage />}></Route>
        }
      </Routes>
    </div>
  );
}

export default App;
