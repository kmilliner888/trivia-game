import React from "react";
import Game from "./Game";
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div className="start">
            <div className="get-started-box">
                <h3 className="get-started-h3">How to play:</h3>
                <ul className="ul">
                        <li className="li">Each trivia round includes 10 questions with multiple choice answers.</li>
                        <li className="li">Click <span id="play-span">PLAY GAME</span> button below to begin trivia round.</li>
                        <li className="li">Read question, then selection your answer from the list of multiple choices</li>
                        <li className="li">Click <span id="submit-span">SUBMIT</span>, and see if your choice was correct or incorrect!</li>
                        <li className="li">Click <span id="next-span">NEXT {"\u2192"}</span> button to move on to the next question.</li>
                        <li className="li">After last question in the round, click <span id="score-span">GET SCORE</span> button to see # of correct questions answered.</li>
                        <li className="li">Click <span id="again-span">PLAY AGAIN</span> button to play another round of trivia.</li>
                </ul>
            </div>
            <div className="start-button-box">
                    <Link to='/game'><button className="button start-blink" id="start-button">PLAY GAME</button></Link>
            </div>
        </div>
    );
};


export default Start;