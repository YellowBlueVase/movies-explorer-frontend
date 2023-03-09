import {Link, Switch, Route} from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import './Header.css';

function Header() {

  return (
    <header className="header">
      <Switch>
        <Route path={['/signin', '/signup']} />
        <Route path={['/profile', '/movies', '/saved-movies']}>
          <Link to="/"><div className="header__logo"></div></Link>
          <div className="header__right">
            <Link to="/movies" className='header__right_text header__right_text_movies'>Фильмы</Link>
            <Link to="/saved-movies" className='header__right_text header__right_text_saved-movies'>Сохраненные фильмы</Link>
            <Link to="/profile"><div className='header__right_profile'></div></Link>
          </div>
        </Route>
        <Route path={['/']}>
          <Link to="/"><div className="header__logo"></div></Link>
          <div className="header__right">
            <Link to="/signup" className='header__right_text header__right_text_signup'>Регистрация</Link>
            <Link to="/signin" className='header__right_text header__right_text_signin'>Войти</Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
