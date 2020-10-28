// Game component houses a deck (Deck component) of 10 random triva question cards per round,
// along with answer and score responses

import React, { useState } from "react";
import Card from "./Card";
import data from '../data/data';
import { Link } from 'react-router-dom';



const Game = () => {
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        return array;
        };
    };

    const [cardData, setCardData] = useState(shuffleArray(data));
    console.log('cardData', cardData);

    //Round consists of random 10 cards/objects from data array
    let triviaRound = cardData.slice(0,10).map((card) => {
        return <Card
        key={card.id}
        id={card.id}
        question={card.question}
        answers={card.answers}
        incorrect={card.incorrect}
        correct={card.correct}
        />
    });

    console.log('triviaRound', triviaRound);

    return (
        <div className="game">
            {triviaRound}
            <button className="button">NEXT</button>
            <Link to='/'><button className="button">HOME</button></Link>
        </div>
    );
};

export default Game;