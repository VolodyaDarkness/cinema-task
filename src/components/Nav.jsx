import React from 'react';
import {Link} from 'react-router-dom';

export const Nav = () => (
	<div className="nav-header">
		<ul className="nav-list">
			<Link to="/" id="film-catalog"><li>Список Фильмов</li></Link>
			<Link to="/schedule" id="schedule"><li>Расписание</li></Link>
		</ul>
	</div>
);