// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import NextButton from '../common-component/next-button/next-button.component';
import SaveChangesButton from '../common-component/save-changes-button/save-changes-button.component';

const Step9FormContainer = () => {
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={9} />
				<div className='form-container'>
					{/* for age */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>বয়স*</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for skin color */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>গাত্রবর্ণ*</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for minimum height*/}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>নূন্যতম উচ্চতা*</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for minimum educational qualifications */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							নূন্যতম শিক্ষাগত যোগ্যতা*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for district */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>জেলা*</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for marital condition */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>বৈবাহিক অবস্থা *</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for occupation */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>পেশা*</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for financial condition */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>অর্থনৈতিক অবস্থা*</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for family condition */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>পারিবারিক অবস্থা*</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for characteristics of partner */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							জীবনসঙ্গীর যে বৈশিষ্ট্য বা গুণাবলী আশা করেন
						</legend>
						<textarea rows={5} className='full-width' />
						<p className='guideText'>
							এই পয়েন্ট অনেক গুরুত্বপূর্ণ। সময় নিয়ে বিস্তারিত লিখুন। কোন বিশেষ
							শর্ত থাকলে তা-ও লিখতে পারেন।
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

export default Step9FormContainer;
