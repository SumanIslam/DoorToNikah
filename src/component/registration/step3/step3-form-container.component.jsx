import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import InputField from '../common-component/input-field/input-field.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';

// toast
import { handleSuccess } from '../../../services/handleFormSuccess'
import { ToastContainer } from 'react-toastify';

// registration context
import useRegistration from '../../../hooks/useRegistration';

const Step3FormContainer = () => {
	const { candidatesInfo, setCandidatesInfo } = useRegistration();

	const [address, setAddress] = useState({
		permanentAddress: candidatesInfo.address?.permanentAddress || '',
		presentAddress: candidatesInfo.address?.presentAddress || '',
		broughtUpPlace: candidatesInfo.address?.broughtUpPlace || '',
	});

	const [loading, setLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const handleAddress = (e) => {
		e.preventDefault();

		setAddress({ ...address, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		// save data to registrationContext
		setCandidatesInfo({
			...candidatesInfo,
			address: { ...address },
		});
		// save data to localStorage
		localStorage.setItem(
			'candidatesInfo',
			JSON.stringify({
				...candidatesInfo,
				address: { ...address },
			})
		);
		setTimeout(() => {
			setLoading(false);
			setSaved(true);
			handleSuccess('Changes Saved SuccessFully');
		}, 2000);
	};

	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				{/* success Toast */}
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
				<FormContainerButtonNav current={3} />
				<div className='form-container'>
					{/* for permanent address */}
					<form onSubmit={handleSubmit}>
						<InputField
							variant='input'
							title='স্থায়ী ঠিকানা*'
							value={address.permanentAddress}
							name='permanentAddress'
							required={true}
							guideText='বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ উত্তরা-৬,ঢাকা।'
							handleChange={handleAddress}
						/>
						{/* for present address */}
						<InputField
							variant='input'
							title='বর্তমান ঠিকানা*'
							value={address.presentAddress}
							name='presentAddress'
							required={true}
							guideText='বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ উত্তরা-৬,ঢাকা।'
							handleChange={handleAddress}
						/>
						{/* for where you brought up */}
						<InputField
							variant='input'
							title='কোথায় বড় হয়েছেন?*'
							value={address.broughtUpPlace}
							name='broughtUpPlace'
							required={true}
							handleChange={handleAddress}
						/>
						{/* buttons */}
						<FormButtonContainer
							nextUrl='/biodata/registration/step4'
							backUrl='/biodata/registration/step2'
							loading={loading}
							saved={saved}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Step3FormContainer;
