import React from 'react';
import './App.css';
import { Homepage } from './Homepage/homepage'
import { Route, Switch } from 'react-router-dom'
import Shop from './Shop/Shop'
import { Header } from './Header/Header'
import { SignInsignUp } from './signIn-signUp/signIn-signUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser:
              {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
          )


        })

      }
      else {
        this.setState({ currentUser: userAuth });

      }

    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('componentwillunmount');
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
