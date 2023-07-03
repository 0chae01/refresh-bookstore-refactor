import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import Layout from './layout/Layout';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<MainPage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
