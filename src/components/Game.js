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
    const [cardData, setCardData] = useState(shuffleArray(data).slice(0,10));
    const [card, setCard] = useState(0);
    const [score, setScore] = useState([]);
    const [showTotal, setShowTotal] = useState(false);
    console.log('cardData', cardData);
    console.log('card', card);
    console.log('score', score);

    const collectAnswers = answer => {
        setScore([...score, answer]);
    };

    let triviaRound = cardData.map((card) => {
        return <Card
        key={card.id}
        id={card.id}
        question={card.question}
        answers={card.answers}
        incorrect={card.incorrect}
        correct={card.correct}
        collectCorrect = {collectAnswers}
        />
    });


    const handleCardOnClick = () => {
        setCard(prev => {
            if (prev === triviaRound.length-1) {
                return null;
            } else {
                return prev + 1;
            }
        });
    };

    const handleScoreOnClick = (i) => {
        if (card === null) {
            console.log('triviaRound current', triviaRound);
            setShowTotal(true)
        }
        return (
            <div>
                {<Score />}
            </div>
        )
    };

    // Score will display the total round score
    const Score = () => (
        <div>
            {`Your Score: ${score.length}`}
        </div>
    )

    //Round consists of random 10 cards/objects from cardData array
    // Create triviaRound which is set to randomized data array
    // Limits number of cards to 10, then maps over the array
    // 10 Card components created for the triviaRound
    console.log('triviaRound', triviaRound);

    return (
        <div className="game">
            <div>
                {triviaRound[card]}
            </div>
            <div className="score">
            {showTotal? <Score /> : null}
            </div>
            <button className="button" onClick={handleCardOnClick}>NEXT</button>
            <Link to='/'><button className="button">HOME</button></Link>
            <button className="button" onClick={handleScoreOnClick}>Get Score</button>
        </div>
    );
};

export default Game;