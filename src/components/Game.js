// Game component houses a deck (Deck component) of 10 random triva question cards per round,
// along with answer and score responses

/*eslint-disable-next-line no-unused-expressions*/

import React, { useState, useEffect } from "react";
import Card from "./Card";
import data from '../data/data';
import { Link } from 'react-router-dom';

// Round consists of random 10 cards/objects from cardData array
// Create triviaRound which is set to randomized data array
// Limits number of cards to 10, then maps over the array
// 10 Card components created for the triviaRound

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

    /* This function allows Game component to get correct answer data back from the Card Component
    and put it into the setScore array so it can be totaled at the end */
    const collectAnswers = answer => {
        setScore([...score, answer]);
    };

    /* Creating a trivia round of random question cards from the Card component,
    with answers in randomized order */
    let triviaRound = cardData.map((card, i) => {
        if (card){
            shuffleArray(cardData[i].answers); //Shuffle the answers array
        }
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

    /*This function handles Next button, and shows next question/card
    as long as it's not the last question/card*/
    const handleCardOnClick = () => {
        setCard(prev => {
            if (prev === triviaRound.length-1) {
                return null;
            } else {
                return prev + 1;
            }
        });
    };

    /*This function handles Get Score button,
    and if there are no more questions in the round,
    the score  will be shown */
    const handleScoreOnClick = (i) => {
        if (card === null) {
            setShowTotal(true)
        }
        return (
            <div>
                {<Score />};
            </div>
        )
    };

    const Score = () => (
        <div>
            {`Your Score: ${score.length}`}
        </div>
    );

    const ScoreButton = () => (
        <div>
            {<button className="button" id="get-score" onClick={handleScoreOnClick}>GET SCORE</button>}
        </div>
    );

    const NextButton = () => (
        <div>
            {<button className="button next-blink" id="next" onClick={handleCardOnClick}>NEXT {"\u2192"}</button>}
        </div>
    )

    return (
        <div className ="game" data-testid="game" id="game">
            <div>
                {triviaRound[card]}
            </div>
            <div className="score">
                {showTotal? <Score /> : null}
            </div>
            <div className="button-box">
                <Link to='/'><button className="button" id="play-again">PLAY AGAIN</button></Link>
                {card === null ? <ScoreButton /> : null}
                {card === null ? null : <NextButton />}
            </div>
        </div>
    );
};

export default Game;