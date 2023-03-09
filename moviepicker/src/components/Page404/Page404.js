import './Page404.css';
import { Link } from'react-router-dom';

function Page404() {

    return (
        <div className="page404">
            <div className='page404__main-text'>404</div>
            <div className='page404__description'>Страница не найдена</div>
            <Link to='/' className='page404__back'>Назад</Link>
        </div>
    )
}

export default Page404;