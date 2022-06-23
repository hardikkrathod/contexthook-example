import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CartPage from './Components/CartPage';
import Nav from './Components/Nav';

function App() {
	//const [cart, setCart] = useState([]);
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/cart' element={<CartPage />} />
				{/*<Route exact path='/' element={<Home cart={cart} setCart={setCart} />} />
				<Route exact path='/cart' element={<CartPage cart={cart} setCart={setCart} />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
