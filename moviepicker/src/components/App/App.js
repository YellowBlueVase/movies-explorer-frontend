import {useState, useEffect} from "react";
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { authorize, register, checkToken } from "../../utils/auth";
import { Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import { GREETING_LOGIN_PAGE, GREETING_REGISTER_PAGE, SHORTS_DURATION } from "../../utils/constants";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";
import Page404 from "../Page404/Page404";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [shortsActive, setShortsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const history = useHistory();
  const location = useLocation();

  function getBack() {
    history.goBack();
  }

  function handleResize() {
    const width = window.innerWidth;
    setWindowWidth(width);
  }

  function handleMovieCardLike(movie) {
    console.log(movie)
    mainApi.addNewMovieCard(movie)
    .then((newMovie) => {
      setSavedMovies([newMovie, ...savedMovies])
    })
    .catch((err) => {console.log(err)})
  }

  function handleMovieCardDelete(movieId) {
    mainApi.deleteCard(movieId)
    .then(() => {
      setSavedMovies(current => current.filter(item => {
        return item._id !== movieId}))
    })
    .catch((err) => {console.log(err)})
  }

  function handleLoggedInChange() {
    setLoggedIn(true)
  }

  function handleShortsActive() {
    setShortsActive(!shortsActive)
  }

  function handleSearchMoviesSubmit(values) {
    setIsLoading(true)
    loggedIn && moviesApi
      .getInitialMovieCards()
      .then((initialMovies) => {
        let searchedMovies = initialMovies.filter((item) => item.nameRU.toLowerCase().includes(values))
        let filteredMovies = shortsActive ? searchedMovies.filter(item => item.duration < SHORTS_DURATION) : searchedMovies
        setMovies(filteredMovies.reverse());
        setTimeout(500)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSearchSavedMoviesSubmit(values) {
    setIsLoading(true)
    loggedIn && mainApi
      .getSavedMovies()
      .then((initialMovies) => {
        let searchedMovies = initialMovies.data.filter((item) => item.nameRU.toLowerCase().includes(values))
        let filteredMovies = shortsActive ? searchedMovies.filter(item => item.duration < SHORTS_DURATION) : searchedMovies
        setSavedMovies(filteredMovies.reverse());
        setTimeout(500)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin(values) {
    authorize(values.password, values.email)
        .then((data) => {
          if (data.token === localStorage.getItem('jwt')) {
              handleLoggedInChange()
              handleTokenCheck()
            }})
        .catch((err) => {
            console.log(err);
        }); 
  }

  function handleRegister(values) {
    register(values.name, values.email, values.password)
    .then((res) => {
      if (res) {
        history.push("/signin");
      }
    })
    .catch((err) => {
        console.log(err);
    })
  }

  function handleTokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      checkToken(jwt)
      .then((res) => {
        if (res){
          setLoggedIn({
            loggedIn: true,
          });
        }}) 
      .catch((err) => {
        console.log(err);})
  }}

  function handleSignOut(){
    localStorage.removeItem('jwt');
    history.push('/');
    setLoggedIn(false)
  }

  function handleProfileUpdate(values){
    mainApi.updateProfile(values)
    .then(() => {
      setCurrentUser(values)
    })
    .catch((err) => {console.log(err)})
  }

  function handleToggleNavMenu() {
    setNavMenuOpen(!navMenuOpen); 
  }

  function closeAllPopups() {
    setNavMenuOpen(false);
  }

  const isOpen = navMenuOpen;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
    
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    loggedIn && mainApi
      .getProfileInfo()
      .then((currentUser) => {
        setCurrentUser(currentUser.data);
      })
      .catch((err) => {
        console.log(err);
      });

    loggedIn && mainApi
      .getSavedMovies()
      .then((savedMovies) => {
        setIsLoading(true)
        setSavedMovies(savedMovies.data.reverse());
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });  
  }, [loggedIn]);

  useEffect(() => {
    handleTokenCheck();
    handleResize();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', handleResize);}, 2000)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [windowWidth])

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          loggedIn={loggedIn}
          navMenuOpen={navMenuOpen}
          onToggleNavMenu={handleToggleNavMenu}
        />
        <Navigation
          navMenuOpen={navMenuOpen}
          onToggleNavMenu={handleToggleNavMenu}
        />
        <Switch>
          <Route exact path="/signin">
            {!loggedIn ? (
                <Login 
                onLogin={handleLogin}
                greeting={GREETING_LOGIN_PAGE} />
              ) : (
                <Redirect to='/' />
            )}
          </Route>
          <Route exact path="/signup">
            {!loggedIn ? (
                <Register 
                onRegister={handleRegister}
                greeting={GREETING_REGISTER_PAGE}/>
              ) : (
                <Redirect to='/' />
            )}
          </Route>
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
            onProfileUpdate={handleProfileUpdate}
          />
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute 
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            movies={movies}
            savedMovies={savedMovies}
            isLoading={isLoading}
            shortsActive={shortsActive}
            handleSearchSubmit={handleSearchMoviesSubmit}
            handleShortsActive={handleShortsActive}
            windowWidth={windowWidth}
            onCardLike={handleMovieCardLike}
            onCardDelete={handleMovieCardDelete}
          />
          <ProtectedRoute 
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            movies={savedMovies}
            isLoading={isLoading}
            shortsActive={shortsActive}
            handleSearchSubmit={handleSearchSavedMoviesSubmit}
            handleShortsActive={handleShortsActive}
            windowWidth={windowWidth}
            onCardDelete={handleMovieCardDelete}
          />
          <Route path="*">
            <Page404 
              getBack={getBack}
            />
          </Route>
        </Switch>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
