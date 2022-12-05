import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import InputField from '../common-component/input-field/input-field.component';

// registration context
import useRegistration from '../../../hooks/useRegistration';

const Step8FormContainer = () => {
	const [otherInfo, setOtherInfo] = useState({
		termsToInclude: '',
		occupationInfo: '',
	});

	// registration context
	const { candidatesInfo, setCandidatesInfo } = useRegistration();

	const [loading, setLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setCandidatesInfo({
			...candidatesInfo,
			otherInfo: { ...otherInfo },
		});
		setTimeout(() => {
			setLoading(false);
			setSaved(true);
		}, 2000);
	};

	const handleMarriageInfo = (e) => {
		e.preventDefault();
		setOtherInfo({ ...otherInfo, [e.target.name]: e.target.value });
	};

	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={8} />
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
						{/* for if you want to say something*/}
						<InputField
							title='বিশেষ কিছু যদি জানাতে চান'
							variant='textarea'
							value={otherInfo.termsToInclude}
							name='termsToInclude'
							guideText='আপনার কোনো শর্ত বা উপরে লিখার সুযোগ হয় নি এমন কিছু জানানোর থাকলে এই ঘরে লিখতে পারেন। যেমনঃ ছাত্র অবস্থায় বিয়ে করলে কিভাবে ভরণপোষণ করবেন বা সংসার চালাবেন, পারিবারিক বা ব্যক্তিগত কোনো সুবিধা বা অসুবিধা ইত্যাদি যে কোনো বিষয়ে যত ইচ্ছা লিখতে পারবেন। । যদি কিছুই না লিখতে চান, তাহলে ঘরটি ফাঁকা রাখবেন।'
							handleChange={handleMarriageInfo}
						/>
						{/* occupation info */}
						<InputField
							title='পেশা সম্পর্কিত তথ্য'
							variant='textarea'
							value={otherInfo.occupationInfo}
							name='occupationInfo'
							guideText='আপনি যদি চাকুরীজীবি হয়ে থাকেন তাহলে অফিসের অবস্থান, পেশাগত ভবিষ্যৎ পরিকল্পনা, বিয়ের পর চাকরী ও সংসার কিভাবে চালাতে চান ইত্যাদি বিষয় লিখতে পারেন। যদি চাকুরীজীবি না হয়ে থাকেন তাহলে ঘরটি ফাঁকা রাখুন।'
							handleChange={handleMarriageInfo}
						/>

						{/* buttons */}
						<FormButtonContainer
							nextUrl='/biodata/registration/step9'
							backUrl='/biodata/registration/step7'
							loading={loading}
							saved={saved}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Step8FormContainer;
