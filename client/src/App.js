import {Routes, Route}  from 'react-router-dom';
import Homepage from './page/homepage';
import AboutUs from './page/about-page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<AboutUs />} />
    </Routes>
  );
}

export default App;
