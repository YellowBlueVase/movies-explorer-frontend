import {useState, useEffect} from "react";
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import api from "../../utils/api";
import { authorize, register, checkToken } from "../../utils/auth";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import { GREETING_LOGIN_PAGE, GREETING_REGISTER_PAGE } from "../../utils/constants";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";
import Page404 from "../Page404/Page404";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [ownMovies, setOwnMovies] = useState([]);
  const [shortMoviesActive, setShortMoviesActive] = useState(false);
  const [moviesShort, setMoviesShort] = useState([]);
  const [ownMoviesShort, setOwnMoviesShort] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedMovieCard, setSelectedMovieCard] = useState(null);
  const history = useHistory();

  function handleMovieCardClick(movie) {
    setSelectedMovieCard(movie);
  }

  function handleMovieCardDelete(movie) {
    api.deleteCard(movie._id)
    .then(() => {
      setMovies(current => current.filter(item => {
        return item._id !== movie._id}))
    })
    .catch((err) => {console.log(err)})
  }

  function handleLogin(password, email) {
    authorize(password, email)
        .then((data) => {
          if (data.token === localStorage.getItem('jwt')) {
              handleLoggedInChange()
              handleTokenCheck()
            }})
        .catch((err) => {
            console.log(err);
        }); 
  }

  function handleLoggedInChange() {
    setLoggedIn(true)
  }

  function handleRegister(name, email, password) {
    register(name, email, password)
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
          history.push("/movies");
        }}) 
      .catch((err) => {
        console.log(err);})
  }}

  function handleSignOut(){
    localStorage.removeItem('jwt');
    history.push('/');
    setLoggedIn(false)
  }

  function handleOwnMoviesFilter(movies){
    let newArray = []
    movies.filter(movie => {
      if (movie.owner === currentUser._id) {
        newArray.push(movie)
      }
    })
    setOwnMovies(newArray);
    console.log(newArray)
    setTimeout(()=>{console.log('OWN MOVIES>>>', ownMovies)}, 1)
  }

  function handleFilterShortMovies(array, shortMoviesStatus){
    let newArray = []
    if (shortMoviesStatus) {
      array.filter((item) => {
        if (item.duration <30) {
          newArray.push(item)
        }
      })
    } else {
      newArray = []
    }
    setMoviesShort(newArray);
  }

  function handleChangeShortMoviesStatus() {
    setShortMoviesActive(!shortMoviesActive); 
  }

  function handleToggleNavMenu() {
    console.log(navMenuOpen);
    setNavMenuOpen(!navMenuOpen); 
  }

  // function handleNavButtonClick() {
  //   setIsEditProfilePopupOpen(true);
  // }

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
    loggedIn && api
      .getProfileInfo()
      .then((currentUser) => {
        setCurrentUser(currentUser.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
    loggedIn && api
      .getInitialMovieCards()
      .then((initialMovies) => {
        setMovies(initialMovies.data.reverse());
        setIsLoading(false);
        setTimeout(()=> {handleOwnMoviesFilter(initialMovies.data);}, 1000)
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, [loggedIn]);

  useEffect(() => {
    handleTokenCheck();
    handleFilterShortMovies(ownMovies, shortMoviesActive); 
    handleFilterShortMovies(moviesShort, shortMoviesActive);
  }, []);

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
            <Login 
              onLogin={handleLogin}
              greeting={GREETING_LOGIN_PAGE} />
          </Route>
          <Route exact path="/signup">
            <Register 
              onRegister={handleRegister}
              greeting={GREETING_REGISTER_PAGE}/>
          </Route>
          <Route exact path="/profile">
            <Profile
              onSignOut={handleSignOut}
            />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/movies">
            <Movies
              movies={movies}
              shortMovies={moviesShort}
              shortMoviesActive={shortMoviesActive}
              isLoading={isLoading}
              onShortClick={handleChangeShortMoviesStatus}
              onCardDelete={handleMovieCardDelete}
            />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies 
              movies={ownMovies}
              shortMovies={ownMoviesShort}
              shortMoviesActive={shortMoviesActive}
              isLoading={isLoading}
              onShortClick={handleChangeShortMoviesStatus}
              onCardDelete={handleMovieCardDelete}
            />
          </Route>
          {/* <Route path="*">
            <Page404 />
          </Route> */}
        </Switch>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
