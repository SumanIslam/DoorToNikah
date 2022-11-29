import { useState } from 'react';
// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';
import InputField from '../common-component/input-field/input-field.component';

const Step1FormContainer = () => {
	const [name, setName] = useState('');

	const handleChange = (e) => {
		e.preventDefault();
		setName(e.target.value)
	}
	
  return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={1} />
				<div className='form-container'>
					<InputField
						variant='input'
						title='সম্পূর্ণ নাম*'
						value={name}
						name='name'
						guideText='নাম নেয়া হচ্ছে ভেরিফিকেশনের জন্য, পূর্ণ নাম লিখবেন। আপনার নাম পাবলিকলি প্রকাশ করা হবে না।'
						handleChange={handleChange}
						required={true}
					/>
				</div>
				<FormButtonContainer states={name} url='/biodata/registration/step2' />
			</div>
		</div>
	);
}

export default Step1FormContainer;