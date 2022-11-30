// style
import '../../styles/utils.scss';
import "./contact.scss";

const Contact = () => {
    return (
			<div className='container pt-4 pb-5'>
				<div className='mlr-lg mb-5'>
					<div>
						<div className='contact_paragraph'>
							<p className='contact-para'>
								আপনার যে কোন জিজ্ঞাসা নিম্নোক্ত ফর্মে পূরণ করে আমাদের কাছে
								পাঠিয়ে দিন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো ইন শা আল্লাহ।
							</p>
						</div>
						<div className='contact-form-div'>
							<form className='contact-form'>
								<h4>নাম</h4>
								<input type='text' className='input-field' placeholder='' />

								<h4>ইমেইল</h4>
								<input type='email' className='input-field' placeholder='' />

								<h4>বিষয়</h4>
								<input type='text' className='input-field' placeholder='' />

								<h4>আপনার বার্তা</h4>
								<textarea
									name='text'
									className='input-field textarea'
									placeholder=''
								></textarea>
								<button className='contact-button'>পাঠান</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
  }
  
  export default Contact;