import axios from 'axios';

import {URL_MOVIES} from '../constants';

export const getMovies = () => {
	return dispatch => {
		axios.get(URL_MOVIES)
			.then(({data}) => console.log("data", data))
			.catch((error) => console.error(error));
	}	
};