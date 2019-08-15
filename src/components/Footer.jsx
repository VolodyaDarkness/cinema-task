import React from 'react';
import { SocialIcon } from 'react-social-icons';

export const  Footer = () => (
	<footer>
		<ul className="footer-social">
			<li><span>Contact Us :</span></li>
			<li><SocialIcon url="http://twitter.com" /></li>
			<li><SocialIcon url="http://facebook.com" /></li>
			<li><SocialIcon url="http://google.com" /></li>
			<li><SocialIcon url="http://instagram.com" /></li>
		</ul>
	</footer>
);