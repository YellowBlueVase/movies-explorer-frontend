import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearhForm({checkboxText, shortMoviesActive, onShortClick}) {

    return (
        <div>
            <section className="search-box">
                <div className="search-box__logo"></div>
                <input className="search-box__movie" placeholder='Фильмы'></input>
                <input type="submit" value="" className="search-box__submit"></input>
                <div className="search-box__separator-v"></div>
                <div className='search-box__filter'> 
                    <FilterCheckbox 
                        shortMoviesActive={shortMoviesActive}
                        onShortClick={onShortClick}
                        text={checkboxText}
                    />
                </div>
            </section>
            <div className="search-box__separator-h"></div>
        </div>
    )
}

export default SearhForm;