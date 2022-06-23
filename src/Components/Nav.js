import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../Context';

const Nav = () => {
	const { cart, setCart } = useContext(Cart);
	return (
		<nav className='nav'>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/cart'>Cart ({cart.length})</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
