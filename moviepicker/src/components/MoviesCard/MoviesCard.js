import {useContext, useState, useEffect} from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import './MoviesCard.css';

function MoviesCard({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = [];

  const [pathSavedMovies, setPathSavedMovies] = useState(false);
 
  const isOwn = card.owner === currentUser?._id;
 
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  ); 

  let isLiked = card.likes.some(i => i === currentUser?._id);

  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_active' : ''}`
  ); 

  function handleClick() {
    onCardClick(card);
  }

  function handlePathCheck() {
    if (window.location.pathname === '/saved-movies') {
      setPathSavedMovies(true);
    }
  }
  
  function handleDeleteClick() {
    onCardDelete(card);
  }

  useEffect(() => {
    handlePathCheck()
  }, []);

  return (
    <div className="movie-card">
      <img
        src={card.link}
        className="movie-card__image"
        alt={`Картинка карточки ${card.name} в миниатюре`}
        onClick={handleClick}
      />
      <div className="movie-card__footer">
        <div className="movie-card__footer_title">{card.name}</div>
        <div className="movie-card__footer_duration">{card.duration}</div>
        <div className="movie-card__footer_short"></div>
        <button className="movie-card__footer_delete"></button>
      </div>
    </div>
  );
}

export default MoviesCard;
