/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter } from 'react-router-dom';
import { IssuesProvider } from './context/IssuesContext';
import { Router } from './Router';
import { globalStyles } from './styles/theme/global';

export function App() {
	globalStyles();
	return (
		<IssuesProvider>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</IssuesProvider>
	);
}
