import React, { useEffect } from 'react'
import BookList from '../book-list/book-list'
import WithBookstoreService from '../hoc/with-bookstore-service'
import { connect } from 'react-redux'
import { fetchBooks, bookAddedToCart, bookDeletedFromCart } from '../../actions'
import { compose } from 'redux'
import Preloader from '../preloader/preloader'
import './book-list.css'
import ErrorIndicator from '../error-indicator/error-indicator'

const BookListContainer = ({ fetchBooks, onAddedToCart, ...props }) => {
    const { books, loading, error } = props

    useEffect(() => {
        fetchBooks()
    }, [])


    if (loading) {
        return <Preloader />
    }
    if (error) {
        return <ErrorIndicator />
    }
    return (
        <div>
            <BookList
                books={books}
                onAddedToCart={onAddedToCart} />
        </div>
    )
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)