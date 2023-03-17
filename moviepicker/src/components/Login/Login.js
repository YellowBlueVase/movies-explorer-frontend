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
        className={`login`}
        onSubmit={handleSubmit}
        >
            <Link to='/'><div className='login__logo'></div></Link>
            <div className='login__greeting'>{greeting}</div>
            <h3 className='login__text'>E-mail</h3>
            <input
                type="text"
                name="email"
                required
                minLength="2"
                maxLength="200"
                className="login__input login__input_email"
                value={inputData.email || ''}
                onChange={handleChange}
            />
            <h3 className='login__text'>Пароль</h3>
            <input
                type="password"
                name="password"
                required
                minLength="2"
                maxLength="200"
                className="login__input login__input_password"
                value={inputData.password || ''}
                onChange={handleChange}
                />
            <button
                type="submit"
                name="submit"
                className="login__submit">
                Войти
            </button>
            <Link to='/signup' className='login__register-text'>
                Еще не зарегистрированы?
                <div className='login__register-text_link'>
                &nbsp; Регистрация
                </div>
            </Link>
        </form>
    )
}

export default withRouter(Login);