import './Cart.dropdown.style.scss';
import React from 'react'
import { InputButton } from '../signIn-signUp/SignIn/Input-Button/Button'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { CartItems } from './Cart-Items/Cart-items';
import { selectCartItems } from '../Redux/Cart/Cart.Selector';
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../Redux/Cart/Cart.Actions';

const CartDropDown = ({ items, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {items.length ?
                items.map(item => <CartItems key={item.Productid} item={item}></CartItems>)
                :
                <span className='empty-cart'>Cart is Empty</span>
            }
        </div>
        <InputButton onClick={() => {
            history.push('/Checkout');
            dispatch(toggleCartHidden())
        }
        }
        >GO TO CHECKOUT</InputButton>
    </div>
)


const mapStateToProp = createStructuredSelector({
    items: selectCartItems
})
export default withRouter(connect(mapStateToProp)(CartDropDown));