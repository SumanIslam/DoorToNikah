import { useState } from "react";

// validation
import { contactRequestValidation } from '../../services/contact-request-validation';

// react toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// api
import { httpPOSTSaveContactRequest } from '../../services/request';

// style
import "../../styles/utils.scss";
import "./contactRequest.scss";

const ContactRequestComponent = () => {
  const [contactRequestDetails, setContactRequestDetails] = useState({
		userName: '',
		userEmail: '',
		userMobileNumber: '',
		numberOfBiodata: '1',
		biodatasId: '',
		bkashNumber: '',
		bkashTransactionId: '',
		rocketNumber: '',
		rocketTransactionId: '',
		NagadNumber: '',
		NagadTransactionId: '',
	});

  const totalCost =
		contactRequestDetails.numberOfBiodata === '1'
			? '১০০'
			: contactRequestDetails.numberOfBiodata === '2'
			? '১৮০'
			: contactRequestDetails.numberOfBiodata === '3'
			? '২৩০'
			: contactRequestDetails.numberOfBiodata === '4'
			? '২৭০'
			: contactRequestDetails.numberOfBiodata === '5'
			&& '৩০০';
  
  const handleOnChange = (e) => {
    e.preventDefault();
    
    setContactRequestDetails({
			...contactRequestDetails,
			[e.target.name]: e.target.value,
		});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const msg = contactRequestValidation({...contactRequestDetails });
    console.log(msg);
    if(msg) {
      toast.error(msg)
    } else {
			try {
					const userContactRequestDetails = await httpPOSTSaveContactRequest({...contactRequestDetails, totalCost});
				toast.success('Request has sent successfully')
				console.log(userContactRequestDetails);
			}catch(err) {
				const errorMsg = err.response.data.msg;
				console.log(errorMsg);
				toast.error(errorMsg);
			}
		}
  }

  return (
		<div className='container pt-4 pb-5'>
			<div className='mlr-lg mb-5'>
				<div>
					<ToastContainer />
					<div className='contact_paragraph'>
						<p>
							বায়োডাটার অভিভাবকের মোবাইল নাম্বার পেতে নির্ধারিত টাকা পরিশোধ করতে
							হবে। অনুগ্রহ পূর্বক ফর্মটি পূরণের মাধ্যমে আপনার আবেদন সম্পন্ন
							করুন। আবেদন সম্পন্ন হলে সর্বোচ্চ ২ কর্ম দিবসের মধ্যে যোগাযোগ তথ্য
							আপনার প্রদত্ত <strong> মোবাইল নাম্বারে SMS এর মাধ্যমে </strong>{' '}
							পাঠিয়ে দেয়া হবে ইন শা আল্লাহ।
						</p>
					</div>
					<div className='container contact-request-button-container'>
						<button type='button' className='btn biodata-btn-2'>
							<a
								href='https://www.youtube.com/watch?v=ZP0RbKk2v-E&feature=youtu.be'
								target='blank'
							>
								যেভাবে আবেদন করবেন (ভিডিও)
							</a>
						</button>
					</div>
					<div className='contact-form-div'>
						<form className='contact-form' onSubmit={handleSubmit}>
							<h6>আপনার নাম</h6>
							<input
								type='text'
								name='userName'
								className='input-field'
								required
								placeholder=''
								onChange={handleOnChange}
							/>

							<h6>আপনার ই-মেইল</h6>
							<input
								type='email'
								name='userEmail'
								required
								className='input-field'
								placeholder=''
								onChange={handleOnChange}
							/>

							<h6>মোবাইল নাম্বার</h6>
							<input
								type='text'
								name='userMobileNumber'
								required
								className='input-field'
								placeholder=''
								onChange={handleOnChange}
							/>
							<h4 className='mt-4'>
								কত সংখ্যক বায়োডাটার যোগাযোগের তথ্য চাচ্ছেন?
							</h4>

							<div className='row'>
								<div className='col-sm-6'>
									<div className='card'>
										<ul className='list-group list-group-flush'>
											<li className='list-group-item'>বায়োডাটার সংখ্যা</li>
											<select
												className='form-select d-flex justify-content-center bg-purple text-white'
												aria-label='Default select example'
												name='numberOfBiodata'
												onChange={handleOnChange}
												defaultValue={1}
												required
											>
												<option value={1}>
													১
												</option>
												<option value={2}>২</option>
												<option value={3}>৩</option>
												<option value={4}>৪</option>
												<option value={5}>৫</option>
											</select>
										</ul>
									</div>
								</div>
								<div className='col-sm-6'>
									<div className='card'>
										<ul className='list-group list-group-flush'>
											<li className='list-group-item'>সর্বমোট মূল্য</li>
											<li className='list-group-item d-flex justify-content-center bg-purple text-white'>
												{totalCost} টাকা
											</li>
										</ul>
									</div>
								</div>
							</div>
							<h6 className='mt-4'>
								Biodata No (যার সাথে যোগাযোগ করতে চাচ্ছেন। একাধিক হলে কমা দিয়ে
								লিখুন।)
							</h6>
							<input
								type='text'
								className='input-field'
								placeholder='000, 000, 000...'
								name='biodatasId'
								required
								onChange={handleOnChange}
							/>
							<h4 className='mt-4'>যেকোন একটি মাধ্যমে পেমেন্ট করুন</h4>
							<div className='accordion' id='accordionExample'>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingOne'>
										<button
											className='accordion-button'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseOne'
											aria-expanded='true'
											aria-controls='collapseOne'
										>
											Bkash
										</button>
									</h2>
									<div
										id='collapseOne'
										className='accordion-collapse collapse show'
										aria-labelledby='headingOne'
										data-bs-parent='#accordionExample'
									>
										<div className='accordion-body'>
											<p>
												নিম্ন উল্লিখিত Bkash (Personal) নাম্বারে{' '}
												<span className='bg-purple text-white'>
													{totalCost} টাকা Send Money{' '}
												</span>{' '}
												করুন।
											</p>
											<p>Bkash Personal Number : 01700000000</p>
											<div className='input-group input-group-sm mb-3'>
												<span
													className='input-group-text'
													id='inputGroup-sizing-sm'
												>
													Your Bkash Number
												</span>
												<input
													type='text'
													className='form-control'
													aria-label='Sizing example input'
													aria-describedby='inputGroup-sizing-sm'
													name='bkashNumber'
													onChange={handleOnChange}
												/>
											</div>
											<div className='input-group input-group-sm mb-3'>
												<span
													className='input-group-text'
													id='inputGroup-sizing-sm'
												>
													Transaction ID
												</span>
												<input
													type='text'
													className='form-control'
													aria-label='Sizing example input'
													aria-describedby='inputGroup-sizing-sm'
													name='bkashTransactionId'
													onChange={handleOnChange}
												></input>
											</div>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingTwo'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseTwo'
											aria-expanded='false'
											aria-controls='collapseTwo'
										>
											Rocket
										</button>
									</h2>
									<div
										id='collapseTwo'
										className='accordion-collapse collapse'
										aria-labelledby='headingTwo'
										data-bs-parent='#accordionExample'
									>
										<div className='accordion-body'>
											<p>
												নিম্ন উল্লিখিত Rocket (Personal) নাম্বারে{' '}
												<span className='bg-purple text-white'>
													{totalCost} টাকা Send Money{' '}
												</span>{' '}
												করুন।
											</p>
											<p>Rocket Personal Number : 01700000000</p>
											<div className='input-group input-group-sm mb-3'>
												<span
													className='input-group-text'
													id='inputGroup-sizing-sm'
												>
													Your Rocket Number
												</span>
												<input
													type='text'
													className='form-control'
													aria-label='Sizing example input'
													aria-describedby='inputGroup-sizing-sm'
													name='rocketNumber'
													onChange={handleOnChange}
												></input>
											</div>
											<div className='input-group input-group-sm mb-3'>
												<span
													className='input-group-text'
													id='inputGroup-sizing-sm'
												>
													Transaction ID
												</span>
												<input
													type='text'
													className='form-control'
													aria-label='Sizing example input'
													aria-describedby='inputGroup-sizing-sm'
													name='rocketTransactionId'
													onChange={handleOnChange}
												></input>
											</div>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingThree'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseThree'
											aria-expanded='false'
											aria-controls='collapseThree'
										>
											Nagad
										</button>
									</h2>
									<div
										id='collapseThree'
										className='accordion-collapse collapse'
										aria-labelledby='headingThree'
										data-bs-parent='#accordionExample'
									>
										<div className='accordion-body'>
											<p>
												নিম্ন উল্লিখিত Nagad (Personal) নাম্বারে{' '}
												<span className=' text-white'>
													{totalCost} টাকা Send Money{' '}
												</span>{' '}
												করুন।
											</p>
											<p>Nagad Personal Number : 01700000000</p>
											<div className='input-group input-group-sm mb-3'>
												<span
													className='input-group-text'
													id='inputGroup-sizing-sm'
												>
													Your Nagad Number
												</span>
												<input
													type='text'
													className='form-control'
													aria-label='Sizing example input'
													aria-describedby='inputGroup-sizing-sm'
													name='NagadNumber'
													onChange={handleOnChange}
												></input>
											</div>
											<div className='input-group input-group-sm mb-3'>
												<span
													className='input-group-text'
													id='inputGroup-sizing-sm'
												>
													Transaction ID
												</span>
												<input
													type='text'
													className='form-control'
													aria-label='Sizing example input'
													aria-describedby='inputGroup-sizing-sm'
													name='NagadTransactionId'
													onChange={handleOnChange}
												></input>
											</div>
										</div>
									</div>
								</div>
							</div>
							<button type='submit' className='contact-button'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactRequestComponent;
