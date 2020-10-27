// Deck component houses triva cards (Card component) where 10 cards are chosen at random.

import React from "react";
import Card from './Card';
import data from '../data/data';

function Deck() {
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
                />
            ))}
        </div>
    );
};

export default Deck;