import {useContext, useState, useEffect} from "react";
import { Link, withRouter } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';

const Profile = ({onSignOut}) => {

    function handleSignOut() {
        onSignOut()
    }

    useEffect(() => {
        document.title = "Аккаунт"
      }, [])


    // const CurrentUserContext = useContext(CurrentUserContext);
    
    return (
        <div className='profile-page'>
            <h2 className="profile-page__greeting">{`Привет, ${CurrentUserContext.name}`}</h2>
            <div className="profile-page__field" id="name">
                <h3 className="profile-page__field_name">Имя</h3>
                <h3 className="profile-page__field_value">Имя пользователя{CurrentUserContext.name}</h3>
            </div>
            <div className="profile-page__separator"></div>
            <div className="profile-page__field" id="email">
                <h3 className="profile-page__field_name">E-mail</h3>
                <h3 className="profile-page__field_value">Емейл пользователя{CurrentUserContext.email}</h3>
            </div>
            <div className='profile-page__edit'>Редактировать</div>
            <div className='profile-page__signout' onClick={onSignOut}>Выйти из аккаунт</div>
        </div>
    )
    };

export default withRouter(Profile);
