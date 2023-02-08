import React from "react";
import './Main.css';
import { Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

const MainComponent = () => { 

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

                <AudioPlayer></AudioPlayer>
        {/*         <audio id="myAudio" controls autoPlay>
                <source src={require('../../music/Estigma - Patria Grande.mp3')} type="audio/mp3" ></source>
                Your browser does not support the audio element.
                </audio>
 */}
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
 
export default MainComponent;