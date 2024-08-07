import React, { useState } from 'react';
import { WatchedMovieData } from '../../data/WatchedMovieData';
import WatchedMovieList from './WatchedMovieList';
import SummaryWatched from './SummaryWatched';
import BoxMovies from './BoxMovies';

const MovieWatched = () => {
    const [watched, setWatched] = useState(WatchedMovieData);

    return (
        <>
            <BoxMovies>
                <SummaryWatched watched={watched} />
                <ul className='list'>
                    {watched.map((movie) => (
                        <WatchedMovieList key={movie.imdbID} movie={movie} />
                    ))}
                </ul>
            </BoxMovies>
        </>
    );
};

export default MovieWatched;
