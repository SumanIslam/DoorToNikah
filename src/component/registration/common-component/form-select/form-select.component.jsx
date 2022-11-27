import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// styles
import './form-select.style.scss';
import '../../../../styles/utils.scss';

const RegistrationFormSelect = ({ title, options, selected, dropdown, guideText, placeholder, handleSelect }) => {
  return (
		<>
			<fieldset className='border pl-1 custom-input-container'>
				<legend className='float-none w-auto'>{title}</legend>
				<div className='mt-1'>
					{dropdown ? (
						<select onChange={handleSelect} className='full-width'>
							<option value={selected}>{selected}</option>
							{options && options.map((item) => (
								<option key={uuidv4()} value={item}>
									{item}
								</option>
							))}
						</select>
					) : (
						<input
							type='text'
							className='full-width'
							placeholder={placeholder}
						/>
					)}
					{guideText && <p className='guide-text'>{guideText}</p>}
				</div>
			</fieldset>
		</>
	);
}

export default RegistrationFormSelect;