// App is start page for game, includes title, instructions, PLAY GAME button
import React from 'react';
import './App.css';
import emoji from './img/1F914_black.png';
import Start from './components/Start';
import Game from './components/Game';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app" data-testid="app" id="app">
      <header className="header">
          <div>
            <img src={emoji} alt="thinking emoji" id="logo"/>
          </div>
          <div>
            <h1 className="header-h1">Trivia Time</h1>
            <h2 className="header-h2">Train to improve your trivia knowledge by <br></br> answering random questions!</h2>
          </div>
      </header>
      <Route exact path='/' component ={Start}/>
      <Route path='/game' component={Game}/>
    </div>
  );
};

export default App;
