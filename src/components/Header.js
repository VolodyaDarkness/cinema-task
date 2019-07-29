import React from 'react';

import {Logo} from './Logo';
import {Nav} from './Nav';
import {UserIcon} from './User';

export const Header = () => (
	<header>
		<div className="nav-field">
			<Logo/>
			<Nav/>
		</div>
		<div className="user-field">
			<UserIcon/>
		</div>
	</header>
);