// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import NextButton from '../common-component/next-button/next-button.component';
import SaveChangesButton from '../common-component/save-changes-button/save-changes-button.component';

// data
import { mediumOfStudy } from './data'

const Step4FormContainer = () => {
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={4} />
				<div className='form-container'>
					{/* for medium of study */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>{mediumOfStudy.title}</legend>
						<select>
							<option defaultValue={mediumOfStudy.selected}>
								{mediumOfStudy.selected}
							</option>
							{mediumOfStudy.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
						<p className='guide-text'>
							আলিয়া / মাধ্যমিক / কারিগরি / ইংরেজি মাধ্যমে শিক্ষিতরা "জেনারেল"
							অপশন সিলেক্ট করুন।
						</p>
					</fieldset>
					{/* for other educational info */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							অন্যান্য শিক্ষাগত যোগ্যতা
						</legend>
						<textarea rows={5} className='full-width' />
						<p className='guide-text'>
							শিক্ষার বিষয়, প্রতিষ্ঠানের নাম, পাসের সন ইত্যাদি বিস্তারিত লিখবেন।
							কিছু না থাকলে ঘরটি ফাঁকা রাখবেন।
						</p>
					</fieldset>
				</div>
				{/* buttons */}
				<div className='d-flex justify-content-between width'>
					<SaveChangesButton />
					<NextButton disabled={true} />
				</div>
			</div>
		</div>
	);
};

export default Step4FormContainer;
