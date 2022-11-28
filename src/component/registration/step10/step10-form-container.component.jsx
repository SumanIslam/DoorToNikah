// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import NextButton from '../common-component/next-button/next-button.component';
import SaveChangesButton from '../common-component/save-changes-button/save-changes-button.component';

// data
import { bool } from './data';

const Step10FormContainer = () => {
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={10} />
				<div className='form-container'>
					{/* for parents consent */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							OrdhekDeen.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন তা অভিভাবক জানেন?*
						</legend>
						<select>
							<option defaultValue={bool.selected}>{bool.selected}</option>
							{bool.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>

					{/* for promise */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							আল্লাহ'র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিচ্ছেন সব সত্য?*
						</legend>
						<select>
							<option defaultValue={bool.selected}>{bool.selected}</option>
							{bool.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>

					{/* for promise */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							কোনো মিথ্যা তথ্য দিয়ে থাকলে তার দুনিয়াবী ও আখিরাতের দায়ভার
							ওয়েবসাইট কর্তৃপক্ষ নিবে না। আপনি কি রাজি?*
						</legend>
						<select>
							<option defaultValue={bool.selected}>{bool.selected}</option>
							{bool.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
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

export default Step10FormContainer;
