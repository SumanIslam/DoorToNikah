import { useState } from "react";

// data
import {
	searchingFor,
	maritalStatus,
	allDivision,
	allDistrict,
	district,
} from '../selectOptionData';

import './select-field.styles.scss';

const FormSelect = () => {
	const [division, setDivision] = useState('');

	const districtData = district.get(division);

	const handleSelect = (e) => {
		e.preventDefault();

		setDivision(`${e.target.value}`)
	}

  return (
		<div className='row custom-select'>
			{/* searching for select field */}
			<div className='col-4 col-md-5 text-align-right'>
				<label className='form-label mt-1'>{searchingFor.label}</label>
			</div>
			<div className='col-8 col-md-7'>
				<select>
					<option defaultValue={searchingFor.selected}>
						{searchingFor.selected}
					</option>
					{searchingFor.options.map((item) => (
						<option key={item} value={item}>
							{' '}
							{item}{' '}
						</option>
					))}
				</select>
			</div>
			{/* marital status select field */}
			<div className='col-4 col-md-5 text-align-right'>
				<label className='form-label mt-1'>{maritalStatus.label}</label>
			</div>
			<div className='col-8 col-md-7'>
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
			</div>
			{/* division select field */}
			<div className='col-4 col-md-5 text-align-right'>
				<label className='form-label mt-1'>{allDivision.label}</label>
			</div>
			<div className='col-8 col-md-7'>
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
			</div>
			{/* district select field depending on division */}
			{districtData ? (
				<>
					<div className='col-4 col-md-5 text-align-right'>
						<label className='form-label mt-1'>জেলা</label>
					</div>
					<div className='col-8 col-md-7'>
						<select>
							<option defaultValue={districtData.selected} value={districtData.selected}>
								{districtData.selected}
							</option>
							{districtData.options.map((item) => (
								<option key={item} value={item}>
									{' '}
									{item}{' '}
								</option>
							))}
						</select>
					</div>
				</>
			) : (
				<>
					<div className='col-4 col-md-5 text-align-right'>
						<label className='form-label mt-1'>জেলা</label>
					</div>
					<div className='col-8 col-md-7'>
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
					</div>
				</>
			)}

			{/* biodata no text field */}
			<div className='col-4 col-md-5 text-align-right'>
				<label className='form-label mt-1'>বায়োডাটা নং</label>
			</div>
			<div className='col-8 col-md-7'>
				<input type='text' />
			</div>
		</div>
	);
};

export default FormSelect;