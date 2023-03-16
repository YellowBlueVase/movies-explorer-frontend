import {Link} from "react-router-dom";
import './Navigation.css';

function Navigation({navMenuOpen, onToggleNavMenu}) {

    const hidden = () => {return !navMenuOpen ? 'navigation__hidden' : ''}

    return (
        <nav className={`${hidden()}`}>
            <div className='navigation__background'></div>
            <div className='navigation'>
                <button className='navigation__close-button' onClick={onToggleNavMenu}></button>
                <div className='navigation__menu'>
                    <Link to={'/'} className='navigation__menu_item' onClick={onToggleNavMenu}>Главная</Link>
                    <Link to={'/movies'} className='navigation__menu_item' onClick={onToggleNavMenu}>Фильмы</Link>
                    <Link to={'/saved-movies'} className='navigation__menu_item' onClick={onToggleNavMenu}>Сохранённые фильмы</Link>
                </div>
                <Link to={'/profile'} className='navigation__profile' onClick={onToggleNavMenu}></Link>
            </div>
        </nav>
    )
}

export default Navigation;