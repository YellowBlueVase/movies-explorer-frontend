import './Portfolio.css';

function Portfolio() {

    const portfolio = ['Статичный сайт', 'Адаптивный сайт', 'Одностраничное приложение']

    return (
        <div className="portfolio">
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
                        <div>
                            <div key={`${item}1`} className='portfolio__item'>
                                <div key={`${item}2`} className="portfolio__item_name">{item}</div>
                                <div key={`${item}3`} className="portfolio__item_link-logo">↗</div>
                            </div>
                            <div key={`${item}4`} className={separatorTag}></div>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Portfolio;