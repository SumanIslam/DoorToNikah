import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import InputField from '../common-component/input-field/input-field.component';

const Step6FormContainer = () => {
	const [personalInfo, setPersonalInfo] = useState({
		dailyPrayer: '',
		prayingSince: '',
		MaintainMahram: '',
		QuranRecitation: '',
		majhab: '',
		politicalViews: '',
		watchFilm: '',
		mentalProblem: '',
		deeniMehnot: '',
		pirMuridan: '',
		beliefsAboutMazar: '',
		favoriteIslamicBooks: '',
		favoriteIslamicScholar: '',
		specialSkills: '',
		aboutYourself: '',
	});

	const handlePersonalInfo = (e) => {
		e.preventDefault();
		setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
	};
	
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={6} />
				<div className='form-container'>
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
						value={personalInfo.mentalProblem}
						required={true}
						name='mentalProblem'
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
				</div>
				{/* buttons */}
				<FormButtonContainer
					states={personalInfo}
					url='/biodata/registration/step7'
				/>
			</div>
		</div>
	);
};

export default Step6FormContainer;
