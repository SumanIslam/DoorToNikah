// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import NextButton from '../common-component/next-button/next-button.component';
import SaveChangesButton from '../common-component/save-changes-button/save-changes-button.component';

const Step3FormContainer = () => {
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={3} />
				<div className='form-container'>
					{/* for permanent address */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>স্থায়ী ঠিকানা*</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ উত্তরা-৬,ঢাকা।
						</p>
					</fieldset>
          {/* for present address */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>বর্তমান ঠিকানা*</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ উত্তরা-৬,ঢাকা।
						</p>
					</fieldset>
          {/* for where you brought up */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>কোথায় বড় হয়েছেন?*</legend>
						<input type='text' className='full-width' />
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

export default Step3FormContainer;
