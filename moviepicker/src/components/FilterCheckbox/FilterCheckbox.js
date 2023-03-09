import './FilterCheckbox.css';

function FilterCheckbox({text}) {

    return (
        <div className='switcher-box'>
            <input type="checkbox" className="switcher"></input>
            <div className="switcher_text">{text}</div>
        </div>
    )
}

export default FilterCheckbox;