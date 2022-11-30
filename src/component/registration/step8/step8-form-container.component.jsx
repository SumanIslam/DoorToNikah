import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import InputField from '../common-component/input-field/input-field.component';

const Step8FormContainer = () => {
	const [otherInfo, setOtherInfo] = useState('');

	const handleMarriageInfo = (e) => {
		e.preventDefault();
		setOtherInfo(e.target.value);
	};

	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={8} />
				<div className='form-container'>
					{/* for if you want to say something*/}
					<InputField
						title='বিশেষ কিছু যদি জানাতে চান'
						variant='textarea'
						value={otherInfo}
						name='otherInfo'
						guideText='আপনার কোনো শর্ত বা উপরে লিখার সুযোগ হয় নি এমন কিছু জানানোর থাকলে এই ঘরে লিখতে পারেন। যেমনঃ ছাত্র অবস্থায় বিয়ে করলে কিভাবে ভরণপোষণ করবেন বা সংসার চালাবেন, পারিবারিক বা ব্যক্তিগত কোনো সুবিধা বা অসুবিধা ইত্যাদি যে কোনো বিষয়ে যত ইচ্ছা লিখতে পারবেন। । যদি কিছুই না লিখতে চান, তাহলে ঘরটি ফাঁকা রাখবেন।'
						handleChange={handleMarriageInfo}
					/>
				</div>
				{/* buttons */}
				<FormButtonContainer
					states={otherInfo}
					url='/biodata/registration/step9'
				/>
			</div>
		</div>
	);
};

export default Step8FormContainer;
