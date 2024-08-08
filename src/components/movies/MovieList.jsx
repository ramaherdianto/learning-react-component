import React from 'react';
import BoxMovies from './BoxMovies';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
    return (
        <>
            <BoxMovies>
                <ul className='list'>
                    {movies?.map((movie) => (
                        <MovieItem key={movie.imdbID} movie={movie} />
                    ))}
                </ul>
            </BoxMovies>
        </>
    );
};

export default MovieList;
