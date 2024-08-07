import { useState } from 'react';
import Navbar from './components/navbar';
import MainContent from './components/content';
import { MoviesData } from './data/MoviesData';
import Logo from './components/navbar/Logo';
import Search from './components/navbar/Search';
import NumResult from './components/navbar/NumResult';
import MovieList from './components/content/MovieList';
import MovieWatched from './components/content/MovieWatched';

export default function App() {
    const [movies, setMovies] = useState(MoviesData);

    return (
        <>
            <Navbar>
                <Logo />
                <Search />
                <NumResult movies={movies} />
            </Navbar>
            <MainContent>
                <MovieList movies={movies} />
                <MovieWatched />
            </MainContent>
        </>
    );
}
