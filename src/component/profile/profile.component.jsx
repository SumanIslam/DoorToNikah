import React from 'react'

// component
import BioProfileContainer from '../registration/common-component/bio-profile-container/bio-profile-container.component';
import BioInfoContainer from '../registration/common-component/bio-info-container/bio-info-container.component';

// registration context
import useRegistration from '../../hooks/useRegistration';

// auth
import useAuth from '../../hooks/useAuth';

// style
import './profile.style.scss'

const Profile = () => {
  const { candidatesInfo } = useRegistration();
	const { auth: {biodataId} } = useAuth();
	
  return (
		<div className='biodata-profile'>
			<BioProfileContainer
				biodataId={biodataId}
				generalInfo={candidatesInfo.generalInfo}
				noHide={true}
			/>
			<BioInfoContainer candidatesInfo={candidatesInfo} />
		</div>
	);
}

export default Profile;