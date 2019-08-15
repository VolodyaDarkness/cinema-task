import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../images/logo.png';

export const Logo = () => (
	<Link to="/" className="logo-header">
		<img src={logo} className="logo-image" alt="logo"/>
	</Link>
);