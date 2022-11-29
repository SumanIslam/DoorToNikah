import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component'
import SelectField from '../common-component/select-field/select-field.component';
import InputField from '../common-component/input-field/input-field.component'

// data
import { mediumOfStudy } from './data'

const Step4FormContainer = () => {
	const [educationalQualification, setEducationalQualification] = useState({
		mediumOfStudy: '',
		otherEducationalInfo: ''
	});

	const handleEducationalQualification = (e) => {
		e.preventDefault();

		setEducationalQualification({...educationalQualification, [e.target.name] : e.target.value})
	}

	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={4} />
				<div className='form-container'>
					{/* for medium of study */}
					<SelectField
						title={mediumOfStudy.title}
						selected={mediumOfStudy.selected}
						options={mediumOfStudy.options}
						name='mediumOfStudy'
						required={true}
						guideText='আলিয়া / মাধ্যমিক / কারিগরি / ইংরেজি মাধ্যমে শিক্ষিতরা "জেনারেল" অপশন সিলেক্ট করুন।'
						handleSelect={handleEducationalQualification}
					/>

					{/* for other educational info */}
					<InputField
						title='অন্যান্য শিক্ষাগত যোগ্যতা'
						name='otherEducationalInfo'
						value={educationalQualification.otherEducationalInfo}
						variant='textarea'
						guideText='শিক্ষার বিষয়, প্রতিষ্ঠানের নাম, পাসের সন ইত্যাদি বিস্তারিত লিখবেন। কিছু না থাকলে ঘরটি ফাঁকা রাখবেন।'
						handleChange={handleEducationalQualification}
					/>
				</div>
				{/* buttons */}
				<FormButtonContainer
					states={educationalQualification}
					url='/biodata/registration/step5'
				/>
			</div>
		</div>
	);
};

export default Step4FormContainer;
