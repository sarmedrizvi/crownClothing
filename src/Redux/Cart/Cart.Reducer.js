import CartTypes from './Cart.types'
import { AddItemToCart, ClearItem, RemoveItemToCart } from './Cart.Utils'


const INTIAL_STATE = {
    hidden: true,
    cartItems:[]
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
        case CartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: RemoveItemToCart(state.cartItems, action.payload)
            }
        case CartTypes.CHANGE_ALL_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            }
        default:
            return state;

    }
}

export default CartReducer;