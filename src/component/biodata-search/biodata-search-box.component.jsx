import { useState } from "react";

// MUI
import SearchIcon from '@mui/icons-material/Search';

// styles
import '../../styles/utils.scss';
import './biodata-search-box.styles.scss';

import {
	searchingFor,
	maritalStatus,
	allDivision,
	allDistrict,
	district,
} from './selectOptionData';

const BiodataSearchBox = () => {
	const [searchData, setSearchData] = useState({
		searchingFor: '',
		maritalStatus: '',
		division: '',
		district: '',
		biodataNo: '',
	});

	const districtData = district.get(searchData?.division);

	const handleChange = (e) => {
		e.preventDefault();

		setSearchData({ ...searchData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('hi');
	}
  return (
		<div className='bg-pink p-4 biodata-box'>
			<form onSubmit={handleSubmit}>
				<div className='row custom-select'>
					{/* searching for select field */}
					<div className='col-4 col-md-5 text-align-right'>
						<label className='form-label mt-1'>{searchingFor.label}</label>
					</div>
					<div className='col-8 col-md-7'>
						<select
							onChange={handleChange}
							name='searchingFor'
							defaultValue={searchData?.searchingFor}
							required
						>
							<option value={searchingFor?.selected.value}>
								{searchingFor.selected.option}
							</option>
							{searchingFor?.options.map((item) => (
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
						<select
							onChange={handleChange}
							name='maritalStatus'
							defaultValue={searchData?.maritalStatus}
							required
						>
							<option value={maritalStatus.selected.value}>
								{maritalStatus.selected.option}
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
						<select
							onChange={handleChange}
							name='division'
							defaultValue={searchData?.division}
							required
						>
							<option value={allDivision.selected.value}>
								{allDivision.selected.option}
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
								<select
									onChange={handleChange}
									name='district'
									defaultValue={searchData?.district}
									required
								>
									<option value={districtData.selected.value}>
										{districtData.selected.option}
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
								<select
									onChange={handleChange}
									name='district'
									defaultValue={searchData?.district}
									required
								>
									<option value={allDistrict.selected.value}>
										{allDistrict.selected.option}
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
						<input name="biodataNo" onChange={handleChange} value={searchData?.biodataNo} type='text' />
					</div>
				</div>
				<button
					type='submit'
					className='search-button d-flex justify-content-center align-items-center'
				>
					<SearchIcon />
					বায়োডাটা খুঁজুন
				</button>
			</form>
		</div>
	);
}

export default BiodataSearchBox;