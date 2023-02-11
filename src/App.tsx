import React from 'react';

import './App.scss';
import { Grid } from '@mui/material';
import MainComponent from './pages/Main/Main';
import Background from './pages/Background/Background';
import { Information } from './pages/Information/Information';
import { Footer } from './components/Footer/Footer';

const App = () => {
/*   const [count, setCount] = useState(0);

  const increase = () => {
      setCount(count+1);
  } */

  return (
    <div className="App">

        <div className="main">
          <Grid container spacing={2}>
            <MainComponent></MainComponent>

            <Background></Background>

            <Information></Information>

            <Footer></Footer>
          </Grid>
        </div> 
    </div>
  )
} 


export default App;
