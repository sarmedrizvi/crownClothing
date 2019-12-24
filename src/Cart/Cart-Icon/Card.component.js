import React from 'react';
import { ReactComponent as CardLogo } from '../../assets/Cart.Ico.svg'
import './Card.style.scss'
import { connect } from 'react-redux'

//import CardDropDown from '../Cart/Cart.dropdown'
 import toggleCartHidden from '../../Redux/Cart/Cart.Actions'
const CartLogo = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <CardLogo className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)
const mapDispatchToProp = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}
)
export default connect(null,mapDispatchToProp)(CartLogo);