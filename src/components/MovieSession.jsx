import React, {useState} from 'react';

import {ModalBuyTicket} from './ModalBuyTicket';

export const MovieSession = ({session}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    }
    
    return(
        <React.Fragment>
            <div className="movie-session">
                <div className="movie-session-poster">
                    <img src={session.movie.poster} alt="movie-poster"/>
                    <br></br>
                    <button onClick={toggleShowModal}>Купить билет</button>            
                </div>
                <div className="movie-session-info">
                    <h2>{session.movie.title}</h2>
                    <div className="movie-session-info-room">Зал : <span>{session.room}</span></div>
                    <div className="movie-session-info-time">Время сеанса : {new Date(session.date).toLocaleTimeString().slice(0, -3)}</div>
                </div>
                <div className="movie-session-description">
                    {session.movie.description}
                </div>      
            </div>
            {showModal && <ModalBuyTicket session={session} handleCloseModal={toggleShowModal}/>}
        </React.Fragment>
    );
};