import {useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';
import useFormWithValidation from '../UseFormValidation/UseFormValidation';

const Login = ({onLogin, greeting}) => {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
    const submitStyles = isValid ? 'login__submit' : 'login__submit_disabled'

    function handleSubmit(e){
        e.preventDefault();
        onLogin(values)
    } 

    useEffect(() => {
        document.title = "Авторизация";
        resetForm()
        }, [resetForm])

    return (
        <form
            className={`login`}
            noValidate
            onSubmit={handleSubmit}
        >
            <Link to='/'><div className='login__logo'></div></Link>
            <div className='login__greeting'>{greeting}</div>
            <div className='login__form-flex'>
                <div className='login__container'>
                    <h3 className='login__text'>E-mail</h3>
                    <input
                        type="email"
                        name="email"
                        required
                        minLength="2"
                        maxLength="200"
                        className={`login__input ${errors.email && 'login__input_error'}`}
                        value={values.email || ''}
                        onChange={handleChange}
                    />
                    <div className='login__error'>{errors.email || ''}</div>
                </div>
                <div className='login__container'>
                    <h3 className='login__text'>Пароль</h3>
                    <input
                        type="password"
                        name="password"
                        required
                        minLength="2"
                        maxLength="200"
                        className={`login__input ${errors.password && 'login__input_error'}`}
                        value={values.password || ''}
                        onChange={handleChange}
                        />
                    <div className='login__error'>{errors.password || ''}</div>
                </div>
            </div>
            <div className='login__bottom'>
                <button
                    type="submit"
                    name="submit"
                    className={submitStyles}
                    disabled={!isValid}    
                >
                    Войти
                </button>
                <Link to='/signup' className='login__register-text'>
                    Еще не зарегистрированы?
                    <div className='login__register-text_link'>
                    &nbsp; Регистрация
                    </div>
                </Link>
            </div>
            
        </form>
    )
}

export default withRouter(Login);