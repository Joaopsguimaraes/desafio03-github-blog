/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Home } from './pages/home';
export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}
