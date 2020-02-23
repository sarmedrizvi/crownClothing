import React from 'react';
import './App.css';
import { Homepage } from './Homepage/homepage'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import Shop from './Shop/Shop'

import { SignInsignUp } from './signIn-signUp/signIn-signUp'
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { SetCurrentUser } from './Redux/User/User.Actions'
// import CheckOutPage from './pages/Checkout.component';
import SliderDrawer from './Header/Slider/Slider-Drawer';
import { ShopAction } from './Redux/Shop/Shop.Action';
import UserOrders from './pages/User.Orders/User-Order';
import { CheckoutMain } from './pages/Checkout-Main/Checkout.Main';
import { Footer } from './Footer/Footer';
import { OrderCompleted } from './pages/Order-Completed/OrderCompleted';

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;
  componentDidMount() {
    fetch('http://localhost:3000/categoriesProduct')
      .then(res => res.json())
      .then(data => { this.props.addItem(data); })

    // const { SetCurrentUser } = this.props;
    // this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       console.log(snapShot)
    //       SetCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })

    //     })
    //   }
    //   else {
    //     SetCurrentUser(userAuth);

    //   }

    // });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  // render={() => this.props.currentUser.id ? <Homepage /> : <Redirect to='/SignIn' />}
  render() {
    return (
      <div>
        <SliderDrawer />
        <div className='last'>
          <Switch>
            <Route exact path='/' component={Homepage}  ></Route>
            <Route path='/shop' component={Shop}></Route>
            <Route path='/Checkout' component={CheckoutMain}></Route>
            <Route exact path='/userOrders' component={UserOrders}></Route>
            <Route exact path='/SignIn' render={() => this.props.currentUser.id ? (<Redirect to='/' />) : (<SignInsignUp />)}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => (
  {
    currentUser: state.user.currentUser
  }
)

const mapDispatchToProps = dispatch => ({
  SetCurrentUser: user => dispatch(SetCurrentUser(user)),
  addItem: item => (dispatch(ShopAction(item)))

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
