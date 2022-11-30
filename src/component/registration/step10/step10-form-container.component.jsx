import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import SelectField from '../common-component/select-field/select-field.component';

// data
import { bool } from './data';

const Step10FormContainer = () => {
	const [authoritysAsk, setAuthoritysAsk] = useState({
		parentsConsentAboutBiodata: '',
		isGivenInfoLegitimate: '',
		takeResponsibilityOfFalseInfo: ''
	})

	const handleAuthoritysAsk = (e) => {
		e.preventDefault();

		setAuthoritysAsk({...authoritysAsk, [e.target.name] : e.target.value})
	}
	
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={10} />
				<div className='form-container'>
					{/* parents consent about biodata*/}
					<SelectField
						title='OrdhekDeen.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন তা অভিভাবক জানেন?*'
						name='parentsConsentAboutBiodata'
						required={true}
						selected={bool.selected}
						options={bool.options}
						handleSelect={handleAuthoritysAsk}
					/>

					{/* is given info is legitimate */}
					<SelectField
						title="আল্লাহ'র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিচ্ছেন সব সত্য?*"
						name='isGivenInfoLegitimate'
						required={true}
						selected={bool.selected}
						options={bool.options}
						handleSelect={handleAuthoritysAsk}
					/>

					{/* take responsibility for given info */}
					<SelectField
						title='কোনো মিথ্যা তথ্য দিয়ে থাকলে তার দুনিয়াবী ও আখিরাতের দায়ভার ওয়েবসাইট কর্তৃপক্ষ নিবে না। আপনি কি রাজি?*'
						name='takeResponsibilityOfFalseInfo'
						required={true}
						selected={bool.selected}
						options={bool.options}
						handleSelect={handleAuthoritysAsk}
					/>
				</div>
				{/* buttons */}
				<FormButtonContainer
					states={authoritysAsk}
					url='/biodata/registration/step11'
				/>
			</div>
		</div>
	);
};

export default Step10FormContainer;