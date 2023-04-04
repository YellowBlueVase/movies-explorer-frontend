import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BASIC_API } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard({card, savedMovies, onCardLike, onCardDelete}) {
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  const [cardId, setCardId] = useState('');
  const location = useLocation();
  
  function handleCheckIfCardIsSaved() {
    savedMovies.map((movie) => {
      if (movie.movieId === card.id) {
        setIsSavedMovie(true);
        console.log('handleCheckIfCardIsSaved >>>>', movie._id)
        setCardId(movie._id)
      }
    })
  }

  function handleCardLike() {
    if (isSavedMovie) {
      onCardDelete(cardId);
      setIsSavedMovie(false)
    } else {
      onCardLike(card)
      setIsSavedMovie(true)
    }
  }

  function handleCardDelete() {
    onCardDelete(card._id);
  }
  
  function time_convert(num) { 
    let hours = Math.floor(num / 60);  
    let minutes = num % 60;
    return hours < 1 ? (`${minutes}м`) : (`${hours}ч${minutes}м`)     
  }

  useEffect(() => {
    location.pathname === '/movies' && handleCheckIfCardIsSaved();
  }, [])

  return (
    <div className="movie-card">
      <a href={card.trailerLink || card.trailer} className="movie-card__link" target="_blank">
        <img
          src={location.pathname === '/movies' ? `${BASIC_API}${card.image.url}` : `${card.image}`}
          className="movie-card__link_image"
          alt={`Картинка карточки ${card.nameRU} в миниатюре`}
        />
      </a>
      <div className="movie-card__footer">
        <div className="movie-card__footer_title">{card.nameRU}</div>
        <div className="movie-card__footer_duration">{time_convert(card.duration)}</div>
        {
          location.pathname === '/movies' ? 
          (<button className={isSavedMovie ? `movie-card__footer_like movie-card__footer_like_liked` : `movie-card__footer_like`} onClick={handleCardLike}></button>) :
          location.pathname === '/saved-movies' &&
          (<button className={`movie-card__footer_delete`} onClick={handleCardDelete}></button>)
        }
      </div>
    </div>
  );
}

export default MoviesCard;
