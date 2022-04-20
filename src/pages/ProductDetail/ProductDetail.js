import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
	let { id } = useParams();

	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch(
			`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
		)
			.then((res) => res.json())
			.then((data) => setProduct(data))
			.catch((err) => console.log(err));
	}, [id]);
	return (
		<main className='container px-10'>
			<div className='flex gap-4 border-b-2 border-black pb-5'>
				<div className='bg-white p-2 shadow-sm rounded-lg grid place-items-center w-50 h-80 overflow-hidden max-h-full'>
					<img src={product.avatar} alt={product.name} className='max-w-full' />
				</div>
				<div className='flex flex-col justify-between'>
					<h2 className='text-3xl font-bold'>{product.name}</h2>
					<p className='font-bold'>${product.price}</p>
				</div>
			</div>
			<div>
				<h3 className='text-2xl'>Description</h3>
				<p>{product.description}</p>
			</div>
		</main>
	);
};

export default ProductDetail;
