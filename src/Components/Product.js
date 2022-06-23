import React, { useContext } from 'react';
import { Cart } from '../Context';

//const Product = ({ prod, cart, setCart }) => {
const Product = ({ prod }) => {
	const { cart, setCart } = useContext(Cart);
	return (
		<div className='product'>
			<div className='product-sub'>
				<span>{prod.title}</span>
				<div>{prod.brand}</div>
				<div>₹{prod.price}</div>
				{cart.includes(prod) ? (
					<button
						onClick={() => {
							setCart(cart.filter(c => c.id !== prod.id));
						}}>
						Remove from Cart
					</button>
				) : (
					<button
						onClick={() => {
							setCart([...cart, prod]);
						}}>
						Add to Cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Product;
