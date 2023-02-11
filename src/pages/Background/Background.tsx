import React from "react";
import './Background.scss';
import { Grid } from '@mui/material';
import logo from '../../images/guitar.png';
import halfLogo from '../../images/guitar-half.png';

const Background = () => { 

  return (
      <Grid item xs={12} md={2}>
      <div className="logo">
        <img src={logo} className="logo-desktop" alt="logo" />
        <img src={halfLogo} className="half-logo" alt="logo" />
      </div>
    </Grid>
  )
}
 
export default Background;