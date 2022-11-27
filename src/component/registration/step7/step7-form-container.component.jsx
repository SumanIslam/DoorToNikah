// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import NextButton from '../common-component/next-button/next-button.component';
import SaveChangesButton from '../common-component/save-changes-button/save-changes-button.component';

const Step7FormContainer = () => {
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={7} />
				<div className='form-container'>
					{/* for parents consent */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							অভিভাবক আপনার বিয়েতে রাজি কি না?*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for reasons of nikah*/}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							বিয়ে কেন করছেন? বিয়ে সম্পর্কে আপনার ধারণা কি?
						</legend>
						<textarea rows={5} className='full-width' />
						<p className='guide-text'>সংক্ষেপে বর্ণনা করুন।</p>
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

export default Step7FormContainer;
