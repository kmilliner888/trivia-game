// Deck component houses triva cards (Card component) where 10 cards are chosen at random.

import React from "react";
import Card from './Card';

function Deck() {
    return (
        <div className="deck">
            THIS IS THE DECK
            <Card />
        </div>
    );
};

export default Deck;