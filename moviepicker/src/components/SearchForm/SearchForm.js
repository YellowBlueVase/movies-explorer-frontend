import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearhForm({checkboxText}) {

    return (
        <section className="search-box">
            <div className="search-box__logo"></div>
            <input className="search-box__movie" placeholder='Фильмы'></input>
            <div className="search-box__button"></div>
            <div className="search-box__separator-v"></div>
            <FilterCheckbox 
                text={checkboxText}
            />
        </section>
    )
}

export default SearhForm;