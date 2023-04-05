import { useEffect } from 'react';
import './Page404.css';

function Page404({getBack}) {

    useEffect(() => {
        document.title = "404 - Страница не найдена"
        }, [])

    return (
        <section className="page404">
            <div className='page404__main-text'>404</div>
            <div className='page404__description'>Страница не найдена</div>
            <button className='page404__back' onClick={getBack}>Назад</button>
        </section>
    )
}

export default Page404;