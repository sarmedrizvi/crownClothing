import React from 'react';
import './App.css';
import { Homepage } from './Homepage/homepage'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import Shop from './Shop/Shop'
import Header from './Header/Header.js'
import { SignInsignUp } from './signIn-signUp/signIn-signUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { SetCurrentUser } from './Redux/User/User.Actions'
import CheckOutPage from './pages/Checkout.component';
class App extends React.Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { SetCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          SetCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

        })
      }
      else {
        SetCurrentUser(userAuth);

      }

    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} ></Route>
          <Route path='/shop' component={Shop}></Route>
          <Route exact path='/Checkout' component={CheckOutPage}></Route>
          <Route exact path='/SignIn' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInsignUp />)}></Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => (
  {
    currentUser: state.user.currentUser
  }
)
// const mapStateToProps=state=>({
//   currentUser:state.user.currentUser
// })
const mapDispatchToProps = dispatch => ({
  SetCurrentUser: user => dispatch(SetCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
