import {useState, useEffect} from "react";
import { Link, withRouter } from "react-router-dom";
import './Register.css';

const Register = ({ onRegister, greeting }) => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((inputData) => ({ ...inputData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(inputData.name, inputData.email, inputData.password)
  }

  useEffect(() => {
    document.title = "Регистрация"
    }, [])

  return (
    <form
    className={`form-container_register`}
    onSubmit={handleSubmit}
    >
        <Link to='/'><div className='form-container__logo_register'></div></Link>
        <div className='form-container__greeting_register'>{greeting}</div>
        <h3 className='form-container__text_register'>Имя</h3>
        <input
            id="form-container__input_name_register"
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="200"
            className="form-container__input_register"
            value={inputData.name || ''}
            onChange={handleChange}
        />
        <h3 className='form-container__text_register'>E-mail</h3>
        <input
            id="form-container__input_email_register"
            type="text"
            name="email"
            required
            minLength="2"
            maxLength="200"
            className="form-container__input_register"
            value={inputData.email || ''}
            onChange={handleChange}
        />
        <h3 className='form-container__text_register'>Пароль</h3>
        <input
            id="form-container__input_password_register"
            type="password"
            name="password"
            required
            minLength="2"
            maxLength="200"
            className="form-container__input_register"
            value={inputData.password || ''}
            onChange={handleChange}
            />
        <button
                type="submit"
                name="submit"
                className="form-container__submit_register">
                Зарегистрироваться
            </button>
        <Link to="/signin" className='form-container__register-text_register'>
            Уже зарегистрированы?
            <div className='form-container__register-text_link_register'>
            &nbsp; Войти
            </div>
        </Link>
    </form>
  )
};

export default withRouter(Register);
