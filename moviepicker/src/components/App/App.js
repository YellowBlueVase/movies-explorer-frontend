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
  const [isLoading, setIsLoading] = useState(true);
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
          // console.log('data.token >>>>', data.token)
          // console.log('local storage >>', localStorage.getItem('jwt'))
          if (data.token === localStorage.getItem('jwt')) {
            console.log('LOGEDIN STATUS 1>>>>', loggedIn)
              handleLoggedInChange()
              handleTokenCheck()
              console.log('LOGEDIN STATUS 2>>>>', loggedIn)
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
    history.push('/signin');
    setLoggedIn(false)
  }

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  useEffect(() => {
    handleTokenCheck()
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          loggedIn={loggedIn}
        />
        <Navigation />
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
              isLoading={isLoading}
              onCardDelete={handleMovieCardDelete}
              onCardClick={handleMovieCardClick}/>
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies 
              movies={movies}
              isLoading={isLoading}
              onCardDelete={handleMovieCardDelete}
            />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
