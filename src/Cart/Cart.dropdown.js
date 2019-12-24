import './Cart.dropdown.style.scss';
import React from 'react'
import { InputButton } from '../signIn-signUp/SignIn/Input-Button/Button'
const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <InputButton>GO TO CHECKOUT</InputButton>
    </div>
)

export default CartDropDown;