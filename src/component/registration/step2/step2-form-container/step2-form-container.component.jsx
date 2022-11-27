import { useState } from 'react';

// styles
import './step2-form-container.style.scss';

// component
import FormContainerButtonNav from '../../common-component/form-container-button-nav/form-container-button-nav.component';
import FormContainerNav from '../../common-component/form-container-nav/form-container-nav.component';
import RegistrationFormSelect from '../../common-component/form-select/form-select.component';
import NextButton from '../../common-component/next-button/next-button.component';
import SaveChangesButton from '../../common-component/save-changes-button/save-changes-button.component';

// data
import { district, allDivision, allDistrict } from '../../../biodata-search/selectOptionData';
import { biodataType, maritalStatus, birthYear, skinColor, height, weight, bloodGroup } from './data';

const Step2FormContainer = () => {
	const [permanentDivision, setPermanentDivision] = useState('');
	const [presentDivision, setPresentDivision] = useState('');

	const permanentDistrictData = district.get(permanentDivision);
	const presentDistrictData = district.get(presentDivision);

	const handleSelect = (e) => {
		e.preventDefault();
		setPermanentDivision(e.target.value);
	};

	const handleSelect2 = (e) => {
		e.preventDefault();
		setPresentDivision(e.target.value);
	}

	return (
		<div className='step2-container'>
			<FormContainerNav />
			<div className='mlr-2'>
				<FormContainerButtonNav current={2} />
				<div className='form-container'>
					{/* for biodata type */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>{biodataType.title}</legend>
						<select>
							<option defaultValue={biodataType.selected}>
								{biodataType.selected}
							</option>
							{biodataType.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>

					{/* for marital status */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>{maritalStatus.title}</legend>
						<select>
							<option defaultValue={maritalStatus.selected}>
								{maritalStatus.selected}
							</option>
							{maritalStatus.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>

					{/* for permanent address - division */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							স্থায়ী ঠিকানা (বিভাগ)*
						</legend>
						<select onChange={handleSelect}>
							<option defaultValue={allDivision.selected}>
								{allDivision.selected}
							</option>
							{allDivision.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>

					{/* for permanent address - district */}
					{permanentDistrictData ? (
						<fieldset className='border pl-1 custom-input-container mt-1'>
							<legend className='float-none w-auto'>
								স্থায়ী ঠিকানা (জেলা)*
							</legend>
							<select>
								<option defaultValue={permanentDistrictData.selected}>
									{permanentDistrictData.selected}
								</option>
								{permanentDistrictData.options.map((item) => (
									<option key={item} value={item}>
										{' '}
										{item}{' '}
									</option>
								))}
							</select>
						</fieldset>
					) : (
						<fieldset className='border pl-1 custom-input-container mt-1'>
							<legend className='float-none w-auto'>
								স্থায়ী ঠিকানা (জেলা)*
							</legend>
							<select>
								<option defaultValue={allDistrict.selected}>
									{allDistrict.selected}
								</option>
								{allDistrict.options.map((item) => (
									<option key={item} value={item}>
										{' '}
										{item}{' '}
									</option>
								))}
							</select>
						</fieldset>
					)}

					{/* for permanent address - division */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>
							বর্তমান ঠিকানা (বিভাগ)*
						</legend>
						<select onChange={handleSelect2}>
							<option defaultValue={allDivision.selected}>
								{allDivision.selected}
							</option>
							{allDivision.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>

					{/* for permanent address - district */}
					{presentDistrictData ? (
						<fieldset className='border pl-1 custom-input-container mt-1'>
							<legend className='float-none w-auto'>
								বর্তমান ঠিকানা (জেলা)*
							</legend>
							<select>
								<option defaultValue={presentDistrictData.selected}>
									{presentDistrictData.selected}
								</option>
								{presentDistrictData.options.map((item) => (
									<option key={item} value={item}>
										{' '}
										{item}{' '}
									</option>
								))}
							</select>
						</fieldset>
					) : (
						<fieldset className='border pl-1 custom-input-container mt-1'>
							<legend className='float-none w-auto'>
								বর্তমান ঠিকানা (জেলা)*
							</legend>
							<select>
								<option defaultValue={allDistrict.selected}>
									{allDistrict.selected}
								</option>
								{allDistrict.options.map((item) => (
									<option key={item} value={item}>
										{' '}
										{item}{' '}
									</option>
								))}
							</select>
						</fieldset>
					)}

					{/* for birth year */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>{birthYear.title}</legend>
						<select>
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
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>{skinColor.title}</legend>
						<select>
							<option defaultValue={skinColor.selected}>
								{skinColor.selected}
							</option>
							{skinColor.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>

					{/* for height */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>{height.title}</legend>
						<select>
							<option defaultValue={height.selected}>{height.selected}</option>
							{height.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>

					{/* for weight */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>{weight.title}</legend>
						<select>
							<option defaultValue={weight.selected}>{weight.selected}</option>
							{weight.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>

					{/* for blood groups */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>{bloodGroup.title}</legend>
						<select>
							<option defaultValue={bloodGroup.selected}>
								{bloodGroup.selected}
							</option>
							{bloodGroup.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</fieldset>

					{/* for occupation */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>পেশা*</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							সর্বোচ্চ ৩ শব্দে শুধু পদবী লিখবেন। পেশা সম্পর্কে বিস্তারিত লিখার
							জন্য সামনে প্রশ্ন আছে।{' '}
						</p>
					</fieldset>

					{/* for monthly income */}
					<fieldset className='border pl-1 custom-input-container mt-1'>
						<legend className='float-none w-auto'>মাসিক আয়</legend>
						<input type='text' className='full-width' />
						<p className='guide-text'>
							জানাতে অনিচ্ছুক হলে ঘরটি ফাঁকা রাখুন। জানাতে চাইলে এভাবে লিখবেনঃ
							৩০ হাজার
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

export default Step2FormContainer;
