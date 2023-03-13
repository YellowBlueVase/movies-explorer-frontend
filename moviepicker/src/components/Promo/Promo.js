import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo({children}) {

    return (
        <div className="promo">
            <div className="promo__header">Учебный проект студента факультета Веб-разработки.</div>
            <div className="promo__blocks">
                {children}
            </div>
        </div>
    )
}

export default Promo;