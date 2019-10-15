import React from 'react';
import './App.css';
import { Homepage } from './Homepage/homepage'
import { Route, Switch } from 'react-router-dom'
import Shop from './Shop/Shop'
import { Header } from './Header/Header'
import { SignInsignUp } from './signIn-signUp/signIn-signUp'
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

    });

  }

  componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render() {

  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact component={Homepage} path='/'></Route>
        <Route exact component={Shop} path='/Shop'></Route>
        <Route exact component={SignInsignUp} path='/SignIn'></Route>
      </Switch>
    </div>
  );
}
}

export default App;
