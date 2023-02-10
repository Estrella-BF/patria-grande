import React, { useRef } from "react";
import './Main.scss';
import { Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

const MainComponent = () => { 
    const musicRef = useRef<HTMLAudioElement>(null);
    
    return (
        <Grid item xs={12} md={5}>

            <div className="band-info">
            <div className="band-info__header-name">
                LADO A
            </div>
            <div className="band-info__audio">
  
                <AudioPlayer></AudioPlayer>

            </div>

            <div className="band-info__social-network">
                <a href="https://www.facebook.com/profile.php?id=100083175592342&mibextid=ZbWKwL" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} />  
                </a>

                <a href="https://www.tiktok.com/@patriagrandebanda" target="_blank">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
        
                <a href="https://www.youtube.com/@patriagrandebanda" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
        
            </div>
        </Grid>
    )
}
 
export default MainComponent;