import React from 'react';
import './CardComponent.scss';
import { InputButton } from '../../signIn-signUp/SignIn/Input-Button/Button';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/Cart/Cart.Actions'

const CardComponent = ({ item,addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className='CardPreview'>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className='Image' />

            <div className='titles'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <InputButton onClick={()=> {addItem(item)}} inverted>ADD TO CART</InputButton>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => (dispatch(addItem(item)))
})
export default connect(null, mapDispatchToProps)(CardComponent)