import React from "react";
import { Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

class MainComponent extends React.Component{

    render(){
        return (
            <Grid item xs={12} md={5}>
                <div className="band-info">
                <div className="band-info__header-name">
                    LADO A
                </div>
                <div className="band-info__audio">
                    <div className="band-info__audio--title">
                    "Asesinos"
                    </div>
                    <audio id="myAudio" controls autoPlay>
                    <source src={require('../../music/Estigma - Patria Grande.mp3')} type="audio/mp3" ></source>
                    Your browser does not support the audio element.
                    </audio>

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
        )
    }
}
 
export default MainComponent;