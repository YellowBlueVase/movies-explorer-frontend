import './FilterCheckbox.css';

function FilterCheckbox({text, shortMoviesActive, onShortClick}) {

    return (
        <div className='switcher-box'>
            <input type="checkbox" defaultChecked={shortMoviesActive} className="switcher" onChange={onShortClick}></input>
            <div className="switcher_text">{text}</div>
        </div>
    )
}

export default FilterCheckbox;