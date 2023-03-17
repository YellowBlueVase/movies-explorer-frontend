import {Link, Route, Switch} from "react-router-dom";
import './Footer.css';
import { GITHUB_PAGE } from "../../utils/constants";
import { PRAKTIKUM_PAGE } from "../../utils/constants";

function Footer() {
    return (
      <footer className="footer">
        <Switch>
          <Route exact path={['/saved-movies', '/', '/movies']}>
            <div className="footer__project">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__separator"></div>
            <div className="footer__links">
              <p className="footer__links_copyright">&#169; {new Date().getFullYear()}</p>
              <a href={PRAKTIKUM_PAGE} className="footer__links_link" target="_blank">Яндекс.Практикум</a>
              <a href={GITHUB_PAGE} className="footer__links_link" target="_blank">Github</a>
            </div>
          </Route>
        </Switch>
      </footer>
    )
}

export default Footer