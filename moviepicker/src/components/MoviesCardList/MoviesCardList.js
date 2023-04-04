import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import './MoviesCardList.css';

function MoviesCardList({movies, savedMovies, isLoading, onCardLike, onCardDelete, windowWidth}) {
    const [shownCards, setShownCards] = useState(0);
    const [moviesLength, setMoviesLength] = useState(0);
    const [moreCards, setMoreCards] = useState({});
    const [moviesFractured, setMoviesFractured] = useState([])

    const moreArray = [
        {size : 1280, maxInitCards: 16, cardsAdded : 4},
        {size : 768, maxInitCards: 12, cardsAdded : 3},
        {size : 480, maxInitCards: 8, cardsAdded : 2},
        {size : 320, maxInitCards: 5, cardsAdded : 2}
    ]

    function handleSetMoviesLength() {
        setMoviesLength(movies.length)
    }

    function handleMoreCards() {
        if (windowWidth < 480) {
            setMoreCards(moreArray[3]);
        } else if (windowWidth < 768) {
            setMoreCards(moreArray[2]);
        } else if (windowWidth < 1280) {
            setMoreCards(moreArray[1]);
        } else {
            setMoreCards(moreArray[0]);
        }
    }

    function handleIncreaseNumberOfCardsOnScreen() {
        if (shownCards >= moviesLength) {
            setShownCards(moviesLength)
            console.log('SHOWN CARDS 1 >>>>', shownCards, 'MOVIES LENGTH>>>', moviesLength)
        } else {
            setShownCards(shownCards + moreCards.cardsAddedState)
            console.log('SHOWN CARDS 2 >>>>', shownCards, 'MOVIES LENGTH>>>', moviesLength)
        }
    }

    function handleShowFracturedCards(array) {
        let fractured = array.slice(0, shownCards)
        setMoviesFractured(fractured)
    }



    useEffect(() => {
        handleSetMoviesLength();
        handleMoreCards();
        console.log(moreCards.maxInitCards)
        setShownCards(moreCards.maxInitCards);
        handleShowFracturedCards(movies);
    }, [movies, savedMovies, moviesLength, isLoading, windowWidth, shownCards])

    useEffect(() => {
        console.log(moviesFractured)
    }, [moviesFractured])

    return (
        <div className="movies-card-list">
            <ul className="movies-card-list__grid">
                {movies.map(movie => {
                    return (
                        <MoviesCard 
                        key={movie._id} 
                        card={movie}
                        savedMovies={savedMovies}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                        />
                    );
                })}
            </ul>
            {shownCards < moviesLength && (
                <button 
                    className={`movies-card-list__more`} 
                    onClick={handleIncreaseNumberOfCardsOnScreen}
                >
                    Ещё
                </button>
            )}
        </div>
    )
}

export default MoviesCardList;