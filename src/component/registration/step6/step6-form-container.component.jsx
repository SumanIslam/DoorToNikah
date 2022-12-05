import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import InputField from '../common-component/input-field/input-field.component';

// registration context
import useRegistration from '../../../hooks/useRegistration';

const Step6FormContainer = () => {
	const { candidatesInfo, setCandidatesInfo } = useRegistration();
	const [personalInfo, setPersonalInfo] = useState({
		haveSunnatiBeard: candidatesInfo.personalInfo?.haveSunnatiBeard || '',
		clothesOverAnkle: candidatesInfo.personalInfo?.clothesOverAnkle || '',
		outdoorClothes: candidatesInfo.personalInfo?.outdoorClothes || '',
		dailyPrayer: candidatesInfo.personalInfo?.dailyPrayer || '',
		prayingSince: candidatesInfo.personalInfo?.prayingSince || '',
		MaintainMahram: candidatesInfo.personalInfo?.MaintainMahram || '',
		QuranRecitation: candidatesInfo.personalInfo?.QuranRecitation || '',
		majhab: candidatesInfo.personalInfo?.majhab || '',
		politicalViews: candidatesInfo.personalInfo?.politicalViews || '',
		watchFilm: candidatesInfo.personalInfo?.watchFilm || '',
		mentalOrPhysicalProblem:
			candidatesInfo.personalInfo?.mentalOrPhysicalProblem || '',
		deeniMehnot: candidatesInfo.personalInfo?.deeniMehnot || '',
		pirMuridan: candidatesInfo.personalInfo?.pirMuridan || '',
		beliefsAboutMazar: candidatesInfo.beliefsAboutMazar?.dailyPrayer || '',
		favoriteIslamicBooks:
			candidatesInfo.personalInfo?.favoriteIslamicBooks || '',
		favoriteIslamicScholar:
			candidatesInfo.personalInfo?.favoriteIslamicScholar || '',
		specialSkills: candidatesInfo.personalInfo?.dailyPrayer || '',
		aboutYourself: candidatesInfo.personalInfo?.aboutYourself || '',
	});

	const [loading, setLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const handlePersonalInfo = (e) => {
		e.preventDefault();
		setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		// save data to registrationContext
		setCandidatesInfo({
			...candidatesInfo,
			personalInfo: { ...personalInfo },
		});

		// save data to local storage
		localStorage.setItem(
			'candidatesInfo',
			JSON.stringify({
				...candidatesInfo,
				personalInfo: { ...personalInfo },
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
				<FormContainerButtonNav current={6} />
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
						{/* if biodataType is 'পাত্রের বায়োডাটা' */}
						{candidatesInfo.generalInfo?.biodataType === 'পাত্রের বায়োডাটা' && (
							<>
								{/* sunnati beard */}
								<InputField
									title='সুন্নতি দাঁড়ি রয়েছে কি?*'
									variant='input'
									value={personalInfo.haveSunnatiBeard}
									required={true}
									name='haveSunnatiBeard'
									handleChange={handlePersonalInfo}
								/>
								{/* clothes over ankle */}
								<InputField
									title='পায়ের টাখনুর উপরে কাপড় পরেন?*'
									variant='input'
									value={personalInfo.clothesOverAnkle}
									required={true}
									name='clothesOverAnkle'
									handleChange={handlePersonalInfo}
								/>
								{/* outdoor clothes */}
								<InputField
									title='ঘরের বাহিরে সাধারণত কী ধরণের পোশাক পরেন?*'
									variant='input'
									value={personalInfo.outdoorClothes}
									required={true}
									name='outdoorClothes'
									guideText='এভাবে উত্তর দিতে পারেনঃ- "সাদা পাঞ্জবী সাথে সাদা টুপি" বা "জিন্স প্যান্ট সাথে শার্ট"'
									handleChange={handlePersonalInfo}
								/>
							</>
						)}

						{/* if biodataType is 'পাত্রীর বায়োডাটা' */}
						{candidatesInfo.generalInfo?.biodataType === 'পাত্রীর বায়োডাটা' && (
							<>
								{/* outdoor clothes */}
								<InputField
									title='ঘরের বাহিরে সাধারণত কী ধরণের পোশাক পরেন? (পর্দার বিবরণ)*'
									variant='input'
									value={personalInfo.outdoorClothes}
									required={true}
									name='outdoorClothes'
									guideText='উত্তর যেভাবে দিতে পারেনঃ- "কালো বোরকা ও হিজাব পরি কিন্ত নিকাব পরি না" বা " কালো বোরকা ও নিকাব পরি কিন্ত হাত-পা মোজা পরি না"। এভাবে নিজের মত করে আপনার পোষাকের বিবরণ দিবেন। যেন পাঠক আপনার পর্দার ব্যাপারে নূন্যতম ধারণা করতে পারেন।'
									handleChange={handlePersonalInfo}
								/>
							</>
						)}

						{/* for prayers */}
						<InputField
							title='প্রতিদিন পাঁচ ওয়াক্ত নামাজ পড়া হয়?*'
							variant='input'
							value={personalInfo.dailyPrayer}
							required={true}
							name='dailyPrayer'
							handleChange={handlePersonalInfo}
						/>
						{/* for prayers */}
						<InputField
							title='নিয়মিত নামায কত সময় যাবত পড়ছেন?*'
							variant='input'
							value={personalInfo.prayingSince}
							required={true}
							name='prayingSince'
							guideText='অর্থাৎ কয় বছর/মাস যাবত ৫ ওয়াক্ত নামায শুরু করেছেন।'
							handleChange={handlePersonalInfo}
						/>

						{/* for mahram - nonmahram maintain */}
						<InputField
							title='মাহরাম/নন-মাহরাম মেনে চলেন কি?*'
							variant='input'
							value={personalInfo.MaintainMahram}
							required={true}
							name='MaintainMahram'
							handleChange={handlePersonalInfo}
						/>

						{/* for Quran recitation */}
						<InputField
							title='শুদ্ধভাবে কুরআন তিলওয়াত করতে পারেন?*'
							variant='input'
							value={personalInfo.QuranRecitation}
							required={true}
							name='QuranRecitation'
							handleChange={handlePersonalInfo}
						/>

						{/* for majhhab */}
						<InputField
							title='কোন মাঝহাব অনুসরণ করেন?*'
							variant='input'
							value={personalInfo.majhab}
							required={true}
							name='majhab'
							handleChange={handlePersonalInfo}
						/>

						{/* for political views */}
						<InputField
							title='কোনো রাজনৈতিক দর্শন থাকলে লিখুন*'
							variant='input'
							value={personalInfo.politicalViews}
							required={true}
							name='politicalViews'
							handleChange={handlePersonalInfo}
						/>

						{/* for natok / serial */}
						<InputField
							title='নাটক/সিনেমা/সিরিয়াল/গান এসব দেখেন বা শুনেন?*'
							variant='input'
							value={personalInfo.watchFilm}
							required={true}
							name='watchFilm'
							handleChange={handlePersonalInfo}
						/>

						{/* for physical and mental problem */}
						<InputField
							title='মানসিক বা শারীরিক কোনো রোগ আছে কি?*'
							variant='input'
							value={personalInfo.mentalOrPhysicalProblem}
							required={true}
							name='mentalOrPhysicalProblem'
							handleChange={handlePersonalInfo}
						/>

						{/* for diner mehnot */}
						<InputField
							title='দ্বীনের কোন বিশেষ মেহনতে যুক্ত আছেন?*'
							variant='input'
							value={personalInfo.deeniMehnot}
							required={true}
							name='deeniMehnot'
							guideText='যেমনঃ তাবলীগ ইত্যাদি।'
							handleChange={handlePersonalInfo}
						/>

						{/* for pirer murid */}
						<InputField
							title='আপনি কি কোনো পীরের মুরিদ বা অনুসারী?*'
							variant='input'
							value={personalInfo.pirMuridan}
							required={true}
							name='pirMuridan'
							guideText='যদি হয়ে থাকেন তাহলে পীরের নাম এবং তরিকার নাম লিখবেন।'
							handleChange={handlePersonalInfo}
						/>

						{/* for beliefs about mazar */}
						<InputField
							title='মাজার সম্পর্কে আপনার ধারণা বা বিশ্বাস কি?*'
							variant='input'
							value={personalInfo.beliefsAboutMazar}
							required={true}
							name='beliefsAboutMazar'
							handleChange={handlePersonalInfo}
						/>

						{/* for favorite islamic books */}
						<InputField
							title='আপনার পছন্দের অন্তত ৩ টি ইসলামী বই এর নাম লিখুন*'
							variant='input'
							value={personalInfo.favoriteIslamicBooks}
							required={true}
							name='favoriteIslamicBooks'
							handleChange={handlePersonalInfo}
						/>

						{/* for favorite islamic scholar */}
						<InputField
							title='আপনার পছন্দের অন্তত ৩ জন আলেমের নাম লিখুন*'
							variant='input'
							value={personalInfo.favoriteIslamicScholar}
							required={true}
							name='favoriteIslamicScholar'
							handleChange={handlePersonalInfo}
						/>

						{/* for Skills in Deen */}
						<InputField
							title='বিশেষ দ্বীনি বা দুনিয়াবি যোগ্যতা (যদি থাকে)'
							variant='textarea'
							value={personalInfo.specialSkills}
							name='specialSkills'
							handleChange={handlePersonalInfo}
						/>
						{/* for about yourself */}
						<InputField
							title='নিজের সম্পর্কে কিছু লিখুন*'
							variant='textarea'
							value={personalInfo.aboutYourself}
							required={true}
							name='aboutYourself'
							guideText='নিজের পছন্দ-অপছন্দ, শখ-ইচ্ছা, দ্বীনী-দুনিয়াবী ইত্যাদি বিষয় বিস্তারিত লিখতে হবে। কারণ এই লেখা পড়ে পাঠক আপনার সম্পর্কে সাধারণ ধারণা লাভ করবে।'
							handleChange={handlePersonalInfo}
						/>

						{/* buttons */}
						<FormButtonContainer
							nextUrl='/biodata/registration/step7'
							backUrl='/biodata/registration/step5'
							loading={loading}
							saved={saved}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Step6FormContainer;
