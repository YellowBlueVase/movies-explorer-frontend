import { useState } from 'react';
import './Navigation.css';

function Navigation({navMenuOpen, onToggleNavMenu}) {

    const hidden = () => {return !navMenuOpen ? 'navigation__hidden' : ''}

    return (
        <div className={`navigation ${hidden()}`}>
            <button className='navigation__close-button' onClick={onToggleNavMenu}></button>
            <div className='navigation__menu'>
                <div className='navigation__menu_item'>Главная</div>
                <div className='navigation__menu_item'>Фильмы</div>
                <div className='navigation__menu_item'>Сохранённые фильмы</div>
            </div>
            <div className='navigation__profile'></div>
        </div>
    )
}

export default Navigation;