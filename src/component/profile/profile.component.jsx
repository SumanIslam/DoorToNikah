import React from 'react'

// component
import BioProfileContainer from '../registration/common-component/bio-profile-container/bio-profile-container.component';
import BioInfoContainer from '../registration/common-component/bio-info-container/bio-info-container.component';

// registration context
import useRegistration from '../../hooks/useRegistration';

// style
import './profile.style.scss'

const Profile = () => {
  const { candidatesInfo } = useRegistration();
  // const biodataToShowArray = [
	// 	candidatesInfo.candidatesName,
	// 	candidatesInfo.address,
	// 	candidatesInfo.educationalQualification,
	// 	candidatesInfo.familyInfo,
	// 	candidatesInfo.personalInfo,
	// 	candidatesInfo.marriageInfo,
	// 	candidatesInfo.otherInfo,
	// 	candidatesInfo.partnersCharacteristics,
	// 	candidatesInfo.authoritysAsk,
	// ];
  return (
		<div className='biodata-profile'>
			<BioProfileContainer
				biodataId={candidatesInfo?.biodataId}
				generalInfo={candidatesInfo.generalInfo}
			/>
			<BioInfoContainer candidatesInfo={candidatesInfo} />
		</div>
	);
}

export default Profile;