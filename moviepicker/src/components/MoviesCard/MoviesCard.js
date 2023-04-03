import { useLocation } from 'react-router-dom';
import { BASIC_API } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard({card, liked, onCardLike, onCardDelete}) {
  const location = useLocation();

  let likeStatus = liked === true ? `movie-card__footer_like movie-card__footer_like_liked` : `movie-card__footer_like`;

  function handleCardLike() {
    if (likeStatus === `movie-card__footer_like`) {
      onCardLike(card)
      likeStatus = `movie-card__footer_like movie-card__footer_like_liked`
    } else if (likeStatus === `movie-card__footer_like movie-card__footer_like_liked`) {
      onCardDelete(card)
      likeStatus = `movie-card__footer_like`
    } else {
      console.log('ERROR in likeStatus on MoviesCard - PROVIDE TESTING')
    }
  }

  function handleCardDelete() {
    onCardDelete(card)
  }
  
  function time_convert(num) { 
    let hours = Math.floor(num / 60);  
    let minutes = num % 60;
    return hours < 1 ? (`${minutes}м`) : (`${hours}ч${minutes}м`)     
  }

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
          (<button className={likeStatus} onClick={handleCardLike}></button>) :
          location.pathname === '/saved-movies' &&
          (<button className={`movie-card__footer_delete`} onClick={handleCardDelete}></button>)
        }
      </div>
    </div>
  );
}

export default MoviesCard;
