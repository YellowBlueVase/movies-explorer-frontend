import './Page404.css';
import { Link } from'react-router-dom';

function Page404() {

    return (
        <section className="page404">
            <div className='page404__main-text'>404</div>
            <div className='page404__description'>Страница не найдена</div>
            <Link to='/' className='page404__back'>Назад</Link>
        </section>
    )
}

export default Page404;