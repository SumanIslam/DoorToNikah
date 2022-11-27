// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import NextButton from '../common-component/next-button/next-button.component';
import SaveChangesButton from '../common-component/save-changes-button/save-changes-button.component';

// data
import { numberOfSisters, numberOfBrothers } from './data';

const Step5FormContainer = () => {
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={5} />
				<div className='form-container'>
					{/* for fathers name */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>পিতার নাম*</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							পিতার পূর্ণ নাম লিখবেন, নাম নেয়া হচ্ছে শুধুমাত্র ভেরিফিকেশনের
							জন্য। আপনার পিতার নাম বায়োডাটা পাবলিশ করার সময় প্রকাশ করা হবে না।
							অর্থাৎ আপনি এবং ওয়েবসাইট কতৃপক্ষ বাদে কেউ এই নাম দেখতে পাবে না।
						</p>
					</fieldset>
					{/* for mothers name */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>মাতার নাম*</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							মাতার পূর্ণ নাম লিখবেন, নাম নেয়া হচ্ছে শুধুমাত্র ভেরিফিকেশনের
							জন্য। আপনার মাতার নাম বায়োডাটা পাবলিশ করার সময় প্রকাশ করা হবে না।
							অর্থাৎ আপনি এবং ওয়েবসাইট কতৃপক্ষ বাদে কেউ এই নাম দেখতে পাবে না।
						</p>
					</fieldset>
					{/* for fathers occupation */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>পিতার পেশা*</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							মৃত হলে প্রথমে (মৃত) লিখার পর পেশা লিখবেন। যেমনঃ (মৃত) ব্যবসায়ী
							ছিলেন।
						</p>
					</fieldset>
					{/* for mothers occupation */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>মাতার পেশা*</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							মৃত হলে প্রথমে (মৃত) লিখার পর পেশা লিখবেন। যেমনঃ (মৃত) গৃহিনী
							ছিলেন।
						</p>
					</fieldset>
					{/* for number of sisters */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							{numberOfSisters.title}
						</legend>
						<select>
							<option defaultValue={numberOfSisters.selected}>
								{numberOfSisters.selected}
							</option>
							{numberOfSisters.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>
					{/* for number of brothers */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							{numberOfBrothers.title}
						</legend>
						<select>
							<option defaultValue={numberOfBrothers.selected}>
								{numberOfBrothers.selected}
							</option>
							{numberOfBrothers.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>
					{/* for uncles occupation */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>চাচা মামাদের পেশা</legend>
						<textarea rows={5} className='full-width' />
						<p className='guide-text'>জানাতে অনিচ্ছুক হলে ঘরটি ফাঁকা রাখুন।</p>
					</fieldset>
					{/* for family's financial and social condition */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							পরিবারের অর্থনৈতিক ও সামাজিক অবস্থা*
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

export default Step5FormContainer;
