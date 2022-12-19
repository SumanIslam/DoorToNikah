import React from 'react'
import { useLocation } from 'react-router-dom';

import BioProfileContainer from '../../registration/common-component/bio-profile-container/bio-profile-container.component';
import BiodataDetailsContainer from '../../biodata-details-container/biodata-details-container.component';

import './unapproved-biodata-profile.style.scss'

const UnapprovedBiodataProfile = () => {
  const location = useLocation();
	const biodata = location.state;
  return (
		<div className='unapproved-biodata-profile'>
			<BioProfileContainer
				biodataId={biodata?.biodataId}
				generalInfo={biodata?.generalInfo}
				noHide={true}
        admin={true}
			/>
      <BiodataDetailsContainer biodataDetails={biodata} admin={true} />
		</div>
	);
}

export default UnapprovedBiodataProfile