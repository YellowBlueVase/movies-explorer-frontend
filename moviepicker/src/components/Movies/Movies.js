import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect } from "react";

function Movies({movies, savedMovies, isLoading, handleShortsActive, handleSearchSubmit, windowWidth, onCardLike, onCardDelete}) {

    useEffect(() => {
        document.title = "Фильмы"
        }, [])

    return (
        <div className="movies-page">
            <SearchForm
                handleShortsActive={handleShortsActive}
                checkboxText={'Короткометражки'}
                handleSearchSubmit={handleSearchSubmit}
            />
            {isLoading && <Preloader />}
            {!isLoading && <MoviesCardList 
                movies={movies}
                savedMovies={savedMovies}
                isLoading={isLoading}
                windowWidth={windowWidth}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
            />}
        </div>
    );
}

export default Movies;
