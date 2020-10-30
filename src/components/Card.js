/* Card component is a card with a trivia question,
multiple choice answers, submit button, and shows answer result */

import React, { useState, useEffect } from "react";


// CREATE A QUESTION CARD, USING PROPS (data) FROM THE GAME COMPONENT
const Card = (props) => {
    console.log('Card props', props);
    console.log('collectCorrect', props.collectCorrect);
    // Collect the input selection here
    const [selection, setSelection] = useState([]);
    // If the input choice is correct, correct selection collected here
    const [correctAnswer, setCorrectAnswer] = useState([]);
    // When submit button is clicked, boolean is updated here to show answer
    const [showResults, setShowResults] = useState(false)
    // When submit button is clicked, boolean is updated to disable all inputs so answer can only be submitted once
    const [submit, setSubmit] = useState(false);

    console.log('selection', selection);
    console.log('correctAnswer', correctAnswer);

    // Selection state gets updated when input is clicked
    const onChange = e => {
        setSelection(e.target.value);
    }
    // On submit: prevents page from re-loading and updates submit state to true
    const onSubmit = e => {
        e.preventDefault();
        setSubmit(true);
    };
    console.log("submit", submit);

    // USEEFFECT WILL TRACK CHANGES AND MAKE SURE WE DON'T KEEP RE-RENDERING
    // If the input selection is the correct answer, add selection to the correctAnswer state
    useEffect(() => {
        if (submit === true && selection === props.correct) {
            props.collectCorrect(correctAnswer);
        };
    }, [submit, selection]);
    // function for submit button onClick: updates showResult state to true, and shows Results
    const onClick = ()=> {
        setShowResults(true)
        return (
            <div>
                {showResults ? <Results /> : null}
            </div>
        )
    }
    // Results will display the selected answer
    const Results = () => (
        <div>
            {selection === props.correct ? `CORRECT! Answer is: ${props.correct}` : `INCORRECT. Answer is: ${props.correct}`}
        </div>
    );


    // USE A FORM, LABELS, AND INPUTS TO DISPLAY QUESTION AND ANSWER CHOICES
    // Use onClick() for submit button
    // There are 4 choices for each question in the array, so value displays each answer choice by index
    // Each selection is an answer from the array, and thus gets checked upon clicking
    // All inputs get disabled if the submit state becomes true
    return (
        <div className="card">
            <h1>{props.question}</h1>
            <form className="question" onSubmit={onSubmit}>
                <label>
                    <input
                    type="radio"
                    value={props.answers[0]}
                    name="answer"
                    className="input"
                    checked={selection === props.answers[0]}
                    disabled={submit === true ? true : false}
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
                    disabled={submit === true ? true : false}
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
                    disabled={submit === true ? true : false}
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
                    disabled={submit === true ? true : false}
                    onChange={onChange}
                    />
                {props.answers[3]}
                </label>
                <button className="button" type="submit" id="submit" onClick={onClick}>SUBMIT</button>
            </form>
            <div>
                {showResults ? <Results /> : null}
            </div>
        </div>
    );
};

export default Card;