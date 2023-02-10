import { useRef, useState } from 'react';
import './AudioPlayer.scss';

import inolvidableTrack from '../../music/Inolvidable - Patria Grande.mpeg';
import estigmaTrack from '../../music/Estigma - Patria Grande.mp3';
import disk from '../../images/disk.png';
import diskArm from '../../images/disk-arm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLinesVertical, faPlay, faStepBackward, faStepForward, faWallet } from '@fortawesome/free-solid-svg-icons';



const AudioPlayer = () => {
    const musicRef = useRef<HTMLAudioElement>(inolvidableTrack);
    var currentAudio = new Audio(inolvidableTrack);

    const [audioPosition, setAudioPosition] = useState(0);
/*     const myaudio = new Audio(mp3); */
    const [audio, setAudio] = useState( new Audio(inolvidableTrack) );
    const [showPlay, setShowPlay] = useState(true);


 /*    function toPlayMusic() {
        setShowPlay(!showPlay);
        showPlay ? audio.play(): audio.pause();
    }

 */

    return (
        <div className="audioPlayer">
            <div className="audioPlayer__disk">
                <div className="audioPlayer__disk--arm-img">
                    <img src={diskArm}></img>
                </div> 
                <div className="audioPlayer__disk--img">
                    <img src={disk} alt="" />
                </div>
            </div>

            <div className="audioPlayer__buttons">

                <div className="audioPlayer--title">
                    "Estigma - Patria Grande"
                </div>
                <audio src={estigmaTrack} controls ref={musicRef} autoPlay>
                    You're browser is Outdated . Please Update The Browser
                </audio>


            {/*     <div className="audioPlayer__buttons--right" onClick={toChangeMusic}>
                    <FontAwesomeIcon icon={faStepBackward} />
                </div> */}

         
       {/*          showPlay && 
                (<div className="audioPlayer__button--play"  onClick={toPlayMusic}>
                    <FontAwesomeIcon icon={faPlay} />
                </div>) */}

{/*                 {showPlay ? 
                (<div className="audioPlayer__button--play" onClick={toPlayMusic}>
                    <FontAwesomeIcon icon={faPlay} />
                </div>
                ) :
                (
                <div className="audioPlayer__button--stop" onClick={toPlayMusic}>
                    <FontAwesomeIcon icon={faGripLinesVertical} /> 
                </div>
                
                )
                } */}

              {/*   <div className="audioPlayer__buttons--left" onClick={toChangeMusic}>
                    <FontAwesomeIcon icon={faStepForward} /> 
                </div> */}

            </div>


        </div>
    )
}

export default AudioPlayer;