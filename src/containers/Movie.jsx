import React, {Component} from 'react';
import { connect } from 'react-redux';
import {InfoBlock} from '../components';

class Movie extends Component {
    state ={
        movie: {}
    };

    componentDidMount(){
        const {match, movies} = this.props;
        const movieId = match.params.id;
        const movie = movies.find(item => item._id === movieId);

        this.setState({movie});
    };

    render(){
        const {movie} = this.state;
        const actors = movie.actors ? movie.actors.join(", ") : "";
        const genre = movie.genre ? movie.genre.join(", ") : "";
        const country = movie.country ? movie.country.join(", ") : "";
        return (
            <div>
                <div className="movie-description">
                    <div>
                        <img src={movie.poster} alt="poster"/>
                    </div>
                    <div>
                        <h2>{movie.title}</h2>
                        <InfoBlock title={"Страна выпуска : "} text={country}/>
                        <InfoBlock title={"Жанр : "} text={genre}/>
                        <InfoBlock title={"Актеры : "} text={actors}/>
                        <InfoBlock title={"Ограничение по возрасту : "} text={movie.age +" +"}/>
                        <InfoBlock title={"Описание : "} text={movie.description}/>                  
                    </div>               
                </div>
                <div className="movie-description-video">
                    <h2>Трейлер</h2>
                    <iframe src={movie.trailer} title="trailer" allowFullScreen />
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
	movies: state.data.movies
});

export const MovieContainer = connect(mapStateToProps)(Movie);