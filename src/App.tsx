import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import Layout from './layout/Layout';
import CartPage from './pages/CartPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/cart" element={<CartPage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
