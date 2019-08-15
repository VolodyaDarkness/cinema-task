import React from 'react';
import {connect} from 'react-redux';

import {getSessions} from '../actions';
import {dateOptions} from '../constants';
import {SessionsBlock} from '../components';

class Schedule extends React.Component{
    componentDidMount(){
        this.props.getSessions();
    }

    getSessions = () => {
        const {movies, sessions, rooms} = this.props;

        const sessionArray = movies.length && sessions.length && rooms.length ? sessions.map(item => {
            return item.map(elem => ({
                ...elem, 
                room: rooms.find(room => room._id === elem.room).name,
                movie: movies.find(movie => movie._id === elem.movie)
            }))
        }) : [];  
        return sessionArray.map(item =>{
            return item.filter(elem => elem.movie);
        });
    };

    render(){

        return (
            <div className="schedule">
                {
                    this.getSessions().map((item, i) => (
                        <div className="date-block" key={i}>
                            <h1>{new Date(item[0].date).toLocaleString('ru', dateOptions)}</h1>
                            <SessionsBlock key={i} moviesOnDate={item}/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

const mapDispatchToProps = {
    getSessions
}

const mapStateToProps = (state) => ({
    sessions: state.data.sessions,
    movies: state.data.movies,
    rooms: state.data.rooms
});

export const SheduleContainer = connect(mapStateToProps, mapDispatchToProps)(Schedule);