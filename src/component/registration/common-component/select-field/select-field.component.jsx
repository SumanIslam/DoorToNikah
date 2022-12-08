import React from 'react'

const SelectField = ({
	title,
	selected,
	options,
	name,
	guideText,
	required,
	handleSelect,
	defaultValue,
}) => {
	return (
		<fieldset className='border pl-1 custom-input-container mt-1'>
			<legend className='float-none w-auto'>{title}</legend>
			<select
				name={name}
				onChange={handleSelect}
				required={required}
				defaultValue={defaultValue}
			>
				<option value={selected.value}>{selected.option}</option>
				{options.map((item) => (
					<option key={item} value={item}>
						{' '}
						{item}{' '}
					</option>
				))}
			</select>
			{guideText && <p className='guide-text'>{guideText}</p>}
		</fieldset>
	);
};

export default SelectField;