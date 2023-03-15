import {Link} from "react-router-dom";
import { ADAPTIVE_WEB_GIT, SPA_WEB_GIT, STATIC_WEB_GIT } from "../../utils/constants";
import './Portfolio.css';

function Portfolio() {

    const portfolio = [
        {name: 'Статичный сайт',
        link: STATIC_WEB_GIT}, 
        {name: 'Адаптивный сайт',
        link: ADAPTIVE_WEB_GIT},
        {name: 'Одностраничное приложение',
        link: SPA_WEB_GIT}
    ]

    return (
        <section className="portfolio">
            <div className='portfolio__title'>Портфолио</div>
            <div className='portfolio__box'>
                {portfolio.map((item, index) => {
                    let separator = true;
                    if (index === portfolio.length - 1) {
                        separator = false;
                    }
                    const separatorTag = (
                        `${separator ? 'portfolio__separator-h' : ''}`
                      ); 

                    return (
                        <a href={item.link} className='portfolio__link' target="_blank" key={index}>
                            <div className='portfolio__item'>
                                <div className="portfolio__item_name">{item.name}</div>
                                <div className="portfolio__item_link-logo"></div>
                            </div>
                            <div className={separatorTag}></div>
                        </a>
                    )}
                )}
            </div>
        </section>
    )
}

export default Portfolio;