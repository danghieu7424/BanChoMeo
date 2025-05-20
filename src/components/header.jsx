import React from 'react';
import {Link} from 'react-router-dom';

import "../access/css/header.scss";

export default function Header() {
    return (
        <header>
            <div className='header-logo'></div>
            <div className='header-nav'>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='header-user'></div>
        </header>
    )
}