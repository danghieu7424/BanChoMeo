import React from 'react';
import {Link} from 'react-router-dom';

import "../access/css/header.scss";

export default function Header() {
    return (
        <header>
            <div className='header-logo'></div>
            <div className='header-nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Product">Product</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='header-user'></div>
        </header>
    )
}