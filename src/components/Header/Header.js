import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div>
            <nav>
                <a href="/home">
                    <img src={logo} alt="" />
                </a>

                <div>
                    <a href="/order">Order</a>
                    <a href="/order">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;