import React, { useState } from 'react'

// mui icon
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

// component
import BioProfileContainer from '../bio-profile-container/bio-profile-container.component';

// styles
import './biodata-no-container.style.scss';
import '../../../../styles/utils.scss'

// auth and registration context
import useAuth from '../../../../hooks/useAuth'
import useRegistration from '../../../../hooks/useRegistration';

// copy to clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';

const BiodataNoContainer = () => {
  const [copied, setCopied] = useState(false)
  const { auth } = useAuth();
	const { candidatesInfo } = useRegistration();

  const handleCopy = () => {
    setCopied(true);
  }
  return (
		<>
			{candidatesInfo?.generalInfo ? (
				<BioProfileContainer
					biodataId={auth.biodataId}
					generalInfo={candidatesInfo.generalInfo}
				/>
			) : (
				<div className='biodata-no-container bg-purple'>
					<div className='biodata-no-container-body'>
						<AccountCircleRoundedIcon />
						<p>Biodata No: {auth?.biodataId}</p>
					</div>
					<div className='biodata-no-container-footer'>
						{copied ? (
							<div className='btn bg-pink'>কপি সম্পন্ন হয়েছে</div>
						) : (
							<CopyToClipboard
								text={auth?.biodataId}
								onCopy={() => handleCopy()}
							>
								<div className='btn bg-pink'>বায়োডাটার লিংক কপি করুন</div>
							</CopyToClipboard>
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default BiodataNoContainer;