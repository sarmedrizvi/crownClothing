import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assets/crown.svg'
import { auth } from '../firebase/firebase.utils'
import './Header.scss';
import CartLogo from '../Cart/Cart-Icon/Card.component'
import CardDropDown from '../Cart/Cart.dropdown'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../Redux/User/User.Selector'
import { selectCartHidden } from '../Redux/Cart/Cart.Selector';
import { SetCurrentUser } from '../Redux/User/User.Actions';
import { changeAllItems } from '../Redux/Cart/Cart.Actions';
// import SliderDrawer from './Slider/Slider-Drawer';

const Header = ({ currentUser, hidden, dispatch }) => (

    <div className="Header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>

        <div className='options '>

            {currentUser.id ?
                (<div className='option-signout'>

                    <div onClick={() => { dispatch(SetCurrentUser({})); }} className='option'>
                        SignOut
                     </div>

                </div>)
                : (<div className='option-signout'>


                    <Link to='/signin' className='option'>
                        SignIn
                    </Link>

                </div>)

            }
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <CartLogo />
        </div>
        {hidden ? null : <CardDropDown />}
    </div>
);

const mapStateToProp = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProp)(Header);