import './AboutProject.css';

function AboutProject() {

    return (
        <section className="about-project" id="about-project">
            <div className='about-project__title'>О проекте</div>
            <div className='about-project__separator-h'></div>
            <div className="about-project__text-blocks">
                <div className="about-project__text-blocks_block">
                    <div className="about-project__text-blocks_block_title">Дипломный проект включал 5 этапов</div>
                    <div className="about-project__text-blocks_block_description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</div>
                </div>
                <div className="about-project__text-blocks_block">
                    <div className="about-project__text-blocks_block_title">На выполнение диплома ушло 5 недель</div>
                    <div className="about-project__text-blocks_block_description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</div>
                </div>
            </div>
            <div className="about-project__progress-bar">
                <div className="about-project__progress-bar_backend">
                    <div className="about-project__progress-bar_bar about-project__progress-bar_bar_backend">1 неделя</div>
                    <div className="about-project__progress-bar_name">Back-end</div>
                </div>
                <div className="about-project__progress-bar_frontend">
                    <div className="about-project__progress-bar_bar about-project__progress-bar_bar_frontend">4 недели</div>
                    <div className="about-project__progress-bar_name">Front-end</div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;