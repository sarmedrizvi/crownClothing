import React from 'react';
import './App.css';
import {Homepage} from './Homepage/homepage'
import {Route,Switch } from 'react-router-dom'
import Shop from './Shop/Shop'

function App() {
  return (
    <Switch>
    <Route exact component={Homepage} path='/'></Route>
    <Route  exact component={Shop} path='/Shop'></Route>
    </Switch>
  );
}

export default App;
