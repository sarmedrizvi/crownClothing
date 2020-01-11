import React from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'
import './Checkout.styles.scss'
import { selectCartTotal, selectCartItems } from '../Redux/Cart/Cart.Selector';
import CheckoutCart from '../Checkout-Cart-Component/Checkout-Cart';
const CheckOutPage = ({ totalCost, cartItems }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>

        </div>
        {
            cartItems.map(item => (
                <CheckoutCart cartItem={item} />
            ))
        }
        <div className='total'>
            <span>Total ${totalCost}</span>
        </div>

    </div>
)

const mapStateToProp = createStructuredSelector({
    totalCost: selectCartTotal,
    cartItems: selectCartItems
})
export default connect(mapStateToProp)(CheckOutPage);