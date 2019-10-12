import React from 'react';
import './App.css';
import {Homepage} from './Homepage/homepage'
import {Route,Switch } from 'react-router-dom'
import Shop from './Shop/Shop'
import {Header} from './Header/Header'

function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact component={Homepage} path='/'></Route>
    <Route  exact component={Shop} path='/Shop'></Route>
    </Switch>
    </div>
  );
}

export default App;
