import React from 'react';
import Logo from './Logo';
import Search from './Search';
import NumResult from './NumResult';

const index = ({ movies }) => {
    return (
        <>
            <nav className='nav-bar'>
                <Logo />
                <Search />
                <NumResult movies={movies} />
            </nav>
        </>
    );
};

export default index;
