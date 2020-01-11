import React from 'react'
import './Checkout-Cart.scss'
import { connect } from 'react-redux'
import { clearItem } from '../Redux/Cart/Cart.Actions';
const CheckoutCart = ({ cartItem, clearItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10008;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutCart);