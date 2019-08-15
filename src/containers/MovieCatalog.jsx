import React, {useState} from 'react';
import {connect} from 'react-redux';
import {MovieList} from '../components';

const MovieCatalog = ({movies, genres}) =>{

		const [filteredMovies, setFilteredMovies] = useState([]);
		const [valueInput, setValueInput] = useState("");
		const [setValueSelect] = useState("");

		const handleChangeInput = (e) => {
			const {value} = e.target;
			setValueInput(value);
			const arr = value
			? filteredMovies.length
				? filteredMovies.filter(item => (
					item.title.toLowerCase().includes(value.toLowerCase()))
					) : movies.filter(item => (
						item.title.toLowerCase().includes(value.toLowerCase()))
					)
			: [];

			setFilteredMovies(arr);
		};

		const handleChangeSelect = (event) => {
			const {value} = event.target;
			setValueSelect(value);
			setFilteredMovies(movies.filter(item => (
				item.genre && item.genre.some(elem => elem.trim() === value)
			)));
		};

	return(
		<React.Fragment>
			<div className="movie-filter">	
				<div>
						<select onChange={handleChangeSelect}>
							{genres.map((item, i) => <option key={i} value={item}>{item}</option>)}
						</select>
						<span>Поиск : </span>
							<input 
								type="text" 
								onChange={handleChangeInput} 
								value={valueInput} 
								placeholder="Введите название фильма"
							/>						
				</div>	
			</div>
			<div className="movie-list">				
				{filteredMovies.length ? filteredMovies.map((item, i) => (<MovieList key={i} movie={item}/>))
				: movies.map((item, i) => (<MovieList key={i} movie={item}/>))
				}
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	movies: state.data.movies,
	genres: state.data.genres
});

export const MovieCatalogContainer = connect(mapStateToProps)(MovieCatalog);