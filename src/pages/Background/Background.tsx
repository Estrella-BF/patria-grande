import React from "react";
import { Grid } from '@mui/material';
import logo from '../..//images/guitar.png';

const Background = () => { 

  return (
      <Grid item xs={12} md={2}>
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </Grid>
  )
}
 
export default Background;