import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import InputField from '../common-component/input-field/input-field.component';

// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError } from '../../../services/handleFormError';

const Step1FormContainer = () => {
	const [candidatesName, setCandidatesName] = useState({
		name: ''
	});

	const handleChange = (e) => {
		e.preventDefault();
		setCandidatesName({ [e.target.name]: e.target.value });
	}

	const validated = candidatesName.name !== '';
	
  return (
		<div className='step-container'>
			{/* ToastContainer */}
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
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={1} />
				<div className='form-container'>
					<InputField
						variant='input'
						title='সম্পূর্ণ নাম*'
						value={candidatesName.name}
						name='name'
						guideText='নাম নেয়া হচ্ছে ভেরিফিকেশনের জন্য, পূর্ণ নাম লিখবেন। আপনার নাম পাবলিকলি প্রকাশ করা হবে না।'
						handleChange={handleChange}
						required={true}
					/>
				</div>
				<FormButtonContainer
					states={candidatesName}
					objectKey='candidatesName'
					nextUrl='/biodata/registration/step2'
					validated={validated}
					handleError={handleError}
				/>
			</div>
		</div>
	);
}

export default Step1FormContainer;