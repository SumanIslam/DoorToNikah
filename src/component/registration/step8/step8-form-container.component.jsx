// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import NextButton from '../common-component/next-button/next-button.component';
import SaveChangesButton from '../common-component/save-changes-button/save-changes-button.component';

const Step8FormContainer = () => {
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={8} />
				<div className='form-container'>
					{/* for reasons of nikah*/}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							বিশেষ কিছু যদি জানাতে চান
						</legend>
						<textarea rows={5} className='full-width' />
						<p className='guide-text'>
							আপনার কোনো শর্ত বা উপরে লিখার সুযোগ হয় নি এমন কিছু জানানোর থাকলে
							এই ঘরে লিখতে পারেন। যেমনঃ ছাত্র অবস্থায় বিয়ে করলে কিভাবে ভরণপোষণ
							করবেন বা সংসার চালাবেন, পারিবারিক বা ব্যক্তিগত কোনো সুবিধা বা
							অসুবিধা ইত্যাদি যে কোনো বিষয়ে যত ইচ্ছা লিখতে পারবেন। । যদি কিছুই
							না লিখতে চান, তাহলে ঘরটি ফাঁকা রাখবেন।
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

export default Step8FormContainer;
