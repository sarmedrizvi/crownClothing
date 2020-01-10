import './Cart.dropdown.style.scss';
import React from 'react'
import { InputButton } from '../signIn-signUp/SignIn/Input-Button/Button'
import { connect } from 'react-redux';
import { CartItems } from './Cart-Items/Cart-items';
import { selectCartItems } from '../Redux/Cart/Cart.Selector';
const CartDropDown = ({ items }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {items.map(item => <CartItems key={item.id} item={item}></CartItems>)}
        </div>
        <InputButton>GO TO CHECKOUT</InputButton>
    </div>
)


const mapStateToProp = (state) => ({
    items: selectCartItems(state)
})
export default connect(mapStateToProp)(CartDropDown);