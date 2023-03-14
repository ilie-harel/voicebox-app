import React from 'react';
import './WelcomeComponentMobile.css';
import logoSmallScreen from './logo.png'
import BackgroundCover from '../LandingPage/BackgroundCover/BackgroundCover';
import PhoneNotify from './PhoneNotify/PhoneNotify';
import { TypeAnimation } from 'react-type-animation';
import SpeechToTextAzure from '../Main/Home/SpeechFromTextMobile/SpeechFromTextMobile';

export default function WelcomeComponentMobile() {

  return (
    <div className='WelcomeComponentMobile'>
      <div className='WelcomeComponentLogo'>
        <img src={logoSmallScreen} alt="" />
        <BackgroundCover />
      </div>
      <div className='WelcomeComponentMobilePhone'>
        <TypeAnimation
          sequence={['We are currently working on bringing Voice Box AI to mobile devices and other browsers. In the meantime, you can try it out on Chrome for desktop.']}
          wrapper="p"
          cursor={true}
          speed={50}
          className={'signInAnimation'}
        />
      </div>
      <div className='PhoneNotifyComponentDiv'>
        <PhoneNotify />
      </div>
    </div>
  );
}
