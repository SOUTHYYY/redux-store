const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }
    if (idx === -1) {
        return [...cartItems, item]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}
const updateCartItem = (item = {}, book, quantiny) => {
    const { id = book.id,
        title = book.title,
        count = 0,
        total = 0 } = item
    return {
        id,
        title,
        count: count + quantiny,
        total: total + quantiny * book.price
    }
}

const updateOrder = (state, bookId, quantiny) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state
    const book = books.find(({ id }) => id === bookId)
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId)
    const item = cartItems[itemIndex]
    let newItem = updateCartItem(item, book, quantiny)
    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
}

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)
        case 'DELETE_ONE_BOOK':
            return updateOrder(state, action.payload, -1)
        case 'BOOK_DELETED_FROM_CART':
            const bookId = action.payload
            const newArr = state.shoppingCart.cartItems.filter(item => item.id !== bookId)
            return {
                ...state,
                cartItems: newArr
            }
        default:
            return state.shoppingCart
    }
}


export default updateShoppingCart