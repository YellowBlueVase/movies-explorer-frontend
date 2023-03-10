import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({movies}) {

    // let numColumns = 4;
    // let grid = document.getElementsByClassName('.movies-cards');
    // const maxGridRows = Math.ceil(movies.length / numColumns)
    // grid.style.gridTemplateRows = `repeat(${maxGridRows > 4 ? 4 : maxGridRows}, 1fr)`;

    return (
        <div className="movies-card-list">
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
        </div>
    )
}

export default MoviesCardList;