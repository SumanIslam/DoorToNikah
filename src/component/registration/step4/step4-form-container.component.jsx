import { useState } from 'react';
// component
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import InputField from '../common-component/input-field/input-field.component';
import SelectField from '../common-component/select-field/select-field.component';

// toast
import { handleSuccess } from '../../../services/handleFormSuccess'
import { ToastContainer } from 'react-toastify';

// registration context
import useRegistration from '../../../hooks/useRegistration';

// data
import { bool, classes, daorayeHadisBool, educationalDivision, hscBool, hscClasses, MadrasaResult, mediumOfStudy, passingYear, result } from './data';

const Step4FormContainer = () => {
	const { candidatesInfo, setCandidatesInfo } = useRegistration();

	const [educationalQualification, setEducationalQualification] = useState({
		mediumOfStudy: candidatesInfo.educationalQualification?.mediumOfStudy || '',
		sscOrEquivalentStudy:
			candidatesInfo.educationalQualification?.sscOrEquivalentStudy || '',
		sscOrEquivalentResult:
			candidatesInfo.educationalQualification?.sscOrEquivalentResult || '',
		sscOrEquivalentDivision:
			candidatesInfo.educationalQualification?.sscOrEquivalentDivision || '',
		sscOrEquivalentPassingYear:
			candidatesInfo.educationalQualification?.sscOrEquivalentPassingYear || '',
		hscOrEquivalentStudy:
			candidatesInfo.educationalQualification?.hscOrEquivalentStudy || '',
		hscOrEquivalentResult:
			candidatesInfo.educationalQualification?.hscOrEquivalentResult || '',
		hscOrEquivalentDivision:
			candidatesInfo.educationalQualification?.hscOrEquivalentDivision || '',
		hscOrEquivalentPassingYear:
			candidatesInfo.educationalQualification?.hscOrEquivalentPassingYear || '',
		honsOrEquivalentStudy:
			candidatesInfo.educationalQualification?.honsOrEquivalentStudy || '',
		honsInstituteName:
			candidatesInfo.educationalQualification?.honsInstituteName || '',
		honsPassingYear:
			candidatesInfo.educationalQualification?.honsPassingYear || '',
		hscSession: candidatesInfo.educationalQualification?.hscSession || '',
		diplomaSubject:
			candidatesInfo.educationalQualification?.diplomaSubject || '',
		diplomaInstituteName:
			candidatesInfo.educationalQualification?.diplomaInstituteName || '',
		diplomaPassingYear:
			candidatesInfo.educationalQualification?.diplomaPassingYear || '',
		highestClass: candidatesInfo.educationalQualification?.highestClass || '',
		isHafez: candidatesInfo.educationalQualification?.isHafez || '',
		passDaorayeHadis:
			candidatesInfo.educationalQualification?.passDaorayeHadis || '',
		DaorayeHadisPassingYear:
			candidatesInfo.educationalQualification?.DaorayeHadisPassingYear || '',
		DaorayeHadisResult:
			candidatesInfo.educationalQualification?.DaorayeHadisResult || '',
		studyTakhassos:
			candidatesInfo.educationalQualification?.studyTakhassos || '',
		takhassosSubject:
			candidatesInfo.educationalQualification?.takhassosSubject || '',
		takhassosPassingYear:
			candidatesInfo.educationalQualification?.takhassosPassingYear || '',
		daorayeHadisYear:
			candidatesInfo.educationalQualification?.daorayeHadisYear || '',
		otherEducationalInfo:
			candidatesInfo.educationalQualification?.otherEducationalInfo || '',
	});

	const [loading, setLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const handleEducationalQualification = (e) => {
		e.preventDefault();

		setEducationalQualification({
			...educationalQualification,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// save data to registrationContext
		setCandidatesInfo({
			...candidatesInfo,
			educationalQualification: { ...educationalQualification },
		});

		// save data to local storage
		localStorage.setItem(
			'candidatesInfo',
			JSON.stringify({
				...candidatesInfo,
				educationalQualification: { ...educationalQualification },
			})
		);
		setTimeout(() => {
			setLoading(false);
			setSaved(true);
			handleSuccess('Changes Saved SuccessFully');
		}, 2000);
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
				<FormContainerButtonNav current={4} />
				<div className='form-container'>
					{/* for medium of study */}
					<form onSubmit={handleSubmit}>
						<SelectField
							title={mediumOfStudy.title}
							selected={mediumOfStudy.selected}
							options={mediumOfStudy.options}
							name='mediumOfStudy'
							required={true}
							guideText='আলিয়া / মাধ্যমিক / কারিগরি / ইংরেজি মাধ্যমে শিক্ষিতরা "জেনারেল" অপশন সিলেক্ট করুন।'
							defaultValue={educationalQualification.mediumOfStudy}
							handleSelect={handleEducationalQualification}
						/>

						{/* when medium of study is 'জেনারেল' */}
						{educationalQualification.mediumOfStudy === 'জেনারেল' && (
							<>
								{/* did pass ssc? */}
								<SelectField
									title='মাধ্যমিক (SSC) / সমমান পাশ করেছেন?*'
									selected={bool.selected}
									options={bool.options}
									name='sscOrEquivalentStudy'
									required={true}
									defaultValue={educationalQualification.sscOrEquivalentStudy}
									handleSelect={handleEducationalQualification}
								/>
								{/* pass ssc */}
								{educationalQualification.sscOrEquivalentStudy === 'হ্যাঁ' && (
									<>
										{/* ssc result */}
										<SelectField
											title='মাধ্যমিক (SSC) / সমমান ফলাফল*'
											selected={result.selected}
											options={result.options}
											name='sscOrEquivalentResult'
											required={true}
											defaultValue={
												educationalQualification.sscOrEquivalentResult
											}
											handleSelect={handleEducationalQualification}
										/>
										{/* ssc division */}
										<SelectField
											title='মাধ্যমিক (SSC) / সমমান বিভাগ*'
											selected={educationalDivision.selected}
											options={educationalDivision.options}
											name='sscOrEquivalentDivision'
											required={true}
											defaultValue={
												educationalQualification.sscOrEquivalentDivision
											}
											handleSelect={handleEducationalQualification}
										/>
										{/* ssc passing year */}
										<SelectField
											title='মাধ্যমিক (SSC) / সমমান পাসের সন*'
											selected={passingYear.selected}
											options={passingYear.options}
											name='sscOrEquivalentPassingYear'
											required={true}
											defaultValue={
												educationalQualification.sscOrEquivalentPassingYear
											}
											handleSelect={handleEducationalQualification}
										/>
										{/* did pass hsc? */}
										<SelectField
											title='উচ্চ মাধ্যমিক (HSC) / সমমান পাশ করেছেন?*'
											selected={hscBool.selected}
											options={hscBool.options}
											name='hscOrEquivalentStudy'
											required={true}
											defaultValue={
												educationalQualification.hscOrEquivalentStudy
											}
											handleSelect={handleEducationalQualification}
										/>
										{/* when pass hsc */}
										{educationalQualification.hscOrEquivalentStudy ===
											'হ্যাঁ' && (
											<>
												{/* hsc result */}
												<SelectField
													title='উচ্চ মাধ্যমিক (HSC) / সমমান ফলাফল*'
													selected={result.selected}
													options={result.options}
													name='hscOrEquivalentResult'
													required={true}
													defaultValue={
														educationalQualification.hscOrEquivalentResult
													}
													handleSelect={handleEducationalQualification}
												/>
												{/* hsc division */}
												<SelectField
													title='উচ্চ মাধ্যমিক (HSC) / সমমান বিভাগ*'
													selected={educationalDivision.selected}
													options={educationalDivision.options}
													name='hscOrEquivalentDivision'
													required={true}
													defaultValue={
														educationalQualification.hscOrEquivalentDivision
													}
													handleSelect={handleEducationalQualification}
												/>
												{/* hsc passing year */}
												<SelectField
													title='উচ্চ মাধ্যমিক (HSC) / সমমান পাসের সন*'
													selected={passingYear.selected}
													options={passingYear.options}
													name='hscOrEquivalentPassingYear'
													required={true}
													defaultValue={
														educationalQualification.hscOrEquivalentPassingYear
													}
													handleSelect={handleEducationalQualification}
												/>
												{/* hons degree */}
												<InputField
													title='স্নাতক / স্নাতক (সম্মান) / সমমান শিক্ষাগত যোগ্যতা'
													name='honsOrEquivalentStudy'
													value={educationalQualification.honsOrEquivalentStudy}
													variant='textarea'
													guideText='উত্তরটা এভাবে দিতে পারেনঃ Bachelor of Science (B.Sc) in Electrical And Electronics Engineering (EEE)'
													handleChange={handleEducationalQualification}
												/>
												{/* if study hons */}
												{educationalQualification.honsOrEquivalentStudy && (
													<>
														{/* hons institute name */}
														<InputField
															title='শিক্ষাপ্রতিষ্ঠানের নাম'
															name='honsInstituteName'
															value={educationalQualification.honsInstituteName}
															variant='input'
															guideText='যে প্রতিষ্ঠান থেকে স্নাতক করেছেন।'
															handleChange={handleEducationalQualification}
														/>
														{/* hons passing year */}
														<InputField
															title='পাসের সন'
															name='honsPassingYear'
															value={educationalQualification.honsPassingYear}
															variant='input'
															guideText='ছাত্র হলে শিক্ষাবর্ষ লিখবেন।যেমনঃ তৃতীয় বর্ষ'
															handleChange={handleEducationalQualification}
														/>
													</>
												)}
											</>
										)}
										{/* didn't pass hsc */}
										{educationalQualification.hscOrEquivalentStudy === 'না' && (
											<SelectField
												title='উচ্চ মাধ্যমিক (HSC) / সমমান কোন বর্ষে পড়ছেন?*'
												selected={hscClasses.selected}
												options={hscClasses.options}
												name='hscSession'
												required={true}
												defaultValue={educationalQualification.hscSession}
												handleSelect={handleEducationalQualification}
											/>
										)}
										{/* study diploma */}
										{educationalQualification.hscOrEquivalentStudy ===
											'ডিপ্লোমা পড়েছি' && (
											<>
												<InputField
													title='ডিপ্লোমা কোন বিষয়ে পড়েছেন?*'
													variant='input'
													value={educationalQualification.diplomaSubject}
													name='diplomaSubject'
													required={true}
													guideText='এভাবে উত্তর দিতে পারেনঃ Diploma in Textile Engineering'
													handleChange={handleEducationalQualification}
												/>
												<InputField
													title='শিক্ষাপ্রতিষ্ঠানের নাম*'
													variant='input'
													value={educationalQualification.diplomaInstituteName}
													name='diplomaInstituteName'
													required={true}
													guideText='যে প্রতিষ্ঠান থেকে ডিপ্লোমা পড়েছেন'
													handleChange={handleEducationalQualification}
												/>
												<InputField
													title='পাশের সন*'
													variant='input'
													value={educationalQualification.diplomaPassingYear}
													name='diplomaPassingYear'
													required={true}
													guideText='ছাত্র হলে বর্ষ লিখবেন। যেমনঃ ৩য় বর্ষ'
													handleChange={handleEducationalQualification}
												/>
											</>
										)}
									</>
								)}

								{/* didn't pass ssc */}
								{educationalQualification.sscOrEquivalentStudy === 'না' && (
									<SelectField
										title='কোন ক্লাস পর্যন্ত পড়েছেন?*'
										selected={classes.selected}
										options={classes.options}
										name='highestClass'
										required={true}
										handleSelect={handleEducationalQualification}
									/>
								)}
							</>
						)}

						{/* when medium of study is মাদ্রাসা */}
						{educationalQualification.mediumOfStudy === 'মাদ্রাসা' && (
							<>
								{/* is he/she hafez? */}
								<SelectField
									title='আপনি কি হাফেজ?*'
									selected={bool.selected}
									options={bool.options}
									name='isHafez'
									required={true}
									defaultValue={educationalQualification.isHafez}
									handleSelect={handleEducationalQualification}
								/>
								{/* did passed 'দাওরায়ে হাদীস' */}
								<SelectField
									title='দাওরায়ে হাদীস পাশ করেছেন?*'
									selected={daorayeHadisBool.selected}
									options={daorayeHadisBool.options}
									name='passDaorayeHadis'
									required={true}
									defaultValue={educationalQualification.passDaorayeHadis}
									handleSelect={handleEducationalQualification}
								/>
								{educationalQualification.passDaorayeHadis === 'হ্যাঁ' && (
									<>
										{/* passing year of 'দাওরায়ে হাদীস' */}
										<SelectField
											title='দাওরায়ে হাদীস পাসের সন*'
											selected={passingYear.selected}
											options={passingYear.options}
											name='DaorayeHadisPassingYear'
											required={true}
											defaultValue={
												educationalQualification.DaorayeHadisPassingYear
											}
											handleSelect={handleEducationalQualification}
										/>
										{/* result of 'দাওরায়ে হাদীস' */}
										<SelectField
											title='দাওরায়ে হাদীসের নতিজা কি?*'
											selected={MadrasaResult.selected}
											options={MadrasaResult.options}
											name='DaorayeHadisResult'
											required={true}
											defaultValue={educationalQualification.DaorayeHadisResult}
											handleSelect={handleEducationalQualification}
										/>
										{/* study takhassos? */}
										<SelectField
											title='আপনি কি তাখাস্সুস পড়েছেন?*'
											selected={bool.selected}
											options={bool.options}
											name='studyTakhassos'
											required={true}
											defaultValue={educationalQualification.studyTakhassos}
											handleSelect={handleEducationalQualification}
										/>
										{educationalQualification.studyTakhassos === 'হ্যাঁ' && (
											<>
												<InputField
													title='কোন বিষয়ে তাখাস্সুস পড়েছেন?*'
													name='takhassosSubject'
													value={educationalQualification.takhassosSubject}
													variant='input'
													required={true}
													handleChange={handleEducationalQualification}
												/>
												<InputField
													title='তাখাস্সুস পাসের সন*'
													name='takhassosPassingYear'
													value={educationalQualification.takhassosPassingYear}
													variant='input'
													guideText='ছাত্র হলে লিখবেন ছাত্র'
													required={true}
													handleChange={handleEducationalQualification}
												/>
											</>
										)}
									</>
								)}

								{/* currently study daoraye hadis */}
								{educationalQualification.passDaorayeHadis ===
									'না, এখনো পড়ছি' && (
									<>
										<InputField
											title='দাওরায়ে হাদীস কোন বর্ষে পড়ছেন?*'
											name='daorayeHadisYear'
											value={educationalQualification.daorayeHadisYear}
											variant='input'
											required={true}
											handleChange={handleEducationalQualification}
										/>
									</>
								)}
							</>
						)}

						{/* for other educational info */}
						<InputField
							title='অন্যান্য শিক্ষাগত যোগ্যতা'
							name='otherEducationalInfo'
							value={educationalQualification.otherEducationalInfo}
							variant='textarea'
							guideText='শিক্ষার বিষয়, প্রতিষ্ঠানের নাম, পাসের সন ইত্যাদি বিস্তারিত লিখবেন। কিছু না থাকলে ঘরটি ফাঁকা রাখবেন।'
							handleChange={handleEducationalQualification}
						/>

						{/* buttons */}
						<FormButtonContainer
							nextUrl='/biodata/registration/step5'
							backUrl='/biodata/registration/step3'
							loading={loading}
							saved={saved}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Step4FormContainer;
