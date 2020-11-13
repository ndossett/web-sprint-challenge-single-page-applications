import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'


export const Home = () => {
    return (
      <div className='container'>
        <header className="App-header">
          <div>
            <h1>Lambda Eats</h1>
          </div>
        </header>
        <div className='App-eats'>
          <h2>Your favorite food, delivered while coding</h2>
        </div>
        <Link className='App-link' to='/pizza'>Order Pizza</Link>
      </div>
        
    );
  };


  