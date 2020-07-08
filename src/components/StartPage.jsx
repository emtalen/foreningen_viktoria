import React from 'react'
import '../styles/startPage.css'
import Navigation from './Navigation';

const StartPage = () => {
  return (
    <>
    <Navigation/>
    <div className="bunny">
      <img src="/images/bunny-right.png" alt="Bunny" />
      <img src="/images/bunny-left.png" alt="Bunny" />
    </div>
    </>
  );
}

export default StartPage

