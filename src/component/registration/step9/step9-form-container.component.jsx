import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import InputField from '../common-component/input-field/input-field.component';

const Step9FormContainer = () => {
	const [partnersCharacteristics, setPartnerCharacteristics] = useState({
		partnersAge: '',
		partnersSkinColor: '',
		partnersMinimumHeight: '',
		partnersMinimumEducationalQualification: '',
		partnersDistrict: '',
		partnersMaritalStatus: '',
		partnersOccupation: '',
		partnersFinancialCondition: '',
		partnersFamilyCondition: '',
		partnersDesirableCharacteristics: ''
	})

	const handlePartnersCharacteristics= (e) => {
		e.preventDefault();
		setPartnerCharacteristics({...partnersCharacteristics ,[e.target.name] : e.target.value});
	};

	console.log(partnersCharacteristics);
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={9} />
				<div className='form-container'>
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
						title='পেশা*'
						variant='textarea'
						value={partnersCharacteristics.partnersDesirableCharacteristics}
						required={true}
						name='partnersDesirableCharacteristics'
						guideText='এই পয়েন্ট অনেক গুরুত্বপূর্ণ। সময় নিয়ে বিস্তারিত লিখুন। কোন বিশেষ শর্ত থাকলে তা-ও লিখতে পারেন।'
						handleChange={handlePartnersCharacteristics}
					/>
				</div>
				{/* buttons */}
				<FormButtonContainer
					states={partnersCharacteristics}
					url='/biodata/registration/step10'
				/>
			</div>
		</div>
	);
};

export default Step9FormContainer;
