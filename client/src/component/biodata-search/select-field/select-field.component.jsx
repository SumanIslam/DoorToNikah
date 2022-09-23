import React from "react";

import './select-field.styles.scss';

const FormSelect = ({ labelAndOptions: { label, selected, options } }) => {
  console.log(label, selected, options);
  return (
		<div className='row custom-select'>
			<div className='col-5 text-align-right'>
				<label className='form-label mt-1'>{label}</label>
			</div>
			<div className='col-7'>
				{
					selected ? (
						<select>
							<option defaultValue={selected}>{selected}</option>
							{options.map((item) => (
								<option key={item} value={item}> {item} </option>
							))}
						</select>
					) : (
						<input type="text" />
					)
				}
			</div>
		</div>
	);
};

export default FormSelect;