// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import NextButton from '../common-component/next-button/next-button.component';
import SaveChangesButton from '../common-component/save-changes-button/save-changes-button.component';

const Step6FormContainer = () => {
	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={6} />
				<div className='form-container'>
					{/* for prayers */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							প্রতিদিন পাঁচ ওয়াক্ত নামাজ পড়া হয়?*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for prayers */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							নিয়মিত নামায কত সময় যাবত পড়ছেন?*
						</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							অর্থাৎ কয় বছর/মাস যাবত ৫ ওয়াক্ত নামায শুরু করেছেন।
						</p>
					</fieldset>

					{/* for mahram - nonmahram */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							মাহরাম/নন-মাহরাম মেনে চলেন কি?*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for Quran recitation */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							শুদ্ধভাবে কুরআন তিলওয়াত করতে পারেন?*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for majhhab */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							কোন মাঝহাব অনুসরণ করেন?*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for political views */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							কোনো রাজনৈতিক দর্শন থাকলে লিখুন*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for natok / serial */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							নাটক/সিনেমা/সিরিয়াল/গান এসব দেখেন বা শুনেন?*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for physical and mental problem */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							মানসিক বা শারীরিক কোনো রোগ আছে কি?*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for diner mehnot */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							দ্বীনের কোন বিশেষ মেহনতে যুক্ত আছেন?*
						</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>যেমনঃ তাবলীগ ইত্যাদি।</p>
					</fieldset>

					{/* for pirer murid */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							আপনি কি কোনো পীরের মুরিদ বা অনুসারী?*
						</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							যদি হয়ে থাকেন তাহলে পীরের নাম এবং তরিকার নাম লিখবেন।{' '}
						</p>
					</fieldset>

					{/* for mazar */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							মাজার সম্পর্কে আপনার ধারণা বা বিশ্বাস কি?*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for islami books */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							আপনার পছন্দের অন্তত ৩ টি ইসলামী বই এর নাম লিখুন*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for islami scholar */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							আপনার পছন্দের অন্তত ৩ জন আলেমের নাম লিখুন*
						</legend>
						<input type='text' className='full-width' />
					</fieldset>

					{/* for Skills in Deen */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							বিশেষ দ্বীনি বা দুনিয়াবি যোগ্যতা (যদি থাকে)
						</legend>
						<textarea rows={5} className='full-width' />
					</fieldset>

					{/* for about yourself */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							নিজের সম্পর্কে কিছু লিখুন
						</legend>
						<textarea rows={5} className='full-width' />
						<p className='guide-text'>
							নিজের পছন্দ-অপছন্দ, শখ-ইচ্ছা, দ্বীনী-দুনিয়াবী ইত্যাদি বিষয়
							বিস্তারিত লিখতে হবে। কারণ এই লেখা পড়ে পাঠক আপনার সম্পর্কে সাধারণ
							ধারণা লাভ করবে।
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

export default Step6FormContainer;
