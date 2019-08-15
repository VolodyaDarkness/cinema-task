import React from 'react';
import axios from 'axios';

import {URL_SPACE_SHADOW} from '../constants';
import {Places, Form} from './index';

export class ModalContent extends React.Component{

    state = {
        space: [],
        choosenPlace: null,
        showForm: false,
        user: null
    };

    getPlaceArray = (arr) =>{
        const getRandomInt = (min, max) => {
            return Math.floor(Math.random()*(max-min)) + min;
        };

        const sortedByRow = arr.sort((a, b) => {
            if (a.row > b.row){
                return 1;
            }

            if (a.row < b.row){
                return -1;
            }

            return 0;
        })

        const rows = sortedByRow.reduce((acc, item) => {
            if(!acc.length){
                return [[item]];
            }

            const hasSameRow = acc.some(rowArray => rowArray.some(obj => obj.row === item.row));

            if (hasSameRow){
                const updatedAcc = acc.map(rowArray => {
                    const hasSameRow = rowArray.some(obj => obj.row === item.row);

                    if(hasSameRow){
                        return [...rowArray, item];
                    }

                    return rowArray;
                });
                return updatedAcc;
            }else {
                return[...acc, [item]];
            }
        }, []);

        const rowsSortedByPlace = rows.map(item => {
            return item.sort((a, b) => {
                if (a.place > b.place){
                    return 1;
                }
    
                if (a.place < b.place){
                    return -1;
                }
    
                return 0;
            })
        });

        this.setState({space: rowsSortedByPlace.map((item =>{
            const random = getRandomInt(2, 6);
            return item.map(elem => {
                if(elem.place % random === 0){
                    return {...elem,
                        booked: true
                    }
                }               
                return elem;
            });
        }))
    });

    };

    componentDidMount(){
        axios.get(`${URL_SPACE_SHADOW}?session=${this.props.session._id}`)
			.then(({data}) => {
                this.getPlaceArray(data.space);
            })
			.catch((error) => {
				console.error(error);
            });
    }

    handleChoosePlace = (data) =>{
        this.setState({choosenPlace: data});
    };

    handleOpenForm = () =>{
        this.setState({showForm: true});
    };

    handleClickBuy = (data) =>{
        this.setState({user: data});
    }

    render (){
        const {space, choosenPlace, showForm, user} = this.state;
        const {session, handleCloseModal} = this.props;
        return (
                <div className="modal-background">
                    <div className="modal-content">
                        <span className="btn-close" onClick={handleCloseModal}>X</span>
                        <h1>{session.movie.title}</h1>
                        <div className="modal-info">                       
                            <div>Зал : <span>{session.room}</span></div>
                            <div>Время сеанса : {new Date(session.date).toLocaleTimeString().slice(0, -3)}</div>
                            <div>Цена : {session.costs} грн.</div>
                        </div>
                        {
                            user
                            ? <div className="bought-ticket">
                                <h3>Спасибо за покупку {user.name}!</h3>
                                <p>Билет на {choosenPlace.row} ряд, {choosenPlace.place} место отправлен на e-mail {user.email}</p>
                            </div>
                            : <React.Fragment>
                                <Places space={space} handleChoosePlace={this.handleChoosePlace}/>
                                {
                                    choosenPlace && 
                                    <div className="choosen-place">
                                        <h2>Выбрано ряд : {choosenPlace.row} место {choosenPlace.place}</h2>
                                        {
                                            showForm
                                            ? <Form handleSubmitForm={this.handleClickBuy}></Form>
                                            : <button className="btn-pass" onClick={this.handleOpenForm}>Оформить Билет</button>
                                        }    
                                    </div>
                                }
                            </React.Fragment>
                        }
                        
                    </div>
                </div>
        );
    }
}