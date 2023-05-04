import './Header.scss'
import logo from '../../../imgs/logo/pngimg.com - nike_PNG18.png'

import {
    Link, NavLink
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../App';
library.add(faCartShopping)

const Header = () => {
    const {dataCart,setDataCart} = useContext(AppContext)

    return (
        <div className="header">
            <div className="header__left">
                <NavLink to='/' className='header__left-link'>
                    <img src={logo} />
                    <p className='header__left-logo'>Nike</p>
                </NavLink>
            </div>
            <div className="header__right">
                <ul className='header__right-list'>
                    <li className='header__right-item'><NavLink to="/" activeClassName="active" exact={true}>HOME</NavLink></li>
                    <li className='header__right-item'><NavLink to="/about">ABOUT</NavLink></li>
                    <li className='header__right-item'><NavLink to="/bill">BILLS</NavLink></li>
                </ul>
                <div className="header__right-cart">
                    <NavLink to="/cart" className='header__right-icon'>
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                    </NavLink>
                    <span className='header__right-qnt'>{dataCart.length}</span>
                </div>

            </div>

        </div>
    )
}
export default Header