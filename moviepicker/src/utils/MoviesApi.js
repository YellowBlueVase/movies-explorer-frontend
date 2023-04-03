import { MOVIES_URL } from "./constants";
import { Api } from "./MainApi";

class ApiExternal extends Api {
    constructor(config) {
      super(config);
      this._url = `${config.url}/`;
    }

    getInitialMovieCards() {
      return fetch(this._url, {
        method: 'GET',
        })
        .then((res) => {
          return this._getResponseData(this._url, res)
        })
    }
}

const moviesApi = new ApiExternal({
    url: MOVIES_URL})

export default moviesApi;