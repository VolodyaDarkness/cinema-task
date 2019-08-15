import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import {getMovies} from '../actions';
import {MovieContainer, SheduleContainer, MovieCatalogContainer} from '../containers';

class Main extends React.Component {
	

	componentDidMount(){
		this.props.getMovies();
	}

	render () {

		return (
			<main>
				<Switch>				
					<Route exact path={"/"} component={MovieCatalogContainer}/>
					<Route exact path={"/movie/:id"} component={MovieContainer}/>
					<Route exact path={"/schedule"} component={SheduleContainer}/>
				</Switch>			
			</main>
		)
	}
};

const mapDispatchToProps = {
	getMovies
};

const mapStateToProps = (state) => ({
	isLoading: state.loading.isLoading
});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);