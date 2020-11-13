import React, {useState, useEffect} from "react";
import './App.css';
import Pizza from './Pizza.js'
import schema from './validation/pizzaSchema'

const App = () => {
  return (
    <div className='container'>
      <header className="App-header">
        <div>
          <h1>Lambda Eats</h1>
        </div>
        <nav>
          <ul>
            <a href='/.App.js'>Home</a>
            <a href='#'>Help</a>
          </ul>
        </nav>
      </header>
      <div className='App-eats'>
        <h2>Your favorite food, delivered while coding</h2>
        <button
          type='button'
          onClick={(evt) =>{
            evt.preventDefault()
            window.location.href='./Pizza.js'
          }}
          >Pizza?</button>
          </div>
          <Pizza details={Pizza} />
    </div>

      
  );
};
export default App;
