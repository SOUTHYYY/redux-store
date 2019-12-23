import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import { connect } from 'react-redux'

const Header = ({ numItems, total }) => {
    console.log(numItems)
    return (
        <div className='header'>
            <h3>SOUTHYYY MARKET</h3>
            <div>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/cart'>
                    <div className='shopping-cart'>
                        <i className='cart-icon fa fa-shopping-cart' />
                        {numItems.length} items (${total})
                    </div>
                </NavLink>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numItems: state.shoppingCart.cartItems
    }
}

export default connect(mapStateToProps, {})(Header)