import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'


export const Home = () => {
    return (
      <div className='container'>
        <header className="App-header">
        <h1>Lambda Eats</h1>
        <nav>
          <ul>
            <a href='/'>Home</a>
            <a href='#'>Help</a>
          </ul>
        </nav>
        </header>
        <div className='App-eats'>
          <h2>Your favorite food, delivered while coding</h2>
          <Link className='App-link' to='/pizza'>Order Pizza</Link>
        </div>
      </div>
        
    );
  };


  