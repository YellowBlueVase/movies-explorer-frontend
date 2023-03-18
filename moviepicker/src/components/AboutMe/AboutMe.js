import './AboutMe.css';
import {GITHUB_PAGE} from '../../utils/constants';

function AboutMe() {

    
    return (
        <section className="about-me" id="about-me">
            <div className='about-me__title'>Студент</div>
            <div className='about-me__separator-h'></div>
            <div className='about-me__photo'></div>
            <div className='about-me__name'>Кирилл</div>
            <div className='about-me__description'>Веб-разработчик, 35 лет</div>
            <div className='about-me__details'>Как-нибудь заполню</div>
            <a href={GITHUB_PAGE} className="about-me__github" target="_blank">Github</a>
        </section>
    )
}

export default AboutMe;