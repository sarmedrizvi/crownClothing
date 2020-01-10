import React from 'react';
import { ReactComponent as CardLogo } from '../../assets/Cart.Ico.svg'
import './Card.style.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../Redux/Cart/Cart.Actions'
import { selectCartItemsCount } from '../../Redux/Cart/Cart.Selector';
const CartLogo = ({ toggleCartHidden,cartItemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <CardLogo className='shopping-icon' />
        <span className='item-count'>{cartItemCount}</span>
    </div>
)
const mapDispatchToProp = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}
)

const mapStateToProp = state => ({
    cartItemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProp, mapDispatchToProp)(CartLogo);