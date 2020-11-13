import React from "react";
import { Route } from 'react-router-dom'
import {Pizza} from './Components/Pizza'
import {Home} from './Components/Home'

const App = () => {
 
 
 
 
 
 
  return (
    <>
      <Route path='/pizza'>
        <Pizza />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </>
  );
};
export default App;
