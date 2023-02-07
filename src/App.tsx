import React from 'react';
import logo from './/images/guitar.png';

import './App.css';
import { Grid } from '@mui/material';
import MainComponent from './pages/main/main';

class App extends React.Component {


  
  render() {
    return (
      <div className="App">

        <div className="main">
          <Grid container spacing={2}>
          <MainComponent></MainComponent>



            <Grid item xs={12} md={2}>
              <div className="logo">
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
}

export default App;
