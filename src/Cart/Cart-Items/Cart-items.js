import React from 'react'
import './Cart-items.scss'
export const CartItems = ({ item: { imageUrl, price, quantity, name } }) => (

    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity}x ${price}</span>
        </div>
    </div>
)