import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import SelectField from '../common-component/select-field/select-field.component';
import InputField from '../common-component/input-field/input-field.component';

// data
import { numberOfSisters, numberOfBrothers } from './data';

const Step5FormContainer = () => {
	const [familyInfo, setFamilyInfo] = useState({
		fathersName: '',
		mothersName: '',
		fathersOccupation: '',
		mothersOccupation: '',
		numberOfBrothers: '',
		numberOfSisters: '',
		unclesOccupation: '',
		financialAndSocialCondition: ''
	})

	const handleFamilyInfo = (e) => {
		e.preventDefault();
		setFamilyInfo({ ...familyInfo, [e.target.name]: e.target.value });
	}

	console.log(familyInfo);
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={5} />
				<div className='form-container'>
					{/* for fathers name */}
					<InputField
						title='পিতার নাম*'
						variant='input'
						value={familyInfo.fathersName}
						required={true}
						name='fathersName'
						guideText='পিতার পূর্ণ নাম লিখবেন, নাম নেয়া হচ্ছে শুধুমাত্র ভেরিফিকেশনের জন্য। আপনার পিতার নাম বায়োডাটা পাবলিশ করার সময় প্রকাশ করা হবে না। অর্থাৎ আপনি এবং ওয়েবসাইট কতৃপক্ষ বাদে কেউ এই নাম দেখতে পাবে না।'
						handleChange={handleFamilyInfo}
					/>
					{/* for mothers name */}
					<InputField
						title='মাতার নাম*'
						variant='input'
						value={familyInfo.mothersName}
						required={true}
						name='mothersName'
						guideText='মাতার পূর্ণ নাম লিখবেন, নাম নেয়া হচ্ছে শুধুমাত্র ভেরিফিকেশনের জন্য। আপনার পিতার নাম বায়োডাটা পাবলিশ করার সময় প্রকাশ করা হবে না। অর্থাৎ আপনি এবং ওয়েবসাইট কতৃপক্ষ বাদে কেউ এই নাম দেখতে পাবে না।'
						handleChange={handleFamilyInfo}
					/>
					{/* for fathers occupation */}
					<InputField
						title='পিতার পেশা*'
						variant='input'
						value={familyInfo.fathersOccupation}
						required={true}
						name='fathersOccupation'
						guideText='মৃত হলে প্রথমে (মৃত) লিখার পর পেশা লিখবেন। যেমনঃ (মৃত) ব্যবসায়ী ছিলেন।'
						handleChange={handleFamilyInfo}
					/>
					{/* for mothers occupation */}
					<InputField
						title='মাতার পেশা*'
						variant='input'
						value={familyInfo.mothersOccupation}
						required={true}
						name='mothersOccupation'
						guideText='মৃত হলে প্রথমে (মৃত) লিখার পর পেশা লিখবেন। যেমনঃ (মৃত) গৃহিনী ছিলেন।'
						handleChange={handleFamilyInfo}
					/>
					{/* for number of sisters */}
					<SelectField
						title={numberOfSisters.title}
						name='numberOfSisters'
						required={true}
						selected={numberOfSisters.selected}
						options={numberOfSisters.options}
						handleSelect={handleFamilyInfo}
					/>
					{/* for number of brothers */}
					<SelectField
						title={numberOfBrothers.title}
						name='numberOfBrothers'
						required={true}
						selected={numberOfBrothers.selected}
						options={numberOfBrothers.options}
						handleSelect={handleFamilyInfo}
					/>

					{/* for uncles occupation */}
					<InputField
						title='চাচা মামাদের পেশা'
						variant='input'
						value={familyInfo.unclesOccupation}
						name='unclesOccupation'
						guideText='জানাতে অনিচ্ছুক হলে ঘরটি ফাঁকা রাখুন।'
						handleChange={handleFamilyInfo}
					/>

					{/* for family's financial and social condition */}
					<InputField
						title='পরিবারের অর্থনৈতিক ও সামাজিক অবস্থা*'
						variant='textarea'
						required={true}
						value={familyInfo.financialAndSocialCondition}
						name='financialAndSocialCondition'
						guideText='সংক্ষেপে বর্ণনা করুন।'
						handleChange={handleFamilyInfo}
					/>
				</div>
				{/* buttons */}
				<FormButtonContainer
					states={familyInfo}
					url='/biodata/registration/step6'
				/>
			</div>
		</div>
	);
};

export default Step5FormContainer;
