import {useContext, useState, useEffect} from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './MoviesCard.css';

function MoviesCard({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext);;
  const [pathSavedMovies, setPathSavedMovies] = useState(false);
  const [shortMovie, setShortMovie] = useState(false);

  const isOwn = card.owner === currentUser?._id;
 
  const cardDeleteButtonClassName = (
    `${isOwn && pathSavedMovies ? 'movie-card__footer_delete' : 'hidden'}`
  ); 

  const cardShortButtonClassName = (
    `${shortMovie && !pathSavedMovies ? 'liked' : 'hidden'}`
  ); 

  function time_convert(num) { 
    let hours = Math.floor(num / 60);  
    let minutes = num % 60;
    return hours < 1 ? (`${minutes}м`) : (`${hours}ч${minutes}м`)     
  }

  function handleClick() {
    onCardClick(card);
  }

  function handlePathCheck() {
    if (window.location.pathname === '/saved-movies') {
      setPathSavedMovies(true);
    }
  }

  function handleShortCheck() {
    if (card.duration <30) {
      setShortMovie(true);
    }
  }
  
  function handleDeleteClick() {
    onCardDelete(card);
  }

  useEffect(() => {
    handlePathCheck();
    handleShortCheck();
  }, []);

  return (
    <section className="movie-card">
      <img
        src={card.image}
        className="movie-card__image"
        alt={`Картинка карточки ${card.nameRU} в миниатюре`}
      />
      <div className="movie-card__footer">
        <div className="movie-card__footer_title">{card.nameRU}</div>
        <div className="movie-card__footer_duration">{time_convert(card.duration)}</div>
        <button className='movie-card__footer_like' id={cardShortButtonClassName}></button>
        <button className={cardDeleteButtonClassName}></button>
      </div>
    </section>
  );
}

export default MoviesCard;
