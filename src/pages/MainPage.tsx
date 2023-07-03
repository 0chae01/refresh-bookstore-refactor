import React from 'react';
import Logo from '../components/Logo';

const MainPage = () => {
	return (
		<div className="w-full md:w-[1048px] flex flex-col justify-center items-center">
			<Logo color="#1DC078" width="300px" />
			Hello, Refresh Bookstore!
		</div>
	);
};

export default MainPage;
