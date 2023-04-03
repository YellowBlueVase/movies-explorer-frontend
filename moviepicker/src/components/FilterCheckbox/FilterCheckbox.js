import './FilterCheckbox.css';

function FilterCheckbox({text, handleShortsActive}) {

    return (
        <div className='switcher-box'>
            <input type="checkbox" className="switcher" onChange={handleShortsActive}></input>
            <div className="switcher_text">{text}</div>
        </div>
    )
}

export default FilterCheckbox;