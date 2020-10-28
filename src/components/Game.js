// Game component houses a deck (Deck component) of 10 random triva question cards per round,
// along with answer and score responses

import React, { useState } from "react";
import Card from "./Card";
import data from '../data/data';
import { Link } from 'react-router-dom';



const Game = () => {
    let randomData = [data[Math.floor(Math.random()*data.length)]];

    const [cardData, setCardData] = useState(randomData);
    console.log('cardData', cardData);

    let numberOfCards = cardData.length;
    console.log('numberOfCards', numberOfCards);
    let maxNumberCards = 10;

    const clickCard = () => {
        while (numberOfCards <= maxNumberCards) {
            {cardData.map(item=> {
                <div className="card">
                    <Card
                    key={item.id}
                    id={item.id}
                    question={item.question}
                    answers={item.answers}
                    incorrect={item.incorrect}
                    correct={item.correct}
                    />
                </div>
            })};
        };
    };


    return (
        <div className="game">
            <div className="card">
                <Card
                key={cardData[0].id}
                id={cardData[0].id}
                question={cardData[0].question}
                answers={cardData[0].answers}
                incorrect={cardData[0].incorrect}
                correct={cardData[0].correct}
                />
            </div>
            <button className="button" onClick={clickCard}>NEXT</button>
            <Link to='/'><button className="button">HOME</button></Link>
        </div>
    );
};

export default Game;