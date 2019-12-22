import React from 'react'
import './book-list-item.css'

const BookListItem = ({ book, onAddedToCart}) => {
    const { title, author, price, coverImage } = book
    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={coverImage} alt='book' />
            </div>
            <div className='book-details'>
                <span className='book-title' href='#'>{title}</span>
                <div className='book-author'>{author}</div>
                <div className='book-price'>${price}</div>
                <button
                    onClick={onAddedToCart}
                    className='bnt btn-info add-to-cart'>Add to cart</button>
            </div>
        </div>
    )
}

export default BookListItem
