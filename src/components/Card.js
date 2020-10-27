// Card component is a card with a trivia question and multiple choice answers

import React, { useState, useEffect } from "react";

// CREATE A QUESTION CARD, USING PROPS (data) FROM THE DECK COMPONENT
const Card = props => {
    console.log('Card props', props);
    // HERE IS WHERE WE COLLECT OUR ANSWER CHOICE, AND CREATE AN ARRAY OF CORRECT ANSWERS
    const [selection, setSelection] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    console.log('selection', selection);
    console.log('correctAnswers', correctAnswers);
    // USEEFFECT WILL TRACK CHANGES AND MAKE SURE WE DON'T KEEP RE-RENDERING
    useEffect(() => {
        if (selection === props.correct) {
            setCorrectAnswers([...correctAnswers, selection])
        };
    }, [selection])

    props.getData(correctAnswers);

    const onChange = e => {
        setSelection(e.target.value);
    }

    // props.setCardData(correctAnswers);
    // THIS FUNCTION WILL RANDOMIZE OUR ANSWER CHOICES SO THEY WILL NOT ALWAYS APPEAR IN THE SAME ORDER
    // function shuffle(array) {
    //     var currentIndex = array.length, temporaryValue, randomIndex;

    //     // While we still have items in the array or it's not 0 items
    //     while (0 !== currentIndex) {

    //       // We select one of the items that is left or have not been used yet
    //       randomIndex = Math.floor(Math.random() * currentIndex); //This randomizes
    //       currentIndex -= 1;

    //       // Then we switch it with the current one
    //       temporaryValue = array[currentIndex];
    //       array[currentIndex] = array[randomIndex];
    //       array[randomIndex] = temporaryValue;
    //     }

    //     return array;
    //   };

    //   shuffle(props.answers);

    //   function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }

    // shuffleArray(props.answers);

    // const showAnswer = (e) => {
    //     return e.target.value === props.correct ? `CORRECT! Answer is: ${props.correct}` : `INCORRECT. Answer is: ${props.correct}`
    // }



    return (
        <div className="card">
            <h1>{props.question}</h1>
            <div className="question">
                <label>
                    <input
                    type="radio"
                    value={props.answers[0]}
                    name="answer"
                    className="input"
                    checked={selection === props.answers[0]}
                    onChange={onChange}
                    />
                {props.answers[0]}
                </label>
                <label>
                    <input
                    type="radio"
                    value={props.answers[1]}
                    name="answer"
                    className="input"
                    checked={selection === props.answers[1]}
                    onChange={onChange}
                    />
                {props.answers[1]}
                </label>
                <label>
                    <input
                    type="radio"
                    value={props.answers[2]}
                    name="answer"
                    className="input"
                    checked={selection === props.answers[2]}
                    onChange={onChange}
                    />
                {props.answers[2]}
                </label>
                <label>
                    <input
                    type="radio"
                    value={props.answers[3]}
                    name="answer"
                    className="input"
                    checked={selection === props.answers[3]}
                    onChange={onChange}
                    />
                {props.answers[3]}
                </label>
            </div>
            {selection === props.correct ? `CORRECT! Answer is: ${props.correct}` : `INCORRECT. Answer is: ${props.correct}`}


        </div>
    );
};

export default Card;