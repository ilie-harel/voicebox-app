import React from 'react';
import './WelcomeComponentMobile.css';
import logoSmallScreen from './logo.png'
import BackgroundCover from '../LandingPage/BackgroundCover/BackgroundCover';
import PhoneNotify from './PhoneNotify/PhoneNotify';

export default function WelcomeComponentMobile() {

  return (
    <div className='WelcomeComponentMobile'>
      <div className='WelcomeComponentLogo'>
        <img src={logoSmallScreen} alt="" />
        <BackgroundCover />
      </div>
      <div className='WelcomeComponentMobilePhone'>
        <p>We are currently working on bringing Voice Box AI to your phone. In the meantime, you can try it out on your computer.</p>
        <PhoneNotify />
      </div>
    </div>
  );
}
