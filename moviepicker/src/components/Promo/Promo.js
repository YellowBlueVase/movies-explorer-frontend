import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo() {

    const blocks = ["О проекте", "Технологии", "Студент"];

    return (
        <div className="promo">
            <div className="promo__header">Учебный проект студента факультета Веб-разработки.</div>
            <div className="promo__blocks">
                {blocks.map((block, index) => {
                    return (
                        <NavTab 
                            key={block}
                            block={block}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Promo;