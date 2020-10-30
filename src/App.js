// App is start page for game, includes title, instructions, PLAY GAME button
import React from 'react';
import './App.css';
import Start from './components/Start';
import Game from './components/Game';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <header className="header">
          <h1 className="header-h1">Trivia Time</h1>
          <h2 className="header-h2">Train to improve your trivia knowledge by answering random questions!</h2>
      </header>
      <Route exact path='/' component ={Start}/>
      <Route path='/game' component={Game}/>
    </div>
  );
};

export default App;
