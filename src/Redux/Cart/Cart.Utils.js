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