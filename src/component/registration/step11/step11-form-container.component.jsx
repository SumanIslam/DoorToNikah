import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import InputField from '../common-component/input-field/input-field.component';
import SubmitBiodataButton from '../common-component/submit-biodata-button/submit-biodata-button.component';

// toast
import { handleSuccess } from '../../../services/handleFormSuccess'
import { ToastContainer } from 'react-toastify';

// registration context
import useRegistration from '../../../hooks/useRegistration';

const Step11FormContainer = () => {
	const { candidatesInfo, setCandidatesInfo } = useRegistration();

	const [contactInfo, setContactInfo] = useState({
		guardiansPhoneNumber:
			candidatesInfo?.contactInfo?.guardiansPhoneNumber || '',
		relationWithGuardian:
			candidatesInfo?.contactInfo?.relationWithGuardian || '',
		EmailForResponse: candidatesInfo?.contactInfo?.EmailForResponse || '',
		candidatesPhoneNumber:
			candidatesInfo?.contactInfo?.candidatesPhoneNumber || '',
	});

	const [loading, setLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		
		// save data to registrationContext
		setCandidatesInfo({
			...candidatesInfo,
			contactInfo: { ...contactInfo },
		});

		// save data to local storage
		localStorage.setItem(
			'candidatesInfo',
			JSON.stringify({
				...candidatesInfo,
				contactInfo: { ...contactInfo },
			})
		);
		setTimeout(() => {
			setLoading(false);
			setSaved(true);
			handleSuccess('Changes Saved SuccessFully');
		}, 2000);
	};

	const handleContactInfo = (e) => {
		e.preventDefault();

		setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
	};

	return (
		<div className='step-container'>
			<FormContainerNav />
			{/* success Toast */}
			<ToastContainer
				position='top-center'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>
			<div className='mlr-2'>
				<FormContainerButtonNav current={11} />
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
						{/* guardians phone number*/}
						<InputField
							title='অভিভাবকের নাম্বার*'
							variant='input'
							value={contactInfo.guardiansPhoneNumber}
							required={true}
							name='guardiansPhoneNumber'
							guideText='অবশ্যই ইংরেজীতে নাম্বার লিখবেন এভাবে 01700-000000। বিঃদ্রঃ নিজের নাম্বার দিলে ভেরিফিকেশনে এপ্রুভ হবে না। এই ব্যাপারে আমরা সর্বোচ্চ কঠোর। সব সময় খোলা থাকবে এমন নাম্বার লিখবেন। নাম্বার বন্ধ থাকার আশংকা থাকলে দুইটি নাম্বার লিখতে পারেন।'
							handleChange={handleContactInfo}
						/>

						{/* relation with guardian */}
						<InputField
							title='যার নাম্বার লিখেছেন*'
							variant='input'
							value={contactInfo.relationWithGuardian}
							required={true}
							name='relationWithGuardian'
							guideText='যে অভিভাবকের নাম্বার দিয়েছেন তার সাথে আপনার সম্পর্ক। এভাবে লিখবেনঃ বাবা'
							handleChange={handleContactInfo}
						/>

						{/* email for response*/}
						<InputField
							title='বায়োডাটা গ্রহণের ই-মেইল এড্রেস*'
							variant='input'
							value={contactInfo.EmailForResponse}
							required={true}
							name='EmailForResponse'
							guideText='এই ই-মেইলে অপরপক্ষ বায়োডাটার লিংক পাঠাতে পারে। তাই নির্ভুলভাবে লিখুন।'
							handleChange={handleContactInfo}
						/>

						{/* candidates phone number */}
						<InputField
							title='আপনার নাম্বার (শুধুমাত্র আপনি ও কতৃপক্ষ বাদে কেউ দেখতে পাচ্ছে না)*'
							variant='input'
							value={contactInfo.candidatesPhoneNumber}
							required={true}
							name='candidatesPhoneNumber'
							guideText='ভেরিফিকেশন বা অন্য যে কোনো প্রয়োজনে ওয়েবসাইট কতৃপক্ষ থেকে আপনাকে কল দেয়ার প্রয়োজন হতে পারে। তাই আপনার নাম্বার আমাদের কাছে রাখা হচ্ছে। এই নাম্বার বায়োডাটাতে প্রকাশ করা হবে না। অর্থাৎ আপনি এবং কতৃপক্ষ বাদে অন্য কেউ দেখতে পাবে না।'
							handleChange={handleContactInfo}
						/>
						{/* buttons */}
						<FormButtonContainer
							backUrl='/biodata/registration/step10'
							loading={loading}
							saved={saved}
						/>
					</form>
					<SubmitBiodataButton saved={saved} candidatesInfo={candidatesInfo} />
				</div>
			</div>
		</div>
	);
};

export default Step11FormContainer;
