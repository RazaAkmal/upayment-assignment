import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { CreateProduct, Home, ProductDetail } from './pages';

function App() {
	return (
		<div className='container mx-auto'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/product/:id' element={<ProductDetail />} />
				<Route path='/createProduct' element={<CreateProduct />} />
			</Routes>
		</div>
	);
}

export default App;
