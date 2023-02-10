import { useRef } from 'react';
import './AudioPlayer.scss';

import mp3 from '../../music/mp3-demo.mp3';
import disk from '../../images/disk.png';
import diskArm from '../../images/disk-arm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faPlay } from '@fortawesome/free-solid-svg-icons';



const AudioPlayer = () => {

    const musicRef = useRef<HTMLAudioElement>(null);
    var myaudio = new Audio(mp3);
/*     document.body.addEventListener("mousemove", function () {
        myaudio.play()
    }) */
    
    return (
        <div className="audioPlayer">
            <div className="audioPlayer__disk">
                <div className="audioPlayer__disk--arm-img">
                    <img src={diskArm}></img>
                </div> 
                <div className="audioPlayer__disk--img">
                    <img src={disk} alt="" />

    
                {/*      <audio id="myAudio" controls autoPlay>
                <source src={mp3} type="audio/mp3" ></source>
                Your browser does not support the audio element.
                </audio> */}


                </div>
            </div>
          



            <div className="audioPlayer__buttons">

                <div className="audioPlayer__buttons--left">
                    <FontAwesomeIcon icon={faCaretLeft} /> 
                    <FontAwesomeIcon icon={faCaretLeft} />
                </div>

                <div className="audioPlayer__button--play">
                    <FontAwesomeIcon icon={faPlay} />
                </div>

                <div className="audioPlayer__buttons--right">
                    <FontAwesomeIcon icon={faCaretRight} /> 
                    <FontAwesomeIcon icon={faCaretRight} />
                </div>


                </div>



         {/*        <div className="audioPlayer__buttons">
         
                    <div className="audioPlayer__buttons--left">
                        <FontAwesomeIcon icon={faCaretLeft} /> 
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </div>

                    <div className="audioPlayer__button--play">
                        <FontAwesomeIcon icon={faPlay} />
                    </div>

                    <div className="audioPlayer__buttons--right">
                        <FontAwesomeIcon icon={faCaretRight} /> 
                        <FontAwesomeIcon icon={faCaretRight} />
                    </div>


                </div> */}

                <ul>
              

                  {/* <audio ref={musicRef} src={mp3} controls ></audio>  */}
        
                </ul>


        </div>
    )
}

export default AudioPlayer;