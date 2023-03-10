import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearhForm from '../SearchForm/SearchForm';
import { useEffect, useContext } from 'react';
import './SavedMovies.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies({movies, isLoading, onCardDelete}) {

    const currentUser = useContext(CurrentUserContext);
    const userMovies = movies.filter(movie => {
        if (movie.owner === currentUser._id) {
            return true
        }
    })

    useEffect(() => {
        document.title = "Сохранённые фильмы"
      }, [])

    return (
        <div className="saved-movies">
            <SearhForm
                checkboxText={'Короткометражки'} 
            />
            <div className="separator-h"></div>
            {isLoading && <Preloader />}
            <MoviesCardList 
                movies={userMovies}
                onCardDelete={onCardDelete}
            />
        </div>
    )
}

export default SavedMovies;