import Movies from '../Movies/Movies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearhForm from '../SearchForm/SearchForm';
import { useEffect } from 'react';
import './SavedMovies.css';

function SavedMovies(props) {

    useEffect(() => {
        document.title = "Сохранённые фильмы"
      }, [])

    return (
        <div className="saved-movies">
            {/* <SearhForm
                checkboxText={'Короткометражки'} 
            />
            <MoviesCardList />
            <Movies /> */}
        </div>
    )
}

export default SavedMovies;