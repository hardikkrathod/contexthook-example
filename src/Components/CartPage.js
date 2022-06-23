import React, { useContext, useEffect, useState } from 'react';
import { Cart } from '../Context';
import Product from './Product';

const CartPage = () => {
	const { cart, setCart } = useContext(Cart);
	const [total, setTotal] = useState();
	useEffect(() => {
		setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
	}, [cart]);
	return (
		<div>
			<div>My Cart</div>
			<div>Total {total}</div>
			<div className='product-main'>
				{cart.map(prod => {
					return <Product prod={prod} key={prod.id} />;
				})}
			</div>
		</div>
	);
};

export default CartPage;
