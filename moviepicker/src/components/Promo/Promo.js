import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo({children}) {

    return (
        <section className="promo">
            <div className="promo__header">Учебный проект студента факультета Веб-разработки.</div>
            <div className="promo__blocks">
                {children}
            </div>
        </section>
    )
}

export default Promo;