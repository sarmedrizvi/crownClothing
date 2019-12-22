import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../assets/crown.svg'
import {auth} from '../firebase/firebase.utils'
import './Header.scss';


const Header=({currentUser})=>(
    <div className="Header">
    <Link className='logo-container' to="/">
        <Logo className='logo'/>
    </Link>
    <div className='options'>
    <Link className='option' to='./shop'>
        Shop
    </Link>
    <Link className='option'>
        Cart
    </Link>
    <Link className='option'>
        Contact
    </Link>
    {currentUser ? 
    (<div onClick={()=>auth.signOut()} className='option'>
        Sign Out
    </div>)
    :
    <Link to='/signin' className='option'>
        Sign In
    </Link>

    }
    </div>
    </div>
);
const mapStateToProp=state=>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProp)(Header);