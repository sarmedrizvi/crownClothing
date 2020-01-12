export const AddItemToCart = (cartItems, newCartItem) => {
    const bool = cartItems.find(
        item => item.id === newCartItem.id
    )

    if (bool) {
        return cartItems.map(item =>
            item.id === newCartItem.id ? { ...item, quantity: item.quantity + 1 }
                :
                item
        )
    }
    else {
        return [...cartItems, { ...newCartItem, quantity: 1 }]
    }
}

export const ClearItem = (cartItems, actionItem) => (
    cartItems.filter(item => item.id !== actionItem.id)
)

export const RemoveItemToCart = (cartItems, removeCartItem) => {
    const existingCartItem = cartItems.find(item => item.id === removeCartItem.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== removeCartItem.id)
    }

    return cartItems.map(item => (
        item.id === existingCartItem.id ?
            { ...item, quantity: item.quantity - 1 }
            :
            item
    ))
}