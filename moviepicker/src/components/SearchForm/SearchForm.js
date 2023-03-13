import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearhForm({checkboxText, shortMoviesActive, onShortClick}) {

    return (
        <section className="search-box">
            <div className="search-box__logo"></div>
            <input className="search-box__movie" placeholder='Фильмы'></input>
            <div className="search-box__button"></div>
            <div className="search-box__separator-v"></div>
            <FilterCheckbox 
                shortMoviesActive={shortMoviesActive}
                onShortClick={onShortClick}
                text={checkboxText}
            />
        </section>
    )
}

export default SearhForm;