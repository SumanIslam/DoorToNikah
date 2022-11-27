// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import NextButton from '../common-component/next-button/next-button.component';
import SaveChangesButton from '../common-component/save-changes-button/save-changes-button.component';

const Step1FormContainer = () => {
  return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={1} />
				<div className='form-container'>
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>সম্পূর্ণ নাম*</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							নাম নেয়া হচ্ছে ভেরিফিকেশনের জন্য, পূর্ণ নাম লিখবেন। আপনার নাম
							পাবলিকলি প্রকাশ করা হবে না।
						</p>
					</fieldset>
				</div>
				<div className='d-flex justify-content-between width'>
					<SaveChangesButton />
					<NextButton disabled={true} />
				</div>
			</div>
		</div>
	);
}

export default Step1FormContainer;