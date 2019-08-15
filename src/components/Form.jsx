import React, {useState} from 'react';

export const Form = ({handleSubmitForm}) =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleClickBuy = (e) => {
        e.preventDefault();
        handleSubmitForm({name, email});
    };

    return (
        <form className="buy-form">
            <div>            
                <input value={name} onChange={handleChangeName} placeholder="Введите имя"/>
            </div>
            <div>            
                <input value={email} onChange={handleChangeEmail} placeholder="Введите E-Mail"/>
            </div>
            <button className="btn-form-buy" disabled={!name && !email} onClick={handleClickBuy}>Купить Билет</button>
        </form>
    )
};