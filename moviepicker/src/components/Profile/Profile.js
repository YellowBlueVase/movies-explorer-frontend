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

    const currentUser = useContext(CurrentUserContext);
    
    return (
        <section className='profile-page'>
            <h2 className="profile-page__greeting">{`Привет, ${currentUser.name}`}</h2>
            <div className="profile-page__field profile-page__field_first">
                <h3 className="profile-page__field_name">Имя</h3>
                <h3 className="profile-page__field_value">{currentUser.name}</h3>
            </div>
            <div className="profile-page__separator"></div>
            <div className="profile-page__field profile-page__field_last">
                <h3 className="profile-page__field_name">E-mail</h3>
                <h3 className="profile-page__field_value">{currentUser.email}</h3>
            </div>
            <div className='profile-page__edit'>Редактировать</div>
            <div className='profile-page__signout' onClick={onSignOut}>Выйти из аккаунт</div>
        </section>
    )
    };

export default withRouter(Profile);
