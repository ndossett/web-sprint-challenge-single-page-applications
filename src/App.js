import React from "react";
import './App.css';
import Form from './Pizza'

const App = () => {
  return (
    <>
    <header className="App-header">
      <div>
        <h1>Lambda Eats</h1>
      </div>
      <nav>
        <ul>
          <a href='/'>Home</a>
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
    </>
  );
};
export default App;
