import {Link} from "react-router-dom";
import './Navigation.css';

function Navigation({navMenuOpen, onToggleNavMenu}) {

    const hidden = () => {return !navMenuOpen ? 'navigation__hidden' : ''}

    return (
        <nav className={`navigation ${hidden()}`}>
            <div className='navigation__background'></div>
            <button className='navigation__close-button' onClick={onToggleNavMenu}></button>
            <div className='navigation__menu'>
                <Link to={'/'} className='navigation__menu_item'>Главная</Link>
                <Link to={'/movies'} className='navigation__menu_item'>Фильмы</Link>
                <Link to={'/saved-movies'} className='navigation__menu_item'>Сохранённые фильмы</Link>
            </div>
            <Link to={'/profile'} className='navigation__profile'></Link>
        </nav>
    )
}

export default Navigation;