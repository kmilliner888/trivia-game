// Card component is a card with a trivia question and multiple choice answers

import React, { useState, useEffect } from "react";


const Card = props => {
    console.log('Card props', props);
    const [selection, setSelection] = useState();
    const [correctAnswers, setCorrectAnswers] = useState([]);

    useEffect(() => {
        if (selection === props.correct) {
            setCorrectAnswers([...correctAnswers, selection])
        };
    }, [])

    const onChange = e => {
        setSelection(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    // const showAnswer = (e) => {
    //     return e.target.value === props.correct ? `CORRECT! Answer is: ${props.correct}` : `INCORRECT. Answer is: ${props.correct}`
    // }



    return (
        <div className="card">
            <h1>{props.question}</h1>
            <form onSubmit={onSubmit} className="form">
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
                <button className="button">Submit Answer</button>
            </form>
            {selection === props.correct ? `CORRECT! Answer is: ${props.correct}` : `INCORRECT. Answer is: ${props.correct}`}
            <h3>{correctAnswers}</h3>
        </div>
    );
};

export default Card;