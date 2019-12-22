import updateBookList from './bookList'
import updateShoppingCart from './shoppingCart'

const reduser = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

export default reduser