import { useState } from 'react';

// component
import FormContainerButtonNav from '../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../common-component/form-container-nav/form-container-nav.component';
import NextButton from '../common-component/next-button/next-button.component';
import SaveChangesButton from '../common-component/save-changes-button/save-changes-button.component';
import SelectField from '../common-component/select-field/select-field.component';
import InputField from '../common-component/input-field/input-field.component'

// data
import { allDistrict, allDivision, district } from '../../biodata-search/selectOptionData';

import {
	biodataType,
	birthYear,
	bloodGroup,
	height,
	maritalStatus,
	skinColor,
	weight
} from './data';

const Step2FormContainer = () => {
	const [generalInfo, setGeneralInfo] = useState({
		biodataType: 'সকল বায়োডাটা',
		maritalStatus: 'সকল',
		permanentDivision: 'সকল বিভাগ',
		permanentDistrict: 'সকল জেলা',
		presentDivision: 'সকল বিভাগ',
		presentDistrict: 'সকল জেলা',
		birthYear: {},
		skinColor: 'কালো',
		height: '',
		weight: '',
		bloodGroup: '',
		occupation: '',
		monthlyIncome: '',
	});

	const permanentDistrictData = district.get(generalInfo.permanentDivision);
	const presentDistrictData = district.get(generalInfo.presentDivision);

	const handleSelect = (e) => {
		e.preventDefault();
		setGeneralInfo({...generalInfo, [e.target.name]: e.target.value})
	}
	const handleBirthYear = (e) => {
		e.preventDefault();
		const option = Array.from(e.target.options).find(option => option.selected).text
		setGeneralInfo({...generalInfo, birthYear: {
			value: e.target.value,
			option: option,
		}})
	}

	return (
		<div className='step-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={2} />
				<div className='form-container'>
					{/* for biodata type */}
					<SelectField
						title={biodataType.title}
						selected={biodataType.selected}
						options={biodataType.options}
						name='biodataType'
						handleSelect={handleSelect}
					/>

					{/* for marital status */}
					<SelectField
						title={maritalStatus.title}
						selected={maritalStatus.selected}
						options={maritalStatus.options}
						name='maritalStatus'
						handleSelect={handleSelect}
					/>

					{/* for permanent address - division */}
					<SelectField
						title='স্থায়ী ঠিকানা (বিভাগ)*'
						selected={allDivision.selected}
						options={allDivision.options}
						name='permanentDivision'
						handleSelect={handleSelect}
					/>

					{/* for permanent address - district */}
					{permanentDistrictData ? (
						<SelectField
							title='স্থায়ী ঠিকানা (জেলা)*'
							selected={permanentDistrictData.selected}
							options={permanentDistrictData.options}
							name='permanentDistrict'
							handleSelect={handleSelect}
						/>
					) : (
						<SelectField
							title='স্থায়ী ঠিকানা (জেলা)*'
							selected={allDistrict.selected}
							options={allDistrict.options}
							name='permanentDistrict'
							handleSelect={handleSelect}
						/>
					)}

					{/* for permanent address - division */}
					<SelectField
						title='বর্তমান ঠিকানা (বিভাগ)*'
						selected={allDivision.selected}
						options={allDivision.options}
						name='presentDivision'
						handleSelect={handleSelect}
					/>

					{/* for permanent address - district */}
					{presentDistrictData ? (
						<SelectField
							title='বর্তমান ঠিকানা (জেলা)*'
							selected={presentDistrictData.selected}
							options={presentDistrictData.options}
							name='presentDistrict'
							handleSelect={handleSelect}
						/>
					) : (
						<SelectField
							title='বর্তমান ঠিকানা (জেলা)*'
							selected={allDistrict.selected}
							options={allDistrict.options}
							name='presentDistrict'
							handleSelect={handleSelect}
						/>
					)}

					{/* for birth year */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>{birthYear.title}</legend>
						<select onChange={handleBirthYear}>
							<option defaultValue={birthYear.selected}>
								{birthYear.selected}
							</option>
							{birthYear.optionsValue.map((item) => (
								<option key={item.value} value={item.value}>
									{' '}
									{item.option}{' '}
								</option>
							))}
						</select>
						<p className='guide-text'>অবশ্যই সত্যটা দিবেন। সার্টিফিকেটের নয়।</p>
					</fieldset>

					{/* for skin color */}
					<SelectField
						title={skinColor.title}
						selected={skinColor.selected}
						options={skinColor.options}
						name='skinColor'
						handleSelect={handleSelect}
					/>

					{/* for height */}
					<SelectField
						title={height.title}
						selected={height.selected}
						options={height.options}
						name='height'
						handleSelect={handleSelect}
					/>

					{/* for weight */}
					<SelectField
						title={weight.title}
						selected={weight.selected}
						options={weight.options}
						name='weight'
						handleSelect={handleSelect}
					/>

					{/* for blood groups */}
					<SelectField
						title={bloodGroup.title}
						selected={bloodGroup.selected}
						options={bloodGroup.options}
						name='bloodGroup'
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

export default Step2FormContainer;