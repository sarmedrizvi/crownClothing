import React from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'
import './Checkout.styles.scss'
import { selectCartTotal, selectCartItems } from '../Redux/Cart/Cart.Selector';
import CheckoutCart from '../Checkout-Cart-Component/Checkout-Cart';
import StripeCheckoutButton from '../Stripe-Button/Stripe-Button-Component'

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
            <span className='totalAlign'>Total</span>
            <span>{totalCost} Rs</span>
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp:01/20 - CVV:123
        </div>
        <StripeCheckoutButton price={totalCost} />
    </div>
)

const mapStateToProp = createStructuredSelector({
    totalCost: selectCartTotal,
    cartItems: selectCartItems
})
export default connect(mapStateToProp)(CheckOutPage);