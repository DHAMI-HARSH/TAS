import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <>
      <div id="home">
        <h1>THIS IS A BASIC
          <span id="change">
            <Typewriter
              options={{
                strings: ['FORM FETCHING WEBSITE', 'DATA DISPLAYING WEBSITE', 'CRM'],
                autoStart: true,
                loop: true,
                delay: 75,
                pauseFor: 1000,
              }}
            />
          </span>
        </h1>
        <div id="button-container">
          <button id='b1'> GET STARTED ↗</button>
          <button id='b2'>GO TO DASHBOARD ↗ </button>
        </div>
       
      </div>
      
    </>
  );
};

export default Home;