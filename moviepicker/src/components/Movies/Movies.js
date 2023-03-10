import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect } from "react";

function Movies({movies, isLoading, onCardClick, onCardLike, onCardDelete}) {

    useEffect(() => {
        document.title = "Фильмы"
        }, [])

    return (
        <main className="movies-page">
            <SearchForm
                checkboxText={'Короткометражки'} 
            />
            <div className="separator-h"></div>
            {isLoading && <Preloader />}
            <MoviesCardList 
                movies={movies}
                onCardClick={onCardClick}
                onCardLike={onCardLike} 
                onCardDelete={onCardDelete}
            />
        </main>
    );
}

export default Movies;
