import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
	return (
		<Link
			to={`/product/${product.id}`}
			className='max-w-xs overflow-hidden mb-4'
		>
			<div className='bg-white p-2 shadow-sm rounded-lg grid place-items-center w-50 h-80 overflow-hidden'>
				<img src={product.avatar} alt={product.name} className='max-w-full' />
			</div>
			<div className='py-2'>
				<h2 className='font-semibold'>{product.name}</h2>
				<p className='text-center font-semibold'>${product.price}</p>
			</div>
		</Link>
	);
};

export default ProductCard;
