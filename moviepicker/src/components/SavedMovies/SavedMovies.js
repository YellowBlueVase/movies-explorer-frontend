import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearhForm from '../SearchForm/SearchForm';
import { useEffect } from 'react';
import './SavedMovies.css';

function SavedMovies({movies, shortMovies, shortMoviesActive, isLoading, onShortClick, onCardDelete}) {

    function handlePickMoviesCards() {
        return shortMoviesActive ? shortMovies : movies;
    }

    useEffect(() => {
        document.title = "Сохранённые фильмы"
      }, [])

    return (
        <div className="saved-movies">
            <SearhForm
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
        </div>
    )
}

export default SavedMovies;