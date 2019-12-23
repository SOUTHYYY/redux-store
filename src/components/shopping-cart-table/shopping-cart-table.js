import React from 'react'
import './shopping-cart-table.css'
import { connect } from 'react-redux'
import { bookDeletedFromCart, bookAddedToCart, deletedOneBook} from '../../actions/index'

const ShoppingCartTable = ({ cartItems, orderTotal, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item
        return (<tr key={id}>
            <td>{idx + 1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>${total}</td>
            <td>
                <button
                    onClick={() => onIncrease(id)}
                    className="btn btn-outline-success btn-sm">
                    <i className="fa fa-plus-circle" />
                </button>
                <button
                    onClick={() => onDecrease(id)}
                    className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o" />
                </button>
                <button
                    onClick={() => onDelete(id)}
                    className="btn btn-outline-warning btn-sm">
                    <i className="fa fa-minus-circle" />
                </button>
            </td>
        </tr>)
    }
    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Ptice</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cartItems.map(renderRow)
                    }
                </tbody>
            </table>
            <div className='total'>
                Total: ${orderTotal}
            </div>
        </div>
    )
}
const mapStateToProps = ({shoppingCart: { cartItems, orderTotal }}) => {
    return { cartItems, orderTotal }
}
const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDelete: bookDeletedFromCart,
    onDecrease: deletedOneBook
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)