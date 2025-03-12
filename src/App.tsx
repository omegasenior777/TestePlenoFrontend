import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/login';
import HomePage from './routes/home';
import RegisterPage from './routes/register';
import './styles/globals.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginPage/>} />
				<Route path="/register" element={<RegisterPage/>} />
				<Route path="/home" element={<HomePage/>} />
			</Routes>
		</Router>
	);
}

export default App;