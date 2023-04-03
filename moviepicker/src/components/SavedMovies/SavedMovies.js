import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect } from 'react';
import './SavedMovies.css';

function SavedMovies({movies, isLoading, handleShortsActive, handleSearchSubmit, windowWidth, onCardDelete}) {

    useEffect(() => {
        document.title = "Сохранённые фильмы"
        console.log('MOVIES FROM SAVEDMOVIES', movies)
      }, [])

    return (
        <section className="saved-movies">
            <SearchForm
                handleShortsActive={handleShortsActive}
                checkboxText={'Короткометражки'}
                handleSearchSubmit={handleSearchSubmit}
            />
            {isLoading && <Preloader />}
            {!isLoading && <MoviesCardList 
                movies={movies}
                isLoading={isLoading}
                windowWidth={windowWidth}
                onCardDelete={onCardDelete}
            />}
        </section>
    )
}

export default SavedMovies;
