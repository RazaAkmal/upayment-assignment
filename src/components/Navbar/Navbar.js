const Navbar = () => {
	return (
		<nav className=' flex justify-center md:justify-between rounded shadow-sm bg-white p-4 my-8'>
			<h1 className='italic text-3xl font-bold'>UPayments Store</h1>
			<button className='italic hidden md:block text-3xl font-bold'>
				Register
			</button>
		</nav>
	);
};

export default Navbar;
