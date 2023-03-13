import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect } from "react";

function Movies({movies, shortMovies, shortMoviesActive, isLoading, onShortClick, onCardDelete}) {

    function handlePickMoviesCards() {
        return shortMoviesActive ? shortMovies : movies;
    }

    useEffect(() => {
        document.title = "Фильмы"
        }, [])

    return (
        <main className="movies-page">
            <SearchForm
                shortMoviesActive={shortMoviesActive}
                onShortClick={onShortClick}
                checkboxText={'Короткометражки'} 
            />
            <div className="separator-h"></div>
            {isLoading && <Preloader />}
            <MoviesCardList 
                movies={handlePickMoviesCards()}
                onCardDelete={onCardDelete}
            />
        </main>
    );
}

export default Movies;
