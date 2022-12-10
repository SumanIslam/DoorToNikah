import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/auth.context';
import RegistrationProvider from './context/registration.context';
// scroll to top
import ScrollToTop from './services/scrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AuthProvider>
			<RegistrationProvider>
				<BrowserRouter>
				<ScrollToTop />
					<App />
				</BrowserRouter>
			</RegistrationProvider>
		</AuthProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
