import React from 'react';
import logo from './guitar.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTiktok, faFontAwesome, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="main">

        <div className="band-info">
          <div className="band-info__header-name">
            LADO A
          </div>
          <div className="band-info__audio">
            <div className="band-info__audio--title">
            "Asesinos"
            </div>
            <audio src="" controls  preload="none"></audio>   
          </div>

          <div className="band-info__social-network">
            <div>
              <FontAwesomeIcon icon={faFacebookF} />  
            </div>
            <div>
              <FontAwesomeIcon icon={faTiktok} />
            </div>
      
            <div>
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
    
        </div>

        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="band-side">

          <div className="band-side__header-name">
            LADO B
          </div>
          <div className="band-side__title">
            <div className="title">
              Patria grande
            </div>
            <div className="sub-title">
              Argentina
            </div>
          </div>
        </div>

    {/*     <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
    </div>
  );
}

export default App;
