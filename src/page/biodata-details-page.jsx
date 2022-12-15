import React from 'react'
import { useLocation } from 'react-router-dom'

// component
import Header from '../component/header/header.component';
import Footer from '../component/footer/footer.component'
import BioProfileContainer from '../component/registration/common-component/bio-profile-container/bio-profile-container.component';
import BiodataDetailsContainer from '../component/biodata-details-container/biodata-details-container.component';

// styles
import '../component/profile/profile.style.scss'

const BiodataDetails = () => {
  const location = useLocation();
  const biodata = location.state;
  return (
		<div>
			<Header />
			<div className='biodata-details'>
				<BioProfileContainer
					biodataId={biodata?.biodataId}
					generalInfo={biodata?.generalInfo}
					noHide={true}
				/>
        <BiodataDetailsContainer biodataDetails={biodata} />
			</div>

			<Footer />
		</div>
	);
}

export default BiodataDetails