import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({movies}) {
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
            </section>
            <div className="movies-card-list__more">Ещё</div>
        </section>
    )
}

export default MoviesCardList;