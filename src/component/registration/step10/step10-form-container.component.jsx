import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import SelectField from '../common-component/select-field/select-field.component';

// registration context
import useRegistration from '../../../hooks/useRegistration';

// data
import { bool } from './data';

const Step10FormContainer = () => {
	const { candidatesInfo, setCandidatesInfo } = useRegistration();

	const [authoritysAsk, setAuthoritysAsk] = useState({
		parentsConsentAboutBiodata:
			candidatesInfo.authoritysAsk?.parentsConsentAboutBiodata || '',
		isGivenInfoLegitimate:
			candidatesInfo.authoritysAsk?.isGivenInfoLegitimate || '',
		takeResponsibilityOfFalseInfo:
			candidatesInfo.authoritysAsk?.takeResponsibilityOfFalseInfo || '',
	});

	const [loading, setLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// save data to registrationContext
		setCandidatesInfo({
			...candidatesInfo,
			authoritysAsk: { ...authoritysAsk },
		});

		// save data to local storage
		localStorage.setItem(
			'candidatesInfo',
			JSON.stringify({
				...candidatesInfo,
				authoritysAsk: { ...authoritysAsk },
			})
		);
		setTimeout(() => {
			setLoading(false);
			setSaved(true);
		}, 2000);
	};

	const handleAuthoritysAsk = (e) => {
		e.preventDefault();

		setAuthoritysAsk({ ...authoritysAsk, [e.target.name]: e.target.value });
	};

	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={10} />
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
						{/* parents consent about biodata*/}
						<SelectField
							title='OrdhekDeen.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন তা অভিভাবক জানেন?*'
							name='parentsConsentAboutBiodata'
							required={true}
							selected={bool.selected}
							options={bool.options}
							defaultValue={authoritysAsk.parentsConsentAboutBiodata}
							handleSelect={handleAuthoritysAsk}
						/>

						{/* is given info is legitimate */}
						<SelectField
							title="আল্লাহ'র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিচ্ছেন সব সত্য?*"
							name='isGivenInfoLegitimate'
							required={true}
							selected={bool.selected}
							options={bool.options}
							defaultValue={authoritysAsk.isGivenInfoLegitimate}
							handleSelect={handleAuthoritysAsk}
						/>

						{/* take responsibility for given info */}
						<SelectField
							title='কোনো মিথ্যা তথ্য দিয়ে থাকলে তার দুনিয়াবী ও আখিরাতের দায়ভার ওয়েবসাইট কর্তৃপক্ষ নিবে না। আপনি কি রাজি?*'
							name='takeResponsibilityOfFalseInfo'
							required={true}
							selected={bool.selected}
							options={bool.options}
							defaultValue={authoritysAsk.takeResponsibilityOfFalseInfo}
							handleSelect={handleAuthoritysAsk}
						/>
						{/* buttons */}
						<FormButtonContainer
							nextUrl='/biodata/registration/step11'
							backUrl='/biodata/registration/step9'
							loading={loading}
							saved={saved}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Step10FormContainer;