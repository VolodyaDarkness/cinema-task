import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import {Content} from '../containers/Main';
import {getMovies} from '../actions';

class Main extends React.Component {

	componentDidMount(){
		this.props.getMovies();
	}

	render () {
		return (
			<Content>
				<Switch>
					<Route path={"/"} exact/>
					<Route path={"/movie/:id"}/>
				</Switch>
			</Content>
		)
	}
}

const mapDispatchToProps = {
	getMovies
}

export const MainContainer = connect(null, mapDispatchToProps)(Main);