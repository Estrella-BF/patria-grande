import React from 'react';
import logo from './guitar.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTiktok, faFontAwesome, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Button  from '@mui/material/Button/Button';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">

      <div className="main">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
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
          </Grid>

          <Grid item xs={12} md={2}>
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </Grid>
      
          <Grid item xs={12} md={5}>
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
          </Grid>
    

        </Grid>
      </div> 
  </div>
  );
}

export default App;
