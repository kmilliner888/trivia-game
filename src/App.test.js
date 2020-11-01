import { fireEvent, getByRole, getByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// DOES GAME COMPONENT RENDER TO THE SCREEN WHEN PLAY GAME BUTTON CLICKED?
describe('Play Game Button', () => {
    test('"Play Game" link points to Game component', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        const button = screen.getByRole('button', {name: /Play Game/i});
        userEvent.click(button);

        expect(
            screen.getByTestId('game')).toBeInTheDocument();

        screen.debug();
    });
});
//WHEN PLAY GAME BUTTON IS CLICKED, AN ARRAY OF 10 RANDOM CARDS/QUESTIONS IS CREATED THAT DO NOT REPEAT
//WHEN PLAY GAME BUTTON IS CLICKED, DOES ONLY 1 CARD/QUESTION OUT OF 10 DISPLAY AT A TIME
//WHEN CARD/QUESTION IS DISPLAYED, ALL 4 ANSWER INPUTS ARE ALSO DISPLAYED
//WHEN INPUT IS SELECTED, INPUT ATTRIBUTE 'CHECKED' IS TRUE
//ONLY ONE INPUT CAN BE SELECTED AT A TIME
//WHEN SUBMIT ANSWER BUTTON IS CLICKED, ALL INPUTS ON CARD ARE DISABLED
//WHEN SUBMIT ANSWER BUTTON IS CLICKED AND INPUT IS CORRECT ANSWER, `CORRECT! ANSWER IS: ${PROPS.CORRECT}` IS DISPLAYED
//WHEN SUBMIT ANSWER BUTTON IS CLICKED AND INPUT IS INCORRECT ANSWER, `INCORRECT. ANSWER IS: ${PROPS.INCORRECT}` IS DISPLAYED
//WHEN NEXT BUTTON IS CLICKED, NEXT CARD IN ARRAY IS DISPLAYED
//WHEN NEXT BUTTON IS CLICKED ON LAST CARD OF THE ARRAY, GET SCORE BUTTON IS DISPLAYED
//WHEN GET SCORE BUTTON IS CLICKED, SCORE IS DISPLAYED
