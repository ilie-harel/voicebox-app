import React, { useEffect, useState } from 'react'
import Rooms from './Rooms/Rooms'
import './Home.css'
import SpeechFromText from './SpeakToText/SpeachFromText'
import RoomsSmallScreen from './RoomsSmallScreen/RoomsSmallScreen';

export default function Home() {
  const smallScreen = window.matchMedia("(max-width: 768px)").matches;
  const [notComputer, setNotComputer] = useState(false)

  useEffect(() => {
    const isMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
    }
    console.log(123);
    setNotComputer(isMobile());
  }, [])

  return (
    <div className={notComputer? 'Home ComponentMobile' : 'Home'}>
      {
        smallScreen ? 
        <RoomsSmallScreen />
          :
          <Rooms />
      }

      <SpeechFromText />
    </div>
  )
}
