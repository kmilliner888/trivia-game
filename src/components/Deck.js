// Deck component houses triva cards (Card component) where 10 cards are chosen at random.

import React, { useState } from "react";
import Card from './Card';
import data from '../data/data';

function Deck() {
    const [cardData, setCardData] = useState([]);
    console.log('cardData', cardData);

    let collectAnswers = newAnswers => {
        setCardData(...[cardData], newAnswers)
    };

    console.log('data', data);
    return (
        <div className="deck">
            {data.map(item => (
                <Card
                key={item.id}
                id={item.id}
                question={item.question}
                answers={item.answers}
                incorrect={item.incorrect}
                correct={item.correct}
                getData = {setCardData}
                />
            ))}
            <h3>{`Your Score: ${cardData.length}`}</h3>
        </div>
    );
};

export default Deck;