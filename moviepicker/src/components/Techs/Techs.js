import './Techs.css';

function Techs() {

    const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

    return (
        <section className="techs">
            <div className='techs__title'>Технологии</div>
            <div className='techs__separator-h'></div>
            <div className='techs__header'>7 технологий</div>
            <div className='techs__header_description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</div>
            <div className='techs__technologies-box'>
            {technologies.map(t => {
                return (
                    <div key={t} className='techs__technologies-box_button'>{t}</div>
                );
                })}
            </div>
        </section>
    )
}

export default Techs;