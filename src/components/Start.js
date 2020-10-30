import React from "react";
import Game from "./Game";
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div className="start">
            <h3 className="get-started-h3">How to play:</h3>
                <ul className="ul">
                    <li className="li">Each trivia round includes 10 questions with multiple choice answers.</li>
                    <li className="li">Click PLAY GAME button to begin trivia round.</li>
                    <li className="li">Read question, then selection your answer from the list of multiple choices</li>
                    <li className="li">Click NEXT QUESTION button to move on to the next question.</li>
                    <li className="li">After last question in the round, click GET SCORE button to see # of correct questions answered.</li>
                    <li className="li">Click PLAY GAME button to play another round of trivia, or QUIT button to return to start screen.</li>
                </ul>
            <Link to='/game'><button className="button" id="start-button">PLAY GAME</button></Link>
        </div>
    );
};


export default Start;