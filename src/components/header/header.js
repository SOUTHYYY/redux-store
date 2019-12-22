import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = ({ numItems, total }) => {
    return (
        <div className='header'>
            <h3>SOUTHYYY MARKET</h3>
            <div>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/cart'>
                    <div className='shopping-cart'>
                        <i className='cart-icon fa fa-shopping-cart' />
                        {numItems} items (${total})
                    </div>
                </NavLink>
            </div>

        </div>
    )
}

export default Header