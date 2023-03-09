import {useContext} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import { useEffect } from "react";
import './Main.css';


function Main() {

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    document.title = "О проекте"
  }, [])

  return (
    <main>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
