import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import './Movies.css';
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect } from "react";

function Movies({movies, onCardClick, onCardLike, onCardDelete}) {

    useEffect(() => {
        document.title = "Фильмы"
        }, [])

    return (
        <main className="movies-page">
            <SearchForm
                checkboxText={'Краткометражки'} 
            />
            <div className="separator-h"></div>
            <Preloader />
            <MoviesCardList />
            <section className="movies-cards">
                {movies.map(movie => {
                return (
                    <MoviesCard 
                    key={movie._id} 
                    card={movie}
                    onCardClick
                    onCardLike
                    onCardDelete
                    />
                );
                })}
            </section>
            <div className="more">Ещё</div>
        </main>
    );
}

export default Movies;
