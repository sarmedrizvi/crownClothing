import React from 'react';
import './CardComponent.scss';
import { InputButton } from '../../signIn-signUp/SignIn/Input-Button/Button';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/Cart/Cart.Actions'

const CardComponent = ({ item,addItem }) => {
    const { productname,unitprice, imageUrl,productid } = item;

    return (
        <div className='CardPreview'>
            <div style={{ backgroundImage: `url(https://i.picsum.photos/id/${productid}/300/450.jpg)` }} className='Image' />

            <div className='titles'>
                <span className='name'>{productname}</span>
                <span className='price'>{unitprice}</span>
            </div>
            <InputButton onClick={()=> {addItem(item)}} inverted>ADD TO CART</InputButton>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => (dispatch(addItem(item)))
})
export default connect(null, mapDispatchToProps)(CardComponent)