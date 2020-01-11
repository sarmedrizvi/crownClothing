import CartTypes from './Cart.types'
import { AddItemToCart, ClearItem } from './Cart.Utils'


const INTIAL_STATE = {
    hidden: true,
    cartItems: []
}
const CartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload)
            }
        case CartTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: ClearItem(state.cartItems, action.payload)
            }

        default:
            return state;

    }
}

export default CartReducer;