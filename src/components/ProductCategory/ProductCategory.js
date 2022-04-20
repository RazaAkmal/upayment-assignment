import { useState } from 'react';
const ProductCategory = ({ searchText }) => {
	const [value, setValue] = useState('');
	const handleChange = (e) => {
		setValue(e.target.value);
		searchText(e.target.value);
		console.log(e.target.value);
	};
	return (
		<div>
			<select value={value} onChange={handleChange}>
				<option value=''>Show All</option>
				<option value='electronic'>Electronic</option>
				<option value='furnitures'>Furnitures</option>
				<option value='clothing'>Clothing</option>
				<option value='accessories'>Accessories</option>
			</select>
		</div>
	);
};

export default ProductCategory;
