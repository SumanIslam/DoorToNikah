import { useState } from 'react';
// component
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import InputField from '../common-component/input-field/input-field.component';
import SelectField from '../common-component/select-field/select-field.component';

// registration context
import useRegistration from '../../../hooks/useRegistration';

// data
import { numberOfBrothers, numberOfSisters } from './data';

const Step5FormContainer = () => {
	const { candidatesInfo, setCandidatesInfo } = useRegistration();

	const [familyInfo, setFamilyInfo] = useState({
		fathersName: candidatesInfo.familyInfo?.fathersName || '',
		mothersName: candidatesInfo.familyInfo?.mothersName || '',
		fathersOccupation: candidatesInfo.familyInfo?.fathersOccupation || '',
		mothersOccupation: candidatesInfo.familyInfo?.mothersOccupation || '',
		numberOfBrothers: candidatesInfo.familyInfo?.numberOfBrothers || '',
		numberOfSisters: candidatesInfo.familyInfo?.numberOfSisters || '',
		unclesOccupation: candidatesInfo.familyInfo?.unclesOccupation || '',
		financialAndSocialCondition:
			candidatesInfo.familyInfo?.financialAndSocialCondition || '',
		brothersInfo: candidatesInfo.familyInfo?.brothersInfo || '',
		sistersInfo: candidatesInfo.familyInfo?.sistersInfo || '',
	});

	const [loading, setLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const handleFamilyInfo = (e) => {
		e.preventDefault();
		setFamilyInfo({ ...familyInfo, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		// save data to registrationContext
		setCandidatesInfo({
			...candidatesInfo,
			familyInfo: { ...familyInfo },
		});

		// save data to local storage
		localStorage.setItem(
			'candidatesInfo',
			JSON.stringify({
				...candidatesInfo,
				familyInfo: { ...familyInfo },
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
				<FormContainerButtonNav current={5} />
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
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
							defaultValue={familyInfo.numberOfSisters}
							handleSelect={handleFamilyInfo}
						/>
						{/* for number of brothers */}
						<SelectField
							title={numberOfBrothers.title}
							name='numberOfBrothers'
							required={true}
							selected={numberOfBrothers.selected}
							options={numberOfBrothers.options}
							defaultValue={familyInfo.numberOfBrothers}
							handleSelect={handleFamilyInfo}
						/>

						{/* having brothers requires brothersInfo */}
						{familyInfo.numberOfBrothers !== 'ভাই নেই' &&
							familyInfo.numberOfBrothers !== '' && (
								<InputField
									title='ভাইদের সম্পর্কে তথ্য*'
									variant='textarea'
									value={familyInfo.brothersInfo}
									required={true}
									name='brothersInfo'
									guideText='সকল ভাইদের শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা, পেশা, বর্তমান অবস্থান লিখুন। একাধিক ভাই থাকলে কমা দিয়ে নিচের লাইনে এসে লিখবেন। '
									handleChange={handleFamilyInfo}
								/>
							)}

						{/* having sisters requires sisterInfo */}
						{familyInfo.numberOfSisters !== 'বোন নেই' &&
							familyInfo.numberOfSisters !== '' && (
								<InputField
									title='বোনদের সম্পর্কে তথ্য*'
									variant='textarea'
									value={familyInfo.sistersInfo}
									required={true}
									name='sistersInfo'
									guideText='সকল বোনদের শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা, পেশা, বিবাহিত হলে স্বামীর পেশা লিখুন। একাধিক বোন থাকলে কমা দিয়ে নিচের লাইনে এসে লিখবেন।'
									handleChange={handleFamilyInfo}
								/>
							)}

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

						{/* buttons */}
						<FormButtonContainer
							nextUrl='/biodata/registration/step6'
							backUrl='/biodata/registration/step4'
							loading={loading}
							saved={saved}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Step5FormContainer;
