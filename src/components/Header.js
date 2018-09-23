import React from 'react';
import { NavLink } from 'react-router-dom';

const Header  = () => ( 
    <header className='main-header'>
        <span className="main-header__close">Close</span>
        <nav className="main-header__nav">
            <NavLink to='/' className='main-header__nav-link' activeClassName = 'main-header__nav-link--active'>Frank</NavLink>
            <NavLink to='/add-target' className='main-header__nav-link' activeClassName = 'main-header__nav-link--active'>Add Target</NavLink>
            <NavLink to='/quests' className='main-header__nav-link' activeClassName = 'main-header__nav-link--active'>Quests</NavLink>
        </nav>
    </header>
);

export default Header;