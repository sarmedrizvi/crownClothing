export const AddItemToCart = (cartItems, newCartItem) => {
    const bool = cartItems.find(
        item => item.productid === newCartItem.productid
    )

    if (bool) {
        return cartItems.map(item =>
            item.productid === newCartItem.productid ? { ...item, quantity: item.quantity + 1 }
                :
                item
        )
    }
    else {
        return [...cartItems, { ...newCartItem, quantity: 1 }]
    }
}

export const ClearItem = (cartItems, actionItem) => (
    cartItems.filter(item => item.productid !== actionItem.productid)
)

export const RemoveItemToCart = (cartItems, removeCartItem) => {
    const existingCartItem = cartItems.find(item => item.productid === removeCartItem.productid)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.productid !== removeCartItem.productid)
    }

    return cartItems.map(item => (
        item.productid === existingCartItem.productid?
            { ...item, quantity: item.quantity - 1 }
            :
            item
    ))
}