import React from 'react';
import Logo from './Logo';
import Search from './Search';
import NumResult from './NumResult';

const index = () => {
    return (
        <>
            <nav className='nav-bar'>
                <Logo />
                <Search />
                <NumResult />
            </nav>
        </>
    );
};

export default index;
