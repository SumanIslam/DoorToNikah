import { Routes, Route }  from 'react-router-dom';

// component
import Homepage from './page/homepage';
import AboutUs from './page/about-page';
import PrivacyPolicy from './page/privacy-policy-page';
import TermsCondition from './page/terms-page';
import FaqPage from './page/faq-page';
import ContactPage from './page/contact-page';
import TutorialPage from './page/tutorial-page';
import BiodataUploadPage from './page/biodata-upload-page';

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
			<Route path='/biodatas/suman/profile/edit/group/step-1' element={<BiodataUploadPage />} />
		</Routes>
		

		
	);
}

export default App;
