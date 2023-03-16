import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({movies}) {
    const dummyCurrentUser = useContext(CurrentUserContext);
    console.log(dummyCurrentUser);
    const dummyMoviesForReviewer = [
        {
            "_id" : "1", 
            "country" : "Russia",
            "director" : "Burjua",
            "duration" : "20",
            "year" : "2020",
            "description" : "Some description",
            "image" : "https://images-prod.dazeddigital.com/900/azure/dazed-prod/1270/8/1278472.jpg",
            "trailer" : "https://www.youtube.com/watch?v=jGfiPs9zuhE",
            "nameRU" : "ДЖОКЕР",
            "nameEN" : "Joker",
            "thumbnail" : "https://images-prod.dazeddigital.com/900/azure/dazed-prod/1270/8/1278472.jpg",
            "movieId" : "23231",
            "owner" : dummyCurrentUser._id,
        },
        {
            "_id" : "2",
            "country" : "England",
            "director" : "Burjua",
            "duration" : "129",
            "year" : "2015",
            "description" : "Some description",
            "image" : "https://images-prod.dazeddigital.com/900/azure/dazed-prod/1270/8/1278472.jpg",
            "trailer" : "https://www.youtube.com/watch?v=jGfiPs9zuhE",
            "nameRU" : "Яблоневый сад",
            "nameEN" : "Joker",
            "thumbnail" : "https://images-prod.dazeddigital.com/900/azure/dazed-prod/1270/8/1278472.jpg",
            "movieId" : "23231"
        },
        {
            "_id" : "3", 
            "country" : "Russia",
            "director" : "Burjua",
            "duration" : "20",
            "year" : "2020",
            "description" : "Some description",
            "image" : "https://images-prod.dazeddigital.com/900/azure/dazed-prod/1270/8/1278472.jpg",
            "trailer" : "https://www.youtube.com/watch?v=jGfiPs9zuhE",
            "nameRU" : "ДЖОКЕР",
            "nameEN" : "Joker",
            "thumbnail" : "https://images-prod.dazeddigital.com/900/azure/dazed-prod/1270/8/1278472.jpg",
            "movieId" : "23231",
            "owner" : dummyCurrentUser._id,
        },
        {
            "_id" : "4",
            "country" : "England",
            "director" : "Burjua",
            "duration" : "129",
            "year" : "2015",
            "description" : "Some description",
            "image" : "https://images-prod.dazeddigital.com/900/azure/dazed-prod/1270/8/1278472.jpg",
            "trailer" : "https://www.youtube.com/watch?v=jGfiPs9zuhE",
            "nameRU" : "Яблоневый сад",
            "nameEN" : "Joker",
            "thumbnail" : "https://images-prod.dazeddigital.com/900/azure/dazed-prod/1270/8/1278472.jpg",
            "movieId" : "23231"
        }
    ]

    return (
        <section className="movies-card-list">
            <section className="movies-card-list__grid">
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
                {dummyMoviesForReviewer.map(dummy => {
                return (
                    <MoviesCard 
                    key={dummy._id} 
                    card={dummy}
                    onCardClick
                    onCardLike
                    onCardDelete
                    />
                );
                })}
            </section>
            <div className="movies-card-list__more">Ещё</div>
        </section>
    )
}

export default MoviesCardList;