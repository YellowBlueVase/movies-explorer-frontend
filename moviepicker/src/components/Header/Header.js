import {Link, Switch, Route} from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import './Header.css';

function Header({loggedIn, navMenuOpen, onToggleNavMenu}) {

  const hidden = () => {return navMenuOpen ? 'header__hidden' : ''}

  function loggedInMainHeader() {
    return (
      <div className="header__right">
        <Link to="/movies" className='header__right_text header__right_text_movies'>Фильмы</Link>
        <Link to="/saved-movies" className='header__right_text header__right_text_saved-movies'>Сохраненные фильмы</Link>
        <Link to="/profile"><div className='header__right_profile'></div></Link>
        <button className={`header__right_navigation`} onClick={onToggleNavMenu}></button>
      </div>
    )
  }

  function loggedOutMainHeader() {
    return (
      <div className="header__right">
        <Link to="/signup" className='header__right_text header__right_text_signup'>Регистрация</Link>
        <Link to="/signin" className='header__right_text header__right_text_signin'>Войти</Link>
      </div>
    )
  }

  return (
    <header className={`header ${hidden()}`}>
      <Switch>
        <Route path={['/signin', '/signup']} />
        <Route path={['/profile', '/movies', '/saved-movies']}>
          <Link to="/"><div className="header__logo"></div></Link>
          {loggedIn ? loggedInMainHeader() : loggedOutMainHeader()}
        </Route>
        <Route path={['/']}>
          <Link to="/"><div className="header__logo"></div></Link>
          {loggedIn ? loggedInMainHeader() : loggedOutMainHeader()}
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
