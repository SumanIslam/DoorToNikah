import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import InputField from '../common-component/input-field/input-field.component';

// registration context
import useRegistration from '../../../hooks/useRegistration';

const Step9FormContainer = () => {
	const { candidatesInfo, setCandidatesInfo } = useRegistration();

	const [partnersCharacteristics, setPartnerCharacteristics] = useState({
		partnersAge: candidatesInfo.partnersCharacteristics?.partnersAge || '',
		partnersSkinColor:
			candidatesInfo.partnersCharacteristics?.partnersSkinColor || '',
		partnersMinimumHeight:
			candidatesInfo.partnersCharacteristics?.partnersMinimumHeight || '',
		partnersMinimumEducationalQualification:
			candidatesInfo.partnersCharacteristics
				?.partnersMinimumEducationalQualification || '',
		partnersDistrict:
			candidatesInfo.partnersCharacteristics
				?.partnersMinimumEducationalQualification || '',
		partnersMaritalStatus:
			candidatesInfo.partnersCharacteristics?.partnersMaritalStatus || '',
		partnersOccupation:
			candidatesInfo.partnersCharacteristics?.partnersOccupation || '',
		partnersFinancialCondition:
			candidatesInfo.partnersCharacteristics?.partnersFinancialCondition || '',
		partnersFamilyCondition:
			candidatesInfo.partnersCharacteristics?.partnersFamilyCondition || '',
		partnersDesirableCharacteristics:
			candidatesInfo.partnersCharacteristics
				?.partnersDesirableCharacteristics || '',
	});

	const [loading, setLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		// save data to registrationContext
		setCandidatesInfo({
			...candidatesInfo,
			partnersCharacteristics: { ...partnersCharacteristics },
		});

		// save data to local storage
		localStorage.setItem(
			'candidatesInfo',
			JSON.stringify({
				...candidatesInfo,
				partnersCharacteristics: { ...partnersCharacteristics },
			})
		);
		setTimeout(() => {
			setLoading(false);
			setSaved(true);
		}, 2000);
	};

	const handlePartnersCharacteristics = (e) => {
		e.preventDefault();
		setPartnerCharacteristics({
			...partnersCharacteristics,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={9} />
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
						{/* partners age */}
						<InputField
							title='বয়স*'
							variant='input'
							value={partnersCharacteristics.partnersAge}
							required={true}
							name='partnersAge'
							handleChange={handlePartnersCharacteristics}
						/>

						{/* partners skin color */}
						<InputField
							title='গাত্রবর্ণ*'
							variant='input'
							value={partnersCharacteristics.partnersSkinColor}
							required={true}
							name='partnersSkinColor'
							handleChange={handlePartnersCharacteristics}
						/>

						{/* partners minimum height*/}
						<InputField
							title='নূন্যতম উচ্চতা*'
							variant='input'
							value={partnersCharacteristics.partnersMinimumHeight}
							required={true}
							name='partnersMinimumHeight'
							handleChange={handlePartnersCharacteristics}
						/>

						{/* partners minimum educational qualifications */}
						<InputField
							title='নূন্যতম শিক্ষাগত যোগ্যতা*'
							variant='input'
							value={
								partnersCharacteristics.partnersMinimumEducationalQualification
							}
							required={true}
							name='partnersMinimumEducationalQualification'
							handleChange={handlePartnersCharacteristics}
						/>

						{/* partners district */}
						<InputField
							title='জেলা*'
							variant='input'
							value={partnersCharacteristics.partnersDistrict}
							required={true}
							name='partnersDistrict'
							handleChange={handlePartnersCharacteristics}
						/>

						{/* partners marital condition */}
						<InputField
							title='বৈবাহিক অবস্থা*'
							variant='input'
							value={partnersCharacteristics.partnersMaritalStatus}
							required={true}
							name='partnersMaritalStatus'
							handleChange={handlePartnersCharacteristics}
						/>

						{/* partners occupation */}
						<InputField
							title='পেশা*'
							variant='input'
							value={partnersCharacteristics.partnersOccupation}
							required={true}
							name='partnersOccupation'
							handleChange={handlePartnersCharacteristics}
						/>

						{/* partners financial condition */}
						<InputField
							title='অর্থনৈতিক অবস্থা*'
							variant='input'
							value={partnersCharacteristics.partnersFinancialCondition}
							required={true}
							name='partnersFinancialCondition'
							handleChange={handlePartnersCharacteristics}
						/>

						{/* partners family condition */}
						<InputField
							title='পারিবারিক অবস্থা*'
							variant='input'
							value={partnersCharacteristics.partnersFamilyCondition}
							required={true}
							name='partnersFamilyCondition'
							handleChange={handlePartnersCharacteristics}
						/>

						{/* characteristics of partner */}
						<InputField
							title='জীবনসঙ্গীর যে বৈশিষ্ট্য বা গুণাবলী আশা করেন*'
							variant='textarea'
							value={partnersCharacteristics.partnersDesirableCharacteristics}
							required={true}
							name='partnersDesirableCharacteristics'
							guideText='এই পয়েন্ট অনেক গুরুত্বপূর্ণ। সময় নিয়ে বিস্তারিত লিখুন। কোন বিশেষ শর্ত থাকলে তা-ও লিখতে পারেন।'
							handleChange={handlePartnersCharacteristics}
						/>

						{/* buttons */}
						<FormButtonContainer
							nextUrl='/biodata/registration/step10'
							backUrl='/biodata/registration/step8'
							loading={loading}
							saved={saved}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Step9FormContainer;
