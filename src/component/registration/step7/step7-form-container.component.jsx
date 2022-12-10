import { useState } from 'react';

// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import InputField from '../common-component/input-field/input-field.component';

// toast
import { handleSuccess } from '../../../services/handleFormSuccess'
import { ToastContainer } from 'react-toastify';

// registration context
import useRegistration from '../../../hooks/useRegistration';

const Step7FormContainer = () => {
	const { candidatesInfo, setCandidatesInfo } = useRegistration();
	
	const [marriageInfo, setMarriageInfo] = useState({
		manageWifesParda: candidatesInfo.marriageInfo?.manageWifesParda || '',
		allowWifesStudy: candidatesInfo.marriageInfo?.allowWifesStudy || '',
		allowWifesJob: candidatesInfo.marriageInfo?.allowWifesJob || '',
		placeToLiveWithWife: candidatesInfo.marriageInfo?.placeToLiveWithWife || '',
		expectDowry: candidatesInfo.marriageInfo?.expectDowry || '',
		parentsConsent: candidatesInfo.marriageInfo?.parentsConsent || '',
		reasonOfMarriage: candidatesInfo.marriageInfo?.reasonOfMarriage || '',
		wantToDoJobAfterMarriage:
			candidatesInfo.marriageInfo?.wantToDoJobAfterMarriage || '',
		wantToStudyAfterMarriage:
			candidatesInfo.marriageInfo?.wantToStudyAfterMarriage || '',
		reasonOfMarriageAgain:
			candidatesInfo.marriageInfo?.reasonOfMarriageAgain || '',
		reasonOfDivorce: candidatesInfo.marriageInfo?.reasonOfDivorce || '',
		wifesDeathInfo: candidatesInfo.marriageInfo?.wifesDeathInfo || '',
		husbandsDeathInfo: candidatesInfo.marriageInfo?.husbandsDeathInfo || '',
	});

	const [loading, setLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		// save data to registrationContext
		setCandidatesInfo({
			...candidatesInfo,
			marriageInfo: { ...marriageInfo },
		});

		// save data to local storage
		localStorage.setItem(
			'candidatesInfo',
			JSON.stringify({
				...candidatesInfo,
				marriageInfo: { ...marriageInfo },
			})
		);
		setTimeout(() => {
			setLoading(false);
			setSaved(true);
			handleSuccess('Changes Saved SuccessFully');
		}, 2000);
	};

	const handleMarriageInfo = (e) => {
		e.preventDefault();
		setMarriageInfo({ ...marriageInfo, [e.target.name]: e.target.value });
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
				<FormContainerButtonNav current={7} />
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
						{/* if biodata type is male biodata and marital status is married */}
						{candidatesInfo.generalInfo?.biodataType === 'পাত্রের বায়োডাটা' &&
							candidatesInfo.generalInfo?.maritalStatus === 'বিবাহিত' && (
								<>
									<InputField
										title='বিবাহিত অবস্থায় আবার কেন বিয়ে করতে চাচ্ছেন?*'
										variant='textarea'
										value={marriageInfo.reasonOfMarriageAgain}
										required={true}
										name='reasonOfMarriageAgain'
										guideText='বর্তমানে কতজন স্ত্রী আছে, স্ত্রী আপনার নতুন বিয়েতে রাজি কি না, নতুন স্ত্রীকে কোথায় রাখবেন এসব সংক্ষেপে লিখুন'
										handleChange={handleMarriageInfo}
									/>
								</>
							)}
						{/* if marital status is divorced */}
						{candidatesInfo.generalInfo?.maritalStatus === 'ডিভোর্সড' && (
							<>
								<InputField
									title='আপনার ডিভোর্সের সময়কাল ও কারণ*'
									variant='textarea'
									value={marriageInfo.reasonOfDivorce}
									required={true}
									name='reasonOfDivorce'
									guideText='সময়কাল অর্থাৎ কত মাস বা বছরের সংসার হয়েছিল আর ডিভোর্স কবে হয়েছে তা লিখতে বলা হয়েছে। বাচ্চা থাকলে তাদের বয়স ও অন্যান্য বিষয়ে লিখুন সংক্ষেপে।'
									handleChange={handleMarriageInfo}
								/>
							</>
						)}
						{/* if marital status is widow and marital status is widower */}
						{candidatesInfo.generalInfo?.biodataType === 'পাত্রের বায়োডাটা' &&
							candidatesInfo.generalInfo?.maritalStatus === 'বিপত্নীক' && (
								<>
									<InputField
										title='আপনার স্ত্রী কবে, কিভাবে মারা গিয়েছিল?*'
										variant='textarea'
										value={marriageInfo.wifesDeathInfo}
										required={true}
										name='wifesDeathInfo'
										guideText='কয় বছরের সংসার ছিল উল্লেখ করতে পারেন। আপনার সন্তান আছে কি না, থাকলে তাদের বয়স সহ বর্ণনা দিবেন সংক্ষেপে।'
										handleChange={handleMarriageInfo}
									/>
								</>
							)}
						{/* if biodata type is female biodata and  marital status is widow */}
						{candidatesInfo.generalInfo?.biodataType === 'পাত্রীর বায়োডাটা' &&
							candidatesInfo.generalInfo?.maritalStatus === 'বিধবা' && (
								<>
									<InputField
										title='আপনার স্বামী কবে, কিভাবে মারা গিয়েছিল?*'
										variant='textarea'
										value={marriageInfo.husbandsDeathInfo}
										required={true}
										name='husbandsDeathInfo'
										guideText='কয় বছরের সংসার ছিল উল্লেখ করতে পারেন। আপনার সন্তান আছে কি না, থাকলে তাদের বয়স সহ বর্ণনা দিবেন সংক্ষেপে।'
										handleChange={handleMarriageInfo}
									/>
								</>
							)}

						{/* for parents consent */}
						<InputField
							title='অভিভাবক আপনার বিয়েতে রাজি কি না?*'
							variant='input'
							value={marriageInfo.parentsConsent}
							required={true}
							name='parentsConsent'
							handleChange={handleMarriageInfo}
						/>

						{/* for reasons of nikah*/}
						<InputField
							title='বিয়ে কেন করছেন? বিয়ে সম্পর্কে আপনার ধারণা কি?*'
							variant='textarea'
							value={marriageInfo.reasonOfMarriage}
							required={true}
							name='reasonOfMarriage'
							guideText='সংক্ষেপে বর্ণনা করুন।'
							handleChange={handleMarriageInfo}
						/>

						{/* if biodataType is male bidoata */}
						{candidatesInfo.generalInfo?.biodataType === 'পাত্রের বায়োডাটা' && (
							<>
								{/* can maintain wife's parda */}
								<InputField
									title='বিয়ের পর স্ত্রীর পর্দার ব্যবস্থা রাখতে পারবেন?*'
									variant='input'
									value={marriageInfo.manageWifesParda}
									required={true}
									name='manageWifesParda'
									handleChange={handleMarriageInfo}
								/>
								{/* allow wife to studey */}
								<InputField
									title='বিয়ের পর স্ত্রীকে পড়াশোনা করতে দিতে চান?*'
									variant='input'
									value={marriageInfo.allowWifesStudy}
									required={true}
									name='allowWifesStudy'
									handleChange={handleMarriageInfo}
								/>
								{/* allow wife to do job */}
								<InputField
									title='বিয়ের পর স্ত্রীকে চাকরী করতে দিতে চান?*'
									variant='input'
									value={marriageInfo.allowWifesJob}
									required={true}
									name='allowWifesJob'
									handleChange={handleMarriageInfo}
								/>
								{/* place to live with wife after marriage */}
								<InputField
									title='বিয়ের পর স্ত্রীকে কোথায় নিয়ে থাকবেন?*'
									variant='input'
									value={marriageInfo.placeToLiveWithWife}
									required={true}
									name='placeToLiveWithWife'
									handleChange={handleMarriageInfo}
								/>
								{/* expect dowry */}
								<InputField
									title='বিয়ে উপলক্ষে আপনি বা আপনার পরিবার পাত্রীপক্ষের কাছে যৌতুক বা উপহার বা অর্থ আশা করবেন কি না?*'
									variant='textarea'
									value={marriageInfo.expectDowry}
									name='expectDowry'
									required={true}
									handleChange={handleMarriageInfo}
								/>
							</>
						)}

						{/* if biodataType is female bidoata */}
						{candidatesInfo.generalInfo?.biodataType === 'পাত্রীর বায়োডাটা' && (
							<>
								{/* want to do job after marriage */}
								<InputField
									title='আপনি কি বিয়ের পর চাকরি করতে ইচ্ছুক?*'
									variant='input'
									value={marriageInfo.wantToDoJobAfterMarriage}
									required={true}
									name='wantToDoJobAfterMarriage'
									handleChange={handleMarriageInfo}
								/>
								{/* allow wife to studey */}
								<InputField
									title='বিয়ের পর পড়াশোনা চালিয়ে যেতে চান? (ছাত্রী হলে)*'
									variant='input'
									value={marriageInfo.wantToStudyAfterMarriage}
									name='wantToStudyAfterMarriage'
									handleChange={handleMarriageInfo}
								/>
							</>
						)}

						{/* buttons */}
						<FormButtonContainer
							nextUrl='/biodata/registration/step8'
							backUrl='/biodata/registration/step6'
							loading={loading}
							saved={saved}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Step7FormContainer;