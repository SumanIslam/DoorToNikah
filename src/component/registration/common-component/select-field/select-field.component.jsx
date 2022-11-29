import React from 'react'

const SelectField = ({title, selected, options, name, guideText, required, handleSelect}) => {
  return (
		<fieldset className='border pl-1 custom-input-container mt-1'>
			<legend className='float-none w-auto'>{title}</legend>
			<select name={name} onChange={handleSelect} required={required}>
				<option defaultValue={selected}>
					{selected}
				</option>
				{options.map((item) => (
					<option key={item} value={item}>
						{' '}
						{item}{' '}
					</option>
				))}
			</select>
		</fieldset>
	);
}

export default SelectField;