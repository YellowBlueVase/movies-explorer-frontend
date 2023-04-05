import {useEffect} from "react";
import { Link, withRouter } from "react-router-dom";
import './Register.css';
import useFormWithValidation from '../UseFormValidation/UseFormValidation';

const Register = ({ onRegister, greeting }) => {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
  const submitStyles = isValid ? 'register__submit' : 'register__submit_disabled'

  function handleSubmit(e){
      e.preventDefault();
      onRegister(values)
  } 

  useEffect(() => {        
    resetForm()
  }, [resetForm])

  useEffect(() => {
    document.title = "Регистрация";
  }, []);

  return (
    <form
    className={`register`}
    noValidate
    onSubmit={handleSubmit}
    >
        <Link to='/'><div className='register__logo'></div></Link>
        <div className='register__greeting'>{greeting}</div>
        <div className='register__form-flex'>
          <div className='register__container'>
            <h3 className='register__text'>Имя</h3>
            <input
                type="text"
                name="name"
                required
                minLength="2"
                maxLength="200"
                pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                className={`register__input ${errors.name && 'register__input_error'}`}
                value={values.name || ''}
                onChange={handleChange}
            />
            <div className='register__error'>{errors.name || ''}</div>
          </div>
          <div className='register__container'>
            <h3 className='register__text'>E-mail</h3>
            <input
                 type="email"
                 name="email"
                 required
                 minLength="2"
                 maxLength="200"
                 className={`register__input ${errors.email && 'register__input_error'}`}
                 value={values.email || ''}
                 onChange={handleChange}
            />
            <div className='register__error'>{errors.email || ''}</div>
          </div>
          <div className='register__container'>
            <h3 className='register__text'>Пароль</h3>
            <input
                 type="password"
                 name="password"
                 required
                 minLength="2"
                 maxLength="200"
                 className={`register__input ${errors.password && 'register__input_error'}`}
                 value={values.password || ''}
                 onChange={handleChange}
            />
            <div className='register__error'>{errors.password || ''}</div>
          </div>
        </div>
        <div className="register__bottom">
          <button
            type="submit"
            name="submit"
            className={submitStyles}
            disabled={!isValid}>
            Зарегистрироваться
          </button>
          <Link to="/signin" className='register__login-text'>
            Уже зарегистрированы?
            <div className='register__login-text_link'>
            &nbsp; Войти
            </div>
          </Link>
        </div>
        
    </form>
  )
};

export default withRouter(Register);
