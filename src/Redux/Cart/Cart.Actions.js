import CartTypes from './Cart.types'

export const toggleCartHidden = () => ({
    type: CartTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartTypes.ADD_ITEM,
    payload: item,
})

export const clearItem = (item) => ({
    type: CartTypes.CLEAR_ITEM,
    payload: item,
})

export const removeItem = (item) => ({
    type: CartTypes.REMOVE_ITEM,
    payload: item,
})

export const changeAllItems = (item) => ({
    type: CartTypes.CHANGE_ALL_ITEMS,
    payload: item,
})





