import { useState } from 'react';

// api
import { httpSaveBiodata } from '../../../../services/request';

// biodatas context
import useRegistration from '../../../../hooks/useRegistration';
// auth context
import useAuth from '../../../../hooks/useAuth';

// toast
import { handleSuccess } from '../../../../services/handleFormSuccess'
import { handleError } from '../../../../services/handleFormError'
import { ToastContainer } from 'react-toastify';

// styles
import './submit-biodata.button.style.scss';

const SubmitBiodataButton = ({ saved, candidatesInfo }) => {
  const [loading, setLoading] = useState(false);
  const { auth } = useAuth();
	const { setCandidatesInfo } = useRegistration();

  candidatesInfo = {...candidatesInfo, biodataId: auth?.biodataId}
  
  const handleClick = async (e) => {
    e.preventDefault();

		try {
			const biodata = await httpSaveBiodata(candidatesInfo);
			console.log(biodata);
			setLoading(true);
			// set candidates info in registration context
			setCandidatesInfo(biodata);

			// set candidates info in local storage
			localStorage.setItem(
				'candidatesInfo',
				JSON.stringify(biodata)
			);
			setTimeout(() => {
				setLoading(false);
				handleSuccess('Your Biodata is Saved SuccessFully');
			}, 2000);
		} catch (err) {
			const errorMsg = err.response.data.msg;
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				handleError(errorMsg);
			}, 2000);
		}
  }
  return (
		<div className='submit-btn-container'>
			{saved &&
				(loading ? (
					<button className='submit-button mt-5' type='button'>
						<ToastContainer
							position='top-center'
							autoClose={3000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme='colored'
						/>
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