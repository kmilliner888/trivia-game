// Game component houses a deck (Deck component) of 10 random triva question cards per round,
// along with answer and score responses

import React from "react";
import Deck from "./Deck";
import { Link } from 'react-router-dom';

const Game = () => {
    return (
        <div className="game">
            THIS IS THE GAME
            <Deck />
            <Link to='/'><button className="button">HOME</button></Link>
        </div>
    );
};

export default Game;