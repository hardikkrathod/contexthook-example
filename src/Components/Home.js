import React, { useEffect, useState } from 'react';
import Product from './Product';

//const Home = ({ cart, setCart }) => {
const Home = () => {
	const [product, setProduct] = useState([]);
	useEffect(() => {
		// async function getData() {
		// 	const data = await fetch('https://dummyjson.com/products');
		// 	const prod = await data.json();
		// 	setProduct(prod.products);
		// }
		function getData() {
			fetch('https://dummyjson.com/products')
				.then(data => data.json())
				.then(data => setProduct(data.products));
		}
		getData();
	}, []);

	return (
		<div className='product-main'>
			{product?.map(data => {
				//return <Product prod={data} key={data.id} cart={cart} setCart={setCart} />;
				return <Product prod={data} key={data.id} />;
			})}
		</div>
	);
};

export default Home;
