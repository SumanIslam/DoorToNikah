import {Routes, Route}  from 'react-router-dom';

// component
import Homepage from './page/homepage';
import AboutUs from './page/about-page';
import PrivacyPolicy from './page/privacy-policy-page';

function App() {
  return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/about' element={<AboutUs />} />
			<Route path='/privacy&policy' element={<PrivacyPolicy />} />
		</Routes>
	);
}

export default App;
