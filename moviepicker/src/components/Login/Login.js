import {useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';

const Login = ({onLogin, greeting}) => {
    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setInputData((inputData) => ({...inputData, [name]: value}));
    }

    function handleSubmit(e){
        e.preventDefault();
        if (!inputData.email || !inputData.password){
          return;
        };
        onLogin(inputData.password, inputData.email)
    } 

    useEffect(() => {
        document.title = "Авторизация";
        }, [])

    return (
        <form
        className={`form-container_login`}
        onSubmit={handleSubmit}
        >
            <Link to='/'><div className='form-container__logo_login'></div></Link>
            <div className='form-container__greeting_login'>{greeting}</div>
            <h3 className='form-container__text_login'>E-mail</h3>
            <input
                id="form-container__input_email_login"
                type="text"
                name="email"
                required
                minLength="2"
                maxLength="200"
                className="form-container__input_login"
                value={inputData.email || ''}
                onChange={handleChange}
            />
            <h3 className='form-container__text_login'>Пароль</h3>
            <input
                id="form-container__input_password_login"
                type="password"
                name="password"
                required
                minLength="2"
                maxLength="200"
                className="form-container__input_login"
                value={inputData.password || ''}
                onChange={handleChange}
                />
            <button
                type="submit"
                name="submit"
                className="form-container__submit_login">
                Войти
            </button>
            <Link to='/signup' className='form-container__register-text_login'>
                Еще не зарегистрированы?
                <div className='form-container__register-text_link_login'>
                &nbsp; Регистрация
                </div>
            </Link>
        </form>
    )
}

export default withRouter(Login);