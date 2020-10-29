// Game component houses a deck (Deck component) of 10 random triva question cards per round,
// along with answer and score responses

/*eslint-disable-next-line no-unused-expressions*/

import React, { useState } from "react";
import Card from "./Card";
import data from '../data/data';
import { Link } from 'react-router-dom';



const Game = () => {
    //Create a shuffle function to randomize the questions in the data array
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        return array;
        };
    };

    // Shuffle the data array and set it to cardData state
    const [cardData, setCardData] = useState(shuffleArray(data));
    const [card, setCard] = useState(0);
    console.log('cardData', cardData);
    console.log('card', card);

    const handleCardOnClick = () => {
        setCard(prev => {
            if (prev === triviaRound.length-1) {
                return 0;
            } else {
                return prev + 1;
            }
        });
    };

    //Round consists of random 10 cards/objects from cardData array
    // Create triviaRound which is set to randomized data array
    // Limits number of cards to 10, then maps over the array
    // 10 Card components created for the triviaRound
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

    return (
        <div className="game">
            <div>
                {triviaRound[card]}
            </div>
            <button className="button" onClick={handleCardOnClick}>NEXT</button>
            <Link to='/'><button className="button">HOME</button></Link>
        </div>
    );
};

export default Game;