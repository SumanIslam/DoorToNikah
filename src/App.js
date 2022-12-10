import { Routes, Route } from "react-router-dom";

// component
import Homepage from "./page/homepage";
import AboutUs from "./page/about-page";
import PrivacyPolicy from "./page/privacy-policy-page";
import TermsCondition from "./page/terms-page";
import FaqPage from "./page/faq-page";
import ContactPage from "./page/contact-page";
import TutorialPage from "./page/tutorial-page";
import LoginPage from "./page/login-page";
import SignUpPage from "./page/signup-page";

// protected routes
// registration pages
import RegistrationPage1 from './page/registration/registration-page1.component';
import RegistrationPage2 from './page/registration/registration-page2.component';
import RegistrationPage3 from './page/registration/registration-page3.component';
import RegistrationPage4 from './page/registration/registration-page4.component';
import RegistrationPage5 from './page/registration/registration-page5.component';
import RegistrationPage6 from './page/registration/registration-page6.component';
import RegistrationPage7 from './page/registration/registration-page7.component';
import RegistrationPage8 from './page/registration/registration-page8.component';
import RegistrationPage9 from './page/registration/registration-page9.component';
import RegistrationPage10 from './page/registration/registration-page10.component';
import RegistrationPage11 from './page/registration/registration-page11.component';
import ProfilePage from './page/profile-page';

// require auth
import RequireAuth from "./services/requireAuth";
import AdminPanel from "./page/admin-panel";

function App() {
  return (
		<Routes>
			{/* public routes */}
			<Route path='/' element={<Homepage />} />
			<Route path='/about' element={<AboutUs />} />
			<Route path='/faq' element={<FaqPage />} />
			<Route path='/privacy&policy' element={<PrivacyPolicy />} />
			<Route path='/terms' element={<TermsCondition />} />
			<Route path='/contact' element={<ContactPage />} />
			<Route path='/tutorial' element={<TutorialPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/signup' element={<SignUpPage />} />
			<Route path='/adminPanel/*' element={<AdminPanel />} />
			{/* protected routes */}
			<Route path='/' element={<RequireAuth />}>
				<Route path='biodata/registration/step1' element={<RegistrationPage1 />} />
				<Route path='biodata/registration/step2' element={<RegistrationPage2 />} />
				<Route path='biodata/registration/step3' element={<RegistrationPage3 />} />
				<Route path='biodata/registration/step4' element={<RegistrationPage4 />} />
				<Route path='biodata/registration/step5' element={<RegistrationPage5 />} />
				<Route path='biodata/registration/step6' element={<RegistrationPage6 />} />
				<Route path='biodata/registration/step7' element={<RegistrationPage7 />} />
				<Route path='biodata/registration/step8' element={<RegistrationPage8 />} />
				<Route path='biodata/registration/step9' element={<RegistrationPage9 />} />
				<Route path='biodata/registration/step10' element={<RegistrationPage10 />} />
				<Route path='biodata/registration/step11' element={<RegistrationPage11 />} />
				<Route path=':user/profile' element={<ProfilePage />} />
			</Route>
		</Routes>
	);
}

export default App;
