import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import { useEffect } from "react";
import './Main.css';


function Main() {  
  const blocks = [
    {name: "О проекте", link: "about-project"}, 
    {name: "Технологии", link: "technologies"}, 
    {name: "Студент", link: "about-me"}, 
  ];

  useEffect(() => {
    document.title = "О проекте"
  }, [])

  return (
    <main>
      <Promo>
        {blocks.map((block) => {
          return (
            <NavTab 
              key={block.name}
              block={block.name}
              link={block.class}
            />
          )
        })}
      </Promo>
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
