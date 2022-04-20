import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateProduct = () => {
	const [inputValues, setInputValues] = useState({
		name: '',
		description: '',
		url: '',
		price: '',
		email: '',
	});
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let res = await fetch(
				'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products',
				{
					method: 'POST',
					body: JSON.stringify(inputValues),
				}
			);
			if (res.status === 201) {
				setInputValues({
					name: '',
					description: '',
					url: '',
					price: '',
					email: '',
				});
				setMessage('User created successfully');
				let homeButton = document.getElementById('home');
				homeButton.click();
			} else {
				setMessage('Some error occured');
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleInputValues = (e) => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='text-center'>
			<h2 className='text-2xl'>Create Product</h2>
			<form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-lg mx-auto'>
				<input
					className='p-3 rounded-sm'
					name='name'
					type='text'
					placeholder='Product name'
					value={inputValues.name}
					onChange={handleInputValues}
				/>
				<textarea
					className='p-3 rounded-sm'
					name='description'
					placeholder='Description'
					value={inputValues.description}
					onChange={handleInputValues}
				></textarea>
				<input
					className='p-3 rounded-sm'
					type='text'
					name='url'
					placeholder='image URL'
					value={inputValues.url}
					onChange={handleInputValues}
				/>
				<input
					className='p-3 rounded-sm'
					type='text'
					name='price'
					placeholder='Price'
					value={inputValues.price}
					onChange={handleInputValues}
				/>
				<input
					className='p-3 rounded-sm'
					type='email'
					name='email'
					placeholder='Email'
					value={inputValues.email}
					onChange={handleInputValues}
				/>
				<button
					type='submit'
					className='border uppercase p-3 rounded-sm bg-white'
				>
					submit
				</button>
				<div className='text-green-500 mb-4'>
					{message ? <p>{message}</p> : null}
				</div>
			</form>

			<Link
				id='home'
				to='/'
				className='bg-blue-800 text-white px-4 py-2 rounded-md'
			>
				Home
			</Link>
		</div>
	);
};

export default CreateProduct;
