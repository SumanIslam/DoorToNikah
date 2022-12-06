import { useState } from 'react';

// api
import { httpSaveBiodata } from '../../../../services/request';

// auth context
import useAuth from '../../../../hooks/useAuth';
// styles
import './submit-biodata.button.style.scss';

const SubmitBiodataButton = ({ saved,candidatesInfo }) => {
  const [loading, setLoading] = useState(false);
  const { auth } = useAuth();

  candidatesInfo = {...candidatesInfo, biodataId: auth?.biodataId}
  
  const handleClick = async (e) => {
    e.preventDefault();

    const biodata = await httpSaveBiodata(candidatesInfo);
		console.log(biodata);
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000);

    console.log(biodata);
  }
  return (
		<div className='submit-btn-container'>
			{saved &&
				(loading ? (
					<button className='submit-button mt-5' type='button'>
						<span
							className='spinner-border spinner-border-sm m-2'
							role='status'
							aria-hidden='true'
						></span>{' '}
						Saving Biodata...
					</button>
				) : (
					<button className='submit-button mt-5' onClick={handleClick}>
						Publish Biodata
					</button>
				))}
		</div>
	);
}

export default SubmitBiodataButton;