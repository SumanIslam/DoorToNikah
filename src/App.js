import { Routes, Route }  from 'react-router-dom';

// component
import Homepage from './page/homepage';
import AboutUs from './page/about-page';
import PrivacyPolicy from './page/privacy-policy-page';
import TermsCondition from './page/terms-page';
import FaqPage from './page/faq-page';
import ContactPage from './page/contact-page';
import TutorialPage from './page/tutorial-page';
import LoginPage from './page/login-page';
import SignUpPage from './page/signup-page';

function App() {
  return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/about' element={<AboutUs />} />
			<Route path='/faq' element={<FaqPage />} />
			<Route path='/privacy&policy' element={<PrivacyPolicy />} />
			<Route path='/terms' element={<TermsCondition />} />
			<Route path='/contact' element={<ContactPage />} />
			<Route path='/tutorial' element={<TutorialPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/signup' element={<SignUpPage />} />
		</Routes>
	);
}

export default App;