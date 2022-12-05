import { useState } from 'react';
// component
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import InputField from '../common-component/input-field/input-field.component';

// registration context
import useRegistration from '../../../hooks/useRegistration';

const Step1FormContainer = () => {
	const { candidatesInfo, setCandidatesInfo } = useRegistration();

	const [candidatesName, setCandidatesName] = useState({
		name: candidatesInfo.candidatesName?.name || '',
	});

	const [loading, setLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const handleChange = (e) => {
		e.preventDefault();
		setCandidatesName({ [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// save data to registrationContext
		setCandidatesInfo({
			...candidatesInfo,
			candidatesName: { ...candidatesName },
		});
		
		// save data to local storage
		localStorage.setItem(
			'candidatesInfo',
			JSON.stringify({
				...candidatesInfo,
				candidatesName: { ...candidatesName },
			})
		);
		setTimeout(() => {
			setLoading(false);
			setSaved(true);
		}, 2000);
	};

	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={1} />
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
						<InputField
							variant='input'
							title='সম্পূর্ণ নাম*'
							value={candidatesName.name}
							name='name'
							guideText='নাম নেয়া হচ্ছে ভেরিফিকেশনের জন্য, পূর্ণ নাম লিখবেন। আপনার নাম পাবলিকলি প্রকাশ করা হবে না।'
							handleChange={handleChange}
							required={true}
						/>
						<FormButtonContainer
							nextUrl='/biodata/registration/step2'
							loading={loading}
							saved={saved}
						/>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Step1FormContainer;