import React, { useState } from 'react'

// mui icon
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

// styles
import './biodata-no-container.style.scss';
import '../../../../styles/utils.scss'

// auth
import useAuth from '../../../../hooks/useAuth'

// copy to clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';

const BiodataNoContainer = () => {
  const [copied, setCopied] = useState(false)
  const { auth } = useAuth();

  const handleCopy = () => {
    setCopied(true);
  }
  return (
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
	);
}

export default BiodataNoContainer;