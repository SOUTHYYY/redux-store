
const booksRequested = () => ({ type: 'FETCH_BOOKS_REQUEST' })
const booksLoaded = (newBooks) => ({ type: 'FETCH_BOOKS_SUCCES', newBooks })
const booksError = (error) => ({ type: 'FETCH_BOOKS_FAILURE', payload: error })
export const bookAddedToCart = (bookId) => ({ type: 'BOOK_ADDED_TO_CART', payload: bookId })
export const bookDeletedFromCart = (id) => ({ type: 'BOOK_DELETED_FROM_CART', payload: id })
export const deletedOneBook = (id) => ({type: 'DELETE_ONE_BOOK', payload: id})

export const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => dispatch(booksError(err)))
}