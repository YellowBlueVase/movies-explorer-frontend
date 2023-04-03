import {useContext, useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';
import useFormWithValidation from '../UseFormValidation/UseFormValidation';

const Profile = ({onSignOut, onProfileUpdate}) => {
    const currentUser = useContext(CurrentUserContext);
    const [disabled, setDisabled] = useState(true);
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

    function handleSubmit(e){
        e.preventDefault();
        onSignOut(values)
    } 

    function handleSubmit(e) {
        e.preventDefault();
        onProfileUpdate(values)
        setDisabled(!disabled)
    }

    function handleDisable(e) {
        e.preventDefault();
        setDisabled(!disabled)
    }

    const fieldActive = disabled ? '' : 'profile-page__field_value_active';

    const editActive = disabled ? 'profile-page__hidden' : isValid ? 'profile-page__edit_active' : 'profile-page__edit_disabled';

    const hidden = disabled ? '' : 'profile-page__hidden';

    useEffect(() => {
        document.title = "Аккаунт"
      }, [])

    
    return (
        <form 
            className='profile-page' 
            noValidate
            onSubmit={handleSubmit}
        >
            <h2 className="profile-page__greeting">{`Привет, ${currentUser.name}`}</h2>
            <div className="profile-page__field profile-page__field_first">
                <h3 className="profile-page__field_name">Имя</h3>
                <input 
                    type="text"
                    name="name" 
                    required 
                    minLength="2"
                    maxLength="30"
                    pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                    className={`profile-page__field_value ${fieldActive}`} 
                    value={values.name || currentUser.name}
                    disabled={disabled} 
                    onChange={handleChange}
                ></input>
                <span className='profile-page__error'>{errors.name || ''}</span>
            </div>
            <div className="profile-page__separator"></div>
            <div className="profile-page__field profile-page__field_last">
                <h3 className="profile-page__field_name">E-mail</h3>
                <input 
                    type="email"
                    name="email"
                    required
                    minLength="2"
                    maxLength="200"
                    className={`profile-page__field_value ${fieldActive}`} 
                    value={values.email || currentUser.email}
                    disabled={disabled} 
                    onChange={handleChange}
                ></input>
                <span className='profile-page__error'>{errors.email || ''}</span>
            </div>
            <button className={`profile-page__edit ${hidden}`} onClick={handleDisable}>Редактировать</button>
            <span className="profile-page__field_value_error"></span>
            <button 
                type="submit"
                className={`${editActive}`}
                onClick={handleSubmit}
                disabled={!isValid}
            >
                Сохранить
            </button>
            <button type="submit" className={`profile-page__signout ${hidden}`} onClick={onSignOut}>Выйти из аккаунт</button>
        </form>
    )
    };

export default withRouter(Profile);
