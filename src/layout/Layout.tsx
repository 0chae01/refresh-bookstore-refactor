import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
	children: ReactNode;
};

const Layout = (props: LayoutProps) => {
	return (
		<>
			<Header />
			<div className=" w-full min-h-[70vh] mt-[80px] flex flex-col items-center">
				{props.children}
			</div>
			<Footer />
		</>
	);
};

export default Layout;
