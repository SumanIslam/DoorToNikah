import React from 'react';

// styles
import './step1-form-container.style.scss';

// component
import FormContainerNav from '../../common-component/form-container-nav/form-container-nav.component';
import FormContainerButtonNav from '../../common-component/form-container-button-nav/form-container-button-nav.component';
import RegistrationFormSelect from '../../common-component/form-select/form-select.component';
import SaveChangesButton from '../../common-component/save-changes-button/save-changes-button.component';
import NextButton from '../../common-component/next-button/next-button.component';

const Step1FormContainer = () => {
  return (
		<div className='step1-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={1} />
				<div className='form-container'>
					<RegistrationFormSelect
						title='সম্পূর্ণ নাম*'
						guideText='নাম নেয়া হচ্ছে ভেরিফিকেশনের জন্য, পূর্ণ নাম লিখবেন। আপনার নাম পাবলিকলি প্রকাশ করা হবে না।'
						placeholder={'Your Name...'}
					/>
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