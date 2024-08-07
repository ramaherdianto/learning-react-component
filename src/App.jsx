import { useState } from 'react';
import Navbar from './components/navbar';
import MainContent from './components/content';
import { MoviesData } from './data/MoviesData';

export default function App() {
    const [movies, setMovies] = useState(MoviesData);

    return (
        <>
            <Navbar movies={movies} />
            <MainContent movies={movies} />
        </>
    );
}
