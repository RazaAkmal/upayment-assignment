import { useEffect, useState } from 'react';
import {
	CreateProductBtn,
	ProductCard,
	ProductCategory,
} from '../../components';

const Home = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// const [productCategory, setProductCategory] = useState('');
	const [term, setTerm] = useState('');

	useEffect(() => {
		fetch(
			`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products?category=${term}`
		)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [term]);
	return (
		<div className=''>
			<ProductCategory searchText={(text) => setTerm(text)} />

			<div className='md:mx-40 my-10'>
				{isLoading ? (
					<h3 className='text-6xl text-center mx-auto mt-32'>Loading...</h3>
				) : (
					<div className='grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-4'>
						{products.map((product) => (
							<ProductCard product={product} key={product.id} />
						))}
					</div>
				)}
			</div>
			<CreateProductBtn />
		</div>
	);
};

export default Home;
