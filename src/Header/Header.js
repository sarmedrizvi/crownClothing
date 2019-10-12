import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/crown.svg'
import './Header.scss';


export const Header=()=>(
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
    </div>
    </div>
)