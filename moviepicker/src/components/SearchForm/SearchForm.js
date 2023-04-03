import React, { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../UseFormValidation/UseFormValidation';
import './SearchForm.css';

function SearhForm({checkboxText, handleShortsActive, handleSearchSubmit}) {
    const { values, handleChange, isValid, resetForm } = useFormWithValidation();
    const [QueryError, setQueryError] = useState('');

    useEffect(() => {
        setQueryError('')
      }, [isValid]);

    function handleSubmit(e) {
        e.preventDefault();
        isValid ? handleSearchSubmit(values.search.toLowerCase()) : setQueryError('Введите название фильма или ключевые слова');
        resetForm();
    };

    return (
        <div>
            <form className="search-box" name="search" noValidate onSubmit={handleSubmit}>
                <div className="search-box__logo"></div>
                <input 
                    className="search-box__movie" 
                    type="text"
                    name="search"
                    placeholder='Фильмы'
                    autoComplete="off"
                    required
                    value={values.search || ''}
                    onChange={handleChange}
                ></input>
                <span className="search-box__error">{QueryError}</span>
                <button type="submit" className="search-box__submit"></button>
                <div className="search-box__separator-v"></div>
                <div className='search-box__filter'> 
                    <FilterCheckbox 
                        handleShortsActive={handleShortsActive}
                        text={checkboxText}
                    />
                </div>
            </form>
            <div className="search-box__separator-h"></div>
        </div>
    )
}

export default SearhForm;