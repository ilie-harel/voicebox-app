import React from 'react'
import Rooms from './Rooms/Rooms'
import './Home.css'
import SpeechFromText from './SpeakToText/SpeachFromText'
import RoomsSmallScreen from './RoomsSmallScreen/RoomsSmallScreen';
import SpeechFromTextMobile from './SpeechFromTextMobile/SpeechFromTextMobile';

export default function Home() {
  const smallScreen = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div className='Home'>
      {
        smallScreen ?
          <RoomsSmallScreen />
          :
          <Rooms />
      }
      {
        smallScreen ?
          <SpeechFromText />
          :
          <SpeechFromTextMobile />
      }

    </div>
  )
}
