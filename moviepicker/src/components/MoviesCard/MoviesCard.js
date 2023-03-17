import './MoviesCard.css';

function MoviesCard({card, onCardClick, onCardLike, onCardDelete}) {

  let randomizer = Math.floor(Math.random() * 3) + 1;

  const randomButton = randomizer === 1? 'movie-card__footer_like' : randomizer === 2? 'movie-card__footer_like movie-card__footer_like_liked' : 'movie-card__footer_delete';

  function time_convert(num) { 
    let hours = Math.floor(num / 60);  
    let minutes = num % 60;
    return hours < 1 ? (`${minutes}м`) : (`${hours}ч${minutes}м`)     
  }

  return (
    <div className="movie-card">
      <img
        src={card.image}
        className="movie-card__image"
        alt={`Картинка карточки ${card.nameRU} в миниатюре`}
      />
      <div className="movie-card__footer">
        <div className="movie-card__footer_title">{card.nameRU}</div>
        <div className="movie-card__footer_duration">{time_convert(card.duration)}</div>
        <button className={`${randomButton}`}></button>
      </div>
    </div>
  );
}

export default MoviesCard;
