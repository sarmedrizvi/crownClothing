import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assets/crown.svg'
import { auth } from '../firebase/firebase.utils'
import './Header.scss';
import CartLogo from '../Cart/Cart-Icon/Card.component'
 import CardDropDown from '../Cart/Cart.dropdown'
// import CartReducer from '../Redux/Cart/Cart.Reducer'


const Header = ({ currentUser, hidden }) => (
    <div className="Header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='./shop'>
                Shop
            </Link>

            <Link className='option'>
                Contact
            </Link>
            {currentUser ?
                (<div onClick={() => auth.signOut()} className='option'>
                    Sign Out
                </div>)
                : (
                    <Link to='/signin' className='option'>
                        Sign In
                    </Link>)

            }
            <CartLogo />
        </div>
         { hidden ? null : <CardDropDown/> } 
    </div>
);

const mapStateToProp = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProp)(Header);