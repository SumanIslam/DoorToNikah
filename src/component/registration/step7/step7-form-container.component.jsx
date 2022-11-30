import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import InputField from '../common-component/input-field/input-field.component';

const Step7FormContainer = () => {
	const [marriageInfo, setMarriageInfo] = useState({
		parentsConsent: '',
		reasonOfMarriage: ''
	})

	const handleMarriageInfo = (e) => {
		e.preventDefault();
		setMarriageInfo({ ...marriageInfo, [e.target.name]: e.target.value });
	};

	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={7} />
				<div className='form-container'>
					{/* for parents consent */}
					<InputField
						title='অভিভাবক আপনার বিয়েতে রাজি কি না?*'
						variant='input'
						value={marriageInfo.parentsConsent}
						required={true}
						name='parentsConsent'
						handleChange={handleMarriageInfo}
					/>

					{/* for reasons of nikah*/}
					<InputField
						title='অভিভাবক আপনার বিয়েতে রাজি কি না?*'
						variant='textarea'
						value={marriageInfo.reasonOfMarriage}
						required={true}
						name='reasonOfMarriage'
						handleChange={handleMarriageInfo}
					/>
				</div>
				{/* buttons */}
				<FormButtonContainer
					states={marriageInfo}
					url='/biodata/registration/step8'
				/>
			</div>
		</div>
	);
};

export default Step7FormContainer;
