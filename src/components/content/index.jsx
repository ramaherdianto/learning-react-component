import React from 'react';
import MovieList from './MovieList';
import MovieWatched from './MovieWatched';

const index = ({ movies }) => {
    return (
        <>
            <main className='main'>
                <MovieList movies={movies} />
                <MovieWatched />
            </main>
        </>
    );
};

export default index;
