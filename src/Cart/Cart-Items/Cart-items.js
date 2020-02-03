import React from 'react'
import './Cart-items.scss'
export const CartItems = ({ item: { imageUrl, unitprice, quantity, productname,productid } }) => (

    <div className='cart-item'>
        <img src={`https://i.picsum.photos/id/${productid}/60/60.jpg`} alt='item' />
        <div className='item-details'>
            <span className='name'>{productname}</span>
            <span className='price'>{quantity}x ${unitprice}</span>
        </div>
    </div>
)