// Deck component houses triva cards (Card component) where 10 cards are chosen at random.

import React, { useState, useEffect } from "react";
import Card from './Card';
import data from '../data/data';

function Deck() {
    // const [cardData, setCardData] = useState([]);
    // console.log('cardData', cardData);
    // const [score, setScore] = useState([])

    // const Combine = (newAnswer) => {
    //     setScore(...cardData, newAnswer)
    // };
    let randomData = [data[Math.floor(Math.random()*data.length)]];

    const [cardData, setCardData] = useState(randomData);
    let numberOfCards = cardData.length;
    console.log('numberOfCards', numberOfCards);
    let maxNumberCards = 10;

    // const onNext = () => {
    //     while (numberOfCards <= maxNumberCards);

    // };

    // let count = data.length;

    // useEffect(()=> {
    //     const oneCardOnClick = () => {
    //         document.getElementById('card').innerHTML = data[count];
    //         count++;
    //         if (count < 0)
    //             count = data.length-1;
    //     };
    //     oneCardOnClick();
    // }, []);


    // For each correct answer on a card, add to cardData and total into a score


    // console.log('data', data);
    return (
        <div className="deck">

            {/* <button onClick={()=> {
                while (numberOfCards <= maxNumberCards);
                    {cardData.map(item => {
                        <div id="card">
                            <Card
                            key={item.id}
                            id={item.id}
                            question={item.question}
                            answers={item.answers}
                            incorrect={item.incorrect}
                            correct={item.correct}
                            />
                    </div>
                    })}
            }}>Question</button> */}

            {/* {data.map(item => (
                <div id="card">
                    <Card
                    key={item.id}
                    id={item.id}
                    question={item.question}
                    answers={item.answers}
                    incorrect={item.incorrect}
                    correct={item.correct}
                    // getData = {Combine}
                    />
                </div>
            ))} */}

            {/* <h3>{`Your Score: ${cardData.length}`}</h3> */}
            {/* <button className="button" onClick={() => {
                    data[count];
                    count++;
                    if (count < 0)
                        count = data.length;
                    return (
                        <div id="card">
                            <Card
                            key={randomData[0].id}
                            id={randomData[0].id}
                            question={randomData[0].question}
                            answers={randomData[0].answers}
                            incorrect={randomData[0].incorrect}
                            correct={randomData[0].correct}
                            />
                        </div>
                    )
                }}>
            Next Question
            </button> */}
        </div>
    );
};

export default Deck;