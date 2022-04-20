import { Link } from 'react-router-dom';

const CreateProductBtn = () => {
	return (
		<Link
			to='/createProduct'
			className='bg-blue-800 text-white fixed bottom-10 right-10 p-3 rounded-full'
		>
			Create Product
		</Link>
	);
};

export default CreateProductBtn;
