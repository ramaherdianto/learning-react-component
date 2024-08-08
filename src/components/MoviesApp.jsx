import { useState } from 'react';
import Navbar from './navbar';
import MainContent from './movies';
import { MoviesData } from '../data/MoviesData';
import Logo from './navbar/Logo';
import Search from './navbar/Search';
import NumResult from './navbar/NumResult';
import MovieList from './movies/MovieList';
import MovieWatched from './movies/MovieWatched';
import StarRating from './ratingstar/StarRating';

export default function MoviesApp() {
    const [movies, setMovies] = useState(MoviesData);

    return (
        <>
            <Navbar>
                <Logo />
                <Search />
                <NumResult movies={movies} />
            </Navbar>
            <StarRating max={5} color={'#fcc419'} size={24} />
            <StarRating max={5} color={123} size={24} />
            <MainContent
                element={
                    <>
                        <MovieList movies={movies} />
                        <MovieWatched />
                    </>
                }
            ></MainContent>
        </>
    );
}
