import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import InputField from '../common-component/input-field/input-field.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';

const Step3FormContainer = () => {
	const [address, setAddress] = useState({
		permanentAddress: '',
		presentAddress: '',
		broughtUpPlace: ''
	});

	const handleAddress = (e) => {
		e.preventDefault();

		setAddress({...address, [e.target.name] : e.target.value})
	}

	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={3} />
				<div className='form-container'>
					{/* for permanent address */}
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
				</div>
				{/* buttons */}
				<FormButtonContainer states={address} url='/biodata/registration/step4' />
			</div>
		</div>
	);
};

export default Step3FormContainer;
