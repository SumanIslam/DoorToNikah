import { useState } from 'react';

// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import SelectField from '../common-component/select-field/select-field.component';
import InputField from '../common-component/input-field/input-field.component';
import FormButtonContainer from '../common-component/form-button-container/form-button-container.component';

// toast
import { handleSuccess } from '../../../services/handleFormSuccess'
import { ToastContainer } from 'react-toastify';

// registration context
import useRegistration from '../../../hooks/useRegistration';

import {
	allDistrict,
	allDivision,
	district,
	biodataType,
	birthYear,
	bloodGroup,
	height,
	maritalStatus,
	skinColor,
	weight
} from './data';

const Step2FormContainer = () => {
	const { candidatesInfo, setCandidatesInfo } = useRegistration();

	const [generalInfo, setGeneralInfo] = useState({
		biodataType: candidatesInfo.generalInfo?.biodataType || '',
		maritalStatus: candidatesInfo.generalInfo?.maritalStatus || '',
		permanentDivision: candidatesInfo.generalInfo?.permanentDivision || '',
		permanentDistrict: candidatesInfo.generalInfo?.permanentDistrict || '',
		presentDivision: candidatesInfo.generalInfo?.presentDivision || '',
		presentDistrict: candidatesInfo.generalInfo?.presentDistrict || '',
		birthYear: candidatesInfo.generalInfo?.birthYear || {},
		skinColor: candidatesInfo.generalInfo?.skinColor || '',
		height: candidatesInfo.generalInfo?.height || '',
		weight: candidatesInfo.generalInfo?.weight || '',
		bloodGroup: candidatesInfo.generalInfo?.bloodGroup || '',
		occupation: candidatesInfo.generalInfo?.occupation || '',
		monthlyIncome: candidatesInfo.generalInfo?.monthlyIncome || '',
	});

	const [loading, setLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const permanentDistrictData = district.get(generalInfo.permanentDivision);
	const presentDistrictData = district.get(generalInfo.presentDivision);

	const handleSelect = (e) => {
		e.preventDefault();
		setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
	};
	const handleBirthYear = (e) => {
		e.preventDefault();
		const option = Array.from(e.target.options).find(
			(option) => option.selected
		).text;
		setGeneralInfo({
			...generalInfo,
			birthYear: {
				value: Number(e.target.value),
				option: option,
			},
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		// save data to registrationContext
		setCandidatesInfo({
			...candidatesInfo,
			generalInfo: { ...generalInfo },
		});

		// save data to local storage
		localStorage.setItem(
			'candidatesInfo',
			JSON.stringify({ ...candidatesInfo, generalInfo: { ...generalInfo } })
		);

		setTimeout(() => {
			setLoading(false);
			setSaved(true);
			handleSuccess('Changes Saved SuccessFully');
		}, 2000);
	};

	return (
		<div className='step-container'>
			<FormContainerNav />
			{/* success Toast */}
			<ToastContainer
				position='top-center'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>
			<div className='mlr-2'>
				<FormContainerButtonNav current={2} />
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
						{/* for biodata type */}
						<SelectField
							title={biodataType.title}
							selected={biodataType.selected}
							options={biodataType.options}
							name='biodataType'
							required={true}
							defaultValue={generalInfo.biodataType}
							handleSelect={handleSelect}
						/>

						{/* for marital status */}
						<SelectField
							title={maritalStatus.title}
							selected={maritalStatus.selected}
							options={maritalStatus.options}
							name='maritalStatus'
							required={true}
							defaultValue={generalInfo.maritalStatus}
							handleSelect={handleSelect}
						/>

						{/* for permanent address - division */}
						<SelectField
							title='স্থায়ী ঠিকানা (বিভাগ)*'
							selected={allDivision.selected}
							options={allDivision.options}
							name='permanentDivision'
							required={true}
							defaultValue={generalInfo.permanentDivision}
							handleSelect={handleSelect}
						/>

						{/* for permanent address - district */}
						{generalInfo.permanentDivision && (
							<>
								{permanentDistrictData ? (
									<SelectField
										title='স্থায়ী ঠিকানা (জেলা)*'
										selected={permanentDistrictData.selected}
										options={permanentDistrictData.options}
										name='permanentDistrict'
										required={true}
										defaultValue={generalInfo.permanentDistrict}
										handleSelect={handleSelect}
									/>
								) : (
									<SelectField
										title='স্থায়ী ঠিকানা (জেলা)*'
										selected={allDistrict.selected}
										options={allDistrict.options}
										name='permanentDistrict'
										required={true}
										defaultValue={generalInfo.permanentDistrict}
										handleSelect={handleSelect}
									/>
								)}
							</>
						)}

						{/* for permanent address - division */}
						<SelectField
							title='বর্তমান ঠিকানা (বিভাগ)*'
							selected={allDivision.selected}
							options={allDivision.options}
							name='presentDivision'
							required={true}
							defaultValue={generalInfo.presentDivision}
							handleSelect={handleSelect}
						/>

						{/* for permanent address - district */}
						{generalInfo.permanentDivision && (
							<>
								{presentDistrictData ? (
									<SelectField
										title='বর্তমান ঠিকানা (জেলা)*'
										selected={presentDistrictData.selected}
										options={presentDistrictData.options}
										name='presentDistrict'
										required={true}
										defaultValue={generalInfo.presentDistrict}
										handleSelect={handleSelect}
									/>
								) : (
									<SelectField
										title='বর্তমান ঠিকানা (জেলা)*'
										selected={allDistrict.selected}
										options={allDistrict.options}
										name='presentDistrict'
										required={true}
										defaultValue={generalInfo.presentDistrict}
										handleSelect={handleSelect}
									/>
								)}
							</>
						)}

						{/* for birth year */}
						<fieldset className='border pl-1 custom-input-container mt-1'>
							<legend className='float-none w-auto'>{birthYear.title}</legend>
							<select
								onChange={handleBirthYear}
								required
								defaultValue={`${generalInfo.birthYear.value}`}
							>
								<option value={birthYear.selected.value}>
									{birthYear.selected.option}
								</option>
								{birthYear.optionsValue.map((item) => (
									<option key={item.value} value={item.value}>
										{' '}
										{item.option}{' '}
									</option>
								))}
							</select>
							<p className='guide-text'>
								অবশ্যই সত্যটা দিবেন। সার্টিফিকেটের নয়।
							</p>
						</fieldset>

						{/* for skin color */}
						<SelectField
							title={skinColor.title}
							selected={skinColor.selected}
							options={skinColor.options}
							name='skinColor'
							required={true}
							defaultValue={generalInfo.skinColor}
							handleSelect={handleSelect}
						/>

						{/* for height */}
						<SelectField
							title={height.title}
							selected={height.selected}
							options={height.options}
							name='height'
							required={true}
							defaultValue={generalInfo.height}
							handleSelect={handleSelect}
						/>

						{/* for weight */}
						<SelectField
							title={weight.title}
							selected={weight.selected}
							options={weight.options}
							name='weight'
							required={true}
							defaultValue={generalInfo.weight}
							handleSelect={handleSelect}
						/>

						{/* for blood groups */}
						<SelectField
							title={bloodGroup.title}
							selected={bloodGroup.selected}
							options={bloodGroup.options}
							name='bloodGroup'
							required={true}
							defaultValue={generalInfo.bloodGroup}
							handleSelect={handleSelect}
						/>

						{/* for occupation */}
						<InputField
							variant='input'
							title='পেশা*'
							value={generalInfo.occupation}
							name='occupation'
							required={true}
							guideText='সর্বোচ্চ ৩ শব্দে শুধু পদবী লিখবেন। পেশা সম্পর্কে বিস্তারিত লিখার জন্য সামনে প্রশ্ন আছে।'
							handleChange={handleSelect}
						/>

						{/* for monthly income */}
						<InputField
							variant='input'
							title='মাসিক আয়'
							value={generalInfo.monthlyIncome}
							name='monthlyIncome'
							guideText='জানাতে অনিচ্ছুক হলে ঘরটি ফাঁকা রাখুন। জানাতে চাইলে এভাবে লিখবেনঃ ৩০ হাজার'
							handleChange={handleSelect}
						/>

						{/* buttons */}
						<FormButtonContainer
							nextUrl='/biodata/registration/step3'
							backUrl='/biodata/registration/step1'
							loading={loading}
							saved={saved}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Step2FormContainer;