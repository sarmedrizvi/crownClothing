import React from 'react'
import './Checkout-Cart.scss'
import { connect } from 'react-redux'
import { clearItem, addItem, removeItem } from '../Redux/Cart/Cart.Actions';
const CheckoutCart = ({ cartItem, clearItem, removeItem, addItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span className='arrow' onClick={() => removeItem(cartItem)}>&#10096;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={() => addItem(cartItem)}>&#10097;</span>
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10008;</div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutCart);