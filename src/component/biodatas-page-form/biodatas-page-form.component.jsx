import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// MUI
import SearchIcon from '@mui/icons-material/Search';

import {
	allDistrict, allDivision, district, maritalStatus,
	mediumOfStudy, searchingFor
} from '../biodata-search/selectOptionData';

// api
import {
	httpGETBiodatas,
	httpGETBiodatasWithPagination,
} from '../../services/request';

// biodatas context
import useBiodatas from '../../hooks/useBiodatas';

// styles
import './biodatas-page-form.style.scss';

const BiodatasPageForm = () => {
	const {page, setBiodatas, count, setCount} = useBiodatas();

	const location = useLocation();

	const [searchData, setSearchData] = useState({
		searchingFor: location.state.searchData.searchingFor || 'পাত্রের বায়োডাটা',
		maritalStatus: location.state.searchData.maritalStatus || 'অবিবাহিত',
		mediumOfStudy: location.state.searchData.mediumOfStudy || 'জেনারেল',
		division: location.state.searchData.division || 'সকল বিভাগ',
		district: location.state.searchData.district || 'সকল জেলা',
		biodataNo: location.state.searchData.biodataNo || '',
	});

	const districtData = district.get(searchData?.division);

	const handleChange = (e) => {
		e.preventDefault();

		setSearchData({ ...searchData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async(e) => {
		e.preventDefault();
		
		try{
			const biodatasWithPagination = await httpGETBiodatasWithPagination(
				searchData,
				page
			);
			setBiodatas(biodatasWithPagination);
			const biodatas = await httpGETBiodatas(searchData);
			setCount(Math.ceil(biodatas.length / 12));
		} catch(err) {
			console.log(err);
		}
	}

	useEffect(() => {
		const getBiodatas = async() => {
			const biodatasWithPagination = await httpGETBiodatasWithPagination(
				searchData,
				page
			);
			setBiodatas(biodatasWithPagination);
			if (count === 10) {
				const biodatas = await httpGETBiodatas(searchData);
				setCount(Math.ceil(biodatas.length / 12));
			}
		}
		getBiodatas();
	}, [page])
	
  return (
		<div className='bg-purple p-4 biodatas-form-box'>
			<form onSubmit={handleSubmit}>
				<div className='row biodatas-form-custom-select'>
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
					<div className='col-4 col-md-5 text-align-right'>
						<label className='form-label mt-1'>{mediumOfStudy.label}</label>
					</div>
					<div className='col-8 col-md-7'>
						<select
							onChange={handleChange}
							name='mediumOfStudy'
							defaultValue={searchData?.mediumOfStudy}
							required
						>
							<option value={mediumOfStudy.selected.value}>
								{mediumOfStudy.selected.option}
							</option>
							{mediumOfStudy.options.map((item) => (
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
						<input
							name='biodataNo'
							onChange={handleChange}
							value={searchData?.biodataNo}
							type='text'
						/>
					</div>
				</div>
				<button
					type='submit'
					className='biodatas-form-search-button d-flex justify-content-center align-items-center'
				>
					<SearchIcon />
					বায়োডাটা খুঁজুন
				</button>
			</form>
		</div>
	);
}

export default BiodatasPageForm;