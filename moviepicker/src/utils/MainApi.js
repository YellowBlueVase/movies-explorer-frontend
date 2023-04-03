import { BASE_URL, BASIC_API } from "./constants";

export class Api {
    constructor(config) {
        this._url = `${config.url}/`;
        this._movieId = config._id;
        this._likesCounter = config.likes;
        this._urlMovies = `${this._url}movies`;
        this._urlProfile = `${this._url}users/me`;
    }

    _getResponseData(url, res) {
      if (res.ok) {
        return res.json()}
      return Promise.reject(`Ошибка по адресу ${url}, статус ошибки ${res.status}`)
    }

    getProfileInfo() {
      return fetch(this._urlProfile, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        })
      .then((res) => {
         return this._getResponseData(this._urlProfile, res)
        })
    }

    getMovieInfo(movieId) {
      return fetch(`${this._urlMovies}/${movieId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        })
      .then((res) => {
          return this._getResponseData(`${this._urlMovies}/${movieId}`, res)
        })
    }
    
    getSavedMovies() {
      return fetch(this._urlMovies, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        })
        .then((res) => {
          return this._getResponseData(this._urlMovies, res)
        })
    }

    updateProfile(data) {
      return fetch(this._urlProfile, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
          name:data.name,
          email:data.email
        })
        })
        .then(res => {
          return this._getResponseData(this._urlProfile, res)
        })
    }

    addNewMovieCard(data) {
      console.log('ADD NEW MOVIE CARD DATA>>>', data)
      return fetch(this._urlMovies, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: `${BASIC_API}${data.image.url}`,
          trailer: data.trailerLink,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          thumbnail: `${BASIC_API}${data.image.url}`,
          movieId: data.id,
        }),
        })
      .then((res) => {
          return this._getResponseData(this._urlMovies, res)
        })
      }

    deleteCard(movieId) {
      return fetch(`${this._urlMovies}/${movieId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
      })
      .then((res) => {
          return this._getResponseData(`${this._urlMovies}/${movieId}`, res)
      })
    }
    
    changeLikeCardStatus(movieId, isLiked) {
      return fetch(`${this._urlMovies}/${movieId}/likes`, {
        method: `${isLiked ? 'PUT' : 'DELETE'}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
      })
      .then((res) => {
        return this._getResponseData(`${this._urlMovies}/${movieId}/likes`, res)
      })
    }

    showLikes(movieId) {
      return fetch(`${this._urlMovies}/${movieId}/likes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        })
        .then((res) => {
          return this._getResponseData(`${this._urlMovies}/${movieId}/likes`, res)
        })
    }
}

const mainApi = new Api({
    url: BASE_URL})

export default mainApi;