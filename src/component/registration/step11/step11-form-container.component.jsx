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
				<FormContainerButtonNav current={11} />
				<div className='form-container'>
					{/* for parents consent */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>অভিভাবকের নাম্বার*</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							অবশ্যই ইংরেজীতে নাম্বার লিখবেন এভাবে 01700-000000। বিঃদ্রঃ নিজের
							নাম্বার দিলে ভেরিফিকেশনে এপ্রুভ হবে না। এই ব্যাপারে আমরা সর্বোচ্চ
							কঠোর। সব সময় খোলা থাকবে এমন নাম্বার লিখবেন। নাম্বার বন্ধ থাকার
							আশংকা থাকলে দুইটি নাম্বার লিখতে পারেন।
						</p>
					</fieldset>

					{/* for promise */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>যার নাম্বার লিখেছেন*</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							যে অভিভাবকের নাম্বার দিয়েছেন তার সাথে আপনার সম্পর্ক। এভাবে লিখবেনঃ
							বাবা
						</p>
					</fieldset>

					{/* for promise */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							বায়োডাটা গ্রহণের ই-মেইল এড্রেস*
						</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							এই ই-মেইলে অপরপক্ষ বায়োডাটার লিংক পাঠাতে পারে। তাই নির্ভুলভাবে
							লিখুন।
						</p>
					</fieldset>

					{/* for promise */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							আপনার নাম্বার (শুধুমাত্র আপনি ও কতৃপক্ষ বাদে কেউ দেখতে পাচ্ছে না)*
						</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							ভেরিফিকেশন বা অন্য যে কোনো প্রয়োজনে ওয়েবসাইট কতৃপক্ষ থেকে আপনাকে
							কল দেয়ার প্রয়োজন হতে পারে। তাই আপনার নাম্বার আমাদের কাছে রাখা
							হচ্ছে। এই নাম্বার বায়োডাটাতে প্রকাশ করা হবে না। অর্থাৎ আপনি এবং
							কতৃপক্ষ বাদে অন্য কেউ দেখতে পাবে না।
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
